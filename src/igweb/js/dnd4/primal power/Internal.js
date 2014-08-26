define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Internal = types['Internal'] || (types['Internal'] = {});
  te = Internal["AllAsThrown"] = new engine.RulesElement({
    name: "AllAsThrown",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_ALLASTHROWN",
    source: "Primal Power",
    categories: ["AllAsThrown", "ID_INTERNAL_INTERNAL_ALLASTHROWN"],
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
  
  te = Internal["Racial Encounter Powers"] = new engine.RulesElement({
    name: "Racial Encounter Powers",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_RACIAL_ENCOUNTER_POWERS",
    source: "Primal Power",
    categories: ["Racial Encounter Powers", "ID_INTERNAL_INTERNAL_RACIAL_ENCOUNTER_POWERS"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_27"]);
      model.grant(model.elements.id["ID_FMP_POWER_377"]);
      model.grant(model.elements.id["ID_FMP_POWER_1448"]);
      model.grant(model.elements.id["ID_FMP_POWER_1449"]);
      model.grant(model.elements.id["ID_FMP_POWER_1450"]);
      model.grant(model.elements.id["ID_FMP_POWER_1452"]);
      model.grant(model.elements.id["ID_FMP_POWER_1628"]);
      model.grant(model.elements.id["ID_FMP_POWER_1766"]);
      model.grant(model.elements.id["ID_FMP_POWER_1767"]);
      model.grant(model.elements.id["ID_FMP_POWER_1769"]);
      model.grant(model.elements.id["ID_FMP_POWER_1770"]);
      model.grant(model.elements.id["ID_FMP_POWER_1828"]);
      model.grant(model.elements.id["ID_FMP_POWER_1831"]);
      model.grant(model.elements.id["ID_FMP_POWER_2324"]);
      model.grant(model.elements.id["ID_FMP_POWER_2473"]);
      model.grant(model.elements.id["ID_FMP_POWER_2474"]);
      model.grant(model.elements.id["ID_FMP_POWER_2475"]);
      model.grant(model.elements.id["ID_FMP_POWER_2476"]);
      model.grant(model.elements.id["ID_FMP_POWER_2478"]);
      model.grant(model.elements.id["ID_FMP_POWER_2480"]);
      model.grant(model.elements.id["ID_FMP_POWER_2481"]);
      model.grant(model.elements.id["ID_FMP_POWER_2482"]);
      model.grant(model.elements.id["ID_FMP_POWER_2483"]);
      model.grant(model.elements.id["ID_FMP_POWER_2484"]);
      model.grant(model.elements.id["ID_FMP_POWER_2485"]);
      model.grant(model.elements.id["ID_FMP_POWER_5599"]);
      model.grant(model.elements.id["ID_FMP_POWER_6186"]);
      model.grant(model.elements.id["ID_FMP_POWER_6188"]);
      model.grant(model.elements.id["ID_FMP_POWER_6189"]);
      model.grant(model.elements.id["ID_FMP_POWER_7441"]);
      model.grant(model.elements.id["ID_FMP_POWER_7442"]);
      model.grant(model.elements.id["ID_FMP_POWER_7443"]);
      model.grant(model.elements.id["ID_FMP_POWER_7546"]);
      model.grant(model.elements.id["ID_FMP_POWER_7548"]);
      model.grant(model.elements.id["ID_FMP_POWER_8278"]);
      model.grant(model.elements.id["ID_FMP_POWER_10043"]);
      model.grant(model.elements.id["ID_FMP_POWER_10044"]);
      model.grant(model.elements.id["ID_FMP_POWER_10045"]);
      model.grant(model.elements.id["ID_FMP_POWER_10046"]);
      model.grant(model.elements.id["ID_FMP_POWER_11052"]);
      model.grant(model.elements.id["ID_FMP_POWER_12577"]);
      model.grant(model.elements.id["ID_FMP_POWER_13211"]);
    }
  });
  byID[te.id] = te;
  
  te = Internal["SimpleMilitaryAsThrown"] = new engine.RulesElement({
    name: "SimpleMilitaryAsThrown",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_SIMPLEMILITARYASTHROWN",
    source: "Primal Power",
    categories: ["SimpleMilitaryAsThrown", "ID_INTERNAL_INTERNAL_SIMPLEMILITARYASTHROWN"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_2,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_2,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_3,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_3,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_4,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_4,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_5,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_5,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_6,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_6,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_7,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_7,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_12,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_12,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_13,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_13,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_14,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_14,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_15,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_15,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_16,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_16,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_17,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_17,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_18,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_18,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_19,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_19,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_20,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_20,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_29,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_29,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_36,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_36,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_37,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_37,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_48,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_48,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_49,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_49,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_50,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_50,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_51,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_51,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_52,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_52,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_WEAPON_53,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_FMP_WEAPON_53,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_QUARTERSTAFF_SECONDARY_END,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_QUARTERSTAFF_SECONDARY_END,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_CLAW_FIGHTER_CLAW,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_CLAW_FIGHTER_CLAW,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_CLAW_FIGHTER_CLAW_SECONDARY_END,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_CLAW_FIGHTER_CLAW_SECONDARY_END,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_SHADOWBLADE,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_SHADOWBLADE,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_CLIMBING_CLAW,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_CLIMBING_CLAW,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_FERAL_ARMOR_CLAW,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_FERAL_ARMOR_CLAW,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_DRAGONTOOTH_SHIELD_(HEROIC_TIER),ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_DRAGONTOOTH_SHIELD_(HEROIC_TIER),ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_FIGHTING_SHIELD_(HEROIC_TIER),ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_FIGHTING_SHIELD_(HEROIC_TIER),ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_SOUL_SHIELD_(PARAGON_TIER),ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_SOUL_SHIELD_(PARAGON_TIER),ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_SUN_SHIELD_(PARAGON_TIER),ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_SUN_SHIELD_(PARAGON_TIER),ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_ROD_OF_SEVEN_PARTS_(WEAPON),ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_ROD_OF_SEVEN_PARTS_(WEAPON),ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_CLUB,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_CLUB,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_DAGGER,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_DAGGER,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_JAVELIN,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_JAVELIN,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_MACE,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_MACE,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SICKLE,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SICKLE,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SPEAR,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SPEAR,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_BATTLEAXE,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_BATTLEAXE,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_HANDAXE,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_HANDAXE,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_FLAIL,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_FLAIL,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_THROWING_HAMMER,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_THROWING_HAMMER,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_WARHAMMER,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_WARHAMMER,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_WAR_PICK,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_WAR_PICK,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SCIMITAR,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SCIMITAR,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_LONGSWORD,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_LONGSWORD,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SHORT_SWORD,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SHORT_SWORD,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_RAPIER,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_RAPIER,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_HAND_CROSSBOW,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_HAND_CROSSBOW,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SLING,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SLING,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SPIKED_GAUNTLET,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SPIKED_GAUNTLET,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_BROADSWORD,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_BROADSWORD,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_KHOPESH,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_KHOPESH,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_LIGHT_WAR_PICK,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_LIGHT_WAR_PICK,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SCOURGE,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SCOURGE,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_TRIDENT,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_TRIDENT,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_QUARTERSTAFF_-_SECONDARY_END,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_QUARTERSTAFF_-_SECONDARY_END,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SHADOWBLADE,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SHADOWBLADE,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_CLIMBING_CLAW,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_CLIMBING_CLAW,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_FERAL_ARMOR_CLAW,ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_FERAL_ARMOR_CLAW,ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_DRAGONTOOTH_SHIELD_(HEROIC_TIER),ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_DRAGONTOOTH_SHIELD_(HEROIC_TIER),ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_FIGHTING_SHIELD_(HEROIC_TIER),ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_FIGHTING_SHIELD_(HEROIC_TIER),ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SOUL_SHIELD_(PARAGON_TIER),ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SOUL_SHIELD_(PARAGON_TIER),ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SUN_SHIELD_(PARAGON_TIER),ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_SUN_SHIELD_(PARAGON_TIER),ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_INTERNAL_WEAPON_LARGE_ROD_OF_SEVEN_PARTS_(WEAPON),ranged basic:damage", function() { return model.stat("Constitution modifier"); });
      model.statadd("ID_INTERNAL_WEAPON_LARGE_ROD_OF_SEVEN_PARTS_(WEAPON),ranged basic:attack", function() { /* if the target is adjacent to one of your allies */ return 2; });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
