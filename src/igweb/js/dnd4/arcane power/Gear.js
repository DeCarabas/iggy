(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Gear = types['Gear'] || (types['Gear'] = {});
  te = Gear["Tome Implement"] = new RulesElement({
    name: "Tome Implement",
    type: "Gear",
    id: "ID_FMP_GEAR_101",
    source: "Arcane Power",
    categories: ["Tome Implement", "ID_FMP_GEAR_101"]
  });
  byID[te.id] = te;
  
  
})(this);
