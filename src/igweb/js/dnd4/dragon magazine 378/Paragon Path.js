define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Bladestorm Duelist"] = new engine.RulesElement({
    name: "Bladestorm Duelist",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_461",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=461",
    categories: ["Bladestorm Duelist", "ID_FMP_PARAGON_PATH_461"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1905"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1906"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1907"]);
      model.grant(model.elements.id["ID_FMP_POWER_9372"]);
      model.grant(model.elements.id["ID_FMP_POWER_9373"]);
      model.grant(model.elements.id["ID_FMP_POWER_9374"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Chromatic Bane"] = new engine.RulesElement({
    name: "Chromatic Bane",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_463",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=463",
    categories: ["Chromatic Bane", "ID_FMP_PARAGON_PATH_463"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1911"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1912"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1913"]);
      model.grant(model.elements.id["ID_FMP_POWER_9382"]);
      model.grant(model.elements.id["ID_FMP_POWER_9383"]);
      model.grant(model.elements.id["ID_FMP_POWER_9384"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Storvakal"] = new engine.RulesElement({
    name: "Storvakal",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_465",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=465",
    categories: ["Storvakal", "ID_FMP_PARAGON_PATH_465"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1917"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1918"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1919"]);
      model.grant(model.elements.id["ID_FMP_POWER_9397"]);
      model.grant(model.elements.id["ID_FMP_POWER_9398"]);
      model.grant(model.elements.id["ID_FMP_POWER_9399"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Wrathbearer"] = new engine.RulesElement({
    name: "Wrathbearer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_462",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=462",
    categories: ["Wrathbearer", "ID_FMP_PARAGON_PATH_462"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1908"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1909"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1910"]);
      model.grant(model.elements.id["ID_FMP_POWER_9378"]);
      model.grant(model.elements.id["ID_FMP_POWER_9379"]);
      model.grant(model.elements.id["ID_FMP_POWER_9380"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
