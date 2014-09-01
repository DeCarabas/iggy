define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Consumption of the Ebon Flame"] = new engine.RulesElement({
    name: "Consumption of the Ebon Flame",
    type: "Power",
    id: "ID_FMP_POWER_10348",
    source: "The Plane Below: Secrets of the Elemental Chaos",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10348",
    categories: ["Consumption of the Ebon Flame", "ID_FMP_POWER_10348", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Influence Instability"] = new engine.RulesElement({
    name: "Influence Instability",
    type: "Power",
    id: "ID_FMP_POWER_10329",
    source: "The Plane Below: Secrets of the Elemental Chaos",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10329",
    categories: ["Influence Instability", "ID_FMP_POWER_10329", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
