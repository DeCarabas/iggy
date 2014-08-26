define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Deadeye"] = new engine.RulesElement({
    name: "Deadeye",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1312",
    source: "Dragon Magazine 371",
    categories: ["Deadeye", "ID_FMP_CLASS_FEATURE_1312", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Deadstalker's Action"] = new engine.RulesElement({
    name: "Deadstalker's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1310",
    source: "Dragon Magazine 371",
    categories: ["Deadstalker's Action", "ID_FMP_CLASS_FEATURE_1310", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Deadstalker's Action:When you spend an action point to take an extra action, you do not grant combat advantage to any enemy for any reason and cannot be grabbed until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Essence of Heur-Ket"] = new engine.RulesElement({
    name: "Essence of Heur-Ket",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1313",
    source: "Dragon Magazine 371",
    categories: ["Essence of Heur-Ket", "ID_FMP_CLASS_FEATURE_1313", "21"],
    rules: function(model) {
      model.statadd("Constitution", 2);
      model.statadd("Dexterity", 2);
      model.statadd("Speed", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Indomitable Blood"] = new engine.RulesElement({
    name: "Indomitable Blood",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1311",
    source: "Dragon Magazine 371",
    categories: ["Indomitable Blood", "ID_FMP_CLASS_FEATURE_1311", "11"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against charm and fear effects */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Storm Form"] = new engine.RulesElement({
    name: "Storm Form",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1315",
    source: "Dragon Magazine 371",
    categories: ["Storm Form", "ID_FMP_CLASS_FEATURE_1315", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Storm Surge"] = new engine.RulesElement({
    name: "Storm Surge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1314",
    source: "Dragon Magazine 371",
    categories: ["Storm Surge", "ID_FMP_CLASS_FEATURE_1314", "24"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
