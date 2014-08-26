define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Bladeling"] = new engine.RulesElement({
    name: "Bladeling",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_BLADELING",
    source: "Manual of the Planes",
    categories: ["Bladeling", "ID_INTERNAL_COUNTSASRACE_BLADELING"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
