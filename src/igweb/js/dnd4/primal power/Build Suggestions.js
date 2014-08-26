define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Build_Suggestions = types['Build Suggestions'] || (types['Build Suggestions'] = {});
  te = Build_Suggestions["Eagle Shaman"] = new engine.RulesElement({
    name: "Eagle Shaman",
    type: "Build Suggestions",
    id: "ID_INTERNAL_BUILD_SUGGESTIONS_EAGLE_SHAMAN",
    source: "Primal Power",
    categories: ["Eagle Shaman", "ID_INTERNAL_BUILD_SUGGESTIONS_EAGLE_SHAMAN"],
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
  
  te = Build_Suggestions["Life Warden"] = new engine.RulesElement({
    name: "Life Warden",
    type: "Build Suggestions",
    id: "ID_INTERNAL_BUILD_SUGGESTIONS_LIFE_WARDEN",
    source: "Primal Power",
    categories: ["Life Warden", "ID_INTERNAL_BUILD_SUGGESTIONS_LIFE_WARDEN"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
    }
  });
  byID[te.id] = te;
  
  te = Build_Suggestions["Storm Warden"] = new engine.RulesElement({
    name: "Storm Warden",
    type: "Build Suggestions",
    id: "ID_INTERNAL_BUILD_SUGGESTIONS_STORM_WARDEN",
    source: "Primal Power",
    categories: ["Storm Warden", "ID_INTERNAL_BUILD_SUGGESTIONS_STORM_WARDEN"],
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
  
  te = Build_Suggestions["Swarm Druid"] = new engine.RulesElement({
    name: "Swarm Druid",
    type: "Build Suggestions",
    id: "ID_INTERNAL_BUILD_SUGGESTIONS_SWARM_DRUID",
    source: "Primal Power",
    categories: ["Swarm Druid", "ID_INTERNAL_BUILD_SUGGESTIONS_SWARM_DRUID"],
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
  
  te = Build_Suggestions["Thunderborn Barbarian"] = new engine.RulesElement({
    name: "Thunderborn Barbarian",
    type: "Build Suggestions",
    id: "ID_INTERNAL_BUILD_SUGGESTIONS_THUNDERBORN_BARBARIAN",
    source: "Primal Power",
    categories: ["Thunderborn Barbarian", "ID_INTERNAL_BUILD_SUGGESTIONS_THUNDERBORN_BARBARIAN"],
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
  
  te = Build_Suggestions["Whirling Barbarian"] = new engine.RulesElement({
    name: "Whirling Barbarian",
    type: "Build Suggestions",
    id: "ID_INTERNAL_BUILD_SUGGESTIONS_WHIRLING_BARBARIAN",
    source: "Primal Power",
    categories: ["Whirling Barbarian", "ID_INTERNAL_BUILD_SUGGESTIONS_WHIRLING_BARBARIAN"],
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
  
  te = Build_Suggestions["World Speaker Shaman"] = new engine.RulesElement({
    name: "World Speaker Shaman",
    type: "Build Suggestions",
    id: "ID_INTERNAL_BUILD_SUGGESTIONS_WORLD_SPEAKER_SHAMAN",
    source: "Primal Power",
    categories: ["World Speaker Shaman", "ID_INTERNAL_BUILD_SUGGESTIONS_WORLD_SPEAKER_SHAMAN"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.SuggestRule
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
  
  
  return {
    types: types,
    id: byID
  };
});
