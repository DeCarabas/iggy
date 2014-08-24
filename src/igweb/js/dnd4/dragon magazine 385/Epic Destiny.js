(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Disincarnate"] = new RulesElement({
    name: "Disincarnate",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_644",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=644",
    categories: ["Disincarnate", "ID_FMP_EPIC_DESTINY_644"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2577"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2578"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2579"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2580"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2581"]);
      model.grant(elements.id["ID_FMP_POWER_12172"]);
      model.grant(elements.id["ID_FMP_POWER_12173"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Soul of the World"] = new RulesElement({
    name: "Soul of the World",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_645",
    source: "Dragon Magazine 385",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=645",
    categories: ["Soul of the World", "ID_FMP_EPIC_DESTINY_645"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2064"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2583"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2584"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2585"]);
      model.grant(elements.id["ID_FMP_POWER_12175"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
