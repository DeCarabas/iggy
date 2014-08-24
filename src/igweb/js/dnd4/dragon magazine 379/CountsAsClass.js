(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var CountsAsClass = types['CountsAsClass'] || (types['CountsAsClass'] = {});
  te = CountsAsClass["Assassin"] = new RulesElement({
    name: "Assassin",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_ASSASSIN",
    source: "Dragon Magazine 379",
    categories: ["Assassin", "ID_INTERNAL_COUNTSASCLASS_ASSASSIN"]
  });
  byID[te.id] = te;
  
  
})(this);
