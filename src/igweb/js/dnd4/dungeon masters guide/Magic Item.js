define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Axe of the Dwarvish Lords"] = new engine.RulesElement({
    name: "Axe of the Dwarvish Lords",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1283",
    source: "Dungeon Master's Guide",
    categories: ["Axe of the Dwarvish Lords", "ID_FMP_MAGIC_ITEM_1283"],
    rules: function(model) {
      model.statadd("Damage", "2d10");
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_FMP_LANGUAGE_3"]);
      model.grant(model.elements.id["ID_FMP_POWER_1283"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Eye of Vecna"] = new engine.RulesElement({
    name: "The Eye of Vecna",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1284",
    source: "Dungeon Master's Guide",
    categories: ["The Eye of Vecna", "ID_FMP_MAGIC_ITEM_1284"],
    rules: function(model) {
      model.statadd("Arcana Misc", 1, "item");
      model.statadd("Insight Misc", 1, "item");
      model.statadd("Perception Misc", 1, "item");
      model.grant(model.elements.id["ID_INTERNAL_VISION_DARKVISION"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_FMP_POWER_1456"]);
      model.grant(model.elements.id["ID_FMP_POWER_1461"]);
      model.grant(model.elements.id["ID_FMP_POWER_1478"]);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Hand of Vecna"] = new engine.RulesElement({
    name: "The Hand of Vecna",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1285",
    source: "Dungeon Master's Guide",
    categories: ["The Hand of Vecna", "ID_FMP_MAGIC_ITEM_1285"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "item");
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_FMP_POWER_1460"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_FMP_POWER_1351"]);
      model.grant(model.elements.id["ID_FMP_POWER_1368"]);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Invulnerable Coat of Arnd"] = new engine.RulesElement({
    name: "The Invulnerable Coat of Arnd",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1286",
    source: "Dungeon Master's Guide",
    categories: ["The Invulnerable Coat of Arnd", "ID_FMP_MAGIC_ITEM_1286"],
    rules: function(model) {
      model.statadd("resist:acid", 5, "resist");
      model.statadd("resist:fire", 5, "resist");
      model.statadd("resist:lightning", 5, "resist");
      model.statadd("Saving Throws", 2, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
      model.grant(model.elements.id["ID_FMP_POWER_835"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
