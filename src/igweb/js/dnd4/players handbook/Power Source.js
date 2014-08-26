define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power_Source = types['Power Source'] || (types['Power Source'] = {});
  te = Power_Source["Arcane"] = new engine.RulesElement({
    name: "Arcane",
    type: "Power Source",
    id: "ID_FMP_POWER_SOURCE_2",
    source: "Player's Handbook",
    categories: ["Arcane", "ID_FMP_POWER_SOURCE_2"]
  });
  byID[te.id] = te;
  
  te = Power_Source["Divine"] = new engine.RulesElement({
    name: "Divine",
    type: "Power Source",
    id: "ID_FMP_POWER_SOURCE_3",
    source: "Player's Handbook",
    categories: ["Divine", "ID_FMP_POWER_SOURCE_3"]
  });
  byID[te.id] = te;
  
  te = Power_Source["martial"] = new engine.RulesElement({
    name: "martial",
    type: "Power Source",
    id: "ID_FMP_POWER_SOURCE_1",
    source: "Player's Handbook",
    categories: ["martial", "ID_FMP_POWER_SOURCE_1"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
