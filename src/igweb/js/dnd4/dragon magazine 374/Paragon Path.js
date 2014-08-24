(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Academy Master"] = new RulesElement({
    name: "Academy Master",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_351",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=351",
    categories: ["Academy Master", "ID_FMP_PARAGON_PATH_351"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1519"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1520"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1521"]);
      model.grant(elements.id["ID_FMP_POWER_7430"]);
      model.grant(elements.id["ID_FMP_POWER_7431"]);
      model.grant(elements.id["ID_FMP_POWER_7432"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Familiar Keeper"] = new RulesElement({
    name: "Familiar Keeper",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_350",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=350",
    categories: ["Familiar Keeper", "ID_FMP_PARAGON_PATH_350"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1516"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1517"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1518"]);
      model.grant(elements.id["ID_FMP_POWER_7420"]);
      model.grant(elements.id["ID_FMP_POWER_7421"]);
      model.grant(elements.id["ID_FMP_POWER_7422"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Long Night Scion"] = new RulesElement({
    name: "Long Night Scion",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_361",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=361",
    categories: ["Long Night Scion", "ID_FMP_PARAGON_PATH_361"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1535"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1536"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1537"]);
      model.grant(elements.id["ID_FMP_POWER_7438"]);
      model.grant(elements.id["ID_FMP_POWER_7439"]);
      model.grant(elements.id["ID_FMP_POWER_7440"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
