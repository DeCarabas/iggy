define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Internal = types['Internal'] || (types['Internal'] = {});
  te = Internal["Hybrid Power Points"] = new engine.RulesElement({
    name: "Hybrid Power Points",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_HYBRID_POWER_POINTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Power Points", "ID_INTERNAL_INTERNAL_HYBRID_POWER_POINTS"],
    rules: function(model) {
      model.statadd("Power Points", function() { return model.stat("Hybrid Power Points"); });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
