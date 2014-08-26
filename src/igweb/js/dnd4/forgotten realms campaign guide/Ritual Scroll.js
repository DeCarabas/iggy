define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Pact of the Iron Ring"] = new engine.RulesElement({
    name: "Scroll of Pact of the Iron Ring",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_PACT_OF_THE_IRON_RING",
    source: "Forgotten Realms Campaign Guide",
    categories: ["Scroll of Pact of the Iron Ring", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_PACT_OF_THE_IRON_RING"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Ritual of Twin Burnings"] = new engine.RulesElement({
    name: "Scroll of Ritual of Twin Burnings",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_RITUAL_OF_TWIN_BURNINGS",
    source: "Forgotten Realms Campaign Guide",
    categories: ["Scroll of Ritual of Twin Burnings", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_RITUAL_OF_TWIN_BURNINGS"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
