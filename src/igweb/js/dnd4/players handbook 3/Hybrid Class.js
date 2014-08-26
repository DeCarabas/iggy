define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Hybrid_Class = types['Hybrid Class'] || (types['Hybrid Class'] = {});
  te = Hybrid_Class["Hybrid Ardent"] = new engine.RulesElement({
    name: "Hybrid Ardent",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_588",
    source: "Player's Handbook 3",
    categories: ["Hybrid Ardent", "ID_FMP_HYBRID_CLASS_588"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_ARDENT"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_588");
      model.statadd("_LEVEL-ONE-HPS", 6);
      model.statadd("_PER-LEVEL-HPS", 2);
      model.statadd("Healing Surges", 3);
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_588 Defense"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Artificer"] = new engine.RulesElement({
    name: "Hybrid Artificer",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_536",
    source: "Player's Handbook 3",
    categories: ["Hybrid Artificer", "ID_FMP_HYBRID_CLASS_536"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_ARTIFICER"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_536");
      model.statadd("_LEVEL-ONE-HPS", 6);
      model.statadd("_PER-LEVEL-HPS", 2);
      model.statadd("Healing Surges", 3);
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_536 Defense"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Avenger"] = new engine.RulesElement({
    name: "Hybrid Avenger",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_439",
    source: "Player's Handbook 3",
    categories: ["Hybrid Avenger", "ID_FMP_HYBRID_CLASS_439"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_AVENGER"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_439");
      model.statadd("_LEVEL-ONE-HPS", 7);
      model.statadd("_PER-LEVEL-HPS", 3);
      model.statadd("Healing Surges", 3);
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_439 Defense"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Barbarian"] = new engine.RulesElement({
    name: "Hybrid Barbarian",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_440",
    source: "Player's Handbook 3",
    categories: ["Hybrid Barbarian", "ID_FMP_HYBRID_CLASS_440"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_BARBARIAN"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_440");
      model.statadd("_LEVEL-ONE-HPS", 7);
      model.statadd("_PER-LEVEL-HPS", 3);
      model.statadd("Healing Surges", 4);
      model.statadd("Fortitude Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Bard"] = new engine.RulesElement({
    name: "Hybrid Bard",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_441",
    source: "Player's Handbook 3",
    categories: ["Hybrid Bard", "ID_FMP_HYBRID_CLASS_441"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_BARD"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_441");
      model.statadd("_LEVEL-ONE-HPS", 6);
      model.statadd("_PER-LEVEL-HPS", 2);
      model.statadd("Healing Surges", 3);
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_441 Defense"); }
      });
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_441"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Battlemind"] = new engine.RulesElement({
    name: "Hybrid Battlemind",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_590",
    source: "Player's Handbook 3",
    categories: ["Hybrid Battlemind", "ID_FMP_HYBRID_CLASS_590"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_BATTLEMIND"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_590");
      model.statadd("_LEVEL-ONE-HPS", 7);
      model.statadd("_PER-LEVEL-HPS", 3);
      model.statadd("Healing Surges", 4);
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Cleric"] = new engine.RulesElement({
    name: "Hybrid Cleric",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_352",
    source: "Player's Handbook 3",
    categories: ["Hybrid Cleric", "ID_FMP_HYBRID_CLASS_352"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_CLERIC"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_352");
      model.statadd("_LEVEL-ONE-HPS", 6);
      model.statadd("_PER-LEVEL-HPS", 2);
      model.statadd("Healing Surges", 3);
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Druid"] = new engine.RulesElement({
    name: "Hybrid Druid",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_442",
    source: "Player's Handbook 3",
    categories: ["Hybrid Druid", "ID_FMP_HYBRID_CLASS_442"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_DRUID"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_442");
      model.statadd("_LEVEL-ONE-HPS", 6);
      model.statadd("_PER-LEVEL-HPS", 2);
      model.statadd("Healing Surges", 3);
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_442 Defense"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Fighter"] = new engine.RulesElement({
    name: "Hybrid Fighter",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_353",
    source: "Player's Handbook 3",
    categories: ["Hybrid Fighter", "ID_FMP_HYBRID_CLASS_353"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_FIGHTER"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_353");
      model.statadd("_LEVEL-ONE-HPS", 7);
      model.statadd("_PER-LEVEL-HPS", 3);
      model.statadd("Healing Surges", 4);
      model.statadd("Fortitude Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Invoker"] = new engine.RulesElement({
    name: "Hybrid Invoker",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_443",
    source: "Player's Handbook 3",
    categories: ["Hybrid Invoker", "ID_FMP_HYBRID_CLASS_443"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_INVOKER"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_443");
      model.statadd("_LEVEL-ONE-HPS", 5);
      model.statadd("_PER-LEVEL-HPS", 2);
      model.statadd("Healing Surges", 3);
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_443 Defense"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Monk"] = new engine.RulesElement({
    name: "Hybrid Monk",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_609",
    source: "Player's Handbook 3",
    categories: ["Hybrid Monk", "ID_FMP_HYBRID_CLASS_609"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_MONK"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_609");
      model.statadd("_LEVEL-ONE-HPS", 6);
      model.statadd("_PER-LEVEL-HPS", 2);
      model.statadd("Healing Surges", 3);
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_609 Defense"); }
      });
      model.statadd("_WeaponsAsImplements", 1);
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Paladin"] = new engine.RulesElement({
    name: "Hybrid Paladin",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_354",
    source: "Player's Handbook 3",
    categories: ["Hybrid Paladin", "ID_FMP_HYBRID_CLASS_354"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_PALADIN"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_354");
      model.statadd("_LEVEL-ONE-HPS", 7);
      model.statadd("_PER-LEVEL-HPS", 3);
      model.statadd("Healing Surges", 5);
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_354 Defense"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Psion"] = new engine.RulesElement({
    name: "Hybrid Psion",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_610",
    source: "Player's Handbook 3",
    categories: ["Hybrid Psion", "ID_FMP_HYBRID_CLASS_610"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_PSION"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_610");
      model.statadd("_LEVEL-ONE-HPS", 6);
      model.statadd("_PER-LEVEL-HPS", 2);
      model.statadd("Healing Surges", 3);
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Ranger"] = new engine.RulesElement({
    name: "Hybrid Ranger",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_355",
    source: "Player's Handbook 3",
    categories: ["Hybrid Ranger", "ID_FMP_HYBRID_CLASS_355"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_RANGER"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_355");
      model.statadd("_LEVEL-ONE-HPS", 6);
      model.statadd("_PER-LEVEL-HPS", 2);
      model.statadd("Healing Surges", 3);
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_355 Defense"); }
      });
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_355"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Rogue"] = new engine.RulesElement({
    name: "Hybrid Rogue",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_356",
    source: "Player's Handbook 3",
    categories: ["Hybrid Rogue", "ID_FMP_HYBRID_CLASS_356"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_ROGUE"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_356");
      model.statadd("_LEVEL-ONE-HPS", 6);
      model.statadd("_PER-LEVEL-HPS", 2);
      model.statadd("Healing Surges", 3);
      model.statadd("Reflex Defense Class Bonus", 1);
      model.select('Skill Training', 2, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_356"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Runepriest"] = new engine.RulesElement({
    name: "Hybrid Runepriest",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_611",
    source: "Player's Handbook 3",
    categories: ["Hybrid Runepriest", "ID_FMP_HYBRID_CLASS_611"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_RUNEPRIEST"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_611");
      model.statadd("_LEVEL-ONE-HPS", 6);
      model.statadd("_PER-LEVEL-HPS", 2);
      model.statadd("Healing Surges", 3);
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Seeker"] = new engine.RulesElement({
    name: "Hybrid Seeker",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_612",
    source: "Player's Handbook 3",
    categories: ["Hybrid Seeker", "ID_FMP_HYBRID_CLASS_612"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_SEEKER"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_612");
      model.statadd("_LEVEL-ONE-HPS", 6);
      model.statadd("_PER-LEVEL-HPS", 2);
      model.statadd("Healing Surges", 3);
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_612 Defense"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Shaman"] = new engine.RulesElement({
    name: "Hybrid Shaman",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_444",
    source: "Player's Handbook 3",
    categories: ["Hybrid Shaman", "ID_FMP_HYBRID_CLASS_444"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_SHAMAN"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_444");
      model.statadd("_LEVEL-ONE-HPS", 6);
      model.statadd("_PER-LEVEL-HPS", 2);
      model.statadd("Healing Surges", 3);
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_444 Defense"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Sorcerer"] = new engine.RulesElement({
    name: "Hybrid Sorcerer",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_445",
    source: "Player's Handbook 3",
    categories: ["Hybrid Sorcerer", "ID_FMP_HYBRID_CLASS_445"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_SORCERER"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_445");
      model.statadd("_LEVEL-ONE-HPS", 6);
      model.statadd("_PER-LEVEL-HPS", 2);
      model.statadd("Healing Surges", 3);
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Swordmage"] = new engine.RulesElement({
    name: "Hybrid Swordmage",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_357",
    source: "Player's Handbook 3",
    categories: ["Hybrid Swordmage", "ID_FMP_HYBRID_CLASS_357"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_SWORDMAGE"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_357");
      model.statadd("_LEVEL-ONE-HPS", 7);
      model.statadd("_PER-LEVEL-HPS", 3);
      model.statadd("Healing Surges", 4);
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Warden"] = new engine.RulesElement({
    name: "Hybrid Warden",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_446",
    source: "Player's Handbook 3",
    categories: ["Hybrid Warden", "ID_FMP_HYBRID_CLASS_446"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_WARDEN"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_446");
      model.statadd("_LEVEL-ONE-HPS", 8);
      model.statadd("_PER-LEVEL-HPS", 3);
      model.statadd("Healing Surges", 4);
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_446 Defense"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Warlock"] = new engine.RulesElement({
    name: "Hybrid Warlock",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_358",
    source: "Player's Handbook 3",
    categories: ["Hybrid Warlock", "ID_FMP_HYBRID_CLASS_358"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_WARLOCK"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_358");
      model.statadd("_LEVEL-ONE-HPS", 6);
      model.statadd("_PER-LEVEL-HPS", 2);
      model.statadd("Healing Surges", 3);
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_358 Defense"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Warlord"] = new engine.RulesElement({
    name: "Hybrid Warlord",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_359",
    source: "Player's Handbook 3",
    categories: ["Hybrid Warlord", "ID_FMP_HYBRID_CLASS_359"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_WARLORD"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_359");
      model.statadd("_LEVEL-ONE-HPS", 6);
      model.statadd("_PER-LEVEL-HPS", 2);
      model.statadd("Healing Surges", 3);
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_359 Defense"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Hybrid_Class["Hybrid Wizard"] = new engine.RulesElement({
    name: "Hybrid Wizard",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_360",
    source: "Player's Handbook 3",
    categories: ["Hybrid Wizard", "ID_FMP_HYBRID_CLASS_360"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_WIZARD"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_360");
      model.statadd("_LEVEL-ONE-HPS", 5);
      model.statadd("_PER-LEVEL-HPS", 2);
      model.statadd("Healing Surges", 3);
      model.statadd("Will Defense Class Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
