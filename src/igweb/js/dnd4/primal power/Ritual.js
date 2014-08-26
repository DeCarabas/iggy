define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Dowsing Rod"] = new engine.RulesElement({
    name: "Dowsing Rod",
    type: "Ritual",
    id: "ID_FMP_RITUAL_285",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=285",
    categories: ["Dowsing Rod", "ID_FMP_RITUAL_285"]
  });
  byID[te.id] = te;
  
  te = Ritual["Eagle's Flight"] = new engine.RulesElement({
    name: "Eagle's Flight",
    type: "Ritual",
    id: "ID_FMP_RITUAL_286",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=286",
    categories: ["Eagle's Flight", "ID_FMP_RITUAL_286"]
  });
  byID[te.id] = te;
  
  te = Ritual["Portend Weather"] = new engine.RulesElement({
    name: "Portend Weather",
    type: "Ritual",
    id: "ID_FMP_RITUAL_287",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=287",
    categories: ["Portend Weather", "ID_FMP_RITUAL_287"]
  });
  byID[te.id] = te;
  
  te = Ritual["Primal Grove"] = new engine.RulesElement({
    name: "Primal Grove",
    type: "Ritual",
    id: "ID_FMP_RITUAL_288",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=288",
    categories: ["Primal Grove", "ID_FMP_RITUAL_288"]
  });
  byID[te.id] = te;
  
  te = Ritual["Primal Prison"] = new engine.RulesElement({
    name: "Primal Prison",
    type: "Ritual",
    id: "ID_FMP_RITUAL_289",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=289",
    categories: ["Primal Prison", "ID_FMP_RITUAL_289"]
  });
  byID[te.id] = te;
  
  te = Ritual["Starshine"] = new engine.RulesElement({
    name: "Starshine",
    type: "Ritual",
    id: "ID_FMP_RITUAL_290",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=290",
    categories: ["Starshine", "ID_FMP_RITUAL_290"]
  });
  byID[te.id] = te;
  
  te = Ritual["Traveler's Camouflage"] = new engine.RulesElement({
    name: "Traveler's Camouflage",
    type: "Ritual",
    id: "ID_FMP_RITUAL_291",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=291",
    categories: ["Traveler's Camouflage", "ID_FMP_RITUAL_291"]
  });
  byID[te.id] = te;
  
  te = Ritual["Water's Gift"] = new engine.RulesElement({
    name: "Water's Gift",
    type: "Ritual",
    id: "ID_FMP_RITUAL_292",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=292",
    categories: ["Water's Gift", "ID_FMP_RITUAL_292"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
