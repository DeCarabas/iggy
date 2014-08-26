define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Avandra's Luck"] = new engine.RulesElement({
    name: "Avandra's Luck",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2481",
    source: "Dragon Magazine 384",
    categories: ["Avandra's Luck", "ID_FMP_CLASS_FEATURE_2481", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fortune Blessed Implements"] = new engine.RulesElement({
    name: "Fortune Blessed Implements",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2483",
    source: "Dragon Magazine 384",
    categories: ["Fortune Blessed Implements", "ID_FMP_CLASS_FEATURE_2483", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["From the Shadows"] = new engine.RulesElement({
    name: "From the Shadows",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2477",
    source: "Dragon Magazine 384",
    categories: ["From the Shadows", "ID_FMP_CLASS_FEATURE_2477", "16"],
    rules: function(model) {
      model.statadd("Damage", "+2d6");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Icy Presence"] = new engine.RulesElement({
    name: "Icy Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2446",
    source: "Dragon Magazine 384",
    categories: ["Icy Presence", "ID_FMP_CLASS_FEATURE_2446", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Illusory Action"] = new engine.RulesElement({
    name: "Illusory Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2479",
    source: "Dragon Magazine 384",
    categories: ["Illusory Action", "ID_FMP_CLASS_FEATURE_2479", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Illusory Action:When you spend an action point to take an extra action, you regain the use of your fade away power.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Insidious Mind"] = new engine.RulesElement({
    name: "Insidious Mind",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2480",
    source: "Dragon Magazine 384",
    categories: ["Insidious Mind", "ID_FMP_CLASS_FEATURE_2480", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Leaping Shadow Action"] = new engine.RulesElement({
    name: "Leaping Shadow Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2476",
    source: "Dragon Magazine 384",
    categories: ["Leaping Shadow Action", "ID_FMP_CLASS_FEATURE_2476", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Leaping Shadow Action:When you spend an action point to take an extra action, you can teleport your speed before or after the action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Lucky Action"] = new engine.RulesElement({
    name: "Lucky Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2484",
    source: "Dragon Magazine 384",
    categories: ["Lucky Action", "ID_FMP_CLASS_FEATURE_2484", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Lucky Action:Whenever you spend an action point to take an extra action, you can make a saving throw. If the saving throw succeeds, you also gain one luck token.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mielikki's Generosity"] = new engine.RulesElement({
    name: "Mielikki's Generosity",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2449",
    source: "Dragon Magazine 384",
    categories: ["Mielikki's Generosity", "ID_FMP_CLASS_FEATURE_2449", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Mielikki's Generosity:When you spend an action point, instead of gaining an extra action, you can grant an ally you can see an extra action (minor, move, or standard) that the ally can take as a free action. You can then spend a healing surge.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mielikki's Judgment"] = new engine.RulesElement({
    name: "Mielikki's Judgment",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2451",
    source: "Dragon Magazine 384",
    categories: ["Mielikki's Judgment", "ID_FMP_CLASS_FEATURE_2451", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Mielikki's Sight"] = new engine.RulesElement({
    name: "Mielikki's Sight",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2450",
    source: "Dragon Magazine 384",
    categories: ["Mielikki's Sight", "ID_FMP_CLASS_FEATURE_2450", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Shadowed Aegis"] = new engine.RulesElement({
    name: "Shadowed Aegis",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2478",
    source: "Dragon Magazine 384",
    categories: ["Shadowed Aegis", "ID_FMP_CLASS_FEATURE_2478", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Swift Luck"] = new engine.RulesElement({
    name: "Swift Luck",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2485",
    source: "Dragon Magazine 384",
    categories: ["Swift Luck", "ID_FMP_CLASS_FEATURE_2485", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Veil of Darkness"] = new engine.RulesElement({
    name: "Veil of Darkness",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2475",
    source: "Dragon Magazine 384",
    categories: ["Veil of Darkness", "ID_FMP_CLASS_FEATURE_2475", "11"],
    rules: function(model) {
      model.statadd("Stealth Misc", function() { return model.stat("Charisma modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Winter's Touch"] = new engine.RulesElement({
    name: "Winter's Touch",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2444",
    source: "Dragon Magazine 384",
    categories: ["Winter's Touch", "ID_FMP_CLASS_FEATURE_2444", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Wintersoul Flurry Action"] = new engine.RulesElement({
    name: "Wintersoul Flurry Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2445",
    source: "Dragon Magazine 384",
    categories: ["Wintersoul Flurry Action", "ID_FMP_CLASS_FEATURE_2445", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Wintersoul Flurry Action:When you spend an action point to make an attack, you create a zone of flurrying snow in a close burst 5 that lasts until the end of your next turn. Squares in the zone are difficult terrain and lightly obscured for enemies.");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
