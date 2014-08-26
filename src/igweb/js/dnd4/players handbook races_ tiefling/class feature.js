define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Born to Rule"] = new engine.RulesElement({
    name: "Born to Rule",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2270",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Born to Rule", "ID_FMP_CLASS_FEATURE_2270", "21"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
      model.statadd("Charisma", 2);
      model.statadd("Diplomacy Misc", 2);
      model.statadd("Insight Misc", 2);
      model.statadd("Intimidate Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Calling Souls to Battle"] = new engine.RulesElement({
    name: "Calling Souls to Battle",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2264",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Calling Souls to Battle", "ID_FMP_CLASS_FEATURE_2264", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Calling Souls to Battle:You can spend an action point to teleport yourself and up to five willing allies that you can see to any squares adjacent to a single enemy within 10 squares that you can see. Each teleported character gains combat advantage against that enemy until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Chains of Their Sins"] = new engine.RulesElement({
    name: "Chains of Their Sins",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2259",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Chains of Their Sins", "ID_FMP_CLASS_FEATURE_2259", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Heaven's Keys"] = new engine.RulesElement({
    name: "Heaven's Keys",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2257",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Heaven's Keys", "ID_FMP_CLASS_FEATURE_2257", "11"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that daze, immobilize, stun, or restrain */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Imperial Wrath"] = new engine.RulesElement({
    name: "Imperial Wrath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2271",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Imperial Wrath", "ID_FMP_CLASS_FEATURE_2271", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Infernal Retribution"] = new engine.RulesElement({
    name: "Infernal Retribution",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2254",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Infernal Retribution", "ID_FMP_CLASS_FEATURE_2254", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Infernal Visions"] = new engine.RulesElement({
    name: "Infernal Visions",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2267",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Infernal Visions", "ID_FMP_CLASS_FEATURE_2267", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Infernal Visions:When you spend an action point to make an attack, and you miss at least one target, you can choose instead for the entire attack to have no effect (as if you hadn't used it). You regain the action point (but can't spend it again this turn), and you regain any powers used as part of the attack.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Irresistible Will of the Empire"] = new engine.RulesElement({
    name: "Irresistible Will of the Empire",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2272",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Irresistible Will of the Empire", "ID_FMP_CLASS_FEATURE_2272", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Jailor's Strength"] = new engine.RulesElement({
    name: "Jailor's Strength",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2258",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Jailor's Strength", "ID_FMP_CLASS_FEATURE_2258", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Jailor's Strength:When you spend an action point to take an action, until the end of your next turn any power you use that slows or immobilizes a target instead restrains the target for the duration.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mantic Eye"] = new engine.RulesElement({
    name: "Mantic Eye",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2268",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Mantic Eye", "ID_FMP_CLASS_FEATURE_2268", "11"],
    rules: function(model) {
      model.statadd("Insight", function() { return model.stat("Intelligence modifier"); }, "Ability");
      model.statadd("Insight", function() { return model.stat("Charisma modifier"); }, "Ability");
      model.statadd("Intimidate", function() { return model.stat("Intelligence modifier"); }, "Ability");
      model.statadd("Intimidate", function() { return model.stat("Wisdom modifier"); }, "Ability");
      model.statadd("Perception", function() { return model.stat("Intelligence modifier"); }, "Ability");
      model.statadd("Perception", function() { return model.stat("Charisma modifier"); }, "Ability");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Redeemer's Reward"] = new engine.RulesElement({
    name: "Redeemer's Reward",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2265",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Redeemer's Reward", "ID_FMP_CLASS_FEATURE_2265", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Rewards of Arcane Mystery"] = new engine.RulesElement({
    name: "Rewards of Arcane Mystery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2256",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Rewards of Arcane Mystery", "ID_FMP_CLASS_FEATURE_2256", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Secrets of Arcane Might"] = new engine.RulesElement({
    name: "Secrets of Arcane Might",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2255",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Secrets of Arcane Might", "ID_FMP_CLASS_FEATURE_2255", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Secrets of Arcane Might:When you spend an action point, add your Charisma or Intelligence modifier as extra damage on a hit with each arcane attack power you use before the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shared Prescience"] = new engine.RulesElement({
    name: "Shared Prescience",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2269",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Shared Prescience", "ID_FMP_CLASS_FEATURE_2269", "16"],
    rules: function(model) {
      model.statadd("Initiative Misc", function() { return model.stat("HALFMOD(Charisma)"); }, "Shared Prescience");
      model.statadd("Initiative Misc", function() { return model.stat("HALFMOD(Intelligence)"); }, "Shared Prescience");
      model.statadd("Initiative Misc", function() { return model.stat("HALFMOD(Wisdom)"); }, "Shared Prescience");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spirit Shielding"] = new engine.RulesElement({
    name: "Spirit Shielding",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2266",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Spirit Shielding", "ID_FMP_CLASS_FEATURE_2266", "16"],
    rules: function(model) {
      model.statadd("Spirit Shielding", 5);
      model.statadd("Spirit Shielding", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("resist:necrotic", function() { return model.stat("Spirit Shielding"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Tail Sweep Action"] = new engine.RulesElement({
    name: "Tail Sweep Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2262",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Tail Sweep Action", "ID_FMP_CLASS_FEATURE_2262", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Tail Sweep Action:When you spend an action point to make a melee attack, each enemy adjacent to the target of the attack is knocked prone if you hit or miss.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Turathi Tenacity"] = new engine.RulesElement({
    name: "Turathi Tenacity",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2261",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Turathi Tenacity", "ID_FMP_CLASS_FEATURE_2261", "11"],
    rules: function(model) {
      model.statadd("Turathi Tenacity", function() { return model.stat("Intelligence modifier"); }, "Turathi Tenacity");
      model.statadd("Turathi Tenacity", function() { return model.stat("Charisma modifier"); }, "Turathi Tenacity");
      model.statadd("Healing Surge Value", function() { return model.stat("Turathi Tenacity"); });
      model.statadd("Healing Surges", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Turathi Vigor"] = new engine.RulesElement({
    name: "Turathi Vigor",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2263",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Turathi Vigor", "ID_FMP_CLASS_FEATURE_2263", "16"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
