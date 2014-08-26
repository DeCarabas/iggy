define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Reborn Champion"] = new engine.RulesElement({
    name: "Reborn Champion",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_154",
    source: "Dragon Magazine 365",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=154",
    categories: ["Reborn Champion", "ID_FMP_EPIC_DESTINY_154"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_870"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_871"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_872"]);
      model.grant(model.elements.id["ID_FMP_POWER_4211"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
