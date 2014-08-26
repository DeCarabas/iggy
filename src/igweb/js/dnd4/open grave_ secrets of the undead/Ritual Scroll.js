define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Corpse Gate"] = new engine.RulesElement({
    name: "Scroll of Corpse Gate",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CORPSE_GATE",
    source: "Open Grave: Secrets of the Undead",
    categories: ["Scroll of Corpse Gate", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CORPSE_GATE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Corpse Light"] = new engine.RulesElement({
    name: "Scroll of Corpse Light",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CORPSE_LIGHT",
    source: "Open Grave: Secrets of the Undead",
    categories: ["Scroll of Corpse Light", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CORPSE_LIGHT"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Gravesight"] = new engine.RulesElement({
    name: "Scroll of Gravesight",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_GRAVESIGHT",
    source: "Open Grave: Secrets of the Undead",
    categories: ["Scroll of Gravesight", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_GRAVESIGHT"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Last Sight Vision"] = new engine.RulesElement({
    name: "Scroll of Last Sight Vision",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_LAST_SIGHT_VISION",
    source: "Open Grave: Secrets of the Undead",
    categories: ["Scroll of Last Sight Vision", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_LAST_SIGHT_VISION"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Skull Watch"] = new engine.RulesElement({
    name: "Scroll of Skull Watch",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SKULL_WATCH",
    source: "Open Grave: Secrets of the Undead",
    categories: ["Scroll of Skull Watch", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SKULL_WATCH"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Undead Servitor"] = new engine.RulesElement({
    name: "Scroll of Undead Servitor",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_UNDEAD_SERVITOR",
    source: "Open Grave: Secrets of the Undead",
    categories: ["Scroll of Undead Servitor", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_UNDEAD_SERVITOR"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Undead Ward"] = new engine.RulesElement({
    name: "Scroll of Undead Ward",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_UNDEAD_WARD",
    source: "Open Grave: Secrets of the Undead",
    categories: ["Scroll of Undead Ward", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_UNDEAD_WARD"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
