define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Changeling"] = new engine.RulesElement({
    name: "Changeling",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_CHANGELING",
    source: "Eberron Player's Guide",
    categories: ["Changeling", "ID_INTERNAL_COUNTSASRACE_CHANGELING"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Kalashtar"] = new engine.RulesElement({
    name: "Kalashtar",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_KALASHTAR",
    source: "Eberron Player's Guide",
    categories: ["Kalashtar", "ID_INTERNAL_COUNTSASRACE_KALASHTAR"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Warforged"] = new engine.RulesElement({
    name: "Warforged",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_WARFORGED",
    source: "Eberron Player's Guide",
    categories: ["Warforged", "ID_INTERNAL_COUNTSASRACE_WARFORGED"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
