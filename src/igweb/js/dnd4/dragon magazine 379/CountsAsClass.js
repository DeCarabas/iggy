define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var CountsAsClass = types['CountsAsClass'] || (types['CountsAsClass'] = {});
  te = CountsAsClass["Assassin"] = new engine.RulesElement({
    name: "Assassin",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_ASSASSIN",
    source: "Dragon Magazine 379",
    categories: ["Assassin", "ID_INTERNAL_COUNTSASCLASS_ASSASSIN"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
