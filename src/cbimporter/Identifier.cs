namespace cbimporter
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading;

    public sealed class Identifier : IComparable<Identifier>
    {
        static readonly IdentifierTable table = new IdentifierTable();
        static readonly IdentifierComparer comparer = new IdentifierComparer();
        
        public static IComparer<Identifier> Comparer { get { return comparer; } }

        public static readonly Identifier Alignment = Identifier.Get("alignment");
        public static readonly Identifier Armor = Identifier.Get("Armor");
        public static readonly Identifier Arms = Identifier.Get("Arms"); 
        public static readonly Identifier Asterisk = Identifier.Get("*");
        public static readonly Identifier Background = Identifier.Get("Background");
        public static readonly Identifier Class = Identifier.Get("Class");
        public static readonly Identifier ClassFeature = Identifier.Get("class feature");
        public static readonly Identifier Companion = Identifier.Get("Companion");
        public static readonly Identifier CountsAsClass = Identifier.Get("CountsAsClass");
        public static readonly Identifier DualShield = Identifier.Get("DUAL-SHIELD");
        public static readonly Identifier DualWielding = Identifier.Get("DUAL-WIELDING");
        public static readonly Identifier Feat = Identifier.Get("Feat");
        public static readonly Identifier Feet = Identifier.Get("Feet");
        public static readonly Identifier Good = Identifier.Get("Good");
        public static readonly Identifier Harper = Identifier.Get("Harper");
        public static readonly Identifier Hands = Identifier.Get("Hands");
        public static readonly Identifier Head = Identifier.Get("Head");
        public static readonly Identifier Implement = Identifier.Get("implement");
        public static readonly Identifier Internal = Identifier.Get("Internal");
        public static readonly Identifier LawfulGood = Identifier.Get("Lawful Good");
        public static readonly Identifier Level = Identifier.Get("Level");
        public static readonly Identifier MainHand = Identifier.Get("MainHand");
        public static readonly Identifier Neck = Identifier.Get("Neck");
        public static readonly Identifier One = Identifier.Get("1");
        public static readonly Identifier OnlyWeapon = Identifier.Get("only-weapon");
        public static readonly Identifier OffHand = Identifier.Get("OffHand");
        public static readonly Identifier Power = Identifier.Get("Power");
        public static readonly Identifier PowerSource = Identifier.Get("Power Source");
        public static readonly Identifier Proficiency = Identifier.Get("Proficiency");
        public static readonly Identifier Race = Identifier.Get("Race");
        public static readonly Identifier RingOne = Identifier.Get("RingOne");
        public static readonly Identifier RingTwo = Identifier.Get("RingTwo");
        public static readonly Identifier SkillTraining = Identifier.Get("Skill Training");
        public static readonly Identifier Slot = Identifier.Get("SLOT");
        public static readonly Identifier Versatile = Identifier.Get("Versatile");
        public static readonly Identifier Waist = Identifier.Get("Waist");
        public static readonly Identifier Weapon = Identifier.Get("Weapon");
        public static readonly Identifier WeaponGroup = Identifier.Get("Weapon Group");

        public static readonly Identifier ID_INTERNAL_PARAGON_PATH_PARAGON_MULTICLASSING = Identifier.Get("ID_INTERNAL_PARAGON_PATH_PARAGON_MULTICLASSING");

        public static readonly Identifier TODO_UNKNOWN = null;

        readonly string value;

        Identifier(string value)
        {
            this.value = value;
        }

        public int Length { get { return this.value.Length; } }

        public int CompareTo(Identifier other)
        {
            if (other == null) { return 1; }
            return StringComparer.Ordinal.Compare(this.value, other.value);
        }
        
        public static Identifier Get(string value)
        {
            return table.Get(value);
        }

        public override string ToString()
        {
            return this.value;
        }

        class IdentifierComparer : IComparer<Identifier>
        {
            public int Compare(Identifier x, Identifier y)
            {
                if (x == y) { return 0; }
                if (x == null) { return 1; }
                if (y == null) { return -1; }
                return StringComparer.Ordinal.Compare(x.value, y.value);
            }
        }

        class IdentifierTable
        {
            readonly WaitCallback onCleanup;
            readonly Dictionary<string, WeakReference> table = new Dictionary<string, WeakReference>(StringComparer.OrdinalIgnoreCase);
            readonly ReaderWriterLockSlim tableLock = new ReaderWriterLockSlim(LockRecursionPolicy.NoRecursion);

            public IdentifierTable()
            {
                 onCleanup = new WaitCallback(Cleanup);
            }

            public Identifier Get(string value)
            {
                Identifier id;
                tableLock.EnterReadLock();
                try
                {
                    WeakReference idref;
                    if (this.table.TryGetValue(value, out idref))
                    {
                        id = (Identifier)idref.Target;
                        if (id != null) { return id; }
                    }
                }
                finally
                {
                    tableLock.ExitReadLock();
                }

                tableLock.EnterWriteLock();
                try
                {
                    WeakReference idref;
                    if (this.table.TryGetValue(value, out idref))
                    {
                        id = (Identifier)idref.Target;
                        if (id != null) { return id; }
                    }

                    id = new Identifier(value);
                    this.table[value] = new WeakReference(id);
                    
                    return id;
                }
                finally
                {
                    tableLock.ExitWriteLock();
                }
            }

            void Cleanup(object o)
            {
                string[] keys;

                tableLock.EnterReadLock();
                try
                {
                    keys = this.table.Keys.ToArray();
                }
                finally
                {
                    tableLock.ExitReadLock();
                }

                for (int i = 0; i < keys.Length; i++)
                {
                    this.tableLock.EnterWriteLock();
                    try
                    {
                        WeakReference reference = this.table[keys[i]];
                        if (!reference.IsAlive) { this.table.Remove(keys[i]); }
                    }
                    finally
                    {
                        this.tableLock.ExitWriteLock();
                    }
                }

                // Leak a cleanup token; during a Gen1 GC the finalizer will get run and we will get a scheduled 
                // cleanup. (This may well constitute abuse of the GC. Tricky!)
                //
                new CleanupToken(this);
            }

            void ScheduleCleanup()
            {
                ThreadPool.QueueUserWorkItem(this.onCleanup);
            }

            class CleanupToken
            {
                readonly IdentifierTable table;

                public CleanupToken(IdentifierTable table) { this.table = table; }
                ~CleanupToken() { this.table.ScheduleCleanup(); }
            }
        }
    }
}
