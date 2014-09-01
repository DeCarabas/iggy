define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Familiar Mount"] = new engine.RulesElement({
    name: "Familiar Mount",
    type: "Ritual",
    id: "ID_FMP_RITUAL_304",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=304",
    categories: ["Familiar Mount", "ID_FMP_RITUAL_304"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
