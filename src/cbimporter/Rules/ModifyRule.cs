namespace cbimporter.Rules
{
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Linq;
    using System.Xml.Linq;
    using System;
    using System.Diagnostics;
    using cbimporter.Model;

    public class ModifyRule : Rule
    {
        ModifyRule(RuleElement element) : base(element) { }

        public static ModifyRule New(RuleElement ruleElement, XElement element)
        {
            // Attributes:
            //  name
            //  type
            //  Field
            //  value
            //  list-addition
            //  select
            //  requires
            //  die-increase

            return new ModifyRule(ruleElement);
        }

        public override void Apply(Character character)
        {
            throw new NotImplementedException();
        }

        public override void Revoke(Character character)
        {
            throw new NotImplementedException();
        }
    }
}
