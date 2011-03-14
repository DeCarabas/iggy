namespace cbimporter.Rules
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Xml.Linq;

    public sealed class RuleIndex
    {        
        readonly Dictionary<Identifier, RuleElement> elements = new Dictionary<Identifier, RuleElement>();
        ILookup<Identifier, RuleElement> elementsByName;
        ILookup<Identifier, RuleElement> elementsByFullName;
        readonly string name;

        RuleIndex()
        {
            this.name = "untitled";
        }

        RuleIndex(string fileName)
            : this(fileName, XDocument.Load(fileName))
        {
        }

        RuleIndex(string fileName, XDocument document)
            : this(fileName, document, null)
        {
        }

        RuleIndex(string fileName, XDocument document, ProgressDialog dialog)
        {
            this.name = fileName;
            if (dialog != null) { dialog.SetDescription("Building elements..."); }

            int max = document.Root.Elements().Count();
            int current = 0;

            foreach (XElement element in document.Root.Elements())
            {
                if (dialog != null) { dialog.SetProgress(current++, max); }
                RuleElement re = new RuleElement(element);
                this.elements.Add(re.Id, re);
            }

            current = 0;
            if (dialog != null) { dialog.SetDescription("Binding categories..."); }
            foreach (RuleElement element in this.elements.Values) 
            {
                if (dialog != null) { dialog.SetProgress(current++, this.elements.Count); }
                element.BindCategories(this); 
            }

            current = 0;
            if (dialog != null) { dialog.SetDescription("Binding rules..."); }
            foreach (RuleElement element in this.elements.Values)
            {
                if (dialog != null) { dialog.SetProgress(current++, this.elements.Count); }
                element.BindRules(this);
            }

            if (dialog != null) { dialog.SetDescription("Reticulating splines..."); }
            this.elementsByName = this.elements.Values.ToLookup(e => e.Name);
            this.elementsByFullName = this.elements.Values.ToLookup(e => e.FullName);
        }

        public string Name { get { return this.name; } }

        public ICollection<RuleElement> Elements
        {
            get { return this.elements.Values; }
        }

        public RuleElement GetElement(Identifier type, Identifier name)
        {
            // TODO: Accelerate?
            return this.elementsByName[name].Single(e => e.Type == type);
        }

        public RuleElement GetElement(Identifier id)
        {
            return this.elements[id];
        }

        public IEnumerable<RuleElement> GetElementsByName(Identifier name)
        {
            return this.elementsByName[name].Concat(this.elementsByFullName[name]);
        }

        public IEnumerable<RuleElement> GetElementsByType(Identifier type)
        {
            return this.elements.Values.Where(r => r.Type == type);
        }

        public static RuleIndex Load(string fileName)
        {
            return new RuleIndex(fileName);
        }

        public static RuleIndex Load(string fileName, XDocument document)
        {
            return new RuleIndex(fileName, document);
        }

        public static RuleIndex Load(string fileName, XDocument document, ProgressDialog dialog)
        {
            return new RuleIndex(fileName, document, dialog);
        }

        public static RuleIndex New()
        {
            return new RuleIndex();
        }

        public bool TryGetElement(Identifier id, out RuleElement element)
        {
            return this.elements.TryGetValue(id, out element);
        }

        public bool TryGetElement(Identifier type, Identifier name, out RuleElement element)
        {
            // TODO: Accelerate?
            element = this.elementsByName[name].SingleOrDefault(e => e.Type == type);
            return element != null;
        }
    }
}
