(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var CountsAsClass = types['CountsAsClass'] || (types['CountsAsClass'] = {});
  te = CountsAsClass["Hybrid"] = new RulesElement({
    name: "Hybrid",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_HYBRID",
    source: "Core,Player's Handbook 3",
    categories: ["Hybrid", "ID_INTERNAL_COUNTSASCLASS_HYBRID"]
  });
  byID[te.id] = te;
  
  
})(this);
