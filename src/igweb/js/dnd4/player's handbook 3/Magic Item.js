(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Abduction Ki Focus +1"] = new RulesElement({
    name: "Abduction Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8690",
    source: "Player's Handbook 3",
    categories: ["Abduction Ki Focus +1", "ID_FMP_MAGIC_ITEM_8690"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Abduction Ki Focus +2"] = new RulesElement({
    name: "Abduction Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8691",
    source: "Player's Handbook 3",
    categories: ["Abduction Ki Focus +2", "ID_FMP_MAGIC_ITEM_8691"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Abduction Ki Focus +3"] = new RulesElement({
    name: "Abduction Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8692",
    source: "Player's Handbook 3",
    categories: ["Abduction Ki Focus +3", "ID_FMP_MAGIC_ITEM_8692"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Abduction Ki Focus +4"] = new RulesElement({
    name: "Abduction Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8693",
    source: "Player's Handbook 3",
    categories: ["Abduction Ki Focus +4", "ID_FMP_MAGIC_ITEM_8693"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Abduction Ki Focus +5"] = new RulesElement({
    name: "Abduction Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8694",
    source: "Player's Handbook 3",
    categories: ["Abduction Ki Focus +5", "ID_FMP_MAGIC_ITEM_8694"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Abduction Ki Focus +6"] = new RulesElement({
    name: "Abduction Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8695",
    source: "Player's Handbook 3",
    categories: ["Abduction Ki Focus +6", "ID_FMP_MAGIC_ITEM_8695"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Anathema Weapon +1"] = new RulesElement({
    name: "Anathema Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8607",
    source: "Player's Handbook 3",
    categories: ["Anathema Weapon +1", "ID_FMP_MAGIC_ITEM_8607"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Anathema Weapon +2"] = new RulesElement({
    name: "Anathema Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8608",
    source: "Player's Handbook 3",
    categories: ["Anathema Weapon +2", "ID_FMP_MAGIC_ITEM_8608"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Anathema Weapon +3"] = new RulesElement({
    name: "Anathema Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8609",
    source: "Player's Handbook 3",
    categories: ["Anathema Weapon +3", "ID_FMP_MAGIC_ITEM_8609"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Anathema Weapon +4"] = new RulesElement({
    name: "Anathema Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8610",
    source: "Player's Handbook 3",
    categories: ["Anathema Weapon +4", "ID_FMP_MAGIC_ITEM_8610"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Anathema Weapon +5"] = new RulesElement({
    name: "Anathema Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8611",
    source: "Player's Handbook 3",
    categories: ["Anathema Weapon +5", "ID_FMP_MAGIC_ITEM_8611"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Anathema Weapon +6"] = new RulesElement({
    name: "Anathema Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8612",
    source: "Player's Handbook 3",
    categories: ["Anathema Weapon +6", "ID_FMP_MAGIC_ITEM_8612"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Eyes +1"] = new RulesElement({
    name: "Armor of Eyes +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8527",
    source: "Player's Handbook 3",
    categories: ["Armor of Eyes +1", "ID_FMP_MAGIC_ITEM_8527"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "item");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Eyes +2"] = new RulesElement({
    name: "Armor of Eyes +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8528",
    source: "Player's Handbook 3",
    categories: ["Armor of Eyes +2", "ID_FMP_MAGIC_ITEM_8528"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Eyes +3"] = new RulesElement({
    name: "Armor of Eyes +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8529",
    source: "Player's Handbook 3",
    categories: ["Armor of Eyes +3", "ID_FMP_MAGIC_ITEM_8529"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Eyes +4"] = new RulesElement({
    name: "Armor of Eyes +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8530",
    source: "Player's Handbook 3",
    categories: ["Armor of Eyes +4", "ID_FMP_MAGIC_ITEM_8530"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Eyes +5"] = new RulesElement({
    name: "Armor of Eyes +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8531",
    source: "Player's Handbook 3",
    categories: ["Armor of Eyes +5", "ID_FMP_MAGIC_ITEM_8531"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Eyes +6"] = new RulesElement({
    name: "Armor of Eyes +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8532",
    source: "Player's Handbook 3",
    categories: ["Armor of Eyes +6", "ID_FMP_MAGIC_ITEM_8532"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Transport +2"] = new RulesElement({
    name: "Armor of Transport +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8551",
    source: "Player's Handbook 3",
    categories: ["Armor of Transport +2", "ID_FMP_MAGIC_ITEM_8551"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Transport +3"] = new RulesElement({
    name: "Armor of Transport +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8552",
    source: "Player's Handbook 3",
    categories: ["Armor of Transport +3", "ID_FMP_MAGIC_ITEM_8552"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Transport +4"] = new RulesElement({
    name: "Armor of Transport +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8553",
    source: "Player's Handbook 3",
    categories: ["Armor of Transport +4", "ID_FMP_MAGIC_ITEM_8553"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Transport +5"] = new RulesElement({
    name: "Armor of Transport +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8554",
    source: "Player's Handbook 3",
    categories: ["Armor of Transport +5", "ID_FMP_MAGIC_ITEM_8554"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Transport +6"] = new RulesElement({
    name: "Armor of Transport +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8555",
    source: "Player's Handbook 3",
    categories: ["Armor of Transport +6", "ID_FMP_MAGIC_ITEM_8555"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Aversion Staff +1"] = new RulesElement({
    name: "Aversion Staff +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8829",
    source: "Player's Handbook 3",
    categories: ["Aversion Staff +1", "ID_FMP_MAGIC_ITEM_8829"],
    rules: function(model) {
      model.statadd("AC", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
      model.statadd("Fortitude Defense", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
      model.statadd("Will Defense", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
      model.statadd("Reflex Defense", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Aversion Staff +2"] = new RulesElement({
    name: "Aversion Staff +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8830",
    source: "Player's Handbook 3",
    categories: ["Aversion Staff +2", "ID_FMP_MAGIC_ITEM_8830"],
    rules: function(model) {
      model.statadd("AC", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
      model.statadd("Fortitude Defense", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
      model.statadd("Will Defense", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
      model.statadd("Reflex Defense", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Aversion Staff +3"] = new RulesElement({
    name: "Aversion Staff +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8831",
    source: "Player's Handbook 3",
    categories: ["Aversion Staff +3", "ID_FMP_MAGIC_ITEM_8831"],
    rules: function(model) {
      model.statadd("AC", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
      model.statadd("Fortitude Defense", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
      model.statadd("Will Defense", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
      model.statadd("Reflex Defense", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Aversion Staff +4"] = new RulesElement({
    name: "Aversion Staff +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8832",
    source: "Player's Handbook 3",
    categories: ["Aversion Staff +4", "ID_FMP_MAGIC_ITEM_8832"],
    rules: function(model) {
      model.statadd("AC", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
      model.statadd("Fortitude Defense", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
      model.statadd("Will Defense", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
      model.statadd("Reflex Defense", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Aversion Staff +5"] = new RulesElement({
    name: "Aversion Staff +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8833",
    source: "Player's Handbook 3",
    categories: ["Aversion Staff +5", "ID_FMP_MAGIC_ITEM_8833"],
    rules: function(model) {
      model.statadd("AC", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
      model.statadd("Fortitude Defense", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
      model.statadd("Will Defense", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
      model.statadd("Reflex Defense", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Aversion Staff +6"] = new RulesElement({
    name: "Aversion Staff +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8834",
    source: "Player's Handbook 3",
    categories: ["Aversion Staff +6", "ID_FMP_MAGIC_ITEM_8834"],
    rules: function(model) {
      model.statadd("AC", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
      model.statadd("Fortitude Defense", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
      model.statadd("Will Defense", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
      model.statadd("Reflex Defense", function() { /* against attacks from enemies that are subject to effects caused by you */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Awakening Armor +1"] = new RulesElement({
    name: "Awakening Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8533",
    source: "Player's Handbook 3",
    categories: ["Awakening Armor +1", "ID_FMP_MAGIC_ITEM_8533"],
    rules: function(model) {
      model.statadd("Will Defense", function() { /* while bloodied */ return 1; });
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Awakening Armor +2"] = new RulesElement({
    name: "Awakening Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8534",
    source: "Player's Handbook 3",
    categories: ["Awakening Armor +2", "ID_FMP_MAGIC_ITEM_8534"],
    rules: function(model) {
      model.statadd("Will Defense", function() { /* while bloodied */ return 1; });
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Awakening Armor +3"] = new RulesElement({
    name: "Awakening Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8535",
    source: "Player's Handbook 3",
    categories: ["Awakening Armor +3", "ID_FMP_MAGIC_ITEM_8535"],
    rules: function(model) {
      model.statadd("Will Defense", function() { /* while bloodied */ return 1; });
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Awakening Armor +4"] = new RulesElement({
    name: "Awakening Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8536",
    source: "Player's Handbook 3",
    categories: ["Awakening Armor +4", "ID_FMP_MAGIC_ITEM_8536"],
    rules: function(model) {
      model.statadd("Will Defense", function() { /* while bloodied */ return 1; });
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Awakening Armor +5"] = new RulesElement({
    name: "Awakening Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8537",
    source: "Player's Handbook 3",
    categories: ["Awakening Armor +5", "ID_FMP_MAGIC_ITEM_8537"],
    rules: function(model) {
      model.statadd("Will Defense", function() { /* while bloodied */ return 1; });
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Awakening Armor +6"] = new RulesElement({
    name: "Awakening Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8538",
    source: "Player's Handbook 3",
    categories: ["Awakening Armor +6", "ID_FMP_MAGIC_ITEM_8538"],
    rules: function(model) {
      model.statadd("Will Defense", function() { /* while bloodied */ return 1; });
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Blazing Arc Ki Focus +1"] = new RulesElement({
    name: "Blazing Arc Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8696",
    source: "Player's Handbook 3",
    categories: ["Blazing Arc Ki Focus +1", "ID_FMP_MAGIC_ITEM_8696"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Blazing Arc Ki Focus +2"] = new RulesElement({
    name: "Blazing Arc Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8697",
    source: "Player's Handbook 3",
    categories: ["Blazing Arc Ki Focus +2", "ID_FMP_MAGIC_ITEM_8697"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Blazing Arc Ki Focus +3"] = new RulesElement({
    name: "Blazing Arc Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8698",
    source: "Player's Handbook 3",
    categories: ["Blazing Arc Ki Focus +3", "ID_FMP_MAGIC_ITEM_8698"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Blazing Arc Ki Focus +4"] = new RulesElement({
    name: "Blazing Arc Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8699",
    source: "Player's Handbook 3",
    categories: ["Blazing Arc Ki Focus +4", "ID_FMP_MAGIC_ITEM_8699"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Blazing Arc Ki Focus +5"] = new RulesElement({
    name: "Blazing Arc Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8700",
    source: "Player's Handbook 3",
    categories: ["Blazing Arc Ki Focus +5", "ID_FMP_MAGIC_ITEM_8700"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Blazing Arc Ki Focus +6"] = new RulesElement({
    name: "Blazing Arc Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8701",
    source: "Player's Handbook 3",
    categories: ["Blazing Arc Ki Focus +6", "ID_FMP_MAGIC_ITEM_8701"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Blurred Strike Ki Focus +1"] = new RulesElement({
    name: "Blurred Strike Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8947",
    source: "Player's Handbook 3",
    categories: ["Blurred Strike Ki Focus +1", "ID_FMP_MAGIC_ITEM_8947"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Blurred Strike Ki Focus +2"] = new RulesElement({
    name: "Blurred Strike Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8948",
    source: "Player's Handbook 3",
    categories: ["Blurred Strike Ki Focus +2", "ID_FMP_MAGIC_ITEM_8948"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Blurred Strike Ki Focus +3"] = new RulesElement({
    name: "Blurred Strike Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8949",
    source: "Player's Handbook 3",
    categories: ["Blurred Strike Ki Focus +3", "ID_FMP_MAGIC_ITEM_8949"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Blurred Strike Ki Focus +4"] = new RulesElement({
    name: "Blurred Strike Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8950",
    source: "Player's Handbook 3",
    categories: ["Blurred Strike Ki Focus +4", "ID_FMP_MAGIC_ITEM_8950"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Blurred Strike Ki Focus +5"] = new RulesElement({
    name: "Blurred Strike Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8951",
    source: "Player's Handbook 3",
    categories: ["Blurred Strike Ki Focus +5", "ID_FMP_MAGIC_ITEM_8951"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Blurred Strike Ki Focus +6"] = new RulesElement({
    name: "Blurred Strike Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8952",
    source: "Player's Handbook 3",
    categories: ["Blurred Strike Ki Focus +6", "ID_FMP_MAGIC_ITEM_8952"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cobra Strike Ki Focus +1"] = new RulesElement({
    name: "Cobra Strike Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8702",
    source: "Player's Handbook 3",
    categories: ["Cobra Strike Ki Focus +1", "ID_FMP_MAGIC_ITEM_8702"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against poison */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cobra Strike Ki Focus +2"] = new RulesElement({
    name: "Cobra Strike Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8703",
    source: "Player's Handbook 3",
    categories: ["Cobra Strike Ki Focus +2", "ID_FMP_MAGIC_ITEM_8703"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against poison */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cobra Strike Ki Focus +3"] = new RulesElement({
    name: "Cobra Strike Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8704",
    source: "Player's Handbook 3",
    categories: ["Cobra Strike Ki Focus +3", "ID_FMP_MAGIC_ITEM_8704"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against poison */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cobra Strike Ki Focus +4"] = new RulesElement({
    name: "Cobra Strike Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8705",
    source: "Player's Handbook 3",
    categories: ["Cobra Strike Ki Focus +4", "ID_FMP_MAGIC_ITEM_8705"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against poison */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cobra Strike Ki Focus +5"] = new RulesElement({
    name: "Cobra Strike Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8706",
    source: "Player's Handbook 3",
    categories: ["Cobra Strike Ki Focus +5", "ID_FMP_MAGIC_ITEM_8706"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against poison */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cobra Strike Ki Focus +6"] = new RulesElement({
    name: "Cobra Strike Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8707",
    source: "Player's Handbook 3",
    categories: ["Cobra Strike Ki Focus +6", "ID_FMP_MAGIC_ITEM_8707"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against poison */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cognizance Crystal (epic tier)"] = new RulesElement({
    name: "Cognizance Crystal (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8931",
    source: "Player's Handbook 3",
    categories: ["Cognizance Crystal (epic tier)", "ID_FMP_MAGIC_ITEM_8931"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cognizance Crystal (heroic tier)"] = new RulesElement({
    name: "Cognizance Crystal (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8927",
    source: "Player's Handbook 3",
    categories: ["Cognizance Crystal (heroic tier)", "ID_FMP_MAGIC_ITEM_8927"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cognizance Crystal (paragon tier)"] = new RulesElement({
    name: "Cognizance Crystal (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8929",
    source: "Player's Handbook 3",
    categories: ["Cognizance Crystal (paragon tier)", "ID_FMP_MAGIC_ITEM_8929"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Death Strike Ki Focus +1"] = new RulesElement({
    name: "Death Strike Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8708",
    source: "Player's Handbook 3",
    categories: ["Death Strike Ki Focus +1", "ID_FMP_MAGIC_ITEM_8708"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Death Strike Ki Focus +2"] = new RulesElement({
    name: "Death Strike Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8709",
    source: "Player's Handbook 3",
    categories: ["Death Strike Ki Focus +2", "ID_FMP_MAGIC_ITEM_8709"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Death Strike Ki Focus +3"] = new RulesElement({
    name: "Death Strike Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8710",
    source: "Player's Handbook 3",
    categories: ["Death Strike Ki Focus +3", "ID_FMP_MAGIC_ITEM_8710"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Death Strike Ki Focus +4"] = new RulesElement({
    name: "Death Strike Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8711",
    source: "Player's Handbook 3",
    categories: ["Death Strike Ki Focus +4", "ID_FMP_MAGIC_ITEM_8711"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Death Strike Ki Focus +5"] = new RulesElement({
    name: "Death Strike Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8712",
    source: "Player's Handbook 3",
    categories: ["Death Strike Ki Focus +5", "ID_FMP_MAGIC_ITEM_8712"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Death Strike Ki Focus +6"] = new RulesElement({
    name: "Death Strike Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8713",
    source: "Player's Handbook 3",
    categories: ["Death Strike Ki Focus +6", "ID_FMP_MAGIC_ITEM_8713"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Defensive Armor +1"] = new RulesElement({
    name: "Defensive Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8539",
    source: "Player's Handbook 3",
    categories: ["Defensive Armor +1", "ID_FMP_MAGIC_ITEM_8539"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Defensive Armor +2"] = new RulesElement({
    name: "Defensive Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8540",
    source: "Player's Handbook 3",
    categories: ["Defensive Armor +2", "ID_FMP_MAGIC_ITEM_8540"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Defensive Armor +3"] = new RulesElement({
    name: "Defensive Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8541",
    source: "Player's Handbook 3",
    categories: ["Defensive Armor +3", "ID_FMP_MAGIC_ITEM_8541"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Defensive Armor +4"] = new RulesElement({
    name: "Defensive Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8542",
    source: "Player's Handbook 3",
    categories: ["Defensive Armor +4", "ID_FMP_MAGIC_ITEM_8542"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Defensive Armor +5"] = new RulesElement({
    name: "Defensive Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8543",
    source: "Player's Handbook 3",
    categories: ["Defensive Armor +5", "ID_FMP_MAGIC_ITEM_8543"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Defensive Armor +6"] = new RulesElement({
    name: "Defensive Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8544",
    source: "Player's Handbook 3",
    categories: ["Defensive Armor +6", "ID_FMP_MAGIC_ITEM_8544"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dislocation Weapon +1"] = new RulesElement({
    name: "Dislocation Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8613",
    source: "Player's Handbook 3",
    categories: ["Dislocation Weapon +1", "ID_FMP_MAGIC_ITEM_8613"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dislocation Weapon +2"] = new RulesElement({
    name: "Dislocation Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8614",
    source: "Player's Handbook 3",
    categories: ["Dislocation Weapon +2", "ID_FMP_MAGIC_ITEM_8614"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dislocation Weapon +3"] = new RulesElement({
    name: "Dislocation Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8615",
    source: "Player's Handbook 3",
    categories: ["Dislocation Weapon +3", "ID_FMP_MAGIC_ITEM_8615"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dislocation Weapon +4"] = new RulesElement({
    name: "Dislocation Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8616",
    source: "Player's Handbook 3",
    categories: ["Dislocation Weapon +4", "ID_FMP_MAGIC_ITEM_8616"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dislocation Weapon +5"] = new RulesElement({
    name: "Dislocation Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8617",
    source: "Player's Handbook 3",
    categories: ["Dislocation Weapon +5", "ID_FMP_MAGIC_ITEM_8617"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dislocation Weapon +6"] = new RulesElement({
    name: "Dislocation Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8618",
    source: "Player's Handbook 3",
    categories: ["Dislocation Weapon +6", "ID_FMP_MAGIC_ITEM_8618"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ectoplasmic Armor +1"] = new RulesElement({
    name: "Ectoplasmic Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8545",
    source: "Player's Handbook 3",
    categories: ["Ectoplasmic Armor +1", "ID_FMP_MAGIC_ITEM_8545"],
    rules: function(model) {
      model.statadd("resist:psychic", 5, "resist");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ectoplasmic Armor +2"] = new RulesElement({
    name: "Ectoplasmic Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8546",
    source: "Player's Handbook 3",
    categories: ["Ectoplasmic Armor +2", "ID_FMP_MAGIC_ITEM_8546"],
    rules: function(model) {
      model.statadd("resist:psychic", 5, "resist");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ectoplasmic Armor +3"] = new RulesElement({
    name: "Ectoplasmic Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8547",
    source: "Player's Handbook 3",
    categories: ["Ectoplasmic Armor +3", "ID_FMP_MAGIC_ITEM_8547"],
    rules: function(model) {
      model.statadd("resist:psychic", 10, "resist");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ectoplasmic Armor +4"] = new RulesElement({
    name: "Ectoplasmic Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8548",
    source: "Player's Handbook 3",
    categories: ["Ectoplasmic Armor +4", "ID_FMP_MAGIC_ITEM_8548"],
    rules: function(model) {
      model.statadd("resist:psychic", 10, "resist");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ectoplasmic Armor +5"] = new RulesElement({
    name: "Ectoplasmic Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8549",
    source: "Player's Handbook 3",
    categories: ["Ectoplasmic Armor +5", "ID_FMP_MAGIC_ITEM_8549"],
    rules: function(model) {
      model.statadd("resist:psychic", 15, "resist");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ectoplasmic Armor +6"] = new RulesElement({
    name: "Ectoplasmic Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8550",
    source: "Player's Handbook 3",
    categories: ["Ectoplasmic Armor +6", "ID_FMP_MAGIC_ITEM_8550"],
    rules: function(model) {
      model.statadd("resist:psychic", 15, "resist");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elusive Action Ki Focus +1"] = new RulesElement({
    name: "Elusive Action Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8714",
    source: "Player's Handbook 3",
    categories: ["Elusive Action Ki Focus +1", "ID_FMP_MAGIC_ITEM_8714"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elusive Action Ki Focus +2"] = new RulesElement({
    name: "Elusive Action Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8715",
    source: "Player's Handbook 3",
    categories: ["Elusive Action Ki Focus +2", "ID_FMP_MAGIC_ITEM_8715"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elusive Action Ki Focus +3"] = new RulesElement({
    name: "Elusive Action Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8716",
    source: "Player's Handbook 3",
    categories: ["Elusive Action Ki Focus +3", "ID_FMP_MAGIC_ITEM_8716"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elusive Action Ki Focus +4"] = new RulesElement({
    name: "Elusive Action Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8717",
    source: "Player's Handbook 3",
    categories: ["Elusive Action Ki Focus +4", "ID_FMP_MAGIC_ITEM_8717"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elusive Action Ki Focus +5"] = new RulesElement({
    name: "Elusive Action Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8718",
    source: "Player's Handbook 3",
    categories: ["Elusive Action Ki Focus +5", "ID_FMP_MAGIC_ITEM_8718"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elusive Action Ki Focus +6"] = new RulesElement({
    name: "Elusive Action Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8719",
    source: "Player's Handbook 3",
    categories: ["Elusive Action Ki Focus +6", "ID_FMP_MAGIC_ITEM_8719"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elusive Armor +1"] = new RulesElement({
    name: "Elusive Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8556",
    source: "Player's Handbook 3",
    categories: ["Elusive Armor +1", "ID_FMP_MAGIC_ITEM_8556"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elusive Armor +2"] = new RulesElement({
    name: "Elusive Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8557",
    source: "Player's Handbook 3",
    categories: ["Elusive Armor +2", "ID_FMP_MAGIC_ITEM_8557"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elusive Armor +3"] = new RulesElement({
    name: "Elusive Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8558",
    source: "Player's Handbook 3",
    categories: ["Elusive Armor +3", "ID_FMP_MAGIC_ITEM_8558"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elusive Armor +4"] = new RulesElement({
    name: "Elusive Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8559",
    source: "Player's Handbook 3",
    categories: ["Elusive Armor +4", "ID_FMP_MAGIC_ITEM_8559"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elusive Armor +5"] = new RulesElement({
    name: "Elusive Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8560",
    source: "Player's Handbook 3",
    categories: ["Elusive Armor +5", "ID_FMP_MAGIC_ITEM_8560"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elusive Armor +6"] = new RulesElement({
    name: "Elusive Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8561",
    source: "Player's Handbook 3",
    categories: ["Elusive Armor +6", "ID_FMP_MAGIC_ITEM_8561"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feedback Armor +1"] = new RulesElement({
    name: "Feedback Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8562",
    source: "Player's Handbook 3",
    categories: ["Feedback Armor +1", "ID_FMP_MAGIC_ITEM_8562"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feedback Armor +2"] = new RulesElement({
    name: "Feedback Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8563",
    source: "Player's Handbook 3",
    categories: ["Feedback Armor +2", "ID_FMP_MAGIC_ITEM_8563"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feedback Armor +3"] = new RulesElement({
    name: "Feedback Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8564",
    source: "Player's Handbook 3",
    categories: ["Feedback Armor +3", "ID_FMP_MAGIC_ITEM_8564"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feedback Armor +4"] = new RulesElement({
    name: "Feedback Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8565",
    source: "Player's Handbook 3",
    categories: ["Feedback Armor +4", "ID_FMP_MAGIC_ITEM_8565"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feedback Armor +5"] = new RulesElement({
    name: "Feedback Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8566",
    source: "Player's Handbook 3",
    categories: ["Feedback Armor +5", "ID_FMP_MAGIC_ITEM_8566"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feedback Armor +6"] = new RulesElement({
    name: "Feedback Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8567",
    source: "Player's Handbook 3",
    categories: ["Feedback Armor +6", "ID_FMP_MAGIC_ITEM_8567"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flowform Armor +1"] = new RulesElement({
    name: "Flowform Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8568",
    source: "Player's Handbook 3",
    categories: ["Flowform Armor +1", "ID_FMP_MAGIC_ITEM_8568"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flowform Armor +2"] = new RulesElement({
    name: "Flowform Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8569",
    source: "Player's Handbook 3",
    categories: ["Flowform Armor +2", "ID_FMP_MAGIC_ITEM_8569"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flowform Armor +3"] = new RulesElement({
    name: "Flowform Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8570",
    source: "Player's Handbook 3",
    categories: ["Flowform Armor +3", "ID_FMP_MAGIC_ITEM_8570"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flowform Armor +4"] = new RulesElement({
    name: "Flowform Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8571",
    source: "Player's Handbook 3",
    categories: ["Flowform Armor +4", "ID_FMP_MAGIC_ITEM_8571"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flowform Armor +5"] = new RulesElement({
    name: "Flowform Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8572",
    source: "Player's Handbook 3",
    categories: ["Flowform Armor +5", "ID_FMP_MAGIC_ITEM_8572"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flowform Armor +6"] = new RulesElement({
    name: "Flowform Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8573",
    source: "Player's Handbook 3",
    categories: ["Flowform Armor +6", "ID_FMP_MAGIC_ITEM_8573"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ghost Strike Ki Focus +1"] = new RulesElement({
    name: "Ghost Strike Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8720",
    source: "Player's Handbook 3",
    categories: ["Ghost Strike Ki Focus +1", "ID_FMP_MAGIC_ITEM_8720"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ghost Strike Ki Focus +2"] = new RulesElement({
    name: "Ghost Strike Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8721",
    source: "Player's Handbook 3",
    categories: ["Ghost Strike Ki Focus +2", "ID_FMP_MAGIC_ITEM_8721"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ghost Strike Ki Focus +3"] = new RulesElement({
    name: "Ghost Strike Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8722",
    source: "Player's Handbook 3",
    categories: ["Ghost Strike Ki Focus +3", "ID_FMP_MAGIC_ITEM_8722"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ghost Strike Ki Focus +4"] = new RulesElement({
    name: "Ghost Strike Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8723",
    source: "Player's Handbook 3",
    categories: ["Ghost Strike Ki Focus +4", "ID_FMP_MAGIC_ITEM_8723"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ghost Strike Ki Focus +5"] = new RulesElement({
    name: "Ghost Strike Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8724",
    source: "Player's Handbook 3",
    categories: ["Ghost Strike Ki Focus +5", "ID_FMP_MAGIC_ITEM_8724"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ghost Strike Ki Focus +6"] = new RulesElement({
    name: "Ghost Strike Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8725",
    source: "Player's Handbook 3",
    categories: ["Ghost Strike Ki Focus +6", "ID_FMP_MAGIC_ITEM_8725"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gleaming Armor +1"] = new RulesElement({
    name: "Gleaming Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8574",
    source: "Player's Handbook 3",
    categories: ["Gleaming Armor +1", "ID_FMP_MAGIC_ITEM_8574"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gleaming Armor +2"] = new RulesElement({
    name: "Gleaming Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8575",
    source: "Player's Handbook 3",
    categories: ["Gleaming Armor +2", "ID_FMP_MAGIC_ITEM_8575"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gleaming Armor +3"] = new RulesElement({
    name: "Gleaming Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8576",
    source: "Player's Handbook 3",
    categories: ["Gleaming Armor +3", "ID_FMP_MAGIC_ITEM_8576"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gleaming Armor +4"] = new RulesElement({
    name: "Gleaming Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8577",
    source: "Player's Handbook 3",
    categories: ["Gleaming Armor +4", "ID_FMP_MAGIC_ITEM_8577"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gleaming Armor +5"] = new RulesElement({
    name: "Gleaming Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8578",
    source: "Player's Handbook 3",
    categories: ["Gleaming Armor +5", "ID_FMP_MAGIC_ITEM_8578"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gleaming Armor +6"] = new RulesElement({
    name: "Gleaming Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8579",
    source: "Player's Handbook 3",
    categories: ["Gleaming Armor +6", "ID_FMP_MAGIC_ITEM_8579"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guarding Weapon +2"] = new RulesElement({
    name: "Guarding Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8619",
    source: "Player's Handbook 3",
    categories: ["Guarding Weapon +2", "ID_FMP_MAGIC_ITEM_8619"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guarding Weapon +3"] = new RulesElement({
    name: "Guarding Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8620",
    source: "Player's Handbook 3",
    categories: ["Guarding Weapon +3", "ID_FMP_MAGIC_ITEM_8620"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guarding Weapon +4"] = new RulesElement({
    name: "Guarding Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8621",
    source: "Player's Handbook 3",
    categories: ["Guarding Weapon +4", "ID_FMP_MAGIC_ITEM_8621"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guarding Weapon +5"] = new RulesElement({
    name: "Guarding Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8622",
    source: "Player's Handbook 3",
    categories: ["Guarding Weapon +5", "ID_FMP_MAGIC_ITEM_8622"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guarding Weapon +6"] = new RulesElement({
    name: "Guarding Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8623",
    source: "Player's Handbook 3",
    categories: ["Guarding Weapon +6", "ID_FMP_MAGIC_ITEM_8623"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Harvester's Staff +1"] = new RulesElement({
    name: "Harvester's Staff +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8835",
    source: "Player's Handbook 3",
    categories: ["Harvester's Staff +1", "ID_FMP_MAGIC_ITEM_8835"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Harvester's Staff +2"] = new RulesElement({
    name: "Harvester's Staff +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8836",
    source: "Player's Handbook 3",
    categories: ["Harvester's Staff +2", "ID_FMP_MAGIC_ITEM_8836"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Harvester's Staff +3"] = new RulesElement({
    name: "Harvester's Staff +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8837",
    source: "Player's Handbook 3",
    categories: ["Harvester's Staff +3", "ID_FMP_MAGIC_ITEM_8837"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Harvester's Staff +4"] = new RulesElement({
    name: "Harvester's Staff +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8838",
    source: "Player's Handbook 3",
    categories: ["Harvester's Staff +4", "ID_FMP_MAGIC_ITEM_8838"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Harvester's Staff +5"] = new RulesElement({
    name: "Harvester's Staff +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8839",
    source: "Player's Handbook 3",
    categories: ["Harvester's Staff +5", "ID_FMP_MAGIC_ITEM_8839"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Harvester's Staff +6"] = new RulesElement({
    name: "Harvester's Staff +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8840",
    source: "Player's Handbook 3",
    categories: ["Harvester's Staff +6", "ID_FMP_MAGIC_ITEM_8840"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Impeding Ki Focus +1"] = new RulesElement({
    name: "Impeding Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8726",
    source: "Player's Handbook 3",
    categories: ["Impeding Ki Focus +1", "ID_FMP_MAGIC_ITEM_8726"],
    rules: function(model) {
      model.statadd("melee:damage(Impeding Ki Focus +1)", function() { /* against dazed or stunned enemies */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Impeding Ki Focus +2"] = new RulesElement({
    name: "Impeding Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8727",
    source: "Player's Handbook 3",
    categories: ["Impeding Ki Focus +2", "ID_FMP_MAGIC_ITEM_8727"],
    rules: function(model) {
      model.statadd("melee:damage(Impeding Ki Focus +2)", function() { /* against dazed or stunned enemies */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Impeding Ki Focus +3"] = new RulesElement({
    name: "Impeding Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8728",
    source: "Player's Handbook 3",
    categories: ["Impeding Ki Focus +3", "ID_FMP_MAGIC_ITEM_8728"],
    rules: function(model) {
      model.statadd("melee:damage(Impeding Ki Focus +3)", function() { /* against dazed or stunned enemies */ return 4; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Impeding Ki Focus +4"] = new RulesElement({
    name: "Impeding Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8729",
    source: "Player's Handbook 3",
    categories: ["Impeding Ki Focus +4", "ID_FMP_MAGIC_ITEM_8729"],
    rules: function(model) {
      model.statadd("melee:damage(Impeding Ki Focus +4)", function() { /* against dazed or stunned enemies */ return 4; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Impeding Ki Focus +5"] = new RulesElement({
    name: "Impeding Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8730",
    source: "Player's Handbook 3",
    categories: ["Impeding Ki Focus +5", "ID_FMP_MAGIC_ITEM_8730"],
    rules: function(model) {
      model.statadd("melee:damage(Impeding Ki Focus +5)", function() { /* against dazed or stunned enemies */ return 6; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Impeding Ki Focus +6"] = new RulesElement({
    name: "Impeding Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8731",
    source: "Player's Handbook 3",
    categories: ["Impeding Ki Focus +6", "ID_FMP_MAGIC_ITEM_8731"],
    rules: function(model) {
      model.statadd("melee:damage(Impeding Ki Focus +6)", function() { /* against dazed or stunned enemies */ return 6; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inertial Weapon +1"] = new RulesElement({
    name: "Inertial Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8624",
    source: "Player's Handbook 3",
    categories: ["Inertial Weapon +1", "ID_FMP_MAGIC_ITEM_8624"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inertial Weapon +2"] = new RulesElement({
    name: "Inertial Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8625",
    source: "Player's Handbook 3",
    categories: ["Inertial Weapon +2", "ID_FMP_MAGIC_ITEM_8625"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inertial Weapon +3"] = new RulesElement({
    name: "Inertial Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8626",
    source: "Player's Handbook 3",
    categories: ["Inertial Weapon +3", "ID_FMP_MAGIC_ITEM_8626"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inertial Weapon +4"] = new RulesElement({
    name: "Inertial Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8627",
    source: "Player's Handbook 3",
    categories: ["Inertial Weapon +4", "ID_FMP_MAGIC_ITEM_8627"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inertial Weapon +5"] = new RulesElement({
    name: "Inertial Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8628",
    source: "Player's Handbook 3",
    categories: ["Inertial Weapon +5", "ID_FMP_MAGIC_ITEM_8628"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inertial Weapon +6"] = new RulesElement({
    name: "Inertial Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8629",
    source: "Player's Handbook 3",
    categories: ["Inertial Weapon +6", "ID_FMP_MAGIC_ITEM_8629"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironclad Armor +1"] = new RulesElement({
    name: "Ironclad Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8580",
    source: "Player's Handbook 3",
    categories: ["Ironclad Armor +1", "ID_FMP_MAGIC_ITEM_8580"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironclad Armor +2"] = new RulesElement({
    name: "Ironclad Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8581",
    source: "Player's Handbook 3",
    categories: ["Ironclad Armor +2", "ID_FMP_MAGIC_ITEM_8581"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironclad Armor +3"] = new RulesElement({
    name: "Ironclad Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8582",
    source: "Player's Handbook 3",
    categories: ["Ironclad Armor +3", "ID_FMP_MAGIC_ITEM_8582"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironclad Armor +4"] = new RulesElement({
    name: "Ironclad Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8583",
    source: "Player's Handbook 3",
    categories: ["Ironclad Armor +4", "ID_FMP_MAGIC_ITEM_8583"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironclad Armor +5"] = new RulesElement({
    name: "Ironclad Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8584",
    source: "Player's Handbook 3",
    categories: ["Ironclad Armor +5", "ID_FMP_MAGIC_ITEM_8584"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironclad Armor +6"] = new RulesElement({
    name: "Ironclad Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8585",
    source: "Player's Handbook 3",
    categories: ["Ironclad Armor +6", "ID_FMP_MAGIC_ITEM_8585"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Joyous Armor +1"] = new RulesElement({
    name: "Joyous Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8586",
    source: "Player's Handbook 3",
    categories: ["Joyous Armor +1", "ID_FMP_MAGIC_ITEM_8586"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Joyous Armor +2"] = new RulesElement({
    name: "Joyous Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8587",
    source: "Player's Handbook 3",
    categories: ["Joyous Armor +2", "ID_FMP_MAGIC_ITEM_8587"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Joyous Armor +3"] = new RulesElement({
    name: "Joyous Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8588",
    source: "Player's Handbook 3",
    categories: ["Joyous Armor +3", "ID_FMP_MAGIC_ITEM_8588"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Joyous Armor +4"] = new RulesElement({
    name: "Joyous Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8589",
    source: "Player's Handbook 3",
    categories: ["Joyous Armor +4", "ID_FMP_MAGIC_ITEM_8589"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Joyous Armor +5"] = new RulesElement({
    name: "Joyous Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8590",
    source: "Player's Handbook 3",
    categories: ["Joyous Armor +5", "ID_FMP_MAGIC_ITEM_8590"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Joyous Armor +6"] = new RulesElement({
    name: "Joyous Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8591",
    source: "Player's Handbook 3",
    categories: ["Joyous Armor +6", "ID_FMP_MAGIC_ITEM_8591"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ki Weapon +1"] = new RulesElement({
    name: "Ki Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8630",
    source: "Player's Handbook 3",
    categories: ["Ki Weapon +1", "ID_FMP_MAGIC_ITEM_8630"],
    rules: function(model) {
      model.statadd("Flurry of Blows:damage", function() { /* once per turn */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ki Weapon +2"] = new RulesElement({
    name: "Ki Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8631",
    source: "Player's Handbook 3",
    categories: ["Ki Weapon +2", "ID_FMP_MAGIC_ITEM_8631"],
    rules: function(model) {
      model.statadd("Flurry of Blows:damage", function() { /* once per turn */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ki Weapon +3"] = new RulesElement({
    name: "Ki Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8632",
    source: "Player's Handbook 3",
    categories: ["Ki Weapon +3", "ID_FMP_MAGIC_ITEM_8632"],
    rules: function(model) {
      model.statadd("Flurry of Blows:damage", function() { /* once per turn */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ki Weapon +4"] = new RulesElement({
    name: "Ki Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8633",
    source: "Player's Handbook 3",
    categories: ["Ki Weapon +4", "ID_FMP_MAGIC_ITEM_8633"],
    rules: function(model) {
      model.statadd("Flurry of Blows:damage", function() { /* once per turn */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ki Weapon +5"] = new RulesElement({
    name: "Ki Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8634",
    source: "Player's Handbook 3",
    categories: ["Ki Weapon +5", "ID_FMP_MAGIC_ITEM_8634"],
    rules: function(model) {
      model.statadd("Flurry of Blows:damage", function() { /* once per turn */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ki Weapon +6"] = new RulesElement({
    name: "Ki Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8635",
    source: "Player's Handbook 3",
    categories: ["Ki Weapon +6", "ID_FMP_MAGIC_ITEM_8635"],
    rules: function(model) {
      model.statadd("Flurry of Blows:damage", function() { /* once per turn */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Manifester Weapon +1"] = new RulesElement({
    name: "Manifester Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8636",
    source: "Player's Handbook 3",
    categories: ["Manifester Weapon +1", "ID_FMP_MAGIC_ITEM_8636"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Manifester Weapon +2"] = new RulesElement({
    name: "Manifester Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8637",
    source: "Player's Handbook 3",
    categories: ["Manifester Weapon +2", "ID_FMP_MAGIC_ITEM_8637"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Manifester Weapon +3"] = new RulesElement({
    name: "Manifester Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8638",
    source: "Player's Handbook 3",
    categories: ["Manifester Weapon +3", "ID_FMP_MAGIC_ITEM_8638"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Manifester Weapon +4"] = new RulesElement({
    name: "Manifester Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8639",
    source: "Player's Handbook 3",
    categories: ["Manifester Weapon +4", "ID_FMP_MAGIC_ITEM_8639"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Manifester Weapon +5"] = new RulesElement({
    name: "Manifester Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8640",
    source: "Player's Handbook 3",
    categories: ["Manifester Weapon +5", "ID_FMP_MAGIC_ITEM_8640"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Manifester Weapon +6"] = new RulesElement({
    name: "Manifester Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8641",
    source: "Player's Handbook 3",
    categories: ["Manifester Weapon +6", "ID_FMP_MAGIC_ITEM_8641"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mighty Strike Ki Focus +1"] = new RulesElement({
    name: "Mighty Strike Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8732",
    source: "Player's Handbook 3",
    categories: ["Mighty Strike Ki Focus +1", "ID_FMP_MAGIC_ITEM_8732"],
    rules: function(model) {
      model.statadd("Flurry of Blows:damage(Mighty Strike Ki Focus +1)", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mighty Strike Ki Focus +2"] = new RulesElement({
    name: "Mighty Strike Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8733",
    source: "Player's Handbook 3",
    categories: ["Mighty Strike Ki Focus +2", "ID_FMP_MAGIC_ITEM_8733"],
    rules: function(model) {
      model.statadd("Flurry of Blows:damage(Mighty Strike Ki Focus +2)", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mighty Strike Ki Focus +3"] = new RulesElement({
    name: "Mighty Strike Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8734",
    source: "Player's Handbook 3",
    categories: ["Mighty Strike Ki Focus +3", "ID_FMP_MAGIC_ITEM_8734"],
    rules: function(model) {
      model.statadd("Flurry of Blows:damage(Mighty Strike Ki Focus +3)", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mighty Strike Ki Focus +4"] = new RulesElement({
    name: "Mighty Strike Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8735",
    source: "Player's Handbook 3",
    categories: ["Mighty Strike Ki Focus +4", "ID_FMP_MAGIC_ITEM_8735"],
    rules: function(model) {
      model.statadd("Flurry of Blows:damage(Mighty Strike Ki Focus +4)", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mighty Strike Ki Focus +5"] = new RulesElement({
    name: "Mighty Strike Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8736",
    source: "Player's Handbook 3",
    categories: ["Mighty Strike Ki Focus +5", "ID_FMP_MAGIC_ITEM_8736"],
    rules: function(model) {
      model.statadd("Flurry of Blows:damage(Mighty Strike Ki Focus +5)", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mighty Strike Ki Focus +6"] = new RulesElement({
    name: "Mighty Strike Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8737",
    source: "Player's Handbook 3",
    categories: ["Mighty Strike Ki Focus +6", "ID_FMP_MAGIC_ITEM_8737"],
    rules: function(model) {
      model.statadd("Flurry of Blows:damage(Mighty Strike Ki Focus +6)", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mindcrusher Weapon +1"] = new RulesElement({
    name: "Mindcrusher Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8642",
    source: "Player's Handbook 3",
    categories: ["Mindcrusher Weapon +1", "ID_FMP_MAGIC_ITEM_8642"],
    rules: function(model) {
      model.statadd("psychic:damage(Mindcrusher Weapon +1)", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mindcrusher Weapon +2"] = new RulesElement({
    name: "Mindcrusher Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8643",
    source: "Player's Handbook 3",
    categories: ["Mindcrusher Weapon +2", "ID_FMP_MAGIC_ITEM_8643"],
    rules: function(model) {
      model.statadd("psychic:damage(Mindcrusher Weapon +2)", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mindcrusher Weapon +3"] = new RulesElement({
    name: "Mindcrusher Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8644",
    source: "Player's Handbook 3",
    categories: ["Mindcrusher Weapon +3", "ID_FMP_MAGIC_ITEM_8644"],
    rules: function(model) {
      model.statadd("psychic:damage(Mindcrusher Weapon +3)", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mindcrusher Weapon +4"] = new RulesElement({
    name: "Mindcrusher Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8645",
    source: "Player's Handbook 3",
    categories: ["Mindcrusher Weapon +4", "ID_FMP_MAGIC_ITEM_8645"],
    rules: function(model) {
      model.statadd("psychic:damage(Mindcrusher Weapon +4)", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mindcrusher Weapon +5"] = new RulesElement({
    name: "Mindcrusher Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8646",
    source: "Player's Handbook 3",
    categories: ["Mindcrusher Weapon +5", "ID_FMP_MAGIC_ITEM_8646"],
    rules: function(model) {
      model.statadd("psychic:damage(Mindcrusher Weapon +5)", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mindcrusher Weapon +6"] = new RulesElement({
    name: "Mindcrusher Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8647",
    source: "Player's Handbook 3",
    categories: ["Mindcrusher Weapon +6", "ID_FMP_MAGIC_ITEM_8647"],
    rules: function(model) {
      model.statadd("psychic:damage(Mindcrusher Weapon +6)", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Frustrated Recovery +1"] = new RulesElement({
    name: "Orb of Frustrated Recovery +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8745",
    source: "Player's Handbook 3",
    categories: ["Orb of Frustrated Recovery +1", "ID_FMP_MAGIC_ITEM_8745"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Frustrated Recovery +2"] = new RulesElement({
    name: "Orb of Frustrated Recovery +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8746",
    source: "Player's Handbook 3",
    categories: ["Orb of Frustrated Recovery +2", "ID_FMP_MAGIC_ITEM_8746"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Frustrated Recovery +3"] = new RulesElement({
    name: "Orb of Frustrated Recovery +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8747",
    source: "Player's Handbook 3",
    categories: ["Orb of Frustrated Recovery +3", "ID_FMP_MAGIC_ITEM_8747"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Frustrated Recovery +4"] = new RulesElement({
    name: "Orb of Frustrated Recovery +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8748",
    source: "Player's Handbook 3",
    categories: ["Orb of Frustrated Recovery +4", "ID_FMP_MAGIC_ITEM_8748"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Frustrated Recovery +5"] = new RulesElement({
    name: "Orb of Frustrated Recovery +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8749",
    source: "Player's Handbook 3",
    categories: ["Orb of Frustrated Recovery +5", "ID_FMP_MAGIC_ITEM_8749"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Frustrated Recovery +6"] = new RulesElement({
    name: "Orb of Frustrated Recovery +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8750",
    source: "Player's Handbook 3",
    categories: ["Orb of Frustrated Recovery +6", "ID_FMP_MAGIC_ITEM_8750"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Life Conversion +1"] = new RulesElement({
    name: "Orb of Life Conversion +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8751",
    source: "Player's Handbook 3",
    categories: ["Orb of Life Conversion +1", "ID_FMP_MAGIC_ITEM_8751"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Life Conversion +2"] = new RulesElement({
    name: "Orb of Life Conversion +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8752",
    source: "Player's Handbook 3",
    categories: ["Orb of Life Conversion +2", "ID_FMP_MAGIC_ITEM_8752"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Life Conversion +3"] = new RulesElement({
    name: "Orb of Life Conversion +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8753",
    source: "Player's Handbook 3",
    categories: ["Orb of Life Conversion +3", "ID_FMP_MAGIC_ITEM_8753"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Life Conversion +4"] = new RulesElement({
    name: "Orb of Life Conversion +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8754",
    source: "Player's Handbook 3",
    categories: ["Orb of Life Conversion +4", "ID_FMP_MAGIC_ITEM_8754"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Life Conversion +5"] = new RulesElement({
    name: "Orb of Life Conversion +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8755",
    source: "Player's Handbook 3",
    categories: ["Orb of Life Conversion +5", "ID_FMP_MAGIC_ITEM_8755"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Life Conversion +6"] = new RulesElement({
    name: "Orb of Life Conversion +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8756",
    source: "Player's Handbook 3",
    categories: ["Orb of Life Conversion +6", "ID_FMP_MAGIC_ITEM_8756"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Mental Constitution +1"] = new RulesElement({
    name: "Orb of Mental Constitution +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8953",
    source: "Player's Handbook 3",
    categories: ["Orb of Mental Constitution +1", "ID_FMP_MAGIC_ITEM_8953"],
    rules: function(model) {
      model.statadd("Endurance Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Mental Constitution +2"] = new RulesElement({
    name: "Orb of Mental Constitution +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8954",
    source: "Player's Handbook 3",
    categories: ["Orb of Mental Constitution +2", "ID_FMP_MAGIC_ITEM_8954"],
    rules: function(model) {
      model.statadd("Endurance Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Mental Constitution +3"] = new RulesElement({
    name: "Orb of Mental Constitution +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8955",
    source: "Player's Handbook 3",
    categories: ["Orb of Mental Constitution +3", "ID_FMP_MAGIC_ITEM_8955"],
    rules: function(model) {
      model.statadd("Endurance Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Mental Constitution +4"] = new RulesElement({
    name: "Orb of Mental Constitution +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8956",
    source: "Player's Handbook 3",
    categories: ["Orb of Mental Constitution +4", "ID_FMP_MAGIC_ITEM_8956"],
    rules: function(model) {
      model.statadd("Endurance Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Mental Constitution +5"] = new RulesElement({
    name: "Orb of Mental Constitution +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8957",
    source: "Player's Handbook 3",
    categories: ["Orb of Mental Constitution +5", "ID_FMP_MAGIC_ITEM_8957"],
    rules: function(model) {
      model.statadd("Endurance Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Mental Constitution +6"] = new RulesElement({
    name: "Orb of Mental Constitution +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8958",
    source: "Player's Handbook 3",
    categories: ["Orb of Mental Constitution +6", "ID_FMP_MAGIC_ITEM_8958"],
    rules: function(model) {
      model.statadd("Endurance Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Nimble Thoughts +1"] = new RulesElement({
    name: "Orb of Nimble Thoughts +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8763",
    source: "Player's Handbook 3",
    categories: ["Orb of Nimble Thoughts +1", "ID_FMP_MAGIC_ITEM_8763"],
    rules: function(model) {
      model.statadd("Initiative Misc", function() { return model.stat("Intelligence modifier"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Nimble Thoughts +2"] = new RulesElement({
    name: "Orb of Nimble Thoughts +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8764",
    source: "Player's Handbook 3",
    categories: ["Orb of Nimble Thoughts +2", "ID_FMP_MAGIC_ITEM_8764"],
    rules: function(model) {
      model.statadd("Initiative Misc", function() { return model.stat("Intelligence modifier"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Nimble Thoughts +3"] = new RulesElement({
    name: "Orb of Nimble Thoughts +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8765",
    source: "Player's Handbook 3",
    categories: ["Orb of Nimble Thoughts +3", "ID_FMP_MAGIC_ITEM_8765"],
    rules: function(model) {
      model.statadd("Initiative Misc", function() { return model.stat("Intelligence modifier"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Nimble Thoughts +4"] = new RulesElement({
    name: "Orb of Nimble Thoughts +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8766",
    source: "Player's Handbook 3",
    categories: ["Orb of Nimble Thoughts +4", "ID_FMP_MAGIC_ITEM_8766"],
    rules: function(model) {
      model.statadd("Initiative Misc", function() { return model.stat("Intelligence modifier"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Nimble Thoughts +5"] = new RulesElement({
    name: "Orb of Nimble Thoughts +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8767",
    source: "Player's Handbook 3",
    categories: ["Orb of Nimble Thoughts +5", "ID_FMP_MAGIC_ITEM_8767"],
    rules: function(model) {
      model.statadd("Initiative Misc", function() { return model.stat("Intelligence modifier"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Nimble Thoughts +6"] = new RulesElement({
    name: "Orb of Nimble Thoughts +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8768",
    source: "Player's Handbook 3",
    categories: ["Orb of Nimble Thoughts +6", "ID_FMP_MAGIC_ITEM_8768"],
    rules: function(model) {
      model.statadd("Initiative Misc", function() { return model.stat("Intelligence modifier"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Psionic Recovery +1"] = new RulesElement({
    name: "Orb of Psionic Recovery +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8769",
    source: "Player's Handbook 3",
    categories: ["Orb of Psionic Recovery +1", "ID_FMP_MAGIC_ITEM_8769"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Psionic Recovery +2"] = new RulesElement({
    name: "Orb of Psionic Recovery +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8770",
    source: "Player's Handbook 3",
    categories: ["Orb of Psionic Recovery +2", "ID_FMP_MAGIC_ITEM_8770"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Psionic Recovery +3"] = new RulesElement({
    name: "Orb of Psionic Recovery +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8771",
    source: "Player's Handbook 3",
    categories: ["Orb of Psionic Recovery +3", "ID_FMP_MAGIC_ITEM_8771"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Psionic Recovery +4"] = new RulesElement({
    name: "Orb of Psionic Recovery +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8772",
    source: "Player's Handbook 3",
    categories: ["Orb of Psionic Recovery +4", "ID_FMP_MAGIC_ITEM_8772"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Psionic Recovery +5"] = new RulesElement({
    name: "Orb of Psionic Recovery +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8773",
    source: "Player's Handbook 3",
    categories: ["Orb of Psionic Recovery +5", "ID_FMP_MAGIC_ITEM_8773"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Psionic Recovery +6"] = new RulesElement({
    name: "Orb of Psionic Recovery +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8774",
    source: "Player's Handbook 3",
    categories: ["Orb of Psionic Recovery +6", "ID_FMP_MAGIC_ITEM_8774"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Psychic Conversion +1"] = new RulesElement({
    name: "Orb of Psychic Conversion +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8775",
    source: "Player's Handbook 3",
    categories: ["Orb of Psychic Conversion +1", "ID_FMP_MAGIC_ITEM_8775"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Psychic Conversion +2"] = new RulesElement({
    name: "Orb of Psychic Conversion +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8776",
    source: "Player's Handbook 3",
    categories: ["Orb of Psychic Conversion +2", "ID_FMP_MAGIC_ITEM_8776"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Psychic Conversion +3"] = new RulesElement({
    name: "Orb of Psychic Conversion +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8777",
    source: "Player's Handbook 3",
    categories: ["Orb of Psychic Conversion +3", "ID_FMP_MAGIC_ITEM_8777"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Psychic Conversion +4"] = new RulesElement({
    name: "Orb of Psychic Conversion +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8778",
    source: "Player's Handbook 3",
    categories: ["Orb of Psychic Conversion +4", "ID_FMP_MAGIC_ITEM_8778"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Psychic Conversion +5"] = new RulesElement({
    name: "Orb of Psychic Conversion +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8779",
    source: "Player's Handbook 3",
    categories: ["Orb of Psychic Conversion +5", "ID_FMP_MAGIC_ITEM_8779"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Psychic Conversion +6"] = new RulesElement({
    name: "Orb of Psychic Conversion +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8780",
    source: "Player's Handbook 3",
    categories: ["Orb of Psychic Conversion +6", "ID_FMP_MAGIC_ITEM_8780"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Canny Liar +1"] = new RulesElement({
    name: "Orb of the Canny Liar +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8781",
    source: "Player's Handbook 3",
    categories: ["Orb of the Canny Liar +1", "ID_FMP_MAGIC_ITEM_8781"],
    rules: function(model) {
      model.statadd("Bluff Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Canny Liar +2"] = new RulesElement({
    name: "Orb of the Canny Liar +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8782",
    source: "Player's Handbook 3",
    categories: ["Orb of the Canny Liar +2", "ID_FMP_MAGIC_ITEM_8782"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Canny Liar +3"] = new RulesElement({
    name: "Orb of the Canny Liar +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8783",
    source: "Player's Handbook 3",
    categories: ["Orb of the Canny Liar +3", "ID_FMP_MAGIC_ITEM_8783"],
    rules: function(model) {
      model.statadd("Bluff Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Canny Liar +4"] = new RulesElement({
    name: "Orb of the Canny Liar +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8784",
    source: "Player's Handbook 3",
    categories: ["Orb of the Canny Liar +4", "ID_FMP_MAGIC_ITEM_8784"],
    rules: function(model) {
      model.statadd("Bluff Misc", 4, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Canny Liar +5"] = new RulesElement({
    name: "Orb of the Canny Liar +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8785",
    source: "Player's Handbook 3",
    categories: ["Orb of the Canny Liar +5", "ID_FMP_MAGIC_ITEM_8785"],
    rules: function(model) {
      model.statadd("Bluff Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Canny Liar +6"] = new RulesElement({
    name: "Orb of the Canny Liar +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8786",
    source: "Player's Handbook 3",
    categories: ["Orb of the Canny Liar +6", "ID_FMP_MAGIC_ITEM_8786"],
    rules: function(model) {
      model.statadd("Bluff Misc", 6, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Deft Negotiator +1"] = new RulesElement({
    name: "Orb of the Deft Negotiator +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8787",
    source: "Player's Handbook 3",
    categories: ["Orb of the Deft Negotiator +1", "ID_FMP_MAGIC_ITEM_8787"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Deft Negotiator +2"] = new RulesElement({
    name: "Orb of the Deft Negotiator +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8788",
    source: "Player's Handbook 3",
    categories: ["Orb of the Deft Negotiator +2", "ID_FMP_MAGIC_ITEM_8788"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Deft Negotiator +3"] = new RulesElement({
    name: "Orb of the Deft Negotiator +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8789",
    source: "Player's Handbook 3",
    categories: ["Orb of the Deft Negotiator +3", "ID_FMP_MAGIC_ITEM_8789"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Deft Negotiator +4"] = new RulesElement({
    name: "Orb of the Deft Negotiator +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8790",
    source: "Player's Handbook 3",
    categories: ["Orb of the Deft Negotiator +4", "ID_FMP_MAGIC_ITEM_8790"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 4, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Deft Negotiator +5"] = new RulesElement({
    name: "Orb of the Deft Negotiator +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8791",
    source: "Player's Handbook 3",
    categories: ["Orb of the Deft Negotiator +5", "ID_FMP_MAGIC_ITEM_8791"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Deft Negotiator +6"] = new RulesElement({
    name: "Orb of the Deft Negotiator +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8792",
    source: "Player's Handbook 3",
    categories: ["Orb of the Deft Negotiator +6", "ID_FMP_MAGIC_ITEM_8792"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 6, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Furtive Mind +1"] = new RulesElement({
    name: "Orb of the Furtive Mind +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8793",
    source: "Player's Handbook 3",
    categories: ["Orb of the Furtive Mind +1", "ID_FMP_MAGIC_ITEM_8793"],
    rules: function(model) {
      model.statadd("Stealth Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Furtive Mind +2"] = new RulesElement({
    name: "Orb of the Furtive Mind +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8794",
    source: "Player's Handbook 3",
    categories: ["Orb of the Furtive Mind +2", "ID_FMP_MAGIC_ITEM_8794"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Furtive Mind +3"] = new RulesElement({
    name: "Orb of the Furtive Mind +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8795",
    source: "Player's Handbook 3",
    categories: ["Orb of the Furtive Mind +3", "ID_FMP_MAGIC_ITEM_8795"],
    rules: function(model) {
      model.statadd("Stealth Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Furtive Mind +4"] = new RulesElement({
    name: "Orb of the Furtive Mind +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8796",
    source: "Player's Handbook 3",
    categories: ["Orb of the Furtive Mind +4", "ID_FMP_MAGIC_ITEM_8796"],
    rules: function(model) {
      model.statadd("Stealth Misc", 4, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Furtive Mind +5"] = new RulesElement({
    name: "Orb of the Furtive Mind +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8797",
    source: "Player's Handbook 3",
    categories: ["Orb of the Furtive Mind +5", "ID_FMP_MAGIC_ITEM_8797"],
    rules: function(model) {
      model.statadd("Stealth Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Furtive Mind +6"] = new RulesElement({
    name: "Orb of the Furtive Mind +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8798",
    source: "Player's Handbook 3",
    categories: ["Orb of the Furtive Mind +6", "ID_FMP_MAGIC_ITEM_8798"],
    rules: function(model) {
      model.statadd("Stealth Misc", 6, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Menacing Impulse +1"] = new RulesElement({
    name: "Orb of the Menacing Impulse +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8799",
    source: "Player's Handbook 3",
    categories: ["Orb of the Menacing Impulse +1", "ID_FMP_MAGIC_ITEM_8799"],
    rules: function(model) {
      model.statadd("Insight Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Menacing Impulse +2"] = new RulesElement({
    name: "Orb of the Menacing Impulse +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8800",
    source: "Player's Handbook 3",
    categories: ["Orb of the Menacing Impulse +2", "ID_FMP_MAGIC_ITEM_8800"],
    rules: function(model) {
      model.statadd("Insight Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Menacing Impulse +3"] = new RulesElement({
    name: "Orb of the Menacing Impulse +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8801",
    source: "Player's Handbook 3",
    categories: ["Orb of the Menacing Impulse +3", "ID_FMP_MAGIC_ITEM_8801"],
    rules: function(model) {
      model.statadd("Insight Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Menacing Impulse +4"] = new RulesElement({
    name: "Orb of the Menacing Impulse +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8802",
    source: "Player's Handbook 3",
    categories: ["Orb of the Menacing Impulse +4", "ID_FMP_MAGIC_ITEM_8802"],
    rules: function(model) {
      model.statadd("Insight Misc", 4, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Menacing Impulse +5"] = new RulesElement({
    name: "Orb of the Menacing Impulse +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8803",
    source: "Player's Handbook 3",
    categories: ["Orb of the Menacing Impulse +5", "ID_FMP_MAGIC_ITEM_8803"],
    rules: function(model) {
      model.statadd("Insight Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Menacing Impulse +6"] = new RulesElement({
    name: "Orb of the Menacing Impulse +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8804",
    source: "Player's Handbook 3",
    categories: ["Orb of the Menacing Impulse +6", "ID_FMP_MAGIC_ITEM_8804"],
    rules: function(model) {
      model.statadd("Insight Misc", 6, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Peerless Artist +1"] = new RulesElement({
    name: "Orb of the Peerless Artist +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8805",
    source: "Player's Handbook 3",
    categories: ["Orb of the Peerless Artist +1", "ID_FMP_MAGIC_ITEM_8805"],
    rules: function(model) {
      model.statadd("Insight Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Peerless Artist +2"] = new RulesElement({
    name: "Orb of the Peerless Artist +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8806",
    source: "Player's Handbook 3",
    categories: ["Orb of the Peerless Artist +2", "ID_FMP_MAGIC_ITEM_8806"],
    rules: function(model) {
      model.statadd("Insight Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Peerless Artist +3"] = new RulesElement({
    name: "Orb of the Peerless Artist +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8807",
    source: "Player's Handbook 3",
    categories: ["Orb of the Peerless Artist +3", "ID_FMP_MAGIC_ITEM_8807"],
    rules: function(model) {
      model.statadd("Insight Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Peerless Artist +4"] = new RulesElement({
    name: "Orb of the Peerless Artist +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8808",
    source: "Player's Handbook 3",
    categories: ["Orb of the Peerless Artist +4", "ID_FMP_MAGIC_ITEM_8808"],
    rules: function(model) {
      model.statadd("Insight Misc", 4, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Peerless Artist +5"] = new RulesElement({
    name: "Orb of the Peerless Artist +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8809",
    source: "Player's Handbook 3",
    categories: ["Orb of the Peerless Artist +5", "ID_FMP_MAGIC_ITEM_8809"],
    rules: function(model) {
      model.statadd("Insight Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Peerless Artist +6"] = new RulesElement({
    name: "Orb of the Peerless Artist +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8810",
    source: "Player's Handbook 3",
    categories: ["Orb of the Peerless Artist +6", "ID_FMP_MAGIC_ITEM_8810"],
    rules: function(model) {
      model.statadd("Insight Misc", 6, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Sympathetic Eye +1"] = new RulesElement({
    name: "Orb of the Sympathetic Eye +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8811",
    source: "Player's Handbook 3",
    categories: ["Orb of the Sympathetic Eye +1", "ID_FMP_MAGIC_ITEM_8811"],
    rules: function(model) {
      model.statadd("Insight Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Sympathetic Eye +2"] = new RulesElement({
    name: "Orb of the Sympathetic Eye +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8812",
    source: "Player's Handbook 3",
    categories: ["Orb of the Sympathetic Eye +2", "ID_FMP_MAGIC_ITEM_8812"],
    rules: function(model) {
      model.statadd("Insight Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Sympathetic Eye +3"] = new RulesElement({
    name: "Orb of the Sympathetic Eye +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8813",
    source: "Player's Handbook 3",
    categories: ["Orb of the Sympathetic Eye +3", "ID_FMP_MAGIC_ITEM_8813"],
    rules: function(model) {
      model.statadd("Insight Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Sympathetic Eye +4"] = new RulesElement({
    name: "Orb of the Sympathetic Eye +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8814",
    source: "Player's Handbook 3",
    categories: ["Orb of the Sympathetic Eye +4", "ID_FMP_MAGIC_ITEM_8814"],
    rules: function(model) {
      model.statadd("Insight Misc", 4, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Sympathetic Eye +5"] = new RulesElement({
    name: "Orb of the Sympathetic Eye +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8815",
    source: "Player's Handbook 3",
    categories: ["Orb of the Sympathetic Eye +5", "ID_FMP_MAGIC_ITEM_8815"],
    rules: function(model) {
      model.statadd("Insight Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Sympathetic Eye +6"] = new RulesElement({
    name: "Orb of the Sympathetic Eye +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8816",
    source: "Player's Handbook 3",
    categories: ["Orb of the Sympathetic Eye +6", "ID_FMP_MAGIC_ITEM_8816"],
    rules: function(model) {
      model.statadd("Insight Misc", 6, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Unfailing Concentration +1"] = new RulesElement({
    name: "Orb of Unfailing Concentration +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8817",
    source: "Player's Handbook 3",
    categories: ["Orb of Unfailing Concentration +1", "ID_FMP_MAGIC_ITEM_8817"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Unfailing Concentration +2"] = new RulesElement({
    name: "Orb of Unfailing Concentration +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8818",
    source: "Player's Handbook 3",
    categories: ["Orb of Unfailing Concentration +2", "ID_FMP_MAGIC_ITEM_8818"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Unfailing Concentration +3"] = new RulesElement({
    name: "Orb of Unfailing Concentration +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8819",
    source: "Player's Handbook 3",
    categories: ["Orb of Unfailing Concentration +3", "ID_FMP_MAGIC_ITEM_8819"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Unfailing Concentration +4"] = new RulesElement({
    name: "Orb of Unfailing Concentration +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8820",
    source: "Player's Handbook 3",
    categories: ["Orb of Unfailing Concentration +4", "ID_FMP_MAGIC_ITEM_8820"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Unfailing Concentration +5"] = new RulesElement({
    name: "Orb of Unfailing Concentration +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8821",
    source: "Player's Handbook 3",
    categories: ["Orb of Unfailing Concentration +5", "ID_FMP_MAGIC_ITEM_8821"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Unfailing Concentration +6"] = new RulesElement({
    name: "Orb of Unfailing Concentration +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8822",
    source: "Player's Handbook 3",
    categories: ["Orb of Unfailing Concentration +6", "ID_FMP_MAGIC_ITEM_8822"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Unstoppable Decline +1"] = new RulesElement({
    name: "Orb of Unstoppable Decline +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8823",
    source: "Player's Handbook 3",
    categories: ["Orb of Unstoppable Decline +1", "ID_FMP_MAGIC_ITEM_8823"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Unstoppable Decline +2"] = new RulesElement({
    name: "Orb of Unstoppable Decline +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8824",
    source: "Player's Handbook 3",
    categories: ["Orb of Unstoppable Decline +2", "ID_FMP_MAGIC_ITEM_8824"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Unstoppable Decline +3"] = new RulesElement({
    name: "Orb of Unstoppable Decline +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8825",
    source: "Player's Handbook 3",
    categories: ["Orb of Unstoppable Decline +3", "ID_FMP_MAGIC_ITEM_8825"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Unstoppable Decline +4"] = new RulesElement({
    name: "Orb of Unstoppable Decline +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8826",
    source: "Player's Handbook 3",
    categories: ["Orb of Unstoppable Decline +4", "ID_FMP_MAGIC_ITEM_8826"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Unstoppable Decline +5"] = new RulesElement({
    name: "Orb of Unstoppable Decline +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8827",
    source: "Player's Handbook 3",
    categories: ["Orb of Unstoppable Decline +5", "ID_FMP_MAGIC_ITEM_8827"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Unstoppable Decline +6"] = new RulesElement({
    name: "Orb of Unstoppable Decline +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8828",
    source: "Player's Handbook 3",
    categories: ["Orb of Unstoppable Decline +6", "ID_FMP_MAGIC_ITEM_8828"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psychic's Ring (paragon tier)"] = new RulesElement({
    name: "Psychic's Ring (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8925",
    source: "Player's Handbook 3",
    categories: ["Psychic's Ring (paragon tier)", "ID_FMP_MAGIC_ITEM_8925"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psychokinetic Weapon +1"] = new RulesElement({
    name: "Psychokinetic Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8654",
    source: "Player's Handbook 3",
    categories: ["Psychokinetic Weapon +1", "ID_FMP_MAGIC_ITEM_8654"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psychokinetic Weapon +2"] = new RulesElement({
    name: "Psychokinetic Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8655",
    source: "Player's Handbook 3",
    categories: ["Psychokinetic Weapon +2", "ID_FMP_MAGIC_ITEM_8655"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psychokinetic Weapon +3"] = new RulesElement({
    name: "Psychokinetic Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8656",
    source: "Player's Handbook 3",
    categories: ["Psychokinetic Weapon +3", "ID_FMP_MAGIC_ITEM_8656"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psychokinetic Weapon +4"] = new RulesElement({
    name: "Psychokinetic Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8657",
    source: "Player's Handbook 3",
    categories: ["Psychokinetic Weapon +4", "ID_FMP_MAGIC_ITEM_8657"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psychokinetic Weapon +5"] = new RulesElement({
    name: "Psychokinetic Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8658",
    source: "Player's Handbook 3",
    categories: ["Psychokinetic Weapon +5", "ID_FMP_MAGIC_ITEM_8658"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psychokinetic Weapon +6"] = new RulesElement({
    name: "Psychokinetic Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8659",
    source: "Player's Handbook 3",
    categories: ["Psychokinetic Weapon +6", "ID_FMP_MAGIC_ITEM_8659"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quick Strike Ki Focus +1"] = new RulesElement({
    name: "Quick Strike Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8738",
    source: "Player's Handbook 3",
    categories: ["Quick Strike Ki Focus +1", "ID_FMP_MAGIC_ITEM_8738"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quick Strike Ki Focus +2"] = new RulesElement({
    name: "Quick Strike Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8739",
    source: "Player's Handbook 3",
    categories: ["Quick Strike Ki Focus +2", "ID_FMP_MAGIC_ITEM_8739"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quick Strike Ki Focus +3"] = new RulesElement({
    name: "Quick Strike Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8740",
    source: "Player's Handbook 3",
    categories: ["Quick Strike Ki Focus +3", "ID_FMP_MAGIC_ITEM_8740"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quick Strike Ki Focus +4"] = new RulesElement({
    name: "Quick Strike Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8741",
    source: "Player's Handbook 3",
    categories: ["Quick Strike Ki Focus +4", "ID_FMP_MAGIC_ITEM_8741"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quick Strike Ki Focus +5"] = new RulesElement({
    name: "Quick Strike Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8742",
    source: "Player's Handbook 3",
    categories: ["Quick Strike Ki Focus +5", "ID_FMP_MAGIC_ITEM_8742"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quick Strike Ki Focus +6"] = new RulesElement({
    name: "Quick Strike Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8743",
    source: "Player's Handbook 3",
    categories: ["Quick Strike Ki Focus +6", "ID_FMP_MAGIC_ITEM_8743"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quicksilver Armor +1"] = new RulesElement({
    name: "Quicksilver Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8592",
    source: "Player's Handbook 3",
    categories: ["Quicksilver Armor +1", "ID_FMP_MAGIC_ITEM_8592"],
    rules: function(model) {
      model.statadd("Speed", function() { /* while you have at least 1 power point */ return 1; }, "item");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quicksilver Armor +2"] = new RulesElement({
    name: "Quicksilver Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8593",
    source: "Player's Handbook 3",
    categories: ["Quicksilver Armor +2", "ID_FMP_MAGIC_ITEM_8593"],
    rules: function(model) {
      model.statadd("Speed", function() { /* while you have at least 1 power point */ return 1; }, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quicksilver Armor +3"] = new RulesElement({
    name: "Quicksilver Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8594",
    source: "Player's Handbook 3",
    categories: ["Quicksilver Armor +3", "ID_FMP_MAGIC_ITEM_8594"],
    rules: function(model) {
      model.statadd("Speed", function() { /* while you have at least 1 power point */ return 1; }, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quicksilver Armor +4"] = new RulesElement({
    name: "Quicksilver Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8595",
    source: "Player's Handbook 3",
    categories: ["Quicksilver Armor +4", "ID_FMP_MAGIC_ITEM_8595"],
    rules: function(model) {
      model.statadd("Speed", function() { /* while you have at least 1 power point */ return 1; }, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quicksilver Armor +5"] = new RulesElement({
    name: "Quicksilver Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8596",
    source: "Player's Handbook 3",
    categories: ["Quicksilver Armor +5", "ID_FMP_MAGIC_ITEM_8596"],
    rules: function(model) {
      model.statadd("Speed", function() { /* while you have at least 1 power point */ return 1; }, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quicksilver Armor +6"] = new RulesElement({
    name: "Quicksilver Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8597",
    source: "Player's Handbook 3",
    categories: ["Quicksilver Armor +6", "ID_FMP_MAGIC_ITEM_8597"],
    rules: function(model) {
      model.statadd("Speed", function() { /* while you have at least 1 power point */ return 1; }, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Retributive Weapon +1"] = new RulesElement({
    name: "Retributive Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8660",
    source: "Player's Handbook 3",
    categories: ["Retributive Weapon +1", "ID_FMP_MAGIC_ITEM_8660"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Retributive Weapon +2"] = new RulesElement({
    name: "Retributive Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8661",
    source: "Player's Handbook 3",
    categories: ["Retributive Weapon +2", "ID_FMP_MAGIC_ITEM_8661"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Retributive Weapon +3"] = new RulesElement({
    name: "Retributive Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8662",
    source: "Player's Handbook 3",
    categories: ["Retributive Weapon +3", "ID_FMP_MAGIC_ITEM_8662"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Retributive Weapon +4"] = new RulesElement({
    name: "Retributive Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8663",
    source: "Player's Handbook 3",
    categories: ["Retributive Weapon +4", "ID_FMP_MAGIC_ITEM_8663"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Retributive Weapon +5"] = new RulesElement({
    name: "Retributive Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8664",
    source: "Player's Handbook 3",
    categories: ["Retributive Weapon +5", "ID_FMP_MAGIC_ITEM_8664"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Retributive Weapon +6"] = new RulesElement({
    name: "Retributive Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8665",
    source: "Player's Handbook 3",
    categories: ["Retributive Weapon +6", "ID_FMP_MAGIC_ITEM_8665"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ring of Mental Power (paragon tier)"] = new RulesElement({
    name: "Ring of Mental Power (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8926",
    source: "Player's Handbook 3",
    categories: ["Ring of Mental Power (paragon tier)", "ID_FMP_MAGIC_ITEM_8926"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Forceful Rebuking +1"] = new RulesElement({
    name: "Staff of Forceful Rebuking +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8841",
    source: "Player's Handbook 3",
    categories: ["Staff of Forceful Rebuking +1", "ID_FMP_MAGIC_ITEM_8841"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Forceful Rebuking +2"] = new RulesElement({
    name: "Staff of Forceful Rebuking +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8842",
    source: "Player's Handbook 3",
    categories: ["Staff of Forceful Rebuking +2", "ID_FMP_MAGIC_ITEM_8842"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Forceful Rebuking +3"] = new RulesElement({
    name: "Staff of Forceful Rebuking +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8843",
    source: "Player's Handbook 3",
    categories: ["Staff of Forceful Rebuking +3", "ID_FMP_MAGIC_ITEM_8843"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Forceful Rebuking +4"] = new RulesElement({
    name: "Staff of Forceful Rebuking +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8844",
    source: "Player's Handbook 3",
    categories: ["Staff of Forceful Rebuking +4", "ID_FMP_MAGIC_ITEM_8844"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Forceful Rebuking +5"] = new RulesElement({
    name: "Staff of Forceful Rebuking +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8845",
    source: "Player's Handbook 3",
    categories: ["Staff of Forceful Rebuking +5", "ID_FMP_MAGIC_ITEM_8845"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Forceful Rebuking +6"] = new RulesElement({
    name: "Staff of Forceful Rebuking +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8846",
    source: "Player's Handbook 3",
    categories: ["Staff of Forceful Rebuking +6", "ID_FMP_MAGIC_ITEM_8846"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Insightful Detection +1"] = new RulesElement({
    name: "Staff of Insightful Detection +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8847",
    source: "Player's Handbook 3",
    categories: ["Staff of Insightful Detection +1", "ID_FMP_MAGIC_ITEM_8847"],
    rules: function(model) {
      model.statadd("Insight Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Insightful Detection +2"] = new RulesElement({
    name: "Staff of Insightful Detection +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8848",
    source: "Player's Handbook 3",
    categories: ["Staff of Insightful Detection +2", "ID_FMP_MAGIC_ITEM_8848"],
    rules: function(model) {
      model.statadd("Insight Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Insightful Detection +3"] = new RulesElement({
    name: "Staff of Insightful Detection +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8849",
    source: "Player's Handbook 3",
    categories: ["Staff of Insightful Detection +3", "ID_FMP_MAGIC_ITEM_8849"],
    rules: function(model) {
      model.statadd("Insight Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Insightful Detection +4"] = new RulesElement({
    name: "Staff of Insightful Detection +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8850",
    source: "Player's Handbook 3",
    categories: ["Staff of Insightful Detection +4", "ID_FMP_MAGIC_ITEM_8850"],
    rules: function(model) {
      model.statadd("Insight Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Insightful Detection +5"] = new RulesElement({
    name: "Staff of Insightful Detection +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8851",
    source: "Player's Handbook 3",
    categories: ["Staff of Insightful Detection +5", "ID_FMP_MAGIC_ITEM_8851"],
    rules: function(model) {
      model.statadd("Insight Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Insightful Detection +6"] = new RulesElement({
    name: "Staff of Insightful Detection +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8852",
    source: "Player's Handbook 3",
    categories: ["Staff of Insightful Detection +6", "ID_FMP_MAGIC_ITEM_8852"],
    rules: function(model) {
      model.statadd("Insight Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Psicraft +1"] = new RulesElement({
    name: "Staff of Psicraft +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8853",
    source: "Player's Handbook 3",
    categories: ["Staff of Psicraft +1", "ID_FMP_MAGIC_ITEM_8853"],
    rules: function(model) {
      model.statadd("Arcana Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Psicraft +2"] = new RulesElement({
    name: "Staff of Psicraft +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8854",
    source: "Player's Handbook 3",
    categories: ["Staff of Psicraft +2", "ID_FMP_MAGIC_ITEM_8854"],
    rules: function(model) {
      model.statadd("Arcana Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Psicraft +3"] = new RulesElement({
    name: "Staff of Psicraft +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8855",
    source: "Player's Handbook 3",
    categories: ["Staff of Psicraft +3", "ID_FMP_MAGIC_ITEM_8855"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Psicraft +4"] = new RulesElement({
    name: "Staff of Psicraft +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8856",
    source: "Player's Handbook 3",
    categories: ["Staff of Psicraft +4", "ID_FMP_MAGIC_ITEM_8856"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Psicraft +5"] = new RulesElement({
    name: "Staff of Psicraft +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8857",
    source: "Player's Handbook 3",
    categories: ["Staff of Psicraft +5", "ID_FMP_MAGIC_ITEM_8857"],
    rules: function(model) {
      model.statadd("Arcana Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Psicraft +6"] = new RulesElement({
    name: "Staff of Psicraft +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8858",
    source: "Player's Handbook 3",
    categories: ["Staff of Psicraft +6", "ID_FMP_MAGIC_ITEM_8858"],
    rules: function(model) {
      model.statadd("Arcana Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Psychic Knives +1"] = new RulesElement({
    name: "Staff of Psychic Knives +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8859",
    source: "Player's Handbook 3",
    categories: ["Staff of Psychic Knives +1", "ID_FMP_MAGIC_ITEM_8859"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Psychic Knives +2"] = new RulesElement({
    name: "Staff of Psychic Knives +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8860",
    source: "Player's Handbook 3",
    categories: ["Staff of Psychic Knives +2", "ID_FMP_MAGIC_ITEM_8860"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Psychic Knives +3"] = new RulesElement({
    name: "Staff of Psychic Knives +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8861",
    source: "Player's Handbook 3",
    categories: ["Staff of Psychic Knives +3", "ID_FMP_MAGIC_ITEM_8861"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Psychic Knives +4"] = new RulesElement({
    name: "Staff of Psychic Knives +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8862",
    source: "Player's Handbook 3",
    categories: ["Staff of Psychic Knives +4", "ID_FMP_MAGIC_ITEM_8862"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Psychic Knives +5"] = new RulesElement({
    name: "Staff of Psychic Knives +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8863",
    source: "Player's Handbook 3",
    categories: ["Staff of Psychic Knives +5", "ID_FMP_MAGIC_ITEM_8863"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Psychic Knives +6"] = new RulesElement({
    name: "Staff of Psychic Knives +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8864",
    source: "Player's Handbook 3",
    categories: ["Staff of Psychic Knives +6", "ID_FMP_MAGIC_ITEM_8864"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Adaptable Mind +1"] = new RulesElement({
    name: "Staff of the Adaptable Mind +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8865",
    source: "Player's Handbook 3",
    categories: ["Staff of the Adaptable Mind +1", "ID_FMP_MAGIC_ITEM_8865"],
    rules: function(model) {
      model.statadd("Perception Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Adaptable Mind +2"] = new RulesElement({
    name: "Staff of the Adaptable Mind +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8866",
    source: "Player's Handbook 3",
    categories: ["Staff of the Adaptable Mind +2", "ID_FMP_MAGIC_ITEM_8866"],
    rules: function(model) {
      model.statadd("Perception Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Adaptable Mind +3"] = new RulesElement({
    name: "Staff of the Adaptable Mind +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8867",
    source: "Player's Handbook 3",
    categories: ["Staff of the Adaptable Mind +3", "ID_FMP_MAGIC_ITEM_8867"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Adaptable Mind +4"] = new RulesElement({
    name: "Staff of the Adaptable Mind +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8868",
    source: "Player's Handbook 3",
    categories: ["Staff of the Adaptable Mind +4", "ID_FMP_MAGIC_ITEM_8868"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Adaptable Mind +5"] = new RulesElement({
    name: "Staff of the Adaptable Mind +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8869",
    source: "Player's Handbook 3",
    categories: ["Staff of the Adaptable Mind +5", "ID_FMP_MAGIC_ITEM_8869"],
    rules: function(model) {
      model.statadd("Perception Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Adaptable Mind +6"] = new RulesElement({
    name: "Staff of the Adaptable Mind +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8870",
    source: "Player's Handbook 3",
    categories: ["Staff of the Adaptable Mind +6", "ID_FMP_MAGIC_ITEM_8870"],
    rules: function(model) {
      model.statadd("Perception Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Discerning Watcher +1"] = new RulesElement({
    name: "Staff of the Discerning Watcher +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8871",
    source: "Player's Handbook 3",
    categories: ["Staff of the Discerning Watcher +1", "ID_FMP_MAGIC_ITEM_8871"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Discerning Watcher +2"] = new RulesElement({
    name: "Staff of the Discerning Watcher +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8872",
    source: "Player's Handbook 3",
    categories: ["Staff of the Discerning Watcher +2", "ID_FMP_MAGIC_ITEM_8872"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Discerning Watcher +3"] = new RulesElement({
    name: "Staff of the Discerning Watcher +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8873",
    source: "Player's Handbook 3",
    categories: ["Staff of the Discerning Watcher +3", "ID_FMP_MAGIC_ITEM_8873"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Discerning Watcher +4"] = new RulesElement({
    name: "Staff of the Discerning Watcher +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8874",
    source: "Player's Handbook 3",
    categories: ["Staff of the Discerning Watcher +4", "ID_FMP_MAGIC_ITEM_8874"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Discerning Watcher +5"] = new RulesElement({
    name: "Staff of the Discerning Watcher +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8875",
    source: "Player's Handbook 3",
    categories: ["Staff of the Discerning Watcher +5", "ID_FMP_MAGIC_ITEM_8875"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Discerning Watcher +6"] = new RulesElement({
    name: "Staff of the Discerning Watcher +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8876",
    source: "Player's Handbook 3",
    categories: ["Staff of the Discerning Watcher +6", "ID_FMP_MAGIC_ITEM_8876"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Evader +1"] = new RulesElement({
    name: "Staff of the Evader +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8877",
    source: "Player's Handbook 3",
    categories: ["Staff of the Evader +1", "ID_FMP_MAGIC_ITEM_8877"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against being immobilized or slowed */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Evader +2"] = new RulesElement({
    name: "Staff of the Evader +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8878",
    source: "Player's Handbook 3",
    categories: ["Staff of the Evader +2", "ID_FMP_MAGIC_ITEM_8878"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against being immobilized or slowed */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Evader +3"] = new RulesElement({
    name: "Staff of the Evader +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8879",
    source: "Player's Handbook 3",
    categories: ["Staff of the Evader +3", "ID_FMP_MAGIC_ITEM_8879"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against being immobilized or slowed */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Evader +4"] = new RulesElement({
    name: "Staff of the Evader +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8880",
    source: "Player's Handbook 3",
    categories: ["Staff of the Evader +4", "ID_FMP_MAGIC_ITEM_8880"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against being immobilized or slowed */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Evader +5"] = new RulesElement({
    name: "Staff of the Evader +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8881",
    source: "Player's Handbook 3",
    categories: ["Staff of the Evader +5", "ID_FMP_MAGIC_ITEM_8881"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against being immobilized or slowed */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Evader +6"] = new RulesElement({
    name: "Staff of the Evader +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8882",
    source: "Player's Handbook 3",
    categories: ["Staff of the Evader +6", "ID_FMP_MAGIC_ITEM_8882"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against being immobilized or slowed */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Impregnable Mind +1"] = new RulesElement({
    name: "Staff of the Impregnable Mind +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8883",
    source: "Player's Handbook 3",
    categories: ["Staff of the Impregnable Mind +1", "ID_FMP_MAGIC_ITEM_8883"],
    rules: function(model) {
      model.statadd("resist:psychic", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Impregnable Mind +2"] = new RulesElement({
    name: "Staff of the Impregnable Mind +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8884",
    source: "Player's Handbook 3",
    categories: ["Staff of the Impregnable Mind +2", "ID_FMP_MAGIC_ITEM_8884"],
    rules: function(model) {
      model.statadd("resist:psychic", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Impregnable Mind +3"] = new RulesElement({
    name: "Staff of the Impregnable Mind +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8885",
    source: "Player's Handbook 3",
    categories: ["Staff of the Impregnable Mind +3", "ID_FMP_MAGIC_ITEM_8885"],
    rules: function(model) {
      model.statadd("resist:psychic", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Impregnable Mind +4"] = new RulesElement({
    name: "Staff of the Impregnable Mind +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8886",
    source: "Player's Handbook 3",
    categories: ["Staff of the Impregnable Mind +4", "ID_FMP_MAGIC_ITEM_8886"],
    rules: function(model) {
      model.statadd("resist:psychic", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Impregnable Mind +5"] = new RulesElement({
    name: "Staff of the Impregnable Mind +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8887",
    source: "Player's Handbook 3",
    categories: ["Staff of the Impregnable Mind +5", "ID_FMP_MAGIC_ITEM_8887"],
    rules: function(model) {
      model.statadd("resist:psychic", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Impregnable Mind +6"] = new RulesElement({
    name: "Staff of the Impregnable Mind +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8888",
    source: "Player's Handbook 3",
    categories: ["Staff of the Impregnable Mind +6", "ID_FMP_MAGIC_ITEM_8888"],
    rules: function(model) {
      model.statadd("resist:psychic", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Renewing Source +1"] = new RulesElement({
    name: "Staff of the Renewing Source +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8889",
    source: "Player's Handbook 3",
    categories: ["Staff of the Renewing Source +1", "ID_FMP_MAGIC_ITEM_8889"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Renewing Source +2"] = new RulesElement({
    name: "Staff of the Renewing Source +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8890",
    source: "Player's Handbook 3",
    categories: ["Staff of the Renewing Source +2", "ID_FMP_MAGIC_ITEM_8890"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Renewing Source +3"] = new RulesElement({
    name: "Staff of the Renewing Source +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8891",
    source: "Player's Handbook 3",
    categories: ["Staff of the Renewing Source +3", "ID_FMP_MAGIC_ITEM_8891"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Renewing Source +4"] = new RulesElement({
    name: "Staff of the Renewing Source +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8892",
    source: "Player's Handbook 3",
    categories: ["Staff of the Renewing Source +4", "ID_FMP_MAGIC_ITEM_8892"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Renewing Source +5"] = new RulesElement({
    name: "Staff of the Renewing Source +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8893",
    source: "Player's Handbook 3",
    categories: ["Staff of the Renewing Source +5", "ID_FMP_MAGIC_ITEM_8893"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Renewing Source +6"] = new RulesElement({
    name: "Staff of the Renewing Source +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8894",
    source: "Player's Handbook 3",
    categories: ["Staff of the Renewing Source +6", "ID_FMP_MAGIC_ITEM_8894"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Temporal Juggler +1"] = new RulesElement({
    name: "Staff of the Temporal Juggler +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8895",
    source: "Player's Handbook 3",
    categories: ["Staff of the Temporal Juggler +1", "ID_FMP_MAGIC_ITEM_8895"],
    rules: function(model) {
      model.statadd("History Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Temporal Juggler +2"] = new RulesElement({
    name: "Staff of the Temporal Juggler +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8896",
    source: "Player's Handbook 3",
    categories: ["Staff of the Temporal Juggler +2", "ID_FMP_MAGIC_ITEM_8896"],
    rules: function(model) {
      model.statadd("History Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Temporal Juggler +3"] = new RulesElement({
    name: "Staff of the Temporal Juggler +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8897",
    source: "Player's Handbook 3",
    categories: ["Staff of the Temporal Juggler +3", "ID_FMP_MAGIC_ITEM_8897"],
    rules: function(model) {
      model.statadd("History Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Temporal Juggler +4"] = new RulesElement({
    name: "Staff of the Temporal Juggler +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8898",
    source: "Player's Handbook 3",
    categories: ["Staff of the Temporal Juggler +4", "ID_FMP_MAGIC_ITEM_8898"],
    rules: function(model) {
      model.statadd("History Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Temporal Juggler +5"] = new RulesElement({
    name: "Staff of the Temporal Juggler +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8899",
    source: "Player's Handbook 3",
    categories: ["Staff of the Temporal Juggler +5", "ID_FMP_MAGIC_ITEM_8899"],
    rules: function(model) {
      model.statadd("History Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Temporal Juggler +6"] = new RulesElement({
    name: "Staff of the Temporal Juggler +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8900",
    source: "Player's Handbook 3",
    categories: ["Staff of the Temporal Juggler +6", "ID_FMP_MAGIC_ITEM_8900"],
    rules: function(model) {
      model.statadd("History Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Third Eye +1"] = new RulesElement({
    name: "Staff of the Third Eye +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8901",
    source: "Player's Handbook 3",
    categories: ["Staff of the Third Eye +1", "ID_FMP_MAGIC_ITEM_8901"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Third Eye +2"] = new RulesElement({
    name: "Staff of the Third Eye +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8902",
    source: "Player's Handbook 3",
    categories: ["Staff of the Third Eye +2", "ID_FMP_MAGIC_ITEM_8902"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Third Eye +3"] = new RulesElement({
    name: "Staff of the Third Eye +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8903",
    source: "Player's Handbook 3",
    categories: ["Staff of the Third Eye +3", "ID_FMP_MAGIC_ITEM_8903"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Third Eye +4"] = new RulesElement({
    name: "Staff of the Third Eye +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8904",
    source: "Player's Handbook 3",
    categories: ["Staff of the Third Eye +4", "ID_FMP_MAGIC_ITEM_8904"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Third Eye +5"] = new RulesElement({
    name: "Staff of the Third Eye +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8905",
    source: "Player's Handbook 3",
    categories: ["Staff of the Third Eye +5", "ID_FMP_MAGIC_ITEM_8905"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Third Eye +6"] = new RulesElement({
    name: "Staff of the Third Eye +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8906",
    source: "Player's Handbook 3",
    categories: ["Staff of the Third Eye +6", "ID_FMP_MAGIC_ITEM_8906"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Traveler +1"] = new RulesElement({
    name: "Staff of the Traveler +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8907",
    source: "Player's Handbook 3",
    categories: ["Staff of the Traveler +1", "ID_FMP_MAGIC_ITEM_8907"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Traveler +2"] = new RulesElement({
    name: "Staff of the Traveler +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8908",
    source: "Player's Handbook 3",
    categories: ["Staff of the Traveler +2", "ID_FMP_MAGIC_ITEM_8908"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Traveler +3"] = new RulesElement({
    name: "Staff of the Traveler +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8909",
    source: "Player's Handbook 3",
    categories: ["Staff of the Traveler +3", "ID_FMP_MAGIC_ITEM_8909"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Traveler +4"] = new RulesElement({
    name: "Staff of the Traveler +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8910",
    source: "Player's Handbook 3",
    categories: ["Staff of the Traveler +4", "ID_FMP_MAGIC_ITEM_8910"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Traveler +5"] = new RulesElement({
    name: "Staff of the Traveler +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8911",
    source: "Player's Handbook 3",
    categories: ["Staff of the Traveler +5", "ID_FMP_MAGIC_ITEM_8911"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Traveler +6"] = new RulesElement({
    name: "Staff of the Traveler +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8912",
    source: "Player's Handbook 3",
    categories: ["Staff of the Traveler +6", "ID_FMP_MAGIC_ITEM_8912"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Tongues +1"] = new RulesElement({
    name: "Staff of Tongues +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8913",
    source: "Player's Handbook 3",
    categories: ["Staff of Tongues +1", "ID_FMP_MAGIC_ITEM_8913"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 1, "item");
      model.grant(elements.id["ID_FMP_LANGUAGE_8"]);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Tongues +2"] = new RulesElement({
    name: "Staff of Tongues +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8914",
    source: "Player's Handbook 3",
    categories: ["Staff of Tongues +2", "ID_FMP_MAGIC_ITEM_8914"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 1, "item");
      model.grant(elements.id["ID_FMP_LANGUAGE_8"]);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Tongues +3"] = new RulesElement({
    name: "Staff of Tongues +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8915",
    source: "Player's Handbook 3",
    categories: ["Staff of Tongues +3", "ID_FMP_MAGIC_ITEM_8915"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 1, "item");
      model.grant(elements.id["ID_FMP_LANGUAGE_8"]);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Tongues +4"] = new RulesElement({
    name: "Staff of Tongues +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8916",
    source: "Player's Handbook 3",
    categories: ["Staff of Tongues +4", "ID_FMP_MAGIC_ITEM_8916"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 1, "item");
      model.grant(elements.id["ID_FMP_LANGUAGE_8"]);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Tongues +5"] = new RulesElement({
    name: "Staff of Tongues +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8917",
    source: "Player's Handbook 3",
    categories: ["Staff of Tongues +5", "ID_FMP_MAGIC_ITEM_8917"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 1, "item");
      model.grant(elements.id["ID_FMP_LANGUAGE_8"]);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Tongues +6"] = new RulesElement({
    name: "Staff of Tongues +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8918",
    source: "Player's Handbook 3",
    categories: ["Staff of Tongues +6", "ID_FMP_MAGIC_ITEM_8918"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 1, "item");
      model.grant(elements.id["ID_FMP_LANGUAGE_8"]);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Unfailing Talent +1"] = new RulesElement({
    name: "Staff of Unfailing Talent +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8919",
    source: "Player's Handbook 3",
    categories: ["Staff of Unfailing Talent +1", "ID_FMP_MAGIC_ITEM_8919"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Unfailing Talent +2"] = new RulesElement({
    name: "Staff of Unfailing Talent +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8920",
    source: "Player's Handbook 3",
    categories: ["Staff of Unfailing Talent +2", "ID_FMP_MAGIC_ITEM_8920"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Unfailing Talent +3"] = new RulesElement({
    name: "Staff of Unfailing Talent +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8921",
    source: "Player's Handbook 3",
    categories: ["Staff of Unfailing Talent +3", "ID_FMP_MAGIC_ITEM_8921"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Unfailing Talent +4"] = new RulesElement({
    name: "Staff of Unfailing Talent +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8922",
    source: "Player's Handbook 3",
    categories: ["Staff of Unfailing Talent +4", "ID_FMP_MAGIC_ITEM_8922"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Unfailing Talent +5"] = new RulesElement({
    name: "Staff of Unfailing Talent +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8923",
    source: "Player's Handbook 3",
    categories: ["Staff of Unfailing Talent +5", "ID_FMP_MAGIC_ITEM_8923"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Unfailing Talent +6"] = new RulesElement({
    name: "Staff of Unfailing Talent +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8924",
    source: "Player's Handbook 3",
    categories: ["Staff of Unfailing Talent +6", "ID_FMP_MAGIC_ITEM_8924"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Suppression Weapon +1"] = new RulesElement({
    name: "Suppression Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8666",
    source: "Player's Handbook 3",
    categories: ["Suppression Weapon +1", "ID_FMP_MAGIC_ITEM_8666"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Suppression Weapon +2"] = new RulesElement({
    name: "Suppression Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8667",
    source: "Player's Handbook 3",
    categories: ["Suppression Weapon +2", "ID_FMP_MAGIC_ITEM_8667"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Suppression Weapon +3"] = new RulesElement({
    name: "Suppression Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8668",
    source: "Player's Handbook 3",
    categories: ["Suppression Weapon +3", "ID_FMP_MAGIC_ITEM_8668"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Suppression Weapon +4"] = new RulesElement({
    name: "Suppression Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8669",
    source: "Player's Handbook 3",
    categories: ["Suppression Weapon +4", "ID_FMP_MAGIC_ITEM_8669"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Suppression Weapon +5"] = new RulesElement({
    name: "Suppression Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8670",
    source: "Player's Handbook 3",
    categories: ["Suppression Weapon +5", "ID_FMP_MAGIC_ITEM_8670"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Suppression Weapon +6"] = new RulesElement({
    name: "Suppression Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8671",
    source: "Player's Handbook 3",
    categories: ["Suppression Weapon +6", "ID_FMP_MAGIC_ITEM_8671"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Talent Shard (level 13)"] = new RulesElement({
    name: "Talent Shard (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8935",
    source: "Player's Handbook 3",
    categories: ["Talent Shard (level 13)", "ID_FMP_MAGIC_ITEM_8935"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Talent Shard (level 18)"] = new RulesElement({
    name: "Talent Shard (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8936",
    source: "Player's Handbook 3",
    categories: ["Talent Shard (level 18)", "ID_FMP_MAGIC_ITEM_8936"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Talent Shard (level 23)"] = new RulesElement({
    name: "Talent Shard (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8937",
    source: "Player's Handbook 3",
    categories: ["Talent Shard (level 23)", "ID_FMP_MAGIC_ITEM_8937"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Talent Shard (level 28)"] = new RulesElement({
    name: "Talent Shard (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8938",
    source: "Player's Handbook 3",
    categories: ["Talent Shard (level 28)", "ID_FMP_MAGIC_ITEM_8938"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Talent Shard (level 3)"] = new RulesElement({
    name: "Talent Shard (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8933",
    source: "Player's Handbook 3",
    categories: ["Talent Shard (level 3)", "ID_FMP_MAGIC_ITEM_8933"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Talent Shard (level 8)"] = new RulesElement({
    name: "Talent Shard (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8934",
    source: "Player's Handbook 3",
    categories: ["Talent Shard (level 8)", "ID_FMP_MAGIC_ITEM_8934"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Temporal Armor +4"] = new RulesElement({
    name: "Temporal Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8598",
    source: "Player's Handbook 3",
    categories: ["Temporal Armor +4", "ID_FMP_MAGIC_ITEM_8598"],
    rules: function(model) {
      model.statadd("Initiative Misc", 2, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Temporal Armor +5"] = new RulesElement({
    name: "Temporal Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8599",
    source: "Player's Handbook 3",
    categories: ["Temporal Armor +5", "ID_FMP_MAGIC_ITEM_8599"],
    rules: function(model) {
      model.statadd("Initiative Misc", 2, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Temporal Armor +6"] = new RulesElement({
    name: "Temporal Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8600",
    source: "Player's Handbook 3",
    categories: ["Temporal Armor +6", "ID_FMP_MAGIC_ITEM_8600"],
    rules: function(model) {
      model.statadd("Initiative Misc", 2, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thought-Eater Armor +1"] = new RulesElement({
    name: "Thought-Eater Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8601",
    source: "Player's Handbook 3",
    categories: ["Thought-Eater Armor +1", "ID_FMP_MAGIC_ITEM_8601"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thought-Eater Armor +2"] = new RulesElement({
    name: "Thought-Eater Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8602",
    source: "Player's Handbook 3",
    categories: ["Thought-Eater Armor +2", "ID_FMP_MAGIC_ITEM_8602"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thought-Eater Armor +3"] = new RulesElement({
    name: "Thought-Eater Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8603",
    source: "Player's Handbook 3",
    categories: ["Thought-Eater Armor +3", "ID_FMP_MAGIC_ITEM_8603"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thought-Eater Armor +4"] = new RulesElement({
    name: "Thought-Eater Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8604",
    source: "Player's Handbook 3",
    categories: ["Thought-Eater Armor +4", "ID_FMP_MAGIC_ITEM_8604"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thought-Eater Armor +5"] = new RulesElement({
    name: "Thought-Eater Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8605",
    source: "Player's Handbook 3",
    categories: ["Thought-Eater Armor +5", "ID_FMP_MAGIC_ITEM_8605"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thought-Eater Armor +6"] = new RulesElement({
    name: "Thought-Eater Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8606",
    source: "Player's Handbook 3",
    categories: ["Thought-Eater Armor +6", "ID_FMP_MAGIC_ITEM_8606"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thoughtspike Weapon +1"] = new RulesElement({
    name: "Thoughtspike Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8672",
    source: "Player's Handbook 3",
    categories: ["Thoughtspike Weapon +1", "ID_FMP_MAGIC_ITEM_8672"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thoughtspike Weapon +2"] = new RulesElement({
    name: "Thoughtspike Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8673",
    source: "Player's Handbook 3",
    categories: ["Thoughtspike Weapon +2", "ID_FMP_MAGIC_ITEM_8673"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thoughtspike Weapon +3"] = new RulesElement({
    name: "Thoughtspike Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8674",
    source: "Player's Handbook 3",
    categories: ["Thoughtspike Weapon +3", "ID_FMP_MAGIC_ITEM_8674"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thoughtspike Weapon +4"] = new RulesElement({
    name: "Thoughtspike Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8675",
    source: "Player's Handbook 3",
    categories: ["Thoughtspike Weapon +4", "ID_FMP_MAGIC_ITEM_8675"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thoughtspike Weapon +5"] = new RulesElement({
    name: "Thoughtspike Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8676",
    source: "Player's Handbook 3",
    categories: ["Thoughtspike Weapon +5", "ID_FMP_MAGIC_ITEM_8676"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thoughtspike Weapon +6"] = new RulesElement({
    name: "Thoughtspike Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8677",
    source: "Player's Handbook 3",
    categories: ["Thoughtspike Weapon +6", "ID_FMP_MAGIC_ITEM_8677"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Unraveling Weapon +1"] = new RulesElement({
    name: "Unraveling Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8678",
    source: "Player's Handbook 3",
    categories: ["Unraveling Weapon +1", "ID_FMP_MAGIC_ITEM_8678"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Unraveling Weapon +2"] = new RulesElement({
    name: "Unraveling Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8679",
    source: "Player's Handbook 3",
    categories: ["Unraveling Weapon +2", "ID_FMP_MAGIC_ITEM_8679"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Unraveling Weapon +3"] = new RulesElement({
    name: "Unraveling Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8680",
    source: "Player's Handbook 3",
    categories: ["Unraveling Weapon +3", "ID_FMP_MAGIC_ITEM_8680"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Unraveling Weapon +4"] = new RulesElement({
    name: "Unraveling Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8681",
    source: "Player's Handbook 3",
    categories: ["Unraveling Weapon +4", "ID_FMP_MAGIC_ITEM_8681"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Unraveling Weapon +5"] = new RulesElement({
    name: "Unraveling Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8682",
    source: "Player's Handbook 3",
    categories: ["Unraveling Weapon +5", "ID_FMP_MAGIC_ITEM_8682"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Unraveling Weapon +6"] = new RulesElement({
    name: "Unraveling Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8683",
    source: "Player's Handbook 3",
    categories: ["Unraveling Weapon +6", "ID_FMP_MAGIC_ITEM_8683"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of Shared Wrath +1"] = new RulesElement({
    name: "Weapon of Shared Wrath +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8684",
    source: "Player's Handbook 3",
    categories: ["Weapon of Shared Wrath +1", "ID_FMP_MAGIC_ITEM_8684"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of Shared Wrath +2"] = new RulesElement({
    name: "Weapon of Shared Wrath +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8685",
    source: "Player's Handbook 3",
    categories: ["Weapon of Shared Wrath +2", "ID_FMP_MAGIC_ITEM_8685"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of Shared Wrath +3"] = new RulesElement({
    name: "Weapon of Shared Wrath +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8686",
    source: "Player's Handbook 3",
    categories: ["Weapon of Shared Wrath +3", "ID_FMP_MAGIC_ITEM_8686"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of Shared Wrath +4"] = new RulesElement({
    name: "Weapon of Shared Wrath +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8687",
    source: "Player's Handbook 3",
    categories: ["Weapon of Shared Wrath +4", "ID_FMP_MAGIC_ITEM_8687"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of Shared Wrath +5"] = new RulesElement({
    name: "Weapon of Shared Wrath +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8688",
    source: "Player's Handbook 3",
    categories: ["Weapon of Shared Wrath +5", "ID_FMP_MAGIC_ITEM_8688"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of Shared Wrath +6"] = new RulesElement({
    name: "Weapon of Shared Wrath +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8689",
    source: "Player's Handbook 3",
    categories: ["Weapon of Shared Wrath +6", "ID_FMP_MAGIC_ITEM_8689"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Windsoul Ki Focus +1"] = new RulesElement({
    name: "Windsoul Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8648",
    source: "Player's Handbook 3",
    categories: ["Windsoul Ki Focus +1", "ID_FMP_MAGIC_ITEM_8648"],
    rules: function(model) {
      model.statadd("melee:damage(Windsoul Ki Focus +1)", function() { /* while flying */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Windsoul Ki Focus +2"] = new RulesElement({
    name: "Windsoul Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8649",
    source: "Player's Handbook 3",
    categories: ["Windsoul Ki Focus +2", "ID_FMP_MAGIC_ITEM_8649"],
    rules: function(model) {
      model.statadd("melee:damage(Windsoul Ki Focus +2)", function() { /* while flying */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Windsoul Ki Focus +3"] = new RulesElement({
    name: "Windsoul Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8650",
    source: "Player's Handbook 3",
    categories: ["Windsoul Ki Focus +3", "ID_FMP_MAGIC_ITEM_8650"],
    rules: function(model) {
      model.statadd("melee:damage(Windsoul Ki Focus +3)", function() { /* while flying */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Windsoul Ki Focus +4"] = new RulesElement({
    name: "Windsoul Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8651",
    source: "Player's Handbook 3",
    categories: ["Windsoul Ki Focus +4", "ID_FMP_MAGIC_ITEM_8651"],
    rules: function(model) {
      model.statadd("melee:damage(Windsoul Ki Focus +4)", function() { /* while flying */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Windsoul Ki Focus +5"] = new RulesElement({
    name: "Windsoul Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8652",
    source: "Player's Handbook 3",
    categories: ["Windsoul Ki Focus +5", "ID_FMP_MAGIC_ITEM_8652"],
    rules: function(model) {
      model.statadd("melee:damage(Windsoul Ki Focus +5)", function() { /* while flying */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Windsoul Ki Focus +6"] = new RulesElement({
    name: "Windsoul Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8653",
    source: "Player's Handbook 3",
    categories: ["Windsoul Ki Focus +6", "ID_FMP_MAGIC_ITEM_8653"],
    rules: function(model) {
      model.statadd("melee:damage(Windsoul Ki Focus +6)", function() { /* while flying */ return 1; });
    }
  });
  byID[te.id] = te;
  
  
})(this);
