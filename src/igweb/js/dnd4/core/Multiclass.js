(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Multiclass = types['Multiclass'] || (types['Multiclass'] = {});
  te = Multiclass["Multiclass"] = new RulesElement({
    name: "Multiclass",
    type: "Multiclass",
    id: "ID_INTERNAL_MULTICLASS_MULTICLASS",
    source: "Core",
    categories: ["Multiclass", "ID_INTERNAL_MULTICLASS_MULTICLASS"]
  });
  byID[te.id] = te;
  
  
})(this);
