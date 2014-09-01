define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Heir to the Empire"] = new engine.RulesElement({
    name: "Heir to the Empire",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_572",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/epicdestiny.aspx?id=572",
    categories: ["Heir to the Empire", "ID_FMP_EPIC_DESTINY_572"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2270"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2271"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2272"]);
      model.grant(model.elements.id["ID_FMP_POWER_10880"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
