define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Infernal Quills"] = new engine.RulesElement({
    name: "Infernal Quills",
    type: "Power",
    id: "ID_FMP_POWER_27",
    source: "Monster Manual 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=27",
    categories: ["Infernal Quills", "ID_FMP_POWER_27", "ID_FMP_RACIAL_TRAIT_1523", "Infernal Quils", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
