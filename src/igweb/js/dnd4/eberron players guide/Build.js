define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Battlesmith Artificer"] = new engine.RulesElement({
    name: "Battlesmith Artificer",
    type: "Build",
    id: "ID_FMP_BUILD_53",
    source: "Eberron Player's Guide",
    categories: ["Battlesmith Artificer", "ID_FMP_BUILD_53", "ID_FMP_CLASS_125", "Artificer"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_BATTLESMITH_ARTIFICER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Tinkerer Artificer"] = new engine.RulesElement({
    name: "Tinkerer Artificer",
    type: "Build",
    id: "ID_FMP_BUILD_80",
    source: "Eberron Player's Guide",
    categories: ["Tinkerer Artificer", "ID_FMP_BUILD_80", "ID_FMP_CLASS_125", "Artificer"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_TINKERER_ARTIFICER"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
