define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power_Source = types['Power Source'] || (types['Power Source'] = {});
  te = Power_Source["Psionic"] = new engine.RulesElement({
    name: "Psionic",
    type: "Power Source",
    id: "ID_FMP_POWER_SOURCE_5",
    source: "Player's Handbook 3",
    categories: ["Psionic", "ID_FMP_POWER_SOURCE_5"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
