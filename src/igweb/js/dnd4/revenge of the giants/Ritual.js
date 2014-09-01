define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Argent Portal"] = new engine.RulesElement({
    name: "Argent Portal",
    type: "Ritual",
    id: "ID_FMP_RITUAL_283",
    source: "Revenge of the Giants",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=283",
    categories: ["Argent Portal", "ID_FMP_RITUAL_283"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
