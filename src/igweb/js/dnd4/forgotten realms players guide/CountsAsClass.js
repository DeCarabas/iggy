define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var CountsAsClass = types['CountsAsClass'] || (types['CountsAsClass'] = {});
  te = CountsAsClass["Swordmage"] = new engine.RulesElement({
    name: "Swordmage",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_SWORDMAGE",
    source: "Forgotten Realms Player's Guide",
    categories: ["Swordmage", "ID_INTERNAL_COUNTSASCLASS_SWORDMAGE"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
