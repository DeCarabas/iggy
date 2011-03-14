namespace cbimporter
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Windows.Forms;
    using System.Xml.Linq;
    using System.IO;
    using cbimporter.Rules;

    public partial class MainForm : Form
    {
        readonly Stack<RuleElement> history = new Stack<RuleElement>();
        static readonly object dummyMarker = new object();
        RuleIndex currentDocument;

        public MainForm(string initialFile)
        {
            InitializeComponent();

            if (initialFile != null) { LoadDocumentAsync(initialFile); }
        }

        void FillTypeNodeNode(TreeNode treeNode, Identifier type)
        {
            foreach (RuleElement element in this.currentDocument.GetElementsByType(type).OrderBy(e => e.Name.ToString()))
            {
                treeNode.Nodes.Add(new TreeNode
                {
                    Text = element.Name.ToString(),
                    Tag = element,
                });
            }
        }

        void LoadDocumentAsync(string fileName)
        {
            var progress = new ProgressDialog
            {
                Title = "Loading file",
                TaskFunction = (p) => StartLoadFile(fileName, p),
            };
            if (progress.ShowDialog() == DialogResult.OK)
            {
                var task = (Task<RuleIndex>)progress.Task;
                SetupDocument(task.Result);
            }
        }

        void OnConvert(object sender, EventArgs e)
        {
            var progress = new ProgressDialog
            {
                Title = "Loading file",
                TaskFunction = (p) => Task.Factory.StartNew(() =>
                    {
                        string newPath = Path.ChangeExtension(this.currentDocument.Name, ".js");
                        using (FileStream stream = File.Open(newPath, FileMode.Create))
                        {
                            using (var writer = new StreamWriter(stream))
                            {
                                Converter.Convert(this.currentDocument, writer, p);
                            }
                        }                    
                    })
            };
            progress.ShowDialog();
        }

        void OnExit(object sender, EventArgs e)
        {
            Close();
        }

        void OnGotoDef(object sender, EventArgs e)
        {
            var dialog = new GoToDefinition() { ID = this.xmlText.SelectedText };
            if (dialog.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {
                Identifier id = Identifier.Get(dialog.ID);
                RuleElement elem;
                if (this.currentDocument.TryGetElement(id, out elem))
                {
                    SelectNode(elem);
                }
                else
                {
                    elem = this.currentDocument.GetElementsByName(id).FirstOrDefault();
                    if (elem != null) { SelectNode(elem); }
                }
            }
        }

        void OnNodeExpanding(object sender, TreeViewCancelEventArgs e)
        {
            if (e.Node.Nodes.Count == 1 && e.Node.Nodes[0].Tag == dummyMarker)
            {
                e.Node.Nodes.Clear();

                var typeNode = e.Node.Tag as Identifier;
                if (typeNode != null)
                {
                    FillTypeNodeNode(e.Node, typeNode);
                }
            }
        }

        void OnOpen(object sender, EventArgs e)
        {
            var ofd = new OpenFileDialog { Filter = "XML Files (*.xml)|*.xml|All Files (*.*)|*.*" };
            if (ofd.ShowDialog() == DialogResult.OK)
            {
                LoadDocumentAsync(ofd.FileName);
            }
        }

        void OnSelectionChanged(object sender, TreeViewEventArgs e)
        {
            var element = e.Node.Tag as RuleElement;
            if (element != null)
            {
                this.history.Push(element);
                this.xmlText.Text = element.Xml.ToString();
                this.igorText.Text = Converter.ConvertElement(this.currentDocument, element);
            }
        }

        void SelectNode(RuleElement element)
        {
            TreeNode node = this.theTree.Nodes.Cast<TreeNode>().Single(tn => tn.Tag == element.Type);
            node.Expand();
            this.theTree.SelectedNode = node.Nodes.Cast<TreeNode>().Single(tn => tn.Tag == element);
        }

        void SetupDocument(RuleIndex document)
        {
            this.currentDocument = document;
            Text = this.currentDocument.Name;

            this.theTree.BeginUpdate();
            this.theTree.Nodes.Clear();

            
            foreach (IGrouping<Identifier, RuleElement> g in this.currentDocument.Elements.OrderBy(e => e.Type.ToString()).GroupBy(e => e.Type))
            {
                Identifier type = g.Key;
                this.theTree.Nodes.Add(new TreeNode
                {
                    Text = type.ToString() + " [" + g.Count() + "]",
                    Tag = type,
                    Nodes = {
                        new TreeNode { Text = "", Tag = dummyMarker }
                    }
                });
            }
            this.theTree.EndUpdate();
        }

        static Task<RuleIndex> StartLoadFile(string fileName, ProgressDialog dialog)
        {
            return Task.Factory.StartNew(() =>
            {
                dialog.SetDescription("Loading XML file...");
                dialog.SetProgress(0, -1);

                XDocument document = XDocument.Load(fileName);

                return RuleIndex.Load(fileName, document, dialog);
            });
        }

        protected override void WndProc(ref Message m)
        {
            if (m.Msg == 0x319)   // WM_APPCOMMAND message
            {
                // extract cmd from LPARAM (as GET_APPCOMMAND_LPARAM macro does)
                int cmd = (int)((uint)m.LParam >> 16 & ~0xf000);
                switch (cmd)
                {
                    case 1:  // APPCOMMAND_BROWSER_BACKWARD
                        if (this.history.Count > 0)
                        {
                            RuleElement element = this.history.Pop();
                            SelectNode(element);
                            this.history.Pop(); // Undo push done by selectnode
                        }
                        break;
                }
            }
            base.WndProc(ref m);
        }
    }
}
