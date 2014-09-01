define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Decipher Script"] = new engine.RulesElement({
    name: "Decipher Script",
    type: "Ritual",
    id: "ID_FMP_RITUAL_305",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=305",
    categories: ["Decipher Script", "ID_FMP_RITUAL_305"]
  });
  byID[te.id] = te;
  
  te = Ritual["Embalm"] = new engine.RulesElement({
    name: "Embalm",
    type: "Ritual",
    id: "ID_FMP_RITUAL_306",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=306",
    categories: ["Embalm", "ID_FMP_RITUAL_306"]
  });
  byID[te.id] = te;
  
  te = Ritual["Feign Death"] = new engine.RulesElement({
    name: "Feign Death",
    type: "Ritual",
    id: "ID_FMP_RITUAL_307",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=307",
    categories: ["Feign Death", "ID_FMP_RITUAL_307"]
  });
  byID[te.id] = te;
  
  te = Ritual["Forge Armor"] = new engine.RulesElement({
    name: "Forge Armor",
    type: "Ritual",
    id: "ID_FMP_RITUAL_308",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=308",
    categories: ["Forge Armor", "ID_FMP_RITUAL_308"]
  });
  byID[te.id] = te;
  
  te = Ritual["Forge Weapon"] = new engine.RulesElement({
    name: "Forge Weapon",
    type: "Ritual",
    id: "ID_FMP_RITUAL_309",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=309",
    categories: ["Forge Weapon", "ID_FMP_RITUAL_309"]
  });
  byID[te.id] = te;
  
  te = Ritual["Fortify Beast"] = new engine.RulesElement({
    name: "Fortify Beast",
    type: "Ritual",
    id: "ID_FMP_RITUAL_310",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=310",
    categories: ["Fortify Beast", "ID_FMP_RITUAL_310"]
  });
  byID[te.id] = te;
  
  te = Ritual["Handle Steed"] = new engine.RulesElement({
    name: "Handle Steed",
    type: "Ritual",
    id: "ID_FMP_RITUAL_311",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=311",
    categories: ["Handle Steed", "ID_FMP_RITUAL_311"]
  });
  byID[te.id] = te;
  
  te = Ritual["Hidden Pocket"] = new engine.RulesElement({
    name: "Hidden Pocket",
    type: "Ritual",
    id: "ID_FMP_RITUAL_312",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=312",
    categories: ["Hidden Pocket", "ID_FMP_RITUAL_312"]
  });
  byID[te.id] = te;
  
  te = Ritual["Long-Distance Runner"] = new engine.RulesElement({
    name: "Long-Distance Runner",
    type: "Ritual",
    id: "ID_FMP_RITUAL_313",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=313",
    categories: ["Long-Distance Runner", "ID_FMP_RITUAL_313"]
  });
  byID[te.id] = te;
  
  te = Ritual["Master Artisan"] = new engine.RulesElement({
    name: "Master Artisan",
    type: "Ritual",
    id: "ID_FMP_RITUAL_314",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=314",
    categories: ["Master Artisan", "ID_FMP_RITUAL_314"]
  });
  byID[te.id] = te;
  
  te = Ritual["Peerless Exploration"] = new engine.RulesElement({
    name: "Peerless Exploration",
    type: "Ritual",
    id: "ID_FMP_RITUAL_315",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=315",
    categories: ["Peerless Exploration", "ID_FMP_RITUAL_315"]
  });
  byID[te.id] = te;
  
  te = Ritual["Reliable Balance"] = new engine.RulesElement({
    name: "Reliable Balance",
    type: "Ritual",
    id: "ID_FMP_RITUAL_316",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=316",
    categories: ["Reliable Balance", "ID_FMP_RITUAL_316"]
  });
  byID[te.id] = te;
  
  te = Ritual["Survivor's Assurance"] = new engine.RulesElement({
    name: "Survivor's Assurance",
    type: "Ritual",
    id: "ID_FMP_RITUAL_317",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=317",
    categories: ["Survivor's Assurance", "ID_FMP_RITUAL_317"]
  });
  byID[te.id] = te;
  
  te = Ritual["Survivor's Preparation"] = new engine.RulesElement({
    name: "Survivor's Preparation",
    type: "Ritual",
    id: "ID_FMP_RITUAL_318",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=318",
    categories: ["Survivor's Preparation", "ID_FMP_RITUAL_318"]
  });
  byID[te.id] = te;
  
  te = Ritual["Temporary Fix"] = new engine.RulesElement({
    name: "Temporary Fix",
    type: "Ritual",
    id: "ID_FMP_RITUAL_319",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=319",
    categories: ["Temporary Fix", "ID_FMP_RITUAL_319"]
  });
  byID[te.id] = te;
  
  te = Ritual["Thorough Search"] = new engine.RulesElement({
    name: "Thorough Search",
    type: "Ritual",
    id: "ID_FMP_RITUAL_320",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=320",
    categories: ["Thorough Search", "ID_FMP_RITUAL_320"]
  });
  byID[te.id] = te;
  
  te = Ritual["Tracker's Eye"] = new engine.RulesElement({
    name: "Tracker's Eye",
    type: "Ritual",
    id: "ID_FMP_RITUAL_321",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=321",
    categories: ["Tracker's Eye", "ID_FMP_RITUAL_321"]
  });
  byID[te.id] = te;
  
  te = Ritual["Travel Sense"] = new engine.RulesElement({
    name: "Travel Sense",
    type: "Ritual",
    id: "ID_FMP_RITUAL_322",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=322",
    categories: ["Travel Sense", "ID_FMP_RITUAL_322"]
  });
  byID[te.id] = te;
  
  te = Ritual["Uncanny Strength"] = new engine.RulesElement({
    name: "Uncanny Strength",
    type: "Ritual",
    id: "ID_FMP_RITUAL_323",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=323",
    categories: ["Uncanny Strength", "ID_FMP_RITUAL_323"]
  });
  byID[te.id] = te;
  
  te = Ritual["Use Scroll"] = new engine.RulesElement({
    name: "Use Scroll",
    type: "Ritual",
    id: "ID_FMP_RITUAL_324",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=324",
    categories: ["Use Scroll", "ID_FMP_RITUAL_324"]
  });
  byID[te.id] = te;
  
  te = Ritual["Warded Campsite"] = new engine.RulesElement({
    name: "Warded Campsite",
    type: "Ritual",
    id: "ID_FMP_RITUAL_325",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=325",
    categories: ["Warded Campsite", "ID_FMP_RITUAL_325"]
  });
  byID[te.id] = te;
  
  te = Ritual["Word on the Street"] = new engine.RulesElement({
    name: "Word on the Street",
    type: "Ritual",
    id: "ID_FMP_RITUAL_326",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=326",
    categories: ["Word on the Street", "ID_FMP_RITUAL_326"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
