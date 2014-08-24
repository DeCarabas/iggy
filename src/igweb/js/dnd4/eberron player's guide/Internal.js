(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Internal = types['Internal'] || (types['Internal'] = {});
  te = Internal["House Vadalis"] = new RulesElement({
    name: "House Vadalis",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_HOUSE_VADALIS",
    source: "Eberron Player's Guide",
    categories: ["House Vadalis", "ID_INTERNAL_INTERNAL_HOUSE_VADALIS"]
  });
  byID[te.id] = te;
  
  
})(this);
