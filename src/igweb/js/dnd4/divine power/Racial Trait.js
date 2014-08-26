define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Ardent Vow"] = new engine.RulesElement({
    name: "Ardent Vow",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1876",
    source: "Divine Power",
    categories: ["Ardent Vow", "ID_FMP_RACIAL_TRAIT_1876"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Virtue's Touch"] = new engine.RulesElement({
    name: "Virtue's Touch",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1877",
    source: "Divine Power",
    categories: ["Virtue's Touch", "ID_FMP_RACIAL_TRAIT_1877"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7240"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
