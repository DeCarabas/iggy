define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Pseudo_Class = types['Pseudo Class'] || (types['Pseudo Class'] = {});
  te = Pseudo_Class["Spellscarred"] = new engine.RulesElement({
    name: "Spellscarred",
    type: "Pseudo Class",
    id: "ID_FMP_PSEUDO_CLASS_216",
    source: "Forgotten Realms Player's Guide",
    categories: ["Spellscarred", "ID_FMP_PSEUDO_CLASS_216"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
