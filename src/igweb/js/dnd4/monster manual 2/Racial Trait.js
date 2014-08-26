define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Flock Effect"] = new engine.RulesElement({
    name: "Flock Effect",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1524",
    source: "Monster Manual 2",
    categories: ["Flock Effect", "ID_FMP_RACIAL_TRAIT_1524"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against a creature you are flanking instead of the normal +2 bonus, and you grant a +3 bonus to attack rolls or skill checks when aiding another instead of the normal +2 bonus */ return 3; });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Infernal Quils"] = new engine.RulesElement({
    name: "Infernal Quils",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1523",
    source: "Monster Manual 2",
    categories: ["Infernal Quils", "ID_FMP_RACIAL_TRAIT_1523"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_27"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Mimicry"] = new engine.RulesElement({
    name: "Mimicry",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1525",
    source: "Monster Manual 2",
    categories: ["Mimicry", "ID_FMP_RACIAL_TRAIT_1525"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Rancid Air"] = new engine.RulesElement({
    name: "Rancid Air",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1522",
    source: "Monster Manual 2",
    categories: ["Rancid Air", "ID_FMP_RACIAL_TRAIT_1522"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
