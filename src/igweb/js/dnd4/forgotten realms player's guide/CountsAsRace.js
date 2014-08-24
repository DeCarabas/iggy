(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Drow"] = new RulesElement({
    name: "Drow",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_DROW",
    source: "Forgotten Realms Player's Guide",
    categories: ["Drow", "ID_INTERNAL_COUNTSASRACE_DROW"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Genasi"] = new RulesElement({
    name: "Genasi",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_GENASI",
    source: "Forgotten Realms Player's Guide",
    categories: ["Genasi", "ID_INTERNAL_COUNTSASRACE_GENASI"]
  });
  byID[te.id] = te;
  
  
})(this);
