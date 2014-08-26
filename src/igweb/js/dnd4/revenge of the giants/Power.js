define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Champion's Step"] = new engine.RulesElement({
    name: "Champion's Step",
    type: "Power",
    id: "ID_FMP_POWER_9554",
    source: "Revenge of the Giants",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9554",
    categories: ["Champion's Step", "ID_FMP_POWER_9554", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
