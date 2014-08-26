define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Book of Undeniable Fire +1"] = new engine.RulesElement({
    name: "Book of Undeniable Fire +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4885",
    source: "Arcane Power",
    categories: ["Book of Undeniable Fire +1", "ID_FMP_MAGIC_ITEM_4885"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("fire") && element.hasCategory("5")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Book of Undeniable Fire +2"] = new engine.RulesElement({
    name: "Book of Undeniable Fire +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4886",
    source: "Arcane Power",
    categories: ["Book of Undeniable Fire +2", "ID_FMP_MAGIC_ITEM_4886"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("fire") && element.hasCategory("10")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Book of Undeniable Fire +3"] = new engine.RulesElement({
    name: "Book of Undeniable Fire +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4887",
    source: "Arcane Power",
    categories: ["Book of Undeniable Fire +3", "ID_FMP_MAGIC_ITEM_4887"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("fire") && element.hasCategory("15")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Book of Undeniable Fire +4"] = new engine.RulesElement({
    name: "Book of Undeniable Fire +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4888",
    source: "Arcane Power",
    categories: ["Book of Undeniable Fire +4", "ID_FMP_MAGIC_ITEM_4888"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("fire") && element.hasCategory("20")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Book of Undeniable Fire +5"] = new engine.RulesElement({
    name: "Book of Undeniable Fire +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4889",
    source: "Arcane Power",
    categories: ["Book of Undeniable Fire +5", "ID_FMP_MAGIC_ITEM_4889"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("fire") && element.hasCategory("25")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Book of Undeniable Fire +6"] = new engine.RulesElement({
    name: "Book of Undeniable Fire +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4890",
    source: "Arcane Power",
    categories: ["Book of Undeniable Fire +6", "ID_FMP_MAGIC_ITEM_4890"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("fire") && element.hasCategory("30")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Tome +1"] = new engine.RulesElement({
    name: "Magic Tome +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4891",
    source: "Arcane Power",
    categories: ["Magic Tome +1", "ID_FMP_MAGIC_ITEM_4891"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Tome +2"] = new engine.RulesElement({
    name: "Magic Tome +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4892",
    source: "Arcane Power",
    categories: ["Magic Tome +2", "ID_FMP_MAGIC_ITEM_4892"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Tome +3"] = new engine.RulesElement({
    name: "Magic Tome +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4893",
    source: "Arcane Power",
    categories: ["Magic Tome +3", "ID_FMP_MAGIC_ITEM_4893"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Tome +4"] = new engine.RulesElement({
    name: "Magic Tome +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4894",
    source: "Arcane Power",
    categories: ["Magic Tome +4", "ID_FMP_MAGIC_ITEM_4894"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Tome +5"] = new engine.RulesElement({
    name: "Magic Tome +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4895",
    source: "Arcane Power",
    categories: ["Magic Tome +5", "ID_FMP_MAGIC_ITEM_4895"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magic Tome +6"] = new engine.RulesElement({
    name: "Magic Tome +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4896",
    source: "Arcane Power",
    categories: ["Magic Tome +6", "ID_FMP_MAGIC_ITEM_4896"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Summoner's Tome +1"] = new engine.RulesElement({
    name: "Summoner's Tome +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4897",
    source: "Arcane Power",
    categories: ["Summoner's Tome +1", "ID_FMP_MAGIC_ITEM_4897"],
    rules: function(model) {
      model.statadd("conjuration:damage", function() { /* on opportunity attacks */ return 1; });
      model.statadd("summoning:damage", function() { /* on opportunity attacks */ return 1; });
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("summoning") && element.hasCategory("5")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Summoner's Tome +2"] = new engine.RulesElement({
    name: "Summoner's Tome +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4898",
    source: "Arcane Power",
    categories: ["Summoner's Tome +2", "ID_FMP_MAGIC_ITEM_4898"],
    rules: function(model) {
      model.statadd("conjuration:damage", function() { /* on opportunity attacks */ return 2; });
      model.statadd("summoning:damage", function() { /* on opportunity attacks */ return 2; });
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("summoning") && element.hasCategory("10")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Summoner's Tome +3"] = new engine.RulesElement({
    name: "Summoner's Tome +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4899",
    source: "Arcane Power",
    categories: ["Summoner's Tome +3", "ID_FMP_MAGIC_ITEM_4899"],
    rules: function(model) {
      model.statadd("conjuration:damage", function() { /* on opportunity attacks */ return 3; });
      model.statadd("summoning:damage", function() { /* on opportunity attacks */ return 3; });
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("summoning") && element.hasCategory("15")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Summoner's Tome +4"] = new engine.RulesElement({
    name: "Summoner's Tome +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4900",
    source: "Arcane Power",
    categories: ["Summoner's Tome +4", "ID_FMP_MAGIC_ITEM_4900"],
    rules: function(model) {
      model.statadd("conjuration:damage", function() { /* on opportunity attacks */ return 4; });
      model.statadd("summoning:damage", function() { /* on opportunity attacks */ return 4; });
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("summoning") && element.hasCategory("20")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Summoner's Tome +5"] = new engine.RulesElement({
    name: "Summoner's Tome +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4901",
    source: "Arcane Power",
    categories: ["Summoner's Tome +5", "ID_FMP_MAGIC_ITEM_4901"],
    rules: function(model) {
      model.statadd("conjuration:damage", function() { /* on opportunity attacks */ return 5; });
      model.statadd("summoning:damage", function() { /* on opportunity attacks */ return 5; });
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("summoning") && element.hasCategory("25")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Summoner's Tome +6"] = new engine.RulesElement({
    name: "Summoner's Tome +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4902",
    source: "Arcane Power",
    categories: ["Summoner's Tome +6", "ID_FMP_MAGIC_ITEM_4902"],
    rules: function(model) {
      model.statadd("conjuration:damage", function() { /* on opportunity attacks */ return 6; });
      model.statadd("summoning:damage", function() { /* on opportunity attacks */ return 6; });
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("summoning") && element.hasCategory("30")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Timeless Tome +6"] = new engine.RulesElement({
    name: "Timeless Tome +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4903",
    source: "Arcane Power",
    categories: ["Timeless Tome +6", "ID_FMP_MAGIC_ITEM_4903"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of Arrest +1"] = new engine.RulesElement({
    name: "Tome of Arrest +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4904",
    source: "Arcane Power",
    categories: ["Tome of Arrest +1", "ID_FMP_MAGIC_ITEM_4904"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of Arrest +2"] = new engine.RulesElement({
    name: "Tome of Arrest +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4905",
    source: "Arcane Power",
    categories: ["Tome of Arrest +2", "ID_FMP_MAGIC_ITEM_4905"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of Arrest +3"] = new engine.RulesElement({
    name: "Tome of Arrest +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4906",
    source: "Arcane Power",
    categories: ["Tome of Arrest +3", "ID_FMP_MAGIC_ITEM_4906"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of Arrest +4"] = new engine.RulesElement({
    name: "Tome of Arrest +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4907",
    source: "Arcane Power",
    categories: ["Tome of Arrest +4", "ID_FMP_MAGIC_ITEM_4907"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of Arrest +5"] = new engine.RulesElement({
    name: "Tome of Arrest +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4908",
    source: "Arcane Power",
    categories: ["Tome of Arrest +5", "ID_FMP_MAGIC_ITEM_4908"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of Arrest +6"] = new engine.RulesElement({
    name: "Tome of Arrest +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4909",
    source: "Arcane Power",
    categories: ["Tome of Arrest +6", "ID_FMP_MAGIC_ITEM_4909"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of Forty Steps +1"] = new engine.RulesElement({
    name: "Tome of Forty Steps +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4910",
    source: "Arcane Power",
    categories: ["Tome of Forty Steps +1", "ID_FMP_MAGIC_ITEM_4910"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of Forty Steps +2"] = new engine.RulesElement({
    name: "Tome of Forty Steps +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4911",
    source: "Arcane Power",
    categories: ["Tome of Forty Steps +2", "ID_FMP_MAGIC_ITEM_4911"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of Forty Steps +3"] = new engine.RulesElement({
    name: "Tome of Forty Steps +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4912",
    source: "Arcane Power",
    categories: ["Tome of Forty Steps +3", "ID_FMP_MAGIC_ITEM_4912"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of Forty Steps +4"] = new engine.RulesElement({
    name: "Tome of Forty Steps +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4913",
    source: "Arcane Power",
    categories: ["Tome of Forty Steps +4", "ID_FMP_MAGIC_ITEM_4913"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of Forty Steps +5"] = new engine.RulesElement({
    name: "Tome of Forty Steps +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4914",
    source: "Arcane Power",
    categories: ["Tome of Forty Steps +5", "ID_FMP_MAGIC_ITEM_4914"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of Forty Steps +6"] = new engine.RulesElement({
    name: "Tome of Forty Steps +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4915",
    source: "Arcane Power",
    categories: ["Tome of Forty Steps +6", "ID_FMP_MAGIC_ITEM_4915"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of the North Wind +1"] = new engine.RulesElement({
    name: "Tome of the North Wind +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4916",
    source: "Arcane Power",
    categories: ["Tome of the North Wind +1", "ID_FMP_MAGIC_ITEM_4916"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("cold") && element.hasCategory("3")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of the North Wind +2"] = new engine.RulesElement({
    name: "Tome of the North Wind +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4917",
    source: "Arcane Power",
    categories: ["Tome of the North Wind +2", "ID_FMP_MAGIC_ITEM_4917"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("cold") && element.hasCategory("8")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of the North Wind +3"] = new engine.RulesElement({
    name: "Tome of the North Wind +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4918",
    source: "Arcane Power",
    categories: ["Tome of the North Wind +3", "ID_FMP_MAGIC_ITEM_4918"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("cold") && element.hasCategory("13")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of the North Wind +4"] = new engine.RulesElement({
    name: "Tome of the North Wind +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4919",
    source: "Arcane Power",
    categories: ["Tome of the North Wind +4", "ID_FMP_MAGIC_ITEM_4919"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("cold") && element.hasCategory("18")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of the North Wind +5"] = new engine.RulesElement({
    name: "Tome of the North Wind +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4920",
    source: "Arcane Power",
    categories: ["Tome of the North Wind +5", "ID_FMP_MAGIC_ITEM_4920"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("cold") && element.hasCategory("23")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of the North Wind +6"] = new engine.RulesElement({
    name: "Tome of the North Wind +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4921",
    source: "Arcane Power",
    categories: ["Tome of the North Wind +6", "ID_FMP_MAGIC_ITEM_4921"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("cold") && element.hasCategory("28")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of the Replenishing Flame +1"] = new engine.RulesElement({
    name: "Tome of the Replenishing Flame +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4922",
    source: "Arcane Power",
    categories: ["Tome of the Replenishing Flame +1", "ID_FMP_MAGIC_ITEM_4922"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("fire") && element.hasCategory("2")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of the Replenishing Flame +2"] = new engine.RulesElement({
    name: "Tome of the Replenishing Flame +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4923",
    source: "Arcane Power",
    categories: ["Tome of the Replenishing Flame +2", "ID_FMP_MAGIC_ITEM_4923"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("fire") && element.hasCategory("7")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of the Replenishing Flame +3"] = new engine.RulesElement({
    name: "Tome of the Replenishing Flame +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4924",
    source: "Arcane Power",
    categories: ["Tome of the Replenishing Flame +3", "ID_FMP_MAGIC_ITEM_4924"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("fire") && element.hasCategory("12")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of the Replenishing Flame +4"] = new engine.RulesElement({
    name: "Tome of the Replenishing Flame +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4925",
    source: "Arcane Power",
    categories: ["Tome of the Replenishing Flame +4", "ID_FMP_MAGIC_ITEM_4925"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("fire") && element.hasCategory("17")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of the Replenishing Flame +5"] = new engine.RulesElement({
    name: "Tome of the Replenishing Flame +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4926",
    source: "Arcane Power",
    categories: ["Tome of the Replenishing Flame +5", "ID_FMP_MAGIC_ITEM_4926"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("fire") && element.hasCategory("22")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tome of the Replenishing Flame +6"] = new engine.RulesElement({
    name: "Tome of the Replenishing Flame +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4927",
    source: "Arcane Power",
    categories: ["Tome of the Replenishing Flame +6", "ID_FMP_MAGIC_ITEM_4927"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("fire") && element.hasCategory("27")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
