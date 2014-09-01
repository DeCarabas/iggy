define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Academy Master"] = new engine.RulesElement({
    name: "Academy Master",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_351",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=351",
    categories: ["Academy Master", "ID_FMP_PARAGON_PATH_351"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1519"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1520"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1521"]);
      model.grant(model.elements.id["ID_FMP_POWER_7430"]);
      model.grant(model.elements.id["ID_FMP_POWER_7431"]);
      model.grant(model.elements.id["ID_FMP_POWER_7432"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Familiar Keeper"] = new engine.RulesElement({
    name: "Familiar Keeper",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_350",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=350",
    categories: ["Familiar Keeper", "ID_FMP_PARAGON_PATH_350"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1516"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1517"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1518"]);
      model.grant(model.elements.id["ID_FMP_POWER_7420"]);
      model.grant(model.elements.id["ID_FMP_POWER_7421"]);
      model.grant(model.elements.id["ID_FMP_POWER_7422"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Long Night Scion"] = new engine.RulesElement({
    name: "Long Night Scion",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_361",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=361",
    categories: ["Long Night Scion", "ID_FMP_PARAGON_PATH_361"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1535"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1536"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1537"]);
      model.grant(model.elements.id["ID_FMP_POWER_7438"]);
      model.grant(model.elements.id["ID_FMP_POWER_7439"]);
      model.grant(model.elements.id["ID_FMP_POWER_7440"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
