namespace cbimporter.Rules
{
    using System.CodeDom.Compiler;
    using System.Xml.Linq;

    public class StatAliasRule : Rule
    {
        readonly string alias;
        readonly string name;

        StatAliasRule(RuleElement element, string name, string alias)
            : base(element)
        {
            this.name = name;
            this.alias = alias;
        }

        public static StatAliasRule New(RuleElement ruleElement, XElement element)
        {
            return new StatAliasRule(
                ruleElement,
                element.Attribute(XNames.Name).Value, 
                element.Attribute(XNames.Alias).Value);
        }

        public override void WriteJS(IndentedTextWriter writer)
        {
            writer.WriteLine("model.alias('{0}', '{1}');", this.name, this.alias);
        }
    }
}
