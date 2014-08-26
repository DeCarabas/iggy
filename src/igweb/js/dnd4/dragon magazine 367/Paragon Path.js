define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Curseborn"] = new engine.RulesElement({
    name: "Curseborn",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_212",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=212",
    categories: ["Curseborn", "ID_FMP_PARAGON_PATH_212"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1045"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1046"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1047"]);
      model.grant(model.elements.id["ID_FMP_POWER_4791"]);
      model.grant(model.elements.id["ID_FMP_POWER_4792"]);
      model.grant(model.elements.id["ID_FMP_POWER_4793"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
