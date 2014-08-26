define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Against the Shadows"] = new engine.RulesElement({
    name: "Against the Shadows",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_875",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    categories: ["Against the Shadows", "ID_FMP_CLASS_FEATURE_875", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Awing Action"] = new engine.RulesElement({
    name: "Awing Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1058",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    categories: ["Awing Action", "ID_FMP_CLASS_FEATURE_1058", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Awing Action:When you spend an action point, each enemy you hit this turn takes a -2 penalty to defenses until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blood-Calling Action"] = new engine.RulesElement({
    name: "Blood-Calling Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1307",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    categories: ["Blood-Calling Action", "ID_FMP_CLASS_FEATURE_1307", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Blood-Calling Action:When you spend an action point to make an extra attack, you also mark all enemies within close burst 2 until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bringer of Dooms"] = new engine.RulesElement({
    name: "Bringer of Dooms",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1340",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    categories: ["Bringer of Dooms", "ID_FMP_CLASS_FEATURE_1340", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Caiphon's Guidance"] = new engine.RulesElement({
    name: "Caiphon's Guidance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_878",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    categories: ["Caiphon's Guidance", "ID_FMP_CLASS_FEATURE_878", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Caiphon's Intercession"] = new engine.RulesElement({
    name: "Caiphon's Intercession",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_879",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    categories: ["Caiphon's Intercession", "ID_FMP_CLASS_FEATURE_879", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Devourer of Fate"] = new engine.RulesElement({
    name: "Devourer of Fate",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1339",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    categories: ["Devourer of Fate", "ID_FMP_CLASS_FEATURE_1339", "24"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that a save can end that are caused by the target of your immortal curse */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Immortal Curse"] = new engine.RulesElement({
    name: "Immortal Curse",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1338",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    categories: ["Immortal Curse", "ID_FMP_CLASS_FEATURE_1338", "21"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6604"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Marked Blood"] = new engine.RulesElement({
    name: "Marked Blood",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1309",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    categories: ["Marked Blood", "ID_FMP_CLASS_FEATURE_1309", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Seize Opening"] = new engine.RulesElement({
    name: "Seize Opening",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1060",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    categories: ["Seize Opening", "ID_FMP_CLASS_FEATURE_1060", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Shadowslayer"] = new engine.RulesElement({
    name: "Shadowslayer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_876",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    categories: ["Shadowslayer", "ID_FMP_CLASS_FEATURE_876", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Star Bright"] = new engine.RulesElement({
    name: "Star Bright",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_877",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    categories: ["Star Bright", "ID_FMP_CLASS_FEATURE_877", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Star Bright:When you spend an action point to take an extra action, if you use your action to make an attack that hits, that hit deals ongoing 5 radiant damage (save ends). Such powers are considered to have the radiant keyword.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Starborn"] = new engine.RulesElement({
    name: "Starborn",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_880",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    categories: ["Starborn", "ID_FMP_CLASS_FEATURE_880", "21"],
    rules: function(model) {
      model.statadd("Starborn", 10);
      model.statadd("Starborn", function() { return model.stat("level"); });
      model.statadd("resist:fire", function() { return model.stat("Starborn"); }, "resist");
      model.statadd("resist:radiant", function() { return model.stat("Starborn"); }, "resist");
      model.statadd("Damage", function() { /* if the target is granting combat advantage to you */ return model.stat("Intelligence modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Starburst"] = new engine.RulesElement({
    name: "Starburst",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_881",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    categories: ["Starburst", "ID_FMP_CLASS_FEATURE_881", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Starry Rift"] = new engine.RulesElement({
    name: "Starry Rift",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_882",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    categories: ["Starry Rift", "ID_FMP_CLASS_FEATURE_882", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Study Foe"] = new engine.RulesElement({
    name: "Study Foe",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1059",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    categories: ["Study Foe", "ID_FMP_CLASS_FEATURE_1059", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Taste for Blood"] = new engine.RulesElement({
    name: "Taste for Blood",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1308",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    categories: ["Taste for Blood", "ID_FMP_CLASS_FEATURE_1308", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Watcher of the Night's Action"] = new engine.RulesElement({
    name: "Watcher of the Night's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_874",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    categories: ["Watcher of the Night's Action", "ID_FMP_CLASS_FEATURE_874", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Watcher of the Night's Action:When you spend an action point to take an extra action, you also gain a +5 power bonus to Stealth and Perception checks (including passive Perception checks) until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
