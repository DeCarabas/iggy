(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Dragonfear"] = new RulesElement({
    name: "Dragonfear",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_2711",
    source: "Dragon Magazine 388",
    categories: ["Dragonfear", "ID_FMP_RACIAL_TRAIT_2711", "ID_FMP_RACIAL_TRAIT_3162", "Dragonborn Racial Power"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_12577"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
