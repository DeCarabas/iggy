define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Academy Prodigy (Arcana)"] = new engine.RulesElement({
    name: "Academy Prodigy (Arcana)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ACADEMY_PRODIGY_(ARCANA)",
    source: "Dragon Magazine 390",
    categories: ["Academy Prodigy (Arcana)", "ID_INTERNAL_CLASS_FEATURE_ACADEMY_PRODIGY_(ARCANA)", "ID_FMP_FEAT_3438", "Academy Prodigy"],
    rules: function(model) {
      model.statadd("Arcana Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Academy Prodigy (Diplomacy)"] = new engine.RulesElement({
    name: "Academy Prodigy (Diplomacy)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ACADEMY_PRODIGY_(DIPLOMACY)",
    source: "Dragon Magazine 390",
    categories: ["Academy Prodigy (Diplomacy)", "ID_INTERNAL_CLASS_FEATURE_ACADEMY_PRODIGY_(DIPLOMACY)", "ID_FMP_FEAT_3438", "Academy Prodigy"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Academy Prodigy (Dungeoneering)"] = new engine.RulesElement({
    name: "Academy Prodigy (Dungeoneering)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ACADEMY_PRODIGY_(DUNGEONEERING)",
    source: "Dragon Magazine 390",
    categories: ["Academy Prodigy (Dungeoneering)", "ID_INTERNAL_CLASS_FEATURE_ACADEMY_PRODIGY_(DUNGEONEERING)", "ID_FMP_FEAT_3438", "Academy Prodigy"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Academy Prodigy (Heal)"] = new engine.RulesElement({
    name: "Academy Prodigy (Heal)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ACADEMY_PRODIGY_(HEAL)",
    source: "Dragon Magazine 390",
    categories: ["Academy Prodigy (Heal)", "ID_INTERNAL_CLASS_FEATURE_ACADEMY_PRODIGY_(HEAL)", "ID_FMP_FEAT_3438", "Academy Prodigy"],
    rules: function(model) {
      model.statadd("Heal Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Academy Prodigy (History)"] = new engine.RulesElement({
    name: "Academy Prodigy (History)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ACADEMY_PRODIGY_(HISTORY)",
    source: "Dragon Magazine 390",
    categories: ["Academy Prodigy (History)", "ID_INTERNAL_CLASS_FEATURE_ACADEMY_PRODIGY_(HISTORY)", "ID_FMP_FEAT_3438", "Academy Prodigy"],
    rules: function(model) {
      model.statadd("History Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Academy Prodigy (Perception)"] = new engine.RulesElement({
    name: "Academy Prodigy (Perception)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ACADEMY_PRODIGY_(PERCEPTION)",
    source: "Dragon Magazine 390",
    categories: ["Academy Prodigy (Perception)", "ID_INTERNAL_CLASS_FEATURE_ACADEMY_PRODIGY_(PERCEPTION)", "ID_FMP_FEAT_3438", "Academy Prodigy"],
    rules: function(model) {
      model.statadd("Perception Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Academy Prodigy (Thievery)"] = new engine.RulesElement({
    name: "Academy Prodigy (Thievery)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ACADEMY_PRODIGY_(THIEVERY)",
    source: "Dragon Magazine 390",
    categories: ["Academy Prodigy (Thievery)", "ID_INTERNAL_CLASS_FEATURE_ACADEMY_PRODIGY_(THIEVERY)", "ID_FMP_FEAT_3438", "Academy Prodigy"],
    rules: function(model) {
      model.statadd("Thievery Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Adaptable Witchery"] = new engine.RulesElement({
    name: "Adaptable Witchery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3172",
    source: "Dragon Magazine 390",
    categories: ["Adaptable Witchery", "ID_FMP_CLASS_FEATURE_3172", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Presence"] = new engine.RulesElement({
    name: "Arcane Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3174",
    source: "Dragon Magazine 390",
    categories: ["Arcane Presence", "ID_FMP_CLASS_FEATURE_3174", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Attack with Care"] = new engine.RulesElement({
    name: "Attack with Care",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3002",
    source: "Dragon Magazine 390",
    categories: ["Attack with Care", "ID_FMP_CLASS_FEATURE_3002", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Awakened Wrath"] = new engine.RulesElement({
    name: "Awakened Wrath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3169",
    source: "Dragon Magazine 390",
    categories: ["Awakened Wrath", "ID_FMP_CLASS_FEATURE_3169", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bewitching Action"] = new engine.RulesElement({
    name: "Bewitching Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3173",
    source: "Dragon Magazine 390",
    categories: ["Bewitching Action", "ID_FMP_CLASS_FEATURE_3173", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Bewitching Action:Whenever you or an ally within 5 squares of you spends an action point to make an attack with an arcane power, you may slide each enemy adjacent to you 1 square.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Champion's Presence"] = new engine.RulesElement({
    name: "Champion's Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3163",
    source: "Dragon Magazine 390",
    categories: ["Champion's Presence", "ID_FMP_CLASS_FEATURE_3163", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Comrade's Help"] = new engine.RulesElement({
    name: "Comrade's Help",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3160",
    source: "Dragon Magazine 390",
    categories: ["Comrade's Help", "ID_FMP_CLASS_FEATURE_3160", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Defensive Word"] = new engine.RulesElement({
    name: "Defensive Word",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3164",
    source: "Dragon Magazine 390",
    categories: ["Defensive Word", "ID_FMP_CLASS_FEATURE_3164", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Disappearing Action"] = new engine.RulesElement({
    name: "Disappearing Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3000",
    source: "Dragon Magazine 390",
    categories: ["Disappearing Action", "ID_FMP_CLASS_FEATURE_3000", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Disappearing Action:When you spend an action point, as a free action before the end of your turn you can shift your speed and make a Stealth check to hide, ignoring the penalty to your Stealth check for movement.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fight For Your Freedom"] = new engine.RulesElement({
    name: "Fight For Your Freedom",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3159",
    source: "Dragon Magazine 390",
    categories: ["Fight For Your Freedom", "ID_FMP_CLASS_FEATURE_3159", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Fight For Your Freedom:When you spend an action point to take an extra action, all allies within 10 squares of you that are marked or grabbed by enemies can make a basic attack as a free action. If an ally's basic attack hits a target that is marking or grabbing that ally, the mark or grab ends. If no ally within range is marked or grabbed, you can instead choose one ally within 5 squares of you to make a basic attack as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Freedom Requires Vigilance"] = new engine.RulesElement({
    name: "Freedom Requires Vigilance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3161",
    source: "Dragon Magazine 390",
    categories: ["Freedom Requires Vigilance", "ID_FMP_CLASS_FEATURE_3161", "16"],
    rules: function(model) {
      model.statadd("Freedom Requires Vigilance", 2);
      model.statadd("Initiative Misc", function() { return model.stat("Freedom Requires Vigilance"); });
      model.statadd("Perception Misc", function() { return model.stat("Freedom Requires Vigilance"); });
      model.statadd("Insight Misc", function() { return model.stat("Freedom Requires Vigilance"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Inciting Action"] = new engine.RulesElement({
    name: "Inciting Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3170",
    source: "Dragon Magazine 390",
    categories: ["Inciting Action", "ID_FMP_CLASS_FEATURE_3170", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Inciting Action:Rather than gain an extra action, you may spend an action point to let one ally who can see and hear you make a charge attack with a bonus to the attack roll and damage roll equal to your Charisma modifier. If this attack misses, the ally grants combat advantage to all attackers until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Infectious Rage"] = new engine.RulesElement({
    name: "Infectious Rage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3171",
    source: "Dragon Magazine 390",
    categories: ["Infectious Rage", "ID_FMP_CLASS_FEATURE_3171", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Inspired Revival"] = new engine.RulesElement({
    name: "Inspired Revival",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3168",
    source: "Dragon Magazine 390",
    categories: ["Inspired Revival", "ID_FMP_CLASS_FEATURE_3168", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sacrificial Action (Sainted General)"] = new engine.RulesElement({
    name: "Sacrificial Action (Sainted General)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3167",
    source: "Dragon Magazine 390",
    categories: ["Sacrificial Action (Sainted General)", "ID_FMP_CLASS_FEATURE_3167", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Sacrificial Action (Sainted General):Whenever you hit with a paladin or warlord power, you may spend an action point to allow an ally within 5 squares of you to spend a healing surge and regain hit points equal to its surge value + your Strength modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sainted Challenge"] = new engine.RulesElement({
    name: "Sainted Challenge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3166",
    source: "Dragon Magazine 390",
    categories: ["Sainted Challenge", "ID_FMP_CLASS_FEATURE_3166", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Veteran Action"] = new engine.RulesElement({
    name: "Veteran Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3165",
    source: "Dragon Magazine 390",
    categories: ["Veteran Action", "ID_FMP_CLASS_FEATURE_3165", "16"],
    rules: function(model) {
      model.statadd("Action Point", "Veteran Action:When you spend an action point to make an extra attack, one ally adjacent to you may also make a melee basic attack as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Violent Emergence"] = new engine.RulesElement({
    name: "Violent Emergence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3001",
    source: "Dragon Magazine 390",
    categories: ["Violent Emergence", "ID_FMP_CLASS_FEATURE_3001", "11"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
