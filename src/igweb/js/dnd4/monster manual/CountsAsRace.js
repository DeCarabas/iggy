(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Bugbear"] = new RulesElement({
    name: "Bugbear",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_BUGBEAR",
    source: "Monster Manual",
    categories: ["Bugbear", "ID_INTERNAL_COUNTSASRACE_BUGBEAR"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Githyanki"] = new RulesElement({
    name: "Githyanki",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_GITHYANKI",
    source: "Monster Manual",
    categories: ["Githyanki", "ID_INTERNAL_COUNTSASRACE_GITHYANKI"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Goblin"] = new RulesElement({
    name: "Goblin",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_GOBLIN",
    source: "Monster Manual",
    categories: ["Goblin", "ID_INTERNAL_COUNTSASRACE_GOBLIN"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Hobgoblin"] = new RulesElement({
    name: "Hobgoblin",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_HOBGOBLIN",
    source: "Monster Manual",
    categories: ["Hobgoblin", "ID_INTERNAL_COUNTSASRACE_HOBGOBLIN"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Kobold"] = new RulesElement({
    name: "Kobold",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_KOBOLD",
    source: "Monster Manual",
    categories: ["Kobold", "ID_INTERNAL_COUNTSASRACE_KOBOLD"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Orc"] = new RulesElement({
    name: "Orc",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_ORC",
    source: "Monster Manual",
    categories: ["Orc", "ID_INTERNAL_COUNTSASRACE_ORC"]
  });
  byID[te.id] = te;
  
  
})(this);
