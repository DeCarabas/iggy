(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Curseborn"] = new RulesElement({
    name: "Curseborn",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_212",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=212",
    categories: ["Curseborn", "ID_FMP_PARAGON_PATH_212"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1045"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1046"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1047"]);
      model.grant(elements.id["ID_FMP_POWER_4791"]);
      model.grant(elements.id["ID_FMP_POWER_4792"]);
      model.grant(elements.id["ID_FMP_POWER_4793"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
