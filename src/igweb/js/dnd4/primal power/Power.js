define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["A Scattering of Ashes"] = new engine.RulesElement({
    name: "A Scattering of Ashes",
    type: "Power",
    id: "ID_FMP_POWER_9899",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9899",
    categories: ["A Scattering of Ashes", "ID_FMP_POWER_9899", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Alpha's Command"] = new engine.RulesElement({
    name: "Alpha's Command",
    type: "Power",
    id: "ID_FMP_POWER_9715",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9715",
    categories: ["Alpha's Command", "ID_FMP_POWER_9715", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_484", "Pack Lord", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["An End to Tolerance"] = new engine.RulesElement({
    name: "An End to Tolerance",
    type: "Power",
    id: "ID_FMP_POWER_9800",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9800",
    categories: ["An End to Tolerance", "ID_FMP_POWER_9800", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_491", "Great Elder", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Ancestor's Drum"] = new engine.RulesElement({
    name: "Ancestor's Drum",
    type: "Power",
    id: "ID_FMP_POWER_9777",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9777",
    categories: ["Ancestor's Drum", "ID_FMP_POWER_9777", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Ancestor's Presence"] = new engine.RulesElement({
    name: "Ancestor's Presence",
    type: "Power",
    id: "ID_FMP_POWER_9613",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9613",
    categories: ["Ancestor's Presence", "ID_FMP_POWER_9613", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_475", "Ancestral Weapon", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Ancestral War Band Rage"] = new engine.RulesElement({
    name: "Ancestral War Band Rage",
    type: "Power",
    id: "ID_FMP_POWER_9584",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9584",
    categories: ["Ancestral War Band Rage", "ID_FMP_POWER_9584", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Ancestral Weapon's Rage"] = new engine.RulesElement({
    name: "Ancestral Weapon's Rage",
    type: "Power",
    id: "ID_FMP_POWER_9612",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9612",
    categories: ["Ancestral Weapon's Rage", "ID_FMP_POWER_9612", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_475", "Ancestral Weapon", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Ancient Berserkers' Rage"] = new engine.RulesElement({
    name: "Ancient Berserkers' Rage",
    type: "Power",
    id: "ID_FMP_POWER_9568",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9568",
    categories: ["Ancient Berserkers' Rage", "ID_FMP_POWER_9568", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Ancient Clan Strike"] = new engine.RulesElement({
    name: "Ancient Clan Strike",
    type: "Power",
    id: "ID_FMP_POWER_4813",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4813",
    categories: ["Ancient Clan Strike", "ID_FMP_POWER_4813", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Ancient Forebears' Rage"] = new engine.RulesElement({
    name: "Ancient Forebears' Rage",
    type: "Power",
    id: "ID_FMP_POWER_9608",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9608",
    categories: ["Ancient Forebears' Rage", "ID_FMP_POWER_9608", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Angry Spirits"] = new engine.RulesElement({
    name: "Angry Spirits",
    type: "Power",
    id: "ID_FMP_POWER_5565",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5565",
    categories: ["Angry Spirits", "ID_FMP_POWER_5565", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Animal Clan"] = new engine.RulesElement({
    name: "Animal Clan",
    type: "Power",
    id: "ID_FMP_POWER_9665",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9665",
    categories: ["Animal Clan", "ID_FMP_POWER_9665", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Animal Shapes"] = new engine.RulesElement({
    name: "Animal Shapes",
    type: "Power",
    id: "ID_FMP_POWER_9666",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9666",
    categories: ["Animal Shapes", "ID_FMP_POWER_9666", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Armor of Glaciers"] = new engine.RulesElement({
    name: "Armor of Glaciers",
    type: "Power",
    id: "ID_FMP_POWER_9632",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9632",
    categories: ["Armor of Glaciers", "ID_FMP_POWER_9632", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_481", "Winter Fury", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Avian Cloud"] = new engine.RulesElement({
    name: "Avian Cloud",
    type: "Power",
    id: "ID_FMP_POWER_9698",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9698",
    categories: ["Avian Cloud", "ID_FMP_POWER_9698", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Balance of Life"] = new engine.RulesElement({
    name: "Balance of Life",
    type: "Power",
    id: "ID_FMP_POWER_9808",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9808",
    categories: ["Balance of Life", "ID_FMP_POWER_9808", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_494", "Seasons' Herald", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Barbaric Instinct"] = new engine.RulesElement({
    name: "Barbaric Instinct",
    type: "Power",
    id: "ID_FMP_POWER_4913",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4913",
    categories: ["Barbaric Instinct", "ID_FMP_POWER_4913", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Barbaric Offering"] = new engine.RulesElement({
    name: "Barbaric Offering",
    type: "Power",
    id: "ID_FMP_POWER_9579",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9579",
    categories: ["Barbaric Offering", "ID_FMP_POWER_9579", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Lust"] = new engine.RulesElement({
    name: "Battle Lust",
    type: "Power",
    id: "ID_FMP_POWER_9588",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9588",
    categories: ["Battle Lust", "ID_FMP_POWER_9588", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Behemoth Stampede"] = new engine.RulesElement({
    name: "Behemoth Stampede",
    type: "Power",
    id: "ID_FMP_POWER_9701",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9701",
    categories: ["Behemoth Stampede", "ID_FMP_POWER_9701", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Berserker's Flurry"] = new engine.RulesElement({
    name: "Berserker's Flurry",
    type: "Power",
    id: "ID_FMP_POWER_5228",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5228",
    categories: ["Berserker's Flurry", "ID_FMP_POWER_5228", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Blinding Swarm"] = new engine.RulesElement({
    name: "Blinding Swarm",
    type: "Power",
    id: "ID_FMP_POWER_4872",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4872",
    categories: ["Blinding Swarm", "ID_FMP_POWER_4872", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Bear Rage"] = new engine.RulesElement({
    name: "Blood Bear Rage",
    type: "Power",
    id: "ID_FMP_POWER_4874",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4874",
    categories: ["Blood Bear Rage", "ID_FMP_POWER_4874", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Blood of Nature's Foes"] = new engine.RulesElement({
    name: "Blood of Nature's Foes",
    type: "Power",
    id: "ID_FMP_POWER_5525",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5525",
    categories: ["Blood of Nature's Foes", "ID_FMP_POWER_5525", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Sacrifice"] = new engine.RulesElement({
    name: "Blood Sacrifice",
    type: "Power",
    id: "ID_FMP_POWER_4811",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4811",
    categories: ["Blood Sacrifice", "ID_FMP_POWER_4811", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Seeker's Pursuit"] = new engine.RulesElement({
    name: "Blood Seeker's Pursuit",
    type: "Power",
    id: "ID_FMP_POWER_9597",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9597",
    categories: ["Blood Seeker's Pursuit", "ID_FMP_POWER_9597", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Blood-Frenzy Strike"] = new engine.RulesElement({
    name: "Blood-Frenzy Strike",
    type: "Power",
    id: "ID_FMP_POWER_9581",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9581",
    categories: ["Blood-Frenzy Strike", "ID_FMP_POWER_9581", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Blood-Red Bonds"] = new engine.RulesElement({
    name: "Blood-Red Bonds",
    type: "Power",
    id: "ID_FMP_POWER_5439",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5439",
    categories: ["Blood-Red Bonds", "ID_FMP_POWER_5439", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Blood-Red Mist"] = new engine.RulesElement({
    name: "Blood-Red Mist",
    type: "Power",
    id: "ID_FMP_POWER_5438",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5438",
    categories: ["Blood-Red Mist", "ID_FMP_POWER_5438", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Blood-Spattered Frenzy"] = new engine.RulesElement({
    name: "Blood-Spattered Frenzy",
    type: "Power",
    id: "ID_FMP_POWER_9593",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9593",
    categories: ["Blood-Spattered Frenzy", "ID_FMP_POWER_9593", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Blood-Spattered Fury"] = new engine.RulesElement({
    name: "Blood-Spattered Fury",
    type: "Power",
    id: "ID_FMP_POWER_9611",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9611",
    categories: ["Blood-Spattered Fury", "ID_FMP_POWER_9611", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_475", "Ancestral Weapon", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Blood-Spray Bite"] = new engine.RulesElement({
    name: "Blood-Spray Bite",
    type: "Power",
    id: "ID_FMP_POWER_9660",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9660",
    categories: ["Blood-Spray Bite", "ID_FMP_POWER_9660", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Boar's Toss"] = new engine.RulesElement({
    name: "Boar's Toss",
    type: "Power",
    id: "ID_FMP_POWER_9775",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9775",
    categories: ["Boar's Toss", "ID_FMP_POWER_9775", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Bond of Shared Pain"] = new engine.RulesElement({
    name: "Bond of Shared Pain",
    type: "Power",
    id: "ID_FMP_POWER_9866",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9866",
    categories: ["Bond of Shared Pain", "ID_FMP_POWER_9866", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Boughs of the World Tree"] = new engine.RulesElement({
    name: "Boughs of the World Tree",
    type: "Power",
    id: "ID_FMP_POWER_9964",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9964",
    categories: ["Boughs of the World Tree", "ID_FMP_POWER_9964", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_510", "World Tree Guardian", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Bounding Advance"] = new engine.RulesElement({
    name: "Bounding Advance",
    type: "Power",
    id: "ID_FMP_POWER_9589",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9589",
    categories: ["Bounding Advance", "ID_FMP_POWER_9589", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Bounding Stride"] = new engine.RulesElement({
    name: "Bounding Stride",
    type: "Power",
    id: "ID_FMP_POWER_4885",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4885",
    categories: ["Bounding Stride", "ID_FMP_POWER_4885", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Bramble Ally"] = new engine.RulesElement({
    name: "Bramble Ally",
    type: "Power",
    id: "ID_FMP_POWER_5432",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5432",
    categories: ["Bramble Ally", "ID_FMP_POWER_5432", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Brilliant Swarm"] = new engine.RulesElement({
    name: "Brilliant Swarm",
    type: "Power",
    id: "ID_FMP_POWER_9713",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9713",
    categories: ["Brilliant Swarm", "ID_FMP_POWER_9713", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_483", "Luminescent Swarm", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Brutal Payback"] = new engine.RulesElement({
    name: "Brutal Payback",
    type: "Power",
    id: "ID_FMP_POWER_9598",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9598",
    categories: ["Brutal Payback", "ID_FMP_POWER_9598", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Brutal Slam"] = new engine.RulesElement({
    name: "Brutal Slam",
    type: "Power",
    id: "ID_FMP_POWER_4810",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4810",
    categories: ["Brutal Slam", "ID_FMP_POWER_4810", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Call Discordant Spirit"] = new engine.RulesElement({
    name: "Call Discordant Spirit",
    type: "Power",
    id: "ID_FMP_POWER_9763",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9763",
    categories: ["Call Discordant Spirit", "ID_FMP_POWER_9763", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_22", "Reliable", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Call Forth the Spirit Pack"] = new engine.RulesElement({
    name: "Call Forth the Spirit Pack",
    type: "Power",
    id: "ID_FMP_POWER_9637",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9637",
    categories: ["Call Forth the Spirit Pack", "ID_FMP_POWER_9637", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Call to the Wind"] = new engine.RulesElement({
    name: "Call to the Wind",
    type: "Power",
    id: "ID_FMP_POWER_9930",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9930",
    categories: ["Call to the Wind", "ID_FMP_POWER_9930", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_496", "Child of the North Wind", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Capturing Jaws"] = new engine.RulesElement({
    name: "Capturing Jaws",
    type: "Power",
    id: "ID_FMP_POWER_5537",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5537",
    categories: ["Capturing Jaws", "ID_FMP_POWER_5537", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Certain Threat"] = new engine.RulesElement({
    name: "Certain Threat",
    type: "Power",
    id: "ID_FMP_POWER_5440",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5440",
    categories: ["Certain Threat", "ID_FMP_POWER_5440", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Channeled Vitality"] = new engine.RulesElement({
    name: "Channeled Vitality",
    type: "Power",
    id: "ID_FMP_POWER_5530",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5530",
    categories: ["Channeled Vitality", "ID_FMP_POWER_5530", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Circle of Blood Rage"] = new engine.RulesElement({
    name: "Circle of Blood Rage",
    type: "Power",
    id: "ID_FMP_POWER_4929",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4929",
    categories: ["Circle of Blood Rage", "ID_FMP_POWER_4929", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Clawed Ancestor Rage"] = new engine.RulesElement({
    name: "Clawed Ancestor Rage",
    type: "Power",
    id: "ID_FMP_POWER_4882",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4882",
    categories: ["Clawed Ancestor Rage", "ID_FMP_POWER_4882", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Claws of the Eagle"] = new engine.RulesElement({
    name: "Claws of the Eagle",
    type: "Power",
    id: "ID_FMP_POWER_9734",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9734",
    categories: ["Claws of the Eagle", "ID_FMP_POWER_9734", "ID_FMP_CLASS_FEATURE_2003", "Watcher Spirit", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Cleansing Rain"] = new engine.RulesElement({
    name: "Cleansing Rain",
    type: "Power",
    id: "ID_FMP_POWER_51",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=51",
    categories: ["Cleansing Rain", "ID_FMP_POWER_51", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Climber's Claws"] = new engine.RulesElement({
    name: "Climber's Claws",
    type: "Power",
    id: "ID_FMP_POWER_4912",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4912",
    categories: ["Climber's Claws", "ID_FMP_POWER_4912", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Clinging Drones"] = new engine.RulesElement({
    name: "Clinging Drones",
    type: "Power",
    id: "ID_FMP_POWER_4898",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4898",
    categories: ["Clinging Drones", "ID_FMP_POWER_4898", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Close to the Kill"] = new engine.RulesElement({
    name: "Close to the Kill",
    type: "Power",
    id: "ID_FMP_POWER_2790",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2790",
    categories: ["Close to the Kill", "ID_FMP_POWER_2790", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud of Sparrows"] = new engine.RulesElement({
    name: "Cloud of Sparrows",
    type: "Power",
    id: "ID_FMP_POWER_10035",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10035",
    categories: ["Cloud of Sparrows", "ID_FMP_POWER_10035", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Clutch of Winter"] = new engine.RulesElement({
    name: "Clutch of Winter",
    type: "Power",
    id: "ID_FMP_POWER_9630",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9630",
    categories: ["Clutch of Winter", "ID_FMP_POWER_9630", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_481", "Winter Fury", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Clutching Mire"] = new engine.RulesElement({
    name: "Clutching Mire",
    type: "Power",
    id: "ID_FMP_POWER_9839",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9839",
    categories: ["Clutching Mire", "ID_FMP_POWER_9839", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Coils of the World Serpent"] = new engine.RulesElement({
    name: "Coils of the World Serpent",
    type: "Power",
    id: "ID_FMP_POWER_9752",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9752",
    categories: ["Coils of the World Serpent", "ID_FMP_POWER_9752", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Conquering Storm Spirit"] = new engine.RulesElement({
    name: "Conquering Storm Spirit",
    type: "Power",
    id: "ID_FMP_POWER_9787",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9787",
    categories: ["Conquering Storm Spirit", "ID_FMP_POWER_9787", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Constricting Coils"] = new engine.RulesElement({
    name: "Constricting Coils",
    type: "Power",
    id: "ID_FMP_POWER_9709",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9709",
    categories: ["Constricting Coils", "ID_FMP_POWER_9709", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_482", "Coiled Serpent", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Creeping Brambles"] = new engine.RulesElement({
    name: "Creeping Brambles",
    type: "Power",
    id: "ID_FMP_POWER_9894",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9894",
    categories: ["Creeping Brambles", "ID_FMP_POWER_9894", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Creeping Doom"] = new engine.RulesElement({
    name: "Creeping Doom",
    type: "Power",
    id: "ID_FMP_POWER_9699",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9699",
    categories: ["Creeping Doom", "ID_FMP_POWER_9699", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Creeping Vines"] = new engine.RulesElement({
    name: "Creeping Vines",
    type: "Power",
    id: "ID_FMP_POWER_9657",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9657",
    categories: ["Creeping Vines", "ID_FMP_POWER_9657", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Crippling Assault"] = new engine.RulesElement({
    name: "Crippling Assault",
    type: "Power",
    id: "ID_FMP_POWER_9605",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9605",
    categories: ["Crippling Assault", "ID_FMP_POWER_9605", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Cutting the Path"] = new engine.RulesElement({
    name: "Cutting the Path",
    type: "Power",
    id: "ID_FMP_POWER_4815",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4815",
    categories: ["Cutting the Path", "ID_FMP_POWER_4815", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Dangerous Blur"] = new engine.RulesElement({
    name: "Dangerous Blur",
    type: "Power",
    id: "ID_FMP_POWER_9629",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9629",
    categories: ["Dangerous Blur", "ID_FMP_POWER_9629", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_480", "Twinclaw Slayer", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Dark Wings"] = new engine.RulesElement({
    name: "Dark Wings",
    type: "Power",
    id: "ID_FMP_POWER_9731",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9731",
    categories: ["Dark Wings", "ID_FMP_POWER_9731", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_488", "Whirling Samara", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Darkforest Vines"] = new engine.RulesElement({
    name: "Darkforest Vines",
    type: "Power",
    id: "ID_FMP_POWER_5523",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5523",
    categories: ["Darkforest Vines", "ID_FMP_POWER_5523", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Darting Viper"] = new engine.RulesElement({
    name: "Darting Viper",
    type: "Power",
    id: "ID_FMP_POWER_9682",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9682",
    categories: ["Darting Viper", "ID_FMP_POWER_9682", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Death Cry"] = new engine.RulesElement({
    name: "Death Cry",
    type: "Power",
    id: "ID_FMP_POWER_9621",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9621",
    categories: ["Death Cry", "ID_FMP_POWER_9621", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_478", "Death's Thane", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Death Fangs"] = new engine.RulesElement({
    name: "Death Fangs",
    type: "Power",
    id: "ID_FMP_POWER_9702",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9702",
    categories: ["Death Fangs", "ID_FMP_POWER_9702", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Death's Bounty"] = new engine.RulesElement({
    name: "Death's Bounty",
    type: "Power",
    id: "ID_FMP_POWER_4902",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4902",
    categories: ["Death's Bounty", "ID_FMP_POWER_4902", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Debilitating Ward"] = new engine.RulesElement({
    name: "Debilitating Ward",
    type: "Power",
    id: "ID_FMP_POWER_9900",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9900",
    categories: ["Debilitating Ward", "ID_FMP_POWER_9900", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Defiler's Doom"] = new engine.RulesElement({
    name: "Defiler's Doom",
    type: "Power",
    id: "ID_FMP_POWER_9938",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9938",
    categories: ["Defiler's Doom", "ID_FMP_POWER_9938", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_498", "Emerald Guardian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Deliberate Rampage"] = new engine.RulesElement({
    name: "Deliberate Rampage",
    type: "Power",
    id: "ID_FMP_POWER_9620",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9620",
    categories: ["Deliberate Rampage", "ID_FMP_POWER_9620", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_477", "Calm Fury", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Desert Wind Rage"] = new engine.RulesElement({
    name: "Desert Wind Rage",
    type: "Power",
    id: "ID_FMP_POWER_4879",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4879",
    categories: ["Desert Wind Rage", "ID_FMP_POWER_4879", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Desert Winds"] = new engine.RulesElement({
    name: "Desert Winds",
    type: "Power",
    id: "ID_FMP_POWER_9902",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9902",
    categories: ["Desert Winds", "ID_FMP_POWER_9902", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Desperate Fury"] = new engine.RulesElement({
    name: "Desperate Fury",
    type: "Power",
    id: "ID_FMP_POWER_9559",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9559",
    categories: ["Desperate Fury", "ID_FMP_POWER_9559", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Devouring Flies"] = new engine.RulesElement({
    name: "Devouring Flies",
    type: "Power",
    id: "ID_FMP_POWER_9680",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9680",
    categories: ["Devouring Flies", "ID_FMP_POWER_9680", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Devouring Swarm"] = new engine.RulesElement({
    name: "Devouring Swarm",
    type: "Power",
    id: "ID_FMP_POWER_10036",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10036",
    categories: ["Devouring Swarm", "ID_FMP_POWER_10036", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Disorienting Drone"] = new engine.RulesElement({
    name: "Disorienting Drone",
    type: "Power",
    id: "ID_FMP_POWER_9705",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9705",
    categories: ["Disorienting Drone", "ID_FMP_POWER_9705", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Drawing All Eyes"] = new engine.RulesElement({
    name: "Drawing All Eyes",
    type: "Power",
    id: "ID_FMP_POWER_5441",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5441",
    categories: ["Drawing All Eyes", "ID_FMP_POWER_5441", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Dryad's Trees"] = new engine.RulesElement({
    name: "Dryad's Trees",
    type: "Power",
    id: "ID_FMP_POWER_9683",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9683",
    categories: ["Dryad's Trees", "ID_FMP_POWER_9683", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Eagle's Aerie"] = new engine.RulesElement({
    name: "Eagle's Aerie",
    type: "Power",
    id: "ID_FMP_POWER_9780",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9780",
    categories: ["Eagle's Aerie", "ID_FMP_POWER_9780", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Earth Maw"] = new engine.RulesElement({
    name: "Earth Maw",
    type: "Power",
    id: "ID_FMP_POWER_9706",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9706",
    categories: ["Earth Maw", "ID_FMP_POWER_9706", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Earth Roots"] = new engine.RulesElement({
    name: "Earth Roots",
    type: "Power",
    id: "ID_FMP_POWER_9641",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9641",
    categories: ["Earth Roots", "ID_FMP_POWER_9641", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Earth-Shaking Rend"] = new engine.RulesElement({
    name: "Earth-Shaking Rend",
    type: "Power",
    id: "ID_FMP_POWER_9840",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9840",
    categories: ["Earth-Shaking Rend", "ID_FMP_POWER_9840", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Elder Flame"] = new engine.RulesElement({
    name: "Elder Flame",
    type: "Power",
    id: "ID_FMP_POWER_9796",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9796",
    categories: ["Elder Flame", "ID_FMP_POWER_9796", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_490", "Everflame Guardian", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9797"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Elder Flame Attack"] = new engine.RulesElement({
    name: "Elder Flame Attack",
    type: "Power",
    id: "ID_FMP_POWER_9797",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9797",
    categories: ["Elder Flame Attack", "ID_FMP_POWER_9797", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_490", "Everflame Guardian", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Elder Tuskbrother Rage"] = new engine.RulesElement({
    name: "Elder Tuskbrother Rage",
    type: "Power",
    id: "ID_FMP_POWER_4881",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4881",
    categories: ["Elder Tuskbrother Rage", "ID_FMP_POWER_4881", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Elemental Warding"] = new engine.RulesElement({
    name: "Elemental Warding",
    type: "Power",
    id: "ID_FMP_POWER_9867",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9867",
    categories: ["Elemental Warding", "ID_FMP_POWER_9867", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Elusive Wind"] = new engine.RulesElement({
    name: "Elusive Wind",
    type: "Power",
    id: "ID_FMP_POWER_9684",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9684",
    categories: ["Elusive Wind", "ID_FMP_POWER_9684", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Emboldening Courage"] = new engine.RulesElement({
    name: "Emboldening Courage",
    type: "Power",
    id: "ID_FMP_POWER_9599",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9599",
    categories: ["Emboldening Courage", "ID_FMP_POWER_9599", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Engaging Pursuit"] = new engine.RulesElement({
    name: "Engaging Pursuit",
    type: "Power",
    id: "ID_FMP_POWER_9744",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9744",
    categories: ["Engaging Pursuit", "ID_FMP_POWER_9744", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Enraged Surge"] = new engine.RulesElement({
    name: "Enraged Surge",
    type: "Power",
    id: "ID_FMP_POWER_9580",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9580",
    categories: ["Enraged Surge", "ID_FMP_POWER_9580", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Erupting Font"] = new engine.RulesElement({
    name: "Erupting Font",
    type: "Power",
    id: "ID_FMP_POWER_5589",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5589",
    categories: ["Erupting Font", "ID_FMP_POWER_5589", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Erupting Vines"] = new engine.RulesElement({
    name: "Erupting Vines",
    type: "Power",
    id: "ID_FMP_POWER_5520",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5520",
    categories: ["Erupting Vines", "ID_FMP_POWER_5520", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Escalating Violence"] = new engine.RulesElement({
    name: "Escalating Violence",
    type: "Power",
    id: "ID_FMP_POWER_9560",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9560",
    categories: ["Escalating Violence", "ID_FMP_POWER_9560", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Everlasting Flame's Strength"] = new engine.RulesElement({
    name: "Everlasting Flame's Strength",
    type: "Power",
    id: "ID_FMP_POWER_9756",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9756",
    categories: ["Everlasting Flame's Strength", "ID_FMP_POWER_9756", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Explosive Sacrifice"] = new engine.RulesElement({
    name: "Explosive Sacrifice",
    type: "Power",
    id: "ID_FMP_POWER_9764",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9764",
    categories: ["Explosive Sacrifice", "ID_FMP_POWER_9764", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Fate Averted"] = new engine.RulesElement({
    name: "Fate Averted",
    type: "Power",
    id: "ID_FMP_POWER_9960",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9960",
    categories: ["Fate Averted", "ID_FMP_POWER_9960", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_506", "Mythic Spirit", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Fazing Fangs"] = new engine.RulesElement({
    name: "Fazing Fangs",
    type: "Power",
    id: "ID_FMP_POWER_9710",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9710",
    categories: ["Fazing Fangs", "ID_FMP_POWER_9710", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_482", "Coiled Serpent", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Fearsome Fangs"] = new engine.RulesElement({
    name: "Fearsome Fangs",
    type: "Power",
    id: "ID_FMP_POWER_9695",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9695",
    categories: ["Fearsome Fangs", "ID_FMP_POWER_9695", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Fearsome Smash"] = new engine.RulesElement({
    name: "Fearsome Smash",
    type: "Power",
    id: "ID_FMP_POWER_9573",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9573",
    categories: ["Fearsome Smash", "ID_FMP_POWER_9573", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Fell the Mighty"] = new engine.RulesElement({
    name: "Fell the Mighty",
    type: "Power",
    id: "ID_FMP_POWER_9953",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9953",
    categories: ["Fell the Mighty", "ID_FMP_POWER_9953", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_502", "Tribal Champion", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Feral Harrier"] = new engine.RulesElement({
    name: "Feral Harrier",
    type: "Power",
    id: "ID_FMP_POWER_9649",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9649",
    categories: ["Feral Harrier", "ID_FMP_POWER_9649", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Feral Recovery"] = new engine.RulesElement({
    name: "Feral Recovery",
    type: "Power",
    id: "ID_FMP_POWER_4904",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4904",
    categories: ["Feral Recovery", "ID_FMP_POWER_4904", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Feral Rejuvenation"] = new engine.RulesElement({
    name: "Feral Rejuvenation",
    type: "Power",
    id: "ID_FMP_POWER_4915",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4915",
    categories: ["Feral Rejuvenation", "ID_FMP_POWER_4915", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Ferocious Transformation"] = new engine.RulesElement({
    name: "Ferocious Transformation",
    type: "Power",
    id: "ID_FMP_POWER_9644",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9644",
    categories: ["Ferocious Transformation", "ID_FMP_POWER_9644", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Fey Circles"] = new engine.RulesElement({
    name: "Fey Circles",
    type: "Power",
    id: "ID_FMP_POWER_9690",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9690",
    categories: ["Fey Circles", "ID_FMP_POWER_9690", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Finishing Thunder"] = new engine.RulesElement({
    name: "Finishing Thunder",
    type: "Power",
    id: "ID_FMP_POWER_9614",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9614",
    categories: ["Finishing Thunder", "ID_FMP_POWER_9614", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_476", "Building Thunder", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Fire Hawk"] = new engine.RulesElement({
    name: "Fire Hawk",
    type: "Power",
    id: "ID_FMP_POWER_9634",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9634",
    categories: ["Fire Hawk", "ID_FMP_POWER_9634", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9635"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Fire Hawk Attack"] = new engine.RulesElement({
    name: "Fire Hawk Attack",
    type: "Power",
    id: "ID_FMP_POWER_9635",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9635",
    categories: ["Fire Hawk Attack", "ID_FMP_POWER_9635", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["First Hunter's Spear"] = new engine.RulesElement({
    name: "First Hunter's Spear",
    type: "Power",
    id: "ID_FMP_POWER_9942",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9942",
    categories: ["First Hunter's Spear", "ID_FMP_POWER_9942", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_499", "First Hunter", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Flames of Life"] = new engine.RulesElement({
    name: "Flames of Life",
    type: "Power",
    id: "ID_FMP_POWER_9890",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9890",
    categories: ["Flames of Life", "ID_FMP_POWER_9890", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Flashing Spirit"] = new engine.RulesElement({
    name: "Flashing Spirit",
    type: "Power",
    id: "ID_FMP_POWER_5445",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5445",
    categories: ["Flashing Spirit", "ID_FMP_POWER_5445", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Flesh Ripper's Claws"] = new engine.RulesElement({
    name: "Flesh Ripper's Claws",
    type: "Power",
    id: "ID_FMP_POWER_9776",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9776",
    categories: ["Flesh Ripper's Claws", "ID_FMP_POWER_9776", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Floating Death"] = new engine.RulesElement({
    name: "Floating Death",
    type: "Power",
    id: "ID_FMP_POWER_4867",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4867",
    categories: ["Floating Death", "ID_FMP_POWER_4867", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Flowing Swarm"] = new engine.RulesElement({
    name: "Flowing Swarm",
    type: "Power",
    id: "ID_FMP_POWER_4865",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4865",
    categories: ["Flowing Swarm", "ID_FMP_POWER_4865", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Flurry of Spirit Talons"] = new engine.RulesElement({
    name: "Flurry of Spirit Talons",
    type: "Power",
    id: "ID_FMP_POWER_9803",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9803",
    categories: ["Flurry of Spirit Talons", "ID_FMP_POWER_9803", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_492", "Keen Eagle", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Flurry of Stingers"] = new engine.RulesElement({
    name: "Flurry of Stingers",
    type: "Power",
    id: "ID_FMP_POWER_4900",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4900",
    categories: ["Flurry of Stingers", "ID_FMP_POWER_4900", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Flying Serpent Rage"] = new engine.RulesElement({
    name: "Flying Serpent Rage",
    type: "Power",
    id: "ID_FMP_POWER_4875",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4875",
    categories: ["Flying Serpent Rage", "ID_FMP_POWER_4875", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Fog of Insects"] = new engine.RulesElement({
    name: "Fog of Insects",
    type: "Power",
    id: "ID_FMP_POWER_4897",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4897",
    categories: ["Fog of Insects", "ID_FMP_POWER_4897", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Forcing the Threat"] = new engine.RulesElement({
    name: "Forcing the Threat",
    type: "Power",
    id: "ID_FMP_POWER_5442",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5442",
    categories: ["Forcing the Threat", "ID_FMP_POWER_5442", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Form of Earth's Beneficience"] = new engine.RulesElement({
    name: "Form of Earth's Beneficience",
    type: "Power",
    id: "ID_FMP_POWER_9905",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9905",
    categories: ["Form of Earth's Beneficience", "ID_FMP_POWER_9905", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9909"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of Earth's Beneficience Attack"] = new engine.RulesElement({
    name: "Form of Earth's Beneficience Attack",
    type: "Power",
    id: "ID_FMP_POWER_9909",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9909",
    categories: ["Form of Earth's Beneficience Attack", "ID_FMP_POWER_9909", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Form of Mountain's Thunder"] = new engine.RulesElement({
    name: "Form of Mountain's Thunder",
    type: "Power",
    id: "ID_FMP_POWER_9825",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9825",
    categories: ["Form of Mountain's Thunder", "ID_FMP_POWER_9825", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9826"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of Mountain's Thunder Attack"] = new engine.RulesElement({
    name: "Form of Mountain's Thunder Attack",
    type: "Power",
    id: "ID_FMP_POWER_9826",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9826",
    categories: ["Form of Mountain's Thunder Attack", "ID_FMP_POWER_9826", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of Paradise's Bounty"] = new engine.RulesElement({
    name: "Form of Paradise's Bounty",
    type: "Power",
    id: "ID_FMP_POWER_9859",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9859",
    categories: ["Form of Paradise's Bounty", "ID_FMP_POWER_9859", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9864"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of Paradise's Bounty Attack"] = new engine.RulesElement({
    name: "Form of Paradise's Bounty Attack",
    type: "Power",
    id: "ID_FMP_POWER_9864",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9864",
    categories: ["Form of Paradise's Bounty Attack", "ID_FMP_POWER_9864", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Avalanche Unleashed"] = new engine.RulesElement({
    name: "Form of the Avalanche Unleashed",
    type: "Power",
    id: "ID_FMP_POWER_9875",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9875",
    categories: ["Form of the Avalanche Unleashed", "ID_FMP_POWER_9875", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9879"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Avalanche Unleashed Attack"] = new engine.RulesElement({
    name: "Form of the Avalanche Unleashed Attack",
    type: "Power",
    id: "ID_FMP_POWER_9879",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9879",
    categories: ["Form of the Avalanche Unleashed Attack", "ID_FMP_POWER_9879", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Crushing Mountain"] = new engine.RulesElement({
    name: "Form of the Crushing Mountain",
    type: "Power",
    id: "ID_FMP_POWER_9876",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9876",
    categories: ["Form of the Crushing Mountain", "ID_FMP_POWER_9876", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9880"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Crushing Mountain Attack"] = new engine.RulesElement({
    name: "Form of the Crushing Mountain Attack",
    type: "Power",
    id: "ID_FMP_POWER_9880",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9880",
    categories: ["Form of the Crushing Mountain Attack", "ID_FMP_POWER_9880", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Dread Serpent"] = new engine.RulesElement({
    name: "Form of the Dread Serpent",
    type: "Power",
    id: "ID_FMP_POWER_5532",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5532",
    categories: ["Form of the Dread Serpent", "ID_FMP_POWER_5532", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9820"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Dread Serpent Attack"] = new engine.RulesElement({
    name: "Form of the Dread Serpent Attack",
    type: "Power",
    id: "ID_FMP_POWER_9820",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9820",
    categories: ["Form of the Dread Serpent Attack", "ID_FMP_POWER_9820", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Entangling Spider"] = new engine.RulesElement({
    name: "Form of the Entangling Spider",
    type: "Power",
    id: "ID_FMP_POWER_5534",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5534",
    categories: ["Form of the Entangling Spider", "ID_FMP_POWER_5534", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9910"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Entangling Spider Attack"] = new engine.RulesElement({
    name: "Form of the Entangling Spider Attack",
    type: "Power",
    id: "ID_FMP_POWER_9910",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9910",
    categories: ["Form of the Entangling Spider Attack", "ID_FMP_POWER_9910", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Faultless Tracker"] = new engine.RulesElement({
    name: "Form of the Faultless Tracker",
    type: "Power",
    id: "ID_FMP_POWER_9822",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9822",
    categories: ["Form of the Faultless Tracker", "ID_FMP_POWER_9822", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9823"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Faultless Tracker Attack"] = new engine.RulesElement({
    name: "Form of the Faultless Tracker Attack",
    type: "Power",
    id: "ID_FMP_POWER_9823",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9823",
    categories: ["Form of the Faultless Tracker Attack", "ID_FMP_POWER_9823", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the First Hunter"] = new engine.RulesElement({
    name: "Form of the First Hunter",
    type: "Power",
    id: "ID_FMP_POWER_9943",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9943",
    categories: ["Form of the First Hunter", "ID_FMP_POWER_9943", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_499", "First Hunter", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9944"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the First Hunter Attack"] = new engine.RulesElement({
    name: "Form of the First Hunter Attack",
    type: "Power",
    id: "ID_FMP_POWER_9944",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9944",
    categories: ["Form of the First Hunter Attack", "ID_FMP_POWER_9944", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_499", "First Hunter", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Flame Snake"] = new engine.RulesElement({
    name: "Form of the Flame Snake",
    type: "Power",
    id: "ID_FMP_POWER_5579",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5579",
    categories: ["Form of the Flame Snake", "ID_FMP_POWER_5579", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9862"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Flame Snake Attack"] = new engine.RulesElement({
    name: "Form of the Flame Snake Attack",
    type: "Power",
    id: "ID_FMP_POWER_9862",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9862",
    categories: ["Form of the Flame Snake Attack", "ID_FMP_POWER_9862", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Grim Harvester"] = new engine.RulesElement({
    name: "Form of the Grim Harvester",
    type: "Power",
    id: "ID_FMP_POWER_9919",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9919",
    categories: ["Form of the Grim Harvester", "ID_FMP_POWER_9919", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9923"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Grim Harvester Attack"] = new engine.RulesElement({
    name: "Form of the Grim Harvester Attack",
    type: "Power",
    id: "ID_FMP_POWER_9923",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9923",
    categories: ["Form of the Grim Harvester Attack", "ID_FMP_POWER_9923", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Hunting Shark"] = new engine.RulesElement({
    name: "Form of the Hunting Shark",
    type: "Power",
    id: "ID_FMP_POWER_9858",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9858",
    categories: ["Form of the Hunting Shark", "ID_FMP_POWER_9858", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9863"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Hunting Shark Attack"] = new engine.RulesElement({
    name: "Form of the Hunting Shark Attack",
    type: "Power",
    id: "ID_FMP_POWER_9863",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9863",
    categories: ["Form of the Hunting Shark Attack", "ID_FMP_POWER_9863", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Hunting Tiger"] = new engine.RulesElement({
    name: "Form of the Hunting Tiger",
    type: "Power",
    id: "ID_FMP_POWER_9877",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9877",
    categories: ["Form of the Hunting Tiger", "ID_FMP_POWER_9877", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9881"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Hunting Tiger Attack"] = new engine.RulesElement({
    name: "Form of the Hunting Tiger Attack",
    type: "Power",
    id: "ID_FMP_POWER_9881",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9881",
    categories: ["Form of the Hunting Tiger Attack", "ID_FMP_POWER_9881", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Icewrought Sentinel"] = new engine.RulesElement({
    name: "Form of the Icewrought Sentinel",
    type: "Power",
    id: "ID_FMP_POWER_9947",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9947",
    categories: ["Form of the Icewrought Sentinel", "ID_FMP_POWER_9947", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_500", "Icewrought Sentinel", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9948"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Icewrought Sentinel Attack"] = new engine.RulesElement({
    name: "Form of the Icewrought Sentinel Attack",
    type: "Power",
    id: "ID_FMP_POWER_9948",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9948",
    categories: ["Form of the Icewrought Sentinel Attack", "ID_FMP_POWER_9948", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_500", "Icewrought Sentinel", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Imperious Phoenix"] = new engine.RulesElement({
    name: "Form of the Imperious Phoenix",
    type: "Power",
    id: "ID_FMP_POWER_5584",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5584",
    categories: ["Form of the Imperious Phoenix", "ID_FMP_POWER_5584", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9924"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Imperious Phoenix Attack"] = new engine.RulesElement({
    name: "Form of the Imperious Phoenix Attack",
    type: "Power",
    id: "ID_FMP_POWER_9924",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9924",
    categories: ["Form of the Imperious Phoenix Attack", "ID_FMP_POWER_9924", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Laughing Killer"] = new engine.RulesElement({
    name: "Form of the Laughing Killer",
    type: "Power",
    id: "ID_FMP_POWER_5576",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5576",
    categories: ["Form of the Laughing Killer", "ID_FMP_POWER_5576", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9824"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Laughing Killer Attack"] = new engine.RulesElement({
    name: "Form of the Laughing Killer Attack",
    type: "Power",
    id: "ID_FMP_POWER_9824",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9824",
    categories: ["Form of the Laughing Killer Attack", "ID_FMP_POWER_9824", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Life-Giver"] = new engine.RulesElement({
    name: "Form of the Life-Giver",
    type: "Power",
    id: "ID_FMP_POWER_9939",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9939",
    categories: ["Form of the Life-Giver", "ID_FMP_POWER_9939", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_498", "Emerald Guardian", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9940"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Life-Giver Attack"] = new engine.RulesElement({
    name: "Form of the Life-Giver Attack",
    type: "Power",
    id: "ID_FMP_POWER_9940",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9940",
    categories: ["Form of the Life-Giver Attack", "ID_FMP_POWER_9940", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_498", "Emerald Guardian", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Night Hunter"] = new engine.RulesElement({
    name: "Form of the Night Hunter",
    type: "Power",
    id: "ID_FMP_POWER_5582",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5582",
    categories: ["Form of the Night Hunter", "ID_FMP_POWER_5582", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9911"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Night Hunter Attack"] = new engine.RulesElement({
    name: "Form of the Night Hunter Attack",
    type: "Power",
    id: "ID_FMP_POWER_9911",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9911",
    categories: ["Form of the Night Hunter Attack", "ID_FMP_POWER_9911", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Northern Whirlwind"] = new engine.RulesElement({
    name: "Form of the Northern Whirlwind",
    type: "Power",
    id: "ID_FMP_POWER_9931",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9931",
    categories: ["Form of the Northern Whirlwind", "ID_FMP_POWER_9931", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_496", "Child of the North Wind", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9932"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Northern Whirlwind Attack"] = new engine.RulesElement({
    name: "Form of the Northern Whirlwind Attack",
    type: "Power",
    id: "ID_FMP_POWER_9932",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9932",
    categories: ["Form of the Northern Whirlwind Attack", "ID_FMP_POWER_9932", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_496", "Child of the North Wind", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Primeval Bulette"] = new engine.RulesElement({
    name: "Form of the Primeval Bulette",
    type: "Power",
    id: "ID_FMP_POWER_9935",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9935",
    categories: ["Form of the Primeval Bulette", "ID_FMP_POWER_9935", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_497", "Earth Shaker", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9936"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Primeval Bulette Attack"] = new engine.RulesElement({
    name: "Form of the Primeval Bulette Attack",
    type: "Power",
    id: "ID_FMP_POWER_9936",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9936",
    categories: ["Form of the Primeval Bulette Attack", "ID_FMP_POWER_9936", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_497", "Earth Shaker", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Radiant Couatl"] = new engine.RulesElement({
    name: "Form of the Radiant Couatl",
    type: "Power",
    id: "ID_FMP_POWER_9950",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9950",
    categories: ["Form of the Radiant Couatl", "ID_FMP_POWER_9950", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_501", "Radiant Serpent", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9951"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Radiant Couatl Attack"] = new engine.RulesElement({
    name: "Form of the Radiant Couatl Attack",
    type: "Power",
    id: "ID_FMP_POWER_9951",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9951",
    categories: ["Form of the Radiant Couatl Attack", "ID_FMP_POWER_9951", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_501", "Radiant Serpent", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Sand Sentinel"] = new engine.RulesElement({
    name: "Form of the Sand Sentinel",
    type: "Power",
    id: "ID_FMP_POWER_5536",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5536",
    categories: ["Form of the Sand Sentinel", "ID_FMP_POWER_5536", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9882"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Sand Sentinel Attack"] = new engine.RulesElement({
    name: "Form of the Sand Sentinel Attack",
    type: "Power",
    id: "ID_FMP_POWER_9882",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9882",
    categories: ["Form of the Sand Sentinel Attack", "ID_FMP_POWER_9882", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Shifting Ancestor"] = new engine.RulesElement({
    name: "Form of the Shifting Ancestor",
    type: "Power",
    id: "ID_FMP_POWER_5583",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5583",
    categories: ["Form of the Shifting Ancestor", "ID_FMP_POWER_5583", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9912"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Shifting Ancestor Attack"] = new engine.RulesElement({
    name: "Form of the Shifting Ancestor Attack",
    type: "Power",
    id: "ID_FMP_POWER_9912",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9912",
    categories: ["Form of the Shifting Ancestor Attack", "ID_FMP_POWER_9912", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Sirocco"] = new engine.RulesElement({
    name: "Form of the Sirocco",
    type: "Power",
    id: "ID_FMP_POWER_9855",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9855",
    categories: ["Form of the Sirocco", "ID_FMP_POWER_9855", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9861"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Sirocco Attack"] = new engine.RulesElement({
    name: "Form of the Sirocco Attack",
    type: "Power",
    id: "ID_FMP_POWER_9861",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9861",
    categories: ["Form of the Sirocco Attack", "ID_FMP_POWER_9861", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Stalwart Mastodon"] = new engine.RulesElement({
    name: "Form of the Stalwart Mastodon",
    type: "Power",
    id: "ID_FMP_POWER_9860",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9860",
    categories: ["Form of the Stalwart Mastodon", "ID_FMP_POWER_9860", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9865"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Stalwart Mastodon Attack"] = new engine.RulesElement({
    name: "Form of the Stalwart Mastodon Attack",
    type: "Power",
    id: "ID_FMP_POWER_9865",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9865",
    categories: ["Form of the Stalwart Mastodon Attack", "ID_FMP_POWER_9865", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Swamp Hunter"] = new engine.RulesElement({
    name: "Form of the Swamp Hunter",
    type: "Power",
    id: "ID_FMP_POWER_5575",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5575",
    categories: ["Form of the Swamp Hunter", "ID_FMP_POWER_5575", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9827"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Swamp Hunter Attack"] = new engine.RulesElement({
    name: "Form of the Swamp Hunter Attack",
    type: "Power",
    id: "ID_FMP_POWER_9827",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9827",
    categories: ["Form of the Swamp Hunter Attack", "ID_FMP_POWER_9827", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Thunderstorm"] = new engine.RulesElement({
    name: "Form of the Thunderstorm",
    type: "Power",
    id: "ID_FMP_POWER_9921",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9921",
    categories: ["Form of the Thunderstorm", "ID_FMP_POWER_9921", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9925"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Thunderstorm Attack"] = new engine.RulesElement({
    name: "Form of the Thunderstorm Attack",
    type: "Power",
    id: "ID_FMP_POWER_9925",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9925",
    categories: ["Form of the Thunderstorm Attack", "ID_FMP_POWER_9925", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Tribal Champion"] = new engine.RulesElement({
    name: "Form of the Tribal Champion",
    type: "Power",
    id: "ID_FMP_POWER_9954",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9954",
    categories: ["Form of the Tribal Champion", "ID_FMP_POWER_9954", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_502", "Tribal Champion", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9955"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Tribal Champion Attack"] = new engine.RulesElement({
    name: "Form of the Tribal Champion Attack",
    type: "Power",
    id: "ID_FMP_POWER_9955",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9955",
    categories: ["Form of the Tribal Champion Attack", "ID_FMP_POWER_9955", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_502", "Tribal Champion", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Unruly Earth"] = new engine.RulesElement({
    name: "Form of the Unruly Earth",
    type: "Power",
    id: "ID_FMP_POWER_9922",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9922",
    categories: ["Form of the Unruly Earth", "ID_FMP_POWER_9922", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9926"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Unruly Earth Attack"] = new engine.RulesElement({
    name: "Form of the Unruly Earth Attack",
    type: "Power",
    id: "ID_FMP_POWER_9926",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9926",
    categories: ["Form of the Unruly Earth Attack", "ID_FMP_POWER_9926", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Windstorm's Wrath"] = new engine.RulesElement({
    name: "Form of the Windstorm's Wrath",
    type: "Power",
    id: "ID_FMP_POWER_9878",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9878",
    categories: ["Form of the Windstorm's Wrath", "ID_FMP_POWER_9878", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9883"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Windstorm's Wrath Attack"] = new engine.RulesElement({
    name: "Form of the Windstorm's Wrath Attack",
    type: "Power",
    id: "ID_FMP_POWER_9883",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9883",
    categories: ["Form of the Windstorm's Wrath Attack", "ID_FMP_POWER_9883", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the World Forger"] = new engine.RulesElement({
    name: "Form of the World Forger",
    type: "Power",
    id: "ID_FMP_POWER_9908",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9908",
    categories: ["Form of the World Forger", "ID_FMP_POWER_9908", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9913"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the World Forger Attack"] = new engine.RulesElement({
    name: "Form of the World Forger Attack",
    type: "Power",
    id: "ID_FMP_POWER_9913",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9913",
    categories: ["Form of the World Forger Attack", "ID_FMP_POWER_9913", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of Verdant Growth"] = new engine.RulesElement({
    name: "Form of Verdant Growth",
    type: "Power",
    id: "ID_FMP_POWER_5535",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5535",
    categories: ["Form of Verdant Growth", "ID_FMP_POWER_5535", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9927"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of Verdant Growth Attack"] = new engine.RulesElement({
    name: "Form of Verdant Growth Attack",
    type: "Power",
    id: "ID_FMP_POWER_9927",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9927",
    categories: ["Form of Verdant Growth Attack", "ID_FMP_POWER_9927", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Fortress of Stone"] = new engine.RulesElement({
    name: "Fortress of Stone",
    type: "Power",
    id: "ID_FMP_POWER_9884",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9884",
    categories: ["Fortress of Stone", "ID_FMP_POWER_9884", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Fortune's Favor"] = new engine.RulesElement({
    name: "Fortune's Favor",
    type: "Power",
    id: "ID_FMP_POWER_9582",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9582",
    categories: ["Fortune's Favor", "ID_FMP_POWER_9582", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Frenzied Scramble"] = new engine.RulesElement({
    name: "Frenzied Scramble",
    type: "Power",
    id: "ID_FMP_POWER_5232",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5232",
    categories: ["Frenzied Scramble", "ID_FMP_POWER_5232", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Frightening Strike"] = new engine.RulesElement({
    name: "Frightening Strike",
    type: "Power",
    id: "ID_FMP_POWER_9594",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9594",
    categories: ["Frightening Strike", "ID_FMP_POWER_9594", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Frost Hide Rage"] = new engine.RulesElement({
    name: "Frost Hide Rage",
    type: "Power",
    id: "ID_FMP_POWER_9585",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9585",
    categories: ["Frost Hide Rage", "ID_FMP_POWER_9585", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Full Pack"] = new engine.RulesElement({
    name: "Full Pack",
    type: "Power",
    id: "ID_FMP_POWER_9717",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9717",
    categories: ["Full Pack", "ID_FMP_POWER_9717", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_484", "Pack Lord", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Furious Calm"] = new engine.RulesElement({
    name: "Furious Calm",
    type: "Power",
    id: "ID_FMP_POWER_9618",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9618",
    categories: ["Furious Calm", "ID_FMP_POWER_9618", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_477", "Calm Fury", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Fury's Form"] = new engine.RulesElement({
    name: "Fury's Form",
    type: "Power",
    id: "ID_FMP_POWER_9958",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9958",
    categories: ["Fury's Form", "ID_FMP_POWER_9958", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_504", "Fury of the Wild", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Gale Strike"] = new engine.RulesElement({
    name: "Gale Strike",
    type: "Power",
    id: "ID_FMP_POWER_9816",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9816",
    categories: ["Gale Strike", "ID_FMP_POWER_9816", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Glacial Hammer"] = new engine.RulesElement({
    name: "Glacial Hammer",
    type: "Power",
    id: "ID_FMP_POWER_9914",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9914",
    categories: ["Glacial Hammer", "ID_FMP_POWER_9914", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Goodberry"] = new engine.RulesElement({
    name: "Goodberry",
    type: "Power",
    id: "ID_FMP_POWER_9667",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9667",
    categories: ["Goodberry", "ID_FMP_POWER_9667", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Grasping Winds"] = new engine.RulesElement({
    name: "Grasping Winds",
    type: "Power",
    id: "ID_FMP_POWER_9817",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9817",
    categories: ["Grasping Winds", "ID_FMP_POWER_9817", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Great Hymn of Nature"] = new engine.RulesElement({
    name: "Great Hymn of Nature",
    type: "Power",
    id: "ID_FMP_POWER_9801",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9801",
    categories: ["Great Hymn of Nature", "ID_FMP_POWER_9801", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_491", "Great Elder", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Great Reaching Spirit"] = new engine.RulesElement({
    name: "Great Reaching Spirit",
    type: "Power",
    id: "ID_FMP_POWER_9799",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9799",
    categories: ["Great Reaching Spirit", "ID_FMP_POWER_9799", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_491", "Great Elder", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Great Watcher Spirit"] = new engine.RulesElement({
    name: "Great Watcher Spirit",
    type: "Power",
    id: "ID_FMP_POWER_9740",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9740",
    categories: ["Great Watcher Spirit", "ID_FMP_POWER_9740", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Great Winged Samara"] = new engine.RulesElement({
    name: "Great Winged Samara",
    type: "Power",
    id: "ID_FMP_POWER_9729",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9729",
    categories: ["Great Winged Samara", "ID_FMP_POWER_9729", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_488", "Whirling Samara", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian Eagle Flock"] = new engine.RulesElement({
    name: "Guardian Eagle Flock",
    type: "Power",
    id: "ID_FMP_POWER_9760",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9760",
    categories: ["Guardian Eagle Flock", "ID_FMP_POWER_9760", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian Shock Wave"] = new engine.RulesElement({
    name: "Guardian Shock Wave",
    type: "Power",
    id: "ID_FMP_POWER_9835",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9835",
    categories: ["Guardian Shock Wave", "ID_FMP_POWER_9835", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian Thorns"] = new engine.RulesElement({
    name: "Guardian Thorns",
    type: "Power",
    id: "ID_FMP_POWER_9832",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9832",
    categories: ["Guardian Thorns", "ID_FMP_POWER_9832", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian's Attack"] = new engine.RulesElement({
    name: "Guardian's Attack",
    type: "Power",
    id: "ID_FMP_POWER_5591",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5591",
    categories: ["Guardian's Attack", "ID_FMP_POWER_5591", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian's Pounce"] = new engine.RulesElement({
    name: "Guardian's Pounce",
    type: "Power",
    id: "ID_FMP_POWER_9852",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9852",
    categories: ["Guardian's Pounce", "ID_FMP_POWER_9852", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian's Shield"] = new engine.RulesElement({
    name: "Guardian's Shield",
    type: "Power",
    id: "ID_FMP_POWER_9798",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9798",
    categories: ["Guardian's Shield", "ID_FMP_POWER_9798", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_490", "Everflame Guardian", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Guiding Snarl"] = new engine.RulesElement({
    name: "Guiding Snarl",
    type: "Power",
    id: "ID_FMP_POWER_5458",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5458",
    categories: ["Guiding Snarl", "ID_FMP_POWER_5458", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Hammer of the Grasping Tides"] = new engine.RulesElement({
    name: "Hammer of the Grasping Tides",
    type: "Power",
    id: "ID_FMP_POWER_9761",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9761",
    categories: ["Hammer of the Grasping Tides", "ID_FMP_POWER_9761", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Harbinger of Doom"] = new engine.RulesElement({
    name: "Harbinger of Doom",
    type: "Power",
    id: "ID_FMP_POWER_9574",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9574",
    categories: ["Harbinger of Doom", "ID_FMP_POWER_9574", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Healing Harvest"] = new engine.RulesElement({
    name: "Healing Harvest",
    type: "Power",
    id: "ID_FMP_POWER_9871",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9871",
    categories: ["Healing Harvest", "ID_FMP_POWER_9871", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Healing Howl"] = new engine.RulesElement({
    name: "Healing Howl",
    type: "Power",
    id: "ID_FMP_POWER_5548",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5548",
    categories: ["Healing Howl", "ID_FMP_POWER_5548", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Heart of Bedlam"] = new engine.RulesElement({
    name: "Heart of Bedlam",
    type: "Power",
    id: "ID_FMP_POWER_5561",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5561",
    categories: ["Heart of Bedlam", "ID_FMP_POWER_5561", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Hearth Spirit"] = new engine.RulesElement({
    name: "Hearth Spirit",
    type: "Power",
    id: "ID_FMP_POWER_9757",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9757",
    categories: ["Hearth Spirit", "ID_FMP_POWER_9757", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Hope Beyond Death"] = new engine.RulesElement({
    name: "Hope Beyond Death",
    type: "Power",
    id: "ID_FMP_POWER_9813",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9813",
    categories: ["Hope Beyond Death", "ID_FMP_POWER_9813", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_495", "Warrior of Spring", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Howl of Fury"] = new engine.RulesElement({
    name: "Howl of Fury",
    type: "Power",
    id: "ID_FMP_POWER_8223",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8223",
    categories: ["Howl of Fury", "ID_FMP_POWER_8223", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Howl of the Alpha Wolf"] = new engine.RulesElement({
    name: "Howl of the Alpha Wolf",
    type: "Power",
    id: "ID_FMP_POWER_4917",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4917",
    categories: ["Howl of the Alpha Wolf", "ID_FMP_POWER_4917", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Howl of Wrath"] = new engine.RulesElement({
    name: "Howl of Wrath",
    type: "Power",
    id: "ID_FMP_POWER_9895",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9895",
    categories: ["Howl of Wrath", "ID_FMP_POWER_9895", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Howling Doom"] = new engine.RulesElement({
    name: "Howling Doom",
    type: "Power",
    id: "ID_FMP_POWER_9703",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9703",
    categories: ["Howling Doom", "ID_FMP_POWER_9703", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Hungry for the Kill"] = new engine.RulesElement({
    name: "Hungry for the Kill",
    type: "Power",
    id: "ID_FMP_POWER_10037",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10037",
    categories: ["Hungry for the Kill", "ID_FMP_POWER_10037", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Hungry Spirit"] = new engine.RulesElement({
    name: "Hungry Spirit",
    type: "Power",
    id: "ID_FMP_POWER_5449",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5449",
    categories: ["Hungry Spirit", "ID_FMP_POWER_5449", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Hunt and Return"] = new engine.RulesElement({
    name: "Hunt and Return",
    type: "Power",
    id: "ID_FMP_POWER_5437",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5437",
    categories: ["Hunt and Return", "ID_FMP_POWER_5437", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Hunter in the Sky"] = new engine.RulesElement({
    name: "Hunter in the Sky",
    type: "Power",
    id: "ID_FMP_POWER_9788",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9788",
    categories: ["Hunter in the Sky", "ID_FMP_POWER_9788", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Hunter's Heart"] = new engine.RulesElement({
    name: "Hunter's Heart",
    type: "Power",
    id: "ID_FMP_POWER_9707",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9707",
    categories: ["Hunter's Heart", "ID_FMP_POWER_9707", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Hunting Eagle"] = new engine.RulesElement({
    name: "Hunting Eagle",
    type: "Power",
    id: "ID_FMP_POWER_9804",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9804",
    categories: ["Hunting Eagle", "ID_FMP_POWER_9804", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_492", "Keen Eagle", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Huntmaster's Horn"] = new engine.RulesElement({
    name: "Huntmaster's Horn",
    type: "Power",
    id: "ID_FMP_POWER_5559",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5559",
    categories: ["Huntmaster's Horn", "ID_FMP_POWER_5559", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Hurricane's Fury"] = new engine.RulesElement({
    name: "Hurricane's Fury",
    type: "Power",
    id: "ID_FMP_POWER_9793",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9793",
    categories: ["Hurricane's Fury", "ID_FMP_POWER_9793", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_489", "Disciple of Winds", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Icewrought Armor"] = new engine.RulesElement({
    name: "Icewrought Armor",
    type: "Power",
    id: "ID_FMP_POWER_10042",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10042",
    categories: ["Icewrought Armor", "ID_FMP_POWER_10042", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_500", "Icewrought Sentinel", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Inevitable Winter"] = new engine.RulesElement({
    name: "Inevitable Winter",
    type: "Power",
    id: "ID_FMP_POWER_9809",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9809",
    categories: ["Inevitable Winter", "ID_FMP_POWER_9809", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_494", "Seasons' Herald", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Inexorable Smash"] = new engine.RulesElement({
    name: "Inexorable Smash",
    type: "Power",
    id: "ID_FMP_POWER_9686",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9686",
    categories: ["Inexorable Smash", "ID_FMP_POWER_9686", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Invigorating Presence"] = new engine.RulesElement({
    name: "Invigorating Presence",
    type: "Power",
    id: "ID_FMP_POWER_9886",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9886",
    categories: ["Invigorating Presence", "ID_FMP_POWER_9886", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Breaker's Shout"] = new engine.RulesElement({
    name: "Iron Breaker's Shout",
    type: "Power",
    id: "ID_FMP_POWER_9583",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9583",
    categories: ["Iron Breaker's Shout", "ID_FMP_POWER_9583", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Ironbreaker Claws"] = new engine.RulesElement({
    name: "Ironbreaker Claws",
    type: "Power",
    id: "ID_FMP_POWER_9738",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9738",
    categories: ["Ironbreaker Claws", "ID_FMP_POWER_9738", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Ironbreaker's Claws"] = new engine.RulesElement({
    name: "Ironbreaker's Claws",
    type: "Power",
    id: "ID_FMP_POWER_9651",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9651",
    categories: ["Ironbreaker's Claws", "ID_FMP_POWER_9651", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Killing Ground"] = new engine.RulesElement({
    name: "Killing Ground",
    type: "Power",
    id: "ID_FMP_POWER_9623",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9623",
    categories: ["Killing Ground", "ID_FMP_POWER_9623", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_478", "Death's Thane", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Leap of the Relentless Hunter"] = new engine.RulesElement({
    name: "Leap of the Relentless Hunter",
    type: "Power",
    id: "ID_FMP_POWER_9891",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9891",
    categories: ["Leap of the Relentless Hunter", "ID_FMP_POWER_9891", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Leaves Before the Wind"] = new engine.RulesElement({
    name: "Leaves Before the Wind",
    type: "Power",
    id: "ID_FMP_POWER_9601",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9601",
    categories: ["Leaves Before the Wind", "ID_FMP_POWER_9601", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Lethal Ancestor Rage"] = new engine.RulesElement({
    name: "Lethal Ancestor Rage",
    type: "Power",
    id: "ID_FMP_POWER_9619",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9619",
    categories: ["Lethal Ancestor Rage", "ID_FMP_POWER_9619", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_477", "Calm Fury", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Life Thane Rage"] = new engine.RulesElement({
    name: "Life Thane Rage",
    type: "Power",
    id: "ID_FMP_POWER_9563",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9563",
    categories: ["Life Thane Rage", "ID_FMP_POWER_9563", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Lifebind Attack"] = new engine.RulesElement({
    name: "Lifebind Attack",
    type: "Power",
    id: "ID_FMP_POWER_9844",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9844",
    categories: ["Lifebind Attack", "ID_FMP_POWER_9844", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Light of Clarity"] = new engine.RulesElement({
    name: "Light of Clarity",
    type: "Power",
    id: "ID_FMP_POWER_9714",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9714",
    categories: ["Light of Clarity", "ID_FMP_POWER_9714", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_483", "Luminescent Swarm", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Arc"] = new engine.RulesElement({
    name: "Lightning Arc",
    type: "Power",
    id: "ID_FMP_POWER_9643",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9643",
    categories: ["Lightning Arc", "ID_FMP_POWER_9643", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Explosion"] = new engine.RulesElement({
    name: "Lightning Explosion",
    type: "Power",
    id: "ID_FMP_POWER_9915",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9915",
    categories: ["Lightning Explosion", "ID_FMP_POWER_9915", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Lines of Rage"] = new engine.RulesElement({
    name: "Lines of Rage",
    type: "Power",
    id: "ID_FMP_POWER_4814",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4814",
    categories: ["Lines of Rage", "ID_FMP_POWER_4814", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Looming Threat"] = new engine.RulesElement({
    name: "Looming Threat",
    type: "Power",
    id: "ID_FMP_POWER_9575",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9575",
    categories: ["Looming Threat", "ID_FMP_POWER_9575", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Mark of Talons"] = new engine.RulesElement({
    name: "Mark of Talons",
    type: "Power",
    id: "ID_FMP_POWER_5521",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5521",
    categories: ["Mark of Talons", "ID_FMP_POWER_5521", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Marked Prey"] = new engine.RulesElement({
    name: "Marked Prey",
    type: "Power",
    id: "ID_FMP_POWER_9945",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9945",
    categories: ["Marked Prey", "ID_FMP_POWER_9945", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_499", "First Hunter", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Masking Fog"] = new engine.RulesElement({
    name: "Masking Fog",
    type: "Power",
    id: "ID_FMP_POWER_5529",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5529",
    categories: ["Masking Fog", "ID_FMP_POWER_5529", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Medicines of Many Forms"] = new engine.RulesElement({
    name: "Medicines of Many Forms",
    type: "Power",
    id: "ID_FMP_POWER_5551",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5551",
    categories: ["Medicines of Many Forms", "ID_FMP_POWER_5551", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Menacing Blow"] = new engine.RulesElement({
    name: "Menacing Blow",
    type: "Power",
    id: "ID_FMP_POWER_9606",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9606",
    categories: ["Menacing Blow", "ID_FMP_POWER_9606", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Mighty Spirit Leap"] = new engine.RulesElement({
    name: "Mighty Spirit Leap",
    type: "Power",
    id: "ID_FMP_POWER_5446",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5446",
    categories: ["Mighty Spirit Leap", "ID_FMP_POWER_5446", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Mountain's Stature"] = new engine.RulesElement({
    name: "Mountain's Stature",
    type: "Power",
    id: "ID_FMP_POWER_5519",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5519",
    categories: ["Mountain's Stature", "ID_FMP_POWER_5519", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Mystifying Lights"] = new engine.RulesElement({
    name: "Mystifying Lights",
    type: "Power",
    id: "ID_FMP_POWER_9712",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9712",
    categories: ["Mystifying Lights", "ID_FMP_POWER_9712", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_483", "Luminescent Swarm", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Natural Rebirth"] = new engine.RulesElement({
    name: "Natural Rebirth",
    type: "Power",
    id: "ID_FMP_POWER_5552",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5552",
    categories: ["Natural Rebirth", "ID_FMP_POWER_5552", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["North Wind's Embrace"] = new engine.RulesElement({
    name: "North Wind's Embrace",
    type: "Power",
    id: "ID_FMP_POWER_9933",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9933",
    categories: ["North Wind's Embrace", "ID_FMP_POWER_9933", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_496", "Child of the North Wind", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Oak Skewer"] = new engine.RulesElement({
    name: "Oak Skewer",
    type: "Power",
    id: "ID_FMP_POWER_9669",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9669",
    categories: ["Oak Skewer", "ID_FMP_POWER_9669", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Peacemaker's Lodge"] = new engine.RulesElement({
    name: "Peacemaker's Lodge",
    type: "Power",
    id: "ID_FMP_POWER_5560",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5560",
    categories: ["Peacemaker's Lodge", "ID_FMP_POWER_5560", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Perfect Guardian's Pounce"] = new engine.RulesElement({
    name: "Perfect Guardian's Pounce",
    type: "Power",
    id: "ID_FMP_POWER_9961",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9961",
    categories: ["Perfect Guardian's Pounce", "ID_FMP_POWER_9961", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_507", "Perfect Guardian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Phantom Beast (Encounter 16)"] = new engine.RulesElement({
    name: "Phantom Beast (Encounter 16)",
    type: "Power",
    id: "ID_FMP_POWER_9685",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9685",
    categories: ["Phantom Beast (Encounter 16)", "ID_FMP_POWER_9685", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Plague of Locusts"] = new engine.RulesElement({
    name: "Plague of Locusts",
    type: "Power",
    id: "ID_FMP_POWER_9661",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9661",
    categories: ["Plague of Locusts", "ID_FMP_POWER_9661", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Poison Sting"] = new engine.RulesElement({
    name: "Poison Sting",
    type: "Power",
    id: "ID_FMP_POWER_4869",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4869",
    categories: ["Poison Sting", "ID_FMP_POWER_4869", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Presence of the Ancestor Spirit"] = new engine.RulesElement({
    name: "Presence of the Ancestor Spirit",
    type: "Power",
    id: "ID_FMP_POWER_5547",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5547",
    categories: ["Presence of the Ancestor Spirit", "ID_FMP_POWER_5547", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Preservation of the Wild"] = new engine.RulesElement({
    name: "Preservation of the Wild",
    type: "Power",
    id: "ID_FMP_POWER_9941",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9941",
    categories: ["Preservation of the Wild", "ID_FMP_POWER_9941", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_498", "Emerald Guardian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Pressing Attack"] = new engine.RulesElement({
    name: "Pressing Attack",
    type: "Power",
    id: "ID_FMP_POWER_9836",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9836",
    categories: ["Pressing Attack", "ID_FMP_POWER_9836", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Ape"] = new engine.RulesElement({
    name: "Primal Ape",
    type: "Power",
    id: "ID_FMP_POWER_9700",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9700",
    categories: ["Primal Ape", "ID_FMP_POWER_9700", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Charge"] = new engine.RulesElement({
    name: "Primal Charge",
    type: "Power",
    id: "ID_FMP_POWER_4887",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4887",
    categories: ["Primal Charge", "ID_FMP_POWER_4887", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Rebuke"] = new engine.RulesElement({
    name: "Primal Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_9903",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9903",
    categories: ["Primal Rebuke", "ID_FMP_POWER_9903", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Primal War Band Rage"] = new engine.RulesElement({
    name: "Primal War Band Rage",
    type: "Power",
    id: "ID_FMP_POWER_9596",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9596",
    categories: ["Primal War Band Rage", "ID_FMP_POWER_9596", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Protective Roots"] = new engine.RulesElement({
    name: "Protective Roots",
    type: "Power",
    id: "ID_FMP_POWER_9745",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9745",
    categories: ["Protective Roots", "ID_FMP_POWER_9745", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Protective Spiral"] = new engine.RulesElement({
    name: "Protective Spiral",
    type: "Power",
    id: "ID_FMP_POWER_9728",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9728",
    categories: ["Protective Spiral", "ID_FMP_POWER_9728", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_488", "Whirling Samara", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Protective Whirlwind"] = new engine.RulesElement({
    name: "Protective Whirlwind",
    type: "Power",
    id: "ID_FMP_POWER_9691",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9691",
    categories: ["Protective Whirlwind", "ID_FMP_POWER_9691", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Pummeling Hail"] = new engine.RulesElement({
    name: "Pummeling Hail",
    type: "Power",
    id: "ID_FMP_POWER_4899",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4899",
    categories: ["Pummeling Hail", "ID_FMP_POWER_4899", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Pure Power"] = new engine.RulesElement({
    name: "Pure Power",
    type: "Power",
    id: "ID_FMP_POWER_9956",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9956",
    categories: ["Pure Power", "ID_FMP_POWER_9956", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_502", "Tribal Champion", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Pyroclastic Tide"] = new engine.RulesElement({
    name: "Pyroclastic Tide",
    type: "Power",
    id: "ID_FMP_POWER_9624",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9624",
    categories: ["Pyroclastic Tide", "ID_FMP_POWER_9624", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_479", "Stonefire Rager", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Quickening Breeze"] = new engine.RulesElement({
    name: "Quickening Breeze",
    type: "Power",
    id: "ID_FMP_POWER_5459",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5459",
    categories: ["Quickening Breeze", "ID_FMP_POWER_5459", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Rabid Beast"] = new engine.RulesElement({
    name: "Rabid Beast",
    type: "Power",
    id: "ID_FMP_POWER_4816",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4816",
    categories: ["Rabid Beast", "ID_FMP_POWER_4816", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Coils"] = new engine.RulesElement({
    name: "Radiant Coils",
    type: "Power",
    id: "ID_FMP_POWER_9949",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9949",
    categories: ["Radiant Coils", "ID_FMP_POWER_9949", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_501", "Radiant Serpent", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Rage of Retribution"] = new engine.RulesElement({
    name: "Rage of Retribution",
    type: "Power",
    id: "ID_FMP_POWER_9609",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9609",
    categories: ["Rage of Retribution", "ID_FMP_POWER_9609", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Rage of the Battle Tyrant"] = new engine.RulesElement({
    name: "Rage of the Battle Tyrant",
    type: "Power",
    id: "ID_FMP_POWER_9576",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9576",
    categories: ["Rage of the Battle Tyrant", "ID_FMP_POWER_9576", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Rage of the Crimson Hurricane"] = new engine.RulesElement({
    name: "Rage of the Crimson Hurricane",
    type: "Power",
    id: "ID_FMP_POWER_9569",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9569",
    categories: ["Rage of the Crimson Hurricane", "ID_FMP_POWER_9569", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Rage of the Death Spirit"] = new engine.RulesElement({
    name: "Rage of the Death Spirit",
    type: "Power",
    id: "ID_FMP_POWER_9577",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9577",
    categories: ["Rage of the Death Spirit", "ID_FMP_POWER_9577", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Rage of the Primal Banshee"] = new engine.RulesElement({
    name: "Rage of the Primal Banshee",
    type: "Power",
    id: "ID_FMP_POWER_9578",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9578",
    categories: ["Rage of the Primal Banshee", "ID_FMP_POWER_9578", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Rage of the Thundering Rhino"] = new engine.RulesElement({
    name: "Rage of the Thundering Rhino",
    type: "Power",
    id: "ID_FMP_POWER_9610",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9610",
    categories: ["Rage of the Thundering Rhino", "ID_FMP_POWER_9610", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Rage of the Unbridled Beast"] = new engine.RulesElement({
    name: "Rage of the Unbridled Beast",
    type: "Power",
    id: "ID_FMP_POWER_9604",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9604",
    categories: ["Rage of the Unbridled Beast", "ID_FMP_POWER_9604", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Rage of the War Bringer"] = new engine.RulesElement({
    name: "Rage of the War Bringer",
    type: "Power",
    id: "ID_FMP_POWER_9586",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9586",
    categories: ["Rage of the War Bringer", "ID_FMP_POWER_9586", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Raging Resurgence"] = new engine.RulesElement({
    name: "Raging Resurgence",
    type: "Power",
    id: "ID_FMP_POWER_4892",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4892",
    categories: ["Raging Resurgence", "ID_FMP_POWER_4892", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Rain of Fire Needles"] = new engine.RulesElement({
    name: "Rain of Fire Needles",
    type: "Power",
    id: "ID_FMP_POWER_9696",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9696",
    categories: ["Rain of Fire Needles", "ID_FMP_POWER_9696", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Rampant Forest"] = new engine.RulesElement({
    name: "Rampant Forest",
    type: "Power",
    id: "ID_FMP_POWER_5577",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5577",
    categories: ["Rampant Forest", "ID_FMP_POWER_5577", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Rampant Malice"] = new engine.RulesElement({
    name: "Rampant Malice",
    type: "Power",
    id: "ID_FMP_POWER_9590",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9590",
    categories: ["Rampant Malice", "ID_FMP_POWER_9590", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Raptor's Eye Rage"] = new engine.RulesElement({
    name: "Raptor's Eye Rage",
    type: "Power",
    id: "ID_FMP_POWER_4930",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4930",
    categories: ["Raptor's Eye Rage", "ID_FMP_POWER_4930", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Ravenous Earth"] = new engine.RulesElement({
    name: "Ravenous Earth",
    type: "Power",
    id: "ID_FMP_POWER_9916",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9916",
    categories: ["Ravenous Earth", "ID_FMP_POWER_9916", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Ravenous Spirit"] = new engine.RulesElement({
    name: "Ravenous Spirit",
    type: "Power",
    id: "ID_FMP_POWER_5450",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5450",
    categories: ["Ravenous Spirit", "ID_FMP_POWER_5450", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Razor Snare"] = new engine.RulesElement({
    name: "Razor Snare",
    type: "Power",
    id: "ID_FMP_POWER_9697",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9697",
    categories: ["Razor Snare", "ID_FMP_POWER_9697", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Razor Wind Rage"] = new engine.RulesElement({
    name: "Razor Wind Rage",
    type: "Power",
    id: "ID_FMP_POWER_9570",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9570",
    categories: ["Razor Wind Rage", "ID_FMP_POWER_9570", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Read the Omens"] = new engine.RulesElement({
    name: "Read the Omens",
    type: "Power",
    id: "ID_FMP_POWER_9810",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9810",
    categories: ["Read the Omens", "ID_FMP_POWER_9810", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_494", "Seasons' Herald", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Reaper's Rage"] = new engine.RulesElement({
    name: "Reaper's Rage",
    type: "Power",
    id: "ID_FMP_POWER_9622",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9622",
    categories: ["Reaper's Rage", "ID_FMP_POWER_9622", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_478", "Death's Thane", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Rebuking Thorns"] = new engine.RulesElement({
    name: "Rebuking Thorns",
    type: "Power",
    id: "ID_FMP_POWER_9658",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9658",
    categories: ["Rebuking Thorns", "ID_FMP_POWER_9658", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Reckless Rampage"] = new engine.RulesElement({
    name: "Reckless Rampage",
    type: "Power",
    id: "ID_FMP_POWER_9566",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9566",
    categories: ["Reckless Rampage", "ID_FMP_POWER_9566", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Redfang Prophecy"] = new engine.RulesElement({
    name: "Redfang Prophecy",
    type: "Power",
    id: "ID_FMP_POWER_9718",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9718",
    categories: ["Redfang Prophecy", "ID_FMP_POWER_9718", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_485", "Primal Summoner", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Releasing Breath"] = new engine.RulesElement({
    name: "Releasing Breath",
    type: "Power",
    id: "ID_FMP_POWER_9723",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9723",
    categories: ["Releasing Breath", "ID_FMP_POWER_9723", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_486", "Spiral Wind's Ally", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Relentless Surge"] = new engine.RulesElement({
    name: "Relentless Surge",
    type: "Power",
    id: "ID_FMP_POWER_9572",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9572",
    categories: ["Relentless Surge", "ID_FMP_POWER_9572", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Rending Claws"] = new engine.RulesElement({
    name: "Rending Claws",
    type: "Power",
    id: "ID_FMP_POWER_9671",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9671",
    categories: ["Rending Claws", "ID_FMP_POWER_9671", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Rending Fury"] = new engine.RulesElement({
    name: "Rending Fury",
    type: "Power",
    id: "ID_FMP_POWER_9818",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9818",
    categories: ["Rending Fury", "ID_FMP_POWER_9818", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Reparative Spirit"] = new engine.RulesElement({
    name: "Reparative Spirit",
    type: "Power",
    id: "ID_FMP_POWER_5556",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5556",
    categories: ["Reparative Spirit", "ID_FMP_POWER_5556", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Resilience of Life"] = new engine.RulesElement({
    name: "Resilience of Life",
    type: "Power",
    id: "ID_FMP_POWER_9814",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9814",
    categories: ["Resilience of Life", "ID_FMP_POWER_9814", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Resist Energy"] = new engine.RulesElement({
    name: "Resist Energy",
    type: "Power",
    id: "ID_FMP_POWER_9645",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9645",
    categories: ["Resist Energy", "ID_FMP_POWER_9645", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Resplendent Beast"] = new engine.RulesElement({
    name: "Resplendent Beast",
    type: "Power",
    id: "ID_FMP_POWER_9963",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9963",
    categories: ["Resplendent Beast", "ID_FMP_POWER_9963", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_EPIC_DESTINY_509", "Sovereign Beast", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Resurgent Strike"] = new engine.RulesElement({
    name: "Resurgent Strike",
    type: "Power",
    id: "ID_FMP_POWER_4908",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4908",
    categories: ["Resurgent Strike", "ID_FMP_POWER_4908", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Returning the Gift"] = new engine.RulesElement({
    name: "Returning the Gift",
    type: "Power",
    id: "ID_FMP_POWER_5590",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5590",
    categories: ["Returning the Gift", "ID_FMP_POWER_5590", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Rime Shackles"] = new engine.RulesElement({
    name: "Rime Shackles",
    type: "Power",
    id: "ID_FMP_POWER_9946",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9946",
    categories: ["Rime Shackles", "ID_FMP_POWER_9946", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_500", "Icewrought Sentinel", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Rippling Blades"] = new engine.RulesElement({
    name: "Rippling Blades",
    type: "Power",
    id: "ID_FMP_POWER_5216",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5216",
    categories: ["Rippling Blades", "ID_FMP_POWER_5216", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Roar of the Unbowed Beast"] = new engine.RulesElement({
    name: "Roar of the Unbowed Beast",
    type: "Power",
    id: "ID_FMP_POWER_9652",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9652",
    categories: ["Roar of the Unbowed Beast", "ID_FMP_POWER_9652", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Rock Tree Rage"] = new engine.RulesElement({
    name: "Rock Tree Rage",
    type: "Power",
    id: "ID_FMP_POWER_4880",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4880",
    categories: ["Rock Tree Rage", "ID_FMP_POWER_4880", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Rodent's Agility"] = new engine.RulesElement({
    name: "Rodent's Agility",
    type: "Power",
    id: "ID_FMP_POWER_9659",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9659",
    categories: ["Rodent's Agility", "ID_FMP_POWER_9659", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Rolling Boulder"] = new engine.RulesElement({
    name: "Rolling Boulder",
    type: "Power",
    id: "ID_FMP_POWER_4812",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4812",
    categories: ["Rolling Boulder", "ID_FMP_POWER_4812", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Roots of Stone"] = new engine.RulesElement({
    name: "Roots of Stone",
    type: "Power",
    id: "ID_FMP_POWER_9819",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9819",
    categories: ["Roots of Stone", "ID_FMP_POWER_9819", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Rough Advantage"] = new engine.RulesElement({
    name: "Rough Advantage",
    type: "Power",
    id: "ID_FMP_POWER_5573",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5573",
    categories: ["Rough Advantage", "ID_FMP_POWER_5573", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Rough Strike"] = new engine.RulesElement({
    name: "Rough Strike",
    type: "Power",
    id: "ID_FMP_POWER_9837",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9837",
    categories: ["Rough Strike", "ID_FMP_POWER_9837", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Rumbling Doom"] = new engine.RulesElement({
    name: "Rumbling Doom",
    type: "Power",
    id: "ID_FMP_POWER_9872",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9872",
    categories: ["Rumbling Doom", "ID_FMP_POWER_9872", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Run Rampant"] = new engine.RulesElement({
    name: "Run Rampant",
    type: "Power",
    id: "ID_FMP_POWER_4911",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4911",
    categories: ["Run Rampant", "ID_FMP_POWER_4911", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Sacrificial Assault"] = new engine.RulesElement({
    name: "Sacrificial Assault",
    type: "Power",
    id: "ID_FMP_POWER_5569",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5569",
    categories: ["Sacrificial Assault", "ID_FMP_POWER_5569", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Sacrificial Strike"] = new engine.RulesElement({
    name: "Sacrificial Strike",
    type: "Power",
    id: "ID_FMP_POWER_5568",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5568",
    categories: ["Sacrificial Strike", "ID_FMP_POWER_5568", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Savage Ancestors Strike"] = new engine.RulesElement({
    name: "Savage Ancestors Strike",
    type: "Power",
    id: "ID_FMP_POWER_4817",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4817",
    categories: ["Savage Ancestors Strike", "ID_FMP_POWER_4817", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Savage Comeback"] = new engine.RulesElement({
    name: "Savage Comeback",
    type: "Power",
    id: "ID_FMP_POWER_9565",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9565",
    categories: ["Savage Comeback", "ID_FMP_POWER_9565", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Savage Growl"] = new engine.RulesElement({
    name: "Savage Growl",
    type: "Power",
    id: "ID_FMP_POWER_5244",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5244",
    categories: ["Savage Growl", "ID_FMP_POWER_5244", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Savage Juggernaut Rage"] = new engine.RulesElement({
    name: "Savage Juggernaut Rage",
    type: "Power",
    id: "ID_FMP_POWER_4926",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4926",
    categories: ["Savage Juggernaut Rage", "ID_FMP_POWER_4926", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Scattered Form"] = new engine.RulesElement({
    name: "Scattered Form",
    type: "Power",
    id: "ID_FMP_POWER_4870",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4870",
    categories: ["Scattered Form", "ID_FMP_POWER_4870", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Scent of Blood"] = new engine.RulesElement({
    name: "Scent of Blood",
    type: "Power",
    id: "ID_FMP_POWER_4914",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4914",
    categories: ["Scent of Blood", "ID_FMP_POWER_4914", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Screening Branches"] = new engine.RulesElement({
    name: "Screening Branches",
    type: "Power",
    id: "ID_FMP_POWER_5549",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5549",
    categories: ["Screening Branches", "ID_FMP_POWER_5549", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Scytheclaw Rage"] = new engine.RulesElement({
    name: "Scytheclaw Rage",
    type: "Power",
    id: "ID_FMP_POWER_9587",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9587",
    categories: ["Scytheclaw Rage", "ID_FMP_POWER_9587", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Serenity of Stone"] = new engine.RulesElement({
    name: "Serenity of Stone",
    type: "Power",
    id: "ID_FMP_POWER_9626",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9626",
    categories: ["Serenity of Stone", "ID_FMP_POWER_9626", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_479", "Stonefire Rager", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Serpent Fang Rage"] = new engine.RulesElement({
    name: "Serpent Fang Rage",
    type: "Power",
    id: "ID_FMP_POWER_4924",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4924",
    categories: ["Serpent Fang Rage", "ID_FMP_POWER_4924", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Serpent's Dash"] = new engine.RulesElement({
    name: "Serpent's Dash",
    type: "Power",
    id: "ID_FMP_POWER_9711",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9711",
    categories: ["Serpent's Dash", "ID_FMP_POWER_9711", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_482", "Coiled Serpent", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Serpent's Retaliation"] = new engine.RulesElement({
    name: "Serpent's Retaliation",
    type: "Power",
    id: "ID_FMP_POWER_9957",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9957",
    categories: ["Serpent's Retaliation", "ID_FMP_POWER_9957", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_503", "Fang of the World Serpent", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Shake the Earth"] = new engine.RulesElement({
    name: "Shake the Earth",
    type: "Power",
    id: "ID_FMP_POWER_9934",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9934",
    categories: ["Shake the Earth", "ID_FMP_POWER_9934", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_497", "Earth Shaker", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Shared Font of Life"] = new engine.RulesElement({
    name: "Shared Font of Life",
    type: "Power",
    id: "ID_FMP_POWER_9869",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9869",
    categories: ["Shared Font of Life", "ID_FMP_POWER_9869", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Sharing the Kill"] = new engine.RulesElement({
    name: "Sharing the Kill",
    type: "Power",
    id: "ID_FMP_POWER_9805",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9805",
    categories: ["Sharing the Kill", "ID_FMP_POWER_9805", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_493", "Scarred Healer", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Sheltering Storm"] = new engine.RulesElement({
    name: "Sheltering Storm",
    type: "Power",
    id: "ID_FMP_POWER_9853",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9853",
    categories: ["Sheltering Storm", "ID_FMP_POWER_9853", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Shield of Gales"] = new engine.RulesElement({
    name: "Shield of Gales",
    type: "Power",
    id: "ID_FMP_POWER_9727",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9727",
    categories: ["Shield of Gales", "ID_FMP_POWER_9727", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_487", "Storm Speaker", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Shield of the Immortal Forest"] = new engine.RulesElement({
    name: "Shield of the Immortal Forest",
    type: "Power",
    id: "ID_FMP_POWER_9767",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9767",
    categories: ["Shield of the Immortal Forest", "ID_FMP_POWER_9767", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Shielding Winds"] = new engine.RulesElement({
    name: "Shielding Winds",
    type: "Power",
    id: "ID_FMP_POWER_9794",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9794",
    categories: ["Shielding Winds", "ID_FMP_POWER_9794", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_489", "Disciple of Winds", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Shining Pass"] = new engine.RulesElement({
    name: "Shining Pass",
    type: "Power",
    id: "ID_FMP_POWER_9952",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9952",
    categories: ["Shining Pass", "ID_FMP_POWER_9952", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_501", "Radiant Serpent", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Shout of Terror"] = new engine.RulesElement({
    name: "Shout of Terror",
    type: "Power",
    id: "ID_FMP_POWER_9562",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9562",
    categories: ["Shout of Terror", "ID_FMP_POWER_9562", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Shrug It Off"] = new engine.RulesElement({
    name: "Shrug It Off",
    type: "Power",
    id: "ID_FMP_POWER_1145",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1145",
    categories: ["Shrug It Off", "ID_FMP_POWER_1145", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Sky's Reach"] = new engine.RulesElement({
    name: "Sky's Reach",
    type: "Power",
    id: "ID_FMP_POWER_5524",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5524",
    categories: ["Sky's Reach", "ID_FMP_POWER_5524", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Slash and Slash Again"] = new engine.RulesElement({
    name: "Slash and Slash Again",
    type: "Power",
    id: "ID_FMP_POWER_5218",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5218",
    categories: ["Slash and Slash Again", "ID_FMP_POWER_5218", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Sly Fox Spirit"] = new engine.RulesElement({
    name: "Sly Fox Spirit",
    type: "Power",
    id: "ID_FMP_POWER_9749",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9749",
    categories: ["Sly Fox Spirit", "ID_FMP_POWER_9749", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Snarling Defiance"] = new engine.RulesElement({
    name: "Snarling Defiance",
    type: "Power",
    id: "ID_FMP_POWER_4886",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4886",
    categories: ["Snarling Defiance", "ID_FMP_POWER_4886", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Snatching Winds"] = new engine.RulesElement({
    name: "Snatching Winds",
    type: "Power",
    id: "ID_FMP_POWER_9792",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9792",
    categories: ["Snatching Winds", "ID_FMP_POWER_9792", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_489", "Disciple of Winds", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Snowy Grasp"] = new engine.RulesElement({
    name: "Snowy Grasp",
    type: "Power",
    id: "ID_FMP_POWER_9904",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9904",
    categories: ["Snowy Grasp", "ID_FMP_POWER_9904", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Soothing Wind"] = new engine.RulesElement({
    name: "Soothing Wind",
    type: "Power",
    id: "ID_FMP_POWER_9848",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9848",
    categories: ["Soothing Wind", "ID_FMP_POWER_9848", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Spark of Life"] = new engine.RulesElement({
    name: "Spark of Life",
    type: "Power",
    id: "ID_FMP_POWER_9795",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9795",
    categories: ["Spark of Life", "ID_FMP_POWER_9795", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_490", "Everflame Guardian", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Sparking Strike"] = new engine.RulesElement({
    name: "Sparking Strike",
    type: "Power",
    id: "ID_FMP_POWER_5586",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5586",
    categories: ["Sparking Strike", "ID_FMP_POWER_5586", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Spiral Gust"] = new engine.RulesElement({
    name: "Spiral Gust",
    type: "Power",
    id: "ID_FMP_POWER_9721",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9721",
    categories: ["Spiral Gust", "ID_FMP_POWER_9721", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_486", "Spiral Wind's Ally", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Cascade"] = new engine.RulesElement({
    name: "Spirit Cascade",
    type: "Power",
    id: "ID_FMP_POWER_5451",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5451",
    categories: ["Spirit Cascade", "ID_FMP_POWER_5451", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Companion's Shelter"] = new engine.RulesElement({
    name: "Spirit Companion's Shelter",
    type: "Power",
    id: "ID_FMP_POWER_9758",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9758",
    categories: ["Spirit Companion's Shelter", "ID_FMP_POWER_9758", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Control"] = new engine.RulesElement({
    name: "Spirit Control",
    type: "Power",
    id: "ID_FMP_POWER_9765",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9765",
    categories: ["Spirit Control", "ID_FMP_POWER_9765", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Hunt"] = new engine.RulesElement({
    name: "Spirit Hunt",
    type: "Power",
    id: "ID_FMP_POWER_5436",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5436",
    categories: ["Spirit Hunt", "ID_FMP_POWER_5436", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Lance"] = new engine.RulesElement({
    name: "Spirit Lance",
    type: "Power",
    id: "ID_FMP_POWER_5444",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5444",
    categories: ["Spirit Lance", "ID_FMP_POWER_5444", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Ocean"] = new engine.RulesElement({
    name: "Spirit Ocean",
    type: "Power",
    id: "ID_FMP_POWER_5452",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5452",
    categories: ["Spirit Ocean", "ID_FMP_POWER_5452", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Battle's End"] = new engine.RulesElement({
    name: "Spirit of Battle's End",
    type: "Power",
    id: "ID_FMP_POWER_9753",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9753",
    categories: ["Spirit of Battle's End", "ID_FMP_POWER_9753", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Earth Arisen"] = new engine.RulesElement({
    name: "Spirit of Earth Arisen",
    type: "Power",
    id: "ID_FMP_POWER_9766",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9766",
    categories: ["Spirit of Earth Arisen", "ID_FMP_POWER_9766", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Fiery Hatred"] = new engine.RulesElement({
    name: "Spirit of Fiery Hatred",
    type: "Power",
    id: "ID_FMP_POWER_9790",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9790",
    categories: ["Spirit of Fiery Hatred", "ID_FMP_POWER_9790", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Grief's Shadow"] = new engine.RulesElement({
    name: "Spirit of Grief's Shadow",
    type: "Power",
    id: "ID_FMP_POWER_9741",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9741",
    categories: ["Spirit of Grief's Shadow", "ID_FMP_POWER_9741", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Slavering Bloodlust"] = new engine.RulesElement({
    name: "Spirit of Slavering Bloodlust",
    type: "Power",
    id: "ID_FMP_POWER_9750",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9750",
    categories: ["Spirit of Slavering Bloodlust", "ID_FMP_POWER_9750", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Cunning General"] = new engine.RulesElement({
    name: "Spirit of the Cunning General",
    type: "Power",
    id: "ID_FMP_POWER_9779",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9779",
    categories: ["Spirit of the Cunning General", "ID_FMP_POWER_9779", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Great Cat"] = new engine.RulesElement({
    name: "Spirit of the Great Cat",
    type: "Power",
    id: "ID_FMP_POWER_9746",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9746",
    categories: ["Spirit of the Great Cat", "ID_FMP_POWER_9746", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Hunter's Soul"] = new engine.RulesElement({
    name: "Spirit of the Hunter's Soul",
    type: "Power",
    id: "ID_FMP_POWER_5558",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5558",
    categories: ["Spirit of the Hunter's Soul", "ID_FMP_POWER_5558", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Killing Shot"] = new engine.RulesElement({
    name: "Spirit of the Killing Shot",
    type: "Power",
    id: "ID_FMP_POWER_9770",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9770",
    categories: ["Spirit of the Killing Shot", "ID_FMP_POWER_9770", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Ram"] = new engine.RulesElement({
    name: "Spirit of the Ram",
    type: "Power",
    id: "ID_FMP_POWER_9783",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9783",
    categories: ["Spirit of the Ram", "ID_FMP_POWER_9783", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Tempest"] = new engine.RulesElement({
    name: "Spirit of the Tempest",
    type: "Power",
    id: "ID_FMP_POWER_9735",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9735",
    categories: ["Spirit of the Tempest", "ID_FMP_POWER_9735", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of the Vengeful Mountain"] = new engine.RulesElement({
    name: "Spirit of the Vengeful Mountain",
    type: "Power",
    id: "ID_FMP_POWER_9784",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9784",
    categories: ["Spirit of the Vengeful Mountain", "ID_FMP_POWER_9784", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Vengeance"] = new engine.RulesElement({
    name: "Spirit of Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_9759",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9759",
    categories: ["Spirit of Vengeance", "ID_FMP_POWER_9759", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Weakness"] = new engine.RulesElement({
    name: "Spirit of Weakness",
    type: "Power",
    id: "ID_FMP_POWER_9762",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9762",
    categories: ["Spirit of Weakness", "ID_FMP_POWER_9762", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Pin"] = new engine.RulesElement({
    name: "Spirit Pin",
    type: "Power",
    id: "ID_FMP_POWER_9773",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9773",
    categories: ["Spirit Pin", "ID_FMP_POWER_9773", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Realm"] = new engine.RulesElement({
    name: "Spirit Realm",
    type: "Power",
    id: "ID_FMP_POWER_5457",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5457",
    categories: ["Spirit Realm", "ID_FMP_POWER_5457", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Torrent"] = new engine.RulesElement({
    name: "Spirit Torrent",
    type: "Power",
    id: "ID_FMP_POWER_5453",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5453",
    categories: ["Spirit Torrent", "ID_FMP_POWER_5453", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Warning"] = new engine.RulesElement({
    name: "Spirit Warning",
    type: "Power",
    id: "ID_FMP_POWER_9959",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9959",
    categories: ["Spirit Warning", "ID_FMP_POWER_9959", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_505", "Honored Ancestor", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Zephyr"] = new engine.RulesElement({
    name: "Spirit Zephyr",
    type: "Power",
    id: "ID_FMP_POWER_9747",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9747",
    categories: ["Spirit Zephyr", "ID_FMP_POWER_9747", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Spiritblood Vines"] = new engine.RulesElement({
    name: "Spiritblood Vines",
    type: "Power",
    id: "ID_FMP_POWER_9789",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9789",
    categories: ["Spiritblood Vines", "ID_FMP_POWER_9789", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Spirits of Mountain Mist"] = new engine.RulesElement({
    name: "Spirits of Mountain Mist",
    type: "Power",
    id: "ID_FMP_POWER_5538",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5538",
    categories: ["Spirits of Mountain Mist", "ID_FMP_POWER_5538", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spirits of Recovery"] = new engine.RulesElement({
    name: "Spirits of Recovery",
    type: "Power",
    id: "ID_FMP_POWER_5553",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5553",
    categories: ["Spirits of Recovery", "ID_FMP_POWER_5553", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Spirits of the Forsaken Vale"] = new engine.RulesElement({
    name: "Spirits of the Forsaken Vale",
    type: "Power",
    id: "ID_FMP_POWER_9771",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9771",
    categories: ["Spirits of the Forsaken Vale", "ID_FMP_POWER_9771", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit's Prey"] = new engine.RulesElement({
    name: "Spirit's Prey",
    type: "Power",
    id: "ID_FMP_POWER_9732",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9732",
    categories: ["Spirit's Prey", "ID_FMP_POWER_9732", "ID_FMP_FEAT_668", "Spirit Talker"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit's Regeneration"] = new engine.RulesElement({
    name: "Spirit's Regeneration",
    type: "Power",
    id: "ID_FMP_POWER_5550",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5550",
    categories: ["Spirit's Regeneration", "ID_FMP_POWER_5550", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit's Touch"] = new engine.RulesElement({
    name: "Spirit's Touch",
    type: "Power",
    id: "ID_FMP_POWER_9807",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9807",
    categories: ["Spirit's Touch", "ID_FMP_POWER_9807", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_493", "Scarred Healer", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Spiritual Rejuvenation"] = new engine.RulesElement({
    name: "Spiritual Rejuvenation",
    type: "Power",
    id: "ID_FMP_POWER_9870",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9870",
    categories: ["Spiritual Rejuvenation", "ID_FMP_POWER_9870", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Spray of Quills"] = new engine.RulesElement({
    name: "Spray of Quills",
    type: "Power",
    id: "ID_FMP_POWER_5554",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5554",
    categories: ["Spray of Quills", "ID_FMP_POWER_5554", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spring's Dawning"] = new engine.RulesElement({
    name: "Spring's Dawning",
    type: "Power",
    id: "ID_FMP_POWER_9811",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9811",
    categories: ["Spring's Dawning", "ID_FMP_POWER_9811", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_495", "Warrior of Spring", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Spring's Laughter"] = new engine.RulesElement({
    name: "Spring's Laughter",
    type: "Power",
    id: "ID_FMP_POWER_9791",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9791",
    categories: ["Spring's Laughter", "ID_FMP_POWER_9791", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Spring's Resurgence"] = new engine.RulesElement({
    name: "Spring's Resurgence",
    type: "Power",
    id: "ID_FMP_POWER_9812",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9812",
    categories: ["Spring's Resurgence", "ID_FMP_POWER_9812", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_495", "Warrior of Spring", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Spur the Pack"] = new engine.RulesElement({
    name: "Spur the Pack",
    type: "Power",
    id: "ID_FMP_POWER_5545",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5545",
    categories: ["Spur the Pack", "ID_FMP_POWER_5545", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Steadfast Mountain Guardian"] = new engine.RulesElement({
    name: "Steadfast Mountain Guardian",
    type: "Power",
    id: "ID_FMP_POWER_9751",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9751",
    categories: ["Steadfast Mountain Guardian", "ID_FMP_POWER_9751", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Stinging Cloud"] = new engine.RulesElement({
    name: "Stinging Cloud",
    type: "Power",
    id: "ID_FMP_POWER_4866",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4866",
    categories: ["Stinging Cloud", "ID_FMP_POWER_4866", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Stone Root Spirit"] = new engine.RulesElement({
    name: "Stone Root Spirit",
    type: "Power",
    id: "ID_FMP_POWER_9743",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9743",
    categories: ["Stone Root Spirit", "ID_FMP_POWER_9743", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Stone Root's Resilience"] = new engine.RulesElement({
    name: "Stone Root's Resilience",
    type: "Power",
    id: "ID_FMP_POWER_9768",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9768",
    categories: ["Stone Root's Resilience", "ID_FMP_POWER_9768", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Stonebones"] = new engine.RulesElement({
    name: "Stonebones",
    type: "Power",
    id: "ID_FMP_POWER_9692",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9692",
    categories: ["Stonebones", "ID_FMP_POWER_9692", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Stone-Splitting Roar"] = new engine.RulesElement({
    name: "Stone-Splitting Roar",
    type: "Power",
    id: "ID_FMP_POWER_9595",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9595",
    categories: ["Stone-Splitting Roar", "ID_FMP_POWER_9595", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Beast"] = new engine.RulesElement({
    name: "Storm Beast",
    type: "Power",
    id: "ID_FMP_POWER_9724",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9724",
    categories: ["Storm Beast", "ID_FMP_POWER_9724", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_487", "Storm Speaker", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Child"] = new engine.RulesElement({
    name: "Storm Child",
    type: "Power",
    id: "ID_FMP_POWER_9725",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9725",
    categories: ["Storm Child", "ID_FMP_POWER_9725", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_487", "Storm Speaker", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9726"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Storm Child Attack"] = new engine.RulesElement({
    name: "Storm Child Attack",
    type: "Power",
    id: "ID_FMP_POWER_9726",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9726",
    categories: ["Storm Child Attack", "ID_FMP_POWER_9726", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_PARAGON_PATH_487", "Storm Speaker", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Dragon Rage"] = new engine.RulesElement({
    name: "Storm Dragon Rage",
    type: "Power",
    id: "ID_FMP_POWER_9615",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9615",
    categories: ["Storm Dragon Rage", "ID_FMP_POWER_9615", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_476", "Building Thunder", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Gathering"] = new engine.RulesElement({
    name: "Storm Gathering",
    type: "Power",
    id: "ID_FMP_POWER_9616",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9616",
    categories: ["Storm Gathering", "ID_FMP_POWER_9616", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_476", "Building Thunder", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Storm of War"] = new engine.RulesElement({
    name: "Storm of War",
    type: "Power",
    id: "ID_FMP_POWER_9772",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9772",
    categories: ["Storm of War", "ID_FMP_POWER_9772", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Stormhawk Vigilance"] = new engine.RulesElement({
    name: "Stormhawk Vigilance",
    type: "Power",
    id: "ID_FMP_POWER_9748",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9748",
    categories: ["Stormhawk Vigilance", "ID_FMP_POWER_9748", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Stormhawk's Fury"] = new engine.RulesElement({
    name: "Stormhawk's Fury",
    type: "Power",
    id: "ID_FMP_POWER_9739",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9739",
    categories: ["Stormhawk's Fury", "ID_FMP_POWER_9739", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Stormhawk's Gambit"] = new engine.RulesElement({
    name: "Stormhawk's Gambit",
    type: "Power",
    id: "ID_FMP_POWER_9785",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9785",
    categories: ["Stormhawk's Gambit", "ID_FMP_POWER_9785", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Stormhowler's Strike"] = new engine.RulesElement({
    name: "Stormhowler's Strike",
    type: "Power",
    id: "ID_FMP_POWER_10041",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10041",
    categories: ["Stormhowler's Strike", "ID_FMP_POWER_10041", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Strength from Death"] = new engine.RulesElement({
    name: "Strength from Death",
    type: "Power",
    id: "ID_FMP_POWER_9901",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9901",
    categories: ["Strength from Death", "ID_FMP_POWER_9901", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Strength of Enduring Pain"] = new engine.RulesElement({
    name: "Strength of Enduring Pain",
    type: "Power",
    id: "ID_FMP_POWER_9592",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9592",
    categories: ["Strength of Enduring Pain", "ID_FMP_POWER_9592", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Strengthening Gift"] = new engine.RulesElement({
    name: "Strengthening Gift",
    type: "Power",
    id: "ID_FMP_POWER_9918",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9918",
    categories: ["Strengthening Gift", "ID_FMP_POWER_9918", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Strongskin Clash"] = new engine.RulesElement({
    name: "Strongskin Clash",
    type: "Power",
    id: "ID_FMP_POWER_5518",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5518",
    categories: ["Strongskin Clash", "ID_FMP_POWER_5518", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Bite"] = new engine.RulesElement({
    name: "Sudden Bite",
    type: "Power",
    id: "ID_FMP_POWER_9646",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9646",
    categories: ["Sudden Bite", "ID_FMP_POWER_9646", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Crocodile"] = new engine.RulesElement({
    name: "Summon Crocodile",
    type: "Power",
    id: "ID_FMP_POWER_5377",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5377",
    categories: ["Summon Crocodile", "ID_FMP_POWER_5377", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Elder Pack Wolf"] = new engine.RulesElement({
    name: "Summon Elder Pack Wolf",
    type: "Power",
    id: "ID_FMP_POWER_5386",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5386",
    categories: ["Summon Elder Pack Wolf", "ID_FMP_POWER_5386", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Fierce Boar"] = new engine.RulesElement({
    name: "Summon Fierce Boar",
    type: "Power",
    id: "ID_FMP_POWER_5366",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5366",
    categories: ["Summon Fierce Boar", "ID_FMP_POWER_5366", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Fire Beetle"] = new engine.RulesElement({
    name: "Summon Fire Beetle",
    type: "Power",
    id: "ID_FMP_POWER_5371",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5371",
    categories: ["Summon Fire Beetle", "ID_FMP_POWER_5371", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Giant Toad"] = new engine.RulesElement({
    name: "Summon Giant Toad",
    type: "Power",
    id: "ID_FMP_POWER_5367",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5367",
    categories: ["Summon Giant Toad", "ID_FMP_POWER_5367", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Great Eagle"] = new engine.RulesElement({
    name: "Summon Great Eagle",
    type: "Power",
    id: "ID_FMP_POWER_7414",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7414",
    categories: ["Summon Great Eagle", "ID_FMP_POWER_7414", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Guard Drake"] = new engine.RulesElement({
    name: "Summon Guard Drake",
    type: "Power",
    id: "ID_FMP_POWER_5373",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5373",
    categories: ["Summon Guard Drake", "ID_FMP_POWER_5373", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Guardian Briar"] = new engine.RulesElement({
    name: "Summon Guardian Briar",
    type: "Power",
    id: "ID_FMP_POWER_5381",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5381",
    categories: ["Summon Guardian Briar", "ID_FMP_POWER_5381", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Lightning Drake"] = new engine.RulesElement({
    name: "Summon Lightning Drake",
    type: "Power",
    id: "ID_FMP_POWER_5378",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5378",
    categories: ["Summon Lightning Drake", "ID_FMP_POWER_5378", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Pack Wolf"] = new engine.RulesElement({
    name: "Summon Pack Wolf",
    type: "Power",
    id: "ID_FMP_POWER_5369",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5369",
    categories: ["Summon Pack Wolf", "ID_FMP_POWER_5369", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Primal Slayer"] = new engine.RulesElement({
    name: "Summon Primal Slayer",
    type: "Power",
    id: "ID_FMP_POWER_9719",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9719",
    categories: ["Summon Primal Slayer", "ID_FMP_POWER_9719", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_485", "Primal Summoner", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Proud Bear"] = new engine.RulesElement({
    name: "Summon Proud Bear",
    type: "Power",
    id: "ID_FMP_POWER_5375",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5375",
    categories: ["Summon Proud Bear", "ID_FMP_POWER_5375", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Proud Mastodon"] = new engine.RulesElement({
    name: "Summon Proud Mastodon",
    type: "Power",
    id: "ID_FMP_POWER_5384",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5384",
    categories: ["Summon Proud Mastodon", "ID_FMP_POWER_5384", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Razorclaw Bat"] = new engine.RulesElement({
    name: "Summon Razorclaw Bat",
    type: "Power",
    id: "ID_FMP_POWER_5379",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5379",
    categories: ["Summon Razorclaw Bat", "ID_FMP_POWER_5379", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Razorclaw Behemoth"] = new engine.RulesElement({
    name: "Summon Razorclaw Behemoth",
    type: "Power",
    id: "ID_FMP_POWER_5383",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5383",
    categories: ["Summon Razorclaw Behemoth", "ID_FMP_POWER_5383", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Savage Tiger"] = new engine.RulesElement({
    name: "Summon Savage Tiger",
    type: "Power",
    id: "ID_FMP_POWER_5380",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5380",
    categories: ["Summon Savage Tiger", "ID_FMP_POWER_5380", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Shadow Ape"] = new engine.RulesElement({
    name: "Summon Shadow Ape",
    type: "Power",
    id: "ID_FMP_POWER_9655",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9655",
    categories: ["Summon Shadow Ape", "ID_FMP_POWER_9655", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Stalking Panther"] = new engine.RulesElement({
    name: "Summon Stalking Panther",
    type: "Power",
    id: "ID_FMP_POWER_5374",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5374",
    categories: ["Summon Stalking Panther", "ID_FMP_POWER_5374", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Storm Behemoth"] = new engine.RulesElement({
    name: "Summon Storm Behemoth",
    type: "Power",
    id: "ID_FMP_POWER_5385",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5385",
    categories: ["Summon Storm Behemoth", "ID_FMP_POWER_5385", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Swamp Behemoth"] = new engine.RulesElement({
    name: "Summon Swamp Behemoth",
    type: "Power",
    id: "ID_FMP_POWER_5382",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5382",
    categories: ["Summon Swamp Behemoth", "ID_FMP_POWER_5382", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Thunder Bison"] = new engine.RulesElement({
    name: "Summon Thunder Bison",
    type: "Power",
    id: "ID_FMP_POWER_5387",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5387",
    categories: ["Summon Thunder Bison", "ID_FMP_POWER_5387", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Sun Fire Guardian"] = new engine.RulesElement({
    name: "Sun Fire Guardian",
    type: "Power",
    id: "ID_FMP_POWER_9887",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9887",
    categories: ["Sun Fire Guardian", "ID_FMP_POWER_9887", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Sunder Spirit"] = new engine.RulesElement({
    name: "Sunder Spirit",
    type: "Power",
    id: "ID_FMP_POWER_9786",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9786",
    categories: ["Sunder Spirit", "ID_FMP_POWER_9786", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Swarm Dispersal"] = new engine.RulesElement({
    name: "Swarm Dispersal",
    type: "Power",
    id: "ID_FMP_POWER_4893",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4893",
    categories: ["Swarm Dispersal", "ID_FMP_POWER_4893", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Swarm Swap"] = new engine.RulesElement({
    name: "Swarm Swap",
    type: "Power",
    id: "ID_FMP_POWER_4894",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4894",
    categories: ["Swarm Swap", "ID_FMP_POWER_4894", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Swarming Locusts"] = new engine.RulesElement({
    name: "Swarming Locusts",
    type: "Power",
    id: "ID_FMP_POWER_9636",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9636",
    categories: ["Swarming Locusts", "ID_FMP_POWER_9636", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Swift Reincarnation"] = new engine.RulesElement({
    name: "Swift Reincarnation",
    type: "Power",
    id: "ID_FMP_POWER_9962",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9962",
    categories: ["Swift Reincarnation", "ID_FMP_POWER_9962", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_508", "Reincarnate Champion", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Tempest Assault"] = new engine.RulesElement({
    name: "Tempest Assault",
    type: "Power",
    id: "ID_FMP_POWER_9815",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9815",
    categories: ["Tempest Assault", "ID_FMP_POWER_9815", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Terrifying Howl"] = new engine.RulesElement({
    name: "Terrifying Howl",
    type: "Power",
    id: "ID_FMP_POWER_9607",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9607",
    categories: ["Terrifying Howl", "ID_FMP_POWER_9607", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["The Burning Dance"] = new engine.RulesElement({
    name: "The Burning Dance",
    type: "Power",
    id: "ID_FMP_POWER_9806",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9806",
    categories: ["The Burning Dance", "ID_FMP_POWER_9806", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_493", "Scarred Healer", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["This One is Mine!"] = new engine.RulesElement({
    name: "This One is Mine!",
    type: "Power",
    id: "ID_FMP_POWER_5229",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5229",
    categories: ["This One is Mine!", "ID_FMP_POWER_5229", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Thorn Ally"] = new engine.RulesElement({
    name: "Thorn Ally",
    type: "Power",
    id: "ID_FMP_POWER_5434",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5434",
    categories: ["Thorn Ally", "ID_FMP_POWER_5434", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Thorn Castle"] = new engine.RulesElement({
    name: "Thorn Castle",
    type: "Power",
    id: "ID_FMP_POWER_9653",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9653",
    categories: ["Thorn Castle", "ID_FMP_POWER_9653", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Thorn Spray"] = new engine.RulesElement({
    name: "Thorn Spray",
    type: "Power",
    id: "ID_FMP_POWER_9640",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9640",
    categories: ["Thorn Spray", "ID_FMP_POWER_9640", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Three Shifting Winds"] = new engine.RulesElement({
    name: "Three Shifting Winds",
    type: "Power",
    id: "ID_FMP_POWER_9722",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9722",
    categories: ["Three Shifting Winds", "ID_FMP_POWER_9722", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_486", "Spiral Wind's Ally", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Claw"] = new engine.RulesElement({
    name: "Thunder Claw",
    type: "Power",
    id: "ID_FMP_POWER_9704",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9704",
    categories: ["Thunder Claw", "ID_FMP_POWER_9704", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_50", "beast form", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Hooves Rage"] = new engine.RulesElement({
    name: "Thunder Hooves Rage",
    type: "Power",
    id: "ID_FMP_POWER_5234",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5234",
    categories: ["Thunder Hooves Rage", "ID_FMP_POWER_5234", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Thundering Howl"] = new engine.RulesElement({
    name: "Thundering Howl",
    type: "Power",
    id: "ID_FMP_POWER_9567",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9567",
    categories: ["Thundering Howl", "ID_FMP_POWER_9567", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderstorm Rage"] = new engine.RulesElement({
    name: "Thunderstorm Rage",
    type: "Power",
    id: "ID_FMP_POWER_4884",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4884",
    categories: ["Thunderstorm Rage", "ID_FMP_POWER_4884", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Tidal Rage"] = new engine.RulesElement({
    name: "Tidal Rage",
    type: "Power",
    id: "ID_FMP_POWER_4878",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4878",
    categories: ["Tidal Rage", "ID_FMP_POWER_4878", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Tiger's Claw Rage"] = new engine.RulesElement({
    name: "Tiger's Claw Rage",
    type: "Power",
    id: "ID_FMP_POWER_9571",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9571",
    categories: ["Tiger's Claw Rage", "ID_FMP_POWER_9571", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Tightened Control"] = new engine.RulesElement({
    name: "Tightened Control",
    type: "Power",
    id: "ID_FMP_POWER_9720",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9720",
    categories: ["Tightened Control", "ID_FMP_POWER_9720", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_485", "Primal Summoner", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Torrential Storm"] = new engine.RulesElement({
    name: "Torrential Storm",
    type: "Power",
    id: "ID_FMP_POWER_9687",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9687",
    categories: ["Torrential Storm", "ID_FMP_POWER_9687", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Tortoise Shell"] = new engine.RulesElement({
    name: "Tortoise Shell",
    type: "Power",
    id: "ID_FMP_POWER_9693",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9693",
    categories: ["Tortoise Shell", "ID_FMP_POWER_9693", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Totemic Scarification"] = new engine.RulesElement({
    name: "Totemic Scarification",
    type: "Power",
    id: "ID_FMP_POWER_4889",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4889",
    categories: ["Totemic Scarification", "ID_FMP_POWER_4889", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Treacherous Ice"] = new engine.RulesElement({
    name: "Treacherous Ice",
    type: "Power",
    id: "ID_FMP_POWER_9849",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9849",
    categories: ["Treacherous Ice", "ID_FMP_POWER_9849", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Tread the Earth"] = new engine.RulesElement({
    name: "Tread the Earth",
    type: "Power",
    id: "ID_FMP_POWER_9937",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9937",
    categories: ["Tread the Earth", "ID_FMP_POWER_9937", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_497", "Earth Shaker", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Tree Father's Bounty"] = new engine.RulesElement({
    name: "Tree Father's Bounty",
    type: "Power",
    id: "ID_FMP_POWER_9774",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9774",
    categories: ["Tree Father's Bounty", "ID_FMP_POWER_9774", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Tree Father's Ward"] = new engine.RulesElement({
    name: "Tree Father's Ward",
    type: "Power",
    id: "ID_FMP_POWER_9778",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9778",
    categories: ["Tree Father's Ward", "ID_FMP_POWER_9778", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Tree of Life"] = new engine.RulesElement({
    name: "Tree of Life",
    type: "Power",
    id: "ID_FMP_POWER_9694",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9694",
    categories: ["Tree of Life", "ID_FMP_POWER_9694", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Tremors"] = new engine.RulesElement({
    name: "Tremors",
    type: "Power",
    id: "ID_FMP_POWER_9689",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9689",
    categories: ["Tremors", "ID_FMP_POWER_9689", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Twilight's Veil"] = new engine.RulesElement({
    name: "Twilight's Veil",
    type: "Power",
    id: "ID_FMP_POWER_9769",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9769",
    categories: ["Twilight's Veil", "ID_FMP_POWER_9769", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Twinclaw Berserker Rage"] = new engine.RulesElement({
    name: "Twinclaw Berserker Rage",
    type: "Power",
    id: "ID_FMP_POWER_9628",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9628",
    categories: ["Twinclaw Berserker Rage", "ID_FMP_POWER_9628", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_480", "Twinclaw Slayer", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Twinclaw Rend"] = new engine.RulesElement({
    name: "Twinclaw Rend",
    type: "Power",
    id: "ID_FMP_POWER_9627",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9627",
    categories: ["Twinclaw Rend", "ID_FMP_POWER_9627", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_480", "Twinclaw Slayer", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Twin-Horned Bolt"] = new engine.RulesElement({
    name: "Twin-Horned Bolt",
    type: "Power",
    id: "ID_FMP_POWER_9672",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9672",
    categories: ["Twin-Horned Bolt", "ID_FMP_POWER_9672", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Tyrant's Rage"] = new engine.RulesElement({
    name: "Tyrant's Rage",
    type: "Power",
    id: "ID_FMP_POWER_9564",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9564",
    categories: ["Tyrant's Rage", "ID_FMP_POWER_9564", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Unexpected Clarity"] = new engine.RulesElement({
    name: "Unexpected Clarity",
    type: "Power",
    id: "ID_FMP_POWER_9600",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9600",
    categories: ["Unexpected Clarity", "ID_FMP_POWER_9600", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Vengeful Blood Spirits"] = new engine.RulesElement({
    name: "Vengeful Blood Spirits",
    type: "Power",
    id: "ID_FMP_POWER_9754",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9754",
    categories: ["Vengeful Blood Spirits", "ID_FMP_POWER_9754", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Verdant Bounty"] = new engine.RulesElement({
    name: "Verdant Bounty",
    type: "Power",
    id: "ID_FMP_POWER_9647",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9647",
    categories: ["Verdant Bounty", "ID_FMP_POWER_9647", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Vine Serpents"] = new engine.RulesElement({
    name: "Vine Serpents",
    type: "Power",
    id: "ID_FMP_POWER_9656",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9656",
    categories: ["Vine Serpents", "ID_FMP_POWER_9656", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Violent Bolt"] = new engine.RulesElement({
    name: "Violent Bolt",
    type: "Power",
    id: "ID_FMP_POWER_5574",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5574",
    categories: ["Violent Bolt", "ID_FMP_POWER_5574", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Voice of Battle"] = new engine.RulesElement({
    name: "Voice of Battle",
    type: "Power",
    id: "ID_FMP_POWER_9736",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9736",
    categories: ["Voice of Battle", "ID_FMP_POWER_9736", "ID_FMP_CLASS_FEATURE_2004", "World Speaker Spirit", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Volcanic Rage"] = new engine.RulesElement({
    name: "Volcanic Rage",
    type: "Power",
    id: "ID_FMP_POWER_9625",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9625",
    categories: ["Volcanic Rage", "ID_FMP_POWER_9625", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_479", "Stonefire Rager", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Voracious Predator Rage"] = new engine.RulesElement({
    name: "Voracious Predator Rage",
    type: "Power",
    id: "ID_FMP_POWER_4927",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4927",
    categories: ["Voracious Predator Rage", "ID_FMP_POWER_4927", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["War Cry"] = new engine.RulesElement({
    name: "War Cry",
    type: "Power",
    id: "ID_FMP_POWER_9556",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9556",
    categories: ["War Cry", "ID_FMP_POWER_9556"]
  });
  byID[te.id] = te;
  
  te = Power["Warden's Lure"] = new engine.RulesElement({
    name: "Warden's Lure",
    type: "Power",
    id: "ID_FMP_POWER_5522",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5522",
    categories: ["Warden's Lure", "ID_FMP_POWER_5522", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Warden's Refusal"] = new engine.RulesElement({
    name: "Warden's Refusal",
    type: "Power",
    id: "ID_FMP_POWER_9888",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9888",
    categories: ["Warden's Refusal", "ID_FMP_POWER_9888", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Warden's Sacrifice"] = new engine.RulesElement({
    name: "Warden's Sacrifice",
    type: "Power",
    id: "ID_FMP_POWER_5567",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5567",
    categories: ["Warden's Sacrifice", "ID_FMP_POWER_5567", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Warden's Tempest"] = new engine.RulesElement({
    name: "Warden's Tempest",
    type: "Power",
    id: "ID_FMP_POWER_9833",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9833",
    categories: ["Warden's Tempest", "ID_FMP_POWER_9833", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Warding Smash"] = new engine.RulesElement({
    name: "Warding Smash",
    type: "Power",
    id: "ID_FMP_POWER_5581",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5581",
    categories: ["Warding Smash", "ID_FMP_POWER_5581", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Warding Touch"] = new engine.RulesElement({
    name: "Warding Touch",
    type: "Power",
    id: "ID_FMP_POWER_5588",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5588",
    categories: ["Warding Touch", "ID_FMP_POWER_5588", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Warding Wind"] = new engine.RulesElement({
    name: "Warding Wind",
    type: "Power",
    id: "ID_FMP_POWER_9648",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9648",
    categories: ["Warding Wind", "ID_FMP_POWER_9648", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Warthane Ally"] = new engine.RulesElement({
    name: "Warthane Ally",
    type: "Power",
    id: "ID_FMP_POWER_5435",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5435",
    categories: ["Warthane Ally", "ID_FMP_POWER_5435", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Wellspring Strike"] = new engine.RulesElement({
    name: "Wellspring Strike",
    type: "Power",
    id: "ID_FMP_POWER_9846",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9846",
    categories: ["Wellspring Strike", "ID_FMP_POWER_9846", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Whirling Firestorm"] = new engine.RulesElement({
    name: "Whirling Firestorm",
    type: "Power",
    id: "ID_FMP_POWER_9708",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9708",
    categories: ["Whirling Firestorm", "ID_FMP_POWER_9708", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Whirling Frenzy"] = new engine.RulesElement({
    name: "Whirling Frenzy",
    type: "Power",
    id: "ID_FMP_POWER_5213",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5213",
    categories: ["Whirling Frenzy", "ID_FMP_POWER_5213", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Whirling Lunge"] = new engine.RulesElement({
    name: "Whirling Lunge",
    type: "Power",
    id: "ID_FMP_POWER_5249",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5249",
    categories: ["Whirling Lunge", "ID_FMP_POWER_5249"]
  });
  byID[te.id] = te;
  
  te = Power["Whirling Rend"] = new engine.RulesElement({
    name: "Whirling Rend",
    type: "Power",
    id: "ID_FMP_POWER_5211",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5211",
    categories: ["Whirling Rend", "ID_FMP_POWER_5211", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Whirling Skirmish"] = new engine.RulesElement({
    name: "Whirling Skirmish",
    type: "Power",
    id: "ID_FMP_POWER_5223",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5223",
    categories: ["Whirling Skirmish", "ID_FMP_POWER_5223", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Whirling Step"] = new engine.RulesElement({
    name: "Whirling Step",
    type: "Power",
    id: "ID_FMP_POWER_5215",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5215",
    categories: ["Whirling Step", "ID_FMP_POWER_5215", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Wilding Strength"] = new engine.RulesElement({
    name: "Wilding Strength",
    type: "Power",
    id: "ID_FMP_POWER_5527",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5527",
    categories: ["Wilding Strength", "ID_FMP_POWER_5527", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Wind of Blades"] = new engine.RulesElement({
    name: "Wind of Blades",
    type: "Power",
    id: "ID_FMP_POWER_9663",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9663",
    categories: ["Wind of Blades", "ID_FMP_POWER_9663", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Wind of Death and Mercy"] = new engine.RulesElement({
    name: "Wind of Death and Mercy",
    type: "Power",
    id: "ID_FMP_POWER_5455",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5455",
    categories: ["Wind of Death and Mercy", "ID_FMP_POWER_5455", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Wind of Pain and Succor"] = new engine.RulesElement({
    name: "Wind of Pain and Succor",
    type: "Power",
    id: "ID_FMP_POWER_5454",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5454",
    categories: ["Wind of Pain and Succor", "ID_FMP_POWER_5454", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Winds of the Scorching Desert"] = new engine.RulesElement({
    name: "Winds of the Scorching Desert",
    type: "Power",
    id: "ID_FMP_POWER_5555",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5555",
    categories: ["Winds of the Scorching Desert", "ID_FMP_POWER_5555", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Windy Assault"] = new engine.RulesElement({
    name: "Windy Assault",
    type: "Power",
    id: "ID_FMP_POWER_9893",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9893",
    categories: ["Windy Assault", "ID_FMP_POWER_9893", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Winged Spirit Strike"] = new engine.RulesElement({
    name: "Winged Spirit Strike",
    type: "Power",
    id: "ID_FMP_POWER_9802",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9802",
    categories: ["Winged Spirit Strike", "ID_FMP_POWER_9802", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_492", "Keen Eagle", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Winter's Claws"] = new engine.RulesElement({
    name: "Winter's Claws",
    type: "Power",
    id: "ID_FMP_POWER_9854",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9854",
    categories: ["Winter's Claws", "ID_FMP_POWER_9854", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["World Speaker's Command"] = new engine.RulesElement({
    name: "World Speaker's Command",
    type: "Power",
    id: "ID_FMP_POWER_9733",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9733",
    categories: ["World Speaker's Command", "ID_FMP_POWER_9733", "ID_FMP_FEAT_668", "Spirit Talker"]
  });
  byID[te.id] = te;
  
  te = Power["World's End Rage"] = new engine.RulesElement({
    name: "World's End Rage",
    type: "Power",
    id: "ID_FMP_POWER_9631",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9631",
    categories: ["World's End Rage", "ID_FMP_POWER_9631", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_481", "Winter Fury", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Wrath of the Storm Chaser"] = new engine.RulesElement({
    name: "Wrath of the Storm Chaser",
    type: "Power",
    id: "ID_FMP_POWER_9681",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9681",
    categories: ["Wrath of the Storm Chaser", "ID_FMP_POWER_9681", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Wrathful Mastery"] = new engine.RulesElement({
    name: "Wrathful Mastery",
    type: "Power",
    id: "ID_FMP_POWER_5592",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5592",
    categories: ["Wrathful Mastery", "ID_FMP_POWER_5592", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
