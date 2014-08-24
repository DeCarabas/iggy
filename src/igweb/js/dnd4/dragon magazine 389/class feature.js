(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Ancestor's Warning"] = new RulesElement({
    name: "Ancestor's Warning",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2819",
    source: "Dragon Magazine 389",
    categories: ["Ancestor's Warning", "ID_FMP_CLASS_FEATURE_2819", "11"],
    rules: function(model) {
      model.statadd("Initiative Misc", 2);
      model.statadd("Insight Misc", 2);
      model.statadd("Perception Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Falling Needle Mastery"] = new RulesElement({
    name: "Falling Needle Mastery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2999",
    source: "Dragon Magazine 389",
    categories: ["Falling Needle Mastery", "ID_FMP_CLASS_FEATURE_2999", "16"],
    rules: function(model) {
      model.statadd("AC", 1);
      model.statadd("Reflex Defense", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Falling Needle Training"] = new RulesElement({
    name: "Falling Needle Training",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2996",
    source: "Dragon Magazine 389",
    categories: ["Falling Needle Training", "ID_FMP_CLASS_FEATURE_2996", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Itinerant Action"] = new RulesElement({
    name: "Itinerant Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2997",
    source: "Dragon Magazine 389",
    categories: ["Itinerant Action", "ID_FMP_CLASS_FEATURE_2997", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Itinerant Action:When an attack hits you, you can spend an action point as an immediate interrupt to gain a +4 bonus to all defenses until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Madness of Leng"] = new RulesElement({
    name: "Madness of Leng",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2820",
    source: "Dragon Magazine 389",
    categories: ["Madness of Leng", "ID_FMP_CLASS_FEATURE_2820", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Madness of Leng:When you spend an action point to take an extra action, enemies within 2 squares of you make a melee basic attack as a free action against one of their allies, chosen randomly.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Path of the Itinerant Monk"] = new RulesElement({
    name: "Path of the Itinerant Monk",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2998",
    source: "Dragon Magazine 389",
    categories: ["Path of the Itinerant Monk", "ID_FMP_CLASS_FEATURE_2998", "11"],
    rules: function(model) {
      model.statadd("Endurance Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Relentless Bloodlust"] = new RulesElement({
    name: "Relentless Bloodlust",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2821",
    source: "Dragon Magazine 389",
    categories: ["Relentless Bloodlust", "ID_FMP_CLASS_FEATURE_2821", "16"]
  });
  byID[te.id] = te;
  
  
})(this);
