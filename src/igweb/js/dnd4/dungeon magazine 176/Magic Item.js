(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Horn of Geryon (epic tier)"] = new RulesElement({
    name: "Horn of Geryon (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8972",
    source: "Dungeon Magazine 176",
    categories: ["Horn of Geryon (epic tier)", "ID_FMP_MAGIC_ITEM_8972"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Necroshard Weapon +1"] = new RulesElement({
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
  
  te = Magic_Item["Necroshard Weapon +2"] = new RulesElement({
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
  
  te = Magic_Item["Necroshard Weapon +3"] = new RulesElement({
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
  
  te = Magic_Item["Necroshard Weapon +4"] = new RulesElement({
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
  
  te = Magic_Item["Necroshard Weapon +5"] = new RulesElement({
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
  
  te = Magic_Item["Necroshard Weapon +6"] = new RulesElement({
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
  
  
})(this);
