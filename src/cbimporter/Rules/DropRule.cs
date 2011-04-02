namespace cbimporter.Rules
{
    using System.Xml.Linq;

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
    }
}
