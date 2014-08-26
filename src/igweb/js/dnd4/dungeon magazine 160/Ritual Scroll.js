define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Seal Portal"] = new engine.RulesElement({
    name: "Scroll of Seal Portal",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SEAL_PORTAL",
    source: "Dungeon Magazine 160",
    categories: ["Scroll of Seal Portal", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SEAL_PORTAL"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
