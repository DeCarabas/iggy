define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Earthshaker Staff +3"] = new engine.RulesElement({
    name: "Earthshaker Staff +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4536",
    source: "Dungeon Magazine 160,Dungeon Delve",
    categories: ["Earthshaker Staff +3", "ID_FMP_MAGIC_ITEM_4536"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Earthshaker Staff +4"] = new engine.RulesElement({
    name: "Earthshaker Staff +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4537",
    source: "Dungeon Magazine 160",
    categories: ["Earthshaker Staff +4", "ID_FMP_MAGIC_ITEM_4537"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Earthshaker Staff +5"] = new engine.RulesElement({
    name: "Earthshaker Staff +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4538",
    source: "Dungeon Magazine 160",
    categories: ["Earthshaker Staff +5", "ID_FMP_MAGIC_ITEM_4538"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Earthshaker Staff +6"] = new engine.RulesElement({
    name: "Earthshaker Staff +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4539",
    source: "Dungeon Magazine 160",
    categories: ["Earthshaker Staff +6", "ID_FMP_MAGIC_ITEM_4539"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elderwood Falcon (heroic tier)"] = new engine.RulesElement({
    name: "Elderwood Falcon (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4530",
    source: "Dungeon Magazine 160",
    categories: ["Elderwood Falcon (heroic tier)", "ID_FMP_MAGIC_ITEM_4530"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironwood Hound (heroic tier)"] = new engine.RulesElement({
    name: "Ironwood Hound (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4531",
    source: "Dungeon Magazine 160",
    categories: ["Ironwood Hound (heroic tier)", "ID_FMP_MAGIC_ITEM_4531"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of Summer +3"] = new engine.RulesElement({
    name: "Weapon of Summer +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4540",
    source: "Dungeon Magazine 160",
    categories: ["Weapon of Summer +3", "ID_FMP_MAGIC_ITEM_4540"],
    rules: function(model) {
      model.statadd("damage rolls(Weapon of Summer +3)", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of Summer +4"] = new engine.RulesElement({
    name: "Weapon of Summer +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4541",
    source: "Dungeon Magazine 160",
    categories: ["Weapon of Summer +4", "ID_FMP_MAGIC_ITEM_4541"],
    rules: function(model) {
      model.statadd("damage rolls(Weapon of Summer +4)", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of Summer +5"] = new engine.RulesElement({
    name: "Weapon of Summer +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4542",
    source: "Dungeon Magazine 160",
    categories: ["Weapon of Summer +5", "ID_FMP_MAGIC_ITEM_4542"],
    rules: function(model) {
      model.statadd("damage rolls(Weapon of Summer +5)", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of Summer +6"] = new engine.RulesElement({
    name: "Weapon of Summer +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4543",
    source: "Dungeon Magazine 160",
    categories: ["Weapon of Summer +6", "ID_FMP_MAGIC_ITEM_4543"],
    rules: function(model) {
      model.statadd("damage rolls(Weapon of Summer +6)", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wicked Fang +3"] = new engine.RulesElement({
    name: "Wicked Fang +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4532",
    source: "Dungeon Magazine 160",
    categories: ["Wicked Fang +3", "ID_FMP_MAGIC_ITEM_4532"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wicked Fang +4"] = new engine.RulesElement({
    name: "Wicked Fang +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4533",
    source: "Dungeon Magazine 160",
    categories: ["Wicked Fang +4", "ID_FMP_MAGIC_ITEM_4533"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wicked Fang +5"] = new engine.RulesElement({
    name: "Wicked Fang +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4534",
    source: "Dungeon Magazine 160",
    categories: ["Wicked Fang +5", "ID_FMP_MAGIC_ITEM_4534"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wicked Fang +6"] = new engine.RulesElement({
    name: "Wicked Fang +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4535",
    source: "Dungeon Magazine 160",
    categories: ["Wicked Fang +6", "ID_FMP_MAGIC_ITEM_4535"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
