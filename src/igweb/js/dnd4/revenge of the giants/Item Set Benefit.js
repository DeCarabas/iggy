define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Item_Set_Benefit = types['Item Set Benefit'] || (types['Item Set Benefit'] = {});
  te = Item_Set_Benefit["Implements of Argent (2)"] = new engine.RulesElement({
    name: "Implements of Argent (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_78",
    source: "Revenge of the Giants",
    categories: ["Implements of Argent (2)", "ID_FMP_ITEM_SET_BENEFIT_78"],
    rules: function(model) {
      model.statadd("Initiative Misc", function() { return model.stat("ID_FMP_ITEM_SET_38 Set Count"); });
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Implements of Argent (3)"] = new engine.RulesElement({
    name: "Implements of Argent (3)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_79",
    source: "Revenge of the Giants",
    categories: ["Implements of Argent (3)", "ID_FMP_ITEM_SET_BENEFIT_79"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Implements of Argent (4)"] = new engine.RulesElement({
    name: "Implements of Argent (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_80",
    source: "Revenge of the Giants",
    categories: ["Implements of Argent (4)", "ID_FMP_ITEM_SET_BENEFIT_80"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9554"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
