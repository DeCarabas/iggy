define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Hell's Keeper"] = new engine.RulesElement({
    name: "Hell's Keeper",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_568",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=568",
    categories: ["Hell's Keeper", "ID_FMP_PARAGON_PATH_568"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2257"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2258"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2259"]);
      model.grant(model.elements.id["ID_FMP_POWER_10865"]);
      model.grant(model.elements.id["ID_FMP_POWER_10866"]);
      model.grant(model.elements.id["ID_FMP_POWER_10867"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Infernal Eye"] = new engine.RulesElement({
    name: "Infernal Eye",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_571",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=571",
    categories: ["Infernal Eye", "ID_FMP_PARAGON_PATH_571"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2267"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2268"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2269"]);
      model.grant(model.elements.id["ID_FMP_POWER_10874"]);
      model.grant(model.elements.id["ID_FMP_POWER_10878"]);
      model.grant(model.elements.id["ID_FMP_POWER_10879"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Lost Soul"] = new engine.RulesElement({
    name: "Lost Soul",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_564",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=564",
    categories: ["Lost Soul", "ID_FMP_PARAGON_PATH_564"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2254"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2255"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2256"]);
      model.grant(model.elements.id["ID_FMP_POWER_10862"]);
      model.grant(model.elements.id["ID_FMP_POWER_10863"]);
      model.grant(model.elements.id["ID_FMP_POWER_10864"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Redeemer of the Damned"] = new engine.RulesElement({
    name: "Redeemer of the Damned",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_570",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=570",
    categories: ["Redeemer of the Damned", "ID_FMP_PARAGON_PATH_570"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2264"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2265"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2266"]);
      model.grant(model.elements.id["ID_FMP_POWER_10871"]);
      model.grant(model.elements.id["ID_FMP_POWER_10872"]);
      model.grant(model.elements.id["ID_FMP_POWER_10873"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Turathi Hell-Kite"] = new engine.RulesElement({
    name: "Turathi Hell-Kite",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_569",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=569",
    categories: ["Turathi Hell-Kite", "ID_FMP_PARAGON_PATH_569"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2261"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2262"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2263"]);
      model.grant(model.elements.id["ID_FMP_POWER_10868"]);
      model.grant(model.elements.id["ID_FMP_POWER_10869"]);
      model.grant(model.elements.id["ID_FMP_POWER_10870"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
