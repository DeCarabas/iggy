define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Githzerai"] = new engine.RulesElement({
    name: "Githzerai",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_GITHZERAI",
    source: "Player's Handbook 3",
    categories: ["Githzerai", "ID_INTERNAL_COUNTSASRACE_GITHZERAI"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Minotaur"] = new engine.RulesElement({
    name: "Minotaur",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_MINOTAUR",
    source: "Player's Handbook 3",
    categories: ["Minotaur", "ID_INTERNAL_COUNTSASRACE_MINOTAUR"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Shardmind"] = new engine.RulesElement({
    name: "Shardmind",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_SHARDMIND",
    source: "Player's Handbook 3",
    categories: ["Shardmind", "ID_INTERNAL_COUNTSASRACE_SHARDMIND"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Wilden"] = new engine.RulesElement({
    name: "Wilden",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_WILDEN",
    source: "Player's Handbook 3",
    categories: ["Wilden", "ID_INTERNAL_COUNTSASRACE_WILDEN"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
