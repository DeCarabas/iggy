namespace cbimporter.Rules
{
    using System;
    using System.CodeDom.Compiler;
    using System.ComponentModel;
    using cbimporter.Model;


    public class WearingExpression : INotifyPropertyChanged
    {
        Character character;
        readonly Identifier[] parts;

        WearingExpression(Identifier[] parts)
        {
            this.parts = parts;
        }

        public bool Value
        {
            get
            {
                if (this.parts.Length == 1)
                {
                    Item[] equipment = character.Inventory.EquippedItems;
                    for (int i = 0; i < equipment.Length; i++)
                    {
                        if (equipment[i].MatchesCategory(this.parts[0])) { return true; }
                    }
                }
                else if (this.parts.Length > 1)
                {
                    if (this.parts[0] == Identifier.DualWielding)
                    {
                        // Cases: DUAL-WIELDING:
                        //        
                        //        DUAL-WIELDING:rapier-blade
                        Identifier mainCat = this.parts[1];
                        Identifier offHandCat = this.parts.Length == 2 ? this.parts[1] : this.parts[2];

                        Item item = character.Inventory.MainHand;
                        if (item == null || !item.MatchesCategory(Identifier.Weapon)) { return false; }
                        if (mainCat.Length > 0 && !item.MatchesCategory(mainCat)) { return false; }

                        item = character.Inventory.OffHand;
                        if (item == null || !item.MatchesCategory(Identifier.Weapon)) { return false; }
                        if (offHandCat.Length > 0 && !item.MatchesCategory(offHandCat)) { return false; }

                        return true;
                    }
                    else if (parts[0] == Identifier.DualShield)
                    {
                        // e.g., "DUAL-SHIELD:"
                        throw new NotImplementedException();
                    }
                    else if (parts[0] == Identifier.Implement)
                    {
                        // e.g., "implement:staff"
                        throw new NotImplementedException();
                    }
                    else if (parts[0] == Identifier.Versatile)
                    {
                        // like a bastard sword, in both hands.
                        throw new NotImplementedException();
                    }
                    else if (parts[0] == Identifier.Slot)
                    {
                        Item item = character.Inventory.GetEquippedItem(parts[1]);
                        return (item != null);
                    }
                    else if (parts[0] == Identifier.OnlyWeapon)
                    {
                        Item item = character.Inventory.GetEquippedItem(Identifier.OffHand);
                        if (item != null) { return false; }

                        item = character.Inventory.GetEquippedItem(Identifier.MainHand);
                        if (item == null) { return false; }
                        return item.MatchesCategory(this.parts[1]);
                    }
                    else
                    {
                        Item[] equipment = character.Inventory.EquippedItems;
                        for (int i = 0; i < equipment.Length; i++)
                        {
                            if (equipment[i] == null) { continue; }
                            if (equipment[i].Mundane != null && equipment[i].Mundane.Type == this.parts[0])
                            {
                                bool matches = true;
                                for (int j = 1; j < this.parts.Length; i++)
                                {
                                    if (this.parts[j].Length > 0 &&
                                        this.parts[j] != Identifier.Asterisk &&
                                        !equipment[i].MatchesCategory(this.parts[j]))
                                    {
                                        matches = false;
                                        break;
                                    }
                                }

                                if (matches) { return true; }
                            }
                        }

                        return false;
                    }
                }

                return false;
            }
        }
        public event PropertyChangedEventHandler PropertyChanged;

        public void Bind(Character character)
        {
            this.character = character;
            this.character.Inventory.PropertyChanged += InventoryPropertyChanged;
        }

        public void WriteJS(IndentedTextWriter writer)
        {
            // This is highly bogus, yes?
            if (this.parts.Length == 1)
            {
                writer.Write("model.inventory.equipped.some(function(i) {{ return i.matchesCategory('{0}'); }})");
            }
            else if (this.parts.Length > 1)
            {
                if (this.parts[0] == Identifier.DualWielding)
                {
                    // Cases: DUAL-WIELDING:
                    //        
                    //        DUAL-WIELDING:rapier-blade
                    Identifier mainCat = this.parts[1];
                    Identifier offHandCat = this.parts.Length == 2 ? this.parts[1] : this.parts[2];

                    writer.Write("model.dualWielding('{0}', '{1}')", mainCat, offHandCat);
                }
                else if (parts[0] == Identifier.DualShield)
                {
                    // e.g., "DUAL-SHIELD:"
                    writer.Write("false /* TBI: DUAL-SHIELD: */");
                }
                else if (parts[0] == Identifier.Implement)
                {
                    // e.g., "implement:staff"
                    writer.Write("false /* TBI: implement:staff */");
                }
                else if (parts[0] == Identifier.Versatile)
                {
                    // like a bastard sword, in both hands.
                    writer.Write("false /* TBI: versatile */");
                }
                else if (parts[0] == Identifier.Slot)
                {
                    writer.Write("model.inventory['{0}']", parts[1]);
                }
                else if (parts[0] == Identifier.OnlyWeapon)
                {
                    writer.Write("model.onlyWeaponIs('{0}')", this.parts[1]);
                }
                else
                {
                    // TODO: I suspect I can make this run a whole lot faster in the runtime.
                    //
                    writer.Write("model.wearing('{0}'", this.parts[0]);

                    bool writtenContinuation = false;
                    bool writeComma = false;
                    for (int i = 1; i < this.parts.Length; i++)
                    {
                        if (this.parts[i] == Identifier.Asterisk) { continue; }
                        if (this.parts[i].Length == 0) { continue; }

                        if (!writtenContinuation)
                        {
                            writer.Write(", [");
                            writtenContinuation = true;
                        }

                        if (writeComma)
                        {
                            writer.Write(",");
                        }

                        writer.Write("'{0}'", this.parts[i]);
                        writeComma = true;
                    }
                    if (writtenContinuation)
                    {
                        writer.Write("]");
                    }
                    writer.Write(")");
                }
            }
            else
            {
                writer.Write("false /* {0} {1} */", this, this.parts.Length);
            }
        }

        void InventoryPropertyChanged(object sender, PropertyChangedEventArgs args)
        {
            // TODO: Better granularity
            Notify("Value");
        }

        public static WearingExpression New(string expression)
        {
            Identifier[] parsed;
            string[] parts = expression.Split(':');
            if (parts.Length == 1)
            {
                parsed = new Identifier[] { Identifier.Get(parts[0]) };
            }
            else if (parts.Length == 2)
            {
                Identifier first = Identifier.Get(parts[0]);
                string[] others;
                if (first == Identifier.DualWielding)
                {
                    others = parts[1].Split('-');
                }
                else
                {
                    others = parts[1].Split(',');
                }

                parsed = new Identifier[others.Length + 1];
                parsed[0] = first;
                for (int i = 0; i < others.Length; i++)
                {
                    parsed[i + 1] = Identifier.Get(others[i]);
                }
            }
            else
            {
                throw new FormatException();
            }

            return new WearingExpression(parsed);
        }

        protected void Notify(string property)
        {
            if (PropertyChanged != null) { PropertyChanged(this, new PropertyChangedEventArgs(property)); }
        }

        public void Unbind(Character character)
        {
            this.character.Inventory.PropertyChanged -= InventoryPropertyChanged;
            this.character = null;
        }
    }
}
