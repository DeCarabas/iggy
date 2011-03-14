namespace cbimporter.Model
{
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Linq;
    using System.Xml.Linq;
    using System;
    using System.Diagnostics;
    using cbimporter.Rules;

    public class Item : IEquatable<Item>
    {
        readonly RuleElement enchantment;
        readonly RuleElement mundane;

        public Item(RuleElement mundane, RuleElement enchantment)
        {
            this.mundane = mundane;
            this.enchantment = enchantment;
        }

        public RuleElement Mundane { get { return this.mundane; } }
        public RuleElement Enchantment { get { return this.enchantment; } }

        public override bool Equals(object obj)
        {
            return Equals(obj as Item);
        }

        public bool Equals(Item other)
        {
            if (other == null) { return false; }
            return 
                Object.Equals(other.enchantment, this.enchantment) && 
                Object.Equals(other.mundane, this.mundane);
        }

        public override int GetHashCode()
        {
            int hashCode = 0;
            if (this.mundane != null) { hashCode ^= this.mundane.GetHashCode(); }
            if (this.enchantment != null) { hashCode ^= this.enchantment.GetHashCode(); }
            return hashCode;
        }

        public bool MatchesCategory(Identifier category)
        {
            if (this.enchantment != null && this.enchantment.Categories.Contains(category)) { return true; }
            if (this.mundane != null && this.mundane.Categories.Contains(category)) { return true; }
            return false;
        }
    }
}
