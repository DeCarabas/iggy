define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Grants = types['Grants'] || (types['Grants'] = {});
  te = Grants["Assassin"] = new engine.RulesElement({
    name: "Assassin",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_ASSASSIN",
    source: "Dragon Magazine 379",
    categories: ["Assassin", "ID_INTERNAL_GRANTS_ASSASSIN"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_ROLE_3"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_6"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_ONE-HANDED_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_HEAVY_BLADE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_LIGHT_BLADE"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1920"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1921"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1922"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1923"]);
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_STEALTH"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_KI_FOCUS_USER"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_ASSASSIN_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Assassin Implements"] = new engine.RulesElement({
    name: "Assassin Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_ASSASSIN_IMPLEMENTS",
    source: "Dragon Magazine 379",
    categories: ["Assassin Implements", "ID_INTERNAL_GRANTS_ASSASSIN_IMPLEMENTS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KI_FOCUSES)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(PROFICIENT_WEAPONS)"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
