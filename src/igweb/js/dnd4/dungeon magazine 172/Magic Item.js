define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Arrow of Fate"] = new engine.RulesElement({
    name: "Arrow of Fate",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8297",
    source: "Dungeon Magazine 172",
    categories: ["Arrow of Fate", "ID_FMP_MAGIC_ITEM_8297"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
