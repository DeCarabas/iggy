(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Gear = types['Gear'] || (types['Gear'] = {});
  te = Gear["Ki Focus"] = new RulesElement({
    name: "Ki Focus",
    type: "Gear",
    id: "ID_FMP_GEAR_115",
    source: "Player's Handbook 3",
    categories: ["Ki Focus", "ID_FMP_GEAR_115"]
  });
  byID[te.id] = te;
  
  
})(this);
