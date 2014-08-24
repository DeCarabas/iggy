(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Grants = types['Grants'] || (types['Grants'] = {});
  te = Grants["Cleric"] = new RulesElement({
    name: "Cleric",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_CLERIC",
    source: "Player's Handbook",
    categories: ["Cleric", "ID_INTERNAL_GRANTS_CLERIC"],
    rules: function(model) {
      model.statadd("FREEBEE:ID_FMP_GEAR_31", 1);
      model.statadd("FREEBEE:ID_FMP_RITUAL_47", 1);
      model.statadd("Free Rituals", "* As a cleric you have been given the Gentle Repose ritual, and you are entitled to an additional free 1st-level ritual to begin your career.");
      model.grant(elements.id["ID_FMP_ROLE_2"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_3"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_324"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_395"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_64"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_683"]);
      model.grant(elements.id["ID_INTERNAL_SKILL_TRAINING_RELIGION"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_CLERIC_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Cleric Implements"] = new RulesElement({
    name: "Cleric Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_CLERIC_IMPLEMENTS",
    source: "Player's Handbook",
    categories: ["Cleric Implements", "ID_INTERNAL_GRANTS_CLERIC_IMPLEMENTS"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HOLY_SYMBOL)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Dragonborn"] = new RulesElement({
    name: "Dragonborn",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_DRAGONBORN",
    source: "Player's Handbook",
    categories: ["Dragonborn", "ID_INTERNAL_GRANTS_DRAGONBORN"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_NORMAL"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_379"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_631"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_3162"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CHARISMA"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_STRENGTH"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_2"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_HISTORY_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_INTIMIDATE_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Dwarf"] = new RulesElement({
    name: "Dwarf",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_DWARF",
    source: "Player's Handbook",
    categories: ["Dwarf", "ID_INTERNAL_GRANTS_DWARF"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_9"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_10"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_11"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_12"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_632"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CONSTITUTION"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_3"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_DUNGEONEERING_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_ENDURANCE_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Eladrin"] = new RulesElement({
    name: "Eladrin",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_ELADRIN",
    source: "Player's Handbook",
    categories: ["Eladrin", "ID_INTERNAL_GRANTS_ELADRIN"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_14"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_15"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_17"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_350"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_352"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_641"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_INTELLIGENCE"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_4"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_ARCANA_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_HISTORY_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Elf"] = new RulesElement({
    name: "Elf",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_ELF",
    source: "Player's Handbook",
    categories: ["Elf", "ID_INTERNAL_GRANTS_ELF"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_20"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_353"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_359"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_641"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_642"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_4"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_NATURE_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_PERCEPTION_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Fighter"] = new RulesElement({
    name: "Fighter",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_FIGHTER",
    source: "Player's Handbook",
    categories: ["Fighter", "ID_INTERNAL_GRANTS_FIGHTER"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_ROLE_4"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_1"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(SCALE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_RANGED"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_54"]);
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_FEATURE_401") || element.hasCategory("ID_FMP_CLASS_FEATURE_2183")); }
      });
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1064"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_FIGHTER_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Fighter Implements"] = new RulesElement({
    name: "Fighter Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_FIGHTER_IMPLEMENTS",
    source: "Player's Handbook",
    categories: ["Fighter Implements", "ID_INTERNAL_GRANTS_FIGHTER_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Half-Elf"] = new RulesElement({
    name: "Half-Elf",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HALF-ELF",
    source: "Player's Handbook",
    categories: ["Half-Elf", "ID_INTERNAL_GRANTS_HALF-ELF"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_643"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_30"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_644"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CHARISMA"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CONSTITUTION"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_4"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_DIPLOMACY_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_INSIGHT_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Halfling"] = new RulesElement({
    name: "Halfling",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HALFLING",
    source: "Player's Handbook",
    categories: ["Halfling", "ID_INTERNAL_GRANTS_HALFLING"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_SMALL"]);
      model.grant(elements.id["ID_INTERNAL_VISION_NORMAL"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_25"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_26"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_361"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_ACROBATICS_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_THIEVERY_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Human"] = new RulesElement({
    name: "Human",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HUMAN",
    source: "Player's Handbook",
    categories: ["Human", "ID_INTERNAL_GRANTS_HUMAN"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_NORMAL"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_29"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_34"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_646"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_2966"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Paladin"] = new RulesElement({
    name: "Paladin",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_PALADIN",
    source: "Player's Handbook",
    categories: ["Paladin", "ID_INTERNAL_GRANTS_PALADIN"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_ROLE_4"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_3"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(SCALE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(PLATE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_324"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_72"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_434"]);
      model.grant(elements.id["ID_INTERNAL_SKILL_TRAINING_RELIGION"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_PALADIN_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Paladin Implements"] = new RulesElement({
    name: "Paladin Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_PALADIN_IMPLEMENTS",
    source: "Player's Handbook",
    categories: ["Paladin Implements", "ID_INTERNAL_GRANTS_PALADIN_IMPLEMENTS"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HOLY_SYMBOL)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Ranger"] = new RulesElement({
    name: "Ranger",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_RANGER",
    source: "Player's Handbook",
    categories: ["Ranger", "ID_INTERNAL_GRANTS_RANGER"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_ROLE_3"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_1"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_RANGED"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_321"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_602"]);
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_FEATURE_603") || element.hasCategory("ID_FMP_CLASS_FEATURE_2209")); }
      });
      model.grant(elements.id["ID_INTERNAL_GRANTS_RANGER_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Ranger Implements"] = new RulesElement({
    name: "Ranger Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_RANGER_IMPLEMENTS",
    source: "Player's Handbook",
    categories: ["Ranger Implements", "ID_INTERNAL_GRANTS_RANGER_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Rogue"] = new RulesElement({
    name: "Rogue",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_ROGUE",
    source: "Player's Handbook",
    categories: ["Rogue", "ID_INTERNAL_GRANTS_ROGUE"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_ROLE_3"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_1"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DAGGER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HAND_CROSSBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORT_SWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHURIKEN)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SLING)"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_368"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_547"]);
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_FEATURE_391") || element.hasCategory("ID_FMP_CLASS_FEATURE_2238")); }
      });
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_322"]);
      model.grant(elements.id["ID_INTERNAL_SKILL_TRAINING_STEALTH"]);
      model.grant(elements.id["ID_INTERNAL_SKILL_TRAINING_THIEVERY"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_ROGUE_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Rogue Implements"] = new RulesElement({
    name: "Rogue Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_ROGUE_IMPLEMENTS",
    source: "Player's Handbook",
    categories: ["Rogue Implements", "ID_INTERNAL_GRANTS_ROGUE_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Tiefling"] = new RulesElement({
    name: "Tiefling",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_TIEFLING",
    source: "Player's Handbook",
    categories: ["Tiefling", "ID_INTERNAL_GRANTS_TIEFLING"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_38"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_39"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_647"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CHARISMA"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_INTELLIGENCE"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_BLUFF_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_STEALTH_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Warlock"] = new RulesElement({
    name: "Warlock",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_WARLOCK",
    source: "Player's Handbook",
    categories: ["Warlock", "ID_INTERNAL_GRANTS_WARLOCK"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_ROLE_3"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_2"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_606"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_777"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_603"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_604"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_605"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_WARLOCK_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Warlock Implements"] = new RulesElement({
    name: "Warlock Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_WARLOCK_IMPLEMENTS",
    source: "Player's Handbook",
    categories: ["Warlock Implements", "ID_INTERNAL_GRANTS_WARLOCK_IMPLEMENTS"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ROD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WAND)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Warlord"] = new RulesElement({
    name: "Warlord",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_WARLORD",
    source: "Player's Handbook",
    categories: ["Warlord", "ID_INTERNAL_GRANTS_WARLORD"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_ROLE_2"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_1"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.select('class feature', 1, {
        optional: true,
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_2286"); }
      });
      model.select('class feature', 1, {
        filter: function(model, element) { return ((element.hasCategory("ID_FMP_CLASS_FEATURE_443") || element.hasCategory("ID_FMP_CLASS_FEATURE_2287")) || element.hasCategory("ID_FMP_CLASS_FEATURE_2285")); }
      });
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_316"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_317"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_WARLORD_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Warlord Implements"] = new RulesElement({
    name: "Warlord Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_WARLORD_IMPLEMENTS",
    source: "Player's Handbook",
    categories: ["Warlord Implements", "ID_INTERNAL_GRANTS_WARLORD_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Wizard"] = new RulesElement({
    name: "Wizard",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_WIZARD",
    source: "Player's Handbook",
    categories: ["Wizard", "ID_INTERNAL_GRANTS_WIZARD"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_ROLE_1"]);
      model.grant(elements.id["ID_FMP_POWER_SOURCE_2"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DAGGER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(QUARTERSTAFF)"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_444"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_130"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_683"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_318"]);
      model.grant(elements.id["ID_INTERNAL_SKILL_TRAINING_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_WIZARD_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Wizard Implements"] = new RulesElement({
    name: "Wizard Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_WIZARD_IMPLEMENTS",
    source: "Player's Handbook",
    categories: ["Wizard Implements", "ID_INTERNAL_GRANTS_WIZARD_IMPLEMENTS"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ORB)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(STAFF)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WAND)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TOME)"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
