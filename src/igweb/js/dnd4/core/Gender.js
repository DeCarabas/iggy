define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Gender = types['Gender'] || (types['Gender'] = {});
  te = Gender["Female"] = new engine.RulesElement({
    name: "Female",
    type: "Gender",
    id: "ID_INTERNAL_GENDER_FEMALE",
    source: "Core",
    categories: ["Female", "ID_INTERNAL_GENDER_FEMALE"]
  });
  byID[te.id] = te;
  
  te = Gender["Male"] = new engine.RulesElement({
    name: "Male",
    type: "Gender",
    id: "ID_INTERNAL_GENDER_MALE",
    source: "Core",
    categories: ["Male", "ID_INTERNAL_GENDER_MALE"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
