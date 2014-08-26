define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Accursed Shroud"] = new engine.RulesElement({
    name: "Accursed Shroud",
    type: "Power",
    id: "ID_FMP_POWER_1693",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1693",
    categories: ["Accursed Shroud", "ID_FMP_POWER_1693", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_39", "Doomsayer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Acid Arrow"] = new engine.RulesElement({
    name: "Acid Arrow",
    type: "Power",
    id: "ID_FMP_POWER_464",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=464",
    categories: ["Acid Arrow", "ID_FMP_POWER_464", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Acid Storm"] = new engine.RulesElement({
    name: "Acid Storm",
    type: "Power",
    id: "ID_FMP_POWER_183",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=183",
    categories: ["Acid Storm", "ID_FMP_POWER_183", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Acid Wave"] = new engine.RulesElement({
    name: "Acid Wave",
    type: "Power",
    id: "ID_FMP_POWER_177",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=177",
    categories: ["Acid Wave", "ID_FMP_POWER_177", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Act of Desperation"] = new engine.RulesElement({
    name: "Act of Desperation",
    type: "Power",
    id: "ID_FMP_POWER_1160",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1160",
    categories: ["Act of Desperation", "ID_FMP_POWER_1160", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Act Together"] = new engine.RulesElement({
    name: "Act Together",
    type: "Power",
    id: "ID_FMP_POWER_1676",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1676",
    categories: ["Act Together", "ID_FMP_POWER_1676", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_49", "Pathfinder", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Adamantine Strike"] = new engine.RulesElement({
    name: "Adamantine Strike",
    type: "Power",
    id: "ID_FMP_POWER_1058",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1058",
    categories: ["Adamantine Strike", "ID_FMP_POWER_1058", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Aid the Injured"] = new engine.RulesElement({
    name: "Aid the Injured",
    type: "Power",
    id: "ID_FMP_POWER_1137",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1137",
    categories: ["Aid the Injured", "ID_FMP_POWER_1137", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["All Bets Are Off"] = new engine.RulesElement({
    name: "All Bets Are Off",
    type: "Power",
    id: "ID_FMP_POWER_2195",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2195",
    categories: ["All Bets Are Off", "ID_FMP_POWER_2195", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_99", "Pit Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Ambassador Imp"] = new engine.RulesElement({
    name: "Ambassador Imp",
    type: "Power",
    id: "ID_FMP_POWER_1296",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1296",
    categories: ["Ambassador Imp", "ID_FMP_POWER_1296", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Angel Ascendant"] = new engine.RulesElement({
    name: "Angel Ascendant",
    type: "Power",
    id: "ID_FMP_POWER_1591",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1591",
    categories: ["Angel Ascendant", "ID_FMP_POWER_1591", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_17", "Angelic Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Angel of the Eleven Winds"] = new engine.RulesElement({
    name: "Angel of the Eleven Winds",
    type: "Power",
    id: "ID_FMP_POWER_964",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=964",
    categories: ["Angel of the Eleven Winds", "ID_FMP_POWER_964", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Angelic Intercession"] = new engine.RulesElement({
    name: "Angelic Intercession",
    type: "Power",
    id: "ID_FMP_POWER_1276",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1276",
    categories: ["Angelic Intercession", "ID_FMP_POWER_1276", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Angelic Presence"] = new engine.RulesElement({
    name: "Angelic Presence",
    type: "Power",
    id: "ID_FMP_POWER_2256",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2256",
    categories: ["Angelic Presence", "ID_FMP_POWER_2256", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_17", "Angelic Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Angelic Rescue"] = new engine.RulesElement({
    name: "Angelic Rescue",
    type: "Power",
    id: "ID_FMP_POWER_663",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=663",
    categories: ["Angelic Rescue", "ID_FMP_POWER_663", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Anvil of Doom"] = new engine.RulesElement({
    name: "Anvil of Doom",
    type: "Power",
    id: "ID_FMP_POWER_1021",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1021",
    categories: ["Anvil of Doom", "ID_FMP_POWER_1021", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Arc of the Righteous"] = new engine.RulesElement({
    name: "Arc of the Righteous",
    type: "Power",
    id: "ID_FMP_POWER_901",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=901",
    categories: ["Arc of the Righteous", "ID_FMP_POWER_901", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Gate"] = new engine.RulesElement({
    name: "Arcane Gate",
    type: "Power",
    id: "ID_FMP_POWER_1543",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1543",
    categories: ["Arcane Gate", "ID_FMP_POWER_1543", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Rejuvenation"] = new engine.RulesElement({
    name: "Arcane Rejuvenation",
    type: "Power",
    id: "ID_FMP_POWER_1614",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1614",
    categories: ["Arcane Rejuvenation", "ID_FMP_POWER_1614", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_29", "Battle Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Archer's Glory"] = new engine.RulesElement({
    name: "Archer's Glory",
    type: "Power",
    id: "ID_FMP_POWER_1682",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1682",
    categories: ["Archer's Glory", "ID_FMP_POWER_1682", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_52", "Battlefield Archer", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Arcing Smite"] = new engine.RulesElement({
    name: "Arcing Smite",
    type: "Power",
    id: "ID_FMP_POWER_1243",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1243",
    categories: ["Arcing Smite", "ID_FMP_POWER_1243", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Armor of Agathys"] = new engine.RulesElement({
    name: "Armor of Agathys",
    type: "Power",
    id: "ID_FMP_POWER_222",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=222",
    categories: ["Armor of Agathys", "ID_FMP_POWER_222", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Armor of Bahamut"] = new engine.RulesElement({
    name: "Armor of Bahamut",
    type: "Power",
    id: "ID_FMP_POWER_2161",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2161",
    categories: ["Armor of Bahamut", "ID_FMP_POWER_2161", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Armor Splinter"] = new engine.RulesElement({
    name: "Armor Splinter",
    type: "Power",
    id: "ID_FMP_POWER_1532",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1532",
    categories: ["Armor Splinter", "ID_FMP_POWER_1532", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Armor-Piercing Thrust"] = new engine.RulesElement({
    name: "Armor-Piercing Thrust",
    type: "Power",
    id: "ID_FMP_POWER_634",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=634",
    categories: ["Armor-Piercing Thrust", "ID_FMP_POWER_634", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Arrow of Vengeance"] = new engine.RulesElement({
    name: "Arrow of Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_1537",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1537",
    categories: ["Arrow of Vengeance", "ID_FMP_POWER_1537", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Assassin's Point"] = new engine.RulesElement({
    name: "Assassin's Point",
    type: "Power",
    id: "ID_FMP_POWER_1497",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1497",
    categories: ["Assassin's Point", "ID_FMP_POWER_1497", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Blades of Death"] = new engine.RulesElement({
    name: "Astral Blades of Death",
    type: "Power",
    id: "ID_FMP_POWER_906",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=906",
    categories: ["Astral Blades of Death", "ID_FMP_POWER_906", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Defenders"] = new engine.RulesElement({
    name: "Astral Defenders",
    type: "Power",
    id: "ID_FMP_POWER_930",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=930",
    categories: ["Astral Defenders", "ID_FMP_POWER_930", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Refuge"] = new engine.RulesElement({
    name: "Astral Refuge",
    type: "Power",
    id: "ID_FMP_POWER_955",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=955",
    categories: ["Astral Refuge", "ID_FMP_POWER_955", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Shield"] = new engine.RulesElement({
    name: "Astral Shield",
    type: "Power",
    id: "ID_FMP_POWER_963",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=963",
    categories: ["Astral Shield", "ID_FMP_POWER_963", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Speech"] = new engine.RulesElement({
    name: "Astral Speech",
    type: "Power",
    id: "ID_FMP_POWER_1292",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1292",
    categories: ["Astral Speech", "ID_FMP_POWER_1292", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Storm"] = new engine.RulesElement({
    name: "Astral Storm",
    type: "Power",
    id: "ID_FMP_POWER_61",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=61",
    categories: ["Astral Storm", "ID_FMP_POWER_61", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Wave"] = new engine.RulesElement({
    name: "Astral Wave",
    type: "Power",
    id: "ID_FMP_POWER_1593",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1593",
    categories: ["Astral Wave", "ID_FMP_POWER_1593", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_17", "Angelic Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Whirlwind"] = new engine.RulesElement({
    name: "Astral Whirlwind",
    type: "Power",
    id: "ID_FMP_POWER_1637",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1637",
    categories: ["Astral Whirlwind", "ID_FMP_POWER_1637", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_43", "Astral Weapon", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Attacks on the Run"] = new engine.RulesElement({
    name: "Attacks on the Run",
    type: "Power",
    id: "ID_FMP_POWER_384",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=384",
    categories: ["Attacks on the Run", "ID_FMP_POWER_384", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Avandra's Rescue"] = new engine.RulesElement({
    name: "Avandra's Rescue",
    type: "Power",
    id: "ID_FMP_POWER_2162",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2162",
    categories: ["Avandra's Rescue", "ID_FMP_POWER_2162", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Avenging Flame"] = new engine.RulesElement({
    name: "Avenging Flame",
    type: "Power",
    id: "ID_FMP_POWER_1404",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1404",
    categories: ["Avenging Flame", "ID_FMP_POWER_1404", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Avernian Eruption"] = new engine.RulesElement({
    name: "Avernian Eruption",
    type: "Power",
    id: "ID_FMP_POWER_1343",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1343",
    categories: ["Avernian Eruption", "ID_FMP_POWER_1343", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Awe Strike"] = new engine.RulesElement({
    name: "Awe Strike",
    type: "Power",
    id: "ID_FMP_POWER_897",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=897",
    categories: ["Awe Strike", "ID_FMP_POWER_897", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Bad Idea, Friend"] = new engine.RulesElement({
    name: "Bad Idea, Friend",
    type: "Power",
    id: "ID_FMP_POWER_1652",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1652",
    categories: ["Bad Idea, Friend", "ID_FMP_POWER_1652", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_103", "Shadow Assassin", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Bait and Switch"] = new engine.RulesElement({
    name: "Bait and Switch",
    type: "Power",
    id: "ID_FMP_POWER_1480",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1480",
    categories: ["Bait and Switch", "ID_FMP_POWER_1480", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Banish to the Void"] = new engine.RulesElement({
    name: "Banish to the Void",
    type: "Power",
    id: "ID_FMP_POWER_1467",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1467",
    categories: ["Banish to the Void", "ID_FMP_POWER_1467", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Bastion of Defense"] = new engine.RulesElement({
    name: "Bastion of Defense",
    type: "Power",
    id: "ID_FMP_POWER_154",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=154",
    categories: ["Bastion of Defense", "ID_FMP_POWER_154", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Bastion of Health"] = new engine.RulesElement({
    name: "Bastion of Health",
    type: "Power",
    id: "ID_FMP_POWER_1410",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1410",
    categories: ["Bastion of Health", "ID_FMP_POWER_1410", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Awareness"] = new engine.RulesElement({
    name: "Battle Awareness",
    type: "Power",
    id: "ID_FMP_POWER_1440",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1440",
    categories: ["Battle Awareness", "ID_FMP_POWER_1440", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Cry"] = new engine.RulesElement({
    name: "Battle Cry",
    type: "Power",
    id: "ID_FMP_POWER_2779",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2779",
    categories: ["Battle Cry", "ID_FMP_POWER_2779", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_15", "Warpriest Paragon Path", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Favor"] = new engine.RulesElement({
    name: "Battle Favor",
    type: "Power",
    id: "ID_FMP_POWER_1583",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1583",
    categories: ["Battle Favor", "ID_FMP_POWER_1583", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_15", "Warpriest Paragon Path", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Battle On"] = new engine.RulesElement({
    name: "Battle On",
    type: "Power",
    id: "ID_FMP_POWER_1082",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1082",
    categories: ["Battle On", "ID_FMP_POWER_1082", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Pyres"] = new engine.RulesElement({
    name: "Battle Pyres",
    type: "Power",
    id: "ID_FMP_POWER_1584",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1584",
    categories: ["Battle Pyres", "ID_FMP_POWER_1584", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_15", "Warpriest Paragon Path", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Beacon of Hope"] = new engine.RulesElement({
    name: "Beacon of Hope",
    type: "Power",
    id: "ID_FMP_POWER_913",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=913",
    categories: ["Beacon of Hope", "ID_FMP_POWER_913", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Beast Stalker's Target"] = new engine.RulesElement({
    name: "Beast Stalker's Target",
    type: "Power",
    id: "ID_FMP_POWER_1686",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1686",
    categories: ["Beast Stalker's Target", "ID_FMP_POWER_1686", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_50", "Beast Stalker", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Beat Them Into the Ground"] = new engine.RulesElement({
    name: "Beat Them Into the Ground",
    type: "Power",
    id: "ID_FMP_POWER_600",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=600",
    categories: ["Beat Them Into the Ground", "ID_FMP_POWER_600", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Beckon Foe"] = new engine.RulesElement({
    name: "Beckon Foe",
    type: "Power",
    id: "ID_FMP_POWER_1244",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1244",
    categories: ["Beckon Foe", "ID_FMP_POWER_1244", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Beguiling Tongue"] = new engine.RulesElement({
    name: "Beguiling Tongue",
    type: "Power",
    id: "ID_FMP_POWER_1299",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1299",
    categories: ["Beguiling Tongue", "ID_FMP_POWER_1299", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Benign Transposition"] = new engine.RulesElement({
    name: "Benign Transposition",
    type: "Power",
    id: "ID_FMP_POWER_1300",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1300",
    categories: ["Benign Transposition", "ID_FMP_POWER_1300", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Bewitching Whispers"] = new engine.RulesElement({
    name: "Bewitching Whispers",
    type: "Power",
    id: "ID_FMP_POWER_1369",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1369",
    categories: ["Bewitching Whispers", "ID_FMP_POWER_1369", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Bigby's Grasping Hands"] = new engine.RulesElement({
    name: "Bigby's Grasping Hands",
    type: "Power",
    id: "ID_FMP_POWER_434",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=434",
    categories: ["Bigby's Grasping Hands", "ID_FMP_POWER_434", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Bigby's Icy Grasp"] = new engine.RulesElement({
    name: "Bigby's Icy Grasp",
    type: "Power",
    id: "ID_FMP_POWER_1195",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1195",
    categories: ["Bigby's Icy Grasp", "ID_FMP_POWER_1195", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Biting Assault"] = new engine.RulesElement({
    name: "Biting Assault",
    type: "Power",
    id: "ID_FMP_POWER_2201",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2201",
    categories: ["Biting Assault", "ID_FMP_POWER_2201", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Black Fire"] = new engine.RulesElement({
    name: "Black Fire",
    type: "Power",
    id: "ID_FMP_POWER_2278",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2278",
    categories: ["Black Fire", "ID_FMP_POWER_2278", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Blade Barrier"] = new engine.RulesElement({
    name: "Blade Barrier",
    type: "Power",
    id: "ID_FMP_POWER_60",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=60",
    categories: ["Blade Barrier", "ID_FMP_POWER_60", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Blade Cascade"] = new engine.RulesElement({
    name: "Blade Cascade",
    type: "Power",
    id: "ID_FMP_POWER_57",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=57",
    categories: ["Blade Cascade", "ID_FMP_POWER_57", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Blade Flurry"] = new engine.RulesElement({
    name: "Blade Flurry",
    type: "Power",
    id: "ID_FMP_POWER_1674",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1674",
    categories: ["Blade Flurry", "ID_FMP_POWER_1674", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_48", "Sword Marshal", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Blade Ward"] = new engine.RulesElement({
    name: "Blade Ward",
    type: "Power",
    id: "ID_FMP_POWER_1540",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1540",
    categories: ["Blade Ward", "ID_FMP_POWER_1540", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Blast of Cold"] = new engine.RulesElement({
    name: "Blast of Cold",
    type: "Power",
    id: "ID_FMP_POWER_175",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=175",
    categories: ["Blast of Cold", "ID_FMP_POWER_175", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Blazing Beacon"] = new engine.RulesElement({
    name: "Blazing Beacon",
    type: "Power",
    id: "ID_FMP_POWER_895",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=895",
    categories: ["Blazing Beacon", "ID_FMP_POWER_895", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Bleeding Wounds"] = new engine.RulesElement({
    name: "Bleeding Wounds",
    type: "Power",
    id: "ID_FMP_POWER_878",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=878",
    categories: ["Bleeding Wounds", "ID_FMP_POWER_878", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Bless"] = new engine.RulesElement({
    name: "Bless",
    type: "Power",
    id: "ID_FMP_POWER_947",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=947",
    categories: ["Bless", "ID_FMP_POWER_947", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Blinding Barrage"] = new engine.RulesElement({
    name: "Blinding Barrage",
    type: "Power",
    id: "ID_FMP_POWER_163",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=163",
    categories: ["Blinding Barrage", "ID_FMP_POWER_163", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Blinding Light"] = new engine.RulesElement({
    name: "Blinding Light",
    type: "Power",
    id: "ID_FMP_POWER_902",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=902",
    categories: ["Blinding Light", "ID_FMP_POWER_902", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Blinding Smite"] = new engine.RulesElement({
    name: "Blinding Smite",
    type: "Power",
    id: "ID_FMP_POWER_553",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=553",
    categories: ["Blinding Smite", "ID_FMP_POWER_553", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Blood Pulse"] = new engine.RulesElement({
    name: "Blood Pulse",
    type: "Power",
    id: "ID_FMP_POWER_1623",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1623",
    categories: ["Blood Pulse", "ID_FMP_POWER_1623", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_31", "Blood Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Bloodied Retribution"] = new engine.RulesElement({
    name: "Bloodied Retribution",
    type: "Power",
    id: "ID_FMP_POWER_1261",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1261",
    categories: ["Bloodied Retribution", "ID_FMP_POWER_1261", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Bloodstorm"] = new engine.RulesElement({
    name: "Bloodstorm",
    type: "Power",
    id: "ID_FMP_POWER_2213",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2213",
    categories: ["Bloodstorm", "ID_FMP_POWER_2213", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Bloody Path"] = new engine.RulesElement({
    name: "Bloody Path",
    type: "Power",
    id: "ID_FMP_POWER_1011",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1011",
    categories: ["Bloody Path", "ID_FMP_POWER_1011", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Blur"] = new engine.RulesElement({
    name: "Blur",
    type: "Power",
    id: "ID_FMP_POWER_513",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=513",
    categories: ["Blur", "ID_FMP_POWER_513", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Bolstering Blow"] = new engine.RulesElement({
    name: "Bolstering Blow",
    type: "Power",
    id: "ID_FMP_POWER_1558",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1558",
    categories: ["Bolstering Blow", "ID_FMP_POWER_1558", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Bolstering Strike"] = new engine.RulesElement({
    name: "Bolstering Strike",
    type: "Power",
    id: "ID_FMP_POWER_833",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=833",
    categories: ["Bolstering Strike", "ID_FMP_POWER_833", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Bolt of Genius"] = new engine.RulesElement({
    name: "Bolt of Genius",
    type: "Power",
    id: "ID_FMP_POWER_1667",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1667",
    categories: ["Bolt of Genius", "ID_FMP_POWER_1667", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_46", "Battle Captain", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Boundless Endurance"] = new engine.RulesElement({
    name: "Boundless Endurance",
    type: "Power",
    id: "ID_FMP_POWER_1522",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1522",
    categories: ["Boundless Endurance", "ID_FMP_POWER_1522", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Brand of Judgment"] = new engine.RulesElement({
    name: "Brand of Judgment",
    type: "Power",
    id: "ID_FMP_POWER_1745",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1745",
    categories: ["Brand of Judgment", "ID_FMP_POWER_1745", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Break the Spirit"] = new engine.RulesElement({
    name: "Break the Spirit",
    type: "Power",
    id: "ID_FMP_POWER_899",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=899",
    categories: ["Break the Spirit", "ID_FMP_POWER_899", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Break the Tempo"] = new engine.RulesElement({
    name: "Break the Tempo",
    type: "Power",
    id: "ID_FMP_POWER_1576",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1576",
    categories: ["Break the Tempo", "ID_FMP_POWER_1576", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Break the Wall"] = new engine.RulesElement({
    name: "Break the Wall",
    type: "Power",
    id: "ID_FMP_POWER_1270",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1270",
    categories: ["Break the Wall", "ID_FMP_POWER_1270", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Break Their Nerve"] = new engine.RulesElement({
    name: "Break Their Nerve",
    type: "Power",
    id: "ID_FMP_POWER_1670",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1670",
    categories: ["Break Their Nerve", "ID_FMP_POWER_1670", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_47", "Knight Commander", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Brute Strike"] = new engine.RulesElement({
    name: "Brute Strike",
    type: "Power",
    id: "ID_FMP_POWER_1524",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1524",
    categories: ["Brute Strike", "ID_FMP_POWER_1524", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Burning Hands"] = new engine.RulesElement({
    name: "Burning Hands",
    type: "Power",
    id: "ID_FMP_POWER_159",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=159",
    categories: ["Burning Hands", "ID_FMP_POWER_159", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_69", "Evocation", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Cage of Chains"] = new engine.RulesElement({
    name: "Cage of Chains",
    type: "Power",
    id: "ID_FMP_POWER_1062",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1062",
    categories: ["Cage of Chains", "ID_FMP_POWER_1062", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Careful Attack"] = new engine.RulesElement({
    name: "Careful Attack",
    type: "Power",
    id: "ID_FMP_POWER_917",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=917",
    categories: ["Careful Attack", "ID_FMP_POWER_917", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Carving a Path of Light"] = new engine.RulesElement({
    name: "Carving a Path of Light",
    type: "Power",
    id: "ID_FMP_POWER_1636",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1636",
    categories: ["Carving a Path of Light", "ID_FMP_POWER_1636", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_43", "Astral Weapon", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Cascade of Light"] = new engine.RulesElement({
    name: "Cascade of Light",
    type: "Power",
    id: "ID_FMP_POWER_914",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=914",
    categories: ["Cascade of Light", "ID_FMP_POWER_914", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Cat Burglar's Gambit"] = new engine.RulesElement({
    name: "Cat Burglar's Gambit",
    type: "Power",
    id: "ID_FMP_POWER_1656",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1656",
    categories: ["Cat Burglar's Gambit", "ID_FMP_POWER_1656", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_36", "Cat Burglar", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Cause Fear"] = new engine.RulesElement({
    name: "Cause Fear",
    type: "Power",
    id: "ID_FMP_POWER_890",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=890",
    categories: ["Cause Fear", "ID_FMP_POWER_890", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Certain Freedom"] = new engine.RulesElement({
    name: "Certain Freedom",
    type: "Power",
    id: "ID_FMP_POWER_1515",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1515",
    categories: ["Certain Freedom", "ID_FMP_POWER_1515", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Certain Justice"] = new engine.RulesElement({
    name: "Certain Justice",
    type: "Power",
    id: "ID_FMP_POWER_1639",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1639",
    categories: ["Certain Justice", "ID_FMP_POWER_1639", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_44", "Champion of Order", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Chain Lightning"] = new engine.RulesElement({
    name: "Chain Lightning",
    type: "Power",
    id: "ID_FMP_POWER_466",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=466",
    categories: ["Chain Lightning", "ID_FMP_POWER_466", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_69", "Evocation", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Chains of Sorrow"] = new engine.RulesElement({
    name: "Chains of Sorrow",
    type: "Power",
    id: "ID_FMP_POWER_1022",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1022",
    categories: ["Chains of Sorrow", "ID_FMP_POWER_1022", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Challenge the Unjust"] = new engine.RulesElement({
    name: "Challenge the Unjust",
    type: "Power",
    id: "ID_FMP_POWER_1634",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1634",
    categories: ["Challenge the Unjust", "ID_FMP_POWER_1634", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_42", "Justiciar", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Chameleon"] = new engine.RulesElement({
    name: "Chameleon",
    type: "Power",
    id: "ID_FMP_POWER_1506",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1506",
    categories: ["Chameleon", "ID_FMP_POWER_1506", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Cheetah's Rake"] = new engine.RulesElement({
    name: "Cheetah's Rake",
    type: "Power",
    id: "ID_FMP_POWER_1534",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1534",
    categories: ["Cheetah's Rake", "ID_FMP_POWER_1534", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Chill Strike"] = new engine.RulesElement({
    name: "Chill Strike",
    type: "Power",
    id: "ID_FMP_POWER_1171",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1171",
    categories: ["Chill Strike", "ID_FMP_POWER_1171", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Chimera Battlestrike"] = new engine.RulesElement({
    name: "Chimera Battlestrike",
    type: "Power",
    id: "ID_FMP_POWER_1563",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1563",
    categories: ["Chimera Battlestrike", "ID_FMP_POWER_1563", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Clarion Call of the Astral Sea"] = new engine.RulesElement({
    name: "Clarion Call of the Astral Sea",
    type: "Power",
    id: "ID_FMP_POWER_968",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=968",
    categories: ["Clarion Call of the Astral Sea", "ID_FMP_POWER_968", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Claws of the Griffon"] = new engine.RulesElement({
    name: "Claws of the Griffon",
    type: "Power",
    id: "ID_FMP_POWER_848",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=848",
    categories: ["Claws of the Griffon", "ID_FMP_POWER_848", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Cleansing Burst"] = new engine.RulesElement({
    name: "Cleansing Burst",
    type: "Power",
    id: "ID_FMP_POWER_1281",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1281",
    categories: ["Cleansing Burst", "ID_FMP_POWER_1281", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Cleansing Spirit"] = new engine.RulesElement({
    name: "Cleansing Spirit",
    type: "Power",
    id: "ID_FMP_POWER_31",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=31",
    categories: ["Cleansing Spirit", "ID_FMP_POWER_31", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Clearing the Ground"] = new engine.RulesElement({
    name: "Clearing the Ground",
    type: "Power",
    id: "ID_FMP_POWER_1680",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1680",
    categories: ["Clearing the Ground", "ID_FMP_POWER_1680", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_51", "Stormwarden", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Cleave"] = new engine.RulesElement({
    name: "Cleave",
    type: "Power",
    id: "ID_FMP_POWER_992",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=992",
    categories: ["Cleave", "ID_FMP_POWER_992", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Clever Riposte"] = new engine.RulesElement({
    name: "Clever Riposte",
    type: "Power",
    id: "ID_FMP_POWER_543",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=543",
    categories: ["Clever Riposte", "ID_FMP_POWER_543", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Cloak of Peace"] = new engine.RulesElement({
    name: "Cloak of Peace",
    type: "Power",
    id: "ID_FMP_POWER_961",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=961",
    categories: ["Cloak of Peace", "ID_FMP_POWER_961", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Cloak of Shadow"] = new engine.RulesElement({
    name: "Cloak of Shadow",
    type: "Power",
    id: "ID_FMP_POWER_208",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=208",
    categories: ["Cloak of Shadow", "ID_FMP_POWER_208", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Cloak of Thorns"] = new engine.RulesElement({
    name: "Cloak of Thorns",
    type: "Power",
    id: "ID_FMP_POWER_1546",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1546",
    categories: ["Cloak of Thorns", "ID_FMP_POWER_1546", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Close Quarters"] = new engine.RulesElement({
    name: "Close Quarters",
    type: "Power",
    id: "ID_FMP_POWER_142",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=142",
    categories: ["Close Quarters", "ID_FMP_POWER_142", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Close Quarters Shot"] = new engine.RulesElement({
    name: "Close Quarters Shot",
    type: "Power",
    id: "ID_FMP_POWER_459",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=459",
    categories: ["Close Quarters Shot", "ID_FMP_POWER_459", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Closing Spell"] = new engine.RulesElement({
    name: "Closing Spell",
    type: "Power",
    id: "ID_FMP_POWER_1615",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1615",
    categories: ["Closing Spell", "ID_FMP_POWER_1615", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_29", "Battle Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud Chariot"] = new engine.RulesElement({
    name: "Cloud Chariot",
    type: "Power",
    id: "ID_FMP_POWER_966",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=966",
    categories: ["Cloud Chariot", "ID_FMP_POWER_966", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud Jump"] = new engine.RulesElement({
    name: "Cloud Jump",
    type: "Power",
    id: "ID_FMP_POWER_269",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=269",
    categories: ["Cloud Jump", "ID_FMP_POWER_269", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud of Daggers"] = new engine.RulesElement({
    name: "Cloud of Daggers",
    type: "Power",
    id: "ID_FMP_POWER_1164",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1164",
    categories: ["Cloud of Daggers", "ID_FMP_POWER_1164", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud of Steel"] = new engine.RulesElement({
    name: "Cloud of Steel",
    type: "Power",
    id: "ID_FMP_POWER_1481",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1481",
    categories: ["Cloud of Steel", "ID_FMP_POWER_1481", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Cloudkill"] = new engine.RulesElement({
    name: "Cloudkill",
    type: "Power",
    id: "ID_FMP_POWER_190",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=190",
    categories: ["Cloudkill", "ID_FMP_POWER_190", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Cold Steel Hurricane"] = new engine.RulesElement({
    name: "Cold Steel Hurricane",
    type: "Power",
    id: "ID_FMP_POWER_1681",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1681",
    categories: ["Cold Steel Hurricane", "ID_FMP_POWER_1681", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_51", "Stormwarden", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Coldfire Vortex"] = new engine.RulesElement({
    name: "Coldfire Vortex",
    type: "Power",
    id: "ID_FMP_POWER_1463",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1463",
    categories: ["Coldfire Vortex", "ID_FMP_POWER_1463", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Color Spray"] = new engine.RulesElement({
    name: "Color Spray",
    type: "Power",
    id: "ID_FMP_POWER_173",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=173",
    categories: ["Color Spray", "ID_FMP_POWER_173", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Combat Challenge"] = new engine.RulesElement({
    name: "Combat Challenge",
    type: "Power",
    id: "ID_FMP_POWER_7419",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7419",
    categories: ["Combat Challenge", "ID_FMP_POWER_7419", "ID_FMP_CLASS_FEATURE_54", "ID_FMP_CLASS_FEATURE_1528", "Combat Challenge (Hybrid)", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Combined Fire"] = new engine.RulesElement({
    name: "Combined Fire",
    type: "Power",
    id: "ID_FMP_POWER_1683",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1683",
    categories: ["Combined Fire", "ID_FMP_POWER_1683", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_52", "Battlefield Archer", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Combust"] = new engine.RulesElement({
    name: "Combust",
    type: "Power",
    id: "ID_FMP_POWER_184",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=184",
    categories: ["Combust", "ID_FMP_POWER_184", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Come and Get It"] = new engine.RulesElement({
    name: "Come and Get It",
    type: "Power",
    id: "ID_FMP_POWER_2177",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2177",
    categories: ["Come and Get It", "ID_FMP_POWER_2177", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Comeback Strike"] = new engine.RulesElement({
    name: "Comeback Strike",
    type: "Power",
    id: "ID_FMP_POWER_1431",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1431",
    categories: ["Comeback Strike", "ID_FMP_POWER_1431", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Command"] = new engine.RulesElement({
    name: "Command",
    type: "Power",
    id: "ID_FMP_POWER_490",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=490",
    categories: ["Command", "ID_FMP_POWER_490", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Commander's Strike"] = new engine.RulesElement({
    name: "Commander's Strike",
    type: "Power",
    id: "ID_FMP_POWER_1061",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1061",
    categories: ["Commander's Strike", "ID_FMP_POWER_1061", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Confounding Arrows"] = new engine.RulesElement({
    name: "Confounding Arrows",
    type: "Power",
    id: "ID_FMP_POWER_875",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=875",
    categories: ["Confounding Arrows", "ID_FMP_POWER_875", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Confusion"] = new engine.RulesElement({
    name: "Confusion",
    type: "Power",
    id: "ID_FMP_POWER_186",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=186",
    categories: ["Confusion", "ID_FMP_POWER_186", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Consecrated Ground"] = new engine.RulesElement({
    name: "Consecrated Ground",
    type: "Power",
    id: "ID_FMP_POWER_928",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=928",
    categories: ["Consecrated Ground", "ID_FMP_POWER_928", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Control the Field"] = new engine.RulesElement({
    name: "Control the Field",
    type: "Power",
    id: "ID_FMP_POWER_1672",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1672",
    categories: ["Control the Field", "ID_FMP_POWER_1672", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_47", "Knight Commander", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Corellon's Blade"] = new engine.RulesElement({
    name: "Corellon's Blade",
    type: "Power",
    id: "ID_FMP_POWER_1622",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1622",
    categories: ["Corellon's Blade", "ID_FMP_POWER_1622", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_32", "Wizard of the Spiral Tower", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Corellon's Grace"] = new engine.RulesElement({
    name: "Corellon's Grace",
    type: "Power",
    id: "ID_FMP_POWER_1953",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1953",
    categories: ["Corellon's Grace", "ID_FMP_POWER_1953", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Corona of Blinding Radiance"] = new engine.RulesElement({
    name: "Corona of Blinding Radiance",
    type: "Power",
    id: "ID_FMP_POWER_1263",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1263",
    categories: ["Corona of Blinding Radiance", "ID_FMP_POWER_1263", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Covering Attack"] = new engine.RulesElement({
    name: "Covering Attack",
    type: "Power",
    id: "ID_FMP_POWER_1427",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1427",
    categories: ["Covering Attack", "ID_FMP_POWER_1427", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Crack the Shell"] = new engine.RulesElement({
    name: "Crack the Shell",
    type: "Power",
    id: "ID_FMP_POWER_1433",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1433",
    categories: ["Crack the Shell", "ID_FMP_POWER_1433", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Crescendo of Violence"] = new engine.RulesElement({
    name: "Crescendo of Violence",
    type: "Power",
    id: "ID_FMP_POWER_1310",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1310",
    categories: ["Crescendo of Violence", "ID_FMP_POWER_1310", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Crescendo Sword"] = new engine.RulesElement({
    name: "Crescendo Sword",
    type: "Power",
    id: "ID_FMP_POWER_1602",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1602",
    categories: ["Crescendo Sword", "ID_FMP_POWER_1602", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_26", "Swordmaster", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Crimson Edge"] = new engine.RulesElement({
    name: "Crimson Edge",
    type: "Power",
    id: "ID_FMP_POWER_1426",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1426",
    categories: ["Crimson Edge", "ID_FMP_POWER_1426", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Critical Opportunity"] = new engine.RulesElement({
    name: "Critical Opportunity",
    type: "Power",
    id: "ID_FMP_POWER_1692",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1692",
    categories: ["Critical Opportunity", "ID_FMP_POWER_1692", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_34", "Daggermaster", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Crown of Glory"] = new engine.RulesElement({
    name: "Crown of Glory",
    type: "Power",
    id: "ID_FMP_POWER_1264",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1264",
    categories: ["Crown of Glory", "ID_FMP_POWER_1264", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Crown of Madness"] = new engine.RulesElement({
    name: "Crown of Madness",
    type: "Power",
    id: "ID_FMP_POWER_1320",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1320",
    categories: ["Crown of Madness", "ID_FMP_POWER_1320", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Crucial Advice"] = new engine.RulesElement({
    name: "Crucial Advice",
    type: "Power",
    id: "ID_FMP_POWER_922",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=922",
    categories: ["Crucial Advice", "ID_FMP_POWER_922", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Cruel Cage of Steel"] = new engine.RulesElement({
    name: "Cruel Cage of Steel",
    type: "Power",
    id: "ID_FMP_POWER_285",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=285",
    categories: ["Cruel Cage of Steel", "ID_FMP_POWER_285", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Cruel Reaper"] = new engine.RulesElement({
    name: "Cruel Reaper",
    type: "Power",
    id: "ID_FMP_POWER_1057",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1057",
    categories: ["Cruel Reaper", "ID_FMP_POWER_1057", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Crusader's Boon"] = new engine.RulesElement({
    name: "Crusader's Boon",
    type: "Power",
    id: "ID_FMP_POWER_1247",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1247",
    categories: ["Crusader's Boon", "ID_FMP_POWER_1247", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Crushing Blow"] = new engine.RulesElement({
    name: "Crushing Blow",
    type: "Power",
    id: "ID_FMP_POWER_622",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=622",
    categories: ["Crushing Blow", "ID_FMP_POWER_622", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Crushing Titan's Fist"] = new engine.RulesElement({
    name: "Crushing Titan's Fist",
    type: "Power",
    id: "ID_FMP_POWER_187",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=187",
    categories: ["Crushing Titan's Fist", "ID_FMP_POWER_187", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Cunning Flurry"] = new engine.RulesElement({
    name: "Cunning Flurry",
    type: "Power",
    id: "ID_FMP_POWER_1669",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1669",
    categories: ["Cunning Flurry", "ID_FMP_POWER_1669", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_46", "Battle Captain", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Cure Light Wounds"] = new engine.RulesElement({
    name: "Cure Light Wounds",
    type: "Power",
    id: "ID_FMP_POWER_665",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=665",
    categories: ["Cure Light Wounds", "ID_FMP_POWER_665", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Cure Serious Wounds"] = new engine.RulesElement({
    name: "Cure Serious Wounds",
    type: "Power",
    id: "ID_FMP_POWER_652",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=652",
    categories: ["Cure Serious Wounds", "ID_FMP_POWER_652", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Curse of the Black Frost"] = new engine.RulesElement({
    name: "Curse of the Black Frost",
    type: "Power",
    id: "ID_FMP_POWER_1474",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1474",
    categories: ["Curse of the Black Frost", "ID_FMP_POWER_1474", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Curse of the Bloody Fangs"] = new engine.RulesElement({
    name: "Curse of the Bloody Fangs",
    type: "Power",
    id: "ID_FMP_POWER_1472",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1472",
    categories: ["Curse of the Bloody Fangs", "ID_FMP_POWER_1472", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Curse of the Dark Delirium"] = new engine.RulesElement({
    name: "Curse of the Dark Delirium",
    type: "Power",
    id: "ID_FMP_POWER_1476",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1476",
    categories: ["Curse of the Dark Delirium", "ID_FMP_POWER_1476", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Curse of the Dark Dream"] = new engine.RulesElement({
    name: "Curse of the Dark Dream",
    type: "Power",
    id: "ID_FMP_POWER_1471",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1471",
    categories: ["Curse of the Dark Dream", "ID_FMP_POWER_1471", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Curse of the Fey King"] = new engine.RulesElement({
    name: "Curse of the Fey King",
    type: "Power",
    id: "ID_FMP_POWER_1468",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1468",
    categories: ["Curse of the Fey King", "ID_FMP_POWER_1468", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Curse of the Golden Mist"] = new engine.RulesElement({
    name: "Curse of the Golden Mist",
    type: "Power",
    id: "ID_FMP_POWER_1475",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1475",
    categories: ["Curse of the Golden Mist", "ID_FMP_POWER_1475", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Curse of the Twin Princes"] = new engine.RulesElement({
    name: "Curse of the Twin Princes",
    type: "Power",
    id: "ID_FMP_POWER_1381",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1381",
    categories: ["Curse of the Twin Princes", "ID_FMP_POWER_1381", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Cut and Run"] = new engine.RulesElement({
    name: "Cut and Run",
    type: "Power",
    id: "ID_FMP_POWER_978",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=978",
    categories: ["Cut and Run", "ID_FMP_POWER_978", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Dance of Death"] = new engine.RulesElement({
    name: "Dance of Death",
    type: "Power",
    id: "ID_FMP_POWER_998",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=998",
    categories: ["Dance of Death", "ID_FMP_POWER_998", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Dance of Steel"] = new engine.RulesElement({
    name: "Dance of Steel",
    type: "Power",
    id: "ID_FMP_POWER_200",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=200",
    categories: ["Dance of Steel", "ID_FMP_POWER_200", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Dangerous Theft"] = new engine.RulesElement({
    name: "Dangerous Theft",
    type: "Power",
    id: "ID_FMP_POWER_1509",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1509",
    categories: ["Dangerous Theft", "ID_FMP_POWER_1509", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Dark One's Blessing"] = new engine.RulesElement({
    name: "Dark One's Blessing",
    type: "Power",
    id: "ID_FMP_POWER_2095",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2095",
    categories: ["Dark One's Blessing", "ID_FMP_POWER_2095", "ID_FMP_CLASS_FEATURE_773", "Infernal Pact", "ID_INTERNAL_CATEGORY_PACT_BOON", "Pact Boon", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_7", "Warlock", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Dark One's Own Luck"] = new engine.RulesElement({
    name: "Dark One's Own Luck",
    type: "Power",
    id: "ID_FMP_POWER_1326",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1326",
    categories: ["Dark One's Own Luck", "ID_FMP_POWER_1326", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Dark Transport"] = new engine.RulesElement({
    name: "Dark Transport",
    type: "Power",
    id: "ID_FMP_POWER_426",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=426",
    categories: ["Dark Transport", "ID_FMP_POWER_426", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Daunting Light"] = new engine.RulesElement({
    name: "Daunting Light",
    type: "Power",
    id: "ID_FMP_POWER_894",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=894",
    categories: ["Daunting Light", "ID_FMP_POWER_894", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Dazing Strike"] = new engine.RulesElement({
    name: "Dazing Strike",
    type: "Power",
    id: "ID_FMP_POWER_1382",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1382",
    categories: ["Dazing Strike", "ID_FMP_POWER_1382", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Dazzling Acrobatics"] = new engine.RulesElement({
    name: "Dazzling Acrobatics",
    type: "Power",
    id: "ID_FMP_POWER_2200",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2200",
    categories: ["Dazzling Acrobatics", "ID_FMP_POWER_2200", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Deadly Payback"] = new engine.RulesElement({
    name: "Deadly Payback",
    type: "Power",
    id: "ID_FMP_POWER_2196",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2196",
    categories: ["Deadly Payback", "ID_FMP_POWER_2196", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_99", "Pit Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Deadly Positioning"] = new engine.RulesElement({
    name: "Deadly Positioning",
    type: "Power",
    id: "ID_FMP_POWER_1032",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1032",
    categories: ["Deadly Positioning", "ID_FMP_POWER_1032", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Death Rend"] = new engine.RulesElement({
    name: "Death Rend",
    type: "Power",
    id: "ID_FMP_POWER_1547",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1547",
    categories: ["Death Rend", "ID_FMP_POWER_1547", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Death Ward"] = new engine.RulesElement({
    name: "Death Ward",
    type: "Power",
    id: "ID_FMP_POWER_1283",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1283",
    categories: ["Death Ward", "ID_FMP_POWER_1283", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Deep Cut"] = new engine.RulesElement({
    name: "Deep Cut",
    type: "Power",
    id: "ID_FMP_POWER_981",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=981",
    categories: ["Deep Cut", "ID_FMP_POWER_981", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Deep Dagger Wound"] = new engine.RulesElement({
    name: "Deep Dagger Wound",
    type: "Power",
    id: "ID_FMP_POWER_1651",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1651",
    categories: ["Deep Dagger Wound", "ID_FMP_POWER_1651", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_34", "Daggermaster", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Defensive Rally"] = new engine.RulesElement({
    name: "Defensive Rally",
    type: "Power",
    id: "ID_FMP_POWER_1112",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1112",
    categories: ["Defensive Rally", "ID_FMP_POWER_1112", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Defensive Training"] = new engine.RulesElement({
    name: "Defensive Training",
    type: "Power",
    id: "ID_FMP_POWER_1439",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1439",
    categories: ["Defensive Training", "ID_FMP_POWER_1439", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Deft Strike"] = new engine.RulesElement({
    name: "Deft Strike",
    type: "Power",
    id: "ID_FMP_POWER_971",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=971",
    categories: ["Deft Strike", "ID_FMP_POWER_971", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Defy Death"] = new engine.RulesElement({
    name: "Defy Death",
    type: "Power",
    id: "ID_FMP_POWER_1132",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1132",
    categories: ["Defy Death", "ID_FMP_POWER_1132", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Deific Vengeance"] = new engine.RulesElement({
    name: "Deific Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_2261",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2261",
    categories: ["Deific Vengeance", "ID_FMP_POWER_2261", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Delusions of Loyalty"] = new engine.RulesElement({
    name: "Delusions of Loyalty",
    type: "Power",
    id: "ID_FMP_POWER_1312",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1312",
    categories: ["Delusions of Loyalty", "ID_FMP_POWER_1312", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Denying Smite"] = new engine.RulesElement({
    name: "Denying Smite",
    type: "Power",
    id: "ID_FMP_POWER_1079",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1079",
    categories: ["Denying Smite", "ID_FMP_POWER_1079", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Destructive Salutation"] = new engine.RulesElement({
    name: "Destructive Salutation",
    type: "Power",
    id: "ID_FMP_POWER_1624",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1624",
    categories: ["Destructive Salutation", "ID_FMP_POWER_1624", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_31", "Blood Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Devastating Charge"] = new engine.RulesElement({
    name: "Devastating Charge",
    type: "Power",
    id: "ID_FMP_POWER_1565",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1565",
    categories: ["Devastating Charge", "ID_FMP_POWER_1565", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Devastation's Wake"] = new engine.RulesElement({
    name: "Devastation's Wake",
    type: "Power",
    id: "ID_FMP_POWER_1525",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1525",
    categories: ["Devastation's Wake", "ID_FMP_POWER_1525", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Diabolic Grasp"] = new engine.RulesElement({
    name: "Diabolic Grasp",
    type: "Power",
    id: "ID_FMP_POWER_1460",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1460",
    categories: ["Diabolic Grasp", "ID_FMP_POWER_1460", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Diamond Blade of Victory"] = new engine.RulesElement({
    name: "Diamond Blade of Victory",
    type: "Power",
    id: "ID_FMP_POWER_1675",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1675",
    categories: ["Diamond Blade of Victory", "ID_FMP_POWER_1675", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_48", "Sword Marshal", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Diamond Shield Defense"] = new engine.RulesElement({
    name: "Diamond Shield Defense",
    type: "Power",
    id: "ID_FMP_POWER_1519",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1519",
    categories: ["Diamond Shield Defense", "ID_FMP_POWER_1519", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Dimension Door"] = new engine.RulesElement({
    name: "Dimension Door",
    type: "Power",
    id: "ID_FMP_POWER_1208",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1208",
    categories: ["Dimension Door", "ID_FMP_POWER_1208", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Dire Radiance"] = new engine.RulesElement({
    name: "Dire Radiance",
    type: "Power",
    id: "ID_FMP_POWER_1457",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1457",
    categories: ["Dire Radiance", "ID_FMP_POWER_1457", "ID_FMP_CLASS_FEATURE_774", "Star Pact", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Dire Wolverine Strike"] = new engine.RulesElement({
    name: "Dire Wolverine Strike",
    type: "Power",
    id: "ID_FMP_POWER_1510",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1510",
    categories: ["Dire Wolverine Strike", "ID_FMP_POWER_1510", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Disguise Self"] = new engine.RulesElement({
    name: "Disguise Self",
    type: "Power",
    id: "ID_FMP_POWER_1209",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1209",
    categories: ["Disguise Self", "ID_FMP_POWER_1209", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Disintegrate"] = new engine.RulesElement({
    name: "Disintegrate",
    type: "Power",
    id: "ID_FMP_POWER_414",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=414",
    categories: ["Disintegrate", "ID_FMP_POWER_414", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_69", "Evocation", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Dispel Magic"] = new engine.RulesElement({
    name: "Dispel Magic",
    type: "Power",
    id: "ID_FMP_POWER_2273",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2273",
    categories: ["Dispel Magic", "ID_FMP_POWER_2273", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Displacement"] = new engine.RulesElement({
    name: "Displacement",
    type: "Power",
    id: "ID_FMP_POWER_483",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=483",
    categories: ["Displacement", "ID_FMP_POWER_483", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Disruptive Strike"] = new engine.RulesElement({
    name: "Disruptive Strike",
    type: "Power",
    id: "ID_FMP_POWER_1416",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1416",
    categories: ["Disruptive Strike", "ID_FMP_POWER_1416", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Distracting Wound"] = new engine.RulesElement({
    name: "Distracting Wound",
    type: "Power",
    id: "ID_FMP_POWER_2203",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2203",
    categories: ["Distracting Wound", "ID_FMP_POWER_2203", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_102", "Master Infiltrator", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Aid"] = new engine.RulesElement({
    name: "Divine Aid",
    type: "Power",
    id: "ID_FMP_POWER_482",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=482",
    categories: ["Divine Aid", "ID_FMP_POWER_482", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Armor"] = new engine.RulesElement({
    name: "Divine Armor",
    type: "Power",
    id: "ID_FMP_POWER_959",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=959",
    categories: ["Divine Armor", "ID_FMP_POWER_959", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Bodyguard"] = new engine.RulesElement({
    name: "Divine Bodyguard",
    type: "Power",
    id: "ID_FMP_POWER_356",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=356",
    categories: ["Divine Bodyguard", "ID_FMP_POWER_356", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Censure"] = new engine.RulesElement({
    name: "Divine Censure",
    type: "Power",
    id: "ID_FMP_POWER_905",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=905",
    categories: ["Divine Censure", "ID_FMP_POWER_905", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Challenge"] = new engine.RulesElement({
    name: "Divine Challenge",
    type: "Power",
    id: "ID_FMP_POWER_805",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=805",
    categories: ["Divine Challenge", "ID_FMP_POWER_805"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Fortune"] = new engine.RulesElement({
    name: "Divine Fortune",
    type: "Power",
    id: "ID_FMP_POWER_1589",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1589",
    categories: ["Divine Fortune", "ID_FMP_POWER_1589", "ID_FMP_CLASS_FEATURE_324", "Channel Divinity", "ID_FMP_CLASS_2", "Cleric"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Glow"] = new engine.RulesElement({
    name: "Divine Glow",
    type: "Power",
    id: "ID_FMP_POWER_893",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=893",
    categories: ["Divine Glow", "ID_FMP_POWER_893", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Mettle"] = new engine.RulesElement({
    name: "Divine Mettle",
    type: "Power",
    id: "ID_FMP_POWER_1746",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1746",
    categories: ["Divine Mettle", "ID_FMP_POWER_1746", "ID_FMP_CLASS_FEATURE_324", "Channel Divinity", "ID_FMP_CLASS_4", "Paladin"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Power"] = new engine.RulesElement({
    name: "Divine Power",
    type: "Power",
    id: "ID_FMP_POWER_929",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=929",
    categories: ["Divine Power", "ID_FMP_POWER_929", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Regeneration"] = new engine.RulesElement({
    name: "Divine Regeneration",
    type: "Power",
    id: "ID_FMP_POWER_2283",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2283",
    categories: ["Divine Regeneration", "ID_FMP_POWER_2283", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_54", "Demigod", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Reverence"] = new engine.RulesElement({
    name: "Divine Reverence",
    type: "Power",
    id: "ID_FMP_POWER_1445",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1445",
    categories: ["Divine Reverence", "ID_FMP_POWER_1445", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Strength"] = new engine.RulesElement({
    name: "Divine Strength",
    type: "Power",
    id: "ID_FMP_POWER_1747",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1747",
    categories: ["Divine Strength", "ID_FMP_POWER_1747", "ID_FMP_CLASS_FEATURE_324", "Channel Divinity", "ID_FMP_CLASS_4", "Paladin"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Vigor"] = new engine.RulesElement({
    name: "Divine Vigor",
    type: "Power",
    id: "ID_FMP_POWER_949",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=949",
    categories: ["Divine Vigor", "ID_FMP_POWER_949", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Dizzying Blow"] = new engine.RulesElement({
    name: "Dizzying Blow",
    type: "Power",
    id: "ID_FMP_POWER_1434",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1434",
    categories: ["Dizzying Blow", "ID_FMP_POWER_1434", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Doom of Delban"] = new engine.RulesElement({
    name: "Doom of Delban",
    type: "Power",
    id: "ID_FMP_POWER_1313",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1313",
    categories: ["Doom of Delban", "ID_FMP_POWER_1313", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon Breath"] = new engine.RulesElement({
    name: "Dragon Breath",
    type: "Power",
    id: "ID_FMP_POWER_1448",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1448",
    categories: ["Dragon Breath", "ID_FMP_POWER_1448", "ID_FMP_RACIAL_TRAIT_6", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return (element.hasCategory("Dragon Breath") && element.hasCategory("Ability Choice")); }
      });
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return (element.hasCategory("Dragon Breath") && element.hasCategory("Element Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Dragon Tail Strike"] = new engine.RulesElement({
    name: "Dragon Tail Strike",
    type: "Power",
    id: "ID_FMP_POWER_986",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=986",
    categories: ["Dragon Tail Strike", "ID_FMP_POWER_986", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon's Fangs"] = new engine.RulesElement({
    name: "Dragon's Fangs",
    type: "Power",
    id: "ID_FMP_POWER_1101",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1101",
    categories: ["Dragon's Fangs", "ID_FMP_POWER_1101", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Dread Star"] = new engine.RulesElement({
    name: "Dread Star",
    type: "Power",
    id: "ID_FMP_POWER_1319",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1319",
    categories: ["Dread Star", "ID_FMP_POWER_1319", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Dreadful Word"] = new engine.RulesElement({
    name: "Dreadful Word",
    type: "Power",
    id: "ID_FMP_POWER_1334",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1334",
    categories: ["Dreadful Word", "ID_FMP_POWER_1334", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Ease Suffering"] = new engine.RulesElement({
    name: "Ease Suffering",
    type: "Power",
    id: "ID_FMP_POWER_1147",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1147",
    categories: ["Ease Suffering", "ID_FMP_POWER_1147", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Easy Target"] = new engine.RulesElement({
    name: "Easy Target",
    type: "Power",
    id: "ID_FMP_POWER_1422",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1422",
    categories: ["Easy Target", "ID_FMP_POWER_1422", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Eldritch Blast"] = new engine.RulesElement({
    name: "Eldritch Blast",
    type: "Power",
    id: "ID_FMP_POWER_1333",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1333",
    categories: ["Eldritch Blast", "ID_FMP_POWER_1333", "ID_FMP_CLASS_FEATURE_606", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("Eldritch Blast") && element.hasCategory("Ability Choice")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Eldritch Rain"] = new engine.RulesElement({
    name: "Eldritch Rain",
    type: "Power",
    id: "ID_FMP_POWER_1400",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1400",
    categories: ["Eldritch Rain", "ID_FMP_POWER_1400", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Elemental Maw"] = new engine.RulesElement({
    name: "Elemental Maw",
    type: "Power",
    id: "ID_FMP_POWER_119",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=119",
    categories: ["Elemental Maw", "ID_FMP_POWER_119", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Elven Accuracy"] = new engine.RulesElement({
    name: "Elven Accuracy",
    type: "Power",
    id: "ID_FMP_POWER_1450",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1450",
    categories: ["Elven Accuracy", "ID_FMP_POWER_1450", "ID_FMP_RACIAL_TRAIT_359", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Enervating Smite"] = new engine.RulesElement({
    name: "Enervating Smite",
    type: "Power",
    id: "ID_FMP_POWER_1248",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1248",
    categories: ["Enervating Smite", "ID_FMP_POWER_1248", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Enfeebling Strike"] = new engine.RulesElement({
    name: "Enfeebling Strike",
    type: "Power",
    id: "ID_FMP_POWER_836",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=836",
    categories: ["Enfeebling Strike", "ID_FMP_POWER_836", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Entangling Smite"] = new engine.RulesElement({
    name: "Entangling Smite",
    type: "Power",
    id: "ID_FMP_POWER_1249",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1249",
    categories: ["Entangling Smite", "ID_FMP_POWER_1249", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Enthrall"] = new engine.RulesElement({
    name: "Enthrall",
    type: "Power",
    id: "ID_FMP_POWER_904",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=904",
    categories: ["Enthrall", "ID_FMP_POWER_904", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Entropic Ward"] = new engine.RulesElement({
    name: "Entropic Ward",
    type: "Power",
    id: "ID_FMP_POWER_1336",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1336",
    categories: ["Entropic Ward", "ID_FMP_POWER_1336", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Epic Trick"] = new engine.RulesElement({
    name: "Epic Trick",
    type: "Power",
    id: "ID_FMP_POWER_1753",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1753",
    categories: ["Epic Trick", "ID_FMP_POWER_1753", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_58", "Deadly Trickster", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Ethereal Stride"] = new engine.RulesElement({
    name: "Ethereal Stride",
    type: "Power",
    id: "ID_FMP_POWER_750",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=750",
    categories: ["Ethereal Stride", "ID_FMP_POWER_750", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Evade Ambush"] = new engine.RulesElement({
    name: "Evade Ambush",
    type: "Power",
    id: "ID_FMP_POWER_924",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=924",
    categories: ["Evade Ambush", "ID_FMP_POWER_924", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Evade the Blow"] = new engine.RulesElement({
    name: "Evade the Blow",
    type: "Power",
    id: "ID_FMP_POWER_542",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=542",
    categories: ["Evade the Blow", "ID_FMP_POWER_542", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Evard's Black Tentacles"] = new engine.RulesElement({
    name: "Evard's Black Tentacles",
    type: "Power",
    id: "ID_FMP_POWER_181",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=181",
    categories: ["Evard's Black Tentacles", "ID_FMP_POWER_181", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Evasive Strike"] = new engine.RulesElement({
    name: "Evasive Strike",
    type: "Power",
    id: "ID_FMP_POWER_1386",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1386",
    categories: ["Evasive Strike", "ID_FMP_POWER_1386", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Even Hand of Justice"] = new engine.RulesElement({
    name: "Even Hand of Justice",
    type: "Power",
    id: "ID_FMP_POWER_1271",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1271",
    categories: ["Even Hand of Justice", "ID_FMP_POWER_1271", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Exacting Strike"] = new engine.RulesElement({
    name: "Exacting Strike",
    type: "Power",
    id: "ID_FMP_POWER_2178",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2178",
    categories: ["Exacting Strike", "ID_FMP_POWER_2178", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Exalted Retribution"] = new engine.RulesElement({
    name: "Exalted Retribution",
    type: "Power",
    id: "ID_FMP_POWER_1266",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1266",
    categories: ["Exalted Retribution", "ID_FMP_POWER_1266", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Excruciating Shot"] = new engine.RulesElement({
    name: "Excruciating Shot",
    type: "Power",
    id: "ID_FMP_POWER_921",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=921",
    categories: ["Excruciating Shot", "ID_FMP_POWER_921", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Exorcism of Steel"] = new engine.RulesElement({
    name: "Exorcism of Steel",
    type: "Power",
    id: "ID_FMP_POWER_2179",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2179",
    categories: ["Exorcism of Steel", "ID_FMP_POWER_2179", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Expeditious Retreat"] = new engine.RulesElement({
    name: "Expeditious Retreat",
    type: "Power",
    id: "ID_FMP_POWER_1212",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1212",
    categories: ["Expeditious Retreat", "ID_FMP_POWER_1212", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Expeditious Stride"] = new engine.RulesElement({
    name: "Expeditious Stride",
    type: "Power",
    id: "ID_FMP_POWER_926",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=926",
    categories: ["Expeditious Stride", "ID_FMP_POWER_926", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Eye of the Warlock"] = new engine.RulesElement({
    name: "Eye of the Warlock",
    type: "Power",
    id: "ID_FMP_POWER_1478",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1478",
    categories: ["Eye of the Warlock", "ID_FMP_POWER_1478", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Eyebite"] = new engine.RulesElement({
    name: "Eyebite",
    type: "Power",
    id: "ID_FMP_POWER_1456",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1456",
    categories: ["Eyebite", "ID_FMP_POWER_1456", "ID_FMP_CLASS_FEATURE_772", "Fey Pact", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Fangs of Steel"] = new engine.RulesElement({
    name: "Fangs of Steel",
    type: "Power",
    id: "ID_FMP_POWER_1069",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1069",
    categories: ["Fangs of Steel", "ID_FMP_POWER_1069", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Fantastic Flourish"] = new engine.RulesElement({
    name: "Fantastic Flourish",
    type: "Power",
    id: "ID_FMP_POWER_1600",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1600",
    categories: ["Fantastic Flourish", "ID_FMP_POWER_1600", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_26", "Swordmaster", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Fate of the Void"] = new engine.RulesElement({
    name: "Fate of the Void",
    type: "Power",
    id: "ID_FMP_POWER_2263",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2263",
    categories: ["Fate of the Void", "ID_FMP_POWER_2263", "ID_FMP_CLASS_FEATURE_774", "Star Pact", "ID_INTERNAL_CATEGORY_PACT_BOON", "Pact Boon", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_7", "Warlock", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Fates Entwined"] = new engine.RulesElement({
    name: "Fates Entwined",
    type: "Power",
    id: "ID_FMP_POWER_1644",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1644",
    categories: ["Fates Entwined", "ID_FMP_POWER_1644", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_39", "Doomsayer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Fearsome Smite"] = new engine.RulesElement({
    name: "Fearsome Smite",
    type: "Power",
    id: "ID_FMP_POWER_684",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=684",
    categories: ["Fearsome Smite", "ID_FMP_POWER_684", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Feather Fall"] = new engine.RulesElement({
    name: "Feather Fall",
    type: "Power",
    id: "ID_FMP_POWER_1213",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1213",
    categories: ["Feather Fall", "ID_FMP_POWER_1213", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Feinting Flurry"] = new engine.RulesElement({
    name: "Feinting Flurry",
    type: "Power",
    id: "ID_FMP_POWER_198",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=198",
    categories: ["Feinting Flurry", "ID_FMP_POWER_198", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Fey Step"] = new engine.RulesElement({
    name: "Fey Step",
    type: "Power",
    id: "ID_FMP_POWER_1449",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1449",
    categories: ["Fey Step", "ID_FMP_POWER_1449", "ID_FMP_RACIAL_TRAIT_352", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Fey Switch"] = new engine.RulesElement({
    name: "Fey Switch",
    type: "Power",
    id: "ID_FMP_POWER_2264",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2264",
    categories: ["Fey Switch", "ID_FMP_POWER_2264", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Fiendish Resilience"] = new engine.RulesElement({
    name: "Fiendish Resilience",
    type: "Power",
    id: "ID_FMP_POWER_729",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=729",
    categories: ["Fiendish Resilience", "ID_FMP_POWER_729", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Fiery Bolt"] = new engine.RulesElement({
    name: "Fiery Bolt",
    type: "Power",
    id: "ID_FMP_POWER_1341",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1341",
    categories: ["Fiery Bolt", "ID_FMP_POWER_1341", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Final Blow"] = new engine.RulesElement({
    name: "Final Blow",
    type: "Power",
    id: "ID_FMP_POWER_1654",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1654",
    categories: ["Final Blow", "ID_FMP_POWER_1654", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_103", "Shadow Assassin", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Fire Burst"] = new engine.RulesElement({
    name: "Fire Burst",
    type: "Power",
    id: "ID_FMP_POWER_189",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=189",
    categories: ["Fire Burst", "ID_FMP_POWER_189", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Fire Shroud"] = new engine.RulesElement({
    name: "Fire Shroud",
    type: "Power",
    id: "ID_FMP_POWER_2272",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2272",
    categories: ["Fire Shroud", "ID_FMP_POWER_2272", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Fire Storm"] = new engine.RulesElement({
    name: "Fire Storm",
    type: "Power",
    id: "ID_FMP_POWER_937",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=937",
    categories: ["Fire Storm", "ID_FMP_POWER_937", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Fireball"] = new engine.RulesElement({
    name: "Fireball",
    type: "Power",
    id: "ID_FMP_POWER_1553",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1553",
    categories: ["Fireball", "ID_FMP_POWER_1553", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_69", "Evocation", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Fireswarm"] = new engine.RulesElement({
    name: "Fireswarm",
    type: "Power",
    id: "ID_FMP_POWER_1304",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1304",
    categories: ["Fireswarm", "ID_FMP_POWER_1304", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Flame Strike"] = new engine.RulesElement({
    name: "Flame Strike",
    type: "Power",
    id: "ID_FMP_POWER_180",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=180",
    categories: ["Flame Strike", "ID_FMP_POWER_180", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Flames of Phlegethos"] = new engine.RulesElement({
    name: "Flames of Phlegethos",
    type: "Power",
    id: "ID_FMP_POWER_1323",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1323",
    categories: ["Flames of Phlegethos", "ID_FMP_POWER_1323", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Flaming Sphere"] = new engine.RulesElement({
    name: "Flaming Sphere",
    type: "Power",
    id: "ID_FMP_POWER_1435",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1435",
    categories: ["Flaming Sphere", "ID_FMP_POWER_1435", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Fleeting Ghost"] = new engine.RulesElement({
    name: "Fleeting Ghost",
    type: "Power",
    id: "ID_FMP_POWER_1038",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1038",
    categories: ["Fleeting Ghost", "ID_FMP_POWER_1038", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Fly"] = new engine.RulesElement({
    name: "Fly",
    type: "Power",
    id: "ID_FMP_POWER_1215",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1215",
    categories: ["Fly", "ID_FMP_POWER_1215", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Flying Foe"] = new engine.RulesElement({
    name: "Flying Foe",
    type: "Power",
    id: "ID_FMP_POWER_1031",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1031",
    categories: ["Flying Foe", "ID_FMP_POWER_1031", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Foil the Lock"] = new engine.RulesElement({
    name: "Foil the Lock",
    type: "Power",
    id: "ID_FMP_POWER_1512",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1512",
    categories: ["Foil the Lock", "ID_FMP_POWER_1512", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Follow-Up Blow"] = new engine.RulesElement({
    name: "Follow-Up Blow",
    type: "Power",
    id: "ID_FMP_POWER_887",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=887",
    categories: ["Follow-Up Blow", "ID_FMP_POWER_887", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Fool's Opportunity"] = new engine.RulesElement({
    name: "Fool's Opportunity",
    type: "Power",
    id: "ID_FMP_POWER_130",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=130",
    categories: ["Fool's Opportunity", "ID_FMP_POWER_130", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Force Orb"] = new engine.RulesElement({
    name: "Force Orb",
    type: "Power",
    id: "ID_FMP_POWER_465",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=465",
    categories: ["Force Orb", "ID_FMP_POWER_465", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Force Retreat"] = new engine.RulesElement({
    name: "Force Retreat",
    type: "Power",
    id: "ID_FMP_POWER_1668",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1668",
    categories: ["Force Retreat", "ID_FMP_POWER_1668", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_46", "Battle Captain", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Force the Battle"] = new engine.RulesElement({
    name: "Force the Battle",
    type: "Power",
    id: "ID_FMP_POWER_1108",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1108",
    categories: ["Force the Battle", "ID_FMP_POWER_1108", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Force Volley"] = new engine.RulesElement({
    name: "Force Volley",
    type: "Power",
    id: "ID_FMP_POWER_1180",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1180",
    categories: ["Force Volley", "ID_FMP_POWER_1180", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Forcecage"] = new engine.RulesElement({
    name: "Forcecage",
    type: "Power",
    id: "ID_FMP_POWER_1187",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1187",
    categories: ["Forcecage", "ID_FMP_POWER_1187", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Forceful Retort"] = new engine.RulesElement({
    name: "Forceful Retort",
    type: "Power",
    id: "ID_FMP_POWER_1613",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1613",
    categories: ["Forceful Retort", "ID_FMP_POWER_1613", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_29", "Battle Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Forest Ghost"] = new engine.RulesElement({
    name: "Forest Ghost",
    type: "Power",
    id: "ID_FMP_POWER_713",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=713",
    categories: ["Forest Ghost", "ID_FMP_POWER_713", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Fortifying Smite"] = new engine.RulesElement({
    name: "Fortifying Smite",
    type: "Power",
    id: "ID_FMP_POWER_352",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=352",
    categories: ["Fortifying Smite", "ID_FMP_POWER_352", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Fox's Cunning"] = new engine.RulesElement({
    name: "Fox's Cunning",
    type: "Power",
    id: "ID_FMP_POWER_843",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=843",
    categories: ["Fox's Cunning", "ID_FMP_POWER_843", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Freezing Cloud"] = new engine.RulesElement({
    name: "Freezing Cloud",
    type: "Power",
    id: "ID_FMP_POWER_185",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=185",
    categories: ["Freezing Cloud", "ID_FMP_POWER_185", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Frenzied Skirmish"] = new engine.RulesElement({
    name: "Frenzied Skirmish",
    type: "Power",
    id: "ID_FMP_POWER_871",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=871",
    categories: ["Frenzied Skirmish", "ID_FMP_POWER_871", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Frigid Darkness"] = new engine.RulesElement({
    name: "Frigid Darkness",
    type: "Power",
    id: "ID_FMP_POWER_1401",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1401",
    categories: ["Frigid Darkness", "ID_FMP_POWER_1401", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Frontline Surge"] = new engine.RulesElement({
    name: "Frontline Surge",
    type: "Power",
    id: "ID_FMP_POWER_1597",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1597",
    categories: ["Frontline Surge", "ID_FMP_POWER_1597", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_28", "Iron Vanguard", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Frostburn"] = new engine.RulesElement({
    name: "Frostburn",
    type: "Power",
    id: "ID_FMP_POWER_150",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=150",
    categories: ["Frostburn", "ID_FMP_POWER_150", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Furious Smash"] = new engine.RulesElement({
    name: "Furious Smash",
    type: "Power",
    id: "ID_FMP_POWER_315",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=315",
    categories: ["Furious Smash", "ID_FMP_POWER_315", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Fury of the Sirocco"] = new engine.RulesElement({
    name: "Fury of the Sirocco",
    type: "Power",
    id: "ID_FMP_POWER_1557",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1557",
    categories: ["Fury of the Sirocco", "ID_FMP_POWER_1557", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Garrote Grip"] = new engine.RulesElement({
    name: "Garrote Grip",
    type: "Power",
    id: "ID_FMP_POWER_1013",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1013",
    categories: ["Garrote Grip", "ID_FMP_POWER_1013", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Get Over Here"] = new engine.RulesElement({
    name: "Get Over Here",
    type: "Power",
    id: "ID_FMP_POWER_1120",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1120",
    categories: ["Get Over Here", "ID_FMP_POWER_1120", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Ghost on the Wind"] = new engine.RulesElement({
    name: "Ghost on the Wind",
    type: "Power",
    id: "ID_FMP_POWER_1502",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1502",
    categories: ["Ghost on the Wind", "ID_FMP_POWER_1502", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Ghost Sound"] = new engine.RulesElement({
    name: "Ghost Sound",
    type: "Power",
    id: "ID_FMP_POWER_1217",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1217",
    categories: ["Ghost Sound", "ID_FMP_POWER_1217", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Giant's Wake"] = new engine.RulesElement({
    name: "Giant's Wake",
    type: "Power",
    id: "ID_FMP_POWER_1024",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1024",
    categories: ["Giant's Wake", "ID_FMP_POWER_1024", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Gift of Life"] = new engine.RulesElement({
    name: "Gift of Life",
    type: "Power",
    id: "ID_FMP_POWER_1286",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1286",
    categories: ["Gift of Life", "ID_FMP_POWER_1286", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Godstrike"] = new engine.RulesElement({
    name: "Godstrike",
    type: "Power",
    id: "ID_FMP_POWER_943",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=943",
    categories: ["Godstrike", "ID_FMP_POWER_943", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Good Omens"] = new engine.RulesElement({
    name: "Good Omens",
    type: "Power",
    id: "ID_FMP_POWER_1586",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1586",
    categories: ["Good Omens", "ID_FMP_POWER_1586", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_16", "Divine Oracle", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Great Dragon War Cry"] = new engine.RulesElement({
    name: "Great Dragon War Cry",
    type: "Power",
    id: "ID_FMP_POWER_1086",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1086",
    categories: ["Great Dragon War Cry", "ID_FMP_POWER_1086", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Great Leap"] = new engine.RulesElement({
    name: "Great Leap",
    type: "Power",
    id: "ID_FMP_POWER_1039",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1039",
    categories: ["Great Leap", "ID_FMP_POWER_1039", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Great Ram Arrow"] = new engine.RulesElement({
    name: "Great Ram Arrow",
    type: "Power",
    id: "ID_FMP_POWER_162",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=162",
    categories: ["Great Ram Arrow", "ID_FMP_POWER_162", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Greater Ice Storm"] = new engine.RulesElement({
    name: "Greater Ice Storm",
    type: "Power",
    id: "ID_FMP_POWER_2280",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2280",
    categories: ["Greater Ice Storm", "ID_FMP_POWER_2280", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Greater Invisibility"] = new engine.RulesElement({
    name: "Greater Invisibility",
    type: "Power",
    id: "ID_FMP_POWER_1550",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1550",
    categories: ["Greater Invisibility", "ID_FMP_POWER_1550", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Griffon's Wrath"] = new engine.RulesElement({
    name: "Griffon's Wrath",
    type: "Power",
    id: "ID_FMP_POWER_608",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=608",
    categories: ["Griffon's Wrath", "ID_FMP_POWER_608", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian of Faith"] = new engine.RulesElement({
    name: "Guardian of Faith",
    type: "Power",
    id: "ID_FMP_POWER_916",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=916",
    categories: ["Guardian of Faith", "ID_FMP_POWER_916", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Guarding Attack"] = new engine.RulesElement({
    name: "Guarding Attack",
    type: "Power",
    id: "ID_FMP_POWER_1064",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1064",
    categories: ["Guarding Attack", "ID_FMP_POWER_1064", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Guide the Charge"] = new engine.RulesElement({
    name: "Guide the Charge",
    type: "Power",
    id: "ID_FMP_POWER_1141",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1141",
    categories: ["Guide the Charge", "ID_FMP_POWER_1141", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Hack 'n' Slash"] = new engine.RulesElement({
    name: "Hack 'n' Slash",
    type: "Power",
    id: "ID_FMP_POWER_1067",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1067",
    categories: ["Hack 'n' Slash", "ID_FMP_POWER_1067", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Hail of Arrows"] = new engine.RulesElement({
    name: "Hail of Arrows",
    type: "Power",
    id: "ID_FMP_POWER_1551",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1551",
    categories: ["Hail of Arrows", "ID_FMP_POWER_1551", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Hail of Steel"] = new engine.RulesElement({
    name: "Hail of Steel",
    type: "Power",
    id: "ID_FMP_POWER_1559",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1559",
    categories: ["Hail of Steel", "ID_FMP_POWER_1559", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Hallowed Circle"] = new engine.RulesElement({
    name: "Hallowed Circle",
    type: "Power",
    id: "ID_FMP_POWER_1252",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1252",
    categories: ["Hallowed Circle", "ID_FMP_POWER_1252", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Hallowed Ground"] = new engine.RulesElement({
    name: "Hallowed Ground",
    type: "Power",
    id: "ID_FMP_POWER_2255",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2255",
    categories: ["Hallowed Ground", "ID_FMP_POWER_2255", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Hammer and Anvil"] = new engine.RulesElement({
    name: "Hammer and Anvil",
    type: "Power",
    id: "ID_FMP_POWER_1412",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1412",
    categories: ["Hammer and Anvil", "ID_FMP_POWER_1412", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Hammer of Fate"] = new engine.RulesElement({
    name: "Hammer of Fate",
    type: "Power",
    id: "ID_FMP_POWER_1587",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1587",
    categories: ["Hammer of Fate", "ID_FMP_POWER_1587", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_16", "Divine Oracle", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Hammer Shot"] = new engine.RulesElement({
    name: "Hammer Shot",
    type: "Power",
    id: "ID_FMP_POWER_1542",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1542",
    categories: ["Hammer Shot", "ID_FMP_POWER_1542", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Hamstring"] = new engine.RulesElement({
    name: "Hamstring",
    type: "Power",
    id: "ID_FMP_POWER_210",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=210",
    categories: ["Hamstring", "ID_FMP_POWER_210", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Hand of the Gods"] = new engine.RulesElement({
    name: "Hand of the Gods",
    type: "Power",
    id: "ID_FMP_POWER_2323",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2323",
    categories: ["Hand of the Gods", "ID_FMP_POWER_2323", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Harmony of Erathis"] = new engine.RulesElement({
    name: "Harmony of Erathis",
    type: "Power",
    id: "ID_FMP_POWER_2165",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2165",
    categories: ["Harmony of Erathis", "ID_FMP_POWER_2165", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Harrowstorm"] = new engine.RulesElement({
    name: "Harrowstorm",
    type: "Power",
    id: "ID_FMP_POWER_35",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=35",
    categories: ["Harrowstorm", "ID_FMP_POWER_35", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Harrying Assault"] = new engine.RulesElement({
    name: "Harrying Assault",
    type: "Power",
    id: "ID_FMP_POWER_1514",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1514",
    categories: ["Harrying Assault", "ID_FMP_POWER_1514", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Haunting Strike"] = new engine.RulesElement({
    name: "Haunting Strike",
    type: "Power",
    id: "ID_FMP_POWER_908",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=908",
    categories: ["Haunting Strike", "ID_FMP_POWER_908", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Hawk's Talon"] = new engine.RulesElement({
    name: "Hawk's Talon",
    type: "Power",
    id: "ID_FMP_POWER_1419",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1419",
    categories: ["Hawk's Talon", "ID_FMP_POWER_1419", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Healing Font"] = new engine.RulesElement({
    name: "Healing Font",
    type: "Power",
    id: "ID_FMP_POWER_1629",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1629",
    categories: ["Healing Font", "ID_FMP_POWER_1629", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_41", "Hospitaler", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Healing Strike"] = new engine.RulesElement({
    name: "Healing Strike",
    type: "Power",
    id: "ID_FMP_POWER_891",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=891",
    categories: ["Healing Strike", "ID_FMP_POWER_891", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Healing Sun"] = new engine.RulesElement({
    name: "Healing Sun",
    type: "Power",
    id: "ID_FMP_POWER_1595",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1595",
    categories: ["Healing Sun", "ID_FMP_POWER_1595", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_18", "Radiant Servant", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Healing Torch"] = new engine.RulesElement({
    name: "Healing Torch",
    type: "Power",
    id: "ID_FMP_POWER_907",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=907",
    categories: ["Healing Torch", "ID_FMP_POWER_907", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Healing Word"] = new engine.RulesElement({
    name: "Healing Word",
    type: "Power",
    id: "ID_FMP_POWER_1455",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1455",
    categories: ["Healing Word", "ID_FMP_POWER_1455", "ID_FMP_CLASS_FEATURE_64", "ID_FMP_CLASS_FEATURE_1527", "Healing Word (Hybrid)", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Heart of the Titan"] = new engine.RulesElement({
    name: "Heart of the Titan",
    type: "Power",
    id: "ID_FMP_POWER_1153",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1153",
    categories: ["Heart of the Titan", "ID_FMP_POWER_1153", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Hellfire Curse"] = new engine.RulesElement({
    name: "Hellfire Curse",
    type: "Power",
    id: "ID_FMP_POWER_1345",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1345",
    categories: ["Hellfire Curse", "ID_FMP_POWER_1345", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Hellish Rebuke"] = new engine.RulesElement({
    name: "Hellish Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_1458",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1458",
    categories: ["Hellish Rebuke", "ID_FMP_POWER_1458", "ID_FMP_CLASS_FEATURE_773", "Infernal Pact", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Here Waits Thy Doom"] = new engine.RulesElement({
    name: "Here Waits Thy Doom",
    type: "Power",
    id: "ID_FMP_POWER_1250",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1250",
    categories: ["Here Waits Thy Doom", "ID_FMP_POWER_1250", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Heroic Surge"] = new engine.RulesElement({
    name: "Heroic Surge",
    type: "Power",
    id: "ID_FMP_POWER_1151",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1151",
    categories: ["Heroic Surge", "ID_FMP_POWER_1151", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Hero's Defiance"] = new engine.RulesElement({
    name: "Hero's Defiance",
    type: "Power",
    id: "ID_FMP_POWER_1150",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1150",
    categories: ["Hero's Defiance", "ID_FMP_POWER_1150", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Hide from the Light"] = new engine.RulesElement({
    name: "Hide from the Light",
    type: "Power",
    id: "ID_FMP_POWER_551",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=551",
    categories: ["Hide from the Light", "ID_FMP_POWER_551", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Hide in Plain Sight"] = new engine.RulesElement({
    name: "Hide in Plain Sight",
    type: "Power",
    id: "ID_FMP_POWER_1050",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1050",
    categories: ["Hide in Plain Sight", "ID_FMP_POWER_1050", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Hit and Run"] = new engine.RulesElement({
    name: "Hit and Run",
    type: "Power",
    id: "ID_FMP_POWER_1505",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1505",
    categories: ["Hit and Run", "ID_FMP_POWER_1505", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Hit the Dirt"] = new engine.RulesElement({
    name: "Hit the Dirt",
    type: "Power",
    id: "ID_FMP_POWER_927",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=927",
    categories: ["Hit the Dirt", "ID_FMP_POWER_927", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Hold the Line"] = new engine.RulesElement({
    name: "Hold the Line",
    type: "Power",
    id: "ID_FMP_POWER_158",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=158",
    categories: ["Hold the Line", "ID_FMP_POWER_158", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Holy Lantern"] = new engine.RulesElement({
    name: "Holy Lantern",
    type: "Power",
    id: "ID_FMP_POWER_952",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=952",
    categories: ["Holy Lantern", "ID_FMP_POWER_952", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Holy Spark"] = new engine.RulesElement({
    name: "Holy Spark",
    type: "Power",
    id: "ID_FMP_POWER_932",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=932",
    categories: ["Holy Spark", "ID_FMP_POWER_932", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Holy Strike"] = new engine.RulesElement({
    name: "Holy Strike",
    type: "Power",
    id: "ID_FMP_POWER_1567",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1567",
    categories: ["Holy Strike", "ID_FMP_POWER_1567", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Holy Wrath"] = new engine.RulesElement({
    name: "Holy Wrath",
    type: "Power",
    id: "ID_FMP_POWER_936",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=936",
    categories: ["Holy Wrath", "ID_FMP_POWER_936", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Hounding Strike"] = new engine.RulesElement({
    name: "Hounding Strike",
    type: "Power",
    id: "ID_FMP_POWER_1493",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1493",
    categories: ["Hounding Strike", "ID_FMP_POWER_1493", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Howl of Doom"] = new engine.RulesElement({
    name: "Howl of Doom",
    type: "Power",
    id: "ID_FMP_POWER_501",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=501",
    categories: ["Howl of Doom", "ID_FMP_POWER_501", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Hunger of Hadar"] = new engine.RulesElement({
    name: "Hunger of Hadar",
    type: "Power",
    id: "ID_FMP_POWER_62",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=62",
    categories: ["Hunger of Hadar", "ID_FMP_POWER_62", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Hunter's Bear Trap"] = new engine.RulesElement({
    name: "Hunter's Bear Trap",
    type: "Power",
    id: "ID_FMP_POWER_868",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=868",
    categories: ["Hunter's Bear Trap", "ID_FMP_POWER_868", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Hunter's Grace"] = new engine.RulesElement({
    name: "Hunter's Grace",
    type: "Power",
    id: "ID_FMP_POWER_2216",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2216",
    categories: ["Hunter's Grace", "ID_FMP_POWER_2216", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_50", "Beast Stalker", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Hunter's Quarry"] = new engine.RulesElement({
    name: "Hunter's Quarry",
    type: "Power",
    id: "ID_FMP_POWER_5598",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5598",
    categories: ["Hunter's Quarry", "ID_FMP_POWER_5598", "ID_FMP_CLASS_FEATURE_602", "ID_FMP_CLASS_FEATURE_1530", "Hunter's Quarry (Hybrid)", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Hurl Through Hell"] = new engine.RulesElement({
    name: "Hurl Through Hell",
    type: "Power",
    id: "ID_FMP_POWER_505",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=505",
    categories: ["Hurl Through Hell", "ID_FMP_POWER_505", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Hurricane of Blood"] = new engine.RulesElement({
    name: "Hurricane of Blood",
    type: "Power",
    id: "ID_FMP_POWER_2202",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2202",
    categories: ["Hurricane of Blood", "ID_FMP_POWER_2202", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Ice Storm"] = new engine.RulesElement({
    name: "Ice Storm",
    type: "Power",
    id: "ID_FMP_POWER_191",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=191",
    categories: ["Ice Storm", "ID_FMP_POWER_191", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_69", "Evocation", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Ice Tomb"] = new engine.RulesElement({
    name: "Ice Tomb",
    type: "Power",
    id: "ID_FMP_POWER_1181",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1181",
    categories: ["Ice Tomb", "ID_FMP_POWER_1181", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Icy Rays"] = new engine.RulesElement({
    name: "Icy Rays",
    type: "Power",
    id: "ID_FMP_POWER_435",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=435",
    categories: ["Icy Rays", "ID_FMP_POWER_435", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Icy Terrain"] = new engine.RulesElement({
    name: "Icy Terrain",
    type: "Power",
    id: "ID_FMP_POWER_1424",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1424",
    categories: ["Icy Terrain", "ID_FMP_POWER_1424", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Ignoble Escape"] = new engine.RulesElement({
    name: "Ignoble Escape",
    type: "Power",
    id: "ID_FMP_POWER_1042",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1042",
    categories: ["Ignoble Escape", "ID_FMP_POWER_1042", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Immobilizing Strike"] = new engine.RulesElement({
    name: "Immobilizing Strike",
    type: "Power",
    id: "ID_FMP_POWER_1498",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1498",
    categories: ["Immobilizing Strike", "ID_FMP_POWER_1498", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Imperiling Strike"] = new engine.RulesElement({
    name: "Imperiling Strike",
    type: "Power",
    id: "ID_FMP_POWER_339",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=339",
    categories: ["Imperiling Strike", "ID_FMP_POWER_339", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Impossible to Catch"] = new engine.RulesElement({
    name: "Impossible to Catch",
    type: "Power",
    id: "ID_FMP_POWER_1690",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1690",
    categories: ["Impossible to Catch", "ID_FMP_POWER_1690", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_102", "Master Infiltrator", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Incite Heroism"] = new engine.RulesElement({
    name: "Incite Heroism",
    type: "Power",
    id: "ID_FMP_POWER_1564",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1564",
    categories: ["Incite Heroism", "ID_FMP_POWER_1564", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Indomitable Battle Strike"] = new engine.RulesElement({
    name: "Indomitable Battle Strike",
    type: "Power",
    id: "ID_FMP_POWER_1518",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1518",
    categories: ["Indomitable Battle Strike", "ID_FMP_POWER_1518", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Indomitable Spirit"] = new engine.RulesElement({
    name: "Indomitable Spirit",
    type: "Power",
    id: "ID_FMP_POWER_938",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=938",
    categories: ["Indomitable Spirit", "ID_FMP_POWER_938", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Indomitable Strength"] = new engine.RulesElement({
    name: "Indomitable Strength",
    type: "Power",
    id: "ID_FMP_POWER_1599",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1599",
    categories: ["Indomitable Strength", "ID_FMP_POWER_1599", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_28", "Iron Vanguard", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Inexorable Shift"] = new engine.RulesElement({
    name: "Inexorable Shift",
    type: "Power",
    id: "ID_FMP_POWER_1694",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1694",
    categories: ["Inexorable Shift", "ID_FMP_POWER_1694", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_28", "Iron Vanguard", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Infernal Moon Curse"] = new engine.RulesElement({
    name: "Infernal Moon Curse",
    type: "Power",
    id: "ID_FMP_POWER_1462",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1462",
    categories: ["Infernal Moon Curse", "ID_FMP_POWER_1462", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Infernal Wrath"] = new engine.RulesElement({
    name: "Infernal Wrath",
    type: "Power",
    id: "ID_FMP_POWER_1628",
    source: "Player's Handbook,Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1628",
    categories: ["Infernal Wrath", "ID_FMP_POWER_1628", "ID_FMP_RACIAL_TRAIT_38", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_3", "fire", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Infuriating Elusiveness"] = new engine.RulesElement({
    name: "Infuriating Elusiveness",
    type: "Power",
    id: "ID_FMP_POWER_547",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=547",
    categories: ["Infuriating Elusiveness", "ID_FMP_POWER_547", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Inspiring Reaction"] = new engine.RulesElement({
    name: "Inspiring Reaction",
    type: "Power",
    id: "ID_FMP_POWER_3244",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3244",
    categories: ["Inspiring Reaction", "ID_FMP_POWER_3244", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Inspiring Strike"] = new engine.RulesElement({
    name: "Inspiring Strike",
    type: "Power",
    id: "ID_FMP_POWER_570",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=570",
    categories: ["Inspiring Strike", "ID_FMP_POWER_570", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Inspiring War Cry"] = new engine.RulesElement({
    name: "Inspiring War Cry",
    type: "Power",
    id: "ID_FMP_POWER_1556",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1556",
    categories: ["Inspiring War Cry", "ID_FMP_POWER_1556", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Inspiring Word"] = new engine.RulesElement({
    name: "Inspiring Word",
    type: "Power",
    id: "ID_FMP_POWER_1590",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1590",
    categories: ["Inspiring Word", "ID_FMP_POWER_1590"]
  });
  byID[te.id] = te;
  
  te = Power["Instant Escape"] = new engine.RulesElement({
    name: "Instant Escape",
    type: "Power",
    id: "ID_FMP_POWER_1655",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1655",
    categories: ["Instant Escape", "ID_FMP_POWER_1655", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_36", "Cat Burglar", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Interposing Shield"] = new engine.RulesElement({
    name: "Interposing Shield",
    type: "Power",
    id: "ID_FMP_POWER_1156",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1156",
    categories: ["Interposing Shield", "ID_FMP_POWER_1156", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Into the Fray"] = new engine.RulesElement({
    name: "Into the Fray",
    type: "Power",
    id: "ID_FMP_POWER_1444",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1444",
    categories: ["Into the Fray", "ID_FMP_POWER_1444", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Invigorating Smite"] = new engine.RulesElement({
    name: "Invigorating Smite",
    type: "Power",
    id: "ID_FMP_POWER_1568",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1568",
    categories: ["Invigorating Smite", "ID_FMP_POWER_1568", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Invisibility"] = new engine.RulesElement({
    name: "Invisibility",
    type: "Power",
    id: "ID_FMP_POWER_1229",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1229",
    categories: ["Invisibility", "ID_FMP_POWER_1229", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Ioun's Poise"] = new engine.RulesElement({
    name: "Ioun's Poise",
    type: "Power",
    id: "ID_FMP_POWER_2166",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2166",
    categories: ["Ioun's Poise", "ID_FMP_POWER_2166", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Bulwark"] = new engine.RulesElement({
    name: "Iron Bulwark",
    type: "Power",
    id: "ID_FMP_POWER_1019",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1019",
    categories: ["Iron Bulwark", "ID_FMP_POWER_1019", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Dragon Charge"] = new engine.RulesElement({
    name: "Iron Dragon Charge",
    type: "Power",
    id: "ID_FMP_POWER_137",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=137",
    categories: ["Iron Dragon Charge", "ID_FMP_POWER_137", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Spike of Dis"] = new engine.RulesElement({
    name: "Iron Spike of Dis",
    type: "Power",
    id: "ID_FMP_POWER_1473",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1473",
    categories: ["Iron Spike of Dis", "ID_FMP_POWER_1473", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Warrior"] = new engine.RulesElement({
    name: "Iron Warrior",
    type: "Power",
    id: "ID_FMP_POWER_1158",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1158",
    categories: ["Iron Warrior", "ID_FMP_POWER_1158", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Jaws of the Wolf"] = new engine.RulesElement({
    name: "Jaws of the Wolf",
    type: "Power",
    id: "ID_FMP_POWER_851",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=851",
    categories: ["Jaws of the Wolf", "ID_FMP_POWER_851", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Jump"] = new engine.RulesElement({
    name: "Jump",
    type: "Power",
    id: "ID_FMP_POWER_1223",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1223",
    categories: ["Jump", "ID_FMP_POWER_1223", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Just Radiance"] = new engine.RulesElement({
    name: "Just Radiance",
    type: "Power",
    id: "ID_FMP_POWER_1633",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1633",
    categories: ["Just Radiance", "ID_FMP_POWER_1633", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_42", "Justiciar", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Killer's Eye"] = new engine.RulesElement({
    name: "Killer's Eye",
    type: "Power",
    id: "ID_FMP_POWER_1653",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1653",
    categories: ["Killer's Eye", "ID_FMP_POWER_1653", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_103", "Shadow Assassin", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["King's Castle"] = new engine.RulesElement({
    name: "King's Castle",
    type: "Power",
    id: "ID_FMP_POWER_1482",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1482",
    categories: ["King's Castle", "ID_FMP_POWER_1482", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Knave's Gambit"] = new engine.RulesElement({
    name: "Knave's Gambit",
    type: "Power",
    id: "ID_FMP_POWER_128",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=128",
    categories: ["Knave's Gambit", "ID_FMP_POWER_128", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Knight of Glory"] = new engine.RulesElement({
    name: "Knight of Glory",
    type: "Power",
    id: "ID_FMP_POWER_935",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=935",
    categories: ["Knight of Glory", "ID_FMP_POWER_935", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Knight's Move"] = new engine.RulesElement({
    name: "Knight's Move",
    type: "Power",
    id: "ID_FMP_POWER_1139",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1139",
    categories: ["Knight's Move", "ID_FMP_POWER_1139", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Knights of Unyielding Valor"] = new engine.RulesElement({
    name: "Knights of Unyielding Valor",
    type: "Power",
    id: "ID_FMP_POWER_957",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=957",
    categories: ["Knights of Unyielding Valor", "ID_FMP_POWER_957", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Knock Them Down"] = new engine.RulesElement({
    name: "Knock Them Down",
    type: "Power",
    id: "ID_FMP_POWER_1114",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1114",
    categories: ["Knock Them Down", "ID_FMP_POWER_1114", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Knockdown Shot"] = new engine.RulesElement({
    name: "Knockdown Shot",
    type: "Power",
    id: "ID_FMP_POWER_520",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=520",
    categories: ["Knockdown Shot", "ID_FMP_POWER_520", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Knockout"] = new engine.RulesElement({
    name: "Knockout",
    type: "Power",
    id: "ID_FMP_POWER_1010",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1010",
    categories: ["Knockout", "ID_FMP_POWER_1010", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Kord's Favor"] = new engine.RulesElement({
    name: "Kord's Favor",
    type: "Power",
    id: "ID_FMP_POWER_2167",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2167",
    categories: ["Kord's Favor", "ID_FMP_POWER_2167", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Lance of Faith"] = new engine.RulesElement({
    name: "Lance of Faith",
    type: "Power",
    id: "ID_FMP_POWER_841",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=841",
    categories: ["Lance of Faith", "ID_FMP_POWER_841", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Last Ditch Evasion"] = new engine.RulesElement({
    name: "Last Ditch Evasion",
    type: "Power",
    id: "ID_FMP_POWER_1443",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1443",
    categories: ["Last Ditch Evasion", "ID_FMP_POWER_1443", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Lay on Hands"] = new engine.RulesElement({
    name: "Lay on Hands",
    type: "Power",
    id: "ID_FMP_POWER_1566",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1566",
    categories: ["Lay on Hands", "ID_FMP_POWER_1566"]
  });
  byID[te.id] = te;
  
  te = Power["Lead the Attack"] = new engine.RulesElement({
    name: "Lead the Attack",
    type: "Power",
    id: "ID_FMP_POWER_239",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=239",
    categories: ["Lead the Attack", "ID_FMP_POWER_239", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Leaf on the Wind"] = new engine.RulesElement({
    name: "Leaf on the Wind",
    type: "Power",
    id: "ID_FMP_POWER_1554",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1554",
    categories: ["Leaf on the Wind", "ID_FMP_POWER_1554", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Leaping Dodge"] = new engine.RulesElement({
    name: "Leaping Dodge",
    type: "Power",
    id: "ID_FMP_POWER_1047",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1047",
    categories: ["Leaping Dodge", "ID_FMP_POWER_1047", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Legion's Hold"] = new engine.RulesElement({
    name: "Legion's Hold",
    type: "Power",
    id: "ID_FMP_POWER_1202",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1202",
    categories: ["Legion's Hold", "ID_FMP_POWER_1202", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_70", "Enchantment", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Levitate"] = new engine.RulesElement({
    name: "Levitate",
    type: "Power",
    id: "ID_FMP_POWER_32",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=32",
    categories: ["Levitate", "ID_FMP_POWER_32", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Life Spark Summons"] = new engine.RulesElement({
    name: "Life Spark Summons",
    type: "Power",
    id: "ID_FMP_POWER_1698",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1698",
    categories: ["Life Spark Summons", "ID_FMP_POWER_1698", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_38", "Life-Stealer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Life-Giving Smite"] = new engine.RulesElement({
    name: "Life-Giving Smite",
    type: "Power",
    id: "ID_FMP_POWER_1631",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1631",
    categories: ["Life-Giving Smite", "ID_FMP_POWER_1631", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_41", "Hospitaler", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["light"] = new engine.RulesElement({
    name: "light",
    type: "Power",
    id: "ID_FMP_POWER_1225",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1225",
    categories: ["light", "ID_FMP_POWER_1225", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Bolt"] = new engine.RulesElement({
    name: "Lightning Bolt",
    type: "Power",
    id: "ID_FMP_POWER_251",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=251",
    categories: ["Lightning Bolt", "ID_FMP_POWER_251", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_69", "Evocation", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Serpent"] = new engine.RulesElement({
    name: "Lightning Serpent",
    type: "Power",
    id: "ID_FMP_POWER_480",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=480",
    categories: ["Lightning Serpent", "ID_FMP_POWER_480", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Shot"] = new engine.RulesElement({
    name: "Lightning Shot",
    type: "Power",
    id: "ID_FMP_POWER_1549",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1549",
    categories: ["Lightning Shot", "ID_FMP_POWER_1549", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Lion of Battle"] = new engine.RulesElement({
    name: "Lion of Battle",
    type: "Power",
    id: "ID_FMP_POWER_2198",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2198",
    categories: ["Lion of Battle", "ID_FMP_POWER_2198", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_99", "Pit Fighter", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Lion's Roar"] = new engine.RulesElement({
    name: "Lion's Roar",
    type: "Power",
    id: "ID_FMP_POWER_1076",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1076",
    categories: ["Lion's Roar", "ID_FMP_POWER_1076", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Long Fall into Darkness"] = new engine.RulesElement({
    name: "Long Fall into Darkness",
    type: "Power",
    id: "ID_FMP_POWER_1645",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1645",
    categories: ["Long Fall into Darkness", "ID_FMP_POWER_1645", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_39", "Doomsayer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Longstrider"] = new engine.RulesElement({
    name: "Longstrider",
    type: "Power",
    id: "ID_FMP_POWER_39",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=39",
    categories: ["Longstrider", "ID_FMP_POWER_39", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Maelstrom of Chaos"] = new engine.RulesElement({
    name: "Maelstrom of Chaos",
    type: "Power",
    id: "ID_FMP_POWER_1755",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1755",
    categories: ["Maelstrom of Chaos", "ID_FMP_POWER_1755", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_59", "Spellstorm Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Mage Hand"] = new engine.RulesElement({
    name: "Mage Hand",
    type: "Power",
    id: "ID_FMP_POWER_1227",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1227",
    categories: ["Mage Hand", "ID_FMP_POWER_1227", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Magic Missile"] = new engine.RulesElement({
    name: "Magic Missile",
    type: "Power",
    id: "ID_FMP_POWER_463",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=463",
    categories: ["Magic Missile", "ID_FMP_POWER_463", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_69", "Evocation", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Make Them Bleed"] = new engine.RulesElement({
    name: "Make Them Bleed",
    type: "Power",
    id: "ID_FMP_POWER_1084",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1084",
    categories: ["Make Them Bleed", "ID_FMP_POWER_1084", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Manticore's Volley"] = new engine.RulesElement({
    name: "Manticore's Volley",
    type: "Power",
    id: "ID_FMP_POWER_1544",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1544",
    categories: ["Manticore's Volley", "ID_FMP_POWER_1544", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Mantle of Glory"] = new engine.RulesElement({
    name: "Mantle of Glory",
    type: "Power",
    id: "ID_FMP_POWER_1407",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1407",
    categories: ["Mantle of Glory", "ID_FMP_POWER_1407", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Martyr's Blessing"] = new engine.RulesElement({
    name: "Martyr's Blessing",
    type: "Power",
    id: "ID_FMP_POWER_1288",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1288",
    categories: ["Martyr's Blessing", "ID_FMP_POWER_1288", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Martyr's Retribution"] = new engine.RulesElement({
    name: "Martyr's Retribution",
    type: "Power",
    id: "ID_FMP_POWER_1267",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1267",
    categories: ["Martyr's Retribution", "ID_FMP_POWER_1267", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Martyr's Smite"] = new engine.RulesElement({
    name: "Martyr's Smite",
    type: "Power",
    id: "ID_FMP_POWER_1570",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1570",
    categories: ["Martyr's Smite", "ID_FMP_POWER_1570", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Mass Cure Light Wounds"] = new engine.RulesElement({
    name: "Mass Cure Light Wounds",
    type: "Power",
    id: "ID_FMP_POWER_152",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=152",
    categories: ["Mass Cure Light Wounds", "ID_FMP_POWER_152", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Mass Fly"] = new engine.RulesElement({
    name: "Mass Fly",
    type: "Power",
    id: "ID_FMP_POWER_1219",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1219",
    categories: ["Mass Fly", "ID_FMP_POWER_1219", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Master of Deceit"] = new engine.RulesElement({
    name: "Master of Deceit",
    type: "Power",
    id: "ID_FMP_POWER_1040",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1040",
    categories: ["Master of Deceit", "ID_FMP_POWER_1040", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Master of the Hunt"] = new engine.RulesElement({
    name: "Master of the Hunt",
    type: "Power",
    id: "ID_FMP_POWER_2212",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2212",
    categories: ["Master of the Hunt", "ID_FMP_POWER_2212", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Masterstroke"] = new engine.RulesElement({
    name: "Masterstroke",
    type: "Power",
    id: "ID_FMP_POWER_1603",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1603",
    categories: ["Masterstroke", "ID_FMP_POWER_1603", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_21", "Kensei", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Maze"] = new engine.RulesElement({
    name: "Maze",
    type: "Power",
    id: "ID_FMP_POWER_417",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=417",
    categories: ["Maze", "ID_FMP_POWER_417", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Meditation of the Blade"] = new engine.RulesElement({
    name: "Meditation of the Blade",
    type: "Power",
    id: "ID_FMP_POWER_1649",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1649",
    categories: ["Meditation of the Blade", "ID_FMP_POWER_1649", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_34", "Daggermaster", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Melora's Tide"] = new engine.RulesElement({
    name: "Melora's Tide",
    type: "Power",
    id: "ID_FMP_POWER_2168",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2168",
    categories: ["Melora's Tide", "ID_FMP_POWER_2168", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Mesmeric Hold"] = new engine.RulesElement({
    name: "Mesmeric Hold",
    type: "Power",
    id: "ID_FMP_POWER_436",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=436",
    categories: ["Mesmeric Hold", "ID_FMP_POWER_436", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Meteor Swarm"] = new engine.RulesElement({
    name: "Meteor Swarm",
    type: "Power",
    id: "ID_FMP_POWER_467",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=467",
    categories: ["Meteor Swarm", "ID_FMP_POWER_467", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_69", "Evocation", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Minions of Malbolge"] = new engine.RulesElement({
    name: "Minions of Malbolge",
    type: "Power",
    id: "ID_FMP_POWER_1315",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1315",
    categories: ["Minions of Malbolge", "ID_FMP_POWER_1315", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Mire the Mind"] = new engine.RulesElement({
    name: "Mire the Mind",
    type: "Power",
    id: "ID_FMP_POWER_1461",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1461",
    categories: ["Mire the Mind", "ID_FMP_POWER_1461", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Mirror Image"] = new engine.RulesElement({
    name: "Mirror Image",
    type: "Power",
    id: "ID_FMP_POWER_1231",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1231",
    categories: ["Mirror Image", "ID_FMP_POWER_1231", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Miss Me Once"] = new engine.RulesElement({
    name: "Miss Me Once",
    type: "Power",
    id: "ID_FMP_POWER_1664",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1664",
    categories: ["Miss Me Once", "ID_FMP_POWER_1664", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_45", "Combat Veteran", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Misty Step"] = new engine.RulesElement({
    name: "Misty Step",
    type: "Power",
    id: "ID_FMP_POWER_2094",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2094",
    categories: ["Misty Step", "ID_FMP_POWER_2094", "ID_FMP_CLASS_FEATURE_772", "Fey Pact", "ID_INTERNAL_CATEGORY_PACT_BOON", "Pact Boon", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_7", "Warlock", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Mob Mentality"] = new engine.RulesElement({
    name: "Mob Mentality",
    type: "Power",
    id: "ID_FMP_POWER_1397",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1397",
    categories: ["Mob Mentality", "ID_FMP_POWER_1397", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Momentary Respite"] = new engine.RulesElement({
    name: "Momentary Respite",
    type: "Power",
    id: "ID_FMP_POWER_381",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=381",
    categories: ["Momentary Respite", "ID_FMP_POWER_381", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Moradin's Resolve"] = new engine.RulesElement({
    name: "Moradin's Resolve",
    type: "Power",
    id: "ID_FMP_POWER_2170",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2170",
    categories: ["Moradin's Resolve", "ID_FMP_POWER_2170", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Mordenkainen's Mansion"] = new engine.RulesElement({
    name: "Mordenkainen's Mansion",
    type: "Power",
    id: "ID_FMP_POWER_2276",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2276",
    categories: ["Mordenkainen's Mansion", "ID_FMP_POWER_2276", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Mordenkainen's Sword"] = new engine.RulesElement({
    name: "Mordenkainen's Sword",
    type: "Power",
    id: "ID_FMP_POWER_419",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=419",
    categories: ["Mordenkainen's Sword", "ID_FMP_POWER_419", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Mountain Breaking Blow"] = new engine.RulesElement({
    name: "Mountain Breaking Blow",
    type: "Power",
    id: "ID_FMP_POWER_1516",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1516",
    categories: ["Mountain Breaking Blow", "ID_FMP_POWER_1516", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Moving Target"] = new engine.RulesElement({
    name: "Moving Target",
    type: "Power",
    id: "ID_FMP_POWER_1503",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1503",
    categories: ["Moving Target", "ID_FMP_POWER_1503", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Necrotic Web"] = new engine.RulesElement({
    name: "Necrotic Web",
    type: "Power",
    id: "ID_FMP_POWER_2277",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2277",
    categories: ["Necrotic Web", "ID_FMP_POWER_2277", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Nimble Climb"] = new engine.RulesElement({
    name: "Nimble Climb",
    type: "Power",
    id: "ID_FMP_POWER_365",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=365",
    categories: ["Nimble Climb", "ID_FMP_POWER_365", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Nimble Defense"] = new engine.RulesElement({
    name: "Nimble Defense",
    type: "Power",
    id: "ID_FMP_POWER_1533",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1533",
    categories: ["Nimble Defense", "ID_FMP_POWER_1533", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Nimble Strike"] = new engine.RulesElement({
    name: "Nimble Strike",
    type: "Power",
    id: "ID_FMP_POWER_919",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=919",
    categories: ["Nimble Strike", "ID_FMP_POWER_919", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Nimbus of Doom"] = new engine.RulesElement({
    name: "Nimbus of Doom",
    type: "Power",
    id: "ID_FMP_POWER_941",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=941",
    categories: ["Nimbus of Doom", "ID_FMP_POWER_941", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["No Mercy"] = new engine.RulesElement({
    name: "No Mercy",
    type: "Power",
    id: "ID_FMP_POWER_1102",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1102",
    categories: ["No Mercy", "ID_FMP_POWER_1102", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["No Opening"] = new engine.RulesElement({
    name: "No Opening",
    type: "Power",
    id: "ID_FMP_POWER_1122",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1122",
    categories: ["No Opening", "ID_FMP_POWER_1122", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["No Surrender"] = new engine.RulesElement({
    name: "No Surrender",
    type: "Power",
    id: "ID_FMP_POWER_1162",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1162",
    categories: ["No Surrender", "ID_FMP_POWER_1162", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Noble Shield"] = new engine.RulesElement({
    name: "Noble Shield",
    type: "Power",
    id: "ID_FMP_POWER_1284",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1284",
    categories: ["Noble Shield", "ID_FMP_POWER_1284", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["None Shall Pass"] = new engine.RulesElement({
    name: "None Shall Pass",
    type: "Power",
    id: "ID_FMP_POWER_1638",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1638",
    categories: ["None Shall Pass", "ID_FMP_POWER_1638", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_44", "Champion of Order", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["On Pain of Death"] = new engine.RulesElement({
    name: "On Pain of Death",
    type: "Power",
    id: "ID_FMP_POWER_1268",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1268",
    categories: ["On Pain of Death", "ID_FMP_POWER_1268", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["One Heart, One Mind"] = new engine.RulesElement({
    name: "One Heart, One Mind",
    type: "Power",
    id: "ID_FMP_POWER_1289",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1289",
    categories: ["One Heart, One Mind", "ID_FMP_POWER_1289", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["One Stands Alone"] = new engine.RulesElement({
    name: "One Stands Alone",
    type: "Power",
    id: "ID_FMP_POWER_2260",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2260",
    categories: ["One Stands Alone", "ID_FMP_POWER_2260", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Open the Range"] = new engine.RulesElement({
    name: "Open the Range",
    type: "Power",
    id: "ID_FMP_POWER_217",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=217",
    categories: ["Open the Range", "ID_FMP_POWER_217", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Orb of Imposition"] = new engine.RulesElement({
    name: "Orb of Imposition",
    type: "Power",
    id: "ID_FMP_POWER_5594",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5594",
    categories: ["Orb of Imposition", "ID_FMP_POWER_5594", "ID_FMP_CLASS_FEATURE_769", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Otherwind Stride"] = new engine.RulesElement({
    name: "Otherwind Stride",
    type: "Power",
    id: "ID_FMP_POWER_661",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=661",
    categories: ["Otherwind Stride", "ID_FMP_POWER_661", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Otiluke's Resilient Sphere"] = new engine.RulesElement({
    name: "Otiluke's Resilient Sphere",
    type: "Power",
    id: "ID_FMP_POWER_418",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=418",
    categories: ["Otiluke's Resilient Sphere", "ID_FMP_POWER_418", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Own the Battlefield"] = new engine.RulesElement({
    name: "Own the Battlefield",
    type: "Power",
    id: "ID_FMP_POWER_2227",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2227",
    categories: ["Own the Battlefield", "ID_FMP_POWER_2227", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Painful Puncture"] = new engine.RulesElement({
    name: "Painful Puncture",
    type: "Power",
    id: "ID_FMP_POWER_2205",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2205",
    categories: ["Painful Puncture", "ID_FMP_POWER_2205", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_102", "Master Infiltrator", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Paladin's Judgment"] = new engine.RulesElement({
    name: "Paladin's Judgment",
    type: "Power",
    id: "ID_FMP_POWER_2258",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2258",
    categories: ["Paladin's Judgment", "ID_FMP_POWER_2258", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Paralyzing Strike"] = new engine.RulesElement({
    name: "Paralyzing Strike",
    type: "Power",
    id: "ID_FMP_POWER_1931",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1931",
    categories: ["Paralyzing Strike", "ID_FMP_POWER_1931", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Passing Attack"] = new engine.RulesElement({
    name: "Passing Attack",
    type: "Power",
    id: "ID_FMP_POWER_1015",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1015",
    categories: ["Passing Attack", "ID_FMP_POWER_1015", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Pelor's Radiance"] = new engine.RulesElement({
    name: "Pelor's Radiance",
    type: "Power",
    id: "ID_FMP_POWER_2171",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2171",
    categories: ["Pelor's Radiance", "ID_FMP_POWER_2171", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Perfect Strike"] = new engine.RulesElement({
    name: "Perfect Strike",
    type: "Power",
    id: "ID_FMP_POWER_996",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=996",
    categories: ["Perfect Strike", "ID_FMP_POWER_996", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Piercing Smite"] = new engine.RulesElement({
    name: "Piercing Smite",
    type: "Power",
    id: "ID_FMP_POWER_218",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=218",
    categories: ["Piercing Smite", "ID_FMP_POWER_218", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Piercing Strike"] = new engine.RulesElement({
    name: "Piercing Strike",
    type: "Power",
    id: "ID_FMP_POWER_704",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=704",
    categories: ["Piercing Strike", "ID_FMP_POWER_704", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Pillar to Post"] = new engine.RulesElement({
    name: "Pillar to Post",
    type: "Power",
    id: "ID_FMP_POWER_2231",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2231",
    categories: ["Pillar to Post", "ID_FMP_POWER_2231", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Pin the Foe"] = new engine.RulesElement({
    name: "Pin the Foe",
    type: "Power",
    id: "ID_FMP_POWER_431",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=431",
    categories: ["Pin the Foe", "ID_FMP_POWER_431", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Pinning Strike"] = new engine.RulesElement({
    name: "Pinning Strike",
    type: "Power",
    id: "ID_FMP_POWER_857",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=857",
    categories: ["Pinning Strike", "ID_FMP_POWER_857", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Pinpointing Arrow"] = new engine.RulesElement({
    name: "Pinpointing Arrow",
    type: "Power",
    id: "ID_FMP_POWER_1687",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1687",
    categories: ["Pinpointing Arrow", "ID_FMP_POWER_1687", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_50", "Beast Stalker", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Plague of Doom"] = new engine.RulesElement({
    name: "Plague of Doom",
    type: "Power",
    id: "ID_FMP_POWER_900",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=900",
    categories: ["Plague of Doom", "ID_FMP_POWER_900", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Positioning Strike"] = new engine.RulesElement({
    name: "Positioning Strike",
    type: "Power",
    id: "ID_FMP_POWER_1483",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1483",
    categories: ["Positioning Strike", "ID_FMP_POWER_1483", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Powerful Faith"] = new engine.RulesElement({
    name: "Powerful Faith",
    type: "Power",
    id: "ID_FMP_POWER_1578",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1578",
    categories: ["Powerful Faith", "ID_FMP_POWER_1578", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Pray for More"] = new engine.RulesElement({
    name: "Pray for More",
    type: "Power",
    id: "ID_FMP_POWER_1635",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1635",
    categories: ["Pray for More", "ID_FMP_POWER_1635", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_43", "Astral Weapon", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Precise Strike"] = new engine.RulesElement({
    name: "Precise Strike",
    type: "Power",
    id: "ID_FMP_POWER_2176",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2176",
    categories: ["Precise Strike", "ID_FMP_POWER_2176", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Precision Cut"] = new engine.RulesElement({
    name: "Precision Cut",
    type: "Power",
    id: "ID_FMP_POWER_1601",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1601",
    categories: ["Precision Cut", "ID_FMP_POWER_1601", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_26", "Swordmaster", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Prestidigitation"] = new engine.RulesElement({
    name: "Prestidigitation",
    type: "Power",
    id: "ID_FMP_POWER_1930",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1930",
    categories: ["Prestidigitation", "ID_FMP_POWER_1930", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Priest's Shield"] = new engine.RulesElement({
    name: "Priest's Shield",
    type: "Power",
    id: "ID_FMP_POWER_1580",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1580",
    categories: ["Priest's Shield", "ID_FMP_POWER_1580", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Prismatic Beams"] = new engine.RulesElement({
    name: "Prismatic Beams",
    type: "Power",
    id: "ID_FMP_POWER_36",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=36",
    categories: ["Prismatic Beams", "ID_FMP_POWER_36", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Prismatic Burst"] = new engine.RulesElement({
    name: "Prismatic Burst",
    type: "Power",
    id: "ID_FMP_POWER_1179",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1179",
    categories: ["Prismatic Burst", "ID_FMP_POWER_1179", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Prismatic Spray"] = new engine.RulesElement({
    name: "Prismatic Spray",
    type: "Power",
    id: "ID_FMP_POWER_1200",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1200",
    categories: ["Prismatic Spray", "ID_FMP_POWER_1200", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Prophecy of Doom"] = new engine.RulesElement({
    name: "Prophecy of Doom",
    type: "Power",
    id: "ID_FMP_POWER_1696",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1696",
    categories: ["Prophecy of Doom", "ID_FMP_POWER_1696", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_16", "Divine Oracle", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Punishing Strike"] = new engine.RulesElement({
    name: "Punishing Strike",
    type: "Power",
    id: "ID_FMP_POWER_909",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=909",
    categories: ["Punishing Strike", "ID_FMP_POWER_909", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Purify"] = new engine.RulesElement({
    name: "Purify",
    type: "Power",
    id: "ID_FMP_POWER_969",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=969",
    categories: ["Purify", "ID_FMP_POWER_969", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Purifying Fire"] = new engine.RulesElement({
    name: "Purifying Fire",
    type: "Power",
    id: "ID_FMP_POWER_933",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=933",
    categories: ["Purifying Fire", "ID_FMP_POWER_933", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Quarry's Bane"] = new engine.RulesElement({
    name: "Quarry's Bane",
    type: "Power",
    id: "ID_FMP_POWER_1684",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1684",
    categories: ["Quarry's Bane", "ID_FMP_POWER_1684", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_52", "Battlefield Archer", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Quick Fingers"] = new engine.RulesElement({
    name: "Quick Fingers",
    type: "Power",
    id: "ID_FMP_POWER_1394",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1394",
    categories: ["Quick Fingers", "ID_FMP_POWER_1394", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Quick Step"] = new engine.RulesElement({
    name: "Quick Step",
    type: "Power",
    id: "ID_FMP_POWER_1143",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1143",
    categories: ["Quick Step", "ID_FMP_POWER_1143", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Rabbits and Wolves"] = new engine.RulesElement({
    name: "Rabbits and Wolves",
    type: "Power",
    id: "ID_FMP_POWER_1562",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1562",
    categories: ["Rabbits and Wolves", "ID_FMP_POWER_1562", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Brilliance"] = new engine.RulesElement({
    name: "Radiant Brilliance",
    type: "Power",
    id: "ID_FMP_POWER_1596",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1596",
    categories: ["Radiant Brilliance", "ID_FMP_POWER_1596", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_18", "Radiant Servant", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Charge"] = new engine.RulesElement({
    name: "Radiant Charge",
    type: "Power",
    id: "ID_FMP_POWER_1569",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1569",
    categories: ["Radiant Charge", "ID_FMP_POWER_1569", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Delirium"] = new engine.RulesElement({
    name: "Radiant Delirium",
    type: "Power",
    id: "ID_FMP_POWER_1273",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1273",
    categories: ["Radiant Delirium", "ID_FMP_POWER_1273", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Pulse"] = new engine.RulesElement({
    name: "Radiant Pulse",
    type: "Power",
    id: "ID_FMP_POWER_1269",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1269",
    categories: ["Radiant Pulse", "ID_FMP_POWER_1269", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Smite"] = new engine.RulesElement({
    name: "Radiant Smite",
    type: "Power",
    id: "ID_FMP_POWER_358",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=358",
    categories: ["Radiant Smite", "ID_FMP_POWER_358", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Rain of Blows"] = new engine.RulesElement({
    name: "Rain of Blows",
    type: "Power",
    id: "ID_FMP_POWER_268",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=268",
    categories: ["Rain of Blows", "ID_FMP_POWER_268", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Rain of Steel"] = new engine.RulesElement({
    name: "Rain of Steel",
    type: "Power",
    id: "ID_FMP_POWER_1436",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1436",
    categories: ["Rain of Steel", "ID_FMP_POWER_1436", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Raise the Stakes"] = new engine.RulesElement({
    name: "Raise the Stakes",
    type: "Power",
    id: "ID_FMP_POWER_1048",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1048",
    categories: ["Raise the Stakes", "ID_FMP_POWER_1048", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Raven Queen's Blessing"] = new engine.RulesElement({
    name: "Raven Queen's Blessing",
    type: "Power",
    id: "ID_FMP_POWER_2173",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2173",
    categories: ["Raven Queen's Blessing", "ID_FMP_POWER_2173", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Raven's Glamor"] = new engine.RulesElement({
    name: "Raven's Glamor",
    type: "Power",
    id: "ID_FMP_POWER_235",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=235",
    categories: ["Raven's Glamor", "ID_FMP_POWER_235", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Ray of Enfeeblement"] = new engine.RulesElement({
    name: "Ray of Enfeeblement",
    type: "Power",
    id: "ID_FMP_POWER_416",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=416",
    categories: ["Ray of Enfeeblement", "ID_FMP_POWER_416", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Ray of Frost"] = new engine.RulesElement({
    name: "Ray of Frost",
    type: "Power",
    id: "ID_FMP_POWER_1167",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1167",
    categories: ["Ray of Frost", "ID_FMP_POWER_1167", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Reaper's Stance"] = new engine.RulesElement({
    name: "Reaper's Stance",
    type: "Power",
    id: "ID_FMP_POWER_1104",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1104",
    categories: ["Reaper's Stance", "ID_FMP_POWER_1104", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Reaping Strike"] = new engine.RulesElement({
    name: "Reaping Strike",
    type: "Power",
    id: "ID_FMP_POWER_997",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=997",
    categories: ["Reaping Strike", "ID_FMP_POWER_997", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Reaving Strike"] = new engine.RulesElement({
    name: "Reaving Strike",
    type: "Power",
    id: "ID_FMP_POWER_1526",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1526",
    categories: ["Reaving Strike", "ID_FMP_POWER_1526", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Reckless Strike"] = new engine.RulesElement({
    name: "Reckless Strike",
    type: "Power",
    id: "ID_FMP_POWER_1428",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1428",
    categories: ["Reckless Strike", "ID_FMP_POWER_1428", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Redirected Death"] = new engine.RulesElement({
    name: "Redirected Death",
    type: "Power",
    id: "ID_FMP_POWER_1657",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1657",
    categories: ["Redirected Death", "ID_FMP_POWER_1657", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_36", "Cat Burglar", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Reign of Terror"] = new engine.RulesElement({
    name: "Reign of Terror",
    type: "Power",
    id: "ID_FMP_POWER_1106",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1106",
    categories: ["Reign of Terror", "ID_FMP_POWER_1106", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Relentless Assault"] = new engine.RulesElement({
    name: "Relentless Assault",
    type: "Power",
    id: "ID_FMP_POWER_1130",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1130",
    categories: ["Relentless Assault", "ID_FMP_POWER_1130", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Renew the Troops"] = new engine.RulesElement({
    name: "Renew the Troops",
    type: "Power",
    id: "ID_FMP_POWER_1571",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1571",
    categories: ["Renew the Troops", "ID_FMP_POWER_1571", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Renewing Smite"] = new engine.RulesElement({
    name: "Renewing Smite",
    type: "Power",
    id: "ID_FMP_POWER_1253",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1253",
    categories: ["Renewing Smite", "ID_FMP_POWER_1253", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Resistance"] = new engine.RulesElement({
    name: "Resistance",
    type: "Power",
    id: "ID_FMP_POWER_2274",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2274",
    categories: ["Resistance", "ID_FMP_POWER_2274", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Resounding Smite"] = new engine.RulesElement({
    name: "Resounding Smite",
    type: "Power",
    id: "ID_FMP_POWER_1254",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1254",
    categories: ["Resounding Smite", "ID_FMP_POWER_1254", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Restricting Smite"] = new engine.RulesElement({
    name: "Restricting Smite",
    type: "Power",
    id: "ID_FMP_POWER_1245",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1245",
    categories: ["Restricting Smite", "ID_FMP_POWER_1245", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Righteous Brand"] = new engine.RulesElement({
    name: "Righteous Brand",
    type: "Power",
    id: "ID_FMP_POWER_839",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=839",
    categories: ["Righteous Brand", "ID_FMP_POWER_839", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Righteous Inferno"] = new engine.RulesElement({
    name: "Righteous Inferno",
    type: "Power",
    id: "ID_FMP_POWER_1262",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1262",
    categories: ["Righteous Inferno", "ID_FMP_POWER_1262", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Righteous Smite"] = new engine.RulesElement({
    name: "Righteous Smite",
    type: "Power",
    id: "ID_FMP_POWER_754",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=754",
    categories: ["Righteous Smite", "ID_FMP_POWER_754", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Riposte Strike"] = new engine.RulesElement({
    name: "Riposte Strike",
    type: "Power",
    id: "ID_FMP_POWER_653",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=653",
    categories: ["Riposte Strike", "ID_FMP_POWER_653", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Rogue's Luck"] = new engine.RulesElement({
    name: "Rogue's Luck",
    type: "Power",
    id: "ID_FMP_POWER_982",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=982",
    categories: ["Rogue's Luck", "ID_FMP_POWER_982", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Rule of Order"] = new engine.RulesElement({
    name: "Rule of Order",
    type: "Power",
    id: "ID_FMP_POWER_1640",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1640",
    categories: ["Rule of Order", "ID_FMP_POWER_1640", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_44", "Champion of Order", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Rune of Peace"] = new engine.RulesElement({
    name: "Rune of Peace",
    type: "Power",
    id: "ID_FMP_POWER_915",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=915",
    categories: ["Rune of Peace", "ID_FMP_POWER_915", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Sacred Circle"] = new engine.RulesElement({
    name: "Sacred Circle",
    type: "Power",
    id: "ID_FMP_POWER_1255",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1255",
    categories: ["Sacred Circle", "ID_FMP_POWER_1255", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Sacred Flame"] = new engine.RulesElement({
    name: "Sacred Flame",
    type: "Power",
    id: "ID_FMP_POWER_889",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=889",
    categories: ["Sacred Flame", "ID_FMP_POWER_889", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Sacred Word"] = new engine.RulesElement({
    name: "Sacred Word",
    type: "Power",
    id: "ID_FMP_POWER_940",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=940",
    categories: ["Sacred Word", "ID_FMP_POWER_940", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Sacrificial Healing"] = new engine.RulesElement({
    name: "Sacrificial Healing",
    type: "Power",
    id: "ID_FMP_POWER_910",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=910",
    categories: ["Sacrificial Healing", "ID_FMP_POWER_910", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Safe Stride"] = new engine.RulesElement({
    name: "Safe Stride",
    type: "Power",
    id: "ID_FMP_POWER_374",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=374",
    categories: ["Safe Stride", "ID_FMP_POWER_374", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Sanctuary"] = new engine.RulesElement({
    name: "Sanctuary",
    type: "Power",
    id: "ID_FMP_POWER_91",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=91",
    categories: ["Sanctuary", "ID_FMP_POWER_91", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Sand in the Eyes"] = new engine.RulesElement({
    name: "Sand in the Eyes",
    type: "Power",
    id: "ID_FMP_POWER_977",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=977",
    categories: ["Sand in the Eyes", "ID_FMP_POWER_977", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Scorching Burst"] = new engine.RulesElement({
    name: "Scorching Burst",
    type: "Power",
    id: "ID_FMP_POWER_1166",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1166",
    categories: ["Scorching Burst", "ID_FMP_POWER_1166", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Scorpion Strike"] = new engine.RulesElement({
    name: "Scorpion Strike",
    type: "Power",
    id: "ID_FMP_POWER_991",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=991",
    categories: ["Scorpion Strike", "ID_FMP_POWER_991", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Scourge of the Unworthy"] = new engine.RulesElement({
    name: "Scourge of the Unworthy",
    type: "Power",
    id: "ID_FMP_POWER_912",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=912",
    categories: ["Scourge of the Unworthy", "ID_FMP_POWER_912", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Seal of Binding"] = new engine.RulesElement({
    name: "Seal of Binding",
    type: "Power",
    id: "ID_FMP_POWER_939",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=939",
    categories: ["Seal of Binding", "ID_FMP_POWER_939", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Seal of Protection"] = new engine.RulesElement({
    name: "Seal of Protection",
    type: "Power",
    id: "ID_FMP_POWER_942",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=942",
    categories: ["Seal of Protection", "ID_FMP_POWER_942", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Seal of Warding"] = new engine.RulesElement({
    name: "Seal of Warding",
    type: "Power",
    id: "ID_FMP_POWER_934",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=934",
    categories: ["Seal of Warding", "ID_FMP_POWER_934", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Searing Light"] = new engine.RulesElement({
    name: "Searing Light",
    type: "Power",
    id: "ID_FMP_POWER_537",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=537",
    categories: ["Searing Light", "ID_FMP_POWER_537", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Second Chance"] = new engine.RulesElement({
    name: "Second Chance",
    type: "Power",
    id: "ID_FMP_POWER_1452",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1452",
    categories: ["Second Chance", "ID_FMP_POWER_1452", "ID_FMP_RACIAL_TRAIT_26", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Sehanine's Reversal"] = new engine.RulesElement({
    name: "Sehanine's Reversal",
    type: "Power",
    id: "ID_FMP_POWER_2174",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2174",
    categories: ["Sehanine's Reversal", "ID_FMP_POWER_2174", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action"]
  });
  byID[te.id] = te;
  
  te = Power["Sentinel Strike"] = new engine.RulesElement({
    name: "Sentinel Strike",
    type: "Power",
    id: "ID_FMP_POWER_316",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=316",
    categories: ["Sentinel Strike", "ID_FMP_POWER_316", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Serpent Dance Strike"] = new engine.RulesElement({
    name: "Serpent Dance Strike",
    type: "Power",
    id: "ID_FMP_POWER_1523",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1523",
    categories: ["Serpent Dance Strike", "ID_FMP_POWER_1523", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Setup Strike"] = new engine.RulesElement({
    name: "Setup Strike",
    type: "Power",
    id: "ID_FMP_POWER_1387",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1387",
    categories: ["Setup Strike", "ID_FMP_POWER_1387", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Form"] = new engine.RulesElement({
    name: "Shadow Form",
    type: "Power",
    id: "ID_FMP_POWER_95",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=95",
    categories: ["Shadow Form", "ID_FMP_POWER_95", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Stride"] = new engine.RulesElement({
    name: "Shadow Stride",
    type: "Power",
    id: "ID_FMP_POWER_1396",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1396",
    categories: ["Shadow Stride", "ID_FMP_POWER_1396", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Veil"] = new engine.RulesElement({
    name: "Shadow Veil",
    type: "Power",
    id: "ID_FMP_POWER_380",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=380",
    categories: ["Shadow Veil", "ID_FMP_POWER_380", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Wasp Strike"] = new engine.RulesElement({
    name: "Shadow Wasp Strike",
    type: "Power",
    id: "ID_FMP_POWER_1521",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1521",
    categories: ["Shadow Wasp Strike", "ID_FMP_POWER_1521", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Shake It Off"] = new engine.RulesElement({
    name: "Shake It Off",
    type: "Power",
    id: "ID_FMP_POWER_1136",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1136",
    categories: ["Shake It Off", "ID_FMP_POWER_1136", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Shape Magic"] = new engine.RulesElement({
    name: "Shape Magic",
    type: "Power",
    id: "ID_FMP_POWER_1752",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1752",
    categories: ["Shape Magic", "ID_FMP_POWER_1752", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_13", "Archmage", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Shape the Dream"] = new engine.RulesElement({
    name: "Shape the Dream",
    type: "Power",
    id: "ID_FMP_POWER_1621",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1621",
    categories: ["Shape the Dream", "ID_FMP_POWER_1621", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_32", "Wizard of the Spiral Tower", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Shield"] = new engine.RulesElement({
    name: "Shield",
    type: "Power",
    id: "ID_FMP_POWER_1235",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1235",
    categories: ["Shield", "ID_FMP_POWER_1235", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Shield of Faith"] = new engine.RulesElement({
    name: "Shield of Faith",
    type: "Power",
    id: "ID_FMP_POWER_945",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=945",
    categories: ["Shield of Faith", "ID_FMP_POWER_945", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Shielding Shades"] = new engine.RulesElement({
    name: "Shielding Shades",
    type: "Power",
    id: "ID_FMP_POWER_1328",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1328",
    categories: ["Shielding Shades", "ID_FMP_POWER_1328", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Shielding Smite"] = new engine.RulesElement({
    name: "Shielding Smite",
    type: "Power",
    id: "ID_FMP_POWER_755",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=755",
    categories: ["Shielding Smite", "ID_FMP_POWER_755", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Shielding Word"] = new engine.RulesElement({
    name: "Shielding Word",
    type: "Power",
    id: "ID_FMP_POWER_1411",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1411",
    categories: ["Shielding Word", "ID_FMP_POWER_1411", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Shift the Battlefield"] = new engine.RulesElement({
    name: "Shift the Battlefield",
    type: "Power",
    id: "ID_FMP_POWER_1437",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1437",
    categories: ["Shift the Battlefield", "ID_FMP_POWER_1437", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Shock Sphere"] = new engine.RulesElement({
    name: "Shock Sphere",
    type: "Power",
    id: "ID_FMP_POWER_1530",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1530",
    categories: ["Shock Sphere", "ID_FMP_POWER_1530", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_69", "Evocation", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Shroud of Black Steel"] = new engine.RulesElement({
    name: "Shroud of Black Steel",
    type: "Power",
    id: "ID_FMP_POWER_1402",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1402",
    categories: ["Shroud of Black Steel", "ID_FMP_POWER_1402", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Sign of Ill Omen"] = new engine.RulesElement({
    name: "Sign of Ill Omen",
    type: "Power",
    id: "ID_FMP_POWER_1351",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1351",
    categories: ["Sign of Ill Omen", "ID_FMP_POWER_1351", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Sign of Vulnerability"] = new engine.RulesElement({
    name: "Sign of Vulnerability",
    type: "Power",
    id: "ID_FMP_POWER_1274",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1274",
    categories: ["Sign of Vulnerability", "ID_FMP_POWER_1274", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Silverstep"] = new engine.RulesElement({
    name: "Silverstep",
    type: "Power",
    id: "ID_FMP_POWER_1025",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1025",
    categories: ["Silverstep", "ID_FMP_POWER_1025", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Skilled Companion"] = new engine.RulesElement({
    name: "Skilled Companion",
    type: "Power",
    id: "ID_FMP_POWER_925",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=925",
    categories: ["Skilled Companion", "ID_FMP_POWER_925", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Skirmish Ploy"] = new engine.RulesElement({
    name: "Skirmish Ploy",
    type: "Power",
    id: "ID_FMP_POWER_1665",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1665",
    categories: ["Skirmish Ploy", "ID_FMP_POWER_1665", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_45", "Combat Veteran", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Skullcrusher"] = new engine.RulesElement({
    name: "Skullcrusher",
    type: "Power",
    id: "ID_FMP_POWER_1059",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1059",
    categories: ["Skullcrusher", "ID_FMP_POWER_1059", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Slash and Press"] = new engine.RulesElement({
    name: "Slash and Press",
    type: "Power",
    id: "ID_FMP_POWER_1671",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1671",
    categories: ["Slash and Press", "ID_FMP_POWER_1671", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_47", "Knight Commander", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Slasher's Mark"] = new engine.RulesElement({
    name: "Slasher's Mark",
    type: "Power",
    id: "ID_FMP_POWER_1678",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1678",
    categories: ["Slasher's Mark", "ID_FMP_POWER_1678", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_49", "Pathfinder", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Slaying Strike"] = new engine.RulesElement({
    name: "Slaying Strike",
    type: "Power",
    id: "ID_FMP_POWER_338",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=338",
    categories: ["Slaying Strike", "ID_FMP_POWER_338", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Sleep"] = new engine.RulesElement({
    name: "Sleep",
    type: "Power",
    id: "ID_FMP_POWER_451",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=451",
    categories: ["Sleep", "ID_FMP_POWER_451", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_70", "Enchantment", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Slippery Mind"] = new engine.RulesElement({
    name: "Slippery Mind",
    type: "Power",
    id: "ID_FMP_POWER_1043",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1043",
    categories: ["Slippery Mind", "ID_FMP_POWER_1043", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Sly Flourish"] = new engine.RulesElement({
    name: "Sly Flourish",
    type: "Power",
    id: "ID_FMP_POWER_970",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=970",
    categories: ["Sly Flourish", "ID_FMP_POWER_970", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Snake's Retreat"] = new engine.RulesElement({
    name: "Snake's Retreat",
    type: "Power",
    id: "ID_FMP_POWER_1500",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1500",
    categories: ["Snake's Retreat", "ID_FMP_POWER_1500", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Solar Wrath"] = new engine.RulesElement({
    name: "Solar Wrath",
    type: "Power",
    id: "ID_FMP_POWER_1594",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1594",
    categories: ["Solar Wrath", "ID_FMP_POWER_1594", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_18", "Radiant Servant", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Soul Burn"] = new engine.RulesElement({
    name: "Soul Burn",
    type: "Power",
    id: "ID_FMP_POWER_1616",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1616",
    categories: ["Soul Burn", "ID_FMP_POWER_1616", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_31", "Blood Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Soul Flaying"] = new engine.RulesElement({
    name: "Soul Flaying",
    type: "Power",
    id: "ID_FMP_POWER_1335",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1335",
    categories: ["Soul Flaying", "ID_FMP_POWER_1335", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Soul Scorch"] = new engine.RulesElement({
    name: "Soul Scorch",
    type: "Power",
    id: "ID_FMP_POWER_1697",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1697",
    categories: ["Soul Scorch", "ID_FMP_POWER_1697", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_38", "Life-Stealer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Soultheft"] = new engine.RulesElement({
    name: "Soultheft",
    type: "Power",
    id: "ID_FMP_POWER_1699",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1699",
    categories: ["Soultheft", "ID_FMP_POWER_1699", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_38", "Life-Stealer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Spectral Ram"] = new engine.RulesElement({
    name: "Spectral Ram",
    type: "Power",
    id: "ID_FMP_POWER_454",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=454",
    categories: ["Spectral Ram", "ID_FMP_POWER_454", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Spider Climb"] = new engine.RulesElement({
    name: "Spider Climb",
    type: "Power",
    id: "ID_FMP_POWER_1368",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1368",
    categories: ["Spider Climb", "ID_FMP_POWER_1368", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Spikes of the Manticore"] = new engine.RulesElement({
    name: "Spikes of the Manticore",
    type: "Power",
    id: "ID_FMP_POWER_920",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=920",
    categories: ["Spikes of the Manticore", "ID_FMP_POWER_920", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Spinning Sweep"] = new engine.RulesElement({
    name: "Spinning Sweep",
    type: "Power",
    id: "ID_FMP_POWER_1004",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1004",
    categories: ["Spinning Sweep", "ID_FMP_POWER_1004", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Health"] = new engine.RulesElement({
    name: "Spirit of Health",
    type: "Power",
    id: "ID_FMP_POWER_965",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=965",
    categories: ["Spirit of Health", "ID_FMP_POWER_965", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Spiritual Weapon"] = new engine.RulesElement({
    name: "Spiritual Weapon",
    type: "Power",
    id: "ID_FMP_POWER_475",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=475",
    categories: ["Spiritual Weapon", "ID_FMP_POWER_475", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Spiteful Darts"] = new engine.RulesElement({
    name: "Spiteful Darts",
    type: "Power",
    id: "ID_FMP_POWER_1470",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1470",
    categories: ["Spiteful Darts", "ID_FMP_POWER_1470", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Splintering Shot"] = new engine.RulesElement({
    name: "Splintering Shot",
    type: "Power",
    id: "ID_FMP_POWER_2210",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2210",
    categories: ["Splintering Shot", "ID_FMP_POWER_2210", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Split the Sky"] = new engine.RulesElement({
    name: "Split the Sky",
    type: "Power",
    id: "ID_FMP_POWER_896",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=896",
    categories: ["Split the Sky", "ID_FMP_POWER_896", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Split the Tree"] = new engine.RulesElement({
    name: "Split the Tree",
    type: "Power",
    id: "ID_FMP_POWER_2207",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2207",
    categories: ["Split the Tree", "ID_FMP_POWER_2207", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spray of Arrows"] = new engine.RulesElement({
    name: "Spray of Arrows",
    type: "Power",
    id: "ID_FMP_POWER_160",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=160",
    categories: ["Spray of Arrows", "ID_FMP_POWER_160", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Stab and Grab"] = new engine.RulesElement({
    name: "Stab and Grab",
    type: "Power",
    id: "ID_FMP_POWER_1491",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1491",
    categories: ["Stab and Grab", "ID_FMP_POWER_1491", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Staff of Defense"] = new engine.RulesElement({
    name: "Staff of Defense",
    type: "Power",
    id: "ID_FMP_POWER_5595",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5595",
    categories: ["Staff of Defense", "ID_FMP_POWER_5595", "ID_FMP_CLASS_FEATURE_770", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Staggering Smite"] = new engine.RulesElement({
    name: "Staggering Smite",
    type: "Power",
    id: "ID_FMP_POWER_2259",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2259",
    categories: ["Staggering Smite", "ID_FMP_POWER_2259", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Stalwart Guard"] = new engine.RulesElement({
    name: "Stalwart Guard",
    type: "Power",
    id: "ID_FMP_POWER_1442",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1442",
    categories: ["Stalwart Guard", "ID_FMP_POWER_1442", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Stand Invincible"] = new engine.RulesElement({
    name: "Stand Invincible",
    type: "Power",
    id: "ID_FMP_POWER_1133",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1133",
    categories: ["Stand Invincible", "ID_FMP_POWER_1133", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Stand the Fallen"] = new engine.RulesElement({
    name: "Stand the Fallen",
    type: "Power",
    id: "ID_FMP_POWER_1575",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1575",
    categories: ["Stand the Fallen", "ID_FMP_POWER_1575", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Stand Tough"] = new engine.RulesElement({
    name: "Stand Tough",
    type: "Power",
    id: "ID_FMP_POWER_1140",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1140",
    categories: ["Stand Tough", "ID_FMP_POWER_1140", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Star Opal Ring Attack"] = new engine.RulesElement({
    name: "Star Opal Ring Attack",
    type: "Power",
    id: "ID_FMP_POWER_2812",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2812",
    categories: ["Star Opal Ring Attack", "ID_FMP_POWER_2812", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Steel Entrapment"] = new engine.RulesElement({
    name: "Steel Entrapment",
    type: "Power",
    id: "ID_FMP_POWER_990",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=990",
    categories: ["Steel Entrapment", "ID_FMP_POWER_990", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Steel Monsoon"] = new engine.RulesElement({
    name: "Steel Monsoon",
    type: "Power",
    id: "ID_FMP_POWER_1413",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1413",
    categories: ["Steel Monsoon", "ID_FMP_POWER_1413", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Steel Serpent Strike"] = new engine.RulesElement({
    name: "Steel Serpent Strike",
    type: "Power",
    id: "ID_FMP_POWER_1008",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1008",
    categories: ["Steel Serpent Strike", "ID_FMP_POWER_1008", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Stinking Cloud"] = new engine.RulesElement({
    name: "Stinking Cloud",
    type: "Power",
    id: "ID_FMP_POWER_67",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=67",
    categories: ["Stinking Cloud", "ID_FMP_POWER_67", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Stir the Hornet's Nest"] = new engine.RulesElement({
    name: "Stir the Hornet's Nest",
    type: "Power",
    id: "ID_FMP_POWER_117",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=117",
    categories: ["Stir the Hornet's Nest", "ID_FMP_POWER_117", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Stoneskin"] = new engine.RulesElement({
    name: "Stoneskin",
    type: "Power",
    id: "ID_FMP_POWER_402",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=402",
    categories: ["Stoneskin", "ID_FMP_POWER_402", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Cage"] = new engine.RulesElement({
    name: "Storm Cage",
    type: "Power",
    id: "ID_FMP_POWER_1757",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1757",
    categories: ["Storm Cage", "ID_FMP_POWER_1757", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_59", "Spellstorm Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Storm of Blows"] = new engine.RulesElement({
    name: "Storm of Blows",
    type: "Power",
    id: "ID_FMP_POWER_1027",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1027",
    categories: ["Storm of Blows", "ID_FMP_POWER_1027", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Storm of Destruction"] = new engine.RulesElement({
    name: "Storm of Destruction",
    type: "Power",
    id: "ID_FMP_POWER_1113",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1113",
    categories: ["Storm of Destruction", "ID_FMP_POWER_1113", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Strand of Fate"] = new engine.RulesElement({
    name: "Strand of Fate",
    type: "Power",
    id: "ID_FMP_POWER_1466",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1466",
    categories: ["Strand of Fate", "ID_FMP_POWER_1466", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Strengthen the Faithful"] = new engine.RulesElement({
    name: "Strengthen the Faithful",
    type: "Power",
    id: "ID_FMP_POWER_898",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=898",
    categories: ["Strengthen the Faithful", "ID_FMP_POWER_898", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Strike Me Instead"] = new engine.RulesElement({
    name: "Strike Me Instead",
    type: "Power",
    id: "ID_FMP_POWER_1632",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1632",
    categories: ["Strike Me Instead", "ID_FMP_POWER_1632", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_42", "Justiciar", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Strike of the Watchful Guard"] = new engine.RulesElement({
    name: "Strike of the Watchful Guard",
    type: "Power",
    id: "ID_FMP_POWER_1527",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1527",
    categories: ["Strike of the Watchful Guard", "ID_FMP_POWER_1527", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Stunning Smite"] = new engine.RulesElement({
    name: "Stunning Smite",
    type: "Power",
    id: "ID_FMP_POWER_2262",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2262",
    categories: ["Stunning Smite", "ID_FMP_POWER_2262", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Stunning Steel"] = new engine.RulesElement({
    name: "Stunning Steel",
    type: "Power",
    id: "ID_FMP_POWER_873",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=873",
    categories: ["Stunning Steel", "ID_FMP_POWER_873", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Stunning Strike"] = new engine.RulesElement({
    name: "Stunning Strike",
    type: "Power",
    id: "ID_FMP_POWER_983",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=983",
    categories: ["Stunning Strike", "ID_FMP_POWER_983", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Sublime Transposition"] = new engine.RulesElement({
    name: "Sublime Transposition",
    type: "Power",
    id: "ID_FMP_POWER_1242",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1242",
    categories: ["Sublime Transposition", "ID_FMP_POWER_1242", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Assault"] = new engine.RulesElement({
    name: "Sudden Assault",
    type: "Power",
    id: "ID_FMP_POWER_1088",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1088",
    categories: ["Sudden Assault", "ID_FMP_POWER_1088", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Storm"] = new engine.RulesElement({
    name: "Sudden Storm",
    type: "Power",
    id: "ID_FMP_POWER_1756",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1756",
    categories: ["Sudden Storm", "ID_FMP_POWER_1756", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_59", "Spellstorm Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Strike"] = new engine.RulesElement({
    name: "Sudden Strike",
    type: "Power",
    id: "ID_FMP_POWER_393",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=393",
    categories: ["Sudden Strike", "ID_FMP_POWER_393", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Surge"] = new engine.RulesElement({
    name: "Sudden Surge",
    type: "Power",
    id: "ID_FMP_POWER_1018",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1018",
    categories: ["Sudden Surge", "ID_FMP_POWER_1018", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Summons of Khirad"] = new engine.RulesElement({
    name: "Summons of Khirad",
    type: "Power",
    id: "ID_FMP_POWER_1314",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1314",
    categories: ["Summons of Khirad", "ID_FMP_POWER_1314", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Sunburst"] = new engine.RulesElement({
    name: "Sunburst",
    type: "Power",
    id: "ID_FMP_POWER_911",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=911",
    categories: ["Sunburst", "ID_FMP_POWER_911", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Sunder Armor"] = new engine.RulesElement({
    name: "Sunder Armor",
    type: "Power",
    id: "ID_FMP_POWER_1074",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1074",
    categories: ["Sunder Armor", "ID_FMP_POWER_1074", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Superior Tactics"] = new engine.RulesElement({
    name: "Superior Tactics",
    type: "Power",
    id: "ID_FMP_POWER_1666",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1666",
    categories: ["Superior Tactics", "ID_FMP_POWER_1666", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_45", "Combat Veteran", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Supremacy of Steel"] = new engine.RulesElement({
    name: "Supremacy of Steel",
    type: "Power",
    id: "ID_FMP_POWER_1110",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1110",
    categories: ["Supremacy of Steel", "ID_FMP_POWER_1110", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Sure Strike"] = new engine.RulesElement({
    name: "Sure Strike",
    type: "Power",
    id: "ID_FMP_POWER_1758",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1758",
    categories: ["Sure Strike", "ID_FMP_POWER_1758", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Surprise Attack"] = new engine.RulesElement({
    name: "Surprise Attack",
    type: "Power",
    id: "ID_FMP_POWER_1075",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1075",
    categories: ["Surprise Attack", "ID_FMP_POWER_1075", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Surprise Step"] = new engine.RulesElement({
    name: "Surprise Step",
    type: "Power",
    id: "ID_FMP_POWER_1159",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1159",
    categories: ["Surprise Step", "ID_FMP_POWER_1159", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Surround Foe"] = new engine.RulesElement({
    name: "Surround Foe",
    type: "Power",
    id: "ID_FMP_POWER_450",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=450",
    categories: ["Surround Foe", "ID_FMP_POWER_450", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Sweeping Blow"] = new engine.RulesElement({
    name: "Sweeping Blow",
    type: "Power",
    id: "ID_FMP_POWER_291",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=291",
    categories: ["Sweeping Blow", "ID_FMP_POWER_291", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Sweeping Whirlwind"] = new engine.RulesElement({
    name: "Sweeping Whirlwind",
    type: "Power",
    id: "ID_FMP_POWER_1418",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1418",
    categories: ["Sweeping Whirlwind", "ID_FMP_POWER_1418", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Swirling Leaves of Steel"] = new engine.RulesElement({
    name: "Swirling Leaves of Steel",
    type: "Power",
    id: "ID_FMP_POWER_714",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=714",
    categories: ["Swirling Leaves of Steel", "ID_FMP_POWER_714", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Sword Marshal's Boon"] = new engine.RulesElement({
    name: "Sword Marshal's Boon",
    type: "Power",
    id: "ID_FMP_POWER_1673",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1673",
    categories: ["Sword Marshal's Boon", "ID_FMP_POWER_1673", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_48", "Sword Marshal", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Tactical Shift"] = new engine.RulesElement({
    name: "Tactical Shift",
    type: "Power",
    id: "ID_FMP_POWER_1146",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1146",
    categories: ["Tactical Shift", "ID_FMP_POWER_1146", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Talon of the Roc"] = new engine.RulesElement({
    name: "Talon of the Roc",
    type: "Power",
    id: "ID_FMP_POWER_1026",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1026",
    categories: ["Talon of the Roc", "ID_FMP_POWER_1026", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Tartarean Tomb"] = new engine.RulesElement({
    name: "Tartarean Tomb",
    type: "Power",
    id: "ID_FMP_POWER_510",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=510",
    categories: ["Tartarean Tomb", "ID_FMP_POWER_510", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Tendrils of Thuban"] = new engine.RulesElement({
    name: "Tendrils of Thuban",
    type: "Power",
    id: "ID_FMP_POWER_1317",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1317",
    categories: ["Tendrils of Thuban", "ID_FMP_POWER_1317", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Terrifying Smite"] = new engine.RulesElement({
    name: "Terrifying Smite",
    type: "Power",
    id: "ID_FMP_POWER_1251",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1251",
    categories: ["Terrifying Smite", "ID_FMP_POWER_1251", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["The One Sword"] = new engine.RulesElement({
    name: "The One Sword",
    type: "Power",
    id: "ID_FMP_POWER_1620",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1620",
    categories: ["The One Sword", "ID_FMP_POWER_1620", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_32", "Wizard of the Spiral Tower", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Thicket of Blades"] = new engine.RulesElement({
    name: "Thicket of Blades",
    type: "Power",
    id: "ID_FMP_POWER_1092",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1092",
    categories: ["Thicket of Blades", "ID_FMP_POWER_1092", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Thief of Five Fates"] = new engine.RulesElement({
    name: "Thief of Five Fates",
    type: "Power",
    id: "ID_FMP_POWER_1408",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1408",
    categories: ["Thief of Five Fates", "ID_FMP_POWER_1408", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Thirsting Maw"] = new engine.RulesElement({
    name: "Thirsting Maw",
    type: "Power",
    id: "ID_FMP_POWER_1405",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1405",
    categories: ["Thirsting Maw", "ID_FMP_POWER_1405", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Thirsting Tendrils"] = new engine.RulesElement({
    name: "Thirsting Tendrils",
    type: "Power",
    id: "ID_FMP_POWER_1464",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1464",
    categories: ["Thirsting Tendrils", "ID_FMP_POWER_1464", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Thirteen Baleful Stars"] = new engine.RulesElement({
    name: "Thirteen Baleful Stars",
    type: "Power",
    id: "ID_FMP_POWER_1324",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1324",
    categories: ["Thirteen Baleful Stars", "ID_FMP_POWER_1324", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Thorns of Venom"] = new engine.RulesElement({
    name: "Thorns of Venom",
    type: "Power",
    id: "ID_FMP_POWER_1469",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1469",
    categories: ["Thorns of Venom", "ID_FMP_POWER_1469", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Three-in-One Shot"] = new engine.RulesElement({
    name: "Three-in-One Shot",
    type: "Power",
    id: "ID_FMP_POWER_2215",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2215",
    categories: ["Three-in-One Shot", "ID_FMP_POWER_2215", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Throw Caution to the Wind"] = new engine.RulesElement({
    name: "Throw Caution to the Wind",
    type: "Power",
    id: "ID_FMP_POWER_1679",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1679",
    categories: ["Throw Caution to the Wind", "ID_FMP_POWER_1679", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_51", "Stormwarden", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Smite"] = new engine.RulesElement({
    name: "Thunder Smite",
    type: "Power",
    id: "ID_FMP_POWER_778",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=778",
    categories: ["Thunder Smite", "ID_FMP_POWER_778", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderburst Weapon Attack"] = new engine.RulesElement({
    name: "Thunderburst Weapon Attack",
    type: "Power",
    id: "ID_FMP_POWER_2833",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2833",
    categories: ["Thunderburst Weapon Attack", "ID_FMP_POWER_2833", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderclap"] = new engine.RulesElement({
    name: "Thunderclap",
    type: "Power",
    id: "ID_FMP_POWER_1185",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1185",
    categories: ["Thunderclap", "ID_FMP_POWER_1185", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderlance"] = new engine.RulesElement({
    name: "Thunderlance",
    type: "Power",
    id: "ID_FMP_POWER_172",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=172",
    categories: ["Thunderlance", "ID_FMP_POWER_172", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderous Fury"] = new engine.RulesElement({
    name: "Thunderous Fury",
    type: "Power",
    id: "ID_FMP_POWER_1085",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1085",
    categories: ["Thunderous Fury", "ID_FMP_POWER_1085", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderous Word"] = new engine.RulesElement({
    name: "Thunderous Word",
    type: "Power",
    id: "ID_FMP_POWER_903",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=903",
    categories: ["Thunderous Word", "ID_FMP_POWER_903", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Thundertusk Boar Strike"] = new engine.RulesElement({
    name: "Thundertusk Boar Strike",
    type: "Power",
    id: "ID_FMP_POWER_855",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=855",
    categories: ["Thundertusk Boar Strike", "ID_FMP_POWER_855", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderwave"] = new engine.RulesElement({
    name: "Thunderwave",
    type: "Power",
    id: "ID_FMP_POWER_1169",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1169",
    categories: ["Thunderwave", "ID_FMP_POWER_1169", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Tide of Iron"] = new engine.RulesElement({
    name: "Tide of Iron",
    type: "Power",
    id: "ID_FMP_POWER_1000",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1000",
    categories: ["Tide of Iron", "ID_FMP_POWER_1000", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Tiger's Reflex"] = new engine.RulesElement({
    name: "Tiger's Reflex",
    type: "Power",
    id: "ID_FMP_POWER_884",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=884",
    categories: ["Tiger's Reflex", "ID_FMP_POWER_884", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Time Stop"] = new engine.RulesElement({
    name: "Time Stop",
    type: "Power",
    id: "ID_FMP_POWER_1237",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1237",
    categories: ["Time Stop", "ID_FMP_POWER_1237", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["To the Nine Hells with You"] = new engine.RulesElement({
    name: "To the Nine Hells with You",
    type: "Power",
    id: "ID_FMP_POWER_1272",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1272",
    categories: ["To the Nine Hells with You", "ID_FMP_POWER_1272", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Topple Over"] = new engine.RulesElement({
    name: "Topple Over",
    type: "Power",
    id: "ID_FMP_POWER_209",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=209",
    categories: ["Topple Over", "ID_FMP_POWER_209", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Tornado Strike"] = new engine.RulesElement({
    name: "Tornado Strike",
    type: "Power",
    id: "ID_FMP_POWER_984",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=984",
    categories: ["Tornado Strike", "ID_FMP_POWER_984", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Torturous Strike"] = new engine.RulesElement({
    name: "Torturous Strike",
    type: "Power",
    id: "ID_FMP_POWER_1385",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1385",
    categories: ["Torturous Strike", "ID_FMP_POWER_1385", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Trick Strike"] = new engine.RulesElement({
    name: "Trick Strike",
    type: "Power",
    id: "ID_FMP_POWER_1495",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1495",
    categories: ["Trick Strike", "ID_FMP_POWER_1495", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Trickster's Blade"] = new engine.RulesElement({
    name: "Trickster's Blade",
    type: "Power",
    id: "ID_FMP_POWER_550",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=550",
    categories: ["Trickster's Blade", "ID_FMP_POWER_550", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Triple Shot"] = new engine.RulesElement({
    name: "Triple Shot",
    type: "Power",
    id: "ID_FMP_POWER_1536",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1536",
    categories: ["Triple Shot", "ID_FMP_POWER_1536", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["True Nemesis"] = new engine.RulesElement({
    name: "True Nemesis",
    type: "Power",
    id: "ID_FMP_POWER_1275",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1275",
    categories: ["True Nemesis", "ID_FMP_POWER_1275", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Tumble"] = new engine.RulesElement({
    name: "Tumble",
    type: "Power",
    id: "ID_FMP_POWER_1395",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1395",
    categories: ["Tumble", "ID_FMP_POWER_1395", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Turn the Tide"] = new engine.RulesElement({
    name: "Turn the Tide",
    type: "Power",
    id: "ID_FMP_POWER_1446",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1446",
    categories: ["Turn the Tide", "ID_FMP_POWER_1446", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Turn Undead"] = new engine.RulesElement({
    name: "Turn Undead",
    type: "Power",
    id: "ID_FMP_POWER_146",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=146",
    categories: ["Turn Undead", "ID_FMP_POWER_146", "ID_FMP_CLASS_FEATURE_324", "Channel Divinity", "ID_FMP_CLASS_2", "Cleric"]
  });
  byID[te.id] = te;
  
  te = Power["Turning Point"] = new engine.RulesElement({
    name: "Turning Point",
    type: "Power",
    id: "ID_FMP_POWER_1574",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1574",
    categories: ["Turning Point", "ID_FMP_POWER_1574", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Twilight Teleport"] = new engine.RulesElement({
    name: "Twilight Teleport",
    type: "Power",
    id: "ID_FMP_POWER_1661",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1661",
    categories: ["Twilight Teleport", "ID_FMP_POWER_1661", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_14", "Feytouched", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Twin Strike"] = new engine.RulesElement({
    name: "Twin Strike",
    type: "Power",
    id: "ID_FMP_POWER_87",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=87",
    categories: ["Twin Strike", "ID_FMP_POWER_87", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Two-Fanged Strike"] = new engine.RulesElement({
    name: "Two-Fanged Strike",
    type: "Power",
    id: "ID_FMP_POWER_2209",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2209",
    categories: ["Two-Fanged Strike", "ID_FMP_POWER_2209", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Two-in-One Shot"] = new engine.RulesElement({
    name: "Two-in-One Shot",
    type: "Power",
    id: "ID_FMP_POWER_2211",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2211",
    categories: ["Two-in-One Shot", "ID_FMP_POWER_2211", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Two-Weapon Eviscerate"] = new engine.RulesElement({
    name: "Two-Weapon Eviscerate",
    type: "Power",
    id: "ID_FMP_POWER_1388",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1388",
    categories: ["Two-Weapon Eviscerate", "ID_FMP_POWER_1388", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Two-Wolf Pounce"] = new engine.RulesElement({
    name: "Two-Wolf Pounce",
    type: "Power",
    id: "ID_FMP_POWER_86",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=86",
    categories: ["Two-Wolf Pounce", "ID_FMP_POWER_86", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Ultimate Parry"] = new engine.RulesElement({
    name: "Ultimate Parry",
    type: "Power",
    id: "ID_FMP_POWER_1604",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1604",
    categories: ["Ultimate Parry", "ID_FMP_POWER_1604", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_21", "Kensei", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Unbalancing Attack"] = new engine.RulesElement({
    name: "Unbalancing Attack",
    type: "Power",
    id: "ID_FMP_POWER_286",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=286",
    categories: ["Unbalancing Attack", "ID_FMP_POWER_286", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Unbalancing Parry"] = new engine.RulesElement({
    name: "Unbalancing Parry",
    type: "Power",
    id: "ID_FMP_POWER_923",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=923",
    categories: ["Unbalancing Parry", "ID_FMP_POWER_923", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Unbreakable"] = new engine.RulesElement({
    name: "Unbreakable",
    type: "Power",
    id: "ID_FMP_POWER_1441",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1441",
    categories: ["Unbreakable", "ID_FMP_POWER_1441", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Undaunted Stride"] = new engine.RulesElement({
    name: "Undaunted Stride",
    type: "Power",
    id: "ID_FMP_POWER_718",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=718",
    categories: ["Undaunted Stride", "ID_FMP_POWER_718", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["United in Faith"] = new engine.RulesElement({
    name: "United in Faith",
    type: "Power",
    id: "ID_FMP_POWER_707",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=707",
    categories: ["United in Faith", "ID_FMP_POWER_707", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Unstoppable"] = new engine.RulesElement({
    name: "Unstoppable",
    type: "Power",
    id: "ID_FMP_POWER_1119",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1119",
    categories: ["Unstoppable", "ID_FMP_POWER_1119", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Unstoppable Arrows"] = new engine.RulesElement({
    name: "Unstoppable Arrows",
    type: "Power",
    id: "ID_FMP_POWER_2214",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2214",
    categories: ["Unstoppable Arrows", "ID_FMP_POWER_2214", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Unyielding Avalanche"] = new engine.RulesElement({
    name: "Unyielding Avalanche",
    type: "Power",
    id: "ID_FMP_POWER_1103",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1103",
    categories: ["Unyielding Avalanche", "ID_FMP_POWER_1103", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Valiant Strike"] = new engine.RulesElement({
    name: "Valiant Strike",
    type: "Power",
    id: "ID_FMP_POWER_835",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=835",
    categories: ["Valiant Strike", "ID_FMP_POWER_835", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Vampiric Embrace"] = new engine.RulesElement({
    name: "Vampiric Embrace",
    type: "Power",
    id: "ID_FMP_POWER_1376",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1376",
    categories: ["Vampiric Embrace", "ID_FMP_POWER_1376", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Victorious Surge"] = new engine.RulesElement({
    name: "Victorious Surge",
    type: "Power",
    id: "ID_FMP_POWER_1438",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1438",
    categories: ["Victorious Surge", "ID_FMP_POWER_1438", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Victory Surge"] = new engine.RulesElement({
    name: "Victory Surge",
    type: "Power",
    id: "ID_FMP_POWER_1123",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1123",
    categories: ["Victory Surge", "ID_FMP_POWER_1123", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Villain's Menace"] = new engine.RulesElement({
    name: "Villain's Menace",
    type: "Power",
    id: "ID_FMP_POWER_1429",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1429",
    categories: ["Villain's Menace", "ID_FMP_POWER_1429", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Villain's Nightmare"] = new engine.RulesElement({
    name: "Villain's Nightmare",
    type: "Power",
    id: "ID_FMP_POWER_1414",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1414",
    categories: ["Villain's Nightmare", "ID_FMP_POWER_1414", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Viper's Strike"] = new engine.RulesElement({
    name: "Viper's Strike",
    type: "Power",
    id: "ID_FMP_POWER_1063",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1063",
    categories: ["Viper's Strike", "ID_FMP_POWER_1063", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Vorpal Tornado"] = new engine.RulesElement({
    name: "Vorpal Tornado",
    type: "Power",
    id: "ID_FMP_POWER_1517",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1517",
    categories: ["Vorpal Tornado", "ID_FMP_POWER_1517", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Walking Wounded"] = new engine.RulesElement({
    name: "Walking Wounded",
    type: "Power",
    id: "ID_FMP_POWER_999",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=999",
    categories: ["Walking Wounded", "ID_FMP_POWER_999", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Wall of Fire"] = new engine.RulesElement({
    name: "Wall of Fire",
    type: "Power",
    id: "ID_FMP_POWER_722",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=722",
    categories: ["Wall of Fire", "ID_FMP_POWER_722", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Wall of Fog"] = new engine.RulesElement({
    name: "Wall of Fog",
    type: "Power",
    id: "ID_FMP_POWER_1548",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1548",
    categories: ["Wall of Fog", "ID_FMP_POWER_1548", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Wall of Ice"] = new engine.RulesElement({
    name: "Wall of Ice",
    type: "Power",
    id: "ID_FMP_POWER_1197",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1197",
    categories: ["Wall of Ice", "ID_FMP_POWER_1197", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Wand of Accuracy"] = new engine.RulesElement({
    name: "Wand of Accuracy",
    type: "Power",
    id: "ID_FMP_POWER_5596",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5596",
    categories: ["Wand of Accuracy", "ID_FMP_POWER_5596", "ID_FMP_CLASS_FEATURE_771", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Wandering Tornado"] = new engine.RulesElement({
    name: "Wandering Tornado",
    type: "Power",
    id: "ID_FMP_POWER_1552",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1552",
    categories: ["Wandering Tornado", "ID_FMP_POWER_1552", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Warding Blow"] = new engine.RulesElement({
    name: "Warding Blow",
    type: "Power",
    id: "ID_FMP_POWER_1630",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1630",
    categories: ["Warding Blow", "ID_FMP_POWER_1630", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_41", "Hospitaler", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Warlock's Bargain"] = new engine.RulesElement({
    name: "Warlock's Bargain",
    type: "Power",
    id: "ID_FMP_POWER_1465",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1465",
    categories: ["Warlock's Bargain", "ID_FMP_POWER_1465", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Warlock's Curse"] = new engine.RulesElement({
    name: "Warlock's Curse",
    type: "Power",
    id: "ID_FMP_POWER_5597",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5597",
    categories: ["Warlock's Curse", "ID_FMP_POWER_5597", "ID_FMP_CLASS_FEATURE_605", "ID_FMP_CLASS_FEATURE_1533", "Warlock's Curse (Hybrid)", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Warlock's Leap"] = new engine.RulesElement({
    name: "Warlock's Leap",
    type: "Power",
    id: "ID_FMP_POWER_662",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=662",
    categories: ["Warlock's Leap", "ID_FMP_POWER_662", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Warlord's Banner"] = new engine.RulesElement({
    name: "Warlord's Banner",
    type: "Power",
    id: "ID_FMP_POWER_1149",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1149",
    categories: ["Warlord's Banner", "ID_FMP_POWER_1149", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Warlord's Doom"] = new engine.RulesElement({
    name: "Warlord's Doom",
    type: "Power",
    id: "ID_FMP_POWER_1090",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1090",
    categories: ["Warlord's Doom", "ID_FMP_POWER_1090", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Warlord's Favor"] = new engine.RulesElement({
    name: "Warlord's Favor",
    type: "Power",
    id: "ID_FMP_POWER_1066",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1066",
    categories: ["Warlord's Favor", "ID_FMP_POWER_1066", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Warlord's Gambit"] = new engine.RulesElement({
    name: "Warlord's Gambit",
    type: "Power",
    id: "ID_FMP_POWER_1080",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1080",
    categories: ["Warlord's Gambit", "ID_FMP_POWER_1080", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Warlord's Rush"] = new engine.RulesElement({
    name: "Warlord's Rush",
    type: "Power",
    id: "ID_FMP_POWER_1560",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1560",
    categories: ["Warlord's Rush", "ID_FMP_POWER_1560", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Warlord's Strike"] = new engine.RulesElement({
    name: "Warlord's Strike",
    type: "Power",
    id: "ID_FMP_POWER_1065",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1065",
    categories: ["Warlord's Strike", "ID_FMP_POWER_1065", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Warrior's Challenge"] = new engine.RulesElement({
    name: "Warrior's Challenge",
    type: "Power",
    id: "ID_FMP_POWER_1513",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1513",
    categories: ["Warrior's Challenge", "ID_FMP_POWER_1513", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Warrior's Urging"] = new engine.RulesElement({
    name: "Warrior's Urging",
    type: "Power",
    id: "ID_FMP_POWER_2194",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2194",
    categories: ["Warrior's Urging", "ID_FMP_POWER_2194", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Weapon of the Gods"] = new engine.RulesElement({
    name: "Weapon of the Gods",
    type: "Power",
    id: "ID_FMP_POWER_1406",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1406",
    categories: ["Weapon of the Gods", "ID_FMP_POWER_1406", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Weaponsoul Dance"] = new engine.RulesElement({
    name: "Weaponsoul Dance",
    type: "Power",
    id: "ID_FMP_POWER_1605",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1605",
    categories: ["Weaponsoul Dance", "ID_FMP_POWER_1605", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_21", "Kensei", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Weave a Web of Steel"] = new engine.RulesElement({
    name: "Weave a Web of Steel",
    type: "Power",
    id: "ID_FMP_POWER_744",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=744",
    categories: ["Weave a Web of Steel", "ID_FMP_POWER_744", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Weave Through the Fray"] = new engine.RulesElement({
    name: "Weave Through the Fray",
    type: "Power",
    id: "ID_FMP_POWER_748",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=748",
    categories: ["Weave Through the Fray", "ID_FMP_POWER_748", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Web"] = new engine.RulesElement({
    name: "Web",
    type: "Power",
    id: "ID_FMP_POWER_259",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=259",
    categories: ["Web", "ID_FMP_POWER_259", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Whirlwind Smite"] = new engine.RulesElement({
    name: "Whirlwind Smite",
    type: "Power",
    id: "ID_FMP_POWER_1260",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1260",
    categories: ["Whirlwind Smite", "ID_FMP_POWER_1260", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Whispers of the Fey"] = new engine.RulesElement({
    name: "Whispers of the Fey",
    type: "Power",
    id: "ID_FMP_POWER_1659",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1659",
    categories: ["Whispers of the Fey", "ID_FMP_POWER_1659", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_14", "Feytouched", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["White Raven Formation"] = new engine.RulesElement({
    name: "White Raven Formation",
    type: "Power",
    id: "ID_FMP_POWER_1148",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1148",
    categories: ["White Raven Formation", "ID_FMP_POWER_1148", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["White Raven Onslaught"] = new engine.RulesElement({
    name: "White Raven Onslaught",
    type: "Power",
    id: "ID_FMP_POWER_1572",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1572",
    categories: ["White Raven Onslaught", "ID_FMP_POWER_1572", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["White Raven Strike"] = new engine.RulesElement({
    name: "White Raven Strike",
    type: "Power",
    id: "ID_FMP_POWER_1115",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1115",
    categories: ["White Raven Strike", "ID_FMP_POWER_1115", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["White Raven's Call"] = new engine.RulesElement({
    name: "White Raven's Call",
    type: "Power",
    id: "ID_FMP_POWER_1129",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1129",
    categories: ["White Raven's Call", "ID_FMP_POWER_1129", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Will of the Feywild"] = new engine.RulesElement({
    name: "Will of the Feywild",
    type: "Power",
    id: "ID_FMP_POWER_1695",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1695",
    categories: ["Will of the Feywild", "ID_FMP_POWER_1695", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_14", "Feytouched", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Windmill of Doom"] = new engine.RulesElement({
    name: "Windmill of Doom",
    type: "Power",
    id: "ID_FMP_POWER_2226",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2226",
    categories: ["Windmill of Doom", "ID_FMP_POWER_2226", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Wings of the Fiend"] = new engine.RulesElement({
    name: "Wings of the Fiend",
    type: "Power",
    id: "ID_FMP_POWER_207",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=207",
    categories: ["Wings of the Fiend", "ID_FMP_POWER_207", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Winter's Wrath"] = new engine.RulesElement({
    name: "Winter's Wrath",
    type: "Power",
    id: "ID_FMP_POWER_1430",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1430",
    categories: ["Winter's Wrath", "ID_FMP_POWER_1430", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Witchfire"] = new engine.RulesElement({
    name: "Witchfire",
    type: "Power",
    id: "ID_FMP_POWER_1459",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1459",
    categories: ["Witchfire", "ID_FMP_POWER_1459", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Wolf Pack Tactics"] = new engine.RulesElement({
    name: "Wolf Pack Tactics",
    type: "Power",
    id: "ID_FMP_POWER_620",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=620",
    categories: ["Wolf Pack Tactics", "ID_FMP_POWER_620", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Wounding Whirlwind"] = new engine.RulesElement({
    name: "Wounding Whirlwind",
    type: "Power",
    id: "ID_FMP_POWER_882",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=882",
    categories: ["Wounding Whirlwind", "ID_FMP_POWER_882", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Wrath of Acamar"] = new engine.RulesElement({
    name: "Wrath of Acamar",
    type: "Power",
    id: "ID_FMP_POWER_1374",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1374",
    categories: ["Wrath of Acamar", "ID_FMP_POWER_1374", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Wrath of the Gods"] = new engine.RulesElement({
    name: "Wrath of the Gods",
    type: "Power",
    id: "ID_FMP_POWER_1279",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1279",
    categories: ["Wrath of the Gods", "ID_FMP_POWER_1279", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Wrathful Thunder"] = new engine.RulesElement({
    name: "Wrathful Thunder",
    type: "Power",
    id: "ID_FMP_POWER_892",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=892",
    categories: ["Wrathful Thunder", "ID_FMP_POWER_892", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Wrong Step"] = new engine.RulesElement({
    name: "Wrong Step",
    type: "Power",
    id: "ID_FMP_POWER_1677",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1677",
    categories: ["Wrong Step", "ID_FMP_POWER_1677", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_49", "Pathfinder", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Yield Ground"] = new engine.RulesElement({
    name: "Yield Ground",
    type: "Power",
    id: "ID_FMP_POWER_749",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=749",
    categories: ["Yield Ground", "ID_FMP_POWER_749", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
