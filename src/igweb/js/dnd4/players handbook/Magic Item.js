define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Acrobat Boots (heroic tier)"] = new engine.RulesElement({
    name: "Acrobat Boots (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_985",
    source: "Player's Handbook",
    categories: ["Acrobat Boots (heroic tier)", "ID_FMP_MAGIC_ITEM_985"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of False Life +2"] = new engine.RulesElement({
    name: "Amulet of False Life +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1036",
    source: "Player's Handbook",
    categories: ["Amulet of False Life +2", "ID_FMP_MAGIC_ITEM_1036"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of False Life +3"] = new engine.RulesElement({
    name: "Amulet of False Life +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1037",
    source: "Player's Handbook",
    categories: ["Amulet of False Life +3", "ID_FMP_MAGIC_ITEM_1037"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of False Life +4"] = new engine.RulesElement({
    name: "Amulet of False Life +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1038",
    source: "Player's Handbook",
    categories: ["Amulet of False Life +4", "ID_FMP_MAGIC_ITEM_1038"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of False Life +5"] = new engine.RulesElement({
    name: "Amulet of False Life +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1039",
    source: "Player's Handbook",
    categories: ["Amulet of False Life +5", "ID_FMP_MAGIC_ITEM_1039"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of False Life +6"] = new engine.RulesElement({
    name: "Amulet of False Life +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1040",
    source: "Player's Handbook",
    categories: ["Amulet of False Life +6", "ID_FMP_MAGIC_ITEM_1040"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Health +1"] = new engine.RulesElement({
    name: "Amulet of Health +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1041",
    source: "Player's Handbook",
    categories: ["Amulet of Health +1", "ID_FMP_MAGIC_ITEM_1041"],
    rules: function(model) {
      model.statadd("Amulet of Health +1", 5, "Amulet of Health +1");
      model.statadd("resist:poison", function() { return model.stat("Amulet of Health +1"); }, "resist");
      model.statadd("Fortitude Defense", 1, "Enhancement");
      model.statadd("Reflex Defense", 1, "Enhancement");
      model.statadd("Will Defense", 1, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Health +2"] = new engine.RulesElement({
    name: "Amulet of Health +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1042",
    source: "Player's Handbook",
    categories: ["Amulet of Health +2", "ID_FMP_MAGIC_ITEM_1042"],
    rules: function(model) {
      model.statadd("Amulet of Health +2", 5, "Amulet of Health +2");
      model.statadd("resist:poison", function() { return model.stat("Amulet of Health +2"); }, "resist");
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Health +3"] = new engine.RulesElement({
    name: "Amulet of Health +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1043",
    source: "Player's Handbook",
    categories: ["Amulet of Health +3", "ID_FMP_MAGIC_ITEM_1043"],
    rules: function(model) {
      model.statadd("Amulet of Health +3", 10, "Amulet of Health +3");
      model.statadd("resist:poison", function() { return model.stat("Amulet of Health +3"); }, "resist");
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Health +4"] = new engine.RulesElement({
    name: "Amulet of Health +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1044",
    source: "Player's Handbook",
    categories: ["Amulet of Health +4", "ID_FMP_MAGIC_ITEM_1044"],
    rules: function(model) {
      model.statadd("Amulet of Health +4", 10, "Amulet of Health +4");
      model.statadd("resist:poison", function() { return model.stat("Amulet of Health +4"); }, "resist");
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Health +5"] = new engine.RulesElement({
    name: "Amulet of Health +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1045",
    source: "Player's Handbook",
    categories: ["Amulet of Health +5", "ID_FMP_MAGIC_ITEM_1045"],
    rules: function(model) {
      model.statadd("Amulet of Health +5", 15, "Amulet of Health +5");
      model.statadd("resist:poison", function() { return model.stat("Amulet of Health +5"); }, "resist");
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Health +6"] = new engine.RulesElement({
    name: "Amulet of Health +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1046",
    source: "Player's Handbook",
    categories: ["Amulet of Health +6", "ID_FMP_MAGIC_ITEM_1046"],
    rules: function(model) {
      model.statadd("Amulet of Health +6", 15, "Amulet of Health +6");
      model.statadd("resist:poison", function() { return model.stat("Amulet of Health +6"); }, "resist");
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Protection +1"] = new engine.RulesElement({
    name: "Amulet of Protection +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1047",
    source: "Player's Handbook",
    categories: ["Amulet of Protection +1", "ID_FMP_MAGIC_ITEM_1047"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 1, "Enhancement");
      model.statadd("Reflex Defense", 1, "Enhancement");
      model.statadd("Will Defense", 1, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Protection +2"] = new engine.RulesElement({
    name: "Amulet of Protection +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1048",
    source: "Player's Handbook",
    categories: ["Amulet of Protection +2", "ID_FMP_MAGIC_ITEM_1048"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Protection +3"] = new engine.RulesElement({
    name: "Amulet of Protection +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1049",
    source: "Player's Handbook",
    categories: ["Amulet of Protection +3", "ID_FMP_MAGIC_ITEM_1049"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Protection +4"] = new engine.RulesElement({
    name: "Amulet of Protection +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1050",
    source: "Player's Handbook",
    categories: ["Amulet of Protection +4", "ID_FMP_MAGIC_ITEM_1050"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Protection +5"] = new engine.RulesElement({
    name: "Amulet of Protection +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1051",
    source: "Player's Handbook",
    categories: ["Amulet of Protection +5", "ID_FMP_MAGIC_ITEM_1051"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Protection +6"] = new engine.RulesElement({
    name: "Amulet of Protection +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1052",
    source: "Player's Handbook",
    categories: ["Amulet of Protection +6", "ID_FMP_MAGIC_ITEM_1052"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Angelsteel Armor +4"] = new engine.RulesElement({
    name: "Angelsteel Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_508",
    source: "Player's Handbook",
    categories: ["Angelsteel Armor +4", "ID_FMP_MAGIC_ITEM_508"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Angelsteel Armor +5"] = new engine.RulesElement({
    name: "Angelsteel Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_509",
    source: "Player's Handbook",
    categories: ["Angelsteel Armor +5", "ID_FMP_MAGIC_ITEM_509"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Angelsteel Armor +6"] = new engine.RulesElement({
    name: "Angelsteel Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_510",
    source: "Player's Handbook",
    categories: ["Angelsteel Armor +6", "ID_FMP_MAGIC_ITEM_510"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bag of Holding (heroic tier)"] = new engine.RulesElement({
    name: "Bag of Holding (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1119",
    source: "Player's Handbook",
    categories: ["Bag of Holding (heroic tier)", "ID_FMP_MAGIC_ITEM_1119"],
    rules: function(model) {
      model.statadd("Weight", 1);
      model.statadd("Weight Discount", 200);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Barkskin Armor +1"] = new engine.RulesElement({
    name: "Barkskin Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_94",
    source: "Player's Handbook",
    categories: ["Barkskin Armor +1", "ID_FMP_MAGIC_ITEM_94"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Barkskin Armor +2"] = new engine.RulesElement({
    name: "Barkskin Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_95",
    source: "Player's Handbook",
    categories: ["Barkskin Armor +2", "ID_FMP_MAGIC_ITEM_95"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Barkskin Armor +3"] = new engine.RulesElement({
    name: "Barkskin Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_96",
    source: "Player's Handbook",
    categories: ["Barkskin Armor +3", "ID_FMP_MAGIC_ITEM_96"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Barkskin Armor +4"] = new engine.RulesElement({
    name: "Barkskin Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_517",
    source: "Player's Handbook",
    categories: ["Barkskin Armor +4", "ID_FMP_MAGIC_ITEM_517"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Barkskin Armor +5"] = new engine.RulesElement({
    name: "Barkskin Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_518",
    source: "Player's Handbook",
    categories: ["Barkskin Armor +5", "ID_FMP_MAGIC_ITEM_518"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Barkskin Armor +6"] = new engine.RulesElement({
    name: "Barkskin Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_519",
    source: "Player's Handbook",
    categories: ["Barkskin Armor +6", "ID_FMP_MAGIC_ITEM_519"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bashing Shield (epic tier)"] = new engine.RulesElement({
    name: "Bashing Shield (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_960",
    source: "Player's Handbook",
    categories: ["Bashing Shield (epic tier)", "ID_FMP_MAGIC_ITEM_960"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bashing Shield (heroic tier)"] = new engine.RulesElement({
    name: "Bashing Shield (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_958",
    source: "Player's Handbook",
    categories: ["Bashing Shield (heroic tier)", "ID_FMP_MAGIC_ITEM_958"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bashing Shield (paragon tier)"] = new engine.RulesElement({
    name: "Bashing Shield (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_959",
    source: "Player's Handbook",
    categories: ["Bashing Shield (paragon tier)", "ID_FMP_MAGIC_ITEM_959"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Basilisk Helm (paragon tier)"] = new engine.RulesElement({
    name: "Basilisk Helm (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1008",
    source: "Player's Handbook",
    categories: ["Basilisk Helm (paragon tier)", "ID_FMP_MAGIC_ITEM_1008"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battleforged Armor +1"] = new engine.RulesElement({
    name: "Battleforged Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_511",
    source: "Player's Handbook",
    categories: ["Battleforged Armor +1", "ID_FMP_MAGIC_ITEM_511"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battleforged Armor +2"] = new engine.RulesElement({
    name: "Battleforged Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_512",
    source: "Player's Handbook",
    categories: ["Battleforged Armor +2", "ID_FMP_MAGIC_ITEM_512"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battleforged Armor +3"] = new engine.RulesElement({
    name: "Battleforged Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_513",
    source: "Player's Handbook",
    categories: ["Battleforged Armor +3", "ID_FMP_MAGIC_ITEM_513"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battleforged Armor +4"] = new engine.RulesElement({
    name: "Battleforged Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_514",
    source: "Player's Handbook",
    categories: ["Battleforged Armor +4", "ID_FMP_MAGIC_ITEM_514"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battleforged Armor +5"] = new engine.RulesElement({
    name: "Battleforged Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_515",
    source: "Player's Handbook",
    categories: ["Battleforged Armor +5", "ID_FMP_MAGIC_ITEM_515"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battleforged Armor +6"] = new engine.RulesElement({
    name: "Battleforged Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_516",
    source: "Player's Handbook",
    categories: ["Battleforged Armor +6", "ID_FMP_MAGIC_ITEM_516"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battlestrider Greaves (paragon tier)"] = new engine.RulesElement({
    name: "Battlestrider Greaves (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_986",
    source: "Player's Handbook",
    categories: ["Battlestrider Greaves (paragon tier)", "ID_FMP_MAGIC_ITEM_986"],
    rules: function(model) {
      model.statadd("Speed", function() { 
        if (model.wearing('Armor', ['heavy'])) {
          return 1;
        } else return 0;
       }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Belt of Giant Strength (paragon tier)"] = new engine.RulesElement({
    name: "Belt of Giant Strength (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1105",
    source: "Player's Handbook",
    categories: ["Belt of Giant Strength (paragon tier)", "ID_FMP_MAGIC_ITEM_1105"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Belt of Sacrifice (epic tier)"] = new engine.RulesElement({
    name: "Belt of Sacrifice (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1108",
    source: "Player's Handbook",
    categories: ["Belt of Sacrifice (epic tier)", "ID_FMP_MAGIC_ITEM_1108"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Belt of Sacrifice (heroic tier)"] = new engine.RulesElement({
    name: "Belt of Sacrifice (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1106",
    source: "Player's Handbook",
    categories: ["Belt of Sacrifice (heroic tier)", "ID_FMP_MAGIC_ITEM_1106"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Belt of Sacrifice (paragon tier)"] = new engine.RulesElement({
    name: "Belt of Sacrifice (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1107",
    source: "Player's Handbook",
    categories: ["Belt of Sacrifice (paragon tier)", "ID_FMP_MAGIC_ITEM_1107"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Belt of Titan Strength (epic tier)"] = new engine.RulesElement({
    name: "Belt of Titan Strength (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1109",
    source: "Player's Handbook",
    categories: ["Belt of Titan Strength (epic tier)", "ID_FMP_MAGIC_ITEM_1109"],
    rules: function(model) {
      model.statadd("Athletics Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Belt of Vigor (epic tier)"] = new engine.RulesElement({
    name: "Belt of Vigor (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1112",
    source: "Player's Handbook",
    categories: ["Belt of Vigor (epic tier)", "ID_FMP_MAGIC_ITEM_1112"],
    rules: function(model) {
      model.statadd("Belt of Vigor (epic tier)", 3);
      model.statadd("Healing Surge Value", function() { return model.stat("Belt of Vigor (epic tier)"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Belt of Vigor (heroic tier)"] = new engine.RulesElement({
    name: "Belt of Vigor (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1110",
    source: "Player's Handbook",
    categories: ["Belt of Vigor (heroic tier)", "ID_FMP_MAGIC_ITEM_1110"],
    rules: function(model) {
      model.statadd("Belt of Vigor (heroic tier)", 1);
      model.statadd("Healing Surge Value", function() { return model.stat("Belt of Vigor (heroic tier)"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Belt of Vigor (paragon tier)"] = new engine.RulesElement({
    name: "Belt of Vigor (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1111",
    source: "Player's Handbook",
    categories: ["Belt of Vigor (paragon tier)", "ID_FMP_MAGIC_ITEM_1111"],
    rules: function(model) {
      model.statadd("Belt of Vigor (paragon tier)", 2);
      model.statadd("Healing Surge Value", function() { return model.stat("Belt of Vigor (paragon tier)"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Berserker Weapon +2"] = new engine.RulesElement({
    name: "Berserker Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1195",
    source: "Player's Handbook",
    categories: ["Berserker Weapon +2", "ID_FMP_MAGIC_ITEM_1195"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Berserker Weapon +3"] = new engine.RulesElement({
    name: "Berserker Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_663",
    source: "Player's Handbook",
    categories: ["Berserker Weapon +3", "ID_FMP_MAGIC_ITEM_663"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Berserker Weapon +4"] = new engine.RulesElement({
    name: "Berserker Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_664",
    source: "Player's Handbook",
    categories: ["Berserker Weapon +4", "ID_FMP_MAGIC_ITEM_664"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Berserker Weapon +5"] = new engine.RulesElement({
    name: "Berserker Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_665",
    source: "Player's Handbook",
    categories: ["Berserker Weapon +5", "ID_FMP_MAGIC_ITEM_665"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Berserker Weapon +6"] = new engine.RulesElement({
    name: "Berserker Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_666",
    source: "Player's Handbook",
    categories: ["Berserker Weapon +6", "ID_FMP_MAGIC_ITEM_666"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Black Iron Armor +1"] = new engine.RulesElement({
    name: "Black Iron Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_524",
    source: "Player's Handbook",
    categories: ["Black Iron Armor +1", "ID_FMP_MAGIC_ITEM_524"],
    rules: function(model) {
      model.statadd("resist:fire", 5, "resist");
      model.statadd("resist:necrotic", 5, "resist");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Black Iron Armor +2"] = new engine.RulesElement({
    name: "Black Iron Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_32",
    source: "Player's Handbook",
    categories: ["Black Iron Armor +2", "ID_FMP_MAGIC_ITEM_32"],
    rules: function(model) {
      model.statadd("resist:fire", 5, "resist");
      model.statadd("resist:necrotic", 5, "resist");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Black Iron Armor +3"] = new engine.RulesElement({
    name: "Black Iron Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_520",
    source: "Player's Handbook",
    categories: ["Black Iron Armor +3", "ID_FMP_MAGIC_ITEM_520"],
    rules: function(model) {
      model.statadd("resist:fire", 10, "resist");
      model.statadd("resist:necrotic", 10, "resist");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Black Iron Armor +4"] = new engine.RulesElement({
    name: "Black Iron Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_521",
    source: "Player's Handbook",
    categories: ["Black Iron Armor +4", "ID_FMP_MAGIC_ITEM_521"],
    rules: function(model) {
      model.statadd("resist:fire", 10, "resist");
      model.statadd("resist:necrotic", 10, "resist");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Black Iron Armor +5"] = new engine.RulesElement({
    name: "Black Iron Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_522",
    source: "Player's Handbook",
    categories: ["Black Iron Armor +5", "ID_FMP_MAGIC_ITEM_522"],
    rules: function(model) {
      model.statadd("resist:fire", 15, "resist");
      model.statadd("resist:necrotic", 15, "resist");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Black Iron Armor +6"] = new engine.RulesElement({
    name: "Black Iron Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_523",
    source: "Player's Handbook",
    categories: ["Black Iron Armor +6", "ID_FMP_MAGIC_ITEM_523"],
    rules: function(model) {
      model.statadd("resist:fire", 15, "resist");
      model.statadd("resist:necrotic", 15, "resist");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodcut Armor +1"] = new engine.RulesElement({
    name: "Bloodcut Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_97",
    source: "Player's Handbook",
    categories: ["Bloodcut Armor +1", "ID_FMP_MAGIC_ITEM_97"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodcut Armor +2"] = new engine.RulesElement({
    name: "Bloodcut Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_525",
    source: "Player's Handbook",
    categories: ["Bloodcut Armor +2", "ID_FMP_MAGIC_ITEM_525"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodcut Armor +3"] = new engine.RulesElement({
    name: "Bloodcut Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_526",
    source: "Player's Handbook",
    categories: ["Bloodcut Armor +3", "ID_FMP_MAGIC_ITEM_526"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodcut Armor +4"] = new engine.RulesElement({
    name: "Bloodcut Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_527",
    source: "Player's Handbook",
    categories: ["Bloodcut Armor +4", "ID_FMP_MAGIC_ITEM_527"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodcut Armor +5"] = new engine.RulesElement({
    name: "Bloodcut Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_528",
    source: "Player's Handbook",
    categories: ["Bloodcut Armor +5", "ID_FMP_MAGIC_ITEM_528"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodcut Armor +6"] = new engine.RulesElement({
    name: "Bloodcut Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_529",
    source: "Player's Handbook",
    categories: ["Bloodcut Armor +6", "ID_FMP_MAGIC_ITEM_529"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodthread Armor +1"] = new engine.RulesElement({
    name: "Bloodthread Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_530",
    source: "Player's Handbook",
    categories: ["Bloodthread Armor +1", "ID_FMP_MAGIC_ITEM_530"],
    rules: function(model) {
      model.statadd("AC", function() { /* when you are bloodied */ return 2; }, "item");
      model.statadd("Saving Throws", function() { /* when you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodthread Armor +2"] = new engine.RulesElement({
    name: "Bloodthread Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_531",
    source: "Player's Handbook",
    categories: ["Bloodthread Armor +2", "ID_FMP_MAGIC_ITEM_531"],
    rules: function(model) {
      model.statadd("AC", function() { /* when you are bloodied */ return 2; }, "item");
      model.statadd("Saving Throws", function() { /* when you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodthread Armor +3"] = new engine.RulesElement({
    name: "Bloodthread Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_532",
    source: "Player's Handbook",
    categories: ["Bloodthread Armor +3", "ID_FMP_MAGIC_ITEM_532"],
    rules: function(model) {
      model.statadd("AC", function() { /* when you are bloodied */ return 2; }, "item");
      model.statadd("Saving Throws", function() { /* when you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodthread Armor +4"] = new engine.RulesElement({
    name: "Bloodthread Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_533",
    source: "Player's Handbook",
    categories: ["Bloodthread Armor +4", "ID_FMP_MAGIC_ITEM_533"],
    rules: function(model) {
      model.statadd("AC", function() { /* when you are bloodied */ return 2; }, "item");
      model.statadd("Saving Throws", function() { /* when you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodthread Armor +5"] = new engine.RulesElement({
    name: "Bloodthread Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_534",
    source: "Player's Handbook",
    categories: ["Bloodthread Armor +5", "ID_FMP_MAGIC_ITEM_534"],
    rules: function(model) {
      model.statadd("AC", function() { /* when you are bloodied */ return 2; }, "item");
      model.statadd("Saving Throws", function() { /* when you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodthread Armor +6"] = new engine.RulesElement({
    name: "Bloodthread Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_535",
    source: "Player's Handbook",
    categories: ["Bloodthread Armor +6", "ID_FMP_MAGIC_ITEM_535"],
    rules: function(model) {
      model.statadd("AC", function() { /* when you are bloodied */ return 2; }, "item");
      model.statadd("Saving Throws", function() { /* when you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Boots of Balance (epic tier)"] = new engine.RulesElement({
    name: "Boots of Balance (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_987",
    source: "Player's Handbook",
    categories: ["Boots of Balance (epic tier)", "ID_FMP_MAGIC_ITEM_987"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Boots of Spider Climbing (heroic tier)"] = new engine.RulesElement({
    name: "Boots of Spider Climbing (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_989",
    source: "Player's Handbook",
    categories: ["Boots of Spider Climbing (heroic tier)", "ID_FMP_MAGIC_ITEM_989"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Boots of Striding (heroic tier)"] = new engine.RulesElement({
    name: "Boots of Striding (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_990",
    source: "Player's Handbook",
    categories: ["Boots of Striding (heroic tier)", "ID_FMP_MAGIC_ITEM_990"],
    rules: function(model) {
      model.statadd("Speed", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return 1;
        } else return 0;
       }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Boots of Striding and Springing (paragon tier)"] = new engine.RulesElement({
    name: "Boots of Striding and Springing (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_991",
    source: "Player's Handbook",
    categories: ["Boots of Striding and Springing (paragon tier)", "ID_FMP_MAGIC_ITEM_991"],
    rules: function(model) {
      model.statadd("Speed", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return 1;
        } else return 0;
       }, "item");
      model.statadd("Athletics Misc", function() { /* to jump */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Boots of the Infinite Stride (epic tier)"] = new engine.RulesElement({
    name: "Boots of the Infinite Stride (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_988",
    source: "Player's Handbook",
    categories: ["Boots of the Infinite Stride (epic tier)", "ID_FMP_MAGIC_ITEM_988"],
    rules: function(model) {
      model.statadd("Speed", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bracers of Defense (epic tier)"] = new engine.RulesElement({
    name: "Bracers of Defense (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_963",
    source: "Player's Handbook",
    categories: ["Bracers of Defense (epic tier)", "ID_FMP_MAGIC_ITEM_963"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bracers of Defense (heroic tier)"] = new engine.RulesElement({
    name: "Bracers of Defense (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_961",
    source: "Player's Handbook",
    categories: ["Bracers of Defense (heroic tier)", "ID_FMP_MAGIC_ITEM_961"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bracers of Defense (paragon tier)"] = new engine.RulesElement({
    name: "Bracers of Defense (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_962",
    source: "Player's Handbook",
    categories: ["Bracers of Defense (paragon tier)", "ID_FMP_MAGIC_ITEM_962"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bracers of Mighty Striking (epic tier)"] = new engine.RulesElement({
    name: "Bracers of Mighty Striking (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_966",
    source: "Player's Handbook",
    categories: ["Bracers of Mighty Striking (epic tier)", "ID_FMP_MAGIC_ITEM_966"],
    rules: function(model) {
      model.statadd("melee basic:damage", 6, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bracers of Mighty Striking (heroic tier)"] = new engine.RulesElement({
    name: "Bracers of Mighty Striking (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_964",
    source: "Player's Handbook",
    categories: ["Bracers of Mighty Striking (heroic tier)", "ID_FMP_MAGIC_ITEM_964"],
    rules: function(model) {
      model.statadd("melee basic:damage", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bracers of Mighty Striking (paragon tier)"] = new engine.RulesElement({
    name: "Bracers of Mighty Striking (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_965",
    source: "Player's Handbook",
    categories: ["Bracers of Mighty Striking (paragon tier)", "ID_FMP_MAGIC_ITEM_965"],
    rules: function(model) {
      model.statadd("melee basic:damage", 4, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bracers of the Perfect Shot (epic tier)"] = new engine.RulesElement({
    name: "Bracers of the Perfect Shot (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_969",
    source: "Player's Handbook",
    categories: ["Bracers of the Perfect Shot (epic tier)", "ID_FMP_MAGIC_ITEM_969"],
    rules: function(model) {
      model.statadd("ranged basic:damage", 6, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bracers of the Perfect Shot (heroic tier)"] = new engine.RulesElement({
    name: "Bracers of the Perfect Shot (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_967",
    source: "Player's Handbook",
    categories: ["Bracers of the Perfect Shot (heroic tier)", "ID_FMP_MAGIC_ITEM_967"],
    rules: function(model) {
      model.statadd("ranged basic:damage", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bracers of the Perfect Shot (paragon tier)"] = new engine.RulesElement({
    name: "Bracers of the Perfect Shot (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_968",
    source: "Player's Handbook",
    categories: ["Bracers of the Perfect Shot (paragon tier)", "ID_FMP_MAGIC_ITEM_968"],
    rules: function(model) {
      model.statadd("ranged basic:damage", 4, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Burglar's Gloves (heroic tier)"] = new engine.RulesElement({
    name: "Burglar's Gloves (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_998",
    source: "Player's Handbook",
    categories: ["Burglar's Gloves (heroic tier)", "ID_FMP_MAGIC_ITEM_998"],
    rules: function(model) {
      model.statadd("Thievery Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Catstep Boots (heroic tier)"] = new engine.RulesElement({
    name: "Catstep Boots (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_992",
    source: "Player's Handbook",
    categories: ["Catstep Boots (heroic tier)", "ID_FMP_MAGIC_ITEM_992"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Circlet of Authority (heroic tier)"] = new engine.RulesElement({
    name: "Circlet of Authority (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1009",
    source: "Player's Handbook",
    categories: ["Circlet of Authority (heroic tier)", "ID_FMP_MAGIC_ITEM_1009"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Intimidate Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cloak of Feywild Escape +4"] = new engine.RulesElement({
    name: "Cloak of Feywild Escape +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1053",
    source: "Player's Handbook",
    categories: ["Cloak of Feywild Escape +4", "ID_FMP_MAGIC_ITEM_1053"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cloak of Feywild Escape +5"] = new engine.RulesElement({
    name: "Cloak of Feywild Escape +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1054",
    source: "Player's Handbook",
    categories: ["Cloak of Feywild Escape +5", "ID_FMP_MAGIC_ITEM_1054"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cloak of Feywild Escape +6"] = new engine.RulesElement({
    name: "Cloak of Feywild Escape +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1055",
    source: "Player's Handbook",
    categories: ["Cloak of Feywild Escape +6", "ID_FMP_MAGIC_ITEM_1055"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cloak of Invisibility +5"] = new engine.RulesElement({
    name: "Cloak of Invisibility +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1056",
    source: "Player's Handbook",
    categories: ["Cloak of Invisibility +5", "ID_FMP_MAGIC_ITEM_1056"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cloak of Invisibility +6"] = new engine.RulesElement({
    name: "Cloak of Invisibility +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1057",
    source: "Player's Handbook",
    categories: ["Cloak of Invisibility +6", "ID_FMP_MAGIC_ITEM_1057"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cloak of Resistance +1"] = new engine.RulesElement({
    name: "Cloak of Resistance +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1058",
    source: "Player's Handbook",
    categories: ["Cloak of Resistance +1", "ID_FMP_MAGIC_ITEM_1058"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 1, "Enhancement");
      model.statadd("Reflex Defense", 1, "Enhancement");
      model.statadd("Will Defense", 1, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cloak of Resistance +2"] = new engine.RulesElement({
    name: "Cloak of Resistance +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1059",
    source: "Player's Handbook",
    categories: ["Cloak of Resistance +2", "ID_FMP_MAGIC_ITEM_1059"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cloak of Resistance +3"] = new engine.RulesElement({
    name: "Cloak of Resistance +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1060",
    source: "Player's Handbook",
    categories: ["Cloak of Resistance +3", "ID_FMP_MAGIC_ITEM_1060"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cloak of Resistance +4"] = new engine.RulesElement({
    name: "Cloak of Resistance +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1061",
    source: "Player's Handbook",
    categories: ["Cloak of Resistance +4", "ID_FMP_MAGIC_ITEM_1061"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cloak of Resistance +5"] = new engine.RulesElement({
    name: "Cloak of Resistance +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1062",
    source: "Player's Handbook",
    categories: ["Cloak of Resistance +5", "ID_FMP_MAGIC_ITEM_1062"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cloak of Resistance +6"] = new engine.RulesElement({
    name: "Cloak of Resistance +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1063",
    source: "Player's Handbook",
    categories: ["Cloak of Resistance +6", "ID_FMP_MAGIC_ITEM_1063"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cloak of Survival +2"] = new engine.RulesElement({
    name: "Cloak of Survival +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1064",
    source: "Player's Handbook",
    categories: ["Cloak of Survival +2", "ID_FMP_MAGIC_ITEM_1064"],
    rules: function(model) {
      model.statadd("Endurance Misc", 2, "item");
      model.statadd("Cloak of Survival +2", 5, "Cloak of Survival +2");
      model.statadd("resist:cold", function() { return model.stat("Cloak of Survival +2"); }, "resist");
      model.statadd("Cloak of Survival +2", 5, "Cloak of Survival +2");
      model.statadd("resist:fire", function() { return model.stat("Cloak of Survival +2"); }, "resist");
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cloak of Survival +3"] = new engine.RulesElement({
    name: "Cloak of Survival +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1065",
    source: "Player's Handbook",
    categories: ["Cloak of Survival +3", "ID_FMP_MAGIC_ITEM_1065"],
    rules: function(model) {
      model.statadd("Endurance Misc", 3, "item");
      model.statadd("Cloak of Survival +3", 5, "Cloak of Survival +3");
      model.statadd("resist:cold", function() { return model.stat("Cloak of Survival +3"); }, "resist");
      model.statadd("Cloak of Survival +3", 5, "Cloak of Survival +3");
      model.statadd("resist:fire", function() { return model.stat("Cloak of Survival +3"); }, "resist");
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cloak of Survival +4"] = new engine.RulesElement({
    name: "Cloak of Survival +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1066",
    source: "Player's Handbook",
    categories: ["Cloak of Survival +4", "ID_FMP_MAGIC_ITEM_1066"],
    rules: function(model) {
      model.statadd("Endurance Misc", 4, "item");
      model.statadd("Cloak of Survival +4", 10, "Cloak of Survival +4");
      model.statadd("resist:cold", function() { return model.stat("Cloak of Survival +4"); }, "resist");
      model.statadd("Cloak of Survival +4", 10, "Cloak of Survival +4");
      model.statadd("resist:fire", function() { return model.stat("Cloak of Survival +4"); }, "resist");
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cloak of Survival +5"] = new engine.RulesElement({
    name: "Cloak of Survival +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1067",
    source: "Player's Handbook",
    categories: ["Cloak of Survival +5", "ID_FMP_MAGIC_ITEM_1067"],
    rules: function(model) {
      model.statadd("Endurance Misc", 5, "item");
      model.statadd("Cloak of Survival +5", 10, "Cloak of Survival +5");
      model.statadd("resist:cold", function() { return model.stat("Cloak of Survival +5"); }, "resist");
      model.statadd("Cloak of Survival +5", 10, "Cloak of Survival +5");
      model.statadd("resist:fire", function() { return model.stat("Cloak of Survival +5"); }, "resist");
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cloak of Survival +6"] = new engine.RulesElement({
    name: "Cloak of Survival +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1068",
    source: "Player's Handbook",
    categories: ["Cloak of Survival +6", "ID_FMP_MAGIC_ITEM_1068"],
    rules: function(model) {
      model.statadd("Endurance Misc", 6, "item");
      model.statadd("Cloak of Survival +6", 15, "Cloak of Survival +6");
      model.statadd("resist:cold", function() { return model.stat("Cloak of Survival +6"); }, "resist");
      model.statadd("Cloak of Survival +6", 15, "Cloak of Survival +6");
      model.statadd("resist:fire", function() { return model.stat("Cloak of Survival +6"); }, "resist");
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Crown of Command (paragon tier)"] = new engine.RulesElement({
    name: "Crown of Command (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1010",
    source: "Player's Handbook",
    categories: ["Crown of Command (paragon tier)", "ID_FMP_MAGIC_ITEM_1010"],
    rules: function(model) {
      model.statadd("Crown of Command (paragon tier)", 4);
      model.statadd("Diplomacy Misc", function() { return model.stat("Crown of Command (paragon tier)"); }, "item");
      model.statadd("Intimidate Misc", function() { return model.stat("Crown of Command (paragon tier)"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Curseforged Armor +1"] = new engine.RulesElement({
    name: "Curseforged Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_140",
    source: "Player's Handbook",
    categories: ["Curseforged Armor +1", "ID_FMP_MAGIC_ITEM_140"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Curseforged Armor +2"] = new engine.RulesElement({
    name: "Curseforged Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_541",
    source: "Player's Handbook",
    categories: ["Curseforged Armor +2", "ID_FMP_MAGIC_ITEM_541"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Curseforged Armor +3"] = new engine.RulesElement({
    name: "Curseforged Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_542",
    source: "Player's Handbook",
    categories: ["Curseforged Armor +3", "ID_FMP_MAGIC_ITEM_542"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Curseforged Armor +4"] = new engine.RulesElement({
    name: "Curseforged Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_543",
    source: "Player's Handbook",
    categories: ["Curseforged Armor +4", "ID_FMP_MAGIC_ITEM_543"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Curseforged Armor +5"] = new engine.RulesElement({
    name: "Curseforged Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_544",
    source: "Player's Handbook",
    categories: ["Curseforged Armor +5", "ID_FMP_MAGIC_ITEM_544"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Curseforged Armor +6"] = new engine.RulesElement({
    name: "Curseforged Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_545",
    source: "Player's Handbook",
    categories: ["Curseforged Armor +6", "ID_FMP_MAGIC_ITEM_545"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dancing Weapon +4"] = new engine.RulesElement({
    name: "Dancing Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_667",
    source: "Player's Handbook",
    categories: ["Dancing Weapon +4", "ID_FMP_MAGIC_ITEM_667"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dancing Weapon +5"] = new engine.RulesElement({
    name: "Dancing Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_668",
    source: "Player's Handbook",
    categories: ["Dancing Weapon +5", "ID_FMP_MAGIC_ITEM_668"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dancing Weapon +6"] = new engine.RulesElement({
    name: "Dancing Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_669",
    source: "Player's Handbook",
    categories: ["Dancing Weapon +6", "ID_FMP_MAGIC_ITEM_669"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Darkleaf Armor +1"] = new engine.RulesElement({
    name: "Darkleaf Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_112",
    source: "Player's Handbook",
    categories: ["Darkleaf Armor +1", "ID_FMP_MAGIC_ITEM_112"],
    rules: function(model) {
      model.statadd("AC", function() { /* against the first attack made against you in each encounter */ return 2; }, "item");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Darkleaf Armor +2"] = new engine.RulesElement({
    name: "Darkleaf Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_546",
    source: "Player's Handbook",
    categories: ["Darkleaf Armor +2", "ID_FMP_MAGIC_ITEM_546"],
    rules: function(model) {
      model.statadd("AC", function() { /* against the first attack made against you in each encounter */ return 2; }, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Darkleaf Armor +3"] = new engine.RulesElement({
    name: "Darkleaf Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_547",
    source: "Player's Handbook",
    categories: ["Darkleaf Armor +3", "ID_FMP_MAGIC_ITEM_547"],
    rules: function(model) {
      model.statadd("AC", function() { /* against the first attack made against you in each encounter */ return 2; }, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Darkleaf Armor +4"] = new engine.RulesElement({
    name: "Darkleaf Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_549",
    source: "Player's Handbook",
    categories: ["Darkleaf Armor +4", "ID_FMP_MAGIC_ITEM_549"],
    rules: function(model) {
      model.statadd("AC", function() { /* against the first attack made against you in each encounter */ return 2; }, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Darkleaf Armor +5"] = new engine.RulesElement({
    name: "Darkleaf Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_550",
    source: "Player's Handbook",
    categories: ["Darkleaf Armor +5", "ID_FMP_MAGIC_ITEM_550"],
    rules: function(model) {
      model.statadd("AC", function() { /* against the first attack made against you in each encounter */ return 2; }, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Darkleaf Armor +6"] = new engine.RulesElement({
    name: "Darkleaf Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_551",
    source: "Player's Handbook",
    categories: ["Darkleaf Armor +6", "ID_FMP_MAGIC_ITEM_551"],
    rules: function(model) {
      model.statadd("AC", function() { /* against the first attack made against you in each encounter */ return 2; }, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deathcut Armor +1"] = new engine.RulesElement({
    name: "Deathcut Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_548",
    source: "Player's Handbook",
    categories: ["Deathcut Armor +1", "ID_FMP_MAGIC_ITEM_548"],
    rules: function(model) {
      model.statadd("resist:necrotic", 5, "resist");
      model.statadd("resist:poison", 5, "resist");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deathcut Armor +2"] = new engine.RulesElement({
    name: "Deathcut Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_552",
    source: "Player's Handbook",
    categories: ["Deathcut Armor +2", "ID_FMP_MAGIC_ITEM_552"],
    rules: function(model) {
      model.statadd("resist:necrotic", 5, "resist");
      model.statadd("resist:poison", 5, "resist");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deathcut Armor +3"] = new engine.RulesElement({
    name: "Deathcut Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_553",
    source: "Player's Handbook",
    categories: ["Deathcut Armor +3", "ID_FMP_MAGIC_ITEM_553"],
    rules: function(model) {
      model.statadd("resist:necrotic", 5, "resist");
      model.statadd("resist:poison", 5, "resist");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deathcut Armor +4"] = new engine.RulesElement({
    name: "Deathcut Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_554",
    source: "Player's Handbook",
    categories: ["Deathcut Armor +4", "ID_FMP_MAGIC_ITEM_554"],
    rules: function(model) {
      model.statadd("resist:necrotic", 5, "resist");
      model.statadd("resist:poison", 5, "resist");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deathcut Armor +5"] = new engine.RulesElement({
    name: "Deathcut Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_555",
    source: "Player's Handbook",
    categories: ["Deathcut Armor +5", "ID_FMP_MAGIC_ITEM_555"],
    rules: function(model) {
      model.statadd("resist:necrotic", 5, "resist");
      model.statadd("resist:poison", 5, "resist");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deathcut Armor +6"] = new engine.RulesElement({
    name: "Deathcut Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_556",
    source: "Player's Handbook",
    categories: ["Deathcut Armor +6", "ID_FMP_MAGIC_ITEM_556"],
    rules: function(model) {
      model.statadd("resist:necrotic", 5, "resist");
      model.statadd("resist:poison", 5, "resist");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Delver's Armor +1"] = new engine.RulesElement({
    name: "Delver's Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_557",
    source: "Player's Handbook",
    categories: ["Delver's Armor +1", "ID_FMP_MAGIC_ITEM_557"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Delver's Armor +2"] = new engine.RulesElement({
    name: "Delver's Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_558",
    source: "Player's Handbook",
    categories: ["Delver's Armor +2", "ID_FMP_MAGIC_ITEM_558"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Delver's Armor +3"] = new engine.RulesElement({
    name: "Delver's Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_559",
    source: "Player's Handbook",
    categories: ["Delver's Armor +3", "ID_FMP_MAGIC_ITEM_559"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Delver's Armor +4"] = new engine.RulesElement({
    name: "Delver's Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_560",
    source: "Player's Handbook",
    categories: ["Delver's Armor +4", "ID_FMP_MAGIC_ITEM_560"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Delver's Armor +5"] = new engine.RulesElement({
    name: "Delver's Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_561",
    source: "Player's Handbook",
    categories: ["Delver's Armor +5", "ID_FMP_MAGIC_ITEM_561"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Delver's Armor +6"] = new engine.RulesElement({
    name: "Delver's Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_562",
    source: "Player's Handbook",
    categories: ["Delver's Armor +6", "ID_FMP_MAGIC_ITEM_562"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Diadem of Acuity (heroic tier)"] = new engine.RulesElement({
    name: "Diadem of Acuity (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1011",
    source: "Player's Handbook",
    categories: ["Diadem of Acuity (heroic tier)", "ID_FMP_MAGIC_ITEM_1011"],
    rules: function(model) {
      model.statadd("Insight Misc", 2, "item");
      model.statadd("Perception Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dimensional Shackles (paragon tier)"] = new engine.RulesElement({
    name: "Dimensional Shackles (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_480",
    source: "Player's Handbook",
    categories: ["Dimensional Shackles (paragon tier)", "ID_FMP_MAGIC_ITEM_480"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragondaunt Shield (epic tier)"] = new engine.RulesElement({
    name: "Dragondaunt Shield (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_971",
    source: "Player's Handbook",
    categories: ["Dragondaunt Shield (epic tier)", "ID_FMP_MAGIC_ITEM_971"],
    rules: function(model) {
      model.statadd("Dragondaunt Shield (epic tier)", 10, "Dragondaunt Shield (epic tier)");
      model.statadd("Resist:to all attacks of dragons", function() { return model.stat("Dragondaunt Shield (epic tier)"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragondaunt Shield (paragon tier)"] = new engine.RulesElement({
    name: "Dragondaunt Shield (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_970",
    source: "Player's Handbook",
    categories: ["Dragondaunt Shield (paragon tier)", "ID_FMP_MAGIC_ITEM_970"],
    rules: function(model) {
      model.statadd("Dragondaunt Shield (paragon tier)", 5, "Dragondaunt Shield (paragon tier)");
      model.statadd("Resist:to all attacks of dragons", function() { return model.stat("Dragondaunt Shield (paragon tier)"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonslayer Weapon +2"] = new engine.RulesElement({
    name: "Dragonslayer Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_670",
    source: "Player's Handbook",
    categories: ["Dragonslayer Weapon +2", "ID_FMP_MAGIC_ITEM_670"],
    rules: function(model) {
      model.statadd("Dragonslayer Weapon +2", 5, "Dragonslayer Weapon +2");
      model.statadd("Resist:against dragon breath attacks", function() { return model.stat("Dragonslayer Weapon +2"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonslayer Weapon +3"] = new engine.RulesElement({
    name: "Dragonslayer Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_671",
    source: "Player's Handbook",
    categories: ["Dragonslayer Weapon +3", "ID_FMP_MAGIC_ITEM_671"],
    rules: function(model) {
      model.statadd("Dragonslayer Weapon +3", 10, "Dragonslayer Weapon +3");
      model.statadd("Resist:against dragon breath attacks", function() { return model.stat("Dragonslayer Weapon +3"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonslayer Weapon +4"] = new engine.RulesElement({
    name: "Dragonslayer Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_672",
    source: "Player's Handbook",
    categories: ["Dragonslayer Weapon +4", "ID_FMP_MAGIC_ITEM_672"],
    rules: function(model) {
      model.statadd("Dragonslayer Weapon +4", 10, "Dragonslayer Weapon +4");
      model.statadd("Resist:against dragon breath attacks", function() { return model.stat("Dragonslayer Weapon +4"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonslayer Weapon +5"] = new engine.RulesElement({
    name: "Dragonslayer Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_673",
    source: "Player's Handbook",
    categories: ["Dragonslayer Weapon +5", "ID_FMP_MAGIC_ITEM_673"],
    rules: function(model) {
      model.statadd("Dragonslayer Weapon +5", 15, "Dragonslayer Weapon +5");
      model.statadd("Resist:against dragon breath attacks", function() { return model.stat("Dragonslayer Weapon +5"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonslayer Weapon +6"] = new engine.RulesElement({
    name: "Dragonslayer Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_674",
    source: "Player's Handbook",
    categories: ["Dragonslayer Weapon +6", "ID_FMP_MAGIC_ITEM_674"],
    rules: function(model) {
      model.statadd("Dragonslayer Weapon +6", 15, "Dragonslayer Weapon +6");
      model.statadd("Resist:against dragon breath attacks", function() { return model.stat("Dragonslayer Weapon +6"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Duelist's Weapon +1"] = new engine.RulesElement({
    name: "Duelist's Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_675",
    source: "Player's Handbook",
    categories: ["Duelist's Weapon +1", "ID_FMP_MAGIC_ITEM_675"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Duelist's Weapon +2"] = new engine.RulesElement({
    name: "Duelist's Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_676",
    source: "Player's Handbook",
    categories: ["Duelist's Weapon +2", "ID_FMP_MAGIC_ITEM_676"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Duelist's Weapon +3"] = new engine.RulesElement({
    name: "Duelist's Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_677",
    source: "Player's Handbook",
    categories: ["Duelist's Weapon +3", "ID_FMP_MAGIC_ITEM_677"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Duelist's Weapon +4"] = new engine.RulesElement({
    name: "Duelist's Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_678",
    source: "Player's Handbook",
    categories: ["Duelist's Weapon +4", "ID_FMP_MAGIC_ITEM_678"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Duelist's Weapon +5"] = new engine.RulesElement({
    name: "Duelist's Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_679",
    source: "Player's Handbook",
    categories: ["Duelist's Weapon +5", "ID_FMP_MAGIC_ITEM_679"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Duelist's Weapon +6"] = new engine.RulesElement({
    name: "Duelist's Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_680",
    source: "Player's Handbook",
    categories: ["Duelist's Weapon +6", "ID_FMP_MAGIC_ITEM_680"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dust of Appearance (paragon tier)"] = new engine.RulesElement({
    name: "Dust of Appearance (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1123",
    source: "Player's Handbook",
    categories: ["Dust of Appearance (paragon tier)", "ID_FMP_MAGIC_ITEM_1123"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dwarven Armor +1"] = new engine.RulesElement({
    name: "Dwarven Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_569",
    source: "Player's Handbook",
    categories: ["Dwarven Armor +1", "ID_FMP_MAGIC_ITEM_569"],
    rules: function(model) {
      model.statadd("Endurance Misc", 1, "item");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dwarven Armor +2"] = new engine.RulesElement({
    name: "Dwarven Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_570",
    source: "Player's Handbook",
    categories: ["Dwarven Armor +2", "ID_FMP_MAGIC_ITEM_570"],
    rules: function(model) {
      model.statadd("Endurance Misc", 2, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dwarven Armor +3"] = new engine.RulesElement({
    name: "Dwarven Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_571",
    source: "Player's Handbook",
    categories: ["Dwarven Armor +3", "ID_FMP_MAGIC_ITEM_571"],
    rules: function(model) {
      model.statadd("Endurance Misc", 3, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dwarven Armor +4"] = new engine.RulesElement({
    name: "Dwarven Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_572",
    source: "Player's Handbook",
    categories: ["Dwarven Armor +4", "ID_FMP_MAGIC_ITEM_572"],
    rules: function(model) {
      model.statadd("Endurance Misc", 4, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dwarven Armor +5"] = new engine.RulesElement({
    name: "Dwarven Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_573",
    source: "Player's Handbook",
    categories: ["Dwarven Armor +5", "ID_FMP_MAGIC_ITEM_573"],
    rules: function(model) {
      model.statadd("Endurance Misc", 5, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dwarven Armor +6"] = new engine.RulesElement({
    name: "Dwarven Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_574",
    source: "Player's Handbook",
    categories: ["Dwarven Armor +6", "ID_FMP_MAGIC_ITEM_574"],
    rules: function(model) {
      model.statadd("Endurance Misc", 6, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dwarven Greaves (heroic tier)"] = new engine.RulesElement({
    name: "Dwarven Greaves (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_993",
    source: "Player's Handbook",
    categories: ["Dwarven Greaves (heroic tier)", "ID_FMP_MAGIC_ITEM_993"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dynamic Belt (epic tier)"] = new engine.RulesElement({
    name: "Dynamic Belt (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1115",
    source: "Player's Handbook",
    categories: ["Dynamic Belt (epic tier)", "ID_FMP_MAGIC_ITEM_1115"],
    rules: function(model) {
      model.statadd("Dynamic Belt (epic tier)", 6);
      model.statadd("Acrobatics Misc", function() { return model.stat("Dynamic Belt (epic tier)"); }, "item");
      model.statadd("Athletics Misc", function() { return model.stat("Dynamic Belt (epic tier)"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dynamic Belt (heroic tier)"] = new engine.RulesElement({
    name: "Dynamic Belt (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1113",
    source: "Player's Handbook",
    categories: ["Dynamic Belt (heroic tier)", "ID_FMP_MAGIC_ITEM_1113"],
    rules: function(model) {
      model.statadd("Dynamic Belt (heroic tier)", 2);
      model.statadd("Acrobatics Misc", function() { return model.stat("Dynamic Belt (heroic tier)"); }, "item");
      model.statadd("Athletics Misc", function() { return model.stat("Dynamic Belt (heroic tier)"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dynamic Belt (paragon tier)"] = new engine.RulesElement({
    name: "Dynamic Belt (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1114",
    source: "Player's Handbook",
    categories: ["Dynamic Belt (paragon tier)", "ID_FMP_MAGIC_ITEM_1114"],
    rules: function(model) {
      model.statadd("Dynamic Belt (paragon tier)", 4);
      model.statadd("Acrobatics Misc", function() { return model.stat("Dynamic Belt (paragon tier)"); }, "item");
      model.statadd("Athletics Misc", function() { return model.stat("Dynamic Belt (paragon tier)"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eladrin Armor +1"] = new engine.RulesElement({
    name: "Eladrin Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_498",
    source: "Player's Handbook",
    categories: ["Eladrin Armor +1", "ID_FMP_MAGIC_ITEM_498"],
    rules: function(model) {
      model.statadd("Armor Penalty", 0, "hide");
      model.statadd("Armor Penalty", 0, "chain");
      model.statadd("Armor Penalty", 0, "Scale");
      model.statadd("Armor Penalty", 0, "plate");
      model.statadd("Speed", 0, "Armor");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eladrin Armor +2"] = new engine.RulesElement({
    name: "Eladrin Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_575",
    source: "Player's Handbook",
    categories: ["Eladrin Armor +2", "ID_FMP_MAGIC_ITEM_575"],
    rules: function(model) {
      model.statadd("Armor Penalty", 0, "hide");
      model.statadd("Armor Penalty", 0, "chain");
      model.statadd("Armor Penalty", 0, "Scale");
      model.statadd("Armor Penalty", 0, "plate");
      model.statadd("Speed", 0, "Armor");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eladrin Armor +3"] = new engine.RulesElement({
    name: "Eladrin Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_576",
    source: "Player's Handbook",
    categories: ["Eladrin Armor +3", "ID_FMP_MAGIC_ITEM_576"],
    rules: function(model) {
      model.statadd("Armor Penalty", 0, "hide");
      model.statadd("Armor Penalty", 0, "chain");
      model.statadd("Armor Penalty", 0, "Scale");
      model.statadd("Armor Penalty", 0, "plate");
      model.statadd("Speed", 0, "Armor");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eladrin Armor +4"] = new engine.RulesElement({
    name: "Eladrin Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_577",
    source: "Player's Handbook",
    categories: ["Eladrin Armor +4", "ID_FMP_MAGIC_ITEM_577"],
    rules: function(model) {
      model.statadd("Armor Penalty", 0, "hide");
      model.statadd("Armor Penalty", 0, "chain");
      model.statadd("Armor Penalty", 0, "Scale");
      model.statadd("Armor Penalty", 0, "plate");
      model.statadd("Speed", 0, "Armor");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eladrin Armor +5"] = new engine.RulesElement({
    name: "Eladrin Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_578",
    source: "Player's Handbook",
    categories: ["Eladrin Armor +5", "ID_FMP_MAGIC_ITEM_578"],
    rules: function(model) {
      model.statadd("Armor Penalty", 0, "hide");
      model.statadd("Armor Penalty", 0, "chain");
      model.statadd("Armor Penalty", 0, "Scale");
      model.statadd("Armor Penalty", 0, "plate");
      model.statadd("Speed", 0, "Armor");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eladrin Armor +6"] = new engine.RulesElement({
    name: "Eladrin Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_579",
    source: "Player's Handbook",
    categories: ["Eladrin Armor +6", "ID_FMP_MAGIC_ITEM_579"],
    rules: function(model) {
      model.statadd("Armor Penalty", 0, "hide");
      model.statadd("Armor Penalty", 0, "chain");
      model.statadd("Armor Penalty", 0, "Scale");
      model.statadd("Armor Penalty", 0, "plate");
      model.statadd("Speed", 0, "Armor");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eladrin Boots (paragon tier)"] = new engine.RulesElement({
    name: "Eladrin Boots (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_994",
    source: "Player's Handbook",
    categories: ["Eladrin Boots (paragon tier)", "ID_FMP_MAGIC_ITEM_994"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elven Battle Armor +2"] = new engine.RulesElement({
    name: "Elven Battle Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_580",
    source: "Player's Handbook",
    categories: ["Elven Battle Armor +2", "ID_FMP_MAGIC_ITEM_580"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against being slowed or immobilized */ return 5; }, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elven Battle Armor +3"] = new engine.RulesElement({
    name: "Elven Battle Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_581",
    source: "Player's Handbook",
    categories: ["Elven Battle Armor +3", "ID_FMP_MAGIC_ITEM_581"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against being slowed or immobilized */ return 5; }, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elven Battle Armor +4"] = new engine.RulesElement({
    name: "Elven Battle Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_582",
    source: "Player's Handbook",
    categories: ["Elven Battle Armor +4", "ID_FMP_MAGIC_ITEM_582"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against being slowed or immobilized */ return 5; }, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elven Battle Armor +5"] = new engine.RulesElement({
    name: "Elven Battle Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_583",
    source: "Player's Handbook",
    categories: ["Elven Battle Armor +5", "ID_FMP_MAGIC_ITEM_583"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against being slowed or immobilized */ return 5; }, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elven Battle Armor +6"] = new engine.RulesElement({
    name: "Elven Battle Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_584",
    source: "Player's Handbook",
    categories: ["Elven Battle Armor +6", "ID_FMP_MAGIC_ITEM_584"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against being slowed or immobilized */ return 5; }, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elven Boots (paragon tier)"] = new engine.RulesElement({
    name: "Elven Boots (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_995",
    source: "Player's Handbook",
    categories: ["Elven Boots (paragon tier)", "ID_FMP_MAGIC_ITEM_995"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elven Cloak +2"] = new engine.RulesElement({
    name: "Elven Cloak +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1069",
    source: "Player's Handbook",
    categories: ["Elven Cloak +2", "ID_FMP_MAGIC_ITEM_1069"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elven Cloak +3"] = new engine.RulesElement({
    name: "Elven Cloak +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1070",
    source: "Player's Handbook",
    categories: ["Elven Cloak +3", "ID_FMP_MAGIC_ITEM_1070"],
    rules: function(model) {
      model.statadd("Stealth Misc", 3, "item");
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elven Cloak +4"] = new engine.RulesElement({
    name: "Elven Cloak +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1071",
    source: "Player's Handbook",
    categories: ["Elven Cloak +4", "ID_FMP_MAGIC_ITEM_1071"],
    rules: function(model) {
      model.statadd("Stealth Misc", 4, "item");
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elven Cloak +5"] = new engine.RulesElement({
    name: "Elven Cloak +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1072",
    source: "Player's Handbook",
    categories: ["Elven Cloak +5", "ID_FMP_MAGIC_ITEM_1072"],
    rules: function(model) {
      model.statadd("Stealth Misc", 5, "item");
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elven Cloak +6"] = new engine.RulesElement({
    name: "Elven Cloak +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1073",
    source: "Player's Handbook",
    categories: ["Elven Cloak +6", "ID_FMP_MAGIC_ITEM_1073"],
    rules: function(model) {
      model.statadd("Stealth Misc", 6, "item");
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Everlasting Provisions (heroic tier)"] = new engine.RulesElement({
    name: "Everlasting Provisions (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1124",
    source: "Player's Handbook",
    categories: ["Everlasting Provisions (heroic tier)", "ID_FMP_MAGIC_ITEM_1124"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Exalted Armor +1"] = new engine.RulesElement({
    name: "Exalted Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_585",
    source: "Player's Handbook",
    categories: ["Exalted Armor +1", "ID_FMP_MAGIC_ITEM_585"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Exalted Armor +2"] = new engine.RulesElement({
    name: "Exalted Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_586",
    source: "Player's Handbook",
    categories: ["Exalted Armor +2", "ID_FMP_MAGIC_ITEM_586"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Exalted Armor +3"] = new engine.RulesElement({
    name: "Exalted Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_587",
    source: "Player's Handbook",
    categories: ["Exalted Armor +3", "ID_FMP_MAGIC_ITEM_587"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Exalted Armor +4"] = new engine.RulesElement({
    name: "Exalted Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_588",
    source: "Player's Handbook",
    categories: ["Exalted Armor +4", "ID_FMP_MAGIC_ITEM_588"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Exalted Armor +5"] = new engine.RulesElement({
    name: "Exalted Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_589",
    source: "Player's Handbook",
    categories: ["Exalted Armor +5", "ID_FMP_MAGIC_ITEM_589"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Exalted Armor +6"] = new engine.RulesElement({
    name: "Exalted Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_590",
    source: "Player's Handbook",
    categories: ["Exalted Armor +6", "ID_FMP_MAGIC_ITEM_590"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feather Boat (paragon tier)"] = new engine.RulesElement({
    name: "Feather Boat (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1126",
    source: "Player's Handbook",
    categories: ["Feather Boat (paragon tier)", "ID_FMP_MAGIC_ITEM_1126"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fireburst Armor +1"] = new engine.RulesElement({
    name: "Fireburst Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_595",
    source: "Player's Handbook",
    categories: ["Fireburst Armor +1", "ID_FMP_MAGIC_ITEM_595"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fireburst Armor +2"] = new engine.RulesElement({
    name: "Fireburst Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_596",
    source: "Player's Handbook",
    categories: ["Fireburst Armor +2", "ID_FMP_MAGIC_ITEM_596"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fireburst Armor +3"] = new engine.RulesElement({
    name: "Fireburst Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_597",
    source: "Player's Handbook",
    categories: ["Fireburst Armor +3", "ID_FMP_MAGIC_ITEM_597"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fireburst Armor +4"] = new engine.RulesElement({
    name: "Fireburst Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_598",
    source: "Player's Handbook",
    categories: ["Fireburst Armor +4", "ID_FMP_MAGIC_ITEM_598"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fireburst Armor +5"] = new engine.RulesElement({
    name: "Fireburst Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_599",
    source: "Player's Handbook",
    categories: ["Fireburst Armor +5", "ID_FMP_MAGIC_ITEM_599"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fireburst Armor +6"] = new engine.RulesElement({
    name: "Fireburst Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_600",
    source: "Player's Handbook",
    categories: ["Fireburst Armor +6", "ID_FMP_MAGIC_ITEM_600"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flameburst Weapon +1"] = new engine.RulesElement({
    name: "Flameburst Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_681",
    source: "Player's Handbook",
    categories: ["Flameburst Weapon +1", "ID_FMP_MAGIC_ITEM_681"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flameburst Weapon +2"] = new engine.RulesElement({
    name: "Flameburst Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_682",
    source: "Player's Handbook",
    categories: ["Flameburst Weapon +2", "ID_FMP_MAGIC_ITEM_682"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flameburst Weapon +3"] = new engine.RulesElement({
    name: "Flameburst Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_683",
    source: "Player's Handbook",
    categories: ["Flameburst Weapon +3", "ID_FMP_MAGIC_ITEM_683"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flameburst Weapon +4"] = new engine.RulesElement({
    name: "Flameburst Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_684",
    source: "Player's Handbook",
    categories: ["Flameburst Weapon +4", "ID_FMP_MAGIC_ITEM_684"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flameburst Weapon +5"] = new engine.RulesElement({
    name: "Flameburst Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_685",
    source: "Player's Handbook",
    categories: ["Flameburst Weapon +5", "ID_FMP_MAGIC_ITEM_685"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flameburst Weapon +6"] = new engine.RulesElement({
    name: "Flameburst Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_686",
    source: "Player's Handbook",
    categories: ["Flameburst Weapon +6", "ID_FMP_MAGIC_ITEM_686"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flamedrinker Armor +3"] = new engine.RulesElement({
    name: "Flamedrinker Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_591",
    source: "Player's Handbook",
    categories: ["Flamedrinker Armor +3", "ID_FMP_MAGIC_ITEM_591"],
    rules: function(model) {
      model.statadd("Flamedrinker Armor +3", 10, "Flamedrinker Armor +3");
      model.statadd("resist:fire", function() { return model.stat("Flamedrinker Armor +3"); }, "resist");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flamedrinker Armor +4"] = new engine.RulesElement({
    name: "Flamedrinker Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_592",
    source: "Player's Handbook",
    categories: ["Flamedrinker Armor +4", "ID_FMP_MAGIC_ITEM_592"],
    rules: function(model) {
      model.statadd("Flamedrinker Armor +4", 10, "Flamedrinker Armor +4");
      model.statadd("resist:fire", function() { return model.stat("Flamedrinker Armor +4"); }, "resist");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flamedrinker Armor +5"] = new engine.RulesElement({
    name: "Flamedrinker Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_593",
    source: "Player's Handbook",
    categories: ["Flamedrinker Armor +5", "ID_FMP_MAGIC_ITEM_593"],
    rules: function(model) {
      model.statadd("Flamedrinker Armor +5", 15, "Flamedrinker Armor +5");
      model.statadd("resist:fire", function() { return model.stat("Flamedrinker Armor +5"); }, "resist");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flamedrinker Armor +6"] = new engine.RulesElement({
    name: "Flamedrinker Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_594",
    source: "Player's Handbook",
    categories: ["Flamedrinker Armor +6", "ID_FMP_MAGIC_ITEM_594"],
    rules: function(model) {
      model.statadd("Flamedrinker Armor +6", 15, "Flamedrinker Armor +6");
      model.statadd("resist:fire", function() { return model.stat("Flamedrinker Armor +6"); }, "resist");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flaming Weapon +1"] = new engine.RulesElement({
    name: "Flaming Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_687",
    source: "Player's Handbook",
    categories: ["Flaming Weapon +1", "ID_FMP_MAGIC_ITEM_687"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flaming Weapon +2"] = new engine.RulesElement({
    name: "Flaming Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_688",
    source: "Player's Handbook",
    categories: ["Flaming Weapon +2", "ID_FMP_MAGIC_ITEM_688"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flaming Weapon +3"] = new engine.RulesElement({
    name: "Flaming Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_689",
    source: "Player's Handbook",
    categories: ["Flaming Weapon +3", "ID_FMP_MAGIC_ITEM_689"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flaming Weapon +4"] = new engine.RulesElement({
    name: "Flaming Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_690",
    source: "Player's Handbook",
    categories: ["Flaming Weapon +4", "ID_FMP_MAGIC_ITEM_690"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flaming Weapon +5"] = new engine.RulesElement({
    name: "Flaming Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_691",
    source: "Player's Handbook",
    categories: ["Flaming Weapon +5", "ID_FMP_MAGIC_ITEM_691"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flaming Weapon +6"] = new engine.RulesElement({
    name: "Flaming Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_692",
    source: "Player's Handbook",
    categories: ["Flaming Weapon +6", "ID_FMP_MAGIC_ITEM_692"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flying Carpet (paragon tier)"] = new engine.RulesElement({
    name: "Flying Carpet (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1127",
    source: "Player's Handbook",
    categories: ["Flying Carpet (paragon tier)", "ID_FMP_MAGIC_ITEM_1127"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Frost Weapon +1"] = new engine.RulesElement({
    name: "Frost Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_693",
    source: "Player's Handbook",
    categories: ["Frost Weapon +1", "ID_FMP_MAGIC_ITEM_693"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Frost Weapon +2"] = new engine.RulesElement({
    name: "Frost Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_694",
    source: "Player's Handbook",
    categories: ["Frost Weapon +2", "ID_FMP_MAGIC_ITEM_694"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Frost Weapon +3"] = new engine.RulesElement({
    name: "Frost Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_695",
    source: "Player's Handbook",
    categories: ["Frost Weapon +3", "ID_FMP_MAGIC_ITEM_695"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Frost Weapon +4"] = new engine.RulesElement({
    name: "Frost Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_696",
    source: "Player's Handbook",
    categories: ["Frost Weapon +4", "ID_FMP_MAGIC_ITEM_696"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Frost Weapon +5"] = new engine.RulesElement({
    name: "Frost Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_697",
    source: "Player's Handbook",
    categories: ["Frost Weapon +5", "ID_FMP_MAGIC_ITEM_697"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Frost Weapon +6"] = new engine.RulesElement({
    name: "Frost Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_698",
    source: "Player's Handbook",
    categories: ["Frost Weapon +6", "ID_FMP_MAGIC_ITEM_698"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gauntlets of Destruction (paragon tier)"] = new engine.RulesElement({
    name: "Gauntlets of Destruction (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_999",
    source: "Player's Handbook",
    categories: ["Gauntlets of Destruction (paragon tier)", "ID_FMP_MAGIC_ITEM_999"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gauntlets of Ogre Power (heroic tier)"] = new engine.RulesElement({
    name: "Gauntlets of Ogre Power (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1000",
    source: "Player's Handbook",
    categories: ["Gauntlets of Ogre Power (heroic tier)", "ID_FMP_MAGIC_ITEM_1000"],
    rules: function(model) {
      model.statadd("Athletics Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gauntlets of the Ram (heroic tier)"] = new engine.RulesElement({
    name: "Gauntlets of the Ram (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1001",
    source: "Player's Handbook",
    categories: ["Gauntlets of the Ram (heroic tier)", "ID_FMP_MAGIC_ITEM_1001"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ghostphase Armor +2"] = new engine.RulesElement({
    name: "Ghostphase Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_601",
    source: "Player's Handbook",
    categories: ["Ghostphase Armor +2", "ID_FMP_MAGIC_ITEM_601"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ghostphase Armor +3"] = new engine.RulesElement({
    name: "Ghostphase Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_602",
    source: "Player's Handbook",
    categories: ["Ghostphase Armor +3", "ID_FMP_MAGIC_ITEM_602"],
    rules: function(model) {
      model.statadd("Ghostphase Armor +3", 5, "Ghostphase Armor +3");
      model.statadd("resist:necrotic", function() { return model.stat("Ghostphase Armor +3"); }, "resist");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ghostphase Armor +4"] = new engine.RulesElement({
    name: "Ghostphase Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_603",
    source: "Player's Handbook",
    categories: ["Ghostphase Armor +4", "ID_FMP_MAGIC_ITEM_603"],
    rules: function(model) {
      model.statadd("Ghostphase Armor +4", 10, "Ghostphase Armor +4");
      model.statadd("resist:necrotic", function() { return model.stat("Ghostphase Armor +4"); }, "resist");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ghostphase Armor +5"] = new engine.RulesElement({
    name: "Ghostphase Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_604",
    source: "Player's Handbook",
    categories: ["Ghostphase Armor +5", "ID_FMP_MAGIC_ITEM_604"],
    rules: function(model) {
      model.statadd("Ghostphase Armor +5", 10, "Ghostphase Armor +5");
      model.statadd("resist:necrotic", function() { return model.stat("Ghostphase Armor +5"); }, "resist");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ghostphase Armor +6"] = new engine.RulesElement({
    name: "Ghostphase Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_605",
    source: "Player's Handbook",
    categories: ["Ghostphase Armor +6", "ID_FMP_MAGIC_ITEM_605"],
    rules: function(model) {
      model.statadd("Ghostphase Armor +6", 15, "Ghostphase Armor +6");
      model.statadd("resist:necrotic", function() { return model.stat("Ghostphase Armor +6"); }, "resist");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gloves of Piercing (heroic tier)"] = new engine.RulesElement({
    name: "Gloves of Piercing (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1002",
    source: "Player's Handbook",
    categories: ["Gloves of Piercing (heroic tier)", "ID_FMP_MAGIC_ITEM_1002"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Goggles of Night (paragon tier)"] = new engine.RulesElement({
    name: "Goggles of Night (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1012",
    source: "Player's Handbook",
    categories: ["Goggles of Night (paragon tier)", "ID_FMP_MAGIC_ITEM_1012"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_VISION_DARKVISION"]);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guardian Shield (epic tier)"] = new engine.RulesElement({
    name: "Guardian Shield (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_974",
    source: "Player's Handbook",
    categories: ["Guardian Shield (epic tier)", "ID_FMP_MAGIC_ITEM_974"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guardian Shield (heroic tier)"] = new engine.RulesElement({
    name: "Guardian Shield (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_972",
    source: "Player's Handbook",
    categories: ["Guardian Shield (heroic tier)", "ID_FMP_MAGIC_ITEM_972"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guardian Shield (paragon tier)"] = new engine.RulesElement({
    name: "Guardian Shield (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_973",
    source: "Player's Handbook",
    categories: ["Guardian Shield (paragon tier)", "ID_FMP_MAGIC_ITEM_973"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guardian's Cape +4"] = new engine.RulesElement({
    name: "Guardian's Cape +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1075",
    source: "Player's Handbook",
    categories: ["Guardian's Cape +4", "ID_FMP_MAGIC_ITEM_1075"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guardian's Cape +5"] = new engine.RulesElement({
    name: "Guardian's Cape +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1076",
    source: "Player's Handbook",
    categories: ["Guardian's Cape +5", "ID_FMP_MAGIC_ITEM_1076"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guardian's Cape +6"] = new engine.RulesElement({
    name: "Guardian's Cape +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1077",
    source: "Player's Handbook",
    categories: ["Guardian's Cape +6", "ID_FMP_MAGIC_ITEM_1077"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guildmaster's Gloves (epic tier)"] = new engine.RulesElement({
    name: "Guildmaster's Gloves (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1003",
    source: "Player's Handbook",
    categories: ["Guildmaster's Gloves (epic tier)", "ID_FMP_MAGIC_ITEM_1003"],
    rules: function(model) {
      model.statadd("Thievery Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Halo of Fallen Stars (epic tier)"] = new engine.RulesElement({
    name: "Halo of Fallen Stars (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1013",
    source: "Player's Handbook",
    categories: ["Halo of Fallen Stars (epic tier)", "ID_FMP_MAGIC_ITEM_1013"],
    rules: function(model) {
      model.statadd("Heal Misc", 5, "item");
      model.statadd("Nature Misc", 5, "item");
      model.statadd("Religion Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Handy Haversack (heroic tier)"] = new engine.RulesElement({
    name: "Handy Haversack (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1128",
    source: "Player's Handbook",
    categories: ["Handy Haversack (heroic tier)", "ID_FMP_MAGIC_ITEM_1128"],
    rules: function(model) {
      model.statadd("Weight", 1);
      model.statadd("Weight Discount", 1000);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Helm of Battle (epic tier)"] = new engine.RulesElement({
    name: "Helm of Battle (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1016",
    source: "Player's Handbook",
    categories: ["Helm of Battle (epic tier)", "ID_FMP_MAGIC_ITEM_1016"],
    rules: function(model) {
      model.statadd("Initiative Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Helm of Battle (heroic tier)"] = new engine.RulesElement({
    name: "Helm of Battle (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1014",
    source: "Player's Handbook",
    categories: ["Helm of Battle (heroic tier)", "ID_FMP_MAGIC_ITEM_1014"],
    rules: function(model) {
      model.statadd("Initiative Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Helm of Battle (paragon tier)"] = new engine.RulesElement({
    name: "Helm of Battle (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1015",
    source: "Player's Handbook",
    categories: ["Helm of Battle (paragon tier)", "ID_FMP_MAGIC_ITEM_1015"],
    rules: function(model) {
      model.statadd("Initiative Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Helm of Ghostly Defense (epic tier)"] = new engine.RulesElement({
    name: "Helm of Ghostly Defense (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1019",
    source: "Player's Handbook",
    categories: ["Helm of Ghostly Defense (epic tier)", "ID_FMP_MAGIC_ITEM_1019"],
    rules: function(model) {
      model.statadd("Helm of Ghostly Defense (epic tier)", 10, "Helm of Ghostly Defense (epic tier)");
      model.statadd("resist:necrotic", function() { return model.stat("Helm of Ghostly Defense (epic tier)"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Helm of Heroes (epic tier)"] = new engine.RulesElement({
    name: "Helm of Heroes (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1022",
    source: "Player's Handbook",
    categories: ["Helm of Heroes (epic tier)", "ID_FMP_MAGIC_ITEM_1022"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 5; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Helm of Heroes (heroic tier)"] = new engine.RulesElement({
    name: "Helm of Heroes (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1020",
    source: "Player's Handbook",
    categories: ["Helm of Heroes (heroic tier)", "ID_FMP_MAGIC_ITEM_1020"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Helm of Heroes (paragon tier)"] = new engine.RulesElement({
    name: "Helm of Heroes (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1021",
    source: "Player's Handbook",
    categories: ["Helm of Heroes (paragon tier)", "ID_FMP_MAGIC_ITEM_1021"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Helm of the Eagle (paragon tier)"] = new engine.RulesElement({
    name: "Helm of the Eagle (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1018",
    source: "Player's Handbook",
    categories: ["Helm of the Eagle (paragon tier)", "ID_FMP_MAGIC_ITEM_1018"],
    rules: function(model) {
      model.statadd("Perception Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Holy Avenger +5"] = new engine.RulesElement({
    name: "Holy Avenger +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_716",
    source: "Player's Handbook",
    categories: ["Holy Avenger +5", "ID_FMP_MAGIC_ITEM_716"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("radiant:damage", "1d10");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Holy Avenger +6"] = new engine.RulesElement({
    name: "Holy Avenger +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_717",
    source: "Player's Handbook",
    categories: ["Holy Avenger +6", "ID_FMP_MAGIC_ITEM_717"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("radiant:damage", "1d10");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Horned Helm (epic tier)"] = new engine.RulesElement({
    name: "Horned Helm (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1025",
    source: "Player's Handbook",
    categories: ["Horned Helm (epic tier)", "ID_FMP_MAGIC_ITEM_1025"],
    rules: function(model) {
      model.statadd("melee basic:damage", "+3d6");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Horned Helm (heroic tier)"] = new engine.RulesElement({
    name: "Horned Helm (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1023",
    source: "Player's Handbook",
    categories: ["Horned Helm (heroic tier)", "ID_FMP_MAGIC_ITEM_1023"],
    rules: function(model) {
      model.statadd("melee basic:damage", "+1d6");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Horned Helm (paragon tier)"] = new engine.RulesElement({
    name: "Horned Helm (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1024",
    source: "Player's Handbook",
    categories: ["Horned Helm (paragon tier)", "ID_FMP_MAGIC_ITEM_1024"],
    rules: function(model) {
      model.statadd("melee basic:damage", "+2d6");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hydra Armor +3"] = new engine.RulesElement({
    name: "Hydra Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_606",
    source: "Player's Handbook",
    categories: ["Hydra Armor +3", "ID_FMP_MAGIC_ITEM_606"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hydra Armor +4"] = new engine.RulesElement({
    name: "Hydra Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_607",
    source: "Player's Handbook",
    categories: ["Hydra Armor +4", "ID_FMP_MAGIC_ITEM_607"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hydra Armor +5"] = new engine.RulesElement({
    name: "Hydra Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_608",
    source: "Player's Handbook",
    categories: ["Hydra Armor +5", "ID_FMP_MAGIC_ITEM_608"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hydra Armor +6"] = new engine.RulesElement({
    name: "Hydra Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_609",
    source: "Player's Handbook",
    categories: ["Hydra Armor +6", "ID_FMP_MAGIC_ITEM_609"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ioun Stone of True Sight (epic tier)"] = new engine.RulesElement({
    name: "Ioun Stone of True Sight (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1026",
    source: "Player's Handbook",
    categories: ["Ioun Stone of True Sight (epic tier)", "ID_FMP_MAGIC_ITEM_1026"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_VISION_DARKVISION"]);
      model.statadd("Insight Misc", 6, "item");
      model.statadd("Perception Misc", 6, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Iron of Spite (epic tier)"] = new engine.RulesElement({
    name: "Iron of Spite (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1027",
    source: "Player's Handbook",
    categories: ["Iron of Spite (epic tier)", "ID_FMP_MAGIC_ITEM_1027"],
    rules: function(model) {
      model.statadd("Iron of Spite (epic tier)", 6);
      model.statadd("Arcana Misc", function() { return model.stat("Iron of Spite (epic tier)"); }, "item");
      model.statadd("Intimidate Misc", function() { return model.stat("Iron of Spite (epic tier)"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Iron Ring of the Dwarf Lords (paragon tier)"] = new engine.RulesElement({
    name: "Iron Ring of the Dwarf Lords (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1093",
    source: "Player's Handbook",
    categories: ["Iron Ring of the Dwarf Lords (paragon tier)", "ID_FMP_MAGIC_ITEM_1093"],
    rules: function(model) {
      model.statadd("Healing Surges", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironskin Belt (epic tier)"] = new engine.RulesElement({
    name: "Ironskin Belt (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1118",
    source: "Player's Handbook",
    categories: ["Ironskin Belt (epic tier)", "ID_FMP_MAGIC_ITEM_1118"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironskin Belt (heroic tier)"] = new engine.RulesElement({
    name: "Ironskin Belt (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1116",
    source: "Player's Handbook",
    categories: ["Ironskin Belt (heroic tier)", "ID_FMP_MAGIC_ITEM_1116"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironskin Belt (paragon tier)"] = new engine.RulesElement({
    name: "Ironskin Belt (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1117",
    source: "Player's Handbook",
    categories: ["Ironskin Belt (paragon tier)", "ID_FMP_MAGIC_ITEM_1117"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Keoghtom's Ointment (paragon tier)"] = new engine.RulesElement({
    name: "Keoghtom's Ointment (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1129",
    source: "Player's Handbook",
    categories: ["Keoghtom's Ointment (paragon tier)", "ID_FMP_MAGIC_ITEM_1129"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lifedrinker Weapon +1"] = new engine.RulesElement({
    name: "Lifedrinker Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_718",
    source: "Player's Handbook",
    categories: ["Lifedrinker Weapon +1", "ID_FMP_MAGIC_ITEM_718"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lifedrinker Weapon +2"] = new engine.RulesElement({
    name: "Lifedrinker Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_719",
    source: "Player's Handbook",
    categories: ["Lifedrinker Weapon +2", "ID_FMP_MAGIC_ITEM_719"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lifedrinker Weapon +3"] = new engine.RulesElement({
    name: "Lifedrinker Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_720",
    source: "Player's Handbook",
    categories: ["Lifedrinker Weapon +3", "ID_FMP_MAGIC_ITEM_720"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lifedrinker Weapon +4"] = new engine.RulesElement({
    name: "Lifedrinker Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_721",
    source: "Player's Handbook",
    categories: ["Lifedrinker Weapon +4", "ID_FMP_MAGIC_ITEM_721"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lifedrinker Weapon +5"] = new engine.RulesElement({
    name: "Lifedrinker Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_722",
    source: "Player's Handbook",
    categories: ["Lifedrinker Weapon +5", "ID_FMP_MAGIC_ITEM_722"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lifedrinker Weapon +6"] = new engine.RulesElement({
    name: "Lifedrinker Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_723",
    source: "Player's Handbook",
    categories: ["Lifedrinker Weapon +6", "ID_FMP_MAGIC_ITEM_723"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lightning Weapon +1"] = new engine.RulesElement({
    name: "Lightning Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_724",
    source: "Player's Handbook",
    categories: ["Lightning Weapon +1", "ID_FMP_MAGIC_ITEM_724"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lightning Weapon +2"] = new engine.RulesElement({
    name: "Lightning Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_725",
    source: "Player's Handbook",
    categories: ["Lightning Weapon +2", "ID_FMP_MAGIC_ITEM_725"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lightning Weapon +3"] = new engine.RulesElement({
    name: "Lightning Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_726",
    source: "Player's Handbook",
    categories: ["Lightning Weapon +3", "ID_FMP_MAGIC_ITEM_726"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lightning Weapon +4"] = new engine.RulesElement({
    name: "Lightning Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_727",
    source: "Player's Handbook",
    categories: ["Lightning Weapon +4", "ID_FMP_MAGIC_ITEM_727"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lightning Weapon +5"] = new engine.RulesElement({
    name: "Lightning Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_728",
    source: "Player's Handbook",
    categories: ["Lightning Weapon +5", "ID_FMP_MAGIC_ITEM_728"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lightning Weapon +6"] = new engine.RulesElement({
    name: "Lightning Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_729",
    source: "Player's Handbook",
    categories: ["Lightning Weapon +6", "ID_FMP_MAGIC_ITEM_729"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Armor +1"] = new engine.RulesElement({
    name: "Magic Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_610",
    source: "Player's Handbook",
    categories: ["Magic Armor +1", "ID_FMP_MAGIC_ITEM_610"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Armor +2"] = new engine.RulesElement({
    name: "Magic Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_611",
    source: "Player's Handbook",
    categories: ["Magic Armor +2", "ID_FMP_MAGIC_ITEM_611"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Armor +3"] = new engine.RulesElement({
    name: "Magic Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_612",
    source: "Player's Handbook",
    categories: ["Magic Armor +3", "ID_FMP_MAGIC_ITEM_612"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Armor +4"] = new engine.RulesElement({
    name: "Magic Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_613",
    source: "Player's Handbook",
    categories: ["Magic Armor +4", "ID_FMP_MAGIC_ITEM_613"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Armor +5"] = new engine.RulesElement({
    name: "Magic Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_614",
    source: "Player's Handbook",
    categories: ["Magic Armor +5", "ID_FMP_MAGIC_ITEM_614"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Armor +6"] = new engine.RulesElement({
    name: "Magic Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_615",
    source: "Player's Handbook",
    categories: ["Magic Armor +6", "ID_FMP_MAGIC_ITEM_615"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Holy Symbol +1"] = new engine.RulesElement({
    name: "Magic Holy Symbol +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_788",
    source: "Player's Handbook",
    categories: ["Magic Holy Symbol +1", "ID_FMP_MAGIC_ITEM_788"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Holy Symbol +2"] = new engine.RulesElement({
    name: "Magic Holy Symbol +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_789",
    source: "Player's Handbook",
    categories: ["Magic Holy Symbol +2", "ID_FMP_MAGIC_ITEM_789"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Holy Symbol +3"] = new engine.RulesElement({
    name: "Magic Holy Symbol +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_790",
    source: "Player's Handbook",
    categories: ["Magic Holy Symbol +3", "ID_FMP_MAGIC_ITEM_790"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Holy Symbol +4"] = new engine.RulesElement({
    name: "Magic Holy Symbol +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_791",
    source: "Player's Handbook",
    categories: ["Magic Holy Symbol +4", "ID_FMP_MAGIC_ITEM_791"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Holy Symbol +5"] = new engine.RulesElement({
    name: "Magic Holy Symbol +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_792",
    source: "Player's Handbook",
    categories: ["Magic Holy Symbol +5", "ID_FMP_MAGIC_ITEM_792"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Holy Symbol +6"] = new engine.RulesElement({
    name: "Magic Holy Symbol +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_793",
    source: "Player's Handbook",
    categories: ["Magic Holy Symbol +6", "ID_FMP_MAGIC_ITEM_793"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Orb +1"] = new engine.RulesElement({
    name: "Magic Orb +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_829",
    source: "Player's Handbook",
    categories: ["Magic Orb +1", "ID_FMP_MAGIC_ITEM_829"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Orb +2"] = new engine.RulesElement({
    name: "Magic Orb +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_830",
    source: "Player's Handbook",
    categories: ["Magic Orb +2", "ID_FMP_MAGIC_ITEM_830"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Orb +3"] = new engine.RulesElement({
    name: "Magic Orb +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_832",
    source: "Player's Handbook",
    categories: ["Magic Orb +3", "ID_FMP_MAGIC_ITEM_832"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Orb +4"] = new engine.RulesElement({
    name: "Magic Orb +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_833",
    source: "Player's Handbook",
    categories: ["Magic Orb +4", "ID_FMP_MAGIC_ITEM_833"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Orb +5"] = new engine.RulesElement({
    name: "Magic Orb +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_834",
    source: "Player's Handbook",
    categories: ["Magic Orb +5", "ID_FMP_MAGIC_ITEM_834"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Orb +6"] = new engine.RulesElement({
    name: "Magic Orb +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_835",
    source: "Player's Handbook",
    categories: ["Magic Orb +6", "ID_FMP_MAGIC_ITEM_835"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Rod +1"] = new engine.RulesElement({
    name: "Magic Rod +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_865",
    source: "Player's Handbook",
    categories: ["Magic Rod +1", "ID_FMP_MAGIC_ITEM_865"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Rod +2"] = new engine.RulesElement({
    name: "Magic Rod +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_866",
    source: "Player's Handbook",
    categories: ["Magic Rod +2", "ID_FMP_MAGIC_ITEM_866"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Rod +3"] = new engine.RulesElement({
    name: "Magic Rod +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_867",
    source: "Player's Handbook",
    categories: ["Magic Rod +3", "ID_FMP_MAGIC_ITEM_867"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Rod +4"] = new engine.RulesElement({
    name: "Magic Rod +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_868",
    source: "Player's Handbook",
    categories: ["Magic Rod +4", "ID_FMP_MAGIC_ITEM_868"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Rod +5"] = new engine.RulesElement({
    name: "Magic Rod +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_869",
    source: "Player's Handbook",
    categories: ["Magic Rod +5", "ID_FMP_MAGIC_ITEM_869"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Rod +6"] = new engine.RulesElement({
    name: "Magic Rod +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_870",
    source: "Player's Handbook",
    categories: ["Magic Rod +6", "ID_FMP_MAGIC_ITEM_870"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Staff +1"] = new engine.RulesElement({
    name: "Magic Staff +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_900",
    source: "Player's Handbook",
    categories: ["Magic Staff +1", "ID_FMP_MAGIC_ITEM_900"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Staff +2"] = new engine.RulesElement({
    name: "Magic Staff +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_901",
    source: "Player's Handbook",
    categories: ["Magic Staff +2", "ID_FMP_MAGIC_ITEM_901"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Staff +3"] = new engine.RulesElement({
    name: "Magic Staff +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_902",
    source: "Player's Handbook",
    categories: ["Magic Staff +3", "ID_FMP_MAGIC_ITEM_902"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Staff +4"] = new engine.RulesElement({
    name: "Magic Staff +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_903",
    source: "Player's Handbook",
    categories: ["Magic Staff +4", "ID_FMP_MAGIC_ITEM_903"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Staff +5"] = new engine.RulesElement({
    name: "Magic Staff +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_904",
    source: "Player's Handbook",
    categories: ["Magic Staff +5", "ID_FMP_MAGIC_ITEM_904"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Staff +6"] = new engine.RulesElement({
    name: "Magic Staff +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_905",
    source: "Player's Handbook",
    categories: ["Magic Staff +6", "ID_FMP_MAGIC_ITEM_905"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Wand +1"] = new engine.RulesElement({
    name: "Magic Wand +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_951",
    source: "Player's Handbook",
    categories: ["Magic Wand +1", "ID_FMP_MAGIC_ITEM_951"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Wand +2"] = new engine.RulesElement({
    name: "Magic Wand +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_952",
    source: "Player's Handbook",
    categories: ["Magic Wand +2", "ID_FMP_MAGIC_ITEM_952"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Wand +3"] = new engine.RulesElement({
    name: "Magic Wand +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_953",
    source: "Player's Handbook",
    categories: ["Magic Wand +3", "ID_FMP_MAGIC_ITEM_953"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Wand +4"] = new engine.RulesElement({
    name: "Magic Wand +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_954",
    source: "Player's Handbook",
    categories: ["Magic Wand +4", "ID_FMP_MAGIC_ITEM_954"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Wand +5"] = new engine.RulesElement({
    name: "Magic Wand +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_955",
    source: "Player's Handbook",
    categories: ["Magic Wand +5", "ID_FMP_MAGIC_ITEM_955"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Wand +6"] = new engine.RulesElement({
    name: "Magic Wand +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_956",
    source: "Player's Handbook",
    categories: ["Magic Wand +6", "ID_FMP_MAGIC_ITEM_956"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Weapon +1"] = new engine.RulesElement({
    name: "Magic Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_730",
    source: "Player's Handbook",
    categories: ["Magic Weapon +1", "ID_FMP_MAGIC_ITEM_730"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Weapon +2"] = new engine.RulesElement({
    name: "Magic Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_731",
    source: "Player's Handbook",
    categories: ["Magic Weapon +2", "ID_FMP_MAGIC_ITEM_731"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Weapon +3"] = new engine.RulesElement({
    name: "Magic Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_732",
    source: "Player's Handbook",
    categories: ["Magic Weapon +3", "ID_FMP_MAGIC_ITEM_732"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Weapon +4"] = new engine.RulesElement({
    name: "Magic Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_733",
    source: "Player's Handbook",
    categories: ["Magic Weapon +4", "ID_FMP_MAGIC_ITEM_733"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Weapon +5"] = new engine.RulesElement({
    name: "Magic Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_734",
    source: "Player's Handbook",
    categories: ["Magic Weapon +5", "ID_FMP_MAGIC_ITEM_734"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Weapon +6"] = new engine.RulesElement({
    name: "Magic Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_735",
    source: "Player's Handbook",
    categories: ["Magic Weapon +6", "ID_FMP_MAGIC_ITEM_735"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mantle of the Seventh Wind +5"] = new engine.RulesElement({
    name: "Mantle of the Seventh Wind +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_616",
    source: "Player's Handbook",
    categories: ["Mantle of the Seventh Wind +5", "ID_FMP_MAGIC_ITEM_616"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mantle of the Seventh Wind +6"] = new engine.RulesElement({
    name: "Mantle of the Seventh Wind +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_617",
    source: "Player's Handbook",
    categories: ["Mantle of the Seventh Wind +6", "ID_FMP_MAGIC_ITEM_617"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mountain Armor +2"] = new engine.RulesElement({
    name: "Mountain Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_618",
    source: "Player's Handbook",
    categories: ["Mountain Armor +2", "ID_FMP_MAGIC_ITEM_618"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mountain Armor +3"] = new engine.RulesElement({
    name: "Mountain Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_619",
    source: "Player's Handbook",
    categories: ["Mountain Armor +3", "ID_FMP_MAGIC_ITEM_619"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mountain Armor +4"] = new engine.RulesElement({
    name: "Mountain Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_620",
    source: "Player's Handbook",
    categories: ["Mountain Armor +4", "ID_FMP_MAGIC_ITEM_620"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mountain Armor +5"] = new engine.RulesElement({
    name: "Mountain Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_621",
    source: "Player's Handbook",
    categories: ["Mountain Armor +5", "ID_FMP_MAGIC_ITEM_621"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mountain Armor +6"] = new engine.RulesElement({
    name: "Mountain Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_622",
    source: "Player's Handbook",
    categories: ["Mountain Armor +6", "ID_FMP_MAGIC_ITEM_622"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Drastic Resolutions +3"] = new engine.RulesElement({
    name: "Orb of Drastic Resolutions +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_836",
    source: "Player's Handbook",
    categories: ["Orb of Drastic Resolutions +3", "ID_FMP_MAGIC_ITEM_836"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Drastic Resolutions +4"] = new engine.RulesElement({
    name: "Orb of Drastic Resolutions +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_837",
    source: "Player's Handbook",
    categories: ["Orb of Drastic Resolutions +4", "ID_FMP_MAGIC_ITEM_837"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Drastic Resolutions +5"] = new engine.RulesElement({
    name: "Orb of Drastic Resolutions +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_838",
    source: "Player's Handbook",
    categories: ["Orb of Drastic Resolutions +5", "ID_FMP_MAGIC_ITEM_838"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Drastic Resolutions +6"] = new engine.RulesElement({
    name: "Orb of Drastic Resolutions +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_839",
    source: "Player's Handbook",
    categories: ["Orb of Drastic Resolutions +6", "ID_FMP_MAGIC_ITEM_839"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Indisputable Gravity +2"] = new engine.RulesElement({
    name: "Orb of Indisputable Gravity +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_840",
    source: "Player's Handbook",
    categories: ["Orb of Indisputable Gravity +2", "ID_FMP_MAGIC_ITEM_840"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Indisputable Gravity +3"] = new engine.RulesElement({
    name: "Orb of Indisputable Gravity +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_841",
    source: "Player's Handbook",
    categories: ["Orb of Indisputable Gravity +3", "ID_FMP_MAGIC_ITEM_841"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Indisputable Gravity +4"] = new engine.RulesElement({
    name: "Orb of Indisputable Gravity +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_842",
    source: "Player's Handbook",
    categories: ["Orb of Indisputable Gravity +4", "ID_FMP_MAGIC_ITEM_842"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Indisputable Gravity +5"] = new engine.RulesElement({
    name: "Orb of Indisputable Gravity +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_843",
    source: "Player's Handbook",
    categories: ["Orb of Indisputable Gravity +5", "ID_FMP_MAGIC_ITEM_843"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Indisputable Gravity +6"] = new engine.RulesElement({
    name: "Orb of Indisputable Gravity +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_844",
    source: "Player's Handbook",
    categories: ["Orb of Indisputable Gravity +6", "ID_FMP_MAGIC_ITEM_844"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Inevitable Continuance +1"] = new engine.RulesElement({
    name: "Orb of Inevitable Continuance +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_845",
    source: "Player's Handbook",
    categories: ["Orb of Inevitable Continuance +1", "ID_FMP_MAGIC_ITEM_845"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Inevitable Continuance +2"] = new engine.RulesElement({
    name: "Orb of Inevitable Continuance +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_846",
    source: "Player's Handbook",
    categories: ["Orb of Inevitable Continuance +2", "ID_FMP_MAGIC_ITEM_846"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Inevitable Continuance +3"] = new engine.RulesElement({
    name: "Orb of Inevitable Continuance +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_849",
    source: "Player's Handbook",
    categories: ["Orb of Inevitable Continuance +3", "ID_FMP_MAGIC_ITEM_849"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Inevitable Continuance +4"] = new engine.RulesElement({
    name: "Orb of Inevitable Continuance +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_847",
    source: "Player's Handbook",
    categories: ["Orb of Inevitable Continuance +4", "ID_FMP_MAGIC_ITEM_847"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Inevitable Continuance +5"] = new engine.RulesElement({
    name: "Orb of Inevitable Continuance +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_848",
    source: "Player's Handbook",
    categories: ["Orb of Inevitable Continuance +5", "ID_FMP_MAGIC_ITEM_848"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Inevitable Continuance +6"] = new engine.RulesElement({
    name: "Orb of Inevitable Continuance +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_850",
    source: "Player's Handbook",
    categories: ["Orb of Inevitable Continuance +6", "ID_FMP_MAGIC_ITEM_850"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Invasive Fortune +4"] = new engine.RulesElement({
    name: "Orb of Invasive Fortune +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_851",
    source: "Player's Handbook",
    categories: ["Orb of Invasive Fortune +4", "ID_FMP_MAGIC_ITEM_851"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Invasive Fortune +5"] = new engine.RulesElement({
    name: "Orb of Invasive Fortune +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_852",
    source: "Player's Handbook",
    categories: ["Orb of Invasive Fortune +5", "ID_FMP_MAGIC_ITEM_852"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Invasive Fortune +6"] = new engine.RulesElement({
    name: "Orb of Invasive Fortune +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_853",
    source: "Player's Handbook",
    categories: ["Orb of Invasive Fortune +6", "ID_FMP_MAGIC_ITEM_853"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Reversed Polarities +2"] = new engine.RulesElement({
    name: "Orb of Reversed Polarities +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_854",
    source: "Player's Handbook",
    categories: ["Orb of Reversed Polarities +2", "ID_FMP_MAGIC_ITEM_854"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Reversed Polarities +3"] = new engine.RulesElement({
    name: "Orb of Reversed Polarities +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_855",
    source: "Player's Handbook",
    categories: ["Orb of Reversed Polarities +3", "ID_FMP_MAGIC_ITEM_855"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Reversed Polarities +4"] = new engine.RulesElement({
    name: "Orb of Reversed Polarities +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_856",
    source: "Player's Handbook",
    categories: ["Orb of Reversed Polarities +4", "ID_FMP_MAGIC_ITEM_856"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Reversed Polarities +5"] = new engine.RulesElement({
    name: "Orb of Reversed Polarities +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_857",
    source: "Player's Handbook",
    categories: ["Orb of Reversed Polarities +5", "ID_FMP_MAGIC_ITEM_857"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Reversed Polarities +6"] = new engine.RulesElement({
    name: "Orb of Reversed Polarities +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_858",
    source: "Player's Handbook",
    categories: ["Orb of Reversed Polarities +6", "ID_FMP_MAGIC_ITEM_858"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Sanguinary Repercussions +1"] = new engine.RulesElement({
    name: "Orb of Sanguinary Repercussions +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_859",
    source: "Player's Handbook",
    categories: ["Orb of Sanguinary Repercussions +1", "ID_FMP_MAGIC_ITEM_859"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Sanguinary Repercussions +2"] = new engine.RulesElement({
    name: "Orb of Sanguinary Repercussions +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_860",
    source: "Player's Handbook",
    categories: ["Orb of Sanguinary Repercussions +2", "ID_FMP_MAGIC_ITEM_860"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Sanguinary Repercussions +3"] = new engine.RulesElement({
    name: "Orb of Sanguinary Repercussions +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_861",
    source: "Player's Handbook",
    categories: ["Orb of Sanguinary Repercussions +3", "ID_FMP_MAGIC_ITEM_861"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Sanguinary Repercussions +4"] = new engine.RulesElement({
    name: "Orb of Sanguinary Repercussions +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_862",
    source: "Player's Handbook",
    categories: ["Orb of Sanguinary Repercussions +4", "ID_FMP_MAGIC_ITEM_862"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Sanguinary Repercussions +5"] = new engine.RulesElement({
    name: "Orb of Sanguinary Repercussions +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_863",
    source: "Player's Handbook",
    categories: ["Orb of Sanguinary Repercussions +5", "ID_FMP_MAGIC_ITEM_863"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Sanguinary Repercussions +6"] = new engine.RulesElement({
    name: "Orb of Sanguinary Repercussions +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_864",
    source: "Player's Handbook",
    categories: ["Orb of Sanguinary Repercussions +6", "ID_FMP_MAGIC_ITEM_864"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pact Blade +1"] = new engine.RulesElement({
    name: "Pact Blade +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_741",
    source: "Player's Handbook",
    categories: ["Pact Blade +1", "ID_FMP_MAGIC_ITEM_741"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pact Blade +2"] = new engine.RulesElement({
    name: "Pact Blade +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_742",
    source: "Player's Handbook",
    categories: ["Pact Blade +2", "ID_FMP_MAGIC_ITEM_742"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pact Blade +3"] = new engine.RulesElement({
    name: "Pact Blade +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_743",
    source: "Player's Handbook",
    categories: ["Pact Blade +3", "ID_FMP_MAGIC_ITEM_743"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pact Blade +4"] = new engine.RulesElement({
    name: "Pact Blade +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_744",
    source: "Player's Handbook",
    categories: ["Pact Blade +4", "ID_FMP_MAGIC_ITEM_744"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pact Blade +5"] = new engine.RulesElement({
    name: "Pact Blade +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_745",
    source: "Player's Handbook",
    categories: ["Pact Blade +5", "ID_FMP_MAGIC_ITEM_745"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pact Blade +6"] = new engine.RulesElement({
    name: "Pact Blade +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_746",
    source: "Player's Handbook",
    categories: ["Pact Blade +6", "ID_FMP_MAGIC_ITEM_746"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Perfect Hunter's Weapon +6"] = new engine.RulesElement({
    name: "Perfect Hunter's Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_747",
    source: "Player's Handbook",
    categories: ["Perfect Hunter's Weapon +6", "ID_FMP_MAGIC_ITEM_747"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Periapt of Wisdom +3"] = new engine.RulesElement({
    name: "Periapt of Wisdom +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1078",
    source: "Player's Handbook",
    categories: ["Periapt of Wisdom +3", "ID_FMP_MAGIC_ITEM_1078"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", 1, "item");
      model.statadd("Heal Misc", 1, "item");
      model.statadd("Insight Misc", 1, "item");
      model.statadd("Nature Misc", 1, "item");
      model.statadd("Perception Misc", 1, "item");
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Periapt of Wisdom +4"] = new engine.RulesElement({
    name: "Periapt of Wisdom +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1079",
    source: "Player's Handbook",
    categories: ["Periapt of Wisdom +4", "ID_FMP_MAGIC_ITEM_1079"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", 1, "item");
      model.statadd("Heal Misc", 1, "item");
      model.statadd("Insight Misc", 1, "item");
      model.statadd("Nature Misc", 1, "item");
      model.statadd("Perception Misc", 1, "item");
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Periapt of Wisdom +5"] = new engine.RulesElement({
    name: "Periapt of Wisdom +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1080",
    source: "Player's Handbook",
    categories: ["Periapt of Wisdom +5", "ID_FMP_MAGIC_ITEM_1080"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", 2, "item");
      model.statadd("Heal Misc", 2, "item");
      model.statadd("Insight Misc", 2, "item");
      model.statadd("Nature Misc", 2, "item");
      model.statadd("Perception Misc", 2, "item");
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Periapt of Wisdom +6"] = new engine.RulesElement({
    name: "Periapt of Wisdom +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1081",
    source: "Player's Handbook",
    categories: ["Periapt of Wisdom +6", "ID_FMP_MAGIC_ITEM_1081"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", 2, "item");
      model.statadd("Heal Misc", 2, "item");
      model.statadd("Insight Misc", 2, "item");
      model.statadd("Nature Misc", 2, "item");
      model.statadd("Perception Misc", 2, "item");
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Phasing Weapon +3"] = new engine.RulesElement({
    name: "Phasing Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_748",
    source: "Player's Handbook",
    categories: ["Phasing Weapon +3", "ID_FMP_MAGIC_ITEM_748"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Phasing Weapon +4"] = new engine.RulesElement({
    name: "Phasing Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_749",
    source: "Player's Handbook",
    categories: ["Phasing Weapon +4", "ID_FMP_MAGIC_ITEM_749"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Phasing Weapon +5"] = new engine.RulesElement({
    name: "Phasing Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_750",
    source: "Player's Handbook",
    categories: ["Phasing Weapon +5", "ID_FMP_MAGIC_ITEM_750"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Phasing Weapon +6"] = new engine.RulesElement({
    name: "Phasing Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_751",
    source: "Player's Handbook",
    categories: ["Phasing Weapon +6", "ID_FMP_MAGIC_ITEM_751"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Phoenix Helm (epic tier)"] = new engine.RulesElement({
    name: "Phoenix Helm (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1028",
    source: "Player's Handbook",
    categories: ["Phoenix Helm (epic tier)", "ID_FMP_MAGIC_ITEM_1028"],
    rules: function(model) {
      model.statadd("Perception Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Portable Hole (paragon tier)"] = new engine.RulesElement({
    name: "Portable Hole (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1130",
    source: "Player's Handbook",
    categories: ["Portable Hole (paragon tier)", "ID_FMP_MAGIC_ITEM_1130"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Potion of Healing (heroic tier)"] = new engine.RulesElement({
    name: "Potion of Healing (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1138",
    source: "Player's Handbook",
    categories: ["Potion of Healing (heroic tier)", "ID_FMP_MAGIC_ITEM_1138"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Potion of Life (epic tier)"] = new engine.RulesElement({
    name: "Potion of Life (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1137",
    source: "Player's Handbook",
    categories: ["Potion of Life (epic tier)", "ID_FMP_MAGIC_ITEM_1137"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Potion of Recovery (epic tier)"] = new engine.RulesElement({
    name: "Potion of Recovery (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1136",
    source: "Player's Handbook",
    categories: ["Potion of Recovery (epic tier)", "ID_FMP_MAGIC_ITEM_1136"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Potion of Vitality (paragon tier)"] = new engine.RulesElement({
    name: "Potion of Vitality (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1139",
    source: "Player's Handbook",
    categories: ["Potion of Vitality (paragon tier)", "ID_FMP_MAGIC_ITEM_1139"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Razor Armor +1"] = new engine.RulesElement({
    name: "Razor Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_623",
    source: "Player's Handbook",
    categories: ["Razor Armor +1", "ID_FMP_MAGIC_ITEM_623"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Razor Armor +2"] = new engine.RulesElement({
    name: "Razor Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_624",
    source: "Player's Handbook",
    categories: ["Razor Armor +2", "ID_FMP_MAGIC_ITEM_624"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Razor Armor +3"] = new engine.RulesElement({
    name: "Razor Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_625",
    source: "Player's Handbook",
    categories: ["Razor Armor +3", "ID_FMP_MAGIC_ITEM_625"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Razor Armor +4"] = new engine.RulesElement({
    name: "Razor Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_626",
    source: "Player's Handbook",
    categories: ["Razor Armor +4", "ID_FMP_MAGIC_ITEM_626"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Razor Armor +5"] = new engine.RulesElement({
    name: "Razor Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_627",
    source: "Player's Handbook",
    categories: ["Razor Armor +5", "ID_FMP_MAGIC_ITEM_627"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Razor Armor +6"] = new engine.RulesElement({
    name: "Razor Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_628",
    source: "Player's Handbook",
    categories: ["Razor Armor +6", "ID_FMP_MAGIC_ITEM_628"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Resounding Weapon +1"] = new engine.RulesElement({
    name: "Resounding Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_752",
    source: "Player's Handbook",
    categories: ["Resounding Weapon +1", "ID_FMP_MAGIC_ITEM_752"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Resounding Weapon +2"] = new engine.RulesElement({
    name: "Resounding Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_753",
    source: "Player's Handbook",
    categories: ["Resounding Weapon +2", "ID_FMP_MAGIC_ITEM_753"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Resounding Weapon +3"] = new engine.RulesElement({
    name: "Resounding Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_754",
    source: "Player's Handbook",
    categories: ["Resounding Weapon +3", "ID_FMP_MAGIC_ITEM_754"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Resounding Weapon +4"] = new engine.RulesElement({
    name: "Resounding Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_755",
    source: "Player's Handbook",
    categories: ["Resounding Weapon +4", "ID_FMP_MAGIC_ITEM_755"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Resounding Weapon +5"] = new engine.RulesElement({
    name: "Resounding Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_756",
    source: "Player's Handbook",
    categories: ["Resounding Weapon +5", "ID_FMP_MAGIC_ITEM_756"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Resounding Weapon +6"] = new engine.RulesElement({
    name: "Resounding Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_757",
    source: "Player's Handbook",
    categories: ["Resounding Weapon +6", "ID_FMP_MAGIC_ITEM_757"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Revenant Ankh (paragon tier)"] = new engine.RulesElement({
    name: "Revenant Ankh (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1132",
    source: "Player's Handbook",
    categories: ["Revenant Ankh (paragon tier)", "ID_FMP_MAGIC_ITEM_1132"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ring of Flight (paragon tier)"] = new engine.RulesElement({
    name: "Ring of Flight (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1095",
    source: "Player's Handbook",
    categories: ["Ring of Flight (paragon tier)", "ID_FMP_MAGIC_ITEM_1095"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ring of Freedom of Movement (paragon tier)"] = new engine.RulesElement({
    name: "Ring of Freedom of Movement (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1096",
    source: "Player's Handbook",
    categories: ["Ring of Freedom of Movement (paragon tier)", "ID_FMP_MAGIC_ITEM_1096"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ring of Invisibility (paragon tier)"] = new engine.RulesElement({
    name: "Ring of Invisibility (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1097",
    source: "Player's Handbook",
    categories: ["Ring of Invisibility (paragon tier)", "ID_FMP_MAGIC_ITEM_1097"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ring of Protection (paragon tier)"] = new engine.RulesElement({
    name: "Ring of Protection (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1191",
    source: "Player's Handbook",
    categories: ["Ring of Protection (paragon tier)", "ID_FMP_MAGIC_ITEM_1191"],
    rules: function(model) {
      model.statadd("Saving Throws", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ring of Regeneration (epic tier)"] = new engine.RulesElement({
    name: "Ring of Regeneration (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1192",
    source: "Player's Handbook",
    categories: ["Ring of Regeneration (epic tier)", "ID_FMP_MAGIC_ITEM_1192"],
    rules: function(model) {
      model.statadd("Ring of Regeneration (epic tier)", 3);
      model.statadd("Healing Surge Value", function() { return model.stat("Ring of Regeneration (epic tier)"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ring of True Seeing (paragon tier)"] = new engine.RulesElement({
    name: "Ring of True Seeing (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1099",
    source: "Player's Handbook",
    categories: ["Ring of True Seeing (paragon tier)", "ID_FMP_MAGIC_ITEM_1099"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ring of Wizardry (epic tier)"] = new engine.RulesElement({
    name: "Ring of Wizardry (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1100",
    source: "Player's Handbook",
    categories: ["Ring of Wizardry (epic tier)", "ID_FMP_MAGIC_ITEM_1100"],
    rules: function(model) {
      model.statadd("Arcana Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ritual Candle (paragon tier)"] = new engine.RulesElement({
    name: "Ritual Candle (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1133",
    source: "Player's Handbook",
    categories: ["Ritual Candle (paragon tier)", "ID_FMP_MAGIC_ITEM_1133"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Corruption +1"] = new engine.RulesElement({
    name: "Rod of Corruption +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_871",
    source: "Player's Handbook",
    categories: ["Rod of Corruption +1", "ID_FMP_MAGIC_ITEM_871"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Corruption +2"] = new engine.RulesElement({
    name: "Rod of Corruption +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_872",
    source: "Player's Handbook",
    categories: ["Rod of Corruption +2", "ID_FMP_MAGIC_ITEM_872"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Corruption +3"] = new engine.RulesElement({
    name: "Rod of Corruption +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_873",
    source: "Player's Handbook",
    categories: ["Rod of Corruption +3", "ID_FMP_MAGIC_ITEM_873"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Corruption +4"] = new engine.RulesElement({
    name: "Rod of Corruption +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_874",
    source: "Player's Handbook",
    categories: ["Rod of Corruption +4", "ID_FMP_MAGIC_ITEM_874"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Corruption +5"] = new engine.RulesElement({
    name: "Rod of Corruption +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_875",
    source: "Player's Handbook",
    categories: ["Rod of Corruption +5", "ID_FMP_MAGIC_ITEM_875"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Corruption +6"] = new engine.RulesElement({
    name: "Rod of Corruption +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_876",
    source: "Player's Handbook",
    categories: ["Rod of Corruption +6", "ID_FMP_MAGIC_ITEM_876"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Dark Reward +1"] = new engine.RulesElement({
    name: "Rod of Dark Reward +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_502",
    source: "Player's Handbook",
    categories: ["Rod of Dark Reward +1", "ID_FMP_MAGIC_ITEM_502"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Dark Reward +2"] = new engine.RulesElement({
    name: "Rod of Dark Reward +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_503",
    source: "Player's Handbook",
    categories: ["Rod of Dark Reward +2", "ID_FMP_MAGIC_ITEM_503"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Dark Reward +3"] = new engine.RulesElement({
    name: "Rod of Dark Reward +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_504",
    source: "Player's Handbook",
    categories: ["Rod of Dark Reward +3", "ID_FMP_MAGIC_ITEM_504"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Dark Reward +4"] = new engine.RulesElement({
    name: "Rod of Dark Reward +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_505",
    source: "Player's Handbook",
    categories: ["Rod of Dark Reward +4", "ID_FMP_MAGIC_ITEM_505"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Dark Reward +5"] = new engine.RulesElement({
    name: "Rod of Dark Reward +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_506",
    source: "Player's Handbook",
    categories: ["Rod of Dark Reward +5", "ID_FMP_MAGIC_ITEM_506"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Dark Reward +6"] = new engine.RulesElement({
    name: "Rod of Dark Reward +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_507",
    source: "Player's Handbook",
    categories: ["Rod of Dark Reward +6", "ID_FMP_MAGIC_ITEM_507"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Death's Grasp +5"] = new engine.RulesElement({
    name: "Rod of Death's Grasp +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_877",
    source: "Player's Handbook",
    categories: ["Rod of Death's Grasp +5", "ID_FMP_MAGIC_ITEM_877"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Death's Grasp +6"] = new engine.RulesElement({
    name: "Rod of Death's Grasp +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_878",
    source: "Player's Handbook",
    categories: ["Rod of Death's Grasp +6", "ID_FMP_MAGIC_ITEM_878"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of First Blood +2"] = new engine.RulesElement({
    name: "Rod of First Blood +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_879",
    source: "Player's Handbook",
    categories: ["Rod of First Blood +2", "ID_FMP_MAGIC_ITEM_879"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of First Blood +3"] = new engine.RulesElement({
    name: "Rod of First Blood +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_880",
    source: "Player's Handbook",
    categories: ["Rod of First Blood +3", "ID_FMP_MAGIC_ITEM_880"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of First Blood +4"] = new engine.RulesElement({
    name: "Rod of First Blood +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_881",
    source: "Player's Handbook",
    categories: ["Rod of First Blood +4", "ID_FMP_MAGIC_ITEM_881"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of First Blood +5"] = new engine.RulesElement({
    name: "Rod of First Blood +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_882",
    source: "Player's Handbook",
    categories: ["Rod of First Blood +5", "ID_FMP_MAGIC_ITEM_882"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of First Blood +6"] = new engine.RulesElement({
    name: "Rod of First Blood +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_883",
    source: "Player's Handbook",
    categories: ["Rod of First Blood +6", "ID_FMP_MAGIC_ITEM_883"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Harvest +3"] = new engine.RulesElement({
    name: "Rod of Harvest +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_884",
    source: "Player's Handbook",
    categories: ["Rod of Harvest +3", "ID_FMP_MAGIC_ITEM_884"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Harvest +4"] = new engine.RulesElement({
    name: "Rod of Harvest +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_885",
    source: "Player's Handbook",
    categories: ["Rod of Harvest +4", "ID_FMP_MAGIC_ITEM_885"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Harvest +5"] = new engine.RulesElement({
    name: "Rod of Harvest +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_886",
    source: "Player's Handbook",
    categories: ["Rod of Harvest +5", "ID_FMP_MAGIC_ITEM_886"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Harvest +6"] = new engine.RulesElement({
    name: "Rod of Harvest +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_887",
    source: "Player's Handbook",
    categories: ["Rod of Harvest +6", "ID_FMP_MAGIC_ITEM_887"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Reaving +1"] = new engine.RulesElement({
    name: "Rod of Reaving +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_893",
    source: "Player's Handbook",
    categories: ["Rod of Reaving +1", "ID_FMP_MAGIC_ITEM_893"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Reaving +2"] = new engine.RulesElement({
    name: "Rod of Reaving +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_894",
    source: "Player's Handbook",
    categories: ["Rod of Reaving +2", "ID_FMP_MAGIC_ITEM_894"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Reaving +3"] = new engine.RulesElement({
    name: "Rod of Reaving +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_895",
    source: "Player's Handbook",
    categories: ["Rod of Reaving +3", "ID_FMP_MAGIC_ITEM_895"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Reaving +4"] = new engine.RulesElement({
    name: "Rod of Reaving +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_896",
    source: "Player's Handbook",
    categories: ["Rod of Reaving +4", "ID_FMP_MAGIC_ITEM_896"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Reaving +5"] = new engine.RulesElement({
    name: "Rod of Reaving +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_897",
    source: "Player's Handbook",
    categories: ["Rod of Reaving +5", "ID_FMP_MAGIC_ITEM_897"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Reaving +6"] = new engine.RulesElement({
    name: "Rod of Reaving +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_898",
    source: "Player's Handbook",
    categories: ["Rod of Reaving +6", "ID_FMP_MAGIC_ITEM_898"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of the Pyre +2"] = new engine.RulesElement({
    name: "Rod of the Pyre +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_888",
    source: "Player's Handbook",
    categories: ["Rod of the Pyre +2", "ID_FMP_MAGIC_ITEM_888"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of the Pyre +3"] = new engine.RulesElement({
    name: "Rod of the Pyre +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_889",
    source: "Player's Handbook",
    categories: ["Rod of the Pyre +3", "ID_FMP_MAGIC_ITEM_889"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of the Pyre +4"] = new engine.RulesElement({
    name: "Rod of the Pyre +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_890",
    source: "Player's Handbook",
    categories: ["Rod of the Pyre +4", "ID_FMP_MAGIC_ITEM_890"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of the Pyre +5"] = new engine.RulesElement({
    name: "Rod of the Pyre +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_891",
    source: "Player's Handbook",
    categories: ["Rod of the Pyre +5", "ID_FMP_MAGIC_ITEM_891"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of the Pyre +6"] = new engine.RulesElement({
    name: "Rod of the Pyre +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_892",
    source: "Player's Handbook",
    categories: ["Rod of the Pyre +6", "ID_FMP_MAGIC_ITEM_892"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rogue's Gloves (paragon tier)"] = new engine.RulesElement({
    name: "Rogue's Gloves (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1004",
    source: "Player's Handbook",
    categories: ["Rogue's Gloves (paragon tier)", "ID_FMP_MAGIC_ITEM_1004"],
    rules: function(model) {
      model.statadd("Thievery Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rope of Climbing (heroic tier)"] = new engine.RulesElement({
    name: "Rope of Climbing (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1134",
    source: "Player's Handbook",
    categories: ["Rope of Climbing (heroic tier)", "ID_FMP_MAGIC_ITEM_1134"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Safewing Amulet +1"] = new engine.RulesElement({
    name: "Safewing Amulet +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1082",
    source: "Player's Handbook",
    categories: ["Safewing Amulet +1", "ID_FMP_MAGIC_ITEM_1082"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 1, "Enhancement");
      model.statadd("Reflex Defense", 1, "Enhancement");
      model.statadd("Will Defense", 1, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Safewing Amulet +2"] = new engine.RulesElement({
    name: "Safewing Amulet +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1083",
    source: "Player's Handbook",
    categories: ["Safewing Amulet +2", "ID_FMP_MAGIC_ITEM_1083"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Safewing Amulet +3"] = new engine.RulesElement({
    name: "Safewing Amulet +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1084",
    source: "Player's Handbook",
    categories: ["Safewing Amulet +3", "ID_FMP_MAGIC_ITEM_1084"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Safewing Amulet +4"] = new engine.RulesElement({
    name: "Safewing Amulet +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1085",
    source: "Player's Handbook",
    categories: ["Safewing Amulet +4", "ID_FMP_MAGIC_ITEM_1085"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Safewing Amulet +5"] = new engine.RulesElement({
    name: "Safewing Amulet +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1086",
    source: "Player's Handbook",
    categories: ["Safewing Amulet +5", "ID_FMP_MAGIC_ITEM_1086"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Safewing Amulet +6"] = new engine.RulesElement({
    name: "Safewing Amulet +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1087",
    source: "Player's Handbook",
    categories: ["Safewing Amulet +6", "ID_FMP_MAGIC_ITEM_1087"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scarab of Invulnerability +6"] = new engine.RulesElement({
    name: "Scarab of Invulnerability +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1088",
    source: "Player's Handbook",
    categories: ["Scarab of Invulnerability +6", "ID_FMP_MAGIC_ITEM_1088"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sending Stones (pair) (paragon tier)"] = new engine.RulesElement({
    name: "Sending Stones (pair) (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1135",
    source: "Player's Handbook",
    categories: ["Sending Stones (pair) (paragon tier)", "ID_FMP_MAGIC_ITEM_1135"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowfell Gloves (epic tier)"] = new engine.RulesElement({
    name: "Shadowfell Gloves (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1007",
    source: "Player's Handbook",
    categories: ["Shadowfell Gloves (epic tier)", "ID_FMP_MAGIC_ITEM_1007"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowfell Gloves (heroic tier)"] = new engine.RulesElement({
    name: "Shadowfell Gloves (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1005",
    source: "Player's Handbook",
    categories: ["Shadowfell Gloves (heroic tier)", "ID_FMP_MAGIC_ITEM_1005"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowfell Gloves (paragon tier)"] = new engine.RulesElement({
    name: "Shadowfell Gloves (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1006",
    source: "Player's Handbook",
    categories: ["Shadowfell Gloves (paragon tier)", "ID_FMP_MAGIC_ITEM_1006"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowflow Armor +3"] = new engine.RulesElement({
    name: "Shadowflow Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_629",
    source: "Player's Handbook",
    categories: ["Shadowflow Armor +3", "ID_FMP_MAGIC_ITEM_629"],
    rules: function(model) {
      model.statadd("Stealth Misc", 3);
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowflow Armor +4"] = new engine.RulesElement({
    name: "Shadowflow Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_630",
    source: "Player's Handbook",
    categories: ["Shadowflow Armor +4", "ID_FMP_MAGIC_ITEM_630"],
    rules: function(model) {
      model.statadd("Stealth Misc", 4);
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowflow Armor +5"] = new engine.RulesElement({
    name: "Shadowflow Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_631",
    source: "Player's Handbook",
    categories: ["Shadowflow Armor +5", "ID_FMP_MAGIC_ITEM_631"],
    rules: function(model) {
      model.statadd("Stealth Misc", 5);
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowflow Armor +6"] = new engine.RulesElement({
    name: "Shadowflow Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_632",
    source: "Player's Handbook",
    categories: ["Shadowflow Armor +6", "ID_FMP_MAGIC_ITEM_632"],
    rules: function(model) {
      model.statadd("Stealth Misc", 6);
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shield of Defiance (epic tier)"] = new engine.RulesElement({
    name: "Shield of Defiance (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_977",
    source: "Player's Handbook",
    categories: ["Shield of Defiance (epic tier)", "ID_FMP_MAGIC_ITEM_977"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shield of Defiance (heroic tier)"] = new engine.RulesElement({
    name: "Shield of Defiance (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_975",
    source: "Player's Handbook",
    categories: ["Shield of Defiance (heroic tier)", "ID_FMP_MAGIC_ITEM_975"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shield of Defiance (paragon tier)"] = new engine.RulesElement({
    name: "Shield of Defiance (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_976",
    source: "Player's Handbook",
    categories: ["Shield of Defiance (paragon tier)", "ID_FMP_MAGIC_ITEM_976"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shield of Deflection (epic tier)"] = new engine.RulesElement({
    name: "Shield of Deflection (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_979",
    source: "Player's Handbook",
    categories: ["Shield of Deflection (epic tier)", "ID_FMP_MAGIC_ITEM_979"],
    rules: function(model) {
      model.statadd("Shield of Deflection (epic tier)", 10);
      model.statadd("resist:ranged", function() { return model.stat("Shield of Deflection (epic tier)"); }, "resist");
      model.statadd("resist:area", function() { return model.stat("Shield of Deflection (epic tier)"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shield of Deflection (paragon tier)"] = new engine.RulesElement({
    name: "Shield of Deflection (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_978",
    source: "Player's Handbook",
    categories: ["Shield of Deflection (paragon tier)", "ID_FMP_MAGIC_ITEM_978"],
    rules: function(model) {
      model.statadd("Shield of Deflection (paragon tier)", 5);
      model.statadd("resist:ranged", function() { return model.stat("Shield of Deflection (paragon tier)"); }, "resist");
      model.statadd("resist:area", function() { return model.stat("Shield of Deflection (paragon tier)"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shield of Protection (epic tier)"] = new engine.RulesElement({
    name: "Shield of Protection (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_982",
    source: "Player's Handbook",
    categories: ["Shield of Protection (epic tier)", "ID_FMP_MAGIC_ITEM_982"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shield of Protection (heroic tier)"] = new engine.RulesElement({
    name: "Shield of Protection (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_980",
    source: "Player's Handbook",
    categories: ["Shield of Protection (heroic tier)", "ID_FMP_MAGIC_ITEM_980"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shield of Protection (paragon tier)"] = new engine.RulesElement({
    name: "Shield of Protection (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_981",
    source: "Player's Handbook",
    categories: ["Shield of Protection (paragon tier)", "ID_FMP_MAGIC_ITEM_981"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shield of Warding (epic tier)"] = new engine.RulesElement({
    name: "Shield of Warding (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_984",
    source: "Player's Handbook",
    categories: ["Shield of Warding (epic tier)", "ID_FMP_MAGIC_ITEM_984"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shield of Warding (paragon tier)"] = new engine.RulesElement({
    name: "Shield of Warding (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_983",
    source: "Player's Handbook",
    categories: ["Shield of Warding (paragon tier)", "ID_FMP_MAGIC_ITEM_983"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulforged Armor +4"] = new engine.RulesElement({
    name: "Soulforged Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_639",
    source: "Player's Handbook",
    categories: ["Soulforged Armor +4", "ID_FMP_MAGIC_ITEM_639"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulforged Armor +5"] = new engine.RulesElement({
    name: "Soulforged Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_640",
    source: "Player's Handbook",
    categories: ["Soulforged Armor +5", "ID_FMP_MAGIC_ITEM_640"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulforged Armor +6"] = new engine.RulesElement({
    name: "Soulforged Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_641",
    source: "Player's Handbook",
    categories: ["Soulforged Armor +6", "ID_FMP_MAGIC_ITEM_641"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Fiery Might +1"] = new engine.RulesElement({
    name: "Staff of Fiery Might +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_906",
    source: "Player's Handbook",
    categories: ["Staff of Fiery Might +1", "ID_FMP_MAGIC_ITEM_906"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Fiery Might +2"] = new engine.RulesElement({
    name: "Staff of Fiery Might +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_907",
    source: "Player's Handbook",
    categories: ["Staff of Fiery Might +2", "ID_FMP_MAGIC_ITEM_907"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Fiery Might +3"] = new engine.RulesElement({
    name: "Staff of Fiery Might +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_908",
    source: "Player's Handbook",
    categories: ["Staff of Fiery Might +3", "ID_FMP_MAGIC_ITEM_908"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Fiery Might +4"] = new engine.RulesElement({
    name: "Staff of Fiery Might +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_909",
    source: "Player's Handbook",
    categories: ["Staff of Fiery Might +4", "ID_FMP_MAGIC_ITEM_909"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Fiery Might +5"] = new engine.RulesElement({
    name: "Staff of Fiery Might +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_910",
    source: "Player's Handbook",
    categories: ["Staff of Fiery Might +5", "ID_FMP_MAGIC_ITEM_910"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Fiery Might +6"] = new engine.RulesElement({
    name: "Staff of Fiery Might +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_911",
    source: "Player's Handbook",
    categories: ["Staff of Fiery Might +6", "ID_FMP_MAGIC_ITEM_911"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Power +4"] = new engine.RulesElement({
    name: "Staff of Power +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_912",
    source: "Player's Handbook",
    categories: ["Staff of Power +4", "ID_FMP_MAGIC_ITEM_912"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Power +5"] = new engine.RulesElement({
    name: "Staff of Power +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_913",
    source: "Player's Handbook",
    categories: ["Staff of Power +5", "ID_FMP_MAGIC_ITEM_913"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Power +6"] = new engine.RulesElement({
    name: "Staff of Power +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_915",
    source: "Player's Handbook",
    categories: ["Staff of Power +6", "ID_FMP_MAGIC_ITEM_915"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Storms +1"] = new engine.RulesElement({
    name: "Staff of Storms +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_916",
    source: "Player's Handbook",
    categories: ["Staff of Storms +1", "ID_FMP_MAGIC_ITEM_916"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Storms +2"] = new engine.RulesElement({
    name: "Staff of Storms +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_917",
    source: "Player's Handbook",
    categories: ["Staff of Storms +2", "ID_FMP_MAGIC_ITEM_917"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Storms +3"] = new engine.RulesElement({
    name: "Staff of Storms +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_918",
    source: "Player's Handbook",
    categories: ["Staff of Storms +3", "ID_FMP_MAGIC_ITEM_918"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Storms +4"] = new engine.RulesElement({
    name: "Staff of Storms +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_919",
    source: "Player's Handbook",
    categories: ["Staff of Storms +4", "ID_FMP_MAGIC_ITEM_919"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Storms +5"] = new engine.RulesElement({
    name: "Staff of Storms +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_920",
    source: "Player's Handbook",
    categories: ["Staff of Storms +5", "ID_FMP_MAGIC_ITEM_920"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Storms +6"] = new engine.RulesElement({
    name: "Staff of Storms +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_921",
    source: "Player's Handbook",
    categories: ["Staff of Storms +6", "ID_FMP_MAGIC_ITEM_921"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the War Mage +1"] = new engine.RulesElement({
    name: "Staff of the War Mage +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_922",
    source: "Player's Handbook",
    categories: ["Staff of the War Mage +1", "ID_FMP_MAGIC_ITEM_922"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the War Mage +2"] = new engine.RulesElement({
    name: "Staff of the War Mage +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_923",
    source: "Player's Handbook",
    categories: ["Staff of the War Mage +2", "ID_FMP_MAGIC_ITEM_923"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the War Mage +3"] = new engine.RulesElement({
    name: "Staff of the War Mage +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_924",
    source: "Player's Handbook",
    categories: ["Staff of the War Mage +3", "ID_FMP_MAGIC_ITEM_924"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the War Mage +4"] = new engine.RulesElement({
    name: "Staff of the War Mage +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_925",
    source: "Player's Handbook",
    categories: ["Staff of the War Mage +4", "ID_FMP_MAGIC_ITEM_925"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the War Mage +5"] = new engine.RulesElement({
    name: "Staff of the War Mage +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_926",
    source: "Player's Handbook",
    categories: ["Staff of the War Mage +5", "ID_FMP_MAGIC_ITEM_926"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the War Mage +6"] = new engine.RulesElement({
    name: "Staff of the War Mage +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_927",
    source: "Player's Handbook",
    categories: ["Staff of the War Mage +6", "ID_FMP_MAGIC_ITEM_927"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Winter +1"] = new engine.RulesElement({
    name: "Staff of Winter +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_928",
    source: "Player's Handbook",
    categories: ["Staff of Winter +1", "ID_FMP_MAGIC_ITEM_928"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Winter +2"] = new engine.RulesElement({
    name: "Staff of Winter +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_929",
    source: "Player's Handbook",
    categories: ["Staff of Winter +2", "ID_FMP_MAGIC_ITEM_929"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Winter +3"] = new engine.RulesElement({
    name: "Staff of Winter +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_930",
    source: "Player's Handbook",
    categories: ["Staff of Winter +3", "ID_FMP_MAGIC_ITEM_930"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Winter +4"] = new engine.RulesElement({
    name: "Staff of Winter +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_931",
    source: "Player's Handbook",
    categories: ["Staff of Winter +4", "ID_FMP_MAGIC_ITEM_931"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Winter +5"] = new engine.RulesElement({
    name: "Staff of Winter +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_932",
    source: "Player's Handbook",
    categories: ["Staff of Winter +5", "ID_FMP_MAGIC_ITEM_932"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Winter +6"] = new engine.RulesElement({
    name: "Staff of Winter +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_933",
    source: "Player's Handbook",
    categories: ["Staff of Winter +6", "ID_FMP_MAGIC_ITEM_933"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Star Opal Ring (epic tier)"] = new engine.RulesElement({
    name: "Star Opal Ring (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1101",
    source: "Player's Handbook",
    categories: ["Star Opal Ring (epic tier)", "ID_FMP_MAGIC_ITEM_1101"],
    rules: function(model) {
      model.statadd("Speed", 1, "item");
      model.grant(model.elements.id["ID_FMP_POWER_2812"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stormwalker's Cloak +3"] = new engine.RulesElement({
    name: "Stormwalker's Cloak +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1089",
    source: "Player's Handbook",
    categories: ["Stormwalker's Cloak +3", "ID_FMP_MAGIC_ITEM_1089"],
    rules: function(model) {
      model.statadd("Stormwalker's Cloak +3", 10, "Stormwalker's Cloak +3");
      model.statadd("resist:lightning", function() { return model.stat("Stormwalker's Cloak +3"); }, "resist");
      model.statadd("Stormwalker's Cloak +3", 10, "Stormwalker's Cloak +3");
      model.statadd("resist:thunder", function() { return model.stat("Stormwalker's Cloak +3"); }, "resist");
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stormwalker's Cloak +4"] = new engine.RulesElement({
    name: "Stormwalker's Cloak +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1090",
    source: "Player's Handbook",
    categories: ["Stormwalker's Cloak +4", "ID_FMP_MAGIC_ITEM_1090"],
    rules: function(model) {
      model.statadd("Stormwalker's Cloak +4", 10, "Stormwalker's Cloak +4");
      model.statadd("resist:lightning", function() { return model.stat("Stormwalker's Cloak +4"); }, "resist");
      model.statadd("Stormwalker's Cloak +4", 10, "Stormwalker's Cloak +4");
      model.statadd("resist:thunder", function() { return model.stat("Stormwalker's Cloak +4"); }, "resist");
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stormwalker's Cloak +5"] = new engine.RulesElement({
    name: "Stormwalker's Cloak +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1091",
    source: "Player's Handbook",
    categories: ["Stormwalker's Cloak +5", "ID_FMP_MAGIC_ITEM_1091"],
    rules: function(model) {
      model.statadd("Stormwalker's Cloak +5", 15, "Stormwalker's Cloak +5");
      model.statadd("resist:lightning", function() { return model.stat("Stormwalker's Cloak +5"); }, "resist");
      model.statadd("Stormwalker's Cloak +5", 15, "Stormwalker's Cloak +5");
      model.statadd("resist:thunder", function() { return model.stat("Stormwalker's Cloak +5"); }, "resist");
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stormwalker's Cloak +6"] = new engine.RulesElement({
    name: "Stormwalker's Cloak +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1092",
    source: "Player's Handbook",
    categories: ["Stormwalker's Cloak +6", "ID_FMP_MAGIC_ITEM_1092"],
    rules: function(model) {
      model.statadd("Stormwalker's Cloak +6", 15, "Stormwalker's Cloak +6");
      model.statadd("resist:lightning", function() { return model.stat("Stormwalker's Cloak +6"); }, "resist");
      model.statadd("Stormwalker's Cloak +6", 15, "Stormwalker's Cloak +6");
      model.statadd("resist:thunder", function() { return model.stat("Stormwalker's Cloak +6"); }, "resist");
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sunleaf Armor +2"] = new engine.RulesElement({
    name: "Sunleaf Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_643",
    source: "Player's Handbook",
    categories: ["Sunleaf Armor +2", "ID_FMP_MAGIC_ITEM_643"],
    rules: function(model) {
      model.statadd("Sunleaf Armor +2", 5, "Sunleaf Armor +2");
      model.statadd("resist:radiant", function() { return model.stat("Sunleaf Armor +2"); }, "resist");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sunleaf Armor +3"] = new engine.RulesElement({
    name: "Sunleaf Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_644",
    source: "Player's Handbook",
    categories: ["Sunleaf Armor +3", "ID_FMP_MAGIC_ITEM_644"],
    rules: function(model) {
      model.statadd("Sunleaf Armor +3", 5, "Sunleaf Armor +3");
      model.statadd("resist:radiant", function() { return model.stat("Sunleaf Armor +3"); }, "resist");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sunleaf Armor +4"] = new engine.RulesElement({
    name: "Sunleaf Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_645",
    source: "Player's Handbook",
    categories: ["Sunleaf Armor +4", "ID_FMP_MAGIC_ITEM_645"],
    rules: function(model) {
      model.statadd("Sunleaf Armor +4", 10, "Sunleaf Armor +4");
      model.statadd("resist:radiant", function() { return model.stat("Sunleaf Armor +4"); }, "resist");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sunleaf Armor +5"] = new engine.RulesElement({
    name: "Sunleaf Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_646",
    source: "Player's Handbook",
    categories: ["Sunleaf Armor +5", "ID_FMP_MAGIC_ITEM_646"],
    rules: function(model) {
      model.statadd("Sunleaf Armor +5", 10, "Sunleaf Armor +5");
      model.statadd("resist:radiant", function() { return model.stat("Sunleaf Armor +5"); }, "resist");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sunleaf Armor +6"] = new engine.RulesElement({
    name: "Sunleaf Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_647",
    source: "Player's Handbook",
    categories: ["Sunleaf Armor +6", "ID_FMP_MAGIC_ITEM_647"],
    rules: function(model) {
      model.statadd("Sunleaf Armor +6", 15, "Sunleaf Armor +6");
      model.statadd("resist:radiant", function() { return model.stat("Sunleaf Armor +6"); }, "resist");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sylvan Armor +1"] = new engine.RulesElement({
    name: "Sylvan Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_648",
    source: "Player's Handbook",
    categories: ["Sylvan Armor +1", "ID_FMP_MAGIC_ITEM_648"],
    rules: function(model) {
      model.statadd("Athletics Misc", 1, "item");
      model.statadd("Stealth Misc", 1, "item");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sylvan Armor +2"] = new engine.RulesElement({
    name: "Sylvan Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_649",
    source: "Player's Handbook",
    categories: ["Sylvan Armor +2", "ID_FMP_MAGIC_ITEM_649"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "item");
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sylvan Armor +3"] = new engine.RulesElement({
    name: "Sylvan Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_650",
    source: "Player's Handbook",
    categories: ["Sylvan Armor +3", "ID_FMP_MAGIC_ITEM_650"],
    rules: function(model) {
      model.statadd("Athletics Misc", 3, "item");
      model.statadd("Stealth Misc", 3, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sylvan Armor +4"] = new engine.RulesElement({
    name: "Sylvan Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_651",
    source: "Player's Handbook",
    categories: ["Sylvan Armor +4", "ID_FMP_MAGIC_ITEM_651"],
    rules: function(model) {
      model.statadd("Athletics Misc", 4, "item");
      model.statadd("Stealth Misc", 4, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sylvan Armor +5"] = new engine.RulesElement({
    name: "Sylvan Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_652",
    source: "Player's Handbook",
    categories: ["Sylvan Armor +5", "ID_FMP_MAGIC_ITEM_652"],
    rules: function(model) {
      model.statadd("Athletics Misc", 5, "item");
      model.statadd("Stealth Misc", 5, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sylvan Armor +6"] = new engine.RulesElement({
    name: "Sylvan Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_653",
    source: "Player's Handbook",
    categories: ["Sylvan Armor +6", "ID_FMP_MAGIC_ITEM_653"],
    rules: function(model) {
      model.statadd("Athletics Misc", 6, "item");
      model.statadd("Stealth Misc", 6, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Battle +1"] = new engine.RulesElement({
    name: "Symbol of Battle +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_794",
    source: "Player's Handbook",
    categories: ["Symbol of Battle +1", "ID_FMP_MAGIC_ITEM_794"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Battle +2"] = new engine.RulesElement({
    name: "Symbol of Battle +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_795",
    source: "Player's Handbook",
    categories: ["Symbol of Battle +2", "ID_FMP_MAGIC_ITEM_795"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Battle +3"] = new engine.RulesElement({
    name: "Symbol of Battle +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_796",
    source: "Player's Handbook",
    categories: ["Symbol of Battle +3", "ID_FMP_MAGIC_ITEM_796"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Battle +4"] = new engine.RulesElement({
    name: "Symbol of Battle +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_797",
    source: "Player's Handbook",
    categories: ["Symbol of Battle +4", "ID_FMP_MAGIC_ITEM_797"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Battle +5"] = new engine.RulesElement({
    name: "Symbol of Battle +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_798",
    source: "Player's Handbook",
    categories: ["Symbol of Battle +5", "ID_FMP_MAGIC_ITEM_798"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Battle +6"] = new engine.RulesElement({
    name: "Symbol of Battle +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_799",
    source: "Player's Handbook",
    categories: ["Symbol of Battle +6", "ID_FMP_MAGIC_ITEM_799"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Hope +1"] = new engine.RulesElement({
    name: "Symbol of Hope +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_810",
    source: "Player's Handbook",
    categories: ["Symbol of Hope +1", "ID_FMP_MAGIC_ITEM_810"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Hope +2"] = new engine.RulesElement({
    name: "Symbol of Hope +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_811",
    source: "Player's Handbook",
    categories: ["Symbol of Hope +2", "ID_FMP_MAGIC_ITEM_811"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Hope +3"] = new engine.RulesElement({
    name: "Symbol of Hope +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_812",
    source: "Player's Handbook",
    categories: ["Symbol of Hope +3", "ID_FMP_MAGIC_ITEM_812"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Hope +4"] = new engine.RulesElement({
    name: "Symbol of Hope +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_813",
    source: "Player's Handbook",
    categories: ["Symbol of Hope +4", "ID_FMP_MAGIC_ITEM_813"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Hope +5"] = new engine.RulesElement({
    name: "Symbol of Hope +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_814",
    source: "Player's Handbook",
    categories: ["Symbol of Hope +5", "ID_FMP_MAGIC_ITEM_814"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Hope +6"] = new engine.RulesElement({
    name: "Symbol of Hope +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_815",
    source: "Player's Handbook",
    categories: ["Symbol of Hope +6", "ID_FMP_MAGIC_ITEM_815"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Life +1"] = new engine.RulesElement({
    name: "Symbol of Life +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_816",
    source: "Player's Handbook",
    categories: ["Symbol of Life +1", "ID_FMP_MAGIC_ITEM_816"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Life +2"] = new engine.RulesElement({
    name: "Symbol of Life +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_817",
    source: "Player's Handbook",
    categories: ["Symbol of Life +2", "ID_FMP_MAGIC_ITEM_817"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Life +3"] = new engine.RulesElement({
    name: "Symbol of Life +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_818",
    source: "Player's Handbook",
    categories: ["Symbol of Life +3", "ID_FMP_MAGIC_ITEM_818"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Life +4"] = new engine.RulesElement({
    name: "Symbol of Life +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_819",
    source: "Player's Handbook",
    categories: ["Symbol of Life +4", "ID_FMP_MAGIC_ITEM_819"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Life +5"] = new engine.RulesElement({
    name: "Symbol of Life +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_820",
    source: "Player's Handbook",
    categories: ["Symbol of Life +5", "ID_FMP_MAGIC_ITEM_820"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Life +6"] = new engine.RulesElement({
    name: "Symbol of Life +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_821",
    source: "Player's Handbook",
    categories: ["Symbol of Life +6", "ID_FMP_MAGIC_ITEM_821"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Power +2"] = new engine.RulesElement({
    name: "Symbol of Power +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_805",
    source: "Player's Handbook",
    categories: ["Symbol of Power +2", "ID_FMP_MAGIC_ITEM_805"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Power +3"] = new engine.RulesElement({
    name: "Symbol of Power +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_806",
    source: "Player's Handbook",
    categories: ["Symbol of Power +3", "ID_FMP_MAGIC_ITEM_806"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Power +4"] = new engine.RulesElement({
    name: "Symbol of Power +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_807",
    source: "Player's Handbook",
    categories: ["Symbol of Power +4", "ID_FMP_MAGIC_ITEM_807"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Power +5"] = new engine.RulesElement({
    name: "Symbol of Power +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_808",
    source: "Player's Handbook",
    categories: ["Symbol of Power +5", "ID_FMP_MAGIC_ITEM_808"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Power +6"] = new engine.RulesElement({
    name: "Symbol of Power +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_809",
    source: "Player's Handbook",
    categories: ["Symbol of Power +6", "ID_FMP_MAGIC_ITEM_809"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Radiance +5"] = new engine.RulesElement({
    name: "Symbol of Radiance +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_822",
    source: "Player's Handbook",
    categories: ["Symbol of Radiance +5", "ID_FMP_MAGIC_ITEM_822"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Radiance +6"] = new engine.RulesElement({
    name: "Symbol of Radiance +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_823",
    source: "Player's Handbook",
    categories: ["Symbol of Radiance +6", "ID_FMP_MAGIC_ITEM_823"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Victory +2"] = new engine.RulesElement({
    name: "Symbol of Victory +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_824",
    source: "Player's Handbook",
    categories: ["Symbol of Victory +2", "ID_FMP_MAGIC_ITEM_824"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Victory +3"] = new engine.RulesElement({
    name: "Symbol of Victory +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_825",
    source: "Player's Handbook",
    categories: ["Symbol of Victory +3", "ID_FMP_MAGIC_ITEM_825"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Victory +4"] = new engine.RulesElement({
    name: "Symbol of Victory +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_826",
    source: "Player's Handbook",
    categories: ["Symbol of Victory +4", "ID_FMP_MAGIC_ITEM_826"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Victory +5"] = new engine.RulesElement({
    name: "Symbol of Victory +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_827",
    source: "Player's Handbook",
    categories: ["Symbol of Victory +5", "ID_FMP_MAGIC_ITEM_827"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Victory +6"] = new engine.RulesElement({
    name: "Symbol of Victory +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_828",
    source: "Player's Handbook",
    categories: ["Symbol of Victory +6", "ID_FMP_MAGIC_ITEM_828"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Terror Weapon +1"] = new engine.RulesElement({
    name: "Terror Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_763",
    source: "Player's Handbook",
    categories: ["Terror Weapon +1", "ID_FMP_MAGIC_ITEM_763"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Terror Weapon +2"] = new engine.RulesElement({
    name: "Terror Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_764",
    source: "Player's Handbook",
    categories: ["Terror Weapon +2", "ID_FMP_MAGIC_ITEM_764"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Terror Weapon +3"] = new engine.RulesElement({
    name: "Terror Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_765",
    source: "Player's Handbook",
    categories: ["Terror Weapon +3", "ID_FMP_MAGIC_ITEM_765"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Terror Weapon +4"] = new engine.RulesElement({
    name: "Terror Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_766",
    source: "Player's Handbook",
    categories: ["Terror Weapon +4", "ID_FMP_MAGIC_ITEM_766"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Terror Weapon +5"] = new engine.RulesElement({
    name: "Terror Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_767",
    source: "Player's Handbook",
    categories: ["Terror Weapon +5", "ID_FMP_MAGIC_ITEM_767"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Terror Weapon +6"] = new engine.RulesElement({
    name: "Terror Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_768",
    source: "Player's Handbook",
    categories: ["Terror Weapon +6", "ID_FMP_MAGIC_ITEM_768"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thunderburst Weapon +1"] = new engine.RulesElement({
    name: "Thunderburst Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_769",
    source: "Player's Handbook",
    categories: ["Thunderburst Weapon +1", "ID_FMP_MAGIC_ITEM_769"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2833"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thunderburst Weapon +2"] = new engine.RulesElement({
    name: "Thunderburst Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_770",
    source: "Player's Handbook",
    categories: ["Thunderburst Weapon +2", "ID_FMP_MAGIC_ITEM_770"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2833"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thunderburst Weapon +3"] = new engine.RulesElement({
    name: "Thunderburst Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_771",
    source: "Player's Handbook",
    categories: ["Thunderburst Weapon +3", "ID_FMP_MAGIC_ITEM_771"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2833"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thunderburst Weapon +4"] = new engine.RulesElement({
    name: "Thunderburst Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_772",
    source: "Player's Handbook",
    categories: ["Thunderburst Weapon +4", "ID_FMP_MAGIC_ITEM_772"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2833"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thunderburst Weapon +5"] = new engine.RulesElement({
    name: "Thunderburst Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_773",
    source: "Player's Handbook",
    categories: ["Thunderburst Weapon +5", "ID_FMP_MAGIC_ITEM_773"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2833"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thunderburst Weapon +6"] = new engine.RulesElement({
    name: "Thunderburst Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_774",
    source: "Player's Handbook",
    categories: ["Thunderburst Weapon +6", "ID_FMP_MAGIC_ITEM_774"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2833"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thundering Weapon +1"] = new engine.RulesElement({
    name: "Thundering Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_775",
    source: "Player's Handbook",
    categories: ["Thundering Weapon +1", "ID_FMP_MAGIC_ITEM_775"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thundering Weapon +2"] = new engine.RulesElement({
    name: "Thundering Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_776",
    source: "Player's Handbook",
    categories: ["Thundering Weapon +2", "ID_FMP_MAGIC_ITEM_776"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thundering Weapon +3"] = new engine.RulesElement({
    name: "Thundering Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_777",
    source: "Player's Handbook",
    categories: ["Thundering Weapon +3", "ID_FMP_MAGIC_ITEM_777"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thundering Weapon +4"] = new engine.RulesElement({
    name: "Thundering Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_778",
    source: "Player's Handbook",
    categories: ["Thundering Weapon +4", "ID_FMP_MAGIC_ITEM_778"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thundering Weapon +5"] = new engine.RulesElement({
    name: "Thundering Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_779",
    source: "Player's Handbook",
    categories: ["Thundering Weapon +5", "ID_FMP_MAGIC_ITEM_779"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thundering Weapon +6"] = new engine.RulesElement({
    name: "Thundering Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_780",
    source: "Player's Handbook",
    categories: ["Thundering Weapon +6", "ID_FMP_MAGIC_ITEM_780"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thunderwave Staff +2"] = new engine.RulesElement({
    name: "Thunderwave Staff +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_934",
    source: "Player's Handbook",
    categories: ["Thunderwave Staff +2", "ID_FMP_MAGIC_ITEM_934"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thunderwave Staff +3"] = new engine.RulesElement({
    name: "Thunderwave Staff +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_935",
    source: "Player's Handbook",
    categories: ["Thunderwave Staff +3", "ID_FMP_MAGIC_ITEM_935"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thunderwave Staff +4"] = new engine.RulesElement({
    name: "Thunderwave Staff +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_936",
    source: "Player's Handbook",
    categories: ["Thunderwave Staff +4", "ID_FMP_MAGIC_ITEM_936"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thunderwave Staff +5"] = new engine.RulesElement({
    name: "Thunderwave Staff +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_937",
    source: "Player's Handbook",
    categories: ["Thunderwave Staff +5", "ID_FMP_MAGIC_ITEM_937"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thunderwave Staff +6"] = new engine.RulesElement({
    name: "Thunderwave Staff +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_938",
    source: "Player's Handbook",
    categories: ["Thunderwave Staff +6", "ID_FMP_MAGIC_ITEM_938"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tombforged Armor +3"] = new engine.RulesElement({
    name: "Tombforged Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_654",
    source: "Player's Handbook",
    categories: ["Tombforged Armor +3", "ID_FMP_MAGIC_ITEM_654"],
    rules: function(model) {
      model.statadd("Tombforged Armor +3", 10, "Tombforged Armor +3");
      model.statadd("resist:necrotic", function() { return model.stat("Tombforged Armor +3"); }, "resist");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tombforged Armor +4"] = new engine.RulesElement({
    name: "Tombforged Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_655",
    source: "Player's Handbook",
    categories: ["Tombforged Armor +4", "ID_FMP_MAGIC_ITEM_655"],
    rules: function(model) {
      model.statadd("Tombforged Armor +4", 10, "Tombforged Armor +4");
      model.statadd("resist:necrotic", function() { return model.stat("Tombforged Armor +4"); }, "resist");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tombforged Armor +5"] = new engine.RulesElement({
    name: "Tombforged Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_656",
    source: "Player's Handbook",
    categories: ["Tombforged Armor +5", "ID_FMP_MAGIC_ITEM_656"],
    rules: function(model) {
      model.statadd("Tombforged Armor +5", 15, "Tombforged Armor +5");
      model.statadd("resist:necrotic", function() { return model.stat("Tombforged Armor +5"); }, "resist");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tombforged Armor +6"] = new engine.RulesElement({
    name: "Tombforged Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_657",
    source: "Player's Handbook",
    categories: ["Tombforged Armor +6", "ID_FMP_MAGIC_ITEM_657"],
    rules: function(model) {
      model.statadd("Tombforged Armor +6", 15, "Tombforged Armor +6");
      model.statadd("resist:necrotic", function() { return model.stat("Tombforged Armor +6"); }, "resist");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Trollskin Armor +3"] = new engine.RulesElement({
    name: "Trollskin Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_658",
    source: "Player's Handbook",
    categories: ["Trollskin Armor +3", "ID_FMP_MAGIC_ITEM_658"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Trollskin Armor +4"] = new engine.RulesElement({
    name: "Trollskin Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_659",
    source: "Player's Handbook",
    categories: ["Trollskin Armor +4", "ID_FMP_MAGIC_ITEM_659"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Trollskin Armor +5"] = new engine.RulesElement({
    name: "Trollskin Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_660",
    source: "Player's Handbook",
    categories: ["Trollskin Armor +5", "ID_FMP_MAGIC_ITEM_660"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Trollskin Armor +6"] = new engine.RulesElement({
    name: "Trollskin Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_661",
    source: "Player's Handbook",
    categories: ["Trollskin Armor +6", "ID_FMP_MAGIC_ITEM_661"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vicious Weapon +1"] = new engine.RulesElement({
    name: "Vicious Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_781",
    source: "Player's Handbook",
    categories: ["Vicious Weapon +1", "ID_FMP_MAGIC_ITEM_781"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vicious Weapon +2"] = new engine.RulesElement({
    name: "Vicious Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_782",
    source: "Player's Handbook",
    categories: ["Vicious Weapon +2", "ID_FMP_MAGIC_ITEM_782"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vicious Weapon +3"] = new engine.RulesElement({
    name: "Vicious Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_783",
    source: "Player's Handbook",
    categories: ["Vicious Weapon +3", "ID_FMP_MAGIC_ITEM_783"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vicious Weapon +4"] = new engine.RulesElement({
    name: "Vicious Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_784",
    source: "Player's Handbook",
    categories: ["Vicious Weapon +4", "ID_FMP_MAGIC_ITEM_784"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vicious Weapon +5"] = new engine.RulesElement({
    name: "Vicious Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_785",
    source: "Player's Handbook",
    categories: ["Vicious Weapon +5", "ID_FMP_MAGIC_ITEM_785"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vicious Weapon +6"] = new engine.RulesElement({
    name: "Vicious Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_786",
    source: "Player's Handbook",
    categories: ["Vicious Weapon +6", "ID_FMP_MAGIC_ITEM_786"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vorpal Weapon +6"] = new engine.RulesElement({
    name: "Vorpal Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_787",
    source: "Player's Handbook",
    categories: ["Vorpal Weapon +6", "ID_FMP_MAGIC_ITEM_787"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Eldritch Rain +2"] = new engine.RulesElement({
    name: "Wand of Eldritch Rain +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_957",
    source: "Player's Handbook",
    categories: ["Wand of Eldritch Rain +2", "ID_FMP_MAGIC_ITEM_957"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1400"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Eldritch Rain +3"] = new engine.RulesElement({
    name: "Wand of Eldritch Rain +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1153",
    source: "Player's Handbook",
    categories: ["Wand of Eldritch Rain +3", "ID_FMP_MAGIC_ITEM_1153"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1400"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Eldritch Rain +4"] = new engine.RulesElement({
    name: "Wand of Eldritch Rain +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1154",
    source: "Player's Handbook",
    categories: ["Wand of Eldritch Rain +4", "ID_FMP_MAGIC_ITEM_1154"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1400"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Eldritch Rain +5"] = new engine.RulesElement({
    name: "Wand of Eldritch Rain +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1155",
    source: "Player's Handbook",
    categories: ["Wand of Eldritch Rain +5", "ID_FMP_MAGIC_ITEM_1155"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1400"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Eldritch Rain +6"] = new engine.RulesElement({
    name: "Wand of Eldritch Rain +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1156",
    source: "Player's Handbook",
    categories: ["Wand of Eldritch Rain +6", "ID_FMP_MAGIC_ITEM_1156"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1400"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Fiery Bolt +2"] = new engine.RulesElement({
    name: "Wand of Fiery Bolt +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1157",
    source: "Player's Handbook",
    categories: ["Wand of Fiery Bolt +2", "ID_FMP_MAGIC_ITEM_1157"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1341"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Fiery Bolt +3"] = new engine.RulesElement({
    name: "Wand of Fiery Bolt +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1158",
    source: "Player's Handbook",
    categories: ["Wand of Fiery Bolt +3", "ID_FMP_MAGIC_ITEM_1158"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1341"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Fiery Bolt +4"] = new engine.RulesElement({
    name: "Wand of Fiery Bolt +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1159",
    source: "Player's Handbook",
    categories: ["Wand of Fiery Bolt +4", "ID_FMP_MAGIC_ITEM_1159"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1341"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Fiery Bolt +5"] = new engine.RulesElement({
    name: "Wand of Fiery Bolt +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1160",
    source: "Player's Handbook",
    categories: ["Wand of Fiery Bolt +5", "ID_FMP_MAGIC_ITEM_1160"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1341"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Fiery Bolt +6"] = new engine.RulesElement({
    name: "Wand of Fiery Bolt +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1161",
    source: "Player's Handbook",
    categories: ["Wand of Fiery Bolt +6", "ID_FMP_MAGIC_ITEM_1161"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1341"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Fire Burst +3"] = new engine.RulesElement({
    name: "Wand of Fire Burst +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1162",
    source: "Player's Handbook",
    categories: ["Wand of Fire Burst +3", "ID_FMP_MAGIC_ITEM_1162"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_189"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Fire Burst +4"] = new engine.RulesElement({
    name: "Wand of Fire Burst +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1163",
    source: "Player's Handbook",
    categories: ["Wand of Fire Burst +4", "ID_FMP_MAGIC_ITEM_1163"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_189"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Fire Burst +5"] = new engine.RulesElement({
    name: "Wand of Fire Burst +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1164",
    source: "Player's Handbook",
    categories: ["Wand of Fire Burst +5", "ID_FMP_MAGIC_ITEM_1164"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_189"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Fire Burst +6"] = new engine.RulesElement({
    name: "Wand of Fire Burst +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1165",
    source: "Player's Handbook",
    categories: ["Wand of Fire Burst +6", "ID_FMP_MAGIC_ITEM_1165"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_189"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Icy Rays +2"] = new engine.RulesElement({
    name: "Wand of Icy Rays +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1166",
    source: "Player's Handbook",
    categories: ["Wand of Icy Rays +2", "ID_FMP_MAGIC_ITEM_1166"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_435"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Icy Rays +3"] = new engine.RulesElement({
    name: "Wand of Icy Rays +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1167",
    source: "Player's Handbook",
    categories: ["Wand of Icy Rays +3", "ID_FMP_MAGIC_ITEM_1167"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_435"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Icy Rays +4"] = new engine.RulesElement({
    name: "Wand of Icy Rays +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1168",
    source: "Player's Handbook",
    categories: ["Wand of Icy Rays +4", "ID_FMP_MAGIC_ITEM_1168"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_435"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Icy Rays +5"] = new engine.RulesElement({
    name: "Wand of Icy Rays +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1169",
    source: "Player's Handbook",
    categories: ["Wand of Icy Rays +5", "ID_FMP_MAGIC_ITEM_1169"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_435"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Icy Rays +6"] = new engine.RulesElement({
    name: "Wand of Icy Rays +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1170",
    source: "Player's Handbook",
    categories: ["Wand of Icy Rays +6", "ID_FMP_MAGIC_ITEM_1170"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_435"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Ray of Enfeeblement +1"] = new engine.RulesElement({
    name: "Wand of Ray of Enfeeblement +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1171",
    source: "Player's Handbook",
    categories: ["Wand of Ray of Enfeeblement +1", "ID_FMP_MAGIC_ITEM_1171"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_416"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Ray of Enfeeblement +2"] = new engine.RulesElement({
    name: "Wand of Ray of Enfeeblement +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1172",
    source: "Player's Handbook",
    categories: ["Wand of Ray of Enfeeblement +2", "ID_FMP_MAGIC_ITEM_1172"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_416"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Ray of Enfeeblement +3"] = new engine.RulesElement({
    name: "Wand of Ray of Enfeeblement +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1173",
    source: "Player's Handbook",
    categories: ["Wand of Ray of Enfeeblement +3", "ID_FMP_MAGIC_ITEM_1173"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_416"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Ray of Enfeeblement +4"] = new engine.RulesElement({
    name: "Wand of Ray of Enfeeblement +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1174",
    source: "Player's Handbook",
    categories: ["Wand of Ray of Enfeeblement +4", "ID_FMP_MAGIC_ITEM_1174"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_416"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Ray of Enfeeblement +5"] = new engine.RulesElement({
    name: "Wand of Ray of Enfeeblement +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1175",
    source: "Player's Handbook",
    categories: ["Wand of Ray of Enfeeblement +5", "ID_FMP_MAGIC_ITEM_1175"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_416"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Ray of Enfeeblement +6"] = new engine.RulesElement({
    name: "Wand of Ray of Enfeeblement +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1176",
    source: "Player's Handbook",
    categories: ["Wand of Ray of Enfeeblement +6", "ID_FMP_MAGIC_ITEM_1176"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_416"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Shield +2"] = new engine.RulesElement({
    name: "Wand of Shield +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1177",
    source: "Player's Handbook",
    categories: ["Wand of Shield +2", "ID_FMP_MAGIC_ITEM_1177"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1235"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Shield +3"] = new engine.RulesElement({
    name: "Wand of Shield +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1178",
    source: "Player's Handbook",
    categories: ["Wand of Shield +3", "ID_FMP_MAGIC_ITEM_1178"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1235"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Shield +4"] = new engine.RulesElement({
    name: "Wand of Shield +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1179",
    source: "Player's Handbook",
    categories: ["Wand of Shield +4", "ID_FMP_MAGIC_ITEM_1179"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1235"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Shield +5"] = new engine.RulesElement({
    name: "Wand of Shield +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1180",
    source: "Player's Handbook",
    categories: ["Wand of Shield +5", "ID_FMP_MAGIC_ITEM_1180"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1235"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Shield +6"] = new engine.RulesElement({
    name: "Wand of Shield +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1181",
    source: "Player's Handbook",
    categories: ["Wand of Shield +6", "ID_FMP_MAGIC_ITEM_1181"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1235"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Soul Flaying +4"] = new engine.RulesElement({
    name: "Wand of Soul Flaying +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1182",
    source: "Player's Handbook",
    categories: ["Wand of Soul Flaying +4", "ID_FMP_MAGIC_ITEM_1182"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1335"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Soul Flaying +5"] = new engine.RulesElement({
    name: "Wand of Soul Flaying +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1183",
    source: "Player's Handbook",
    categories: ["Wand of Soul Flaying +5", "ID_FMP_MAGIC_ITEM_1183"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Soul Flaying +6"] = new engine.RulesElement({
    name: "Wand of Soul Flaying +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1184",
    source: "Player's Handbook",
    categories: ["Wand of Soul Flaying +6", "ID_FMP_MAGIC_ITEM_1184"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Witchfire +1"] = new engine.RulesElement({
    name: "Wand of Witchfire +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1185",
    source: "Player's Handbook",
    categories: ["Wand of Witchfire +1", "ID_FMP_MAGIC_ITEM_1185"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1459"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Witchfire +2"] = new engine.RulesElement({
    name: "Wand of Witchfire +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1186",
    source: "Player's Handbook",
    categories: ["Wand of Witchfire +2", "ID_FMP_MAGIC_ITEM_1186"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1459"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Witchfire +3"] = new engine.RulesElement({
    name: "Wand of Witchfire +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1187",
    source: "Player's Handbook",
    categories: ["Wand of Witchfire +3", "ID_FMP_MAGIC_ITEM_1187"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1459"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Witchfire +4"] = new engine.RulesElement({
    name: "Wand of Witchfire +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1188",
    source: "Player's Handbook",
    categories: ["Wand of Witchfire +4", "ID_FMP_MAGIC_ITEM_1188"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1459"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Witchfire +5"] = new engine.RulesElement({
    name: "Wand of Witchfire +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1189",
    source: "Player's Handbook",
    categories: ["Wand of Witchfire +5", "ID_FMP_MAGIC_ITEM_1189"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1459"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Witchfire +6"] = new engine.RulesElement({
    name: "Wand of Witchfire +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1190",
    source: "Player's Handbook",
    categories: ["Wand of Witchfire +6", "ID_FMP_MAGIC_ITEM_1190"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1459"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wavestrider Boots (heroic tier)"] = new engine.RulesElement({
    name: "Wavestrider Boots (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_996",
    source: "Player's Handbook",
    categories: ["Wavestrider Boots (heroic tier)", "ID_FMP_MAGIC_ITEM_996"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winged Boots (paragon tier)"] = new engine.RulesElement({
    name: "Winged Boots (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_997",
    source: "Player's Handbook",
    categories: ["Winged Boots (paragon tier)", "ID_FMP_MAGIC_ITEM_997"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
