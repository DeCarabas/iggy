namespace cbimporter.Model
{
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Linq;
    using System.Xml.Linq;
    using System;
    using System.Diagnostics;
    using cbimporter.Rules;

    public class Stat : INotifyPropertyChanged
    {
        readonly HashSet<StatAddRule> additions = new HashSet<StatAddRule>();
        int? cache;
        readonly PropertyChangedEventHandler onModifierChanged;
        string name;

        public Stat()
        {
            this.onModifierChanged = new PropertyChangedEventHandler(OnModifierChanged);
        }

        public string Name
        {
            get { return this.name; }
            set { this.name = value; Notify("Name"); }
        }

        public int Value
        {
            get 
            {
                if (this.cache == null) 
                {
                    this.cache = ComputeResult();
                }
                return this.cache.Value; 
            }
        }

        public event PropertyChangedEventHandler PropertyChanged;

        public void AddModifier(StatAddRule modifier)
        {
            if (this.additions.Add(modifier)) 
            {
                modifier.PropertyChanged += this.onModifierChanged;
                Notify("Value"); 
            }
        }

        int ComputeResult()
        {
            int result = 0;
            Dictionary<Identifier, StatAddRule> maxRules = null;
            foreach (StatAddRule rule in this.additions)
            {
                if (!rule.Applies) { continue; }
                if (rule.Condition != null) { continue; }

                if (rule.Type == null)
                {
                    result += rule.Value;
                }
                else
                {
                    if (maxRules == null) { maxRules = new Dictionary<Identifier, StatAddRule>(); }
                    StatAddRule previousRule;
                    if (maxRules.TryGetValue(rule.Type, out previousRule))
                    {
                        if (rule.Value > previousRule.Value) { maxRules[rule.Type] = rule; }
                    }
                    else
                    {
                        maxRules.Add(rule.Type, rule);
                    }
                }
            }

            if (maxRules != null)
            {
                foreach (StatAddRule rule in maxRules.Values) { result += rule.Value; }
            }

            // NOTE: The Value property from a StatAdd has been multiplied by 2 to account for the existence of 
            //       half-point modifiers. We must divide by 2 here to appropriately deal with it.
            //
            return result / 2;
        }

        void OnModifierChanged(object sender, PropertyChangedEventArgs args)
        {
            if (args.PropertyName == "Value" || args.PropertyName == "Applies")
            {
                Notify("Value");
            }
        }

        void Notify(string property)
        {
            if (property == "Value") { this.cache = null; }
            if (PropertyChanged != null)
            {
                PropertyChanged(this, new PropertyChangedEventArgs(property));
            }
        }

        public void RemoveModifier(StatAddRule modifier)
        {
            if (this.additions.Remove(modifier)) 
            {
                modifier.PropertyChanged -= this.onModifierChanged;
                Notify("Value"); 
            }
        }
    }
}
