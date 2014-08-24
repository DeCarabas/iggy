(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Power_Source = types['Power Source'] || (types['Power Source'] = {});
  te = Power_Source["Shadow"] = new RulesElement({
    name: "Shadow",
    type: "Power Source",
    id: "ID_FMP_POWER_SOURCE_6",
    source: "Dragon Magazine 379",
    categories: ["Shadow", "ID_FMP_POWER_SOURCE_6"]
  });
  byID[te.id] = te;
  
  
})(this);
