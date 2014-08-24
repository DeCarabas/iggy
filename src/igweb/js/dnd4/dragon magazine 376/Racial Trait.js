(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Dark Reaping"] = new RulesElement({
    name: "Dark Reaping",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1870",
    source: "Dragon Magazine 376",
    categories: ["Dark Reaping", "ID_FMP_RACIAL_TRAIT_1870"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_8278"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past life"] = new RulesElement({
    name: "Past life",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1867",
    source: "Dragon Magazine 376",
    categories: ["Past life", "ID_FMP_RACIAL_TRAIT_1867"],
    rules: function(model) {
      model.select('CountsAsRace', 1, {
        filter: function(model, element) { return !element.hasCategory("ID_INTERNAL_COUNTSASRACE_REVENANT"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Undead"] = new RulesElement({
    name: "Undead",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1866",
    source: "Dragon Magazine 376",
    categories: ["Undead", "ID_FMP_RACIAL_TRAIT_1866"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Unnatural Vitality"] = new RulesElement({
    name: "Unnatural Vitality",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1868",
    source: "Dragon Magazine 376",
    categories: ["Unnatural Vitality", "ID_FMP_RACIAL_TRAIT_1868"]
  });
  byID[te.id] = te;
  
  
})(this);
