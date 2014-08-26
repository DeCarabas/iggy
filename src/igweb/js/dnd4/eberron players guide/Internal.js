define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Internal = types['Internal'] || (types['Internal'] = {});
  te = Internal["House Vadalis"] = new engine.RulesElement({
    name: "House Vadalis",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_HOUSE_VADALIS",
    source: "Eberron Player's Guide",
    categories: ["House Vadalis", "ID_INTERNAL_INTERNAL_HOUSE_VADALIS"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
