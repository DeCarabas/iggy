define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Pact of the Iron Ring"] = new engine.RulesElement({
    name: "Pact of the Iron Ring",
    type: "Ritual",
    id: "ID_FMP_RITUAL_73",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=73",
    categories: ["Pact of the Iron Ring", "ID_FMP_RITUAL_73"]
  });
  byID[te.id] = te;
  
  te = Ritual["Ritual of Twin Burnings"] = new engine.RulesElement({
    name: "Ritual of Twin Burnings",
    type: "Ritual",
    id: "ID_FMP_RITUAL_74",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=74",
    categories: ["Ritual of Twin Burnings", "ID_FMP_RITUAL_74"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
