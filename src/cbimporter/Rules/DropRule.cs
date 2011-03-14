namespace cbimporter.Rules
{
    using System;
    using System.CodeDom.Compiler;
    using System.Xml.Linq;
    using cbimporter.Model;

    public class DropRule : Rule
    {
        DropRule(RuleElement element) : base(element) { }

        public static DropRule New(RuleElement ruleElement, XElement element)
        {
            // Attributes:
            //  name
            //  type
            //  select

            return new DropRule(ruleElement);
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
