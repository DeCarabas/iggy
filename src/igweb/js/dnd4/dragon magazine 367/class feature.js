define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Blessing of Mielikki"] = new engine.RulesElement({
    name: "Blessing of Mielikki",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1039",
    source: "Dragon Magazine 367",
    categories: ["Blessing of Mielikki", "ID_FMP_CLASS_FEATURE_1039", "24"],
    rules: function(model) {
      model.statadd("Action Point", "Blessing of Mielikki:Each time an enemy in an encounter spends an action point, you gain the ability to spend 1 additional action point in that encounter");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Burden of Redemption"] = new engine.RulesElement({
    name: "Burden of Redemption",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1050",
    source: "Dragon Magazine 367",
    categories: ["Burden of Redemption", "ID_FMP_CLASS_FEATURE_1050", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Clinging Shadows"] = new engine.RulesElement({
    name: "Clinging Shadows",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1045",
    source: "Dragon Magazine 367",
    categories: ["Clinging Shadows", "ID_FMP_CLASS_FEATURE_1045", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Curseborn Action"] = new engine.RulesElement({
    name: "Curseborn Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1046",
    source: "Dragon Magazine 367",
    categories: ["Curseborn Action", "ID_FMP_CLASS_FEATURE_1046", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Curseborn Action:When you spend an action point to take an extra action, you regain the use of one of your Lolthtouched powers you have already expended this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Darkfire Conflagration"] = new engine.RulesElement({
    name: "Darkfire Conflagration",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1047",
    source: "Dragon Magazine 367",
    categories: ["Darkfire Conflagration", "ID_FMP_CLASS_FEATURE_1047", "16"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Empowered by Life"] = new engine.RulesElement({
    name: "Empowered by Life",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1037",
    source: "Dragon Magazine 367",
    categories: ["Empowered by Life", "ID_FMP_CLASS_FEATURE_1037", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Harper's Study"] = new engine.RulesElement({
    name: "Harper's Study",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1038",
    source: "Dragon Magazine 367",
    categories: ["Harper's Study", "ID_FMP_CLASS_FEATURE_1038", "21"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return ((element.hasCategory(model['class'].id) || true /* NYI: Filter: $$MULTICLASS */) && element.hasCategory("encounter") && element.hasCategory("13")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["High Magic"] = new engine.RulesElement({
    name: "High Magic",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1035",
    source: "Dragon Magazine 367",
    categories: ["High Magic", "ID_FMP_CLASS_FEATURE_1035", "21"],
    rules: function(model) {
      model.statadd("Arcana Misc", function() { /* checks made to perform rituals */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Lift Her Touch"] = new engine.RulesElement({
    name: "Lift Her Touch",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1049",
    source: "Dragon Magazine 367",
    categories: ["Lift Her Touch", "ID_FMP_CLASS_FEATURE_1049", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["One with Magic"] = new engine.RulesElement({
    name: "One with Magic",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1034",
    source: "Dragon Magazine 367",
    categories: ["One with Magic", "ID_FMP_CLASS_FEATURE_1034", "21"],
    rules: function(model) {
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sacred Duty"] = new engine.RulesElement({
    name: "Sacred Duty",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1048",
    source: "Dragon Magazine 367",
    categories: ["Sacred Duty", "ID_FMP_CLASS_FEATURE_1048", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Spectral Harpist"] = new engine.RulesElement({
    name: "Spectral Harpist",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1040",
    source: "Dragon Magazine 367",
    categories: ["Spectral Harpist", "ID_FMP_CLASS_FEATURE_1040", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sustained by Magic"] = new engine.RulesElement({
    name: "Sustained by Magic",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1036",
    source: "Dragon Magazine 367",
    categories: ["Sustained by Magic", "ID_FMP_CLASS_FEATURE_1036", "24"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
