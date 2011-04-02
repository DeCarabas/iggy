namespace cbimporter.Rules
{
    using System.CodeDom.Compiler;

    public abstract class Rule
    {
        readonly RuleElement element;

        protected Rule(RuleElement element)
        {
            this.element = element;
        }

        public RuleElement Element { get { return this.element; } }

        public virtual void Bind(RuleIndex index) { }

        public virtual void WriteJS(IndentedTextWriter writer)
        {
            writer.WriteLine("// unsupported rule: {0}", this);
        }
    }
}
