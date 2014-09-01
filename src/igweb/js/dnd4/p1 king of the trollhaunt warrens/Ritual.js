define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Ritual of Retrieval"] = new engine.RulesElement({
    name: "Ritual of Retrieval",
    type: "Ritual",
    id: "ID_FMP_RITUAL_165",
    source: "P1 King of the Trollhaunt Warrens",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=165",
    categories: ["Ritual of Retrieval", "ID_FMP_RITUAL_165"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
