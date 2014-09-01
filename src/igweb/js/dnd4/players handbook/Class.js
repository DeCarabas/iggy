define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Class = types['Class'] || (types['Class'] = {});
  te = Class["Cleric"] = new engine.RulesElement({
    name: "Cleric",
    type: "Class",
    id: "ID_FMP_CLASS_2",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=2",
    categories: ["Cleric", "ID_FMP_CLASS_2"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_CLERIC"]);
      model.select('Power', 2, "Cleric", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_2");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 7);
      model.select('Build', 1, "Cleric", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Will Defense Class Bonus", 2);
      model.select('Skill Training', 3, "Cleric", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_2"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Fighter"] = new engine.RulesElement({
    name: "Fighter",
    type: "Class",
    id: "ID_FMP_CLASS_3",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=3",
    categories: ["Fighter", "ID_FMP_CLASS_3"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_FIGHTER"]);
      model.select('Power', 2, "Fighter", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_3");
      model.statadd("_LEVEL-ONE-HPS", 15);
      model.statadd("_PER-LEVEL-HPS", 6);
      model.statadd("Healing Surges", 9);
      model.select('Build', 1, "Fighter", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Fortitude Defense Class Bonus", 2);
      model.select('Skill Training', 3, "Fighter", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_3"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Paladin"] = new engine.RulesElement({
    name: "Paladin",
    type: "Class",
    id: "ID_FMP_CLASS_4",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=4",
    categories: ["Paladin", "ID_FMP_CLASS_4"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_PALADIN"]);
      model.select('Power', 2, "Paladin", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_4");
      model.statadd("_LEVEL-ONE-HPS", 15);
      model.statadd("_PER-LEVEL-HPS", 6);
      model.statadd("Healing Surges", 10);
      model.select('Build', 1, "Paladin", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Fortitude Defense Class Bonus", 1);
      model.statadd("Reflex Defense Class Bonus", 1);
      model.statadd("Will Defense Class Bonus", 1);
      model.select('Skill Training', 3, "Paladin", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_4"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Ranger"] = new engine.RulesElement({
    name: "Ranger",
    type: "Class",
    id: "ID_FMP_CLASS_5",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=5",
    categories: ["Ranger", "ID_FMP_CLASS_5"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_RANGER"]);
      model.select('Power', 2, "Ranger", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_5");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 6);
      model.select('Build', 1, "Ranger", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Fortitude Defense Class Bonus", 1);
      model.statadd("Reflex Defense Class Bonus", 1);
      model.select('Skill Training', 1, "Ranger", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_5 Choice"); }
      });
      model.select('Skill Training', 4, "Ranger", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_5"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Rogue"] = new engine.RulesElement({
    name: "Rogue",
    type: "Class",
    id: "ID_FMP_CLASS_6",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=6",
    categories: ["Rogue", "ID_FMP_CLASS_6"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_ROGUE"]);
      model.select('Power', 2, "Rogue", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_6");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 6);
      model.select('Build', 1, "Rogue", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Reflex Defense Class Bonus", 2);
      model.select('Skill Training', 4, "Rogue", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_6"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Warlock"] = new engine.RulesElement({
    name: "Warlock",
    type: "Class",
    id: "ID_FMP_CLASS_7",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=7",
    categories: ["Warlock", "ID_FMP_CLASS_7"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_WARLOCK"]);
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_7");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 6);
      model.select('Build', 1, "Warlock", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Reflex Defense Class Bonus", 1);
      model.statadd("Will Defense Class Bonus", 1);
      model.select('Skill Training', 4, "Warlock", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_7"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Warlord"] = new engine.RulesElement({
    name: "Warlord",
    type: "Class",
    id: "ID_FMP_CLASS_8",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=8",
    categories: ["Warlord", "ID_FMP_CLASS_8"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_WARLORD"]);
      model.select('Power', 2, "Warlord", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_8");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 7);
      model.select('Build', 1, "Warlord", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Fortitude Defense Class Bonus", 1);
      model.statadd("Will Defense Class Bonus", 1);
      model.select('Skill Training', 4, "Warlord", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_8"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Wizard"] = new engine.RulesElement({
    name: "Wizard",
    type: "Class",
    id: "ID_FMP_CLASS_9",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=9",
    categories: ["Wizard", "ID_FMP_CLASS_9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_WIZARD"]);
      model.select('Power', 2, "Wizard", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_9");
      model.statadd("_LEVEL-ONE-HPS", 10);
      model.statadd("_PER-LEVEL-HPS", 4);
      model.statadd("Healing Surges", 6);
      model.select('Build', 1, "Wizard", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Will Defense Class Bonus", 2);
      model.select('Skill Training', 3, "Wizard", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_9"); }
      });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
