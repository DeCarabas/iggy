define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Centered Breath Monk"] = new engine.RulesElement({
    name: "Centered Breath Monk",
    type: "Build",
    id: "ID_FMP_BUILD_74",
    source: "Player's Handbook 3",
    specifics: {
        'Key Abilities': "Dex, Wis, Str"
      },
    categories: ["Centered Breath Monk", "ID_FMP_BUILD_74", "ID_FMP_CLASS_362", "Monk"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_CENTERED_BREATH_MONK"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Defiant Runepriest"] = new engine.RulesElement({
    name: "Defiant Runepriest",
    type: "Build",
    id: "ID_FMP_BUILD_109",
    source: "Player's Handbook 3",
    specifics: {
        'Key Abilities': "Str, Wis"
      },
    categories: ["Defiant Runepriest", "ID_FMP_BUILD_109", "ID_FMP_CLASS_602", "Runepriest"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_DEFIANT_RUNEPRIEST"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Enlightened Ardent"] = new engine.RulesElement({
    name: "Enlightened Ardent",
    type: "Build",
    id: "ID_FMP_BUILD_97",
    source: "Player's Handbook 3",
    specifics: {
        'Key Abilities': "Cha, Wis, Con"
      },
    categories: ["Enlightened Ardent", "ID_FMP_BUILD_97", "ID_FMP_CLASS_529", "Ardent"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_ENLIGHTENED_ARDENT"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Euphoric Ardent"] = new engine.RulesElement({
    name: "Euphoric Ardent",
    type: "Build",
    id: "ID_FMP_BUILD_98",
    source: "Player's Handbook 3",
    specifics: {
        'Key Abilities': "Cha, Con, Wis, Dex"
      },
    categories: ["Euphoric Ardent", "ID_FMP_BUILD_98", "ID_FMP_CLASS_529", "Ardent"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_EUPHORIC_ARDENT"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Protecting Seeker"] = new engine.RulesElement({
    name: "Protecting Seeker",
    type: "Build",
    id: "ID_FMP_BUILD_111",
    source: "Player's Handbook 3",
    specifics: {
        'Key Abilities': "Wis, Str"
      },
    categories: ["Protecting Seeker", "ID_FMP_BUILD_111", "ID_FMP_CLASS_472", "Seeker"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_PROTECTING_SEEKER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Quick Battlemind"] = new engine.RulesElement({
    name: "Quick Battlemind",
    type: "Build",
    id: "ID_FMP_BUILD_99",
    source: "Player's Handbook 3",
    specifics: {
        'Key Abilities': "Con, Cha, Wis"
      },
    categories: ["Quick Battlemind", "ID_FMP_BUILD_99", "ID_FMP_CLASS_124", "Battlemind"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_QUICK_BATTLEMIND"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Resilient Battlemind"] = new engine.RulesElement({
    name: "Resilient Battlemind",
    type: "Build",
    id: "ID_FMP_BUILD_106",
    source: "Player's Handbook 3",
    specifics: {
        'Key Abilities': "Con, Wis, Cha"
      },
    categories: ["Resilient Battlemind", "ID_FMP_BUILD_106", "ID_FMP_CLASS_124", "Battlemind"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_RESILIENT_BATTLEMIND"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Stone Fist Monk"] = new engine.RulesElement({
    name: "Stone Fist Monk",
    type: "Build",
    id: "ID_FMP_BUILD_107",
    source: "Player's Handbook 3",
    specifics: {
        'Key Abilities': "Dex, Str, Wis"
      },
    categories: ["Stone Fist Monk", "ID_FMP_BUILD_107", "ID_FMP_CLASS_362", "Monk"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_STONE_FIST_MONK"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Telekinetic Psion"] = new engine.RulesElement({
    name: "Telekinetic Psion",
    type: "Build",
    id: "ID_FMP_BUILD_108",
    source: "Player's Handbook 3",
    specifics: {
        'Key Abilities': "Int, Wis"
      },
    categories: ["Telekinetic Psion", "ID_FMP_BUILD_108", "ID_FMP_CLASS_437", "Psion"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_TELEKINETIC_PSION"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Telepathic Psion"] = new engine.RulesElement({
    name: "Telepathic Psion",
    type: "Build",
    id: "ID_FMP_BUILD_81",
    source: "Player's Handbook 3",
    categories: ["Telepathic Psion", "ID_FMP_BUILD_81", "ID_FMP_CLASS_437", "Psion"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_TELEPATHIC_PSION"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Vengeful Seeker"] = new engine.RulesElement({
    name: "Vengeful Seeker",
    type: "Build",
    id: "ID_FMP_BUILD_86",
    source: "Player's Handbook 3",
    specifics: {
        'Key Abilities': "Wisdom, Dexterity"
      },
    categories: ["Vengeful Seeker", "ID_FMP_BUILD_86", "ID_FMP_CLASS_472", "Seeker"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_VENGEFUL_SEEKER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Wrathful Runepriest"] = new engine.RulesElement({
    name: "Wrathful Runepriest",
    type: "Build",
    id: "ID_FMP_BUILD_110",
    source: "Player's Handbook 3",
    specifics: {
        'Key Abilities': "Str, Con"
      },
    categories: ["Wrathful Runepriest", "ID_FMP_BUILD_110", "ID_FMP_CLASS_602", "Runepriest"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_WRATHFUL_RUNEPRIEST"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
