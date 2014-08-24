(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Battlesmith Artificer"] = new RulesElement({
    name: "Battlesmith Artificer",
    type: "Build",
    id: "ID_FMP_BUILD_53",
    source: "Eberron Player's Guide",
    categories: ["Battlesmith Artificer", "ID_FMP_BUILD_53", "ID_FMP_CLASS_125", "Artificer"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_BATTLESMITH_ARTIFICER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Tinkerer Artificer"] = new RulesElement({
    name: "Tinkerer Artificer",
    type: "Build",
    id: "ID_FMP_BUILD_80",
    source: "Eberron Player's Guide",
    categories: ["Tinkerer Artificer", "ID_FMP_BUILD_80", "ID_FMP_CLASS_125", "Artificer"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_TINKERER_ARTIFICER"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
