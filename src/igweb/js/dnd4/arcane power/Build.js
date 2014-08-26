define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Cosmic Sorcerer"] = new engine.RulesElement({
    name: "Cosmic Sorcerer",
    type: "Build",
    id: "ID_FMP_BUILD_67",
    source: "Arcane Power",
    categories: ["Cosmic Sorcerer", "ID_FMP_BUILD_67", "ID_FMP_CLASS_128", "Sorcerer"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_COSMIC_SORCERER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Ensnaring Swordmage"] = new engine.RulesElement({
    name: "Ensnaring Swordmage",
    type: "Build",
    id: "ID_FMP_BUILD_68",
    source: "Arcane Power",
    categories: ["Ensnaring Swordmage", "ID_FMP_BUILD_68", "ID_FMP_CLASS_53", "Swordmage"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_ENSNARING_SWORDMAGE"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Illusionist Wizard"] = new engine.RulesElement({
    name: "Illusionist Wizard",
    type: "Build",
    id: "ID_FMP_BUILD_70",
    source: "Arcane Power",
    categories: ["Illusionist Wizard", "ID_FMP_BUILD_70", "ID_FMP_CLASS_9", "Wizard"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_ILLUSIONIST_WIZARD"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Prescient Bard"] = new engine.RulesElement({
    name: "Prescient Bard",
    type: "Build",
    id: "ID_FMP_BUILD_40",
    source: "Arcane Power",
    categories: ["Prescient Bard", "ID_FMP_BUILD_40", "ID_FMP_CLASS_104", "Bard"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_PRESCIENT_BARD"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Storm Sorcerer"] = new engine.RulesElement({
    name: "Storm Sorcerer",
    type: "Build",
    id: "ID_FMP_BUILD_43",
    source: "Arcane Power",
    categories: ["Storm Sorcerer", "ID_FMP_BUILD_43", "ID_FMP_CLASS_128", "Sorcerer"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_STORM_SORCERER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Summoner Wizard"] = new engine.RulesElement({
    name: "Summoner Wizard",
    type: "Build",
    id: "ID_FMP_BUILD_71",
    source: "Arcane Power",
    categories: ["Summoner Wizard", "ID_FMP_BUILD_71", "ID_FMP_CLASS_9", "Wizard"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_SUMMONER_WIZARD"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
