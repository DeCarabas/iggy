(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Raven Knight"] = new RulesElement({
    name: "Raven Knight",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_523",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=523",
    categories: ["Raven Knight", "ID_FMP_EPIC_DESTINY_523"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2116"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2117"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2115"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2118"]);
      model.grant(elements.id["ID_FMP_POWER_10110"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
