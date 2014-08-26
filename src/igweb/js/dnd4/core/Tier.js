define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Tier = types['Tier'] || (types['Tier'] = {});
  te = Tier["Epic"] = new engine.RulesElement({
    name: "Epic",
    type: "Tier",
    id: "ID_INTERNAL_TIER_EPIC",
    source: "Core",
    categories: ["Epic", "ID_INTERNAL_TIER_EPIC"]
  });
  byID[te.id] = te;
  
  te = Tier["Heroic"] = new engine.RulesElement({
    name: "Heroic",
    type: "Tier",
    id: "ID_INTERNAL_TIER_HEROIC",
    source: "Core",
    categories: ["Heroic", "ID_INTERNAL_TIER_HEROIC"]
  });
  byID[te.id] = te;
  
  te = Tier["Paragon"] = new engine.RulesElement({
    name: "Paragon",
    type: "Tier",
    id: "ID_INTERNAL_TIER_PARAGON",
    source: "Core",
    categories: ["Paragon", "ID_INTERNAL_TIER_PARAGON"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
