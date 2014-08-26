namespace cbimporter.Rules
{
    using System.CodeDom.Compiler;
    using System.Xml.Linq;

    public sealed class GrantRule : Rule
    {
        readonly Identifier name;
        RuleElement element;
        readonly Identifier type;

        GrantRule(RuleElement element, string name, string type)
            : base(element)
        {
            this.name = Identifier.Get(name);
            this.type = Identifier.Get(type);
        }

        public RuleElement Target { get { return this.element; } }

        public static GrantRule New(RuleElement ruleElement, XElement element)
        {
            // TODO: How do we interpret [Dilettante]? It's a hapax legomenon...
            return new GrantRule(
                ruleElement,
                element.Attribute(XNames.Name).Value, 
                element.Attribute(XNames.Type).Value);
        }

        public override void Bind(RuleIndex index)
        {
            // TODO: What if binding fails? (Only happens for [Dilettante], I think...)
            index.TryGetElement(this.name, out this.element);
        }

        public override string ToString()
        {
            string elementString = "<unknown>";
            if (this.element != null) { elementString = this.element.ToString(); }
            return "grant " + elementString;
        }

        public override void WriteJS(IndentedTextWriter writer)
        {
            if (this.element != null)
            {
                writer.WriteLine("model.grant(model.elements.id[\"{0}\"]);", Converter.QuoteString(this.element.Id));
            }
            else
            {
                writer.WriteLine("// NYI: [Dilettante]");
            }
        }
    }
}
