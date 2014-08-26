define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Deadstalker"] = new engine.RulesElement({
    name: "Deadstalker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_293",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=293",
    categories: ["Deadstalker", "ID_FMP_PARAGON_PATH_293"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1310"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1311"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1312"]);
      model.grant(model.elements.id["ID_FMP_POWER_6586"]);
      model.grant(model.elements.id["ID_FMP_POWER_6587"]);
      model.grant(model.elements.id["ID_FMP_POWER_6588"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
