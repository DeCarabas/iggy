define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Familiar = types['Familiar'] || (types['Familiar'] = {});
  te = Familiar["Oso de la Fez, Former Show Bear"] = new engine.RulesElement({
    name: "Oso de la Fez, Former Show Bear",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_55",
    source: "Dragon Magazine 376",
    categories: ["Oso de la Fez, Former Show Bear", "ID_FMP_FAMILIAR_55"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
