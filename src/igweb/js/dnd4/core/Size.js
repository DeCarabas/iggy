(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Size = types['Size'] || (types['Size'] = {});
  te = Size["Medium"] = new RulesElement({
    name: "Medium",
    type: "Size",
    id: "ID_INTERNAL_SIZE_MEDIUM",
    source: "Core",
    categories: ["Medium", "ID_INTERNAL_SIZE_MEDIUM"]
  });
  byID[te.id] = te;
  
  te = Size["Small"] = new RulesElement({
    name: "Small",
    type: "Size",
    id: "ID_INTERNAL_SIZE_SMALL",
    source: "Core",
    categories: ["Small", "ID_INTERNAL_SIZE_SMALL"]
  });
  byID[te.id] = te;
  
  
})(this);
