define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Language = types['Language'] || (types['Language'] = {});
  te = Language["The language of the mind"] = new engine.RulesElement({
    name: "The language of the mind",
    type: "Language",
    id: "ID_FMP_LANGUAGE_45",
    source: "Psionic Power",
    categories: ["The language of the mind", "ID_FMP_LANGUAGE_45"],
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
