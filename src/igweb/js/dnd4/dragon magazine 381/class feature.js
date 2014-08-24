(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Arcane Armorer's Action"] = new RulesElement({
    name: "Arcane Armorer's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2128",
    source: "Dragon Magazine 381",
    categories: ["Arcane Armorer's Action", "ID_FMP_CLASS_FEATURE_2128", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Arcane Armorer's Action:Whenever you spend an action point to make an extra attack, choose one ally within 5 squares of one target of your attack. Until the end of your next turn, that ally gains resist 10 to your choice of one of cold, fire, force, lightning, necrotic, poison, radiant, or thunder damage.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Weaponmaster"] = new RulesElement({
    name: "Arcane Weaponmaster",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2130",
    source: "Dragon Magazine 381",
    categories: ["Arcane Weaponmaster", "ID_FMP_CLASS_FEATURE_2130", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Beacon of Justice"] = new RulesElement({
    name: "Beacon of Justice",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2135",
    source: "Dragon Magazine 381",
    categories: ["Beacon of Justice", "ID_FMP_CLASS_FEATURE_2135", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Patron's Guidance (Acrobatics)"] = new RulesElement({
    name: "Patron's Guidance (Acrobatics)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(ACROBATICS)",
    source: "Dragon Magazine 381",
    categories: ["Patron's Guidance (Acrobatics)", "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(ACROBATICS)", "ID_FMP_FEAT_2082", "Patron's Guidance"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", function() { /* while you have concealment from shadow walk */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Patron's Guidance (Arcana)"] = new RulesElement({
    name: "Patron's Guidance (Arcana)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(ARCANA)",
    source: "Dragon Magazine 381",
    categories: ["Patron's Guidance (Arcana)", "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(ARCANA)", "ID_FMP_FEAT_2082", "Patron's Guidance"],
    rules: function(model) {
      model.statadd("Arcana Misc", function() { /* while you have concealment from shadow walk */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Patron's Guidance (Athletics)"] = new RulesElement({
    name: "Patron's Guidance (Athletics)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(ATHLETICS)",
    source: "Dragon Magazine 381",
    categories: ["Patron's Guidance (Athletics)", "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(ATHLETICS)", "ID_FMP_FEAT_2082", "Patron's Guidance"],
    rules: function(model) {
      model.statadd("Athletics Misc", function() { /* while you have concealment from shadow walk */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Patron's Guidance (Bluff)"] = new RulesElement({
    name: "Patron's Guidance (Bluff)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(BLUFF)",
    source: "Dragon Magazine 381",
    categories: ["Patron's Guidance (Bluff)", "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(BLUFF)", "ID_FMP_FEAT_2082", "Patron's Guidance"],
    rules: function(model) {
      model.statadd("Bluff Misc", function() { /* while you have concealment from shadow walk */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Patron's Guidance (Diplomacy)"] = new RulesElement({
    name: "Patron's Guidance (Diplomacy)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(DIPLOMACY)",
    source: "Dragon Magazine 381",
    categories: ["Patron's Guidance (Diplomacy)", "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(DIPLOMACY)", "ID_FMP_FEAT_2082", "Patron's Guidance"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", function() { /* while you have concealment from shadow walk */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Patron's Guidance (Dungeoneering)"] = new RulesElement({
    name: "Patron's Guidance (Dungeoneering)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(DUNGEONEERING)",
    source: "Dragon Magazine 381",
    categories: ["Patron's Guidance (Dungeoneering)", "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(DUNGEONEERING)", "ID_FMP_FEAT_2082", "Patron's Guidance"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", function() { /* while you have concealment from shadow walk */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Patron's Guidance (Endurance)"] = new RulesElement({
    name: "Patron's Guidance (Endurance)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(ENDURANCE)",
    source: "Dragon Magazine 381",
    categories: ["Patron's Guidance (Endurance)", "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(ENDURANCE)", "ID_FMP_FEAT_2082", "Patron's Guidance"],
    rules: function(model) {
      model.statadd("Endurance Misc", function() { /* while you have concealment from shadow walk */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Patron's Guidance (Heal)"] = new RulesElement({
    name: "Patron's Guidance (Heal)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(HEAL)",
    source: "Dragon Magazine 381",
    categories: ["Patron's Guidance (Heal)", "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(HEAL)", "ID_FMP_FEAT_2082", "Patron's Guidance"],
    rules: function(model) {
      model.statadd("Heal Misc", function() { /* while you have concealment from shadow walk */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Patron's Guidance (History)"] = new RulesElement({
    name: "Patron's Guidance (History)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(HISTORY)",
    source: "Dragon Magazine 381",
    categories: ["Patron's Guidance (History)", "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(HISTORY)", "ID_FMP_FEAT_2082", "Patron's Guidance"],
    rules: function(model) {
      model.statadd("History Misc", function() { /* while you have concealment from shadow walk */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Patron's Guidance (Insight)"] = new RulesElement({
    name: "Patron's Guidance (Insight)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(INSIGHT)",
    source: "Dragon Magazine 381",
    categories: ["Patron's Guidance (Insight)", "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(INSIGHT)", "ID_FMP_FEAT_2082", "Patron's Guidance"],
    rules: function(model) {
      model.statadd("Insight Misc", function() { /* while you have concealment from shadow walk */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Patron's Guidance (Intimidate)"] = new RulesElement({
    name: "Patron's Guidance (Intimidate)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(INTIMIDATE)",
    source: "Dragon Magazine 381",
    categories: ["Patron's Guidance (Intimidate)", "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(INTIMIDATE)", "ID_FMP_FEAT_2082", "Patron's Guidance"],
    rules: function(model) {
      model.statadd("Intimidate Misc", function() { /* while you have concealment from shadow walk */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Patron's Guidance (Nature)"] = new RulesElement({
    name: "Patron's Guidance (Nature)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(NATURE)",
    source: "Dragon Magazine 381",
    categories: ["Patron's Guidance (Nature)", "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(NATURE)", "ID_FMP_FEAT_2082", "Patron's Guidance"],
    rules: function(model) {
      model.statadd("Nature Misc", function() { /* while you have concealment from shadow walk */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Patron's Guidance (Perception)"] = new RulesElement({
    name: "Patron's Guidance (Perception)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(PERCEPTION)",
    source: "Dragon Magazine 381",
    categories: ["Patron's Guidance (Perception)", "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(PERCEPTION)", "ID_FMP_FEAT_2082", "Patron's Guidance"],
    rules: function(model) {
      model.statadd("Perception Misc", function() { /* while you have concealment from shadow walk */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Patron's Guidance (Religion)"] = new RulesElement({
    name: "Patron's Guidance (Religion)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(RELIGION)",
    source: "Dragon Magazine 381",
    categories: ["Patron's Guidance (Religion)", "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(RELIGION)", "ID_FMP_FEAT_2082", "Patron's Guidance"],
    rules: function(model) {
      model.statadd("Religion Misc", function() { /* while you have concealment from shadow walk */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Patron's Guidance (Stealth)"] = new RulesElement({
    name: "Patron's Guidance (Stealth)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(STEALTH)",
    source: "Dragon Magazine 381",
    categories: ["Patron's Guidance (Stealth)", "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(STEALTH)", "ID_FMP_FEAT_2082", "Patron's Guidance"],
    rules: function(model) {
      model.statadd("Stealth Misc", function() { /* while you have concealment from shadow walk */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Patron's Guidance (Streetwise)"] = new RulesElement({
    name: "Patron's Guidance (Streetwise)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(STREETWISE)",
    source: "Dragon Magazine 381",
    categories: ["Patron's Guidance (Streetwise)", "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(STREETWISE)", "ID_FMP_FEAT_2082", "Patron's Guidance"],
    rules: function(model) {
      model.statadd("Streetwise Misc", function() { /* while you have concealment from shadow walk */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Patron's Guidance (Thievery)"] = new RulesElement({
    name: "Patron's Guidance (Thievery)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(THIEVERY)",
    source: "Dragon Magazine 381",
    categories: ["Patron's Guidance (Thievery)", "ID_INTERNAL_CLASS_FEATURE_PATRON'S_GUIDANCE_(THIEVERY)", "ID_FMP_FEAT_2082", "Patron's Guidance"],
    rules: function(model) {
      model.statadd("Thievery Misc", function() { /* while you have concealment from shadow walk */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Practiced Armorer"] = new RulesElement({
    name: "Practiced Armorer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2129",
    source: "Dragon Magazine 381",
    categories: ["Practiced Armorer", "ID_FMP_CLASS_FEATURE_2129", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Protective Spell Shield"] = new RulesElement({
    name: "Protective Spell Shield",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2127",
    source: "Dragon Magazine 381",
    categories: ["Protective Spell Shield", "ID_FMP_CLASS_FEATURE_2127", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Retributive Action"] = new RulesElement({
    name: "Retributive Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2133",
    source: "Dragon Magazine 381",
    categories: ["Retributive Action", "ID_FMP_CLASS_FEATURE_2133", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Retributive Action: You can spend an action point as an opportunity action when an ally within 20 squares of you becomes bloodied or drops to 0 hit points. When you do, you gain a +2 bonus to attack rolls and damage rolls until the end of your next turn, and you take a standard action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sliver of Justice"] = new RulesElement({
    name: "Sliver of Justice",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2134",
    source: "Dragon Magazine 381",
    categories: ["Sliver of Justice", "ID_FMP_CLASS_FEATURE_2134", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Spell Commander's Action"] = new RulesElement({
    name: "Spell Commander's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2131",
    source: "Dragon Magazine 381",
    categories: ["Spell Commander's Action", "ID_FMP_CLASS_FEATURE_2131", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Spell Commander's Action:Whenever you spend an action point to make an attack, one ally within 10 squares of the target can use a basic attack or a 1st-level at-will arcane attack power as a free action. The ally must include at least one target of your attack as a target.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unleash Spell Power"] = new RulesElement({
    name: "Unleash Spell Power",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2132",
    source: "Dragon Magazine 381",
    categories: ["Unleash Spell Power", "ID_FMP_CLASS_FEATURE_2132", "16"]
  });
  byID[te.id] = te;
  
  
})(this);
