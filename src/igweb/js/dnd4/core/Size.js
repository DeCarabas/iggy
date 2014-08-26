define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Size = types['Size'] || (types['Size'] = {});
  te = Size["Medium"] = new engine.RulesElement({
    name: "Medium",
    type: "Size",
    id: "ID_INTERNAL_SIZE_MEDIUM",
    source: "Core",
    categories: ["Medium", "ID_INTERNAL_SIZE_MEDIUM"]
  });
  byID[te.id] = te;
  
  te = Size["Small"] = new engine.RulesElement({
    name: "Small",
    type: "Size",
    id: "ID_INTERNAL_SIZE_SMALL",
    source: "Core",
    categories: ["Small", "ID_INTERNAL_SIZE_SMALL"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
