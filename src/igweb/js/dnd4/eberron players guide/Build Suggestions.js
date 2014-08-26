define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Build_Suggestions = types['Build Suggestions'] || (types['Build Suggestions'] = {});
  te = Build_Suggestions["Battlesmith Artificer"] = new engine.RulesElement({
    name: "Battlesmith Artificer",
    type: "Build Suggestions",
    id: "ID_INTERNAL_BUILD_SUGGESTIONS_BATTLESMITH_ARTIFICER",
    source: "Eberron Player's Guide",
    categories: ["Battlesmith Artificer", "ID_INTERNAL_BUILD_SUGGESTIONS_BATTLESMITH_ARTIFICER"],
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
  
  te = Build_Suggestions["Tinkerer Artificer"] = new engine.RulesElement({
    name: "Tinkerer Artificer",
    type: "Build Suggestions",
    id: "ID_INTERNAL_BUILD_SUGGESTIONS_TINKERER_ARTIFICER",
    source: "Eberron Player's Guide",
    categories: ["Tinkerer Artificer", "ID_INTERNAL_BUILD_SUGGESTIONS_TINKERER_ARTIFICER"],
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
