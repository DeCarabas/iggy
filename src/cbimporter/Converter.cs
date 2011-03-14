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

            converter.WriteGlobalPrefix();
            foreach (IGrouping<Identifier, RuleElement> ebt in index.Elements.GroupBy(e => e.Type.ToString()))
            {
                converter.WriteTypePrefix(ebt.Key);
                foreach (RuleElement element in ebt.OrderBy(e => e.Name.ToString()))
                {
                    if (progress != null) { progress.SetProgress(pos++, max); }
                    converter.WriteGenericRulesElement(element);
                }
                converter.WriteTypeSuffix(ebt.Key);
            }
            converter.WriteGlobalSuffix();

            converter.WriteWarnings();
        }

        public static string ConvertElement(RuleIndex index, RuleElement element)
        {
            var stringWriter = new StringWriter();
            var converter = new Converter(index, stringWriter);

            converter.WriteGlobalPrefix();
            converter.WriteTypePrefix(element.Type);
            
            converter.WriteGenericRulesElement(element);
            
            converter.WriteTypeSuffix(element.Type);
            converter.WriteGlobalSuffix();

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

        static string QuoteIdentifier(Identifier id)
        {
            return QuoteIdentifier(id.ToString());
        }

        static string QuoteIdentifier(string text)
        {
            return text.Replace(' ', '_').Replace("(", "").Replace(")", "");
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
            writer.WriteLine(@"te = {0}[""{1}""] = new RulesElement({{", QuoteIdentifier(element.Type), QuoteString(element.Name));
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
            writer.WriteLine("byID[te.id] = te;");
            writer.WriteLine();
        }

        public void WriteGlobalPrefix()
        {
            this.writer.WriteLine("\"use strict\";");
            this.writer.WriteLine("(function(global, undefined) {");
            this.writer.Indent++;

            this.writer.WriteLine("var elements = global.elements || (global.elements = {});");
            this.writer.WriteLine("var types = elements.types || (elements.types = {});");
            this.writer.WriteLine("var byID = elements.id || (elements.id = {});");
            this.writer.WriteLine("var te;");
            this.writer.WriteLine();
        }

        public void WriteGlobalSuffix()
        {
            this.writer.Indent--;
            this.writer.WriteLine("})(this);");
        }

        public void WriteTypePrefix(Identifier type)
        {
            this.writer.WriteLine("var {0} = types['{1}'] || (types['{1}'] = {{}});", QuoteIdentifier(type), type);
        }

        public void WriteTypeSuffix(Identifier type)
        {
            this.writer.WriteLine();
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
