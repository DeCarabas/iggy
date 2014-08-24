(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Shadar-kai"] = new RulesElement({
    name: "Shadar-kai",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_SHADAR-KAI",
    source: "Dragon Magazine 372",
    categories: ["Shadar-kai", "ID_INTERNAL_COUNTSASRACE_SHADAR-KAI"]
  });
  byID[te.id] = te;
  
  
})(this);
