(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Shadow Jaunt"] = new RulesElement({
    name: "Shadow Jaunt",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_410",
    source: "Dragon Magazine 372",
    categories: ["Shadow Jaunt", "ID_FMP_RACIAL_TRAIT_410"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_2482"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Shadow Origin"] = new RulesElement({
    name: "Shadow Origin",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1496",
    source: "Dragon Magazine 372",
    categories: ["Shadow Origin", "ID_FMP_RACIAL_TRAIT_1496"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Winterkin"] = new RulesElement({
    name: "Winterkin",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_719",
    source: "Dragon Magazine 372",
    categories: ["Winterkin", "ID_FMP_RACIAL_TRAIT_719"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 1, "Racial");
      model.statadd("Death Saving Throws", 2, "Racial");
      model.statadd("Saving Throws", function() { /* against the unconscious condition */ return 2; }, "Racial");
    }
  });
  byID[te.id] = te;
  
  
})(this);
