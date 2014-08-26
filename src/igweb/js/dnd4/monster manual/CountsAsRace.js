define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Bugbear"] = new engine.RulesElement({
    name: "Bugbear",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_BUGBEAR",
    source: "Monster Manual",
    categories: ["Bugbear", "ID_INTERNAL_COUNTSASRACE_BUGBEAR"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Githyanki"] = new engine.RulesElement({
    name: "Githyanki",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_GITHYANKI",
    source: "Monster Manual",
    categories: ["Githyanki", "ID_INTERNAL_COUNTSASRACE_GITHYANKI"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Goblin"] = new engine.RulesElement({
    name: "Goblin",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_GOBLIN",
    source: "Monster Manual",
    categories: ["Goblin", "ID_INTERNAL_COUNTSASRACE_GOBLIN"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Hobgoblin"] = new engine.RulesElement({
    name: "Hobgoblin",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_HOBGOBLIN",
    source: "Monster Manual",
    categories: ["Hobgoblin", "ID_INTERNAL_COUNTSASRACE_HOBGOBLIN"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Kobold"] = new engine.RulesElement({
    name: "Kobold",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_KOBOLD",
    source: "Monster Manual",
    categories: ["Kobold", "ID_INTERNAL_COUNTSASRACE_KOBOLD"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Orc"] = new engine.RulesElement({
    name: "Orc",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_ORC",
    source: "Monster Manual",
    categories: ["Orc", "ID_INTERNAL_COUNTSASRACE_ORC"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
