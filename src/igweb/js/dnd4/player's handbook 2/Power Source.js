(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Power_Source = types['Power Source'] || (types['Power Source'] = {});
  te = Power_Source["Primal"] = new RulesElement({
    name: "Primal",
    type: "Power Source",
    id: "ID_FMP_POWER_SOURCE_4",
    source: "Player's Handbook 2",
    categories: ["Primal", "ID_FMP_POWER_SOURCE_4"]
  });
  byID[te.id] = te;
  
  
})(this);
