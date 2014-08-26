define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Dowsing Rod"] = new engine.RulesElement({
    name: "Scroll of Dowsing Rod",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DOWSING_ROD",
    source: "Primal Power",
    categories: ["Scroll of Dowsing Rod", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DOWSING_ROD"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Eagle's Flight"] = new engine.RulesElement({
    name: "Scroll of Eagle's Flight",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_EAGLE'S_FLIGHT",
    source: "Primal Power",
    categories: ["Scroll of Eagle's Flight", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_EAGLE'S_FLIGHT"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Portend Weather"] = new engine.RulesElement({
    name: "Scroll of Portend Weather",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_PORTEND_WEATHER",
    source: "Primal Power",
    categories: ["Scroll of Portend Weather", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_PORTEND_WEATHER"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Primal Grove"] = new engine.RulesElement({
    name: "Scroll of Primal Grove",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_PRIMAL_GROVE",
    source: "Primal Power",
    categories: ["Scroll of Primal Grove", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_PRIMAL_GROVE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Primal Prison"] = new engine.RulesElement({
    name: "Scroll of Primal Prison",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_PRIMAL_PRISON",
    source: "Primal Power",
    categories: ["Scroll of Primal Prison", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_PRIMAL_PRISON"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Starshine"] = new engine.RulesElement({
    name: "Scroll of Starshine",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_STARSHINE",
    source: "Primal Power",
    categories: ["Scroll of Starshine", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_STARSHINE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Traveler's Camouflage"] = new engine.RulesElement({
    name: "Scroll of Traveler's Camouflage",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TRAVELER'S_CAMOUFLAGE",
    source: "Primal Power",
    categories: ["Scroll of Traveler's Camouflage", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TRAVELER'S_CAMOUFLAGE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Water's Gift"] = new engine.RulesElement({
    name: "Scroll of Water's Gift",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_WATER'S_GIFT",
    source: "Primal Power",
    categories: ["Scroll of Water's Gift", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_WATER'S_GIFT"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
