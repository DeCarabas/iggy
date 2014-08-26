define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Aura Mask"] = new engine.RulesElement({
    name: "Aura Mask",
    type: "Ritual",
    id: "ID_FMP_RITUAL_159",
    source: "Draconomicon: Chromatic Dragons",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=159",
    categories: ["Aura Mask", "ID_FMP_RITUAL_159"]
  });
  byID[te.id] = te;
  
  te = Ritual["Cauldron's Rebirth"] = new engine.RulesElement({
    name: "Cauldron's Rebirth",
    type: "Ritual",
    id: "ID_FMP_RITUAL_166",
    source: "Draconomicon: Chromatic Dragons",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=166",
    categories: ["Cauldron's Rebirth", "ID_FMP_RITUAL_166"]
  });
  byID[te.id] = te;
  
  te = Ritual["Chamber of Vulnerability"] = new engine.RulesElement({
    name: "Chamber of Vulnerability",
    type: "Ritual",
    id: "ID_FMP_RITUAL_160",
    source: "Draconomicon: Chromatic Dragons",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=160",
    categories: ["Chamber of Vulnerability", "ID_FMP_RITUAL_160"]
  });
  byID[te.id] = te;
  
  te = Ritual["Disorienting Portal"] = new engine.RulesElement({
    name: "Disorienting Portal",
    type: "Ritual",
    id: "ID_FMP_RITUAL_161",
    source: "Draconomicon: Chromatic Dragons",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=161",
    categories: ["Disorienting Portal", "ID_FMP_RITUAL_161"]
  });
  byID[te.id] = te;
  
  te = Ritual["Easy Passage"] = new engine.RulesElement({
    name: "Easy Passage",
    type: "Ritual",
    id: "ID_FMP_RITUAL_162",
    source: "Draconomicon: Chromatic Dragons",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=162",
    categories: ["Easy Passage", "ID_FMP_RITUAL_162"]
  });
  byID[te.id] = te;
  
  te = Ritual["False Aura"] = new engine.RulesElement({
    name: "False Aura",
    type: "Ritual",
    id: "ID_FMP_RITUAL_296",
    source: "Draconomicon: Chromatic Dragons",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=296",
    categories: ["False Aura", "ID_FMP_RITUAL_296"]
  });
  byID[te.id] = te;
  
  te = Ritual["Sentinel Eye"] = new engine.RulesElement({
    name: "Sentinel Eye",
    type: "Ritual",
    id: "ID_FMP_RITUAL_163",
    source: "Draconomicon: Chromatic Dragons",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=163",
    categories: ["Sentinel Eye", "ID_FMP_RITUAL_163"]
  });
  byID[te.id] = te;
  
  te = Ritual["Ward the True Name"] = new engine.RulesElement({
    name: "Ward the True Name",
    type: "Ritual",
    id: "ID_FMP_RITUAL_164",
    source: "Draconomicon: Chromatic Dragons",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=164",
    categories: ["Ward the True Name", "ID_FMP_RITUAL_164"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
