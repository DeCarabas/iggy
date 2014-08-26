define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power_Source = types['Power Source'] || (types['Power Source'] = {});
  te = Power_Source["Shadow"] = new engine.RulesElement({
    name: "Shadow",
    type: "Power Source",
    id: "ID_FMP_POWER_SOURCE_6",
    source: "Dragon Magazine 379",
    categories: ["Shadow", "ID_FMP_POWER_SOURCE_6"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
