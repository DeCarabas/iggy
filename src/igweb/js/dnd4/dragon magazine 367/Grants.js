define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Grants = types['Grants'] || (types['Grants'] = {});
  te = Grants["Gnoll"] = new engine.RulesElement({
    name: "Gnoll",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_GNOLL",
    source: "Dragon Magazine 367",
    categories: ["Gnoll", "ID_INTERNAL_GRANTS_GNOLL"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(model.elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_713"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_712"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_413"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CONSTITUTION"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_7"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_INTIMIDATE_BONUS"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_PERCEPTION_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
