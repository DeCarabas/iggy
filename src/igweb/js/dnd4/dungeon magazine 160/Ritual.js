define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Seal Portal"] = new engine.RulesElement({
    name: "Seal Portal",
    type: "Ritual",
    id: "ID_FMP_RITUAL_179",
    source: "Dungeon Magazine 160",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=179",
    categories: ["Seal Portal", "ID_FMP_RITUAL_179"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
