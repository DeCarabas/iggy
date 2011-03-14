namespace cbimporter.Rules
{
    using System.CodeDom.Compiler;
    using cbimporter.Model;

    public abstract class Rule
    {
        readonly RuleElement element;

        protected Rule(RuleElement element)
        {
            this.element = element;
        }

        public RuleElement Element { get { return this.element; } }

        public abstract void Apply(Character character);
        public virtual void Bind(RuleIndex index) { }
        public abstract void Revoke(Character character);

        public virtual void WriteJS(IndentedTextWriter writer)
        {
            writer.WriteLine("// unsupported rule: {0}", this);
        }
    }
}
