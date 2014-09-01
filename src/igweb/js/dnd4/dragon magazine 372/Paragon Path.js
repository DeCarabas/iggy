define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Abiding Reaper"] = new engine.RulesElement({
    name: "Abiding Reaper",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_344",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=344",
    categories: ["Abiding Reaper", "ID_FMP_PARAGON_PATH_344"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1483"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1484"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1485"]);
      model.select('class feature', 1, "Abiding Reaper", {
        filter: function(model, element) { return element.hasCategory("Abiding Reaper"); }
      });
      model.grant(model.elements.id["ID_FMP_POWER_6965"]);
      model.grant(model.elements.id["ID_FMP_POWER_6966"]);
      model.grant(model.elements.id["ID_FMP_POWER_6967"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Doomspeaker"] = new engine.RulesElement({
    name: "Doomspeaker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_345",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=345",
    categories: ["Doomspeaker", "ID_FMP_PARAGON_PATH_345"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1486"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1487"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1488"]);
      model.grant(model.elements.id["ID_FMP_POWER_6968"]);
      model.grant(model.elements.id["ID_FMP_POWER_6969"]);
      model.grant(model.elements.id["ID_FMP_POWER_6970"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Soldier of Conquest"] = new engine.RulesElement({
    name: "Soldier of Conquest",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_295",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=295",
    categories: ["Soldier of Conquest", "ID_FMP_PARAGON_PATH_295"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1323"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1324"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1325"]);
      model.grant(model.elements.id["ID_FMP_POWER_6596"]);
      model.grant(model.elements.id["ID_FMP_POWER_6597"]);
      model.grant(model.elements.id["ID_FMP_POWER_6598"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
