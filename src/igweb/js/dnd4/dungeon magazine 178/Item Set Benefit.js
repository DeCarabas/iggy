define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Item_Set_Benefit = types['Item Set Benefit'] || (types['Item Set Benefit'] = {});
  te = Item_Set_Benefit["Royal Regalia of Chessenta (2)"] = new engine.RulesElement({
    name: "Royal Regalia of Chessenta (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_83",
    source: "Dungeon Magazine 178",
    categories: ["Royal Regalia of Chessenta (2)", "ID_FMP_ITEM_SET_BENEFIT_83"],
    rules: function(model) {
      model.statadd("Bluff Misc", 4, "item");
      model.statadd("Diplomacy Misc", 4, "item");
      model.statadd("Intimidate Misc", 4, "item");
      model.statadd("Streetwise Misc", 4, "item");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Royal Regalia of Chessenta (3)"] = new engine.RulesElement({
    name: "Royal Regalia of Chessenta (3)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_84",
    source: "Dungeon Magazine 178",
    categories: ["Royal Regalia of Chessenta (3)", "ID_FMP_ITEM_SET_BENEFIT_84"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12519"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
