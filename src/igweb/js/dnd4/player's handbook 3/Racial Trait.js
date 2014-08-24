(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Aspect of the Ancients"] = new RulesElement({
    name: "Aspect of the Ancients",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1540",
    source: "Player's Handbook 3",
    categories: ["Aspect of the Ancients", "ID_FMP_RACIAL_TRAIT_1540", "ID_FMP_RACIAL_TRAIT_1539", "Nature's Aspect"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_7441"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Aspect of the Destroyer"] = new RulesElement({
    name: "Aspect of the Destroyer",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1541",
    source: "Player's Handbook 3",
    categories: ["Aspect of the Destroyer", "ID_FMP_RACIAL_TRAIT_1541", "ID_FMP_RACIAL_TRAIT_1539", "Nature's Aspect"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_7442"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Aspect of the Hunter"] = new RulesElement({
    name: "Aspect of the Hunter",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1542",
    source: "Player's Handbook 3",
    categories: ["Aspect of the Hunter", "ID_FMP_RACIAL_TRAIT_1542", "ID_FMP_RACIAL_TRAIT_1539", "Nature's Aspect"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_7443"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Crystalline Mind"] = new RulesElement({
    name: "Crystalline Mind",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_2327",
    source: "Player's Handbook 3",
    categories: ["Crystalline Mind", "ID_FMP_RACIAL_TRAIT_2327"],
    rules: function(model) {
      model.statadd("Crystalline Mind", 5);
      model.statadd("Crystalline Mind", 5);
      model.statadd("Crystalline Mind", 5);
      model.statadd("resist:psychic", function() { return model.stat("Crystalline Mind"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Danger Sense"] = new RulesElement({
    name: "Danger Sense",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_466",
    source: "Player's Handbook 3",
    categories: ["Danger Sense", "ID_FMP_RACIAL_TRAIT_466"],
    rules: function(model) {
      model.statadd("Initiative", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Defended Mind"] = new RulesElement({
    name: "Defended Mind",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1861",
    source: "Player's Handbook 3",
    categories: ["Defended Mind", "ID_FMP_RACIAL_TRAIT_1861"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that daze, dominate, or stun */ return 2; }, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Ferocity"] = new RulesElement({
    name: "Ferocity",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_411",
    source: "Player's Handbook 3",
    categories: ["Ferocity", "ID_FMP_RACIAL_TRAIT_411"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Goring Charge"] = new RulesElement({
    name: "Goring Charge",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_412",
    source: "Player's Handbook 3",
    categories: ["Goring Charge", "ID_FMP_RACIAL_TRAIT_412"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_2480"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Hardy Form"] = new RulesElement({
    name: "Hardy Form",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1538",
    source: "Player's Handbook 3",
    categories: ["Hardy Form", "ID_FMP_RACIAL_TRAIT_1538"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return element.hasCategory("Hardy Form"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Hardy Form Fortitude"] = new RulesElement({
    name: "Hardy Form Fortitude",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_HARDY_FORM_FORTITUDE",
    source: "Player's Handbook 3",
    categories: ["Hardy Form Fortitude", "ID_INTERNAL_RACIAL_TRAIT_HARDY_FORM_FORTITUDE", "Hardy Form"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 1, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Hardy Form Reflex"] = new RulesElement({
    name: "Hardy Form Reflex",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_HARDY_FORM_REFLEX",
    source: "Player's Handbook 3",
    categories: ["Hardy Form Reflex", "ID_INTERNAL_RACIAL_TRAIT_HARDY_FORM_REFLEX", "Hardy Form"],
    rules: function(model) {
      model.statadd("Reflex Defense", 1, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Hardy Form Will"] = new RulesElement({
    name: "Hardy Form Will",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_HARDY_FORM_WILL",
    source: "Player's Handbook 3",
    categories: ["Hardy Form Will", "ID_INTERNAL_RACIAL_TRAIT_HARDY_FORM_WILL", "Hardy Form"],
    rules: function(model) {
      model.statadd("Will Defense", 1, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Heedless Charge"] = new RulesElement({
    name: "Heedless Charge",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1092",
    source: "Player's Handbook 3",
    categories: ["Heedless Charge", "ID_FMP_RACIAL_TRAIT_1092"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks you provoke during a charge */ return 2; }, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Iron Mind"] = new RulesElement({
    name: "Iron Mind",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_420",
    source: "Player's Handbook 3",
    categories: ["Iron Mind", "ID_FMP_RACIAL_TRAIT_420"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_2475"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Nature's Aspect"] = new RulesElement({
    name: "Nature's Aspect",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1539",
    source: "Player's Handbook 3",
    categories: ["Nature's Aspect", "ID_FMP_RACIAL_TRAIT_1539"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1540"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1541"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1542"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Shard Swarm"] = new RulesElement({
    name: "Shard Swarm",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_2328",
    source: "Player's Handbook 3",
    categories: ["Shard Swarm", "ID_FMP_RACIAL_TRAIT_2328"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_11052"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Shifting Fortunes"] = new RulesElement({
    name: "Shifting Fortunes",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1862",
    source: "Player's Handbook 3",
    categories: ["Shifting Fortunes", "ID_FMP_RACIAL_TRAIT_1862"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Telepathy"] = new RulesElement({
    name: "Telepathy",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_2326",
    source: "Player's Handbook 3",
    categories: ["Telepathy", "ID_FMP_RACIAL_TRAIT_2326"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Vitality"] = new RulesElement({
    name: "Vitality",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_2525",
    source: "Player's Handbook 3",
    categories: ["Vitality", "ID_FMP_RACIAL_TRAIT_2525"],
    rules: function(model) {
      model.statadd("Healing Surges", 1);
    }
  });
  byID[te.id] = te;
  
  
})(this);
