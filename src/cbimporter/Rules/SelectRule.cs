namespace cbimporter.Rules
{
    using System;
    using System.CodeDom.Compiler;
    using System.Collections.Generic;
    using System.Text;
    using System.Xml.Linq;

    public class SelectRule : Rule
    {
        readonly ItemFilter filter;
        RuleIndex index;
        readonly string name;
        readonly int number;
        readonly bool optional;
        readonly Identifier type;

        SelectRule(
            Identifier type, 
            int number, 
            string name, 
            bool optional, 
            ItemFilter filter, 
            RuleElement element)
            : base(element)
        {
            this.filter = filter;
            this.type = type;
            this.name = name;
            this.number = number;
            this.optional = optional;
        }

        public ItemFilter Filter { get { return this.filter; } }

        public IList<ItemFilter> Filters 
        { 
            get { return new ItemFilter[] { this.filter }; } 
        }

        public RuleIndex Index { get { return this.index; } }

        public int Number { get { return this.number; } }

        public bool Optional { get { return this.optional; } }

        public Identifier Type { get { return this.type; } }
        
        public override void Bind(RuleIndex index)
        {
            this.index = index;
        }

        public static SelectRule New(RuleElement ruleElement, XElement element)
        {
            // Attributes:
            //    requires
            //    spellbook
            //    existing
            //    default
            //    grant
            XAttribute attribute;

            Identifier type = Identifier.Get(element.Attribute(XNames.Type).Value);
            
            int number = 1;
            attribute = element.Attribute(XNames.Number);
            if (attribute != null) { number = Int32.Parse(attribute.Value); }

            string name = null;
            attribute = element.Attribute(XNames.Name);
            if (attribute != null) { name = attribute.Value; }

            bool optional = false;
            attribute = element.Attribute(XNames.Optional);
            if (attribute != null) { optional = true; }

            ItemFilter filter = null;
            attribute = element.Attribute(XNames.Category);
            if (attribute != null) { filter = ParseCategory(attribute.Value); }
           
            // Make the name pretty for grouping and tracking purposes.
            if (String.IsNullOrEmpty(name))
            {
                if (ruleElement.Type == Identifier.Level)
                {
                    name = "Level " + ruleElement.Name.ToString(); // "Level 1"
                }
                else
                {
                    name = ruleElement.Name.ToString(); // "Heir of Siberys (level 26)"
                }
            }

            return new SelectRule(type, number, name, optional, filter, ruleElement);
        }

        static ItemFilter ParseCategory(string category)
        {
            string[] filters = category.Split(',');
            var itemFilters = new ItemFilter[filters.Length];
            for (int i = 0; i < filters.Length; i++)
            {
                string[] orParts = filters[i].Split('|');
                ItemFilter orFilter = null;
                for (int j = 0; j < orParts.Length; j++)
                {
                    ItemFilter filter;
                    if (orParts[j].StartsWith("$$"))
                    {
                        filter = ParseSpecialCategory(orParts[j]);
                    }
                    else if (orParts[j].StartsWith("!"))
                    {
                        filter = new NotFilter(Identifier.Get(orParts[j].Substring(1)));
                    }
                    else
                    {
                        filter = new CategoryFilter(Identifier.Get(orParts[j]));
                    }

                    if (orFilter == null)
                    {
                        orFilter = filter;
                    }
                    else
                    {
                        orFilter = new OrFilter(orFilter, filter);
                    }
                }

                itemFilters[i] = orFilter;
            }

            if (itemFilters.Length == 1)
            {
                return itemFilters[0];
            }
            else
            {
                return new AndFilter(itemFilters);
            }
        }

        static ItemFilter ParseSpecialCategory(string category)
        {
            switch (category)
            {
                case "$$CLASS": return new ClassElementFilter();
                case "$$CLASS_OR_MULTICLASS": return new OrFilter(new ClassElementFilter(), new MulticlassFilter());
                case "$$NOT_CLASS": return new NotClassFilter();
                case "$$MULTICLASS": return new MulticlassFilter();
                case "$$HYBRID": return new HybridFilter();
                case "$$LEVEL": return new LevelFilter();
                default: throw new NotSupportedException();
            }
        }

        public override string ToString()
        {
            var builder = new StringBuilder();
            builder.Append(type.ToString());
            if (this.filter != null)
            {
                builder.Append(" where ");
                builder.Append(this.filter.ToString());
            }

            return builder.ToString();
        }

        public override void WriteJS(IndentedTextWriter writer)
        {
            writer.Write("model.select('{0}', {1}, \"{2}\"", this.type, this.number, this.name);

            if (this.optional || this.filter != null)
            {
                writer.Write(", ");

                using (ObjectWriter ow = new ObjectWriter(writer))
                {
                    if (this.optional) { ow.Write("optional", this.optional); }
                    if (this.filter != null)
                    {
                        ow.WritePrefix("filter", "function(model, element) { return ");
                        this.filter.WriteJS(writer);
                        writer.Write("; }");
                    }
                }
            }

            writer.WriteLine(");");
        }

        class AndFilter : ItemFilter
        {
            readonly ItemFilter[] filters;

            public AndFilter(ItemFilter[] filters)
            {
                this.filters = filters;
            }

            public override IList<ItemFilter> Children
            {
                get { return this.filters; }
            }

            public override string ToString()
            {
                var builder = new StringBuilder();
                for (int i = 0; i < this.filters.Length; i++)
                {
                    if (i != 0) { builder.Append(", "); }
                    builder.Append(this.filters[i].ToString());
                }

                return builder.ToString();
            }

            public override void WriteJS(IndentedTextWriter writer)
            {
                if (this.filters.Length == 0)
                {
                    writer.Write("true");
                }
                else
                {
                    if (this.filters.Length > 1) { writer.Write("("); }
                    for (int i = 0; i < this.filters.Length; i++)
                    {
                        if (i != 0) { writer.Write(" && "); }
                        this.filters[i].WriteJS(writer);
                    }
                    if (this.filters.Length > 1) { writer.Write(")"); }
                }
            }
        }

        class CategoryFilter : ItemFilter
        {
            readonly Identifier id;

            public CategoryFilter(Identifier id)
            {
                this.id = id;
            }

            public override string ToString()
            {
                return this.id.ToString();
            }

            public override void WriteJS(IndentedTextWriter writer)
            {
                writer.Write("element.hasCategory(\"{0}\")", Converter.QuoteString(this.id));
            }
        }

        class OrFilter : ItemFilter
        {
            readonly ItemFilter left;
            readonly ItemFilter right;

            public OrFilter(ItemFilter left, ItemFilter right)
            {
                this.left = left;
                this.right = right;
            }

            public override IList<ItemFilter> Children
            {
                get { return new ItemFilter[] { this.left, this.right }; }
            }

            public override string ToString()
            {
                return this.left.ToString() + " | " + this.right.ToString();
            }

            public override void WriteJS(IndentedTextWriter writer)
            {
                writer.Write("(");
                this.left.WriteJS(writer);
                writer.Write(" || ");
                this.right.WriteJS(writer);
                writer.Write(")");
            }
        }

        class NotFilter : ItemFilter
        {
            readonly Identifier id;

            public NotFilter(Identifier id)
            {
                this.id = id;
            }

            public override string ToString()
            {
                return "!" + this.id.ToString();
            }

            public override void WriteJS(IndentedTextWriter writer)
            {
                writer.Write("!element.hasCategory(\"{0}\")", Converter.QuoteString(this.id));
            }
        }

        abstract class RuleElementFilter : ItemFilter
        {
        }

        class ClassElementFilter : RuleElementFilter
        {
            public override string ToString()
            {
                return "$$CLASS";
            }

            public override void WriteJS(IndentedTextWriter writer)
            {
                // TODO: Whaaaaa?
                writer.Write("element.hasCategory(model['class'].id)");
            }
        }

        class LevelFilter : ItemFilter
        {
            public override string ToString()
            {
                return "$$LEVEL";
            }

            public override void WriteJS(IndentedTextWriter writer)
            {
                writer.Write("true /* NYI: Filter: $$LEVEL */");
            }
        }

        class MulticlassFilter : ItemFilter
        {
            public override string ToString()
            {
                return "$$MULTICLASS";
            }

            public override void WriteJS(IndentedTextWriter writer)
            {
                writer.Write("true /* NYI: Filter: $$MULTICLASS */");
            }
        }

        class HybridFilter : ItemFilter
        {
            public override string ToString()
            {
                return "$$HYBRID";
            }

            public override void WriteJS(IndentedTextWriter writer)
            {
                //throw new NotImplementedException();
                writer.Write("true /* NYI: Filter: $$HYBRID */");
            }
        }

        class NotClassFilter : ItemFilter
        {
            public override string ToString()
            {
                return "$$NOT_CLASS";
            }

            public override void WriteJS(IndentedTextWriter writer)
            {
                writer.Write("true /* NYI: Filter: $$NOT_CLASS */");
            }
        }
    }
}
