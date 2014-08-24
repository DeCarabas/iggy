(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Reborn Champion"] = new RulesElement({
    name: "Reborn Champion",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_154",
    source: "Dragon Magazine 365",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=154",
    categories: ["Reborn Champion", "ID_FMP_EPIC_DESTINY_154"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_870"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_871"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_872"]);
      model.grant(elements.id["ID_FMP_POWER_4211"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
