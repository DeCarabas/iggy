define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Internal = types['Internal'] || (types['Internal'] = {});
  te = Internal["SecondNotFirstPsionic"] = new engine.RulesElement({
    name: "SecondNotFirstPsionic",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_SECONDNOTFIRSTPSIONIC",
    source: "Player's Handbook",
    categories: ["SecondNotFirstPsionic", "ID_INTERNAL_INTERNAL_SECONDNOTFIRSTPSIONIC"],
    rules: function(model) {
      model.statadd("Power Points", 2);
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
