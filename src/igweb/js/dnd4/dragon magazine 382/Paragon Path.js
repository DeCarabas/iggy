define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Darkening Blade"] = new engine.RulesElement({
    name: "Darkening Blade",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_532",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=532",
    categories: ["Darkening Blade", "ID_FMP_PARAGON_PATH_532"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2146"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2147"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2148"]);
      model.grant(model.elements.id["ID_FMP_POWER_10356"]);
      model.grant(model.elements.id["ID_FMP_POWER_10357"]);
      model.grant(model.elements.id["ID_FMP_POWER_10358"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Primal Mapper"] = new engine.RulesElement({
    name: "Primal Mapper",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_539",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=539",
    categories: ["Primal Mapper", "ID_FMP_PARAGON_PATH_539"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2167"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2168"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2169"]);
      model.grant(model.elements.id["ID_FMP_POWER_10391"]);
      model.grant(model.elements.id["ID_FMP_POWER_10392"]);
      model.grant(model.elements.id["ID_FMP_POWER_10393"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Traveler's Harlequin"] = new engine.RulesElement({
    name: "Traveler's Harlequin",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_540",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=540",
    categories: ["Traveler's Harlequin", "ID_FMP_PARAGON_PATH_540"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2171"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2172"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2173"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2174"]);
      model.grant(model.elements.id["ID_FMP_POWER_10398"]);
      model.grant(model.elements.id["ID_FMP_POWER_10399"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
