(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var CountsAsClass = types['CountsAsClass'] || (types['CountsAsClass'] = {});
  te = CountsAsClass["Artificer"] = new RulesElement({
    name: "Artificer",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_ARTIFICER",
    source: "Eberron Player's Guide",
    categories: ["Artificer", "ID_INTERNAL_COUNTSASCLASS_ARTIFICER"]
  });
  byID[te.id] = te;
  
  
})(this);
