define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Build_Suggestions = types['Build Suggestions'] || (types['Build Suggestions'] = {});
  te = Build_Suggestions["Ardent Paladin"] = new engine.RulesElement({
    name: "Ardent Paladin",
    type: "Build Suggestions",
    id: "ID_INTERNAL_BUILD_SUGGESTIONS_ARDENT_PALADIN",
    source: "Divine Power",
    categories: ["Ardent Paladin", "ID_INTERNAL_BUILD_SUGGESTIONS_ARDENT_PALADIN"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
    }
  });
  byID[te.id] = te;
  
  te = Build_Suggestions["Commanding Avenger"] = new engine.RulesElement({
    name: "Commanding Avenger",
    type: "Build Suggestions",
    id: "ID_INTERNAL_BUILD_SUGGESTIONS_COMMANDING_AVENGER",
    source: "Divine Power",
    categories: ["Commanding Avenger", "ID_INTERNAL_BUILD_SUGGESTIONS_COMMANDING_AVENGER"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
    }
  });
  byID[te.id] = te;
  
  te = Build_Suggestions["Malediction Invoker"] = new engine.RulesElement({
    name: "Malediction Invoker",
    type: "Build Suggestions",
    id: "ID_INTERNAL_BUILD_SUGGESTIONS_MALEDICTION_INVOKER",
    source: "Divine Power",
    categories: ["Malediction Invoker", "ID_INTERNAL_BUILD_SUGGESTIONS_MALEDICTION_INVOKER"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
    }
  });
  byID[te.id] = te;
  
  te = Build_Suggestions["Shielding Cleric"] = new engine.RulesElement({
    name: "Shielding Cleric",
    type: "Build Suggestions",
    id: "ID_INTERNAL_BUILD_SUGGESTIONS_SHIELDING_CLERIC",
    source: "Divine Power",
    categories: ["Shielding Cleric", "ID_INTERNAL_BUILD_SUGGESTIONS_SHIELDING_CLERIC"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
    }
  });
  byID[te.id] = te;
  
  te = Build_Suggestions["Virtuous Paladin"] = new engine.RulesElement({
    name: "Virtuous Paladin",
    type: "Build Suggestions",
    id: "ID_INTERNAL_BUILD_SUGGESTIONS_VIRTUOUS_PALADIN",
    source: "Divine Power",
    categories: ["Virtuous Paladin", "ID_INTERNAL_BUILD_SUGGESTIONS_VIRTUOUS_PALADIN"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
