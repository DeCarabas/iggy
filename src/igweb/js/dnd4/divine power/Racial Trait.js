(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Ardent Vow"] = new RulesElement({
    name: "Ardent Vow",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1876",
    source: "Divine Power",
    categories: ["Ardent Vow", "ID_FMP_RACIAL_TRAIT_1876"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Virtue's Touch"] = new RulesElement({
    name: "Virtue's Touch",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1877",
    source: "Divine Power",
    categories: ["Virtue's Touch", "ID_FMP_RACIAL_TRAIT_1877"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_7240"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
