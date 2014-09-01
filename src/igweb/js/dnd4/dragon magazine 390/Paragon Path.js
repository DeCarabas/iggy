define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Battle Champion"] = new engine.RulesElement({
    name: "Battle Champion",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_770",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=770",
    categories: ["Battle Champion", "ID_FMP_PARAGON_PATH_770"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3163"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3164"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3165"]);
      model.grant(model.elements.id["ID_FMP_POWER_13450"]);
      model.grant(model.elements.id["ID_FMP_POWER_13451"]);
      model.grant(model.elements.id["ID_FMP_POWER_13452"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Champion of the Vigil"] = new engine.RulesElement({
    name: "Champion of the Vigil",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_748",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=748",
    categories: ["Champion of the Vigil", "ID_FMP_PARAGON_PATH_748"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3000"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3001"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3002"]);
      model.grant(model.elements.id["ID_FMP_POWER_13241"]);
      model.grant(model.elements.id["ID_FMP_POWER_13242"]);
      model.grant(model.elements.id["ID_FMP_POWER_13243"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Freedom Fighter"] = new engine.RulesElement({
    name: "Freedom Fighter",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_769",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=769",
    categories: ["Freedom Fighter", "ID_FMP_PARAGON_PATH_769"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3159"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3160"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3161"]);
      model.grant(model.elements.id["ID_FMP_POWER_13439"]);
      model.grant(model.elements.id["ID_FMP_POWER_13440"]);
      model.grant(model.elements.id["ID_FMP_POWER_13441"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Sainted General"] = new engine.RulesElement({
    name: "Sainted General",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_771",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=771",
    categories: ["Sainted General", "ID_FMP_PARAGON_PATH_771"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3166"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3167"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3168"]);
      model.grant(model.elements.id["ID_FMP_POWER_13453"]);
      model.grant(model.elements.id["ID_FMP_POWER_13454"]);
      model.grant(model.elements.id["ID_FMP_POWER_13455"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Warpath Berserker"] = new engine.RulesElement({
    name: "Warpath Berserker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_772",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=772",
    categories: ["Warpath Berserker", "ID_FMP_PARAGON_PATH_772"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3169"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3170"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3171"]);
      model.grant(model.elements.id["ID_FMP_POWER_13456"]);
      model.grant(model.elements.id["ID_FMP_POWER_13457"]);
      model.grant(model.elements.id["ID_FMP_POWER_13458"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Witchmaster"] = new engine.RulesElement({
    name: "Witchmaster",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_773",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=773",
    categories: ["Witchmaster", "ID_FMP_PARAGON_PATH_773"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3172"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3173"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3174"]);
      model.grant(model.elements.id["ID_FMP_POWER_13459"]);
      model.grant(model.elements.id["ID_FMP_POWER_13460"]);
      model.grant(model.elements.id["ID_FMP_POWER_13461"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
