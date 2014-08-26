define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Shake the Bridge"] = new engine.RulesElement({
    name: "Shake the Bridge",
    type: "Power",
    id: "ID_FMP_POWER_10118",
    source: "Dungeon Magazine 171",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10118",
    categories: ["Shake the Bridge", "ID_FMP_POWER_10118", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
