define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Arcane Barrier"] = new engine.RulesElement({
    name: "Scroll of Arcane Barrier",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ARCANE_BARRIER",
    source: "Dragon Magazine 366,Dragon Magazine 366",
    categories: ["Scroll of Arcane Barrier", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ARCANE_BARRIER"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Banish Vermin"] = new engine.RulesElement({
    name: "Scroll of Banish Vermin",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_BANISH_VERMIN",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Banish Vermin", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_BANISH_VERMIN"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Battlefield Elocution"] = new engine.RulesElement({
    name: "Scroll of Battlefield Elocution",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_BATTLEFIELD_ELOCUTION",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Battlefield Elocution", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_BATTLEFIELD_ELOCUTION"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Bolster Object"] = new engine.RulesElement({
    name: "Scroll of Bolster Object",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_BOLSTER_OBJECT",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Bolster Object", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_BOLSTER_OBJECT"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Chameleon's Cloak"] = new engine.RulesElement({
    name: "Scroll of Chameleon's Cloak",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CHAMELEON'S_CLOAK",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Chameleon's Cloak", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CHAMELEON'S_CLOAK"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Conceal Object"] = new engine.RulesElement({
    name: "Scroll of Conceal Object",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CONCEAL_OBJECT",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Conceal Object", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CONCEAL_OBJECT"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Deceive Sensor"] = new engine.RulesElement({
    name: "Scroll of Deceive Sensor",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DECEIVE_SENSOR",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Deceive Sensor", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DECEIVE_SENSOR"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Delay Affliction"] = new engine.RulesElement({
    name: "Scroll of Delay Affliction",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DELAY_AFFLICTION",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Delay Affliction", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DELAY_AFFLICTION"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Delver's Fire"] = new engine.RulesElement({
    name: "Scroll of Delver's Fire",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DELVER'S_FIRE",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Delver's Fire", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DELVER'S_FIRE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Earthen Ramparts"] = new engine.RulesElement({
    name: "Scroll of Earthen Ramparts",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_EARTHEN_RAMPARTS",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Earthen Ramparts", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_EARTHEN_RAMPARTS"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Excavation"] = new engine.RulesElement({
    name: "Scroll of Excavation",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_EXCAVATION",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Excavation", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_EXCAVATION"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Explorer's Fire"] = new engine.RulesElement({
    name: "Scroll of Explorer's Fire",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_EXPLORER'S_FIRE",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Explorer's Fire", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_EXPLORER'S_FIRE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Fastidiousness"] = new engine.RulesElement({
    name: "Scroll of Fastidiousness",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FASTIDIOUSNESS",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Fastidiousness", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FASTIDIOUSNESS"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Memory Seal"] = new engine.RulesElement({
    name: "Scroll of Memory Seal",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_MEMORY_SEAL",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Memory Seal", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_MEMORY_SEAL"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Mordenkainen's Ascent"] = new engine.RulesElement({
    name: "Scroll of Mordenkainen's Ascent",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_MORDENKAINEN'S_ASCENT",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Mordenkainen's Ascent", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_MORDENKAINEN'S_ASCENT"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Mordenkainen's Joining"] = new engine.RulesElement({
    name: "Scroll of Mordenkainen's Joining",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_MORDENKAINEN'S_JOINING",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Mordenkainen's Joining", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_MORDENKAINEN'S_JOINING"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Overland Flight"] = new engine.RulesElement({
    name: "Scroll of Overland Flight",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_OVERLAND_FLIGHT",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Overland Flight", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_OVERLAND_FLIGHT"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Planar Sending"] = new engine.RulesElement({
    name: "Scroll of Planar Sending",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_PLANAR_SENDING",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Planar Sending", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_PLANAR_SENDING"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Preservation"] = new engine.RulesElement({
    name: "Scroll of Preservation",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_PRESERVATION",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Preservation", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_PRESERVATION"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Safeguard"] = new engine.RulesElement({
    name: "Scroll of Safeguard",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SAFEGUARD",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Safeguard", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SAFEGUARD"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Scribe"] = new engine.RulesElement({
    name: "Scroll of Scribe",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SCRIBE",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Scribe", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SCRIBE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Signal of Pursuit"] = new engine.RulesElement({
    name: "Scroll of Signal of Pursuit",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SIGNAL_OF_PURSUIT",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Signal of Pursuit", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SIGNAL_OF_PURSUIT"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Stasis Shell"] = new engine.RulesElement({
    name: "Scroll of Stasis Shell",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_STASIS_SHELL",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Stasis Shell", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_STASIS_SHELL"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Teleport Catcher"] = new engine.RulesElement({
    name: "Scroll of Teleport Catcher",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TELEPORT_CATCHER",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Teleport Catcher", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TELEPORT_CATCHER"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Tenser's Binding"] = new engine.RulesElement({
    name: "Scroll of Tenser's Binding",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TENSER'S_BINDING",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Tenser's Binding", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TENSER'S_BINDING"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Tenser's Lift"] = new engine.RulesElement({
    name: "Scroll of Tenser's Lift",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TENSER'S_LIFT",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Tenser's Lift", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TENSER'S_LIFT"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of True Sending"] = new engine.RulesElement({
    name: "Scroll of True Sending",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TRUE_SENDING",
    source: "Dragon Magazine 366",
    categories: ["Scroll of True Sending", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TRUE_SENDING"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Visage of Life"] = new engine.RulesElement({
    name: "Scroll of Visage of Life",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_VISAGE_OF_LIFE",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Visage of Life", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_VISAGE_OF_LIFE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Voicecatcher Veil"] = new engine.RulesElement({
    name: "Scroll of Voicecatcher Veil",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_VOICECATCHER_VEIL",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Voicecatcher Veil", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_VOICECATCHER_VEIL"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Wizard's Curtain"] = new engine.RulesElement({
    name: "Scroll of Wizard's Curtain",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_WIZARD'S_CURTAIN",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Wizard's Curtain", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_WIZARD'S_CURTAIN"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Wizard's Escape"] = new engine.RulesElement({
    name: "Scroll of Wizard's Escape",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_WIZARD'S_ESCAPE",
    source: "Dragon Magazine 366",
    categories: ["Scroll of Wizard's Escape", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_WIZARD'S_ESCAPE"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
