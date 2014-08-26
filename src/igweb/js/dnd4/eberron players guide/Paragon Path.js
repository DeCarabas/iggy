define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Alchemist Savant"] = new engine.RulesElement({
    name: "Alchemist Savant",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_365",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=365",
    categories: ["Alchemist Savant", "ID_FMP_PARAGON_PATH_365"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1577"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1578"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1579"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1580"]);
      model.grant(model.elements.id["ID_FMP_POWER_7550"]);
      model.grant(model.elements.id["ID_FMP_POWER_7551"]);
      model.grant(model.elements.id["ID_FMP_POWER_7552"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Battle Engineer"] = new engine.RulesElement({
    name: "Battle Engineer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_366",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=366",
    categories: ["Battle Engineer", "ID_FMP_PARAGON_PATH_366"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1581"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1582"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1583"]);
      model.grant(model.elements.id["ID_FMP_POWER_7554"]);
      model.grant(model.elements.id["ID_FMP_POWER_7555"]);
      model.grant(model.elements.id["ID_FMP_POWER_7556"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Cannith Mastermaker"] = new engine.RulesElement({
    name: "Cannith Mastermaker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_374",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=374",
    categories: ["Cannith Mastermaker", "ID_FMP_PARAGON_PATH_374"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1604"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1605"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1606"]);
      model.grant(model.elements.id["ID_FMP_POWER_7576"]);
      model.grant(model.elements.id["ID_FMP_POWER_7577"]);
      model.grant(model.elements.id["ID_FMP_POWER_7578"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Chameleon"] = new engine.RulesElement({
    name: "Chameleon",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_367",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=367",
    categories: ["Chameleon", "ID_FMP_PARAGON_PATH_367"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1584"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1585"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1586"]);
      model.grant(model.elements.id["ID_FMP_POWER_7558"]);
      model.grant(model.elements.id["ID_FMP_POWER_7559"]);
      model.grant(model.elements.id["ID_FMP_POWER_7560"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Clockwork Engineer"] = new engine.RulesElement({
    name: "Clockwork Engineer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_368",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=368",
    categories: ["Clockwork Engineer", "ID_FMP_PARAGON_PATH_368"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1587"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1588"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1589"]);
      model.grant(model.elements.id["ID_FMP_POWER_7561"]);
      model.grant(model.elements.id["ID_FMP_POWER_7562"]);
      model.grant(model.elements.id["ID_FMP_POWER_7563"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Deneith Protector"] = new engine.RulesElement({
    name: "Deneith Protector",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_375",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=375",
    categories: ["Deneith Protector", "ID_FMP_PARAGON_PATH_375"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1607"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1608"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1609"]);
      model.grant(model.elements.id["ID_FMP_POWER_7579"]);
      model.grant(model.elements.id["ID_FMP_POWER_7580"]);
      model.grant(model.elements.id["ID_FMP_POWER_7581"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Exorcist of the Silver Flame"] = new engine.RulesElement({
    name: "Exorcist of the Silver Flame",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_369",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=369",
    categories: ["Exorcist of the Silver Flame", "ID_FMP_PARAGON_PATH_369"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1590"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1591"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1592"]);
      model.grant(model.elements.id["ID_FMP_POWER_7564"]);
      model.grant(model.elements.id["ID_FMP_POWER_7565"]);
      model.grant(model.elements.id["ID_FMP_POWER_7566"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Gatekeeper Mystagogue"] = new engine.RulesElement({
    name: "Gatekeeper Mystagogue",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_370",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=370",
    categories: ["Gatekeeper Mystagogue", "ID_FMP_PARAGON_PATH_370"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1593"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1594"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1595"]);
      model.grant(model.elements.id["ID_FMP_POWER_7567"]);
      model.grant(model.elements.id["ID_FMP_POWER_7568"]);
      model.grant(model.elements.id["ID_FMP_POWER_7569"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Ghallanda Sanctuary Guardian"] = new engine.RulesElement({
    name: "Ghallanda Sanctuary Guardian",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_376",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=376",
    categories: ["Ghallanda Sanctuary Guardian", "ID_FMP_PARAGON_PATH_376"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1610"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1611"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1612"]);
      model.grant(model.elements.id["ID_FMP_POWER_7582"]);
      model.grant(model.elements.id["ID_FMP_POWER_7583"]);
      model.grant(model.elements.id["ID_FMP_POWER_7584"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Jorasco Jadehand"] = new engine.RulesElement({
    name: "Jorasco Jadehand",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_377",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=377",
    categories: ["Jorasco Jadehand", "ID_FMP_PARAGON_PATH_377"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1613"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1614"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1615"]);
      model.grant(model.elements.id["ID_FMP_POWER_7585"]);
      model.grant(model.elements.id["ID_FMP_POWER_7586"]);
      model.grant(model.elements.id["ID_FMP_POWER_7587"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Kundarak Ghorad'din"] = new engine.RulesElement({
    name: "Kundarak Ghorad'din",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_378",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=378",
    categories: ["Kundarak Ghorad'din", "ID_FMP_PARAGON_PATH_378"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1616"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1617"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1618"]);
      model.grant(model.elements.id["ID_FMP_POWER_7588"]);
      model.grant(model.elements.id["ID_FMP_POWER_7589"]);
      model.grant(model.elements.id["ID_FMP_POWER_7590"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Lightwalker"] = new engine.RulesElement({
    name: "Lightwalker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_371",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=371",
    categories: ["Lightwalker", "ID_FMP_PARAGON_PATH_371"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1596"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1597"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1598"]);
      model.grant(model.elements.id["ID_FMP_POWER_7570"]);
      model.grant(model.elements.id["ID_FMP_POWER_7571"]);
      model.grant(model.elements.id["ID_FMP_POWER_7572"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Lyrandar Wind-Rider"] = new engine.RulesElement({
    name: "Lyrandar Wind-Rider",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_379",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=379",
    categories: ["Lyrandar Wind-Rider", "ID_FMP_PARAGON_PATH_379"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1620"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1619"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1621"]);
      model.grant(model.elements.id["ID_FMP_POWER_7591"]);
      model.grant(model.elements.id["ID_FMP_POWER_7592"]);
      model.grant(model.elements.id["ID_FMP_POWER_7593"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Medani Trueseer"] = new engine.RulesElement({
    name: "Medani Trueseer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_380",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=380",
    categories: ["Medani Trueseer", "ID_FMP_PARAGON_PATH_380"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1622"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1623"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1624"]);
      model.grant(model.elements.id["ID_FMP_POWER_7594"]);
      model.grant(model.elements.id["ID_FMP_POWER_7595"]);
      model.grant(model.elements.id["ID_FMP_POWER_7596"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Orien Swiftblade"] = new engine.RulesElement({
    name: "Orien Swiftblade",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_381",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=381",
    categories: ["Orien Swiftblade", "ID_FMP_PARAGON_PATH_381"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1625"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1626"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1627"]);
      model.grant(model.elements.id["ID_FMP_POWER_7597"]);
      model.grant(model.elements.id["ID_FMP_POWER_7598"]);
      model.grant(model.elements.id["ID_FMP_POWER_7599"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Phiarlan Phantasmist"] = new engine.RulesElement({
    name: "Phiarlan Phantasmist",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_382",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=382",
    categories: ["Phiarlan Phantasmist", "ID_FMP_PARAGON_PATH_382"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1628"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1629"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1630"]);
      model.grant(model.elements.id["ID_FMP_POWER_7600"]);
      model.grant(model.elements.id["ID_FMP_POWER_7601"]);
      model.grant(model.elements.id["ID_FMP_POWER_7602"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Self-Forged"] = new engine.RulesElement({
    name: "Self-Forged",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_372",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=372",
    categories: ["Self-Forged", "ID_FMP_PARAGON_PATH_372"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1599"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1600"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1601"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1602"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1603"]);
      model.grant(model.elements.id["ID_FMP_POWER_7573"]);
      model.grant(model.elements.id["ID_FMP_POWER_7574"]);
      model.grant(model.elements.id["ID_FMP_POWER_7575"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Sivis Truenamer"] = new engine.RulesElement({
    name: "Sivis Truenamer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_383",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=383",
    categories: ["Sivis Truenamer", "ID_FMP_PARAGON_PATH_383"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1631"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1632"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1633"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1634"]);
      model.grant(model.elements.id["ID_FMP_POWER_7603"]);
      model.grant(model.elements.id["ID_FMP_POWER_7604"]);
      model.grant(model.elements.id["ID_FMP_POWER_7605"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Tharashk Wayfinder"] = new engine.RulesElement({
    name: "Tharashk Wayfinder",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_384",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=384",
    categories: ["Tharashk Wayfinder", "ID_FMP_PARAGON_PATH_384"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1635"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1636"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1637"]);
      model.grant(model.elements.id["ID_FMP_POWER_7606"]);
      model.grant(model.elements.id["ID_FMP_POWER_7607"]);
      model.grant(model.elements.id["ID_FMP_POWER_7609"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Thuranni Shadow Killer"] = new engine.RulesElement({
    name: "Thuranni Shadow Killer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_385",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=385",
    categories: ["Thuranni Shadow Killer", "ID_FMP_PARAGON_PATH_385"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1638"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1639"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1640"]);
      model.grant(model.elements.id["ID_FMP_POWER_7610"]);
      model.grant(model.elements.id["ID_FMP_POWER_7611"]);
      model.grant(model.elements.id["ID_FMP_POWER_7612"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Vadalis Griffonmaster"] = new engine.RulesElement({
    name: "Vadalis Griffonmaster",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_386",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=386",
    categories: ["Vadalis Griffonmaster", "ID_FMP_PARAGON_PATH_386"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1641"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1642"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1643"]);
      model.grant(model.elements.id["ID_FMP_POWER_7614"]);
      model.grant(model.elements.id["ID_FMP_POWER_7615"]);
      model.grant(model.elements.id["ID_FMP_POWER_7616"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Warforged Juggernaut"] = new engine.RulesElement({
    name: "Warforged Juggernaut",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_131",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=131",
    categories: ["Warforged Juggernaut", "ID_FMP_PARAGON_PATH_131"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_791"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_792"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_793"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1848"]);
      model.grant(model.elements.id["ID_FMP_POWER_3151"]);
      model.grant(model.elements.id["ID_FMP_POWER_3152"]);
      model.grant(model.elements.id["ID_FMP_POWER_3153"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
