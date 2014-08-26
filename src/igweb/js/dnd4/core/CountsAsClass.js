define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var CountsAsClass = types['CountsAsClass'] || (types['CountsAsClass'] = {});
  te = CountsAsClass["Hybrid"] = new engine.RulesElement({
    name: "Hybrid",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_HYBRID",
    source: "Core,Player's Handbook 3",
    categories: ["Hybrid", "ID_INTERNAL_COUNTSASCLASS_HYBRID"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
