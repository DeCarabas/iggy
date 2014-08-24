(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Grants = types['Grants'] || (types['Grants'] = {});
  te = Grants["Assassin"] = new RulesElement({
    name: "Assassin",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_ASSASSIN",
    source: "Dragon Magazine 379",
    categories: ["Assassin", "ID_INTERNAL_GRANTS_ASSASSIN"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_ROLE_3"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_6"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_ONE-HANDED_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_HEAVY_BLADE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_LIGHT_BLADE"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1920"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1921"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1922"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1923"]);
      model.grant(elements.id["ID_INTERNAL_SKILL_TRAINING_STEALTH"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_KI_FOCUS_USER"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_ASSASSIN_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Assassin Implements"] = new RulesElement({
    name: "Assassin Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_ASSASSIN_IMPLEMENTS",
    source: "Dragon Magazine 379",
    categories: ["Assassin Implements", "ID_INTERNAL_GRANTS_ASSASSIN_IMPLEMENTS"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KI_FOCUSES)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(PROFICIENT_WEAPONS)"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
