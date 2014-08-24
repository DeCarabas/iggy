(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Eldritch Strike Charisma"] = new RulesElement({
    name: "Eldritch Strike Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ELDRITCH_STRIKE_CHARISMA",
    source: "PH Heroes: Series 1",
    categories: ["Eldritch Strike Charisma", "ID_INTERNAL_CLASS_FEATURE_ELDRITCH_STRIKE_CHARISMA", "Eldritch Strike", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Eldritch Strike Constitution"] = new RulesElement({
    name: "Eldritch Strike Constitution",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ELDRITCH_STRIKE_CONSTITUTION",
    source: "PH Heroes: Series 1",
    categories: ["Eldritch Strike Constitution", "ID_INTERNAL_CLASS_FEATURE_ELDRITCH_STRIKE_CONSTITUTION", "Eldritch Strike", "Ability Choice"]
  });
  byID[te.id] = te;
  
  
})(this);
