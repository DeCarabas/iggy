define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Drowsy Dust"] = new engine.RulesElement({
    name: "Drowsy Dust",
    type: "Ritual",
    id: "ID_FMP_RITUAL_233",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=233",
    categories: ["Drowsy Dust", "ID_FMP_RITUAL_233"]
  });
  byID[te.id] = te;
  
  te = Ritual["Eyesting"] = new engine.RulesElement({
    name: "Eyesting",
    type: "Ritual",
    id: "ID_FMP_RITUAL_234",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=234",
    categories: ["Eyesting", "ID_FMP_RITUAL_234"]
  });
  byID[te.id] = te;
  
  te = Ritual["Flashbang Powder"] = new engine.RulesElement({
    name: "Flashbang Powder",
    type: "Ritual",
    id: "ID_FMP_RITUAL_235",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=235",
    categories: ["Flashbang Powder", "ID_FMP_RITUAL_235"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
