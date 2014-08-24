(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Companion_Ability_Increase_Level_8 = types['Companion Ability Increase (Level 8)'] || (types['Companion Ability Increase (Level 8)'] = {});
  te = Companion_Ability_Increase_Level_8["Charisma"] = new RulesElement({
    name: "Charisma",
    type: "Companion Ability Increase (Level 8)",
    id: "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_8)_CHARISMA",
    source: "Core",
    categories: ["Charisma", "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_8)_CHARISMA"],
    rules: function(model) {
      model.statadd("Companion.Charisma", 1);
    }
  });
  byID[te.id] = te;
  
  te = Companion_Ability_Increase_Level_8["Constitution"] = new RulesElement({
    name: "Constitution",
    type: "Companion Ability Increase (Level 8)",
    id: "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_8)_CONSTITUTION",
    source: "Core",
    categories: ["Constitution", "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_8)_CONSTITUTION"],
    rules: function(model) {
      model.statadd("Companion.Constitution", 1);
    }
  });
  byID[te.id] = te;
  
  te = Companion_Ability_Increase_Level_8["Dexterity"] = new RulesElement({
    name: "Dexterity",
    type: "Companion Ability Increase (Level 8)",
    id: "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_8)_DEXTERITY",
    source: "Core",
    categories: ["Dexterity", "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_8)_DEXTERITY"],
    rules: function(model) {
      model.statadd("Companion.Dexterity", 1);
    }
  });
  byID[te.id] = te;
  
  te = Companion_Ability_Increase_Level_8["Intelligence"] = new RulesElement({
    name: "Intelligence",
    type: "Companion Ability Increase (Level 8)",
    id: "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_8)_INTELLIGENCE",
    source: "Core",
    categories: ["Intelligence", "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_8)_INTELLIGENCE"],
    rules: function(model) {
      model.statadd("Companion.Intelligence", 1);
    }
  });
  byID[te.id] = te;
  
  te = Companion_Ability_Increase_Level_8["Strength"] = new RulesElement({
    name: "Strength",
    type: "Companion Ability Increase (Level 8)",
    id: "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_8)_STRENGTH",
    source: "Core",
    categories: ["Strength", "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_8)_STRENGTH"],
    rules: function(model) {
      model.statadd("Companion.Strength", 1);
    }
  });
  byID[te.id] = te;
  
  te = Companion_Ability_Increase_Level_8["Wisdom"] = new RulesElement({
    name: "Wisdom",
    type: "Companion Ability Increase (Level 8)",
    id: "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_8)_WISDOM",
    source: "Core",
    categories: ["Wisdom", "ID_INTERNAL_COMPANION_ABILITY_INCREASE_(LEVEL_8)_WISDOM"],
    rules: function(model) {
      model.statadd("Companion.Wisdom", 1);
    }
  });
  byID[te.id] = te;
  
  
})(this);