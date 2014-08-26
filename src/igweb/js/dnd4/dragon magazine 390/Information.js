define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Information = types['Information'] || (types['Information'] = {});
  te = Information["Circle of Smoke and Whispers"] = new engine.RulesElement({
    name: "Circle of Smoke and Whispers",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_CIRCLE_OF_SMOKE_AND_WHISPERS",
    source: "Dragon Magazine 390",
    categories: ["Circle of Smoke and Whispers", "ID_INTERNAL_INFORMATION_CIRCLE_OF_SMOKE_AND_WHISPERS"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
