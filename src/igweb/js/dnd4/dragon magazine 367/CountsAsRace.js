define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Gnoll"] = new engine.RulesElement({
    name: "Gnoll",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_GNOLL",
    source: "Dragon Magazine 367",
    categories: ["Gnoll", "ID_INTERNAL_COUNTSASRACE_GNOLL"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
