define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Dark Gift of the Undying"] = new engine.RulesElement({
    name: "Dark Gift of the Undying",
    type: "Ritual",
    id: "ID_FMP_RITUAL_72",
    source: "Monster Manual",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=72",
    categories: ["Dark Gift of the Undying", "ID_FMP_RITUAL_72"]
  });
  byID[te.id] = te;
  
  te = Ritual["Lich Transformation"] = new engine.RulesElement({
    name: "Lich Transformation",
    type: "Ritual",
    id: "ID_FMP_RITUAL_71",
    source: "Monster Manual",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=71",
    categories: ["Lich Transformation", "ID_FMP_RITUAL_71"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
