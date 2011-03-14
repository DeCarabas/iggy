using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace cbimporter
{
    public partial class GoToDefinition : Form
    {
        public GoToDefinition()
        {
            InitializeComponent();

            this.elementID.Text = ID;
        }

        public string ID { get; set; }

        private void okButton_Click(object sender, EventArgs e)
        {
            ID = this.elementID.Text;
            DialogResult = System.Windows.Forms.DialogResult.OK;
        }

        private void cancelButton_Click(object sender, EventArgs e)
        {
            DialogResult = System.Windows.Forms.DialogResult.Cancel;
        }
    }
}
