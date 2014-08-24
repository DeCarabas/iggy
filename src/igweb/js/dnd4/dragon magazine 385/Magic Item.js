(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Alchemical Atomizer (heroic tier)"] = new RulesElement({
    name: "Alchemical Atomizer (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8977",
    source: "Dragon Magazine 385",
    categories: ["Alchemical Atomizer (heroic tier)", "ID_FMP_MAGIC_ITEM_8977"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemical Defense Nodes +1"] = new RulesElement({
    name: "Alchemical Defense Nodes +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8978",
    source: "Dragon Magazine 385",
    categories: ["Alchemical Defense Nodes +1", "ID_FMP_MAGIC_ITEM_8978"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemical Defense Nodes +2"] = new RulesElement({
    name: "Alchemical Defense Nodes +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8979",
    source: "Dragon Magazine 385",
    categories: ["Alchemical Defense Nodes +2", "ID_FMP_MAGIC_ITEM_8979"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemical Defense Nodes +3"] = new RulesElement({
    name: "Alchemical Defense Nodes +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8980",
    source: "Dragon Magazine 385",
    categories: ["Alchemical Defense Nodes +3", "ID_FMP_MAGIC_ITEM_8980"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemical Defense Nodes +4"] = new RulesElement({
    name: "Alchemical Defense Nodes +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8981",
    source: "Dragon Magazine 385",
    categories: ["Alchemical Defense Nodes +4", "ID_FMP_MAGIC_ITEM_8981"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemical Defense Nodes +5"] = new RulesElement({
    name: "Alchemical Defense Nodes +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8982",
    source: "Dragon Magazine 385",
    categories: ["Alchemical Defense Nodes +5", "ID_FMP_MAGIC_ITEM_8982"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemical Defense Nodes +6"] = new RulesElement({
    name: "Alchemical Defense Nodes +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8983",
    source: "Dragon Magazine 385",
    categories: ["Alchemical Defense Nodes +6", "ID_FMP_MAGIC_ITEM_8983"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemical Failsafe (epic tier)"] = new RulesElement({
    name: "Alchemical Failsafe (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8988",
    source: "Dragon Magazine 385",
    categories: ["Alchemical Failsafe (epic tier)", "ID_FMP_MAGIC_ITEM_8988"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemical Failsafe (heroic tier)"] = new RulesElement({
    name: "Alchemical Failsafe (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8984",
    source: "Dragon Magazine 385",
    categories: ["Alchemical Failsafe (heroic tier)", "ID_FMP_MAGIC_ITEM_8984"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemical Failsafe (paragon tier)"] = new RulesElement({
    name: "Alchemical Failsafe (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8986",
    source: "Dragon Magazine 385",
    categories: ["Alchemical Failsafe (paragon tier)", "ID_FMP_MAGIC_ITEM_8986"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemical Launcher (heroic tier)"] = new RulesElement({
    name: "Alchemical Launcher (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8989",
    source: "Dragon Magazine 385",
    categories: ["Alchemical Launcher (heroic tier)", "ID_FMP_MAGIC_ITEM_8989"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Avalanche Boots (heroic tier)"] = new RulesElement({
    name: "Avalanche Boots (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8990",
    source: "Dragon Magazine 385",
    categories: ["Avalanche Boots (heroic tier)", "ID_FMP_MAGIC_ITEM_8990"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Belt of Sonnlinor Righteousness (epic tier)"] = new RulesElement({
    name: "Belt of Sonnlinor Righteousness (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8995",
    source: "Dragon Magazine 385",
    categories: ["Belt of Sonnlinor Righteousness (epic tier)", "ID_FMP_MAGIC_ITEM_8995"],
    rules: function(model) {
      model.statadd("resist:all", function() { /* when you have 0 hit points or fewer */ return 30; }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Belt of Sonnlinor Righteousness (heroic tier)"] = new RulesElement({
    name: "Belt of Sonnlinor Righteousness (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8991",
    source: "Dragon Magazine 385",
    categories: ["Belt of Sonnlinor Righteousness (heroic tier)", "ID_FMP_MAGIC_ITEM_8991"],
    rules: function(model) {
      model.statadd("resist:all", function() { /* when you have 0 hit points or fewer */ return 10; }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Belt of Sonnlinor Righteousness (paragon tier)"] = new RulesElement({
    name: "Belt of Sonnlinor Righteousness (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8993",
    source: "Dragon Magazine 385",
    categories: ["Belt of Sonnlinor Righteousness (paragon tier)", "ID_FMP_MAGIC_ITEM_8993"],
    rules: function(model) {
      model.statadd("resist:all", function() { /* when you have 0 hit points or fewer */ return 20; }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragontooth Shield (heroic tier)"] = new RulesElement({
    name: "Dragontooth Shield (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8973",
    source: "Dragon Magazine 385",
    categories: ["Dragontooth Shield (heroic tier)", "ID_FMP_MAGIC_ITEM_8973"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dwarven Thrower +1"] = new RulesElement({
    name: "Dwarven Thrower +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8996",
    source: "Dragon Magazine 385",
    categories: ["Dwarven Thrower +1", "ID_FMP_MAGIC_ITEM_8996"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dwarven Thrower +2"] = new RulesElement({
    name: "Dwarven Thrower +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8997",
    source: "Dragon Magazine 385",
    categories: ["Dwarven Thrower +2", "ID_FMP_MAGIC_ITEM_8997"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dwarven Thrower +3"] = new RulesElement({
    name: "Dwarven Thrower +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8998",
    source: "Dragon Magazine 385",
    categories: ["Dwarven Thrower +3", "ID_FMP_MAGIC_ITEM_8998"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dwarven Thrower +4"] = new RulesElement({
    name: "Dwarven Thrower +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8999",
    source: "Dragon Magazine 385",
    categories: ["Dwarven Thrower +4", "ID_FMP_MAGIC_ITEM_8999"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dwarven Thrower +5"] = new RulesElement({
    name: "Dwarven Thrower +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9000",
    source: "Dragon Magazine 385",
    categories: ["Dwarven Thrower +5", "ID_FMP_MAGIC_ITEM_9000"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dwarven Thrower +6"] = new RulesElement({
    name: "Dwarven Thrower +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9001",
    source: "Dragon Magazine 385",
    categories: ["Dwarven Thrower +6", "ID_FMP_MAGIC_ITEM_9001"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fighting Shield (heroic tier)"] = new RulesElement({
    name: "Fighting Shield (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8974",
    source: "Dragon Magazine 385",
    categories: ["Fighting Shield (heroic tier)", "ID_FMP_MAGIC_ITEM_8974"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rubicant Blade +2"] = new RulesElement({
    name: "Rubicant Blade +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9003",
    source: "Dragon Magazine 385",
    categories: ["Rubicant Blade +2", "ID_FMP_MAGIC_ITEM_9003"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rubicant Blade +3"] = new RulesElement({
    name: "Rubicant Blade +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9004",
    source: "Dragon Magazine 385",
    categories: ["Rubicant Blade +3", "ID_FMP_MAGIC_ITEM_9004"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rubicant Blade +4"] = new RulesElement({
    name: "Rubicant Blade +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9005",
    source: "Dragon Magazine 385",
    categories: ["Rubicant Blade +4", "ID_FMP_MAGIC_ITEM_9005"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rubicant Blade +5"] = new RulesElement({
    name: "Rubicant Blade +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9006",
    source: "Dragon Magazine 385",
    categories: ["Rubicant Blade +5", "ID_FMP_MAGIC_ITEM_9006"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rubicant Blade +6"] = new RulesElement({
    name: "Rubicant Blade +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9007",
    source: "Dragon Magazine 385",
    categories: ["Rubicant Blade +6", "ID_FMP_MAGIC_ITEM_9007"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soul Shield (paragon tier)"] = new RulesElement({
    name: "Soul Shield (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8975",
    source: "Dragon Magazine 385",
    categories: ["Soul Shield (paragon tier)", "ID_FMP_MAGIC_ITEM_8975"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sun Shield (paragon tier)"] = new RulesElement({
    name: "Sun Shield (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8976",
    source: "Dragon Magazine 385",
    categories: ["Sun Shield (paragon tier)", "ID_FMP_MAGIC_ITEM_8976"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
})(this);
