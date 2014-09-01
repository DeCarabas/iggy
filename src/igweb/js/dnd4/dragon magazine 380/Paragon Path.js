define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Enemy of the Abyss"] = new engine.RulesElement({
    name: "Enemy of the Abyss",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_518",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=518",
    categories: ["Enemy of the Abyss", "ID_FMP_PARAGON_PATH_518"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2098"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2099"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2100"]);
      model.grant(model.elements.id["ID_FMP_POWER_10047"]);
      model.grant(model.elements.id["ID_FMP_POWER_10048"]);
      model.grant(model.elements.id["ID_FMP_POWER_10049"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Scion of Absence"] = new engine.RulesElement({
    name: "Scion of Absence",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_519",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=519",
    categories: ["Scion of Absence", "ID_FMP_PARAGON_PATH_519"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2101"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2102"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2104"]);
      model.grant(model.elements.id["ID_FMP_POWER_10051"]);
      model.grant(model.elements.id["ID_FMP_POWER_10052"]);
      model.grant(model.elements.id["ID_FMP_POWER_10053"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Soul of Erosion"] = new engine.RulesElement({
    name: "Soul of Erosion",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_520",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=520",
    categories: ["Soul of Erosion", "ID_FMP_PARAGON_PATH_520"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2105"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2106"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2107"]);
      model.grant(model.elements.id["ID_FMP_POWER_10054"]);
      model.grant(model.elements.id["ID_FMP_POWER_10055"]);
      model.grant(model.elements.id["ID_FMP_POWER_10328"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Soul Reaper"] = new engine.RulesElement({
    name: "Soul Reaper",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_522",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=522",
    categories: ["Soul Reaper", "ID_FMP_PARAGON_PATH_522"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2112"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2113"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2114"]);
      model.grant(model.elements.id["ID_FMP_POWER_10105"]);
      model.grant(model.elements.id["ID_FMP_POWER_10106"]);
      model.grant(model.elements.id["ID_FMP_POWER_10107"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Tome Adept"] = new engine.RulesElement({
    name: "Tome Adept",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_521",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=521",
    categories: ["Tome Adept", "ID_FMP_PARAGON_PATH_521"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2108"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2109"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2110"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2111"]);
      model.grant(model.elements.id["ID_FMP_POWER_10079"]);
      model.grant(model.elements.id["ID_FMP_POWER_10080"]);
      model.grant(model.elements.id["ID_FMP_POWER_10081"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Vistani Execrator"] = new engine.RulesElement({
    name: "Vistani Execrator",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_524",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=524",
    categories: ["Vistani Execrator", "ID_FMP_PARAGON_PATH_524"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2119"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2120"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2121"]);
      model.grant(model.elements.id["ID_FMP_POWER_10112"]);
      model.grant(model.elements.id["ID_FMP_POWER_10113"]);
      model.grant(model.elements.id["ID_FMP_POWER_10114"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
