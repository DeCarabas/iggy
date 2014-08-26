define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Mindshape Warwing Drake"] = new engine.RulesElement({
    name: "Mindshape Warwing Drake",
    type: "Ritual",
    id: "ID_FMP_RITUAL_271",
    source: "Dungeon Magazine 165",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=271",
    categories: ["Mindshape Warwing Drake", "ID_FMP_RITUAL_271"]
  });
  byID[te.id] = te;
  
  te = Ritual["Solace Bole"] = new engine.RulesElement({
    name: "Solace Bole",
    type: "Ritual",
    id: "ID_FMP_RITUAL_236",
    source: "Dungeon Magazine 165",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=236",
    categories: ["Solace Bole", "ID_FMP_RITUAL_236"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
