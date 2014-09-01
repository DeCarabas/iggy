define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Throw Grapple"] = new engine.RulesElement({
    name: "Throw Grapple",
    type: "Power",
    id: "ID_FMP_POWER_12831",
    source: "Dungeon Magazine 180",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=12831",
    categories: ["Throw Grapple", "ID_FMP_POWER_12831", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
