define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Pack Master"] = new engine.RulesElement({
    name: "Pack Master",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_133",
    source: "Dragon Magazine 364",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=133",
    categories: ["Pack Master", "ID_FMP_PARAGON_PATH_133"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_797"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_798"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_799"]);
      model.grant(model.elements.id["ID_FMP_POWER_3226"]);
      model.grant(model.elements.id["ID_FMP_POWER_3227"]);
      model.grant(model.elements.id["ID_FMP_POWER_3228"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Warforged Lifeseeker"] = new engine.RulesElement({
    name: "Warforged Lifeseeker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_132",
    source: "Dragon Magazine 364",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=132",
    categories: ["Warforged Lifeseeker", "ID_FMP_PARAGON_PATH_132"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_794"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_795"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_796"]);
      model.grant(model.elements.id["ID_FMP_POWER_3154"]);
      model.grant(model.elements.id["ID_FMP_POWER_3155"]);
      model.grant(model.elements.id["ID_FMP_POWER_3156"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
