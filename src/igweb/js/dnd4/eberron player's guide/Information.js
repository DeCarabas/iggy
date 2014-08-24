(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Information = types['Information'] || (types['Information'] = {});
  te = Information["House Vadalis"] = new RulesElement({
    name: "House Vadalis",
    type: "Information",
    id: "ID_INTERNAL_INFORMATION_HOUSE_VADALIS",
    source: "Eberron Player's Guide",
    categories: ["House Vadalis", "ID_INTERNAL_INFORMATION_HOUSE_VADALIS"]
  });
  byID[te.id] = te;
  
  
})(this);
