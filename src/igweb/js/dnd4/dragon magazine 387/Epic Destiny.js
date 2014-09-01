define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Ceaseless Guardian"] = new engine.RulesElement({
    name: "Ceaseless Guardian",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_689",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=689",
    categories: ["Ceaseless Guardian", "ID_FMP_EPIC_DESTINY_689"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2692"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2693"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2694"]);
      model.grant(model.elements.id["ID_FMP_POWER_12498"]);
      model.grant(model.elements.id["ID_FMP_POWER_12499"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
