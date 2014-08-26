define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Devil's Claw +2"] = new engine.RulesElement({
    name: "Devil's Claw +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9190",
    source: "Vor Rukoth: An Ancient Ruins Adventure Site",
    categories: ["Devil's Claw +2", "ID_FMP_MAGIC_ITEM_9190"],
    rules: function(model) {
      model.statadd("resist:fire", 10, "resist");
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Devil's Claw +3"] = new engine.RulesElement({
    name: "Devil's Claw +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9191",
    source: "Vor Rukoth: An Ancient Ruins Adventure Site",
    categories: ["Devil's Claw +3", "ID_FMP_MAGIC_ITEM_9191"],
    rules: function(model) {
      model.statadd("resist:fire", 10, "resist");
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Devil's Claw +4"] = new engine.RulesElement({
    name: "Devil's Claw +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9192",
    source: "Vor Rukoth: An Ancient Ruins Adventure Site",
    categories: ["Devil's Claw +4", "ID_FMP_MAGIC_ITEM_9192"],
    rules: function(model) {
      model.statadd("resist:fire", 15, "resist");
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Devil's Claw +5"] = new engine.RulesElement({
    name: "Devil's Claw +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9193",
    source: "Vor Rukoth: An Ancient Ruins Adventure Site",
    categories: ["Devil's Claw +5", "ID_FMP_MAGIC_ITEM_9193"],
    rules: function(model) {
      model.statadd("resist:fire", 15, "resist");
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Devil's Claw +6"] = new engine.RulesElement({
    name: "Devil's Claw +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9194",
    source: "Vor Rukoth: An Ancient Ruins Adventure Site",
    categories: ["Devil's Claw +6", "ID_FMP_MAGIC_ITEM_9194"],
    rules: function(model) {
      model.statadd("resist:fire", 20, "resist");
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ever-Fading Armor +2"] = new engine.RulesElement({
    name: "Ever-Fading Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9201",
    source: "Vor Rukoth: An Ancient Ruins Adventure Site",
    categories: ["Ever-Fading Armor +2", "ID_FMP_MAGIC_ITEM_9201"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ever-Fading Armor +3"] = new engine.RulesElement({
    name: "Ever-Fading Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9202",
    source: "Vor Rukoth: An Ancient Ruins Adventure Site",
    categories: ["Ever-Fading Armor +3", "ID_FMP_MAGIC_ITEM_9202"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ever-Fading Armor +4"] = new engine.RulesElement({
    name: "Ever-Fading Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9203",
    source: "Vor Rukoth: An Ancient Ruins Adventure Site",
    categories: ["Ever-Fading Armor +4", "ID_FMP_MAGIC_ITEM_9203"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ever-Fading Armor +5"] = new engine.RulesElement({
    name: "Ever-Fading Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9204",
    source: "Vor Rukoth: An Ancient Ruins Adventure Site",
    categories: ["Ever-Fading Armor +5", "ID_FMP_MAGIC_ITEM_9204"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ever-Fading Armor +6"] = new engine.RulesElement({
    name: "Ever-Fading Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9205",
    source: "Vor Rukoth: An Ancient Ruins Adventure Site",
    categories: ["Ever-Fading Armor +6", "ID_FMP_MAGIC_ITEM_9205"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orium Implement +1"] = new engine.RulesElement({
    name: "Orium Implement +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9195",
    source: "Vor Rukoth: An Ancient Ruins Adventure Site",
    categories: ["Orium Implement +1", "ID_FMP_MAGIC_ITEM_9195"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orium Implement +2"] = new engine.RulesElement({
    name: "Orium Implement +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9196",
    source: "Vor Rukoth: An Ancient Ruins Adventure Site",
    categories: ["Orium Implement +2", "ID_FMP_MAGIC_ITEM_9196"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orium Implement +3"] = new engine.RulesElement({
    name: "Orium Implement +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9197",
    source: "Vor Rukoth: An Ancient Ruins Adventure Site",
    categories: ["Orium Implement +3", "ID_FMP_MAGIC_ITEM_9197"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orium Implement +4"] = new engine.RulesElement({
    name: "Orium Implement +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9198",
    source: "Vor Rukoth: An Ancient Ruins Adventure Site",
    categories: ["Orium Implement +4", "ID_FMP_MAGIC_ITEM_9198"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orium Implement +5"] = new engine.RulesElement({
    name: "Orium Implement +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9199",
    source: "Vor Rukoth: An Ancient Ruins Adventure Site",
    categories: ["Orium Implement +5", "ID_FMP_MAGIC_ITEM_9199"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orium Implement +6"] = new engine.RulesElement({
    name: "Orium Implement +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9200",
    source: "Vor Rukoth: An Ancient Ruins Adventure Site",
    categories: ["Orium Implement +6", "ID_FMP_MAGIC_ITEM_9200"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shard of Decay (paragon tier)"] = new engine.RulesElement({
    name: "Shard of Decay (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9189",
    source: "Vor Rukoth: An Ancient Ruins Adventure Site",
    categories: ["Shard of Decay (paragon tier)", "ID_FMP_MAGIC_ITEM_9189"],
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
