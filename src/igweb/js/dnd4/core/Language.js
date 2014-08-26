define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Language = types['Language'] || (types['Language'] = {});
  te = Language["All"] = new engine.RulesElement({
    name: "All",
    type: "Language",
    id: "ID_INTERNAL_LANGUAGE_ALL",
    source: "Core",
    categories: ["All", "ID_INTERNAL_LANGUAGE_ALL"]
  });
  byID[te.id] = te;
  
  te = Language["Secret Language"] = new engine.RulesElement({
    name: "Secret Language",
    type: "Language",
    id: "ID_INTERNAL_LANGUAGE_SECRET_LANGUAGE",
    source: "Core",
    categories: ["Secret Language", "ID_INTERNAL_LANGUAGE_SECRET_LANGUAGE"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
