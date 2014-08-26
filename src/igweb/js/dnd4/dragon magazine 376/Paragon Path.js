define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Avenging Haunt"] = new engine.RulesElement({
    name: "Avenging Haunt",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_517",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=517",
    categories: ["Avenging Haunt", "ID_FMP_PARAGON_PATH_517"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1869"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1871"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1872"]);
      model.grant(model.elements.id["ID_FMP_POWER_10030"]);
      model.grant(model.elements.id["ID_FMP_POWER_10031"]);
      model.grant(model.elements.id["ID_FMP_POWER_10032"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Blessed Psalmist"] = new engine.RulesElement({
    name: "Blessed Psalmist",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_453",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=453",
    categories: ["Blessed Psalmist", "ID_FMP_PARAGON_PATH_453"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1881"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1882"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1883"]);
      model.grant(model.elements.id["ID_FMP_POWER_9260"]);
      model.grant(model.elements.id["ID_FMP_POWER_9261"]);
      model.grant(model.elements.id["ID_FMP_POWER_9262"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Daring Blade"] = new engine.RulesElement({
    name: "Daring Blade",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_454",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=454",
    categories: ["Daring Blade", "ID_FMP_PARAGON_PATH_454"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1884"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_740"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1885"]);
      model.grant(model.elements.id["ID_FMP_POWER_9263"]);
      model.grant(model.elements.id["ID_FMP_POWER_9264"]);
      model.grant(model.elements.id["ID_FMP_POWER_9265"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Mythic Skald"] = new engine.RulesElement({
    name: "Mythic Skald",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_455",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=455",
    categories: ["Mythic Skald", "ID_FMP_PARAGON_PATH_455"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1886"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1887"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1888"]);
      model.grant(model.elements.id["ID_FMP_POWER_9266"]);
      model.grant(model.elements.id["ID_FMP_POWER_9267"]);
      model.grant(model.elements.id["ID_FMP_POWER_9268"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Resourceful Magician"] = new engine.RulesElement({
    name: "Resourceful Magician",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_456",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=456",
    categories: ["Resourceful Magician", "ID_FMP_PARAGON_PATH_456"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1889"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1890"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1891"]);
      model.grant(model.elements.id["ID_FMP_POWER_9269"]);
      model.grant(model.elements.id["ID_FMP_POWER_9270"]);
      model.grant(model.elements.id["ID_FMP_POWER_9271"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
