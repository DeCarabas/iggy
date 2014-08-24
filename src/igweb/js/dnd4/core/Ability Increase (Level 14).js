(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ability_Increase_Level_14 = types['Ability Increase (Level 14)'] || (types['Ability Increase (Level 14)'] = {});
  te = Ability_Increase_Level_14["Charisma"] = new RulesElement({
    name: "Charisma",
    type: "Ability Increase (Level 14)",
    id: "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_14)_CHARISMA",
    source: "Core",
    categories: ["Charisma", "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_14)_CHARISMA"],
    rules: function(model) {
      model.statadd("Charisma", 1);
    }
  });
  byID[te.id] = te;
  
  te = Ability_Increase_Level_14["Constitution"] = new RulesElement({
    name: "Constitution",
    type: "Ability Increase (Level 14)",
    id: "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_14)_CONSTITUTION",
    source: "Core",
    categories: ["Constitution", "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_14)_CONSTITUTION"],
    rules: function(model) {
      model.statadd("Constitution", 1);
    }
  });
  byID[te.id] = te;
  
  te = Ability_Increase_Level_14["Dexterity"] = new RulesElement({
    name: "Dexterity",
    type: "Ability Increase (Level 14)",
    id: "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_14)_DEXTERITY",
    source: "Core",
    categories: ["Dexterity", "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_14)_DEXTERITY"],
    rules: function(model) {
      model.statadd("Dexterity", 1);
    }
  });
  byID[te.id] = te;
  
  te = Ability_Increase_Level_14["Intelligence"] = new RulesElement({
    name: "Intelligence",
    type: "Ability Increase (Level 14)",
    id: "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_14)_INTELLIGENCE",
    source: "Core",
    categories: ["Intelligence", "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_14)_INTELLIGENCE"],
    rules: function(model) {
      model.statadd("Intelligence", 1);
    }
  });
  byID[te.id] = te;
  
  te = Ability_Increase_Level_14["Strength"] = new RulesElement({
    name: "Strength",
    type: "Ability Increase (Level 14)",
    id: "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_14)_STRENGTH",
    source: "Core",
    categories: ["Strength", "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_14)_STRENGTH"],
    rules: function(model) {
      model.statadd("Strength", 1);
    }
  });
  byID[te.id] = te;
  
  te = Ability_Increase_Level_14["Wisdom"] = new RulesElement({
    name: "Wisdom",
    type: "Ability Increase (Level 14)",
    id: "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_14)_WISDOM",
    source: "Core",
    categories: ["Wisdom", "ID_INTERNAL_ABILITY_INCREASE_(LEVEL_14)_WISDOM"],
    rules: function(model) {
      model.statadd("Wisdom", 1);
    }
  });
  byID[te.id] = te;
  
  
})(this);
