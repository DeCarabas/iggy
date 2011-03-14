namespace cbimporter.Rules
{
    using System.CodeDom.Compiler;
    using System.Xml.Linq;
    using cbimporter.Model;

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

        public override void Apply(Character character)
        {
            character.Alias(this.name, this.alias);
        }

        public override void Revoke(Character character)
        {
            /// TODO: Errrr... maybe?
        }

        public override void WriteJS(IndentedTextWriter writer)
        {
            writer.WriteLine("model.alias('{0}', '{1}');", this.name, this.alias);
        }
    }
}
