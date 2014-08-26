define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Blood of Io"] = new engine.RulesElement({
    name: "Blood of Io",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8105",
    source: "Draconomicon: Metallic Dragons",
    categories: ["Blood of Io", "ID_FMP_MAGIC_ITEM_8105"],
    rules: function(model) {
      model.statadd("Blood of Io", 5, "Blood of Io");
      model.statadd("Resist:acid, resist 5 cold, resist 5 fire, resist 5 lightning, and resist 5 poison", function() { return model.stat("Blood of Io"); }, "resist");
      model.statadd("Damage", "+2d8");
      model.grant(model.elements.id["ID_FMP_LANGUAGE_2"]);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Seal of the Lawbringer"] = new engine.RulesElement({
    name: "Seal of the Lawbringer",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8106",
    source: "Draconomicon: Metallic Dragons",
    categories: ["Seal of the Lawbringer", "ID_FMP_MAGIC_ITEM_8106"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_LANGUAGE_2"]);
      model.grant(model.elements.id["ID_FMP_POWER_10326"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_FMP_POWER_10327"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
