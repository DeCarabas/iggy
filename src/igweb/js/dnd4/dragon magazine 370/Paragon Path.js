(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Oman Giantkiller"] = new RulesElement({
    name: "Oman Giantkiller",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_240",
    source: "Dragon Magazine 370",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=240",
    categories: ["Oman Giantkiller", "ID_FMP_PARAGON_PATH_240"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1134"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1135"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1136"]);
      model.grant(elements.id["ID_FMP_POWER_6027"]);
      model.grant(elements.id["ID_FMP_POWER_6184"]);
      model.grant(elements.id["ID_FMP_POWER_6185"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Son of Mercy"] = new RulesElement({
    name: "Son of Mercy",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_237",
    source: "Dragon Magazine 370",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=237",
    categories: ["Son of Mercy", "ID_FMP_PARAGON_PATH_237"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1125"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1126"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1127"]);
      model.grant(elements.id["ID_FMP_POWER_6017"]);
      model.grant(elements.id["ID_FMP_POWER_6018"]);
      model.grant(elements.id["ID_FMP_POWER_6019"]);
      model.grant(elements.id["ID_FMP_POWER_6020"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Tharos Impostor"] = new RulesElement({
    name: "Tharos Impostor",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_239",
    source: "Dragon Magazine 370",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=239",
    categories: ["Tharos Impostor", "ID_FMP_PARAGON_PATH_239"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1133"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1132"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1131"]);
      model.grant(elements.id["ID_FMP_POWER_6024"]);
      model.grant(elements.id["ID_FMP_POWER_6025"]);
      model.grant(elements.id["ID_FMP_POWER_6026"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Thay Infiltrator"] = new RulesElement({
    name: "Thay Infiltrator",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_238",
    source: "Dragon Magazine 370",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=238",
    categories: ["Thay Infiltrator", "ID_FMP_PARAGON_PATH_238"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1128"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1129"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1130"]);
      model.grant(elements.id["ID_FMP_POWER_6021"]);
      model.grant(elements.id["ID_FMP_POWER_6022"]);
      model.grant(elements.id["ID_FMP_POWER_6023"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
