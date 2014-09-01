define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Aligned Strike"] = new engine.RulesElement({
    name: "Aligned Strike",
    type: "Power",
    id: "ID_FMP_POWER_12506",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12506",
    categories: ["Aligned Strike", "ID_FMP_POWER_12506", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Always Ready"] = new engine.RulesElement({
    name: "Always Ready",
    type: "Power",
    id: "ID_FMP_POWER_12499",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12499",
    categories: ["Always Ready", "ID_FMP_POWER_12499", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_689", "Ceaseless Guardian", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Beastly Protector"] = new engine.RulesElement({
    name: "Beastly Protector",
    type: "Power",
    id: "ID_FMP_POWER_12503",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12503",
    categories: ["Beastly Protector", "ID_FMP_POWER_12503", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Beguiling Ballad"] = new engine.RulesElement({
    name: "Beguiling Ballad",
    type: "Power",
    id: "ID_FMP_POWER_12512",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12512",
    categories: ["Beguiling Ballad", "ID_FMP_POWER_12512", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Beguiling Call"] = new engine.RulesElement({
    name: "Beguiling Call",
    type: "Power",
    id: "ID_FMP_POWER_12539",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12539",
    categories: ["Beguiling Call", "ID_FMP_POWER_12539", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Black Blade of Despair"] = new engine.RulesElement({
    name: "Black Blade of Despair",
    type: "Power",
    id: "ID_FMP_POWER_12544",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12544",
    categories: ["Black Blade of Despair", "ID_FMP_POWER_12544", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Call Forth the Spirit World"] = new engine.RulesElement({
    name: "Call Forth the Spirit World",
    type: "Power",
    id: "ID_FMP_POWER_12534",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12534",
    categories: ["Call Forth the Spirit World", "ID_FMP_POWER_12534", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Carve Out Corruption"] = new engine.RulesElement({
    name: "Carve Out Corruption",
    type: "Power",
    id: "ID_FMP_POWER_12485",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12485",
    categories: ["Carve Out Corruption", "ID_FMP_POWER_12485", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_686", "Agent of the Unbroken Circle", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Chosen Threshold"] = new engine.RulesElement({
    name: "Chosen Threshold",
    type: "Power",
    id: "ID_FMP_POWER_12492",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12492",
    categories: ["Chosen Threshold", "ID_FMP_POWER_12492", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_687", "Gatekeeper", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Citizen's Arrest"] = new engine.RulesElement({
    name: "Citizen's Arrest",
    type: "Power",
    id: "ID_FMP_POWER_12525",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12525",
    categories: ["Citizen's Arrest", "ID_FMP_POWER_12525", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_691", "Gatekeeper of the Golden Palace", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Crystal Duplicate"] = new engine.RulesElement({
    name: "Crystal Duplicate",
    type: "Power",
    id: "ID_FMP_POWER_12495",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12495",
    categories: ["Crystal Duplicate", "ID_FMP_POWER_12495", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_688", "Crystalmind", "ID_FMP_CATEGORY_26", "Conjuration", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Deathly Glare"] = new engine.RulesElement({
    name: "Deathly Glare",
    type: "Power",
    id: "ID_FMP_POWER_12521",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12521",
    categories: ["Deathly Glare", "ID_FMP_POWER_12521", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_690", "Seer of Endings", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Deep Roots"] = new engine.RulesElement({
    name: "Deep Roots",
    type: "Power",
    id: "ID_FMP_POWER_12543",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12543",
    categories: ["Deep Roots", "ID_FMP_POWER_12543", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Drums of the Wild Hunt"] = new engine.RulesElement({
    name: "Drums of the Wild Hunt",
    type: "Power",
    id: "ID_FMP_POWER_12516",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12516",
    categories: ["Drums of the Wild Hunt", "ID_FMP_POWER_12516", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Echoing Steps"] = new engine.RulesElement({
    name: "Echoing Steps",
    type: "Power",
    id: "ID_FMP_POWER_12515",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12515",
    categories: ["Echoing Steps", "ID_FMP_POWER_12515", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Emerald Lure"] = new engine.RulesElement({
    name: "Emerald Lure",
    type: "Power",
    id: "ID_FMP_POWER_12531",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12531",
    categories: ["Emerald Lure", "ID_FMP_POWER_12531", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Enraged Spirit"] = new engine.RulesElement({
    name: "Enraged Spirit",
    type: "Power",
    id: "ID_FMP_POWER_12532",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12532",
    categories: ["Enraged Spirit", "ID_FMP_POWER_12532", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12533"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Enraged Spirit Attack"] = new engine.RulesElement({
    name: "Enraged Spirit Attack",
    type: "Power",
    id: "ID_FMP_POWER_12533",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12533",
    categories: ["Enraged Spirit Attack", "ID_FMP_POWER_12533", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Fearsome Roar"] = new engine.RulesElement({
    name: "Fearsome Roar",
    type: "Power",
    id: "ID_FMP_POWER_12508",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12508",
    categories: ["Fearsome Roar", "ID_FMP_POWER_12508", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12509"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Fearsome Roar Attack"] = new engine.RulesElement({
    name: "Fearsome Roar Attack",
    type: "Power",
    id: "ID_FMP_POWER_12509",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12509",
    categories: ["Fearsome Roar Attack", "ID_FMP_POWER_12509", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Ferocious Insight"] = new engine.RulesElement({
    name: "Ferocious Insight",
    type: "Power",
    id: "ID_FMP_POWER_12500",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12500",
    categories: ["Ferocious Insight", "ID_FMP_POWER_12500", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Foretold Death"] = new engine.RulesElement({
    name: "Foretold Death",
    type: "Power",
    id: "ID_FMP_POWER_12523",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12523",
    categories: ["Foretold Death", "ID_FMP_POWER_12523", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_690", "Seer of Endings", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Gate to Nowhere"] = new engine.RulesElement({
    name: "Gate to Nowhere",
    type: "Power",
    id: "ID_FMP_POWER_12490",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12490",
    categories: ["Gate to Nowhere", "ID_FMP_POWER_12490", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_687", "Gatekeeper", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Gathering of Shadows"] = new engine.RulesElement({
    name: "Gathering of Shadows",
    type: "Power",
    id: "ID_FMP_POWER_12546",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12546",
    categories: ["Gathering of Shadows", "ID_FMP_POWER_12546", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Gaze of Ruin"] = new engine.RulesElement({
    name: "Gaze of Ruin",
    type: "Power",
    id: "ID_FMP_POWER_12520",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12520",
    categories: ["Gaze of Ruin", "ID_FMP_POWER_12520", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Gift of Resistance"] = new engine.RulesElement({
    name: "Gift of Resistance",
    type: "Power",
    id: "ID_FMP_POWER_12497",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12497",
    categories: ["Gift of Resistance", "ID_FMP_POWER_12497", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Harvest Reaping"] = new engine.RulesElement({
    name: "Harvest Reaping",
    type: "Power",
    id: "ID_FMP_POWER_12535",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12535",
    categories: ["Harvest Reaping", "ID_FMP_POWER_12535", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Hestavar's Blessing"] = new engine.RulesElement({
    name: "Hestavar's Blessing",
    type: "Power",
    id: "ID_FMP_POWER_12526",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12526",
    categories: ["Hestavar's Blessing", "ID_FMP_POWER_12526", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_691", "Gatekeeper of the Golden Palace", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Ignite the Forge"] = new engine.RulesElement({
    name: "Ignite the Forge",
    type: "Power",
    id: "ID_FMP_POWER_12524",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12524",
    categories: ["Ignite the Forge", "ID_FMP_POWER_12524", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_691", "Gatekeeper of the Golden Palace", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Judgment of the True King"] = new engine.RulesElement({
    name: "Judgment of the True King",
    type: "Power",
    id: "ID_FMP_POWER_12486",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12486",
    categories: ["Judgment of the True King", "ID_FMP_POWER_12486", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_686", "Agent of the Unbroken Circle", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Lights Out"] = new engine.RulesElement({
    name: "Lights Out",
    type: "Power",
    id: "ID_FMP_POWER_12507",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12507",
    categories: ["Lights Out", "ID_FMP_POWER_12507", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Memory is a Weapon"] = new engine.RulesElement({
    name: "Memory is a Weapon",
    type: "Power",
    id: "ID_FMP_POWER_12496",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12496",
    categories: ["Memory is a Weapon", "ID_FMP_POWER_12496", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Never Again"] = new engine.RulesElement({
    name: "Never Again",
    type: "Power",
    id: "ID_FMP_POWER_12498",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12498",
    categories: ["Never Again", "ID_FMP_POWER_12498"]
  });
  byID[te.id] = te;
  
  te = Power["Perfect Knowledge"] = new engine.RulesElement({
    name: "Perfect Knowledge",
    type: "Power",
    id: "ID_FMP_POWER_12494",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12494",
    categories: ["Perfect Knowledge", "ID_FMP_POWER_12494", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_688", "Crystalmind", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Primal Investiture"] = new engine.RulesElement({
    name: "Primal Investiture",
    type: "Power",
    id: "ID_FMP_POWER_12530",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12530",
    categories: ["Primal Investiture", "ID_FMP_POWER_12530", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Queen's Clemency"] = new engine.RulesElement({
    name: "Queen's Clemency",
    type: "Power",
    id: "ID_FMP_POWER_12518",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12518",
    categories: ["Queen's Clemency", "ID_FMP_POWER_12518", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Remembrance of Hate"] = new engine.RulesElement({
    name: "Remembrance of Hate",
    type: "Power",
    id: "ID_FMP_POWER_12529",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12529",
    categories: ["Remembrance of Hate", "ID_FMP_POWER_12529", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Sanctity of the Ring"] = new engine.RulesElement({
    name: "Sanctity of the Ring",
    type: "Power",
    id: "ID_FMP_POWER_12487",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12487",
    categories: ["Sanctity of the Ring", "ID_FMP_POWER_12487", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_686", "Agent of the Unbroken Circle", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Saw It Coming"] = new engine.RulesElement({
    name: "Saw It Coming",
    type: "Power",
    id: "ID_FMP_POWER_12493",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12493",
    categories: ["Saw It Coming", "ID_FMP_POWER_12493", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_688", "Crystalmind", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Seismic Strike"] = new engine.RulesElement({
    name: "Seismic Strike",
    type: "Power",
    id: "ID_FMP_POWER_12501",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12501",
    categories: ["Seismic Strike", "ID_FMP_POWER_12501", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12502"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Seismic Strike Attack"] = new engine.RulesElement({
    name: "Seismic Strike Attack",
    type: "Power",
    id: "ID_FMP_POWER_12502",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12502",
    categories: ["Seismic Strike Attack", "ID_FMP_POWER_12502", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Shade Stride"] = new engine.RulesElement({
    name: "Shade Stride",
    type: "Power",
    id: "ID_FMP_POWER_12545",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12545",
    categories: ["Shade Stride", "ID_FMP_POWER_12545", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Shepherding Slice"] = new engine.RulesElement({
    name: "Shepherding Slice",
    type: "Power",
    id: "ID_FMP_POWER_12504",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12504",
    categories: ["Shepherding Slice", "ID_FMP_POWER_12504", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12505"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Shepherding Slice Attack"] = new engine.RulesElement({
    name: "Shepherding Slice Attack",
    type: "Power",
    id: "ID_FMP_POWER_12505",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12505",
    categories: ["Shepherding Slice Attack", "ID_FMP_POWER_12505", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_54", "Beast", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Destruction"] = new engine.RulesElement({
    name: "Spirit of Destruction",
    type: "Power",
    id: "ID_FMP_POWER_12540",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12540",
    categories: ["Spirit of Destruction", "ID_FMP_POWER_12540", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12541"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Destruction Attack"] = new engine.RulesElement({
    name: "Spirit of Destruction Attack",
    type: "Power",
    id: "ID_FMP_POWER_12541",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12541",
    categories: ["Spirit of Destruction Attack", "ID_FMP_POWER_12541", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Endings Begun"] = new engine.RulesElement({
    name: "Spirit of Endings Begun",
    type: "Power",
    id: "ID_FMP_POWER_12538",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12538",
    categories: ["Spirit of Endings Begun", "ID_FMP_POWER_12538", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit's Sacrifice"] = new engine.RulesElement({
    name: "Spirit's Sacrifice",
    type: "Power",
    id: "ID_FMP_POWER_12527",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12527",
    categories: ["Spirit's Sacrifice", "ID_FMP_POWER_12527", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Spiritual Congress"] = new engine.RulesElement({
    name: "Spiritual Congress",
    type: "Power",
    id: "ID_FMP_POWER_12536",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12536",
    categories: ["Spiritual Congress", "ID_FMP_POWER_12536", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Timeless Trek in Mithrendain"] = new engine.RulesElement({
    name: "Timeless Trek in Mithrendain",
    type: "Power",
    id: "ID_FMP_POWER_12514",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12514",
    categories: ["Timeless Trek in Mithrendain", "ID_FMP_POWER_12514", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Unicorn's Charge"] = new engine.RulesElement({
    name: "Unicorn's Charge",
    type: "Power",
    id: "ID_FMP_POWER_12513",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12513",
    categories: ["Unicorn's Charge", "ID_FMP_POWER_12513", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Victim of the Feywild"] = new engine.RulesElement({
    name: "Victim of the Feywild",
    type: "Power",
    id: "ID_FMP_POWER_12511",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12511",
    categories: ["Victim of the Feywild", "ID_FMP_POWER_12511", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Visions of Death"] = new engine.RulesElement({
    name: "Visions of Death",
    type: "Power",
    id: "ID_FMP_POWER_12522",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12522",
    categories: ["Visions of Death", "ID_FMP_POWER_12522", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_690", "Seer of Endings", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Whispers of the Dream King"] = new engine.RulesElement({
    name: "Whispers of the Dream King",
    type: "Power",
    id: "ID_FMP_POWER_12517",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12517",
    categories: ["Whispers of the Dream King", "ID_FMP_POWER_12517", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_17", "Sleep", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Winter's End"] = new engine.RulesElement({
    name: "Winter's End",
    type: "Power",
    id: "ID_FMP_POWER_12537",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12537",
    categories: ["Winter's End", "ID_FMP_POWER_12537", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Winter's Thaw"] = new engine.RulesElement({
    name: "Winter's Thaw",
    type: "Power",
    id: "ID_FMP_POWER_12528",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12528",
    categories: ["Winter's Thaw", "ID_FMP_POWER_12528", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_57", "Spirit", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["You Shall Not Pass"] = new engine.RulesElement({
    name: "You Shall Not Pass",
    type: "Power",
    id: "ID_FMP_POWER_12489",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12489",
    categories: ["You Shall Not Pass", "ID_FMP_POWER_12489", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_687", "Gatekeeper", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "11"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
