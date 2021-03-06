define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Aura of True Vision"] = new engine.RulesElement({
    name: "Aura of True Vision",
    type: "Ritual",
    id: "ID_FMP_RITUAL_327",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=327",
    categories: ["Aura of True Vision", "ID_FMP_RITUAL_327"]
  });
  byID[te.id] = te;
  
  te = Ritual["Corpselike Visage"] = new engine.RulesElement({
    name: "Corpselike Visage",
    type: "Ritual",
    id: "ID_FMP_RITUAL_328",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=328",
    categories: ["Corpselike Visage", "ID_FMP_RITUAL_328"]
  });
  byID[te.id] = te;
  
  te = Ritual["Donning Trollflesh"] = new engine.RulesElement({
    name: "Donning Trollflesh",
    type: "Ritual",
    id: "ID_FMP_RITUAL_329",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=329",
    categories: ["Donning Trollflesh", "ID_FMP_RITUAL_329"]
  });
  byID[te.id] = te;
  
  te = Ritual["Dragonward"] = new engine.RulesElement({
    name: "Dragonward",
    type: "Ritual",
    id: "ID_FMP_RITUAL_330",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=330",
    categories: ["Dragonward", "ID_FMP_RITUAL_330"]
  });
  byID[te.id] = te;
  
  te = Ritual["Evard's Extensible Rope"] = new engine.RulesElement({
    name: "Evard's Extensible Rope",
    type: "Ritual",
    id: "ID_FMP_RITUAL_331",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=331",
    categories: ["Evard's Extensible Rope", "ID_FMP_RITUAL_331"]
  });
  byID[te.id] = te;
  
  te = Ritual["Follow the Voice"] = new engine.RulesElement({
    name: "Follow the Voice",
    type: "Ritual",
    id: "ID_FMP_RITUAL_332",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=332",
    categories: ["Follow the Voice", "ID_FMP_RITUAL_332"]
  });
  byID[te.id] = te;
  
  te = Ritual["Memory of a Thousand Deaths"] = new engine.RulesElement({
    name: "Memory of a Thousand Deaths",
    type: "Ritual",
    id: "ID_FMP_RITUAL_333",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=333",
    categories: ["Memory of a Thousand Deaths", "ID_FMP_RITUAL_333"]
  });
  byID[te.id] = te;
  
  te = Ritual["Memory of the Dragon"] = new engine.RulesElement({
    name: "Memory of the Dragon",
    type: "Ritual",
    id: "ID_FMP_RITUAL_334",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=334",
    categories: ["Memory of the Dragon", "ID_FMP_RITUAL_334"]
  });
  byID[te.id] = te;
  
  te = Ritual["Quench the Flame"] = new engine.RulesElement({
    name: "Quench the Flame",
    type: "Ritual",
    id: "ID_FMP_RITUAL_335",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=335",
    categories: ["Quench the Flame", "ID_FMP_RITUAL_335"]
  });
  byID[te.id] = te;
  
  te = Ritual["Self-Holding Bag"] = new engine.RulesElement({
    name: "Self-Holding Bag",
    type: "Ritual",
    id: "ID_FMP_RITUAL_336",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=336",
    categories: ["Self-Holding Bag", "ID_FMP_RITUAL_336"]
  });
  byID[te.id] = te;
  
  te = Ritual["Snowstorm Summons"] = new engine.RulesElement({
    name: "Snowstorm Summons",
    type: "Ritual",
    id: "ID_FMP_RITUAL_337",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=337",
    categories: ["Snowstorm Summons", "ID_FMP_RITUAL_337"]
  });
  byID[te.id] = te;
  
  te = Ritual["Wavestrider Enchantment"] = new engine.RulesElement({
    name: "Wavestrider Enchantment",
    type: "Ritual",
    id: "ID_FMP_RITUAL_338",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=338",
    categories: ["Wavestrider Enchantment", "ID_FMP_RITUAL_338"]
  });
  byID[te.id] = te;
  
  te = Ritual["Windmaster's Mantle"] = new engine.RulesElement({
    name: "Windmaster's Mantle",
    type: "Ritual",
    id: "ID_FMP_RITUAL_339",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=339",
    categories: ["Windmaster's Mantle", "ID_FMP_RITUAL_339"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
