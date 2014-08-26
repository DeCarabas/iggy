define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background_Choice = types['Background Choice'] || (types['Background Choice'] = {});
  te = Background_Choice["Urban Shaman Benefit"] = new engine.RulesElement({
    name: "Urban Shaman Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_URBAN_SHAMAN_BENEFIT",
    source: "Dragon Magazine 387",
    categories: ["Urban Shaman Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_URBAN_SHAMAN_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
