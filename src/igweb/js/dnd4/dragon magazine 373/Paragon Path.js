define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Blightbeast"] = new engine.RulesElement({
    name: "Blightbeast",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_348",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=348",
    categories: ["Blightbeast", "ID_FMP_PARAGON_PATH_348"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1502"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1503"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1504"]);
      model.grant(model.elements.id["ID_FMP_POWER_7370"]);
      model.grant(model.elements.id["ID_FMP_POWER_7371"]);
      model.grant(model.elements.id["ID_FMP_POWER_7372"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Nightmare Weaver"] = new engine.RulesElement({
    name: "Nightmare Weaver",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_349",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=349",
    categories: ["Nightmare Weaver", "ID_FMP_PARAGON_PATH_349"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1505"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1506"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1507"]);
      model.grant(model.elements.id["ID_FMP_POWER_7373"]);
      model.grant(model.elements.id["ID_FMP_POWER_7375"]);
      model.grant(model.elements.id["ID_FMP_POWER_7376"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
