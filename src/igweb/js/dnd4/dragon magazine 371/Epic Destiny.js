(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Prison of the Winds"] = new RulesElement({
    name: "Prison of the Winds",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_294",
    source: "Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=294",
    categories: ["Prison of the Winds", "ID_FMP_EPIC_DESTINY_294"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1313"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1314"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1315"]);
      model.grant(elements.id["ID_FMP_POWER_6589"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
