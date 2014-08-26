define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Grants = types['Grants'] || (types['Grants'] = {});
  te = Grants["Ardent"] = new engine.RulesElement({
    name: "Ardent",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_ARDENT",
    source: "Player's Handbook 3",
    categories: ["Ardent", "ID_INTERNAL_GRANTS_ARDENT"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_PSIONIC_FIRST_CLASS"]);
      model.grant(model.elements.id["ID_FMP_ROLE_2"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_5"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2136"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2138"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1812"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_ARDENT_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Ardent Implements"] = new engine.RulesElement({
    name: "Ardent Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_ARDENT_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Ardent Implements", "ID_INTERNAL_GRANTS_ARDENT_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Battlemind"] = new engine.RulesElement({
    name: "Battlemind",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_BATTLEMIND",
    source: "Player's Handbook 3",
    categories: ["Battlemind", "ID_INTERNAL_GRANTS_BATTLEMIND"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_PSIONIC_FIRST_CLASS"]);
      model.grant(model.elements.id["ID_FMP_ROLE_4"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_5"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(SCALE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1812"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_764"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2175"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_BATTLEMIND_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Battlemind Implements"] = new engine.RulesElement({
    name: "Battlemind Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_BATTLEMIND_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Battlemind Implements", "ID_INTERNAL_GRANTS_BATTLEMIND_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Githzerai"] = new engine.RulesElement({
    name: "Githzerai",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_GITHZERAI",
    source: "Player's Handbook 3",
    categories: ["Githzerai", "ID_INTERNAL_GRANTS_GITHZERAI"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(model.elements.id["ID_INTERNAL_VISION_NORMAL"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_420"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_466"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_1861"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_1862"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_WISDOM"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_18"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_ACROBATICS_BONUS"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_ATHLETICS_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Ardent"] = new engine.RulesElement({
    name: "Hybrid Ardent",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_ARDENT",
    source: "Player's Handbook 3",
    categories: ["Hybrid Ardent", "ID_INTERNAL_GRANTS_HYBRID_ARDENT"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_ARDENT"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_PSIONIC_FIRST_CLASS"]);
      model.grant(model.elements.id["ID_FMP_ROLE_2"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_5"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2341"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2346"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2340"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_ARDENT_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Ardent Implements"] = new engine.RulesElement({
    name: "Hybrid Ardent Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_ARDENT_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Ardent Implements", "ID_INTERNAL_GRANTS_HYBRID_ARDENT_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Artificer"] = new engine.RulesElement({
    name: "Hybrid Artificer",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_ARTIFICER",
    source: "Player's Handbook 3",
    categories: ["Hybrid Artificer", "ID_INTERNAL_GRANTS_HYBRID_ARTIFICER"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_ARTIFICER"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_2"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_2"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2159"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_ARTIFICER_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Artificer Implements"] = new engine.RulesElement({
    name: "Hybrid Artificer Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_ARTIFICER_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Artificer Implements", "ID_INTERNAL_GRANTS_HYBRID_ARTIFICER_IMPLEMENTS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ROD)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(STAFF)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WAND)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Avenger"] = new engine.RulesElement({
    name: "Hybrid Avenger",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_AVENGER",
    source: "Player's Handbook 3",
    categories: ["Hybrid Avenger", "ID_INTERNAL_GRANTS_HYBRID_AVENGER"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_AVENGER"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_3"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_3"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1820"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_AVENGER_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Avenger Implements"] = new engine.RulesElement({
    name: "Hybrid Avenger Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_AVENGER_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Avenger Implements", "ID_INTERNAL_GRANTS_HYBRID_AVENGER_IMPLEMENTS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HOLY_SYMBOL)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Barbarian"] = new engine.RulesElement({
    name: "Hybrid Barbarian",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_BARBARIAN",
    source: "Player's Handbook 3",
    categories: ["Hybrid Barbarian", "ID_INTERNAL_GRANTS_HYBRID_BARBARIAN"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_BARBARIAN"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_3"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_4"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1053"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_BARBARIAN_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Barbarian Implements"] = new engine.RulesElement({
    name: "Hybrid Barbarian Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_BARBARIAN_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Barbarian Implements", "ID_INTERNAL_GRANTS_HYBRID_BARBARIAN_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Bard"] = new engine.RulesElement({
    name: "Hybrid Bard",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_BARD",
    source: "Player's Handbook 3",
    categories: ["Hybrid Bard", "ID_INTERNAL_GRANTS_HYBRID_BARD"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_BARD"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_2"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_2"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_RANGED"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSWORD)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCIMITAR)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORT_SWORD)"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1824"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_698"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_BARD_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Bard Implements"] = new engine.RulesElement({
    name: "Hybrid Bard Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_BARD_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Bard Implements", "ID_INTERNAL_GRANTS_HYBRID_BARD_IMPLEMENTS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WAND)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Battlemind"] = new engine.RulesElement({
    name: "Hybrid Battlemind",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_BATTLEMIND",
    source: "Player's Handbook 3",
    categories: ["Hybrid Battlemind", "ID_INTERNAL_GRANTS_HYBRID_BATTLEMIND"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_BATTLEMIND"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_PSIONIC_FIRST_CLASS"]);
      model.grant(model.elements.id["ID_FMP_ROLE_4"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_5"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(SCALE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2340"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2411"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_BATTLEMIND_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Battlemind Implements"] = new engine.RulesElement({
    name: "Hybrid Battlemind Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_BATTLEMIND_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Battlemind Implements", "ID_INTERNAL_GRANTS_HYBRID_BATTLEMIND_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Cleric"] = new engine.RulesElement({
    name: "Hybrid Cleric",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_CLERIC",
    source: "Player's Handbook 3",
    categories: ["Hybrid Cleric", "ID_INTERNAL_GRANTS_HYBRID_CLERIC"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_CLERIC"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_2"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_3"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_395"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1527"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_CLERIC_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Cleric Implements"] = new engine.RulesElement({
    name: "Hybrid Cleric Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_CLERIC_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Cleric Implements", "ID_INTERNAL_GRANTS_HYBRID_CLERIC_IMPLEMENTS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HOLY_SYMBOL)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Druid"] = new engine.RulesElement({
    name: "Hybrid Druid",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_DRUID",
    source: "Player's Handbook 3",
    categories: ["Hybrid Druid", "ID_INTERNAL_GRANTS_HYBRID_DRUID"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_DRUID"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_1"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_4"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_766"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_DRUID_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Druid Implements"] = new engine.RulesElement({
    name: "Hybrid Druid Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_DRUID_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Druid Implements", "ID_INTERNAL_GRANTS_HYBRID_DRUID_IMPLEMENTS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(STAFF)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TOTEM)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Fighter"] = new engine.RulesElement({
    name: "Hybrid Fighter",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_FIGHTER",
    source: "Player's Handbook 3",
    categories: ["Hybrid Fighter", "ID_INTERNAL_GRANTS_HYBRID_FIGHTER"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_FIGHTER"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_4"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_1"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(SCALE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1528"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_FIGHTER_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Fighter Implements"] = new engine.RulesElement({
    name: "Hybrid Fighter Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_FIGHTER_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Fighter Implements", "ID_INTERNAL_GRANTS_HYBRID_FIGHTER_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Invoker"] = new engine.RulesElement({
    name: "Hybrid Invoker",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_INVOKER",
    source: "Player's Handbook 3",
    categories: ["Hybrid Invoker", "ID_INTERNAL_GRANTS_HYBRID_INVOKER"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_INVOKER"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_1"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_3"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1512"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_INVOKER_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Invoker Implements"] = new engine.RulesElement({
    name: "Hybrid Invoker Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_INVOKER_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Invoker Implements", "ID_INTERNAL_GRANTS_HYBRID_INVOKER_IMPLEMENTS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ROD)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(STAFF)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Monk"] = new engine.RulesElement({
    name: "Hybrid Monk",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_MONK",
    source: "Player's Handbook 3",
    categories: ["Hybrid Monk", "ID_INTERNAL_GRANTS_HYBRID_MONK"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_MONK"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_3"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_5"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLUB)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DAGGER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(QUARTERSTAFF)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHURIKEN)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SLING)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPEAR)"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2413"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_KI_FOCUS_USER"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_MONK_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Monk Implements"] = new engine.RulesElement({
    name: "Hybrid Monk Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_MONK_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Monk Implements", "ID_INTERNAL_GRANTS_HYBRID_MONK_IMPLEMENTS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KI_FOCUSES)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(PROFICIENT_WEAPONS)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Paladin"] = new engine.RulesElement({
    name: "Hybrid Paladin",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_PALADIN",
    source: "Player's Handbook 3",
    categories: ["Hybrid Paladin", "ID_INTERNAL_GRANTS_HYBRID_PALADIN"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_PALADIN"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_4"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_3"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(SCALE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(PLATE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1529"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_PALADIN_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Paladin Implements"] = new engine.RulesElement({
    name: "Hybrid Paladin Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_PALADIN_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Paladin Implements", "ID_INTERNAL_GRANTS_HYBRID_PALADIN_IMPLEMENTS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HOLY_SYMBOL)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Psion"] = new engine.RulesElement({
    name: "Hybrid Psion",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_PSION",
    source: "Player's Handbook 3",
    categories: ["Hybrid Psion", "ID_INTERNAL_GRANTS_HYBRID_PSION"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_PSION"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_PSIONIC_FIRST_CLASS"]);
      model.grant(model.elements.id["ID_FMP_ROLE_1"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_5"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2415"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2340"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_PSION_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Psion Implements"] = new engine.RulesElement({
    name: "Hybrid Psion Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_PSION_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Psion Implements", "ID_INTERNAL_GRANTS_HYBRID_PSION_IMPLEMENTS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ORB)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(STAFF)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Ranger"] = new engine.RulesElement({
    name: "Hybrid Ranger",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_RANGER",
    source: "Player's Handbook 3",
    categories: ["Hybrid Ranger", "ID_INTERNAL_GRANTS_HYBRID_RANGER"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_RANGER"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_3"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_1"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1530"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_RANGER_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Ranger Implements"] = new engine.RulesElement({
    name: "Hybrid Ranger Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_RANGER_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Ranger Implements", "ID_INTERNAL_GRANTS_HYBRID_RANGER_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Rogue"] = new engine.RulesElement({
    name: "Hybrid Rogue",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_ROGUE",
    source: "Player's Handbook 3",
    categories: ["Hybrid Rogue", "ID_INTERNAL_GRANTS_HYBRID_ROGUE"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_ROGUE"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_3"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_1"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DAGGER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HAND_CROSSBOW)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORT_SWORD)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHURIKEN)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SLING)"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1531"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_ROGUE_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Rogue Implements"] = new engine.RulesElement({
    name: "Hybrid Rogue Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_ROGUE_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Rogue Implements", "ID_INTERNAL_GRANTS_HYBRID_ROGUE_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Runepriest"] = new engine.RulesElement({
    name: "Hybrid Runepriest",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_RUNEPRIEST",
    source: "Player's Handbook 3",
    categories: ["Hybrid Runepriest", "ID_INTERNAL_GRANTS_HYBRID_RUNEPRIEST"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_RUNEPRIEST"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_2"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_3"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(SCALE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2417"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2388"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_RUNEPRIEST_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Runepriest Implements"] = new engine.RulesElement({
    name: "Hybrid Runepriest Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_RUNEPRIEST_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Runepriest Implements", "ID_INTERNAL_GRANTS_HYBRID_RUNEPRIEST_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Seeker"] = new engine.RulesElement({
    name: "Hybrid Seeker",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_SEEKER",
    source: "Player's Handbook 3",
    categories: ["Hybrid Seeker", "ID_INTERNAL_GRANTS_HYBRID_SEEKER"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_SEEKER"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_1"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_4"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2419"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2420"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_SEEKER_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Seeker Implements"] = new engine.RulesElement({
    name: "Hybrid Seeker Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_SEEKER_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Seeker Implements", "ID_INTERNAL_GRANTS_HYBRID_SEEKER_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Shaman"] = new engine.RulesElement({
    name: "Hybrid Shaman",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_SHAMAN",
    source: "Player's Handbook 3",
    categories: ["Hybrid Shaman", "ID_INTERNAL_GRANTS_HYBRID_SHAMAN"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_SHAMAN"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_2"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_4"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSPEAR)"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1837"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1838"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_857"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_SHAMAN_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Shaman Implements"] = new engine.RulesElement({
    name: "Hybrid Shaman Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_SHAMAN_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Shaman Implements", "ID_INTERNAL_GRANTS_HYBRID_SHAMAN_IMPLEMENTS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TOTEM)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Sorcerer"] = new engine.RulesElement({
    name: "Hybrid Sorcerer",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_SORCERER",
    source: "Player's Handbook 3",
    categories: ["Hybrid Sorcerer", "ID_INTERNAL_GRANTS_HYBRID_SORCERER"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_SORCERER"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_3"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_2"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1840"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_SORCERER_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Sorcerer Implements"] = new engine.RulesElement({
    name: "Hybrid Sorcerer Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_SORCERER_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Sorcerer Implements", "ID_INTERNAL_GRANTS_HYBRID_SORCERER_IMPLEMENTS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DAGGER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(STAFF)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Swordmage"] = new engine.RulesElement({
    name: "Hybrid Swordmage",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_SWORDMAGE",
    source: "Player's Handbook 3",
    categories: ["Hybrid Swordmage", "ID_INTERNAL_GRANTS_HYBRID_SWORDMAGE"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_SWORDMAGE"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_4"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_2"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_LIGHT_BLADE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_HEAVY_BLADE"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_630"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1532"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_SWORDMAGE_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Swordmage Implements"] = new engine.RulesElement({
    name: "Hybrid Swordmage Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_SWORDMAGE_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Swordmage Implements", "ID_INTERNAL_GRANTS_HYBRID_SWORDMAGE_IMPLEMENTS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LIGHT_BLADE_GROUP)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HEAVY_BLADE_GROUP)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Warden"] = new engine.RulesElement({
    name: "Hybrid Warden",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_WARDEN",
    source: "Player's Handbook 3",
    categories: ["Hybrid Warden", "ID_INTERNAL_GRANTS_HYBRID_WARDEN"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_WARDEN"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_4"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_4"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1842"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_WARDEN_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Warden Implements"] = new engine.RulesElement({
    name: "Hybrid Warden Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_WARDEN_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Warden Implements", "ID_INTERNAL_GRANTS_HYBRID_WARDEN_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Warlock"] = new engine.RulesElement({
    name: "Hybrid Warlock",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_WARLOCK",
    source: "Player's Handbook 3",
    categories: ["Hybrid Warlock", "ID_INTERNAL_GRANTS_HYBRID_WARLOCK"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_WARLOCK"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_3"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_2"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1844"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1533"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_WARLOCK_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Warlock Implements"] = new engine.RulesElement({
    name: "Hybrid Warlock Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_WARLOCK_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Warlock Implements", "ID_INTERNAL_GRANTS_HYBRID_WARLOCK_IMPLEMENTS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ROD)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WAND)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Warlord"] = new engine.RulesElement({
    name: "Hybrid Warlord",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_WARLORD",
    source: "Player's Handbook 3",
    categories: ["Hybrid Warlord", "ID_INTERNAL_GRANTS_HYBRID_WARLORD"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_WARLORD"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_2"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_1"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1534"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2427"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_WARLORD_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Warlord Implements"] = new engine.RulesElement({
    name: "Hybrid Warlord Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_WARLORD_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Warlord Implements", "ID_INTERNAL_GRANTS_HYBRID_WARLORD_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Wizard"] = new engine.RulesElement({
    name: "Hybrid Wizard",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_WIZARD",
    source: "Player's Handbook 3",
    categories: ["Hybrid Wizard", "ID_INTERNAL_GRANTS_HYBRID_WIZARD"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_WIZARD"]);
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      // unsupported rule: cbimporter.Rules.SuggestRule
      model.grant(model.elements.id["ID_FMP_ROLE_1"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_2"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DAGGER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(QUARTERSTAFF)"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_130"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_WIZARD_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hybrid Wizard Implements"] = new engine.RulesElement({
    name: "Hybrid Wizard Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HYBRID_WIZARD_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Wizard Implements", "ID_INTERNAL_GRANTS_HYBRID_WIZARD_IMPLEMENTS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ORB)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(STAFF)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WAND)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TOME)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Minotaur"] = new engine.RulesElement({
    name: "Minotaur",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_MINOTAUR",
    source: "Player's Handbook 3",
    categories: ["Minotaur", "ID_INTERNAL_GRANTS_MINOTAUR"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(model.elements.id["ID_INTERNAL_VISION_NORMAL"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_411"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_412"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_1092"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_2525"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_STRENGTH"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_NATURE_BONUS"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_PERCEPTION_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Monk"] = new engine.RulesElement({
    name: "Monk",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_MONK",
    source: "Player's Handbook 3",
    categories: ["Monk", "ID_INTERNAL_GRANTS_MONK"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_ROLE_3"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_5"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLUB)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DAGGER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MONK_UNARMED_STRIKE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(QUARTERSTAFF)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHURIKEN)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SLING)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPEAR)"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1543"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1547"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1548"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_KI_FOCUS_USER"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_MONK_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Monk Implements"] = new engine.RulesElement({
    name: "Monk Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_MONK_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Monk Implements", "ID_INTERNAL_GRANTS_MONK_IMPLEMENTS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KI_FOCUSES)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(PROFICIENT_WEAPONS)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Psion"] = new engine.RulesElement({
    name: "Psion",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_PSION",
    source: "Player's Handbook 3",
    categories: ["Psion", "ID_INTERNAL_GRANTS_PSION"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_PSIONIC_FIRST_CLASS"]);
      model.grant(model.elements.id["ID_FMP_ROLE_1"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_5"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1810"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1812"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_683"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_PSION_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Psion Implements"] = new engine.RulesElement({
    name: "Psion Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_PSION_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Psion Implements", "ID_INTERNAL_GRANTS_PSION_IMPLEMENTS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ORB)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(STAFF)"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Runepriest"] = new engine.RulesElement({
    name: "Runepriest",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_RUNEPRIEST",
    source: "Player's Handbook 3",
    categories: ["Runepriest", "ID_INTERNAL_GRANTS_RUNEPRIEST"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_ROLE_2"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_3"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(SCALE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2384"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2387"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2388"]);
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_RELIGION"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_RUNEPRIEST_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Runepriest Implements"] = new engine.RulesElement({
    name: "Runepriest Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_RUNEPRIEST_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Runepriest Implements", "ID_INTERNAL_GRANTS_RUNEPRIEST_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Seeker"] = new engine.RulesElement({
    name: "Seeker",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_SEEKER",
    source: "Player's Handbook 3",
    categories: ["Seeker", "ID_INTERNAL_GRANTS_SEEKER"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_ROLE_1"]);
      model.grant(model.elements.id["ID_FMP_POWER_SOURCE_4"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_RANGED"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1943"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1944"]);
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_NATURE"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_SEEKER_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Seeker Implements"] = new engine.RulesElement({
    name: "Seeker Implements",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_SEEKER_IMPLEMENTS",
    source: "Player's Handbook 3",
    categories: ["Seeker Implements", "ID_INTERNAL_GRANTS_SEEKER_IMPLEMENTS"]
  });
  byID[te.id] = te;
  
  te = Grants["Shardmind"] = new engine.RulesElement({
    name: "Shardmind",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_SHARDMIND",
    source: "Player's Handbook 3",
    categories: ["Shardmind", "ID_INTERNAL_GRANTS_SHARDMIND"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(model.elements.id["ID_INTERNAL_VISION_NORMAL"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_2326"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_2327"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_406"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_1139"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_2328"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_INTELLIGENCE"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_18"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_ARCANA_BONUS"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_ENDURANCE_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Wilden"] = new engine.RulesElement({
    name: "Wilden",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_WILDEN",
    source: "Player's Handbook 3",
    categories: ["Wilden", "ID_INTERNAL_GRANTS_WILDEN"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(model.elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_641"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_1538"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_1539"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_WISDOM"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_4"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_NATURE_BONUS"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_STEALTH_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
