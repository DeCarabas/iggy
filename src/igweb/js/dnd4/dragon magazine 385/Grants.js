define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Grants = types['Grants'] || (types['Grants'] = {});
  te = Grants["Hybrid Assassin"] = new engine.RulesElement({
    name: "Hybrid Assassin",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_ASSASSIN",
    source: "Dragon Magazine 385",
    categories: ["Hybrid Assassin", "ID_INTERNAL_GRANTS_HYBRID_ASSASSIN"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_ASSASSIN"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_3"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_6"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_ONE-HANDED_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_HEAVY_BLADE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_LIGHT_BLADE"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2572"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_KI_FOCUS_USER"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_ASSASSIN_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Assassin Implements"] = new engine.RulesElement({
    name: "Hybrid Assassin Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_ASSASSIN_IMPLEMENTS",
    source: "Dragon Magazine 385",
    categories: ["Hybrid Assassin Implements", "ID_INTERNAL_GRANTS_HYBRID_ASSASSIN_IMPLEMENTS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KI_FOCUSES)"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
