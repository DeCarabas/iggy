define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Argent Portal"] = new engine.RulesElement({
    name: "Scroll of Argent Portal",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ARGENT_PORTAL",
    source: "Revenge of the Giants",
    categories: ["Scroll of Argent Portal", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ARGENT_PORTAL"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
