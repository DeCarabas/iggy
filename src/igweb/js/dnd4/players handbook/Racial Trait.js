define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Bloodhunt"] = new engine.RulesElement({
    name: "Bloodhunt",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_647",
    source: "Player's Handbook",
    categories: ["Bloodhunt", "ID_FMP_RACIAL_TRAIT_647"],
    rules: function(model) {
      model.statadd("Bloodhunt", 1);
      model.statadd("attack rolls", function() { /* against bloodied foes */ return model.stat("Bloodhunt"); }, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Bold"] = new engine.RulesElement({
    name: "Bold",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_25",
    source: "Player's Handbook",
    categories: ["Bold", "ID_FMP_RACIAL_TRAIT_25"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear */ return 5; }, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Bonus At-Will Power"] = new engine.RulesElement({
    name: "Bonus At-Will Power",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_356",
    source: "Player's Handbook",
    categories: ["Bonus At-Will Power", "ID_FMP_RACIAL_TRAIT_356", "ID_FMP_RACIAL_TRAIT_2966", "Human Power Selection"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Bonus Feat"] = new engine.RulesElement({
    name: "Bonus Feat",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_29",
    source: "Player's Handbook",
    categories: ["Bonus Feat", "ID_FMP_RACIAL_TRAIT_29"],
    rules: function(model) {
      model.select('Feat', 1);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Bonus Skill"] = new engine.RulesElement({
    name: "Bonus Skill",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_34",
    source: "Player's Handbook",
    categories: ["Bonus Skill", "ID_FMP_RACIAL_TRAIT_34"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Cast-Iron Stomach"] = new engine.RulesElement({
    name: "Cast-Iron Stomach",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_10",
    source: "Player's Handbook",
    categories: ["Cast-Iron Stomach", "ID_FMP_RACIAL_TRAIT_10"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against poison */ return 5; }, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dilettante"] = new engine.RulesElement({
    name: "Dilettante",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_643",
    source: "Player's Handbook",
    categories: ["Dilettante", "ID_FMP_RACIAL_TRAIT_643"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (true /* NYI: Filter: $$NOT_CLASS */ && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Draconic Heritage"] = new engine.RulesElement({
    name: "Draconic Heritage",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_631",
    source: "Player's Handbook",
    categories: ["Draconic Heritage", "ID_FMP_RACIAL_TRAIT_631"],
    rules: function(model) {
      model.statadd("Healing Surge Value", function() { return abilitymod(model.stat("con")); });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dragon Breath"] = new engine.RulesElement({
    name: "Dragon Breath",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_6",
    source: "Player's Handbook",
    categories: ["Dragon Breath", "ID_FMP_RACIAL_TRAIT_6", "ID_FMP_RACIAL_TRAIT_3162", "Dragonborn Racial Power"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1448"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dragon Breath Acid"] = new engine.RulesElement({
    name: "Dragon Breath Acid",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_DRAGON_BREATH_ACID",
    source: "Player's Handbook",
    categories: ["Dragon Breath Acid", "ID_INTERNAL_RACIAL_TRAIT_DRAGON_BREATH_ACID", "Dragon Breath", "Element Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dragon Breath Cold"] = new engine.RulesElement({
    name: "Dragon Breath Cold",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_DRAGON_BREATH_COLD",
    source: "Player's Handbook",
    categories: ["Dragon Breath Cold", "ID_INTERNAL_RACIAL_TRAIT_DRAGON_BREATH_COLD", "Dragon Breath", "Element Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dragon Breath Constitution"] = new engine.RulesElement({
    name: "Dragon Breath Constitution",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_DRAGON_BREATH_CONSTITUTION",
    source: "Player's Handbook",
    categories: ["Dragon Breath Constitution", "ID_INTERNAL_RACIAL_TRAIT_DRAGON_BREATH_CONSTITUTION", "Dragon Breath", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dragon Breath Dexterity"] = new engine.RulesElement({
    name: "Dragon Breath Dexterity",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_DRAGON_BREATH_DEXTERITY",
    source: "Player's Handbook",
    categories: ["Dragon Breath Dexterity", "ID_INTERNAL_RACIAL_TRAIT_DRAGON_BREATH_DEXTERITY", "Dragon Breath", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dragon Breath Fire"] = new engine.RulesElement({
    name: "Dragon Breath Fire",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_DRAGON_BREATH_FIRE",
    source: "Player's Handbook",
    categories: ["Dragon Breath Fire", "ID_INTERNAL_RACIAL_TRAIT_DRAGON_BREATH_FIRE", "Dragon Breath", "Element Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dragon Breath Lightning"] = new engine.RulesElement({
    name: "Dragon Breath Lightning",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_DRAGON_BREATH_LIGHTNING",
    source: "Player's Handbook",
    categories: ["Dragon Breath Lightning", "ID_INTERNAL_RACIAL_TRAIT_DRAGON_BREATH_LIGHTNING", "Dragon Breath", "Element Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dragon Breath Poison"] = new engine.RulesElement({
    name: "Dragon Breath Poison",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_DRAGON_BREATH_POISON",
    source: "Player's Handbook",
    categories: ["Dragon Breath Poison", "ID_INTERNAL_RACIAL_TRAIT_DRAGON_BREATH_POISON", "Dragon Breath", "Element Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dragon Breath Strength"] = new engine.RulesElement({
    name: "Dragon Breath Strength",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_DRAGON_BREATH_STRENGTH",
    source: "Player's Handbook",
    categories: ["Dragon Breath Strength", "ID_INTERNAL_RACIAL_TRAIT_DRAGON_BREATH_STRENGTH", "Dragon Breath", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dragonborn Fury"] = new engine.RulesElement({
    name: "Dragonborn Fury",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_379",
    source: "Player's Handbook",
    categories: ["Dragonborn Fury", "ID_FMP_RACIAL_TRAIT_379"],
    rules: function(model) {
      model.statadd("Dragonborn Fury Bonus", 1);
      model.statadd("attack rolls", function() { /* when you're bloodied */ return model.stat("Dragonborn Fury Bonus"); }, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dragonborn Racial Power"] = new engine.RulesElement({
    name: "Dragonborn Racial Power",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_3162",
    source: "Player's Handbook",
    categories: ["Dragonborn Racial Power", "ID_FMP_RACIAL_TRAIT_3162"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return element.hasCategory("Dragonborn Racial Power"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dual Heritage"] = new engine.RulesElement({
    name: "Dual Heritage",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_30",
    source: "Player's Handbook",
    categories: ["Dual Heritage", "ID_FMP_RACIAL_TRAIT_30"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_ELF"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_HUMAN"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dwarven Resilience"] = new engine.RulesElement({
    name: "Dwarven Resilience",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_12",
    source: "Player's Handbook",
    categories: ["Dwarven Resilience", "ID_FMP_RACIAL_TRAIT_12"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13211"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dwarven Weapon Proficiency"] = new engine.RulesElement({
    name: "Dwarven Weapon Proficiency",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_9",
    source: "Player's Handbook",
    categories: ["Dwarven Weapon Proficiency", "ID_FMP_RACIAL_TRAIT_9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(THROWING_HAMMER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WARHAMMER)"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Eladrin Education"] = new engine.RulesElement({
    name: "Eladrin Education",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_17",
    source: "Player's Handbook",
    categories: ["Eladrin Education", "ID_FMP_RACIAL_TRAIT_17"],
    rules: function(model) {
      model.select('Skill Training', 1);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Eladrin Weapon Proficiency"] = new engine.RulesElement({
    name: "Eladrin Weapon Proficiency",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_15",
    source: "Player's Handbook",
    categories: ["Eladrin Weapon Proficiency", "ID_FMP_RACIAL_TRAIT_15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSWORD)"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Eladrin Will"] = new engine.RulesElement({
    name: "Eladrin Will",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_350",
    source: "Player's Handbook",
    categories: ["Eladrin Will", "ID_FMP_RACIAL_TRAIT_350"],
    rules: function(model) {
      model.statadd("Will Defense", 1, "Racial");
      model.statadd("Saving Throws", function() { /* against charm effects */ return 5; }, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Elven Accuracy"] = new engine.RulesElement({
    name: "Elven Accuracy",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_359",
    source: "Player's Handbook",
    categories: ["Elven Accuracy", "ID_FMP_RACIAL_TRAIT_359"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1450"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Elven Weapon Proficiency"] = new engine.RulesElement({
    name: "Elven Weapon Proficiency",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_20",
    source: "Player's Handbook",
    categories: ["Elven Weapon Proficiency", "ID_FMP_RACIAL_TRAIT_20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGBOW)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORTBOW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Encumbered Speed"] = new engine.RulesElement({
    name: "Encumbered Speed",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_11",
    source: "Player's Handbook",
    categories: ["Encumbered Speed", "ID_FMP_RACIAL_TRAIT_11"],
    rules: function(model) {
      model.statadd("Speed", 0, "Armor");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Fey Origin"] = new engine.RulesElement({
    name: "Fey Origin",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_641",
    source: "Player's Handbook,Player's Handbook 2,Player's Handbook 3,Forgotten Realms Player's Guide",
    categories: ["Fey Origin", "ID_FMP_RACIAL_TRAIT_641"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Fey Step"] = new engine.RulesElement({
    name: "Fey Step",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_352",
    source: "Player's Handbook",
    categories: ["Fey Step", "ID_FMP_RACIAL_TRAIT_352"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1449"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Fire Resistance"] = new engine.RulesElement({
    name: "Fire Resistance",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_39",
    source: "Player's Handbook",
    categories: ["Fire Resistance", "ID_FMP_RACIAL_TRAIT_39"],
    rules: function(model) {
      model.statadd("_generic fire resist", 5);
      model.statadd("_generic fire resist", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("resist:fire", function() { return model.stat("_generic fire resist"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Group Awareness"] = new engine.RulesElement({
    name: "Group Awareness",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_353",
    source: "Player's Handbook",
    categories: ["Group Awareness", "ID_FMP_RACIAL_TRAIT_353"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Group Diplomacy"] = new engine.RulesElement({
    name: "Group Diplomacy",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_644",
    source: "Player's Handbook",
    categories: ["Group Diplomacy", "ID_FMP_RACIAL_TRAIT_644"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Human Defense Bonuses"] = new engine.RulesElement({
    name: "Human Defense Bonuses",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_646",
    source: "Player's Handbook",
    categories: ["Human Defense Bonuses", "ID_FMP_RACIAL_TRAIT_646"],
    rules: function(model) {
      model.statadd("Human Defense Bonuses", 1);
      model.statadd("Fortitude Defense", function() { return model.stat("Human Defense Bonuses"); }, "Racial");
      model.statadd("Reflex Defense", function() { return model.stat("Human Defense Bonuses"); }, "Racial");
      model.statadd("Will Defense", function() { return model.stat("Human Defense Bonuses"); }, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Infernal Wrath"] = new engine.RulesElement({
    name: "Infernal Wrath",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_38",
    source: "Player's Handbook",
    categories: ["Infernal Wrath", "ID_FMP_RACIAL_TRAIT_38"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1628"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Nimble Reaction"] = new engine.RulesElement({
    name: "Nimble Reaction",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_361",
    source: "Player's Handbook",
    categories: ["Nimble Reaction", "ID_FMP_RACIAL_TRAIT_361"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return 2; }, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Second Chance"] = new engine.RulesElement({
    name: "Second Chance",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_26",
    source: "Player's Handbook",
    categories: ["Second Chance", "ID_FMP_RACIAL_TRAIT_26"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1452"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Stand Your Ground"] = new engine.RulesElement({
    name: "Stand Your Ground",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_632",
    source: "Player's Handbook",
    categories: ["Stand Your Ground", "ID_FMP_RACIAL_TRAIT_632"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Trance"] = new engine.RulesElement({
    name: "Trance",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_14",
    source: "Player's Handbook,Forgotten Realms Player's Guide",
    categories: ["Trance", "ID_FMP_RACIAL_TRAIT_14"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Wild Step"] = new engine.RulesElement({
    name: "Wild Step",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_642",
    source: "Player's Handbook",
    categories: ["Wild Step", "ID_FMP_RACIAL_TRAIT_642"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
