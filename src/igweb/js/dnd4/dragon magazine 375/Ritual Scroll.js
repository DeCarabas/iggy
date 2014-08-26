define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Imprint Anaxim"] = new engine.RulesElement({
    name: "Scroll of Imprint Anaxim",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_IMPRINT_ANAXIM",
    source: "Dragon Magazine 375",
    categories: ["Scroll of Imprint Anaxim", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_IMPRINT_ANAXIM"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
