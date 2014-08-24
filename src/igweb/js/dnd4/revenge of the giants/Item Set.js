(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Item_Set = types['Item Set'] || (types['Item Set'] = {});
  te = Item_Set["Implements of Argent"] = new RulesElement({
    name: "Implements of Argent",
    type: "Item Set",
    id: "ID_FMP_ITEM_SET_38",
    source: "Revenge of the Giants",
    categories: ["Implements of Argent", "ID_FMP_ITEM_SET_38"]
  });
  byID[te.id] = te;
  
  
})(this);
