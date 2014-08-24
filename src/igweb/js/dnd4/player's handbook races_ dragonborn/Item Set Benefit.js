(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Item_Set_Benefit = types['Item Set Benefit'] || (types['Item Set Benefit'] = {});
  te = Item_Set_Benefit["Silver Dragon Regalia (2)"] = new RulesElement({
    name: "Silver Dragon Regalia (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_81",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Silver Dragon Regalia (2)", "ID_FMP_ITEM_SET_BENEFIT_81"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", function() { return model.stat("ID_FMP_ITEM_SET_39 Set Count"); }, "item");
      model.statadd("Intimidate Misc", function() { return model.stat("ID_FMP_ITEM_SET_39 Set Count"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Silver Dragon Regalia (5)"] = new RulesElement({
    name: "Silver Dragon Regalia (5)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_82",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Silver Dragon Regalia (5)", "ID_FMP_ITEM_SET_BENEFIT_82"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1448:damage", "+ongoing 5");
    }
  });
  byID[te.id] = te;
  
  
})(this);
