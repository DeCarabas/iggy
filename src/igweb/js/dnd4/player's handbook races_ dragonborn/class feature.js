(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Bahamut's Warding"] = new RulesElement({
    name: "Bahamut's Warding",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2149",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Bahamut's Warding", "ID_FMP_CLASS_FEATURE_2149", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Breath Expertise"] = new RulesElement({
    name: "Breath Expertise",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2122",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Breath Expertise", "ID_FMP_CLASS_FEATURE_2122", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Breath Mastery"] = new RulesElement({
    name: "Breath Mastery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2163",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Breath Mastery", "ID_FMP_CLASS_FEATURE_2163", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Divine Discorporation"] = new RulesElement({
    name: "Divine Discorporation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2166",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Divine Discorporation", "ID_FMP_CLASS_FEATURE_2166", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Draconic Blade"] = new RulesElement({
    name: "Draconic Blade",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2152",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Draconic Blade", "ID_FMP_CLASS_FEATURE_2152", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Draconic Incarnation"] = new RulesElement({
    name: "Draconic Incarnation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2164",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Draconic Incarnation", "ID_FMP_CLASS_FEATURE_2164", "21"],
    rules: function(model) {
      model.statadd("Strength", 2);
      model.statadd("Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Draconic Resistance"] = new RulesElement({
    name: "Draconic Resistance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2125",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Draconic Resistance", "ID_FMP_CLASS_FEATURE_2125", "16"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Draconic Resistance"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Draconic Resistance Acid"] = new RulesElement({
    name: "Draconic Resistance Acid",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DRACONIC_RESISTANCE_ACID",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Draconic Resistance Acid", "ID_INTERNAL_CLASS_FEATURE_DRACONIC_RESISTANCE_ACID", "Draconic Resistance"]
  });
  byID[te.id] = te;
  
  te = class_feature["Draconic Resistance Cold"] = new RulesElement({
    name: "Draconic Resistance Cold",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DRACONIC_RESISTANCE_COLD",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Draconic Resistance Cold", "ID_INTERNAL_CLASS_FEATURE_DRACONIC_RESISTANCE_COLD", "Draconic Resistance"]
  });
  byID[te.id] = te;
  
  te = class_feature["Draconic Resistance Fire"] = new RulesElement({
    name: "Draconic Resistance Fire",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DRACONIC_RESISTANCE_FIRE",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Draconic Resistance Fire", "ID_INTERNAL_CLASS_FEATURE_DRACONIC_RESISTANCE_FIRE", "Draconic Resistance"]
  });
  byID[te.id] = te;
  
  te = class_feature["Draconic Resistance Lightning"] = new RulesElement({
    name: "Draconic Resistance Lightning",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DRACONIC_RESISTANCE_LIGHTNING",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Draconic Resistance Lightning", "ID_INTERNAL_CLASS_FEATURE_DRACONIC_RESISTANCE_LIGHTNING", "Draconic Resistance"]
  });
  byID[te.id] = te;
  
  te = class_feature["Draconic Resistance Poison"] = new RulesElement({
    name: "Draconic Resistance Poison",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DRACONIC_RESISTANCE_POISON",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Draconic Resistance Poison", "ID_INTERNAL_CLASS_FEATURE_DRACONIC_RESISTANCE_POISON", "Draconic Resistance"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon Breath Action"] = new RulesElement({
    name: "Dragon Breath Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2153",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Dragon Breath Action", "ID_FMP_CLASS_FEATURE_2153", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Dragon Breath Action:When you spend an action point to take an extra action, you can also use your dragon breath power as a free action, even if you have already expended it in this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon Breath Action (Ninefold Master)"] = new RulesElement({
    name: "Dragon Breath Action (Ninefold Master)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2124",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Dragon Breath Action (Ninefold Master)", "ID_FMP_CLASS_FEATURE_2124", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Dragon Breath Action (Ninefold Master):When you spend an action point to take an extra action, you can also use your dragon breath as a free action, even if you have already expended it in this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Focused Action"] = new RulesElement({
    name: "Focused Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2150",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Focused Action", "ID_FMP_CLASS_FEATURE_2150", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Focused Action:When you spend an action point to take an action, you can immediately make a saving throw against one effect that a save can end, with a bonus equal to your Charisma modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Polar Breath"] = new RulesElement({
    name: "Polar Breath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2151",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Polar Breath", "ID_FMP_CLASS_FEATURE_2151", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Soul of the Storm Dragon"] = new RulesElement({
    name: "Soul of the Storm Dragon",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2157",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Soul of the Storm Dragon", "ID_FMP_CLASS_FEATURE_2157", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Storm Dragon Wings"] = new RulesElement({
    name: "Storm Dragon Wings",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2158",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Storm Dragon Wings", "ID_FMP_CLASS_FEATURE_2158", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Storm Spirit"] = new RulesElement({
    name: "Storm Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2155",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Storm Spirit", "ID_FMP_CLASS_FEATURE_2155", "11"],
    rules: function(model) {
      model.statadd("resist:lightning", 10, "resist");
      model.statadd("thunder:lightning", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Thundering Action"] = new RulesElement({
    name: "Thundering Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2156",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Thundering Action", "ID_FMP_CLASS_FEATURE_2156", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Thundering Action:When you spend an action point to make an attack, you can push each target you hit with that attack a number of squares equal to your Charisma modifier and knock each target prone.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wings of Io"] = new RulesElement({
    name: "Wings of Io",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2165",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Wings of Io", "ID_FMP_CLASS_FEATURE_2165", "24"]
  });
  byID[te.id] = te;
  
  
})(this);
