define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Raise Beast Companion"] = new engine.RulesElement({
    name: "Scroll of Raise Beast Companion",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_RAISE_BEAST_COMPANION",
    source: "Martial Power",
    categories: ["Scroll of Raise Beast Companion", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_RAISE_BEAST_COMPANION"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
