(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Battle Ready"] = new RulesElement({
    name: "Battle Ready",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_715",
    source: "Monster Manual",
    categories: ["Battle Ready", "ID_FMP_RACIAL_TRAIT_715"],
    rules: function(model) {
      model.statadd("Initiative Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Githyanki Willpower"] = new RulesElement({
    name: "Githyanki Willpower",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_424",
    source: "Monster Manual",
    categories: ["Githyanki Willpower", "ID_FMP_RACIAL_TRAIT_424"],
    rules: function(model) {
      model.statadd("Will Defense", 1);
      model.statadd("Saving Throws", function() { /* against charm effects */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Goblin Reflexes"] = new RulesElement({
    name: "Goblin Reflexes",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_714",
    source: "Monster Manual",
    categories: ["Goblin Reflexes", "ID_FMP_RACIAL_TRAIT_714"],
    rules: function(model) {
      model.statadd("Reflex Defense", 1, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Goblin Tactics"] = new RulesElement({
    name: "Goblin Tactics",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_394",
    source: "Monster Manual",
    categories: ["Goblin Tactics", "ID_FMP_RACIAL_TRAIT_394"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_1489"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Hobgoblin Resilience"] = new RulesElement({
    name: "Hobgoblin Resilience",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_716",
    source: "Monster Manual",
    categories: ["Hobgoblin Resilience", "ID_FMP_RACIAL_TRAIT_716"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_2478"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Oversized"] = new RulesElement({
    name: "Oversized",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_392",
    source: "Monster Manual",
    categories: ["Oversized", "ID_FMP_RACIAL_TRAIT_392"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_INTERNAL_OVERSIZED"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Predatory Eye"] = new RulesElement({
    name: "Predatory Eye",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_694",
    source: "Monster Manual",
    categories: ["Predatory Eye", "ID_FMP_RACIAL_TRAIT_694"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_2324"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Running Charge"] = new RulesElement({
    name: "Running Charge",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_418",
    source: "Monster Manual",
    categories: ["Running Charge", "ID_FMP_RACIAL_TRAIT_418"],
    rules: function(model) {
      model.statadd("Speed", function() { /* when you charge */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Shifty"] = new RulesElement({
    name: "Shifty",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_416",
    source: "Monster Manual",
    categories: ["Shifty", "ID_FMP_RACIAL_TRAIT_416"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_2479"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Telekinetic Leap"] = new RulesElement({
    name: "Telekinetic Leap",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_711",
    source: "Monster Manual",
    categories: ["Telekinetic Leap", "ID_FMP_RACIAL_TRAIT_711"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_2474"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Trap Sense"] = new RulesElement({
    name: "Trap Sense",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_717",
    source: "Monster Manual",
    categories: ["Trap Sense", "ID_FMP_RACIAL_TRAIT_717"],
    rules: function(model) {
      model.statadd("AC", function() { /* against traps */ return 2; });
      model.statadd("Fortitude Defense", function() { /* against traps */ return 2; });
      model.statadd("Reflex Defense", function() { /* against traps */ return 2; });
      model.statadd("Will Defense", function() { /* against traps */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Warrior's Surge"] = new RulesElement({
    name: "Warrior's Surge",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_718",
    source: "Monster Manual",
    categories: ["Warrior's Surge", "ID_FMP_RACIAL_TRAIT_718"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_2481"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
})(this);
