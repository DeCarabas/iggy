define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Hybrid Ardent Fortitude"] = new engine.RulesElement({
    name: "Hybrid Ardent Fortitude",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_ARDENT_FORTITUDE",
    source: "Core",
    categories: ["Hybrid Ardent Fortitude", "ID_INTERNAL_CLASS_FEATURE_HYBRID_ARDENT_FORTITUDE", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_588_DEFENSE", "ID_FMP_HYBRID_CLASS_588 Defense"],
    rules: function(model) {
      model.statadd("Fortitude Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Ardent Will"] = new engine.RulesElement({
    name: "Hybrid Ardent Will",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_ARDENT_WILL",
    source: "Core",
    categories: ["Hybrid Ardent Will", "ID_INTERNAL_CLASS_FEATURE_HYBRID_ARDENT_WILL", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_588_DEFENSE", "ID_FMP_HYBRID_CLASS_588 Defense"],
    rules: function(model) {
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Artificer Fortitude"] = new engine.RulesElement({
    name: "Hybrid Artificer Fortitude",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_ARTIFICER_FORTITUDE",
    source: "Core",
    categories: ["Hybrid Artificer Fortitude", "ID_INTERNAL_CLASS_FEATURE_HYBRID_ARTIFICER_FORTITUDE", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_536_DEFENSE", "ID_FMP_HYBRID_CLASS_536 Defense"],
    rules: function(model) {
      model.statadd("Fortitude Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Artificer Will"] = new engine.RulesElement({
    name: "Hybrid Artificer Will",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_ARTIFICER_WILL",
    source: "Core",
    categories: ["Hybrid Artificer Will", "ID_INTERNAL_CLASS_FEATURE_HYBRID_ARTIFICER_WILL", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_536_DEFENSE", "ID_FMP_HYBRID_CLASS_536 Defense"],
    rules: function(model) {
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Assassin Fortitude"] = new engine.RulesElement({
    name: "Hybrid Assassin Fortitude",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_ASSASSIN_FORTITUDE",
    source: "Core",
    categories: ["Hybrid Assassin Fortitude", "ID_INTERNAL_CLASS_FEATURE_HYBRID_ASSASSIN_FORTITUDE", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_641_DEFENSE", "ID_FMP_HYBRID_CLASS_641 Defense"],
    rules: function(model) {
      model.statadd("Fortitude Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Assassin Will"] = new engine.RulesElement({
    name: "Hybrid Assassin Will",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_ASSASSIN_WILL",
    source: "Core",
    categories: ["Hybrid Assassin Will", "ID_INTERNAL_CLASS_FEATURE_HYBRID_ASSASSIN_WILL", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_641_DEFENSE", "ID_FMP_HYBRID_CLASS_641 Defense"],
    rules: function(model) {
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Avenger Fortitude"] = new engine.RulesElement({
    name: "Hybrid Avenger Fortitude",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_AVENGER_FORTITUDE",
    source: "Core",
    categories: ["Hybrid Avenger Fortitude", "ID_INTERNAL_CLASS_FEATURE_HYBRID_AVENGER_FORTITUDE", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_439_DEFENSE", "ID_FMP_HYBRID_CLASS_439 Defense"],
    rules: function(model) {
      model.statadd("Fortitude Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Avenger Reflex"] = new engine.RulesElement({
    name: "Hybrid Avenger Reflex",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_AVENGER_REFLEX",
    source: "Core",
    categories: ["Hybrid Avenger Reflex", "ID_INTERNAL_CLASS_FEATURE_HYBRID_AVENGER_REFLEX", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_439_DEFENSE", "ID_FMP_HYBRID_CLASS_439 Defense"],
    rules: function(model) {
      model.statadd("Reflex Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Avenger Will"] = new engine.RulesElement({
    name: "Hybrid Avenger Will",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_AVENGER_WILL",
    source: "Core",
    categories: ["Hybrid Avenger Will", "ID_INTERNAL_CLASS_FEATURE_HYBRID_AVENGER_WILL", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_439_DEFENSE", "ID_FMP_HYBRID_CLASS_439 Defense"],
    rules: function(model) {
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Bard Reflex"] = new engine.RulesElement({
    name: "Hybrid Bard Reflex",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_BARD_REFLEX",
    source: "Core",
    categories: ["Hybrid Bard Reflex", "ID_INTERNAL_CLASS_FEATURE_HYBRID_BARD_REFLEX", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_441_DEFENSE", "ID_FMP_HYBRID_CLASS_441 Defense"],
    rules: function(model) {
      model.statadd("Reflex Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Bard Will"] = new engine.RulesElement({
    name: "Hybrid Bard Will",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_BARD_WILL",
    source: "Core",
    categories: ["Hybrid Bard Will", "ID_INTERNAL_CLASS_FEATURE_HYBRID_BARD_WILL", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_441_DEFENSE", "ID_FMP_HYBRID_CLASS_441 Defense"],
    rules: function(model) {
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Druid Reflex"] = new engine.RulesElement({
    name: "Hybrid Druid Reflex",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_DRUID_REFLEX",
    source: "Core",
    categories: ["Hybrid Druid Reflex", "ID_INTERNAL_CLASS_FEATURE_HYBRID_DRUID_REFLEX", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_442_DEFENSE", "ID_FMP_HYBRID_CLASS_442 Defense"],
    rules: function(model) {
      model.statadd("Reflex Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Druid Will"] = new engine.RulesElement({
    name: "Hybrid Druid Will",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_DRUID_WILL",
    source: "Core",
    categories: ["Hybrid Druid Will", "ID_INTERNAL_CLASS_FEATURE_HYBRID_DRUID_WILL", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_442_DEFENSE", "ID_FMP_HYBRID_CLASS_442 Defense"],
    rules: function(model) {
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Invoker Fortitude"] = new engine.RulesElement({
    name: "Hybrid Invoker Fortitude",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_INVOKER_FORTITUDE",
    source: "Core",
    categories: ["Hybrid Invoker Fortitude", "ID_INTERNAL_CLASS_FEATURE_HYBRID_INVOKER_FORTITUDE", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_443_DEFENSE", "ID_FMP_HYBRID_CLASS_443 Defense"],
    rules: function(model) {
      model.statadd("Fortitude Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Invoker Reflex"] = new engine.RulesElement({
    name: "Hybrid Invoker Reflex",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_INVOKER_REFLEX",
    source: "Core",
    categories: ["Hybrid Invoker Reflex", "ID_INTERNAL_CLASS_FEATURE_HYBRID_INVOKER_REFLEX", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_443_DEFENSE", "ID_FMP_HYBRID_CLASS_443 Defense"],
    rules: function(model) {
      model.statadd("Reflex Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Invoker Will"] = new engine.RulesElement({
    name: "Hybrid Invoker Will",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_INVOKER_WILL",
    source: "Core",
    categories: ["Hybrid Invoker Will", "ID_INTERNAL_CLASS_FEATURE_HYBRID_INVOKER_WILL", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_443_DEFENSE", "ID_FMP_HYBRID_CLASS_443 Defense"],
    rules: function(model) {
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Monk Fortitude"] = new engine.RulesElement({
    name: "Hybrid Monk Fortitude",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_MONK_FORTITUDE",
    source: "Core",
    categories: ["Hybrid Monk Fortitude", "ID_INTERNAL_CLASS_FEATURE_HYBRID_MONK_FORTITUDE", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_609_DEFENSE", "ID_FMP_HYBRID_CLASS_609 Defense"],
    rules: function(model) {
      model.statadd("Fortitude Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Monk Reflex"] = new engine.RulesElement({
    name: "Hybrid Monk Reflex",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_MONK_REFLEX",
    source: "Core",
    categories: ["Hybrid Monk Reflex", "ID_INTERNAL_CLASS_FEATURE_HYBRID_MONK_REFLEX", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_609_DEFENSE", "ID_FMP_HYBRID_CLASS_609 Defense"],
    rules: function(model) {
      model.statadd("Reflex Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Monk Will"] = new engine.RulesElement({
    name: "Hybrid Monk Will",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_MONK_WILL",
    source: "Core",
    categories: ["Hybrid Monk Will", "ID_INTERNAL_CLASS_FEATURE_HYBRID_MONK_WILL", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_609_DEFENSE", "ID_FMP_HYBRID_CLASS_609 Defense"],
    rules: function(model) {
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Paladin Fortitude"] = new engine.RulesElement({
    name: "Hybrid Paladin Fortitude",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_PALADIN_FORTITUDE",
    source: "Core",
    categories: ["Hybrid Paladin Fortitude", "ID_INTERNAL_CLASS_FEATURE_HYBRID_PALADIN_FORTITUDE", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_354_DEFENSE", "ID_FMP_HYBRID_CLASS_354 Defense"],
    rules: function(model) {
      model.statadd("Fortitude Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Paladin Reflex"] = new engine.RulesElement({
    name: "Hybrid Paladin Reflex",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_PALADIN_REFLEX",
    source: "Core",
    categories: ["Hybrid Paladin Reflex", "ID_INTERNAL_CLASS_FEATURE_HYBRID_PALADIN_REFLEX", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_354_DEFENSE", "ID_FMP_HYBRID_CLASS_354 Defense"],
    rules: function(model) {
      model.statadd("Reflex Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Paladin Will"] = new engine.RulesElement({
    name: "Hybrid Paladin Will",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_PALADIN_WILL",
    source: "Core",
    categories: ["Hybrid Paladin Will", "ID_INTERNAL_CLASS_FEATURE_HYBRID_PALADIN_WILL", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_354_DEFENSE", "ID_FMP_HYBRID_CLASS_354 Defense"],
    rules: function(model) {
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Ranger Fortitude"] = new engine.RulesElement({
    name: "Hybrid Ranger Fortitude",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_RANGER_FORTITUDE",
    source: "Core",
    categories: ["Hybrid Ranger Fortitude", "ID_INTERNAL_CLASS_FEATURE_HYBRID_RANGER_FORTITUDE", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_355_DEFENSE", "ID_FMP_HYBRID_CLASS_355 Defense"],
    rules: function(model) {
      model.statadd("Fortitude Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Ranger Reflex"] = new engine.RulesElement({
    name: "Hybrid Ranger Reflex",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_RANGER_REFLEX",
    source: "Core",
    categories: ["Hybrid Ranger Reflex", "ID_INTERNAL_CLASS_FEATURE_HYBRID_RANGER_REFLEX", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_355_DEFENSE", "ID_FMP_HYBRID_CLASS_355 Defense"],
    rules: function(model) {
      model.statadd("Reflex Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Seeker Reflex"] = new engine.RulesElement({
    name: "Hybrid Seeker Reflex",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_SEEKER_REFLEX",
    source: "Core",
    categories: ["Hybrid Seeker Reflex", "ID_INTERNAL_CLASS_FEATURE_HYBRID_SEEKER_REFLEX", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_612_DEFENSE", "ID_FMP_HYBRID_CLASS_612 Defense"],
    rules: function(model) {
      model.statadd("Reflex Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Seeker Will"] = new engine.RulesElement({
    name: "Hybrid Seeker Will",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_SEEKER_WILL",
    source: "Core",
    categories: ["Hybrid Seeker Will", "ID_INTERNAL_CLASS_FEATURE_HYBRID_SEEKER_WILL", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_612_DEFENSE", "ID_FMP_HYBRID_CLASS_612 Defense"],
    rules: function(model) {
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Shaman Fortitude"] = new engine.RulesElement({
    name: "Hybrid Shaman Fortitude",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_SHAMAN_FORTITUDE",
    source: "Core",
    categories: ["Hybrid Shaman Fortitude", "ID_INTERNAL_CLASS_FEATURE_HYBRID_SHAMAN_FORTITUDE", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_444_DEFENSE", "ID_FMP_HYBRID_CLASS_444 Defense"],
    rules: function(model) {
      model.statadd("Fortitude Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Shaman Will"] = new engine.RulesElement({
    name: "Hybrid Shaman Will",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_SHAMAN_WILL",
    source: "Core",
    categories: ["Hybrid Shaman Will", "ID_INTERNAL_CLASS_FEATURE_HYBRID_SHAMAN_WILL", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_444_DEFENSE", "ID_FMP_HYBRID_CLASS_444 Defense"],
    rules: function(model) {
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Warden Fortitude"] = new engine.RulesElement({
    name: "Hybrid Warden Fortitude",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_WARDEN_FORTITUDE",
    source: "Core",
    categories: ["Hybrid Warden Fortitude", "ID_INTERNAL_CLASS_FEATURE_HYBRID_WARDEN_FORTITUDE", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_446_DEFENSE", "ID_FMP_HYBRID_CLASS_446 Defense"],
    rules: function(model) {
      model.statadd("Fortitude Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Warden Will"] = new engine.RulesElement({
    name: "Hybrid Warden Will",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_WARDEN_WILL",
    source: "Core",
    categories: ["Hybrid Warden Will", "ID_INTERNAL_CLASS_FEATURE_HYBRID_WARDEN_WILL", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_446_DEFENSE", "ID_FMP_HYBRID_CLASS_446 Defense"],
    rules: function(model) {
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Warlock Reflex"] = new engine.RulesElement({
    name: "Hybrid Warlock Reflex",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_WARLOCK_REFLEX",
    source: "Core",
    categories: ["Hybrid Warlock Reflex", "ID_INTERNAL_CLASS_FEATURE_HYBRID_WARLOCK_REFLEX", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_358_DEFENSE", "ID_FMP_HYBRID_CLASS_358 Defense"],
    rules: function(model) {
      model.statadd("Reflex Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Warlock Will"] = new engine.RulesElement({
    name: "Hybrid Warlock Will",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_WARLOCK_WILL",
    source: "Core",
    categories: ["Hybrid Warlock Will", "ID_INTERNAL_CLASS_FEATURE_HYBRID_WARLOCK_WILL", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_358_DEFENSE", "ID_FMP_HYBRID_CLASS_358 Defense"],
    rules: function(model) {
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Warlord Fortitude"] = new engine.RulesElement({
    name: "Hybrid Warlord Fortitude",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_WARLORD_FORTITUDE",
    source: "Core",
    categories: ["Hybrid Warlord Fortitude", "ID_INTERNAL_CLASS_FEATURE_HYBRID_WARLORD_FORTITUDE", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_359_DEFENSE", "ID_FMP_HYBRID_CLASS_359 Defense"],
    rules: function(model) {
      model.statadd("Fortitude Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Warlord Will"] = new engine.RulesElement({
    name: "Hybrid Warlord Will",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_WARLORD_WILL",
    source: "Core",
    categories: ["Hybrid Warlord Will", "ID_INTERNAL_CLASS_FEATURE_HYBRID_WARLORD_WILL", "ID_INTERNAL_CATEGORY_ID_FMP_HYBRID_CLASS_359_DEFENSE", "ID_FMP_HYBRID_CLASS_359 Defense"],
    rules: function(model) {
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
