define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Eldritch Strike Charisma"] = new engine.RulesElement({
    name: "Eldritch Strike Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ELDRITCH_STRIKE_CHARISMA",
    source: "PH Heroes: Series 1",
    categories: ["Eldritch Strike Charisma", "ID_INTERNAL_CLASS_FEATURE_ELDRITCH_STRIKE_CHARISMA", "Eldritch Strike", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Eldritch Strike Constitution"] = new engine.RulesElement({
    name: "Eldritch Strike Constitution",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ELDRITCH_STRIKE_CONSTITUTION",
    source: "PH Heroes: Series 1",
    categories: ["Eldritch Strike Constitution", "ID_INTERNAL_CLASS_FEATURE_ELDRITCH_STRIKE_CONSTITUTION", "Eldritch Strike", "Ability Choice"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
