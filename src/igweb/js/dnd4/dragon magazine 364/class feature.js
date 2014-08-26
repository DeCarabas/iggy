define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Beacon for the Pack"] = new engine.RulesElement({
    name: "Beacon for the Pack",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_799",
    source: "Dragon Magazine 364",
    categories: ["Beacon for the Pack", "ID_FMP_CLASS_FEATURE_799", "16"],
    rules: function(model) {
      model.statadd("ALLY.Action Point", "Beacon for the Pack:When an ally takes an action granted by an action point, that ally can also move 3 squares or shift 1 square");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Empathic Bond"] = new engine.RulesElement({
    name: "Empathic Bond",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_796",
    source: "Dragon Magazine 364",
    categories: ["Empathic Bond", "ID_FMP_CLASS_FEATURE_796", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Healing Action"] = new engine.RulesElement({
    name: "Healing Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_794",
    source: "Dragon Magazine 364",
    categories: ["Healing Action", "ID_FMP_CLASS_FEATURE_794", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Healing Action:When you spend an action point to take an extra action, you or an ally that can see you regains a number of hit points equal to the higher of your Wisdom modifier or Charisma modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Maldeen's Hunt"] = new engine.RulesElement({
    name: "Maldeen's Hunt",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_797",
    source: "Dragon Magazine 364",
    categories: ["Maldeen's Hunt", "ID_FMP_CLASS_FEATURE_797", "11"],
    rules: function(model) {
      model.statadd("Perception Misc", function() { /* to track creatures */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Pack Master's Action"] = new engine.RulesElement({
    name: "Pack Master's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_798",
    source: "Dragon Magazine 364",
    categories: ["Pack Master's Action", "ID_FMP_CLASS_FEATURE_798", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Pack Master's Action:You can spend an action point to give an ally a standard action instead of taking one yourself. The ally takes the standard action as part of your turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Social Savant"] = new engine.RulesElement({
    name: "Social Savant",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_795",
    source: "Dragon Magazine 364",
    categories: ["Social Savant", "ID_FMP_CLASS_FEATURE_795", "11"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", 1);
      model.statadd("Heal Misc", 1);
      model.statadd("Insight Misc", 1);
      model.statadd("Nature Misc", 1);
      model.statadd("Perception Misc", 1);
      model.statadd("Bluff Misc", 1);
      model.statadd("Diplomacy Misc", 1);
      model.statadd("Intimidate Misc", 1);
      model.statadd("Streetwise Misc", 1);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
