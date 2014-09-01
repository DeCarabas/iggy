define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Raise Beast Companion"] = new engine.RulesElement({
    name: "Raise Beast Companion",
    type: "Ritual",
    id: "ID_FMP_RITUAL_187",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=187",
    categories: ["Raise Beast Companion", "ID_FMP_RITUAL_187"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
