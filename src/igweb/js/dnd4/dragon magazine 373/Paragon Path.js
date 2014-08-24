(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Blightbeast"] = new RulesElement({
    name: "Blightbeast",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_348",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=348",
    categories: ["Blightbeast", "ID_FMP_PARAGON_PATH_348"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1502"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1503"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1504"]);
      model.grant(elements.id["ID_FMP_POWER_7370"]);
      model.grant(elements.id["ID_FMP_POWER_7371"]);
      model.grant(elements.id["ID_FMP_POWER_7372"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Nightmare Weaver"] = new RulesElement({
    name: "Nightmare Weaver",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_349",
    source: "Dragon Magazine 373",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=349",
    categories: ["Nightmare Weaver", "ID_FMP_PARAGON_PATH_349"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1505"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1506"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1507"]);
      model.grant(elements.id["ID_FMP_POWER_7373"]);
      model.grant(elements.id["ID_FMP_POWER_7375"]);
      model.grant(elements.id["ID_FMP_POWER_7376"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
