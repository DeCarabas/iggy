define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Arcane Replenishment"] = new engine.RulesElement({
    name: "Arcane Replenishment",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_860",
    source: "Dragon Magazine 365",
    categories: ["Arcane Replenishment", "ID_FMP_RACIAL_TRAIT_860"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Components"] = new engine.RulesElement({
    name: "Components",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_861",
    source: "Dragon Magazine 365",
    categories: ["Components", "ID_FMP_RACIAL_TRAIT_861"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
