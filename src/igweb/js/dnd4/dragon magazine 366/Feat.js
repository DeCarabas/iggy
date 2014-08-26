define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Fey Step Trailblazer"] = new engine.RulesElement({
    name: "Fey Step Trailblazer",
    type: "Feat",
    id: "ID_FMP_FEAT_742",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=742",
    categories: ["Fey Step Trailblazer", "ID_FMP_FEAT_742"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
