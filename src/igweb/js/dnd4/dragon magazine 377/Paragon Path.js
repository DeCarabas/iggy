define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Familiar Bloodsmith"] = new engine.RulesElement({
    name: "Familiar Bloodsmith",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_460",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=460",
    categories: ["Familiar Bloodsmith", "ID_FMP_PARAGON_PATH_460"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1903"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1902"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1901"]);
      model.grant(model.elements.id["ID_FMP_POWER_9291"]);
      model.grant(model.elements.id["ID_FMP_POWER_9292"]);
      model.grant(model.elements.id["ID_FMP_POWER_9293"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Vengeful Crusader"] = new engine.RulesElement({
    name: "Vengeful Crusader",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_459",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=459",
    categories: ["Vengeful Crusader", "ID_FMP_PARAGON_PATH_459"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1898"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1899"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1900"]);
      model.grant(model.elements.id["ID_FMP_POWER_9289"]);
      model.grant(model.elements.id["ID_FMP_POWER_9290"]);
      model.grant(model.elements.id["ID_FMP_POWER_9294"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Watcher of Vengeance"] = new engine.RulesElement({
    name: "Watcher of Vengeance",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_458",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=458",
    categories: ["Watcher of Vengeance", "ID_FMP_PARAGON_PATH_458"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1895"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1896"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1897"]);
      model.grant(model.elements.id["ID_FMP_POWER_9284"]);
      model.grant(model.elements.id["ID_FMP_POWER_9285"]);
      model.grant(model.elements.id["ID_FMP_POWER_9287"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Zealous Demagogue"] = new engine.RulesElement({
    name: "Zealous Demagogue",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_457",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=457",
    categories: ["Zealous Demagogue", "ID_FMP_PARAGON_PATH_457"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1892"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1893"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1894"]);
      model.grant(model.elements.id["ID_FMP_POWER_9280"]);
      model.grant(model.elements.id["ID_FMP_POWER_9281"]);
      model.grant(model.elements.id["ID_FMP_POWER_9282"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
