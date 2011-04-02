namespace cbimporter.Rules
{
    using System.Xml.Linq;

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
    }
}
