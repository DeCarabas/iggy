define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Familiar Mount"] = new engine.RulesElement({
    name: "Scroll of Familiar Mount",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FAMILIAR_MOUNT",
    source: "Dragon Magazine 382",
    categories: ["Scroll of Familiar Mount", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FAMILIAR_MOUNT"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
