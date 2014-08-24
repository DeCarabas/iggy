(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Centered Breath Monk"] = new RulesElement({
    name: "Centered Breath Monk",
    type: "Build",
    id: "ID_FMP_BUILD_74",
    source: "Player's Handbook 3",
    categories: ["Centered Breath Monk", "ID_FMP_BUILD_74", "ID_FMP_CLASS_362", "Monk"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_CENTERED_BREATH_MONK"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Defiant Runepriest"] = new RulesElement({
    name: "Defiant Runepriest",
    type: "Build",
    id: "ID_FMP_BUILD_109",
    source: "Player's Handbook 3",
    categories: ["Defiant Runepriest", "ID_FMP_BUILD_109", "ID_FMP_CLASS_602", "Runepriest"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_DEFIANT_RUNEPRIEST"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Enlightened Ardent"] = new RulesElement({
    name: "Enlightened Ardent",
    type: "Build",
    id: "ID_FMP_BUILD_97",
    source: "Player's Handbook 3",
    categories: ["Enlightened Ardent", "ID_FMP_BUILD_97", "ID_FMP_CLASS_529", "Ardent"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_ENLIGHTENED_ARDENT"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Euphoric Ardent"] = new RulesElement({
    name: "Euphoric Ardent",
    type: "Build",
    id: "ID_FMP_BUILD_98",
    source: "Player's Handbook 3",
    categories: ["Euphoric Ardent", "ID_FMP_BUILD_98", "ID_FMP_CLASS_529", "Ardent"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_EUPHORIC_ARDENT"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Protecting Seeker"] = new RulesElement({
    name: "Protecting Seeker",
    type: "Build",
    id: "ID_FMP_BUILD_111",
    source: "Player's Handbook 3",
    categories: ["Protecting Seeker", "ID_FMP_BUILD_111", "ID_FMP_CLASS_472", "Seeker"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_PROTECTING_SEEKER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Quick Battlemind"] = new RulesElement({
    name: "Quick Battlemind",
    type: "Build",
    id: "ID_FMP_BUILD_99",
    source: "Player's Handbook 3",
    categories: ["Quick Battlemind", "ID_FMP_BUILD_99", "ID_FMP_CLASS_124", "Battlemind"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_QUICK_BATTLEMIND"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Resilient Battlemind"] = new RulesElement({
    name: "Resilient Battlemind",
    type: "Build",
    id: "ID_FMP_BUILD_106",
    source: "Player's Handbook 3",
    categories: ["Resilient Battlemind", "ID_FMP_BUILD_106", "ID_FMP_CLASS_124", "Battlemind"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_RESILIENT_BATTLEMIND"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Stone Fist Monk"] = new RulesElement({
    name: "Stone Fist Monk",
    type: "Build",
    id: "ID_FMP_BUILD_107",
    source: "Player's Handbook 3",
    categories: ["Stone Fist Monk", "ID_FMP_BUILD_107", "ID_FMP_CLASS_362", "Monk"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_STONE_FIST_MONK"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Telekinetic Psion"] = new RulesElement({
    name: "Telekinetic Psion",
    type: "Build",
    id: "ID_FMP_BUILD_108",
    source: "Player's Handbook 3",
    categories: ["Telekinetic Psion", "ID_FMP_BUILD_108", "ID_FMP_CLASS_437", "Psion"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_TELEKINETIC_PSION"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Telepathic Psion"] = new RulesElement({
    name: "Telepathic Psion",
    type: "Build",
    id: "ID_FMP_BUILD_81",
    source: "Player's Handbook 3",
    categories: ["Telepathic Psion", "ID_FMP_BUILD_81", "ID_FMP_CLASS_437", "Psion"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_TELEPATHIC_PSION"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Vengeful Seeker"] = new RulesElement({
    name: "Vengeful Seeker",
    type: "Build",
    id: "ID_FMP_BUILD_86",
    source: "Player's Handbook 3",
    categories: ["Vengeful Seeker", "ID_FMP_BUILD_86", "ID_FMP_CLASS_472", "Seeker"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_VENGEFUL_SEEKER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Wrathful Runepriest"] = new RulesElement({
    name: "Wrathful Runepriest",
    type: "Build",
    id: "ID_FMP_BUILD_110",
    source: "Player's Handbook 3",
    categories: ["Wrathful Runepriest", "ID_FMP_BUILD_110", "ID_FMP_CLASS_602", "Runepriest"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_WRATHFUL_RUNEPRIEST"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
