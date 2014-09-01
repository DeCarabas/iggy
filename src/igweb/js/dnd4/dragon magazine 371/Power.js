define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Bloodied Regeneration"] = new engine.RulesElement({
    name: "Bloodied Regeneration",
    type: "Power",
    id: "ID_FMP_POWER_6581",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6581",
    categories: ["Bloodied Regeneration", "ID_FMP_POWER_6581", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Deadeye Strike"] = new engine.RulesElement({
    name: "Deadeye Strike",
    type: "Power",
    id: "ID_FMP_POWER_6588",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6588",
    categories: ["Deadeye Strike", "ID_FMP_POWER_6588", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_293", "Deadstalker", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Deadwalker Instant Escape"] = new engine.RulesElement({
    name: "Deadwalker Instant Escape",
    type: "Power",
    id: "ID_FMP_POWER_6587",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6587",
    categories: ["Deadwalker Instant Escape", "ID_FMP_POWER_6587", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_293", "Deadstalker", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Fury of Heur-Ket"] = new engine.RulesElement({
    name: "Fury of Heur-Ket",
    type: "Power",
    id: "ID_FMP_POWER_6589",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6589",
    categories: ["Fury of Heur-Ket", "ID_FMP_POWER_6589", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_294", "Prison of the Winds", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Impaling Blow"] = new engine.RulesElement({
    name: "Impaling Blow",
    type: "Power",
    id: "ID_FMP_POWER_6586",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6586",
    categories: ["Impaling Blow", "ID_FMP_POWER_6586", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_293", "Deadstalker", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Mist Form"] = new engine.RulesElement({
    name: "Mist Form",
    type: "Power",
    id: "ID_FMP_POWER_6580",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6580",
    categories: ["Mist Form", "ID_FMP_POWER_6580", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Touch"] = new engine.RulesElement({
    name: "Radiant Touch",
    type: "Power",
    id: "ID_FMP_POWER_6578",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6578",
    categories: ["Radiant Touch", "ID_FMP_POWER_6578", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
