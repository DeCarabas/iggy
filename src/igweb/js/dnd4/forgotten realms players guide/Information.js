define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Information = types['Information'] || (types['Information'] = {});
  te = Information["Harper"] = new engine.RulesElement({
    name: "Harper",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_HARPER",
    source: "Forgotten Realms Player's Guide",
    categories: ["Harper", "ID_INTERNAL_INFORMATION_HARPER"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
