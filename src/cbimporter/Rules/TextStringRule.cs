namespace cbimporter.Rules
{
    using System.CodeDom.Compiler;
    using System.Xml.Linq;

    public class TextStringRule : Rule
    {
        readonly string name;
        readonly string value;

        TextStringRule(RuleElement element, string name, string value)
            : base(element)
        {
            this.name = name;
            this.value = value;
        }

        public static TextStringRule New(RuleElement ruleElement, XElement element)
        {
            return new TextStringRule(
                ruleElement,
                element.Attribute(XNames.Name).Value, 
                element.Attribute(XNames.Value).Value);
        }

        public override void WriteJS(IndentedTextWriter writer)
        {
            writer.WriteLine("model.statadd(\"{0}\", \"{1}\");", Converter.QuoteString(name), Converter.QuoteString(value));
        }
    }
}
