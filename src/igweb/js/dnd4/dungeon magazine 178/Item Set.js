(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Item_Set = types['Item Set'] || (types['Item Set'] = {});
  te = Item_Set["Royal Regalia of Chessenta"] = new RulesElement({
    name: "Royal Regalia of Chessenta",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_40",
    source: "Dungeon Magazine 178",
    categories: ["Royal Regalia of Chessenta", "ID_FMP_ITEM_SET_40"]
  });
  byID[te.id] = te;
  
  
})(this);
