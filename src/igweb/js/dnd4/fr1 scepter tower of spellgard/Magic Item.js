define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Scepter of Winter +2"] = new engine.RulesElement({
    name: "Scepter of Winter +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4878",
    source: "FR1 Scepter Tower of Spellgard",
    categories: ["Scepter of Winter +2", "ID_FMP_MAGIC_ITEM_4878"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1235"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_FMP_POWER_435"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
