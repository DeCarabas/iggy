namespace cbimporter.Rules
{
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Linq;
    using System.Xml.Linq;
    using System;
    using System.Diagnostics;
    using cbimporter.Model;

    public class SuggestRule : Rule
    {
        SuggestRule(RuleElement element) : base(element) { }

        public static SuggestRule New(RuleElement ruleElement, XElement element)
        {
            // Attributes:
            //  name
            //  type

            return new SuggestRule(ruleElement);
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
