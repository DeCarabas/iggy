define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Crystal of Ebon Flame"] = new engine.RulesElement({
    name: "Crystal of Ebon Flame",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8320",
    source: "The Plane Below: Secrets of the Elemental Chaos",
    categories: ["Crystal of Ebon Flame", "ID_FMP_MAGIC_ITEM_8320"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against immobilizing or restraining effects that a save can end */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Plastron of Tziphal"] = new engine.RulesElement({
    name: "Plastron of Tziphal",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8319",
    source: "The Plane Below: Secrets of the Elemental Chaos",
    categories: ["Plastron of Tziphal", "ID_FMP_MAGIC_ITEM_8319"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("resist:poison", 10, "resist");
      model.statadd("Saving Throws", function() { /* against slowing, immobilizing, petrifying, or restraining effects that a save can end */ return 4; }, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wave"] = new engine.RulesElement({
    name: "Wave",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8321",
    source: "The Plane Below: Secrets of the Elemental Chaos",
    categories: ["Wave", "ID_FMP_MAGIC_ITEM_8321"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
