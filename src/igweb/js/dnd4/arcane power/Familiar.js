define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Familiar = types['Familiar'] || (types['Familiar'] = {});
  te = Familiar["Bat"] = new engine.RulesElement({
    name: "Bat",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_9",
    source: "Arcane Power",
    categories: ["Bat", "ID_FMP_FAMILIAR_9"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
      model.statadd("Stealth Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Book Imp"] = new engine.RulesElement({
    name: "Book Imp",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_10",
    source: "Arcane Power",
    categories: ["Book Imp", "ID_FMP_FAMILIAR_10"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2);
      model.statadd("History Misc", 2);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_8"]);
      model.statadd("resist:fire", 5, "resist");
      model.statadd("resist:fire", 2, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Bound Demon"] = new engine.RulesElement({
    name: "Bound Demon",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_12",
    source: "Arcane Power",
    categories: ["Bound Demon", "ID_FMP_FAMILIAR_12"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_7"]);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Cat"] = new engine.RulesElement({
    name: "Cat",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_20",
    source: "Arcane Power",
    categories: ["Cat", "ID_FMP_FAMILIAR_20"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Crafter Homunculus"] = new engine.RulesElement({
    name: "Crafter Homunculus",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_14",
    source: "Arcane Power",
    categories: ["Crafter Homunculus", "ID_FMP_FAMILIAR_14"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Dragonling"] = new engine.RulesElement({
    name: "Dragonling",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_15",
    source: "Arcane Power",
    categories: ["Dragonling", "ID_FMP_FAMILIAR_15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_LANGUAGE_2"]);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Falcon"] = new engine.RulesElement({
    name: "Falcon",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_16",
    source: "Arcane Power",
    categories: ["Falcon", "ID_FMP_FAMILIAR_16"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
      model.statadd("AC", function() { /* against opportunity attacks */ return 2; });
      model.statadd("Fortitude Defense", function() { /* against opportunity attacks */ return 2; });
      model.statadd("Reflex Defense", function() { /* against opportunity attacks */ return 2; });
      model.statadd("Will Defense", function() { /* against opportunity attacks */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Owl"] = new engine.RulesElement({
    name: "Owl",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_11",
    source: "Arcane Power",
    categories: ["Owl", "ID_FMP_FAMILIAR_11"]
  });
  byID[te.id] = te;
  
  te = Familiar["Rat"] = new engine.RulesElement({
    name: "Rat",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_18",
    source: "Arcane Power",
    categories: ["Rat", "ID_FMP_FAMILIAR_18"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Raven"] = new engine.RulesElement({
    name: "Raven",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_19",
    source: "Arcane Power",
    categories: ["Raven", "ID_FMP_FAMILIAR_19"],
    rules: function(model) {
      model.statadd("Perception Misc", function() { /* to find hidden objects */ return 4; });
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Serpent"] = new engine.RulesElement({
    name: "Serpent",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_21",
    source: "Arcane Power",
    categories: ["Serpent", "ID_FMP_FAMILIAR_21"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Spider"] = new engine.RulesElement({
    name: "Spider",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_22",
    source: "Arcane Power",
    categories: ["Spider", "ID_FMP_FAMILIAR_22"],
    rules: function(model) {
      model.statadd("Athletics Misc", function() { /* to climb */ return 2; });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
