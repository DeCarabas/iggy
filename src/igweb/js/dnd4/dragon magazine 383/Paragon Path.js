define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Astral Ascendant"] = new engine.RulesElement({
    name: "Astral Ascendant",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_599",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=599",
    categories: ["Astral Ascendant", "ID_FMP_PARAGON_PATH_599"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2375"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2376"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2377"]);
      model.grant(model.elements.id["ID_FMP_POWER_11313"]);
      model.grant(model.elements.id["ID_FMP_POWER_11314"]);
      model.grant(model.elements.id["ID_FMP_POWER_11315"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Breach Warden"] = new engine.RulesElement({
    name: "Breach Warden",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_589",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=589",
    categories: ["Breach Warden", "ID_FMP_PARAGON_PATH_589"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2337"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2338"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2339"]);
      model.grant(model.elements.id["ID_FMP_POWER_11093"]);
      model.grant(model.elements.id["ID_FMP_POWER_11094"]);
      model.grant(model.elements.id["ID_FMP_POWER_11096"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Broken Mirror"] = new engine.RulesElement({
    name: "Broken Mirror",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_597",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=597",
    categories: ["Broken Mirror", "ID_FMP_PARAGON_PATH_597"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2368"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2369"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2370"]);
      model.grant(model.elements.id["ID_FMP_POWER_11300"]);
      model.grant(model.elements.id["ID_FMP_POWER_11301"]);
      model.grant(model.elements.id["ID_FMP_POWER_11302"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Fireforged Champion"] = new engine.RulesElement({
    name: "Fireforged Champion",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_573",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=573",
    categories: ["Fireforged Champion", "ID_FMP_PARAGON_PATH_573"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2288"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2289"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2290"]);
      model.grant(model.elements.id["ID_FMP_POWER_10937"]);
      model.grant(model.elements.id["ID_FMP_POWER_10939"]);
      model.grant(model.elements.id["ID_FMP_POWER_11097"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Umbral Cabalist"] = new engine.RulesElement({
    name: "Umbral Cabalist",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_598",
    source: "Dragon Magazine 383",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=598",
    categories: ["Umbral Cabalist", "ID_FMP_PARAGON_PATH_598"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2372"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2373"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2374"]);
      model.grant(model.elements.id["ID_FMP_POWER_11310"]);
      model.grant(model.elements.id["ID_FMP_POWER_11311"]);
      model.grant(model.elements.id["ID_FMP_POWER_11312"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
