define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power_Source = types['Power Source'] || (types['Power Source'] = {});
  te = Power_Source["Primal"] = new engine.RulesElement({
    name: "Primal",
    type: "Power Source",
    id: "ID_FMP_POWER_SOURCE_4",
    source: "Player's Handbook 2",
    categories: ["Primal", "ID_FMP_POWER_SOURCE_4"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
