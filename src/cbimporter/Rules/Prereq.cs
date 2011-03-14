namespace cbimporter.Rules
{
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Linq;
    using System.Xml.Linq;
    using System;
    using System.Diagnostics;
    using cbimporter.Model;

    // TODO: Automatically Handle Special Things:
    //       CountsAsClass
    //       CountsAsFeature
    //       CountsAsRace
    //
    // e.g. if a class has a CountsAsClass, then if a prereq requires the class it also accepts something
    //      that grants the CountsAsClass. &c.
    // 

    public abstract class Prereq 
    {
        public abstract void Bind(RuleIndex index);
        public abstract bool Check(Character character);

        public static Prereq And(Prereq left, Prereq right)
        {
            return new AndPrereq(left, right);
        }

        public static Prereq AnyN(int count, Prereq[] prereqs)
        {
            return new AnyNOfPrereq(count, prereqs);
        }

        public static Prereq Any(RuleElement[] elements)
        {
            return new AnyBoundElementPrereq(elements);
        }

        public static Prereq Any(IEnumerable<RuleElement> elements)
        {
            return new AnyBoundElementPrereq(elements.ToArray());
        }

        public static Prereq Element(Identifier name, Identifier type)
        {
            if (type == null)
            {
                return new UnboundElementNamePrereq(name);
            }
            else
            {
                return new UnboundElementNameTypePrereq(name, type);
            }
        }

        public static Prereq Element(Identifier id)
        {
            return new UnboundElementIdPrereq(id);
        }

        public static Prereq Element(RuleElement element)
        {
            return new BoundElementPrereq(element);
        }

        public static Prereq False()
        {
            return new FalsePrereq(); // TODO: Singleton
        }

        public static Prereq Level(int level)
        {
            return new LevelPrereq(level);
        }

        public static Prereq Not(Prereq prereq)
        {
            return new NotPrereq(prereq);
        }

        public static Prereq Or(Prereq left, Prereq right)
        {
            return new OrPrereq(left, right);
        }

        public static Prereq Or(Prereq a, Prereq b, Prereq c, Prereq d)
        {
            return new Or4Prereq(a, b, c, d);
        }

        public static Prereq Stat(Identifier stat, int minimum)
        {
            return new StatPrereq(stat, minimum);
        }

        sealed class FalsePrereq : Prereq
        {
            public override void Bind(RuleIndex index) { }

            public override bool Check(Character character)
            {
                return false;
            }
        }

        sealed class AndPrereq : Prereq
        {
            readonly Prereq left;
            readonly Prereq right;

            public AndPrereq(Prereq left, Prereq right)
            {
                this.left = left;
                this.right = right;
            }

            public override void Bind(RuleIndex index)
            {
                this.left.Bind(index);
                this.right.Bind(index);
            }

            public override bool Check(Character character)
            {
                return this.left.Check(character) && this.right.Check(character);
            }
        }

        sealed class AnyBoundElementPrereq : Prereq
        {
            readonly RuleElement[] elements;

            public AnyBoundElementPrereq(RuleElement[] elements)
            {
                this.elements = elements;
            }

            public override void Bind(RuleIndex index) { }

            public override bool Check(Character character)
            {
                for (int i = 0; i < this.elements.Length; i++)
                {
                    if (character.Grants.Contains(this.elements[i])) { return true; }
                }
                return false;
            }
        }

        sealed class AnyNOfPrereq : Prereq
        {
            readonly int count;
            readonly Prereq[] prereqs;

            public AnyNOfPrereq(int count, Prereq[] prereqs)
            {
                this.count = count;
                this.prereqs = prereqs;
            }

            public override void Bind(RuleIndex index)
            {
                for (int i = 0; i < this.prereqs.Length; i++)
                {
                    this.prereqs[i].Bind(index);
                }
            }

            public override bool Check(Character character)
            {
                int required = this.count;
                for (int i = 0; i < prereqs.Length && required > 0; i++)
                {
                    if (this.prereqs[i].Check(character)) { required--; }
                }
                return (required == 0);
            }
        }

        sealed class UnboundElementIdPrereq : Prereq
        {
            readonly Identifier id;

            public UnboundElementIdPrereq(Identifier id)
            {
                this.id = id;
            }

            public override void Bind(RuleIndex index)
            {
                throw new NotImplementedException();
            }

            public override bool Check(Character character)
            {
                throw new NotImplementedException();
            }
        }

        sealed class UnboundElementNamePrereq : Prereq
        {
            RuleElement[] boundElements;
            readonly Identifier name;

            public UnboundElementNamePrereq(Identifier name)
            {
                this.name = name;
            }

            public override void Bind(RuleIndex index)
            {
                if (this.boundElements == null)
                {
                    this.boundElements = index.GetElementsByName(this.name).ToArray();
                }
            }

            public override bool Check(Character character)
            {
                for (int i = 0; i < this.boundElements.Length; i++)
                {
                    if (character.Grants.Contains(this.boundElements[i])) { return true; }
                }

 	            return false;
            }
        }

        sealed class UnboundElementNameTypePrereq : Prereq
        {
            RuleElement boundElement;
            readonly Identifier elementName;
            readonly Identifier type;

            public UnboundElementNameTypePrereq(Identifier name, Identifier type)
            {
                this.elementName = name;
                this.type = type;
            }

            public override void Bind(RuleIndex index)
            {
                if (this.boundElement == null)
                {
                    this.boundElement = index.GetElement(this.type, this.elementName);
                }
            }

            public override bool Check(Character character)
            {
                return character.Grants.Contains(this.boundElement);
            }
        }

        sealed class BoundElementPrereq : Prereq
        {
            readonly RuleElement element;

            public BoundElementPrereq(RuleElement element)
            {
                this.element = element;
            }

            public override void Bind(RuleIndex index)
            {
            }

            public override bool Check(Character character)
            {
                return character.Grants.Contains(this.element);
            }
        }

        sealed class LevelPrereq : Prereq
        {
            readonly int level;

            public LevelPrereq(int level)
            {
                this.level = level;
            }

            public override void Bind(RuleIndex index)
            {
                throw new NotImplementedException();
            }

            public override bool Check(Character character)
            {
                throw new NotImplementedException();
            }
        }

        sealed class OrPrereq : Prereq
        {
            readonly Prereq left;
            readonly Prereq right;

            public OrPrereq(Prereq left, Prereq right)
            {
                this.left = left;
                this.right = right;
            }

            public override void Bind(RuleIndex index)
            {
                throw new NotImplementedException();
            }

            public override bool Check(Character character)
            {
                throw new NotImplementedException();
            }
        }

        sealed class Or4Prereq : Prereq
        {
            readonly Prereq first;
            readonly Prereq second;
            readonly Prereq third;
            readonly Prereq fourth;

            public Or4Prereq(Prereq first, Prereq second, Prereq third, Prereq fourth)
            {
                this.first = first;
                this.second = second;
                this.third = third;
                this.fourth = fourth;   
            }

            public override void Bind(RuleIndex index)
            {
                throw new NotImplementedException();
            }

            public override bool Check(Character character)
            {
                throw new NotImplementedException();
            }
        }

        sealed class NotPrereq : Prereq
        {
            readonly Prereq prereq;

            public NotPrereq(Prereq prereq)
            {
                this.prereq = prereq;
            }

            public override void Bind(RuleIndex index)
            {
                this.prereq.Bind(index);
            }

            public override bool Check(Character character)
            {
                return !this.prereq.Check(character);
            }
        }

        sealed class StatPrereq : Prereq
        {
            readonly int minimum;
            readonly Identifier stat;

            public StatPrereq(Identifier stat, int minimum)
            {
                this.stat = stat;
                this.minimum = minimum;
            }

            public override void Bind(RuleIndex index)
            {
                throw new NotImplementedException();
            }

            public override bool Check(Character character)
            {
                throw new NotImplementedException();
            }
        }
    }
}
