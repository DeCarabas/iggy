define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Bravery Powder (level 13)"] = new engine.RulesElement({
    name: "Bravery Powder (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5406",
    source: "Dragon Magazine 376",
    categories: ["Bravery Powder (level 13)", "ID_FMP_MAGIC_ITEM_5406"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bravery Powder (level 18)"] = new engine.RulesElement({
    name: "Bravery Powder (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5405",
    source: "Dragon Magazine 376",
    categories: ["Bravery Powder (level 18)", "ID_FMP_MAGIC_ITEM_5405"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bravery Powder (level 23)"] = new engine.RulesElement({
    name: "Bravery Powder (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5407",
    source: "Dragon Magazine 376",
    categories: ["Bravery Powder (level 23)", "ID_FMP_MAGIC_ITEM_5407"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bravery Powder (level 28)"] = new engine.RulesElement({
    name: "Bravery Powder (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5408",
    source: "Dragon Magazine 376",
    categories: ["Bravery Powder (level 28)", "ID_FMP_MAGIC_ITEM_5408"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bravery Powder (level 3)"] = new engine.RulesElement({
    name: "Bravery Powder (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5403",
    source: "Dragon Magazine 376",
    categories: ["Bravery Powder (level 3)", "ID_FMP_MAGIC_ITEM_5403"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bravery Powder (level 8)"] = new engine.RulesElement({
    name: "Bravery Powder (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5404",
    source: "Dragon Magazine 376",
    categories: ["Bravery Powder (level 8)", "ID_FMP_MAGIC_ITEM_5404"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Corrosive Oil (level 13)"] = new engine.RulesElement({
    name: "Corrosive Oil (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5399",
    source: "Dragon Magazine 376",
    categories: ["Corrosive Oil (level 13)", "ID_FMP_MAGIC_ITEM_5399"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Corrosive Oil (level 18)"] = new engine.RulesElement({
    name: "Corrosive Oil (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5400",
    source: "Dragon Magazine 376",
    categories: ["Corrosive Oil (level 18)", "ID_FMP_MAGIC_ITEM_5400"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Corrosive Oil (level 23)"] = new engine.RulesElement({
    name: "Corrosive Oil (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5401",
    source: "Dragon Magazine 376",
    categories: ["Corrosive Oil (level 23)", "ID_FMP_MAGIC_ITEM_5401"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Corrosive Oil (level 28)"] = new engine.RulesElement({
    name: "Corrosive Oil (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5402",
    source: "Dragon Magazine 376",
    categories: ["Corrosive Oil (level 28)", "ID_FMP_MAGIC_ITEM_5402"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Corrosive Oil (level 3)"] = new engine.RulesElement({
    name: "Corrosive Oil (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5397",
    source: "Dragon Magazine 376",
    categories: ["Corrosive Oil (level 3)", "ID_FMP_MAGIC_ITEM_5397"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Corrosive Oil (level 8)"] = new engine.RulesElement({
    name: "Corrosive Oil (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5398",
    source: "Dragon Magazine 376",
    categories: ["Corrosive Oil (level 8)", "ID_FMP_MAGIC_ITEM_5398"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lifebane Weapon +3"] = new engine.RulesElement({
    name: "Lifebane Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5387",
    source: "Dragon Magazine 376",
    categories: ["Lifebane Weapon +3", "ID_FMP_MAGIC_ITEM_5387"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lifebane Weapon +4"] = new engine.RulesElement({
    name: "Lifebane Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5388",
    source: "Dragon Magazine 376",
    categories: ["Lifebane Weapon +4", "ID_FMP_MAGIC_ITEM_5388"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lifebane Weapon +5"] = new engine.RulesElement({
    name: "Lifebane Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5389",
    source: "Dragon Magazine 376",
    categories: ["Lifebane Weapon +5", "ID_FMP_MAGIC_ITEM_5389"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lifebane Weapon +6"] = new engine.RulesElement({
    name: "Lifebane Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_6945",
    source: "Dragon Magazine 376",
    categories: ["Lifebane Weapon +6", "ID_FMP_MAGIC_ITEM_6945"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Performer's Blade +2"] = new engine.RulesElement({
    name: "Performer's Blade +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_6832",
    source: "Dragon Magazine 376",
    categories: ["Performer's Blade +2", "ID_FMP_MAGIC_ITEM_6832"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Performer's Blade +3"] = new engine.RulesElement({
    name: "Performer's Blade +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_6837",
    source: "Dragon Magazine 376",
    categories: ["Performer's Blade +3", "ID_FMP_MAGIC_ITEM_6837"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Performer's Blade +4"] = new engine.RulesElement({
    name: "Performer's Blade +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_6838",
    source: "Dragon Magazine 376",
    categories: ["Performer's Blade +4", "ID_FMP_MAGIC_ITEM_6838"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Performer's Blade +5"] = new engine.RulesElement({
    name: "Performer's Blade +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_6839",
    source: "Dragon Magazine 376",
    categories: ["Performer's Blade +5", "ID_FMP_MAGIC_ITEM_6839"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Performer's Blade +6"] = new engine.RulesElement({
    name: "Performer's Blade +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_6840",
    source: "Dragon Magazine 376",
    categories: ["Performer's Blade +6", "ID_FMP_MAGIC_ITEM_6840"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rust Bomb (level 10)"] = new engine.RulesElement({
    name: "Rust Bomb (level 10)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5392",
    source: "Dragon Magazine 376",
    categories: ["Rust Bomb (level 10)", "ID_FMP_MAGIC_ITEM_5392"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rust Bomb (level 15)"] = new engine.RulesElement({
    name: "Rust Bomb (level 15)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5393",
    source: "Dragon Magazine 376",
    categories: ["Rust Bomb (level 15)", "ID_FMP_MAGIC_ITEM_5393"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rust Bomb (level 20)"] = new engine.RulesElement({
    name: "Rust Bomb (level 20)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5394",
    source: "Dragon Magazine 376",
    categories: ["Rust Bomb (level 20)", "ID_FMP_MAGIC_ITEM_5394"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rust Bomb (level 25)"] = new engine.RulesElement({
    name: "Rust Bomb (level 25)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5395",
    source: "Dragon Magazine 376",
    categories: ["Rust Bomb (level 25)", "ID_FMP_MAGIC_ITEM_5395"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rust Bomb (level 30)"] = new engine.RulesElement({
    name: "Rust Bomb (level 30)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5396",
    source: "Dragon Magazine 376",
    categories: ["Rust Bomb (level 30)", "ID_FMP_MAGIC_ITEM_5396"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rust Bomb (level 5)"] = new engine.RulesElement({
    name: "Rust Bomb (level 5)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5391",
    source: "Dragon Magazine 376",
    categories: ["Rust Bomb (level 5)", "ID_FMP_MAGIC_ITEM_5391"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
