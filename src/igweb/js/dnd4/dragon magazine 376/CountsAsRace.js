(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Revenant"] = new RulesElement({
    name: "Revenant",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_REVENANT",
    source: "Dragon Magazine 376",
    categories: ["Revenant", "ID_INTERNAL_COUNTSASRACE_REVENANT"]
  });
  byID[te.id] = te;
  
  
})(this);
