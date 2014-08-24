(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Power_Source = types['Power Source'] || (types['Power Source'] = {});
  te = Power_Source["Psionic"] = new RulesElement({
    name: "Psionic",
    type: "Power Source",
    id: "ID_FMP_POWER_SOURCE_5",
    source: "Player's Handbook 3",
    categories: ["Psionic", "ID_FMP_POWER_SOURCE_5"]
  });
  byID[te.id] = te;
  
  
})(this);
