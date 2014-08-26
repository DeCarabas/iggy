define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Language = types['Language'] || (types['Language'] = {});
  te = Language["Argon"] = new engine.RulesElement({
    name: "Argon",
    type: "Language",
    id: "ID_FMP_LANGUAGE_37",
    source: "Eberron Player's Guide",
    categories: ["Argon", "ID_FMP_LANGUAGE_37", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Quori"] = new engine.RulesElement({
    name: "Quori",
    type: "Language",
    id: "ID_FMP_LANGUAGE_38",
    source: "Eberron Player's Guide",
    categories: ["Quori", "ID_FMP_LANGUAGE_38", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Language["Riedran"] = new engine.RulesElement({
    name: "Riedran",
    type: "Language",
    id: "ID_FMP_LANGUAGE_40",
    source: "Eberron Player's Guide",
    categories: ["Riedran", "ID_FMP_LANGUAGE_40", "ID_INTERNAL_CATEGORY_STARTING", "Starting"],
    rules: function(model) {
      model.statadd("Language Count", 1);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
