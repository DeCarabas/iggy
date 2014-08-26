define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Arcane Barrier"] = new engine.RulesElement({
    name: "Arcane Barrier",
    type: "Ritual",
    id: "ID_FMP_RITUAL_100",
    source: "Dragon Magazine 366,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=100",
    categories: ["Arcane Barrier", "ID_FMP_RITUAL_100"]
  });
  byID[te.id] = te;
  
  te = Ritual["Banish Vermin"] = new engine.RulesElement({
    name: "Banish Vermin",
    type: "Ritual",
    id: "ID_FMP_RITUAL_101",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=101",
    categories: ["Banish Vermin", "ID_FMP_RITUAL_101"]
  });
  byID[te.id] = te;
  
  te = Ritual["Battlefield Elocution"] = new engine.RulesElement({
    name: "Battlefield Elocution",
    type: "Ritual",
    id: "ID_FMP_RITUAL_102",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=102",
    categories: ["Battlefield Elocution", "ID_FMP_RITUAL_102"]
  });
  byID[te.id] = te;
  
  te = Ritual["Bolster Object"] = new engine.RulesElement({
    name: "Bolster Object",
    type: "Ritual",
    id: "ID_FMP_RITUAL_103",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=103",
    categories: ["Bolster Object", "ID_FMP_RITUAL_103"]
  });
  byID[te.id] = te;
  
  te = Ritual["Chameleon's Cloak"] = new engine.RulesElement({
    name: "Chameleon's Cloak",
    type: "Ritual",
    id: "ID_FMP_RITUAL_104",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=104",
    categories: ["Chameleon's Cloak", "ID_FMP_RITUAL_104"]
  });
  byID[te.id] = te;
  
  te = Ritual["Conceal Object"] = new engine.RulesElement({
    name: "Conceal Object",
    type: "Ritual",
    id: "ID_FMP_RITUAL_105",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=105",
    categories: ["Conceal Object", "ID_FMP_RITUAL_105"]
  });
  byID[te.id] = te;
  
  te = Ritual["Deceive Sensor"] = new engine.RulesElement({
    name: "Deceive Sensor",
    type: "Ritual",
    id: "ID_FMP_RITUAL_106",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=106",
    categories: ["Deceive Sensor", "ID_FMP_RITUAL_106"]
  });
  byID[te.id] = te;
  
  te = Ritual["Delay Affliction"] = new engine.RulesElement({
    name: "Delay Affliction",
    type: "Ritual",
    id: "ID_FMP_RITUAL_107",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=107",
    categories: ["Delay Affliction", "ID_FMP_RITUAL_107"]
  });
  byID[te.id] = te;
  
  te = Ritual["Delver's Fire"] = new engine.RulesElement({
    name: "Delver's Fire",
    type: "Ritual",
    id: "ID_FMP_RITUAL_108",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=108",
    categories: ["Delver's Fire", "ID_FMP_RITUAL_108"]
  });
  byID[te.id] = te;
  
  te = Ritual["Earthen Ramparts"] = new engine.RulesElement({
    name: "Earthen Ramparts",
    type: "Ritual",
    id: "ID_FMP_RITUAL_109",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=109",
    categories: ["Earthen Ramparts", "ID_FMP_RITUAL_109"]
  });
  byID[te.id] = te;
  
  te = Ritual["Excavation"] = new engine.RulesElement({
    name: "Excavation",
    type: "Ritual",
    id: "ID_FMP_RITUAL_110",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=110",
    categories: ["Excavation", "ID_FMP_RITUAL_110"]
  });
  byID[te.id] = te;
  
  te = Ritual["Explorer's Fire"] = new engine.RulesElement({
    name: "Explorer's Fire",
    type: "Ritual",
    id: "ID_FMP_RITUAL_111",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=111",
    categories: ["Explorer's Fire", "ID_FMP_RITUAL_111"]
  });
  byID[te.id] = te;
  
  te = Ritual["Fastidiousness"] = new engine.RulesElement({
    name: "Fastidiousness",
    type: "Ritual",
    id: "ID_FMP_RITUAL_113",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=113",
    categories: ["Fastidiousness", "ID_FMP_RITUAL_113"]
  });
  byID[te.id] = te;
  
  te = Ritual["Memory Seal"] = new engine.RulesElement({
    name: "Memory Seal",
    type: "Ritual",
    id: "ID_FMP_RITUAL_114",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=114",
    categories: ["Memory Seal", "ID_FMP_RITUAL_114"]
  });
  byID[te.id] = te;
  
  te = Ritual["Mordenkainen's Ascent"] = new engine.RulesElement({
    name: "Mordenkainen's Ascent",
    type: "Ritual",
    id: "ID_FMP_RITUAL_115",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=115",
    categories: ["Mordenkainen's Ascent", "ID_FMP_RITUAL_115"]
  });
  byID[te.id] = te;
  
  te = Ritual["Mordenkainen's Joining"] = new engine.RulesElement({
    name: "Mordenkainen's Joining",
    type: "Ritual",
    id: "ID_FMP_RITUAL_116",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=116",
    categories: ["Mordenkainen's Joining", "ID_FMP_RITUAL_116"]
  });
  byID[te.id] = te;
  
  te = Ritual["Overland Flight"] = new engine.RulesElement({
    name: "Overland Flight",
    type: "Ritual",
    id: "ID_FMP_RITUAL_117",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=117",
    categories: ["Overland Flight", "ID_FMP_RITUAL_117"]
  });
  byID[te.id] = te;
  
  te = Ritual["Planar Sending"] = new engine.RulesElement({
    name: "Planar Sending",
    type: "Ritual",
    id: "ID_FMP_RITUAL_120",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=120",
    categories: ["Planar Sending", "ID_FMP_RITUAL_120"]
  });
  byID[te.id] = te;
  
  te = Ritual["Preservation"] = new engine.RulesElement({
    name: "Preservation",
    type: "Ritual",
    id: "ID_FMP_RITUAL_119",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=119",
    categories: ["Preservation", "ID_FMP_RITUAL_119"]
  });
  byID[te.id] = te;
  
  te = Ritual["Safeguard"] = new engine.RulesElement({
    name: "Safeguard",
    type: "Ritual",
    id: "ID_FMP_RITUAL_121",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=121",
    categories: ["Safeguard", "ID_FMP_RITUAL_121"]
  });
  byID[te.id] = te;
  
  te = Ritual["Scribe"] = new engine.RulesElement({
    name: "Scribe",
    type: "Ritual",
    id: "ID_FMP_RITUAL_122",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=122",
    categories: ["Scribe", "ID_FMP_RITUAL_122"]
  });
  byID[te.id] = te;
  
  te = Ritual["Signal of Pursuit"] = new engine.RulesElement({
    name: "Signal of Pursuit",
    type: "Ritual",
    id: "ID_FMP_RITUAL_123",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=123",
    categories: ["Signal of Pursuit", "ID_FMP_RITUAL_123"]
  });
  byID[te.id] = te;
  
  te = Ritual["Stasis Shell"] = new engine.RulesElement({
    name: "Stasis Shell",
    type: "Ritual",
    id: "ID_FMP_RITUAL_124",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=124",
    categories: ["Stasis Shell", "ID_FMP_RITUAL_124"]
  });
  byID[te.id] = te;
  
  te = Ritual["Teleport Catcher"] = new engine.RulesElement({
    name: "Teleport Catcher",
    type: "Ritual",
    id: "ID_FMP_RITUAL_125",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=125",
    categories: ["Teleport Catcher", "ID_FMP_RITUAL_125"]
  });
  byID[te.id] = te;
  
  te = Ritual["Tenser's Binding"] = new engine.RulesElement({
    name: "Tenser's Binding",
    type: "Ritual",
    id: "ID_FMP_RITUAL_126",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=126",
    categories: ["Tenser's Binding", "ID_FMP_RITUAL_126"]
  });
  byID[te.id] = te;
  
  te = Ritual["Tenser's Lift"] = new engine.RulesElement({
    name: "Tenser's Lift",
    type: "Ritual",
    id: "ID_FMP_RITUAL_127",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=127",
    categories: ["Tenser's Lift", "ID_FMP_RITUAL_127"]
  });
  byID[te.id] = te;
  
  te = Ritual["True Sending"] = new engine.RulesElement({
    name: "True Sending",
    type: "Ritual",
    id: "ID_FMP_RITUAL_128",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=128",
    categories: ["True Sending", "ID_FMP_RITUAL_128"]
  });
  byID[te.id] = te;
  
  te = Ritual["Visage of Life"] = new engine.RulesElement({
    name: "Visage of Life",
    type: "Ritual",
    id: "ID_FMP_RITUAL_129",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=129",
    categories: ["Visage of Life", "ID_FMP_RITUAL_129"]
  });
  byID[te.id] = te;
  
  te = Ritual["Voicecatcher Veil"] = new engine.RulesElement({
    name: "Voicecatcher Veil",
    type: "Ritual",
    id: "ID_FMP_RITUAL_130",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=130",
    categories: ["Voicecatcher Veil", "ID_FMP_RITUAL_130"]
  });
  byID[te.id] = te;
  
  te = Ritual["Wizard's Curtain"] = new engine.RulesElement({
    name: "Wizard's Curtain",
    type: "Ritual",
    id: "ID_FMP_RITUAL_131",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=131",
    categories: ["Wizard's Curtain", "ID_FMP_RITUAL_131"]
  });
  byID[te.id] = te;
  
  te = Ritual["Wizard's Escape"] = new engine.RulesElement({
    name: "Wizard's Escape",
    type: "Ritual",
    id: "ID_FMP_RITUAL_132",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=132",
    categories: ["Wizard's Escape", "ID_FMP_RITUAL_132"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
