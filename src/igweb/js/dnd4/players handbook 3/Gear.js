define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Gear = types['Gear'] || (types['Gear'] = {});
  te = Gear["Ki Focus"] = new engine.RulesElement({
    name: "Ki Focus",
    type: "Gear",
    id: "ID_FMP_GEAR_115",
    source: "Player's Handbook 3",
    categories: ["Ki Focus", "ID_FMP_GEAR_115"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
