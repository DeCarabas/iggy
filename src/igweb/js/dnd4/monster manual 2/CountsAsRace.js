define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Bullywug"] = new engine.RulesElement({
    name: "Bullywug",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_BULLYWUG",
    source: "Monster Manual 2",
    categories: ["Bullywug", "ID_INTERNAL_COUNTSASRACE_BULLYWUG"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Duergar"] = new engine.RulesElement({
    name: "Duergar",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_DUERGAR",
    source: "Monster Manual 2",
    categories: ["Duergar", "ID_INTERNAL_COUNTSASRACE_DUERGAR"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Kenku"] = new engine.RulesElement({
    name: "Kenku",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_KENKU",
    source: "Monster Manual 2",
    categories: ["Kenku", "ID_INTERNAL_COUNTSASRACE_KENKU"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
