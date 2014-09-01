define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Rite of Arkentaash"] = new engine.RulesElement({
    name: "Rite of Arkentaash",
    type: "Ritual",
    id: "ID_FMP_RITUAL_284",
    source: "Seekers of the Ashen Crown",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=284",
    categories: ["Rite of Arkentaash", "ID_FMP_RITUAL_284"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
