(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Bullywug"] = new RulesElement({
    name: "Bullywug",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_BULLYWUG",
    source: "Monster Manual 2",
    categories: ["Bullywug", "ID_INTERNAL_COUNTSASRACE_BULLYWUG"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Duergar"] = new RulesElement({
    name: "Duergar",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_DUERGAR",
    source: "Monster Manual 2",
    categories: ["Duergar", "ID_INTERNAL_COUNTSASRACE_DUERGAR"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Kenku"] = new RulesElement({
    name: "Kenku",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_KENKU",
    source: "Monster Manual 2",
    categories: ["Kenku", "ID_INTERNAL_COUNTSASRACE_KENKU"]
  });
  byID[te.id] = te;
  
  
})(this);
