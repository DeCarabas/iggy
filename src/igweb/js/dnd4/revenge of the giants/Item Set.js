define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Item_Set = types['Item Set'] || (types['Item Set'] = {});
  te = Item_Set["Implements of Argent"] = new engine.RulesElement({
    name: "Implements of Argent",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_38",
    source: "Revenge of the Giants",
    categories: ["Implements of Argent", "ID_FMP_ITEM_SET_38"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
