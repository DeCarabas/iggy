(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Information = types['Information'] || (types['Information'] = {});
  te = Information["Harper"] = new RulesElement({
    name: "Harper",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_HARPER",
    source: "Forgotten Realms Player's Guide",
    categories: ["Harper", "ID_INTERNAL_INFORMATION_HARPER"]
  });
  byID[te.id] = te;
  
  
})(this);
