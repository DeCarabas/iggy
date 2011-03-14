namespace cbimporter.Model
{
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Linq;
    using System.Xml.Linq;
    using System;
    using System.Diagnostics;

    // These are special.
    // Everything else is not.
    //
    public sealed class AbilityScores : INotifyPropertyChanged
    {
        int strength;
        int constitution;
        int dexterity;
        int intelligence;
        int wisdom;
        int charisma;

        public int Strength
        {
            get { return this.strength; }
            set { this.strength = value; Notify("Strength"); }
        }

        public int Constitution
        {
            get { return this.constitution; }
            set { this.constitution = value; Notify("Constitution"); }
        }

        public int Dexterity
        {
            get { return this.dexterity; }
            set { this.dexterity = value; Notify("Dexterity"); }
        }

        public int Intelligence
        {
            get { return this.intelligence; }
            set { this.intelligence = value; Notify("Intelligence"); }
        }

        public int Wisdom
        {
            get { return this.wisdom; }
            set { this.wisdom = value; Notify("Wisdom"); }
        }

        public int Charisma
        {
            get { return this.charisma; }
            set { this.charisma = value; Notify("Charisma"); }
        }

        public event PropertyChangedEventHandler PropertyChanged;

        void Notify(string property)
        {
            if (PropertyChanged != null)
            {
                PropertyChanged(this, new PropertyChangedEventArgs(property));
            }
        }
    }
}
