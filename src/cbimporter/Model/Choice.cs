namespace cbimporter.Model
{
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Linq;
    using System.Xml.Linq;
    using System;
    using System.Diagnostics;
    using cbimporter.Rules;
    using System.Collections.ObjectModel;

    public class Choice : INotifyPropertyChanged
    {
        readonly Character character;
        readonly ObservableCollection<RuleElement> options;
        readonly SelectRule rule;
        RuleElement selection;

        public Choice(SelectRule rule, Character character)
        {
            this.rule = rule;
            this.character = character;
            this.options = new ObservableCollection<RuleElement>();

            FillItems();
            if (this.rule.Filter != null)
            {
                this.rule.Filter.FilterChanged += OnFilterChanged;
            }
        }

        public string Description
        {
            get { return this.rule.Type.ToString(); }
        }
        public IList<RuleElement> Options { get { return this.options; } }
        public SelectRule Rule { get { return this.rule; } }
        public RuleElement Selection 
        {
            get { return this.selection; }
            set
            {
                if (value != this.selection)
                {
                    if (this.selection != null) { this.character.Revoke(this.selection); }
                    this.selection = value;
                    if (this.selection != null) { this.character.Grant(this.selection); }
                    Notify("Selection");
                }
            }
        }

        public event PropertyChangedEventHandler PropertyChanged;

        void FillItems()
        {
            IEnumerable<RuleElement> items = this.rule.Index.GetElementsByType(this.rule.Type);
            if (this.rule.Filter != null)
            {
                items = this.rule.Filter.Filter(items);
            }

            this.options.Clear();
            foreach (RuleElement element in items)
            {
                this.options.Add(element);
            }
        }

        void Notify(string property)
        {
            if (PropertyChanged != null) { PropertyChanged(this, new PropertyChangedEventArgs(property)); }
        }

        void OnFilterChanged(object sender, EventArgs args)
        {
            FillItems();
        }
    }
}
