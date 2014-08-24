(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Adamantine Blast"] = new RulesElement({
    name: "Adamantine Blast",
    type: "Power",
    id: "ID_FMP_POWER_11860",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11860",
    categories: ["Adamantine Blast", "ID_FMP_POWER_11860", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_638", "Adamant Instructor", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Ancestral Avatar"] = new RulesElement({
    name: "Ancestral Avatar",
    type: "Power",
    id: "ID_FMP_POWER_11830",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11830",
    categories: ["Ancestral Avatar", "ID_FMP_POWER_11830", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_634", "Keeper of the Past", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Animus Strike"] = new RulesElement({
    name: "Animus Strike",
    type: "Power",
    id: "ID_FMP_POWER_12184",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12184",
    categories: ["Animus Strike", "ID_FMP_POWER_12184", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_648", "Animus Predator", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Argent Judgment"] = new RulesElement({
    name: "Argent Judgment",
    type: "Power",
    id: "ID_FMP_POWER_11854",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11854",
    categories: ["Argent Judgment", "ID_FMP_POWER_11854", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_636", "Argentum Alliance", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Armored Assault"] = new RulesElement({
    name: "Armored Assault",
    type: "Power",
    id: "ID_FMP_POWER_12196",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12196",
    categories: ["Armored Assault", "ID_FMP_POWER_12196", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Assurance of Prophecy"] = new RulesElement({
    name: "Assurance of Prophecy",
    type: "Power",
    id: "ID_FMP_POWER_12171",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12171",
    categories: ["Assurance of Prophecy", "ID_FMP_POWER_12171", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Blade of Judgment"] = new RulesElement({
    name: "Blade of Judgment",
    type: "Power",
    id: "ID_FMP_POWER_12217",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12217",
    categories: ["Blade of Judgment", "ID_FMP_POWER_12217", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Blinding Torrent"] = new RulesElement({
    name: "Blinding Torrent",
    type: "Power",
    id: "ID_FMP_POWER_12182",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12182",
    categories: ["Blinding Torrent", "ID_FMP_POWER_12182", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_647", "Stormcaller", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Breath of Sephitherax"] = new RulesElement({
    name: "Breath of Sephitherax",
    type: "Power",
    id: "ID_FMP_POWER_11855",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11855",
    categories: ["Breath of Sephitherax", "ID_FMP_POWER_11855", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_636", "Argentum Alliance", "ID_FMP_CATEGORY_1", "cold", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Calm the Flames"] = new RulesElement({
    name: "Calm the Flames",
    type: "Power",
    id: "ID_FMP_POWER_12224",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12224",
    categories: ["Calm the Flames", "ID_FMP_POWER_12224", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Chaos Wager"] = new RulesElement({
    name: "Chaos Wager",
    type: "Power",
    id: "ID_FMP_POWER_11833",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11833",
    categories: ["Chaos Wager", "ID_FMP_POWER_11833", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Damage Gambit"] = new RulesElement({
    name: "Damage Gambit",
    type: "Power",
    id: "ID_FMP_POWER_11835",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11835",
    categories: ["Damage Gambit", "ID_FMP_POWER_11835", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Dead End Strike"] = new RulesElement({
    name: "Dead End Strike",
    type: "Power",
    id: "ID_FMP_POWER_11755",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11755",
    categories: ["Dead End Strike", "ID_FMP_POWER_11755", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_627", "Champion of the Labyrinth", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Deceptive Veil"] = new RulesElement({
    name: "Deceptive Veil",
    type: "Power",
    id: "ID_FMP_POWER_12172",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12172",
    categories: ["Deceptive Veil", "ID_FMP_POWER_12172"]
  });
  byID[te.id] = te;
  
  te = Power["Defend the Fallen"] = new RulesElement({
    name: "Defend the Fallen",
    type: "Power",
    id: "ID_FMP_POWER_11856",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11856",
    categories: ["Defend the Fallen", "ID_FMP_POWER_11856", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_636", "Argentum Alliance", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Deliverance of Faith"] = new RulesElement({
    name: "Deliverance of Faith",
    type: "Power",
    id: "ID_FMP_POWER_12166",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12166",
    categories: ["Deliverance of Faith", "ID_FMP_POWER_12166", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Demand Fealty"] = new RulesElement({
    name: "Demand Fealty",
    type: "Power",
    id: "ID_FMP_POWER_11861",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11861",
    categories: ["Demand Fealty", "ID_FMP_POWER_11861", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_638", "Adamant Instructor", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Dimension Strike"] = new RulesElement({
    name: "Dimension Strike",
    type: "Power",
    id: "ID_FMP_POWER_11867",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11867",
    categories: ["Dimension Strike", "ID_FMP_POWER_11867", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_640", "Mithral Arm", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Elemental Barrier"] = new RulesElement({
    name: "Elemental Barrier",
    type: "Power",
    id: "ID_FMP_POWER_12222",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12222",
    categories: ["Elemental Barrier", "ID_FMP_POWER_12222", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Elemental Detention"] = new RulesElement({
    name: "Elemental Detention",
    type: "Power",
    id: "ID_FMP_POWER_12223",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12223",
    categories: ["Elemental Detention", "ID_FMP_POWER_12223", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Enervating Challenge"] = new RulesElement({
    name: "Enervating Challenge",
    type: "Power",
    id: "ID_FMP_POWER_12220",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12220",
    categories: ["Enervating Challenge", "ID_FMP_POWER_12220", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Even the Odds"] = new RulesElement({
    name: "Even the Odds",
    type: "Power",
    id: "ID_FMP_POWER_11839",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11839",
    categories: ["Even the Odds", "ID_FMP_POWER_11839", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_635", "Luckbender", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Evoker's Summoning"] = new RulesElement({
    name: "Evoker's Summoning",
    type: "Power",
    id: "ID_FMP_POWER_12219",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12219",
    categories: ["Evoker's Summoning", "ID_FMP_POWER_12219", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Exposing Spirit"] = new RulesElement({
    name: "Exposing Spirit",
    type: "Power",
    id: "ID_FMP_POWER_12183",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12183",
    categories: ["Exposing Spirit", "ID_FMP_POWER_12183", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_648", "Animus Predator", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Flip and Blast"] = new RulesElement({
    name: "Flip and Blast",
    type: "Power",
    id: "ID_FMP_POWER_11863",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11863",
    categories: ["Flip and Blast", "ID_FMP_POWER_11863", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_639", "Glee-born", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Fluid Counterattack"] = new RulesElement({
    name: "Fluid Counterattack",
    type: "Power",
    id: "ID_FMP_POWER_11857",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11857",
    categories: ["Fluid Counterattack", "ID_FMP_POWER_11857", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_637", "Mercurial Assassin", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Fool's Luck"] = new RulesElement({
    name: "Fool's Luck",
    type: "Power",
    id: "ID_FMP_POWER_11836",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11836",
    categories: ["Fool's Luck", "ID_FMP_POWER_11836", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Forge Fire Blast"] = new RulesElement({
    name: "Forge Fire Blast",
    type: "Power",
    id: "ID_FMP_POWER_12211",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12211",
    categories: ["Forge Fire Blast", "ID_FMP_POWER_12211", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_651", "Soulforged", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Forked Lightning"] = new RulesElement({
    name: "Forked Lightning",
    type: "Power",
    id: "ID_FMP_POWER_12180",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12180",
    categories: ["Forked Lightning", "ID_FMP_POWER_12180", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_647", "Stormcaller", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Fortunate Turn of Events"] = new RulesElement({
    name: "Fortunate Turn of Events",
    type: "Power",
    id: "ID_FMP_POWER_11837",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11837",
    categories: ["Fortunate Turn of Events", "ID_FMP_POWER_11837", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_635", "Luckbender", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Gambling Siphon"] = new RulesElement({
    name: "Gambling Siphon",
    type: "Power",
    id: "ID_FMP_POWER_11832",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11832",
    categories: ["Gambling Siphon", "ID_FMP_POWER_11832", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Good Timing"] = new RulesElement({
    name: "Good Timing",
    type: "Power",
    id: "ID_FMP_POWER_11831",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11831",
    categories: ["Good Timing", "ID_FMP_POWER_11831", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Great Speech"] = new RulesElement({
    name: "Great Speech",
    type: "Power",
    id: "ID_FMP_POWER_11862",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11862",
    categories: ["Great Speech", "ID_FMP_POWER_11862", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_638", "Adamant Instructor", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Grit and Spittle"] = new RulesElement({
    name: "Grit and Spittle",
    type: "Power",
    id: "ID_FMP_POWER_12163",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12163",
    categories: ["Grit and Spittle", "ID_FMP_POWER_12163", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Immediate Vengeance"] = new RulesElement({
    name: "Immediate Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_12193",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12193",
    categories: ["Immediate Vengeance", "ID_FMP_POWER_12193", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Infinite Reflections"] = new RulesElement({
    name: "Infinite Reflections",
    type: "Power",
    id: "ID_FMP_POWER_12215",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12215",
    categories: ["Infinite Reflections", "ID_FMP_POWER_12215", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_652", "Half-Elf Polymath", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Intimidating Reminder"] = new RulesElement({
    name: "Intimidating Reminder",
    type: "Power",
    id: "ID_FMP_POWER_12195",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12195",
    categories: ["Intimidating Reminder", "ID_FMP_POWER_12195", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Just Not Their Day"] = new RulesElement({
    name: "Just Not Their Day",
    type: "Power",
    id: "ID_FMP_POWER_11838",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11838",
    categories: ["Just Not Their Day", "ID_FMP_POWER_11838", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_635", "Luckbender", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Labyrinth of Foes"] = new RulesElement({
    name: "Labyrinth of Foes",
    type: "Power",
    id: "ID_FMP_POWER_11756",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11756",
    categories: ["Labyrinth of Foes", "ID_FMP_POWER_11756", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_627", "Champion of the Labyrinth", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Lessons of History"] = new RulesElement({
    name: "Lessons of History",
    type: "Power",
    id: "ID_FMP_POWER_12164",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12164",
    categories: ["Lessons of History", "ID_FMP_POWER_12164", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Mercurial Disguise"] = new RulesElement({
    name: "Mercurial Disguise",
    type: "Power",
    id: "ID_FMP_POWER_11859",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11859",
    categories: ["Mercurial Disguise", "ID_FMP_POWER_11859", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_PARAGON_PATH_637", "Mercurial Assassin", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Natural Terrain Understanding"] = new RulesElement({
    name: "Natural Terrain Understanding",
    type: "Power",
    id: "ID_FMP_POWER_12170",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12170",
    categories: ["Natural Terrain Understanding", "ID_FMP_POWER_12170", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Nightshade Draught"] = new RulesElement({
    name: "Nightshade Draught",
    type: "Power",
    id: "ID_FMP_POWER_12165",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12165",
    categories: ["Nightshade Draught", "ID_FMP_POWER_12165", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Paddlewheel"] = new RulesElement({
    name: "Paddlewheel",
    type: "Power",
    id: "ID_FMP_POWER_12203",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12203",
    categories: ["Paddlewheel", "ID_FMP_POWER_12203", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_650", "Snapping Testudo", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Past Life Manifestation"] = new RulesElement({
    name: "Past Life Manifestation",
    type: "Power",
    id: "ID_FMP_POWER_12175",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12175",
    categories: ["Past Life Manifestation", "ID_FMP_POWER_12175", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_645", "Soul of the World", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Practiced Dilettante"] = new RulesElement({
    name: "Practiced Dilettante",
    type: "Power",
    id: "ID_FMP_POWER_12214",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12214",
    categories: ["Practiced Dilettante", "ID_FMP_POWER_12214", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_652", "Half-Elf Polymath", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Practiced Mental Defense"] = new RulesElement({
    name: "Practiced Mental Defense",
    type: "Power",
    id: "ID_FMP_POWER_12168",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12168",
    categories: ["Practiced Mental Defense", "ID_FMP_POWER_12168", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Prophetic Defense"] = new RulesElement({
    name: "Prophetic Defense",
    type: "Power",
    id: "ID_FMP_POWER_11866",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11866",
    categories: ["Prophetic Defense", "ID_FMP_POWER_11866", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_640", "Mithral Arm", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Purging Wave"] = new RulesElement({
    name: "Purging Wave",
    type: "Power",
    id: "ID_FMP_POWER_12187",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12187",
    categories: ["Purging Wave", "ID_FMP_POWER_12187", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_649", "Scion of Renewal", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Rain of Renewal"] = new RulesElement({
    name: "Rain of Renewal",
    type: "Power",
    id: "ID_FMP_POWER_12188",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12188",
    categories: ["Rain of Renewal", "ID_FMP_POWER_12188", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_649", "Scion of Renewal", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Rakshasa Incarnation"] = new RulesElement({
    name: "Rakshasa Incarnation",
    type: "Power",
    id: "ID_FMP_POWER_12173",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12173",
    categories: ["Rakshasa Incarnation", "ID_FMP_POWER_12173", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_644", "Disincarnate", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_12174"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Rakshasa Incarnation Attack"] = new RulesElement({
    name: "Rakshasa Incarnation Attack",
    type: "Power",
    id: "ID_FMP_POWER_12174",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12174",
    categories: ["Rakshasa Incarnation Attack", "ID_FMP_POWER_12174", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_644", "Disincarnate", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Refire the Forge"] = new RulesElement({
    name: "Refire the Forge",
    type: "Power",
    id: "ID_FMP_POWER_12206",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12206",
    categories: ["Refire the Forge", "ID_FMP_POWER_12206", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_12207"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Refire the Forge Attack"] = new RulesElement({
    name: "Refire the Forge Attack",
    type: "Power",
    id: "ID_FMP_POWER_12207",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12207",
    categories: ["Refire the Forge Attack", "ID_FMP_POWER_12207", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Renewing Wash"] = new RulesElement({
    name: "Renewing Wash",
    type: "Power",
    id: "ID_FMP_POWER_12186",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12186",
    categories: ["Renewing Wash", "ID_FMP_POWER_12186", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_649", "Scion of Renewal", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Retributive Strike"] = new RulesElement({
    name: "Retributive Strike",
    type: "Power",
    id: "ID_FMP_POWER_11828",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11828",
    categories: ["Retributive Strike", "ID_FMP_POWER_11828", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_634", "Keeper of the Past", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Revealing Feint"] = new RulesElement({
    name: "Revealing Feint",
    type: "Power",
    id: "ID_FMP_POWER_11865",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11865",
    categories: ["Revealing Feint", "ID_FMP_POWER_11865", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_639", "Glee-born", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Root Understanding"] = new RulesElement({
    name: "Root Understanding",
    type: "Power",
    id: "ID_FMP_POWER_12169",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12169",
    categories: ["Root Understanding", "ID_FMP_POWER_12169", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Rubicant's Assault"] = new RulesElement({
    name: "Rubicant's Assault",
    type: "Power",
    id: "ID_FMP_POWER_12221",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12221",
    categories: ["Rubicant's Assault", "ID_FMP_POWER_12221", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Set a Riddle"] = new RulesElement({
    name: "Set a Riddle",
    type: "Power",
    id: "ID_FMP_POWER_11864",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11864",
    categories: ["Set a Riddle", "ID_FMP_POWER_11864", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_639", "Glee-born", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Shield and a Hard Place"] = new RulesElement({
    name: "Shield and a Hard Place",
    type: "Power",
    id: "ID_FMP_POWER_12197",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12197",
    categories: ["Shield and a Hard Place", "ID_FMP_POWER_12197", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Shield Bearer's Vendetta"] = new RulesElement({
    name: "Shield Bearer's Vendetta",
    type: "Power",
    id: "ID_FMP_POWER_12199",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12199",
    categories: ["Shield Bearer's Vendetta", "ID_FMP_POWER_12199", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Shield Clamor"] = new RulesElement({
    name: "Shield Clamor",
    type: "Power",
    id: "ID_FMP_POWER_12201",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12201",
    categories: ["Shield Clamor", "ID_FMP_POWER_12201", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Shield Deflection"] = new RulesElement({
    name: "Shield Deflection",
    type: "Power",
    id: "ID_FMP_POWER_12198",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12198",
    categories: ["Shield Deflection", "ID_FMP_POWER_12198", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Shield Feint"] = new RulesElement({
    name: "Shield Feint",
    type: "Power",
    id: "ID_FMP_POWER_12189",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12189",
    categories: ["Shield Feint", "ID_FMP_POWER_12189", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Shield Riposte"] = new RulesElement({
    name: "Shield Riposte",
    type: "Power",
    id: "ID_FMP_POWER_12190",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12190",
    categories: ["Shield Riposte", "ID_FMP_POWER_12190", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Shielded Aggression"] = new RulesElement({
    name: "Shielded Aggression",
    type: "Power",
    id: "ID_FMP_POWER_12204",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12204",
    categories: ["Shielded Aggression", "ID_FMP_POWER_12204", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_650", "Snapping Testudo", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Shielding Shove"] = new RulesElement({
    name: "Shielding Shove",
    type: "Power",
    id: "ID_FMP_POWER_12192",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12192",
    categories: ["Shielding Shove", "ID_FMP_POWER_12192", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Shove and Slap"] = new RulesElement({
    name: "Shove and Slap",
    type: "Power",
    id: "ID_FMP_POWER_12191",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12191",
    categories: ["Shove and Slap", "ID_FMP_POWER_12191", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Skill Dabbler"] = new RulesElement({
    name: "Skill Dabbler",
    type: "Power",
    id: "ID_FMP_POWER_12216",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12216",
    categories: ["Skill Dabbler", "ID_FMP_POWER_12216", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_652", "Half-Elf Polymath", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Sonnlinor's Hammer"] = new RulesElement({
    name: "Sonnlinor's Hammer",
    type: "Power",
    id: "ID_FMP_POWER_12205",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12205",
    categories: ["Sonnlinor's Hammer", "ID_FMP_POWER_12205", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Soul Flare"] = new RulesElement({
    name: "Soul Flare",
    type: "Power",
    id: "ID_FMP_POWER_12177",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12177",
    categories: ["Soul Flare", "ID_FMP_POWER_12177", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_646", "Soul Igniter", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Soul Furnace"] = new RulesElement({
    name: "Soul Furnace",
    type: "Power",
    id: "ID_FMP_POWER_12179",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12179",
    categories: ["Soul Furnace", "ID_FMP_POWER_12179", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_646", "Soul Igniter", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Soul of the Dwarf-Father"] = new RulesElement({
    name: "Soul of the Dwarf-Father",
    type: "Power",
    id: "ID_FMP_POWER_12212",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12212",
    categories: ["Soul of the Dwarf-Father", "ID_FMP_POWER_12212", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_651", "Soulforged", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Soulfire"] = new RulesElement({
    name: "Soulfire",
    type: "Power",
    id: "ID_FMP_POWER_12176",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12176",
    categories: ["Soulfire", "ID_FMP_POWER_12176"]
  });
  byID[te.id] = te;
  
  te = Power["Soulforge Hammering"] = new RulesElement({
    name: "Soulforge Hammering",
    type: "Power",
    id: "ID_FMP_POWER_12208",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12208",
    categories: ["Soulforge Hammering", "ID_FMP_POWER_12208", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Spellbinder's Gift"] = new RulesElement({
    name: "Spellbinder's Gift",
    type: "Power",
    id: "ID_FMP_POWER_12218",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12218",
    categories: ["Spellbinder's Gift", "ID_FMP_POWER_12218", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Cyclone"] = new RulesElement({
    name: "Spirit Cyclone",
    type: "Power",
    id: "ID_FMP_POWER_12181",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12181",
    categories: ["Spirit Cyclone", "ID_FMP_POWER_12181", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_647", "Stormcaller", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Detonation"] = new RulesElement({
    name: "Spirit Detonation",
    type: "Power",
    id: "ID_FMP_POWER_12178",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12178",
    categories: ["Spirit Detonation", "ID_FMP_POWER_12178", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_646", "Soul Igniter", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Steel Jaws"] = new RulesElement({
    name: "Steel Jaws",
    type: "Power",
    id: "ID_FMP_POWER_12202",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12202",
    categories: ["Steel Jaws", "ID_FMP_POWER_12202", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_650", "Snapping Testudo", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Storm of the Ancestors"] = new RulesElement({
    name: "Storm of the Ancestors",
    type: "Power",
    id: "ID_FMP_POWER_11829",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11829",
    categories: ["Storm of the Ancestors", "ID_FMP_POWER_11829", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_634", "Keeper of the Past", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Streaking Mercury"] = new RulesElement({
    name: "Streaking Mercury",
    type: "Power",
    id: "ID_FMP_POWER_11858",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11858",
    categories: ["Streaking Mercury", "ID_FMP_POWER_11858", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_637", "Mercurial Assassin", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Studied Casting"] = new RulesElement({
    name: "Studied Casting",
    type: "Power",
    id: "ID_FMP_POWER_12167",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12167",
    categories: ["Studied Casting", "ID_FMP_POWER_12167", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Balor"] = new RulesElement({
    name: "Summon Balor",
    type: "Power",
    id: "ID_FMP_POWER_11852",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11852",
    categories: ["Summon Balor", "ID_FMP_POWER_11852", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Couatl"] = new RulesElement({
    name: "Summon Couatl",
    type: "Power",
    id: "ID_FMP_POWER_11848",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11848",
    categories: ["Summon Couatl", "ID_FMP_POWER_11848", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Djinn Stormcaller"] = new RulesElement({
    name: "Summon Djinn Stormcaller",
    type: "Power",
    id: "ID_FMP_POWER_11853",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11853",
    categories: ["Summon Djinn Stormcaller", "ID_FMP_POWER_11853", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_51", "summoning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Dretch"] = new RulesElement({
    name: "Summon Dretch",
    type: "Power",
    id: "ID_FMP_POWER_11840",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11840",
    categories: ["Summon Dretch", "ID_FMP_POWER_11840", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Dust Devil"] = new RulesElement({
    name: "Summon Dust Devil",
    type: "Power",
    id: "ID_FMP_POWER_11841",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11841",
    categories: ["Summon Dust Devil", "ID_FMP_POWER_11841", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Earthwind Ravager"] = new RulesElement({
    name: "Summon Earthwind Ravager",
    type: "Power",
    id: "ID_FMP_POWER_11850",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11850",
    categories: ["Summon Earthwind Ravager", "ID_FMP_POWER_11850", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Hell Hound"] = new RulesElement({
    name: "Summon Hell Hound",
    type: "Power",
    id: "ID_FMP_POWER_11844",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11844",
    categories: ["Summon Hell Hound", "ID_FMP_POWER_11844", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Imp"] = new RulesElement({
    name: "Summon Imp",
    type: "Power",
    id: "ID_FMP_POWER_11842",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11842",
    categories: ["Summon Imp", "ID_FMP_POWER_11842", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Magma Beast"] = new RulesElement({
    name: "Summon Magma Beast",
    type: "Power",
    id: "ID_FMP_POWER_11843",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11843",
    categories: ["Summon Magma Beast", "ID_FMP_POWER_11843", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Marilith"] = new RulesElement({
    name: "Summon Marilith",
    type: "Power",
    id: "ID_FMP_POWER_11851",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11851",
    categories: ["Summon Marilith", "ID_FMP_POWER_11851", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Rockfire Dreadnought"] = new RulesElement({
    name: "Summon Rockfire Dreadnought",
    type: "Power",
    id: "ID_FMP_POWER_11849",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11849",
    categories: ["Summon Rockfire Dreadnought", "ID_FMP_POWER_11849", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Stormstone Fury"] = new RulesElement({
    name: "Summon Stormstone Fury",
    type: "Power",
    id: "ID_FMP_POWER_11846",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11846",
    categories: ["Summon Stormstone Fury", "ID_FMP_POWER_11846", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Succubus"] = new RulesElement({
    name: "Summon Succubus",
    type: "Power",
    id: "ID_FMP_POWER_11845",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11845",
    categories: ["Summon Succubus", "ID_FMP_POWER_11845", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Vrock"] = new RulesElement({
    name: "Summon Vrock",
    type: "Power",
    id: "ID_FMP_POWER_11847",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11847",
    categories: ["Summon Vrock", "ID_FMP_POWER_11847", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Symbiotic Spirits"] = new RulesElement({
    name: "Symbiotic Spirits",
    type: "Power",
    id: "ID_FMP_POWER_12185",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12185",
    categories: ["Symbiotic Spirits", "ID_FMP_POWER_12185", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_648", "Animus Predator", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Tempered"] = new RulesElement({
    name: "Tempered",
    type: "Power",
    id: "ID_FMP_POWER_12213",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12213",
    categories: ["Tempered", "ID_FMP_POWER_12213", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_651", "Soulforged", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Transdimensional Invasion"] = new RulesElement({
    name: "Transdimensional Invasion",
    type: "Power",
    id: "ID_FMP_POWER_12225",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12225",
    categories: ["Transdimensional Invasion", "ID_FMP_POWER_12225", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Unexpected Shield Bash"] = new RulesElement({
    name: "Unexpected Shield Bash",
    type: "Power",
    id: "ID_FMP_POWER_12194",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12194",
    categories: ["Unexpected Shield Bash", "ID_FMP_POWER_12194", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Unstoppable Force"] = new RulesElement({
    name: "Unstoppable Force",
    type: "Power",
    id: "ID_FMP_POWER_12200",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12200",
    categories: ["Unstoppable Force", "ID_FMP_POWER_12200", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Unwavering Vigilance"] = new RulesElement({
    name: "Unwavering Vigilance",
    type: "Power",
    id: "ID_FMP_POWER_11757",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11757",
    categories: ["Unwavering Vigilance", "ID_FMP_POWER_11757", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_627", "Champion of the Labyrinth", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Warp in the Weave"] = new RulesElement({
    name: "Warp in the Weave",
    type: "Power",
    id: "ID_FMP_POWER_12162",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12162",
    categories: ["Warp in the Weave", "ID_FMP_POWER_12162", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_SKILL_POWER", "Skill Power", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_INTERNAL_CLASS_HYBRID", "Hybrid", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Weapon of the Dwarf-Father"] = new RulesElement({
    name: "Weapon of the Dwarf-Father",
    type: "Power",
    id: "ID_FMP_POWER_12209",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12209",
    categories: ["Weapon of the Dwarf-Father", "ID_FMP_POWER_12209"]
  });
  byID[te.id] = te;
  
  te = Power["Weave Luck"] = new RulesElement({
    name: "Weave Luck",
    type: "Power",
    id: "ID_FMP_POWER_11834",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=11834",
    categories: ["Weave Luck", "ID_FMP_POWER_11834", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  
})(this);
