define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var CountsAsClass = types['CountsAsClass'] || (types['CountsAsClass'] = {});
  te = CountsAsClass["Artificer"] = new engine.RulesElement({
    name: "Artificer",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_ARTIFICER",
    source: "Eberron Player's Guide",
    categories: ["Artificer", "ID_INTERNAL_COUNTSASCLASS_ARTIFICER"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
