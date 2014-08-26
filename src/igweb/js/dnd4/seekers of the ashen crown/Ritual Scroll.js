define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Rite of Arkentaash"] = new engine.RulesElement({
    name: "Scroll of Rite of Arkentaash",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_RITE_OF_ARKENTAASH",
    source: "Seekers of the Ashen Crown",
    categories: ["Scroll of Rite of Arkentaash", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_RITE_OF_ARKENTAASH"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
