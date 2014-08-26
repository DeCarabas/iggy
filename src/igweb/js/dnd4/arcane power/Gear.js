define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Gear = types['Gear'] || (types['Gear'] = {});
  te = Gear["Tome Implement"] = new engine.RulesElement({
    name: "Tome Implement",
    type: "Gear",
    id: "ID_FMP_GEAR_101",
    source: "Arcane Power",
    categories: ["Tome Implement", "ID_FMP_GEAR_101"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
