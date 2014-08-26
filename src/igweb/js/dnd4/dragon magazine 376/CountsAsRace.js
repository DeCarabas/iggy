define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Revenant"] = new engine.RulesElement({
    name: "Revenant",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_REVENANT",
    source: "Dragon Magazine 376",
    categories: ["Revenant", "ID_INTERNAL_COUNTSASRACE_REVENANT"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
