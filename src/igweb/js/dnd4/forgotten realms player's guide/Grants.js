(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Grants = types['Grants'] || (types['Grants'] = {});
  te = Grants["Drow"] = new RulesElement({
    name: "Drow",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_DROW",
    source: "Forgotten Realms Player's Guide",
    categories: ["Drow", "ID_INTERNAL_GRANTS_DROW"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_DARKVISION"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_564"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_565"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_641"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CHARISMA"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_4"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_INTIMIDATE_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_STEALTH_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Genasi"] = new RulesElement({
    name: "Genasi",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_GENASI",
    source: "Forgotten Realms Player's Guide",
    categories: ["Genasi", "ID_INTERNAL_GRANTS_GENASI"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_NORMAL"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_519"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_803"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_INTELLIGENCE"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_STRENGTH"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_6"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_ENDURANCE_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_NATURE_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Swordmage"] = new RulesElement({
    name: "Swordmage",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_SWORDMAGE",
    source: "Forgotten Realms Player's Guide",
    categories: ["Swordmage", "ID_INTERNAL_GRANTS_SWORDMAGE"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_ROLE_4"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_2"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_LIGHT_BLADE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_HEAVY_BLADE"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_630"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_518"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_629"]);
      model.grant(elements.id["ID_INTERNAL_SKILL_TRAINING_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_SWORDMAGE_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Swordmage Implements"] = new RulesElement({
    name: "Swordmage Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_SWORDMAGE_IMPLEMENTS",
    source: "Forgotten Realms Player's Guide",
    categories: ["Swordmage Implements", "ID_INTERNAL_GRANTS_SWORDMAGE_IMPLEMENTS"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LIGHT_BLADE_GROUP)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HEAVY_BLADE_GROUP)"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
