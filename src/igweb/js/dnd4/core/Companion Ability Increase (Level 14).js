define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Companion_Ability_Increase_Level_14 = types['Companion Ability Increase (Level 14)'] || (types['Companion Ability Increase (Level 14)'] = {});
  te = Companion_Ability_Increase_Level_14["Charisma"] = new engine.RulesElement({
    name: "Charisma",
    type: "Companion Ability Increase (Level 14)",
    id: "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_14)_CHARISMA",
    source: "Core",
    categories: ["Charisma", "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_14)_CHARISMA"],
    rules: function(model) {
      model.statadd("Companion.Charisma", 1);
    }
  });
  byID[te.id] = te;
  
  te = Companion_Ability_Increase_Level_14["Constitution"] = new engine.RulesElement({
    name: "Constitution",
    type: "Companion Ability Increase (Level 14)",
    id: "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_14)_CONSTITUTION",
    source: "Core",
    categories: ["Constitution", "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_14)_CONSTITUTION"],
    rules: function(model) {
      model.statadd("Companion.Constitution", 1);
    }
  });
  byID[te.id] = te;
  
  te = Companion_Ability_Increase_Level_14["Dexterity"] = new engine.RulesElement({
    name: "Dexterity",
    type: "Companion Ability Increase (Level 14)",
    id: "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_14)_DEXTERITY",
    source: "Core",
    categories: ["Dexterity", "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_14)_DEXTERITY"],
    rules: function(model) {
      model.statadd("Companion.Dexterity", 1);
    }
  });
  byID[te.id] = te;
  
  te = Companion_Ability_Increase_Level_14["Intelligence"] = new engine.RulesElement({
    name: "Intelligence",
    type: "Companion Ability Increase (Level 14)",
    id: "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_14)_INTELLIGENCE",
    source: "Core",
    categories: ["Intelligence", "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_14)_INTELLIGENCE"],
    rules: function(model) {
      model.statadd("Companion.Intelligence", 1);
    }
  });
  byID[te.id] = te;
  
  te = Companion_Ability_Increase_Level_14["Strength"] = new engine.RulesElement({
    name: "Strength",
    type: "Companion Ability Increase (Level 14)",
    id: "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_14)_STRENGTH",
    source: "Core",
    categories: ["Strength", "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_14)_STRENGTH"],
    rules: function(model) {
      model.statadd("Companion.Strength", 1);
    }
  });
  byID[te.id] = te;
  
  te = Companion_Ability_Increase_Level_14["Wisdom"] = new engine.RulesElement({
    name: "Wisdom",
    type: "Companion Ability Increase (Level 14)",
    id: "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_14)_WISDOM",
    source: "Core",
    categories: ["Wisdom", "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_14)_WISDOM"],
    rules: function(model) {
      model.statadd("Companion.Wisdom", 1);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
