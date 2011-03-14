namespace cbimporter
{
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Linq;
    using System.Xml.Linq;

    static class XNames
    {
        public static readonly XName Alias = XName.Get("alias");
        public static readonly XName Category = XName.Get("Category");
        public static readonly XName Condition = XName.Get("condition");
        public static readonly XName Drop = XName.Get("drop");
        public static readonly XName Flavor = XName.Get("Flavor");
        public static readonly XName Grant = XName.Get("grant");
        public static readonly XName HalfPoint = XName.Get("half-point");
        public static readonly XName InternalID = XName.Get("internal-id");
        public static readonly XName Modify = XName.Get("modify");
        public static readonly XName Name = XName.Get("name");
        public static readonly XName Number = XName.Get("number");
        public static readonly XName NotWearing = XName.Get("not-wearing");
        public static readonly XName Optional = XName.Get("optional");
        public static readonly XName Prereqs = XName.Get("Prereqs");
        public static readonly XName PrintPrereqs = XName.Get("print-prereqs");
        public static readonly XName Replace = XName.Get("replace");
        public static readonly XName Rules = XName.Get("rules");
        public static readonly XName Select = XName.Get("select");
        public static readonly XName Source = XName.Get("source");
        public static readonly XName Specific = XName.Get("specific");
        public static readonly XName StatAdd = XName.Get("statadd");
        public static readonly XName StatAlias = XName.Get("statalias");
        public static readonly XName Suggest = XName.Get("suggest");
        public static readonly XName TextString = XName.Get("textstring");
        public static readonly XName Type = XName.Get("type");
        public static readonly XName Value = XName.Get("value");
        public static readonly XName Wearing = XName.Get("wearing");
    }
}
