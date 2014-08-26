define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var God_Fragment = types['God Fragment'] || (types['God Fragment'] = {});
  te = God_Fragment["Fragment of Avandra"] = new engine.RulesElement({
    name: "Fragment of Avandra",
    type: "God Fragment",
    id: "ID_FMP_GOD_FRAGMENT_0",
    source: "Dragon Magazine 382",
    categories: ["Fragment of Avandra", "ID_FMP_GOD_FRAGMENT_0"]
  });
  byID[te.id] = te;
  
  te = God_Fragment["Fragment of Bahamut"] = new engine.RulesElement({
    name: "Fragment of Bahamut",
    type: "God Fragment",
    id: "ID_FMP_GOD_FRAGMENT_1",
    source: "Dragon Magazine 382",
    categories: ["Fragment of Bahamut", "ID_FMP_GOD_FRAGMENT_1"],
    rules: function(model) {
      model.statadd("AC", function() { /* while all your encounter attack powers are expended */ return 1; });
      model.statadd("Fortitude Defense", function() { /* while all your encounter attack powers are expended */ return 1; });
      model.statadd("Reflex Defense", function() { /* while all your encounter attack powers are expended */ return 1; });
      model.statadd("Will Defense", function() { /* while all your encounter attack powers are expended */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = God_Fragment["Fragment of Corellon"] = new engine.RulesElement({
    name: "Fragment of Corellon",
    type: "God Fragment",
    id: "ID_FMP_GOD_FRAGMENT_2",
    source: "Dragon Magazine 382",
    categories: ["Fragment of Corellon", "ID_FMP_GOD_FRAGMENT_2"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2, "Feat");
      model.statadd("Nature Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = God_Fragment["Fragment of Erathis"] = new engine.RulesElement({
    name: "Fragment of Erathis",
    type: "God Fragment",
    id: "ID_FMP_GOD_FRAGMENT_3",
    source: "Dragon Magazine 382",
    categories: ["Fragment of Erathis", "ID_FMP_GOD_FRAGMENT_3"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2, "Feat");
      model.select('Language', 1);
    }
  });
  byID[te.id] = te;
  
  te = God_Fragment["Fragment of Ioun"] = new engine.RulesElement({
    name: "Fragment of Ioun",
    type: "God Fragment",
    id: "ID_FMP_GOD_FRAGMENT_4",
    source: "Dragon Magazine 382",
    categories: ["Fragment of Ioun", "ID_FMP_GOD_FRAGMENT_4"]
  });
  byID[te.id] = te;
  
  te = God_Fragment["Fragment of Kord"] = new engine.RulesElement({
    name: "Fragment of Kord",
    type: "God Fragment",
    id: "ID_FMP_GOD_FRAGMENT_5",
    source: "Dragon Magazine 382",
    categories: ["Fragment of Kord", "ID_FMP_GOD_FRAGMENT_5"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "Feat");
      model.statadd("Endurance Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = God_Fragment["Fragment of Melora"] = new engine.RulesElement({
    name: "Fragment of Melora",
    type: "God Fragment",
    id: "ID_FMP_GOD_FRAGMENT_6",
    source: "Dragon Magazine 382",
    categories: ["Fragment of Melora", "ID_FMP_GOD_FRAGMENT_6"],
    rules: function(model) {
      model.statadd("Nature Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = God_Fragment["Fragment of Moradin"] = new engine.RulesElement({
    name: "Fragment of Moradin",
    type: "God Fragment",
    id: "ID_FMP_GOD_FRAGMENT_7",
    source: "Dragon Magazine 382",
    categories: ["Fragment of Moradin", "ID_FMP_GOD_FRAGMENT_7"],
    rules: function(model) {
      model.statadd("Healing Surges", 1);
    }
  });
  byID[te.id] = te;
  
  te = God_Fragment["Fragment of Pelor"] = new engine.RulesElement({
    name: "Fragment of Pelor",
    type: "God Fragment",
    id: "ID_FMP_GOD_FRAGMENT_8",
    source: "Dragon Magazine 382",
    categories: ["Fragment of Pelor", "ID_FMP_GOD_FRAGMENT_8"]
  });
  byID[te.id] = te;
  
  te = God_Fragment["Fragment of Sehanine"] = new engine.RulesElement({
    name: "Fragment of Sehanine",
    type: "God Fragment",
    id: "ID_FMP_GOD_FRAGMENT_10",
    source: "Dragon Magazine 382",
    categories: ["Fragment of Sehanine", "ID_FMP_GOD_FRAGMENT_10"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = God_Fragment["Fragment of The Raven Queen"] = new engine.RulesElement({
    name: "Fragment of The Raven Queen",
    type: "God Fragment",
    id: "ID_FMP_GOD_FRAGMENT_9",
    source: "Dragon Magazine 382",
    categories: ["Fragment of The Raven Queen", "ID_FMP_GOD_FRAGMENT_9"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
