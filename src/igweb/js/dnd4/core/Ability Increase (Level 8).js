define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ability_Increase_Level_8 = types['Ability Increase (Level 8)'] || (types['Ability Increase (Level 8)'] = {});
  te = Ability_Increase_Level_8["Charisma"] = new engine.RulesElement({
    name: "Charisma",
    type: "Ability Increase (Level 8)",
    id: "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_8)_CHARISMA",
    source: "Core",
    categories: ["Charisma", "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_8)_CHARISMA"],
    rules: function(model) {
      model.statadd("Charisma", 1);
    }
  });
  byID[te.id] = te;
  
  te = Ability_Increase_Level_8["Constitution"] = new engine.RulesElement({
    name: "Constitution",
    type: "Ability Increase (Level 8)",
    id: "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_8)_CONSTITUTION",
    source: "Core",
    categories: ["Constitution", "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_8)_CONSTITUTION"],
    rules: function(model) {
      model.statadd("Constitution", 1);
    }
  });
  byID[te.id] = te;
  
  te = Ability_Increase_Level_8["Dexterity"] = new engine.RulesElement({
    name: "Dexterity",
    type: "Ability Increase (Level 8)",
    id: "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_8)_DEXTERITY",
    source: "Core",
    categories: ["Dexterity", "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_8)_DEXTERITY"],
    rules: function(model) {
      model.statadd("Dexterity", 1);
    }
  });
  byID[te.id] = te;
  
  te = Ability_Increase_Level_8["Intelligence"] = new engine.RulesElement({
    name: "Intelligence",
    type: "Ability Increase (Level 8)",
    id: "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_8)_INTELLIGENCE",
    source: "Core",
    categories: ["Intelligence", "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_8)_INTELLIGENCE"],
    rules: function(model) {
      model.statadd("Intelligence", 1);
    }
  });
  byID[te.id] = te;
  
  te = Ability_Increase_Level_8["Strength"] = new engine.RulesElement({
    name: "Strength",
    type: "Ability Increase (Level 8)",
    id: "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_8)_STRENGTH",
    source: "Core",
    categories: ["Strength", "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_8)_STRENGTH"],
    rules: function(model) {
      model.statadd("Strength", 1);
    }
  });
  byID[te.id] = te;
  
  te = Ability_Increase_Level_8["Wisdom"] = new engine.RulesElement({
    name: "Wisdom",
    type: "Ability Increase (Level 8)",
    id: "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_8)_WISDOM",
    source: "Core",
    categories: ["Wisdom", "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_8)_WISDOM"],
    rules: function(model) {
      model.statadd("Wisdom", 1);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
