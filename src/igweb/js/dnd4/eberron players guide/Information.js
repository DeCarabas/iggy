define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Information = types['Information'] || (types['Information'] = {});
  te = Information["House Vadalis"] = new engine.RulesElement({
    name: "House Vadalis",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_HOUSE_VADALIS",
    source: "Eberron Player's Guide",
    categories: ["House Vadalis", "ID_INTERNAL_INFORMATION_HOUSE_VADALIS"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
