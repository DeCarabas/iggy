define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Internal = types['Internal'] || (types['Internal'] = {});
  te = Internal["Harper"] = new engine.RulesElement({
    name: "Harper",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_HARPER",
    source: "Forgotten Realms Player's Guide",
    categories: ["Harper", "ID_INTERNAL_INTERNAL_HARPER"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
