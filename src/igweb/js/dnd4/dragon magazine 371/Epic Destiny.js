define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Prison of the Winds"] = new engine.RulesElement({
    name: "Prison of the Winds",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_294",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=294",
    categories: ["Prison of the Winds", "ID_FMP_EPIC_DESTINY_294"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1313"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1314"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1315"]);
      model.grant(model.elements.id["ID_FMP_POWER_6589"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
