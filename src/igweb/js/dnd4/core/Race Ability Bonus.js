define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Race_Ability_Bonus = types['Race Ability Bonus'] || (types['Race Ability Bonus'] = {});
  te = Race_Ability_Bonus["Charisma"] = new engine.RulesElement({
    name: "Charisma",
    type: "Race Ability Bonus",
    id: "ID_INTERNAL_RACE_ABILITY_BONUS_CHARISMA",
    source: "Core",
    categories: ["Charisma", "ID_INTERNAL_RACE_ABILITY_BONUS_CHARISMA"],
    rules: function(model) {
      model.statadd("Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = Race_Ability_Bonus["Constitution"] = new engine.RulesElement({
    name: "Constitution",
    type: "Race Ability Bonus",
    id: "ID_INTERNAL_RACE_ABILITY_BONUS_CONSTITUTION",
    source: "Core",
    categories: ["Constitution", "ID_INTERNAL_RACE_ABILITY_BONUS_CONSTITUTION"],
    rules: function(model) {
      model.statadd("Constitution", 2);
    }
  });
  byID[te.id] = te;
  
  te = Race_Ability_Bonus["Dexterity"] = new engine.RulesElement({
    name: "Dexterity",
    type: "Race Ability Bonus",
    id: "ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY",
    source: "Core",
    categories: ["Dexterity", "ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"],
    rules: function(model) {
      model.statadd("Dexterity", 2);
    }
  });
  byID[te.id] = te;
  
  te = Race_Ability_Bonus["Intelligence"] = new engine.RulesElement({
    name: "Intelligence",
    type: "Race Ability Bonus",
    id: "ID_INTERNAL_RACE_ABILITY_BONUS_INTELLIGENCE",
    source: "Core",
    categories: ["Intelligence", "ID_INTERNAL_RACE_ABILITY_BONUS_INTELLIGENCE"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
    }
  });
  byID[te.id] = te;
  
  te = Race_Ability_Bonus["Strength"] = new engine.RulesElement({
    name: "Strength",
    type: "Race Ability Bonus",
    id: "ID_INTERNAL_RACE_ABILITY_BONUS_STRENGTH",
    source: "Core",
    categories: ["Strength", "ID_INTERNAL_RACE_ABILITY_BONUS_STRENGTH"],
    rules: function(model) {
      model.statadd("Strength", 2);
    }
  });
  byID[te.id] = te;
  
  te = Race_Ability_Bonus["Wisdom"] = new engine.RulesElement({
    name: "Wisdom",
    type: "Race Ability Bonus",
    id: "ID_INTERNAL_RACE_ABILITY_BONUS_WISDOM",
    source: "Core",
    categories: ["Wisdom", "ID_INTERNAL_RACE_ABILITY_BONUS_WISDOM"],
    rules: function(model) {
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
