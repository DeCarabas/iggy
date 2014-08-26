define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Internal = types['Internal'] || (types['Internal'] = {});
  te = Internal["Totem Blade"] = new engine.RulesElement({
    name: "Totem Blade",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_TOTEM_BLADE",
    source: "Dragon Magazine 379",
    categories: ["Totem Blade", "ID_INTERNAL_INTERNAL_TOTEM_BLADE"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
