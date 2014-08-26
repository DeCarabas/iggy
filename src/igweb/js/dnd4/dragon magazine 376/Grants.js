define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Grants = types['Grants'] || (types['Grants'] = {});
  te = Grants["Revenant"] = new engine.RulesElement({
    name: "Revenant",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_REVENANT",
    source: "Dragon Magazine 376",
    categories: ["Revenant", "ID_INTERNAL_GRANTS_REVENANT"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(model.elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_1870"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_1866"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_1867"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_1868"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CONSTITUTION"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_ENDURANCE_BONUS"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_INTIMIDATE_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
