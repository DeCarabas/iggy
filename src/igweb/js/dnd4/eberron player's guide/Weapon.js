(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Weapon = types['Weapon'] || (types['Weapon'] = {});
  te = Weapon["Battlefist"] = new RulesElement({
    name: "Battlefist",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_BATTLEFIST",
    source: "Eberron Player's Guide",
    categories: ["Battlefist", "ID_INTERNAL_WEAPON_BATTLEFIST"]
  });
  byID[te.id] = te;
  
  te = Weapon["Cutting Wheel"] = new RulesElement({
    name: "Cutting Wheel",
    type: "Weapon",
    id: "ID_FMP_WEAPON_79",
    source: "Eberron Player's Guide",
    categories: ["Cutting Wheel", "ID_FMP_WEAPON_79", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Cutting Wheel (Large)"] = new RulesElement({
    name: "Cutting Wheel (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_CUTTING_WHEEL",
    source: "Eberron Player's Guide",
    categories: ["Cutting Wheel (Large)", "ID_INTERNAL_WEAPON_LARGE_CUTTING_WHEEL"]
  });
  byID[te.id] = te;
  
  te = Weapon["double scimitar"] = new RulesElement({
    name: "double scimitar",
    type: "Weapon",
    id: "ID_FMP_WEAPON_83",
    source: "Eberron Player's Guide",
    categories: ["double scimitar", "ID_FMP_WEAPON_83", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Double scimitar - Secondary end"] = new RulesElement({
    name: "Double scimitar - Secondary end",
    type: "Weapon",
    id: "ID_FMP_WEAPON_92",
    source: "Eberron Player's Guide",
    categories: ["Double scimitar - Secondary end", "ID_FMP_WEAPON_92", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed"]
  });
  byID[te.id] = te;
  
  te = Weapon["Double scimitar - Secondary end (Large)"] = new RulesElement({
    name: "Double scimitar - Secondary end (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_DOUBLE_SCIMITAR_-_SECONDARY_END",
    source: "Eberron Player's Guide",
    categories: ["Double scimitar - Secondary end (Large)", "ID_INTERNAL_WEAPON_LARGE_DOUBLE_SCIMITAR_-_SECONDARY_END"]
  });
  byID[te.id] = te;
  
  te = Weapon["Double Scimitar (Large)"] = new RulesElement({
    name: "Double Scimitar (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_DOUBLE_SCIMITAR",
    source: "Eberron Player's Guide",
    categories: ["Double Scimitar (Large)", "ID_INTERNAL_WEAPON_LARGE_DOUBLE_SCIMITAR"]
  });
  byID[te.id] = te;
  
  te = Weapon["Drow Long Knife"] = new RulesElement({
    name: "Drow Long Knife",
    type: "Weapon",
    id: "ID_FMP_WEAPON_80",
    source: "Eberron Player's Guide",
    categories: ["Drow Long Knife", "ID_FMP_WEAPON_80", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Drow Long Knife (Large)"] = new RulesElement({
    name: "Drow Long Knife (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_DROW_LONG_KNIFE",
    source: "Eberron Player's Guide",
    categories: ["Drow Long Knife (Large)", "ID_INTERNAL_WEAPON_LARGE_DROW_LONG_KNIFE"]
  });
  byID[te.id] = te;
  
  te = Weapon["Talenta Boomerang"] = new RulesElement({
    name: "Talenta Boomerang",
    type: "Weapon",
    id: "ID_FMP_WEAPON_85",
    source: "Eberron Player's Guide",
    categories: ["Talenta Boomerang", "ID_FMP_WEAPON_85", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Talenta Boomerang (Large)"] = new RulesElement({
    name: "Talenta Boomerang (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_TALENTA_BOOMERANG",
    source: "Eberron Player's Guide",
    categories: ["Talenta Boomerang (Large)", "ID_INTERNAL_WEAPON_LARGE_TALENTA_BOOMERANG"]
  });
  byID[te.id] = te;
  
  te = Weapon["Talenta Sharrash"] = new RulesElement({
    name: "Talenta Sharrash",
    type: "Weapon",
    id: "ID_FMP_WEAPON_82",
    source: "Eberron Player's Guide",
    categories: ["Talenta Sharrash", "ID_FMP_WEAPON_82", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_FMP_WEAPON_GROUP_22", "polearm", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Talenta Sharrash (Large)"] = new RulesElement({
    name: "Talenta Sharrash (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_TALENTA_SHARRASH",
    source: "Eberron Player's Guide",
    categories: ["Talenta Sharrash (Large)", "ID_INTERNAL_WEAPON_LARGE_TALENTA_SHARRASH"]
  });
  byID[te.id] = te;
  
  te = Weapon["Talenta Tangat"] = new RulesElement({
    name: "Talenta Tangat",
    type: "Weapon",
    id: "ID_FMP_WEAPON_81",
    source: "Eberron Player's Guide",
    categories: ["Talenta Tangat", "ID_FMP_WEAPON_81", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Talenta Tangat (Large)"] = new RulesElement({
    name: "Talenta Tangat (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_TALENTA_TANGAT",
    source: "Eberron Player's Guide",
    categories: ["Talenta Tangat (Large)", "ID_INTERNAL_WEAPON_LARGE_TALENTA_TANGAT"]
  });
  byID[te.id] = te;
  
  te = Weapon["Xen'drik Boomerang"] = new RulesElement({
    name: "Xen'drik Boomerang",
    type: "Weapon",
    id: "ID_FMP_WEAPON_86",
    source: "Eberron Player's Guide",
    categories: ["Xen'drik Boomerang", "ID_FMP_WEAPON_86", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Xen'drik Boomerang (Large)"] = new RulesElement({
    name: "Xen'drik Boomerang (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_XEN'DRIK_BOOMERANG",
    source: "Eberron Player's Guide",
    categories: ["Xen'drik Boomerang (Large)", "ID_INTERNAL_WEAPON_LARGE_XEN'DRIK_BOOMERANG"]
  });
  byID[te.id] = te;
  
  te = Weapon["Zulaat"] = new RulesElement({
    name: "Zulaat",
    type: "Weapon",
    id: "ID_FMP_WEAPON_84",
    source: "Eberron Player's Guide",
    categories: ["Zulaat", "ID_FMP_WEAPON_84", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Zulaat - Secondary end"] = new RulesElement({
    name: "Zulaat - Secondary end",
    type: "Weapon",
    id: "ID_FMP_WEAPON_91",
    source: "Eberron Player's Guide",
    categories: ["Zulaat - Secondary end", "ID_FMP_WEAPON_91", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed"]
  });
  byID[te.id] = te;
  
  te = Weapon["Zulaat - Secondary end (Large)"] = new RulesElement({
    name: "Zulaat - Secondary end (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_ZULAAT_-_SECONDARY_END",
    source: "Eberron Player's Guide",
    categories: ["Zulaat - Secondary end (Large)", "ID_INTERNAL_WEAPON_LARGE_ZULAAT_-_SECONDARY_END"]
  });
  byID[te.id] = te;
  
  te = Weapon["Zulaat (Large)"] = new RulesElement({
    name: "Zulaat (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_ZULAAT",
    source: "Eberron Player's Guide",
    categories: ["Zulaat (Large)", "ID_INTERNAL_WEAPON_LARGE_ZULAAT"]
  });
  byID[te.id] = te;
  
  
})(this);
