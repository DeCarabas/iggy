define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Familiar = types['Familiar'] || (types['Familiar'] = {});
  te = Familiar["Coure Attendant"] = new engine.RulesElement({
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
  
  te = Familiar["Faerie Dragonling"] = new engine.RulesElement({
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
  
  te = Familiar["Fiddling Grig"] = new engine.RulesElement({
    name: "Fiddling Grig",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_87",
    source: "Dragon Magazine 390",
    categories: ["Fiddling Grig", "ID_FMP_FAMILIAR_87"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
