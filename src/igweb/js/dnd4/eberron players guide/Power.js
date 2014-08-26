define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Aggravating Force"] = new engine.RulesElement({
    name: "Aggravating Force",
    type: "Power",
    id: "ID_FMP_POWER_4131",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4131",
    categories: ["Aggravating Force", "ID_FMP_POWER_4131", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Aid Artifice"] = new engine.RulesElement({
    name: "Aid Artifice",
    type: "Power",
    id: "ID_FMP_POWER_7562",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7562",
    categories: ["Aid Artifice", "ID_FMP_POWER_7562", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_368", "Clockwork Engineer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["All-Consuming Missile"] = new engine.RulesElement({
    name: "All-Consuming Missile",
    type: "Power",
    id: "ID_FMP_POWER_4165",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4165",
    categories: ["All-Consuming Missile", "ID_FMP_POWER_4165", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Altered Luck"] = new engine.RulesElement({
    name: "Altered Luck",
    type: "Power",
    id: "ID_FMP_POWER_4138",
    source: "Eberron Player's Guide,Adventurer's Vault 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4138",
    categories: ["Altered Luck", "ID_FMP_POWER_4138", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Ancestral Guidance"] = new engine.RulesElement({
    name: "Ancestral Guidance",
    type: "Power",
    id: "ID_FMP_POWER_7621",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7621",
    categories: ["Ancestral Guidance", "ID_FMP_POWER_7621", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Animate Arbalester"] = new engine.RulesElement({
    name: "Animate Arbalester",
    type: "Power",
    id: "ID_FMP_POWER_7664",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7664",
    categories: ["Animate Arbalester", "ID_FMP_POWER_7664", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_51", "summoning", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Animate Helper"] = new engine.RulesElement({
    name: "Animate Helper",
    type: "Power",
    id: "ID_FMP_POWER_7651",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7651",
    categories: ["Animate Helper", "ID_FMP_POWER_7651", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Arawai's Abundance"] = new engine.RulesElement({
    name: "Arawai's Abundance",
    type: "Power",
    id: "ID_FMP_POWER_7622",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7622",
    categories: ["Arawai's Abundance", "ID_FMP_POWER_7622", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Springboard"] = new engine.RulesElement({
    name: "Arcane Springboard",
    type: "Power",
    id: "ID_FMP_POWER_4137",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4137",
    categories: ["Arcane Springboard", "ID_FMP_POWER_4137", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Armor of Acid"] = new engine.RulesElement({
    name: "Armor of Acid",
    type: "Power",
    id: "ID_FMP_POWER_4162",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4162",
    categories: ["Armor of Acid", "ID_FMP_POWER_4162", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Aureon's Instruction"] = new engine.RulesElement({
    name: "Aureon's Instruction",
    type: "Power",
    id: "ID_FMP_POWER_7623",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7623",
    categories: ["Aureon's Instruction", "ID_FMP_POWER_7623", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Bag of the Four Winds"] = new engine.RulesElement({
    name: "Bag of the Four Winds",
    type: "Power",
    id: "ID_FMP_POWER_4161",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4161",
    categories: ["Bag of the Four Winds", "ID_FMP_POWER_4161", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Balinor's Prey"] = new engine.RulesElement({
    name: "Balinor's Prey",
    type: "Power",
    id: "ID_FMP_POWER_7624",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7624",
    categories: ["Balinor's Prey", "ID_FMP_POWER_7624", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Barbed Automaton"] = new engine.RulesElement({
    name: "Barbed Automaton",
    type: "Power",
    id: "ID_FMP_POWER_4150",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4150",
    categories: ["Barbed Automaton", "ID_FMP_POWER_4150", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Bastion of Mental Clarity"] = new engine.RulesElement({
    name: "Bastion of Mental Clarity",
    type: "Power",
    id: "ID_FMP_POWER_7548",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7548",
    categories: ["Bastion of Mental Clarity", "ID_FMP_POWER_7548", "ID_FMP_RACIAL_TRAIT_1572", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Battlefist Smash"] = new engine.RulesElement({
    name: "Battlefist Smash",
    type: "Power",
    id: "ID_FMP_POWER_7573",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7573",
    categories: ["Battlefist Smash", "ID_FMP_POWER_7573", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_372", "Self-Forged", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Beacon of Dol Arrah"] = new engine.RulesElement({
    name: "Beacon of Dol Arrah",
    type: "Power",
    id: "ID_FMP_POWER_7625",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7625",
    categories: ["Beacon of Dol Arrah", "ID_FMP_POWER_7625", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Beetle of Force"] = new engine.RulesElement({
    name: "Beetle of Force",
    type: "Power",
    id: "ID_FMP_POWER_7679",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7679",
    categories: ["Beetle of Force", "ID_FMP_POWER_7679", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Befuddling Bypass"] = new engine.RulesElement({
    name: "Befuddling Bypass",
    type: "Power",
    id: "ID_FMP_POWER_7588",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7588",
    categories: ["Befuddling Bypass", "ID_FMP_POWER_7588", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_378", "Kundarak Ghorad'din", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Bitter-Frost Bolt"] = new engine.RulesElement({
    name: "Bitter-Frost Bolt",
    type: "Power",
    id: "ID_FMP_POWER_4168",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4168",
    categories: ["Bitter-Frost Bolt", "ID_FMP_POWER_4168", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Bodyguard's Link"] = new engine.RulesElement({
    name: "Bodyguard's Link",
    type: "Power",
    id: "ID_FMP_POWER_7579",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7579",
    categories: ["Bodyguard's Link", "ID_FMP_POWER_7579", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_375", "Deneith Protector", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Boldrei's Shelter"] = new engine.RulesElement({
    name: "Boldrei's Shelter",
    type: "Power",
    id: "ID_FMP_POWER_7626",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7626",
    categories: ["Boldrei's Shelter", "ID_FMP_POWER_7626", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Bolster Armor"] = new engine.RulesElement({
    name: "Bolster Armor",
    type: "Power",
    id: "ID_FMP_POWER_7642",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7642",
    categories: ["Bolster Armor", "ID_FMP_POWER_7642", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Brittle-Skin Missile"] = new engine.RulesElement({
    name: "Brittle-Skin Missile",
    type: "Power",
    id: "ID_FMP_POWER_4147",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4147",
    categories: ["Brittle-Skin Missile", "ID_FMP_POWER_4147", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Burning Weapons"] = new engine.RulesElement({
    name: "Burning Weapons",
    type: "Power",
    id: "ID_FMP_POWER_7637",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7637",
    categories: ["Burning Weapons", "ID_FMP_POWER_7637", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Burrowing Projectile"] = new engine.RulesElement({
    name: "Burrowing Projectile",
    type: "Power",
    id: "ID_FMP_POWER_4159",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4159",
    categories: ["Burrowing Projectile", "ID_FMP_POWER_4159", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Call of Light"] = new engine.RulesElement({
    name: "Call of Light",
    type: "Power",
    id: "ID_FMP_POWER_7572",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7572",
    categories: ["Call of Light", "ID_FMP_POWER_7572", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_371", "Lightwalker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Caustic Rampart"] = new engine.RulesElement({
    name: "Caustic Rampart",
    type: "Power",
    id: "ID_FMP_POWER_4201",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4201",
    categories: ["Caustic Rampart", "ID_FMP_POWER_4201", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Changeling Disguise"] = new engine.RulesElement({
    name: "Changeling Disguise",
    type: "Power",
    id: "ID_FMP_POWER_2472",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2472",
    categories: ["Changeling Disguise", "ID_FMP_POWER_2472", "ID_FMP_RACIAL_TRAIT_400", "Change Shape", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Changeling Trick"] = new engine.RulesElement({
    name: "Changeling Trick",
    type: "Power",
    id: "ID_FMP_POWER_7546",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7546",
    categories: ["Changeling Trick", "ID_FMP_POWER_7546", "ID_FMP_RACIAL_TRAIT_1570", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Chaos Weapon"] = new engine.RulesElement({
    name: "Chaos Weapon",
    type: "Power",
    id: "ID_FMP_POWER_7680",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7680",
    categories: ["Chaos Weapon", "ID_FMP_POWER_7680", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_56", "Varies", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Cleansing Presence"] = new engine.RulesElement({
    name: "Cleansing Presence",
    type: "Power",
    id: "ID_FMP_POWER_7619",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7619",
    categories: ["Cleansing Presence", "ID_FMP_POWER_7619", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_389", "Mourning Savior", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Clockroach Swarm"] = new engine.RulesElement({
    name: "Clockroach Swarm",
    type: "Power",
    id: "ID_FMP_POWER_7665",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7665",
    categories: ["Clockroach Swarm", "ID_FMP_POWER_7665", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Clockwork Acid Wasp"] = new engine.RulesElement({
    name: "Clockwork Acid Wasp",
    type: "Power",
    id: "ID_FMP_POWER_7673",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7673",
    categories: ["Clockwork Acid Wasp", "ID_FMP_POWER_7673", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Clockwork Companion"] = new engine.RulesElement({
    name: "Clockwork Companion",
    type: "Power",
    id: "ID_FMP_POWER_7563",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7563",
    categories: ["Clockwork Companion", "ID_FMP_POWER_7563", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_368", "Clockwork Engineer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Clockwork Soldiers"] = new engine.RulesElement({
    name: "Clockwork Soldiers",
    type: "Power",
    id: "ID_FMP_POWER_7561",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7561",
    categories: ["Clockwork Soldiers", "ID_FMP_POWER_7561", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_368", "Clockwork Engineer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Corrosive Sigil"] = new engine.RulesElement({
    name: "Corrosive Sigil",
    type: "Power",
    id: "ID_FMP_POWER_7649",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7649",
    categories: ["Corrosive Sigil", "ID_FMP_POWER_7649", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Crag of Steel"] = new engine.RulesElement({
    name: "Crag of Steel",
    type: "Power",
    id: "ID_FMP_POWER_3153",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3153",
    categories: ["Crag of Steel", "ID_FMP_POWER_3153", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_131", "Warforged Juggernaut", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Cure-All Admixture"] = new engine.RulesElement({
    name: "Cure-All Admixture",
    type: "Power",
    id: "ID_FMP_POWER_7677",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7677",
    categories: ["Cure-All Admixture", "ID_FMP_POWER_7677", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Dancing Shield"] = new engine.RulesElement({
    name: "Dancing Shield",
    type: "Power",
    id: "ID_FMP_POWER_7658",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7658",
    categories: ["Dancing Shield", "ID_FMP_POWER_7658", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Dancing Weapon"] = new engine.RulesElement({
    name: "Dancing Weapon",
    type: "Power",
    id: "ID_FMP_POWER_4141",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4141",
    categories: ["Dancing Weapon", "ID_FMP_POWER_4141", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_51", "summoning", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Dawn Burst"] = new engine.RulesElement({
    name: "Dawn Burst",
    type: "Power",
    id: "ID_FMP_POWER_7587",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7587",
    categories: ["Dawn Burst", "ID_FMP_POWER_7587", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_377", "Jorasco Jadehand", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Deadly Duplication"] = new engine.RulesElement({
    name: "Deadly Duplication",
    type: "Power",
    id: "ID_FMP_POWER_7560",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7560",
    categories: ["Deadly Duplication", "ID_FMP_POWER_7560", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_367", "Chameleon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Descending Shadows"] = new engine.RulesElement({
    name: "Descending Shadows",
    type: "Power",
    id: "ID_FMP_POWER_7610",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7610",
    categories: ["Descending Shadows", "ID_FMP_POWER_7610", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_385", "Thuranni Shadow Killer", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Dimensional Shifter"] = new engine.RulesElement({
    name: "Dimensional Shifter",
    type: "Power",
    id: "ID_FMP_POWER_7682",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7682",
    categories: ["Dimensional Shifter", "ID_FMP_POWER_7682", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Diminutive Bodyguard"] = new engine.RulesElement({
    name: "Diminutive Bodyguard",
    type: "Power",
    id: "ID_FMP_POWER_7678",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7678",
    categories: ["Diminutive Bodyguard", "ID_FMP_POWER_7678", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Disruptive Premonition"] = new engine.RulesElement({
    name: "Disruptive Premonition",
    type: "Power",
    id: "ID_FMP_POWER_7596",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7596",
    categories: ["Disruptive Premonition", "ID_FMP_POWER_7596", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_380", "Medani Trueseer", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Distant Quarry"] = new engine.RulesElement({
    name: "Distant Quarry",
    type: "Power",
    id: "ID_FMP_POWER_7607",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7607",
    categories: ["Distant Quarry", "ID_FMP_POWER_7607", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_384", "Tharashk Wayfinder", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Disturbing Visions"] = new engine.RulesElement({
    name: "Disturbing Visions",
    type: "Power",
    id: "ID_FMP_POWER_7600",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7600",
    categories: ["Disturbing Visions", "ID_FMP_POWER_7600", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_382", "Phiarlan Phantasmist", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Earth's Embrace"] = new engine.RulesElement({
    name: "Earth's Embrace",
    type: "Power",
    id: "ID_FMP_POWER_4157",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4157",
    categories: ["Earth's Embrace", "ID_FMP_POWER_4157", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Energy Shroud"] = new engine.RulesElement({
    name: "Energy Shroud",
    type: "Power",
    id: "ID_FMP_POWER_7661",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7661",
    categories: ["Energy Shroud", "ID_FMP_POWER_7661", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Flailing Gauntlet"] = new engine.RulesElement({
    name: "Flailing Gauntlet",
    type: "Power",
    id: "ID_FMP_POWER_7575",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7575",
    categories: ["Flailing Gauntlet", "ID_FMP_POWER_7575", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_372", "Self-Forged", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Flame of Censure"] = new engine.RulesElement({
    name: "Flame of Censure",
    type: "Power",
    id: "ID_FMP_POWER_7564",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7564",
    categories: ["Flame of Censure", "ID_FMP_POWER_7564", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_369", "Exorcist of the Silver Flame", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Flameheart Defender"] = new engine.RulesElement({
    name: "Flameheart Defender",
    type: "Power",
    id: "ID_FMP_POWER_7650",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7650",
    categories: ["Flameheart Defender", "ID_FMP_POWER_7650", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Fleeting Dweomer"] = new engine.RulesElement({
    name: "Fleeting Dweomer",
    type: "Power",
    id: "ID_FMP_POWER_7555",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7555",
    categories: ["Fleeting Dweomer", "ID_FMP_POWER_7555", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_366", "Battle Engineer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Flurry of Teleportation"] = new engine.RulesElement({
    name: "Flurry of Teleportation",
    type: "Power",
    id: "ID_FMP_POWER_7599",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7599",
    categories: ["Flurry of Teleportation", "ID_FMP_POWER_7599", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_381", "Orien Swiftblade", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Force Infusion"] = new engine.RulesElement({
    name: "Force Infusion",
    type: "Power",
    id: "ID_FMP_POWER_7646",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7646",
    categories: ["Force Infusion", "ID_FMP_POWER_7646", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Forceful Weapon"] = new engine.RulesElement({
    name: "Forceful Weapon",
    type: "Power",
    id: "ID_FMP_POWER_4151",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4151",
    categories: ["Forceful Weapon", "ID_FMP_POWER_4151", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Gale-Force Infusion"] = new engine.RulesElement({
    name: "Gale-Force Infusion",
    type: "Power",
    id: "ID_FMP_POWER_4144",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4144",
    categories: ["Gale-Force Infusion", "ID_FMP_POWER_4144", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Gate Seal"] = new engine.RulesElement({
    name: "Gate Seal",
    type: "Power",
    id: "ID_FMP_POWER_7568",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7568",
    categories: ["Gate Seal", "ID_FMP_POWER_7568", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_370", "Gatekeeper Mystagogue", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Globe of Warding"] = new engine.RulesElement({
    name: "Globe of Warding",
    type: "Power",
    id: "ID_FMP_POWER_7580",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7580",
    categories: ["Globe of Warding", "ID_FMP_POWER_7580", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_375", "Deneith Protector", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Good Luck Charm"] = new engine.RulesElement({
    name: "Good Luck Charm",
    type: "Power",
    id: "ID_FMP_POWER_4154",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4154",
    categories: ["Good Luck Charm", "ID_FMP_POWER_4154", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Grasping Rope"] = new engine.RulesElement({
    name: "Grasping Rope",
    type: "Power",
    id: "ID_FMP_POWER_4158",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4158",
    categories: ["Grasping Rope", "ID_FMP_POWER_4158", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Grave-Dust Cloud"] = new engine.RulesElement({
    name: "Grave-Dust Cloud",
    type: "Power",
    id: "ID_FMP_POWER_4166",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4166",
    categories: ["Grave-Dust Cloud", "ID_FMP_POWER_4166", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Greater Magic Weapon"] = new engine.RulesElement({
    name: "Greater Magic Weapon",
    type: "Power",
    id: "ID_FMP_POWER_7554",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7554",
    categories: ["Greater Magic Weapon", "ID_FMP_POWER_7554", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_366", "Battle Engineer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Griffon's Pull"] = new engine.RulesElement({
    name: "Griffon's Pull",
    type: "Power",
    id: "ID_FMP_POWER_7614",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7614",
    categories: ["Griffon's Pull", "ID_FMP_POWER_7614", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_386", "Vadalis Griffonmaster", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian's Word"] = new engine.RulesElement({
    name: "Guardian's Word",
    type: "Power",
    id: "ID_FMP_POWER_7583",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7583",
    categories: ["Guardian's Word", "ID_FMP_POWER_7583", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_376", "Ghallanda Sanctuary Guardian", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Haste Sigil"] = new engine.RulesElement({
    name: "Haste Sigil",
    type: "Power",
    id: "ID_FMP_POWER_7687",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7687",
    categories: ["Haste Sigil", "ID_FMP_POWER_7687", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Healing Figurine"] = new engine.RulesElement({
    name: "Healing Figurine",
    type: "Power",
    id: "ID_FMP_POWER_4148",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4148",
    categories: ["Healing Figurine", "ID_FMP_POWER_4148", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Healing Infusion: Curative Admixture"] = new engine.RulesElement({
    name: "Healing Infusion: Curative Admixture",
    type: "Power",
    id: "ID_FMP_POWER_4128",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4128",
    categories: ["Healing Infusion: Curative Admixture", "ID_FMP_POWER_4128"]
  });
  byID[te.id] = te;
  
  te = Power["Healing Infusion: Resistive Formula"] = new engine.RulesElement({
    name: "Healing Infusion: Resistive Formula",
    type: "Power",
    id: "ID_FMP_POWER_7635",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7635",
    categories: ["Healing Infusion: Resistive Formula", "ID_FMP_POWER_7635"]
  });
  byID[te.id] = te;
  
  te = Power["Healing Reserve"] = new engine.RulesElement({
    name: "Healing Reserve",
    type: "Power",
    id: "ID_FMP_POWER_7652",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7652",
    categories: ["Healing Reserve", "ID_FMP_POWER_7652", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Hellfire Sigil"] = new engine.RulesElement({
    name: "Hellfire Sigil",
    type: "Power",
    id: "ID_FMP_POWER_7675",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7675",
    categories: ["Hellfire Sigil", "ID_FMP_POWER_7675", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Hero's Elixir"] = new engine.RulesElement({
    name: "Hero's Elixir",
    type: "Power",
    id: "ID_FMP_POWER_4160",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4160",
    categories: ["Hero's Elixir", "ID_FMP_POWER_4160", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Icebound Sigil"] = new engine.RulesElement({
    name: "Icebound Sigil",
    type: "Power",
    id: "ID_FMP_POWER_7639",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7639",
    categories: ["Icebound Sigil", "ID_FMP_POWER_7639", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Icy Weapons"] = new engine.RulesElement({
    name: "Icy Weapons",
    type: "Power",
    id: "ID_FMP_POWER_7653",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7653",
    categories: ["Icy Weapons", "ID_FMP_POWER_7653", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Illuminate the Adversary"] = new engine.RulesElement({
    name: "Illuminate the Adversary",
    type: "Power",
    id: "ID_FMP_POWER_7570",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7570",
    categories: ["Illuminate the Adversary", "ID_FMP_POWER_7570", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_371", "Lightwalker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Imitating Strike"] = new engine.RulesElement({
    name: "Imitating Strike",
    type: "Power",
    id: "ID_FMP_POWER_7559",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7559",
    categories: ["Imitating Strike", "ID_FMP_POWER_7559", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_367", "Chameleon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Improved Immutability"] = new engine.RulesElement({
    name: "Improved Immutability",
    type: "Power",
    id: "ID_FMP_POWER_3149",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3149",
    categories: ["Improved Immutability", "ID_FMP_POWER_3149", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Inexorable Momentum"] = new engine.RulesElement({
    name: "Inexorable Momentum",
    type: "Power",
    id: "ID_FMP_POWER_3152",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3152",
    categories: ["Inexorable Momentum", "ID_FMP_POWER_3152", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_131", "Warforged Juggernaut", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Invigorating Dive"] = new engine.RulesElement({
    name: "Invigorating Dive",
    type: "Power",
    id: "ID_FMP_POWER_7615",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7615",
    categories: ["Invigorating Dive", "ID_FMP_POWER_7615", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_386", "Vadalis Griffonmaster", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Iron-Hide Infusion"] = new engine.RulesElement({
    name: "Iron-Hide Infusion",
    type: "Power",
    id: "ID_FMP_POWER_4155",
    source: "Eberron Player's Guide,Adventurer's Vault 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4155",
    categories: ["Iron-Hide Infusion", "ID_FMP_POWER_4155", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Item Resurgence"] = new engine.RulesElement({
    name: "Item Resurgence",
    type: "Power",
    id: "ID_FMP_POWER_7577",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7577",
    categories: ["Item Resurgence", "ID_FMP_POWER_7577", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_374", "Cannith Mastermaker", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Jade Rejuvenation"] = new engine.RulesElement({
    name: "Jade Rejuvenation",
    type: "Power",
    id: "ID_FMP_POWER_7586",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7586",
    categories: ["Jade Rejuvenation", "ID_FMP_POWER_7586", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_377", "Jorasco Jadehand", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Kol Korran's Boon"] = new engine.RulesElement({
    name: "Kol Korran's Boon",
    type: "Power",
    id: "ID_FMP_POWER_7627",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7627",
    categories: ["Kol Korran's Boon", "ID_FMP_POWER_7627", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Legendary Defense"] = new engine.RulesElement({
    name: "Legendary Defense",
    type: "Power",
    id: "ID_FMP_POWER_7618",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7618",
    categories: ["Legendary Defense", "ID_FMP_POWER_7618", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_388", "Dispossesed Champion", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Life-Shock Sigil"] = new engine.RulesElement({
    name: "Life-Shock Sigil",
    type: "Power",
    id: "ID_FMP_POWER_7683",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7683",
    categories: ["Life-Shock Sigil", "ID_FMP_POWER_7683", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Life-Stealing Shroud"] = new engine.RulesElement({
    name: "Life-Stealing Shroud",
    type: "Power",
    id: "ID_FMP_POWER_7684",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7684",
    categories: ["Life-Stealing Shroud", "ID_FMP_POWER_7684", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Life-Tapping Darts"] = new engine.RulesElement({
    name: "Life-Tapping Darts",
    type: "Power",
    id: "ID_FMP_POWER_4134",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4134",
    categories: ["Life-Tapping Darts", "ID_FMP_POWER_4134", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Light Within"] = new engine.RulesElement({
    name: "Light Within",
    type: "Power",
    id: "ID_FMP_POWER_7628",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7628",
    categories: ["Light Within", "ID_FMP_POWER_7628", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Infusion"] = new engine.RulesElement({
    name: "Lightning Infusion",
    type: "Power",
    id: "ID_FMP_POWER_7578",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7578",
    categories: ["Lightning Infusion", "ID_FMP_POWER_7578", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_374", "Cannith Mastermaker", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Motes"] = new engine.RulesElement({
    name: "Lightning Motes",
    type: "Power",
    id: "ID_FMP_POWER_4146",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4146",
    categories: ["Lightning Motes", "ID_FMP_POWER_4146", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Sigil"] = new engine.RulesElement({
    name: "Lightning Sigil",
    type: "Power",
    id: "ID_FMP_POWER_4152",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4152",
    categories: ["Lightning Sigil", "ID_FMP_POWER_4152", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Sphere"] = new engine.RulesElement({
    name: "Lightning Sphere",
    type: "Power",
    id: "ID_FMP_POWER_7647",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7647",
    categories: ["Lightning Sphere", "ID_FMP_POWER_7647", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Living Caltrop Swarm"] = new engine.RulesElement({
    name: "Living Caltrop Swarm",
    type: "Power",
    id: "ID_FMP_POWER_4167",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4167",
    categories: ["Living Caltrop Swarm", "ID_FMP_POWER_4167", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Magic Weapon"] = new engine.RulesElement({
    name: "Magic Weapon",
    type: "Power",
    id: "ID_FMP_POWER_5207",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=5207",
    categories: ["Magic Weapon", "ID_FMP_POWER_5207", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Medani Foretelling"] = new engine.RulesElement({
    name: "Medani Foretelling",
    type: "Power",
    id: "ID_FMP_POWER_7595",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7595",
    categories: ["Medani Foretelling", "ID_FMP_POWER_7595", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_380", "Medani Trueseer", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Medani True Strike"] = new engine.RulesElement({
    name: "Medani True Strike",
    type: "Power",
    id: "ID_FMP_POWER_7594",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7594",
    categories: ["Medani True Strike", "ID_FMP_POWER_7594", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_380", "Medani Trueseer", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Might of Dol Dorn"] = new engine.RulesElement({
    name: "Might of Dol Dorn",
    type: "Power",
    id: "ID_FMP_POWER_7629",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7629",
    categories: ["Might of Dol Dorn", "ID_FMP_POWER_7629", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Nature's Balance"] = new engine.RulesElement({
    name: "Nature's Balance",
    type: "Power",
    id: "ID_FMP_POWER_7567",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7567",
    categories: ["Nature's Balance", "ID_FMP_POWER_7567", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_370", "Gatekeeper Mystagogue", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Nature's Purge"] = new engine.RulesElement({
    name: "Nature's Purge",
    type: "Power",
    id: "ID_FMP_POWER_7569",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7569",
    categories: ["Nature's Purge", "ID_FMP_POWER_7569", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_370", "Gatekeeper Mystagogue", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Obedient Servant"] = new engine.RulesElement({
    name: "Obedient Servant",
    type: "Power",
    id: "ID_FMP_POWER_7641",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7641",
    categories: ["Obedient Servant", "ID_FMP_POWER_7641", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Onatar's Gift"] = new engine.RulesElement({
    name: "Onatar's Gift",
    type: "Power",
    id: "ID_FMP_POWER_7630",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7630",
    categories: ["Onatar's Gift", "ID_FMP_POWER_7630", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Orien Unbound"] = new engine.RulesElement({
    name: "Orien Unbound",
    type: "Power",
    id: "ID_FMP_POWER_7598",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7598",
    categories: ["Orien Unbound", "ID_FMP_POWER_7598", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_381", "Orien Swiftblade", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Path of Destruction"] = new engine.RulesElement({
    name: "Path of Destruction",
    type: "Power",
    id: "ID_FMP_POWER_7609",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7609",
    categories: ["Path of Destruction", "ID_FMP_POWER_7609", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_384", "Tharashk Wayfinder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Path of Least Resistance"] = new engine.RulesElement({
    name: "Path of Least Resistance",
    type: "Power",
    id: "ID_FMP_POWER_7606",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7606",
    categories: ["Path of Least Resistance", "ID_FMP_POWER_7606", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_384", "Tharashk Wayfinder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Path of Light"] = new engine.RulesElement({
    name: "Path of Light",
    type: "Power",
    id: "ID_FMP_POWER_7571",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7571",
    categories: ["Path of Light", "ID_FMP_POWER_7571", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_371", "Lightwalker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Perfect Mimicry"] = new engine.RulesElement({
    name: "Perfect Mimicry",
    type: "Power",
    id: "ID_FMP_POWER_7558",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7558",
    categories: ["Perfect Mimicry", "ID_FMP_POWER_7558", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_367", "Chameleon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Persistent Spheres"] = new engine.RulesElement({
    name: "Persistent Spheres",
    type: "Power",
    id: "ID_FMP_POWER_7556",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7556",
    categories: ["Persistent Spheres", "ID_FMP_POWER_7556", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_366", "Battle Engineer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Phantasmist Stalker"] = new engine.RulesElement({
    name: "Phantasmist Stalker",
    type: "Power",
    id: "ID_FMP_POWER_7602",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7602",
    categories: ["Phantasmist Stalker", "ID_FMP_POWER_7602", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_382", "Phiarlan Phantasmist", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Phantom Structure"] = new engine.RulesElement({
    name: "Phantom Structure",
    type: "Power",
    id: "ID_FMP_POWER_4143",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4143",
    categories: ["Phantom Structure", "ID_FMP_POWER_4143", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Positive Energy Infusion"] = new engine.RulesElement({
    name: "Positive Energy Infusion",
    type: "Power",
    id: "ID_FMP_POWER_7663",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7663",
    categories: ["Positive Energy Infusion", "ID_FMP_POWER_7663", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Power Siphon"] = new engine.RulesElement({
    name: "Power Siphon",
    type: "Power",
    id: "ID_FMP_POWER_7576",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7576",
    categories: ["Power Siphon", "ID_FMP_POWER_7576", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_374", "Cannith Mastermaker", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Predatory Shards"] = new engine.RulesElement({
    name: "Predatory Shards",
    type: "Power",
    id: "ID_FMP_POWER_4140",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4140",
    categories: ["Predatory Shards", "ID_FMP_POWER_4140", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Preventive Medicine"] = new engine.RulesElement({
    name: "Preventive Medicine",
    type: "Power",
    id: "ID_FMP_POWER_7585",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7585",
    categories: ["Preventive Medicine", "ID_FMP_POWER_7585", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_377", "Jorasco Jadehand", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Prismatic Strike"] = new engine.RulesElement({
    name: "Prismatic Strike",
    type: "Power",
    id: "ID_FMP_POWER_4163",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4163",
    categories: ["Prismatic Strike", "ID_FMP_POWER_4163", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Prophetic Certainty"] = new engine.RulesElement({
    name: "Prophetic Certainty",
    type: "Power",
    id: "ID_FMP_POWER_7617",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7617",
    categories: ["Prophetic Certainty", "ID_FMP_POWER_7617", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_387", "Champion of Prophecy", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Protection from Elements"] = new engine.RulesElement({
    name: "Protection from Elements",
    type: "Power",
    id: "ID_FMP_POWER_7669",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7669",
    categories: ["Protection from Elements", "ID_FMP_POWER_7669", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Punish the Assailant"] = new engine.RulesElement({
    name: "Punish the Assailant",
    type: "Power",
    id: "ID_FMP_POWER_7581",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7581",
    categories: ["Punish the Assailant", "ID_FMP_POWER_7581", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_375", "Deneith Protector", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Quick Admixture"] = new engine.RulesElement({
    name: "Quick Admixture",
    type: "Power",
    id: "ID_FMP_POWER_7550",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7550",
    categories: ["Quick Admixture", "ID_FMP_POWER_7550", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_365", "Alchemist Savant", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Burst"] = new engine.RulesElement({
    name: "Radiant Burst",
    type: "Power",
    id: "ID_FMP_POWER_7671",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7671",
    categories: ["Radiant Burst", "ID_FMP_POWER_7671", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Sigil"] = new engine.RulesElement({
    name: "Radiant Sigil",
    type: "Power",
    id: "ID_FMP_POWER_7656",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7656",
    categories: ["Radiant Sigil", "ID_FMP_POWER_7656", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Regeneration Infusion"] = new engine.RulesElement({
    name: "Regeneration Infusion",
    type: "Power",
    id: "ID_FMP_POWER_4142",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4142",
    categories: ["Regeneration Infusion", "ID_FMP_POWER_4142", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Reinforced Minion"] = new engine.RulesElement({
    name: "Reinforced Minion",
    type: "Power",
    id: "ID_FMP_POWER_7643",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7643",
    categories: ["Reinforced Minion", "ID_FMP_POWER_7643", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Relentless Harrier"] = new engine.RulesElement({
    name: "Relentless Harrier",
    type: "Power",
    id: "ID_FMP_POWER_7657",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7657",
    categories: ["Relentless Harrier", "ID_FMP_POWER_7657", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Repulsion Strike"] = new engine.RulesElement({
    name: "Repulsion Strike",
    type: "Power",
    id: "ID_FMP_POWER_7648",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7648",
    categories: ["Repulsion Strike", "ID_FMP_POWER_7648", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Restorative Infusion"] = new engine.RulesElement({
    name: "Restorative Infusion",
    type: "Power",
    id: "ID_FMP_POWER_4202",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4202",
    categories: ["Restorative Infusion", "ID_FMP_POWER_4202", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Ruinous Onslaught"] = new engine.RulesElement({
    name: "Ruinous Onslaught",
    type: "Power",
    id: "ID_FMP_POWER_3151",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3151",
    categories: ["Ruinous Onslaught", "ID_FMP_POWER_3151", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_131", "Warforged Juggernaut", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Runes of the Shadow Tendrils"] = new engine.RulesElement({
    name: "Runes of the Shadow Tendrils",
    type: "Power",
    id: "ID_FMP_POWER_4169",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4169",
    categories: ["Runes of the Shadow Tendrils", "ID_FMP_POWER_4169", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Runic Resistance"] = new engine.RulesElement({
    name: "Runic Resistance",
    type: "Power",
    id: "ID_FMP_POWER_4145",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4145",
    categories: ["Runic Resistance", "ID_FMP_POWER_4145", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Sanctuary Strike"] = new engine.RulesElement({
    name: "Sanctuary Strike",
    type: "Power",
    id: "ID_FMP_POWER_7584",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7584",
    categories: ["Sanctuary Strike", "ID_FMP_POWER_7584", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_376", "Ghallanda Sanctuary Guardian", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Scatter the Invaders"] = new engine.RulesElement({
    name: "Scatter the Invaders",
    type: "Power",
    id: "ID_FMP_POWER_7582",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7582",
    categories: ["Scatter the Invaders", "ID_FMP_POWER_7582", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_376", "Ghallanda Sanctuary Guardian", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Scouring Weapon"] = new engine.RulesElement({
    name: "Scouring Weapon",
    type: "Power",
    id: "ID_FMP_POWER_7638",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7638",
    categories: ["Scouring Weapon", "ID_FMP_POWER_7638", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Secret Recipe"] = new engine.RulesElement({
    name: "Secret Recipe",
    type: "Power",
    id: "ID_FMP_POWER_7551",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7551",
    categories: ["Secret Recipe", "ID_FMP_POWER_7551", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_365", "Alchemist Savant", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Self-Repair"] = new engine.RulesElement({
    name: "Self-Repair",
    type: "Power",
    id: "ID_FMP_POWER_7574",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7574",
    categories: ["Self-Repair", "ID_FMP_POWER_7574", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_372", "Self-Forged", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Shadowstep"] = new engine.RulesElement({
    name: "Shadowstep",
    type: "Power",
    id: "ID_FMP_POWER_7611",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7611",
    categories: ["Shadowstep", "ID_FMP_POWER_7611", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_385", "Thuranni Shadow Killer", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Shield of the Silver Flame"] = new engine.RulesElement({
    name: "Shield of the Silver Flame",
    type: "Power",
    id: "ID_FMP_POWER_7631",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7631",
    categories: ["Shield of the Silver Flame", "ID_FMP_POWER_7631", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Shielding Cube"] = new engine.RulesElement({
    name: "Shielding Cube",
    type: "Power",
    id: "ID_FMP_POWER_4133",
    source: "Eberron Player's Guide,Adventurer's Vault 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4133",
    categories: ["Shielding Cube", "ID_FMP_POWER_4133", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Shifting Charge"] = new engine.RulesElement({
    name: "Shifting Charge",
    type: "Power",
    id: "ID_FMP_POWER_7597",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7597",
    categories: ["Shifting Charge", "ID_FMP_POWER_7597", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_381", "Orien Swiftblade", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Sigil of Luck"] = new engine.RulesElement({
    name: "Sigil of Luck",
    type: "Power",
    id: "ID_FMP_POWER_7659",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7659",
    categories: ["Sigil of Luck", "ID_FMP_POWER_7659", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Sigil of Repulsion"] = new engine.RulesElement({
    name: "Sigil of Repulsion",
    type: "Power",
    id: "ID_FMP_POWER_7604",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7604",
    categories: ["Sigil of Repulsion", "ID_FMP_POWER_7604", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_383", "Sivis Truenamer", "ID_FMP_CATEGORY_26", "Conjuration", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Silver Brand"] = new engine.RulesElement({
    name: "Silver Brand",
    type: "Power",
    id: "ID_FMP_POWER_7566",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7566",
    categories: ["Silver Brand", "ID_FMP_POWER_7566", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_369", "Exorcist of the Silver Flame", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Silver Flame's Embrace"] = new engine.RulesElement({
    name: "Silver Flame's Embrace",
    type: "Power",
    id: "ID_FMP_POWER_7620",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7620",
    categories: ["Silver Flame's Embrace", "ID_FMP_POWER_7620", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_390", "Sublime Flame", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Simulacrum"] = new engine.RulesElement({
    name: "Simulacrum",
    type: "Power",
    id: "ID_FMP_POWER_7689",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7689",
    categories: ["Simulacrum", "ID_FMP_POWER_7689", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Skipping Shot"] = new engine.RulesElement({
    name: "Skipping Shot",
    type: "Power",
    id: "ID_FMP_POWER_4156",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4156",
    categories: ["Skipping Shot", "ID_FMP_POWER_4156", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Slick Concoction"] = new engine.RulesElement({
    name: "Slick Concoction",
    type: "Power",
    id: "ID_FMP_POWER_4203",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4203",
    categories: ["Slick Concoction", "ID_FMP_POWER_4203", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Snatching Assault"] = new engine.RulesElement({
    name: "Snatching Assault",
    type: "Power",
    id: "ID_FMP_POWER_7616",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7616",
    categories: ["Snatching Assault", "ID_FMP_POWER_7616", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_386", "Vadalis Griffonmaster", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Sovereign Justice"] = new engine.RulesElement({
    name: "Sovereign Justice",
    type: "Power",
    id: "ID_FMP_POWER_7632",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7632",
    categories: ["Sovereign Justice", "ID_FMP_POWER_7632", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Spectral Garrote"] = new engine.RulesElement({
    name: "Spectral Garrote",
    type: "Power",
    id: "ID_FMP_POWER_7612",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7612",
    categories: ["Spectral Garrote", "ID_FMP_POWER_7612", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_385", "Thuranni Shadow Killer", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7613"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Spectral Garrote Attack"] = new engine.RulesElement({
    name: "Spectral Garrote Attack",
    type: "Power",
    id: "ID_FMP_POWER_7613",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7613",
    categories: ["Spectral Garrote Attack", "ID_FMP_POWER_7613", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_PARAGON_PATH_385", "Thuranni Shadow Killer", "ID_FMP_CATEGORY_22", "Reliable", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Spell Magnet"] = new engine.RulesElement({
    name: "Spell Magnet",
    type: "Power",
    id: "ID_FMP_POWER_7552",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7552",
    categories: ["Spell Magnet", "ID_FMP_POWER_7552", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_365", "Alchemist Savant", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7553"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Spell Magnet Attack"] = new engine.RulesElement({
    name: "Spell Magnet Attack",
    type: "Power",
    id: "ID_FMP_POWER_7553",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7553",
    categories: ["Spell Magnet Attack", "ID_FMP_POWER_7553", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_PARAGON_PATH_365", "Alchemist Savant", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Spike Wire"] = new engine.RulesElement({
    name: "Spike Wire",
    type: "Power",
    id: "ID_FMP_POWER_4200",
    source: "Eberron Player's Guide,Adventurer's Vault 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4200",
    categories: ["Spike Wire", "ID_FMP_POWER_4200", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Stalwart Defender"] = new engine.RulesElement({
    name: "Stalwart Defender",
    type: "Power",
    id: "ID_FMP_POWER_7667",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7667",
    categories: ["Stalwart Defender", "ID_FMP_POWER_7667", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Static Shock"] = new engine.RulesElement({
    name: "Static Shock",
    type: "Power",
    id: "ID_FMP_POWER_7636",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7636",
    categories: ["Static Shock", "ID_FMP_POWER_7636", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Swift Mender"] = new engine.RulesElement({
    name: "Swift Mender",
    type: "Power",
    id: "ID_FMP_POWER_7644",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7644",
    categories: ["Swift Mender", "ID_FMP_POWER_7644", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Taunting Decoy"] = new engine.RulesElement({
    name: "Taunting Decoy",
    type: "Power",
    id: "ID_FMP_POWER_7601",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7601",
    categories: ["Taunting Decoy", "ID_FMP_POWER_7601", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_382", "Phiarlan Phantasmist", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Thundering Armor"] = new engine.RulesElement({
    name: "Thundering Armor",
    type: "Power",
    id: "ID_FMP_POWER_4199",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4199",
    categories: ["Thundering Armor", "ID_FMP_POWER_4199", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder-Shock Weapon"] = new engine.RulesElement({
    name: "Thunder-Shock Weapon",
    type: "Power",
    id: "ID_FMP_POWER_7685",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7685",
    categories: ["Thunder-Shock Weapon", "ID_FMP_POWER_7685", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Thwart the Walls"] = new engine.RulesElement({
    name: "Thwart the Walls",
    type: "Power",
    id: "ID_FMP_POWER_7589",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7589",
    categories: ["Thwart the Walls", "ID_FMP_POWER_7589", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_378", "Kundarak Ghorad'din", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Traveler's Gift"] = new engine.RulesElement({
    name: "Traveler's Gift",
    type: "Power",
    id: "ID_FMP_POWER_7633",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7633",
    categories: ["Traveler's Gift", "ID_FMP_POWER_7633", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Trio of Biting Blades"] = new engine.RulesElement({
    name: "Trio of Biting Blades",
    type: "Power",
    id: "ID_FMP_POWER_4164",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4164",
    categories: ["Trio of Biting Blades", "ID_FMP_POWER_4164", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Undying's Command"] = new engine.RulesElement({
    name: "Undying's Command",
    type: "Power",
    id: "ID_FMP_POWER_7634",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7634",
    categories: ["Undying's Command", "ID_FMP_POWER_7634", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Unruly Cyclone"] = new engine.RulesElement({
    name: "Unruly Cyclone",
    type: "Power",
    id: "ID_FMP_POWER_7593",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7593",
    categories: ["Unruly Cyclone", "ID_FMP_POWER_7593", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_379", "Lyrandar Wind-Rider", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Unstable Infusion"] = new engine.RulesElement({
    name: "Unstable Infusion",
    type: "Power",
    id: "ID_FMP_POWER_7672",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7672",
    categories: ["Unstable Infusion", "ID_FMP_POWER_7672", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Use Magic Item"] = new engine.RulesElement({
    name: "Use Magic Item",
    type: "Power",
    id: "ID_FMP_POWER_7645",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7645",
    categories: ["Use Magic Item", "ID_FMP_POWER_7645", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Utterance of Domination"] = new engine.RulesElement({
    name: "Utterance of Domination",
    type: "Power",
    id: "ID_FMP_POWER_7605",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7605",
    categories: ["Utterance of Domination", "ID_FMP_POWER_7605", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_383", "Sivis Truenamer", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Utterance of Mockery"] = new engine.RulesElement({
    name: "Utterance of Mockery",
    type: "Power",
    id: "ID_FMP_POWER_7603",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7603",
    categories: ["Utterance of Mockery", "ID_FMP_POWER_7603", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_383", "Sivis Truenamer", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Vampiric Weapons"] = new engine.RulesElement({
    name: "Vampiric Weapons",
    type: "Power",
    id: "ID_FMP_POWER_7654",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7654",
    categories: ["Vampiric Weapons", "ID_FMP_POWER_7654", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Vorpal Edge"] = new engine.RulesElement({
    name: "Vorpal Edge",
    type: "Power",
    id: "ID_FMP_POWER_7670",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7670",
    categories: ["Vorpal Edge", "ID_FMP_POWER_7670", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Ward Unleashed"] = new engine.RulesElement({
    name: "Ward Unleashed",
    type: "Power",
    id: "ID_FMP_POWER_7590",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7590",
    categories: ["Ward Unleashed", "ID_FMP_POWER_7590", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_378", "Kundarak Ghorad'din", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Warding Flame"] = new engine.RulesElement({
    name: "Warding Flame",
    type: "Power",
    id: "ID_FMP_POWER_7565",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7565",
    categories: ["Warding Flame", "ID_FMP_POWER_7565", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_369", "Exorcist of the Silver Flame", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Warforged Fortification"] = new engine.RulesElement({
    name: "Warforged Fortification",
    type: "Power",
    id: "ID_FMP_POWER_3150",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3150",
    categories: ["Warforged Fortification", "ID_FMP_POWER_3150", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Warforged Resolve"] = new engine.RulesElement({
    name: "Warforged Resolve",
    type: "Power",
    id: "ID_FMP_POWER_2485",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2485",
    categories: ["Warforged Resolve", "ID_FMP_POWER_2485", "ID_FMP_RACIAL_TRAIT_721", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Wind Burst"] = new engine.RulesElement({
    name: "Wind Burst",
    type: "Power",
    id: "ID_FMP_POWER_7591",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7591",
    categories: ["Wind Burst", "ID_FMP_POWER_7591", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_379", "Lyrandar Wind-Rider", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Zephyr Wings"] = new engine.RulesElement({
    name: "Zephyr Wings",
    type: "Power",
    id: "ID_FMP_POWER_7592",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7592",
    categories: ["Zephyr Wings", "ID_FMP_POWER_7592", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_379", "Lyrandar Wind-Rider", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
