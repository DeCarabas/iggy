define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Drow"] = new engine.RulesElement({
    name: "Drow",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_DROW",
    source: "Forgotten Realms Player's Guide",
    categories: ["Drow", "ID_INTERNAL_COUNTSASRACE_DROW"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Genasi"] = new engine.RulesElement({
    name: "Genasi",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_GENASI",
    source: "Forgotten Realms Player's Guide",
    categories: ["Genasi", "ID_INTERNAL_COUNTSASRACE_GENASI"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
