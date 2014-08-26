define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Bloodsmith Action"] = new engine.RulesElement({
    name: "Bloodsmith Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1902",
    source: "Dragon Magazine 377",
    categories: ["Bloodsmith Action", "ID_FMP_CLASS_FEATURE_1902", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Bloodsmith Action:When you spend an action point to make an arcane attack and your familiar is in active mode, you can make the attack originate from your familiar's space.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Captivating Presence"] = new engine.RulesElement({
    name: "Captivating Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1892",
    source: "Dragon Magazine 377",
    categories: ["Captivating Presence", "ID_FMP_CLASS_FEATURE_1892", "11"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2);
      model.statadd("Insight Misc", 2);
      model.statadd("Intimidate Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Familiar Blood Bond"] = new engine.RulesElement({
    name: "Familiar Blood Bond",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1901",
    source: "Dragon Magazine 377",
    categories: ["Familiar Blood Bond", "ID_FMP_CLASS_FEATURE_1901", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Martyr's Blood"] = new engine.RulesElement({
    name: "Martyr's Blood",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1894",
    source: "Dragon Magazine 377",
    categories: ["Martyr's Blood", "ID_FMP_CLASS_FEATURE_1894", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Second Familiar"] = new engine.RulesElement({
    name: "Second Familiar",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1903",
    source: "Dragon Magazine 377",
    categories: ["Second Familiar", "ID_FMP_CLASS_FEATURE_1903", "16"],
    rules: function(model) {
      model.select('Familiar', 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Vengeance's Imperative"] = new engine.RulesElement({
    name: "Vengeance's Imperative",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1898",
    source: "Dragon Magazine 377",
    categories: ["Vengeance's Imperative", "ID_FMP_CLASS_FEATURE_1898", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Vengeful Action"] = new engine.RulesElement({
    name: "Vengeful Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1896",
    source: "Dragon Magazine 377",
    categories: ["Vengeful Action", "ID_FMP_CLASS_FEATURE_1896", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Vengeful Action:When an enemy you have combat advantage against hits an ally you can see, you can spend an action point as an immediate interrupt to make a basic attack against that enemy");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Vengeful Action (Vengeful Crusader)"] = new engine.RulesElement({
    name: "Vengeful Action (Vengeful Crusader)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1899",
    source: "Dragon Magazine 377",
    categories: ["Vengeful Action (Vengeful Crusader)", "ID_FMP_CLASS_FEATURE_1899", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Vengeful Action (Vengeful Crusader):Whenever you spend an action point while you are bloodied, you can subject each enemy you can see within 3 squares of you to your divine sanction until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Vengeful Shield"] = new engine.RulesElement({
    name: "Vengeful Shield",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1900",
    source: "Dragon Magazine 377",
    categories: ["Vengeful Shield", "ID_FMP_CLASS_FEATURE_1900", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Watcher's Insight"] = new engine.RulesElement({
    name: "Watcher's Insight",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1895",
    source: "Dragon Magazine 377",
    categories: ["Watcher's Insight", "ID_FMP_CLASS_FEATURE_1895", "11"],
    rules: function(model) {
      model.statadd("Insight Misc", 2);
      model.statadd("Perception Misc", 2);
      model.statadd("Stealth Misc", 2);
      model.statadd("Saving Throws", function() { /* against charm, fear, and illusion effects */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Witnessed Weakness"] = new engine.RulesElement({
    name: "Witnessed Weakness",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1897",
    source: "Dragon Magazine 377",
    categories: ["Witnessed Weakness", "ID_FMP_CLASS_FEATURE_1897", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Zealous Action"] = new engine.RulesElement({
    name: "Zealous Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1893",
    source: "Dragon Magazine 377",
    categories: ["Zealous Action", "ID_FMP_CLASS_FEATURE_1893", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Zealous Action:When you spend an action point to take an extra action, each ally within 3 squares of you who can see you gains temporary hit points equal to one-half your level and a +2 bonus to attack rolls until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
