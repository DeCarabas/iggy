define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Weapon_Group = types['Weapon Group'] || (types['Weapon Group'] = {});
  te = Weapon_Group["axe"] = new engine.RulesElement({
    name: "axe",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_8",
    source: "Core",
    categories: ["axe", "ID_FMP_WEAPON_GROUP_8"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["Blowgun"] = new engine.RulesElement({
    name: "Blowgun",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_48",
    source: "Core",
    categories: ["Blowgun", "ID_FMP_WEAPON_GROUP_48"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["Bow"] = new engine.RulesElement({
    name: "Bow",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_32",
    source: "Core",
    categories: ["Bow", "ID_FMP_WEAPON_GROUP_32"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["Crossbow"] = new engine.RulesElement({
    name: "Crossbow",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_29",
    source: "Core",
    categories: ["Crossbow", "ID_FMP_WEAPON_GROUP_29"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["Flail"] = new engine.RulesElement({
    name: "Flail",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_10",
    source: "Core",
    categories: ["Flail", "ID_FMP_WEAPON_GROUP_10"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["Garrote"] = new engine.RulesElement({
    name: "Garrote",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_47",
    source: "Core",
    categories: ["Garrote", "ID_FMP_WEAPON_GROUP_47"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["hammer"] = new engine.RulesElement({
    name: "hammer",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_11",
    source: "Core",
    categories: ["hammer", "ID_FMP_WEAPON_GROUP_11"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["Heavy Blade"] = new engine.RulesElement({
    name: "Heavy Blade",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_7",
    source: "Core",
    categories: ["Heavy Blade", "ID_FMP_WEAPON_GROUP_7"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["Holy Symbol"] = new engine.RulesElement({
    name: "Holy Symbol",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_38",
    source: "Core",
    categories: ["Holy Symbol", "ID_FMP_WEAPON_GROUP_38"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["Ki Focus"] = new engine.RulesElement({
    name: "Ki Focus",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_49",
    source: "Core",
    categories: ["Ki Focus", "ID_FMP_WEAPON_GROUP_49"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["light blade"] = new engine.RulesElement({
    name: "light blade",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_2",
    source: "Core",
    categories: ["light blade", "ID_FMP_WEAPON_GROUP_2"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["Mace"] = new engine.RulesElement({
    name: "Mace",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_1",
    source: "Core",
    categories: ["Mace", "ID_FMP_WEAPON_GROUP_1"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["Orb"] = new engine.RulesElement({
    name: "Orb",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_39",
    source: "Core",
    categories: ["Orb", "ID_FMP_WEAPON_GROUP_39"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["pick"] = new engine.RulesElement({
    name: "pick",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_13",
    source: "Core",
    categories: ["pick", "ID_FMP_WEAPON_GROUP_13"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["polearm"] = new engine.RulesElement({
    name: "polearm",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_22",
    source: "Core",
    categories: ["polearm", "ID_FMP_WEAPON_GROUP_22"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["Rod"] = new engine.RulesElement({
    name: "Rod",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_40",
    source: "Core",
    categories: ["Rod", "ID_FMP_WEAPON_GROUP_40"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["Sling"] = new engine.RulesElement({
    name: "Sling",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_30",
    source: "Core",
    categories: ["Sling", "ID_FMP_WEAPON_GROUP_30"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["Spear"] = new engine.RulesElement({
    name: "Spear",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_35",
    source: "Core",
    categories: ["Spear", "ID_FMP_WEAPON_GROUP_35"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["staff"] = new engine.RulesElement({
    name: "staff",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_6",
    source: "Core",
    categories: ["staff", "ID_FMP_WEAPON_GROUP_6"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["Tome"] = new engine.RulesElement({
    name: "Tome",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_42",
    source: "Core",
    categories: ["Tome", "ID_FMP_WEAPON_GROUP_42"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["Totem"] = new engine.RulesElement({
    name: "Totem",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_43",
    source: "Core",
    categories: ["Totem", "ID_FMP_WEAPON_GROUP_43"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["unarmed"] = new engine.RulesElement({
    name: "unarmed",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_27",
    source: "Core",
    categories: ["unarmed", "ID_FMP_WEAPON_GROUP_27"]
  });
  byID[te.id] = te;
  
  te = Weapon_Group["Wand"] = new engine.RulesElement({
    name: "Wand",
    type: "Weapon Group",
    id: "ID_FMP_WEAPON_GROUP_44",
    source: "Core",
    categories: ["Wand", "ID_FMP_WEAPON_GROUP_44"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
