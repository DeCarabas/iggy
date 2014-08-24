(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Bahamut's Vessel"] = new RulesElement({
    name: "Bahamut's Vessel",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_464",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=464",
    categories: ["Bahamut's Vessel", "ID_FMP_EPIC_DESTINY_464"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1914"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1915"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1916"]);
      model.grant(elements.id["ID_FMP_POWER_9396"]);
      model.grant(elements.id["ID_FMP_POWER_9488"]);
      model.grant(elements.id["ID_FMP_POWER_9489"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
