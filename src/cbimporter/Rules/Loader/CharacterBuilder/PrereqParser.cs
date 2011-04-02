namespace cbimporter.Rules.Loader.CharacterBuilder
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    // Cribbed from reflector; the code was originally written in MC++ (hah!) and so of course this code is very different.
    //
    public class PrereqParser
    {
        #region translations
        // These appear to be things that were just too hard to parse normally, or patches to fix bugs in the prereqs,
        // or something like that. What an atrocious hack. Why didn't they just fix the rules file? Beats me!
        //
        static Dictionary<string, string> translations = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
        {
            {
                "21st level, Wisdom 17 or trained in Perception, minotaur",
                "21st level; Wisdom 17 or trained in Perception; minotaur"
            },
            {
                "Cleric, Channel divinity: divine fortune class feature",
                "cleric, divine fortune power"
            },
            {
                "Paladin, Channel divinity: divine mettle class feature",
                "paladin, divine mettle power"
            },
            {
                "Cleric, Channel divinity: turn undead class feature",
                "cleric, turn undead power"
            },
            {
                "11th level, Cleric, Channel divinity: turn undead class feature; Paragon Tier",
                "11th level, cleric, turn undead power"
            },
            {
                "Any arcane or divine class that can use an implement; must worship Selûne",
                "arcane or divine; must worship Selûne"
            },
            {
                "Any martial or divine class, must worship Bane",
                "martial or divine; must worship Bane"
            },
            {
                "11th level, fighter or warlord, proficiency with light or heavy shields; Paragon Tier",
                "11th level; fighter or warlord; proficiency with a shield"
            },
            {
                "Avenger, armor of faith feature",
                "Avenger, armor of faith class feature"
            },
            {
                "Arcane power source, familiar",
                "Arcane power source, arcane familiar feat"
            },
            {
                "Warlock, fey pact with the Winter Fey",
                "Warlock, fey pact"
            },
            {
                "You must know the magic missile at-will wizard power.",
                "magic missile power"
            },
            {
                "Hybrid Character",
                "Hybrid Class"
            },
            {
                "You must be able to make alchemical items",
                "Alchemical Items"
            },
            {
                "Any martial class, proficiency with a one-handed pick or spear.",
                "Any martial class; proficiency with a one-handed pick or spear."
            },
            {
                "Any race except warforged, must be an artificer",
                "!warforged; artificer"
            },
            {
                "Channel Divinity class feature, Polygamist or must worship il-Yannah",
                "Channel Divinity class feature, Polygamist or must worship the Path of Light"
            },
            {
                "Ranger and healing word class feature, Aglarond regional benefit",
                "Ranger and healing word class feature; Aglarond regional benefit"
            },
            {
                "11th level, Cha 15, paladin, lay on hands or call of virtue power; Paragon Tier",
                "11th level, Cha 15, paladin, lay on hands or Virtue's Touch power; Paragon Tier"
            },
            {
                "11th level, paladin; ardent vow, call of virtue, or lay on hands power; Paragon Tier",
                "11th level, paladin; ardent vow, Virtue's Touch, or lay on hands power; Paragon Tier"
            },
            {
                "21st level, paladin, call of virtue or lay on hands power; Epic Tier",
                "21st level, paladin, Virtue's Touch or lay on hands power; Epic Tier"
            },
            {
                "Bard, any other arcane class",
                "Bard, any non-bard arcane class"
            },
            
            {
                "Cleric, domain feat and the domain's divinity feat",
                "Cleric, any domain feat, any divinity feat"
            },
            {
                "Membership in the Circle of Smoke and Whispers",
                "ID_INTERNAL_INTERNAL_CIRCLE_OF_SMOKE_AND_WHISPERS"
            }
        };
        #endregion

        #region prefixes
        // These are rule prefixes; the prefixes are removed and a type restriction is remembered.
        // We don't use the dictionary nature here, so this is a bit wasteful. TODO: Make this more 
        // efficient.
        //
        static readonly Tuple<string, Identifier>[] prefixes = new Tuple<string, Identifier>[]
        {
            new Tuple<string, Identifier>("Training in ", Identifier.Get("Skill Training")),
            new Tuple<string, Identifier>("Trained in ", Identifier.Get("Skill Training")),
            new Tuple<string, Identifier>("You must be trained in ", Identifier.Get("Skill Training")),
            new Tuple<string, Identifier>("You must have training in ", Identifier.Get("Skill Training")),
            new Tuple<string, Identifier>("must worship a deity of the ", null),
            new Tuple<string, Identifier>("Must worship ", Identifier.Get("Deity")),
            new Tuple<string, Identifier>("You Must worship ", Identifier.Get("Deity")),
            new Tuple<string, Identifier>("Worship ", Identifier.Get("Deity")),
            new Tuple<string, Identifier>("Follower of ", Identifier.Get("Deity")),
            new Tuple<string, Identifier>("Affiliated with ", Identifier.Get("Background")),
            new Tuple<string, Identifier>("Proficiency with ", Identifier.Get("Proficiency")),
            new Tuple<string, Identifier>("Proficient with ", Identifier.Get("Proficiency")),
            new Tuple<string, Identifier>("Can use the ", Identifier.Get("Proficiency")),
            new Tuple<string, Identifier>("Fluent in ", Identifier.Get("Language")),
            new Tuple<string, Identifier>("be a ", null),
            new Tuple<string, Identifier>("must have the ", null),
            new Tuple<string, Identifier>("have the ", null),
            new Tuple<string, Identifier>("You must have the ", null),
            new Tuple<string, Identifier>("Either ", null),
        };
        #endregion

        #region suffixes
        // These are rule suffixes; the suffixes are removed and a type restriction is remembered.
        // We don't use the dictionary nature here, so this is a bit wasteful. TODO: Make this more 
        // efficient.
        //
        static readonly Tuple<string, Identifier>[] suffixes = new Tuple<string, Identifier>[]
        {
            new Tuple<string, Identifier>(" Elemental Manifestation", Identifier.Get("Racial Trait")),
            new Tuple<string, Identifier>(" Racial Feature", Identifier.Get("Racial Trait")),
            new Tuple<string, Identifier>(" Spell Source", Identifier.Get("Class Feature")),
            new Tuple<string, Identifier>(" Regional Benefit", Identifier.Get("Background")),
            new Tuple<string, Identifier>(" Regional Background", Identifier.Get("Background")),
            new Tuple<string, Identifier>(" Racial Power", Identifier.Get("Power")),
            new Tuple<string, Identifier>(" Channel Divinity Power", Identifier.Get("Power")),
            new Tuple<string, Identifier>(" Paragon Path Feature", Identifier.Get("Class Feature")),
            new Tuple<string, Identifier>(" Guild Training", Identifier.Get("Class Feature")),
            new Tuple<string, Identifier>(" Class Character", Identifier.Get("Class")),
        };
        #endregion

        readonly RuleElement forElement;
        readonly RuleIndex index;

        PrereqParser(RuleIndex index, RuleElement forElement)
        {
            this.forElement = forElement;
            this.index = index;
        }

        public static Prereq Parse(RuleIndex index, RuleElement forElement, string pr)
        {
            var parser = new PrereqParser(index, forElement);
            return parser.Parse(pr);
        }

        Prereq Parse(string pr)
        {
            pr = pr.Trim(); // Ummm...

            string translation;
            if (translations.TryGetValue(pr, out translation)) { pr = translation; }

            var prereqs = new StringSegment(pr);

            prereqs = TierOpt(prereqs);

            Prereq left = null;
            LineParse parse = new LineParse(prereqs, ';');
            for (int i = 0; i < parse.Segments.Count; i++)
            {
                Prereq block = InternalizeBlock(parse.Segments[i]);
                if (left == null)
                {
                    left = block;
                }
                else
                {
                    left = Prereq.And(left, block);
                }
            }

            return left;
        }

        Prereq InternalizeBlock(StringSegment text)
        {
            if (text.EndsWith(".")) { text = text.Substring(0, text.Length - 1); }

            Prereq left = HarperTraining(text);
            if (left != null) { return left; }

            var parse = new LineParse(text, ',');
            for (int i = 0; i < parse.Segments.Count; i++)
            {
                StringSegment segment = parse.Segments[i];
                Identifier typeLimit = null;
                for (int j = 0; j < prefixes.Length; j++)
                {
                    if (segment.StartsWith(prefixes[j].Item1, StringComparison.OrdinalIgnoreCase))
                    {
                        segment = segment.Substring(prefixes[j].Item1.Length);
                        typeLimit = prefixes[j].Item2;
                        break;
                    }
                }

                Prereq right = InternalizeOr(segment, typeLimit);
                if (right != null)
                {
                    if (left == null)
                    {
                        left = right;
                    }
                    else if (parse.IsAnd)
                    {
                        left = Prereq.And(left, right);
                    }
                    else
                    {
                        left = Prereq.Or(left, right);
                    }
                }
            }

            return left;
        }

        Prereq InternalizeOr(StringSegment text, Identifier typeLimit)
        {
            if (text.Length > 4)
            {
                int parenCount = 0;
                for (int i = 0; i < text.Length - 4; i++)
                {
                    if (text[i] == '(')
                    {
                        parenCount++;
                    }
                    else if (text[i] == ')')
                    {
                        parenCount--;
                    }
                    else if ((parenCount == 0) && Matches(text, i, " or "))
                    {
                        Prereq left = InternalizeBlock(text.Substring(0, i));
                        Prereq right = InternalizeBlock(text.Substring(i + 4, 0));

                        if (left == null) { return right; }
                        if (right == null) { return left; }
                        return Prereq.Or(left, right);
                    }
                }
            }

            return InternalizeItem(text, typeLimit);
        }

        Prereq InternalizeItem(StringSegment text, Identifier typeLimit)
        {
            if (typeLimit == null)
            {
                for (int i = 0; i < suffixes.Length; i++)
                {
                    Tuple<string, Identifier> kvp = suffixes[i];
                    if (text.EndsWith(kvp.Item1, StringComparison.OrdinalIgnoreCase))
                    {
                        text = text.Substring(0, text.Length - kvp.Item1.Length);
                        typeLimit = kvp.Item2;
                        break;
                    }
                }
            }

            return InternalizeElement(text, typeLimit);
        }

        Prereq InternalizeElement(string text)
        {
            return InternalizeElement(new StringSegment(text), null);
        }

        Prereq InternalizeElement(string text, Identifier typeLimit)
        {
            return InternalizeElement(new StringSegment(text), typeLimit);
        }

        Prereq InternalizeElement(StringSegment text, Identifier typeLimit)
        {
            if (text[0] == '~') { return InternalizeExclusive(text); }

            bool not = false;
            if (text[0] == '!')
            {
                text = text.Substring(1);
                not = true;
            }

            Prereq previous = FirstSpecialCase(text, typeLimit);
            if (previous != null) { return previous; }

            Identifier name = Identifier.Get(text.ToString());

            RuleElement elementById;
            if (this.index.TryGetElement(name, out elementById)) 
            {
                return Prereq.Element(elementById);
            }

            foreach (RuleElement elementPtr in this.index.GetElementsByName(name))
            {
                if (typeLimit != null && elementPtr.Type != typeLimit) { continue; }

                if (((this.forElement != null && this.forElement.Type == Identifier.Feat) ||
                        elementPtr.Type != Identifier.CountsAsClass) &&
                    //(elementPtr.Type != Identifier.TODO_UNKNOWN) /*(0xd8)*/ &&
                    (elementPtr.Type != Identifier.Background || !text.Equals("assassin", StringComparison.OrdinalIgnoreCase)))
                {
                    Prereq req = not ? Prereq.Not(Prereq.Element(elementPtr)) : Prereq.Element(elementPtr);
                    if (previous == null)
                    {
                        previous = req;
                    }
                    else
                    {
                        previous = not ? Prereq.And(previous, req) : Prereq.Or(previous, req);
                    }
                }
            }
            if (previous != null) { return previous; }

            previous = SpecialCase(text, typeLimit);
            if (previous != null) { return previous; }

            previous = AbilityCheck(text);
            if (previous != null) { return previous; }

            if (Ignore(text)) { return null; }

            return previous;
        }

        bool Ignore(StringSegment text)
        {
            return
                text.Equals("Living Humanoid Race") ||
                text.Equals("Humanoid Race") ||
                text.Equals("higher utility power") ||
                text.Equals("member of the Gatekeepers") ||
                text.Equals("ability to mark a foe") ||
                text.Equals("must adhere to Amoth's precepts");
        }

        Prereq AbilityCheck(StringSegment text)
        {
            int i = text.IndexOf(' ');
            if (i < 0) { return null; }

            if (i < text.Length - 1 && Char.IsDigit(text[i + 1]))
            {
                // This is dumb; how often do I get this wrong I wonder?
                // It's nowhere near as restrictive as character builder's.
                //
                return Prereq.Stat(
                    Identifier.Get(text.Substring(0, i).ToString()),
                    Int32.Parse(text.Substring(i + 1).ToString()));
            }

            return null;
        }

        Prereq SpecialCase(StringSegment text, Identifier typeLimit)
        {
            // Almost everything is here. Good thing character builder isn't being updated anymore so I don't
            // have to add more bullshit to this method.
            //
            Prereq result;
            if (typeLimit == Identifier.Proficiency)
            {
                result = ProficiencySpecialCase(text);
                if (result != null) { return result; }
            }
            if (text.Equals("membership in the Harpers (see the sidebar)", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("Harper");
            }
            if (text.Equals("member of House Vadalis", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("House Vadalis");
            }
            if (text.Equals("curative admixture power", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("Healing Infusion: Curative Admixture power");
            }
            if (text.Equals("resistive formula power", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("Healing Infusion: Resistive Formula power");
            }
            if (text.Equals("psionic class", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("Psionic Augmentation class feature");
            }
            if (text.Equals("you must have chosen a melee attack power for your Dilettante racial trait", StringComparison.OrdinalIgnoreCase))
            {
                return new PredicatePrereq(MeleeDilettante);
            }
            if (text.Equals("you must have chosen an implement power for your Dilettante racial trait", StringComparison.OrdinalIgnoreCase))
            {
                return new PredicatePrereq(ImplementDilettante);
            }
            if (text.Equals("CountsAsClass(Dilettante)", StringComparison.OrdinalIgnoreCase))
            {
                return new PredicatePrereq(CountsAsClassDilettante);
            }
            if (text.Equals("human. Bonus At-Will Power racial trait", StringComparison.OrdinalIgnoreCase))
            {
                return Prereq.And(InternalizeElement("human"), InternalizeElement("Bonus At-Will Power racial trait"));
            }
            if (typeLimit == Identifier.Proficiency && text.EndsWith(" Implement", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("Implement Proficiency (" + text.Substring(0, text.Length - " Implement".Length) + ")", typeLimit);
            }
            if (text.Equals("Flurry of Blows class feature", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("Monastic Tradition class feature");
            }
            if (text.Equals("Eldritch Pact (infernal) class feature", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("Infernal Pact class feature");
            }
            if (text.Equals("Pact Initiate (infernal pact) feat", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("Pact Initiate (Infernal Pact) class feature");
            }
            if (text.Equals("inspiring word encounter power", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("inspiring word power");
            }
            if (text.Equals("the oath of enmity", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("oath of enmity power");
            }
            if (text.Equals("il-Yannah", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("The Path of Light");
            }
            if (text.Equals("Ardent Outrage class feature", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("Ardent Outrage power");
            }
            if (text.Equals("Distract class feature", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("Distract power");
            }
            if (text.Equals("Warden's Grasp class feature", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("Warden's Grasp power");
            }
            if ((text.Equals("lolthtouched", StringComparison.OrdinalIgnoreCase)) && (typeLimit == Identifier.Power))
            {
                return InternalizeElement("Lolthtouched racial trait");
            }
            if (text.Equals("Fighter Weapon Talent class feature", StringComparison.OrdinalIgnoreCase))
            {
                return Prereq.Or(InternalizeElement("One-handed Weapon Talent"), InternalizeElement("Two-handed Weapon Talent"));
            }
            if (Char.IsDigit(text[0]))
            {
                int end = 0;
                while (end < text.Length && Char.IsDigit(text[end])) { end++; }

                int level = Int32.Parse(text.Substring(0, end).ToString());

                StringSegment chPtr = text.Substring(end);


                if (chPtr.Equals("th level", StringComparison.OrdinalIgnoreCase) ||
                    chPtr.Equals("th-level", StringComparison.OrdinalIgnoreCase) ||
                    chPtr.Equals("st level", StringComparison.OrdinalIgnoreCase) ||
                    chPtr.Equals("st-level", StringComparison.OrdinalIgnoreCase) ||
                    chPtr.Equals("nd level", StringComparison.OrdinalIgnoreCase))
                {
                    return Prereq.Level(level);
                }
            }
            if (text.Equals("21st-level wizard", StringComparison.OrdinalIgnoreCase))
            {
                return Prereq.And(Prereq.Level(0x15), InternalizeElement("wizard"));
            }
            if (text.Equals("21st-level bard", StringComparison.OrdinalIgnoreCase))
            {
                return Prereq.And(Prereq.Level(0x15), InternalizeElement("bard"));
            }
            if (text.Equals("two knowledge skills", StringComparison.OrdinalIgnoreCase))
            {
                return TwoKnowledgeSkills();
            }
            if (text.Equals("shifter", StringComparison.OrdinalIgnoreCase))
            {
                return Prereq.Or(InternalizeElement("Razorclaw Shifter"), InternalizeElement("Longtooth Shifter"));
            }
            if (text.Equals("warlock with the fey pact", StringComparison.OrdinalIgnoreCase))
            {
                return Prereq.And(InternalizeElement("Warlock"), InternalizeElement("Fey Pact"));
            }
            if (text.Equals("infernal pact warlock", StringComparison.OrdinalIgnoreCase))
            {
                return Prereq.And(InternalizeElement("Warlock"), InternalizeElement("Infernal Pact"));
            }
            if (text.Equals("Rogue from Cormyr", StringComparison.OrdinalIgnoreCase))
            {
                return Prereq.And(InternalizeElement("Rogue"), InternalizeElement("Cormyr"));
            }
            if (text.Equals("the dalelands", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("dalelands");
            }
            if (text.StartsWith("swordmage with ", StringComparison.OrdinalIgnoreCase))
            {
                return Prereq.And(InternalizeElement("Swordmage"), InternalizeElement(text.Substring(15), null));
            }
            if (text.Equals("Shielding Elixir Healing Infusion", StringComparison.OrdinalIgnoreCase) ||
                text.Equals("Shielding Elixir Power", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("Healing Infusion: Shielding Elixir");
            }
            if (text.Equals("at least one healing infusion power", StringComparison.OrdinalIgnoreCase))
            {
                return new ElementLoopPrereq(HealingInfusion, Identifier.Power);
            }
            if (text.Equals("Earthsoul manifestation", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("Earthsoul");
            }
            if (text.Equals("Firesoul manifestation", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("Firesoul");
            }
            if ((text.Equals("corrupt manifestation", StringComparison.OrdinalIgnoreCase)) ||
                (text.Equals("any corrupt manifestation", StringComparison.OrdinalIgnoreCase)))
            {
                return Prereq.Or(
                    InternalizeElement("Cindersoul"),
                    InternalizeElement("Causticsoul"),
                    InternalizeElement("Plaguesoul"),
                    InternalizeElement("Voidsoul"));
            }
            if (text.Equals("Tome Implement Mastery", StringComparison.OrdinalIgnoreCase))
            {
                return Prereq.Or(InternalizeElement("Tome of Binding"), InternalizeElement("Tome of Readiness"));
            }
            if (text.Equals("Student of the Plague multiclass feat", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("Student of the plague feat");
            }
            if (text.Equals("Warrior of the Wild multiclass feat", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("Warrior of the Wild feat");
            }
            if (text.Equals("Cormyr", StringComparison.OrdinalIgnoreCase))
            {
                return Prereq.Or(InternalizeElement("Cormyr (Wheloon)"), InternalizeElement("Cormyr (General)"));
            }
            if (text.Equals("Berronar", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("Berronar Truesilver");
            }
            if (text.Equals("paragon multiclassing in a martial class", StringComparison.OrdinalIgnoreCase))
            {
                return Prereq.And(InternalizeElement("Paragon multiclassing"), CountsAsClassPowerSource("martial", null));
            }
            if (text.StartsWith("Training with ", StringComparison.OrdinalIgnoreCase))
            {
                StringSegment chPtr2 = text.Substring(14);
                int index = chPtr2.IndexOf(" armor", StringComparison.OrdinalIgnoreCase);
                if (index > 0) { chPtr2 = chPtr2.Substring(0, index); }

                return Proficiency("armor", chPtr2);
            }
            if (text.Equals("proficient with a quarterstaff", StringComparison.OrdinalIgnoreCase))
            {
                return Proficiency("weapon", "quarterstaff");
            }
            if (typeLimit == Identifier.Proficiency && text.Equals("a quarterstaff", StringComparison.OrdinalIgnoreCase))
            {
                return Proficiency("weapon", "quarterstaff");
            }
            if (text.Equals("proficient in spiked chain", StringComparison.OrdinalIgnoreCase))
            {
                return Proficiency("weapon", "spiked chain");
            }
            if (text.Equals("proficient with a shield", StringComparison.OrdinalIgnoreCase) ||
                text.Equals("shield proficiency (heavy or light)", StringComparison.OrdinalIgnoreCase) ||
                (typeLimit == Identifier.Proficiency && text.Equals("a shield", StringComparison.OrdinalIgnoreCase)) ||
                text.Equals("shields", StringComparison.OrdinalIgnoreCase))
            {
                return Prereq.Or(Proficiency("shield", "light"), Proficiency("shield", "heavy"));
            }

            StringSegment? chPtr3 = null;
            if (text.StartsWith("dragon breath racial power that deals ", StringComparison.OrdinalIgnoreCase) &&
                text.EndsWith(" damage", StringComparison.OrdinalIgnoreCase))
            {
                chPtr3 = text.Substring("dragon breath racial power that deals ".Length);
            }
            else if (text.StartsWith("dragon breath power that deals ", StringComparison.OrdinalIgnoreCase) &&
                     text.EndsWith(" damage", StringComparison.OrdinalIgnoreCase))
            {
                chPtr3 = text.Substring("dragon breath power that deals ".Length);
            }
            if (chPtr3 != null)
            {
                string str = "Dragon Breath " + chPtr3.Value.Substring(0, chPtr3.Value.Length - " damage".Length).ToString();
                return InternalizeElement(str);
            }
            if (text.Equals("You have a spellscar", StringComparison.OrdinalIgnoreCase) ||
                text.Equals("spellscar", StringComparison.OrdinalIgnoreCase) ||
                text.Equals("Must have at least one spellscar", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("spellscarred");
            }
            if (text.Equals("Dragon Magic sorcerer", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("dragon magic class feature");
            }
            if (text.Equals("any defender", StringComparison.OrdinalIgnoreCase) ||
                text.Equals("any defender class", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("Defender role");
            }

            Prereq prereqPtr2 = AnyXXXClass(text);
            if (prereqPtr2 == null)
            {
                prereqPtr2 = AnyClassSpecific(text);
            }
            if (prereqPtr2 == null)
            {
                prereqPtr2 = MulticlassDivine(text);
            }
            if (prereqPtr2 == null)
            {
                prereqPtr2 = AnyWarlockPact(text);
            }
            if (prereqPtr2 == null)
            {
                prereqPtr2 = RaceClass(text);
            }
            if (prereqPtr2 == null)
            {
                prereqPtr2 = AnyFeat(text);
            }
            if (prereqPtr2 == null)
            {
                prereqPtr2 = ParagonMulticlassing(text);
            }
            if (prereqPtr2 == null)
            {
                prereqPtr2 = RememberedKnack(text);
            }
            if (prereqPtr2 == null)
            {
                prereqPtr2 = MoreThanOneClass(text);
            }
            if (prereqPtr2 == null)
            {
                prereqPtr2 = CompanionSpecialCase(text);
            }
            return prereqPtr2;
        }

        Prereq CompanionSpecialCase(StringSegment text)
        {
            if (text.Equals("Beast Companion (wolf)", StringComparison.OrdinalIgnoreCase) ||
                text.Equals("wolf beast companion", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("wolf", Identifier.Companion);
            }
            if (text.Equals("Beast Companion (cat)", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("cat", Identifier.Companion);
            }

            if (text.StartsWith("Beast Mastery Class Feature (") && text.EndsWith(")"))
            {
                StringSegment str4 = text.Substring("Beast Mastery Class Feature (".Length);
                str4 = str4.Substring(0, str4.Length - 1);

                int index = str4.IndexOf(" or ", StringComparison.OrdinalIgnoreCase);
                if (index < 0)
                {
                    return InternalizeElement(str4, Identifier.Companion);
                }

                return Prereq.Or(
                    InternalizeElement(str4.Substring(0, index), Identifier.Companion),
                    InternalizeElement(str4.Substring(index + 2), Identifier.Companion));
            }

            return null;
        }

        Prereq MoreThanOneClass(StringSegment text)
        {
            if (!text.Equals("must have more than one class", StringComparison.OrdinalIgnoreCase))
            {
                return null;
            }

            return new MoreThanOneClassPrereq();
        }

        Prereq RememberedKnack(StringSegment text)
        {
            if (!text.Equals("any class-specific multiclassing feat that grants training in a skill", StringComparison.OrdinalIgnoreCase)) { return null; }

            // More binding code
            return new RememberedKnackPrereq();
        }

        Prereq ParagonMulticlassing(StringSegment text)
        {
            int num;
            if (text.StartsWith("paragon multiclassing as a ", StringComparison.OrdinalIgnoreCase))
            {
                num = "paragon multiclassing as a ".Length;
            }
            else if (text.StartsWith("paragon multiclassing as an ", StringComparison.OrdinalIgnoreCase))
            {
                num = "paragon multiclassing as an ".Length;
            }
            else if (text.StartsWith("paragon multiclassing as ", StringComparison.OrdinalIgnoreCase))
            {
                num = "paragon multiclassing as ".Length;
            }
            else
            {
                return null;
            }

            Prereq left = InternalizeElement("paragon multiclassing");
            Prereq right = InternalizeElement("Any multiclass " + text.Substring(num) + " feat");

            return Prereq.And(left, right);
        }

        Prereq AnyFeat(StringSegment text)
        {
            if (text.StartsWith("Any ", StringComparison.OrdinalIgnoreCase))
            {
                text = text.Substring(4);
            }
            else if (text.StartsWith("At least one ", StringComparison.OrdinalIgnoreCase))
            {
                text = text.Substring(13);
            }
            else if (!text.Equals("vampire bloodline feat", StringComparison.OrdinalIgnoreCase))
            {
                return null;
            }

            if (!text.EndsWith(" Feat", StringComparison.OrdinalIgnoreCase))
            {
                return null;
            }

            return new AnyFeatPrereq(text.Substring(0, text.Length - 5));
        }

        Prereq AnyWarlockPact(StringSegment text)
        {
            if (!text.Equals("any warlock pact", StringComparison.OrdinalIgnoreCase)) { return null; }

            return new AnyWarlockPactPrereq();
        }

        Prereq MulticlassDivine(StringSegment text)
        {
            if (!text.Equals("multiclass divine class", StringComparison.OrdinalIgnoreCase)) { return null; }

            return new MulticlassDivinePrereq();
        }

        Prereq AnyClassSpecific(StringSegment text)
        {
            if (!text.Equals("any class-specific multiclass feat"))
            {
                return AnyClassMoreSpecific(text);
            }

            return new AnyClassSpecificPrereq();
        }

        Prereq AnyClassMoreSpecific(StringSegment text)
        {
            bool flag2 = true;
            if (!text.Equals("any class-specific multiclass feat for a class that has the Psionic Augmentation class feature", StringComparison.OrdinalIgnoreCase) &&
                !text.Equals("any class specific multiclass feat for a class that has the Psionic Augmentation class feature", StringComparison.OrdinalIgnoreCase))
            {
                if (!text.Equals("any class-specific multiclass feat for a class that doesn't have the Psionic Augmentation class feature", StringComparison.OrdinalIgnoreCase))
                {
                    return AnyClassNoPsi(text);
                }
                flag2 = false;
            }

            return new AnyClassMoreSpecificPrereq(flag2);
        }

        Prereq AnyClassNoPsi(StringSegment text)
        {
            if (!text.Equals("any class that doesn't have the Psionic Augmentation class feature", StringComparison.OrdinalIgnoreCase)) { return null; }

            return new AnyClassNoPsiPrereq();
        }

        Prereq AnyXXXClass(StringSegment text)
        {
            if (text.StartsWith("Any ", StringComparison.OrdinalIgnoreCase) &&
                text.EndsWith(" Class", StringComparison.OrdinalIgnoreCase))
            {
                text = text.Substring(4, text.Length - 10);

                Identifier exclude = null;
                if (text.StartsWith("non-", StringComparison.OrdinalIgnoreCase))
                {
                    int index = text.IndexOf(' ');
                    if (index >= 0)
                    {
                        exclude = Identifier.Get(text.Substring(4, index - 2).ToString()); // ? This appears to be what the cb does
                        text = text.Substring(index + 1);
                    }
                }

                Prereq right = CountsAsClassPowerSource(text, exclude);
                if (exclude == null)
                {
                    return Prereq.Or(InternalizeElement(text, null), right);
                }

                return right;
            }

            return null;
        }

        Prereq Proficiency(string proftype, string name)
        {
            return Proficiency(proftype, new StringSegment(name));
        }

        Prereq Proficiency(string proftype, StringSegment name)
        {
            return Prereq.Element(Identifier.Get(proftype + " proficiency (" + name + ")"), Identifier.Proficiency);
        }

        Prereq CountsAsClassPowerSource(string source, Identifier exclude)
        {
            return CountsAsClassPowerSource(new StringSegment(source), exclude);
        }

        Prereq CountsAsClassPowerSource(StringSegment source, Identifier exclude)
        {
            return new CountsAsClassPowerSourcePrereq(exclude, source);
        }

        Prereq TwoKnowledgeSkills()
        {
            Identifier typeLimit = Identifier.SkillTraining;
            Prereq left = null;
            Prereq prereqPtr3 = InternalizeElement("Arcana", typeLimit);
            Prereq right = InternalizeElement("Dungeoneering", typeLimit);
            left = Prereq.And(prereqPtr3, right);
            prereqPtr3 = InternalizeElement("Arcana", typeLimit);
            right = InternalizeElement("History", typeLimit);
            Prereq prereqPtr4 = Prereq.And(prereqPtr3, right);
            left = Prereq.Or(left, prereqPtr4);
            prereqPtr3 = InternalizeElement("Arcana", typeLimit);
            right = InternalizeElement("Nature", typeLimit);
            prereqPtr4 = Prereq.And(prereqPtr3, right);
            left = Prereq.Or(left, prereqPtr4);
            prereqPtr3 = InternalizeElement("Arcana", typeLimit);
            right = InternalizeElement("Religion", typeLimit);
            prereqPtr4 = Prereq.And(prereqPtr3, right);
            left = Prereq.Or(left, prereqPtr4);
            prereqPtr3 = InternalizeElement("Dungeoneering", typeLimit);
            right = InternalizeElement("History", typeLimit);
            prereqPtr4 = Prereq.And(prereqPtr3, right);
            left = Prereq.Or(left, prereqPtr4);
            prereqPtr3 = InternalizeElement("Dungeoneering", typeLimit);
            right = InternalizeElement("Nature", typeLimit);
            prereqPtr4 = Prereq.And(prereqPtr3, right);
            left = Prereq.Or(left, prereqPtr4);
            prereqPtr3 = InternalizeElement("Dungeoneering", typeLimit);
            right = InternalizeElement("Religion", typeLimit);
            prereqPtr4 = Prereq.And(prereqPtr3, right);
            left = Prereq.Or(left, prereqPtr4);
            prereqPtr3 = InternalizeElement("History", typeLimit);
            right = InternalizeElement("Nature", typeLimit);
            prereqPtr4 = Prereq.And(prereqPtr3, right);
            left = Prereq.Or(left, prereqPtr4);
            prereqPtr3 = InternalizeElement("History", typeLimit);
            right = InternalizeElement("Religion", typeLimit);
            prereqPtr4 = Prereq.And(prereqPtr3, right);
            left = Prereq.Or(left, prereqPtr4);
            prereqPtr3 = InternalizeElement("Nature", typeLimit);
            right = InternalizeElement("Religion", typeLimit);
            prereqPtr4 = Prereq.And(prereqPtr3, right);
            return Prereq.Or(left, prereqPtr4);
        }

        Prereq ProficientWithGroup(string group)
        {
            Identifier groupProficiency = Identifier.Get(
                "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_("+group.Trim()+")");

            RuleElement re;
            if (!this.index.TryGetElement(groupProficiency, out re)) { return null; }

            Prereq left = null;
            foreach (RuleElement target in re.Rules.OfType<GrantRule>().Select(gr => gr.Target))
            {
                var right = Prereq.Element(target);
                if (left == null)
                {
                    left = right;
                }
                else
                {
                    left = Prereq.Or(left, right);
                }
            }

            return left;
        }

        Prereq ProficientWithHandAndGroup(string hand, string group)
        {


            throw new NotImplementedException();
        }

        Prereq ElementLoop(Identifier type, Func<RuleElement, bool> predicate)
        {
            Prereq left = null;
            foreach (RuleElement element in this.index.GetElementsByType(type))
            {
                if (predicate(element))
                {
                    Prereq right = Prereq.Element(element);
                    if (left == null)
                    {
                        left = right;
                    }
                    else
                    {
                        left = Prereq.Or(left, right);
                    }
                }
            }

            return left;
        }

        Prereq ElementLoop<T>(Identifier type, Func<RuleElement, T, bool> predicate, T arg)
        {
            Prereq left = null;
            foreach (RuleElement element in this.index.GetElementsByType(type))
            {
                if (predicate(element, arg))
                {
                    Prereq right = Prereq.Element(element);
                    if (left == null)
                    {
                        left = right;
                    }
                    else
                    {
                        left = Prereq.Or(left, right);
                    }
                }
            }

            return left;
        }

        Prereq ElementLoop<TArg1, TArg2>(
            Identifier type,
            Func<RuleElement, TArg1, TArg2, bool> predicate,
            TArg1 arg1,
            TArg2 arg2)
        {
            Prereq left = null;
            foreach (RuleElement element in this.index.GetElementsByType(type))
            {
                if (predicate(element, arg1, arg2))
                {
                    Prereq right = Prereq.Element(element);
                    if (left == null)
                    {
                        left = right;
                    }
                    else
                    {
                        left = Prereq.Or(left, right);
                    }
                }
            }

            return left;
        }

        Prereq ProficiencySpecialCase(StringSegment text)
        {
            if (IsWeapon(text))
            {
                return Proficiency("weapon", text);
            }
            if (text.StartsWith("the ", StringComparison.OrdinalIgnoreCase))
            {
                return Proficiency("weapon", text.Substring(4));
            }
            if (text.Equals("rapiers", StringComparison.OrdinalIgnoreCase))
            {
                return Proficiency("weapon", "rapier");
            }
            if (IsWeaponGroup(text))
            {
                return ProficientWithGroup(text.ToString());
            }
            if (text.StartsWith("any ", StringComparison.OrdinalIgnoreCase) && IsWeaponGroup(text.Substring(4)))
            {
                return ProficientWithGroup(text.Substring(4).ToString());
            }
            if (text.StartsWith("one-handed ", StringComparison.OrdinalIgnoreCase) && IsWeaponGroup(text.Substring(11)))
            {
                return ElementLoop(Identifier.Proficiency, ByHandAndGroup, "one-handed", text.Substring(11));
            }
            if (text.StartsWith("two-handed ", StringComparison.OrdinalIgnoreCase) && IsWeaponGroup(text.Substring(11)))
            {
                return ElementLoop(Identifier.Proficiency, ByHandAndGroup, "two-handed", text.Substring(11));
            }
            if (text.StartsWith("any one-handed ", StringComparison.OrdinalIgnoreCase) && IsWeaponGroup(text.Substring(15)))
            {
                return ElementLoop(Identifier.Proficiency, ByHandAndGroup, "one-handed", text.Substring(15));
            }
            if (text.StartsWith("any two-handed ", StringComparison.OrdinalIgnoreCase) && IsWeaponGroup(text.Substring(15)))
            {
                return ElementLoop(Identifier.Proficiency, ByHandAndGroup, "two-handed", text.Substring(15));
            }
            if (text.Equals("a one-handed axe", StringComparison.OrdinalIgnoreCase))
            {
                return ElementLoop(Identifier.Proficiency, ByHandAndGroup, "one-handed", "axe");
            }
            if (text.Equals("a two-handed heavy blade", StringComparison.OrdinalIgnoreCase))
            {
                return ElementLoop(Identifier.Proficiency, ByHandAndGroup, "two-handed", "heavy blade");
            }
            if ((text.Equals("a two-handed axe", StringComparison.OrdinalIgnoreCase)) ||
                (text.Equals("two-handed axes", StringComparison.OrdinalIgnoreCase)))
            {
                return ElementLoop(Identifier.Proficiency, ByHandAndGroup, "two-handed", "axe");
            }
            if (text.Equals("two-handed hammers", StringComparison.OrdinalIgnoreCase))
            {
                return ElementLoop(Identifier.Proficiency, ByHandAndGroup, "two-handed", "hammer");
            }
            if (text.Equals("two-handed picks", StringComparison.OrdinalIgnoreCase))
            {
                return ElementLoop(Identifier.Proficiency, ByHandAndGroup, "two-handed", "pick");
            }
            if (text.Equals("a one-handed pick", StringComparison.OrdinalIgnoreCase))
            {
                return ElementLoop(Identifier.Proficiency, ByHandAndGroup, "one-handed", "pick");
            }
            if (text.Equals("a bow", StringComparison.OrdinalIgnoreCase))
            {
                return ProficientWithGroup("bow");
            }
            if ((text.Equals("a non-spear polearm", StringComparison.OrdinalIgnoreCase)) ||
                (text.Equals("any nonspear polearm", StringComparison.OrdinalIgnoreCase)))
            {
                return ElementLoop(Identifier.Proficiency, NonSpearPolearm);
            }
            if (text.Equals("a superior weapon", StringComparison.OrdinalIgnoreCase))
            {
                return ElementLoop(Identifier.Proficiency, Superior);
            }
            if ((text.Equals("any heavy blade with the high critical property", StringComparison.OrdinalIgnoreCase)) ||
                (text.Equals("any heavy blade that has the high crit property", StringComparison.OrdinalIgnoreCase)))
            {
                return ElementLoop(Identifier.Proficiency, HighCritHeavyBlade);
            }
            if (text.Equals("mace that has the versatile property", StringComparison.OrdinalIgnoreCase))
            {
                return ElementLoop(Identifier.Proficiency, VersatileMace);
            }
            if (text.Equals("any heavy blade that has the versatile property", StringComparison.OrdinalIgnoreCase))
            {
                return ElementLoop(Identifier.Proficiency, VersatileHeavyBlade);
            }
            if (text.Equals("any melee light blade", StringComparison.OrdinalIgnoreCase))
            {
                return ElementLoop(Identifier.Proficiency, MeleeLightBlade);
            }
            if (text.Equals("heavy armor", StringComparison.OrdinalIgnoreCase))
            {
                return ElementLoop(Identifier.Proficiency, HeavyArmor);
            }
            if (text.Equals("hide armor", StringComparison.OrdinalIgnoreCase))
            {
                return Proficiency("armor", "hide");
            }
            if (text.Equals("chainmail", StringComparison.OrdinalIgnoreCase))
            {
                return Proficiency("armor", "chainmail");
            }
            if ((text.Equals("Light Shields", StringComparison.OrdinalIgnoreCase)) ||
                (text.Equals("Light", StringComparison.OrdinalIgnoreCase)))
            {
                return Proficiency("shield", "light");
            }
            if (text.Equals("Heavy Shields", StringComparison.OrdinalIgnoreCase))
            {
                return Proficiency("shield", "heavy");
            }
            return null;
        }

        bool IsWeapon(StringSegment text)
        {
            RuleElement element;
            return this.index.TryGetElement(Identifier.Weapon, Identifier.Get(text.ToString()), out element);
        }

        bool IsWeaponGroup(StringSegment text)
        {
            RuleElement element;
            return this.index.TryGetElement(Identifier.WeaponGroup, Identifier.Get(text.ToString()), out element);
        }

        RuleElement ProficiencyWeapon(RuleElement proficiency)
        {
            const string WeapProfName = "Weapon Proficiency (";

            string str = proficiency.Name.ToString();
            if (str.StartsWith(WeapProfName, StringComparison.OrdinalIgnoreCase))
            {
                Identifier weaponId = Identifier.Get(str.Substring(WeapProfName.Length, str.Length - WeapProfName.Length - 1));

                RuleElement weapon;
                if (this.index.TryGetElement(Identifier.Weapon, weaponId, out weapon))
                {
                    return weapon;
                }
            }

            return null;
        }

        bool NonSpearPolearm(RuleElement element)
        {
            RuleElement weapon = ProficiencyWeapon(element);
            if (weapon == null) { return false; }

            string group;
            if (weapon.Specifics.TryGetValue("Group", out group))
            {
                return (group.IndexOf("Polearm", StringComparison.OrdinalIgnoreCase) >= 0) &&
                       (group.IndexOf("Spear", StringComparison.OrdinalIgnoreCase) < 0);
            }

            return false;
        }

        bool Superior(RuleElement element)
        {
            RuleElement weapon = ProficiencyWeapon(element);
            if (weapon == null) { return false; }

            string category;
            if (weapon.Specifics.TryGetValue("Weapon Category", out category))
            {
                return (category.IndexOf("Superior", StringComparison.OrdinalIgnoreCase) >= 0);
            }

            return false;
        }

        bool HighCritHeavyBlade(RuleElement element)
        {
            RuleElement weapon = ProficiencyWeapon(element);
            if (weapon == null) { return false; }

            string group;
            if (!weapon.Specifics.TryGetValue("Group", out group)) { return false; }
            if (group.IndexOf("Heavy Blade", StringComparison.OrdinalIgnoreCase) < 0) { return false; }

            string properties;
            if (!weapon.Specifics.TryGetValue("Properties", out properties)) { return false; }
            if (properties.IndexOf("High Crit", StringComparison.OrdinalIgnoreCase) < 0) { return false; }

            return true;
        }

        bool VersatileMace(RuleElement element)
        {
            RuleElement weapon = ProficiencyWeapon(element);
            if (weapon == null) { return false; }

            string group;
            if (!weapon.Specifics.TryGetValue("Group", out group)) { return false; }
            if (group.IndexOf("Mace", StringComparison.OrdinalIgnoreCase) < 0) { return false; }

            string properties;
            if (!weapon.Specifics.TryGetValue("Properties", out properties)) { return false; }
            if (properties.IndexOf("Versatile", StringComparison.OrdinalIgnoreCase) < 0) { return false; }

            return true;
        }

        bool VersatileHeavyBlade(RuleElement element)
        {
            RuleElement weapon = ProficiencyWeapon(element);
            if (weapon == null) { return false; }

            string group;
            if (!weapon.Specifics.TryGetValue("Group", out group)) { return false; }
            if (group.IndexOf("Heavy Blade", StringComparison.OrdinalIgnoreCase) < 0) { return false; }

            string properties;
            if (!weapon.Specifics.TryGetValue("Properties", out properties)) { return false; }
            if (properties.IndexOf("Versatile", StringComparison.OrdinalIgnoreCase) < 0) { return false; }

            return true;
        }

        bool MeleeLightBlade(RuleElement element)
        {
            RuleElement weapon = ProficiencyWeapon(element);
            if (weapon == null) { return false; }

            string group;
            if (!weapon.Specifics.TryGetValue("Group", out group)) { return false; }
            if (group.IndexOf("Light Blade", StringComparison.OrdinalIgnoreCase) < 0) { return false; }

            string category;
            if (!weapon.Specifics.TryGetValue("Category", out category)) { return false; }
            if (category.IndexOf("Melee", StringComparison.OrdinalIgnoreCase) < 0) { return false; }

            return true;
        }

        bool HeavyArmor(RuleElement element)
        {
            const string global = "armor proficiency (";

            string str = element.Name.ToString();
            if (str.StartsWith(global, StringComparison.OrdinalIgnoreCase))
            {
                str = str.Substring(global.Length, str.Length - global.Length - 1);
                Identifier armorName = Identifier.Get(str);

                RuleElement armor;
                if (!this.index.TryGetElement(Identifier.Armor, armorName, out armor))
                {
                    armorName = Identifier.Get(str + " armor");
                    if (!this.index.TryGetElement(Identifier.Armor, armorName, out armor))
                    {
                        return false;
                    }
                }

                string type;
                if (armor.Specifics.TryGetValue("Armor Type", out type))
                {
                    return String.Equals(type, "heavy", StringComparison.OrdinalIgnoreCase);
                }
            }

            return false;
        }

        bool ByGroup(RuleElement element, StringSegment group)
        {
            return ByGroup(element, group.ToString());
        }

        bool ByGroup(RuleElement element, string group)
        {
            RuleElement weapon = ProficiencyWeapon(element);
            if (weapon == null) { return false; }

            string weaponGroup;
            if (weapon.Specifics.TryGetValue("Group", out weaponGroup))
            {
                if (weaponGroup.IndexOf(group, StringComparison.OrdinalIgnoreCase) < 0)
                {
                    return false;
                }
            }

            return true;
        }

        bool ByHandAndGroup(RuleElement element, string hand, StringSegment group)
        {
            return ByHandAndGroup(element, hand, group.ToString());
        }

        bool ByHandAndGroup(RuleElement element, string hand, string group)
        {
            RuleElement weapon = ProficiencyWeapon(element);
            if (weapon == null) { return false; }

            string weaponGroup;
            if (!weapon.Specifics.TryGetValue("Group", out weaponGroup)) { return false; }
            if (weaponGroup.IndexOf(group, StringComparison.OrdinalIgnoreCase) < 0) { return false; }

            string weaponHands;
            if (!weapon.Specifics.TryGetValue("Hands Required", out weaponHands)) { return false; }
            if (weaponHands.IndexOf(group, StringComparison.OrdinalIgnoreCase) < 0) { return false; }

            return true;
        }

        Prereq FirstSpecialCase(StringSegment text, Identifier typeLimit)
        {
            if (text.Equals("unselectable", StringComparison.OrdinalIgnoreCase))
            {
                return Prereq.False();
            }
            if (text.Equals("familiar", StringComparison.OrdinalIgnoreCase))
            {
                return InternalizeElement("arcane familiar");
            }
            if (text.Equals("weapon focus", StringComparison.OrdinalIgnoreCase))
            {
                return ContainerFeat("weapon focus");
            }
            if (text.Equals("weapon expertise", StringComparison.OrdinalIgnoreCase))
            {
                return ContainerFeat("weapon expertise");
            }
            return null;
        }

        Prereq ContainerFeat(string text)
        {
            Prereq left = null;
            foreach (RuleElement element in this.index.GetElementsByType(Identifier.Feat))
            {
                if (element.Name.ToString().StartsWith(text, StringComparison.OrdinalIgnoreCase))
                {
                    Prereq right = Prereq.Element(element);
                    if (left == null)
                    {
                        left = right;
                    }
                    else
                    {
                        left = Prereq.Or(left, right);
                    }
                }
            }

            return left;
        }

        Prereq InternalizeExclusive(StringSegment text)
        {
            // This is one of the few that was not directly cribbed from CB; CB's logic is too difficult for
            // me to reverse engineer directly.
            //
            Prereq left = null;
            int offset = 1; // text[0] == '~'
            while (offset < text.Length)
            {
                int start = offset;
                while (offset < text.Length)
                {
                    if (Matches(text, offset, " or ")) { break; }
                    offset++;
                }

                Prereq right = Prereq.Not(InternalizeBlock(text.Substring(start, offset - start)));
                if (left == null && right != null)
                {
                    left = right;
                }
                else
                {
                    left = Prereq.And(left, right);
                }

                offset += 4; // Skip any " or "; if we left because we were at the end 
            }

            return left;
        }

        Prereq HarperTraining(StringSegment text)
        {
            if (text.StartsWith("training in any two of Diplomacy, Insight, Nature, or Stealth", StringComparison.OrdinalIgnoreCase))
            {
                Identifier typeLimit = Identifier.SkillTraining;
                Prereq left = null;
                Prereq prereqPtr3 = InternalizeElement("Diplomacy", typeLimit);
                Prereq right = InternalizeElement("Insight", typeLimit);
                left = Prereq.And(prereqPtr3, right);
                prereqPtr3 = InternalizeElement("Diplomacy", typeLimit);
                right = InternalizeElement("Nature", typeLimit);
                Prereq prereqPtr4 = Prereq.And(prereqPtr3, right);
                left = Prereq.Or(left, prereqPtr4);
                prereqPtr3 = InternalizeElement("Diplomacy", typeLimit);
                right = InternalizeElement("Stealth", typeLimit);
                prereqPtr4 = Prereq.And(prereqPtr3, right);
                left = Prereq.Or(left, prereqPtr4);
                prereqPtr3 = InternalizeElement("Insight", typeLimit);
                right = InternalizeElement("Nature", typeLimit);
                prereqPtr4 = Prereq.And(prereqPtr3, right);
                left = Prereq.Or(left, prereqPtr4);
                prereqPtr3 = InternalizeElement("Insight", typeLimit);
                right = InternalizeElement("Stealth", typeLimit);
                prereqPtr4 = Prereq.And(prereqPtr3, right);
                left = Prereq.Or(left, prereqPtr4);
                prereqPtr3 = InternalizeElement("Nature", typeLimit);
                right = InternalizeElement("Stealth", typeLimit);
                prereqPtr4 = Prereq.And(prereqPtr3, right);
                return Prereq.Or(left, prereqPtr4);
            }
            return null;
        }

        Prereq RaceClass(StringSegment text)
        {
            int index = text.IndexOf(' ');
            if (index >= 0)
            {
                var potentialRace = Identifier.Get(text.Substring(0, index).ToString());

                RuleElement race;
                if (this.index.TryGetElement(Identifier.Race, potentialRace, out race))
                {
                    var potentialClass = Identifier.Get(text.Substring(index + 1).ToString());

                    RuleElement cls;
                    if (this.index.TryGetElement(Identifier.CountsAsClass, potentialClass, out cls))
                    {
                        return Prereq.And(Prereq.Element(race.Id), Prereq.Element(cls.Id));
                    }

                    if (this.index.TryGetElement(Identifier.Class, potentialClass, out cls))
                    {
                        return Prereq.And(Prereq.Element(race.Id), Prereq.Element(cls.Id));
                    }
                }
            }

            return null;
        }

        static bool MeleeDilettante(/*Character character*/)
        {
            throw new NotImplementedException();
        }

        static bool ImplementDilettante(/*Character character*/)
        {
            throw new NotImplementedException();
        }

        static bool CountsAsClassDilettante(/*Character character*/)
        {
            throw new NotImplementedException();
        }

        static bool HealingInfusion(RuleElement element)
        {
            throw new NotImplementedException();
        }

        static StringSegment TierOpt(StringSegment prereqs)
        {
            // More egregious hacks. Wow. If the prereq has both a level restriction and a tier restriction,
            // remove the tier restriction.
            //
            if (prereqs.StartsWith("11th level", StringComparison.OrdinalIgnoreCase) &&
                prereqs.EndsWith("; Paragon Tier", StringComparison.OrdinalIgnoreCase))
            {
                return prereqs.Substring(0, prereqs.Length - 14 /* "; Paragon Tier".Length */);
            }

            if (prereqs.StartsWith("21st level", StringComparison.OrdinalIgnoreCase) &&
                prereqs.EndsWith("; Epic Tier", StringComparison.OrdinalIgnoreCase))
            {
                return prereqs.Substring(0, prereqs.Length - 11 /* "; Epic Tier".Length */);
            }

            return prereqs;
        }

        static bool Matches(StringSegment segment, int offset, string value)
        {
            if (segment.Length - offset < value.Length) { return false; }
            return string.Compare(
                segment.String,
                segment.Offset + offset,
                value,
                0,
                value.Length,
                StringComparison.OrdinalIgnoreCase) == 0;
        }

        class LineParse
        {
            readonly bool isAnd = true;
            readonly List<StringSegment> segments = new List<StringSegment>();

            public LineParse(string text, char separator)
                : this(new StringSegment(text), separator)
            {
            }

            public LineParse(StringSegment text, char separator)
            {
                int offset = 0;
                while (offset < text.Length)
                {
                    while (offset < text.Length && Char.IsWhiteSpace(text[offset])) { offset++; }

                    int start = offset;
                    int separatorLength = 1;
                    int parenCount = 0;

                    while (offset < text.Length)
                    {
                        if (text[offset] == separator)
                        {
                            if (Matches(text, offset, ", or "))
                            {
                                separatorLength = 5;
                                this.isAnd = false;
                            }
                            else if (Matches(text, offset, ", and "))
                            {
                                separatorLength = 6;
                            }
                            break;
                        }
                        else
                        {
                            if (text[offset] == '(')
                            {
                                parenCount++;
                            }
                            else if (text[offset] == ')')
                            {
                                parenCount--;
                            }

                            if ((parenCount == 0) && (separator == ',') && Matches(text, offset, " and "))
                            {
                                separatorLength = 5;
                                break;
                            }
                        }

                        offset++;
                    }

                    int end = offset;
                    while (end > start && Char.IsWhiteSpace(text[end-1])) 
                    { 
                        end--; 
                    }

                    segments.Add(text.Substring(start, end - start));
                    offset += separatorLength;
                }
            }

            public bool IsAnd { get { return this.isAnd; } }

            public IList<StringSegment> Segments { get { return this.segments; } }
        }


        class PredicatePrereq : Prereq
        {
            readonly Func<bool> checkFunc;

            public PredicatePrereq(Func<bool> checkFunc)
            {
                this.checkFunc = checkFunc;
            }

            public override void Bind(RuleIndex index)
            {
                throw new NotImplementedException();
            }
        }

        class ElementLoopPrereq : Prereq
        {
            readonly Func<RuleElement, bool> predicate;
            readonly Identifier type;

            public ElementLoopPrereq(Func<RuleElement, bool> predicate, Identifier type)
            {
                this.predicate = predicate;
                this.type = type;
            }

            public override void Bind(RuleIndex index)
            {
                // Apply predicate to rules of type.
                throw new NotImplementedException();
            }
        }

        class MoreThanOneClassPrereq : Prereq
        {
            RuleElement[] elements;

            public override void Bind(RuleIndex index)
            {
                // TODO: This is binding code:
                List<RuleElement> elements = new List<RuleElement>();
                elements.AddRange(index.GetElementsByType(Identifier.Get("CountsAsClass"))); // TODO: Make static
                elements.Add(index.GetElement(Identifier.Class, Identifier.Get("hybrid")));

                // TODO: ADVANCED BINDING: Pull in all associated elements. 
                this.elements = elements.ToArray();
            }
        }

        public class RememberedKnackPrereq : Prereq
        {
            public override void Bind(RuleIndex index)
            {
                foreach (RuleElement element in index.GetElementsByType(Identifier.Feat))
                {
                    string value;
                    if (!element.Specifics.TryGetValue("type", out value)) { continue; }
                    if (!String.Equals(value, "multiclass ", StringComparison.OrdinalIgnoreCase)) { continue; }

                    // There's something magic here... checking for something like skill training, but I can't
                    // deduce it because the code dips into unknowable internals of the InternalRule structure.
                    //

                }
            }
        }

        class AnyFeatPrereq : Prereq
        {
            readonly StringSegment text;

            public AnyFeatPrereq(StringSegment text)
            {
                this.text = text;
            }

            public override void Bind(RuleIndex index)
            {
                foreach (RuleElement element in index.GetElementsByType(Identifier.Feat))
                {
                    // This is a bit insane.... it looks like we're getting feats (ws.db + 0x24)
                    // and then going through the type field (StringTableStr.{ctor}(&str3, "type", 
                    // ws.table)) and then trying to find our text in that field. But we already
                    // know that the type field contains "feat", so WTF?
                }
            }
        }


        class AnyWarlockPactPrereq : Prereq
        {
            public override void Bind(RuleIndex index)
            {
                // Unknown what this does.
                // Useful strings: "Eldritch Pact", "CountsAsPact"
                throw new NotImplementedException();
            }
        }


        class MulticlassDivinePrereq : Prereq
        {
            public override void Bind(RuleIndex index)
            {
                //Prereq previous = null;
                //RulesTypeDB* edbPtr = *((RulesTypeDB**) (*(((int*) (ws.db + 0x24))) + 20));
                //for (uint i = 0; i < *(((int*) (edbPtr + 0x10))); i++)
                //{
                //    StringTableStr str4;
                //    StringTableStr str5;
                //    RulesElement* elementPtr2 = *((RulesElement**) (*(((int*) (edbPtr + 12))) + (i * 4)));
                //    StringTableStr* modopt(IsConst) modopt(IsConst) field = D20RulesEngine.StringTableStr.{ctor}(&str5, "type", ws.table);
                //    ws.C_RulesElementField(&str4, elementPtr2, field);
                //    if ((wcslen(D20RulesEngine.StringTableStr..QA_W(&str4)) > wcslen(&?A0xf75eff9b."multiclass ")) && (_wcsnicmp(D20RulesEngine.StringTableStr..QA_W(&str4), &?A0xf75eff9b."multiclass ", wcslen(&?A0xf75eff9b."multiclass "), StringComparison.OrdinalIgnoreCase)))
                //    {
                //        StringTableStr str3;
                //        D20RulesEngine.StringTableStr.{ctor}(&str3, (char*) (D20RulesEngine.StringTableStr..QA_W(&str4) + (wcslen(&?A0xf75eff9b."multiclass ") * 2)), ws.table);
                //        RulesElement* elementPtr = D20RulesEngine.FindRulesElement(ws, D20RulesEngine.StringTableStr..QA_W(&str3), *((D20Type**) (ws.db + 0x44)));
                //        if (elementPtr != null)
                //        {
                //            StringTableStr str;
                //            StringTableStr str2;
                //            StringTableStr* modopt(IsConst) modopt(IsConst) strPtr = D20RulesEngine.StringTableStr.{ctor}(&str2, "Power Source", ws.table);
                //            ws.C_RulesElementField(&str, elementPtr, strPtr);
                //            if (_wcsnicmp(D20RulesEngine.StringTableStr..QA_W(&str), &?A0xf75eff9b."Divine", 6, StringComparison.OrdinalIgnoreCase))
                //            {
                //                previous = D20RulesEngine.CreateElementPrereq(ws, elementPtr2, false, previous, null);
                //            }
                //        }
                //    }
                //}
                //return previous;

                throw new NotImplementedException();
            }
        }

        class AnyClassSpecificPrereq : Prereq
        {
            public override void Bind(RuleIndex index)
            {
                //    Prereq previous = null;
                //    RulesTypeDB* edbPtr = *((RulesTypeDB**) (*(((int*) (ws.db + 0x24))) + 20));
                //    uint num = 0;
                //    goto Label_0035;
                //Label_0031:
                //    num++;
                //Label_0035:
                //    if (num < *(((int*) (edbPtr + 0x10))))
                //    {
                //        RulesElement* elementPtr = *((RulesElement**) (*(((int*) (edbPtr + 12))) + (num * 4)));
                //        if ((_wcsicmp(D20RulesEngine.StringTableStr..QA_W((StringTableStr* modopt(IsConst) modopt(IsConst)) (elementPtr + 0x34)), &?A0xf75eff9b."Student of the Plague") != 0) && (_wcsicmp(D20RulesEngine.StringTableStr..QA_W((StringTableStr* modopt(IsConst) modopt(IsConst)) (elementPtr + 0x34)), &?A0xf75eff9b."Adept Dilettante") != 0))
                //        {
                //            StringTableStr str;
                //            StringTableStr str2;
                //            StringTableStr str3;
                //            StringTableStr* modopt(IsConst) modopt(IsConst) field = D20RulesEngine.StringTableStr.{ctor}(&str3, "type", ws.table);
                //            ws.C_RulesElementField(&str2, elementPtr, field);
                //            if ((wcslen(D20RulesEngine.StringTableStr..QA_W(&str2)) <= wcslen(&?A0xf75eff9b."multiclass ")) || (_wcsnicmp(D20RulesEngine.StringTableStr..QA_W(&str2), &?A0xf75eff9b."multiclass ", wcslen(&?A0xf75eff9b."multiclass ")) != 0))
                //            {
                //                goto Label_0031;
                //            }
                //            D20RulesEngine.StringTableStr.{ctor}(&str, (char*) (D20RulesEngine.StringTableStr..QA_W(&str2) + (wcslen(&?A0xf75eff9b."multiclass ") * 2)), ws.table);
                //            if (D20RulesEngine.FindRulesElement(ws, D20RulesEngine.StringTableStr..QA_W(&str), *((D20Type**) (ws.db + 0x44))) == null)
                //            {
                //                goto Label_0031;
                //            }
                //        }
                //        previous = D20RulesEngine.CreateElementPrereq(ws, elementPtr, false, previous, null);
                //        goto Label_0031;
                //    }
                //    return previous;
                throw new NotImplementedException();
            }
        }

        class AnyClassMoreSpecificPrereq : Prereq
        {
            readonly bool flag2;

            public AnyClassMoreSpecificPrereq(bool flag)
            {
                this.flag2 = flag;
            }

            public override void Bind(RuleIndex index)
            {
                //                Prereq previous = null;
                //RulesTypeDB* edbPtr = *((RulesTypeDB**) (*(((int*) (ws.db + 0x24))) + 20));
                //for (uint i = 0; i < *(((int*) (edbPtr + 0x10))); i++)
                //{
                //    StringTableStr str3;
                //    StringTableStr str4;
                //    RulesElement* elementPtr2 = *((RulesElement**) (*(((int*) (edbPtr + 12))) + (i * 4)));
                //    StringTableStr* modopt(IsConst) modopt(IsConst) field = D20RulesEngine.StringTableStr.{ctor}(&str4, "type", ws.table);
                //    ws.C_RulesElementField(&str3, elementPtr2, field);
                //    if ((wcslen(D20RulesEngine.StringTableStr..QA_W(&str3)) > wcslen(&?A0xf75eff9b."multiclass ")) && (_wcsnicmp(D20RulesEngine.StringTableStr..QA_W(&str3), &?A0xf75eff9b."multiclass ", wcslen(&?A0xf75eff9b."multiclass "), StringComparison.OrdinalIgnoreCase)))
                //    {
                //        StringTableStr str2;
                //        D20RulesEngine.StringTableStr.{ctor}(&str2, (char*) (D20RulesEngine.StringTableStr..QA_W(&str3) + (wcslen(&?A0xf75eff9b."multiclass ") * 2)), ws.table);
                //        RulesElement* elementPtr = D20RulesEngine.FindRulesElement(ws, D20RulesEngine.StringTableStr..QA_W(&str2), *((D20Type**) (ws.db + 0x44)));
                //        if (elementPtr == null)
                //        {
                //            elementPtr = D20RulesEngine.FindRulesElement(ws, D20RulesEngine.StringTableStr..QA_W(&str2), ws.TypeByName("Pseudo Class"));
                //        }
                //        if (elementPtr != null)
                //        {
                //            bool flag;
                //            StringTableStr str;
                //            ws.C_RulesElementField(&str, elementPtr, &?A0xf75eff9b."_PARSED_CLASS_FEATURE");
                //            if (stristr(D20RulesEngine.StringTableStr..QA_W(&str), &?A0xf75eff9b."Psionic Augmentation") != null)
                //            {
                //                flag = true;
                //            }
                //            else
                //            {
                //                flag = false;
                //            }
                //            bool flag3 = flag;
                //            if (!(flag2 ^ flag3))
                //            {
                //                previous = D20RulesEngine.CreateElementPrereq(ws, elementPtr2, false, previous, null);
                //            }
                //        }
                //    }
                //}
                //return previous;
                throw new NotImplementedException();
            }
        }

        class AnyClassNoPsiPrereq : Prereq
        {
            public override void Bind(RuleIndex index)
            {
                //Prereq previous = null;
                //RulesTypeDB* edbPtr = *((RulesTypeDB**) (*(((int*) (ws.db + 0x44))) + 20));
                //for (uint i = 0; i < *(((int*) (edbPtr + 0x10))); i++)
                //{
                //    StringTableStr str;
                //    RulesElement* elementPtr = *((RulesElement**) (*(((int*) (edbPtr + 12))) + (i * 4)));
                //    ws.C_RulesElementField(&str, elementPtr, &?A0xf75eff9b."_PARSED_CLASS_FEATURE");
                //    if (stristr(D20RulesEngine.StringTableStr..QA_W(&str), &?A0xf75eff9b."Psionic Augmentation") == null)
                //    {
                //        previous = D20RulesEngine.CreateElementPrereq(ws, elementPtr, false, previous, null);
                //    }
                //}
                //return previous;
                throw new NotImplementedException();
            }
        }

        class CountsAsClassPowerSourcePrereq : Prereq
        {
            readonly Identifier exclude;
            readonly StringSegment source;

            public CountsAsClassPowerSourcePrereq(Identifier exclude, StringSegment source)
            {
                this.exclude = exclude;
                this.source = source;
            }

            public override void Bind(RuleIndex index)
            {
                //Prereq previous = null;
                // for (RulesTypeDB* edbPtr = *((RulesTypeDB**) (ws.db + 8)); edbPtr != null; edbPtr = *((RulesTypeDB**) edbPtr))
                // {
                //     if (_wcsicmp(&?A0xf75eff9b."CountsAsClass", *((char modopt(IsConst)**) (*(((int*) (edbPtr + 8))) + 12)), StringComparison.OrdinalIgnoreCase))
                //     {
                //         for (uint i = 0; i < *(((int*) (edbPtr + 0x10))); i++)
                //         {
                //             RulesElement* elementPtr2 = *((RulesElement**) (*(((int*) (edbPtr + 12))) + (i * 4)));
                //             RulesElement* elementPtr = D20RulesEngine.FindRulesElement(ws, D20RulesEngine.StringTableStr..QA_W((StringTableStr* modopt(IsConst) modopt(IsConst)) (elementPtr2 + 0x34)), *((D20Type**) (ws.db + 0x44)));
                //             if ((elementPtr != null) && !D20RulesEngine.StringTableStr.==((StringTableStr* modopt(IsConst) modopt(IsConst)) (elementPtr + 0x34), exclude))
                //             {
                //                 StringTableStr str;
                //                 StringTableStr str2;
                //                 StringTableStr* modopt(IsConst) modopt(IsConst) field = D20RulesEngine.StringTableStr.{ctor}(&str2, ws.table, &?A0xf75eff9b."Power Source");
                //                 ws.C_RulesElementField(&str, elementPtr, field);
                //                 if (_wcsnicmp(D20RulesEngine.StringTableStr..QA_W(&str), (char modopt(IsConst)*) text, len, StringComparison.OrdinalIgnoreCase))
                //                 {
                //                     previous = D20RulesEngine.CreateElementPrereq(ws, elementPtr2, false, previous, null);
                //                 }
                //             }
                //         }
                //     }
                // }
                // return previous;
                throw new NotImplementedException();
            }
        }

    }
}
