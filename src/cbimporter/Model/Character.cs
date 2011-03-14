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

    public class Character : INotifyPropertyChanged
    {
        readonly Inventory inventory = new Inventory();
        readonly ObservableCollection<Choice> choices = new ObservableCollection<Choice>();
        RuleElement @class;
        int level;
        readonly Dictionary<RuleElement, int> grants = new Dictionary<RuleElement, int>();
        readonly AbilityScores scores = new AbilityScores();
        readonly ObservableCollection<Stat> stats = new ObservableCollection<Stat>();
        readonly Dictionary<string, Stat> statDictionary = new Dictionary<string, Stat>();
        readonly Dictionary<string, string> textStrings = new Dictionary<string, string>();

        public AbilityScores AbilityScores { get { return this.scores; } }

        public RuleElement Class { get { return this.@class; } }

        public IList<Choice> Choices { get { return this.choices; } }

        public Inventory Inventory { get { return this.inventory; } }

        public ICollection<RuleElement> Grants { get { return this.grants.Keys; } }

        public int Level { get { return this.level; } }

        public IList<Stat> Stats { get { return this.stats; } }

        public Dictionary<string, string> TextStrings { get { return this.textStrings; } }

        public event PropertyChangedEventHandler PropertyChanged;

        public void Alias(string name, string alias)
        {
            this.statDictionary[alias] = GetStat(name);
            Notify("Stats");
        }

        public Stat GetStat(string name)
        {
            Stat stat;
            if (!statDictionary.TryGetValue(name, out stat))
            {
                stat = new Stat { Name = name };
                statDictionary.Add(name, stat);
                this.stats.Add(stat);
            }

            return stat;
        }
       
        public void Grant(RuleElement element)
        {
            int refs;
            if (this.grants.TryGetValue(element, out refs))
            {
                this.grants[element] = refs + 1;
            }
            else
            {
                this.grants.Add(element, 1);
                element.Apply(this);
                MaybeSetInternalProperty(element, element.Type);
            }
        }

        void MaybeSetInternalProperty(RuleElement element, Identifier type)
        {
            if (type == Identifier.Class)
            {
                this.@class = element;
                Notify("Class");
            }
            else if (type == Identifier.Level)
            {
                int newLevel = 
                    this.grants.Keys
                        .Where(re => re.Type == Identifier.Level)
                        .Max(re => Int32.Parse(re.Name.ToString()));
                if (newLevel != this.level)
                {
                    this.level = newLevel;
                    Notify("Level");
                }
            }
        }
        
        void Notify(string property)
        {
            if (PropertyChanged != null)
            {
                PropertyChanged(this, new PropertyChangedEventArgs(property));
            }
        }

        public void Revoke(RuleElement element)
        {
            int refs;
            if (this.grants.TryGetValue(element, out refs))
            {
                refs = refs - 1;
                if (refs == 0)
                {
                    MaybeSetInternalProperty(null, element.Type);
                    this.grants.Remove(element);
                    element.Revoke(this);
                }
                else
                {
                    this.grants[element] = refs;
                }
            }
        }
    }
}
