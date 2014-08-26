define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Aura Mask"] = new engine.RulesElement({
    name: "Scroll of Aura Mask",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_AURA_MASK",
    source: "Draconomicon: Chromatic Dragons",
    categories: ["Scroll of Aura Mask", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_AURA_MASK"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Cauldron's Rebirth"] = new engine.RulesElement({
    name: "Scroll of Cauldron's Rebirth",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CAULDRON'S_REBIRTH",
    source: "Draconomicon: Chromatic Dragons",
    categories: ["Scroll of Cauldron's Rebirth", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CAULDRON'S_REBIRTH"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Chamber of Vulnerability"] = new engine.RulesElement({
    name: "Scroll of Chamber of Vulnerability",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CHAMBER_OF_VULNERABILITY",
    source: "Draconomicon: Chromatic Dragons",
    categories: ["Scroll of Chamber of Vulnerability", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CHAMBER_OF_VULNERABILITY"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Disorienting Portal"] = new engine.RulesElement({
    name: "Scroll of Disorienting Portal",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DISORIENTING_PORTAL",
    source: "Draconomicon: Chromatic Dragons",
    categories: ["Scroll of Disorienting Portal", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DISORIENTING_PORTAL"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Easy Passage"] = new engine.RulesElement({
    name: "Scroll of Easy Passage",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_EASY_PASSAGE",
    source: "Draconomicon: Chromatic Dragons",
    categories: ["Scroll of Easy Passage", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_EASY_PASSAGE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of False Aura"] = new engine.RulesElement({
    name: "Scroll of False Aura",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FALSE_AURA",
    source: "Draconomicon: Chromatic Dragons",
    categories: ["Scroll of False Aura", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FALSE_AURA"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Sentinel Eye"] = new engine.RulesElement({
    name: "Scroll of Sentinel Eye",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SENTINEL_EYE",
    source: "Draconomicon: Chromatic Dragons",
    categories: ["Scroll of Sentinel Eye", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SENTINEL_EYE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Ward the True Name"] = new engine.RulesElement({
    name: "Scroll of Ward the True Name",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_WARD_THE_TRUE_NAME",
    source: "Draconomicon: Chromatic Dragons",
    categories: ["Scroll of Ward the True Name", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_WARD_THE_TRUE_NAME"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
