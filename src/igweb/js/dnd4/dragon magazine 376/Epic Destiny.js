(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Free Soul"] = new RulesElement({
    name: "Free Soul",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_452",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=452",
    categories: ["Free Soul", "ID_FMP_EPIC_DESTINY_452"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1873"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1874"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1875"]);
      model.grant(elements.id["ID_FMP_POWER_8282"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
