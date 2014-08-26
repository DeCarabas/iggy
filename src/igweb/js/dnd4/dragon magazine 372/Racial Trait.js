define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Shadow Jaunt"] = new engine.RulesElement({
    name: "Shadow Jaunt",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_410",
    source: "Dragon Magazine 372",
    categories: ["Shadow Jaunt", "ID_FMP_RACIAL_TRAIT_410"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2482"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Shadow Origin"] = new engine.RulesElement({
    name: "Shadow Origin",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1496",
    source: "Dragon Magazine 372",
    categories: ["Shadow Origin", "ID_FMP_RACIAL_TRAIT_1496"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Winterkin"] = new engine.RulesElement({
    name: "Winterkin",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_719",
    source: "Dragon Magazine 372",
    categories: ["Winterkin", "ID_FMP_RACIAL_TRAIT_719"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 1, "Racial");
      model.statadd("Death Saving Throws", 2, "Racial");
      model.statadd("Saving Throws", function() { /* against the unconscious condition */ return 2; }, "Racial");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
