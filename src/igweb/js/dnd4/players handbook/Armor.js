define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Armor = types['Armor'] || (types['Armor'] = {});
  te = Armor["Chainmail"] = new engine.RulesElement({
    name: "Chainmail",
    type: "Armor",
    id: "ID_FMP_ARMOR_4",
    source: "Player's Handbook",
    categories: ["Chainmail", "ID_FMP_ARMOR_4", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_CHAIN", "chain"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Armor");
      model.statadd("Armor Penalty", -1, "chain");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Cloth Armor (Basic Clothing)"] = new engine.RulesElement({
    name: "Cloth Armor (Basic Clothing)",
    type: "Armor",
    id: "ID_FMP_ARMOR_1",
    source: "Player's Handbook",
    categories: ["Cloth Armor (Basic Clothing)", "ID_FMP_ARMOR_1", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_CLOTH", "cloth"],
    rules: function(model) {
      model.statadd("Armor Class", 0, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Darkhide Armor"] = new engine.RulesElement({
    name: "Darkhide Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_14",
    source: "Player's Handbook",
    categories: ["Darkhide Armor", "ID_FMP_ARMOR_14", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_HIDE", "hide"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Armor");
      model.statadd("Armor Penalty", -1, "hide");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Elderhide Armor"] = new engine.RulesElement({
    name: "Elderhide Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_15",
    source: "Player's Handbook",
    categories: ["Elderhide Armor", "ID_FMP_ARMOR_15", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_HIDE", "hide"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Armor");
      model.statadd("Armor Penalty", -1, "hide");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Elderscale Armor"] = new engine.RulesElement({
    name: "Elderscale Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_19",
    source: "Player's Handbook",
    categories: ["Elderscale Armor", "ID_FMP_ARMOR_19", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_SCALE", "Scale"],
    rules: function(model) {
      model.statadd("Armor Class", 13, "Armor");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Feyleather Armor"] = new engine.RulesElement({
    name: "Feyleather Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_12",
    source: "Player's Handbook",
    categories: ["Feyleather Armor", "ID_FMP_ARMOR_12", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_LEATHER", "leather"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Feyweave Armor"] = new engine.RulesElement({
    name: "Feyweave Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_10",
    source: "Player's Handbook",
    categories: ["Feyweave Armor", "ID_FMP_ARMOR_10", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_CLOTH", "cloth"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Forgemail"] = new engine.RulesElement({
    name: "Forgemail",
    type: "Armor",
    id: "ID_FMP_ARMOR_16",
    source: "Player's Handbook",
    categories: ["Forgemail", "ID_FMP_ARMOR_16", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_CHAIN", "chain"],
    rules: function(model) {
      model.statadd("Armor Class", 9, "Armor");
      model.statadd("Armor Penalty", -1, "chain");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Godplate Armor"] = new engine.RulesElement({
    name: "Godplate Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_21",
    source: "Player's Handbook",
    categories: ["Godplate Armor", "ID_FMP_ARMOR_21", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_PLATE", "plate"],
    rules: function(model) {
      model.statadd("Armor Class", 14, "Armor");
      model.statadd("Armor Penalty", -2, "plate");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Heavy Shield"] = new engine.RulesElement({
    name: "Heavy Shield",
    type: "Armor",
    id: "ID_FMP_ARMOR_8",
    source: "Player's Handbook",
    categories: ["Heavy Shield", "ID_FMP_ARMOR_8", "ID_FMP_POWER_1235", "Shield", "ID_INTERNAL_CATEGORY_HEAVY_SHIELDS", "Heavy Shields"],
    rules: function(model) {
      model.statadd("Heavy Shield Defense Bonus", 2, "Heavy Shield Defense Bonus");
      model.statadd("Armor Class", function() { return model.stat("Heavy Shield Defense Bonus"); }, "Shield");
      model.statadd("Reflex Defense", function() { return model.stat("Heavy Shield Defense Bonus"); }, "Shield");
      model.statadd("Shield Bonus", 2, "Shield Contribution");
      model.statadd("Armor Penalty", -2, "Heavy Shields");
    }
  });
  byID[te.id] = te;
  
  te = Armor["Hide Armor"] = new engine.RulesElement({
    name: "Hide Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_3",
    source: "Player's Handbook",
    categories: ["Hide Armor", "ID_FMP_ARMOR_3", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_HIDE", "hide"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Armor");
      model.statadd("Armor Penalty", -1, "hide");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Leather Armor"] = new engine.RulesElement({
    name: "Leather Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_2",
    source: "Player's Handbook",
    categories: ["Leather Armor", "ID_FMP_ARMOR_2", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_LEATHER", "leather"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Light Shield"] = new engine.RulesElement({
    name: "Light Shield",
    type: "Armor",
    id: "ID_FMP_ARMOR_7",
    source: "Player's Handbook",
    categories: ["Light Shield", "ID_FMP_ARMOR_7", "ID_FMP_POWER_1235", "Shield", "ID_INTERNAL_CATEGORY_LIGHT_SHIELDS", "Light Shields"],
    rules: function(model) {
      model.statadd("Light Shield Defense Bonus", 1, "Light Shield Defense Bonus");
      model.statadd("Armor Class", function() { return model.stat("Light Shield Defense Bonus"); }, "Shield");
      model.statadd("Reflex Defense", function() { return model.stat("Light Shield Defense Bonus"); }, "Shield");
      model.statadd("Shield Bonus", 1, "Shield Contribution");
    }
  });
  byID[te.id] = te;
  
  te = Armor["Plate Armor"] = new engine.RulesElement({
    name: "Plate Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_6",
    source: "Player's Handbook",
    categories: ["Plate Armor", "ID_FMP_ARMOR_6", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_PLATE", "plate"],
    rules: function(model) {
      model.statadd("Armor Class", 8, "Armor");
      model.statadd("Armor Penalty", -2, "plate");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Scale Armor"] = new engine.RulesElement({
    name: "Scale Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_5",
    source: "Player's Handbook",
    categories: ["Scale Armor", "ID_FMP_ARMOR_5", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_SCALE", "Scale"],
    rules: function(model) {
      model.statadd("Armor Class", 7, "Armor");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Spiritmail"] = new engine.RulesElement({
    name: "Spiritmail",
    type: "Armor",
    id: "ID_FMP_ARMOR_17",
    source: "Player's Handbook",
    categories: ["Spiritmail", "ID_FMP_ARMOR_17", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_CHAIN", "chain"],
    rules: function(model) {
      model.statadd("Armor Class", 12, "Armor");
      model.statadd("Armor Penalty", -1, "chain");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Starleather Armor"] = new engine.RulesElement({
    name: "Starleather Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_13",
    source: "Player's Handbook",
    categories: ["Starleather Armor", "ID_FMP_ARMOR_13", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_LEATHER", "leather"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Starweave Armor"] = new engine.RulesElement({
    name: "Starweave Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_11",
    source: "Player's Handbook",
    categories: ["Starweave Armor", "ID_FMP_ARMOR_11", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_CLOTH", "cloth"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Warplate Armor"] = new engine.RulesElement({
    name: "Warplate Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_20",
    source: "Player's Handbook",
    categories: ["Warplate Armor", "ID_FMP_ARMOR_20", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_PLATE", "plate"],
    rules: function(model) {
      model.statadd("Armor Class", 11, "Armor");
      model.statadd("Armor Penalty", -2, "plate");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Wyrmscale Armor"] = new engine.RulesElement({
    name: "Wyrmscale Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_18",
    source: "Player's Handbook",
    categories: ["Wyrmscale Armor", "ID_FMP_ARMOR_18", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_SCALE", "Scale"],
    rules: function(model) {
      model.statadd("Armor Class", 10, "Armor");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
