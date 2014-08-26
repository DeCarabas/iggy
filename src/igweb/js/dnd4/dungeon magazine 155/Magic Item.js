define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Dreamstone Amulet +3"] = new engine.RulesElement({
    name: "Dreamstone Amulet +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1246",
    source: "Dungeon Magazine 155",
    categories: ["Dreamstone Amulet +3", "ID_FMP_MAGIC_ITEM_1246"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dreamstone Amulet +4"] = new engine.RulesElement({
    name: "Dreamstone Amulet +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1247",
    source: "Dungeon Magazine 155",
    categories: ["Dreamstone Amulet +4", "ID_FMP_MAGIC_ITEM_1247"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dreamstone Amulet +5"] = new engine.RulesElement({
    name: "Dreamstone Amulet +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1248",
    source: "Dungeon Magazine 155",
    categories: ["Dreamstone Amulet +5", "ID_FMP_MAGIC_ITEM_1248"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dreamstone Amulet +6"] = new engine.RulesElement({
    name: "Dreamstone Amulet +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1249",
    source: "Dungeon Magazine 155",
    categories: ["Dreamstone Amulet +6", "ID_FMP_MAGIC_ITEM_1249"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dreamstone Weapon +3"] = new engine.RulesElement({
    name: "Dreamstone Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1250",
    source: "Dungeon Magazine 155",
    categories: ["Dreamstone Weapon +3", "ID_FMP_MAGIC_ITEM_1250"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dreamstone Weapon +4"] = new engine.RulesElement({
    name: "Dreamstone Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1251",
    source: "Dungeon Magazine 155",
    categories: ["Dreamstone Weapon +4", "ID_FMP_MAGIC_ITEM_1251"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dreamstone Weapon +5"] = new engine.RulesElement({
    name: "Dreamstone Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1252",
    source: "Dungeon Magazine 155",
    categories: ["Dreamstone Weapon +5", "ID_FMP_MAGIC_ITEM_1252"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dreamstone Weapon +6"] = new engine.RulesElement({
    name: "Dreamstone Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1253",
    source: "Dungeon Magazine 155",
    categories: ["Dreamstone Weapon +6", "ID_FMP_MAGIC_ITEM_1253"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
