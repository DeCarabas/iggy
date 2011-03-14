namespace cbimporter
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Windows.Forms;
    using System.IO;

    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main(string[] args)
        {
            string fileName = null;
            if (args.Length > 0)
            {
                fileName = args[0];
            }
            else if (File.Exists("combined.dnd40.xml"))
            {
                fileName = "combined.dnd40.xml";
            }

            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new MainForm(fileName));
        }
    }
}
