(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Deadstalker"] = new RulesElement({
    name: "Deadstalker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_293",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=293",
    categories: ["Deadstalker", "ID_FMP_PARAGON_PATH_293"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1310"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1311"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1312"]);
      model.grant(elements.id["ID_FMP_POWER_6586"]);
      model.grant(elements.id["ID_FMP_POWER_6587"]);
      model.grant(elements.id["ID_FMP_POWER_6588"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
