define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Dark Gift of the Undying"] = new engine.RulesElement({
    name: "Scroll of Dark Gift of the Undying",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DARK_GIFT_OF_THE_UNDYING",
    source: "Monster Manual",
    categories: ["Scroll of Dark Gift of the Undying", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DARK_GIFT_OF_THE_UNDYING"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Lich Transformation"] = new engine.RulesElement({
    name: "Scroll of Lich Transformation",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_LICH_TRANSFORMATION",
    source: "Monster Manual",
    categories: ["Scroll of Lich Transformation", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_LICH_TRANSFORMATION"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
