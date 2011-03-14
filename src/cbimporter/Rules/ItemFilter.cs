namespace cbimporter.Rules
{
    using System;
    using System.CodeDom.Compiler;
    using System.Collections.Generic;
    using cbimporter.Internal;
    using cbimporter.Model;

    public abstract class ItemFilter
    {
        public virtual IList<ItemFilter> Children { get { return EmptyArray<ItemFilter>.Instance; } }
        public virtual event EventHandler FilterChanged
        {
            add { }
            remove { }
        }

        public virtual void Bind(Character character) { }
        public abstract IEnumerable<RuleElement> Filter(IEnumerable<RuleElement> elements);
        public virtual void Unbind(Character character) { }

        public abstract void WriteJS(IndentedTextWriter writer);
    }
}
