(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Grants = types['Grants'] || (types['Grants'] = {});
  te = Grants["Revenant"] = new RulesElement({
    name: "Revenant",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_REVENANT",
    source: "Dragon Magazine 376",
    categories: ["Revenant", "ID_INTERNAL_GRANTS_REVENANT"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1870"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1866"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1867"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1868"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CONSTITUTION"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_ENDURANCE_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_INTIMIDATE_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
