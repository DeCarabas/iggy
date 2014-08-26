define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Airspur"] = new engine.RulesElement({
    name: "Airspur",
    type: "Background",
    id: "ID_FMP_BACKGROUND_595",
    source: "Dungeon Magazine 172",
    categories: ["Airspur", "ID_FMP_BACKGROUND_595"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
