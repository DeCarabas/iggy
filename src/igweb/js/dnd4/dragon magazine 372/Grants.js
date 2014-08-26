define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Grants = types['Grants'] || (types['Grants'] = {});
  te = Grants["Shadar-kai"] = new engine.RulesElement({
    name: "Shadar-kai",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_SHADAR-KAI",
    source: "Dragon Magazine 372",
    categories: ["Shadar-kai", "ID_INTERNAL_GRANTS_SHADAR-KAI"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(model.elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_410"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_719"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_1496"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_INTELLIGENCE"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_ACROBATICS_BONUS"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_STEALTH_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
