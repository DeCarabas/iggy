define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Summon Demon"] = new engine.RulesElement({
    name: "Summon Demon",
    type: "Ritual",
    id: "ID_FMP_RITUAL_340",
    source: "Demonomicon",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=340",
    categories: ["Summon Demon", "ID_FMP_RITUAL_340"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
