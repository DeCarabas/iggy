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

    /// <summary>
    /// The Converter class converts rules to JavaScript.
    /// </summary>
    /// <remarks>
    /// The converter emits AMD modules for each rules element. You can require a rules package and it will return
    /// an object that contains the following:
    /// { elements: ..., types: ..., id: ... }
    /// </remarks>
    class Converter
    {
        readonly HashSet<XName> seenRuleAttributes = new HashSet<XName> { "requires", "type", "non-zero", "zero", "name", "value" };

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

        public static string ConvertElement(RuleIndex index, RuleElement element)
        {
            var stringWriter = new StringWriter();
            element.WriteJS(new IndentedTextWriter(stringWriter, "  "));
            return stringWriter.ToString();
        }

        public static void ConvertToFiles(RuleIndex index, string outputPath, ProgressDialog progress)
        {
            if (progress != null) { progress.SetDescription("Converting elements..."); }
            int max = index.Elements.Count;
            int pos = 0;

            var sourceModules = new List<string>();
            foreach (IGrouping<string, RuleElement> source in index.Elements.GroupBy(r => GetRealSource(r.Source)))
            {
                string sourceSegment = GetSafePathSegment(source.Key);
                string sourcePath = Path.Combine(outputPath, sourceSegment);
                if (!Directory.Exists(sourcePath)) { Directory.CreateDirectory(sourcePath); }

                var modules = new List<string>();
                foreach (IGrouping<string, RuleElement> type in source.GroupBy(r => r.Type.ToString()))
                {
                    string moduleName = type.Key;
                    modules.Add(moduleName);
                    
                    string outFile = Path.Combine(sourcePath, moduleName + ".js");
                    using (TextWriter writer = File.CreateText(outFile))
                    {
                        var converter = new Converter(index, writer);
                        converter.WriteGlobalPrefix();
                        converter.WriteTypePrefix(type.Key);
                        foreach (RuleElement element in type.OrderBy(e => e.Name.ToString()))
                        {
                            if (progress != null) { progress.SetProgress(pos++, max); }
                            converter.WriteGenericRulesElement(element);
                        }
                        converter.WriteTypeSuffix();
                        converter.WriteGlobalSuffix();

                        converter.WriteWarnings();
                    }
                }

                string indexModule = Path.Combine(sourceSegment, "all");
                sourceModules.Add(indexModule);

                string indexFile = Path.Combine(outputPath, indexModule + ".js");
                using(TextWriter writer = File.CreateText(indexFile))
                {
                    var converter = new Converter(index, writer);
                    converter.WriteIndexFile(modules);
                }
            }

            string masterIndex = Path.Combine(outputPath, "all.js");
            using(TextWriter writer = File.CreateText(masterIndex))
            {
                var converter = new Converter(index, writer);
                converter.WriteIndexFile(sourceModules);
            }
        }

        public static void ConvertToSingleFile(RuleIndex index, TextWriter writer, ProgressDialog progress)
        {
            var converter = new Converter(index, writer);

            if (progress != null) { progress.SetDescription("Converting elements..."); }
            int max = index.Elements.Count;
            int pos = 0;

            converter.WriteGlobalPrefix();
            foreach (IGrouping<string, RuleElement> ebt in index.Elements.GroupBy(e => e.Type.ToString()))
            {
                converter.WriteTypePrefix(ebt.Key);
                foreach (RuleElement element in ebt.OrderBy(e => e.Name.ToString()))
                {
                    if (progress != null) { progress.SetProgress(pos++, max); }
                    converter.WriteGenericRulesElement(element);
                }
                converter.WriteTypeSuffix();
            }
            converter.WriteGlobalSuffix();

            converter.WriteWarnings();
        }

        string GetCompendiumUrl(RuleElement element)
        {
            if (element.Type == Identifier.Race)
            {
                return GetCompendiumUrl(element, "race", "ID_FMP_RACE_");
            }
            else if (element.Type == Identifier.Class)
            {
                return GetCompendiumUrl(element, "class", "ID_FMP_CLASS_");
            }
            else if (element.Type == Identifier.Deity)
            {
                return GetCompendiumUrl(element, "deity", "ID_FMP_DEITY_");
            }
            else if (element.Type == Identifier.EpicDestiny)
            {
                return GetCompendiumUrl(element, "item", "ID_FMP_EPIC_DESTINY_");
            }
            else if (element.Type == Identifier.ParagonPath)
            {
                return GetCompendiumUrl(element, "item", "ID_FMP_PARAGON_PATH_");
            }
            else if (element.Type == Identifier.Ritual)
            {
                return GetCompendiumUrl(element, "item", "ID_FMP_RITUAL_");
            }
            else if (element.Type == Identifier.Feat)
            {
                return GetCompendiumUrl(element, "item", "ID_FMP_FEAT_");
            }
            else if (element.Type == Identifier.Skill)
            {
                return GetCompendiumUrl(element, "item", "ID_FMP_SKILL_");
            }
            else if (element.Type == Identifier.Power)
            {
                return GetCompendiumUrl(element, "item", "ID_FMP_POWER_");
            }
            else
            {
                return null;
            }
        }

        string GetCompendiumUrl(RuleElement element, string type, string idPrefix)
        {
            return
                "http://www.wizards.com/dndinsider/compendium/" +
                type + ".aspx?id=" + element.Id.ToString().Substring(idPrefix.Length);
        }

        static string GetSafePathSegment(string name)
        {
            char[] chars = Path.GetInvalidFileNameChars();
            for (int i = 0; i < chars.Length; i++) { name = name.Replace(chars[i], '_'); }
            name = name.Replace("'", "");
            return name;
        }

        static string GetRealSource(string source)
        {
            if (string.IsNullOrEmpty(source)) { source = "core"; }
            if (source.IndexOf(",") >= 0) { source = source.Split(',')[0]; }

            return source.ToLowerInvariant();
        }

        static string QuoteIdentifier(Identifier id)
        {
            return QuoteIdentifier(id.ToString());
        }

        static string QuoteIdentifier(string text)
        {
            return text.Replace(' ', '_').Replace("(", "").Replace(")", "");
        }

        public static string QuoteString(Identifier id)
        {
            return QuoteString(id.ToString());
        }

        public static string QuoteString(string text)
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
            writer.Write(@"te = {0}[""{1}""] = new engine.RulesElement(", QuoteIdentifier(element.Type), QuoteString(element.Name));

            element.WriteJS(this.writer);

            writer.WriteLine(");");
            writer.WriteLine("byID[te.id] = te;");
            writer.WriteLine();
        }

        public void WriteGlobalPrefix()
        {
            this.writer.WriteLine("define(['engine', 'dnd4model'], function(engine, dnd4model) {");
            this.writer.Indent++;
            this.writer.WriteLine("\"use strict\";");
            this.writer.WriteLine();

            this.writer.WriteLine("var abilitymod = dnd4model.abilitymod;");
            this.writer.WriteLine();

            this.writer.WriteLine("var types = {};");
            this.writer.WriteLine("var byID = {};");
            this.writer.WriteLine("var te;");
            this.writer.WriteLine();
        }

        public void WriteGlobalSuffix()
        {
            this.writer.WriteLine("return {");
            this.writer.Indent++;
            this.writer.WriteLine("types: types,");
            this.writer.WriteLine("id: byID");
            this.writer.Indent--;
            this.writer.WriteLine("};");
            this.writer.Indent--;
            this.writer.WriteLine("});");
        }

        public void WriteIndexFile(IList<string> modules)
        {
            int indent = this.writer.Indent;
            try
            {
                var newMods = new List<string>(modules);
                newMods.Sort(StringComparer.OrdinalIgnoreCase);

                this.writer.WriteLine("define(");
                this.writer.Indent++;
                this.writer.WriteLine("[");
                this.writer.Indent++;
                for (int i = 0; i < newMods.Count; i++)
                {
                    if (i != 0) { writer.WriteLine(","); }
                    writer.Write("'./{0}'", newMods[i].Replace('\\', '/'));
                }
                writer.WriteLine();
                writer.Indent--;
                writer.WriteLine("],function() {");
                writer.Indent++;
                writer.WriteLine("var mergedTypes = {};");
                writer.WriteLine("var mergedIds = {};");
                writer.WriteLine();
                writer.WriteLine("var modules = Array.prototype.slice.call(arguments);");
                writer.WriteLine("modules.forEach(function(mod) {");
                writer.Indent++;
                writer.WriteLine("var type, name, id, mt, ot;");
                writer.WriteLine("for(type in mod.types) {");
                writer.Indent++;
                writer.WriteLine("mt = mergedTypes[type] || (mergedTypes[type] = {});");
                writer.WriteLine("ot = mod.types[type];");
                writer.WriteLine("for(name in ot) {");
                writer.Indent++;
                writer.WriteLine("mt[name] = ot[name];");
                writer.Indent--;
                writer.WriteLine("}");
                writer.Indent--;
                writer.WriteLine("}");
                writer.WriteLine("for(id in mod.id) {");
                writer.Indent++;
                writer.WriteLine("mergedIds[id] = mod.id[id];");
                writer.Indent--;
                writer.WriteLine("}");
                writer.Indent--;
                writer.WriteLine("});");
                writer.WriteLine();
                writer.WriteLine("return {");
                writer.Indent++;
                writer.WriteLine("types: mergedTypes,");
                writer.WriteLine("id: mergedIds");
                writer.Indent--;
                writer.WriteLine("};");
                writer.Indent--;
                writer.WriteLine("});");  
            }
            finally
            {
                this.writer.Indent = indent;
            }
        }

        public void WriteTypePrefix(Identifier type)
        {
            WriteTypePrefix(type.ToString());
        }

        public void WriteTypePrefix(string type)
        {
            this.writer.WriteLine("var {0} = types['{1}'] || (types['{1}'] = {{}});", QuoteIdentifier(type), type);
        }

        public void WriteTypeSuffix()
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
