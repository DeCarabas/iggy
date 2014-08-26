define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Build_Suggestions = types['Build Suggestions'] || (types['Build Suggestions'] = {});
  te = Build_Suggestions["Bleak Disciple Assassin"] = new engine.RulesElement({
    name: "Bleak Disciple Assassin",
    type: "Build Suggestions",
    id: "ID_INTERNAL_BUILD_SUGGESTIONS_BLEAK_DISCIPLE_ASSASSIN",
    source: "Dragon Magazine 379",
    categories: ["Bleak Disciple Assassin", "ID_INTERNAL_BUILD_SUGGESTIONS_BLEAK_DISCIPLE_ASSASSIN"],
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
  
  te = Build_Suggestions["Night Stalker Assassin"] = new engine.RulesElement({
    name: "Night Stalker Assassin",
    type: "Build Suggestions",
    id: "ID_INTERNAL_BUILD_SUGGESTIONS_NIGHT_STALKER_ASSASSIN",
    source: "Dragon Magazine 379",
    categories: ["Night Stalker Assassin", "ID_INTERNAL_BUILD_SUGGESTIONS_NIGHT_STALKER_ASSASSIN"],
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
