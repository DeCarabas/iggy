define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Chaos Shard Implement +1"] = new engine.RulesElement({
    name: "Chaos Shard Implement +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8337",
    source: "Dungeon Magazine 173",
    categories: ["Chaos Shard Implement +1", "ID_FMP_MAGIC_ITEM_8337"],
    rules: function(model) {
      model.statadd("arcane,psychic:damage(Chaos Shard Implement +1)", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Chaos Shard Implement +2"] = new engine.RulesElement({
    name: "Chaos Shard Implement +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8338",
    source: "Dungeon Magazine 173",
    categories: ["Chaos Shard Implement +2", "ID_FMP_MAGIC_ITEM_8338"],
    rules: function(model) {
      model.statadd("arcane,psychic:damage(Chaos Shard Implement +2)", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Chaos Shard Implement +3"] = new engine.RulesElement({
    name: "Chaos Shard Implement +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8339",
    source: "Dungeon Magazine 173",
    categories: ["Chaos Shard Implement +3", "ID_FMP_MAGIC_ITEM_8339"],
    rules: function(model) {
      model.statadd("arcane,psychic:damage(Chaos Shard Implement +3)", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Chaos Shard Implement +4"] = new engine.RulesElement({
    name: "Chaos Shard Implement +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8340",
    source: "Dungeon Magazine 173",
    categories: ["Chaos Shard Implement +4", "ID_FMP_MAGIC_ITEM_8340"],
    rules: function(model) {
      model.statadd("arcane,psychic:damage(Chaos Shard Implement +4)", 4, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Chaos Shard Implement +5"] = new engine.RulesElement({
    name: "Chaos Shard Implement +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8341",
    source: "Dungeon Magazine 173",
    categories: ["Chaos Shard Implement +5", "ID_FMP_MAGIC_ITEM_8341"],
    rules: function(model) {
      model.statadd("arcane,psychic:damage(Chaos Shard Implement +5)", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Chaos Shard Implement +6"] = new engine.RulesElement({
    name: "Chaos Shard Implement +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8342",
    source: "Dungeon Magazine 173",
    categories: ["Chaos Shard Implement +6", "ID_FMP_MAGIC_ITEM_8342"],
    rules: function(model) {
      model.statadd("arcane,psychic:damage(Chaos Shard Implement +6)", 6, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Nightstalker's Poniard +3"] = new engine.RulesElement({
    name: "Nightstalker's Poniard +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8442",
    source: "Dungeon Magazine 173",
    categories: ["Nightstalker's Poniard +3", "ID_FMP_MAGIC_ITEM_8442"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Voran's Eternal Chalk (heroic tier)"] = new engine.RulesElement({
    name: "Voran's Eternal Chalk (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8445",
    source: "Dungeon Magazine 173",
    categories: ["Voran's Eternal Chalk (heroic tier)", "ID_FMP_MAGIC_ITEM_8445"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Voran's Floating Lantern (heroic tier)"] = new engine.RulesElement({
    name: "Voran's Floating Lantern (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8446",
    source: "Dungeon Magazine 173",
    categories: ["Voran's Floating Lantern (heroic tier)", "ID_FMP_MAGIC_ITEM_8446"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
