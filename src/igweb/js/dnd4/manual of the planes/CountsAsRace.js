(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Bladeling"] = new RulesElement({
    name: "Bladeling",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_BLADELING",
    source: "Manual of the Planes",
    categories: ["Bladeling", "ID_INTERNAL_COUNTSASRACE_BLADELING"]
  });
  byID[te.id] = te;
  
  
})(this);
