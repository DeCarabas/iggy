(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Battle Champion"] = new RulesElement({
    name: "Battle Champion",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_770",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=770",
    categories: ["Battle Champion", "ID_FMP_PARAGON_PATH_770"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3163"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3164"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3165"]);
      model.grant(elements.id["ID_FMP_POWER_13450"]);
      model.grant(elements.id["ID_FMP_POWER_13451"]);
      model.grant(elements.id["ID_FMP_POWER_13452"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Champion of the Vigil"] = new RulesElement({
    name: "Champion of the Vigil",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_748",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=748",
    categories: ["Champion of the Vigil", "ID_FMP_PARAGON_PATH_748"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3000"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3001"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3002"]);
      model.grant(elements.id["ID_FMP_POWER_13241"]);
      model.grant(elements.id["ID_FMP_POWER_13242"]);
      model.grant(elements.id["ID_FMP_POWER_13243"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Freedom Fighter"] = new RulesElement({
    name: "Freedom Fighter",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_769",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=769",
    categories: ["Freedom Fighter", "ID_FMP_PARAGON_PATH_769"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3159"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3160"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3161"]);
      model.grant(elements.id["ID_FMP_POWER_13439"]);
      model.grant(elements.id["ID_FMP_POWER_13440"]);
      model.grant(elements.id["ID_FMP_POWER_13441"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Sainted General"] = new RulesElement({
    name: "Sainted General",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_771",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=771",
    categories: ["Sainted General", "ID_FMP_PARAGON_PATH_771"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3166"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3167"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3168"]);
      model.grant(elements.id["ID_FMP_POWER_13453"]);
      model.grant(elements.id["ID_FMP_POWER_13454"]);
      model.grant(elements.id["ID_FMP_POWER_13455"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Warpath Berserker"] = new RulesElement({
    name: "Warpath Berserker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_772",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=772",
    categories: ["Warpath Berserker", "ID_FMP_PARAGON_PATH_772"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3169"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3170"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3171"]);
      model.grant(elements.id["ID_FMP_POWER_13456"]);
      model.grant(elements.id["ID_FMP_POWER_13457"]);
      model.grant(elements.id["ID_FMP_POWER_13458"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Witchmaster"] = new RulesElement({
    name: "Witchmaster",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_773",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=773",
    categories: ["Witchmaster", "ID_FMP_PARAGON_PATH_773"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3172"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3173"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3174"]);
      model.grant(elements.id["ID_FMP_POWER_13459"]);
      model.grant(elements.id["ID_FMP_POWER_13460"]);
      model.grant(elements.id["ID_FMP_POWER_13461"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
