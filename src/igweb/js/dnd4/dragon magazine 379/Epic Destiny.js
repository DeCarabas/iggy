(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Perfect Slayer"] = new RulesElement({
    name: "Perfect Slayer",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_471",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=471",
    categories: ["Perfect Slayer", "ID_FMP_EPIC_DESTINY_471"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1939"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1940"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1941"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1942"]);
      model.grant(elements.id["ID_FMP_POWER_9499"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
