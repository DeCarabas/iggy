namespace cbimporter
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Data;
    using System.Drawing;
    using System.Linq;
    using System.Text;
    using System.Windows.Forms;
    using System.Threading.Tasks;


    public partial class ProgressDialog : Form
    {
        Task task;        

        public ProgressDialog()
        {
            InitializeComponent();
            Description = "";
        }
       
        public Task Task
        {
            get { return this.task; }
        }

        public Func<ProgressDialog, Task> TaskFunction { get; set; }

        public string Title 
        {
            get { return this.Text; }
            set { this.Text = value; }
        }

        public string Description
        {
            get { return this.label.Text; }
            set { this.label.Text = value; }
        }

        protected override void OnActivated(EventArgs e)
        {            
            this.task = TaskFunction(this);
            this.task.ContinueWith(OnTaskComplete, TaskScheduler.FromCurrentSynchronizationContext());

            base.OnActivated(e);
        }

        void OnTaskComplete(Task task)
        {
            switch(task.Status)
            {
                case TaskStatus.Canceled:
                    this.DialogResult = System.Windows.Forms.DialogResult.Cancel;
                    break;

                case TaskStatus.Faulted:
                    this.DialogResult = System.Windows.Forms.DialogResult.Abort;
                    break;

                case TaskStatus.RanToCompletion:
                    this.DialogResult = System.Windows.Forms.DialogResult.OK;
                    break;
            }

            Close();
        }

        public void SetDescription(string description)
        {
            Invoke(new Action<string>(SetDescriptionInternal), description);
        }

        void SetDescriptionInternal(string description)
        {
            this.label.Text = description;
        }

        public void SetProgress(int current, int max)
        {
            Invoke(new Action<int, int>(SetProgressInternal), current, max);
        }

        void SetProgressInternal(int current, int max)
        {
            if (max < 0)
            {
                this.progressBar.Style = ProgressBarStyle.Marquee;
            }
            else
            {
                if (this.progressBar.Style != ProgressBarStyle.Blocks)
                {
                    this.progressBar.Style = ProgressBarStyle.Blocks;
                }

                this.progressBar.Value = current;
                if (this.progressBar.Maximum != max)
                {
                    this.progressBar.Maximum = max;
                }
            }
        }
    }
}
