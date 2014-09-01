define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Arbiter of Forgotten Justice"] = new engine.RulesElement({
    name: "Arbiter of Forgotten Justice",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_528",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=528",
    categories: ["Arbiter of Forgotten Justice", "ID_FMP_PARAGON_PATH_528"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2133"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2134"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2135"]);
      model.grant(model.elements.id["ID_FMP_POWER_10269"]);
      model.grant(model.elements.id["ID_FMP_POWER_10270"]);
      model.grant(model.elements.id["ID_FMP_POWER_10271"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Arcane Armorer"] = new engine.RulesElement({
    name: "Arcane Armorer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_526",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=526",
    categories: ["Arcane Armorer", "ID_FMP_PARAGON_PATH_526"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2127"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2128"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2129"]);
      model.grant(model.elements.id["ID_FMP_POWER_10230"]);
      model.grant(model.elements.id["ID_FMP_POWER_10231"]);
      model.grant(model.elements.id["ID_FMP_POWER_10233"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Spell Commander"] = new engine.RulesElement({
    name: "Spell Commander",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_527",
    source: "Dragon Magazine 381",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=527",
    categories: ["Spell Commander", "ID_FMP_PARAGON_PATH_527"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2130"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2131"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2132"]);
      model.grant(model.elements.id["ID_FMP_POWER_10234"]);
      model.grant(model.elements.id["ID_FMP_POWER_10235"]);
      model.grant(model.elements.id["ID_FMP_POWER_10237"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
