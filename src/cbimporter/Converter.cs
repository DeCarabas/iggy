namespace cbimporter
{
    using System.CodeDom.Compiler;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Text;
    using System.Xml;
    using System.Xml.Linq;
    using System;
    using cbimporter.Rules;

    class Converter
    {
        readonly HashSet<XName> seenRuleAttributes = new HashSet<XName>
            { "requires", "type", "non-zero", "zero", "name", "value" };

        readonly HashSet<XName> seenRuleElements = new HashSet<XName>();

        readonly RuleIndex index;
        readonly List<string> warnings = new List<string>();
        readonly IndentedTextWriter writer;

        Converter(RuleIndex index, TextWriter writer)
        {
            this.index = index;
            this.writer = writer as IndentedTextWriter;
            if (this.writer == null)
            {
                this.writer = new IndentedTextWriter(writer, "  ");
            }
        }

        string CompileCategoryExpression(string category)
        {
            // Take input as a category expression and output an expression in Igor.
            // The output expression should yield a record of valid choices.
            //
            // Category language:
            //
            //  category = orgroup ("," orgroup)*
            //  orgroup = optnot ("|" optnot)*
            //  optnot = root | "!" root
            //  root = "$$CLASS" | "$$MULTICLASS" | "$$LEVEL" | "$$NOT_CLASS" 
            //         "$$HYBRID" | "$$CLASS_OR_MULTICLASS" | identifier | number
            //
            // "," mean AND. "|" means OR. "!" means NOT. 
            // The built-ins have meaning that I'm trying to interpret.
            //

            StringBuilder result = new StringBuilder();
            string[] orGroups = category.Split(',');
            for (int i = 0; i < orGroups.Length; i++)
            {
                if (i > 0) { result.Append(" && "); }

                string[] optNots = orGroups[i].Split('|');
                if (optNots.Length > 1) { result.Append("("); }

                for (int j = 0; j < optNots.Length; j++)
                {
                    if (j > 0) { result.Append(" || "); }

                    string root = optNots[j];
                    if (root[0] == '!')
                    {
                        result.Append("!");
                        root = root.Substring(1);
                    }

                    throw new NotImplementedException();
                }

                if (optNots.Length > 1) { result.Append(")"); }
            }

            return result.ToString();
        }

        string CompileRootSource(string choiceName)
        {
            throw new NotImplementedException();
        }

        public static void Convert(RuleIndex index, TextWriter writer)
        {
            Convert(index, writer, null);
        }

        public static void Convert(RuleIndex index, TextWriter writer, ProgressDialog progress)
        {
            var converter = new Converter(index, writer);

            if (progress != null) { progress.SetDescription("Converting elements..."); }
            int max = index.Elements.Count;
            int pos = 0;

            foreach (RuleElement element in index.Elements)
            {
                if (progress != null) { progress.SetProgress(pos++, max); }
                converter.WriteGenericRulesElement(element);
                writer.WriteLine();
            }

            converter.WriteWarnings();
        }

        public static string ConvertElement(RuleIndex index, RuleElement element)
        {
            var stringWriter = new StringWriter();
            var converter = new Converter(index, stringWriter);

            converter.WriteGenericRulesElement(element);

            return stringWriter.ToString();
        }

        static string GetText(IEnumerable<XNode> nodes)
        {
            var builder = new StringBuilder();
            foreach (var node in nodes)
            {
                builder.Append(node.ToString(SaveOptions.DisableFormatting));
            }
            return builder.ToString().Trim();
        }

        static string QuoteString(Identifier id)
        {
            return QuoteString(id.ToString());
        }

        static string QuoteString(string text)
        {
            return text
                .Replace("\"", "\\\"")
                .Replace("\n", "\\n")
                .Replace("\r", "\\r");
        }

        void Warn(string message, params object[] args)
        {
            this.warnings.Add(string.Format(message, args));
        }

        public void WriteGenericRulesElement(RuleElement element)
        {
            // This predicate isn't right; we need to have a good predicate generator.
            writer.WriteLine(@"typeHolder = (types[""{0}""] = types[""{0}""] || {{}});", QuoteString(element.Type));
            writer.WriteLine(@"e = typeHolder[""{0}""] = new RulesElement({{", QuoteString(element.Name));
            writer.Indent += 1;

            writer.WriteLine(@"name: ""{0}"",", QuoteString(element.Name));
            writer.WriteLine(@"type: ""{0}"",", QuoteString(element.Type));
            writer.WriteLine(@"id: ""{0}"",", QuoteString(element.Id));

            if (element.Categories.Count > 0)
            {
                writer.Write(@"categories: [");
                Identifier[] categories = element.Categories.ToArray();
                for(int i = 0; i < categories.Length; i++)
                {
                    if (i != 0) { writer.Write(", "); }
                    writer.Write("'{0}'", categories[i]);
                }
                writer.WriteLine("],");
            }

            if (element.Flavor != null)
            {
                writer.WriteLine(@"flavor: ""{0}"",", QuoteString(element.Flavor));
            }

            writer.WriteLine(@"specifics: {");
            writer.Indent += 1;
            
            bool writeComma = false;
            foreach (KeyValuePair<string, string> kvp in element.Specifics)
            {
                if (writeComma) { writer.WriteLine(","); }
                writer.Write(@"""{0}"": ""{1}""", QuoteString(kvp.Key), QuoteString(kvp.Value));
                writeComma = true;
            }
            writer.WriteLine();

            writer.Indent -= 1;
            writer.WriteLine("},");

            writer.WriteLine("rules: function(model) {");
            writer.Indent += 1;
            foreach (Rule rule in element.Rules)
            {
                rule.WriteJS(this.writer);
            }
            writer.Indent -= 1;
            writer.WriteLine("}");

            writer.Indent -= 1;
            writer.WriteLine("});");
        }
    
        public void WriteWarnings()
        {
            foreach (string warning in this.warnings)
            {
                this.writer.WriteLine("// Warning: {0}", warning);
            }
        }
    }
}
