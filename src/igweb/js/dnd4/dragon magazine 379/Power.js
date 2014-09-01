define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Ambush from Thin Air"] = new engine.RulesElement({
    name: "Ambush from Thin Air",
    type: "Power",
    id: "ID_FMP_POWER_9475",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9475",
    categories: ["Ambush from Thin Air", "ID_FMP_POWER_9475", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Angelic Witnesses"] = new engine.RulesElement({
    name: "Angelic Witnesses",
    type: "Power",
    id: "ID_FMP_POWER_9982",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9982",
    categories: ["Angelic Witnesses", "ID_FMP_POWER_9982", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Overload"] = new engine.RulesElement({
    name: "Arcane Overload",
    type: "Power",
    id: "ID_FMP_POWER_10025",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10025",
    categories: ["Arcane Overload", "ID_FMP_POWER_10025", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_516", "Dragonfoe Ragespell", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Army of the Night"] = new engine.RulesElement({
    name: "Army of the Night",
    type: "Power",
    id: "ID_FMP_POWER_9419",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9419",
    categories: ["Army of the Night", "ID_FMP_POWER_9419", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Assassin's Defense"] = new engine.RulesElement({
    name: "Assassin's Defense",
    type: "Power",
    id: "ID_FMP_POWER_9451",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9451",
    categories: ["Assassin's Defense", "ID_FMP_POWER_9451", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Assassin's Eye"] = new engine.RulesElement({
    name: "Assassin's Eye",
    type: "Power",
    id: "ID_FMP_POWER_9463",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9463",
    categories: ["Assassin's Eye", "ID_FMP_POWER_9463", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Assassin's Scalpel"] = new engine.RulesElement({
    name: "Assassin's Scalpel",
    type: "Power",
    id: "ID_FMP_POWER_9471",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9471",
    categories: ["Assassin's Scalpel", "ID_FMP_POWER_9471", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Assassin's Shroud"] = new engine.RulesElement({
    name: "Assassin's Shroud",
    type: "Power",
    id: "ID_FMP_POWER_9400",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9400",
    categories: ["Assassin's Shroud", "ID_FMP_POWER_9400"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Furor"] = new engine.RulesElement({
    name: "Battle Furor",
    type: "Power",
    id: "ID_FMP_POWER_10006",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10006",
    categories: ["Battle Furor", "ID_FMP_POWER_10006", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Bitter Harvest"] = new engine.RulesElement({
    name: "Bitter Harvest",
    type: "Power",
    id: "ID_FMP_POWER_10004",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10004",
    categories: ["Bitter Harvest", "ID_FMP_POWER_10004", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Bitter Strike"] = new engine.RulesElement({
    name: "Bitter Strike",
    type: "Power",
    id: "ID_FMP_POWER_10014",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10014",
    categories: ["Bitter Strike", "ID_FMP_POWER_10014", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_513", "Siegebreaker", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Black Garrote"] = new engine.RulesElement({
    name: "Black Garrote",
    type: "Power",
    id: "ID_FMP_POWER_9435",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9435",
    categories: ["Black Garrote", "ID_FMP_POWER_9435", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Blade from the Mist"] = new engine.RulesElement({
    name: "Blade from the Mist",
    type: "Power",
    id: "ID_FMP_POWER_9483",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9483",
    categories: ["Blade from the Mist", "ID_FMP_POWER_9483", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_467", "Obsidian Stalker", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Bleak Gallows"] = new engine.RulesElement({
    name: "Bleak Gallows",
    type: "Power",
    id: "ID_FMP_POWER_9447",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9447",
    categories: ["Bleak Gallows", "ID_FMP_POWER_9447", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Blocking Maneuver"] = new engine.RulesElement({
    name: "Blocking Maneuver",
    type: "Power",
    id: "ID_FMP_POWER_10013",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10013",
    categories: ["Blocking Maneuver", "ID_FMP_POWER_10013", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_512", "Great Weapon Master", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Bound by Shadow"] = new engine.RulesElement({
    name: "Bound by Shadow",
    type: "Power",
    id: "ID_FMP_POWER_9436",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9436",
    categories: ["Bound by Shadow", "ID_FMP_POWER_9436", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Brutal Advance"] = new engine.RulesElement({
    name: "Brutal Advance",
    type: "Power",
    id: "ID_FMP_POWER_9996",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9996",
    categories: ["Brutal Advance", "ID_FMP_POWER_9996", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Brutal Momentum"] = new engine.RulesElement({
    name: "Brutal Momentum",
    type: "Power",
    id: "ID_FMP_POWER_10016",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10016",
    categories: ["Brutal Momentum", "ID_FMP_POWER_10016", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_513", "Siegebreaker", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Captured Shadow"] = new engine.RulesElement({
    name: "Captured Shadow",
    type: "Power",
    id: "ID_FMP_POWER_9431",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9431",
    categories: ["Captured Shadow", "ID_FMP_POWER_9431", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Cat's Trickery"] = new engine.RulesElement({
    name: "Cat's Trickery",
    type: "Power",
    id: "ID_FMP_POWER_9415",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9415",
    categories: ["Cat's Trickery", "ID_FMP_POWER_9415", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Chains of Blazing Light"] = new engine.RulesElement({
    name: "Chains of Blazing Light",
    type: "Power",
    id: "ID_FMP_POWER_9988",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9988",
    categories: ["Chains of Blazing Light", "ID_FMP_POWER_9988", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Claim the Dead"] = new engine.RulesElement({
    name: "Claim the Dead",
    type: "Power",
    id: "ID_FMP_POWER_9464",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9464",
    categories: ["Claim the Dead", "ID_FMP_POWER_9464", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Cloak of Shades"] = new engine.RulesElement({
    name: "Cloak of Shades",
    type: "Power",
    id: "ID_FMP_POWER_9416",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9416",
    categories: ["Cloak of Shades", "ID_FMP_POWER_9416", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Cloaking Mist"] = new engine.RulesElement({
    name: "Cloaking Mist",
    type: "Power",
    id: "ID_FMP_POWER_9420",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9420",
    categories: ["Cloaking Mist", "ID_FMP_POWER_9420", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Consign to Shadow"] = new engine.RulesElement({
    name: "Consign to Shadow",
    type: "Power",
    id: "ID_FMP_POWER_9459",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9459",
    categories: ["Consign to Shadow", "ID_FMP_POWER_9459", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Cruel Shadows"] = new engine.RulesElement({
    name: "Cruel Shadows",
    type: "Power",
    id: "ID_FMP_POWER_9467",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9467",
    categories: ["Cruel Shadows", "ID_FMP_POWER_9467", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Cursefire Light"] = new engine.RulesElement({
    name: "Cursefire Light",
    type: "Power",
    id: "ID_FMP_POWER_10023",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10023",
    categories: ["Cursefire Light", "ID_FMP_POWER_10023", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_515", "Underchasm Darkwatcher", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Dark Step Ambush"] = new engine.RulesElement({
    name: "Dark Step Ambush",
    type: "Power",
    id: "ID_FMP_POWER_9443",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9443",
    categories: ["Dark Step Ambush", "ID_FMP_POWER_9443", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Darting Shadow"] = new engine.RulesElement({
    name: "Darting Shadow",
    type: "Power",
    id: "ID_FMP_POWER_9427",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9427",
    categories: ["Darting Shadow", "ID_FMP_POWER_9427", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Death's Doorstep"] = new engine.RulesElement({
    name: "Death's Doorstep",
    type: "Power",
    id: "ID_FMP_POWER_9448",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9448",
    categories: ["Death's Doorstep", "ID_FMP_POWER_9448", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Deepdark Strike"] = new engine.RulesElement({
    name: "Deepdark Strike",
    type: "Power",
    id: "ID_FMP_POWER_10020",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10020",
    categories: ["Deepdark Strike", "ID_FMP_POWER_10020", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_515", "Underchasm Darkwatcher", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Destined Duel"] = new engine.RulesElement({
    name: "Destined Duel",
    type: "Power",
    id: "ID_FMP_POWER_9983",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9983",
    categories: ["Destined Duel", "ID_FMP_POWER_9983", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Juggernaut"] = new engine.RulesElement({
    name: "Divine Juggernaut",
    type: "Power",
    id: "ID_FMP_POWER_9984",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9984",
    categories: ["Divine Juggernaut", "ID_FMP_POWER_9984", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Doom Foretold"] = new engine.RulesElement({
    name: "Doom Foretold",
    type: "Power",
    id: "ID_FMP_POWER_9479",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9479",
    categories: ["Doom Foretold", "ID_FMP_POWER_9479", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Echoing Threat"] = new engine.RulesElement({
    name: "Echoing Threat",
    type: "Power",
    id: "ID_FMP_POWER_9432",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9432",
    categories: ["Echoing Threat", "ID_FMP_POWER_9432", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Entangling Shield"] = new engine.RulesElement({
    name: "Entangling Shield",
    type: "Power",
    id: "ID_FMP_POWER_9969",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9969",
    categories: ["Entangling Shield", "ID_FMP_POWER_9969", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Executioner's Blade"] = new engine.RulesElement({
    name: "Executioner's Blade",
    type: "Power",
    id: "ID_FMP_POWER_9460",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9460",
    categories: ["Executioner's Blade", "ID_FMP_POWER_9460", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Executioner's Noose"] = new engine.RulesElement({
    name: "Executioner's Noose",
    type: "Power",
    id: "ID_FMP_POWER_9403",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9403",
    categories: ["Executioner's Noose", "ID_FMP_POWER_9403", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Final Ending"] = new engine.RulesElement({
    name: "Final Ending",
    type: "Power",
    id: "ID_FMP_POWER_9494",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9494",
    categories: ["Final Ending", "ID_FMP_POWER_9494", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_469", "Soul Thief", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Flurry of Talons"] = new engine.RulesElement({
    name: "Flurry of Talons",
    type: "Power",
    id: "ID_FMP_POWER_9444",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9444",
    categories: ["Flurry of Talons", "ID_FMP_POWER_9444", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Folded Shadow"] = new engine.RulesElement({
    name: "Folded Shadow",
    type: "Power",
    id: "ID_FMP_POWER_9472",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9472",
    categories: ["Folded Shadow", "ID_FMP_POWER_9472", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Forgemaster's Flame"] = new engine.RulesElement({
    name: "Forgemaster's Flame",
    type: "Power",
    id: "ID_FMP_POWER_9986",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9986",
    categories: ["Forgemaster's Flame", "ID_FMP_POWER_9986", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Lightning Lord"] = new engine.RulesElement({
    name: "Form of the Lightning Lord",
    type: "Power",
    id: "ID_FMP_POWER_9975",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9975",
    categories: ["Form of the Lightning Lord", "ID_FMP_POWER_9975", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9976"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Lightning Lord Attack"] = new engine.RulesElement({
    name: "Form of the Lightning Lord Attack",
    type: "Power",
    id: "ID_FMP_POWER_9976",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9976",
    categories: ["Form of the Lightning Lord Attack", "ID_FMP_POWER_9976", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Form of the Stag Knight"] = new engine.RulesElement({
    name: "Form of the Stag Knight",
    type: "Power",
    id: "ID_FMP_POWER_9978",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9978",
    categories: ["Form of the Stag Knight", "ID_FMP_POWER_9978", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_511", "Guardian of Two Worlds", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9979"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Stag Knight Attack"] = new engine.RulesElement({
    name: "Form of the Stag Knight Attack",
    type: "Power",
    id: "ID_FMP_POWER_9979",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9979",
    categories: ["Form of the Stag Knight Attack", "ID_FMP_POWER_9979", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_511", "Guardian of Two Worlds", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss"],
    rules: function(model) {
      model.statadd("Action Point", "Form of the Stag Knight Attack:");
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Umber Hulk"] = new engine.RulesElement({
    name: "Form of the Umber Hulk",
    type: "Power",
    id: "ID_FMP_POWER_10021",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10021",
    categories: ["Form of the Umber Hulk", "ID_FMP_POWER_10021", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_515", "Underchasm Darkwatcher", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10022"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Form of the Umber Hulk Attack"] = new engine.RulesElement({
    name: "Form of the Umber Hulk Attack",
    type: "Power",
    id: "ID_FMP_POWER_10022",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10022",
    categories: ["Form of the Umber Hulk Attack", "ID_FMP_POWER_10022", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_515", "Underchasm Darkwatcher", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Fortress of Shadow"] = new engine.RulesElement({
    name: "Fortress of Shadow",
    type: "Power",
    id: "ID_FMP_POWER_9465",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9465",
    categories: ["Fortress of Shadow", "ID_FMP_POWER_9465", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Gift of Good Fortune"] = new engine.RulesElement({
    name: "Gift of Good Fortune",
    type: "Power",
    id: "ID_FMP_POWER_9985",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9985",
    categories: ["Gift of Good Fortune", "ID_FMP_POWER_9985", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Gloom Thief"] = new engine.RulesElement({
    name: "Gloom Thief",
    type: "Power",
    id: "ID_FMP_POWER_9407",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9407",
    categories: ["Gloom Thief", "ID_FMP_POWER_9407", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Grasp of the Obsidian Tomb"] = new engine.RulesElement({
    name: "Grasp of the Obsidian Tomb",
    type: "Power",
    id: "ID_FMP_POWER_9484",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9484",
    categories: ["Grasp of the Obsidian Tomb", "ID_FMP_POWER_9484", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_467", "Obsidian Stalker", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Grave Spike"] = new engine.RulesElement({
    name: "Grave Spike",
    type: "Power",
    id: "ID_FMP_POWER_9411",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9411",
    categories: ["Grave Spike", "ID_FMP_POWER_9411", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Grim Warning"] = new engine.RulesElement({
    name: "Grim Warning",
    type: "Power",
    id: "ID_FMP_POWER_10011",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10011",
    categories: ["Grim Warning", "ID_FMP_POWER_10011", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_512", "Great Weapon Master", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Guild of Shadows"] = new engine.RulesElement({
    name: "Guild of Shadows",
    type: "Power",
    id: "ID_FMP_POWER_9461",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9461",
    categories: ["Guild of Shadows", "ID_FMP_POWER_9461", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Heart of Dust"] = new engine.RulesElement({
    name: "Heart of Dust",
    type: "Power",
    id: "ID_FMP_POWER_9423",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9423",
    categories: ["Heart of Dust", "ID_FMP_POWER_9423", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Hunter's Eye"] = new engine.RulesElement({
    name: "Hunter's Eye",
    type: "Power",
    id: "ID_FMP_POWER_9487",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9487",
    categories: ["Hunter's Eye", "ID_FMP_POWER_9487", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_467", "Obsidian Stalker", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Hurricane Strike"] = new engine.RulesElement({
    name: "Hurricane Strike",
    type: "Power",
    id: "ID_FMP_POWER_10002",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10002",
    categories: ["Hurricane Strike", "ID_FMP_POWER_10002", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Image of Death"] = new engine.RulesElement({
    name: "Image of Death",
    type: "Power",
    id: "ID_FMP_POWER_10010",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10010",
    categories: ["Image of Death", "ID_FMP_POWER_10010", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Inertia Strike"] = new engine.RulesElement({
    name: "Inertia Strike",
    type: "Power",
    id: "ID_FMP_POWER_9998",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9998",
    categories: ["Inertia Strike", "ID_FMP_POWER_9998", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Inescapable Blade"] = new engine.RulesElement({
    name: "Inescapable Blade",
    type: "Power",
    id: "ID_FMP_POWER_9404",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9404",
    categories: ["Inescapable Blade", "ID_FMP_POWER_9404", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Inescapable Shadow"] = new engine.RulesElement({
    name: "Inescapable Shadow",
    type: "Power",
    id: "ID_FMP_POWER_9421",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9421",
    categories: ["Inescapable Shadow", "ID_FMP_POWER_9421", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Inescapable Venom"] = new engine.RulesElement({
    name: "Inescapable Venom",
    type: "Power",
    id: "ID_FMP_POWER_9496",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9496",
    categories: ["Inescapable Venom", "ID_FMP_POWER_9496", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_470", "Venomed Soul", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Intent to Murder"] = new engine.RulesElement({
    name: "Intent to Murder",
    type: "Power",
    id: "ID_FMP_POWER_9480",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9480",
    categories: ["Intent to Murder", "ID_FMP_POWER_9480", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Killer's Judgment"] = new engine.RulesElement({
    name: "Killer's Judgment",
    type: "Power",
    id: "ID_FMP_POWER_9499",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9499",
    categories: ["Killer's Judgment", "ID_FMP_POWER_9499", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_471", "Perfect Slayer", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Land Shark Charge"] = new engine.RulesElement({
    name: "Land Shark Charge",
    type: "Power",
    id: "ID_FMP_POWER_9973",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9973",
    categories: ["Land Shark Charge", "ID_FMP_POWER_9973", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Last Word"] = new engine.RulesElement({
    name: "Last Word",
    type: "Power",
    id: "ID_FMP_POWER_9476",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9476",
    categories: ["Last Word", "ID_FMP_POWER_9476", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Leaping Assault"] = new engine.RulesElement({
    name: "Leaping Assault",
    type: "Power",
    id: "ID_FMP_POWER_10001",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10001",
    categories: ["Leaping Assault", "ID_FMP_POWER_10001", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Leaping Shade"] = new engine.RulesElement({
    name: "Leaping Shade",
    type: "Power",
    id: "ID_FMP_POWER_9405",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9405",
    categories: ["Leaping Shade", "ID_FMP_POWER_9405", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Limbs of the Tree Spider"] = new engine.RulesElement({
    name: "Limbs of the Tree Spider",
    type: "Power",
    id: "ID_FMP_POWER_9967",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9967",
    categories: ["Limbs of the Tree Spider", "ID_FMP_POWER_9967", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Line in the Sand"] = new engine.RulesElement({
    name: "Line in the Sand",
    type: "Power",
    id: "ID_FMP_POWER_9997",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9997",
    categories: ["Line in the Sand", "ID_FMP_POWER_9997", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Liquid Shadow"] = new engine.RulesElement({
    name: "Liquid Shadow",
    type: "Power",
    id: "ID_FMP_POWER_9452",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9452",
    categories: ["Liquid Shadow", "ID_FMP_POWER_9452", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Lurking Shadow"] = new engine.RulesElement({
    name: "Lurking Shadow",
    type: "Power",
    id: "ID_FMP_POWER_9417",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9417",
    categories: ["Lurking Shadow", "ID_FMP_POWER_9417", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Mighty Surge"] = new engine.RulesElement({
    name: "Mighty Surge",
    type: "Power",
    id: "ID_FMP_POWER_10000",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10000",
    categories: ["Mighty Surge", "ID_FMP_POWER_10000", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Mist Walk"] = new engine.RulesElement({
    name: "Mist Walk",
    type: "Power",
    id: "ID_FMP_POWER_9439",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9439",
    categories: ["Mist Walk", "ID_FMP_POWER_9439", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Mob of Shadows"] = new engine.RulesElement({
    name: "Mob of Shadows",
    type: "Power",
    id: "ID_FMP_POWER_9455",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9455",
    categories: ["Mob of Shadows", "ID_FMP_POWER_9455", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Murderous Assault"] = new engine.RulesElement({
    name: "Murderous Assault",
    type: "Power",
    id: "ID_FMP_POWER_9999",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9999",
    categories: ["Murderous Assault", "ID_FMP_POWER_9999", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Nightmare Shades"] = new engine.RulesElement({
    name: "Nightmare Shades",
    type: "Power",
    id: "ID_FMP_POWER_9408",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9408",
    categories: ["Nightmare Shades", "ID_FMP_POWER_9408", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Nightshade's Kiss"] = new engine.RulesElement({
    name: "Nightshade's Kiss",
    type: "Power",
    id: "ID_FMP_POWER_9422",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9422",
    categories: ["Nightshade's Kiss", "ID_FMP_POWER_9422", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Obscuring Shadow"] = new engine.RulesElement({
    name: "Obscuring Shadow",
    type: "Power",
    id: "ID_FMP_POWER_9437",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9437",
    categories: ["Obscuring Shadow", "ID_FMP_POWER_9437", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Obsidian Spiders"] = new engine.RulesElement({
    name: "Obsidian Spiders",
    type: "Power",
    id: "ID_FMP_POWER_9468",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9468",
    categories: ["Obsidian Spiders", "ID_FMP_POWER_9468", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["One with the Blade"] = new engine.RulesElement({
    name: "One with the Blade",
    type: "Power",
    id: "ID_FMP_POWER_10019",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10019",
    categories: ["One with the Blade", "ID_FMP_POWER_10019", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_514", "Shyran Spiritblade", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Phantom Assault"] = new engine.RulesElement({
    name: "Phantom Assault",
    type: "Power",
    id: "ID_FMP_POWER_9462",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9462",
    categories: ["Phantom Assault", "ID_FMP_POWER_9462", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Prayer Made Real"] = new engine.RulesElement({
    name: "Prayer Made Real",
    type: "Power",
    id: "ID_FMP_POWER_9990",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9990",
    categories: ["Prayer Made Real", "ID_FMP_POWER_9990", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Cascade"] = new engine.RulesElement({
    name: "Primal Cascade",
    type: "Power",
    id: "ID_FMP_POWER_9974",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9974",
    categories: ["Primal Cascade", "ID_FMP_POWER_9974", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Promise of Retribution"] = new engine.RulesElement({
    name: "Promise of Retribution",
    type: "Power",
    id: "ID_FMP_POWER_9440",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9440",
    categories: ["Promise of Retribution", "ID_FMP_POWER_9440", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Punishing Charge"] = new engine.RulesElement({
    name: "Punishing Charge",
    type: "Power",
    id: "ID_FMP_POWER_9991",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9991",
    categories: ["Punishing Charge", "ID_FMP_POWER_9991", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Reaper in Black"] = new engine.RulesElement({
    name: "Reaper in Black",
    type: "Power",
    id: "ID_FMP_POWER_9477",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9477",
    categories: ["Reaper in Black", "ID_FMP_POWER_9477", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Reaper's Touch"] = new engine.RulesElement({
    name: "Reaper's Touch",
    type: "Power",
    id: "ID_FMP_POWER_9473",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9473",
    categories: ["Reaper's Touch", "ID_FMP_POWER_9473", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Reckless Ram Assault"] = new engine.RulesElement({
    name: "Reckless Ram Assault",
    type: "Power",
    id: "ID_FMP_POWER_9972",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9972",
    categories: ["Reckless Ram Assault", "ID_FMP_POWER_9972", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Resilient Denial"] = new engine.RulesElement({
    name: "Resilient Denial",
    type: "Power",
    id: "ID_FMP_POWER_10026",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10026",
    categories: ["Resilient Denial", "ID_FMP_POWER_10026", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_516", "Dragonfoe Ragespell", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Restoring Strike"] = new engine.RulesElement({
    name: "Restoring Strike",
    type: "Power",
    id: "ID_FMP_POWER_9995",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9995",
    categories: ["Restoring Strike", "ID_FMP_POWER_9995", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Reverent Mettle"] = new engine.RulesElement({
    name: "Reverent Mettle",
    type: "Power",
    id: "ID_FMP_POWER_9987",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9987",
    categories: ["Reverent Mettle", "ID_FMP_POWER_9987", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Sacred Armistice"] = new engine.RulesElement({
    name: "Sacred Armistice",
    type: "Power",
    id: "ID_FMP_POWER_9989",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9989",
    categories: ["Sacred Armistice", "ID_FMP_POWER_9989", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Savage Advance"] = new engine.RulesElement({
    name: "Savage Advance",
    type: "Power",
    id: "ID_FMP_POWER_9992",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9992",
    categories: ["Savage Advance", "ID_FMP_POWER_9992", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Scattering Strike"] = new engine.RulesElement({
    name: "Scattering Strike",
    type: "Power",
    id: "ID_FMP_POWER_10012",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10012",
    categories: ["Scattering Strike", "ID_FMP_POWER_10012", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_512", "Great Weapon Master", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Seeker of Shadow"] = new engine.RulesElement({
    name: "Seeker of Shadow",
    type: "Power",
    id: "ID_FMP_POWER_9441",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9441",
    categories: ["Seeker of Shadow", "ID_FMP_POWER_9441", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Shade Form"] = new engine.RulesElement({
    name: "Shade Form",
    type: "Power",
    id: "ID_FMP_POWER_9402",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9402",
    categories: ["Shade Form", "ID_FMP_POWER_9402"]
  });
  byID[te.id] = te;
  
  te = Power["Shade Venom"] = new engine.RulesElement({
    name: "Shade Venom",
    type: "Power",
    id: "ID_FMP_POWER_9449",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9449",
    categories: ["Shade Venom", "ID_FMP_POWER_9449", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Curse"] = new engine.RulesElement({
    name: "Shadow Curse",
    type: "Power",
    id: "ID_FMP_POWER_9491",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9491",
    categories: ["Shadow Curse", "ID_FMP_POWER_9491", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_468", "Shadowblade", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Darts"] = new engine.RulesElement({
    name: "Shadow Darts",
    type: "Power",
    id: "ID_FMP_POWER_9409",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9409",
    categories: ["Shadow Darts", "ID_FMP_POWER_9409", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Fire"] = new engine.RulesElement({
    name: "Shadow Fire",
    type: "Power",
    id: "ID_FMP_POWER_9456",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9456",
    categories: ["Shadow Fire", "ID_FMP_POWER_9456", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Jack"] = new engine.RulesElement({
    name: "Shadow Jack",
    type: "Power",
    id: "ID_FMP_POWER_9433",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9433",
    categories: ["Shadow Jack", "ID_FMP_POWER_9433", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Link"] = new engine.RulesElement({
    name: "Shadow Link",
    type: "Power",
    id: "ID_FMP_POWER_9434",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9434",
    categories: ["Shadow Link", "ID_FMP_POWER_9434", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Meld"] = new engine.RulesElement({
    name: "Shadow Meld",
    type: "Power",
    id: "ID_FMP_POWER_9453",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9453",
    categories: ["Shadow Meld", "ID_FMP_POWER_9453", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Puppet"] = new engine.RulesElement({
    name: "Shadow Puppet",
    type: "Power",
    id: "ID_FMP_POWER_9481",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9481",
    categories: ["Shadow Puppet", "ID_FMP_POWER_9481", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Soul"] = new engine.RulesElement({
    name: "Shadow Soul",
    type: "Power",
    id: "ID_FMP_POWER_9424",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9424",
    categories: ["Shadow Soul", "ID_FMP_POWER_9424", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Step"] = new engine.RulesElement({
    name: "Shadow Step",
    type: "Power",
    id: "ID_FMP_POWER_9401",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9401",
    categories: ["Shadow Step", "ID_FMP_POWER_9401"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Storm"] = new engine.RulesElement({
    name: "Shadow Storm",
    type: "Power",
    id: "ID_FMP_POWER_9406",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9406",
    categories: ["Shadow Storm", "ID_FMP_POWER_9406", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Swap"] = new engine.RulesElement({
    name: "Shadow Swap",
    type: "Power",
    id: "ID_FMP_POWER_9469",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9469",
    categories: ["Shadow Swap", "ID_FMP_POWER_9469", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Shadowed Deception"] = new engine.RulesElement({
    name: "Shadowed Deception",
    type: "Power",
    id: "ID_FMP_POWER_9457",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9457",
    categories: ["Shadowed Deception", "ID_FMP_POWER_9457", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Shadowed Legion"] = new engine.RulesElement({
    name: "Shadowed Legion",
    type: "Power",
    id: "ID_FMP_POWER_9418",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9418",
    categories: ["Shadowed Legion", "ID_FMP_POWER_9418", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Shadows of Doom"] = new engine.RulesElement({
    name: "Shadows of Doom",
    type: "Power",
    id: "ID_FMP_POWER_9478",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9478",
    categories: ["Shadows of Doom", "ID_FMP_POWER_9478", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Shattering Blow"] = new engine.RulesElement({
    name: "Shattering Blow",
    type: "Power",
    id: "ID_FMP_POWER_10015",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10015",
    categories: ["Shattering Blow", "ID_FMP_POWER_10015", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_513", "Siegebreaker", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Sheltering Dark"] = new engine.RulesElement({
    name: "Sheltering Dark",
    type: "Power",
    id: "ID_FMP_POWER_9428",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9428",
    categories: ["Sheltering Dark", "ID_FMP_POWER_9428", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Slash and Kick"] = new engine.RulesElement({
    name: "Slash and Kick",
    type: "Power",
    id: "ID_FMP_POWER_10007",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10007",
    categories: ["Slash and Kick", "ID_FMP_POWER_10007", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_FEAT_893", "Practiced Reliability", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Slayer in the Dark"] = new engine.RulesElement({
    name: "Slayer in the Dark",
    type: "Power",
    id: "ID_FMP_POWER_9445",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9445",
    categories: ["Slayer in the Dark", "ID_FMP_POWER_9445", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Slayer's Endurance"] = new engine.RulesElement({
    name: "Slayer's Endurance",
    type: "Power",
    id: "ID_FMP_POWER_9442",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9442",
    categories: ["Slayer's Endurance", "ID_FMP_POWER_9442", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Slayer's Escape"] = new engine.RulesElement({
    name: "Slayer's Escape",
    type: "Power",
    id: "ID_FMP_POWER_9429",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9429",
    categories: ["Slayer's Escape", "ID_FMP_POWER_9429", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Slithering Shadow"] = new engine.RulesElement({
    name: "Slithering Shadow",
    type: "Power",
    id: "ID_FMP_POWER_9430",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9430",
    categories: ["Slithering Shadow", "ID_FMP_POWER_9430", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Smothering Shadow"] = new engine.RulesElement({
    name: "Smothering Shadow",
    type: "Power",
    id: "ID_FMP_POWER_9410",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9410",
    categories: ["Smothering Shadow", "ID_FMP_POWER_9410", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Sorcerer's Fury"] = new engine.RulesElement({
    name: "Sorcerer's Fury",
    type: "Power",
    id: "ID_FMP_POWER_10024",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10024",
    categories: ["Sorcerer's Fury", "ID_FMP_POWER_10024", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_516", "Dragonfoe Ragespell", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Soul of Death"] = new engine.RulesElement({
    name: "Soul of Death",
    type: "Power",
    id: "ID_FMP_POWER_9466",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9466",
    categories: ["Soul of Death", "ID_FMP_POWER_9466", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Soul Reaver"] = new engine.RulesElement({
    name: "Soul Reaver",
    type: "Power",
    id: "ID_FMP_POWER_9490",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9490",
    categories: ["Soul Reaver", "ID_FMP_POWER_9490", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_468", "Shadowblade", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Soul Shadow"] = new engine.RulesElement({
    name: "Soul Shadow",
    type: "Power",
    id: "ID_FMP_POWER_9493",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9493",
    categories: ["Soul Shadow", "ID_FMP_POWER_9493", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_469", "Soul Thief", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Soul Venom"] = new engine.RulesElement({
    name: "Soul Venom",
    type: "Power",
    id: "ID_FMP_POWER_9497",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9497",
    categories: ["Soul Venom", "ID_FMP_POWER_9497", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_470", "Venomed Soul", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Beckoned"] = new engine.RulesElement({
    name: "Spirit Beckoned",
    type: "Power",
    id: "ID_FMP_POWER_10017",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10017",
    categories: ["Spirit Beckoned", "ID_FMP_POWER_10017", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_514", "Shyran Spiritblade", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Spiritspell Assault"] = new engine.RulesElement({
    name: "Spiritspell Assault",
    type: "Power",
    id: "ID_FMP_POWER_10018",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10018",
    categories: ["Spiritspell Assault", "ID_FMP_POWER_10018", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_514", "Shyran Spiritblade", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Stalactite Hook"] = new engine.RulesElement({
    name: "Stalactite Hook",
    type: "Power",
    id: "ID_FMP_POWER_9970",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9970",
    categories: ["Stalactite Hook", "ID_FMP_POWER_9970", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Stalking Phantom"] = new engine.RulesElement({
    name: "Stalking Phantom",
    type: "Power",
    id: "ID_FMP_POWER_9495",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9495",
    categories: ["Stalking Phantom", "ID_FMP_POWER_9495", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_PARAGON_PATH_469", "Soul Thief", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Stand of the Protector"] = new engine.RulesElement({
    name: "Stand of the Protector",
    type: "Power",
    id: "ID_FMP_POWER_9980",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9980",
    categories: ["Stand of the Protector", "ID_FMP_POWER_9980", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_511", "Guardian of Two Worlds", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Throw"] = new engine.RulesElement({
    name: "Storm Throw",
    type: "Power",
    id: "ID_FMP_POWER_9966",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9966",
    categories: ["Storm Throw", "ID_FMP_POWER_9966", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Strangling Shadow"] = new engine.RulesElement({
    name: "Strangling Shadow",
    type: "Power",
    id: "ID_FMP_POWER_9412",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9412",
    categories: ["Strangling Shadow", "ID_FMP_POWER_9412", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Strike of the Sentinel"] = new engine.RulesElement({
    name: "Strike of the Sentinel",
    type: "Power",
    id: "ID_FMP_POWER_9977",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9977",
    categories: ["Strike of the Sentinel", "ID_FMP_POWER_9977", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_511", "Guardian of Two Worlds", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Sundered Shadow"] = new engine.RulesElement({
    name: "Sundered Shadow",
    type: "Power",
    id: "ID_FMP_POWER_9450",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9450",
    categories: ["Sundered Shadow", "ID_FMP_POWER_9450", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Targeted for Death"] = new engine.RulesElement({
    name: "Targeted for Death",
    type: "Power",
    id: "ID_FMP_POWER_9413",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9413",
    categories: ["Targeted for Death", "ID_FMP_POWER_9413", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Terrifying Visage"] = new engine.RulesElement({
    name: "Terrifying Visage",
    type: "Power",
    id: "ID_FMP_POWER_9414",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9414",
    categories: ["Terrifying Visage", "ID_FMP_POWER_9414", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Thief of Names"] = new engine.RulesElement({
    name: "Thief of Names",
    type: "Power",
    id: "ID_FMP_POWER_9454",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9454",
    categories: ["Thief of Names", "ID_FMP_POWER_9454", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Three Shadow Venoms"] = new engine.RulesElement({
    name: "Three Shadow Venoms",
    type: "Power",
    id: "ID_FMP_POWER_9482",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9482",
    categories: ["Three Shadow Venoms", "ID_FMP_POWER_9482", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Time to Die"] = new engine.RulesElement({
    name: "Time to Die",
    type: "Power",
    id: "ID_FMP_POWER_10008",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10008",
    categories: ["Time to Die", "ID_FMP_POWER_10008", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Toppling Finish"] = new engine.RulesElement({
    name: "Toppling Finish",
    type: "Power",
    id: "ID_FMP_POWER_10005",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10005",
    categories: ["Toppling Finish", "ID_FMP_POWER_10005", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Traitorous Shadow"] = new engine.RulesElement({
    name: "Traitorous Shadow",
    type: "Power",
    id: "ID_FMP_POWER_9458",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9458",
    categories: ["Traitorous Shadow", "ID_FMP_POWER_9458", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Treacherous Shades"] = new engine.RulesElement({
    name: "Treacherous Shades",
    type: "Power",
    id: "ID_FMP_POWER_9425",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9425",
    categories: ["Treacherous Shades", "ID_FMP_POWER_9425", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Twilight Assassin"] = new engine.RulesElement({
    name: "Twilight Assassin",
    type: "Power",
    id: "ID_FMP_POWER_9426",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9426",
    categories: ["Twilight Assassin", "ID_FMP_POWER_9426", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10039"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Twilight Assassin Attack"] = new engine.RulesElement({
    name: "Twilight Assassin Attack",
    type: "Power",
    id: "ID_FMP_POWER_10039",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10039",
    categories: ["Twilight Assassin Attack", "ID_FMP_POWER_10039", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Veil of Unsight"] = new engine.RulesElement({
    name: "Veil of Unsight",
    type: "Power",
    id: "ID_FMP_POWER_9492",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9492",
    categories: ["Veil of Unsight", "ID_FMP_POWER_9492", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_468", "Shadowblade", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Vengeful Flare"] = new engine.RulesElement({
    name: "Vengeful Flare",
    type: "Power",
    id: "ID_FMP_POWER_9981",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9981",
    categories: ["Vengeful Flare", "ID_FMP_POWER_9981", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Venomous Kiss"] = new engine.RulesElement({
    name: "Venomous Kiss",
    type: "Power",
    id: "ID_FMP_POWER_9498",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9498",
    categories: ["Venomous Kiss", "ID_FMP_POWER_9498", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_470", "Venomed Soul", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Vine Poultice"] = new engine.RulesElement({
    name: "Vine Poultice",
    type: "Power",
    id: "ID_FMP_POWER_9971",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9971",
    categories: ["Vine Poultice", "ID_FMP_POWER_9971", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Wall of Death"] = new engine.RulesElement({
    name: "Wall of Death",
    type: "Power",
    id: "ID_FMP_POWER_9474",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9474",
    categories: ["Wall of Death", "ID_FMP_POWER_9474", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Wall of Shadows"] = new engine.RulesElement({
    name: "Wall of Shadows",
    type: "Power",
    id: "ID_FMP_POWER_9438",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9438",
    categories: ["Wall of Shadows", "ID_FMP_POWER_9438", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Warden's Lunge"] = new engine.RulesElement({
    name: "Warden's Lunge",
    type: "Power",
    id: "ID_FMP_POWER_9965",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9965",
    categories: ["Warden's Lunge", "ID_FMP_POWER_9965", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Warding Steel"] = new engine.RulesElement({
    name: "Warding Steel",
    type: "Power",
    id: "ID_FMP_POWER_10003",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10003",
    categories: ["Warding Steel", "ID_FMP_POWER_10003", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Well of Shades"] = new engine.RulesElement({
    name: "Well of Shades",
    type: "Power",
    id: "ID_FMP_POWER_9446",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9446",
    categories: ["Well of Shades", "ID_FMP_POWER_9446", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Who's Next?"] = new engine.RulesElement({
    name: "Who's Next?",
    type: "Power",
    id: "ID_FMP_POWER_9994",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9994",
    categories: ["Who's Next?", "ID_FMP_POWER_9994", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Wicked Strike"] = new engine.RulesElement({
    name: "Wicked Strike",
    type: "Power",
    id: "ID_FMP_POWER_9993",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9993",
    categories: ["Wicked Strike", "ID_FMP_POWER_9993", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Wild Offensive"] = new engine.RulesElement({
    name: "Wild Offensive",
    type: "Power",
    id: "ID_FMP_POWER_10009",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10009",
    categories: ["Wild Offensive", "ID_FMP_POWER_10009", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Wraith's Assault"] = new engine.RulesElement({
    name: "Wraith's Assault",
    type: "Power",
    id: "ID_FMP_POWER_9470",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9470",
    categories: ["Wraith's Assault", "ID_FMP_POWER_9470", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
