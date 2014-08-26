define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Comrades' Succor"] = new engine.RulesElement({
    name: "Scroll of Comrades' Succor",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_COMRADES'_SUCCOR",
    source: "Dragon Magazine 380",
    categories: ["Scroll of Comrades' Succor", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_COMRADES'_SUCCOR"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Ghost Walk"] = new engine.RulesElement({
    name: "Scroll of Ghost Walk",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_GHOST_WALK",
    source: "Dragon Magazine 380",
    categories: ["Scroll of Ghost Walk", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_GHOST_WALK"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Hunter's Blessing"] = new engine.RulesElement({
    name: "Scroll of Hunter's Blessing",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_HUNTER'S_BLESSING",
    source: "Dragon Magazine 380",
    categories: ["Scroll of Hunter's Blessing", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_HUNTER'S_BLESSING"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Hunter's Curse"] = new engine.RulesElement({
    name: "Scroll of Hunter's Curse",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_HUNTER'S_CURSE",
    source: "Dragon Magazine 380",
    categories: ["Scroll of Hunter's Curse", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_HUNTER'S_CURSE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Spirit Fetch"] = new engine.RulesElement({
    name: "Scroll of Spirit Fetch",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SPIRIT_FETCH",
    source: "Dragon Magazine 380",
    categories: ["Scroll of Spirit Fetch", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SPIRIT_FETCH"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Vistani Passkey"] = new engine.RulesElement({
    name: "Scroll of Vistani Passkey",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_VISTANI_PASSKEY",
    source: "Dragon Magazine 380",
    categories: ["Scroll of Vistani Passkey", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_VISTANI_PASSKEY"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
