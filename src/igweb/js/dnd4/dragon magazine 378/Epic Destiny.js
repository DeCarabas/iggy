define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Bahamut's Vessel"] = new engine.RulesElement({
    name: "Bahamut's Vessel",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_464",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=464",
    categories: ["Bahamut's Vessel", "ID_FMP_EPIC_DESTINY_464"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1914"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1915"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1916"]);
      model.grant(model.elements.id["ID_FMP_POWER_9396"]);
      model.grant(model.elements.id["ID_FMP_POWER_9488"]);
      model.grant(model.elements.id["ID_FMP_POWER_9489"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
