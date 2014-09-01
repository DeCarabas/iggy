define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Astral Guide"] = new engine.RulesElement({
    name: "Astral Guide",
    type: "Ritual",
    id: "ID_FMP_RITUAL_168",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=168",
    categories: ["Astral Guide", "ID_FMP_RITUAL_168"]
  });
  byID[te.id] = te;
  
  te = Ritual["Astral Sojourn"] = new engine.RulesElement({
    name: "Astral Sojourn",
    type: "Ritual",
    id: "ID_FMP_RITUAL_169",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=169",
    categories: ["Astral Sojourn", "ID_FMP_RITUAL_169"]
  });
  byID[te.id] = te;
  
  te = Ritual["Create Teleportation Circle"] = new engine.RulesElement({
    name: "Create Teleportation Circle",
    type: "Ritual",
    id: "ID_FMP_RITUAL_170",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=170",
    categories: ["Create Teleportation Circle", "ID_FMP_RITUAL_170"]
  });
  byID[te.id] = te;
  
  te = Ritual["Demicache"] = new engine.RulesElement({
    name: "Demicache",
    type: "Ritual",
    id: "ID_FMP_RITUAL_171",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=171",
    categories: ["Demicache", "ID_FMP_RITUAL_171"]
  });
  byID[te.id] = te;
  
  te = Ritual["Elemental Transference"] = new engine.RulesElement({
    name: "Elemental Transference",
    type: "Ritual",
    id: "ID_FMP_RITUAL_172",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=172",
    categories: ["Elemental Transference", "ID_FMP_RITUAL_172"]
  });
  byID[te.id] = te;
  
  te = Ritual["Far Sending"] = new engine.RulesElement({
    name: "Far Sending",
    type: "Ritual",
    id: "ID_FMP_RITUAL_174",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=174",
    categories: ["Far Sending", "ID_FMP_RITUAL_174"]
  });
  byID[te.id] = te;
  
  te = Ritual["Fey Passage"] = new engine.RulesElement({
    name: "Fey Passage",
    type: "Ritual",
    id: "ID_FMP_RITUAL_173",
    source: "Manual of the Planes,Dungeon Magazine Annual,Dungeon Magazine 162",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=173",
    categories: ["Fey Passage", "ID_FMP_RITUAL_173"]
  });
  byID[te.id] = te;
  
  te = Ritual["Plane Shift"] = new engine.RulesElement({
    name: "Plane Shift",
    type: "Ritual",
    id: "ID_FMP_RITUAL_175",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=175",
    categories: ["Plane Shift", "ID_FMP_RITUAL_175"]
  });
  byID[te.id] = te;
  
  te = Ritual["Rope Trick"] = new engine.RulesElement({
    name: "Rope Trick",
    type: "Ritual",
    id: "ID_FMP_RITUAL_176",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=176",
    categories: ["Rope Trick", "ID_FMP_RITUAL_176"]
  });
  byID[te.id] = te;
  
  te = Ritual["Scramble Portal"] = new engine.RulesElement({
    name: "Scramble Portal",
    type: "Ritual",
    id: "ID_FMP_RITUAL_177",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=177",
    categories: ["Scramble Portal", "ID_FMP_RITUAL_177"]
  });
  byID[te.id] = te;
  
  te = Ritual["Shadow Passage"] = new engine.RulesElement({
    name: "Shadow Passage",
    type: "Ritual",
    id: "ID_FMP_RITUAL_178",
    source: "Manual of the Planes,Dungeon Magazine 163",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=178",
    categories: ["Shadow Passage", "ID_FMP_RITUAL_178"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
