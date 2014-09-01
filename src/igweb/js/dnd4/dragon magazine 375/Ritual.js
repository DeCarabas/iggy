define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Imprint Anaxim"] = new engine.RulesElement({
    name: "Imprint Anaxim",
    type: "Ritual",
    id: "ID_FMP_RITUAL_270",
    source: "Dragon Magazine 375",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=270",
    categories: ["Imprint Anaxim", "ID_FMP_RITUAL_270"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
