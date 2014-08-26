define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Summon Demon"] = new engine.RulesElement({
    name: "Scroll of Summon Demon",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SUMMON_DEMON",
    source: "Demonomicon",
    categories: ["Scroll of Summon Demon", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SUMMON_DEMON"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
