define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Dragonfear"] = new engine.RulesElement({
    name: "Dragonfear",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_2711",
    source: "Dragon Magazine 388",
    categories: ["Dragonfear", "ID_FMP_RACIAL_TRAIT_2711", "ID_FMP_RACIAL_TRAIT_3162", "Dragonborn Racial Power"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12577"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
