(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Grants = types['Grants'] || (types['Grants'] = {});
  te = Grants["Bladeling"] = new RulesElement({
    name: "Bladeling",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_BLADELING",
    source: "Manual of the Planes",
    categories: ["Bladeling", "ID_INTERNAL_GRANTS_BLADELING"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_NORMAL"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1066"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1065"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_WISDOM"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_INTIMIDATE_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
