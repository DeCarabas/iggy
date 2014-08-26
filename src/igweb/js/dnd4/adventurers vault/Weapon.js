define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Weapon = types['Weapon'] || (types['Weapon'] = {});
  te = Weapon["Broadsword"] = new engine.RulesElement({
    name: "Broadsword",
    type: "Weapon",
    id: "ID_FMP_WEAPON_49",
    source: "Adventurer's Vault",
    categories: ["Broadsword", "ID_FMP_WEAPON_49", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Broadsword (Large)"] = new engine.RulesElement({
    name: "Broadsword (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_BROADSWORD",
    source: "Adventurer's Vault",
    categories: ["Broadsword (Large)", "ID_INTERNAL_WEAPON_LARGE_BROADSWORD"]
  });
  byID[te.id] = te;
  
  te = Weapon["Climbing Claw"] = new engine.RulesElement({
    name: "Climbing Claw",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_CLIMBING_CLAW",
    source: "Adventurer's Vault",
    categories: ["Climbing Claw", "ID_INTERNAL_WEAPON_CLIMBING_CLAW"]
  });
  byID[te.id] = te;
  
  te = Weapon["Climbing Claw (Large)"] = new engine.RulesElement({
    name: "Climbing Claw (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_CLIMBING_CLAW",
    source: "Adventurer's Vault",
    categories: ["Climbing Claw (Large)", "ID_INTERNAL_WEAPON_LARGE_CLIMBING_CLAW"]
  });
  byID[te.id] = te;
  
  te = Weapon["Craghammer"] = new engine.RulesElement({
    name: "Craghammer",
    type: "Weapon",
    id: "ID_FMP_WEAPON_55",
    source: "Adventurer's Vault",
    categories: ["Craghammer", "ID_FMP_WEAPON_55", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_11", "hammer", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Craghammer (Large)"] = new engine.RulesElement({
    name: "Craghammer (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_CRAGHAMMER",
    source: "Adventurer's Vault",
    categories: ["Craghammer (Large)", "ID_INTERNAL_WEAPON_LARGE_CRAGHAMMER"]
  });
  byID[te.id] = te;
  
  te = Weapon["Double axe"] = new engine.RulesElement({
    name: "Double axe",
    type: "Weapon",
    id: "ID_FMP_WEAPON_66",
    source: "Adventurer's Vault",
    categories: ["Double axe", "ID_FMP_WEAPON_66", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Double axe - Secondary end"] = new engine.RulesElement({
    name: "Double axe - Secondary end",
    type: "Weapon",
    id: "ID_FMP_WEAPON_87",
    source: "Adventurer's Vault",
    categories: ["Double axe - Secondary end", "ID_FMP_WEAPON_87", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed"]
  });
  byID[te.id] = te;
  
  te = Weapon["Double axe - Secondary end (Large)"] = new engine.RulesElement({
    name: "Double axe - Secondary end (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_DOUBLE_AXE_-_SECONDARY_END",
    source: "Adventurer's Vault",
    categories: ["Double axe - Secondary end (Large)", "ID_INTERNAL_WEAPON_LARGE_DOUBLE_AXE_-_SECONDARY_END"]
  });
  byID[te.id] = te;
  
  te = Weapon["Double axe (Large)"] = new engine.RulesElement({
    name: "Double axe (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_DOUBLE_AXE",
    source: "Adventurer's Vault",
    categories: ["Double axe (Large)", "ID_INTERNAL_WEAPON_LARGE_DOUBLE_AXE"]
  });
  byID[te.id] = te;
  
  te = Weapon["Double flail"] = new engine.RulesElement({
    name: "Double flail",
    type: "Weapon",
    id: "ID_FMP_WEAPON_67",
    source: "Adventurer's Vault",
    categories: ["Double flail", "ID_FMP_WEAPON_67", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_10", "Flail", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Double flail - Secondary End"] = new engine.RulesElement({
    name: "Double flail - Secondary End",
    type: "Weapon",
    id: "ID_FMP_WEAPON_88",
    source: "Adventurer's Vault",
    categories: ["Double flail - Secondary End", "ID_FMP_WEAPON_88", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_10", "Flail", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed"]
  });
  byID[te.id] = te;
  
  te = Weapon["Double flail - Secondary End (Large)"] = new engine.RulesElement({
    name: "Double flail - Secondary End (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_DOUBLE_FLAIL_-_SECONDARY_END",
    source: "Adventurer's Vault",
    categories: ["Double flail - Secondary End (Large)", "ID_INTERNAL_WEAPON_LARGE_DOUBLE_FLAIL_-_SECONDARY_END"]
  });
  byID[te.id] = te;
  
  te = Weapon["Double flail (Large)"] = new engine.RulesElement({
    name: "Double flail (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_DOUBLE_FLAIL",
    source: "Adventurer's Vault",
    categories: ["Double flail (Large)", "ID_INTERNAL_WEAPON_LARGE_DOUBLE_FLAIL"]
  });
  byID[te.id] = te;
  
  te = Weapon["Double sword"] = new engine.RulesElement({
    name: "Double sword",
    type: "Weapon",
    id: "ID_FMP_WEAPON_68",
    source: "Adventurer's Vault",
    categories: ["Double sword", "ID_FMP_WEAPON_68", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Double sword - Secondary end"] = new engine.RulesElement({
    name: "Double sword - Secondary end",
    type: "Weapon",
    id: "ID_FMP_WEAPON_89",
    source: "Adventurer's Vault",
    categories: ["Double sword - Secondary end", "ID_FMP_WEAPON_89", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed"]
  });
  byID[te.id] = te;
  
  te = Weapon["Double sword - Secondary end (Large)"] = new engine.RulesElement({
    name: "Double sword - Secondary end (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_DOUBLE_SWORD_-_SECONDARY_END",
    source: "Adventurer's Vault",
    categories: ["Double sword - Secondary end (Large)", "ID_INTERNAL_WEAPON_LARGE_DOUBLE_SWORD_-_SECONDARY_END"]
  });
  byID[te.id] = te;
  
  te = Weapon["Double sword (Large)"] = new engine.RulesElement({
    name: "Double sword (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_DOUBLE_SWORD",
    source: "Adventurer's Vault",
    categories: ["Double sword (Large)", "ID_INTERNAL_WEAPON_LARGE_DOUBLE_SWORD"]
  });
  byID[te.id] = te;
  
  te = Weapon["Execution axe"] = new engine.RulesElement({
    name: "Execution axe",
    type: "Weapon",
    id: "ID_FMP_WEAPON_62",
    source: "Adventurer's Vault",
    categories: ["Execution axe", "ID_FMP_WEAPON_62", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Execution axe (Large)"] = new engine.RulesElement({
    name: "Execution axe (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_EXECUTION_AXE",
    source: "Adventurer's Vault",
    categories: ["Execution axe (Large)", "ID_INTERNAL_WEAPON_LARGE_EXECUTION_AXE"]
  });
  byID[te.id] = te;
  
  te = Weapon["Fullblade"] = new engine.RulesElement({
    name: "Fullblade",
    type: "Weapon",
    id: "ID_FMP_WEAPON_63",
    source: "Adventurer's Vault",
    categories: ["Fullblade", "ID_FMP_WEAPON_63", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Fullblade (Large)"] = new engine.RulesElement({
    name: "Fullblade (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_FULLBLADE",
    source: "Adventurer's Vault",
    categories: ["Fullblade (Large)", "ID_INTERNAL_WEAPON_LARGE_FULLBLADE"]
  });
  byID[te.id] = te;
  
  te = Weapon["Greatbow"] = new engine.RulesElement({
    name: "Greatbow",
    type: "Weapon",
    id: "ID_FMP_WEAPON_72",
    source: "Adventurer's Vault",
    categories: ["Greatbow", "ID_FMP_WEAPON_72", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_32", "Bow", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Greatbow (Large)"] = new engine.RulesElement({
    name: "Greatbow (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_GREATBOW",
    source: "Adventurer's Vault",
    categories: ["Greatbow (Large)", "ID_INTERNAL_WEAPON_LARGE_GREATBOW"]
  });
  byID[te.id] = te;
  
  te = Weapon["Greatspear"] = new engine.RulesElement({
    name: "Greatspear",
    type: "Weapon",
    id: "ID_FMP_WEAPON_64",
    source: "Adventurer's Vault",
    categories: ["Greatspear", "ID_FMP_WEAPON_64", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_22", "polearm", "ID_FMP_WEAPON_GROUP_35", "Spear", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Greatspear (Large)"] = new engine.RulesElement({
    name: "Greatspear (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_GREATSPEAR",
    source: "Adventurer's Vault",
    categories: ["Greatspear (Large)", "ID_INTERNAL_WEAPON_LARGE_GREATSPEAR"]
  });
  byID[te.id] = te;
  
  te = Weapon["Heavy war pick"] = new engine.RulesElement({
    name: "Heavy war pick",
    type: "Weapon",
    id: "ID_FMP_WEAPON_54",
    source: "Adventurer's Vault",
    categories: ["Heavy war pick", "ID_FMP_WEAPON_54", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_13", "pick", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Heavy war pick (Large)"] = new engine.RulesElement({
    name: "Heavy war pick (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_HEAVY_WAR_PICK",
    source: "Adventurer's Vault",
    categories: ["Heavy war pick (Large)", "ID_INTERNAL_WEAPON_LARGE_HEAVY_WAR_PICK"]
  });
  byID[te.id] = te;
  
  te = Weapon["Khopesh"] = new engine.RulesElement({
    name: "Khopesh",
    type: "Weapon",
    id: "ID_FMP_WEAPON_50",
    source: "Adventurer's Vault",
    categories: ["Khopesh", "ID_FMP_WEAPON_50", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Khopesh (Large)"] = new engine.RulesElement({
    name: "Khopesh (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_KHOPESH",
    source: "Adventurer's Vault",
    categories: ["Khopesh (Large)", "ID_INTERNAL_WEAPON_LARGE_KHOPESH"]
  });
  byID[te.id] = te;
  
  te = Weapon["Kukri"] = new engine.RulesElement({
    name: "Kukri",
    type: "Weapon",
    id: "ID_FMP_WEAPON_56",
    source: "Adventurer's Vault",
    categories: ["Kukri", "ID_FMP_WEAPON_56", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Kukri (Large)"] = new engine.RulesElement({
    name: "Kukri (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_KUKRI",
    source: "Adventurer's Vault",
    categories: ["Kukri (Large)", "ID_INTERNAL_WEAPON_LARGE_KUKRI"]
  });
  byID[te.id] = te;
  
  te = Weapon["Light war pick"] = new engine.RulesElement({
    name: "Light war pick",
    type: "Weapon",
    id: "ID_FMP_WEAPON_51",
    source: "Adventurer's Vault",
    categories: ["Light war pick", "ID_FMP_WEAPON_51", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_13", "pick", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Light war pick (Large)"] = new engine.RulesElement({
    name: "Light war pick (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_LIGHT_WAR_PICK",
    source: "Adventurer's Vault",
    categories: ["Light war pick (Large)", "ID_INTERNAL_WEAPON_LARGE_LIGHT_WAR_PICK"]
  });
  byID[te.id] = te;
  
  te = Weapon["Mordenkrad"] = new engine.RulesElement({
    name: "Mordenkrad",
    type: "Weapon",
    id: "ID_FMP_WEAPON_65",
    source: "Adventurer's Vault",
    categories: ["Mordenkrad", "ID_FMP_WEAPON_65", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_11", "hammer", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Mordenkrad (Large)"] = new engine.RulesElement({
    name: "Mordenkrad (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_MORDENKRAD",
    source: "Adventurer's Vault",
    categories: ["Mordenkrad (Large)", "ID_INTERNAL_WEAPON_LARGE_MORDENKRAD"]
  });
  byID[te.id] = te;
  
  te = Weapon["Parrying dagger"] = new engine.RulesElement({
    name: "Parrying dagger",
    type: "Weapon",
    id: "ID_FMP_WEAPON_57",
    source: "Adventurer's Vault",
    categories: ["Parrying dagger", "ID_FMP_WEAPON_57", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Parrying dagger (Large)"] = new engine.RulesElement({
    name: "Parrying dagger (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_PARRYING_DAGGER",
    source: "Adventurer's Vault",
    categories: ["Parrying dagger (Large)", "ID_INTERNAL_WEAPON_LARGE_PARRYING_DAGGER"]
  });
  byID[te.id] = te;
  
  te = Weapon["Repeating crossbow"] = new engine.RulesElement({
    name: "Repeating crossbow",
    type: "Weapon",
    id: "ID_FMP_WEAPON_70",
    source: "Adventurer's Vault",
    categories: ["Repeating crossbow", "ID_FMP_WEAPON_70", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_29", "Crossbow", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Repeating crossbow (Large)"] = new engine.RulesElement({
    name: "Repeating crossbow (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_REPEATING_CROSSBOW",
    source: "Adventurer's Vault",
    categories: ["Repeating crossbow (Large)", "ID_INTERNAL_WEAPON_LARGE_REPEATING_CROSSBOW"]
  });
  byID[te.id] = te;
  
  te = Weapon["Scourge"] = new engine.RulesElement({
    name: "Scourge",
    type: "Weapon",
    id: "ID_FMP_WEAPON_52",
    source: "Adventurer's Vault",
    categories: ["Scourge", "ID_FMP_WEAPON_52", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_10", "Flail", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Scourge (Large)"] = new engine.RulesElement({
    name: "Scourge (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_SCOURGE",
    source: "Adventurer's Vault",
    categories: ["Scourge (Large)", "ID_INTERNAL_WEAPON_LARGE_SCOURGE"]
  });
  byID[te.id] = te;
  
  te = Weapon["Spiked gauntlet"] = new engine.RulesElement({
    name: "Spiked gauntlet",
    type: "Weapon",
    id: "ID_FMP_WEAPON_48",
    source: "Adventurer's Vault",
    categories: ["Spiked gauntlet", "ID_FMP_WEAPON_48", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_27", "unarmed", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Spiked gauntlet (Large)"] = new engine.RulesElement({
    name: "Spiked gauntlet (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_SPIKED_GAUNTLET",
    source: "Adventurer's Vault",
    categories: ["Spiked gauntlet (Large)", "ID_INTERNAL_WEAPON_LARGE_SPIKED_GAUNTLET"]
  });
  byID[te.id] = te;
  
  te = Weapon["Spiked shield"] = new engine.RulesElement({
    name: "Spiked shield",
    type: "Weapon",
    id: "ID_FMP_WEAPON_58",
    source: "Adventurer's Vault",
    categories: ["Spiked shield", "ID_FMP_WEAPON_58", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Spiked shield (Large)"] = new engine.RulesElement({
    name: "Spiked shield (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_SPIKED_SHIELD",
    source: "Adventurer's Vault",
    categories: ["Spiked shield (Large)", "ID_INTERNAL_WEAPON_LARGE_SPIKED_SHIELD"]
  });
  byID[te.id] = te;
  
  te = Weapon["Superior crossbow"] = new engine.RulesElement({
    name: "Superior crossbow",
    type: "Weapon",
    id: "ID_FMP_WEAPON_73",
    source: "Adventurer's Vault",
    categories: ["Superior crossbow", "ID_FMP_WEAPON_73", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_29", "Crossbow", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Superior crossbow (Large)"] = new engine.RulesElement({
    name: "Superior crossbow (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_SUPERIOR_CROSSBOW",
    source: "Adventurer's Vault",
    categories: ["Superior crossbow (Large)", "ID_INTERNAL_WEAPON_LARGE_SUPERIOR_CROSSBOW"]
  });
  byID[te.id] = te;
  
  te = Weapon["Tratnyr"] = new engine.RulesElement({
    name: "Tratnyr",
    type: "Weapon",
    id: "ID_FMP_WEAPON_59",
    source: "Adventurer's Vault",
    categories: ["Tratnyr", "ID_FMP_WEAPON_59", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_35", "Spear", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Tratnyr (Large)"] = new engine.RulesElement({
    name: "Tratnyr (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_TRATNYR",
    source: "Adventurer's Vault",
    categories: ["Tratnyr (Large)", "ID_INTERNAL_WEAPON_LARGE_TRATNYR"]
  });
  byID[te.id] = te;
  
  te = Weapon["Trident"] = new engine.RulesElement({
    name: "Trident",
    type: "Weapon",
    id: "ID_FMP_WEAPON_53",
    source: "Adventurer's Vault",
    categories: ["Trident", "ID_FMP_WEAPON_53", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_35", "Spear", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Trident (Large)"] = new engine.RulesElement({
    name: "Trident (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_TRIDENT",
    source: "Adventurer's Vault",
    categories: ["Trident (Large)", "ID_INTERNAL_WEAPON_LARGE_TRIDENT"]
  });
  byID[te.id] = te;
  
  te = Weapon["Triple-headed flail"] = new engine.RulesElement({
    name: "Triple-headed flail",
    type: "Weapon",
    id: "ID_FMP_WEAPON_60",
    source: "Adventurer's Vault",
    categories: ["Triple-headed flail", "ID_FMP_WEAPON_60", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_10", "Flail", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Triple-headed flail (Large)"] = new engine.RulesElement({
    name: "Triple-headed flail (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_TRIPLE-HEADED_FLAIL",
    source: "Adventurer's Vault",
    categories: ["Triple-headed flail (Large)", "ID_INTERNAL_WEAPON_LARGE_TRIPLE-HEADED_FLAIL"]
  });
  byID[te.id] = te;
  
  te = Weapon["Urgrosh"] = new engine.RulesElement({
    name: "Urgrosh",
    type: "Weapon",
    id: "ID_FMP_WEAPON_69",
    source: "Adventurer's Vault",
    categories: ["Urgrosh", "ID_FMP_WEAPON_69", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Urgrosh - Secondary end"] = new engine.RulesElement({
    name: "Urgrosh - Secondary end",
    type: "Weapon",
    id: "ID_FMP_WEAPON_90",
    source: "Adventurer's Vault",
    categories: ["Urgrosh - Secondary end", "ID_FMP_WEAPON_90", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_35", "Spear", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed"]
  });
  byID[te.id] = te;
  
  te = Weapon["Urgrosh - Secondary end (Large)"] = new engine.RulesElement({
    name: "Urgrosh - Secondary end (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_URGROSH_-_SECONDARY_END",
    source: "Adventurer's Vault",
    categories: ["Urgrosh - Secondary end (Large)", "ID_INTERNAL_WEAPON_LARGE_URGROSH_-_SECONDARY_END"]
  });
  byID[te.id] = te;
  
  te = Weapon["Urgrosh (Large)"] = new engine.RulesElement({
    name: "Urgrosh (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_URGROSH",
    source: "Adventurer's Vault",
    categories: ["Urgrosh (Large)", "ID_INTERNAL_WEAPON_LARGE_URGROSH"]
  });
  byID[te.id] = te;
  
  te = Weapon["Waraxe"] = new engine.RulesElement({
    name: "Waraxe",
    type: "Weapon",
    id: "ID_FMP_WEAPON_61",
    source: "Adventurer's Vault",
    categories: ["Waraxe", "ID_FMP_WEAPON_61", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Waraxe (Large)"] = new engine.RulesElement({
    name: "Waraxe (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_WARAXE",
    source: "Adventurer's Vault",
    categories: ["Waraxe (Large)", "ID_INTERNAL_WEAPON_LARGE_WARAXE"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
