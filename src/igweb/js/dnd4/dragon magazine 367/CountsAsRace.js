(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Gnoll"] = new RulesElement({
    name: "Gnoll",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_GNOLL",
    source: "Dragon Magazine 367",
    categories: ["Gnoll", "ID_INTERNAL_COUNTSASRACE_GNOLL"]
  });
  byID[te.id] = te;
  
  
})(this);
