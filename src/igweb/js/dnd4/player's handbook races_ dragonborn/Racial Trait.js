(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Powerful Breath Charisma"] = new RulesElement({
    name: "Powerful Breath Charisma",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_POWERFUL_BREATH_CHARISMA",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Powerful Breath Charisma", "ID_INTERNAL_RACIAL_TRAIT_POWERFUL_BREATH_CHARISMA", "Powerful Breath", "Ability Choice"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1448:key ability", "Charisma!");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Powerful Breath Constitution"] = new RulesElement({
    name: "Powerful Breath Constitution",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_POWERFUL_BREATH_CONSTITUTION",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Powerful Breath Constitution", "ID_INTERNAL_RACIAL_TRAIT_POWERFUL_BREATH_CONSTITUTION", "Powerful Breath", "Ability Choice"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1448:key ability", "Constitution!");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Powerful Breath Dexterity"] = new RulesElement({
    name: "Powerful Breath Dexterity",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_POWERFUL_BREATH_DEXTERITY",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Powerful Breath Dexterity", "ID_INTERNAL_RACIAL_TRAIT_POWERFUL_BREATH_DEXTERITY", "Powerful Breath", "Ability Choice"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1448:key ability", "Dexterity!");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Powerful Breath Intelligence"] = new RulesElement({
    name: "Powerful Breath Intelligence",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_POWERFUL_BREATH_INTELLIGENCE",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Powerful Breath Intelligence", "ID_INTERNAL_RACIAL_TRAIT_POWERFUL_BREATH_INTELLIGENCE", "Powerful Breath", "Ability Choice"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1448:key ability", "Intelligence!");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Powerful Breath Strength"] = new RulesElement({
    name: "Powerful Breath Strength",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_POWERFUL_BREATH_STRENGTH",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Powerful Breath Strength", "ID_INTERNAL_RACIAL_TRAIT_POWERFUL_BREATH_STRENGTH", "Powerful Breath", "Ability Choice"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1448:key ability", "Strength!");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Powerful Breath Wisdom"] = new RulesElement({
    name: "Powerful Breath Wisdom",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_POWERFUL_BREATH_WISDOM",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Powerful Breath Wisdom", "ID_INTERNAL_RACIAL_TRAIT_POWERFUL_BREATH_WISDOM", "Powerful Breath", "Ability Choice"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1448:key ability", "Wisdom!");
    }
  });
  byID[te.id] = te;
  
  
})(this);
