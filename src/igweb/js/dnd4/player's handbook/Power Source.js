(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Power_Source = types['Power Source'] || (types['Power Source'] = {});
  te = Power_Source["Arcane"] = new RulesElement({
    name: "Arcane",
    type: "Power Source",
    id: "ID_FMP_POWER_SOURCE_2",
    source: "Player's Handbook",
    categories: ["Arcane", "ID_FMP_POWER_SOURCE_2"]
  });
  byID[te.id] = te;
  
  te = Power_Source["Divine"] = new RulesElement({
    name: "Divine",
    type: "Power Source",
    id: "ID_FMP_POWER_SOURCE_3",
    source: "Player's Handbook",
    categories: ["Divine", "ID_FMP_POWER_SOURCE_3"]
  });
  byID[te.id] = te;
  
  te = Power_Source["martial"] = new RulesElement({
    name: "martial",
    type: "Power Source",
    id: "ID_FMP_POWER_SOURCE_1",
    source: "Player's Handbook",
    categories: ["martial", "ID_FMP_POWER_SOURCE_1"]
  });
  byID[te.id] = te;
  
  
})(this);
