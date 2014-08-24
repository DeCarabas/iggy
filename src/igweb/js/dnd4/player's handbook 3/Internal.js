(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Internal = types['Internal'] || (types['Internal'] = {});
  te = Internal["Hybrid Power Points"] = new RulesElement({
    name: "Hybrid Power Points",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_HYBRID_POWER_POINTS",
    source: "Player's Handbook 3",
    categories: ["Hybrid Power Points", "ID_INTERNAL_INTERNAL_HYBRID_POWER_POINTS"],
    rules: function(model) {
      model.statadd("Power Points", function() { return model.stat("Hybrid Power Points"); });
    }
  });
  byID[te.id] = te;
  
  
})(this);
