(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Arcane Replenishment"] = new RulesElement({
    name: "Arcane Replenishment",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_860",
    source: "Dragon Magazine 365",
    categories: ["Arcane Replenishment", "ID_FMP_RACIAL_TRAIT_860"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Components"] = new RulesElement({
    name: "Components",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_861",
    source: "Dragon Magazine 365",
    categories: ["Components", "ID_FMP_RACIAL_TRAIT_861"]
  });
  byID[te.id] = te;
  
  
})(this);
