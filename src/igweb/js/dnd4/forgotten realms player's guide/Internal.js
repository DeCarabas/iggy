(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Internal = types['Internal'] || (types['Internal'] = {});
  te = Internal["Harper"] = new RulesElement({
    name: "Harper",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_HARPER",
    source: "Forgotten Realms Player's Guide",
    categories: ["Harper", "ID_INTERNAL_INTERNAL_HARPER"]
  });
  byID[te.id] = te;
  
  
})(this);
