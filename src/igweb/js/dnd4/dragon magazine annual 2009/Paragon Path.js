define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Arena Champion"] = new engine.RulesElement({
    name: "Arena Champion",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_217",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=217",
    categories: ["Arena Champion", "ID_FMP_PARAGON_PATH_217"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1058"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1059"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1060"]);
      model.grant(model.elements.id["ID_FMP_POWER_5241"]);
      model.grant(model.elements.id["ID_FMP_POWER_5242"]);
      model.grant(model.elements.id["ID_FMP_POWER_5243"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Bloodknight"] = new engine.RulesElement({
    name: "Bloodknight",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_292",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=292",
    categories: ["Bloodknight", "ID_FMP_PARAGON_PATH_292"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1307"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1308"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1309"]);
      model.grant(model.elements.id["ID_FMP_POWER_6583"]);
      model.grant(model.elements.id["ID_FMP_POWER_6584"]);
      model.grant(model.elements.id["ID_FMP_POWER_6585"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Student of Caiphon"] = new engine.RulesElement({
    name: "Student of Caiphon",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_156",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=156",
    categories: ["Student of Caiphon", "ID_FMP_PARAGON_PATH_156"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_877"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_878"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_879"]);
      model.grant(model.elements.id["ID_FMP_POWER_4252"]);
      model.grant(model.elements.id["ID_FMP_POWER_4253"]);
      model.grant(model.elements.id["ID_FMP_POWER_4254"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Watcher of the Night"] = new engine.RulesElement({
    name: "Watcher of the Night",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_155",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=155",
    categories: ["Watcher of the Night", "ID_FMP_PARAGON_PATH_155"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_874"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_875"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_876"]);
      model.grant(model.elements.id["ID_FMP_POWER_4239"]);
      model.grant(model.elements.id["ID_FMP_POWER_4240"]);
      model.grant(model.elements.id["ID_FMP_POWER_4241"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
