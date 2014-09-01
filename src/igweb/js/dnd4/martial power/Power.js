define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["A Murder of One"] = new engine.RulesElement({
    name: "A Murder of One",
    type: "Power",
    id: "ID_FMP_POWER_2318",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2318",
    categories: ["A Murder of One", "ID_FMP_POWER_2318", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["A Rock and a Hard Place"] = new engine.RulesElement({
    name: "A Rock and a Hard Place",
    type: "Power",
    id: "ID_FMP_POWER_2451",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2451",
    categories: ["A Rock and a Hard Place", "ID_FMP_POWER_2451", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Abashing Stab"] = new engine.RulesElement({
    name: "Abashing Stab",
    type: "Power",
    id: "ID_FMP_POWER_4733",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4733",
    categories: ["Abashing Stab", "ID_FMP_POWER_4733", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_187", "Rakish Swashbuckler", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Abrupt Skirmish"] = new engine.RulesElement({
    name: "Abrupt Skirmish",
    type: "Power",
    id: "ID_FMP_POWER_4603",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4603",
    categories: ["Abrupt Skirmish", "ID_FMP_POWER_4603", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Acrobatic Assault"] = new engine.RulesElement({
    name: "Acrobatic Assault",
    type: "Power",
    id: "ID_FMP_POWER_2316",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2316",
    categories: ["Acrobatic Assault", "ID_FMP_POWER_2316", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Adamant Recovery"] = new engine.RulesElement({
    name: "Adamant Recovery",
    type: "Power",
    id: "ID_FMP_POWER_4443",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4443",
    categories: ["Adamant Recovery", "ID_FMP_POWER_4443", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Adaptable Flanker"] = new engine.RulesElement({
    name: "Adaptable Flanker",
    type: "Power",
    id: "ID_FMP_POWER_4474",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4474",
    categories: ["Adaptable Flanker", "ID_FMP_POWER_4474", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Adaptive Assault"] = new engine.RulesElement({
    name: "Adaptive Assault",
    type: "Power",
    id: "ID_FMP_POWER_4390",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4390",
    categories: ["Adaptive Assault", "ID_FMP_POWER_4390", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Adaptive Stratagem"] = new engine.RulesElement({
    name: "Adaptive Stratagem",
    type: "Power",
    id: "ID_FMP_POWER_4549",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4549",
    categories: ["Adaptive Stratagem", "ID_FMP_POWER_4549", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Advance Lunge"] = new engine.RulesElement({
    name: "Advance Lunge",
    type: "Power",
    id: "ID_FMP_POWER_2109",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2109",
    categories: ["Advance Lunge", "ID_FMP_POWER_2109", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Agile Approach"] = new engine.RulesElement({
    name: "Agile Approach",
    type: "Power",
    id: "ID_FMP_POWER_4327",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4327",
    categories: ["Agile Approach", "ID_FMP_POWER_4327", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Agonizing Assault"] = new engine.RulesElement({
    name: "Agonizing Assault",
    type: "Power",
    id: "ID_FMP_POWER_4322",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4322",
    categories: ["Agonizing Assault", "ID_FMP_POWER_4322", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Agonizing Shot"] = new engine.RulesElement({
    name: "Agonizing Shot",
    type: "Power",
    id: "ID_FMP_POWER_4491",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4491",
    categories: ["Agonizing Shot", "ID_FMP_POWER_4491", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Ambusher's Reaping"] = new engine.RulesElement({
    name: "Ambusher's Reaping",
    type: "Power",
    id: "ID_FMP_POWER_4453",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4453",
    categories: ["Ambusher's Reaping", "ID_FMP_POWER_4453", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Ancestral Manifestation"] = new engine.RulesElement({
    name: "Ancestral Manifestation",
    type: "Power",
    id: "ID_FMP_POWER_4667",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4667",
    categories: ["Ancestral Manifestation", "ID_FMP_POWER_4667", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_164", "Inner Dragon", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Anticipate Attack (Rogue)"] = new engine.RulesElement({
    name: "Anticipate Attack (Rogue)",
    type: "Power",
    id: "ID_FMP_POWER_12324",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12324",
    categories: ["Anticipate Attack (Rogue)", "ID_FMP_POWER_12324", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Anticipate Attack (Warlord)"] = new engine.RulesElement({
    name: "Anticipate Attack (Warlord)",
    type: "Power",
    id: "ID_FMP_POWER_2471",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2471",
    categories: ["Anticipate Attack (Warlord)", "ID_FMP_POWER_2471", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Appalling Crunch"] = new engine.RulesElement({
    name: "Appalling Crunch",
    type: "Power",
    id: "ID_FMP_POWER_1983",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=1983",
    categories: ["Appalling Crunch", "ID_FMP_POWER_1983", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Arkhosia's Fury"] = new engine.RulesElement({
    name: "Arkhosia's Fury",
    type: "Power",
    id: "ID_FMP_POWER_2536",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2536",
    categories: ["Arkhosia's Fury", "ID_FMP_POWER_2536", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Armor-Piercing Shot"] = new engine.RulesElement({
    name: "Armor-Piercing Shot",
    type: "Power",
    id: "ID_FMP_POWER_4421",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4421",
    categories: ["Armor-Piercing Shot", "ID_FMP_POWER_4421", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Arterial Strike"] = new engine.RulesElement({
    name: "Arterial Strike",
    type: "Power",
    id: "ID_FMP_POWER_4422",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4422",
    categories: ["Arterial Strike", "ID_FMP_POWER_4422", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Assault Footwork"] = new engine.RulesElement({
    name: "Assault Footwork",
    type: "Power",
    id: "ID_FMP_POWER_4677",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4677",
    categories: ["Assault Footwork", "ID_FMP_POWER_4677", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_168", "Shock Trooper", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Assured Strike"] = new engine.RulesElement({
    name: "Assured Strike",
    type: "Power",
    id: "ID_FMP_POWER_4336",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4336",
    categories: ["Assured Strike", "ID_FMP_POWER_4336", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Audacious Strike"] = new engine.RulesElement({
    name: "Audacious Strike",
    type: "Power",
    id: "ID_FMP_POWER_4512",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4512",
    categories: ["Audacious Strike", "ID_FMP_POWER_4512", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Avalanche of Steel"] = new engine.RulesElement({
    name: "Avalanche of Steel",
    type: "Power",
    id: "ID_FMP_POWER_2011",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2011",
    categories: ["Avalanche of Steel", "ID_FMP_POWER_2011", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Avenge Me"] = new engine.RulesElement({
    name: "Avenge Me",
    type: "Power",
    id: "ID_FMP_POWER_4591",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4591",
    categories: ["Avenge Me", "ID_FMP_POWER_4591", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Bahamut's Liberation"] = new engine.RulesElement({
    name: "Bahamut's Liberation",
    type: "Power",
    id: "ID_FMP_POWER_4764",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4764",
    categories: ["Bahamut's Liberation", "ID_FMP_POWER_4764", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_196", "Platinum Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Balefire Scourge"] = new engine.RulesElement({
    name: "Balefire Scourge",
    type: "Power",
    id: "ID_FMP_POWER_4696",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4696",
    categories: ["Balefire Scourge", "ID_FMP_POWER_4696", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_174", "Hellborn Shadow", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Ballista Charge"] = new engine.RulesElement({
    name: "Ballista Charge",
    type: "Power",
    id: "ID_FMP_POWER_4356",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4356",
    categories: ["Ballista Charge", "ID_FMP_POWER_4356", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Awareness Feat"] = new engine.RulesElement({
    name: "Battle Awareness Feat",
    type: "Power",
    id: "ID_FMP_POWER_6592",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6592",
    categories: ["Battle Awareness Feat", "ID_FMP_POWER_6592", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Runner"] = new engine.RulesElement({
    name: "Battle Runner",
    type: "Power",
    id: "ID_FMP_POWER_4396",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4396",
    categories: ["Battle Runner", "ID_FMP_POWER_4396", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Beast Latch"] = new engine.RulesElement({
    name: "Beast Latch",
    type: "Power",
    id: "ID_FMP_POWER_4384",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4384",
    categories: ["Beast Latch", "ID_FMP_POWER_4384", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Beast Rush"] = new engine.RulesElement({
    name: "Beast Rush",
    type: "Power",
    id: "ID_FMP_POWER_4401",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4401",
    categories: ["Beast Rush", "ID_FMP_POWER_4401", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Beastly Vise"] = new engine.RulesElement({
    name: "Beastly Vise",
    type: "Power",
    id: "ID_FMP_POWER_4458",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4458",
    categories: ["Beastly Vise", "ID_FMP_POWER_4458", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Bedeviling Assault"] = new engine.RulesElement({
    name: "Bedeviling Assault",
    type: "Power",
    id: "ID_FMP_POWER_4323",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4323",
    categories: ["Bedeviling Assault", "ID_FMP_POWER_4323", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Befuddling Cry"] = new engine.RulesElement({
    name: "Befuddling Cry",
    type: "Power",
    id: "ID_FMP_POWER_2333",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2333",
    categories: ["Befuddling Cry", "ID_FMP_POWER_2333", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Bell Ringer"] = new engine.RulesElement({
    name: "Bell Ringer",
    type: "Power",
    id: "ID_FMP_POWER_2102",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2102",
    categories: ["Bell Ringer", "ID_FMP_POWER_2102", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Biting Repositioning"] = new engine.RulesElement({
    name: "Biting Repositioning",
    type: "Power",
    id: "ID_FMP_POWER_2494",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2494",
    categories: ["Biting Repositioning", "ID_FMP_POWER_2494", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_110", "Guildmaster Thief", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Biting Volley"] = new engine.RulesElement({
    name: "Biting Volley",
    type: "Power",
    id: "ID_FMP_POWER_4402",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4402",
    categories: ["Biting Volley", "ID_FMP_POWER_4402", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Blackfire Wind"] = new engine.RulesElement({
    name: "Blackfire Wind",
    type: "Power",
    id: "ID_FMP_POWER_2523",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2523",
    categories: ["Blackfire Wind", "ID_FMP_POWER_2523", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_113", "Tiefling Hellstalker", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Blade and Fang"] = new engine.RulesElement({
    name: "Blade and Fang",
    type: "Power",
    id: "ID_FMP_POWER_4432",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4432",
    categories: ["Blade and Fang", "ID_FMP_POWER_4432", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Blade Dance"] = new engine.RulesElement({
    name: "Blade Dance",
    type: "Power",
    id: "ID_FMP_POWER_4687",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4687",
    categories: ["Blade Dance", "ID_FMP_POWER_4687", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_171", "Blade Dancer", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Blade Storm"] = new engine.RulesElement({
    name: "Blade Storm",
    type: "Power",
    id: "ID_FMP_POWER_4363",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4363",
    categories: ["Blade Storm", "ID_FMP_POWER_4363", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Blade Vault"] = new engine.RulesElement({
    name: "Blade Vault",
    type: "Power",
    id: "ID_FMP_POWER_2251",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2251",
    categories: ["Blade Vault", "ID_FMP_POWER_2251", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Bladed Fusillade"] = new engine.RulesElement({
    name: "Bladed Fusillade",
    type: "Power",
    id: "ID_FMP_POWER_4731",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4731",
    categories: ["Bladed Fusillade", "ID_FMP_POWER_4731", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_185", "Flying-Blade Adept", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Bleed Away"] = new engine.RulesElement({
    name: "Bleed Away",
    type: "Power",
    id: "ID_FMP_POWER_4705",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4705",
    categories: ["Bleed Away", "ID_FMP_POWER_4705", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_177", "Ruthless Punisher", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Blinding Smash"] = new engine.RulesElement({
    name: "Blinding Smash",
    type: "Power",
    id: "ID_FMP_POWER_2131",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2131",
    categories: ["Blinding Smash", "ID_FMP_POWER_2131", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Blindside"] = new engine.RulesElement({
    name: "Blindside",
    type: "Power",
    id: "ID_FMP_POWER_2313",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2313",
    categories: ["Blindside", "ID_FMP_POWER_2313", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Blindside Assault"] = new engine.RulesElement({
    name: "Blindside Assault",
    type: "Power",
    id: "ID_FMP_POWER_4744",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4744",
    categories: ["Blindside Assault", "ID_FMP_POWER_4744", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_190", "Commando Captain", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Blistering Outburst"] = new engine.RulesElement({
    name: "Blistering Outburst",
    type: "Power",
    id: "ID_FMP_POWER_4513",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4513",
    categories: ["Blistering Outburst", "ID_FMP_POWER_4513", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Begets Blood"] = new engine.RulesElement({
    name: "Blood Begets Blood",
    type: "Power",
    id: "ID_FMP_POWER_2437",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2437",
    categories: ["Blood Begets Blood", "ID_FMP_POWER_2437", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Designation"] = new engine.RulesElement({
    name: "Blood Designation",
    type: "Power",
    id: "ID_FMP_POWER_2444",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2444",
    categories: ["Blood Designation", "ID_FMP_POWER_2444", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Frenzy"] = new engine.RulesElement({
    name: "Blood Frenzy",
    type: "Power",
    id: "ID_FMP_POWER_4423",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4423",
    categories: ["Blood Frenzy", "ID_FMP_POWER_4423", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Harvest"] = new engine.RulesElement({
    name: "Blood Harvest",
    type: "Power",
    id: "ID_FMP_POWER_4659",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4659",
    categories: ["Blood Harvest", "ID_FMP_POWER_4659", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_161", "Dread Reaper", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Iron"] = new engine.RulesElement({
    name: "Blood Iron",
    type: "Power",
    id: "ID_FMP_POWER_4656",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4656",
    categories: ["Blood Iron", "ID_FMP_POWER_4656", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_160", "Dreadnought", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Justice"] = new engine.RulesElement({
    name: "Blood Justice",
    type: "Power",
    id: "ID_FMP_POWER_4671",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4671",
    categories: ["Blood Justice", "ID_FMP_POWER_4671", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_165", "Knight Protector", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Rush"] = new engine.RulesElement({
    name: "Blood Rush",
    type: "Power",
    id: "ID_FMP_POWER_4359",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4359",
    categories: ["Blood Rush", "ID_FMP_POWER_4359", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Squall"] = new engine.RulesElement({
    name: "Blood Squall",
    type: "Power",
    id: "ID_FMP_POWER_4516",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4516",
    categories: ["Blood Squall", "ID_FMP_POWER_4516", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Bloodbath Attack"] = new engine.RulesElement({
    name: "Bloodbath Attack",
    type: "Power",
    id: "ID_FMP_POWER_4515",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4515",
    categories: ["Bloodbath Attack", "ID_FMP_POWER_4515", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Bloodied Frenzy"] = new engine.RulesElement({
    name: "Bloodied Frenzy",
    type: "Power",
    id: "ID_FMP_POWER_4391",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4391",
    categories: ["Bloodied Frenzy", "ID_FMP_POWER_4391", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Bloodlust Strike"] = new engine.RulesElement({
    name: "Bloodlust Strike",
    type: "Power",
    id: "ID_FMP_POWER_4416",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4416",
    categories: ["Bloodlust Strike", "ID_FMP_POWER_4416", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Blood-Soaked Fury"] = new engine.RulesElement({
    name: "Blood-Soaked Fury",
    type: "Power",
    id: "ID_FMP_POWER_1608",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=1608",
    categories: ["Blood-Soaked Fury", "ID_FMP_POWER_1608", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_22", "Ravager", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Blood-Tested Inspiration"] = new engine.RulesElement({
    name: "Blood-Tested Inspiration",
    type: "Power",
    id: "ID_FMP_POWER_4742",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4742",
    categories: ["Blood-Tested Inspiration", "ID_FMP_POWER_4742", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_189", "Battlelord of Kord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Bloodthirsty Offensive"] = new engine.RulesElement({
    name: "Bloodthirsty Offensive",
    type: "Power",
    id: "ID_FMP_POWER_4592",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4592",
    categories: ["Bloodthirsty Offensive", "ID_FMP_POWER_4592", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Bloody Ending"] = new engine.RulesElement({
    name: "Bloody Ending",
    type: "Power",
    id: "ID_FMP_POWER_2329",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2329",
    categories: ["Bloody Ending", "ID_FMP_POWER_2329", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Bloody Termination"] = new engine.RulesElement({
    name: "Bloody Termination",
    type: "Power",
    id: "ID_FMP_POWER_2337",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2337",
    categories: ["Bloody Termination", "ID_FMP_POWER_2337", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Blow-Through Assault"] = new engine.RulesElement({
    name: "Blow-Through Assault",
    type: "Power",
    id: "ID_FMP_POWER_4433",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4433",
    categories: ["Blow-Through Assault", "ID_FMP_POWER_4433", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Boar Assault"] = new engine.RulesElement({
    name: "Boar Assault",
    type: "Power",
    id: "ID_FMP_POWER_4374",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4374",
    categories: ["Boar Assault", "ID_FMP_POWER_4374", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Boggling Smash"] = new engine.RulesElement({
    name: "Boggling Smash",
    type: "Power",
    id: "ID_FMP_POWER_4343",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4343",
    categories: ["Boggling Smash", "ID_FMP_POWER_4343", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Bold Feint"] = new engine.RulesElement({
    name: "Bold Feint",
    type: "Power",
    id: "ID_FMP_POWER_4505",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4505",
    categories: ["Bold Feint", "ID_FMP_POWER_4505", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Bolstering Shout"] = new engine.RulesElement({
    name: "Bolstering Shout",
    type: "Power",
    id: "ID_FMP_POWER_4573",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4573",
    categories: ["Bolstering Shout", "ID_FMP_POWER_4573", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Bolstering Stride"] = new engine.RulesElement({
    name: "Bolstering Stride",
    type: "Power",
    id: "ID_FMP_POWER_4341",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4341",
    categories: ["Bolstering Stride", "ID_FMP_POWER_4341", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Bolt from Nowhere"] = new engine.RulesElement({
    name: "Bolt from Nowhere",
    type: "Power",
    id: "ID_FMP_POWER_4718",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4718",
    categories: ["Bolt from Nowhere", "ID_FMP_POWER_4718", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_181", "Cloaked Sniper", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Borrowed Protection"] = new engine.RulesElement({
    name: "Borrowed Protection",
    type: "Power",
    id: "ID_FMP_POWER_4747",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4747",
    categories: ["Borrowed Protection", "ID_FMP_POWER_4747", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_191", "Concordant Leader", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Boulder Charge"] = new engine.RulesElement({
    name: "Boulder Charge",
    type: "Power",
    id: "ID_FMP_POWER_2192",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2192",
    categories: ["Boulder Charge", "ID_FMP_POWER_2192", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Bounding Escape"] = new engine.RulesElement({
    name: "Bounding Escape",
    type: "Power",
    id: "ID_FMP_POWER_2298",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2298",
    categories: ["Bounding Escape", "ID_FMP_POWER_2298", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Boundless Energy"] = new engine.RulesElement({
    name: "Boundless Energy",
    type: "Power",
    id: "ID_FMP_POWER_4397",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4397",
    categories: ["Boundless Energy", "ID_FMP_POWER_4397", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Brash Assault"] = new engine.RulesElement({
    name: "Brash Assault",
    type: "Power",
    id: "ID_FMP_POWER_4541",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4541",
    categories: ["Brash Assault", "ID_FMP_POWER_4541", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Brash Strike"] = new engine.RulesElement({
    name: "Brash Strike",
    type: "Power",
    id: "ID_FMP_POWER_2620",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2620",
    categories: ["Brash Strike", "ID_FMP_POWER_2620", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Brisk Stride"] = new engine.RulesElement({
    name: "Brisk Stride",
    type: "Power",
    id: "ID_FMP_POWER_4498",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4498",
    categories: ["Brisk Stride", "ID_FMP_POWER_4498", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Brutal Rebuke"] = new engine.RulesElement({
    name: "Brutal Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_4337",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4337",
    categories: ["Brutal Rebuke", "ID_FMP_POWER_4337", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Brutal Setup"] = new engine.RulesElement({
    name: "Brutal Setup",
    type: "Power",
    id: "ID_FMP_POWER_4604",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4604",
    categories: ["Brutal Setup", "ID_FMP_POWER_4604", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Buffeting Torque"] = new engine.RulesElement({
    name: "Buffeting Torque",
    type: "Power",
    id: "ID_FMP_POWER_2145",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2145",
    categories: ["Buffeting Torque", "ID_FMP_POWER_2145", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Burning Wrath Smite"] = new engine.RulesElement({
    name: "Burning Wrath Smite",
    type: "Power",
    id: "ID_FMP_POWER_2570",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2570",
    categories: ["Burning Wrath Smite", "ID_FMP_POWER_2570", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_118", "Tiefling Warfiend", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Burst Fire"] = new engine.RulesElement({
    name: "Burst Fire",
    type: "Power",
    id: "ID_FMP_POWER_4492",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4492",
    categories: ["Burst Fire", "ID_FMP_POWER_4492", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Cagey Killer"] = new engine.RulesElement({
    name: "Cagey Killer",
    type: "Power",
    id: "ID_FMP_POWER_2321",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2321",
    categories: ["Cagey Killer", "ID_FMP_POWER_2321", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Caging Strike"] = new engine.RulesElement({
    name: "Caging Strike",
    type: "Power",
    id: "ID_FMP_POWER_4406",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4406",
    categories: ["Caging Strike", "ID_FMP_POWER_4406", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Calculated Assault"] = new engine.RulesElement({
    name: "Calculated Assault",
    type: "Power",
    id: "ID_FMP_POWER_4545",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4545",
    categories: ["Calculated Assault", "ID_FMP_POWER_4545", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Callous Strike"] = new engine.RulesElement({
    name: "Callous Strike",
    type: "Power",
    id: "ID_FMP_POWER_4738",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4738",
    categories: ["Callous Strike", "ID_FMP_POWER_4738", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_188", "Strong-Arm Enforcer", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Carve Initials"] = new engine.RulesElement({
    name: "Carve Initials",
    type: "Power",
    id: "ID_FMP_POWER_2068",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2068",
    categories: ["Carve Initials", "ID_FMP_POWER_2068", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Cascading Catapult Slam"] = new engine.RulesElement({
    name: "Cascading Catapult Slam",
    type: "Power",
    id: "ID_FMP_POWER_2152",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2152",
    categories: ["Cascading Catapult Slam", "ID_FMP_POWER_2152", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Catastrophic Flurry"] = new engine.RulesElement({
    name: "Catastrophic Flurry",
    type: "Power",
    id: "ID_FMP_POWER_4365",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4365",
    categories: ["Catastrophic Flurry", "ID_FMP_POWER_4365", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Catch and Drop"] = new engine.RulesElement({
    name: "Catch and Drop",
    type: "Power",
    id: "ID_FMP_POWER_4459",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4459",
    categories: ["Catch and Drop", "ID_FMP_POWER_4459", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Cat-Eyed Strike"] = new engine.RulesElement({
    name: "Cat-Eyed Strike",
    type: "Power",
    id: "ID_FMP_POWER_4712",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4712",
    categories: ["Cat-Eyed Strike", "ID_FMP_POWER_4712", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_180", "Wildcat Stalker", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Chase Down"] = new engine.RulesElement({
    name: "Chase Down",
    type: "Power",
    id: "ID_FMP_POWER_4448",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4448",
    categories: ["Chase Down", "ID_FMP_POWER_4448", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Checking Jab"] = new engine.RulesElement({
    name: "Checking Jab",
    type: "Power",
    id: "ID_FMP_POWER_6593",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6593",
    categories: ["Checking Jab", "ID_FMP_POWER_6593", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Circling Predator"] = new engine.RulesElement({
    name: "Circling Predator",
    type: "Power",
    id: "ID_FMP_POWER_2290",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2290",
    categories: ["Circling Predator", "ID_FMP_POWER_2290", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Circling Strike"] = new engine.RulesElement({
    name: "Circling Strike",
    type: "Power",
    id: "ID_FMP_POWER_4368",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4368",
    categories: ["Circling Strike", "ID_FMP_POWER_4368", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Claim the Prize"] = new engine.RulesElement({
    name: "Claim the Prize",
    type: "Power",
    id: "ID_FMP_POWER_4437",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4437",
    categories: ["Claim the Prize", "ID_FMP_POWER_4437", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Close-Combat Shot"] = new engine.RulesElement({
    name: "Close-Combat Shot",
    type: "Power",
    id: "ID_FMP_POWER_4392",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4392",
    categories: ["Close-Combat Shot", "ID_FMP_POWER_4392", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Collapsing Riposte"] = new engine.RulesElement({
    name: "Collapsing Riposte",
    type: "Power",
    id: "ID_FMP_POWER_4527",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4527",
    categories: ["Collapsing Riposte", "ID_FMP_POWER_4527", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Combat Tumbleset"] = new engine.RulesElement({
    name: "Combat Tumbleset",
    type: "Power",
    id: "ID_FMP_POWER_2295",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2295",
    categories: ["Combat Tumbleset", "ID_FMP_POWER_2295", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Cometfall Charge"] = new engine.RulesElement({
    name: "Cometfall Charge",
    type: "Power",
    id: "ID_FMP_POWER_4324",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4324",
    categories: ["Cometfall Charge", "ID_FMP_POWER_4324", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Comeuppance Strike"] = new engine.RulesElement({
    name: "Comeuppance Strike",
    type: "Power",
    id: "ID_FMP_POWER_4611",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4611",
    categories: ["Comeuppance Strike", "ID_FMP_POWER_4611", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_159", "Avenging Slayer", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Commando Maneuver"] = new engine.RulesElement({
    name: "Commando Maneuver",
    type: "Power",
    id: "ID_FMP_POWER_4745",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4745",
    categories: ["Commando Maneuver", "ID_FMP_POWER_4745", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_190", "Commando Captain", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Companion Emplacement"] = new engine.RulesElement({
    name: "Companion Emplacement",
    type: "Power",
    id: "ID_FMP_POWER_4411",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4411",
    categories: ["Companion Emplacement", "ID_FMP_POWER_4411", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Compel the Craven"] = new engine.RulesElement({
    name: "Compel the Craven",
    type: "Power",
    id: "ID_FMP_POWER_2286",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2286",
    categories: ["Compel the Craven", "ID_FMP_POWER_2286", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Concentrated Attack"] = new engine.RulesElement({
    name: "Concentrated Attack",
    type: "Power",
    id: "ID_FMP_POWER_4546",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4546",
    categories: ["Concentrated Attack", "ID_FMP_POWER_4546", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Confounding Attack"] = new engine.RulesElement({
    name: "Confounding Attack",
    type: "Power",
    id: "ID_FMP_POWER_2515",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2515",
    categories: ["Confounding Attack", "ID_FMP_POWER_2515", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Controlling Thrust"] = new engine.RulesElement({
    name: "Controlling Thrust",
    type: "Power",
    id: "ID_FMP_POWER_4348",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4348",
    categories: ["Controlling Thrust", "ID_FMP_POWER_4348", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Convey Ally"] = new engine.RulesElement({
    name: "Convey Ally",
    type: "Power",
    id: "ID_FMP_POWER_4767",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4767",
    categories: ["Convey Ally", "ID_FMP_POWER_4767", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_197", "Spiral Tactician", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Covering Maneuver"] = new engine.RulesElement({
    name: "Covering Maneuver",
    type: "Power",
    id: "ID_FMP_POWER_4675",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4675",
    categories: ["Covering Maneuver", "ID_FMP_POWER_4675", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Coward's Reward"] = new engine.RulesElement({
    name: "Coward's Reward",
    type: "Power",
    id: "ID_FMP_POWER_4360",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4360",
    categories: ["Coward's Reward", "ID_FMP_POWER_4360", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Crack Shot"] = new engine.RulesElement({
    name: "Crack Shot",
    type: "Power",
    id: "ID_FMP_POWER_4526",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4526",
    categories: ["Crack Shot", "ID_FMP_POWER_4526", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Create Opening"] = new engine.RulesElement({
    name: "Create Opening",
    type: "Power",
    id: "ID_FMP_POWER_4317",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4317",
    categories: ["Create Opening", "ID_FMP_POWER_4317", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Crippling Shot"] = new engine.RulesElement({
    name: "Crippling Shot",
    type: "Power",
    id: "ID_FMP_POWER_4703",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4703",
    categories: ["Crippling Shot", "ID_FMP_POWER_4703", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_177", "Ruthless Punisher", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Crippling Smash"] = new engine.RulesElement({
    name: "Crippling Smash",
    type: "Power",
    id: "ID_FMP_POWER_4353",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4353",
    categories: ["Crippling Smash", "ID_FMP_POWER_4353", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Cross-Body Parry"] = new engine.RulesElement({
    name: "Cross-Body Parry",
    type: "Power",
    id: "ID_FMP_POWER_4685",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4685",
    categories: ["Cross-Body Parry", "ID_FMP_POWER_4685", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_171", "Blade Dancer", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Cruel Pursuit"] = new engine.RulesElement({
    name: "Cruel Pursuit",
    type: "Power",
    id: "ID_FMP_POWER_4530",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4530",
    categories: ["Cruel Pursuit", "ID_FMP_POWER_4530", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Crumpling Slam"] = new engine.RulesElement({
    name: "Crumpling Slam",
    type: "Power",
    id: "ID_FMP_POWER_2137",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2137",
    categories: ["Crumpling Slam", "ID_FMP_POWER_2137", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Crushing Surge"] = new engine.RulesElement({
    name: "Crushing Surge",
    type: "Power",
    id: "ID_FMP_POWER_2099",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2099",
    categories: ["Crushing Surge", "ID_FMP_POWER_2099", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Cunning Cyclone"] = new engine.RulesElement({
    name: "Cunning Cyclone",
    type: "Power",
    id: "ID_FMP_POWER_2510",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2510",
    categories: ["Cunning Cyclone", "ID_FMP_POWER_2510", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Curving Shot"] = new engine.RulesElement({
    name: "Curving Shot",
    type: "Power",
    id: "ID_FMP_POWER_4427",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4427",
    categories: ["Curving Shot", "ID_FMP_POWER_4427", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Cutting Assault"] = new engine.RulesElement({
    name: "Cutting Assault",
    type: "Power",
    id: "ID_FMP_POWER_4735",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4735",
    categories: ["Cutting Assault", "ID_FMP_POWER_4735", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_187", "Rakish Swashbuckler", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Dance of Blades"] = new engine.RulesElement({
    name: "Dance of Blades",
    type: "Power",
    id: "ID_FMP_POWER_2453",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2453",
    categories: ["Dance of Blades", "ID_FMP_POWER_2453", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Daring Display"] = new engine.RulesElement({
    name: "Daring Display",
    type: "Power",
    id: "ID_FMP_POWER_4597",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4597",
    categories: ["Daring Display", "ID_FMP_POWER_4597", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Daunting Attack"] = new engine.RulesElement({
    name: "Daunting Attack",
    type: "Power",
    id: "ID_FMP_POWER_4501",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4501",
    categories: ["Daunting Attack", "ID_FMP_POWER_4501", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Daunting Barrage"] = new engine.RulesElement({
    name: "Daunting Barrage",
    type: "Power",
    id: "ID_FMP_POWER_4517",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4517",
    categories: ["Daunting Barrage", "ID_FMP_POWER_4517", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Dazing Volley"] = new engine.RulesElement({
    name: "Dazing Volley",
    type: "Power",
    id: "ID_FMP_POWER_2607",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2607",
    categories: ["Dazing Volley", "ID_FMP_POWER_2607", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Dead Stop"] = new engine.RulesElement({
    name: "Dead Stop",
    type: "Power",
    id: "ID_FMP_POWER_4438",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4438",
    categories: ["Dead Stop", "ID_FMP_POWER_4438", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Deadly Inspiration"] = new engine.RulesElement({
    name: "Deadly Inspiration",
    type: "Power",
    id: "ID_FMP_POWER_4586",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4586",
    categories: ["Deadly Inspiration", "ID_FMP_POWER_4586", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Deadly Returns"] = new engine.RulesElement({
    name: "Deadly Returns",
    type: "Power",
    id: "ID_FMP_POWER_2562",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2562",
    categories: ["Deadly Returns", "ID_FMP_POWER_2562", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Death Dance"] = new engine.RulesElement({
    name: "Death Dance",
    type: "Power",
    id: "ID_FMP_POWER_4528",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4528",
    categories: ["Death Dance", "ID_FMP_POWER_4528", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Death Dealer Assault"] = new engine.RulesElement({
    name: "Death Dealer Assault",
    type: "Power",
    id: "ID_FMP_POWER_4724",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4724",
    categories: ["Death Dealer Assault", "ID_FMP_POWER_4724", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_183", "Death Dealer", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Death's Veil"] = new engine.RulesElement({
    name: "Death's Veil",
    type: "Power",
    id: "ID_FMP_POWER_2487",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2487",
    categories: ["Death's Veil", "ID_FMP_POWER_2487", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_108", "Raven Herald", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Deathweaving Strike"] = new engine.RulesElement({
    name: "Deathweaving Strike",
    type: "Power",
    id: "ID_FMP_POWER_4539",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4539",
    categories: ["Deathweaving Strike", "ID_FMP_POWER_4539", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Deciever's Ploy"] = new engine.RulesElement({
    name: "Deciever's Ploy",
    type: "Power",
    id: "ID_FMP_POWER_4760",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4760",
    categories: ["Deciever's Ploy", "ID_FMP_POWER_4760", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_195", "Infernal Strategist", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Decisive Timing"] = new engine.RulesElement({
    name: "Decisive Timing",
    type: "Power",
    id: "ID_FMP_POWER_2586",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2586",
    categories: ["Decisive Timing", "ID_FMP_POWER_2586", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Defender's Cohort"] = new engine.RulesElement({
    name: "Defender's Cohort",
    type: "Power",
    id: "ID_FMP_POWER_2509",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2509",
    categories: ["Defender's Cohort", "ID_FMP_POWER_2509", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Defender's Gambit"] = new engine.RulesElement({
    name: "Defender's Gambit",
    type: "Power",
    id: "ID_FMP_POWER_4338",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4338",
    categories: ["Defender's Gambit", "ID_FMP_POWER_4338", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Defensive Posture"] = new engine.RulesElement({
    name: "Defensive Posture",
    type: "Power",
    id: "ID_FMP_POWER_4398",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4398",
    categories: ["Defensive Posture", "ID_FMP_POWER_4398", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Defensive Resurgence"] = new engine.RulesElement({
    name: "Defensive Resurgence",
    type: "Power",
    id: "ID_FMP_POWER_2005",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2005",
    categories: ["Defensive Resurgence", "ID_FMP_POWER_2005", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Defensive Roll"] = new engine.RulesElement({
    name: "Defensive Roll",
    type: "Power",
    id: "ID_FMP_POWER_4509",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4509",
    categories: ["Defensive Roll", "ID_FMP_POWER_4509", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Defensive Stance"] = new engine.RulesElement({
    name: "Defensive Stance",
    type: "Power",
    id: "ID_FMP_POWER_4318",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4318",
    categories: ["Defensive Stance", "ID_FMP_POWER_4318", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Deicidal Eye"] = new engine.RulesElement({
    name: "Deicidal Eye",
    type: "Power",
    id: "ID_FMP_POWER_4776",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4776",
    categories: ["Deicidal Eye", "ID_FMP_POWER_4776", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_203", "Godhunter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Deific Rallying"] = new engine.RulesElement({
    name: "Deific Rallying",
    type: "Power",
    id: "ID_FMP_POWER_4608",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4608",
    categories: ["Deific Rallying", "ID_FMP_POWER_4608", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Denying Mark"] = new engine.RulesElement({
    name: "Denying Mark",
    type: "Power",
    id: "ID_FMP_POWER_2593",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2593",
    categories: ["Denying Mark", "ID_FMP_POWER_2593", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Denying Stance"] = new engine.RulesElement({
    name: "Denying Stance",
    type: "Power",
    id: "ID_FMP_POWER_4510",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4510",
    categories: ["Denying Stance", "ID_FMP_POWER_4510", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Desperate Strike"] = new engine.RulesElement({
    name: "Desperate Strike",
    type: "Power",
    id: "ID_FMP_POWER_4361",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4361",
    categories: ["Desperate Strike", "ID_FMP_POWER_4361", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Devil's Sight"] = new engine.RulesElement({
    name: "Devil's Sight",
    type: "Power",
    id: "ID_FMP_POWER_4739",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4739",
    categories: ["Devil's Sight", "ID_FMP_POWER_4739", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_113", "Tiefling Hellstalker", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Dicey Predicament"] = new engine.RulesElement({
    name: "Dicey Predicament",
    type: "Power",
    id: "ID_FMP_POWER_4555",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4555",
    categories: ["Dicey Predicament", "ID_FMP_POWER_4555", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Dimming Blow"] = new engine.RulesElement({
    name: "Dimming Blow",
    type: "Power",
    id: "ID_FMP_POWER_2522",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2522",
    categories: ["Dimming Blow", "ID_FMP_POWER_2522", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_113", "Tiefling Hellstalker", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Diplomacy of Steel"] = new engine.RulesElement({
    name: "Diplomacy of Steel",
    type: "Power",
    id: "ID_FMP_POWER_4752",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4752",
    categories: ["Diplomacy of Steel", "ID_FMP_POWER_4752", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_192", "Dujun of Erathis", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Disheartening Flurry"] = new engine.RulesElement({
    name: "Disheartening Flurry",
    type: "Power",
    id: "ID_FMP_POWER_2594",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2594",
    categories: ["Disheartening Flurry", "ID_FMP_POWER_2594", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Disheartening Strike"] = new engine.RulesElement({
    name: "Disheartening Strike",
    type: "Power",
    id: "ID_FMP_POWER_2248",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2248",
    categories: ["Disheartening Strike", "ID_FMP_POWER_2248", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Dismaying Slash"] = new engine.RulesElement({
    name: "Dismaying Slash",
    type: "Power",
    id: "ID_FMP_POWER_4488",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4488",
    categories: ["Dismaying Slash", "ID_FMP_POWER_4488", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Distracting Spate"] = new engine.RulesElement({
    name: "Distracting Spate",
    type: "Power",
    id: "ID_FMP_POWER_2108",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2108",
    categories: ["Distracting Spate", "ID_FMP_POWER_2108", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Double Take"] = new engine.RulesElement({
    name: "Double Take",
    type: "Power",
    id: "ID_FMP_POWER_2495",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2495",
    categories: ["Double Take", "ID_FMP_POWER_2495", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Downward Spiral"] = new engine.RulesElement({
    name: "Downward Spiral",
    type: "Power",
    id: "ID_FMP_POWER_2521",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2521",
    categories: ["Downward Spiral", "ID_FMP_POWER_2521", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon Blast"] = new engine.RulesElement({
    name: "Dragon Blast",
    type: "Power",
    id: "ID_FMP_POWER_4666",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4666",
    categories: ["Dragon Blast", "ID_FMP_POWER_4666", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_164", "Inner Dragon", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Dragonbreath Strike"] = new engine.RulesElement({
    name: "Dragonbreath Strike",
    type: "Power",
    id: "ID_FMP_POWER_4668",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4668",
    categories: ["Dragonbreath Strike", "ID_FMP_POWER_4668", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_164", "Inner Dragon", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Dramatic Finish"] = new engine.RulesElement({
    name: "Dramatic Finish",
    type: "Power",
    id: "ID_FMP_POWER_4721",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4721",
    categories: ["Dramatic Finish", "ID_FMP_POWER_4721", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_182", "Daring Acrobat", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Driven Before You"] = new engine.RulesElement({
    name: "Driven Before You",
    type: "Power",
    id: "ID_FMP_POWER_1606",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=1606",
    categories: ["Driven Before You", "ID_FMP_POWER_1606", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_22", "Ravager", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Driving Assault"] = new engine.RulesElement({
    name: "Driving Assault",
    type: "Power",
    id: "ID_FMP_POWER_4480",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4480",
    categories: ["Driving Assault", "ID_FMP_POWER_4480", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Driving Flurry"] = new engine.RulesElement({
    name: "Driving Flurry",
    type: "Power",
    id: "ID_FMP_POWER_2456",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2456",
    categories: ["Driving Flurry", "ID_FMP_POWER_2456", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Driving Offensive"] = new engine.RulesElement({
    name: "Driving Offensive",
    type: "Power",
    id: "ID_FMP_POWER_4439",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4439",
    categories: ["Driving Offensive", "ID_FMP_POWER_4439", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Driving Spear"] = new engine.RulesElement({
    name: "Driving Spear",
    type: "Power",
    id: "ID_FMP_POWER_2579",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2579",
    categories: ["Driving Spear", "ID_FMP_POWER_2579", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_120", "Longarm Marshal", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Driving the Quarry"] = new engine.RulesElement({
    name: "Driving the Quarry",
    type: "Power",
    id: "ID_FMP_POWER_4375",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4375",
    categories: ["Driving the Quarry", "ID_FMP_POWER_4375", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Dual Strike"] = new engine.RulesElement({
    name: "Dual Strike",
    type: "Power",
    id: "ID_FMP_POWER_2104",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2104",
    categories: ["Dual Strike", "ID_FMP_POWER_2104", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Dual-Weapon Supremacy"] = new engine.RulesElement({
    name: "Dual-Weapon Supremacy",
    type: "Power",
    id: "ID_FMP_POWER_2463",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2463",
    categories: ["Dual-Weapon Supremacy", "ID_FMP_POWER_2463", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Earthfast Assault"] = new engine.RulesElement({
    name: "Earthfast Assault",
    type: "Power",
    id: "ID_FMP_POWER_4753",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4753",
    categories: ["Earthfast Assault", "ID_FMP_POWER_4753", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_193", "Earthfast Brigadier", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Earthquake Smash"] = new engine.RulesElement({
    name: "Earthquake Smash",
    type: "Power",
    id: "ID_FMP_POWER_2222",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2222",
    categories: ["Earthquake Smash", "ID_FMP_POWER_2222", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Elemental Chaos Smite"] = new engine.RulesElement({
    name: "Elemental Chaos Smite",
    type: "Power",
    id: "ID_FMP_POWER_4699",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4699",
    categories: ["Elemental Chaos Smite", "ID_FMP_POWER_4699", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_175", "Horizon Walker", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Elemental-Heart Strike"] = new engine.RulesElement({
    name: "Elemental-Heart Strike",
    type: "Power",
    id: "ID_FMP_POWER_4749",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4749",
    categories: ["Elemental-Heart Strike", "ID_FMP_POWER_4749", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_191", "Concordant Leader", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Elf-Eyed Archery"] = new engine.RulesElement({
    name: "Elf-Eyed Archery",
    type: "Power",
    id: "ID_FMP_POWER_4710",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4710",
    categories: ["Elf-Eyed Archery", "ID_FMP_POWER_4710", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_179", "Sylvan Archer", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Enclose the Prey"] = new engine.RulesElement({
    name: "Enclose the Prey",
    type: "Power",
    id: "ID_FMP_POWER_4370",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4370",
    categories: ["Enclose the Prey", "ID_FMP_POWER_4370", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Encouraging Remark"] = new engine.RulesElement({
    name: "Encouraging Remark",
    type: "Power",
    id: "ID_FMP_POWER_4583",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4583",
    categories: ["Encouraging Remark", "ID_FMP_POWER_4583", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Encouraging Stance"] = new engine.RulesElement({
    name: "Encouraging Stance",
    type: "Power",
    id: "ID_FMP_POWER_4560",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4560",
    categories: ["Encouraging Stance", "ID_FMP_POWER_4560", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Enforced Threat"] = new engine.RulesElement({
    name: "Enforced Threat",
    type: "Power",
    id: "ID_FMP_POWER_2284",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2284",
    categories: ["Enforced Threat", "ID_FMP_POWER_2284", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Eruption of Steel"] = new engine.RulesElement({
    name: "Eruption of Steel",
    type: "Power",
    id: "ID_FMP_POWER_4681",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4681",
    categories: ["Eruption of Steel", "ID_FMP_POWER_4681", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_169", "Avalanche Hurler", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Escalating Barrage"] = new engine.RulesElement({
    name: "Escalating Barrage",
    type: "Power",
    id: "ID_FMP_POWER_4708",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4708",
    categories: ["Escalating Barrage", "ID_FMP_POWER_4708", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_178", "Sharpshooter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Escape Artist's Gambit"] = new engine.RulesElement({
    name: "Escape Artist's Gambit",
    type: "Power",
    id: "ID_FMP_POWER_2513",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2513",
    categories: ["Escape Artist's Gambit", "ID_FMP_POWER_2513", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Executioner's Mien"] = new engine.RulesElement({
    name: "Executioner's Mien",
    type: "Power",
    id: "ID_FMP_POWER_4499",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4499",
    categories: ["Executioner's Mien", "ID_FMP_POWER_4499", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Exemplar's Talon"] = new engine.RulesElement({
    name: "Exemplar's Talon",
    type: "Power",
    id: "ID_FMP_POWER_4765",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4765",
    categories: ["Exemplar's Talon", "ID_FMP_POWER_4765", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_196", "Platinum Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Exhorted Counterattack"] = new engine.RulesElement({
    name: "Exhorted Counterattack",
    type: "Power",
    id: "ID_FMP_POWER_1124",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=1124",
    categories: ["Exhorted Counterattack", "ID_FMP_POWER_1124", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Eye of the Storm"] = new engine.RulesElement({
    name: "Eye of the Storm",
    type: "Power",
    id: "ID_FMP_POWER_2442",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2442",
    categories: ["Eye of the Storm", "ID_FMP_POWER_2442", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Fang and Web Strike"] = new engine.RulesElement({
    name: "Fang and Web Strike",
    type: "Power",
    id: "ID_FMP_POWER_4725",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4725",
    categories: ["Fang and Web Strike", "ID_FMP_POWER_4725", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_184", "Dread Fang", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Fearless Rescue"] = new engine.RulesElement({
    name: "Fearless Rescue",
    type: "Power",
    id: "ID_FMP_POWER_4547",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4547",
    categories: ["Fearless Rescue", "ID_FMP_POWER_4547", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Felling Gash"] = new engine.RulesElement({
    name: "Felling Gash",
    type: "Power",
    id: "ID_FMP_POWER_2315",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2315",
    categories: ["Felling Gash", "ID_FMP_POWER_2315", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Feral Diversion"] = new engine.RulesElement({
    name: "Feral Diversion",
    type: "Power",
    id: "ID_FMP_POWER_4688",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4688",
    categories: ["Feral Diversion", "ID_FMP_POWER_4688", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_172", "Feral Spirit", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Ferocious Roar"] = new engine.RulesElement({
    name: "Ferocious Roar",
    type: "Power",
    id: "ID_FMP_POWER_4440",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4440",
    categories: ["Ferocious Roar", "ID_FMP_POWER_4440", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Ferret an Opening"] = new engine.RulesElement({
    name: "Ferret an Opening",
    type: "Power",
    id: "ID_FMP_POWER_4379",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4379",
    categories: ["Ferret an Opening", "ID_FMP_POWER_4379", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Ferret Out Frailty"] = new engine.RulesElement({
    name: "Ferret Out Frailty",
    type: "Power",
    id: "ID_FMP_POWER_2289",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2289",
    categories: ["Ferret Out Frailty", "ID_FMP_POWER_2289", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Fettering Shot"] = new engine.RulesElement({
    name: "Fettering Shot",
    type: "Power",
    id: "ID_FMP_POWER_4529",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4529",
    categories: ["Fettering Shot", "ID_FMP_POWER_4529", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Fey Step Assault"] = new engine.RulesElement({
    name: "Fey Step Assault",
    type: "Power",
    id: "ID_FMP_POWER_4766",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4766",
    categories: ["Fey Step Assault", "ID_FMP_POWER_4766", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_197", "Spiral Tactician", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Fey Strider"] = new engine.RulesElement({
    name: "Fey Strider",
    type: "Power",
    id: "ID_FMP_POWER_4698",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4698",
    categories: ["Fey Strider", "ID_FMP_POWER_4698", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_175", "Horizon Walker", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Fighter's Recovery"] = new engine.RulesElement({
    name: "Fighter's Recovery",
    type: "Power",
    id: "ID_FMP_POWER_4331",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4331",
    categories: ["Fighter's Recovery", "ID_FMP_POWER_4331", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Fighter's Resurgence"] = new engine.RulesElement({
    name: "Fighter's Resurgence",
    type: "Power",
    id: "ID_FMP_POWER_4357",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4357",
    categories: ["Fighter's Resurgence", "ID_FMP_POWER_4357", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Finish It"] = new engine.RulesElement({
    name: "Finish It",
    type: "Power",
    id: "ID_FMP_POWER_4506",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4506",
    categories: ["Finish It", "ID_FMP_POWER_4506", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Five-Missile Dance"] = new engine.RulesElement({
    name: "Five-Missile Dance",
    type: "Power",
    id: "ID_FMP_POWER_4461",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4461",
    categories: ["Five-Missile Dance", "ID_FMP_POWER_4461", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Flamboyant Strike"] = new engine.RulesElement({
    name: "Flamboyant Strike",
    type: "Power",
    id: "ID_FMP_POWER_4477",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4477",
    categories: ["Flamboyant Strike", "ID_FMP_POWER_4477", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Flamebrow Assault"] = new engine.RulesElement({
    name: "Flamebrow Assault",
    type: "Power",
    id: "ID_FMP_POWER_4757",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4757",
    categories: ["Flamebrow Assault", "ID_FMP_POWER_4757", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_194", "Flamebrow Commander", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Flanking Assault"] = new engine.RulesElement({
    name: "Flanking Assault",
    type: "Power",
    id: "ID_FMP_POWER_4314",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4314",
    categories: ["Flanking Assault", "ID_FMP_POWER_4314", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Flanking Stance"] = new engine.RulesElement({
    name: "Flanking Stance",
    type: "Power",
    id: "ID_FMP_POWER_2582",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2582",
    categories: ["Flanking Stance", "ID_FMP_POWER_2582", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Flashy Riposte"] = new engine.RulesElement({
    name: "Flashy Riposte",
    type: "Power",
    id: "ID_FMP_POWER_2266",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2266",
    categories: ["Flashy Riposte", "ID_FMP_POWER_2266", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Flattening Charge"] = new engine.RulesElement({
    name: "Flattening Charge",
    type: "Power",
    id: "ID_FMP_POWER_2539",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2539",
    categories: ["Flattening Charge", "ID_FMP_POWER_2539", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Flawless Snare"] = new engine.RulesElement({
    name: "Flawless Snare",
    type: "Power",
    id: "ID_FMP_POWER_2574",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2574",
    categories: ["Flawless Snare", "ID_FMP_POWER_2574", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Flawless Stunt"] = new engine.RulesElement({
    name: "Flawless Stunt",
    type: "Power",
    id: "ID_FMP_POWER_4720",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4720",
    categories: ["Flawless Stunt", "ID_FMP_POWER_4720", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_182", "Daring Acrobat", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Flexible Authority"] = new engine.RulesElement({
    name: "Flexible Authority",
    type: "Power",
    id: "ID_FMP_POWER_4761",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4761",
    categories: ["Flexible Authority", "ID_FMP_POWER_4761", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_195", "Infernal Strategist", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Follow Me In"] = new engine.RulesElement({
    name: "Follow Me In",
    type: "Power",
    id: "ID_FMP_POWER_2327",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2327",
    categories: ["Follow Me In", "ID_FMP_POWER_2327", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Footwork Lure"] = new engine.RulesElement({
    name: "Footwork Lure",
    type: "Power",
    id: "ID_FMP_POWER_2105",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2105",
    categories: ["Footwork Lure", "ID_FMP_POWER_2105", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Forge Fire Heart"] = new engine.RulesElement({
    name: "Forge Fire Heart",
    type: "Power",
    id: "ID_FMP_POWER_2547",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2547",
    categories: ["Forge Fire Heart", "ID_FMP_POWER_2547", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_116", "Dwarven Defender", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Formidable Smash"] = new engine.RulesElement({
    name: "Formidable Smash",
    type: "Power",
    id: "ID_FMP_POWER_4580",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4580",
    categories: ["Formidable Smash", "ID_FMP_POWER_4580", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Fortuitous Dodge"] = new engine.RulesElement({
    name: "Fortuitous Dodge",
    type: "Power",
    id: "ID_FMP_POWER_4483",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4483",
    categories: ["Fortuitous Dodge", "ID_FMP_POWER_4483", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Forward Observer"] = new engine.RulesElement({
    name: "Forward Observer",
    type: "Power",
    id: "ID_FMP_POWER_4561",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4561",
    categories: ["Forward Observer", "ID_FMP_POWER_4561", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Fox Shift"] = new engine.RulesElement({
    name: "Fox Shift",
    type: "Power",
    id: "ID_FMP_POWER_4380",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4380",
    categories: ["Fox Shift", "ID_FMP_POWER_4380", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Fox's Gambit"] = new engine.RulesElement({
    name: "Fox's Gambit",
    type: "Power",
    id: "ID_FMP_POWER_2503",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2503",
    categories: ["Fox's Gambit", "ID_FMP_POWER_2503", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["From the Shadows"] = new engine.RulesElement({
    name: "From the Shadows",
    type: "Power",
    id: "ID_FMP_POWER_4489",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4489",
    categories: ["From the Shadows", "ID_FMP_POWER_4489", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Funneling Flurry"] = new engine.RulesElement({
    name: "Funneling Flurry",
    type: "Power",
    id: "ID_FMP_POWER_2107",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2107",
    categories: ["Funneling Flurry", "ID_FMP_POWER_2107", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Gale of Steel"] = new engine.RulesElement({
    name: "Gale of Steel",
    type: "Power",
    id: "ID_FMP_POWER_2468",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2468",
    categories: ["Gale of Steel", "ID_FMP_POWER_2468", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Gap in the Armor"] = new engine.RulesElement({
    name: "Gap in the Armor",
    type: "Power",
    id: "ID_FMP_POWER_4500",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4500",
    categories: ["Gap in the Armor", "ID_FMP_POWER_4500", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Giant's Stride"] = new engine.RulesElement({
    name: "Giant's Stride",
    type: "Power",
    id: "ID_FMP_POWER_2242",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2242",
    categories: ["Giant's Stride", "ID_FMP_POWER_2242", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Giantslayer's Strike"] = new engine.RulesElement({
    name: "Giantslayer's Strike",
    type: "Power",
    id: "ID_FMP_POWER_4693",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4693",
    categories: ["Giantslayer's Strike", "ID_FMP_POWER_4693", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_173", "Giantslayer", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Girding Strike"] = new engine.RulesElement({
    name: "Girding Strike",
    type: "Power",
    id: "ID_FMP_POWER_2336",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2336",
    categories: ["Girding Strike", "ID_FMP_POWER_2336", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Gnawing Assault"] = new engine.RulesElement({
    name: "Gnawing Assault",
    type: "Power",
    id: "ID_FMP_POWER_4441",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4441",
    categories: ["Gnawing Assault", "ID_FMP_POWER_4441", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Gory Slash"] = new engine.RulesElement({
    name: "Gory Slash",
    type: "Power",
    id: "ID_FMP_POWER_2314",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2314",
    categories: ["Gory Slash", "ID_FMP_POWER_2314", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Graded Assault"] = new engine.RulesElement({
    name: "Graded Assault",
    type: "Power",
    id: "ID_FMP_POWER_4750",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4750",
    categories: ["Graded Assault", "ID_FMP_POWER_4750", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_192", "Dujun of Erathis", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Grasshopper Leap"] = new engine.RulesElement({
    name: "Grasshopper Leap",
    type: "Power",
    id: "ID_FMP_POWER_2303",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2303",
    categories: ["Grasshopper Leap", "ID_FMP_POWER_2303", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Grim Instruction"] = new engine.RulesElement({
    name: "Grim Instruction",
    type: "Power",
    id: "ID_FMP_POWER_4581",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4581",
    categories: ["Grim Instruction", "ID_FMP_POWER_4581", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Grim Mark"] = new engine.RulesElement({
    name: "Grim Mark",
    type: "Power",
    id: "ID_FMP_POWER_2334",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2334",
    categories: ["Grim Mark", "ID_FMP_POWER_2334", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Gruesome Kill"] = new engine.RulesElement({
    name: "Gruesome Kill",
    type: "Power",
    id: "ID_FMP_POWER_4723",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4723",
    categories: ["Gruesome Kill", "ID_FMP_POWER_4723", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_PARAGON_PATH_183", "Death Dealer", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Guarded Attack"] = new engine.RulesElement({
    name: "Guarded Attack",
    type: "Power",
    id: "ID_FMP_POWER_4468",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4468",
    categories: ["Guarded Attack", "ID_FMP_POWER_4468", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Guerrilla Blitz"] = new engine.RulesElement({
    name: "Guerrilla Blitz",
    type: "Power",
    id: "ID_FMP_POWER_2306",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2306",
    categories: ["Guerrilla Blitz", "ID_FMP_POWER_2306", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Guild Beatdown"] = new engine.RulesElement({
    name: "Guild Beatdown",
    type: "Power",
    id: "ID_FMP_POWER_2492",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2492",
    categories: ["Guild Beatdown", "ID_FMP_POWER_2492", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_110", "Guildmaster Thief", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Guileful Switch"] = new engine.RulesElement({
    name: "Guileful Switch",
    type: "Power",
    id: "ID_FMP_POWER_4562",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4562",
    categories: ["Guileful Switch", "ID_FMP_POWER_4562", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Hammer Formation"] = new engine.RulesElement({
    name: "Hammer Formation",
    type: "Power",
    id: "ID_FMP_POWER_2328",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2328",
    categories: ["Hammer Formation", "ID_FMP_POWER_2328", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Hammering Volley"] = new engine.RulesElement({
    name: "Hammering Volley",
    type: "Power",
    id: "ID_FMP_POWER_2605",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2605",
    categories: ["Hammering Volley", "ID_FMP_POWER_2605", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Hampering Flurry"] = new engine.RulesElement({
    name: "Hampering Flurry",
    type: "Power",
    id: "ID_FMP_POWER_2111",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2111",
    categories: ["Hampering Flurry", "ID_FMP_POWER_2111", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Handspring Assault"] = new engine.RulesElement({
    name: "Handspring Assault",
    type: "Power",
    id: "ID_FMP_POWER_2254",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2254",
    categories: ["Handspring Assault", "ID_FMP_POWER_2254", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Harried Quarry"] = new engine.RulesElement({
    name: "Harried Quarry",
    type: "Power",
    id: "ID_FMP_POWER_4403",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4403",
    categories: ["Harried Quarry", "ID_FMP_POWER_4403", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Harrier's Ploy"] = new engine.RulesElement({
    name: "Harrier's Ploy",
    type: "Power",
    id: "ID_FMP_POWER_2119",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2119",
    categories: ["Harrier's Ploy", "ID_FMP_POWER_2119", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Harrowing Hammer"] = new engine.RulesElement({
    name: "Harrowing Hammer",
    type: "Power",
    id: "ID_FMP_POWER_1996",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=1996",
    categories: ["Harrowing Hammer", "ID_FMP_POWER_1996", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Headstrong Bravery"] = new engine.RulesElement({
    name: "Headstrong Bravery",
    type: "Power",
    id: "ID_FMP_POWER_4577",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4577",
    categories: ["Headstrong Bravery", "ID_FMP_POWER_4577", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Hearten the Beast"] = new engine.RulesElement({
    name: "Hearten the Beast",
    type: "Power",
    id: "ID_FMP_POWER_4381",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4381",
    categories: ["Hearten the Beast", "ID_FMP_POWER_4381", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Hectoring Strike"] = new engine.RulesElement({
    name: "Hectoring Strike",
    type: "Power",
    id: "ID_FMP_POWER_4490",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4490",
    categories: ["Hectoring Strike", "ID_FMP_POWER_4490", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Hellfire Reprisal"] = new engine.RulesElement({
    name: "Hellfire Reprisal",
    type: "Power",
    id: "ID_FMP_POWER_2569",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2569",
    categories: ["Hellfire Reprisal", "ID_FMP_POWER_2569", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_118", "Tiefling Warfiend", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Herald the End"] = new engine.RulesElement({
    name: "Herald the End",
    type: "Power",
    id: "ID_FMP_POWER_2488",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2488",
    categories: ["Herald the End", "ID_FMP_POWER_2488", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_108", "Raven Herald", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Herd the Prey"] = new engine.RulesElement({
    name: "Herd the Prey",
    type: "Power",
    id: "ID_FMP_POWER_4418",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4418",
    categories: ["Herd the Prey", "ID_FMP_POWER_4418", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Heroic Effort (Warlord)"] = new engine.RulesElement({
    name: "Heroic Effort (Warlord)",
    type: "Power",
    id: "ID_FMP_POWER_4550",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4550",
    categories: ["Heroic Effort (Warlord)", "ID_FMP_POWER_4550", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Hobbling Shot"] = new engine.RulesElement({
    name: "Hobbling Shot",
    type: "Power",
    id: "ID_FMP_POWER_4450",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4450",
    categories: ["Hobbling Shot", "ID_FMP_POWER_4450", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Hop up"] = new engine.RulesElement({
    name: "Hop up",
    type: "Power",
    id: "ID_FMP_POWER_4475",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4475",
    categories: ["Hop up", "ID_FMP_POWER_4475", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Hounding Beast"] = new engine.RulesElement({
    name: "Hounding Beast",
    type: "Power",
    id: "ID_FMP_POWER_4434",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4434",
    categories: ["Hounding Beast", "ID_FMP_POWER_4434", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Hounding Longarm"] = new engine.RulesElement({
    name: "Hounding Longarm",
    type: "Power",
    id: "ID_FMP_POWER_4325",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4325",
    categories: ["Hounding Longarm", "ID_FMP_POWER_4325", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Howl of Defiance"] = new engine.RulesElement({
    name: "Howl of Defiance",
    type: "Power",
    id: "ID_FMP_POWER_2220",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2220",
    categories: ["Howl of Defiance", "ID_FMP_POWER_2220", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Hunker Down"] = new engine.RulesElement({
    name: "Hunker Down",
    type: "Power",
    id: "ID_FMP_POWER_4334",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4334",
    categories: ["Hunker Down", "ID_FMP_POWER_4334", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Hunt the Herd"] = new engine.RulesElement({
    name: "Hunt the Herd",
    type: "Power",
    id: "ID_FMP_POWER_4444",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4444",
    categories: ["Hunt the Herd", "ID_FMP_POWER_4444", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Hunter's Privilege"] = new engine.RulesElement({
    name: "Hunter's Privilege",
    type: "Power",
    id: "ID_FMP_POWER_4382",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4382",
    categories: ["Hunter's Privilege", "ID_FMP_POWER_4382", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Hunter's Shot"] = new engine.RulesElement({
    name: "Hunter's Shot",
    type: "Power",
    id: "ID_FMP_POWER_529",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=529",
    categories: ["Hunter's Shot", "ID_FMP_POWER_529", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Hunting Party"] = new engine.RulesElement({
    name: "Hunting Party",
    type: "Power",
    id: "ID_FMP_POWER_4412",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4412",
    categories: ["Hunting Party", "ID_FMP_POWER_4412", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Hunting-Partner Strike"] = new engine.RulesElement({
    name: "Hunting-Partner Strike",
    type: "Power",
    id: "ID_FMP_POWER_4371",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4371",
    categories: ["Hunting-Partner Strike", "ID_FMP_POWER_4371", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Huntmaster's Bloodbath"] = new engine.RulesElement({
    name: "Huntmaster's Bloodbath",
    type: "Power",
    id: "ID_FMP_POWER_4462",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4462",
    categories: ["Huntmaster's Bloodbath", "ID_FMP_POWER_4462", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Huntmaster's Mauling"] = new engine.RulesElement({
    name: "Huntmaster's Mauling",
    type: "Power",
    id: "ID_FMP_POWER_4463",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4463",
    categories: ["Huntmaster's Mauling", "ID_FMP_POWER_4463", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Hunt's End"] = new engine.RulesElement({
    name: "Hunt's End",
    type: "Power",
    id: "ID_FMP_POWER_4376",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4376",
    categories: ["Hunt's End", "ID_FMP_POWER_4376", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Hurling Pounce"] = new engine.RulesElement({
    name: "Hurling Pounce",
    type: "Power",
    id: "ID_FMP_POWER_4535",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4535",
    categories: ["Hurling Pounce", "ID_FMP_POWER_4535", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Immovable Mountain"] = new engine.RulesElement({
    name: "Immovable Mountain",
    type: "Power",
    id: "ID_FMP_POWER_4342",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4342",
    categories: ["Immovable Mountain", "ID_FMP_POWER_4342", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Impact Shot"] = new engine.RulesElement({
    name: "Impact Shot",
    type: "Power",
    id: "ID_FMP_POWER_4469",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4469",
    categories: ["Impact Shot", "ID_FMP_POWER_4469", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Implacable Destruction"] = new engine.RulesElement({
    name: "Implacable Destruction",
    type: "Power",
    id: "ID_FMP_POWER_4775",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4775",
    categories: ["Implacable Destruction", "ID_FMP_POWER_4775", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_202", "Eternal Defender", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Implied Threat"] = new engine.RulesElement({
    name: "Implied Threat",
    type: "Power",
    id: "ID_FMP_POWER_4737",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4737",
    categories: ["Implied Threat", "ID_FMP_POWER_4737", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_188", "Strong-Arm Enforcer", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Inexorable Advance"] = new engine.RulesElement({
    name: "Inexorable Advance",
    type: "Power",
    id: "ID_FMP_POWER_4654",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4654",
    categories: ["Inexorable Advance", "ID_FMP_POWER_4654", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_160", "Dreadnought", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Inexorable Advance (epic)"] = new engine.RulesElement({
    name: "Inexorable Advance (epic)",
    type: "Power",
    id: "ID_FMP_POWER_4772",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4772",
    categories: ["Inexorable Advance (epic)", "ID_FMP_POWER_4772", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_199", "Adamantine Soldier", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Inexorable Surge"] = new engine.RulesElement({
    name: "Inexorable Surge",
    type: "Power",
    id: "ID_FMP_POWER_4609",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4609",
    categories: ["Inexorable Surge", "ID_FMP_POWER_4609", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Infectious Determination"] = new engine.RulesElement({
    name: "Infectious Determination",
    type: "Power",
    id: "ID_FMP_POWER_2552",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2552",
    categories: ["Infectious Determination", "ID_FMP_POWER_2552", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Infernal Resurgence"] = new engine.RulesElement({
    name: "Infernal Resurgence",
    type: "Power",
    id: "ID_FMP_POWER_2560",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2560",
    categories: ["Infernal Resurgence", "ID_FMP_POWER_2560", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_118", "Tiefling Warfiend", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Insightful Strike"] = new engine.RulesElement({
    name: "Insightful Strike",
    type: "Power",
    id: "ID_FMP_POWER_4312",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4312",
    categories: ["Insightful Strike", "ID_FMP_POWER_4312", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Inspired Belligerence"] = new engine.RulesElement({
    name: "Inspired Belligerence",
    type: "Power",
    id: "ID_FMP_POWER_4551",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4551",
    categories: ["Inspired Belligerence", "ID_FMP_POWER_4551", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Inspired Resurgence"] = new engine.RulesElement({
    name: "Inspired Resurgence",
    type: "Power",
    id: "ID_FMP_POWER_4350",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4350",
    categories: ["Inspired Resurgence", "ID_FMP_POWER_4350", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Inspiring Charge"] = new engine.RulesElement({
    name: "Inspiring Charge",
    type: "Power",
    id: "ID_FMP_POWER_4588",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4588",
    categories: ["Inspiring Charge", "ID_FMP_POWER_4588", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Instant Planning"] = new engine.RulesElement({
    name: "Instant Planning",
    type: "Power",
    id: "ID_FMP_POWER_4574",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4574",
    categories: ["Instant Planning", "ID_FMP_POWER_4574", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Into Harm's Way"] = new engine.RulesElement({
    name: "Into Harm's Way",
    type: "Power",
    id: "ID_FMP_POWER_4493",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4493",
    categories: ["Into Harm's Way", "ID_FMP_POWER_4493", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Into the Breach!"] = new engine.RulesElement({
    name: "Into the Breach!",
    type: "Power",
    id: "ID_FMP_POWER_4587",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4587",
    categories: ["Into the Breach!", "ID_FMP_POWER_4587", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Invigorate the Beast"] = new engine.RulesElement({
    name: "Invigorate the Beast",
    type: "Power",
    id: "ID_FMP_POWER_4399",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4399",
    categories: ["Invigorate the Beast", "ID_FMP_POWER_4399", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Jackal Ploy"] = new engine.RulesElement({
    name: "Jackal Ploy",
    type: "Power",
    id: "ID_FMP_POWER_4404",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4404",
    categories: ["Jackal Ploy", "ID_FMP_POWER_4404", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Jackal Strike"] = new engine.RulesElement({
    name: "Jackal Strike",
    type: "Power",
    id: "ID_FMP_POWER_4332",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4332",
    categories: ["Jackal Strike", "ID_FMP_POWER_4332", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Jarring Salvo"] = new engine.RulesElement({
    name: "Jarring Salvo",
    type: "Power",
    id: "ID_FMP_POWER_4407",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4407",
    categories: ["Jarring Salvo", "ID_FMP_POWER_4407", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Keystone Collapse"] = new engine.RulesElement({
    name: "Keystone Collapse",
    type: "Power",
    id: "ID_FMP_POWER_2548",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2548",
    categories: ["Keystone Collapse", "ID_FMP_POWER_2548", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_116", "Dwarven Defender", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Knee Breaker"] = new engine.RulesElement({
    name: "Knee Breaker",
    type: "Power",
    id: "ID_FMP_POWER_2124",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2124",
    categories: ["Knee Breaker", "ID_FMP_POWER_2124", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Knightly Bulwark"] = new engine.RulesElement({
    name: "Knightly Bulwark",
    type: "Power",
    id: "ID_FMP_POWER_4670",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4670",
    categories: ["Knightly Bulwark", "ID_FMP_POWER_4670", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_165", "Knight Protector", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Knockdown Pounce"] = new engine.RulesElement({
    name: "Knockdown Pounce",
    type: "Power",
    id: "ID_FMP_POWER_4419",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4419",
    categories: ["Knockdown Pounce", "ID_FMP_POWER_4419", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Lacerating Maul"] = new engine.RulesElement({
    name: "Lacerating Maul",
    type: "Power",
    id: "ID_FMP_POWER_4393",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4393",
    categories: ["Lacerating Maul", "ID_FMP_POWER_4393", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Landslide Strike"] = new engine.RulesElement({
    name: "Landslide Strike",
    type: "Power",
    id: "ID_FMP_POWER_4679",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4679",
    categories: ["Landslide Strike", "ID_FMP_POWER_4679", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_169", "Avalanche Hurler", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Lasting Threat"] = new engine.RulesElement({
    name: "Lasting Threat",
    type: "Power",
    id: "ID_FMP_POWER_4315",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4315",
    categories: ["Lasting Threat", "ID_FMP_POWER_4315", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Lead by Example"] = new engine.RulesElement({
    name: "Lead by Example",
    type: "Power",
    id: "ID_FMP_POWER_4548",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4548",
    categories: ["Lead by Example", "ID_FMP_POWER_4548", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Legendary Exploits"] = new engine.RulesElement({
    name: "Legendary Exploits",
    type: "Power",
    id: "ID_FMP_POWER_4777",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4777",
    categories: ["Legendary Exploits", "ID_FMP_POWER_4777", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_204", "Legendary General", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Leonine Surge"] = new engine.RulesElement({
    name: "Leonine Surge",
    type: "Power",
    id: "ID_FMP_POWER_4385",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4385",
    categories: ["Leonine Surge", "ID_FMP_POWER_4385", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Leveraging Strike"] = new engine.RulesElement({
    name: "Leveraging Strike",
    type: "Power",
    id: "ID_FMP_POWER_4672",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4672",
    categories: ["Leveraging Strike", "ID_FMP_POWER_4672", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_166", "Polearm Master", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Line-Breaker Assault"] = new engine.RulesElement({
    name: "Line-Breaker Assault",
    type: "Power",
    id: "ID_FMP_POWER_4655",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4655",
    categories: ["Line-Breaker Assault", "ID_FMP_POWER_4655", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_160", "Dreadnought", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Lingering Revelation"] = new engine.RulesElement({
    name: "Lingering Revelation",
    type: "Power",
    id: "ID_FMP_POWER_2506",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2506",
    categories: ["Lingering Revelation", "ID_FMP_POWER_2506", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_112", "Master Spy", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Little Bait"] = new engine.RulesElement({
    name: "Little Bait",
    type: "Power",
    id: "ID_FMP_POWER_4691",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4691",
    categories: ["Little Bait", "ID_FMP_POWER_4691", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_173", "Giantslayer", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Looming Justice"] = new engine.RulesElement({
    name: "Looming Justice",
    type: "Power",
    id: "ID_FMP_POWER_4612",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4612",
    categories: ["Looming Justice", "ID_FMP_POWER_4612", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_159", "Avenging Slayer", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Low Slash"] = new engine.RulesElement({
    name: "Low Slash",
    type: "Power",
    id: "ID_FMP_POWER_4478",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4478",
    categories: ["Low Slash", "ID_FMP_POWER_4478", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Lunging Strike"] = new engine.RulesElement({
    name: "Lunging Strike",
    type: "Power",
    id: "ID_FMP_POWER_4313",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4313",
    categories: ["Lunging Strike", "ID_FMP_POWER_4313", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Luring Focus"] = new engine.RulesElement({
    name: "Luring Focus",
    type: "Power",
    id: "ID_FMP_POWER_4543",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4543",
    categories: ["Luring Focus", "ID_FMP_POWER_4543", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Lurk Unseen"] = new engine.RulesElement({
    name: "Lurk Unseen",
    type: "Power",
    id: "ID_FMP_POWER_4713",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4713",
    categories: ["Lurk Unseen", "ID_FMP_POWER_4713", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_180", "Wildcat Stalker", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Magnetic Shot"] = new engine.RulesElement({
    name: "Magnetic Shot",
    type: "Power",
    id: "ID_FMP_POWER_4531",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4531",
    categories: ["Magnetic Shot", "ID_FMP_POWER_4531", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Magpie Filch"] = new engine.RulesElement({
    name: "Magpie Filch",
    type: "Power",
    id: "ID_FMP_POWER_2301",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2301",
    categories: ["Magpie Filch", "ID_FMP_POWER_2301", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Marked Beating"] = new engine.RulesElement({
    name: "Marked Beating",
    type: "Power",
    id: "ID_FMP_POWER_4518",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4518",
    categories: ["Marked Beating", "ID_FMP_POWER_4518", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Marked Escape"] = new engine.RulesElement({
    name: "Marked Escape",
    type: "Power",
    id: "ID_FMP_POWER_12510",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12510",
    categories: ["Marked Escape", "ID_FMP_POWER_12510", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Marked Revelation"] = new engine.RulesElement({
    name: "Marked Revelation",
    type: "Power",
    id: "ID_FMP_POWER_2566",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2566",
    categories: ["Marked Revelation", "ID_FMP_POWER_2566", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Marked Savagery"] = new engine.RulesElement({
    name: "Marked Savagery",
    type: "Power",
    id: "ID_FMP_POWER_1612",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=1612",
    categories: ["Marked Savagery", "ID_FMP_POWER_1612", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_22", "Ravager", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Marking Barrage"] = new engine.RulesElement({
    name: "Marking Barrage",
    type: "Power",
    id: "ID_FMP_POWER_2516",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2516",
    categories: ["Marking Barrage", "ID_FMP_POWER_2516", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Marking Stance"] = new engine.RulesElement({
    name: "Marking Stance",
    type: "Power",
    id: "ID_FMP_POWER_2550",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2550",
    categories: ["Marking Stance", "ID_FMP_POWER_2550", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Menacing Cry"] = new engine.RulesElement({
    name: "Menacing Cry",
    type: "Power",
    id: "ID_FMP_POWER_4408",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4408",
    categories: ["Menacing Cry", "ID_FMP_POWER_4408", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Menacing Stance"] = new engine.RulesElement({
    name: "Menacing Stance",
    type: "Power",
    id: "ID_FMP_POWER_2229",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2229",
    categories: ["Menacing Stance", "ID_FMP_POWER_2229", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Meticulous Stab"] = new engine.RulesElement({
    name: "Meticulous Stab",
    type: "Power",
    id: "ID_FMP_POWER_4354",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4354",
    categories: ["Meticulous Stab", "ID_FMP_POWER_4354", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Mind-Bending Blades"] = new engine.RulesElement({
    name: "Mind-Bending Blades",
    type: "Power",
    id: "ID_FMP_POWER_4684",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4684",
    categories: ["Mind-Bending Blades", "ID_FMP_POWER_4684", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_170", "Blade Banshee", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Mind-Boggling Onslaught"] = new engine.RulesElement({
    name: "Mind-Boggling Onslaught",
    type: "Power",
    id: "ID_FMP_POWER_2302",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2302",
    categories: ["Mind-Boggling Onslaught", "ID_FMP_POWER_2302", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Misleading Bladework"] = new engine.RulesElement({
    name: "Misleading Bladework",
    type: "Power",
    id: "ID_FMP_POWER_4686",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4686",
    categories: ["Misleading Bladework", "ID_FMP_POWER_4686", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_171", "Blade Dancer", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Mocking Footwork"] = new engine.RulesElement({
    name: "Mocking Footwork",
    type: "Power",
    id: "ID_FMP_POWER_4734",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4734",
    categories: ["Mocking Footwork", "ID_FMP_POWER_4734", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_187", "Rakish Swashbuckler", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Morale-Shaking Strike"] = new engine.RulesElement({
    name: "Morale-Shaking Strike",
    type: "Power",
    id: "ID_FMP_POWER_4746",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4746",
    categories: ["Morale-Shaking Strike", "ID_FMP_POWER_4746", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_190", "Commando Captain", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Mortal Wound"] = new engine.RulesElement({
    name: "Mortal Wound",
    type: "Power",
    id: "ID_FMP_POWER_4366",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4366",
    categories: ["Mortal Wound", "ID_FMP_POWER_4366", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Motivated Recovery"] = new engine.RulesElement({
    name: "Motivated Recovery",
    type: "Power",
    id: "ID_FMP_POWER_4552",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4552",
    categories: ["Motivated Recovery", "ID_FMP_POWER_4552", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Mountebank's Flight"] = new engine.RulesElement({
    name: "Mountebank's Flight",
    type: "Power",
    id: "ID_FMP_POWER_4522",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4522",
    categories: ["Mountebank's Flight", "ID_FMP_POWER_4522", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Myrmidon Formation"] = new engine.RulesElement({
    name: "Myrmidon Formation",
    type: "Power",
    id: "ID_FMP_POWER_2443",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2443",
    categories: ["Myrmidon Formation", "ID_FMP_POWER_2443", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Named Arrow"] = new engine.RulesElement({
    name: "Named Arrow",
    type: "Power",
    id: "ID_FMP_POWER_4711",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4711",
    categories: ["Named Arrow", "ID_FMP_POWER_4711", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_179", "Sylvan Archer", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Named Dread"] = new engine.RulesElement({
    name: "Named Dread",
    type: "Power",
    id: "ID_FMP_POWER_4704",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4704",
    categories: ["Named Dread", "ID_FMP_POWER_4704", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_177", "Ruthless Punisher", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Nasty Backswing"] = new engine.RulesElement({
    name: "Nasty Backswing",
    type: "Power",
    id: "ID_FMP_POWER_4479",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4479",
    categories: ["Nasty Backswing", "ID_FMP_POWER_4479", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Neck-Bite Pounce"] = new engine.RulesElement({
    name: "Neck-Bite Pounce",
    type: "Power",
    id: "ID_FMP_POWER_4702",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4702",
    categories: ["Neck-Bite Pounce", "ID_FMP_POWER_4702", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_176", "Pack Runner", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Never at a Loss"] = new engine.RulesElement({
    name: "Never at a Loss",
    type: "Power",
    id: "ID_FMP_POWER_4774",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4774",
    categories: ["Never at a Loss", "ID_FMP_POWER_4774", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_201", "Dark Wanderer", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["New Victim"] = new engine.RulesElement({
    name: "New Victim",
    type: "Power",
    id: "ID_FMP_POWER_2460",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2460",
    categories: ["New Victim", "ID_FMP_POWER_2460", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_107", "Borderlands Marshal", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Nimble Deflection"] = new engine.RulesElement({
    name: "Nimble Deflection",
    type: "Power",
    id: "ID_FMP_POWER_4729",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4729",
    categories: ["Nimble Deflection", "ID_FMP_POWER_4729", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_185", "Flying-Blade Adept", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Nimble Footwork"] = new engine.RulesElement({
    name: "Nimble Footwork",
    type: "Power",
    id: "ID_FMP_POWER_4544",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4544",
    categories: ["Nimble Footwork", "ID_FMP_POWER_4544", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["No Escape"] = new engine.RulesElement({
    name: "No Escape",
    type: "Power",
    id: "ID_FMP_POWER_2896",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2896",
    categories: ["No Escape", "ID_FMP_POWER_2896", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Nonchalant Collapse"] = new engine.RulesElement({
    name: "Nonchalant Collapse",
    type: "Power",
    id: "ID_FMP_POWER_4451",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4451",
    categories: ["Nonchalant Collapse", "ID_FMP_POWER_4451", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Not It"] = new engine.RulesElement({
    name: "Not It",
    type: "Power",
    id: "ID_FMP_POWER_4494",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4494",
    categories: ["Not It", "ID_FMP_POWER_4494", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Not So Fast"] = new engine.RulesElement({
    name: "Not So Fast",
    type: "Power",
    id: "ID_FMP_POWER_856",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=856",
    categories: ["Not So Fast", "ID_FMP_POWER_856", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Not Worth My Time"] = new engine.RulesElement({
    name: "Not Worth My Time",
    type: "Power",
    id: "ID_FMP_POWER_2399",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2399",
    categories: ["Not Worth My Time", "ID_FMP_POWER_2399", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Off-Hand Diversion"] = new engine.RulesElement({
    name: "Off-Hand Diversion",
    type: "Power",
    id: "ID_FMP_POWER_4420",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4420",
    categories: ["Off-Hand Diversion", "ID_FMP_POWER_4420", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Off-Hand Parry"] = new engine.RulesElement({
    name: "Off-Hand Parry",
    type: "Power",
    id: "ID_FMP_POWER_4377",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4377",
    categories: ["Off-Hand Parry", "ID_FMP_POWER_4377", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Off-Hand Strike"] = new engine.RulesElement({
    name: "Off-Hand Strike",
    type: "Power",
    id: "ID_FMP_POWER_2595",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2595",
    categories: ["Off-Hand Strike", "ID_FMP_POWER_2595", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Opening Shove"] = new engine.RulesElement({
    name: "Opening Shove",
    type: "Power",
    id: "ID_FMP_POWER_4542",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4542",
    categories: ["Opening Shove", "ID_FMP_POWER_4542", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Opportunistic Relocation"] = new engine.RulesElement({
    name: "Opportunistic Relocation",
    type: "Power",
    id: "ID_FMP_POWER_2305",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2305",
    categories: ["Opportunistic Relocation", "ID_FMP_POWER_2305", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Overwhelming Fury"] = new engine.RulesElement({
    name: "Overwhelming Fury",
    type: "Power",
    id: "ID_FMP_POWER_4452",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4452",
    categories: ["Overwhelming Fury", "ID_FMP_POWER_4452", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Pack Alertness"] = new engine.RulesElement({
    name: "Pack Alertness",
    type: "Power",
    id: "ID_FMP_POWER_4383",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4383",
    categories: ["Pack Alertness", "ID_FMP_POWER_4383", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Pack Hunter Stance"] = new engine.RulesElement({
    name: "Pack Hunter Stance",
    type: "Power",
    id: "ID_FMP_POWER_2458",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2458",
    categories: ["Pack Hunter Stance", "ID_FMP_POWER_2458", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_107", "Borderlands Marshal", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Pack Runner Assault"] = new engine.RulesElement({
    name: "Pack Runner Assault",
    type: "Power",
    id: "ID_FMP_POWER_4700",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4700",
    categories: ["Pack Runner Assault", "ID_FMP_POWER_4700", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_176", "Pack Runner", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Pack Stealth"] = new engine.RulesElement({
    name: "Pack Stealth",
    type: "Power",
    id: "ID_FMP_POWER_4428",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4428",
    categories: ["Pack Stealth", "ID_FMP_POWER_4428", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Painful Reminder"] = new engine.RulesElement({
    name: "Painful Reminder",
    type: "Power",
    id: "ID_FMP_POWER_4736",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4736",
    categories: ["Painful Reminder", "ID_FMP_POWER_4736", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_188", "Strong-Arm Enforcer", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Paired Predators"] = new engine.RulesElement({
    name: "Paired Predators",
    type: "Power",
    id: "ID_FMP_POWER_4386",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4386",
    categories: ["Paired Predators", "ID_FMP_POWER_4386", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Panther Pounce"] = new engine.RulesElement({
    name: "Panther Pounce",
    type: "Power",
    id: "ID_FMP_POWER_4715",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4715",
    categories: ["Panther Pounce", "ID_FMP_POWER_4715", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_180", "Wildcat Stalker", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Parry and Riposte"] = new engine.RulesElement({
    name: "Parry and Riposte",
    type: "Power",
    id: "ID_FMP_POWER_2106",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2106",
    categories: ["Parry and Riposte", "ID_FMP_POWER_2106", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Partnered Savaging"] = new engine.RulesElement({
    name: "Partnered Savaging",
    type: "Power",
    id: "ID_FMP_POWER_4378",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4378",
    categories: ["Partnered Savaging", "ID_FMP_POWER_4378", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Pass Forward"] = new engine.RulesElement({
    name: "Pass Forward",
    type: "Power",
    id: "ID_FMP_POWER_2116",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2116",
    categories: ["Pass Forward", "ID_FMP_POWER_2116", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Passing Ambush"] = new engine.RulesElement({
    name: "Passing Ambush",
    type: "Power",
    id: "ID_FMP_POWER_4409",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4409",
    categories: ["Passing Ambush", "ID_FMP_POWER_4409", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Path of the Storm"] = new engine.RulesElement({
    name: "Path of the Storm",
    type: "Power",
    id: "ID_FMP_POWER_4743",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4743",
    categories: ["Path of the Storm", "ID_FMP_POWER_4743", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_189", "Battlelord of Kord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Perfect Aim"] = new engine.RulesElement({
    name: "Perfect Aim",
    type: "Power",
    id: "ID_FMP_POWER_4707",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4707",
    categories: ["Perfect Aim", "ID_FMP_POWER_4707", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_178", "Sharpshooter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Perfect Front"] = new engine.RulesElement({
    name: "Perfect Front",
    type: "Power",
    id: "ID_FMP_POWER_2592",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2592",
    categories: ["Perfect Front", "ID_FMP_POWER_2592", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Peripheral Concealment"] = new engine.RulesElement({
    name: "Peripheral Concealment",
    type: "Power",
    id: "ID_FMP_POWER_2297",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2297",
    categories: ["Peripheral Concealment", "ID_FMP_POWER_2297", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Pestering Wound"] = new engine.RulesElement({
    name: "Pestering Wound",
    type: "Power",
    id: "ID_FMP_POWER_4333",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4333",
    categories: ["Pestering Wound", "ID_FMP_POWER_4333", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Phalanx Assault"] = new engine.RulesElement({
    name: "Phalanx Assault",
    type: "Power",
    id: "ID_FMP_POWER_2332",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2332",
    categories: ["Phalanx Assault", "ID_FMP_POWER_2332", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Phalanx Formation"] = new engine.RulesElement({
    name: "Phalanx Formation",
    type: "Power",
    id: "ID_FMP_POWER_4563",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4563",
    categories: ["Phalanx Formation", "ID_FMP_POWER_4563", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Pike Hedge"] = new engine.RulesElement({
    name: "Pike Hedge",
    type: "Power",
    id: "ID_FMP_POWER_4558",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4558",
    categories: ["Pike Hedge", "ID_FMP_POWER_4558", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Pincer Maneuver"] = new engine.RulesElement({
    name: "Pincer Maneuver",
    type: "Power",
    id: "ID_FMP_POWER_4578",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4578",
    categories: ["Pincer Maneuver", "ID_FMP_POWER_4578", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Pinning Smash"] = new engine.RulesElement({
    name: "Pinning Smash",
    type: "Power",
    id: "ID_FMP_POWER_4326",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4326",
    categories: ["Pinning Smash", "ID_FMP_POWER_4326", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Piquing Dare"] = new engine.RulesElement({
    name: "Piquing Dare",
    type: "Power",
    id: "ID_FMP_POWER_2121",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2121",
    categories: ["Piquing Dare", "ID_FMP_POWER_2121", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Platinum Blood Smite"] = new engine.RulesElement({
    name: "Platinum Blood Smite",
    type: "Power",
    id: "ID_FMP_POWER_4763",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4763",
    categories: ["Platinum Blood Smite", "ID_FMP_POWER_4763", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_196", "Platinum Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Polearm Sweep"] = new engine.RulesElement({
    name: "Polearm Sweep",
    type: "Power",
    id: "ID_FMP_POWER_4674",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4674",
    categories: ["Polearm Sweep", "ID_FMP_POWER_4674", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_166", "Polearm Master", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Pommel Smash"] = new engine.RulesElement({
    name: "Pommel Smash",
    type: "Power",
    id: "ID_FMP_POWER_4471",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4471",
    categories: ["Pommel Smash", "ID_FMP_POWER_4471", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Pounding Barrage"] = new engine.RulesElement({
    name: "Pounding Barrage",
    type: "Power",
    id: "ID_FMP_POWER_4435",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4435",
    categories: ["Pounding Barrage", "ID_FMP_POWER_4435", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Powerful Shot"] = new engine.RulesElement({
    name: "Powerful Shot",
    type: "Power",
    id: "ID_FMP_POWER_4502",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4502",
    categories: ["Powerful Shot", "ID_FMP_POWER_4502", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Precise Incision"] = new engine.RulesElement({
    name: "Precise Incision",
    type: "Power",
    id: "ID_FMP_POWER_4472",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4472",
    categories: ["Precise Incision", "ID_FMP_POWER_4472", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Precision Stance"] = new engine.RulesElement({
    name: "Precision Stance",
    type: "Power",
    id: "ID_FMP_POWER_2553",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2553",
    categories: ["Precision Stance", "ID_FMP_POWER_2553", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Predator Strike"] = new engine.RulesElement({
    name: "Predator Strike",
    type: "Power",
    id: "ID_FMP_POWER_4369",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4369",
    categories: ["Predator Strike", "ID_FMP_POWER_4369", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Press Forward"] = new engine.RulesElement({
    name: "Press Forward",
    type: "Power",
    id: "ID_FMP_POWER_2546",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2546",
    categories: ["Press Forward", "ID_FMP_POWER_2546", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_116", "Dwarven Defender", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Press the Advantage"] = new engine.RulesElement({
    name: "Press the Advantage",
    type: "Power",
    id: "ID_FMP_POWER_4473",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4473",
    categories: ["Press the Advantage", "ID_FMP_POWER_4473", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Press the Advantage (Earthfast Brigadier)"] = new engine.RulesElement({
    name: "Press the Advantage (Earthfast Brigadier)",
    type: "Power",
    id: "ID_FMP_POWER_4755",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4755",
    categories: ["Press the Advantage (Earthfast Brigadier)", "ID_FMP_POWER_4755", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_193", "Earthfast Brigadier", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Preternatural Senses"] = new engine.RulesElement({
    name: "Preternatural Senses",
    type: "Power",
    id: "ID_FMP_POWER_4445",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4445",
    categories: ["Preternatural Senses", "ID_FMP_POWER_4445", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Rampage"] = new engine.RulesElement({
    name: "Primal Rampage",
    type: "Power",
    id: "ID_FMP_POWER_4454",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4454",
    categories: ["Primal Rampage", "ID_FMP_POWER_4454", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Prime Shift"] = new engine.RulesElement({
    name: "Prime Shift",
    type: "Power",
    id: "ID_FMP_POWER_4413",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4413",
    categories: ["Prime Shift", "ID_FMP_POWER_4413", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Primordial Onslaught"] = new engine.RulesElement({
    name: "Primordial Onslaught",
    type: "Power",
    id: "ID_FMP_POWER_4598",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4598",
    categories: ["Primordial Onslaught", "ID_FMP_POWER_4598", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Probing Attack"] = new engine.RulesElement({
    name: "Probing Attack",
    type: "Power",
    id: "ID_FMP_POWER_4320",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4320",
    categories: ["Probing Attack", "ID_FMP_POWER_4320", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Protective Sweep"] = new engine.RulesElement({
    name: "Protective Sweep",
    type: "Power",
    id: "ID_FMP_POWER_4349",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4349",
    categories: ["Protective Sweep", "ID_FMP_POWER_4349", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Protector's Strike"] = new engine.RulesElement({
    name: "Protector's Strike",
    type: "Power",
    id: "ID_FMP_POWER_4669",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4669",
    categories: ["Protector's Strike", "ID_FMP_POWER_4669", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_165", "Knight Protector", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Provoke Overextension"] = new engine.RulesElement({
    name: "Provoke Overextension",
    type: "Power",
    id: "ID_FMP_POWER_4567",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4567",
    categories: ["Provoke Overextension", "ID_FMP_POWER_4567", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Pursuit of the Wild Hunt"] = new engine.RulesElement({
    name: "Pursuit of the Wild Hunt",
    type: "Power",
    id: "ID_FMP_POWER_4455",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4455",
    categories: ["Pursuit of the Wild Hunt", "ID_FMP_POWER_4455", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Quick Change"] = new engine.RulesElement({
    name: "Quick Change",
    type: "Power",
    id: "ID_FMP_POWER_4732",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4732",
    categories: ["Quick Change", "ID_FMP_POWER_4732", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_112", "Master Spy", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Quick Recovery"] = new engine.RulesElement({
    name: "Quick Recovery",
    type: "Power",
    id: "ID_FMP_POWER_4414",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4414",
    categories: ["Quick Recovery", "ID_FMP_POWER_4414", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Quickblade Form"] = new engine.RulesElement({
    name: "Quickblade Form",
    type: "Power",
    id: "ID_FMP_POWER_2502",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2502",
    categories: ["Quickblade Form", "ID_FMP_POWER_2502", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_111", "Halfling Quickblade", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Quickblade Scarper"] = new engine.RulesElement({
    name: "Quickblade Scarper",
    type: "Power",
    id: "ID_FMP_POWER_2500",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2500",
    categories: ["Quickblade Scarper", "ID_FMP_POWER_2500", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_111", "Halfling Quickblade", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Quick-Draw Trick"] = new engine.RulesElement({
    name: "Quick-Draw Trick",
    type: "Power",
    id: "ID_FMP_POWER_4680",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4680",
    categories: ["Quick-Draw Trick", "ID_FMP_POWER_4680", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_PARAGON_PATH_169", "Avalanche Hurler", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Quickened Companion"] = new engine.RulesElement({
    name: "Quickened Companion",
    type: "Power",
    id: "ID_FMP_POWER_4773",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4773",
    categories: ["Quickened Companion", "ID_FMP_POWER_4773", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_200", "Beastlord", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Quickening Force"] = new engine.RulesElement({
    name: "Quickening Force",
    type: "Power",
    id: "ID_FMP_POWER_2438",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2438",
    categories: ["Quickening Force", "ID_FMP_POWER_2438", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Quickening Order"] = new engine.RulesElement({
    name: "Quickening Order",
    type: "Power",
    id: "ID_FMP_POWER_4593",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4593",
    categories: ["Quickening Order", "ID_FMP_POWER_4593", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Quicksilver Lunge"] = new engine.RulesElement({
    name: "Quicksilver Lunge",
    type: "Power",
    id: "ID_FMP_POWER_4665",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4665",
    categories: ["Quicksilver Lunge", "ID_FMP_POWER_4665", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_163", "Halfling Bounder", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Quicksilver Stance"] = new engine.RulesElement({
    name: "Quicksilver Stance",
    type: "Power",
    id: "ID_FMP_POWER_2467",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2467",
    categories: ["Quicksilver Stance", "ID_FMP_POWER_2467", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Rallying Deflection"] = new engine.RulesElement({
    name: "Rallying Deflection",
    type: "Power",
    id: "ID_FMP_POWER_4575",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4575",
    categories: ["Rallying Deflection", "ID_FMP_POWER_4575", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Rallying Lure"] = new engine.RulesElement({
    name: "Rallying Lure",
    type: "Power",
    id: "ID_FMP_POWER_4758",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4758",
    categories: ["Rallying Lure", "ID_FMP_POWER_4758", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_194", "Flamebrow Commander", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Ranger's Recovery"] = new engine.RulesElement({
    name: "Ranger's Recovery",
    type: "Power",
    id: "ID_FMP_POWER_4410",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4410",
    categories: ["Ranger's Recovery", "ID_FMP_POWER_4410", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Ranger's Resurgence"] = new engine.RulesElement({
    name: "Ranger's Resurgence",
    type: "Power",
    id: "ID_FMP_POWER_4456",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4456",
    categories: ["Ranger's Resurgence", "ID_FMP_POWER_4456", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Rapid Volley"] = new engine.RulesElement({
    name: "Rapid Volley",
    type: "Power",
    id: "ID_FMP_POWER_2602",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2602",
    categories: ["Rapid Volley", "ID_FMP_POWER_2602", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Reaching Stance"] = new engine.RulesElement({
    name: "Reaching Stance",
    type: "Power",
    id: "ID_FMP_POWER_4673",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4673",
    categories: ["Reaching Stance", "ID_FMP_POWER_4673", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_166", "Polearm Master", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Reap the Rattled"] = new engine.RulesElement({
    name: "Reap the Rattled",
    type: "Power",
    id: "ID_FMP_POWER_2389",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2389",
    categories: ["Reap the Rattled", "ID_FMP_POWER_2389", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Reaper's Warning"] = new engine.RulesElement({
    name: "Reaper's Warning",
    type: "Power",
    id: "ID_FMP_POWER_4658",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4658",
    categories: ["Reaper's Warning", "ID_FMP_POWER_4658", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_161", "Dread Reaper", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Reaping Lunge"] = new engine.RulesElement({
    name: "Reaping Lunge",
    type: "Power",
    id: "ID_FMP_POWER_4657",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4657",
    categories: ["Reaping Lunge", "ID_FMP_POWER_4657", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_161", "Dread Reaper", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Reckless Opportunity"] = new engine.RulesElement({
    name: "Reckless Opportunity",
    type: "Power",
    id: "ID_FMP_POWER_2531",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2531",
    categories: ["Reckless Opportunity", "ID_FMP_POWER_2531", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Regnant Shout"] = new engine.RulesElement({
    name: "Regnant Shout",
    type: "Power",
    id: "ID_FMP_POWER_2469",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2469",
    categories: ["Regnant Shout", "ID_FMP_POWER_2469", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Relentless Assailant"] = new engine.RulesElement({
    name: "Relentless Assailant",
    type: "Power",
    id: "ID_FMP_POWER_2144",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2144",
    categories: ["Relentless Assailant", "ID_FMP_POWER_2144", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Reminiscent Assault"] = new engine.RulesElement({
    name: "Reminiscent Assault",
    type: "Power",
    id: "ID_FMP_POWER_4769",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4769",
    categories: ["Reminiscent Assault", "ID_FMP_POWER_4769", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_198", "Twiceborn Leader", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Renewal Smite"] = new engine.RulesElement({
    name: "Renewal Smite",
    type: "Power",
    id: "ID_FMP_POWER_4759",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4759",
    categories: ["Renewal Smite", "ID_FMP_POWER_4759", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_194", "Flamebrow Commander", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Repositioning Command"] = new engine.RulesElement({
    name: "Repositioning Command",
    type: "Power",
    id: "ID_FMP_POWER_2555",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2555",
    categories: ["Repositioning Command", "ID_FMP_POWER_2555", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Reverberating Shield"] = new engine.RulesElement({
    name: "Reverberating Shield",
    type: "Power",
    id: "ID_FMP_POWER_2585",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2585",
    categories: ["Reverberating Shield", "ID_FMP_POWER_2585", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_121", "Shield Adept", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Rhino Strike"] = new engine.RulesElement({
    name: "Rhino Strike",
    type: "Power",
    id: "ID_FMP_POWER_4321",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4321",
    categories: ["Rhino Strike", "ID_FMP_POWER_4321", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Ricochet Blade"] = new engine.RulesElement({
    name: "Ricochet Blade",
    type: "Power",
    id: "ID_FMP_POWER_4728",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4728",
    categories: ["Ricochet Blade", "ID_FMP_POWER_4728", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_185", "Flying-Blade Adept", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Ride the Giant Down"] = new engine.RulesElement({
    name: "Ride the Giant Down",
    type: "Power",
    id: "ID_FMP_POWER_4692",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4692",
    categories: ["Ride the Giant Down", "ID_FMP_POWER_4692", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_173", "Giantslayer", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Ringing Clarity"] = new engine.RulesElement({
    name: "Ringing Clarity",
    type: "Power",
    id: "ID_FMP_POWER_2590",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2590",
    categories: ["Ringing Clarity", "ID_FMP_POWER_2590", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Ripple Effect"] = new engine.RulesElement({
    name: "Ripple Effect",
    type: "Power",
    id: "ID_FMP_POWER_2528",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2528",
    categories: ["Ripple Effect", "ID_FMP_POWER_2528", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Rock Steady"] = new engine.RulesElement({
    name: "Rock Steady",
    type: "Power",
    id: "ID_FMP_POWER_2230",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2230",
    categories: ["Rock Steady", "ID_FMP_POWER_2230", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Rogue's Recovery"] = new engine.RulesElement({
    name: "Rogue's Recovery",
    type: "Power",
    id: "ID_FMP_POWER_4495",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4495",
    categories: ["Rogue's Recovery", "ID_FMP_POWER_4495", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Rogue's Resurgence"] = new engine.RulesElement({
    name: "Rogue's Resurgence",
    type: "Power",
    id: "ID_FMP_POWER_4532",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4532",
    categories: ["Rogue's Resurgence", "ID_FMP_POWER_4532", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Rousing Words"] = new engine.RulesElement({
    name: "Rousing Words",
    type: "Power",
    id: "ID_FMP_POWER_4564",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4564",
    categories: ["Rousing Words", "ID_FMP_POWER_4564", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Rub Some Dirt On It"] = new engine.RulesElement({
    name: "Rub Some Dirt On It",
    type: "Power",
    id: "ID_FMP_POWER_4554",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4554",
    categories: ["Rub Some Dirt On It", "ID_FMP_POWER_4554", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Ruffling Sting"] = new engine.RulesElement({
    name: "Ruffling Sting",
    type: "Power",
    id: "ID_FMP_POWER_4387",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4387",
    categories: ["Ruffling Sting", "ID_FMP_POWER_4387", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Rush of Battle"] = new engine.RulesElement({
    name: "Rush of Battle",
    type: "Power",
    id: "ID_FMP_POWER_4594",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4594",
    categories: ["Rush of Battle", "ID_FMP_POWER_4594", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Ruthless Outburst"] = new engine.RulesElement({
    name: "Ruthless Outburst",
    type: "Power",
    id: "ID_FMP_POWER_4613",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4613",
    categories: ["Ruthless Outburst", "ID_FMP_POWER_4613", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_159", "Avenging Slayer", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Ruthless Slaughter"] = new engine.RulesElement({
    name: "Ruthless Slaughter",
    type: "Power",
    id: "ID_FMP_POWER_4358",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4358",
    categories: ["Ruthless Slaughter", "ID_FMP_POWER_4358", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Sacrificial Lure"] = new engine.RulesElement({
    name: "Sacrificial Lure",
    type: "Power",
    id: "ID_FMP_POWER_4568",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4568",
    categories: ["Sacrificial Lure", "ID_FMP_POWER_4568", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Safe Bet"] = new engine.RulesElement({
    name: "Safe Bet",
    type: "Power",
    id: "ID_FMP_POWER_4536",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4536",
    categories: ["Safe Bet", "ID_FMP_POWER_4536", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Savage Parry"] = new engine.RulesElement({
    name: "Savage Parry",
    type: "Power",
    id: "ID_FMP_POWER_2133",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2133",
    categories: ["Savage Parry", "ID_FMP_POWER_2133", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Scattering Swing"] = new engine.RulesElement({
    name: "Scattering Swing",
    type: "Power",
    id: "ID_FMP_POWER_2140",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2140",
    categories: ["Scattering Swing", "ID_FMP_POWER_2140", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Scattering Volley"] = new engine.RulesElement({
    name: "Scattering Volley",
    type: "Power",
    id: "ID_FMP_POWER_2603",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2603",
    categories: ["Scattering Volley", "ID_FMP_POWER_2603", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Scent of Fear"] = new engine.RulesElement({
    name: "Scent of Fear",
    type: "Power",
    id: "ID_FMP_POWER_4424",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4424",
    categories: ["Scent of Fear", "ID_FMP_POWER_4424", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Scent of Victory"] = new engine.RulesElement({
    name: "Scent of Victory",
    type: "Power",
    id: "ID_FMP_POWER_2530",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2530",
    categories: ["Scent of Victory", "ID_FMP_POWER_2530", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Scoundrel's Epiphany"] = new engine.RulesElement({
    name: "Scoundrel's Epiphany",
    type: "Power",
    id: "ID_FMP_POWER_2499",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2499",
    categories: ["Scoundrel's Epiphany", "ID_FMP_POWER_2499", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Seconded Smite"] = new engine.RulesElement({
    name: "Seconded Smite",
    type: "Power",
    id: "ID_FMP_POWER_4771",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4771",
    categories: ["Seconded Smite", "ID_FMP_POWER_4771", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_198", "Twiceborn Leader", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Seize the Moment"] = new engine.RulesElement({
    name: "Seize the Moment",
    type: "Power",
    id: "ID_FMP_POWER_1425",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=1425",
    categories: ["Seize the Moment", "ID_FMP_POWER_1425", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Selfless Sacrifice"] = new engine.RulesElement({
    name: "Selfless Sacrifice",
    type: "Power",
    id: "ID_FMP_POWER_4446",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4446",
    categories: ["Selfless Sacrifice", "ID_FMP_POWER_4446", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Serpentine Dodge"] = new engine.RulesElement({
    name: "Serpentine Dodge",
    type: "Power",
    id: "ID_FMP_POWER_4400",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4400",
    categories: ["Serpentine Dodge", "ID_FMP_POWER_4400", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Settling the Score"] = new engine.RulesElement({
    name: "Settling the Score",
    type: "Power",
    id: "ID_FMP_POWER_4328",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4328",
    categories: ["Settling the Score", "ID_FMP_POWER_4328", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Shadowbite Strike"] = new engine.RulesElement({
    name: "Shadowbite Strike",
    type: "Power",
    id: "ID_FMP_POWER_4694",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4694",
    categories: ["Shadowbite Strike", "ID_FMP_POWER_4694", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_174", "Hellborn Shadow", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Shaft Splitter"] = new engine.RulesElement({
    name: "Shaft Splitter",
    type: "Power",
    id: "ID_FMP_POWER_4709",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4709",
    categories: ["Shaft Splitter", "ID_FMP_POWER_4709", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_179", "Sylvan Archer", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Shared Healing"] = new engine.RulesElement({
    name: "Shared Healing",
    type: "Power",
    id: "ID_FMP_POWER_4429",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4429",
    categories: ["Shared Healing", "ID_FMP_POWER_4429", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Shared Manifestation"] = new engine.RulesElement({
    name: "Shared Manifestation",
    type: "Power",
    id: "ID_FMP_POWER_4748",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4748",
    categories: ["Shared Manifestation", "ID_FMP_POWER_4748", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_191", "Concordant Leader", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Shed the Mark"] = new engine.RulesElement({
    name: "Shed the Mark",
    type: "Power",
    id: "ID_FMP_POWER_4415",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4415",
    categories: ["Shed the Mark", "ID_FMP_POWER_4415", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Shield Bash"] = new engine.RulesElement({
    name: "Shield Bash",
    type: "Power",
    id: "ID_FMP_POWER_289",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=289",
    categories: ["Shield Bash", "ID_FMP_POWER_289", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Shield Slam"] = new engine.RulesElement({
    name: "Shield Slam",
    type: "Power",
    id: "ID_FMP_POWER_226",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=226",
    categories: ["Shield Slam", "ID_FMP_POWER_226", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Shield Wall"] = new engine.RulesElement({
    name: "Shield Wall",
    type: "Power",
    id: "ID_FMP_POWER_2583",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2583",
    categories: ["Shield Wall", "ID_FMP_POWER_2583", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_121", "Shield Adept", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Shielded Sides"] = new engine.RulesElement({
    name: "Shielded Sides",
    type: "Power",
    id: "ID_FMP_POWER_2012",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2012",
    categories: ["Shielded Sides", "ID_FMP_POWER_2012", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Shielding Retaliation"] = new engine.RulesElement({
    name: "Shielding Retaliation",
    type: "Power",
    id: "ID_FMP_POWER_2538",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2538",
    categories: ["Shielding Retaliation", "ID_FMP_POWER_2538", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Shifty Direction"] = new engine.RulesElement({
    name: "Shifty Direction",
    type: "Power",
    id: "ID_FMP_POWER_2493",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2493",
    categories: ["Shifty Direction", "ID_FMP_POWER_2493", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_110", "Guildmaster Thief", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Shocking Execution"] = new engine.RulesElement({
    name: "Shocking Execution",
    type: "Power",
    id: "ID_FMP_POWER_4533",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4533",
    categories: ["Shocking Execution", "ID_FMP_POWER_4533", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Shocking Skewer"] = new engine.RulesElement({
    name: "Shocking Skewer",
    type: "Power",
    id: "ID_FMP_POWER_4678",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4678",
    categories: ["Shocking Skewer", "ID_FMP_POWER_4678", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_168", "Shock Trooper", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Shocking Twister"] = new engine.RulesElement({
    name: "Shocking Twister",
    type: "Power",
    id: "ID_FMP_POWER_4676",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4676",
    categories: ["Shocking Twister", "ID_FMP_POWER_4676", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_168", "Shock Trooper", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Shooter's Nemesis"] = new engine.RulesElement({
    name: "Shooter's Nemesis",
    type: "Power",
    id: "ID_FMP_POWER_2134",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2134",
    categories: ["Shooter's Nemesis", "ID_FMP_POWER_2134", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Shrewd Repositioning"] = new engine.RulesElement({
    name: "Shrewd Repositioning",
    type: "Power",
    id: "ID_FMP_POWER_4319",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4319",
    categories: ["Shrewd Repositioning", "ID_FMP_POWER_4319", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Shutdown Smite"] = new engine.RulesElement({
    name: "Shutdown Smite",
    type: "Power",
    id: "ID_FMP_POWER_2589",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2589",
    categories: ["Shutdown Smite", "ID_FMP_POWER_2589", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Side by Side"] = new engine.RulesElement({
    name: "Side by Side",
    type: "Power",
    id: "ID_FMP_POWER_4584",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4584",
    categories: ["Side by Side", "ID_FMP_POWER_4584", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Sidestep Stance"] = new engine.RulesElement({
    name: "Sidestep Stance",
    type: "Power",
    id: "ID_FMP_POWER_4484",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4484",
    categories: ["Sidestep Stance", "ID_FMP_POWER_4484", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Sight-Stealing Shot"] = new engine.RulesElement({
    name: "Sight-Stealing Shot",
    type: "Power",
    id: "ID_FMP_POWER_4540",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4540",
    categories: ["Sight-Stealing Shot", "ID_FMP_POWER_4540", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Singular Shot"] = new engine.RulesElement({
    name: "Singular Shot",
    type: "Power",
    id: "ID_FMP_POWER_4372",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4372",
    categories: ["Singular Shot", "ID_FMP_POWER_4372", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Situational Advantage"] = new engine.RulesElement({
    name: "Situational Advantage",
    type: "Power",
    id: "ID_FMP_POWER_4559",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4559",
    categories: ["Situational Advantage", "ID_FMP_POWER_4559", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Sizing Strike"] = new engine.RulesElement({
    name: "Sizing Strike",
    type: "Power",
    id: "ID_FMP_POWER_4722",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4722",
    categories: ["Sizing Strike", "ID_FMP_POWER_4722", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_183", "Death Dealer", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Skip Shot"] = new engine.RulesElement({
    name: "Skip Shot",
    type: "Power",
    id: "ID_FMP_POWER_4503",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4503",
    categories: ["Skip Shot", "ID_FMP_POWER_4503", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Skirmisher Pounce"] = new engine.RulesElement({
    name: "Skirmisher Pounce",
    type: "Power",
    id: "ID_FMP_POWER_4345",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4345",
    categories: ["Skirmisher Pounce", "ID_FMP_POWER_4345", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Skirmishing Strike"] = new engine.RulesElement({
    name: "Skirmishing Strike",
    type: "Power",
    id: "ID_FMP_POWER_4537",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4537",
    categories: ["Skirmishing Strike", "ID_FMP_POWER_4537", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Slash and Dash"] = new engine.RulesElement({
    name: "Slash and Dash",
    type: "Power",
    id: "ID_FMP_POWER_2501",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2501",
    categories: ["Slash and Dash", "ID_FMP_POWER_2501", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_111", "Halfling Quickblade", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Slayer's Lunge"] = new engine.RulesElement({
    name: "Slayer's Lunge",
    type: "Power",
    id: "ID_FMP_POWER_4340",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4340",
    categories: ["Slayer's Lunge", "ID_FMP_POWER_4340", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Sleeping Dragon Lure"] = new engine.RulesElement({
    name: "Sleeping Dragon Lure",
    type: "Power",
    id: "ID_FMP_POWER_4599",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4599",
    categories: ["Sleeping Dragon Lure", "ID_FMP_POWER_4599", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Sly Lunge"] = new engine.RulesElement({
    name: "Sly Lunge",
    type: "Power",
    id: "ID_FMP_POWER_2504",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2504",
    categories: ["Sly Lunge", "ID_FMP_POWER_2504", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Smash and Grab"] = new engine.RulesElement({
    name: "Smash and Grab",
    type: "Power",
    id: "ID_FMP_POWER_2219",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2219",
    categories: ["Smash and Grab", "ID_FMP_POWER_2219", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Smashing Hammer"] = new engine.RulesElement({
    name: "Smashing Hammer",
    type: "Power",
    id: "ID_FMP_POWER_4355",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4355",
    categories: ["Smashing Hammer", "ID_FMP_POWER_4355", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Smite of Devil's Luck"] = new engine.RulesElement({
    name: "Smite of Devil's Luck",
    type: "Power",
    id: "ID_FMP_POWER_4762",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4762",
    categories: ["Smite of Devil's Luck", "ID_FMP_POWER_4762", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_195", "Infernal Strategist", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Snap Shot"] = new engine.RulesElement({
    name: "Snap Shot",
    type: "Power",
    id: "ID_FMP_POWER_2269",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2269",
    categories: ["Snap Shot", "ID_FMP_POWER_2269", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Sneak in the Attack"] = new engine.RulesElement({
    name: "Sneak in the Attack",
    type: "Power",
    id: "ID_FMP_POWER_4476",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4476",
    categories: ["Sneak in the Attack", "ID_FMP_POWER_4476", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Soothing Reverberation"] = new engine.RulesElement({
    name: "Soothing Reverberation",
    type: "Power",
    id: "ID_FMP_POWER_4683",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4683",
    categories: ["Soothing Reverberation", "ID_FMP_POWER_4683", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_170", "Blade Banshee", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Spider Feint"] = new engine.RulesElement({
    name: "Spider Feint",
    type: "Power",
    id: "ID_FMP_POWER_4726",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4726",
    categories: ["Spider Feint", "ID_FMP_POWER_4726", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_184", "Dread Fang", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Spinning Death Strike"] = new engine.RulesElement({
    name: "Spinning Death Strike",
    type: "Power",
    id: "ID_FMP_POWER_4362",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4362",
    categories: ["Spinning Death Strike", "ID_FMP_POWER_4362", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Spiral of Fey Death"] = new engine.RulesElement({
    name: "Spiral of Fey Death",
    type: "Power",
    id: "ID_FMP_POWER_4768",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4768",
    categories: ["Spiral of Fey Death", "ID_FMP_POWER_4768", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_197", "Spiral Tactician", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Death"] = new engine.RulesElement({
    name: "Spirit of Death",
    type: "Power",
    id: "ID_FMP_POWER_4779",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4779",
    categories: ["Spirit of Death", "ID_FMP_POWER_4779", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_206", "Perfect Assassin", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Spitting-Cobra Stance"] = new engine.RulesElement({
    name: "Spitting-Cobra Stance",
    type: "Power",
    id: "ID_FMP_POWER_4394",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4394",
    categories: ["Spitting-Cobra Stance", "ID_FMP_POWER_4394", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Spring the Trap"] = new engine.RulesElement({
    name: "Spring the Trap",
    type: "Power",
    id: "ID_FMP_POWER_671",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=671",
    categories: ["Spring the Trap", "ID_FMP_POWER_671", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Spring the Trap (epic)"] = new engine.RulesElement({
    name: "Spring the Trap (epic)",
    type: "Power",
    id: "ID_FMP_POWER_4781",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4781",
    categories: ["Spring the Trap (epic)", "ID_FMP_POWER_4781", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_208", "Warmaster", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Spymaster's Edge"] = new engine.RulesElement({
    name: "Spymaster's Edge",
    type: "Power",
    id: "ID_FMP_POWER_2507",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2507",
    categories: ["Spymaster's Edge", "ID_FMP_POWER_2507", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_112", "Master Spy", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Stab and Shoot"] = new engine.RulesElement({
    name: "Stab and Shoot",
    type: "Power",
    id: "ID_FMP_POWER_4706",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4706",
    categories: ["Stab and Shoot", "ID_FMP_POWER_4706", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_178", "Sharpshooter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Stabbing Torrent"] = new engine.RulesElement({
    name: "Stabbing Torrent",
    type: "Power",
    id: "ID_FMP_POWER_2464",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2464",
    categories: ["Stabbing Torrent", "ID_FMP_POWER_2464", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Staggering Assault"] = new engine.RulesElement({
    name: "Staggering Assault",
    type: "Power",
    id: "ID_FMP_POWER_4481",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4481",
    categories: ["Staggering Assault", "ID_FMP_POWER_4481", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Staggering Spin"] = new engine.RulesElement({
    name: "Staggering Spin",
    type: "Power",
    id: "ID_FMP_POWER_2534",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2534",
    categories: ["Staggering Spin", "ID_FMP_POWER_2534", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Stalker's Senses"] = new engine.RulesElement({
    name: "Stalker's Senses",
    type: "Power",
    id: "ID_FMP_POWER_4430",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4430",
    categories: ["Stalker's Senses", "ID_FMP_POWER_4430", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Stay Down"] = new engine.RulesElement({
    name: "Stay Down",
    type: "Power",
    id: "ID_FMP_POWER_4330",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4330",
    categories: ["Stay Down", "ID_FMP_POWER_4330", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Stay on Target"] = new engine.RulesElement({
    name: "Stay on Target",
    type: "Power",
    id: "ID_FMP_POWER_4571",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4571",
    categories: ["Stay on Target", "ID_FMP_POWER_4571", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Steadfast Stance"] = new engine.RulesElement({
    name: "Steadfast Stance",
    type: "Power",
    id: "ID_FMP_POWER_4351",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4351",
    categories: ["Steadfast Stance", "ID_FMP_POWER_4351", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Steel Scream"] = new engine.RulesElement({
    name: "Steel Scream",
    type: "Power",
    id: "ID_FMP_POWER_4682",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4682",
    categories: ["Steel Scream", "ID_FMP_POWER_4682", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_170", "Blade Banshee", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Steeling Flurry"] = new engine.RulesElement({
    name: "Steeling Flurry",
    type: "Power",
    id: "ID_FMP_POWER_4425",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4425",
    categories: ["Steeling Flurry", "ID_FMP_POWER_4425", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Stinging Squall"] = new engine.RulesElement({
    name: "Stinging Squall",
    type: "Power",
    id: "ID_FMP_POWER_2307",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2307",
    categories: ["Stinging Squall", "ID_FMP_POWER_2307", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Stirring Declaration"] = new engine.RulesElement({
    name: "Stirring Declaration",
    type: "Power",
    id: "ID_FMP_POWER_4595",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4595",
    categories: ["Stirring Declaration", "ID_FMP_POWER_4595", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Stirring Force"] = new engine.RulesElement({
    name: "Stirring Force",
    type: "Power",
    id: "ID_FMP_POWER_2331",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2331",
    categories: ["Stirring Force", "ID_FMP_POWER_2331", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Stolen Vitality"] = new engine.RulesElement({
    name: "Stolen Vitality",
    type: "Power",
    id: "ID_FMP_POWER_4519",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4519",
    categories: ["Stolen Vitality", "ID_FMP_POWER_4519", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Stonechannel Strike"] = new engine.RulesElement({
    name: "Stonechannel Strike",
    type: "Power",
    id: "ID_FMP_POWER_4756",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4756",
    categories: ["Stonechannel Strike", "ID_FMP_POWER_4756", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_193", "Earthfast Brigadier", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Stop Thrust"] = new engine.RulesElement({
    name: "Stop Thrust",
    type: "Power",
    id: "ID_FMP_POWER_2110",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2110",
    categories: ["Stop Thrust", "ID_FMP_POWER_2110", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Storm of Carnage"] = new engine.RulesElement({
    name: "Storm of Carnage",
    type: "Power",
    id: "ID_FMP_POWER_4589",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4589",
    categories: ["Storm of Carnage", "ID_FMP_POWER_4589", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Strength From Pain"] = new engine.RulesElement({
    name: "Strength From Pain",
    type: "Power",
    id: "ID_FMP_POWER_4335",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4335",
    categories: ["Strength From Pain", "ID_FMP_POWER_4335", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Strider Stance"] = new engine.RulesElement({
    name: "Strider Stance",
    type: "Power",
    id: "ID_FMP_POWER_4576",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4576",
    categories: ["Strider Stance", "ID_FMP_POWER_4576", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Strong Focus"] = new engine.RulesElement({
    name: "Strong Focus",
    type: "Power",
    id: "ID_FMP_POWER_2238",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2238",
    categories: ["Strong Focus", "ID_FMP_POWER_2238", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Strong-Arm Loyalty"] = new engine.RulesElement({
    name: "Strong-Arm Loyalty",
    type: "Power",
    id: "ID_FMP_POWER_2294",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2294",
    categories: ["Strong-Arm Loyalty", "ID_FMP_POWER_2294", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Stunning Assist"] = new engine.RulesElement({
    name: "Stunning Assist",
    type: "Power",
    id: "ID_FMP_POWER_2514",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2514",
    categories: ["Stunning Assist", "ID_FMP_POWER_2514", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Stupefying Violence"] = new engine.RulesElement({
    name: "Stupefying Violence",
    type: "Power",
    id: "ID_FMP_POWER_2319",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2319",
    categories: ["Stupefying Violence", "ID_FMP_POWER_2319", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Subtle Cut"] = new engine.RulesElement({
    name: "Subtle Cut",
    type: "Power",
    id: "ID_FMP_POWER_2470",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2470",
    categories: ["Subtle Cut", "ID_FMP_POWER_2470", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Bolt"] = new engine.RulesElement({
    name: "Sudden Bolt",
    type: "Power",
    id: "ID_FMP_POWER_4716",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4716",
    categories: ["Sudden Bolt", "ID_FMP_POWER_4716", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_181", "Cloaked Sniper", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Shield Bash"] = new engine.RulesElement({
    name: "Sudden Shield Bash",
    type: "Power",
    id: "ID_FMP_POWER_2584",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2584",
    categories: ["Sudden Shield Bash", "ID_FMP_POWER_2584", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_121", "Shield Adept", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Suffering's End"] = new engine.RulesElement({
    name: "Suffering's End",
    type: "Power",
    id: "ID_FMP_POWER_4464",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4464",
    categories: ["Suffering's End", "ID_FMP_POWER_4464", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Surefooted Retort"] = new engine.RulesElement({
    name: "Surefooted Retort",
    type: "Power",
    id: "ID_FMP_POWER_4482",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4482",
    categories: ["Surefooted Retort", "ID_FMP_POWER_4482", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Swift Strike"] = new engine.RulesElement({
    name: "Swift Strike",
    type: "Power",
    id: "ID_FMP_POWER_2908",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2908",
    categories: ["Swift Strike", "ID_FMP_POWER_2908", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Swiftness of Spirit"] = new engine.RulesElement({
    name: "Swiftness of Spirit",
    type: "Power",
    id: "ID_FMP_POWER_4689",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4689",
    categories: ["Swiftness of Spirit", "ID_FMP_POWER_4689", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_172", "Feral Spirit", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Switching Leap"] = new engine.RulesElement({
    name: "Switching Leap",
    type: "Power",
    id: "ID_FMP_POWER_4661",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4661",
    categories: ["Switching Leap", "ID_FMP_POWER_4661", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_163", "Halfling Bounder", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Synchronized Strike"] = new engine.RulesElement({
    name: "Synchronized Strike",
    type: "Power",
    id: "ID_FMP_POWER_4373",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4373",
    categories: ["Synchronized Strike", "ID_FMP_POWER_4373", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Tactical Supervision"] = new engine.RulesElement({
    name: "Tactical Supervision",
    type: "Power",
    id: "ID_FMP_POWER_4565",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4565",
    categories: ["Tactical Supervision", "ID_FMP_POWER_4565", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Tag Quarry"] = new engine.RulesElement({
    name: "Tag Quarry",
    type: "Power",
    id: "ID_FMP_POWER_2455",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2455",
    categories: ["Tag Quarry", "ID_FMP_POWER_2455", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_107", "Borderlands Marshal", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Tag the Prey"] = new engine.RulesElement({
    name: "Tag the Prey",
    type: "Power",
    id: "ID_FMP_POWER_4395",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4395",
    categories: ["Tag the Prey", "ID_FMP_POWER_4395", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Tap and Counterstrike"] = new engine.RulesElement({
    name: "Tap and Counterstrike",
    type: "Power",
    id: "ID_FMP_POWER_4346",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4346",
    categories: ["Tap and Counterstrike", "ID_FMP_POWER_4346", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Tempest Dance"] = new engine.RulesElement({
    name: "Tempest Dance",
    type: "Power",
    id: "ID_FMP_POWER_4316",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4316",
    categories: ["Tempest Dance", "ID_FMP_POWER_4316", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Tempest of Triumph"] = new engine.RulesElement({
    name: "Tempest of Triumph",
    type: "Power",
    id: "ID_FMP_POWER_4740",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4740",
    categories: ["Tempest of Triumph", "ID_FMP_POWER_4740", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_189", "Battlelord of Kord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Tempting Target"] = new engine.RulesElement({
    name: "Tempting Target",
    type: "Power",
    id: "ID_FMP_POWER_2533",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2533",
    categories: ["Tempting Target", "ID_FMP_POWER_2533", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Termination Threat"] = new engine.RulesElement({
    name: "Termination Threat",
    type: "Power",
    id: "ID_FMP_POWER_2253",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2253",
    categories: ["Termination Threat", "ID_FMP_POWER_2253", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Terrifying Impact"] = new engine.RulesElement({
    name: "Terrifying Impact",
    type: "Power",
    id: "ID_FMP_POWER_2187",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2187",
    categories: ["Terrifying Impact", "ID_FMP_POWER_2187", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Thief of Fortune"] = new engine.RulesElement({
    name: "Thief of Fortune",
    type: "Power",
    id: "ID_FMP_POWER_4524",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4524",
    categories: ["Thief of Fortune", "ID_FMP_POWER_4524", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Threatening Glare"] = new engine.RulesElement({
    name: "Threatening Glare",
    type: "Power",
    id: "ID_FMP_POWER_4485",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4485",
    categories: ["Threatening Glare", "ID_FMP_POWER_4485", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Threefold Assault"] = new engine.RulesElement({
    name: "Threefold Assault",
    type: "Power",
    id: "ID_FMP_POWER_4442",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4442",
    categories: ["Threefold Assault", "ID_FMP_POWER_4442", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Thwarting Shot"] = new engine.RulesElement({
    name: "Thwarting Shot",
    type: "Power",
    id: "ID_FMP_POWER_4389",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4389",
    categories: ["Thwarting Shot", "ID_FMP_POWER_4389", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Titan's Hammer"] = new engine.RulesElement({
    name: "Titan's Hammer",
    type: "Power",
    id: "ID_FMP_POWER_4367",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4367",
    categories: ["Titan's Hammer", "ID_FMP_POWER_4367", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Too Close for Comfort"] = new engine.RulesElement({
    name: "Too Close for Comfort",
    type: "Power",
    id: "ID_FMP_POWER_2575",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2575",
    categories: ["Too Close for Comfort", "ID_FMP_POWER_2575", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_163", "Halfling Bounder", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Toppling Slash"] = new engine.RulesElement({
    name: "Toppling Slash",
    type: "Power",
    id: "ID_FMP_POWER_2299",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2299",
    categories: ["Toppling Slash", "ID_FMP_POWER_2299", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_48", "Rattling", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Tracking Shot"] = new engine.RulesElement({
    name: "Tracking Shot",
    type: "Power",
    id: "ID_FMP_POWER_4426",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4426",
    categories: ["Tracking Shot", "ID_FMP_POWER_4426", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Transfixing Provocation"] = new engine.RulesElement({
    name: "Transfixing Provocation",
    type: "Power",
    id: "ID_FMP_POWER_2517",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2517",
    categories: ["Transfixing Provocation", "ID_FMP_POWER_2517", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Trip Up"] = new engine.RulesElement({
    name: "Trip Up",
    type: "Power",
    id: "ID_FMP_POWER_988",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=988",
    categories: ["Trip Up", "ID_FMP_POWER_988", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["True-Eye Shot"] = new engine.RulesElement({
    name: "True-Eye Shot",
    type: "Power",
    id: "ID_FMP_POWER_4457",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4457",
    categories: ["True-Eye Shot", "ID_FMP_POWER_4457", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Turnabout Riposte"] = new engine.RulesElement({
    name: "Turnabout Riposte",
    type: "Power",
    id: "ID_FMP_POWER_2461",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2461",
    categories: ["Turnabout Riposte", "ID_FMP_POWER_2461", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Twinning Ploy"] = new engine.RulesElement({
    name: "Twinning Ploy",
    type: "Power",
    id: "ID_FMP_POWER_4770",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4770",
    categories: ["Twinning Ploy", "ID_FMP_POWER_4770", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_198", "Twiceborn Leader", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Twin-Soul Strike"] = new engine.RulesElement({
    name: "Twin-Soul Strike",
    type: "Power",
    id: "ID_FMP_POWER_4690",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4690",
    categories: ["Twin-Soul Strike", "ID_FMP_POWER_4690", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_172", "Feral Spirit", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Twin-Strike Tornado"] = new engine.RulesElement({
    name: "Twin-Strike Tornado",
    type: "Power",
    id: "ID_FMP_POWER_4465",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4465",
    categories: ["Twin-Strike Tornado", "ID_FMP_POWER_4465", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Twofold Flinch"] = new engine.RulesElement({
    name: "Twofold Flinch",
    type: "Power",
    id: "ID_FMP_POWER_4405",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4405",
    categories: ["Twofold Flinch", "ID_FMP_POWER_4405", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Twofold Torment"] = new engine.RulesElement({
    name: "Twofold Torment",
    type: "Power",
    id: "ID_FMP_POWER_2466",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2466",
    categories: ["Twofold Torment", "ID_FMP_POWER_2466", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Unbalancing Shot"] = new engine.RulesElement({
    name: "Unbalancing Shot",
    type: "Power",
    id: "ID_FMP_POWER_4470",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4470",
    categories: ["Unbalancing Shot", "ID_FMP_POWER_4470", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Uncanny Ricochet"] = new engine.RulesElement({
    name: "Uncanny Ricochet",
    type: "Power",
    id: "ID_FMP_POWER_4521",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4521",
    categories: ["Uncanny Ricochet", "ID_FMP_POWER_4521", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Undying Enmity"] = new engine.RulesElement({
    name: "Undying Enmity",
    type: "Power",
    id: "ID_FMP_POWER_4780",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4780",
    categories: ["Undying Enmity", "ID_FMP_POWER_4780", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_207", "Undying Warrior", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Unification Stance"] = new engine.RulesElement({
    name: "Unification Stance",
    type: "Power",
    id: "ID_FMP_POWER_4751",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4751",
    categories: ["Unification Stance", "ID_FMP_POWER_4751", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_192", "Dujun of Erathis", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Unified in Blood"] = new engine.RulesElement({
    name: "Unified in Blood",
    type: "Power",
    id: "ID_FMP_POWER_2540",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2540",
    categories: ["Unified in Blood", "ID_FMP_POWER_2540", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Unintended Feint"] = new engine.RulesElement({
    name: "Unintended Feint",
    type: "Power",
    id: "ID_FMP_POWER_2565",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2565",
    categories: ["Unintended Feint", "ID_FMP_POWER_2565", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Unleash Hell"] = new engine.RulesElement({
    name: "Unleash Hell",
    type: "Power",
    id: "ID_FMP_POWER_4590",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4590",
    categories: ["Unleash Hell", "ID_FMP_POWER_4590", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Unnerving Footwork"] = new engine.RulesElement({
    name: "Unnerving Footwork",
    type: "Power",
    id: "ID_FMP_POWER_2496",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2496",
    categories: ["Unnerving Footwork", "ID_FMP_POWER_2496", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Unraveling Blow"] = new engine.RulesElement({
    name: "Unraveling Blow",
    type: "Power",
    id: "ID_FMP_POWER_2486",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2486",
    categories: ["Unraveling Blow", "ID_FMP_POWER_2486", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_108", "Raven Herald", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Unseen Shot"] = new engine.RulesElement({
    name: "Unseen Shot",
    type: "Power",
    id: "ID_FMP_POWER_4717",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4717",
    categories: ["Unseen Shot", "ID_FMP_POWER_4717", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_PARAGON_PATH_181", "Cloaked Sniper", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Unstable Gash"] = new engine.RulesElement({
    name: "Unstable Gash",
    type: "Power",
    id: "ID_FMP_POWER_4460",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4460",
    categories: ["Unstable Gash", "ID_FMP_POWER_4460", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Untamed Outburst"] = new engine.RulesElement({
    name: "Untamed Outburst",
    type: "Power",
    id: "ID_FMP_POWER_4436",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4436",
    categories: ["Untamed Outburst", "ID_FMP_POWER_4436", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Unyielding"] = new engine.RulesElement({
    name: "Unyielding",
    type: "Power",
    id: "ID_FMP_POWER_4352",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4352",
    categories: ["Unyielding", "ID_FMP_POWER_4352", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Uplifting Assault"] = new engine.RulesElement({
    name: "Uplifting Assault",
    type: "Power",
    id: "ID_FMP_POWER_4606",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4606",
    categories: ["Uplifting Assault", "ID_FMP_POWER_4606", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Vault Position"] = new engine.RulesElement({
    name: "Vault Position",
    type: "Power",
    id: "ID_FMP_POWER_4486",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4486",
    categories: ["Vault Position", "ID_FMP_POWER_4486", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Venomous Sting"] = new engine.RulesElement({
    name: "Venomous Sting",
    type: "Power",
    id: "ID_FMP_POWER_4727",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4727",
    categories: ["Venomous Sting", "ID_FMP_POWER_4727", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_184", "Dread Fang", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Ventured Gains"] = new engine.RulesElement({
    name: "Ventured Gains",
    type: "Power",
    id: "ID_FMP_POWER_4579",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4579",
    categories: ["Ventured Gains", "ID_FMP_POWER_4579", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Vexing Escape"] = new engine.RulesElement({
    name: "Vexing Escape",
    type: "Power",
    id: "ID_FMP_POWER_4496",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4496",
    categories: ["Vexing Escape", "ID_FMP_POWER_4496", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Vexing Flanker"] = new engine.RulesElement({
    name: "Vexing Flanker",
    type: "Power",
    id: "ID_FMP_POWER_4487",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4487",
    categories: ["Vexing Flanker", "ID_FMP_POWER_4487", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Vexing Sting"] = new engine.RulesElement({
    name: "Vexing Sting",
    type: "Power",
    id: "ID_FMP_POWER_4497",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4497",
    categories: ["Vexing Sting", "ID_FMP_POWER_4497", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Vicious Cooperation"] = new engine.RulesElement({
    name: "Vicious Cooperation",
    type: "Power",
    id: "ID_FMP_POWER_4507",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4507",
    categories: ["Vicious Cooperation", "ID_FMP_POWER_4507", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Victorious Destiny"] = new engine.RulesElement({
    name: "Victorious Destiny",
    type: "Power",
    id: "ID_FMP_POWER_4600",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4600",
    categories: ["Victorious Destiny", "ID_FMP_POWER_4600", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Victor's Stance"] = new engine.RulesElement({
    name: "Victor's Stance",
    type: "Power",
    id: "ID_FMP_POWER_2246",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2246",
    categories: ["Victor's Stance", "ID_FMP_POWER_2246", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Vigilant Footwork"] = new engine.RulesElement({
    name: "Vigilant Footwork",
    type: "Power",
    id: "ID_FMP_POWER_2285",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2285",
    categories: ["Vigilant Footwork", "ID_FMP_POWER_2285", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Vigilant Protector"] = new engine.RulesElement({
    name: "Vigilant Protector",
    type: "Power",
    id: "ID_FMP_POWER_4329",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4329",
    categories: ["Vigilant Protector", "ID_FMP_POWER_4329", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Visceral Strike"] = new engine.RulesElement({
    name: "Visceral Strike",
    type: "Power",
    id: "ID_FMP_POWER_4534",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4534",
    categories: ["Visceral Strike", "ID_FMP_POWER_4534", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Vital Rend"] = new engine.RulesElement({
    name: "Vital Rend",
    type: "Power",
    id: "ID_FMP_POWER_2580",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2580",
    categories: ["Vital Rend", "ID_FMP_POWER_2580", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_120", "Longarm Marshal", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Wake of Devastation"] = new engine.RulesElement({
    name: "Wake of Devastation",
    type: "Power",
    id: "ID_FMP_POWER_4610",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4610",
    categories: ["Wake of Devastation", "ID_FMP_POWER_4610", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Wall Crawl"] = new engine.RulesElement({
    name: "Wall Crawl",
    type: "Power",
    id: "ID_FMP_POWER_2311",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2311",
    categories: ["Wall Crawl", "ID_FMP_POWER_2311", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["War Master's Assault"] = new engine.RulesElement({
    name: "War Master's Assault",
    type: "Power",
    id: "ID_FMP_POWER_4582",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4582",
    categories: ["War Master's Assault", "ID_FMP_POWER_4582", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["War of Attrition"] = new engine.RulesElement({
    name: "War of Attrition",
    type: "Power",
    id: "ID_FMP_POWER_4569",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4569",
    categories: ["War of Attrition", "ID_FMP_POWER_4569", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Warlord's Indignation"] = new engine.RulesElement({
    name: "Warlord's Indignation",
    type: "Power",
    id: "ID_FMP_POWER_4607",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4607",
    categories: ["Warlord's Indignation", "ID_FMP_POWER_4607", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Warlord's Recovery"] = new engine.RulesElement({
    name: "Warlord's Recovery",
    type: "Power",
    id: "ID_FMP_POWER_4572",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4572",
    categories: ["Warlord's Recovery", "ID_FMP_POWER_4572", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Warlord's Resurgence"] = new engine.RulesElement({
    name: "Warlord's Resurgence",
    type: "Power",
    id: "ID_FMP_POWER_4601",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4601",
    categories: ["Warlord's Resurgence", "ID_FMP_POWER_4601", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Warning Shout"] = new engine.RulesElement({
    name: "Warning Shout",
    type: "Power",
    id: "ID_FMP_POWER_4585",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4585",
    categories: ["Warning Shout", "ID_FMP_POWER_4585", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Wary Shooter"] = new engine.RulesElement({
    name: "Wary Shooter",
    type: "Power",
    id: "ID_FMP_POWER_4431",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4431",
    categories: ["Wary Shooter", "ID_FMP_POWER_4431", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Wave of Defeat"] = new engine.RulesElement({
    name: "Wave of Defeat",
    type: "Power",
    id: "ID_FMP_POWER_4602",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4602",
    categories: ["Wave of Defeat", "ID_FMP_POWER_4602", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Weaponmaster's Lure"] = new engine.RulesElement({
    name: "Weaponmaster's Lure",
    type: "Power",
    id: "ID_FMP_POWER_2459",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2459",
    categories: ["Weaponmaster's Lure", "ID_FMP_POWER_2459", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Whirling Spear"] = new engine.RulesElement({
    name: "Whirling Spear",
    type: "Power",
    id: "ID_FMP_POWER_2581",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2581",
    categories: ["Whirling Spear", "ID_FMP_POWER_2581", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_120", "Longarm Marshal", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Wild Dash"] = new engine.RulesElement({
    name: "Wild Dash",
    type: "Power",
    id: "ID_FMP_POWER_4447",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4447",
    categories: ["Wild Dash", "ID_FMP_POWER_4447", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Wild Strike"] = new engine.RulesElement({
    name: "Wild Strike",
    type: "Power",
    id: "ID_FMP_POWER_4347",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4347",
    categories: ["Wild Strike", "ID_FMP_POWER_4347", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Wild Tumble Cut"] = new engine.RulesElement({
    name: "Wild Tumble Cut",
    type: "Power",
    id: "ID_FMP_POWER_4719",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4719",
    categories: ["Wild Tumble Cut", "ID_FMP_POWER_4719", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_182", "Daring Acrobat", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Wings of Devilry"] = new engine.RulesElement({
    name: "Wings of Devilry",
    type: "Power",
    id: "ID_FMP_POWER_4695",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4695",
    categories: ["Wings of Devilry", "ID_FMP_POWER_4695", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_174", "Hellborn Shadow", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Withdrawal Gambit"] = new engine.RulesElement({
    name: "Withdrawal Gambit",
    type: "Power",
    id: "ID_FMP_POWER_2335",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2335",
    categories: ["Withdrawal Gambit", "ID_FMP_POWER_2335", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Wolfskin"] = new engine.RulesElement({
    name: "Wolfskin",
    type: "Power",
    id: "ID_FMP_POWER_4701",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4701",
    categories: ["Wolfskin", "ID_FMP_POWER_4701", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_176", "Pack Runner", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Worldly Strike"] = new engine.RulesElement({
    name: "Worldly Strike",
    type: "Power",
    id: "ID_FMP_POWER_4697",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4697",
    categories: ["Worldly Strike", "ID_FMP_POWER_4697", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_175", "Horizon Walker", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Wounding Focus"] = new engine.RulesElement({
    name: "Wounding Focus",
    type: "Power",
    id: "ID_FMP_POWER_2439",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2439",
    categories: ["Wounding Focus", "ID_FMP_POWER_2439", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Wounding Strike"] = new engine.RulesElement({
    name: "Wounding Strike",
    type: "Power",
    id: "ID_FMP_POWER_4508",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4508",
    categories: ["Wounding Strike", "ID_FMP_POWER_4508", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
