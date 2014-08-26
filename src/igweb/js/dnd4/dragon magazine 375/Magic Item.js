define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Graefling +2"] = new engine.RulesElement({
    name: "Graefling +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5380",
    source: "Dragon Magazine 375",
    categories: ["Graefling +2", "ID_FMP_MAGIC_ITEM_5380"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_VISION_DARKVISION"]);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wailing Tome +1"] = new engine.RulesElement({
    name: "Wailing Tome +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5040",
    source: "Dragon Magazine 375",
    categories: ["Wailing Tome +1", "ID_FMP_MAGIC_ITEM_5040"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && (element.hasCategory("psychic") || element.hasCategory("teleportation")) && element.hasCategory("5")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wailing Tome +2"] = new engine.RulesElement({
    name: "Wailing Tome +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5041",
    source: "Dragon Magazine 375",
    categories: ["Wailing Tome +2", "ID_FMP_MAGIC_ITEM_5041"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && (element.hasCategory("psychic") || element.hasCategory("teleportation")) && element.hasCategory("10")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wailing Tome +3"] = new engine.RulesElement({
    name: "Wailing Tome +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5042",
    source: "Dragon Magazine 375",
    categories: ["Wailing Tome +3", "ID_FMP_MAGIC_ITEM_5042"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && (element.hasCategory("psychic") || element.hasCategory("teleportation")) && element.hasCategory("15")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wailing Tome +4"] = new engine.RulesElement({
    name: "Wailing Tome +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5043",
    source: "Dragon Magazine 375",
    categories: ["Wailing Tome +4", "ID_FMP_MAGIC_ITEM_5043"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && (element.hasCategory("psychic") || element.hasCategory("teleportation")) && element.hasCategory("20")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wailing Tome +5"] = new engine.RulesElement({
    name: "Wailing Tome +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5044",
    source: "Dragon Magazine 375",
    categories: ["Wailing Tome +5", "ID_FMP_MAGIC_ITEM_5044"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && (element.hasCategory("psychic") || element.hasCategory("teleportation")) && element.hasCategory("25")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wailing Tome +6"] = new engine.RulesElement({
    name: "Wailing Tome +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5045",
    source: "Dragon Magazine 375",
    categories: ["Wailing Tome +6", "ID_FMP_MAGIC_ITEM_5045"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && (element.hasCategory("psychic") || element.hasCategory("teleportation")) && element.hasCategory("30")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wayfinder Epic Badge"] = new engine.RulesElement({
    name: "Wayfinder Epic Badge",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5385",
    source: "Dragon Magazine 375",
    categories: ["Wayfinder Epic Badge", "ID_FMP_MAGIC_ITEM_5385"],
    rules: function(model) {
      model.statadd("Perception Misc", function() { /* against aberrant creatures */ return 2; });
      model.statadd("Saving Throws", function() { /* against any effect an aberrant creature imposes on you */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wayfinder Heroic Badge"] = new engine.RulesElement({
    name: "Wayfinder Heroic Badge",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5039",
    source: "Dragon Magazine 375",
    categories: ["Wayfinder Heroic Badge", "ID_FMP_MAGIC_ITEM_5039"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wayfinder Paragon Badge"] = new engine.RulesElement({
    name: "Wayfinder Paragon Badge",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5384",
    source: "Dragon Magazine 375",
    categories: ["Wayfinder Paragon Badge", "ID_FMP_MAGIC_ITEM_5384"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
