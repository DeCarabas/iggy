define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Comrades' Succor"] = new engine.RulesElement({
    name: "Comrades' Succor",
    type: "Ritual",
    id: "ID_FMP_RITUAL_297",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=297",
    categories: ["Comrades' Succor", "ID_FMP_RITUAL_297"]
  });
  byID[te.id] = te;
  
  te = Ritual["Ghost Walk"] = new engine.RulesElement({
    name: "Ghost Walk",
    type: "Ritual",
    id: "ID_FMP_RITUAL_298",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=298",
    categories: ["Ghost Walk", "ID_FMP_RITUAL_298"]
  });
  byID[te.id] = te;
  
  te = Ritual["Hunter's Blessing"] = new engine.RulesElement({
    name: "Hunter's Blessing",
    type: "Ritual",
    id: "ID_FMP_RITUAL_299",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=299",
    categories: ["Hunter's Blessing", "ID_FMP_RITUAL_299"]
  });
  byID[te.id] = te;
  
  te = Ritual["Hunter's Curse"] = new engine.RulesElement({
    name: "Hunter's Curse",
    type: "Ritual",
    id: "ID_FMP_RITUAL_300",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=300",
    categories: ["Hunter's Curse", "ID_FMP_RITUAL_300"]
  });
  byID[te.id] = te;
  
  te = Ritual["Spirit Fetch"] = new engine.RulesElement({
    name: "Spirit Fetch",
    type: "Ritual",
    id: "ID_FMP_RITUAL_301",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=301",
    categories: ["Spirit Fetch", "ID_FMP_RITUAL_301"]
  });
  byID[te.id] = te;
  
  te = Ritual["Vistani Passkey"] = new engine.RulesElement({
    name: "Vistani Passkey",
    type: "Ritual",
    id: "ID_FMP_RITUAL_302",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=302",
    categories: ["Vistani Passkey", "ID_FMP_RITUAL_302"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
