define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Agile Resolve Vestments +1"] = new engine.RulesElement({
    name: "Agile Resolve Vestments +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4599",
    source: "Player's Handbook 2",
    categories: ["Agile Resolve Vestments +1", "ID_FMP_MAGIC_ITEM_4599"],
    rules: function(model) {
      model.statadd("Reflex Defense", function() { /* while you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Agile Resolve Vestments +2"] = new engine.RulesElement({
    name: "Agile Resolve Vestments +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4600",
    source: "Player's Handbook 2",
    categories: ["Agile Resolve Vestments +2", "ID_FMP_MAGIC_ITEM_4600"],
    rules: function(model) {
      model.statadd("Reflex Defense", function() { /* while you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Agile Resolve Vestments +3"] = new engine.RulesElement({
    name: "Agile Resolve Vestments +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4601",
    source: "Player's Handbook 2",
    categories: ["Agile Resolve Vestments +3", "ID_FMP_MAGIC_ITEM_4601"],
    rules: function(model) {
      model.statadd("Reflex Defense", function() { /* while you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Agile Resolve Vestments +4"] = new engine.RulesElement({
    name: "Agile Resolve Vestments +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4602",
    source: "Player's Handbook 2",
    categories: ["Agile Resolve Vestments +4", "ID_FMP_MAGIC_ITEM_4602"],
    rules: function(model) {
      model.statadd("Reflex Defense", function() { /* while you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Agile Resolve Vestments +5"] = new engine.RulesElement({
    name: "Agile Resolve Vestments +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4603",
    source: "Player's Handbook 2",
    categories: ["Agile Resolve Vestments +5", "ID_FMP_MAGIC_ITEM_4603"],
    rules: function(model) {
      model.statadd("Reflex Defense", function() { /* while you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Agile Resolve Vestments +6"] = new engine.RulesElement({
    name: "Agile Resolve Vestments +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4604",
    source: "Player's Handbook 2",
    categories: ["Agile Resolve Vestments +6", "ID_FMP_MAGIC_ITEM_4604"],
    rules: function(model) {
      model.statadd("Reflex Defense", function() { /* while you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Anstruth Harp +5"] = new engine.RulesElement({
    name: "Anstruth Harp +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4853",
    source: "Player's Handbook 2",
    categories: ["Anstruth Harp +5", "ID_FMP_MAGIC_ITEM_4853"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Astral Fire Armor +1"] = new engine.RulesElement({
    name: "Astral Fire Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4605",
    source: "Player's Handbook 2",
    categories: ["Astral Fire Armor +1", "ID_FMP_MAGIC_ITEM_4605"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Astral Fire Armor +2"] = new engine.RulesElement({
    name: "Astral Fire Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4606",
    source: "Player's Handbook 2",
    categories: ["Astral Fire Armor +2", "ID_FMP_MAGIC_ITEM_4606"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Astral Fire Armor +3"] = new engine.RulesElement({
    name: "Astral Fire Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4607",
    source: "Player's Handbook 2",
    categories: ["Astral Fire Armor +3", "ID_FMP_MAGIC_ITEM_4607"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Astral Fire Armor +4"] = new engine.RulesElement({
    name: "Astral Fire Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4608",
    source: "Player's Handbook 2",
    categories: ["Astral Fire Armor +4", "ID_FMP_MAGIC_ITEM_4608"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Astral Fire Armor +5"] = new engine.RulesElement({
    name: "Astral Fire Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4609",
    source: "Player's Handbook 2",
    categories: ["Astral Fire Armor +5", "ID_FMP_MAGIC_ITEM_4609"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Astral Fire Armor +6"] = new engine.RulesElement({
    name: "Astral Fire Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4610",
    source: "Player's Handbook 2",
    categories: ["Astral Fire Armor +6", "ID_FMP_MAGIC_ITEM_4610"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Autumn Harvest Totem +1"] = new engine.RulesElement({
    name: "Autumn Harvest Totem +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4928",
    source: "Player's Handbook 2",
    categories: ["Autumn Harvest Totem +1", "ID_FMP_MAGIC_ITEM_4928"],
    rules: function(model) {
      model.statadd("damage rolls(Autumn Harvest Totem +1)", function() { /* against bloodied creatures */ return 0; });
      model.statadd("damage rolls(Autumn Harvest Totem +1)", function() { /* against bloodied creatures */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Autumn Harvest Totem +2"] = new engine.RulesElement({
    name: "Autumn Harvest Totem +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4929",
    source: "Player's Handbook 2",
    categories: ["Autumn Harvest Totem +2", "ID_FMP_MAGIC_ITEM_4929"],
    rules: function(model) {
      model.statadd("damage rolls(Autumn Harvest Totem +2)", function() { /* against bloodied creatures */ return 1; });
      model.statadd("damage rolls(Autumn Harvest Totem +2)", function() { /* against bloodied creatures */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Autumn Harvest Totem +3"] = new engine.RulesElement({
    name: "Autumn Harvest Totem +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4930",
    source: "Player's Handbook 2",
    categories: ["Autumn Harvest Totem +3", "ID_FMP_MAGIC_ITEM_4930"],
    rules: function(model) {
      model.statadd("damage rolls(Autumn Harvest Totem +3)", function() { /* against bloodied creatures */ return 1; });
      model.statadd("damage rolls(Autumn Harvest Totem +3)", function() { /* against bloodied creatures */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Autumn Harvest Totem +4"] = new engine.RulesElement({
    name: "Autumn Harvest Totem +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4931",
    source: "Player's Handbook 2",
    categories: ["Autumn Harvest Totem +4", "ID_FMP_MAGIC_ITEM_4931"],
    rules: function(model) {
      model.statadd("damage rolls(Autumn Harvest Totem +4)", function() { /* against bloodied creatures */ return 2; });
      model.statadd("damage rolls(Autumn Harvest Totem +4)", function() { /* against bloodied creatures */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Autumn Harvest Totem +5"] = new engine.RulesElement({
    name: "Autumn Harvest Totem +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4932",
    source: "Player's Handbook 2",
    categories: ["Autumn Harvest Totem +5", "ID_FMP_MAGIC_ITEM_4932"],
    rules: function(model) {
      model.statadd("damage rolls(Autumn Harvest Totem +5)", function() { /* against bloodied creatures */ return 2; });
      model.statadd("damage rolls(Autumn Harvest Totem +5)", function() { /* against bloodied creatures */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Autumn Harvest Totem +6"] = new engine.RulesElement({
    name: "Autumn Harvest Totem +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4933",
    source: "Player's Handbook 2",
    categories: ["Autumn Harvest Totem +6", "ID_FMP_MAGIC_ITEM_4933"],
    rules: function(model) {
      model.statadd("damage rolls(Autumn Harvest Totem +6)", function() { /* against bloodied creatures */ return 3; });
      model.statadd("damage rolls(Autumn Harvest Totem +6)", function() { /* against bloodied creatures */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bear Spirit Armor +1"] = new engine.RulesElement({
    name: "Bear Spirit Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4611",
    source: "Player's Handbook 2",
    categories: ["Bear Spirit Armor +1", "ID_FMP_MAGIC_ITEM_4611"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bear Spirit Armor +2"] = new engine.RulesElement({
    name: "Bear Spirit Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4612",
    source: "Player's Handbook 2",
    categories: ["Bear Spirit Armor +2", "ID_FMP_MAGIC_ITEM_4612"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bear Spirit Armor +3"] = new engine.RulesElement({
    name: "Bear Spirit Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4613",
    source: "Player's Handbook 2",
    categories: ["Bear Spirit Armor +3", "ID_FMP_MAGIC_ITEM_4613"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bear Spirit Armor +4"] = new engine.RulesElement({
    name: "Bear Spirit Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4614",
    source: "Player's Handbook 2",
    categories: ["Bear Spirit Armor +4", "ID_FMP_MAGIC_ITEM_4614"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bear Spirit Armor +5"] = new engine.RulesElement({
    name: "Bear Spirit Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4615",
    source: "Player's Handbook 2",
    categories: ["Bear Spirit Armor +5", "ID_FMP_MAGIC_ITEM_4615"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bear Spirit Armor +6"] = new engine.RulesElement({
    name: "Bear Spirit Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4616",
    source: "Player's Handbook 2",
    categories: ["Bear Spirit Armor +6", "ID_FMP_MAGIC_ITEM_4616"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodvine Armor +3"] = new engine.RulesElement({
    name: "Bloodvine Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4617",
    source: "Player's Handbook 2",
    categories: ["Bloodvine Armor +3", "ID_FMP_MAGIC_ITEM_4617"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodvine Armor +4"] = new engine.RulesElement({
    name: "Bloodvine Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4618",
    source: "Player's Handbook 2",
    categories: ["Bloodvine Armor +4", "ID_FMP_MAGIC_ITEM_4618"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodvine Armor +5"] = new engine.RulesElement({
    name: "Bloodvine Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4619",
    source: "Player's Handbook 2",
    categories: ["Bloodvine Armor +5", "ID_FMP_MAGIC_ITEM_4619"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodvine Armor +6"] = new engine.RulesElement({
    name: "Bloodvine Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4620",
    source: "Player's Handbook 2",
    categories: ["Bloodvine Armor +6", "ID_FMP_MAGIC_ITEM_4620"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bold Victory Armor +1"] = new engine.RulesElement({
    name: "Bold Victory Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4621",
    source: "Player's Handbook 2",
    categories: ["Bold Victory Armor +1", "ID_FMP_MAGIC_ITEM_4621"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bold Victory Armor +2"] = new engine.RulesElement({
    name: "Bold Victory Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4622",
    source: "Player's Handbook 2",
    categories: ["Bold Victory Armor +2", "ID_FMP_MAGIC_ITEM_4622"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bold Victory Armor +3"] = new engine.RulesElement({
    name: "Bold Victory Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4623",
    source: "Player's Handbook 2",
    categories: ["Bold Victory Armor +3", "ID_FMP_MAGIC_ITEM_4623"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bold Victory Armor +4"] = new engine.RulesElement({
    name: "Bold Victory Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4624",
    source: "Player's Handbook 2",
    categories: ["Bold Victory Armor +4", "ID_FMP_MAGIC_ITEM_4624"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bold Victory Armor +5"] = new engine.RulesElement({
    name: "Bold Victory Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4625",
    source: "Player's Handbook 2",
    categories: ["Bold Victory Armor +5", "ID_FMP_MAGIC_ITEM_4625"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bold Victory Armor +6"] = new engine.RulesElement({
    name: "Bold Victory Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4626",
    source: "Player's Handbook 2",
    categories: ["Bold Victory Armor +6", "ID_FMP_MAGIC_ITEM_4626"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Canaith Mandolin +4"] = new engine.RulesElement({
    name: "Canaith Mandolin +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4854",
    source: "Player's Handbook 2",
    categories: ["Canaith Mandolin +4", "ID_FMP_MAGIC_ITEM_4854"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cli Lyre +3"] = new engine.RulesElement({
    name: "Cli Lyre +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4855",
    source: "Player's Handbook 2",
    categories: ["Cli Lyre +3", "ID_FMP_MAGIC_ITEM_4855"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Desperate Resolve Vestments +3"] = new engine.RulesElement({
    name: "Desperate Resolve Vestments +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4627",
    source: "Player's Handbook 2",
    categories: ["Desperate Resolve Vestments +3", "ID_FMP_MAGIC_ITEM_4627"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Desperate Resolve Vestments +4"] = new engine.RulesElement({
    name: "Desperate Resolve Vestments +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4628",
    source: "Player's Handbook 2",
    categories: ["Desperate Resolve Vestments +4", "ID_FMP_MAGIC_ITEM_4628"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Desperate Resolve Vestments +5"] = new engine.RulesElement({
    name: "Desperate Resolve Vestments +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4629",
    source: "Player's Handbook 2",
    categories: ["Desperate Resolve Vestments +5", "ID_FMP_MAGIC_ITEM_4629"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Desperate Resolve Vestments +6"] = new engine.RulesElement({
    name: "Desperate Resolve Vestments +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4630",
    source: "Player's Handbook 2",
    categories: ["Desperate Resolve Vestments +6", "ID_FMP_MAGIC_ITEM_4630"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Divine Retribution Armor +1"] = new engine.RulesElement({
    name: "Divine Retribution Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4631",
    source: "Player's Handbook 2",
    categories: ["Divine Retribution Armor +1", "ID_FMP_MAGIC_ITEM_4631"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Divine Retribution Armor +2"] = new engine.RulesElement({
    name: "Divine Retribution Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4632",
    source: "Player's Handbook 2",
    categories: ["Divine Retribution Armor +2", "ID_FMP_MAGIC_ITEM_4632"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Divine Retribution Armor +3"] = new engine.RulesElement({
    name: "Divine Retribution Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4633",
    source: "Player's Handbook 2",
    categories: ["Divine Retribution Armor +3", "ID_FMP_MAGIC_ITEM_4633"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Divine Retribution Armor +4"] = new engine.RulesElement({
    name: "Divine Retribution Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4634",
    source: "Player's Handbook 2",
    categories: ["Divine Retribution Armor +4", "ID_FMP_MAGIC_ITEM_4634"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Divine Retribution Armor +5"] = new engine.RulesElement({
    name: "Divine Retribution Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4635",
    source: "Player's Handbook 2",
    categories: ["Divine Retribution Armor +5", "ID_FMP_MAGIC_ITEM_4635"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Divine Retribution Armor +6"] = new engine.RulesElement({
    name: "Divine Retribution Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4636",
    source: "Player's Handbook 2",
    categories: ["Divine Retribution Armor +6", "ID_FMP_MAGIC_ITEM_4636"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Doss Lute +2"] = new engine.RulesElement({
    name: "Doss Lute +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4856",
    source: "Player's Handbook 2",
    categories: ["Doss Lute +2", "ID_FMP_MAGIC_ITEM_4856"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elemental Twist Weapon +2"] = new engine.RulesElement({
    name: "Elemental Twist Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4763",
    source: "Player's Handbook 2",
    categories: ["Elemental Twist Weapon +2", "ID_FMP_MAGIC_ITEM_4763"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elemental Twist Weapon +3"] = new engine.RulesElement({
    name: "Elemental Twist Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4764",
    source: "Player's Handbook 2",
    categories: ["Elemental Twist Weapon +3", "ID_FMP_MAGIC_ITEM_4764"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elemental Twist Weapon +4"] = new engine.RulesElement({
    name: "Elemental Twist Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4765",
    source: "Player's Handbook 2",
    categories: ["Elemental Twist Weapon +4", "ID_FMP_MAGIC_ITEM_4765"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elemental Twist Weapon +5"] = new engine.RulesElement({
    name: "Elemental Twist Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4766",
    source: "Player's Handbook 2",
    categories: ["Elemental Twist Weapon +5", "ID_FMP_MAGIC_ITEM_4766"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elemental Twist Weapon +6"] = new engine.RulesElement({
    name: "Elemental Twist Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4767",
    source: "Player's Handbook 2",
    categories: ["Elemental Twist Weapon +6", "ID_FMP_MAGIC_ITEM_4767"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Enduring Beast Armor +1"] = new engine.RulesElement({
    name: "Enduring Beast Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4637",
    source: "Player's Handbook 2",
    categories: ["Enduring Beast Armor +1", "ID_FMP_MAGIC_ITEM_4637"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Enduring Beast Armor +2"] = new engine.RulesElement({
    name: "Enduring Beast Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4638",
    source: "Player's Handbook 2",
    categories: ["Enduring Beast Armor +2", "ID_FMP_MAGIC_ITEM_4638"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Enduring Beast Armor +3"] = new engine.RulesElement({
    name: "Enduring Beast Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4639",
    source: "Player's Handbook 2",
    categories: ["Enduring Beast Armor +3", "ID_FMP_MAGIC_ITEM_4639"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Enduring Beast Armor +4"] = new engine.RulesElement({
    name: "Enduring Beast Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4640",
    source: "Player's Handbook 2",
    categories: ["Enduring Beast Armor +4", "ID_FMP_MAGIC_ITEM_4640"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Enduring Beast Armor +5"] = new engine.RulesElement({
    name: "Enduring Beast Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4641",
    source: "Player's Handbook 2",
    categories: ["Enduring Beast Armor +5", "ID_FMP_MAGIC_ITEM_4641"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Enduring Beast Armor +6"] = new engine.RulesElement({
    name: "Enduring Beast Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4642",
    source: "Player's Handbook 2",
    categories: ["Enduring Beast Armor +6", "ID_FMP_MAGIC_ITEM_4642"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Enduring Spirit Vestments +1"] = new engine.RulesElement({
    name: "Enduring Spirit Vestments +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4643",
    source: "Player's Handbook 2",
    categories: ["Enduring Spirit Vestments +1", "ID_FMP_MAGIC_ITEM_4643"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Enduring Spirit Vestments +2"] = new engine.RulesElement({
    name: "Enduring Spirit Vestments +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4644",
    source: "Player's Handbook 2",
    categories: ["Enduring Spirit Vestments +2", "ID_FMP_MAGIC_ITEM_4644"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Enduring Spirit Vestments +3"] = new engine.RulesElement({
    name: "Enduring Spirit Vestments +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4645",
    source: "Player's Handbook 2",
    categories: ["Enduring Spirit Vestments +3", "ID_FMP_MAGIC_ITEM_4645"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Enduring Spirit Vestments +4"] = new engine.RulesElement({
    name: "Enduring Spirit Vestments +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4646",
    source: "Player's Handbook 2",
    categories: ["Enduring Spirit Vestments +4", "ID_FMP_MAGIC_ITEM_4646"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Enduring Spirit Vestments +5"] = new engine.RulesElement({
    name: "Enduring Spirit Vestments +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4647",
    source: "Player's Handbook 2",
    categories: ["Enduring Spirit Vestments +5", "ID_FMP_MAGIC_ITEM_4647"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Enduring Spirit Vestments +6"] = new engine.RulesElement({
    name: "Enduring Spirit Vestments +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4648",
    source: "Player's Handbook 2",
    categories: ["Enduring Spirit Vestments +6", "ID_FMP_MAGIC_ITEM_4648"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feral Spirit Totem +2"] = new engine.RulesElement({
    name: "Feral Spirit Totem +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4934",
    source: "Player's Handbook 2",
    categories: ["Feral Spirit Totem +2", "ID_FMP_MAGIC_ITEM_4934"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feral Spirit Totem +3"] = new engine.RulesElement({
    name: "Feral Spirit Totem +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4935",
    source: "Player's Handbook 2",
    categories: ["Feral Spirit Totem +3", "ID_FMP_MAGIC_ITEM_4935"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feral Spirit Totem +4"] = new engine.RulesElement({
    name: "Feral Spirit Totem +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4936",
    source: "Player's Handbook 2",
    categories: ["Feral Spirit Totem +4", "ID_FMP_MAGIC_ITEM_4936"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feral Spirit Totem +5"] = new engine.RulesElement({
    name: "Feral Spirit Totem +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4937",
    source: "Player's Handbook 2",
    categories: ["Feral Spirit Totem +5", "ID_FMP_MAGIC_ITEM_4937"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feral Spirit Totem +6"] = new engine.RulesElement({
    name: "Feral Spirit Totem +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4938",
    source: "Player's Handbook 2",
    categories: ["Feral Spirit Totem +6", "ID_FMP_MAGIC_ITEM_4938"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fire Horn (paragon tier)"] = new engine.RulesElement({
    name: "Fire Horn (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4857",
    source: "Player's Handbook 2",
    categories: ["Fire Horn (paragon tier)", "ID_FMP_MAGIC_ITEM_4857"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flute of the Dancing Satyr (heroic tier)"] = new engine.RulesElement({
    name: "Flute of the Dancing Satyr (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4858",
    source: "Player's Handbook 2",
    categories: ["Flute of the Dancing Satyr (heroic tier)", "ID_FMP_MAGIC_ITEM_4858"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fochlucan Bandore +1"] = new engine.RulesElement({
    name: "Fochlucan Bandore +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4859",
    source: "Player's Handbook 2",
    categories: ["Fochlucan Bandore +1", "ID_FMP_MAGIC_ITEM_4859"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Harp of Deeper Slumber (heroic tier)"] = new engine.RulesElement({
    name: "Harp of Deeper Slumber (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4860",
    source: "Player's Handbook 2",
    categories: ["Harp of Deeper Slumber (heroic tier)", "ID_FMP_MAGIC_ITEM_4860"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Harsh Songblade +1"] = new engine.RulesElement({
    name: "Harsh Songblade +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4768",
    source: "Player's Handbook 2",
    categories: ["Harsh Songblade +1", "ID_FMP_MAGIC_ITEM_4768"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Harsh Songblade +2"] = new engine.RulesElement({
    name: "Harsh Songblade +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4769",
    source: "Player's Handbook 2",
    categories: ["Harsh Songblade +2", "ID_FMP_MAGIC_ITEM_4769"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Harsh Songblade +3"] = new engine.RulesElement({
    name: "Harsh Songblade +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4770",
    source: "Player's Handbook 2",
    categories: ["Harsh Songblade +3", "ID_FMP_MAGIC_ITEM_4770"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Harsh Songblade +4"] = new engine.RulesElement({
    name: "Harsh Songblade +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4771",
    source: "Player's Handbook 2",
    categories: ["Harsh Songblade +4", "ID_FMP_MAGIC_ITEM_4771"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Harsh Songblade +5"] = new engine.RulesElement({
    name: "Harsh Songblade +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4772",
    source: "Player's Handbook 2",
    categories: ["Harsh Songblade +5", "ID_FMP_MAGIC_ITEM_4772"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Harsh Songblade +6"] = new engine.RulesElement({
    name: "Harsh Songblade +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4773",
    source: "Player's Handbook 2",
    categories: ["Harsh Songblade +6", "ID_FMP_MAGIC_ITEM_4773"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Horn of Baldagyr (epic tier)"] = new engine.RulesElement({
    name: "Horn of Baldagyr (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4861",
    source: "Player's Handbook 2",
    categories: ["Horn of Baldagyr (epic tier)", "ID_FMP_MAGIC_ITEM_4861"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Horn Tusk Armor +1"] = new engine.RulesElement({
    name: "Horn Tusk Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4649",
    source: "Player's Handbook 2",
    categories: ["Horn Tusk Armor +1", "ID_FMP_MAGIC_ITEM_4649"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Horn Tusk Armor +2"] = new engine.RulesElement({
    name: "Horn Tusk Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4650",
    source: "Player's Handbook 2",
    categories: ["Horn Tusk Armor +2", "ID_FMP_MAGIC_ITEM_4650"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Horn Tusk Armor +3"] = new engine.RulesElement({
    name: "Horn Tusk Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4651",
    source: "Player's Handbook 2",
    categories: ["Horn Tusk Armor +3", "ID_FMP_MAGIC_ITEM_4651"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Horn Tusk Armor +4"] = new engine.RulesElement({
    name: "Horn Tusk Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4652",
    source: "Player's Handbook 2",
    categories: ["Horn Tusk Armor +4", "ID_FMP_MAGIC_ITEM_4652"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Horn Tusk Armor +5"] = new engine.RulesElement({
    name: "Horn Tusk Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4653",
    source: "Player's Handbook 2",
    categories: ["Horn Tusk Armor +5", "ID_FMP_MAGIC_ITEM_4653"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Horn Tusk Armor +6"] = new engine.RulesElement({
    name: "Horn Tusk Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4654",
    source: "Player's Handbook 2",
    categories: ["Horn Tusk Armor +6", "ID_FMP_MAGIC_ITEM_4654"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hungry Spirits Totem +1"] = new engine.RulesElement({
    name: "Hungry Spirits Totem +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4939",
    source: "Player's Handbook 2",
    categories: ["Hungry Spirits Totem +1", "ID_FMP_MAGIC_ITEM_4939"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hungry Spirits Totem +2"] = new engine.RulesElement({
    name: "Hungry Spirits Totem +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4940",
    source: "Player's Handbook 2",
    categories: ["Hungry Spirits Totem +2", "ID_FMP_MAGIC_ITEM_4940"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hungry Spirits Totem +3"] = new engine.RulesElement({
    name: "Hungry Spirits Totem +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4941",
    source: "Player's Handbook 2",
    categories: ["Hungry Spirits Totem +3", "ID_FMP_MAGIC_ITEM_4941"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hungry Spirits Totem +4"] = new engine.RulesElement({
    name: "Hungry Spirits Totem +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4942",
    source: "Player's Handbook 2",
    categories: ["Hungry Spirits Totem +4", "ID_FMP_MAGIC_ITEM_4942"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hungry Spirits Totem +5"] = new engine.RulesElement({
    name: "Hungry Spirits Totem +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4943",
    source: "Player's Handbook 2",
    categories: ["Hungry Spirits Totem +5", "ID_FMP_MAGIC_ITEM_4943"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hungry Spirits Totem +6"] = new engine.RulesElement({
    name: "Hungry Spirits Totem +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4944",
    source: "Player's Handbook 2",
    categories: ["Hungry Spirits Totem +6", "ID_FMP_MAGIC_ITEM_4944"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hunting Beast Armor +1"] = new engine.RulesElement({
    name: "Hunting Beast Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4655",
    source: "Player's Handbook 2",
    categories: ["Hunting Beast Armor +1", "ID_FMP_MAGIC_ITEM_4655"],
    rules: function(model) {
      model.statadd("Reflex Defense", function() { /* while you are in beast form */ return 2; }, "item");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hunting Beast Armor +2"] = new engine.RulesElement({
    name: "Hunting Beast Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4656",
    source: "Player's Handbook 2",
    categories: ["Hunting Beast Armor +2", "ID_FMP_MAGIC_ITEM_4656"],
    rules: function(model) {
      model.statadd("Reflex Defense", function() { /* while you are in beast form */ return 2; }, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hunting Beast Armor +3"] = new engine.RulesElement({
    name: "Hunting Beast Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4657",
    source: "Player's Handbook 2",
    categories: ["Hunting Beast Armor +3", "ID_FMP_MAGIC_ITEM_4657"],
    rules: function(model) {
      model.statadd("Reflex Defense", function() { /* while you are in beast form */ return 2; }, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hunting Beast Armor +4"] = new engine.RulesElement({
    name: "Hunting Beast Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4658",
    source: "Player's Handbook 2",
    categories: ["Hunting Beast Armor +4", "ID_FMP_MAGIC_ITEM_4658"],
    rules: function(model) {
      model.statadd("Reflex Defense", function() { /* while you are in beast form */ return 2; }, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hunting Beast Armor +5"] = new engine.RulesElement({
    name: "Hunting Beast Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4659",
    source: "Player's Handbook 2",
    categories: ["Hunting Beast Armor +5", "ID_FMP_MAGIC_ITEM_4659"],
    rules: function(model) {
      model.statadd("Reflex Defense", function() { /* while you are in beast form */ return 2; }, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hunting Beast Armor +6"] = new engine.RulesElement({
    name: "Hunting Beast Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4660",
    source: "Player's Handbook 2",
    categories: ["Hunting Beast Armor +6", "ID_FMP_MAGIC_ITEM_4660"],
    rules: function(model) {
      model.statadd("Reflex Defense", function() { /* while you are in beast form */ return 2; }, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Indomitable Resolve Vestments +1"] = new engine.RulesElement({
    name: "Indomitable Resolve Vestments +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4661",
    source: "Player's Handbook 2",
    categories: ["Indomitable Resolve Vestments +1", "ID_FMP_MAGIC_ITEM_4661"],
    rules: function(model) {
      model.statadd("Will Defense", function() { /* while you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Indomitable Resolve Vestments +2"] = new engine.RulesElement({
    name: "Indomitable Resolve Vestments +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4662",
    source: "Player's Handbook 2",
    categories: ["Indomitable Resolve Vestments +2", "ID_FMP_MAGIC_ITEM_4662"],
    rules: function(model) {
      model.statadd("Will Defense", function() { /* while you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Indomitable Resolve Vestments +3"] = new engine.RulesElement({
    name: "Indomitable Resolve Vestments +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4663",
    source: "Player's Handbook 2",
    categories: ["Indomitable Resolve Vestments +3", "ID_FMP_MAGIC_ITEM_4663"],
    rules: function(model) {
      model.statadd("Will Defense", function() { /* while you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Indomitable Resolve Vestments +4"] = new engine.RulesElement({
    name: "Indomitable Resolve Vestments +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4664",
    source: "Player's Handbook 2",
    categories: ["Indomitable Resolve Vestments +4", "ID_FMP_MAGIC_ITEM_4664"],
    rules: function(model) {
      model.statadd("Will Defense", function() { /* while you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Indomitable Resolve Vestments +5"] = new engine.RulesElement({
    name: "Indomitable Resolve Vestments +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4665",
    source: "Player's Handbook 2",
    categories: ["Indomitable Resolve Vestments +5", "ID_FMP_MAGIC_ITEM_4665"],
    rules: function(model) {
      model.statadd("Will Defense", function() { /* while you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Indomitable Resolve Vestments +6"] = new engine.RulesElement({
    name: "Indomitable Resolve Vestments +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4666",
    source: "Player's Handbook 2",
    categories: ["Indomitable Resolve Vestments +6", "ID_FMP_MAGIC_ITEM_4666"],
    rules: function(model) {
      model.statadd("Will Defense", function() { /* while you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inner Warmth Armor +2"] = new engine.RulesElement({
    name: "Inner Warmth Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4667",
    source: "Player's Handbook 2",
    categories: ["Inner Warmth Armor +2", "ID_FMP_MAGIC_ITEM_4667"],
    rules: function(model) {
      model.statadd("resist:cold", 5, "resist");
      model.statadd("resist:necrotic", 5, "resist");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inner Warmth Armor +3"] = new engine.RulesElement({
    name: "Inner Warmth Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4668",
    source: "Player's Handbook 2",
    categories: ["Inner Warmth Armor +3", "ID_FMP_MAGIC_ITEM_4668"],
    rules: function(model) {
      model.statadd("resist:cold", 5, "resist");
      model.statadd("resist:necrotic", 5, "resist");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inner Warmth Armor +4"] = new engine.RulesElement({
    name: "Inner Warmth Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4669",
    source: "Player's Handbook 2",
    categories: ["Inner Warmth Armor +4", "ID_FMP_MAGIC_ITEM_4669"],
    rules: function(model) {
      model.statadd("resist:cold", 10, "resist");
      model.statadd("resist:necrotic", 10, "resist");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inner Warmth Armor +5"] = new engine.RulesElement({
    name: "Inner Warmth Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4670",
    source: "Player's Handbook 2",
    categories: ["Inner Warmth Armor +5", "ID_FMP_MAGIC_ITEM_4670"],
    rules: function(model) {
      model.statadd("resist:cold", 10, "resist");
      model.statadd("resist:necrotic", 10, "resist");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inner Warmth Armor +6"] = new engine.RulesElement({
    name: "Inner Warmth Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4671",
    source: "Player's Handbook 2",
    categories: ["Inner Warmth Armor +6", "ID_FMP_MAGIC_ITEM_4671"],
    rules: function(model) {
      model.statadd("resist:cold", 15, "resist");
      model.statadd("resist:necrotic", 15, "resist");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Legendmaker Armor +3"] = new engine.RulesElement({
    name: "Legendmaker Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4672",
    source: "Player's Handbook 2",
    categories: ["Legendmaker Armor +3", "ID_FMP_MAGIC_ITEM_4672"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Legendmaker Armor +4"] = new engine.RulesElement({
    name: "Legendmaker Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4673",
    source: "Player's Handbook 2",
    categories: ["Legendmaker Armor +4", "ID_FMP_MAGIC_ITEM_4673"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Legendmaker Armor +5"] = new engine.RulesElement({
    name: "Legendmaker Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4674",
    source: "Player's Handbook 2",
    categories: ["Legendmaker Armor +5", "ID_FMP_MAGIC_ITEM_4674"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Legendmaker Armor +6"] = new engine.RulesElement({
    name: "Legendmaker Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4675",
    source: "Player's Handbook 2",
    categories: ["Legendmaker Armor +6", "ID_FMP_MAGIC_ITEM_4675"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Life Vine Armor +1"] = new engine.RulesElement({
    name: "Life Vine Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4681",
    source: "Player's Handbook 2",
    categories: ["Life Vine Armor +1", "ID_FMP_MAGIC_ITEM_4681"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Life Vine Armor +2"] = new engine.RulesElement({
    name: "Life Vine Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4682",
    source: "Player's Handbook 2",
    categories: ["Life Vine Armor +2", "ID_FMP_MAGIC_ITEM_4682"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Life Vine Armor +3"] = new engine.RulesElement({
    name: "Life Vine Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4683",
    source: "Player's Handbook 2",
    categories: ["Life Vine Armor +3", "ID_FMP_MAGIC_ITEM_4683"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Life Vine Armor +4"] = new engine.RulesElement({
    name: "Life Vine Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4684",
    source: "Player's Handbook 2",
    categories: ["Life Vine Armor +4", "ID_FMP_MAGIC_ITEM_4684"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Life Vine Armor +5"] = new engine.RulesElement({
    name: "Life Vine Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4685",
    source: "Player's Handbook 2",
    categories: ["Life Vine Armor +5", "ID_FMP_MAGIC_ITEM_4685"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Life Vine Armor +6"] = new engine.RulesElement({
    name: "Life Vine Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4686",
    source: "Player's Handbook 2",
    categories: ["Life Vine Armor +6", "ID_FMP_MAGIC_ITEM_4686"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lifeblood Armor +2"] = new engine.RulesElement({
    name: "Lifeblood Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4676",
    source: "Player's Handbook 2",
    categories: ["Lifeblood Armor +2", "ID_FMP_MAGIC_ITEM_4676"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lifeblood Armor +3"] = new engine.RulesElement({
    name: "Lifeblood Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4677",
    source: "Player's Handbook 2",
    categories: ["Lifeblood Armor +3", "ID_FMP_MAGIC_ITEM_4677"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lifeblood Armor +4"] = new engine.RulesElement({
    name: "Lifeblood Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4678",
    source: "Player's Handbook 2",
    categories: ["Lifeblood Armor +4", "ID_FMP_MAGIC_ITEM_4678"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lifeblood Armor +5"] = new engine.RulesElement({
    name: "Lifeblood Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4679",
    source: "Player's Handbook 2",
    categories: ["Lifeblood Armor +5", "ID_FMP_MAGIC_ITEM_4679"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lifeblood Armor +6"] = new engine.RulesElement({
    name: "Lifeblood Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4680",
    source: "Player's Handbook 2",
    categories: ["Lifeblood Armor +6", "ID_FMP_MAGIC_ITEM_4680"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lilting Songblade +4"] = new engine.RulesElement({
    name: "Lilting Songblade +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4774",
    source: "Player's Handbook 2",
    categories: ["Lilting Songblade +4", "ID_FMP_MAGIC_ITEM_4774"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lilting Songblade +5"] = new engine.RulesElement({
    name: "Lilting Songblade +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4775",
    source: "Player's Handbook 2",
    categories: ["Lilting Songblade +5", "ID_FMP_MAGIC_ITEM_4775"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lilting Songblade +6"] = new engine.RulesElement({
    name: "Lilting Songblade +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4776",
    source: "Player's Handbook 2",
    categories: ["Lilting Songblade +6", "ID_FMP_MAGIC_ITEM_4776"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Luring Withdrawal Armor +1"] = new engine.RulesElement({
    name: "Luring Withdrawal Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4687",
    source: "Player's Handbook 2",
    categories: ["Luring Withdrawal Armor +1", "ID_FMP_MAGIC_ITEM_4687"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Luring Withdrawal Armor +2"] = new engine.RulesElement({
    name: "Luring Withdrawal Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4688",
    source: "Player's Handbook 2",
    categories: ["Luring Withdrawal Armor +2", "ID_FMP_MAGIC_ITEM_4688"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Luring Withdrawal Armor +3"] = new engine.RulesElement({
    name: "Luring Withdrawal Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4689",
    source: "Player's Handbook 2",
    categories: ["Luring Withdrawal Armor +3", "ID_FMP_MAGIC_ITEM_4689"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Luring Withdrawal Armor +4"] = new engine.RulesElement({
    name: "Luring Withdrawal Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4690",
    source: "Player's Handbook 2",
    categories: ["Luring Withdrawal Armor +4", "ID_FMP_MAGIC_ITEM_4690"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Luring Withdrawal Armor +5"] = new engine.RulesElement({
    name: "Luring Withdrawal Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4691",
    source: "Player's Handbook 2",
    categories: ["Luring Withdrawal Armor +5", "ID_FMP_MAGIC_ITEM_4691"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Luring Withdrawal Armor +6"] = new engine.RulesElement({
    name: "Luring Withdrawal Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4692",
    source: "Player's Handbook 2",
    categories: ["Luring Withdrawal Armor +6", "ID_FMP_MAGIC_ITEM_4692"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mac-Fuirmidh Cittern +1"] = new engine.RulesElement({
    name: "Mac-Fuirmidh Cittern +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4862",
    source: "Player's Handbook 2",
    categories: ["Mac-Fuirmidh Cittern +1", "ID_FMP_MAGIC_ITEM_4862"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Totem +1"] = new engine.RulesElement({
    name: "Magic Totem +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4945",
    source: "Player's Handbook 2",
    categories: ["Magic Totem +1", "ID_FMP_MAGIC_ITEM_4945"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Totem +2"] = new engine.RulesElement({
    name: "Magic Totem +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4946",
    source: "Player's Handbook 2",
    categories: ["Magic Totem +2", "ID_FMP_MAGIC_ITEM_4946"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Totem +3"] = new engine.RulesElement({
    name: "Magic Totem +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4947",
    source: "Player's Handbook 2",
    categories: ["Magic Totem +3", "ID_FMP_MAGIC_ITEM_4947"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Totem +4"] = new engine.RulesElement({
    name: "Magic Totem +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4948",
    source: "Player's Handbook 2",
    categories: ["Magic Totem +4", "ID_FMP_MAGIC_ITEM_4948"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Totem +5"] = new engine.RulesElement({
    name: "Magic Totem +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4949",
    source: "Player's Handbook 2",
    categories: ["Magic Totem +5", "ID_FMP_MAGIC_ITEM_4949"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Totem +6"] = new engine.RulesElement({
    name: "Magic Totem +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4950",
    source: "Player's Handbook 2",
    categories: ["Magic Totem +6", "ID_FMP_MAGIC_ITEM_4950"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ollamh Harp +6"] = new engine.RulesElement({
    name: "Ollamh Harp +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4863",
    source: "Player's Handbook 2",
    categories: ["Ollamh Harp +6", "ID_FMP_MAGIC_ITEM_4863"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Panther Spirit Armor +1"] = new engine.RulesElement({
    name: "Panther Spirit Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4693",
    source: "Player's Handbook 2",
    categories: ["Panther Spirit Armor +1", "ID_FMP_MAGIC_ITEM_4693"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Panther Spirit Armor +2"] = new engine.RulesElement({
    name: "Panther Spirit Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4694",
    source: "Player's Handbook 2",
    categories: ["Panther Spirit Armor +2", "ID_FMP_MAGIC_ITEM_4694"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Panther Spirit Armor +3"] = new engine.RulesElement({
    name: "Panther Spirit Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4695",
    source: "Player's Handbook 2",
    categories: ["Panther Spirit Armor +3", "ID_FMP_MAGIC_ITEM_4695"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Panther Spirit Armor +4"] = new engine.RulesElement({
    name: "Panther Spirit Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4696",
    source: "Player's Handbook 2",
    categories: ["Panther Spirit Armor +4", "ID_FMP_MAGIC_ITEM_4696"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Panther Spirit Armor +5"] = new engine.RulesElement({
    name: "Panther Spirit Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4697",
    source: "Player's Handbook 2",
    categories: ["Panther Spirit Armor +5", "ID_FMP_MAGIC_ITEM_4697"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Panther Spirit Armor +6"] = new engine.RulesElement({
    name: "Panther Spirit Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4698",
    source: "Player's Handbook 2",
    categories: ["Panther Spirit Armor +6", "ID_FMP_MAGIC_ITEM_4698"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Penance Armor +3"] = new engine.RulesElement({
    name: "Penance Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4699",
    source: "Player's Handbook 2",
    categories: ["Penance Armor +3", "ID_FMP_MAGIC_ITEM_4699"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Penance Armor +4"] = new engine.RulesElement({
    name: "Penance Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4700",
    source: "Player's Handbook 2",
    categories: ["Penance Armor +4", "ID_FMP_MAGIC_ITEM_4700"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Penance Armor +5"] = new engine.RulesElement({
    name: "Penance Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4701",
    source: "Player's Handbook 2",
    categories: ["Penance Armor +5", "ID_FMP_MAGIC_ITEM_4701"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Penance Armor +6"] = new engine.RulesElement({
    name: "Penance Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4702",
    source: "Player's Handbook 2",
    categories: ["Penance Armor +6", "ID_FMP_MAGIC_ITEM_4702"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Perpetual Resolve Vestments +4"] = new engine.RulesElement({
    name: "Perpetual Resolve Vestments +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4703",
    source: "Player's Handbook 2",
    categories: ["Perpetual Resolve Vestments +4", "ID_FMP_MAGIC_ITEM_4703"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Perpetual Resolve Vestments +5"] = new engine.RulesElement({
    name: "Perpetual Resolve Vestments +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4704",
    source: "Player's Handbook 2",
    categories: ["Perpetual Resolve Vestments +5", "ID_FMP_MAGIC_ITEM_4704"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Perpetual Resolve Vestments +6"] = new engine.RulesElement({
    name: "Perpetual Resolve Vestments +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4705",
    source: "Player's Handbook 2",
    categories: ["Perpetual Resolve Vestments +6", "ID_FMP_MAGIC_ITEM_4705"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Piercing Songblade +3"] = new engine.RulesElement({
    name: "Piercing Songblade +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4777",
    source: "Player's Handbook 2",
    categories: ["Piercing Songblade +3", "ID_FMP_MAGIC_ITEM_4777"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Piercing Songblade +4"] = new engine.RulesElement({
    name: "Piercing Songblade +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4778",
    source: "Player's Handbook 2",
    categories: ["Piercing Songblade +4", "ID_FMP_MAGIC_ITEM_4778"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Piercing Songblade +5"] = new engine.RulesElement({
    name: "Piercing Songblade +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4779",
    source: "Player's Handbook 2",
    categories: ["Piercing Songblade +5", "ID_FMP_MAGIC_ITEM_4779"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Piercing Songblade +6"] = new engine.RulesElement({
    name: "Piercing Songblade +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4780",
    source: "Player's Handbook 2",
    categories: ["Piercing Songblade +6", "ID_FMP_MAGIC_ITEM_4780"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pouncing Beast Armor +1"] = new engine.RulesElement({
    name: "Pouncing Beast Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4706",
    source: "Player's Handbook 2",
    categories: ["Pouncing Beast Armor +1", "ID_FMP_MAGIC_ITEM_4706"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pouncing Beast Armor +2"] = new engine.RulesElement({
    name: "Pouncing Beast Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4707",
    source: "Player's Handbook 2",
    categories: ["Pouncing Beast Armor +2", "ID_FMP_MAGIC_ITEM_4707"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pouncing Beast Armor +3"] = new engine.RulesElement({
    name: "Pouncing Beast Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4708",
    source: "Player's Handbook 2",
    categories: ["Pouncing Beast Armor +3", "ID_FMP_MAGIC_ITEM_4708"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pouncing Beast Armor +4"] = new engine.RulesElement({
    name: "Pouncing Beast Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4709",
    source: "Player's Handbook 2",
    categories: ["Pouncing Beast Armor +4", "ID_FMP_MAGIC_ITEM_4709"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pouncing Beast Armor +5"] = new engine.RulesElement({
    name: "Pouncing Beast Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4710",
    source: "Player's Handbook 2",
    categories: ["Pouncing Beast Armor +5", "ID_FMP_MAGIC_ITEM_4710"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pouncing Beast Armor +6"] = new engine.RulesElement({
    name: "Pouncing Beast Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4711",
    source: "Player's Handbook 2",
    categories: ["Pouncing Beast Armor +6", "ID_FMP_MAGIC_ITEM_4711"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Predator Armor +1"] = new engine.RulesElement({
    name: "Predator Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4712",
    source: "Player's Handbook 2",
    categories: ["Predator Armor +1", "ID_FMP_MAGIC_ITEM_4712"],
    rules: function(model) {
      model.statadd("Fortitude", function() { /* while you are in beast form */ return 1; }, "item");
      model.statadd("Will", function() { /* while you are in beast form */ return 1; }, "item");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Predator Armor +2"] = new engine.RulesElement({
    name: "Predator Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4713",
    source: "Player's Handbook 2",
    categories: ["Predator Armor +2", "ID_FMP_MAGIC_ITEM_4713"],
    rules: function(model) {
      model.statadd("Fortitude", function() { /* while you are in beast form */ return 1; }, "item");
      model.statadd("Will", function() { /* while you are in beast form */ return 1; }, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Predator Armor +3"] = new engine.RulesElement({
    name: "Predator Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4714",
    source: "Player's Handbook 2",
    categories: ["Predator Armor +3", "ID_FMP_MAGIC_ITEM_4714"],
    rules: function(model) {
      model.statadd("Fortitude", function() { /* while you are in beast form */ return 1; }, "item");
      model.statadd("Will", function() { /* while you are in beast form */ return 1; }, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Predator Armor +4"] = new engine.RulesElement({
    name: "Predator Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4715",
    source: "Player's Handbook 2",
    categories: ["Predator Armor +4", "ID_FMP_MAGIC_ITEM_4715"],
    rules: function(model) {
      model.statadd("Fortitude", function() { /* while you are in beast form */ return 1; }, "item");
      model.statadd("Will", function() { /* while you are in beast form */ return 1; }, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Predator Armor +5"] = new engine.RulesElement({
    name: "Predator Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4716",
    source: "Player's Handbook 2",
    categories: ["Predator Armor +5", "ID_FMP_MAGIC_ITEM_4716"],
    rules: function(model) {
      model.statadd("Fortitude", function() { /* while you are in beast form */ return 1; }, "item");
      model.statadd("Will", function() { /* while you are in beast form */ return 1; }, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Predator Armor +6"] = new engine.RulesElement({
    name: "Predator Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4717",
    source: "Player's Handbook 2",
    categories: ["Predator Armor +6", "ID_FMP_MAGIC_ITEM_4717"],
    rules: function(model) {
      model.statadd("Fortitude", function() { /* while you are in beast form */ return 1; }, "item");
      model.statadd("Will", function() { /* while you are in beast form */ return 1; }, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pure Spirit Totem +1"] = new engine.RulesElement({
    name: "Pure Spirit Totem +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4951",
    source: "Player's Handbook 2",
    categories: ["Pure Spirit Totem +1", "ID_FMP_MAGIC_ITEM_4951"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pure Spirit Totem +2"] = new engine.RulesElement({
    name: "Pure Spirit Totem +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4952",
    source: "Player's Handbook 2",
    categories: ["Pure Spirit Totem +2", "ID_FMP_MAGIC_ITEM_4952"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pure Spirit Totem +3"] = new engine.RulesElement({
    name: "Pure Spirit Totem +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4953",
    source: "Player's Handbook 2",
    categories: ["Pure Spirit Totem +3", "ID_FMP_MAGIC_ITEM_4953"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pure Spirit Totem +4"] = new engine.RulesElement({
    name: "Pure Spirit Totem +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4954",
    source: "Player's Handbook 2",
    categories: ["Pure Spirit Totem +4", "ID_FMP_MAGIC_ITEM_4954"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pure Spirit Totem +5"] = new engine.RulesElement({
    name: "Pure Spirit Totem +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4955",
    source: "Player's Handbook 2",
    categories: ["Pure Spirit Totem +5", "ID_FMP_MAGIC_ITEM_4955"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pure Spirit Totem +6"] = new engine.RulesElement({
    name: "Pure Spirit Totem +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4956",
    source: "Player's Handbook 2",
    categories: ["Pure Spirit Totem +6", "ID_FMP_MAGIC_ITEM_4956"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rageblood Armor +3"] = new engine.RulesElement({
    name: "Rageblood Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4718",
    source: "Player's Handbook 2",
    categories: ["Rageblood Armor +3", "ID_FMP_MAGIC_ITEM_4718"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rageblood Armor +4"] = new engine.RulesElement({
    name: "Rageblood Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4719",
    source: "Player's Handbook 2",
    categories: ["Rageblood Armor +4", "ID_FMP_MAGIC_ITEM_4719"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rageblood Armor +5"] = new engine.RulesElement({
    name: "Rageblood Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4720",
    source: "Player's Handbook 2",
    categories: ["Rageblood Armor +5", "ID_FMP_MAGIC_ITEM_4720"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rageblood Armor +6"] = new engine.RulesElement({
    name: "Rageblood Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4721",
    source: "Player's Handbook 2",
    categories: ["Rageblood Armor +6", "ID_FMP_MAGIC_ITEM_4721"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rebuking Armor +1"] = new engine.RulesElement({
    name: "Rebuking Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4722",
    source: "Player's Handbook 2",
    categories: ["Rebuking Armor +1", "ID_FMP_MAGIC_ITEM_4722"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rebuking Armor +2"] = new engine.RulesElement({
    name: "Rebuking Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4723",
    source: "Player's Handbook 2",
    categories: ["Rebuking Armor +2", "ID_FMP_MAGIC_ITEM_4723"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rebuking Armor +3"] = new engine.RulesElement({
    name: "Rebuking Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4724",
    source: "Player's Handbook 2",
    categories: ["Rebuking Armor +3", "ID_FMP_MAGIC_ITEM_4724"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rebuking Armor +4"] = new engine.RulesElement({
    name: "Rebuking Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4725",
    source: "Player's Handbook 2",
    categories: ["Rebuking Armor +4", "ID_FMP_MAGIC_ITEM_4725"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rebuking Armor +5"] = new engine.RulesElement({
    name: "Rebuking Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4726",
    source: "Player's Handbook 2",
    categories: ["Rebuking Armor +5", "ID_FMP_MAGIC_ITEM_4726"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rebuking Armor +6"] = new engine.RulesElement({
    name: "Rebuking Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4727",
    source: "Player's Handbook 2",
    categories: ["Rebuking Armor +6", "ID_FMP_MAGIC_ITEM_4727"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Roc Armor +4"] = new engine.RulesElement({
    name: "Roc Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4728",
    source: "Player's Handbook 2",
    categories: ["Roc Armor +4", "ID_FMP_MAGIC_ITEM_4728"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Roc Armor +5"] = new engine.RulesElement({
    name: "Roc Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4729",
    source: "Player's Handbook 2",
    categories: ["Roc Armor +5", "ID_FMP_MAGIC_ITEM_4729"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Roc Armor +6"] = new engine.RulesElement({
    name: "Roc Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4730",
    source: "Player's Handbook 2",
    categories: ["Roc Armor +6", "ID_FMP_MAGIC_ITEM_4730"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Blinding Awe +2"] = new engine.RulesElement({
    name: "Rod of Blinding Awe +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4799",
    source: "Player's Handbook 2",
    categories: ["Rod of Blinding Awe +2", "ID_FMP_MAGIC_ITEM_4799"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Blinding Awe +3"] = new engine.RulesElement({
    name: "Rod of Blinding Awe +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4800",
    source: "Player's Handbook 2",
    categories: ["Rod of Blinding Awe +3", "ID_FMP_MAGIC_ITEM_4800"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Blinding Awe +4"] = new engine.RulesElement({
    name: "Rod of Blinding Awe +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4801",
    source: "Player's Handbook 2",
    categories: ["Rod of Blinding Awe +4", "ID_FMP_MAGIC_ITEM_4801"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Blinding Awe +5"] = new engine.RulesElement({
    name: "Rod of Blinding Awe +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4802",
    source: "Player's Handbook 2",
    categories: ["Rod of Blinding Awe +5", "ID_FMP_MAGIC_ITEM_4802"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Blinding Awe +6"] = new engine.RulesElement({
    name: "Rod of Blinding Awe +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4803",
    source: "Player's Handbook 2",
    categories: ["Rod of Blinding Awe +6", "ID_FMP_MAGIC_ITEM_4803"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Brilliant Wrath +3"] = new engine.RulesElement({
    name: "Rod of Brilliant Wrath +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4804",
    source: "Player's Handbook 2",
    categories: ["Rod of Brilliant Wrath +3", "ID_FMP_MAGIC_ITEM_4804"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Brilliant Wrath +4"] = new engine.RulesElement({
    name: "Rod of Brilliant Wrath +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4805",
    source: "Player's Handbook 2",
    categories: ["Rod of Brilliant Wrath +4", "ID_FMP_MAGIC_ITEM_4805"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Brilliant Wrath +5"] = new engine.RulesElement({
    name: "Rod of Brilliant Wrath +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4806",
    source: "Player's Handbook 2",
    categories: ["Rod of Brilliant Wrath +5", "ID_FMP_MAGIC_ITEM_4806"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Brilliant Wrath +6"] = new engine.RulesElement({
    name: "Rod of Brilliant Wrath +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4807",
    source: "Player's Handbook 2",
    categories: ["Rod of Brilliant Wrath +6", "ID_FMP_MAGIC_ITEM_4807"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Dual Invocation +6"] = new engine.RulesElement({
    name: "Rod of Dual Invocation +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4808",
    source: "Player's Handbook 2",
    categories: ["Rod of Dual Invocation +6", "ID_FMP_MAGIC_ITEM_4808"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Forceful Invocation +1"] = new engine.RulesElement({
    name: "Rod of Forceful Invocation +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4809",
    source: "Player's Handbook 2",
    categories: ["Rod of Forceful Invocation +1", "ID_FMP_MAGIC_ITEM_4809"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Forceful Invocation +2"] = new engine.RulesElement({
    name: "Rod of Forceful Invocation +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4810",
    source: "Player's Handbook 2",
    categories: ["Rod of Forceful Invocation +2", "ID_FMP_MAGIC_ITEM_4810"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Forceful Invocation +3"] = new engine.RulesElement({
    name: "Rod of Forceful Invocation +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4811",
    source: "Player's Handbook 2",
    categories: ["Rod of Forceful Invocation +3", "ID_FMP_MAGIC_ITEM_4811"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Forceful Invocation +4"] = new engine.RulesElement({
    name: "Rod of Forceful Invocation +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4812",
    source: "Player's Handbook 2",
    categories: ["Rod of Forceful Invocation +4", "ID_FMP_MAGIC_ITEM_4812"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Forceful Invocation +5"] = new engine.RulesElement({
    name: "Rod of Forceful Invocation +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4813",
    source: "Player's Handbook 2",
    categories: ["Rod of Forceful Invocation +5", "ID_FMP_MAGIC_ITEM_4813"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Forceful Invocation +6"] = new engine.RulesElement({
    name: "Rod of Forceful Invocation +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4814",
    source: "Player's Handbook 2",
    categories: ["Rod of Forceful Invocation +6", "ID_FMP_MAGIC_ITEM_4814"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Hope Triumphant +1"] = new engine.RulesElement({
    name: "Rod of Hope Triumphant +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4815",
    source: "Player's Handbook 2",
    categories: ["Rod of Hope Triumphant +1", "ID_FMP_MAGIC_ITEM_4815"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Hope Triumphant +2"] = new engine.RulesElement({
    name: "Rod of Hope Triumphant +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4816",
    source: "Player's Handbook 2",
    categories: ["Rod of Hope Triumphant +2", "ID_FMP_MAGIC_ITEM_4816"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Hope Triumphant +3"] = new engine.RulesElement({
    name: "Rod of Hope Triumphant +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4817",
    source: "Player's Handbook 2",
    categories: ["Rod of Hope Triumphant +3", "ID_FMP_MAGIC_ITEM_4817"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Hope Triumphant +4"] = new engine.RulesElement({
    name: "Rod of Hope Triumphant +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4818",
    source: "Player's Handbook 2",
    categories: ["Rod of Hope Triumphant +4", "ID_FMP_MAGIC_ITEM_4818"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Hope Triumphant +5"] = new engine.RulesElement({
    name: "Rod of Hope Triumphant +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4819",
    source: "Player's Handbook 2",
    categories: ["Rod of Hope Triumphant +5", "ID_FMP_MAGIC_ITEM_4819"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Hope Triumphant +6"] = new engine.RulesElement({
    name: "Rod of Hope Triumphant +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4820",
    source: "Player's Handbook 2",
    categories: ["Rod of Hope Triumphant +6", "ID_FMP_MAGIC_ITEM_4820"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Resurgent Valor +2"] = new engine.RulesElement({
    name: "Rod of Resurgent Valor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4821",
    source: "Player's Handbook 2",
    categories: ["Rod of Resurgent Valor +2", "ID_FMP_MAGIC_ITEM_4821"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Resurgent Valor +3"] = new engine.RulesElement({
    name: "Rod of Resurgent Valor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4822",
    source: "Player's Handbook 2",
    categories: ["Rod of Resurgent Valor +3", "ID_FMP_MAGIC_ITEM_4822"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Resurgent Valor +4"] = new engine.RulesElement({
    name: "Rod of Resurgent Valor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4823",
    source: "Player's Handbook 2",
    categories: ["Rod of Resurgent Valor +4", "ID_FMP_MAGIC_ITEM_4823"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Resurgent Valor +5"] = new engine.RulesElement({
    name: "Rod of Resurgent Valor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4824",
    source: "Player's Handbook 2",
    categories: ["Rod of Resurgent Valor +5", "ID_FMP_MAGIC_ITEM_4824"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Resurgent Valor +6"] = new engine.RulesElement({
    name: "Rod of Resurgent Valor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4825",
    source: "Player's Handbook 2",
    categories: ["Rod of Resurgent Valor +6", "ID_FMP_MAGIC_ITEM_4825"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Retributive Justice +4"] = new engine.RulesElement({
    name: "Rod of Retributive Justice +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4826",
    source: "Player's Handbook 2",
    categories: ["Rod of Retributive Justice +4", "ID_FMP_MAGIC_ITEM_4826"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Retributive Justice +5"] = new engine.RulesElement({
    name: "Rod of Retributive Justice +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4827",
    source: "Player's Handbook 2",
    categories: ["Rod of Retributive Justice +5", "ID_FMP_MAGIC_ITEM_4827"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Retributive Justice +6"] = new engine.RulesElement({
    name: "Rod of Retributive Justice +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4828",
    source: "Player's Handbook 2",
    categories: ["Rod of Retributive Justice +6", "ID_FMP_MAGIC_ITEM_4828"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Scouring Justice +3"] = new engine.RulesElement({
    name: "Rod of Scouring Justice +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4829",
    source: "Player's Handbook 2",
    categories: ["Rod of Scouring Justice +3", "ID_FMP_MAGIC_ITEM_4829"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Scouring Justice +4"] = new engine.RulesElement({
    name: "Rod of Scouring Justice +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4830",
    source: "Player's Handbook 2",
    categories: ["Rod of Scouring Justice +4", "ID_FMP_MAGIC_ITEM_4830"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Scouring Justice +5"] = new engine.RulesElement({
    name: "Rod of Scouring Justice +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4831",
    source: "Player's Handbook 2",
    categories: ["Rod of Scouring Justice +5", "ID_FMP_MAGIC_ITEM_4831"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Scouring Justice +6"] = new engine.RulesElement({
    name: "Rod of Scouring Justice +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4832",
    source: "Player's Handbook 2",
    categories: ["Rod of Scouring Justice +6", "ID_FMP_MAGIC_ITEM_4832"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Wrathful Dismissal +1"] = new engine.RulesElement({
    name: "Rod of Wrathful Dismissal +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4833",
    source: "Player's Handbook 2",
    categories: ["Rod of Wrathful Dismissal +1", "ID_FMP_MAGIC_ITEM_4833"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Wrathful Dismissal +2"] = new engine.RulesElement({
    name: "Rod of Wrathful Dismissal +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4834",
    source: "Player's Handbook 2",
    categories: ["Rod of Wrathful Dismissal +2", "ID_FMP_MAGIC_ITEM_4834"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Wrathful Dismissal +3"] = new engine.RulesElement({
    name: "Rod of Wrathful Dismissal +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4835",
    source: "Player's Handbook 2",
    categories: ["Rod of Wrathful Dismissal +3", "ID_FMP_MAGIC_ITEM_4835"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Wrathful Dismissal +4"] = new engine.RulesElement({
    name: "Rod of Wrathful Dismissal +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4836",
    source: "Player's Handbook 2",
    categories: ["Rod of Wrathful Dismissal +4", "ID_FMP_MAGIC_ITEM_4836"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Wrathful Dismissal +5"] = new engine.RulesElement({
    name: "Rod of Wrathful Dismissal +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4837",
    source: "Player's Handbook 2",
    categories: ["Rod of Wrathful Dismissal +5", "ID_FMP_MAGIC_ITEM_4837"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Wrathful Dismissal +6"] = new engine.RulesElement({
    name: "Rod of Wrathful Dismissal +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4838",
    source: "Player's Handbook 2",
    categories: ["Rod of Wrathful Dismissal +6", "ID_FMP_MAGIC_ITEM_4838"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shared Valor Armor +2"] = new engine.RulesElement({
    name: "Shared Valor Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4731",
    source: "Player's Handbook 2",
    categories: ["Shared Valor Armor +2", "ID_FMP_MAGIC_ITEM_4731"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shared Valor Armor +3"] = new engine.RulesElement({
    name: "Shared Valor Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4732",
    source: "Player's Handbook 2",
    categories: ["Shared Valor Armor +3", "ID_FMP_MAGIC_ITEM_4732"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shared Valor Armor +4"] = new engine.RulesElement({
    name: "Shared Valor Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4733",
    source: "Player's Handbook 2",
    categories: ["Shared Valor Armor +4", "ID_FMP_MAGIC_ITEM_4733"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shared Valor Armor +5"] = new engine.RulesElement({
    name: "Shared Valor Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4734",
    source: "Player's Handbook 2",
    categories: ["Shared Valor Armor +5", "ID_FMP_MAGIC_ITEM_4734"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shared Valor Armor +6"] = new engine.RulesElement({
    name: "Shared Valor Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4735",
    source: "Player's Handbook 2",
    categories: ["Shared Valor Armor +6", "ID_FMP_MAGIC_ITEM_4735"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Skald's Armor +1"] = new engine.RulesElement({
    name: "Skald's Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4736",
    source: "Player's Handbook 2",
    categories: ["Skald's Armor +1", "ID_FMP_MAGIC_ITEM_4736"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2, "item");
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Skald's Armor +2"] = new engine.RulesElement({
    name: "Skald's Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4737",
    source: "Player's Handbook 2",
    categories: ["Skald's Armor +2", "ID_FMP_MAGIC_ITEM_4737"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2, "item");
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Skald's Armor +3"] = new engine.RulesElement({
    name: "Skald's Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4738",
    source: "Player's Handbook 2",
    categories: ["Skald's Armor +3", "ID_FMP_MAGIC_ITEM_4738"],
    rules: function(model) {
      model.statadd("Bluff Misc", 4, "item");
      model.statadd("Diplomacy Misc", 4, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Skald's Armor +4"] = new engine.RulesElement({
    name: "Skald's Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4739",
    source: "Player's Handbook 2",
    categories: ["Skald's Armor +4", "ID_FMP_MAGIC_ITEM_4739"],
    rules: function(model) {
      model.statadd("Bluff Misc", 4, "item");
      model.statadd("Diplomacy Misc", 4, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Skald's Armor +5"] = new engine.RulesElement({
    name: "Skald's Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4740",
    source: "Player's Handbook 2",
    categories: ["Skald's Armor +5", "ID_FMP_MAGIC_ITEM_4740"],
    rules: function(model) {
      model.statadd("Bluff Misc", 6, "item");
      model.statadd("Diplomacy Misc", 6, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Skald's Armor +6"] = new engine.RulesElement({
    name: "Skald's Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4741",
    source: "Player's Handbook 2",
    categories: ["Skald's Armor +6", "ID_FMP_MAGIC_ITEM_4741"],
    rules: function(model) {
      model.statadd("Bluff Misc", 6, "item");
      model.statadd("Diplomacy Misc", 6, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spirit Shield Armor +3"] = new engine.RulesElement({
    name: "Spirit Shield Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4742",
    source: "Player's Handbook 2",
    categories: ["Spirit Shield Armor +3", "ID_FMP_MAGIC_ITEM_4742"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spirit Shield Armor +4"] = new engine.RulesElement({
    name: "Spirit Shield Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4743",
    source: "Player's Handbook 2",
    categories: ["Spirit Shield Armor +4", "ID_FMP_MAGIC_ITEM_4743"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spirit Shield Armor +5"] = new engine.RulesElement({
    name: "Spirit Shield Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4744",
    source: "Player's Handbook 2",
    categories: ["Spirit Shield Armor +5", "ID_FMP_MAGIC_ITEM_4744"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spirit Shield Armor +6"] = new engine.RulesElement({
    name: "Spirit Shield Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4745",
    source: "Player's Handbook 2",
    categories: ["Spirit Shield Armor +6", "ID_FMP_MAGIC_ITEM_4745"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spring Renewal Totem +1"] = new engine.RulesElement({
    name: "Spring Renewal Totem +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4957",
    source: "Player's Handbook 2",
    categories: ["Spring Renewal Totem +1", "ID_FMP_MAGIC_ITEM_4957"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spring Renewal Totem +2"] = new engine.RulesElement({
    name: "Spring Renewal Totem +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4958",
    source: "Player's Handbook 2",
    categories: ["Spring Renewal Totem +2", "ID_FMP_MAGIC_ITEM_4958"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spring Renewal Totem +3"] = new engine.RulesElement({
    name: "Spring Renewal Totem +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4959",
    source: "Player's Handbook 2",
    categories: ["Spring Renewal Totem +3", "ID_FMP_MAGIC_ITEM_4959"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spring Renewal Totem +4"] = new engine.RulesElement({
    name: "Spring Renewal Totem +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4960",
    source: "Player's Handbook 2",
    categories: ["Spring Renewal Totem +4", "ID_FMP_MAGIC_ITEM_4960"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spring Renewal Totem +5"] = new engine.RulesElement({
    name: "Spring Renewal Totem +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4961",
    source: "Player's Handbook 2",
    categories: ["Spring Renewal Totem +5", "ID_FMP_MAGIC_ITEM_4961"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spring Renewal Totem +6"] = new engine.RulesElement({
    name: "Spring Renewal Totem +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4962",
    source: "Player's Handbook 2",
    categories: ["Spring Renewal Totem +6", "ID_FMP_MAGIC_ITEM_4962"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Distant Shielding +2"] = new engine.RulesElement({
    name: "Staff of Distant Shielding +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4839",
    source: "Player's Handbook 2",
    categories: ["Staff of Distant Shielding +2", "ID_FMP_MAGIC_ITEM_4839"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Distant Shielding +3"] = new engine.RulesElement({
    name: "Staff of Distant Shielding +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4840",
    source: "Player's Handbook 2",
    categories: ["Staff of Distant Shielding +3", "ID_FMP_MAGIC_ITEM_4840"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Distant Shielding +4"] = new engine.RulesElement({
    name: "Staff of Distant Shielding +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4841",
    source: "Player's Handbook 2",
    categories: ["Staff of Distant Shielding +4", "ID_FMP_MAGIC_ITEM_4841"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Distant Shielding +5"] = new engine.RulesElement({
    name: "Staff of Distant Shielding +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4842",
    source: "Player's Handbook 2",
    categories: ["Staff of Distant Shielding +5", "ID_FMP_MAGIC_ITEM_4842"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Distant Shielding +6"] = new engine.RulesElement({
    name: "Staff of Distant Shielding +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4843",
    source: "Player's Handbook 2",
    categories: ["Staff of Distant Shielding +6", "ID_FMP_MAGIC_ITEM_4843"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Provocation +2"] = new engine.RulesElement({
    name: "Staff of Provocation +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4844",
    source: "Player's Handbook 2",
    categories: ["Staff of Provocation +2", "ID_FMP_MAGIC_ITEM_4844"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Provocation +3"] = new engine.RulesElement({
    name: "Staff of Provocation +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4845",
    source: "Player's Handbook 2",
    categories: ["Staff of Provocation +3", "ID_FMP_MAGIC_ITEM_4845"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Provocation +4"] = new engine.RulesElement({
    name: "Staff of Provocation +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4846",
    source: "Player's Handbook 2",
    categories: ["Staff of Provocation +4", "ID_FMP_MAGIC_ITEM_4846"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Provocation +5"] = new engine.RulesElement({
    name: "Staff of Provocation +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4847",
    source: "Player's Handbook 2",
    categories: ["Staff of Provocation +5", "ID_FMP_MAGIC_ITEM_4847"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Provocation +6"] = new engine.RulesElement({
    name: "Staff of Provocation +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4848",
    source: "Player's Handbook 2",
    categories: ["Staff of Provocation +6", "ID_FMP_MAGIC_ITEM_4848"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Sunburst +3"] = new engine.RulesElement({
    name: "Staff of the Sunburst +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4849",
    source: "Player's Handbook 2",
    categories: ["Staff of the Sunburst +3", "ID_FMP_MAGIC_ITEM_4849"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Sunburst +4"] = new engine.RulesElement({
    name: "Staff of the Sunburst +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4850",
    source: "Player's Handbook 2",
    categories: ["Staff of the Sunburst +4", "ID_FMP_MAGIC_ITEM_4850"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Sunburst +5"] = new engine.RulesElement({
    name: "Staff of the Sunburst +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4851",
    source: "Player's Handbook 2",
    categories: ["Staff of the Sunburst +5", "ID_FMP_MAGIC_ITEM_4851"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Sunburst +6"] = new engine.RulesElement({
    name: "Staff of the Sunburst +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4852",
    source: "Player's Handbook 2",
    categories: ["Staff of the Sunburst +6", "ID_FMP_MAGIC_ITEM_4852"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sudden Escape Armor +6"] = new engine.RulesElement({
    name: "Sudden Escape Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4746",
    source: "Player's Handbook 2",
    categories: ["Sudden Escape Armor +6", "ID_FMP_MAGIC_ITEM_4746"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Summer Growth Totem +1"] = new engine.RulesElement({
    name: "Summer Growth Totem +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4963",
    source: "Player's Handbook 2",
    categories: ["Summer Growth Totem +1", "ID_FMP_MAGIC_ITEM_4963"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Summer Growth Totem +2"] = new engine.RulesElement({
    name: "Summer Growth Totem +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4964",
    source: "Player's Handbook 2",
    categories: ["Summer Growth Totem +2", "ID_FMP_MAGIC_ITEM_4964"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Summer Growth Totem +3"] = new engine.RulesElement({
    name: "Summer Growth Totem +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4965",
    source: "Player's Handbook 2",
    categories: ["Summer Growth Totem +3", "ID_FMP_MAGIC_ITEM_4965"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Summer Growth Totem +4"] = new engine.RulesElement({
    name: "Summer Growth Totem +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4966",
    source: "Player's Handbook 2",
    categories: ["Summer Growth Totem +4", "ID_FMP_MAGIC_ITEM_4966"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Summer Growth Totem +5"] = new engine.RulesElement({
    name: "Summer Growth Totem +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4967",
    source: "Player's Handbook 2",
    categories: ["Summer Growth Totem +5", "ID_FMP_MAGIC_ITEM_4967"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Summer Growth Totem +6"] = new engine.RulesElement({
    name: "Summer Growth Totem +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4968",
    source: "Player's Handbook 2",
    categories: ["Summer Growth Totem +6", "ID_FMP_MAGIC_ITEM_4968"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tooth of Chaos +1"] = new engine.RulesElement({
    name: "Tooth of Chaos +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4781",
    source: "Player's Handbook 2",
    categories: ["Tooth of Chaos +1", "ID_FMP_MAGIC_ITEM_4781"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tooth of Chaos +2"] = new engine.RulesElement({
    name: "Tooth of Chaos +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4782",
    source: "Player's Handbook 2",
    categories: ["Tooth of Chaos +2", "ID_FMP_MAGIC_ITEM_4782"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tooth of Chaos +3"] = new engine.RulesElement({
    name: "Tooth of Chaos +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4783",
    source: "Player's Handbook 2",
    categories: ["Tooth of Chaos +3", "ID_FMP_MAGIC_ITEM_4783"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tooth of Chaos +4"] = new engine.RulesElement({
    name: "Tooth of Chaos +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4784",
    source: "Player's Handbook 2",
    categories: ["Tooth of Chaos +4", "ID_FMP_MAGIC_ITEM_4784"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tooth of Chaos +5"] = new engine.RulesElement({
    name: "Tooth of Chaos +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4785",
    source: "Player's Handbook 2",
    categories: ["Tooth of Chaos +5", "ID_FMP_MAGIC_ITEM_4785"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tooth of Chaos +6"] = new engine.RulesElement({
    name: "Tooth of Chaos +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4786",
    source: "Player's Handbook 2",
    categories: ["Tooth of Chaos +6", "ID_FMP_MAGIC_ITEM_4786"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vigorous Resolve Vestments +1"] = new engine.RulesElement({
    name: "Vigorous Resolve Vestments +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4747",
    source: "Player's Handbook 2",
    categories: ["Vigorous Resolve Vestments +1", "ID_FMP_MAGIC_ITEM_4747"],
    rules: function(model) {
      model.statadd("Fortitude Defense", function() { /* while you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vigorous Resolve Vestments +2"] = new engine.RulesElement({
    name: "Vigorous Resolve Vestments +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4748",
    source: "Player's Handbook 2",
    categories: ["Vigorous Resolve Vestments +2", "ID_FMP_MAGIC_ITEM_4748"],
    rules: function(model) {
      model.statadd("Fortitude Defense", function() { /* while you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vigorous Resolve Vestments +3"] = new engine.RulesElement({
    name: "Vigorous Resolve Vestments +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4749",
    source: "Player's Handbook 2",
    categories: ["Vigorous Resolve Vestments +3", "ID_FMP_MAGIC_ITEM_4749"],
    rules: function(model) {
      model.statadd("Fortitude Defense", function() { /* while you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vigorous Resolve Vestments +4"] = new engine.RulesElement({
    name: "Vigorous Resolve Vestments +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4750",
    source: "Player's Handbook 2",
    categories: ["Vigorous Resolve Vestments +4", "ID_FMP_MAGIC_ITEM_4750"],
    rules: function(model) {
      model.statadd("Fortitude Defense", function() { /* while you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vigorous Resolve Vestments +5"] = new engine.RulesElement({
    name: "Vigorous Resolve Vestments +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4751",
    source: "Player's Handbook 2",
    categories: ["Vigorous Resolve Vestments +5", "ID_FMP_MAGIC_ITEM_4751"],
    rules: function(model) {
      model.statadd("Fortitude Defense", function() { /* while you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vigorous Resolve Vestments +6"] = new engine.RulesElement({
    name: "Vigorous Resolve Vestments +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4752",
    source: "Player's Handbook 2",
    categories: ["Vigorous Resolve Vestments +6", "ID_FMP_MAGIC_ITEM_4752"],
    rules: function(model) {
      model.statadd("Fortitude Defense", function() { /* while you are bloodied */ return 2; }, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warding Light Armor +3"] = new engine.RulesElement({
    name: "Warding Light Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4753",
    source: "Player's Handbook 2",
    categories: ["Warding Light Armor +3", "ID_FMP_MAGIC_ITEM_4753"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warding Light Armor +4"] = new engine.RulesElement({
    name: "Warding Light Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4754",
    source: "Player's Handbook 2",
    categories: ["Warding Light Armor +4", "ID_FMP_MAGIC_ITEM_4754"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warding Light Armor +5"] = new engine.RulesElement({
    name: "Warding Light Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4755",
    source: "Player's Handbook 2",
    categories: ["Warding Light Armor +5", "ID_FMP_MAGIC_ITEM_4755"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warding Light Armor +6"] = new engine.RulesElement({
    name: "Warding Light Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4756",
    source: "Player's Handbook 2",
    categories: ["Warding Light Armor +6", "ID_FMP_MAGIC_ITEM_4756"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warding Spirit Armor +1"] = new engine.RulesElement({
    name: "Warding Spirit Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4757",
    source: "Player's Handbook 2",
    categories: ["Warding Spirit Armor +1", "ID_FMP_MAGIC_ITEM_4757"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warding Spirit Armor +2"] = new engine.RulesElement({
    name: "Warding Spirit Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4758",
    source: "Player's Handbook 2",
    categories: ["Warding Spirit Armor +2", "ID_FMP_MAGIC_ITEM_4758"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warding Spirit Armor +3"] = new engine.RulesElement({
    name: "Warding Spirit Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4759",
    source: "Player's Handbook 2",
    categories: ["Warding Spirit Armor +3", "ID_FMP_MAGIC_ITEM_4759"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warding Spirit Armor +4"] = new engine.RulesElement({
    name: "Warding Spirit Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4760",
    source: "Player's Handbook 2",
    categories: ["Warding Spirit Armor +4", "ID_FMP_MAGIC_ITEM_4760"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warding Spirit Armor +5"] = new engine.RulesElement({
    name: "Warding Spirit Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4761",
    source: "Player's Handbook 2",
    categories: ["Warding Spirit Armor +5", "ID_FMP_MAGIC_ITEM_4761"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warding Spirit Armor +6"] = new engine.RulesElement({
    name: "Warding Spirit Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4762",
    source: "Player's Handbook 2",
    categories: ["Warding Spirit Armor +6", "ID_FMP_MAGIC_ITEM_4762"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Watcher's Horn (heroic tier)"] = new engine.RulesElement({
    name: "Watcher's Horn (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4864",
    source: "Player's Handbook 2",
    categories: ["Watcher's Horn (heroic tier)", "ID_FMP_MAGIC_ITEM_4864"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Watchful Spirit Totem +1"] = new engine.RulesElement({
    name: "Watchful Spirit Totem +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4969",
    source: "Player's Handbook 2",
    categories: ["Watchful Spirit Totem +1", "ID_FMP_MAGIC_ITEM_4969"],
    rules: function(model) {
      model.statadd("Perception Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Watchful Spirit Totem +2"] = new engine.RulesElement({
    name: "Watchful Spirit Totem +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4970",
    source: "Player's Handbook 2",
    categories: ["Watchful Spirit Totem +2", "ID_FMP_MAGIC_ITEM_4970"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Watchful Spirit Totem +3"] = new engine.RulesElement({
    name: "Watchful Spirit Totem +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4971",
    source: "Player's Handbook 2",
    categories: ["Watchful Spirit Totem +3", "ID_FMP_MAGIC_ITEM_4971"],
    rules: function(model) {
      model.statadd("Perception Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Watchful Spirit Totem +4"] = new engine.RulesElement({
    name: "Watchful Spirit Totem +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4972",
    source: "Player's Handbook 2",
    categories: ["Watchful Spirit Totem +4", "ID_FMP_MAGIC_ITEM_4972"],
    rules: function(model) {
      model.statadd("Perception Misc", 4, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Watchful Spirit Totem +5"] = new engine.RulesElement({
    name: "Watchful Spirit Totem +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4973",
    source: "Player's Handbook 2",
    categories: ["Watchful Spirit Totem +5", "ID_FMP_MAGIC_ITEM_4973"],
    rules: function(model) {
      model.statadd("Perception Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Watchful Spirit Totem +6"] = new engine.RulesElement({
    name: "Watchful Spirit Totem +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4974",
    source: "Player's Handbook 2",
    categories: ["Watchful Spirit Totem +6", "ID_FMP_MAGIC_ITEM_4974"],
    rules: function(model) {
      model.statadd("Perception Misc", 6, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winged Weapon +1"] = new engine.RulesElement({
    name: "Winged Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4787",
    source: "Player's Handbook 2",
    categories: ["Winged Weapon +1", "ID_FMP_MAGIC_ITEM_4787"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winged Weapon +2"] = new engine.RulesElement({
    name: "Winged Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4788",
    source: "Player's Handbook 2",
    categories: ["Winged Weapon +2", "ID_FMP_MAGIC_ITEM_4788"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winged Weapon +3"] = new engine.RulesElement({
    name: "Winged Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4789",
    source: "Player's Handbook 2",
    categories: ["Winged Weapon +3", "ID_FMP_MAGIC_ITEM_4789"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winged Weapon +4"] = new engine.RulesElement({
    name: "Winged Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4790",
    source: "Player's Handbook 2",
    categories: ["Winged Weapon +4", "ID_FMP_MAGIC_ITEM_4790"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winged Weapon +5"] = new engine.RulesElement({
    name: "Winged Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4791",
    source: "Player's Handbook 2",
    categories: ["Winged Weapon +5", "ID_FMP_MAGIC_ITEM_4791"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winged Weapon +6"] = new engine.RulesElement({
    name: "Winged Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4792",
    source: "Player's Handbook 2",
    categories: ["Winged Weapon +6", "ID_FMP_MAGIC_ITEM_4792"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winter's Grasp Totem +1"] = new engine.RulesElement({
    name: "Winter's Grasp Totem +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4975",
    source: "Player's Handbook 2",
    categories: ["Winter's Grasp Totem +1", "ID_FMP_MAGIC_ITEM_4975"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winter's Grasp Totem +2"] = new engine.RulesElement({
    name: "Winter's Grasp Totem +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4976",
    source: "Player's Handbook 2",
    categories: ["Winter's Grasp Totem +2", "ID_FMP_MAGIC_ITEM_4976"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winter's Grasp Totem +3"] = new engine.RulesElement({
    name: "Winter's Grasp Totem +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4977",
    source: "Player's Handbook 2",
    categories: ["Winter's Grasp Totem +3", "ID_FMP_MAGIC_ITEM_4977"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winter's Grasp Totem +4"] = new engine.RulesElement({
    name: "Winter's Grasp Totem +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4978",
    source: "Player's Handbook 2",
    categories: ["Winter's Grasp Totem +4", "ID_FMP_MAGIC_ITEM_4978"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winter's Grasp Totem +5"] = new engine.RulesElement({
    name: "Winter's Grasp Totem +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4979",
    source: "Player's Handbook 2",
    categories: ["Winter's Grasp Totem +5", "ID_FMP_MAGIC_ITEM_4979"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winter's Grasp Totem +6"] = new engine.RulesElement({
    name: "Winter's Grasp Totem +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4980",
    source: "Player's Handbook 2",
    categories: ["Winter's Grasp Totem +6", "ID_FMP_MAGIC_ITEM_4980"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wyrmtooth Dagger +1"] = new engine.RulesElement({
    name: "Wyrmtooth Dagger +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4793",
    source: "Player's Handbook 2",
    categories: ["Wyrmtooth Dagger +1", "ID_FMP_MAGIC_ITEM_4793"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wyrmtooth Dagger +2"] = new engine.RulesElement({
    name: "Wyrmtooth Dagger +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4794",
    source: "Player's Handbook 2",
    categories: ["Wyrmtooth Dagger +2", "ID_FMP_MAGIC_ITEM_4794"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wyrmtooth Dagger +3"] = new engine.RulesElement({
    name: "Wyrmtooth Dagger +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4795",
    source: "Player's Handbook 2",
    categories: ["Wyrmtooth Dagger +3", "ID_FMP_MAGIC_ITEM_4795"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wyrmtooth Dagger +4"] = new engine.RulesElement({
    name: "Wyrmtooth Dagger +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4796",
    source: "Player's Handbook 2",
    categories: ["Wyrmtooth Dagger +4", "ID_FMP_MAGIC_ITEM_4796"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wyrmtooth Dagger +5"] = new engine.RulesElement({
    name: "Wyrmtooth Dagger +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4797",
    source: "Player's Handbook 2",
    categories: ["Wyrmtooth Dagger +5", "ID_FMP_MAGIC_ITEM_4797"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wyrmtooth Dagger +6"] = new engine.RulesElement({
    name: "Wyrmtooth Dagger +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4798",
    source: "Player's Handbook 2",
    categories: ["Wyrmtooth Dagger +6", "ID_FMP_MAGIC_ITEM_4798"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
