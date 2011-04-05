namespace cbimporter.Rules
{
    using System;
    using System.CodeDom.Compiler;
    using System.Collections.Generic;
    using System.Linq;
    using System.Xml.Linq;
    using System.Text;
    using System.IO;

    public class RuleElement
    {
        readonly Identifier[] category;
        readonly HashSet<Identifier> boundCategories = new HashSet<Identifier>();
        readonly string description;
        readonly string flavor;
        readonly Identifier id;
        readonly Identifier name;
        readonly Identifier fullname;
        readonly string printPrereqs;
        readonly string[] preReqs;
        readonly List<Rule> rules = new List<Rule>();
        readonly string source;
        readonly Dictionary<string, string> specifics = new Dictionary<string, string>();
        readonly Identifier type;
        string url;
        readonly XElement xml;

        public RuleElement(XElement element)
        {
            this.xml = element;
            this.fullname = Identifier.Get(element.Attribute(XNames.Name).Value + " " + element.Attribute(XNames.Type).Value);
            this.name = Identifier.Get(element.Attribute(XNames.Name).Value);
            this.type = Identifier.Get(element.Attribute(XNames.Type).Value);
            this.id = Identifier.Get(element.Attribute(XNames.InternalID).Value);

            XAttribute attribute = element.Attribute(XNames.Source);
            if (attribute != null)
            {
                this.source = element.Attribute(XNames.Source).Value;
            }

            string description = "";
            foreach (XNode node in element.Nodes())
            {
                if (node.NodeType == System.Xml.XmlNodeType.Element)
                {
                    var subElement = (XElement)node;
                    if (subElement.Name == XNames.Category)
                    {
                        string[] split = subElement.Value.Trim().Split(',');
                        this.category = new Identifier[split.Length];
                        for (int i = 0; i < split.Length; i++)
                        {
                            category[i] = Identifier.Get(split[i]);
                        }
                        
                    }
                    else if (subElement.Name == XNames.Specific)
                    {
                        this.specifics[subElement.Attribute(XNames.Name).Value] = subElement.Value;
                    }
                    else if (subElement.Name == XNames.Flavor)
                    {
                        this.flavor = subElement.Value;
                    }
                    else if (subElement.Name == XNames.PrintPrereqs)
                    {
                        this.printPrereqs = subElement.Value;
                    }
                    else if (subElement.Name == XNames.Prereqs)
                    {
                        this.preReqs = subElement.Value.Trim().Split(',');
                    }
                    else if (subElement.Name == XNames.Rules)
                    {
                        foreach (XElement ruleElement in subElement.Elements())
                        {
                            if (ruleElement.Name == XNames.Grant)
                            {
                                this.rules.Add(GrantRule.New(this, ruleElement));
                            }
                            else if (ruleElement.Name == XNames.TextString)
                            {
                                this.rules.Add(TextStringRule.New(this, ruleElement));
                            }
                            else if (ruleElement.Name == XNames.StatAdd)
                            {
                                this.rules.Add(StatAddRule.New(this, ruleElement));
                            }
                            else if (ruleElement.Name == XNames.Select)
                            {
                                this.rules.Add(SelectRule.New(this, ruleElement));
                            }
                            else if (ruleElement.Name == XNames.Replace)
                            {
                                this.rules.Add(ReplaceRule.New(this, ruleElement));
                            }
                            else if (ruleElement.Name == XNames.Modify)
                            {
                                this.rules.Add(ModifyRule.New(this, ruleElement));
                            }
                            else if (ruleElement.Name == XNames.Drop)
                            {
                                this.rules.Add(DropRule.New(this, ruleElement));
                            }
                            else if (ruleElement.Name == XNames.Suggest)
                            {
                                this.rules.Add(SuggestRule.New(this, ruleElement));
                            }
                            else if (ruleElement.Name == XNames.StatAlias)
                            {
                                this.rules.Add(StatAliasRule.New(this, ruleElement));
                            }
                            else
                            {
                                throw new NotSupportedException("Unsupported rule name: " + ruleElement.Name.ToString());
                            }
                        }
                    }
                    else
                    {
                        throw new NotSupportedException("Unsupported element name: " + subElement.Name.ToString());
                    }
                }
                else if (node.NodeType == System.Xml.XmlNodeType.Text)
                {
                    description += node.ToString(SaveOptions.DisableFormatting);
                }
            }

            this.description = description.Trim();
        }

        public HashSet<Identifier> Categories { get { return this.boundCategories; } }
        public string CompendiumUrl 
        {
            get
            {
                if (this.url == null)
                {
                    if (Type == Identifier.Race)
                    {
                        this.url = GetCompendiumUrl(Id, "race", "ID_FMP_RACE_");
                    }
                    else if (Type == Identifier.Class)
                    {
                        this.url = GetCompendiumUrl(Id, "class", "ID_FMP_CLASS_");
                    }
                    else if (Type == Identifier.Deity)
                    {
                        this.url = GetCompendiumUrl(Id, "deity", "ID_FMP_DEITY_");
                    }
                    else if (Type == Identifier.EpicDestiny)
                    {
                        this.url = GetCompendiumUrl(Id, "item", "ID_FMP_EPIC_DESTINY_");
                    }
                    else if (Type == Identifier.ParagonPath)
                    {
                        this.url = GetCompendiumUrl(Id, "item", "ID_FMP_PARAGON_PATH_");
                    }
                    else if (Type == Identifier.Ritual)
                    {
                        this.url = GetCompendiumUrl(Id, "item", "ID_FMP_RITUAL_");
                    }
                    else if (Type == Identifier.Feat)
                    {
                        this.url = GetCompendiumUrl(Id, "item", "ID_FMP_FEAT_");
                    }
                    else if (Type == Identifier.Skill)
                    {
                        this.url = GetCompendiumUrl(Id, "item", "ID_FMP_SKILL_");
                    }
                    else if (Type == Identifier.Power)
                    {
                        this.url = GetCompendiumUrl(Id, "item", "ID_FMP_POWER_");
                    }
                    else
                    {
                        this.url = null;
                    }
                }

                return this.url;
            }
        }
        public string Description { get { return this.description; } }
        public string Flavor { get { return this.flavor; } }
        public Identifier FullName { get { return this.fullname; } }
        public Identifier Id { get { return this.id; } }
        public Identifier Name { get { return this.name; } }
        public IList<Rule> Rules { get { return this.rules; } }
        public IDictionary<string, string> Specifics { get { return this.specifics; } }
        public Identifier Type { get { return this.type; } }
        public XElement Xml { get { return this.xml; } }

        public void BindCategories(RuleIndex index)
        {
            this.boundCategories.Add(this.name);
            this.boundCategories.Add(this.id);
            if (this.category != null)
            {
                for (int i = 0; i < this.category.Length; i++)
                {
                    this.boundCategories.Add(this.category[i]);

                    RuleElement category;
                    if (index.TryGetElement(this.category[i], out category))
                    {
                        this.boundCategories.Add(category.Name);
                    }
                }
            }
        }

        public void BindRules(RuleIndex index)
        {
            for (int i = 0; i < rules.Count; i++) { rules[i].Bind(index); }
        }

        static string GetCompendiumUrl(Identifier id, string type, string idPrefix)
        {
            return
                "http://www.wizards.com/dndinsider/compendium/" +
                type + ".aspx?id=" + id.ToString().Substring(idPrefix.Length);
        }

        public override string ToString()
        {
            return this.name.ToString() + " (" + this.type.ToString() + ")";
        }

        public void WriteJS(TextWriter textWriter)
        {
            WriteJS(new IndentedTextWriter(textWriter, "  "));
        }

        public void WriteJS(IndentedTextWriter textWriter)
        {
            using (ObjectWriter writer = new ObjectWriter(textWriter))
            {
                writer.Write("name", this.name);
                writer.Write("type", this.type);
                writer.Write("id", this.id);

                string url = CompendiumUrl;
                if (url != null) { writer.Write("compendiumUrl", url); }

                if (Categories.Count > 0)
                {
                    writer.WritePrefix("categories", "[");

                    Identifier[] categories = Categories.ToArray();
                    for (int i = 0; i < categories.Length; i++)
                    {
                        if (i != 0) { textWriter.Write(", "); }
                        textWriter.Write("\"{0}\"", Converter.QuoteString(categories[i]));
                    }
                    textWriter.Write("]");
                }

                //if (Specifics.Count > 0)
                //{
                //    writer.WritePrefix("specifics", "");
                //    using (ObjectWriter specificsWriter = new ObjectWriter(textWriter))
                //    {
                //        foreach (KeyValuePair<string, string> kvp in Specifics)
                //        {
                //            specificsWriter.Write("\"" + Converter.QuoteString(kvp.Key) + "\"", kvp.Value);
                //        }
                //    }
                //}

                if (Rules.Count > 0)
                {
                    writer.WritePrefix("rules", "function(model) {");
                    textWriter.Indent++;
                    textWriter.WriteLine();

                    foreach (Rule rule in Rules)
                    {
                        rule.WriteJS(textWriter);
                    }

                    textWriter.Indent -= 1;
                    textWriter.Write("}");
                }
            }
        }
    }
}
