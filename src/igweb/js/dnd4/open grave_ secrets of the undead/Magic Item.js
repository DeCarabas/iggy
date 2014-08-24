(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Jet Black Ioun Stone"] = new RulesElement({
    name: "Jet Black Ioun Stone",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4550",
    source: "Open Grave: Secrets of the Undead",
    categories: ["Jet Black Ioun Stone", "ID_FMP_MAGIC_ITEM_4550"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mirror of Secrets"] = new RulesElement({
    name: "Mirror of Secrets",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4551",
    source: "Open Grave: Secrets of the Undead",
    categories: ["Mirror of Secrets", "ID_FMP_MAGIC_ITEM_4551"],
    rules: function(model) {
      model.statadd("charm:attack", 1, "Mirror of Secrets");
      model.statadd("fear:attack", 1, "Mirror of Secrets");
      model.statadd("necrotic:attack", 1, "Mirror of Secrets");
      model.statadd("psychic:attack", 1, "Mirror of Secrets");
      model.statadd("Arcana Misc", 2);
      model.statadd("Religion Misc", 2);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Light"] = new RulesElement({
    name: "Orb of Light",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4552",
    source: "Open Grave: Secrets of the Undead",
    categories: ["Orb of Light", "ID_FMP_MAGIC_ITEM_4552"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_8"]);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Silver Mask of Kas"] = new RulesElement({
    name: "Silver Mask of Kas",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4553",
    source: "Open Grave: Secrets of the Undead",
    categories: ["Silver Mask of Kas", "ID_FMP_MAGIC_ITEM_4553"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_VISION_DARKVISION"]);
      model.statadd("Perception Misc", 2, "item");
      model.statadd("Diplomacy Misc", function() { /* against undead creatures */ return 4; }, "item");
      model.statadd("Intimidate Misc", function() { /* against undead creatures */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulsword"] = new RulesElement({
    name: "Soulsword",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4554",
    source: "Open Grave: Secrets of the Undead",
    categories: ["Soulsword", "ID_FMP_MAGIC_ITEM_4554"],
    rules: function(model) {
      model.statadd("Athletics Misc", 1, "item");
      model.statadd("Insight Misc", 1, "item");
      model.statadd("Religion Misc", 1, "item");
      model.statadd("attack rolls", function() { /* against undead creatures */ return 1; }, "item");
      model.statadd("damage rolls", function() { /* against undead creatures */ return 1; }, "item");
      model.statadd("resist:necrotic", 10, "resist");
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sword of Kas"] = new RulesElement({
    name: "Sword of Kas",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4555",
    source: "Open Grave: Secrets of the Undead,Dungeon Magazine 170",
    categories: ["Sword of Kas", "ID_FMP_MAGIC_ITEM_4555"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of Shadow"] = new RulesElement({
    name: "Tome of Shadow",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4556",
    source: "Open Grave: Secrets of the Undead",
    categories: ["Tome of Shadow", "ID_FMP_MAGIC_ITEM_4556"],
    rules: function(model) {
      model.statadd("Arcana Misc", function() { /* to monster knowledge checks related to creatures of the shadow origin */ return 2; });
      model.statadd("Dungeoneering Misc", function() { /* to monster knowledge checks related to creatures of the shadow origin */ return 2; });
      model.statadd("Nature Misc", function() { /* to monster knowledge checks related to creatures of the shadow origin */ return 2; });
      model.statadd("Religion Misc", function() { /* to monster knowledge checks related to creatures of the shadow origin */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_FMP_POWER_5594"]);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Von Zarovich Family Sword"] = new RulesElement({
    name: "Von Zarovich Family Sword",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4557",
    source: "Open Grave: Secrets of the Undead",
    categories: ["Von Zarovich Family Sword", "ID_FMP_MAGIC_ITEM_4557"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Whelm"] = new RulesElement({
    name: "Whelm",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4558",
    source: "Open Grave: Secrets of the Undead",
    categories: ["Whelm", "ID_FMP_MAGIC_ITEM_4558"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "item");
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
})(this);
