define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Endure Primordial Elements"] = new engine.RulesElement({
    name: "Scroll of Endure Primordial Elements",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ENDURE_PRIMORDIAL_ELEMENTS",
    source: "The Plane Below: Secrets of the Elemental Chaos",
    categories: ["Scroll of Endure Primordial Elements", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ENDURE_PRIMORDIAL_ELEMENTS"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
