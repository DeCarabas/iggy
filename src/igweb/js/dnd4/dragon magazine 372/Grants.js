(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Grants = types['Grants'] || (types['Grants'] = {});
  te = Grants["Shadar-kai"] = new RulesElement({
    name: "Shadar-kai",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_SHADAR-KAI",
    source: "Dragon Magazine 372",
    categories: ["Shadar-kai", "ID_INTERNAL_GRANTS_SHADAR-KAI"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_410"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_719"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1496"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_INTELLIGENCE"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_ACROBATICS_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_STEALTH_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
