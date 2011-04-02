namespace cbimporter.Rules
{
    using System.Xml.Linq;

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
    }
}
