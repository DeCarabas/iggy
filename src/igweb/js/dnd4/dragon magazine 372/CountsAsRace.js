define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Shadar-kai"] = new engine.RulesElement({
    name: "Shadar-kai",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_SHADAR-KAI",
    source: "Dragon Magazine 372",
    categories: ["Shadar-kai", "ID_INTERNAL_COUNTSASRACE_SHADAR-KAI"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
