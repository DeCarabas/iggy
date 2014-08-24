(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var CountsAsClass = types['CountsAsClass'] || (types['CountsAsClass'] = {});
  te = CountsAsClass["Swordmage"] = new RulesElement({
    name: "Swordmage",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_SWORDMAGE",
    source: "Forgotten Realms Player's Guide",
    categories: ["Swordmage", "ID_INTERNAL_COUNTSASCLASS_SWORDMAGE"]
  });
  byID[te.id] = te;
  
  
})(this);
