define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Item_Set = types['Item Set'] || (types['Item Set'] = {});
  te = Item_Set["Royal Regalia of Chessenta"] = new engine.RulesElement({
    name: "Royal Regalia of Chessenta",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_40",
    source: "Dungeon Magazine 178",
    categories: ["Royal Regalia of Chessenta", "ID_FMP_ITEM_SET_40"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
