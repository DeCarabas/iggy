(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Astral Majesty"] = new RulesElement({
    name: "Astral Majesty",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1137",
    source: "Player's Handbook 2",
    categories: ["Astral Majesty", "ID_FMP_RACIAL_TRAIT_1137"],
    rules: function(model) {
      model.statadd("AC", function() { /* against attacks made by bloodied creatures */ return 1; });
      model.statadd("Fortitude Defense", function() { /* against attacks made by bloodied creatures */ return 1; });
      model.statadd("Reflex Defense", function() { /* against attacks made by bloodied creatures */ return 1; });
      model.statadd("Will Defense", function() { /* against attacks made by bloodied creatures */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Astral Resistance"] = new RulesElement({
    name: "Astral Resistance",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1138",
    source: "Player's Handbook 2",
    categories: ["Astral Resistance", "ID_FMP_RACIAL_TRAIT_1138"],
    rules: function(model) {
      model.statadd("Astral Resistance", 5);
      model.statadd("Astral Resistance", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("resist:necrotic", function() { return model.stat("Astral Resistance"); }, "resist");
      model.statadd("resist:radiant", function() { return model.stat("Astral Resistance"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Fade Away"] = new RulesElement({
    name: "Fade Away",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_427",
    source: "Player's Handbook 2",
    categories: ["Fade Away", "ID_FMP_RACIAL_TRAIT_427"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_377"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Furious Assault"] = new RulesElement({
    name: "Furious Assault",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1146",
    source: "Player's Handbook 2",
    categories: ["Furious Assault", "ID_FMP_RACIAL_TRAIT_1146"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_6189"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Half-Orc Resilience"] = new RulesElement({
    name: "Half-Orc Resilience",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1147",
    source: "Player's Handbook 2",
    categories: ["Half-Orc Resilience", "ID_FMP_RACIAL_TRAIT_1147"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Immortal Origin"] = new RulesElement({
    name: "Immortal Origin",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1139",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Immortal Origin", "ID_FMP_RACIAL_TRAIT_1139"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Longtooth Shifting"] = new RulesElement({
    name: "Longtooth Shifting",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_429",
    source: "Player's Handbook 2",
    categories: ["Longtooth Shifting", "ID_FMP_RACIAL_TRAIT_429"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_2483"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Master Trickster"] = new RulesElement({
    name: "Master Trickster",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1141",
    source: "Player's Handbook 2",
    categories: ["Master Trickster", "ID_FMP_RACIAL_TRAIT_1141"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_1217"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Memory of a Thousand Lifetimes"] = new RulesElement({
    name: "Memory of a Thousand Lifetimes",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1140",
    source: "Player's Handbook 2",
    categories: ["Memory of a Thousand Lifetimes", "ID_FMP_RACIAL_TRAIT_1140"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_6186"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Mountain's Tenacity"] = new RulesElement({
    name: "Mountain's Tenacity",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1143",
    source: "Player's Handbook 2",
    categories: ["Mountain's Tenacity", "ID_FMP_RACIAL_TRAIT_1143"],
    rules: function(model) {
      model.statadd("Will Defense", 1, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Powerful Athlete"] = new RulesElement({
    name: "Powerful Athlete",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1144",
    source: "Player's Handbook 2",
    categories: ["Powerful Athlete", "ID_FMP_RACIAL_TRAIT_1144"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Razorclaw Shifting"] = new RulesElement({
    name: "Razorclaw Shifting",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_720",
    source: "Player's Handbook 2",
    categories: ["Razorclaw Shifting", "ID_FMP_RACIAL_TRAIT_720"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_2484"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Reactive Stealth"] = new RulesElement({
    name: "Reactive Stealth",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_426",
    source: "Player's Handbook 2",
    categories: ["Reactive Stealth", "ID_FMP_RACIAL_TRAIT_426"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Stone's Endurance"] = new RulesElement({
    name: "Stone's Endurance",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1145",
    source: "Player's Handbook 2",
    categories: ["Stone's Endurance", "ID_FMP_RACIAL_TRAIT_1145"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_6188"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Swift Charge"] = new RulesElement({
    name: "Swift Charge",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1148",
    source: "Player's Handbook 2",
    categories: ["Swift Charge", "ID_FMP_RACIAL_TRAIT_1148"],
    rules: function(model) {
      model.statadd("Speed", function() { /* when charging */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Trickster's Cunning"] = new RulesElement({
    name: "Trickster's Cunning",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1142",
    source: "Player's Handbook 2",
    categories: ["Trickster's Cunning", "ID_FMP_RACIAL_TRAIT_1142"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against illusions */ return 5; }, "Racial");
    }
  });
  byID[te.id] = te;
  
  
})(this);
