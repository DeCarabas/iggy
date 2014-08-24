(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Item_Set = types['Item Set'] || (types['Item Set'] = {});
  te = Item_Set["Silver Dragon Regalia"] = new RulesElement({
    name: "Silver Dragon Regalia",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_39",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Silver Dragon Regalia", "ID_FMP_ITEM_SET_39"]
  });
  byID[te.id] = te;
  
  
})(this);
