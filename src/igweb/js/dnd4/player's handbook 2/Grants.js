(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Grants = types['Grants'] || (types['Grants'] = {});
  te = Grants["Avenger"] = new RulesElement({
    name: "Avenger",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_AVENGER",
    source: "Player's Handbook 2",
    categories: ["Avenger", "ID_INTERNAL_GRANTS_AVENGER"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_ROLE_3"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_3"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1191"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1192"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_324"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_787"]);
      model.grant(elements.id["ID_INTERNAL_SKILL_TRAINING_RELIGION"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_AVENGER_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Avenger Implements"] = new RulesElement({
    name: "Avenger Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_AVENGER_IMPLEMENTS",
    source: "Player's Handbook 2",
    categories: ["Avenger Implements", "ID_INTERNAL_GRANTS_AVENGER_IMPLEMENTS"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HOLY_SYMBOL)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Barbarian"] = new RulesElement({
    name: "Barbarian",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_BARBARIAN",
    source: "Player's Handbook 2",
    categories: ["Barbarian", "ID_INTERNAL_GRANTS_BARBARIAN"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_ROLE_3"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_4"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1492"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1051"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1052"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1053"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_BARBARIAN_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Barbarian Implements"] = new RulesElement({
    name: "Barbarian Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_BARBARIAN_IMPLEMENTS",
    source: "Player's Handbook 2",
    categories: ["Barbarian Implements", "ID_INTERNAL_GRANTS_BARBARIAN_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Bard"] = new RulesElement({
    name: "Bard",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_BARD",
    source: "Player's Handbook 2",
    categories: ["Bard", "ID_INTERNAL_GRANTS_BARD"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_ROLE_2"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_2"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_RANGED"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCIMITAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORT_SWORD)"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_847"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_700"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_696"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_697"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_698"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_699"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1120"]);
      model.grant(elements.id["ID_INTERNAL_SKILL_TRAINING_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_BARD_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Bard Implements"] = new RulesElement({
    name: "Bard Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_BARD_IMPLEMENTS",
    source: "Player's Handbook 2",
    categories: ["Bard Implements", "ID_INTERNAL_GRANTS_BARD_IMPLEMENTS"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WAND)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Deva"] = new RulesElement({
    name: "Deva",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_DEVA",
    source: "Player's Handbook 2",
    categories: ["Deva", "ID_INTERNAL_GRANTS_DEVA"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_NORMAL"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1137"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1138"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1139"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1140"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_INTELLIGENCE"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_WISDOM"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_HISTORY_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_RELIGION_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Druid"] = new RulesElement({
    name: "Druid",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_DRUID",
    source: "Player's Handbook 2",
    categories: ["Druid", "ID_INTERNAL_GRANTS_DRUID"],
    rules: function(model) {
      model.statadd("FREEBEE:ID_FMP_GEAR_31", 1);
      model.statadd("FREEBEE:ID_FMP_RITUAL_40", 1);
      model.statadd("Free Rituals", "* As a druid you have been given the Animal Messenger ritual, and you are entitled to an additional free 1st-level ritual to begin your career.");
      model.grant(elements.id["ID_FMP_ROLE_1"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_4"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1493"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_784"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_683"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_766"]);
      model.grant(elements.id["ID_INTERNAL_SKILL_TRAINING_NATURE"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_DRUID_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Druid Implements"] = new RulesElement({
    name: "Druid Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_DRUID_IMPLEMENTS",
    source: "Player's Handbook 2",
    categories: ["Druid Implements", "ID_INTERNAL_GRANTS_DRUID_IMPLEMENTS"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(STAFF)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TOTEM)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Gnome"] = new RulesElement({
    name: "Gnome",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_GNOME",
    source: "Player's Handbook 2",
    categories: ["Gnome", "ID_INTERNAL_GRANTS_GNOME"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_SMALL"]);
      model.grant(elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_426"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_427"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_641"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1142"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1141"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CHARISMA"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_INTELLIGENCE"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_4"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_ARCANA_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_STEALTH_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Goliath"] = new RulesElement({
    name: "Goliath",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_GOLIATH",
    source: "Player's Handbook 2",
    categories: ["Goliath", "ID_INTERNAL_GRANTS_GOLIATH"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_NORMAL"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1143"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1144"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1145"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CONSTITUTION"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_STRENGTH"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_ATHLETICS_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_NATURE_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Half-Orc"] = new RulesElement({
    name: "Half-Orc",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HALF-ORC",
    source: "Player's Handbook 2",
    categories: ["Half-Orc", "ID_INTERNAL_GRANTS_HALF-ORC"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1146"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1147"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1148"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_STRENGTH"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_19"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_ENDURANCE_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_INTIMIDATE_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Invoker"] = new RulesElement({
    name: "Invoker",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_INVOKER",
    source: "Player's Handbook 2",
    categories: ["Invoker", "ID_INTERNAL_GRANTS_INVOKER"],
    rules: function(model) {
      model.statadd("FREEBEE:ID_FMP_GEAR_31", 1);
      model.statadd("FREEBEE:ID_FMP_RITUAL_16", 1);
      model.statadd("Free Rituals", "* As an invoker you have been given the Hand of Fate ritual, and you are entitled to an additional free 1st-level ritual to begin your career.");
      model.grant(elements.id["ID_FMP_ROLE_1"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_3"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_324"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1156"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_683"]);
      model.grant(elements.id["ID_INTERNAL_SKILL_TRAINING_RELIGION"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_INVOKER_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Invoker Implements"] = new RulesElement({
    name: "Invoker Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_INVOKER_IMPLEMENTS",
    source: "Player's Handbook 2",
    categories: ["Invoker Implements", "ID_INTERNAL_GRANTS_INVOKER_IMPLEMENTS"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ROD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(STAFF)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Longtooth Shifter"] = new RulesElement({
    name: "Longtooth Shifter",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_LONGTOOTH_SHIFTER",
    source: "Player's Handbook 2",
    categories: ["Longtooth Shifter", "ID_INTERNAL_GRANTS_LONGTOOTH_SHIFTER"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_429"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_STRENGTH"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_WISDOM"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_ATHLETICS_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_ENDURANCE_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Razorclaw Shifter"] = new RulesElement({
    name: "Razorclaw Shifter",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_RAZORCLAW_SHIFTER",
    source: "Player's Handbook 2",
    categories: ["Razorclaw Shifter", "ID_INTERNAL_GRANTS_RAZORCLAW_SHIFTER"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_720"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_WISDOM"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_ACROBATICS_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_STEALTH_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Shaman"] = new RulesElement({
    name: "Shaman",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_SHAMAN",
    source: "Player's Handbook 2",
    categories: ["Shaman", "ID_INTERNAL_GRANTS_SHAMAN"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_ROLE_2"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_4"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSPEAR)"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_855"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_854"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_857"]);
      model.grant(elements.id["ID_INTERNAL_SKILL_TRAINING_NATURE"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_SHAMAN_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Shaman Implements"] = new RulesElement({
    name: "Shaman Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_SHAMAN_IMPLEMENTS",
    source: "Player's Handbook 2",
    categories: ["Shaman Implements", "ID_INTERNAL_GRANTS_SHAMAN_IMPLEMENTS"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TOTEM)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Sorcerer"] = new RulesElement({
    name: "Sorcerer",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_SORCERER",
    source: "Player's Handbook 2",
    categories: ["Sorcerer", "ID_INTERNAL_GRANTS_SORCERER"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_ROLE_3"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_2"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_850"]);
      model.grant(elements.id["ID_INTERNAL_SKILL_TRAINING_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_SORCERER_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Sorcerer Implements"] = new RulesElement({
    name: "Sorcerer Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_SORCERER_IMPLEMENTS",
    source: "Player's Handbook 2",
    categories: ["Sorcerer Implements", "ID_INTERNAL_GRANTS_SORCERER_IMPLEMENTS"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DAGGER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(STAFF)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Warden"] = new RulesElement({
    name: "Warden",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_WARDEN",
    source: "Player's Handbook 2",
    categories: ["Warden", "ID_INTERNAL_GRANTS_WARDEN"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_ROLE_4"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_4"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1280"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1281"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1282"]);
      model.grant(elements.id["ID_INTERNAL_SKILL_TRAINING_NATURE"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_WARDEN_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Warden Implements"] = new RulesElement({
    name: "Warden Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_WARDEN_IMPLEMENTS",
    source: "Player's Handbook 2",
    categories: ["Warden Implements", "ID_INTERNAL_GRANTS_WARDEN_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  
})(this);
