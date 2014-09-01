define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Bloodspike Sweep"] = new engine.RulesElement({
    name: "Bloodspike Sweep",
    type: "Power",
    id: "ID_FMP_POWER_7498",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7498",
    categories: ["Bloodspike Sweep", "ID_FMP_POWER_7498", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Death Vortex"] = new engine.RulesElement({
    name: "Death Vortex",
    type: "Power",
    id: "ID_FMP_POWER_7692",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7692",
    categories: ["Death Vortex", "ID_FMP_POWER_7692", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Dire Bear Maul"] = new engine.RulesElement({
    name: "Dire Bear Maul",
    type: "Power",
    id: "ID_FMP_POWER_7502",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7502",
    categories: ["Dire Bear Maul", "ID_FMP_POWER_7502", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Dread Briars"] = new engine.RulesElement({
    name: "Dread Briars",
    type: "Power",
    id: "ID_FMP_POWER_7507",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7507",
    categories: ["Dread Briars", "ID_FMP_POWER_7507", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Harrying Warhound"] = new engine.RulesElement({
    name: "Harrying Warhound",
    type: "Power",
    id: "ID_FMP_POWER_7509",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7509",
    categories: ["Harrying Warhound", "ID_FMP_POWER_7509", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Ooze Incarnate"] = new engine.RulesElement({
    name: "Ooze Incarnate",
    type: "Power",
    id: "ID_FMP_POWER_7506",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7506",
    categories: ["Ooze Incarnate", "ID_FMP_POWER_7506", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Salamander Lash"] = new engine.RulesElement({
    name: "Salamander Lash",
    type: "Power",
    id: "ID_FMP_POWER_7499",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7499",
    categories: ["Salamander Lash", "ID_FMP_POWER_7499", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Slice Free"] = new engine.RulesElement({
    name: "Slice Free",
    type: "Power",
    id: "ID_FMP_POWER_7504",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7504",
    categories: ["Slice Free", "ID_FMP_POWER_7504", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Sneaky Roll"] = new engine.RulesElement({
    name: "Sneaky Roll",
    type: "Power",
    id: "ID_FMP_POWER_7505",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7505",
    categories: ["Sneaky Roll", "ID_FMP_POWER_7505", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Soulshock Field"] = new engine.RulesElement({
    name: "Soulshock Field",
    type: "Power",
    id: "ID_FMP_POWER_7497",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7497",
    categories: ["Soulshock Field", "ID_FMP_POWER_7497", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Spatial Lock"] = new engine.RulesElement({
    name: "Spatial Lock",
    type: "Power",
    id: "ID_FMP_POWER_7511",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7511",
    categories: ["Spatial Lock", "ID_FMP_POWER_7511", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Cage"] = new engine.RulesElement({
    name: "Thunder Cage",
    type: "Power",
    id: "ID_FMP_POWER_7510",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7510",
    categories: ["Thunder Cage", "ID_FMP_POWER_7510", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Tree of Creation"] = new engine.RulesElement({
    name: "Tree of Creation",
    type: "Power",
    id: "ID_FMP_POWER_7496",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7496",
    categories: ["Tree of Creation", "ID_FMP_POWER_7496", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Vengeful Vigilance"] = new engine.RulesElement({
    name: "Vengeful Vigilance",
    type: "Power",
    id: "ID_FMP_POWER_7500",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7500",
    categories: ["Vengeful Vigilance", "ID_FMP_POWER_7500", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Wayfinder's Charge"] = new engine.RulesElement({
    name: "Wayfinder's Charge",
    type: "Power",
    id: "ID_FMP_POWER_7501",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7501",
    categories: ["Wayfinder's Charge", "ID_FMP_POWER_7501", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Wild Runner Strike"] = new engine.RulesElement({
    name: "Wild Runner Strike",
    type: "Power",
    id: "ID_FMP_POWER_7508",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7508",
    categories: ["Wild Runner Strike", "ID_FMP_POWER_7508", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Wolfjaw Blows"] = new engine.RulesElement({
    name: "Wolfjaw Blows",
    type: "Power",
    id: "ID_FMP_POWER_7503",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7503",
    categories: ["Wolfjaw Blows", "ID_FMP_POWER_7503", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
