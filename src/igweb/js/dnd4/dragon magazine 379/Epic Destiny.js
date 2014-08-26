define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Perfect Slayer"] = new engine.RulesElement({
    name: "Perfect Slayer",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_471",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=471",
    categories: ["Perfect Slayer", "ID_FMP_EPIC_DESTINY_471"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1939"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1940"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1941"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1942"]);
      model.grant(model.elements.id["ID_FMP_POWER_9499"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
