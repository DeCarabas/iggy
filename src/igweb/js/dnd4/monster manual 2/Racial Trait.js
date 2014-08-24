(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Flock Effect"] = new RulesElement({
    name: "Flock Effect",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1524",
    source: "Monster Manual 2",
    categories: ["Flock Effect", "ID_FMP_RACIAL_TRAIT_1524"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against a creature you are flanking instead of the normal +2 bonus, and you grant a +3 bonus to attack rolls or skill checks when aiding another instead of the normal +2 bonus */ return 3; });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Infernal Quils"] = new RulesElement({
    name: "Infernal Quils",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1523",
    source: "Monster Manual 2",
    categories: ["Infernal Quils", "ID_FMP_RACIAL_TRAIT_1523"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_27"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Mimicry"] = new RulesElement({
    name: "Mimicry",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1525",
    source: "Monster Manual 2",
    categories: ["Mimicry", "ID_FMP_RACIAL_TRAIT_1525"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Rancid Air"] = new RulesElement({
    name: "Rancid Air",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1522",
    source: "Monster Manual 2",
    categories: ["Rancid Air", "ID_FMP_RACIAL_TRAIT_1522"]
  });
  byID[te.id] = te;
  
  
})(this);
