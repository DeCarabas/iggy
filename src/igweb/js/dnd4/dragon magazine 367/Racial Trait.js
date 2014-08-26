define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Blood Fury"] = new engine.RulesElement({
    name: "Blood Fury",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_712",
    source: "Dragon Magazine 367",
    categories: ["Blood Fury", "ID_FMP_RACIAL_TRAIT_712"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* while you're bloodied */ return 2; });
      model.statadd("damage rolls", function() { /* while you're bloodied */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Ferocious Charge"] = new engine.RulesElement({
    name: "Ferocious Charge",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_713",
    source: "Dragon Magazine 367",
    categories: ["Ferocious Charge", "ID_FMP_RACIAL_TRAIT_713"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2476"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Pack Attack"] = new engine.RulesElement({
    name: "Pack Attack",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_413",
    source: "Dragon Magazine 367",
    categories: ["Pack Attack", "ID_FMP_RACIAL_TRAIT_413"],
    rules: function(model) {
      model.statadd("melee:damage", function() { /* against an enemy that has two or more of your allies adjacent to it */ return 2; });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
