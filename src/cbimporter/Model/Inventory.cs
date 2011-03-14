namespace cbimporter.Model
{
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Linq;
    using System.Xml.Linq;
    using System;
    using System.Diagnostics;
    using cbimporter.Rules;

    // This might be way over-engineered, but it was fun to build.
    //
    public class Inventory : INotifyPropertyChanged
    {
        static readonly Identifier[] slotNames = new Identifier[]
        {
            Identifier.Arms,
            Identifier.Feet,
            Identifier.Hands,
            Identifier.Head,
            Identifier.MainHand,
            Identifier.Neck,
            Identifier.OffHand,
            Identifier.RingOne,
            Identifier.RingTwo,
            Identifier.Waist,        
        };

        readonly Item[] equippedItems = new Item[slotNames.Length];

        public Item[] EquippedItems { get { return this.equippedItems; } }

        public Item MainHand
        {
            get { return this.equippedItems[(int)InventorySlot.MainHand]; } 
        }
        
        public Item OffHand
        { 
            get { return this.equippedItems[(int)InventorySlot.OffHand]; } 
        }

        public event PropertyChangedEventHandler PropertyChanged;

        public void Add(Item item)
        {
            throw new NotImplementedException();
        }        

        public Item GetEquippedItem(Identifier slot)
        {
            return this.equippedItems[GetSlotIndex(slot)];
        }

        static int GetSlotIndex(Identifier slot)
        {
            return Array.BinarySearch(slotNames, slot, Identifier.Comparer);
        }

        void Notify(string property)
        {
            if (PropertyChanged != null)
            {
                PropertyChanged(this, new PropertyChangedEventArgs(property));
            }
        }

        // NOTE: This is sorted. It is important that this is sorted in the same order that the names come in,
        //       because it is the order where we 
        enum InventorySlot
        {
            Arms,
            Feet,
            Hands,
            Head,
            MainHand,
            Neck,
            OffHand,
            RingOne,
            RingTwo,
            Waist,
        }
    }
}
