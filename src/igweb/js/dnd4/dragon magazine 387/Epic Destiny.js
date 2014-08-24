(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Ceaseless Guardian"] = new RulesElement({
    name: "Ceaseless Guardian",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_689",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=689",
    categories: ["Ceaseless Guardian", "ID_FMP_EPIC_DESTINY_689"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2692"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2693"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2694"]);
      model.grant(elements.id["ID_FMP_POWER_12498"]);
      model.grant(elements.id["ID_FMP_POWER_12499"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
