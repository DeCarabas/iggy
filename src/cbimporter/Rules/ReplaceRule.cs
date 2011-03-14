namespace cbimporter.Rules
{
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Linq;
    using System.Xml.Linq;
    using System;
    using System.Diagnostics;
    using cbimporter.Model;
  
    public class ReplaceRule : Rule
    {
        ReplaceRule(RuleElement element) : base(element) { }

        public static ReplaceRule New(RuleElement ruleElement, XElement element)
        {
            // Attributes:
            //  name
            //  requires
            //  Level
            //  multiclass
            //  optional
            //  power-replace
            //  retrain
            //  powerswap


            return new ReplaceRule(ruleElement);
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
