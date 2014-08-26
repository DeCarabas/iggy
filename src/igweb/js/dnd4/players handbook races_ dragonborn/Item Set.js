define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Item_Set = types['Item Set'] || (types['Item Set'] = {});
  te = Item_Set["Silver Dragon Regalia"] = new engine.RulesElement({
    name: "Silver Dragon Regalia",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_39",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Silver Dragon Regalia", "ID_FMP_ITEM_SET_39"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
