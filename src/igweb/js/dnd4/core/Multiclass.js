define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Multiclass = types['Multiclass'] || (types['Multiclass'] = {});
  te = Multiclass["Multiclass"] = new engine.RulesElement({
    name: "Multiclass",
    type: "Multiclass",
    id: "ID_INTERNAL_MULTICLASS_MULTICLASS",
    source: "Core",
    categories: ["Multiclass", "ID_INTERNAL_MULTICLASS_MULTICLASS"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
