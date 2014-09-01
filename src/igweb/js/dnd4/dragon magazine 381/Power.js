define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Addling Pattern"] = new engine.RulesElement({
    name: "Addling Pattern",
    type: "Power",
    id: "ID_FMP_POWER_10214",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10214",
    categories: ["Addling Pattern", "ID_FMP_POWER_10214", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Agile Footwork"] = new engine.RulesElement({
    name: "Agile Footwork",
    type: "Power",
    id: "ID_FMP_POWER_10169",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10169",
    categories: ["Agile Footwork", "ID_FMP_POWER_10169", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Alter Spell Power"] = new engine.RulesElement({
    name: "Alter Spell Power",
    type: "Power",
    id: "ID_FMP_POWER_10237",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10237",
    categories: ["Alter Spell Power", "ID_FMP_POWER_10237", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_527", "Spell Commander", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Amoth's Grace"] = new engine.RulesElement({
    name: "Amoth's Grace",
    type: "Power",
    id: "ID_FMP_POWER_10264",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10264",
    categories: ["Amoth's Grace", "ID_FMP_POWER_10264", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Anchor"] = new engine.RulesElement({
    name: "Arcane Anchor",
    type: "Power",
    id: "ID_FMP_POWER_10194",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10194",
    categories: ["Arcane Anchor", "ID_FMP_POWER_10194", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Arrows"] = new engine.RulesElement({
    name: "Arcane Arrows",
    type: "Power",
    id: "ID_FMP_POWER_10148",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10148",
    categories: ["Arcane Arrows", "ID_FMP_POWER_10148", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Bolt"] = new engine.RulesElement({
    name: "Arcane Bolt",
    type: "Power",
    id: "ID_FMP_POWER_10144",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10144",
    categories: ["Arcane Bolt", "ID_FMP_POWER_10144", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Volley"] = new engine.RulesElement({
    name: "Arcane Volley",
    type: "Power",
    id: "ID_FMP_POWER_10151",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10151",
    categories: ["Arcane Volley", "ID_FMP_POWER_10151", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Armor of Force"] = new engine.RulesElement({
    name: "Armor of Force",
    type: "Power",
    id: "ID_FMP_POWER_10231",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10231",
    categories: ["Armor of Force", "ID_FMP_POWER_10231", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_526", "Arcane Armorer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10232"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Armor of Force Attack"] = new engine.RulesElement({
    name: "Armor of Force Attack",
    type: "Power",
    id: "ID_FMP_POWER_10232",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10232",
    categories: ["Armor of Force Attack", "ID_FMP_POWER_10232", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_PARAGON_PATH_526", "Arcane Armorer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Armor of Storms"] = new engine.RulesElement({
    name: "Armor of Storms",
    type: "Power",
    id: "ID_FMP_POWER_10221",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10221",
    categories: ["Armor of Storms", "ID_FMP_POWER_10221", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10222"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Armor of Storms Attack"] = new engine.RulesElement({
    name: "Armor of Storms Attack",
    type: "Power",
    id: "ID_FMP_POWER_10222",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10222",
    categories: ["Armor of Storms Attack", "ID_FMP_POWER_10222", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Arsenal Transference"] = new engine.RulesElement({
    name: "Arsenal Transference",
    type: "Power",
    id: "ID_FMP_POWER_10215",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10215",
    categories: ["Arsenal Transference", "ID_FMP_POWER_10215", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Auramorphic Armor"] = new engine.RulesElement({
    name: "Auramorphic Armor",
    type: "Power",
    id: "ID_FMP_POWER_10226",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10226",
    categories: ["Auramorphic Armor", "ID_FMP_POWER_10226", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10227"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Auramorphic Armor Attack"] = new engine.RulesElement({
    name: "Auramorphic Armor Attack",
    type: "Power",
    id: "ID_FMP_POWER_10227",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10227",
    categories: ["Auramorphic Armor Attack", "ID_FMP_POWER_10227", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Awakened Wrath"] = new engine.RulesElement({
    name: "Awakened Wrath",
    type: "Power",
    id: "ID_FMP_POWER_10130",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10130",
    categories: ["Awakened Wrath", "ID_FMP_POWER_10130", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Bait the Hook"] = new engine.RulesElement({
    name: "Bait the Hook",
    type: "Power",
    id: "ID_FMP_POWER_10124",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10124",
    categories: ["Bait the Hook", "ID_FMP_POWER_10124", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Black Wrath of Hell"] = new engine.RulesElement({
    name: "Black Wrath of Hell",
    type: "Power",
    id: "ID_FMP_POWER_10243",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10243",
    categories: ["Black Wrath of Hell", "ID_FMP_POWER_10243", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Bond of Transference"] = new engine.RulesElement({
    name: "Bond of Transference",
    type: "Power",
    id: "ID_FMP_POWER_10208",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10208",
    categories: ["Bond of Transference", "ID_FMP_POWER_10208", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Brazen Assault"] = new engine.RulesElement({
    name: "Brazen Assault",
    type: "Power",
    id: "ID_FMP_POWER_10153",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10153",
    categories: ["Brazen Assault", "ID_FMP_POWER_10153", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Brittle Frost"] = new engine.RulesElement({
    name: "Brittle Frost",
    type: "Power",
    id: "ID_FMP_POWER_10223",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10223",
    categories: ["Brittle Frost", "ID_FMP_POWER_10223", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Charge of the Dead"] = new engine.RulesElement({
    name: "Charge of the Dead",
    type: "Power",
    id: "ID_FMP_POWER_10261",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10261",
    categories: ["Charge of the Dead", "ID_FMP_POWER_10261", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Charm of False Glory"] = new engine.RulesElement({
    name: "Charm of False Glory",
    type: "Power",
    id: "ID_FMP_POWER_10150",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10150",
    categories: ["Charm of False Glory", "ID_FMP_POWER_10150", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Charm of Misplaced Wrath"] = new engine.RulesElement({
    name: "Charm of Misplaced Wrath",
    type: "Power",
    id: "ID_FMP_POWER_10138",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10138",
    categories: ["Charm of Misplaced Wrath", "ID_FMP_POWER_10138", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_70", "Enchantment", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Charm of Puppet Strings"] = new engine.RulesElement({
    name: "Charm of Puppet Strings",
    type: "Power",
    id: "ID_FMP_POWER_10152",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10152",
    categories: ["Charm of Puppet Strings", "ID_FMP_POWER_10152", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Charm of the Defender"] = new engine.RulesElement({
    name: "Charm of the Defender",
    type: "Power",
    id: "ID_FMP_POWER_10146",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10146",
    categories: ["Charm of the Defender", "ID_FMP_POWER_10146", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_70", "Enchantment", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Coordinated Offensive"] = new engine.RulesElement({
    name: "Coordinated Offensive",
    type: "Power",
    id: "ID_FMP_POWER_10119",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10119",
    categories: ["Coordinated Offensive", "ID_FMP_POWER_10119", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Darkness Unleashed"] = new engine.RulesElement({
    name: "Darkness Unleashed",
    type: "Power",
    id: "ID_FMP_POWER_10256",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10256",
    categories: ["Darkness Unleashed", "ID_FMP_POWER_10256", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Darting Strike"] = new engine.RulesElement({
    name: "Darting Strike",
    type: "Power",
    id: "ID_FMP_POWER_10159",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10159",
    categories: ["Darting Strike", "ID_FMP_POWER_10159", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Deathguide's Sanction"] = new engine.RulesElement({
    name: "Deathguide's Sanction",
    type: "Power",
    id: "ID_FMP_POWER_10258",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10258",
    categories: ["Deathguide's Sanction", "ID_FMP_POWER_10258", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Deathguide's Stance"] = new engine.RulesElement({
    name: "Deathguide's Stance",
    type: "Power",
    id: "ID_FMP_POWER_10254",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10254",
    categories: ["Deathguide's Stance", "ID_FMP_POWER_10254", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Debilitating Intercession"] = new engine.RulesElement({
    name: "Debilitating Intercession",
    type: "Power",
    id: "ID_FMP_POWER_10202",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10202",
    categories: ["Debilitating Intercession", "ID_FMP_POWER_10202", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Defense Siphon"] = new engine.RulesElement({
    name: "Defense Siphon",
    type: "Power",
    id: "ID_FMP_POWER_10230",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10230",
    categories: ["Defense Siphon", "ID_FMP_POWER_10230", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_526", "Arcane Armorer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Devastating Offensive"] = new engine.RulesElement({
    name: "Devastating Offensive",
    type: "Power",
    id: "ID_FMP_POWER_10122",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10122",
    categories: ["Devastating Offensive", "ID_FMP_POWER_10122", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Diabolic Transformation"] = new engine.RulesElement({
    name: "Diabolic Transformation",
    type: "Power",
    id: "ID_FMP_POWER_10242",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10242",
    categories: ["Diabolic Transformation", "ID_FMP_POWER_10242", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10243"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Dimensional Mooring"] = new engine.RulesElement({
    name: "Dimensional Mooring",
    type: "Power",
    id: "ID_FMP_POWER_10213",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10213",
    categories: ["Dimensional Mooring", "ID_FMP_POWER_10213", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Drain Speed"] = new engine.RulesElement({
    name: "Drain Speed",
    type: "Power",
    id: "ID_FMP_POWER_10189",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10189",
    categories: ["Drain Speed", "ID_FMP_POWER_10189", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Draw Their Eyes"] = new engine.RulesElement({
    name: "Draw Their Eyes",
    type: "Power",
    id: "ID_FMP_POWER_10132",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10132",
    categories: ["Draw Their Eyes", "ID_FMP_POWER_10132", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Duelist's Demand"] = new engine.RulesElement({
    name: "Duelist's Demand",
    type: "Power",
    id: "ID_FMP_POWER_10171",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10171",
    categories: ["Duelist's Demand", "ID_FMP_POWER_10171", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Duelist's Flurry"] = new engine.RulesElement({
    name: "Duelist's Flurry",
    type: "Power",
    id: "ID_FMP_POWER_10165",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10165",
    categories: ["Duelist's Flurry", "ID_FMP_POWER_10165", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Duelist's Prowess"] = new engine.RulesElement({
    name: "Duelist's Prowess",
    type: "Power",
    id: "ID_FMP_POWER_10167",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10167",
    categories: ["Duelist's Prowess", "ID_FMP_POWER_10167", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10168"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Duelist's Prowess Attack"] = new engine.RulesElement({
    name: "Duelist's Prowess Attack",
    type: "Power",
    id: "ID_FMP_POWER_10168",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10168",
    categories: ["Duelist's Prowess Attack", "ID_FMP_POWER_10168", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Energy Conversion"] = new engine.RulesElement({
    name: "Energy Conversion",
    type: "Power",
    id: "ID_FMP_POWER_10201",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10201",
    categories: ["Energy Conversion", "ID_FMP_POWER_10201", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Energy Strobe"] = new engine.RulesElement({
    name: "Energy Strobe",
    type: "Power",
    id: "ID_FMP_POWER_10319",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10319",
    categories: ["Energy Strobe", "ID_FMP_POWER_10319", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Ethereal Chill"] = new engine.RulesElement({
    name: "Ethereal Chill",
    type: "Power",
    id: "ID_FMP_POWER_10188",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10188",
    categories: ["Ethereal Chill", "ID_FMP_POWER_10188", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Eye of Dawn"] = new engine.RulesElement({
    name: "Eye of Dawn",
    type: "Power",
    id: "ID_FMP_POWER_10266",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10266",
    categories: ["Eye of Dawn", "ID_FMP_POWER_10266", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Fateful Cleansing"] = new engine.RulesElement({
    name: "Fateful Cleansing",
    type: "Power",
    id: "ID_FMP_POWER_10259",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10259",
    categories: ["Fateful Cleansing", "ID_FMP_POWER_10259", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Favor the Faithful"] = new engine.RulesElement({
    name: "Favor the Faithful",
    type: "Power",
    id: "ID_FMP_POWER_10271",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10271",
    categories: ["Favor the Faithful", "ID_FMP_POWER_10271", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_528", "Arbiter of Forgotten Justice", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Fearsome Thrust"] = new engine.RulesElement({
    name: "Fearsome Thrust",
    type: "Power",
    id: "ID_FMP_POWER_10163",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10163",
    categories: ["Fearsome Thrust", "ID_FMP_POWER_10163", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Fireburst Armor Attack"] = new engine.RulesElement({
    name: "Fireburst Armor Attack",
    type: "Power",
    id: "ID_FMP_POWER_10192",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10192",
    categories: ["Fireburst Armor Attack", "ID_FMP_POWER_10192", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["First and Final Strike"] = new engine.RulesElement({
    name: "First and Final Strike",
    type: "Power",
    id: "ID_FMP_POWER_10180",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10180",
    categories: ["First and Final Strike", "ID_FMP_POWER_10180", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Flameburst Armor"] = new engine.RulesElement({
    name: "Flameburst Armor",
    type: "Power",
    id: "ID_FMP_POWER_10191",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10191",
    categories: ["Flameburst Armor", "ID_FMP_POWER_10191", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10192"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Freezing Censure"] = new engine.RulesElement({
    name: "Freezing Censure",
    type: "Power",
    id: "ID_FMP_POWER_10260",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10260",
    categories: ["Freezing Censure", "ID_FMP_POWER_10260", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Frost of Letherna"] = new engine.RulesElement({
    name: "Frost of Letherna",
    type: "Power",
    id: "ID_FMP_POWER_10247",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10247",
    categories: ["Frost of Letherna", "ID_FMP_POWER_10247", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Furious Demand"] = new engine.RulesElement({
    name: "Furious Demand",
    type: "Power",
    id: "ID_FMP_POWER_10244",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10244",
    categories: ["Furious Demand", "ID_FMP_POWER_10244", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Glib Tongue"] = new engine.RulesElement({
    name: "Glib Tongue",
    type: "Power",
    id: "ID_FMP_POWER_10140",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10140",
    categories: ["Glib Tongue", "ID_FMP_POWER_10140", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Glowering Wrath"] = new engine.RulesElement({
    name: "Glowering Wrath",
    type: "Power",
    id: "ID_FMP_POWER_10145",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10145",
    categories: ["Glowering Wrath", "ID_FMP_POWER_10145", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Goad of Blood"] = new engine.RulesElement({
    name: "Goad of Blood",
    type: "Power",
    id: "ID_FMP_POWER_10155",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10155",
    categories: ["Goad of Blood", "ID_FMP_POWER_10155", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Guidance of Heavenly Hands"] = new engine.RulesElement({
    name: "Guidance of Heavenly Hands",
    type: "Power",
    id: "ID_FMP_POWER_10267",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10267",
    categories: ["Guidance of Heavenly Hands", "ID_FMP_POWER_10267", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Guileful Swipe"] = new engine.RulesElement({
    name: "Guileful Swipe",
    type: "Power",
    id: "ID_FMP_POWER_10183",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10183",
    categories: ["Guileful Swipe", "ID_FMP_POWER_10183", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Halo of Thorns"] = new engine.RulesElement({
    name: "Halo of Thorns",
    type: "Power",
    id: "ID_FMP_POWER_10190",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10190",
    categories: ["Halo of Thorns", "ID_FMP_POWER_10190", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Healer's Momentum"] = new engine.RulesElement({
    name: "Healer's Momentum",
    type: "Power",
    id: "ID_FMP_POWER_10204",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10204",
    categories: ["Healer's Momentum", "ID_FMP_POWER_10204", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Healing Infusion: Shielding Elixir"] = new engine.RulesElement({
    name: "Healing Infusion: Shielding Elixir",
    type: "Power",
    id: "ID_FMP_POWER_10187",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10187",
    categories: ["Healing Infusion: Shielding Elixir", "ID_FMP_POWER_10187"]
  });
  byID[te.id] = te;
  
  te = Power["Hypnotic Distraction"] = new engine.RulesElement({
    name: "Hypnotic Distraction",
    type: "Power",
    id: "ID_FMP_POWER_10196",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10196",
    categories: ["Hypnotic Distraction", "ID_FMP_POWER_10196", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Ice Archon's Armor"] = new engine.RulesElement({
    name: "Ice Archon's Armor",
    type: "Power",
    id: "ID_FMP_POWER_10210",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10210",
    categories: ["Ice Archon's Armor", "ID_FMP_POWER_10210", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10211"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Ice Archon's Armor Attack"] = new engine.RulesElement({
    name: "Ice Archon's Armor Attack",
    type: "Power",
    id: "ID_FMP_POWER_10211",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10211",
    categories: ["Ice Archon's Armor Attack", "ID_FMP_POWER_10211", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Icy Clutches"] = new engine.RulesElement({
    name: "Icy Clutches",
    type: "Power",
    id: "ID_FMP_POWER_10257",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10257",
    categories: ["Icy Clutches", "ID_FMP_POWER_10257", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["In Death, Life"] = new engine.RulesElement({
    name: "In Death, Life",
    type: "Power",
    id: "ID_FMP_POWER_10263",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10263",
    categories: ["In Death, Life", "ID_FMP_POWER_10263", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Invitational Assault"] = new engine.RulesElement({
    name: "Invitational Assault",
    type: "Power",
    id: "ID_FMP_POWER_10134",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10134",
    categories: ["Invitational Assault", "ID_FMP_POWER_10134", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Jarring Assault"] = new engine.RulesElement({
    name: "Jarring Assault",
    type: "Power",
    id: "ID_FMP_POWER_10136",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10136",
    categories: ["Jarring Assault", "ID_FMP_POWER_10136", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Lamb to the Slaughter"] = new engine.RulesElement({
    name: "Lamb to the Slaughter",
    type: "Power",
    id: "ID_FMP_POWER_10121",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10121",
    categories: ["Lamb to the Slaughter", "ID_FMP_POWER_10121", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Lashing Blade"] = new engine.RulesElement({
    name: "Lashing Blade",
    type: "Power",
    id: "ID_FMP_POWER_10173",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10173",
    categories: ["Lashing Blade", "ID_FMP_POWER_10173", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10174"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Lashing Blade Attack"] = new engine.RulesElement({
    name: "Lashing Blade Attack",
    type: "Power",
    id: "ID_FMP_POWER_10174",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10174",
    categories: ["Lashing Blade Attack", "ID_FMP_POWER_10174", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Leader's Intercession"] = new engine.RulesElement({
    name: "Leader's Intercession",
    type: "Power",
    id: "ID_FMP_POWER_10126",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10126",
    categories: ["Leader's Intercession", "ID_FMP_POWER_10126", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Letherna's Hounds"] = new engine.RulesElement({
    name: "Letherna's Hounds",
    type: "Power",
    id: "ID_FMP_POWER_10255",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10255",
    categories: ["Letherna's Hounds", "ID_FMP_POWER_10255", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Lingering Fear"] = new engine.RulesElement({
    name: "Lingering Fear",
    type: "Power",
    id: "ID_FMP_POWER_10164",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10164",
    categories: ["Lingering Fear", "ID_FMP_POWER_10164", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Living Gate"] = new engine.RulesElement({
    name: "Living Gate",
    type: "Power",
    id: "ID_FMP_POWER_10235",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10235",
    categories: ["Living Gate", "ID_FMP_POWER_10235", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_527", "Spell Commander", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10236"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Living Gate Teleport"] = new engine.RulesElement({
    name: "Living Gate Teleport",
    type: "Power",
    id: "ID_FMP_POWER_10236",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10236",
    categories: ["Living Gate Teleport", "ID_FMP_POWER_10236", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_PARAGON_PATH_527", "Spell Commander", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Memory to Mist"] = new engine.RulesElement({
    name: "Memory to Mist",
    type: "Power",
    id: "ID_FMP_POWER_10141",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10141",
    categories: ["Memory to Mist", "ID_FMP_POWER_10141", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Mental Beacon"] = new engine.RulesElement({
    name: "Mental Beacon",
    type: "Power",
    id: "ID_FMP_POWER_10219",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10219",
    categories: ["Mental Beacon", "ID_FMP_POWER_10219", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["One Blow, One Echo"] = new engine.RulesElement({
    name: "One Blow, One Echo",
    type: "Power",
    id: "ID_FMP_POWER_10321",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10321",
    categories: ["One Blow, One Echo", "ID_FMP_POWER_10321", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Opening Move"] = new engine.RulesElement({
    name: "Opening Move",
    type: "Power",
    id: "ID_FMP_POWER_10166",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10166",
    categories: ["Opening Move", "ID_FMP_POWER_10166", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Opportunistic Enchantment"] = new engine.RulesElement({
    name: "Opportunistic Enchantment",
    type: "Power",
    id: "ID_FMP_POWER_10218",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10218",
    categories: ["Opportunistic Enchantment", "ID_FMP_POWER_10218", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Opportunistic Shove"] = new engine.RulesElement({
    name: "Opportunistic Shove",
    type: "Power",
    id: "ID_FMP_POWER_10186",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10186",
    categories: ["Opportunistic Shove", "ID_FMP_POWER_10186", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Paladin's Wrath"] = new engine.RulesElement({
    name: "Paladin's Wrath",
    type: "Power",
    id: "ID_FMP_POWER_10241",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10241",
    categories: ["Paladin's Wrath", "ID_FMP_POWER_10241", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Path of the Blade"] = new engine.RulesElement({
    name: "Path of the Blade",
    type: "Power",
    id: "ID_FMP_POWER_10176",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10176",
    categories: ["Path of the Blade", "ID_FMP_POWER_10176", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10177"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Path of the Blade Attack"] = new engine.RulesElement({
    name: "Path of the Blade Attack",
    type: "Power",
    id: "ID_FMP_POWER_10177",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10177",
    categories: ["Path of the Blade Attack", "ID_FMP_POWER_10177", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Penance of Amoth"] = new engine.RulesElement({
    name: "Penance of Amoth",
    type: "Power",
    id: "ID_FMP_POWER_10268",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10268",
    categories: ["Penance of Amoth", "ID_FMP_POWER_10268", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Planestorm Anchor"] = new engine.RulesElement({
    name: "Planestorm Anchor",
    type: "Power",
    id: "ID_FMP_POWER_10216",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10216",
    categories: ["Planestorm Anchor", "ID_FMP_POWER_10216", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10217"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Planestorm Anchor Attack"] = new engine.RulesElement({
    name: "Planestorm Anchor Attack",
    type: "Power",
    id: "ID_FMP_POWER_10217",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10217",
    categories: ["Planestorm Anchor Attack", "ID_FMP_POWER_10217", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Pommel Strike"] = new engine.RulesElement({
    name: "Pommel Strike",
    type: "Power",
    id: "ID_FMP_POWER_10184",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10184",
    categories: ["Pommel Strike", "ID_FMP_POWER_10184", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Predatory Charge"] = new engine.RulesElement({
    name: "Predatory Charge",
    type: "Power",
    id: "ID_FMP_POWER_10156",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10156",
    categories: ["Predatory Charge", "ID_FMP_POWER_10156", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Protective Recall"] = new engine.RulesElement({
    name: "Protective Recall",
    type: "Power",
    id: "ID_FMP_POWER_10233",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10233",
    categories: ["Protective Recall", "ID_FMP_POWER_10233", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_526", "Arcane Armorer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Provocative Order"] = new engine.RulesElement({
    name: "Provocative Order",
    type: "Power",
    id: "ID_FMP_POWER_10120",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10120",
    categories: ["Provocative Order", "ID_FMP_POWER_10120", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Punitive Radiance"] = new engine.RulesElement({
    name: "Punitive Radiance",
    type: "Power",
    id: "ID_FMP_POWER_10239",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10239",
    categories: ["Punitive Radiance", "ID_FMP_POWER_10239", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Forcefield"] = new engine.RulesElement({
    name: "Radiant Forcefield",
    type: "Power",
    id: "ID_FMP_POWER_10432",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10432",
    categories: ["Radiant Forcefield", "ID_FMP_POWER_10432", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "19"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10436"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Radiant Forcefield Attack"] = new engine.RulesElement({
    name: "Radiant Forcefield Attack",
    type: "Power",
    id: "ID_FMP_POWER_10436",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10436",
    categories: ["Radiant Forcefield Attack", "ID_FMP_POWER_10436", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Ravenfrost Strike"] = new engine.RulesElement({
    name: "Ravenfrost Strike",
    type: "Power",
    id: "ID_FMP_POWER_10251",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10251",
    categories: ["Ravenfrost Strike", "ID_FMP_POWER_10251", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Reaching Blade"] = new engine.RulesElement({
    name: "Reaching Blade",
    type: "Power",
    id: "ID_FMP_POWER_10161",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10161",
    categories: ["Reaching Blade", "ID_FMP_POWER_10161", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Recuperative Enchantment"] = new engine.RulesElement({
    name: "Recuperative Enchantment",
    type: "Power",
    id: "ID_FMP_POWER_10207",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10207",
    categories: ["Recuperative Enchantment", "ID_FMP_POWER_10207", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Rejuvenating Intercession"] = new engine.RulesElement({
    name: "Rejuvenating Intercession",
    type: "Power",
    id: "ID_FMP_POWER_10220",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10220",
    categories: ["Rejuvenating Intercession", "ID_FMP_POWER_10220", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Retribution Magnet"] = new engine.RulesElement({
    name: "Retribution Magnet",
    type: "Power",
    id: "ID_FMP_POWER_10224",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10224",
    categories: ["Retribution Magnet", "ID_FMP_POWER_10224", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Revel in Pain"] = new engine.RulesElement({
    name: "Revel in Pain",
    type: "Power",
    id: "ID_FMP_POWER_10154",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10154",
    categories: ["Revel in Pain", "ID_FMP_POWER_10154", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Rippling Strike"] = new engine.RulesElement({
    name: "Rippling Strike",
    type: "Power",
    id: "ID_FMP_POWER_10323",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10323",
    categories: ["Rippling Strike", "ID_FMP_POWER_10323", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Road to Victory"] = new engine.RulesElement({
    name: "Road to Victory",
    type: "Power",
    id: "ID_FMP_POWER_10123",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10123",
    categories: ["Road to Victory", "ID_FMP_POWER_10123", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Rousing Call"] = new engine.RulesElement({
    name: "Rousing Call",
    type: "Power",
    id: "ID_FMP_POWER_10125",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10125",
    categories: ["Rousing Call", "ID_FMP_POWER_10125", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Severed Defenses"] = new engine.RulesElement({
    name: "Severed Defenses",
    type: "Power",
    id: "ID_FMP_POWER_10181",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10181",
    categories: ["Severed Defenses", "ID_FMP_POWER_10181", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Blades of Shared Doom"] = new engine.RulesElement({
    name: "Shadow Blades of Shared Doom",
    type: "Power",
    id: "ID_FMP_POWER_10252",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10252",
    categories: ["Shadow Blades of Shared Doom", "ID_FMP_POWER_10252", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow's Apathy"] = new engine.RulesElement({
    name: "Shadow's Apathy",
    type: "Power",
    id: "ID_FMP_POWER_10249",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10249",
    categories: ["Shadow's Apathy", "ID_FMP_POWER_10249", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Shimmering Blade"] = new engine.RulesElement({
    name: "Shimmering Blade",
    type: "Power",
    id: "ID_FMP_POWER_10178",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10178",
    categories: ["Shimmering Blade", "ID_FMP_POWER_10178", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10179"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Shimmering Blade Attack"] = new engine.RulesElement({
    name: "Shimmering Blade Attack",
    type: "Power",
    id: "ID_FMP_POWER_10179",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10179",
    categories: ["Shimmering Blade Attack", "ID_FMP_POWER_10179", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Shining Light of Order"] = new engine.RulesElement({
    name: "Shining Light of Order",
    type: "Power",
    id: "ID_FMP_POWER_10238",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10238",
    categories: ["Shining Light of Order", "ID_FMP_POWER_10238", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Shocking Feedback"] = new engine.RulesElement({
    name: "Shocking Feedback",
    type: "Power",
    id: "ID_FMP_POWER_10195",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10195",
    categories: ["Shocking Feedback", "ID_FMP_POWER_10195", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Shuffling Thunder"] = new engine.RulesElement({
    name: "Shuffling Thunder",
    type: "Power",
    id: "ID_FMP_POWER_10324",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10324",
    categories: ["Shuffling Thunder", "ID_FMP_POWER_10324", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Smiting Blades"] = new engine.RulesElement({
    name: "Smiting Blades",
    type: "Power",
    id: "ID_FMP_POWER_10269",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10269",
    categories: ["Smiting Blades", "ID_FMP_POWER_10269", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_528", "Arbiter of Forgotten Justice", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Sorcerous Echo"] = new engine.RulesElement({
    name: "Sorcerous Echo",
    type: "Power",
    id: "ID_FMP_POWER_10325",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10325",
    categories: ["Sorcerous Echo", "ID_FMP_POWER_10325", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Sorrowsworn Strike"] = new engine.RulesElement({
    name: "Sorrowsworn Strike",
    type: "Power",
    id: "ID_FMP_POWER_10262",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10262",
    categories: ["Sorrowsworn Strike", "ID_FMP_POWER_10262", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Soulfire Mantle"] = new engine.RulesElement({
    name: "Soulfire Mantle",
    type: "Power",
    id: "ID_FMP_POWER_10270",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10270",
    categories: ["Soulfire Mantle", "ID_FMP_POWER_10270", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_528", "Arbiter of Forgotten Justice", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Spectral Image"] = new engine.RulesElement({
    name: "Spectral Image",
    type: "Power",
    id: "ID_FMP_POWER_10143",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10143",
    categories: ["Spectral Image", "ID_FMP_POWER_10143", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Spell Tracer"] = new engine.RulesElement({
    name: "Spell Tracer",
    type: "Power",
    id: "ID_FMP_POWER_10234",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10234",
    categories: ["Spell Tracer", "ID_FMP_POWER_10234", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_527", "Spell Commander", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Spellmaster's Pawn"] = new engine.RulesElement({
    name: "Spellmaster's Pawn",
    type: "Power",
    id: "ID_FMP_POWER_10212",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10212",
    categories: ["Spellmaster's Pawn", "ID_FMP_POWER_10212", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Sphere of Reality"] = new engine.RulesElement({
    name: "Sphere of Reality",
    type: "Power",
    id: "ID_FMP_POWER_10203",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10203",
    categories: ["Sphere of Reality", "ID_FMP_POWER_10203", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Stand Fast"] = new engine.RulesElement({
    name: "Stand Fast",
    type: "Power",
    id: "ID_FMP_POWER_10128",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10128",
    categories: ["Stand Fast", "ID_FMP_POWER_10128", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Static Shell"] = new engine.RulesElement({
    name: "Static Shell",
    type: "Power",
    id: "ID_FMP_POWER_10205",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10205",
    categories: ["Static Shell", "ID_FMP_POWER_10205", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10206"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Static Shell Attack"] = new engine.RulesElement({
    name: "Static Shell Attack",
    type: "Power",
    id: "ID_FMP_POWER_10206",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10206",
    categories: ["Static Shell Attack", "ID_FMP_POWER_10206", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Stolen Life"] = new engine.RulesElement({
    name: "Stolen Life",
    type: "Power",
    id: "ID_FMP_POWER_10246",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10246",
    categories: ["Stolen Life", "ID_FMP_POWER_10246", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Strength of Earth"] = new engine.RulesElement({
    name: "Strength of Earth",
    type: "Power",
    id: "ID_FMP_POWER_10157",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10157",
    categories: ["Strength of Earth", "ID_FMP_POWER_10157", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Strike and Move"] = new engine.RulesElement({
    name: "Strike and Move",
    type: "Power",
    id: "ID_FMP_POWER_10170",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10170",
    categories: ["Strike and Move", "ID_FMP_POWER_10170", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Swift Parry"] = new engine.RulesElement({
    name: "Swift Parry",
    type: "Power",
    id: "ID_FMP_POWER_10172",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10172",
    categories: ["Swift Parry", "ID_FMP_POWER_10172", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Symbol of Vengeance"] = new engine.RulesElement({
    name: "Symbol of Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_10265",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10265",
    categories: ["Symbol of Vengeance", "ID_FMP_POWER_10265", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Tactical Detonation"] = new engine.RulesElement({
    name: "Tactical Detonation",
    type: "Power",
    id: "ID_FMP_POWER_10228",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10228",
    categories: ["Tactical Detonation", "ID_FMP_POWER_10228", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Teachable Moment"] = new engine.RulesElement({
    name: "Teachable Moment",
    type: "Power",
    id: "ID_FMP_POWER_10131",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10131",
    categories: ["Teachable Moment", "ID_FMP_POWER_10131", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Teleport Bash"] = new engine.RulesElement({
    name: "Teleport Bash",
    type: "Power",
    id: "ID_FMP_POWER_10320",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10320",
    categories: ["Teleport Bash", "ID_FMP_POWER_10320", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Thief's Getaway"] = new engine.RulesElement({
    name: "Thief's Getaway",
    type: "Power",
    id: "ID_FMP_POWER_10182",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10182",
    categories: ["Thief's Getaway", "ID_FMP_POWER_10182", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Threatening Presence"] = new engine.RulesElement({
    name: "Threatening Presence",
    type: "Power",
    id: "ID_FMP_POWER_10162",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10162",
    categories: ["Threatening Presence", "ID_FMP_POWER_10162", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Thug's Menace"] = new engine.RulesElement({
    name: "Thug's Menace",
    type: "Power",
    id: "ID_FMP_POWER_10185",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10185",
    categories: ["Thug's Menace", "ID_FMP_POWER_10185", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_7", "Fear", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder and Strike"] = new engine.RulesElement({
    name: "Thunder and Strike",
    type: "Power",
    id: "ID_FMP_POWER_10322",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10322",
    categories: ["Thunder and Strike", "ID_FMP_POWER_10322", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderclap Armor"] = new engine.RulesElement({
    name: "Thunderclap Armor",
    type: "Power",
    id: "ID_FMP_POWER_10199",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10199",
    categories: ["Thunderclap Armor", "ID_FMP_POWER_10199", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10200"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Thunderclap Armor Attack"] = new engine.RulesElement({
    name: "Thunderclap Armor Attack",
    type: "Power",
    id: "ID_FMP_POWER_10200",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10200",
    categories: ["Thunderclap Armor Attack", "ID_FMP_POWER_10200", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderfury Charge"] = new engine.RulesElement({
    name: "Thunderfury Charge",
    type: "Power",
    id: "ID_FMP_POWER_10158",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10158",
    categories: ["Thunderfury Charge", "ID_FMP_POWER_10158", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Tumbling Strike"] = new engine.RulesElement({
    name: "Tumbling Strike",
    type: "Power",
    id: "ID_FMP_POWER_10160",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10160",
    categories: ["Tumbling Strike", "ID_FMP_POWER_10160", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Vaulting Charge"] = new engine.RulesElement({
    name: "Vaulting Charge",
    type: "Power",
    id: "ID_FMP_POWER_10175",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10175",
    categories: ["Vaulting Charge", "ID_FMP_POWER_10175", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Vitality Siphon"] = new engine.RulesElement({
    name: "Vitality Siphon",
    type: "Power",
    id: "ID_FMP_POWER_10225",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10225",
    categories: ["Vitality Siphon", "ID_FMP_POWER_10225", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["War Proxy"] = new engine.RulesElement({
    name: "War Proxy",
    type: "Power",
    id: "ID_FMP_POWER_10193",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10193",
    categories: ["War Proxy", "ID_FMP_POWER_10193", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Warlock's Wrath"] = new engine.RulesElement({
    name: "Warlock's Wrath",
    type: "Power",
    id: "ID_FMP_POWER_10240",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10240",
    categories: ["Warlock's Wrath", "ID_FMP_POWER_10240", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Warlord's Denial"] = new engine.RulesElement({
    name: "Warlord's Denial",
    type: "Power",
    id: "ID_FMP_POWER_10133",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10133",
    categories: ["Warlord's Denial", "ID_FMP_POWER_10133", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Warweaver's Tether"] = new engine.RulesElement({
    name: "Warweaver's Tether",
    type: "Power",
    id: "ID_FMP_POWER_10197",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10197",
    categories: ["Warweaver's Tether", "ID_FMP_POWER_10197", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10198"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Warweaver's Tether Teleport"] = new engine.RulesElement({
    name: "Warweaver's Tether Teleport",
    type: "Power",
    id: "ID_FMP_POWER_10198",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10198",
    categories: ["Warweaver's Tether Teleport", "ID_FMP_POWER_10198", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Wind of Swirling Flames"] = new engine.RulesElement({
    name: "Wind of Swirling Flames",
    type: "Power",
    id: "ID_FMP_POWER_10209",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10209",
    categories: ["Wind of Swirling Flames", "ID_FMP_POWER_10209", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Winged Horde"] = new engine.RulesElement({
    name: "Winged Horde",
    type: "Power",
    id: "ID_FMP_POWER_10137",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10137",
    categories: ["Winged Horde", "ID_FMP_POWER_10137", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Winter's Arrival"] = new engine.RulesElement({
    name: "Winter's Arrival",
    type: "Power",
    id: "ID_FMP_POWER_10253",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10253",
    categories: ["Winter's Arrival", "ID_FMP_POWER_10253", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Winter's Edge"] = new engine.RulesElement({
    name: "Winter's Edge",
    type: "Power",
    id: "ID_FMP_POWER_10248",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10248",
    categories: ["Winter's Edge", "ID_FMP_POWER_10248", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Winter's Fated Stance"] = new engine.RulesElement({
    name: "Winter's Fated Stance",
    type: "Power",
    id: "ID_FMP_POWER_10250",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10250",
    categories: ["Winter's Fated Stance", "ID_FMP_POWER_10250", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Withering Courage"] = new engine.RulesElement({
    name: "Withering Courage",
    type: "Power",
    id: "ID_FMP_POWER_10129",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10129",
    categories: ["Withering Courage", "ID_FMP_POWER_10129", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Wizard's Wrath"] = new engine.RulesElement({
    name: "Wizard's Wrath",
    type: "Power",
    id: "ID_FMP_POWER_10245",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10245",
    categories: ["Wizard's Wrath", "ID_FMP_POWER_10245", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Words of Deceit"] = new engine.RulesElement({
    name: "Words of Deceit",
    type: "Power",
    id: "ID_FMP_POWER_10147",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10147",
    categories: ["Words of Deceit", "ID_FMP_POWER_10147", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Words of Truth"] = new engine.RulesElement({
    name: "Words of Truth",
    type: "Power",
    id: "ID_FMP_POWER_10149",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10149",
    categories: ["Words of Truth", "ID_FMP_POWER_10149", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
