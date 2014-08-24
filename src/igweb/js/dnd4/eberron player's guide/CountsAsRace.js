(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Changeling"] = new RulesElement({
    name: "Changeling",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_CHANGELING",
    source: "Eberron Player's Guide",
    categories: ["Changeling", "ID_INTERNAL_COUNTSASRACE_CHANGELING"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Kalashtar"] = new RulesElement({
    name: "Kalashtar",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_KALASHTAR",
    source: "Eberron Player's Guide",
    categories: ["Kalashtar", "ID_INTERNAL_COUNTSASRACE_KALASHTAR"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Warforged"] = new RulesElement({
    name: "Warforged",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_WARFORGED",
    source: "Eberron Player's Guide",
    categories: ["Warforged", "ID_INTERNAL_COUNTSASRACE_WARFORGED"]
  });
  byID[te.id] = te;
  
  
})(this);
