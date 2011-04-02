namespace cbimporter.Rules
{
    using System.CodeDom.Compiler;
    using System.Collections.Generic;
    using cbimporter.Internal;

    public abstract class ItemFilter
    {
        public virtual IList<ItemFilter> Children { get { return EmptyArray<ItemFilter>.Instance; } }

        public abstract void WriteJS(IndentedTextWriter writer);
    }
}
