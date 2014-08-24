(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Grants = types['Grants'] || (types['Grants'] = {});
  te = Grants["Gnoll"] = new RulesElement({
    name: "Gnoll",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_GNOLL",
    source: "Dragon Magazine 367",
    categories: ["Gnoll", "ID_INTERNAL_GRANTS_GNOLL"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_713"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_712"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_413"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CONSTITUTION"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_7"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_INTIMIDATE_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_PERCEPTION_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
