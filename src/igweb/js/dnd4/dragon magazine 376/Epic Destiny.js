define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Free Soul"] = new engine.RulesElement({
    name: "Free Soul",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_452",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=452",
    categories: ["Free Soul", "ID_FMP_EPIC_DESTINY_452"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1873"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1874"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1875"]);
      model.grant(model.elements.id["ID_FMP_POWER_8282"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
