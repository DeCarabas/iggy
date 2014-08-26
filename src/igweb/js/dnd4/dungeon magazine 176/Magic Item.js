define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Horn of Geryon (epic tier)"] = new engine.RulesElement({
    name: "Horn of Geryon (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8972",
    source: "Dungeon Magazine 176",
    categories: ["Horn of Geryon (epic tier)", "ID_FMP_MAGIC_ITEM_8972"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Necroshard Weapon +1"] = new engine.RulesElement({
    name: "Necroshard Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8966",
    source: "Dungeon Magazine 176",
    categories: ["Necroshard Weapon +1", "ID_FMP_MAGIC_ITEM_8966"],
    rules: function(model) {
      model.statadd("weapon,fortitude:attack", function() { /* against living creatures */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Necroshard Weapon +2"] = new engine.RulesElement({
    name: "Necroshard Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8967",
    source: "Dungeon Magazine 176",
    categories: ["Necroshard Weapon +2", "ID_FMP_MAGIC_ITEM_8967"],
    rules: function(model) {
      model.statadd("weapon,fortitude:attack", function() { /* against living creatures */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Necroshard Weapon +3"] = new engine.RulesElement({
    name: "Necroshard Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8968",
    source: "Dungeon Magazine 176",
    categories: ["Necroshard Weapon +3", "ID_FMP_MAGIC_ITEM_8968"],
    rules: function(model) {
      model.statadd("weapon,fortitude:attack", function() { /* against living creatures */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Necroshard Weapon +4"] = new engine.RulesElement({
    name: "Necroshard Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8969",
    source: "Dungeon Magazine 176",
    categories: ["Necroshard Weapon +4", "ID_FMP_MAGIC_ITEM_8969"],
    rules: function(model) {
      model.statadd("weapon,fortitude:attack", function() { /* against living creatures */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Necroshard Weapon +5"] = new engine.RulesElement({
    name: "Necroshard Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8970",
    source: "Dungeon Magazine 176",
    categories: ["Necroshard Weapon +5", "ID_FMP_MAGIC_ITEM_8970"],
    rules: function(model) {
      model.statadd("weapon,fortitude:attack", function() { /* against living creatures */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Necroshard Weapon +6"] = new engine.RulesElement({
    name: "Necroshard Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8971",
    source: "Dungeon Magazine 176",
    categories: ["Necroshard Weapon +6", "ID_FMP_MAGIC_ITEM_8971"],
    rules: function(model) {
      model.statadd("weapon,fortitude:attack", function() { /* against living creatures */ return 1; });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
