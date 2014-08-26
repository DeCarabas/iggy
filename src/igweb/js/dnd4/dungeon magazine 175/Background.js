define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Ikemmu"] = new engine.RulesElement({
    name: "Ikemmu",
    type: "Background",
    id: "ID_FMP_BACKGROUND_523",
    source: "Dungeon Magazine 175",
    categories: ["Ikemmu", "ID_FMP_BACKGROUND_523"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
