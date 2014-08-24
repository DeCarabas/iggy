(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Grants = types['Grants'] || (types['Grants'] = {});
  te = Grants["Artificer"] = new RulesElement({
    name: "Artificer",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_ARTIFICER",
    source: "Eberron Player's Guide",
    categories: ["Artificer", "ID_INTERNAL_GRANTS_ARTIFICER"],
    rules: function(model) {
      model.statadd("FREEBEE:ID_FMP_GEAR_31", 1);
      model.statadd("FREEBEE:ID_FMP_RITUAL_1", 1);
      model.statadd("FREEBEE:ID_FMP_RITUAL_7", 1);
      model.statadd("FREEBEE:ID_FMP_RITUAL_9", 1);
      model.statadd("FREEBEE:ID_FMP_RITUAL_51", 1);
      model.statadd("Free Rituals", "* As an artificer you have been given the Brew Potion, Disenchant Magic Item, Enchant Magic Item, and Make Whole rituals.");
      model.grant(elements.id["ID_FMP_ROLE_2"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_2"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1573"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1576"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_862"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_683"]);
      model.grant(elements.id["ID_INTERNAL_SKILL_TRAINING_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_ARTIFICER_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Artificer Implements"] = new RulesElement({
    name: "Artificer Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_ARTIFICER_IMPLEMENTS",
    source: "Eberron Player's Guide",
    categories: ["Artificer Implements", "ID_INTERNAL_GRANTS_ARTIFICER_IMPLEMENTS"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ROD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(STAFF)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WAND)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Changeling"] = new RulesElement({
    name: "Changeling",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_CHANGELING",
    source: "Eberron Player's Guide",
    categories: ["Changeling", "ID_INTERNAL_GRANTS_CHANGELING"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_NORMAL"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_400"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_710"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1568"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1570"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CHARISMA"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_BLUFF_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_INSIGHT_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Kalashtar"] = new RulesElement({
    name: "Kalashtar",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_KALASHTAR",
    source: "Eberron Player's Guide",
    categories: ["Kalashtar", "ID_INTERNAL_GRANTS_KALASHTAR"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_NORMAL"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1571"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1572"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1813"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CHARISMA"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_WISDOM"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_INSIGHT_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Warforged"] = new RulesElement({
    name: "Warforged",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_WARFORGED",
    source: "Eberron Player's Guide",
    categories: ["Warforged", "ID_INTERNAL_GRANTS_WARFORGED"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_NORMAL"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_406"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_721"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_800"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1815"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1814"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CONSTITUTION"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_STRENGTH"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_ENDURANCE_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_INTIMIDATE_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
