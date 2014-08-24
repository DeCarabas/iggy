(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Familiar = types['Familiar'] || (types['Familiar'] = {});
  te = Familiar["Coure Attendant"] = new RulesElement({
    name: "Coure Attendant",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_89",
    source: "Dragon Magazine 390",
    categories: ["Coure Attendant", "ID_FMP_FAMILIAR_89"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Faerie Dragonling"] = new RulesElement({
    name: "Faerie Dragonling",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_88",
    source: "Dragon Magazine 390",
    categories: ["Faerie Dragonling", "ID_FMP_FAMILIAR_88"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Fiddling Grig"] = new RulesElement({
    name: "Fiddling Grig",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_87",
    source: "Dragon Magazine 390",
    categories: ["Fiddling Grig", "ID_FMP_FAMILIAR_87"]
  });
  byID[te.id] = te;
  
  
})(this);
