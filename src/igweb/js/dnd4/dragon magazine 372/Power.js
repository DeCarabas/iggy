define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Accursed Souls"] = new engine.RulesElement({
    name: "Accursed Souls",
    type: "Power",
    id: "ID_FMP_POWER_6956",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6956",
    categories: ["Accursed Souls", "ID_FMP_POWER_6956", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["All Soul's Ball"] = new engine.RulesElement({
    name: "All Soul's Ball",
    type: "Power",
    id: "ID_FMP_POWER_6939",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6939",
    categories: ["All Soul's Ball", "ID_FMP_POWER_6939", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Animate Dead"] = new engine.RulesElement({
    name: "Animate Dead",
    type: "Power",
    id: "ID_FMP_POWER_6959",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6959",
    categories: ["Animate Dead", "ID_FMP_POWER_6959", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Bane's Tactics"] = new engine.RulesElement({
    name: "Bane's Tactics",
    type: "Power",
    id: "ID_FMP_POWER_6595",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6595",
    categories: ["Bane's Tactics", "ID_FMP_POWER_6595", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Consuming Ray"] = new engine.RulesElement({
    name: "Consuming Ray",
    type: "Power",
    id: "ID_FMP_POWER_6955",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6955",
    categories: ["Consuming Ray", "ID_FMP_POWER_6955", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Darklord Shadow Stride"] = new engine.RulesElement({
    name: "Darklord Shadow Stride",
    type: "Power",
    id: "ID_FMP_POWER_6599",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6599",
    categories: ["Darklord Shadow Stride", "ID_FMP_POWER_6599", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_296", "Darklord", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Death Grip"] = new engine.RulesElement({
    name: "Death Grip",
    type: "Power",
    id: "ID_FMP_POWER_6952",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6952",
    categories: ["Death Grip", "ID_FMP_POWER_6952", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Death's Resurgence"] = new engine.RulesElement({
    name: "Death's Resurgence",
    type: "Power",
    id: "ID_FMP_POWER_6951",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6951",
    categories: ["Death's Resurgence", "ID_FMP_POWER_6951", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Doomcaller's Promise"] = new engine.RulesElement({
    name: "Doomcaller's Promise",
    type: "Power",
    id: "ID_FMP_POWER_6970",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6970",
    categories: ["Doomcaller's Promise", "ID_FMP_POWER_6970", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_345", "Doomspeaker", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_48", "Rattling", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Entombing Earth"] = new engine.RulesElement({
    name: "Entombing Earth",
    type: "Power",
    id: "ID_FMP_POWER_6961",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6961",
    categories: ["Entombing Earth", "ID_FMP_POWER_6961", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Faces of the Fallen"] = new engine.RulesElement({
    name: "Faces of the Fallen",
    type: "Power",
    id: "ID_FMP_POWER_6946",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6946",
    categories: ["Faces of the Fallen", "ID_FMP_POWER_6946", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Fated Doom"] = new engine.RulesElement({
    name: "Fated Doom",
    type: "Power",
    id: "ID_FMP_POWER_6936",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6936",
    categories: ["Fated Doom", "ID_FMP_POWER_6936", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Fearsome Revival"] = new engine.RulesElement({
    name: "Fearsome Revival",
    type: "Power",
    id: "ID_FMP_POWER_6966",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6966",
    categories: ["Fearsome Revival", "ID_FMP_POWER_6966", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_344", "Abiding Reaper", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Fell the Foe"] = new engine.RulesElement({
    name: "Fell the Foe",
    type: "Power",
    id: "ID_FMP_POWER_6597",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6597",
    categories: ["Fell the Foe", "ID_FMP_POWER_6597", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_295", "Soldier of Conquest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Funeral Dirge"] = new engine.RulesElement({
    name: "Funeral Dirge",
    type: "Power",
    id: "ID_FMP_POWER_6937",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6937",
    categories: ["Funeral Dirge", "ID_FMP_POWER_6937", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Grasp of the Grave"] = new engine.RulesElement({
    name: "Grasp of the Grave",
    type: "Power",
    id: "ID_FMP_POWER_6958",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6958",
    categories: ["Grasp of the Grave", "ID_FMP_POWER_6958", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Guardians of Howling Wrath"] = new engine.RulesElement({
    name: "Guardians of Howling Wrath",
    type: "Power",
    id: "ID_FMP_POWER_6947",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6947",
    categories: ["Guardians of Howling Wrath", "ID_FMP_POWER_6947", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Hellfire Soul"] = new engine.RulesElement({
    name: "Hellfire Soul",
    type: "Power",
    id: "ID_FMP_POWER_6957",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6957",
    categories: ["Hellfire Soul", "ID_FMP_POWER_6957", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Indomitable Assault"] = new engine.RulesElement({
    name: "Indomitable Assault",
    type: "Power",
    id: "ID_FMP_POWER_6598",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6598",
    categories: ["Indomitable Assault", "ID_FMP_POWER_6598", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_295", "Soldier of Conquest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Infernal Allies"] = new engine.RulesElement({
    name: "Infernal Allies",
    type: "Power",
    id: "ID_FMP_POWER_6602",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6602",
    categories: ["Infernal Allies", "ID_FMP_POWER_6602", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_299", "Prince of Hell", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Life and Death Struggle"] = new engine.RulesElement({
    name: "Life and Death Struggle",
    type: "Power",
    id: "ID_FMP_POWER_6948",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6948",
    categories: ["Life and Death Struggle", "ID_FMP_POWER_6948", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Life-Stealing Light"] = new engine.RulesElement({
    name: "Life-Stealing Light",
    type: "Power",
    id: "ID_FMP_POWER_6942",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6942",
    categories: ["Life-Stealing Light", "ID_FMP_POWER_6942", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Light and Darkness"] = new engine.RulesElement({
    name: "Light and Darkness",
    type: "Power",
    id: "ID_FMP_POWER_6935",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6935",
    categories: ["Light and Darkness", "ID_FMP_POWER_6935", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Living Death Strike"] = new engine.RulesElement({
    name: "Living Death Strike",
    type: "Power",
    id: "ID_FMP_POWER_6933",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6933",
    categories: ["Living Death Strike", "ID_FMP_POWER_6933", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Necromantic Disruption"] = new engine.RulesElement({
    name: "Necromantic Disruption",
    type: "Power",
    id: "ID_FMP_POWER_6950",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6950",
    categories: ["Necromantic Disruption", "ID_FMP_POWER_6950", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Necrotic Transference"] = new engine.RulesElement({
    name: "Necrotic Transference",
    type: "Power",
    id: "ID_FMP_POWER_6943",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6943",
    categories: ["Necrotic Transference", "ID_FMP_POWER_6943", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Planar Refuge"] = new engine.RulesElement({
    name: "Planar Refuge",
    type: "Power",
    id: "ID_FMP_POWER_6601",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6601",
    categories: ["Planar Refuge", "ID_FMP_POWER_6601", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_298", "Planeshaper", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Quickened Coercion"] = new engine.RulesElement({
    name: "Quickened Coercion",
    type: "Power",
    id: "ID_FMP_POWER_6969",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6969",
    categories: ["Quickened Coercion", "ID_FMP_POWER_6969", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_345", "Doomspeaker", "ID_FMP_CATEGORY_7", "Fear", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Reality Distortion"] = new engine.RulesElement({
    name: "Reality Distortion",
    type: "Power",
    id: "ID_FMP_POWER_6600",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6600",
    categories: ["Reality Distortion", "ID_FMP_POWER_6600", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_297", "Keybearer", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Reaper's Challenge"] = new engine.RulesElement({
    name: "Reaper's Challenge",
    type: "Power",
    id: "ID_FMP_POWER_6949",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6949",
    categories: ["Reaper's Challenge", "ID_FMP_POWER_6949", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Reaper's Repast"] = new engine.RulesElement({
    name: "Reaper's Repast",
    type: "Power",
    id: "ID_FMP_POWER_6967",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6967",
    categories: ["Reaper's Repast", "ID_FMP_POWER_6967", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_344", "Abiding Reaper", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Reaping Disruption"] = new engine.RulesElement({
    name: "Reaping Disruption",
    type: "Power",
    id: "ID_FMP_POWER_6965",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6965",
    categories: ["Reaping Disruption", "ID_FMP_POWER_6965", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_344", "Abiding Reaper", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Rime Armor"] = new engine.RulesElement({
    name: "Rime Armor",
    type: "Power",
    id: "ID_FMP_POWER_6607",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6607",
    categories: ["Rime Armor", "ID_FMP_POWER_6607", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_302", "Winter Sovereign", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Sacrificial Spirit"] = new engine.RulesElement({
    name: "Sacrificial Spirit",
    type: "Power",
    id: "ID_FMP_POWER_6945",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6945",
    categories: ["Sacrificial Spirit", "ID_FMP_POWER_6945", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Scion of Chaos"] = new engine.RulesElement({
    name: "Scion of Chaos",
    type: "Power",
    id: "ID_FMP_POWER_6606",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6606",
    categories: ["Scion of Chaos", "ID_FMP_POWER_6606", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_301", "Storm Sovereign", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Sealing Death's Door"] = new engine.RulesElement({
    name: "Sealing Death's Door",
    type: "Power",
    id: "ID_FMP_POWER_6944",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6944",
    categories: ["Sealing Death's Door", "ID_FMP_POWER_6944", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Jaunt"] = new engine.RulesElement({
    name: "Shadow Jaunt",
    type: "Power",
    id: "ID_FMP_POWER_2482",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2482",
    categories: ["Shadow Jaunt", "ID_FMP_POWER_2482", "ID_FMP_RACIAL_TRAIT_410", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Song of the Deadly Dancer"] = new engine.RulesElement({
    name: "Song of the Deadly Dancer",
    type: "Power",
    id: "ID_FMP_POWER_6940",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6940",
    categories: ["Song of the Deadly Dancer", "ID_FMP_POWER_6940", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Song of the Soul Harvest"] = new engine.RulesElement({
    name: "Song of the Soul Harvest",
    type: "Power",
    id: "ID_FMP_POWER_6938",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6938",
    categories: ["Song of the Soul Harvest", "ID_FMP_POWER_6938", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Soul Puppets"] = new engine.RulesElement({
    name: "Soul Puppets",
    type: "Power",
    id: "ID_FMP_POWER_6960",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6960",
    categories: ["Soul Puppets", "ID_FMP_POWER_6960", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Soul Seeker"] = new engine.RulesElement({
    name: "Soul Seeker",
    type: "Power",
    id: "ID_FMP_POWER_6934",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6934",
    categories: ["Soul Seeker", "ID_FMP_POWER_6934", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Spiked Shackles"] = new engine.RulesElement({
    name: "Spiked Shackles",
    type: "Power",
    id: "ID_FMP_POWER_6964",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6964",
    categories: ["Spiked Shackles", "ID_FMP_POWER_6964", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Suffer the Foe"] = new engine.RulesElement({
    name: "Suffer the Foe",
    type: "Power",
    id: "ID_FMP_POWER_6596",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6596",
    categories: ["Suffer the Foe", "ID_FMP_POWER_6596", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_295", "Soldier of Conquest", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Black Reaper"] = new engine.RulesElement({
    name: "Summon Black Reaper",
    type: "Power",
    id: "ID_FMP_POWER_6941",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6941",
    categories: ["Summon Black Reaper", "ID_FMP_POWER_6941", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Unnerving Boast"] = new engine.RulesElement({
    name: "Unnerving Boast",
    type: "Power",
    id: "ID_FMP_POWER_6968",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6968",
    categories: ["Unnerving Boast", "ID_FMP_POWER_6968", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_345", "Doomspeaker", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_48", "Rattling", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Vitality Eternal"] = new engine.RulesElement({
    name: "Vitality Eternal",
    type: "Power",
    id: "ID_FMP_POWER_6971",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6971",
    categories: ["Vitality Eternal", "ID_FMP_POWER_6971", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_346", "Raven Consort", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Well of Death"] = new engine.RulesElement({
    name: "Well of Death",
    type: "Power",
    id: "ID_FMP_POWER_6954",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6954",
    categories: ["Well of Death", "ID_FMP_POWER_6954", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
