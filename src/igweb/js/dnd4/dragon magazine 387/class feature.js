define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Communal Action"] = new engine.RulesElement({
    name: "Communal Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2699",
    source: "Dragon Magazine 387",
    categories: ["Communal Action", "ID_FMP_CLASS_FEATURE_2699", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Communal Action:You can spend an action point to give an ally adjacent to you an action point.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dangerous Threshold"] = new engine.RulesElement({
    name: "Dangerous Threshold",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2686",
    source: "Dragon Magazine 387",
    categories: ["Dangerous Threshold", "ID_FMP_CLASS_FEATURE_2686", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Death-Seer's Action"] = new engine.RulesElement({
    name: "Death-Seer's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2696",
    source: "Dragon Magazine 387",
    categories: ["Death-Seer's Action", "ID_FMP_CLASS_FEATURE_2696", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Death-Seer's Action:When you spend an action point, one creature you can see gains vulnerable to your attacks equal to your Intelligence modifier until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Exorcise Corruption"] = new engine.RulesElement({
    name: "Exorcise Corruption",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2685",
    source: "Dragon Magazine 387",
    categories: ["Exorcise Corruption", "ID_FMP_CLASS_FEATURE_2685", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Gate Ward"] = new engine.RulesElement({
    name: "Gate Ward",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2688",
    source: "Dragon Magazine 387",
    categories: ["Gate Ward", "ID_FMP_CLASS_FEATURE_2688", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Gatekeeper's Action"] = new engine.RulesElement({
    name: "Gatekeeper's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2687",
    source: "Dragon Magazine 387",
    categories: ["Gatekeeper's Action", "ID_FMP_CLASS_FEATURE_2687", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Gatekeeper's Action:When you spend an action point to gain an extra action, until the end of your next turn enemies treat the squares adjacent to you as difficult terrain.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Guardian Mindfulness"] = new engine.RulesElement({
    name: "Guardian Mindfulness",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2692",
    source: "Dragon Magazine 387",
    categories: ["Guardian Mindfulness", "ID_FMP_CLASS_FEATURE_2692", "21"],
    rules: function(model) {
      model.select('class feature', 1, "Guardian Mindfulness", {
        filter: function(model, element) { return element.hasCategory("Guardian Mindfulness"); }
      });
      model.statadd("Speed", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Incorruptible"] = new engine.RulesElement({
    name: "Incorruptible",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2683",
    source: "Dragon Magazine 387",
    categories: ["Incorruptible", "ID_FMP_CLASS_FEATURE_2683", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Irrepressible Defense"] = new engine.RulesElement({
    name: "Irrepressible Defense",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2693",
    source: "Dragon Magazine 387",
    categories: ["Irrepressible Defense", "ID_FMP_CLASS_FEATURE_2693", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Never Again"] = new engine.RulesElement({
    name: "Never Again",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2694",
    source: "Dragon Magazine 387",
    categories: ["Never Again", "ID_FMP_CLASS_FEATURE_2694", "30"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12498"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["One for All"] = new engine.RulesElement({
    name: "One for All",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2701",
    source: "Dragon Magazine 387",
    categories: ["One for All", "ID_FMP_CLASS_FEATURE_2701", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Psychic Channel"] = new engine.RulesElement({
    name: "Psychic Channel",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2691",
    source: "Dragon Magazine 387",
    categories: ["Psychic Channel", "ID_FMP_CLASS_FEATURE_2691", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Psychic Network"] = new engine.RulesElement({
    name: "Psychic Network",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2689",
    source: "Dragon Magazine 387",
    categories: ["Psychic Network", "ID_FMP_CLASS_FEATURE_2689", "11"],
    rules: function(model) {
      model.select('Skill Training', 2, "Psychic Network", {
        filter: function(model, element) { return ((((element.hasCategory("ID_FMP_SKILL_2") || element.hasCategory("ID_FMP_SKILL_7")) || element.hasCategory("ID_FMP_SKILL_11")) || element.hasCategory("ID_FMP_SKILL_16")) || element.hasCategory("ID_FMP_SKILL_18")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Puissant Gaze"] = new engine.RulesElement({
    name: "Puissant Gaze",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2698",
    source: "Dragon Magazine 387",
    categories: ["Puissant Gaze", "ID_FMP_CLASS_FEATURE_2698", "16"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shard Swarm Reflex"] = new engine.RulesElement({
    name: "Shard Swarm Reflex",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2690",
    source: "Dragon Magazine 387",
    categories: ["Shard Swarm Reflex", "ID_FMP_CLASS_FEATURE_2690", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Shard Swarm Reflex:When you spend an action point to take an extra action, you can use your shard swarm power as a free action, even if you have already expended it in this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Strength in Numbers"] = new engine.RulesElement({
    name: "Strength in Numbers",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2700",
    source: "Dragon Magazine 387",
    categories: ["Strength in Numbers", "ID_FMP_CLASS_FEATURE_2700", "11"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* per ally adjacent to you */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unity Unbroken"] = new engine.RulesElement({
    name: "Unity Unbroken",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2684",
    source: "Dragon Magazine 387",
    categories: ["Unity Unbroken", "ID_FMP_CLASS_FEATURE_2684", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Unity Unbroken:When you spend an action point to take an extra action, until the end of your next turn your allies gain a +5 bonus to damage rolls against your oath of enmity target while they are flanking that target.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Weakness of the Hale"] = new engine.RulesElement({
    name: "Weakness of the Hale",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2697",
    source: "Dragon Magazine 387",
    categories: ["Weakness of the Hale", "ID_FMP_CLASS_FEATURE_2697", "11"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
