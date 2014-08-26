define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Crown Jewel of Chessenta"] = new engine.RulesElement({
    name: "Crown Jewel of Chessenta",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1241",
    source: "Forgotten Realms Campaign Guide",
    categories: ["Crown Jewel of Chessenta", "ID_FMP_MAGIC_ITEM_1241"],
    rules: function(model) {
      model.statadd("AC", 1, "item");
      model.statadd("Fortitude Defense", 1, "item");
      model.statadd("Reflex Defense", 1, "item");
      model.statadd("Will Defense", 1, "item");
      model.statadd("Saving Throws", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Crown of Whispers (heroic tier)"] = new engine.RulesElement({
    name: "Crown of Whispers (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1233",
    source: "Forgotten Realms Campaign Guide",
    categories: ["Crown of Whispers (heroic tier)", "ID_FMP_MAGIC_ITEM_1233"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Insight Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Goblin Totem +1"] = new engine.RulesElement({
    name: "Goblin Totem +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1234",
    source: "Forgotten Realms Campaign Guide",
    categories: ["Goblin Totem +1", "ID_FMP_MAGIC_ITEM_1234"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against a creature larger than you */ return 1; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Goblin Totem +2"] = new engine.RulesElement({
    name: "Goblin Totem +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1235",
    source: "Forgotten Realms Campaign Guide",
    categories: ["Goblin Totem +2", "ID_FMP_MAGIC_ITEM_1235"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against a creature larger than you */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Goblin Totem +3"] = new engine.RulesElement({
    name: "Goblin Totem +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1236",
    source: "Forgotten Realms Campaign Guide",
    categories: ["Goblin Totem +3", "ID_FMP_MAGIC_ITEM_1236"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against a creature larger than you */ return 3; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Goblin Totem +4"] = new engine.RulesElement({
    name: "Goblin Totem +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1237",
    source: "Forgotten Realms Campaign Guide",
    categories: ["Goblin Totem +4", "ID_FMP_MAGIC_ITEM_1237"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against a creature larger than you */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Goblin Totem +5"] = new engine.RulesElement({
    name: "Goblin Totem +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1238",
    source: "Forgotten Realms Campaign Guide",
    categories: ["Goblin Totem +5", "ID_FMP_MAGIC_ITEM_1238"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against a creature larger than you */ return 5; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Goblin Totem +6"] = new engine.RulesElement({
    name: "Goblin Totem +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1239",
    source: "Forgotten Realms Campaign Guide",
    categories: ["Goblin Totem +6", "ID_FMP_MAGIC_ITEM_1239"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against a creature larger than you */ return 6; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Greatsword of Impiltur +3"] = new engine.RulesElement({
    name: "Greatsword of Impiltur +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1240",
    source: "Forgotten Realms Campaign Guide",
    categories: ["Greatsword of Impiltur +3", "ID_FMP_MAGIC_ITEM_1240"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Horn Totem +1"] = new engine.RulesElement({
    name: "Horn Totem +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1231",
    source: "Forgotten Realms Campaign Guide",
    categories: ["Horn Totem +1", "ID_FMP_MAGIC_ITEM_1231"],
    rules: function(model) {
      model.statadd("damage rolls(Horn Totem +1)", function() { /* against a creature larger than you */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Manshoon's Bloodmask"] = new engine.RulesElement({
    name: "Manshoon's Bloodmask",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1242",
    source: "Forgotten Realms Campaign Guide",
    categories: ["Manshoon's Bloodmask", "ID_FMP_MAGIC_ITEM_1242"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against charm effects */ return 6; }, "item");
      model.statadd("Insight Misc", 6, "item");
      model.statadd("resist:ranged", 10, "resist");
      model.grant(model.elements.id["ID_INTERNAL_VISION_SEE_INVISIBLE"]);
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Marlspire of Najara"] = new engine.RulesElement({
    name: "Marlspire of Najara",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1243",
    source: "Forgotten Realms Campaign Guide",
    categories: ["Marlspire of Najara", "ID_FMP_MAGIC_ITEM_1243"],
    rules: function(model) {
      model.statadd("Will Defense", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scepter of the Chosen Tyrant"] = new engine.RulesElement({
    name: "Scepter of the Chosen Tyrant",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1244",
    source: "Forgotten Realms Campaign Guide",
    categories: ["Scepter of the Chosen Tyrant", "ID_FMP_MAGIC_ITEM_1244"],
    rules: function(model) {
      model.statadd("Will Defense", -1);
      model.statadd("Will Defense", -1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Skull Totem +1"] = new engine.RulesElement({
    name: "Skull Totem +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1232",
    source: "Forgotten Realms Campaign Guide",
    categories: ["Skull Totem +1", "ID_FMP_MAGIC_ITEM_1232"],
    rules: function(model) {
      model.statadd("damage rolls(Skull Totem +1)", function() { /* against a creature larger than you */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thakorsil's Seat"] = new engine.RulesElement({
    name: "Thakorsil's Seat",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1245",
    source: "Forgotten Realms Campaign Guide",
    categories: ["Thakorsil's Seat", "ID_FMP_MAGIC_ITEM_1245"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
