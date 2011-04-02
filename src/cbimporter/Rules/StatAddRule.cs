namespace cbimporter.Rules
{
    using System;
    using System.CodeDom.Compiler;
    using System.Xml.Linq;

    // We want to allocate as little as possible, in general. So here are some stats about the core:
    //
    //    Most of these have types. (7367 do, 4496 do not)
    //    Few of these have conditions. (1564 do, 10299 do not)
    //
    // We use this to make decisions about where to put storage.
    //
    // NOTE: Value is * 2 to account for Half-Points. (If the modifier has a half-point, then it is odd.)
    //
    public abstract class StatAddRule : Rule
    {
        protected StatAddRule(RuleElement element) : base(element) { }

        public abstract string Stat { get; }

        public static StatAddRule New(RuleElement ruleElement, XElement element)
        {
            // TODO: HANDLE:
            //      requires, e.g.: requires="Epic Tier" (this is rather complex)
            //      non-zero
            //      zero
            //      statmin, e.g.: statmin="Dexterity 13"
            //

            string name = element.Attribute(XNames.Name).Value;
            string value = element.Attribute(XNames.Value).Value;

            Identifier type = null;
            XAttribute attribute = element.Attribute(XNames.Type);
            if (attribute != null) { type = Identifier.Get(attribute.Value); }


            StatAddRule rule;

            int constantValue;
            if (Int32.TryParse(value, out constantValue))
            {
                constantValue *= 2;
                if (element.Attribute(XNames.HalfPoint) != null) { constantValue += 1; }
                rule = new ConstantStatAdd(ruleElement, name, type, constantValue);
            }
            else
            {
                bool negative = false;
                if (value[0] == '+')
                {
                    value = value.Substring(1);
                }
                else if (value[0] == '-')
                {
                    negative = true;
                    value = value.Substring(1);
                }

                if (value.StartsWith("ABILITYMOD"))
                {
                    value = value.Substring(11, value.Length - 12);
                    rule = new AbilityModStatAdd(ruleElement, name, type, value, negative);
                }
                else
                {
                    // NOTE: The values that contain ':' are bugged; they don't actually work in cb either.
                    rule = new StatStatAdd(ruleElement, name, type, value, negative);
                }
            }

            attribute = element.Attribute(XNames.Condition);
            if (attribute != null)  
            {
                rule = new ConditionalStatAdd(ruleElement, attribute.Value, rule); 
            }

            attribute = element.Attribute(XNames.Wearing);
            if (attribute != null)
            {
                rule = new WearingStatAdd(ruleElement, WearingExpression.New(attribute.Value), rule);
            }

            attribute = element.Attribute(XNames.NotWearing);
            if (attribute != null)
            {
                rule = new NotWearingStatAdd(ruleElement, WearingExpression.New(attribute.Value), rule);
            }

            return rule;
        }

        public override void WriteJS(IndentedTextWriter writer)
        {
            writer.Write("model.statadd(\"{0}\", function() {{ ", Converter.QuoteString(this.Stat));
            WriteJSFunctionBody(writer);
            writer.WriteLine(" });");
        }

        protected abstract void WriteJSFunctionBody(IndentedTextWriter writer);

        abstract class BaseStatAdd : StatAddRule
        {
            protected readonly string stat;
            readonly Identifier type;

            protected BaseStatAdd(RuleElement element, string stat, Identifier type)
                : base(element)
            {
                this.stat = stat;
                this.type = type;
            }

            public override string Stat { get { return this.stat; } }
        }

        class ConstantStatAdd : BaseStatAdd
        {
            readonly int value;

            public ConstantStatAdd(RuleElement element, string stat, Identifier type, int value) 
                : base(element, stat, type)
            {
                this.value = value;
            }

            public override void WriteJS(IndentedTextWriter writer)
            {
                writer.WriteLine("model.statadd(\"{0}\", {1});", Converter.QuoteString(stat), this.value/2);
            }

            protected override void WriteJSFunctionBody(IndentedTextWriter writer)
            {
                writer.Write("return {0};", this.value / 2);
            }
        }

        class StatStatAdd : BaseStatAdd
        {
            readonly bool negative;
            readonly string sourceStat;

            public StatStatAdd(RuleElement element, string stat, Identifier type, string sourceStat, bool negative)
                : base(element, stat, type)
            {
                this.sourceStat = sourceStat;
                this.negative = negative;
            }

            protected override void WriteJSFunctionBody(IndentedTextWriter writer)
            {
                writer.Write(
                    "return {0}model.stat(\"{1}\");", 
                    this.negative ? "-" : "",
                    Converter.QuoteString(this.sourceStat));
            }
        }

        class AbilityModStatAdd : BaseStatAdd
        {
            readonly bool negative;
            readonly string sourceStat;

            public AbilityModStatAdd(RuleElement element, string stat, Identifier type, string sourceStat, bool negative)
                : base(element, stat, type)
            {
                this.sourceStat = sourceStat;
                this.negative = negative;
            }

            protected override void WriteJSFunctionBody(IndentedTextWriter writer)
            {
                writer.Write(
                    "return {0}abilitymod(model.stat(\"{1}\"));",
                    this.negative ? "-" : "",
                    Converter.QuoteString(this.sourceStat));
            }
        }

        abstract class DelegatingStatAdd : StatAddRule
        {
            protected readonly StatAddRule baseRule;

            protected DelegatingStatAdd(RuleElement element, StatAddRule rule)
                : base(element)
            {
                this.baseRule = rule;
            }

            public override string Stat { get { return this.baseRule.Stat; } }
        }

        class ConditionalStatAdd : DelegatingStatAdd
        {
            readonly string condition;

            public ConditionalStatAdd(RuleElement element, string condition, StatAddRule rule)
                : base(element, rule)
            {
                this.condition = condition;
            }
            
            protected override void WriteJSFunctionBody(IndentedTextWriter writer)
            {
                writer.Write("/* {0} */ ", this.condition);
                this.baseRule.WriteJSFunctionBody(writer);
            }
        }

        class WearingStatAdd : DelegatingStatAdd
        {
            protected readonly WearingExpression predicate;

            public WearingStatAdd(RuleElement element, WearingExpression predicate, StatAddRule rule)
                : base(element, rule)
            {
                this.predicate = predicate;
            }

            protected override void WriteJSFunctionBody(IndentedTextWriter writer)
            {
                writer.Indent++;
                writer.WriteLine();

                writer.Write("if (");
                this.predicate.WriteJS(writer);
                writer.WriteLine(") {");
                writer.Indent++;

                this.baseRule.WriteJSFunctionBody(writer);
                writer.WriteLine();

                writer.Indent--;
                writer.WriteLine("} else return 0;");

                writer.Indent--;
            }
        }

        class NotWearingStatAdd : WearingStatAdd
        {
            public NotWearingStatAdd(RuleElement element, WearingExpression predicate, StatAddRule rule)
                : base(element, predicate, rule)
            {
            }

            protected override void WriteJSFunctionBody(IndentedTextWriter writer)
            {
                writer.Indent++;
                writer.WriteLine();

                writer.Write("if (!(");
                this.predicate.WriteJS(writer);
                writer.WriteLine(")) {");
                writer.Indent++;

                this.baseRule.WriteJSFunctionBody(writer);
                writer.WriteLine();
                
                writer.Indent--;
                writer.WriteLine("} else return 0;");

                writer.Indent--;
            }
        }
    }
 }
