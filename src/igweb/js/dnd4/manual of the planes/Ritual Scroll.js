define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Astral Guide"] = new engine.RulesElement({
    name: "Scroll of Astral Guide",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ASTRAL_GUIDE",
    source: "Manual of the Planes",
    categories: ["Scroll of Astral Guide", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ASTRAL_GUIDE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Astral Sojourn"] = new engine.RulesElement({
    name: "Scroll of Astral Sojourn",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ASTRAL_SOJOURN",
    source: "Manual of the Planes",
    categories: ["Scroll of Astral Sojourn", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ASTRAL_SOJOURN"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Create Teleportation Circle"] = new engine.RulesElement({
    name: "Scroll of Create Teleportation Circle",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CREATE_TELEPORTATION_CIRCLE",
    source: "Manual of the Planes",
    categories: ["Scroll of Create Teleportation Circle", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CREATE_TELEPORTATION_CIRCLE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Demicache"] = new engine.RulesElement({
    name: "Scroll of Demicache",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DEMICACHE",
    source: "Manual of the Planes",
    categories: ["Scroll of Demicache", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DEMICACHE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Elemental Transference"] = new engine.RulesElement({
    name: "Scroll of Elemental Transference",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ELEMENTAL_TRANSFERENCE",
    source: "Manual of the Planes",
    categories: ["Scroll of Elemental Transference", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ELEMENTAL_TRANSFERENCE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Far Sending"] = new engine.RulesElement({
    name: "Scroll of Far Sending",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FAR_SENDING",
    source: "Manual of the Planes",
    categories: ["Scroll of Far Sending", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FAR_SENDING"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Fey Passage"] = new engine.RulesElement({
    name: "Scroll of Fey Passage",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FEY_PASSAGE",
    source: "Manual of the Planes,Dungeon Magazine Annual,Dungeon Magazine 162",
    categories: ["Scroll of Fey Passage", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FEY_PASSAGE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Plane Shift"] = new engine.RulesElement({
    name: "Scroll of Plane Shift",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_PLANE_SHIFT",
    source: "Manual of the Planes",
    categories: ["Scroll of Plane Shift", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_PLANE_SHIFT"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Rope Trick"] = new engine.RulesElement({
    name: "Scroll of Rope Trick",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ROPE_TRICK",
    source: "Manual of the Planes",
    categories: ["Scroll of Rope Trick", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ROPE_TRICK"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Scramble Portal"] = new engine.RulesElement({
    name: "Scroll of Scramble Portal",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SCRAMBLE_PORTAL",
    source: "Manual of the Planes",
    categories: ["Scroll of Scramble Portal", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SCRAMBLE_PORTAL"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Shadow Passage"] = new engine.RulesElement({
    name: "Scroll of Shadow Passage",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SHADOW_PASSAGE",
    source: "Manual of the Planes,Dungeon Magazine 163",
    categories: ["Scroll of Shadow Passage", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SHADOW_PASSAGE"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
