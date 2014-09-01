define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Raven Knight"] = new engine.RulesElement({
    name: "Raven Knight",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_523",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=523",
    categories: ["Raven Knight", "ID_FMP_EPIC_DESTINY_523"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2116"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2117"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2115"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2118"]);
      model.grant(model.elements.id["ID_FMP_POWER_10110"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
