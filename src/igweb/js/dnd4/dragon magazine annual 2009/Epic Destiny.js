define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Punisher of the Gods"] = new engine.RulesElement({
    name: "Punisher of the Gods",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_300",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=300",
    categories: ["Punisher of the Gods", "ID_FMP_EPIC_DESTINY_300"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1338"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1339"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1340"]);
      model.grant(model.elements.id["ID_FMP_POWER_6604"]);
      model.grant(model.elements.id["ID_FMP_POWER_6605"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Radiant One"] = new engine.RulesElement({
    name: "Radiant One",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_157",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=157",
    categories: ["Radiant One", "ID_FMP_EPIC_DESTINY_157"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_881"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_882"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_880"]);
      model.grant(model.elements.id["ID_FMP_POWER_4255"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
