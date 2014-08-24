(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Bloodcrystal Raven Skull (epic tier)"] = new RulesElement({
    name: "Bloodcrystal Raven Skull (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4999",
    source: "E1 Death's Reach",
    categories: ["Bloodcrystal Raven Skull (epic tier)", "ID_FMP_MAGIC_ITEM_4999"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dawn Warrior Armor +4"] = new RulesElement({
    name: "Dawn Warrior Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5006",
    source: "E1 Death's Reach",
    categories: ["Dawn Warrior Armor +4", "ID_FMP_MAGIC_ITEM_5006"],
    rules: function(model) {
      model.statadd("resist:acid", 10, "resist");
      model.statadd("resist:cold", 10, "resist");
      model.statadd("resist:fire", 10, "resist");
      model.statadd("resist:lightning", 10, "resist");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dawn Warrior Armor +5"] = new RulesElement({
    name: "Dawn Warrior Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5007",
    source: "E1 Death's Reach",
    categories: ["Dawn Warrior Armor +5", "ID_FMP_MAGIC_ITEM_5007"],
    rules: function(model) {
      model.statadd("resist:acid", 10, "resist");
      model.statadd("resist:cold", 10, "resist");
      model.statadd("resist:fire", 10, "resist");
      model.statadd("resist:lightning", 10, "resist");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dawn Warrior Armor +6"] = new RulesElement({
    name: "Dawn Warrior Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5008",
    source: "E1 Death's Reach",
    categories: ["Dawn Warrior Armor +6", "ID_FMP_MAGIC_ITEM_5008"],
    rules: function(model) {
      model.statadd("resist:acid", 10, "resist");
      model.statadd("resist:cold", 10, "resist");
      model.statadd("resist:fire", 10, "resist");
      model.statadd("resist:lightning", 10, "resist");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dawn Warrior Weapon +4"] = new RulesElement({
    name: "Dawn Warrior Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5009",
    source: "E1 Death's Reach",
    categories: ["Dawn Warrior Weapon +4", "ID_FMP_MAGIC_ITEM_5009"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dawn Warrior Weapon +5"] = new RulesElement({
    name: "Dawn Warrior Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5010",
    source: "E1 Death's Reach",
    categories: ["Dawn Warrior Weapon +5", "ID_FMP_MAGIC_ITEM_5010"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dawn Warrior Weapon +6"] = new RulesElement({
    name: "Dawn Warrior Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5011",
    source: "E1 Death's Reach",
    categories: ["Dawn Warrior Weapon +6", "ID_FMP_MAGIC_ITEM_5011"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deathburst Armor +2"] = new RulesElement({
    name: "Deathburst Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5000",
    source: "E1 Death's Reach",
    categories: ["Deathburst Armor +2", "ID_FMP_MAGIC_ITEM_5000"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deathburst Armor +3"] = new RulesElement({
    name: "Deathburst Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5001",
    source: "E1 Death's Reach",
    categories: ["Deathburst Armor +3", "ID_FMP_MAGIC_ITEM_5001"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deathburst Armor +4"] = new RulesElement({
    name: "Deathburst Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5002",
    source: "E1 Death's Reach",
    categories: ["Deathburst Armor +4", "ID_FMP_MAGIC_ITEM_5002"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deathburst Armor +5"] = new RulesElement({
    name: "Deathburst Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5003",
    source: "E1 Death's Reach",
    categories: ["Deathburst Armor +5", "ID_FMP_MAGIC_ITEM_5003"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deathburst Armor +6"] = new RulesElement({
    name: "Deathburst Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5004",
    source: "E1 Death's Reach",
    categories: ["Deathburst Armor +6", "ID_FMP_MAGIC_ITEM_5004"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eye of the Old Gods"] = new RulesElement({
    name: "Eye of the Old Gods",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5012",
    source: "E1 Death's Reach",
    categories: ["Eye of the Old Gods", "ID_FMP_MAGIC_ITEM_5012"],
    rules: function(model) {
      model.statadd("Will Defense", 1, "item");
      model.statadd("Will Defense", function() { /* against attacks by primordials and elementsals */ return 3; }, "item");
      model.grant(elements.id["ID_INTERNAL_VISION_DARKVISION"]);
      model.statadd("Perception Misc", 2, "item");
      model.statadd("Initiative Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Moonstone Sphere (epic tier)"] = new RulesElement({
    name: "Moonstone Sphere (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5005",
    source: "E1 Death's Reach",
    categories: ["Moonstone Sphere (epic tier)", "ID_FMP_MAGIC_ITEM_5005"],
    rules: function(model) {
      model.statadd("Perception Misc", 5);
      model.statadd("Arcana Misc", 2);
    }
  });
  byID[te.id] = te;
  
  
})(this);
