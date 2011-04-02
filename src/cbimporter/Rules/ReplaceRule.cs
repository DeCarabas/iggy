namespace cbimporter.Rules
{
    using System.Xml.Linq;

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
    }
}
