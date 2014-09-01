define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Endure Primordial Elements"] = new engine.RulesElement({
    name: "Endure Primordial Elements",
    type: "Ritual",
    id: "ID_FMP_RITUAL_303",
    source: "The Plane Below: Secrets of the Elemental Chaos",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=303",
    categories: ["Endure Primordial Elements", "ID_FMP_RITUAL_303"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
