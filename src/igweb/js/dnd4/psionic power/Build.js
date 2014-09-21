define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Harrier Battlemind"] = new engine.RulesElement({
    name: "Harrier Battlemind",
    type: "Build",
    id: "ID_FMP_BUILD_118",
    source: "Psionic Power",
    specifics: {
        'Key Abilities': "Con, Dex, Wis, Cha"
      },
    categories: ["Harrier Battlemind", "ID_FMP_BUILD_118", "ID_FMP_CLASS_124", "Battlemind"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_HARRIER_BATTLEMIND"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Impetuous Ardent"] = new engine.RulesElement({
    name: "Impetuous Ardent",
    type: "Build",
    id: "ID_FMP_BUILD_117",
    source: "Psionic Power",
    specifics: {
        'Key Abilities': "Cha, Dex, Con"
      },
    categories: ["Impetuous Ardent", "ID_FMP_BUILD_117", "ID_FMP_CLASS_529", "Ardent"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_IMPETUOUS_ARDENT"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Iron Soul Monk"] = new engine.RulesElement({
    name: "Iron Soul Monk",
    type: "Build",
    id: "ID_FMP_BUILD_119",
    source: "Psionic Power",
    specifics: {
        'Key Abilities': "Dex, Con, Wis"
      },
    categories: ["Iron Soul Monk", "ID_FMP_BUILD_119", "ID_FMP_CLASS_362", "Monk"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_IRON_SOUL_MONK"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Shaper Psion"] = new engine.RulesElement({
    name: "Shaper Psion",
    type: "Build",
    id: "ID_FMP_BUILD_120",
    source: "Psionic Power",
    specifics: {
        'Key Abilities': "Int, Cha, Con"
      },
    categories: ["Shaper Psion", "ID_FMP_BUILD_120", "ID_FMP_CLASS_437", "Psion"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_SHAPER_PSION"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
