define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Dragonfoe Ragespell"] = new engine.RulesElement({
    name: "Dragonfoe Ragespell",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_516",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=516",
    categories: ["Dragonfoe Ragespell", "ID_FMP_PARAGON_PATH_516"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2090"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2091"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2092"]);
      model.grant(model.elements.id["ID_FMP_POWER_10024"]);
      model.grant(model.elements.id["ID_FMP_POWER_10025"]);
      model.grant(model.elements.id["ID_FMP_POWER_10026"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Great Weapon Master"] = new engine.RulesElement({
    name: "Great Weapon Master",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_512",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=512",
    categories: ["Great Weapon Master", "ID_FMP_PARAGON_PATH_512"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2077"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2078"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2079"]);
      model.grant(model.elements.id["ID_FMP_POWER_10011"]);
      model.grant(model.elements.id["ID_FMP_POWER_10012"]);
      model.grant(model.elements.id["ID_FMP_POWER_10013"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Guardian of Two Worlds"] = new engine.RulesElement({
    name: "Guardian of Two Worlds",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_511",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=511",
    categories: ["Guardian of Two Worlds", "ID_FMP_PARAGON_PATH_511"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2074"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2075"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2076"]);
      model.grant(model.elements.id["ID_FMP_POWER_9977"]);
      model.grant(model.elements.id["ID_FMP_POWER_9978"]);
      model.grant(model.elements.id["ID_FMP_POWER_9980"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Obsidian Stalker"] = new engine.RulesElement({
    name: "Obsidian Stalker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_467",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=467",
    categories: ["Obsidian Stalker", "ID_FMP_PARAGON_PATH_467"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1924"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1925"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1926"]);
      model.grant(model.elements.id["ID_FMP_POWER_9483"]);
      model.grant(model.elements.id["ID_FMP_POWER_9484"]);
      model.grant(model.elements.id["ID_FMP_POWER_9487"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Shadowblade"] = new engine.RulesElement({
    name: "Shadowblade",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_468",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=468",
    categories: ["Shadowblade", "ID_FMP_PARAGON_PATH_468"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1927"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1928"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1929"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1930"]);
      model.grant(model.elements.id["ID_FMP_POWER_9490"]);
      model.grant(model.elements.id["ID_FMP_POWER_9491"]);
      model.grant(model.elements.id["ID_FMP_POWER_9492"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Shyran Spiritblade"] = new engine.RulesElement({
    name: "Shyran Spiritblade",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_514",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=514",
    categories: ["Shyran Spiritblade", "ID_FMP_PARAGON_PATH_514"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2083"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2084"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2085"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2086"]);
      model.grant(model.elements.id["ID_FMP_POWER_10017"]);
      model.grant(model.elements.id["ID_FMP_POWER_10018"]);
      model.grant(model.elements.id["ID_FMP_POWER_10019"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Siegebreaker"] = new engine.RulesElement({
    name: "Siegebreaker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_513",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=513",
    categories: ["Siegebreaker", "ID_FMP_PARAGON_PATH_513"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2080"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2081"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2082"]);
      model.grant(model.elements.id["ID_FMP_POWER_10014"]);
      model.grant(model.elements.id["ID_FMP_POWER_10015"]);
      model.grant(model.elements.id["ID_FMP_POWER_10016"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Soul Thief"] = new engine.RulesElement({
    name: "Soul Thief",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_469",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=469",
    categories: ["Soul Thief", "ID_FMP_PARAGON_PATH_469"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1931"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1932"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1933"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1934"]);
      model.grant(model.elements.id["ID_FMP_POWER_9493"]);
      model.grant(model.elements.id["ID_FMP_POWER_9494"]);
      model.grant(model.elements.id["ID_FMP_POWER_9495"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Underchasm Darkwatcher"] = new engine.RulesElement({
    name: "Underchasm Darkwatcher",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_515",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=515",
    categories: ["Underchasm Darkwatcher", "ID_FMP_PARAGON_PATH_515"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2087"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2088"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2089"]);
      model.grant(model.elements.id["ID_FMP_POWER_10020"]);
      model.grant(model.elements.id["ID_FMP_POWER_10021"]);
      model.grant(model.elements.id["ID_FMP_POWER_10023"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Venomed Soul"] = new engine.RulesElement({
    name: "Venomed Soul",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_470",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=470",
    categories: ["Venomed Soul", "ID_FMP_PARAGON_PATH_470"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1935"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1936"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1937"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1938"]);
      model.grant(model.elements.id["ID_FMP_POWER_9496"]);
      model.grant(model.elements.id["ID_FMP_POWER_9497"]);
      model.grant(model.elements.id["ID_FMP_POWER_9498"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
