define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Avatar of Io"] = new engine.RulesElement({
    name: "Avatar of Io",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_538",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=538",
    categories: ["Avatar of Io", "ID_FMP_EPIC_DESTINY_538"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2163"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2164"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2165"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2166"]);
      model.grant(model.elements.id["ID_FMP_POWER_10390"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
