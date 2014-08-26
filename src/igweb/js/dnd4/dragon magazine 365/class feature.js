define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Deeds of Song and Story"] = new engine.RulesElement({
    name: "Deeds of Song and Story",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_872",
    source: "Dragon Magazine 365",
    categories: ["Deeds of Song and Story", "ID_FMP_CLASS_FEATURE_872", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Divine Fortune"] = new engine.RulesElement({
    name: "Divine Fortune",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_869",
    source: "Dragon Magazine 365",
    categories: ["Divine Fortune", "ID_FMP_CLASS_FEATURE_869", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fleet Skirmisher"] = new engine.RulesElement({
    name: "Fleet Skirmisher",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_864",
    source: "Dragon Magazine 365",
    categories: ["Fleet Skirmisher", "ID_FMP_CLASS_FEATURE_864", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Fleet Skirmisher:When you spend an action point to take an extra action, you can shift 3 squares before using that action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Legendary Action"] = new engine.RulesElement({
    name: "Legendary Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_871",
    source: "Dragon Magazine 365",
    categories: ["Legendary Action", "ID_FMP_CLASS_FEATURE_871", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Legends Never Die"] = new engine.RulesElement({
    name: "Legends Never Die",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_870",
    source: "Dragon Magazine 365",
    categories: ["Legends Never Die", "ID_FMP_CLASS_FEATURE_870", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Luck Blade"] = new engine.RulesElement({
    name: "Luck Blade",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_868",
    source: "Dragon Magazine 365",
    categories: ["Luck Blade", "ID_FMP_CLASS_FEATURE_868", "11"],
    rules: function(model) {
      model.select('Proficiency', 1, {
        filter: function(model, element) { return element.hasCategory("Heavy Blade"); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Marauder Precision"] = new engine.RulesElement({
    name: "Marauder Precision",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_865",
    source: "Dragon Magazine 365",
    categories: ["Marauder Precision", "ID_FMP_CLASS_FEATURE_865", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Press the Advantage"] = new engine.RulesElement({
    name: "Press the Advantage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_866",
    source: "Dragon Magazine 365",
    categories: ["Press the Advantage", "ID_FMP_CLASS_FEATURE_866", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Probability Control"] = new engine.RulesElement({
    name: "Probability Control",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_867",
    source: "Dragon Magazine 365",
    categories: ["Probability Control", "ID_FMP_CLASS_FEATURE_867", "11"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
