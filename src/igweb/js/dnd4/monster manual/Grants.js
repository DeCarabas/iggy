define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Grants = types['Grants'] || (types['Grants'] = {});
  te = Grants["Bugbear"] = new engine.RulesElement({
    name: "Bugbear",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_BUGBEAR",
    source: "Monster Manual",
    categories: ["Bugbear", "ID_INTERNAL_GRANTS_BUGBEAR"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(model.elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_392"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_694"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_STRENGTH"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_20"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_INTIMIDATE_BONUS"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_STEALTH_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Githyanki"] = new engine.RulesElement({
    name: "Githyanki",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_GITHYANKI",
    source: "Monster Manual",
    categories: ["Githyanki", "ID_INTERNAL_GRANTS_GITHYANKI"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(model.elements.id["ID_INTERNAL_VISION_NORMAL"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_424"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_466"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_711"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CONSTITUTION"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_INTELLIGENCE"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_18"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_HISTORY_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Goblin"] = new engine.RulesElement({
    name: "Goblin",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_GOBLIN",
    source: "Monster Manual",
    categories: ["Goblin", "ID_INTERNAL_GRANTS_GOBLIN"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SIZE_SMALL"]);
      model.grant(model.elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_394"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_714"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CHARISMA"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_20"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_STEALTH_BONUS"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_THIEVERY_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Hobgoblin"] = new engine.RulesElement({
    name: "Hobgoblin",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_HOBGOBLIN",
    source: "Monster Manual",
    categories: ["Hobgoblin", "ID_INTERNAL_GRANTS_HOBGOBLIN"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(model.elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_715"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_716"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CHARISMA"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CONSTITUTION"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_20"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_ATHLETICS_BONUS"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_HISTORY_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Kobold"] = new engine.RulesElement({
    name: "Kobold",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_KOBOLD",
    source: "Monster Manual",
    categories: ["Kobold", "ID_INTERNAL_GRANTS_KOBOLD"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SIZE_SMALL"]);
      model.grant(model.elements.id["ID_INTERNAL_VISION_NORMAL"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_416"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_717"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CONSTITUTION"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_2"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_STEALTH_BONUS"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_THIEVERY_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Orc"] = new engine.RulesElement({
    name: "Orc",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_ORC",
    source: "Monster Manual",
    categories: ["Orc", "ID_INTERNAL_GRANTS_ORC"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(model.elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_418"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_718"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CONSTITUTION"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_STRENGTH"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_19"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
