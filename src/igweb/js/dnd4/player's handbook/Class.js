(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Class = types['Class'] || (types['Class'] = {});
  te = Class["Cleric"] = new RulesElement({
    name: "Cleric",
    type: "Class",
    id: "ID_FMP_CLASS_2",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=2",
    categories: ["Cleric", "ID_FMP_CLASS_2"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_CLERIC"]);
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_2");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 7);
      model.select('Build', 1, {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Will Defense Class Bonus", 2);
      model.select('Skill Training', 3, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_2"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Fighter"] = new RulesElement({
    name: "Fighter",
    type: "Class",
    id: "ID_FMP_CLASS_3",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=3",
    categories: ["Fighter", "ID_FMP_CLASS_3"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_FIGHTER"]);
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_3");
      model.statadd("_LEVEL-ONE-HPS", 15);
      model.statadd("_PER-LEVEL-HPS", 6);
      model.statadd("Healing Surges", 9);
      model.select('Build', 1, {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Fortitude Defense Class Bonus", 2);
      model.select('Skill Training', 3, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_3"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Paladin"] = new RulesElement({
    name: "Paladin",
    type: "Class",
    id: "ID_FMP_CLASS_4",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=4",
    categories: ["Paladin", "ID_FMP_CLASS_4"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_PALADIN"]);
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_4");
      model.statadd("_LEVEL-ONE-HPS", 15);
      model.statadd("_PER-LEVEL-HPS", 6);
      model.statadd("Healing Surges", 10);
      model.select('Build', 1, {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Fortitude Defense Class Bonus", 1);
      model.statadd("Reflex Defense Class Bonus", 1);
      model.statadd("Will Defense Class Bonus", 1);
      model.select('Skill Training', 3, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_4"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Ranger"] = new RulesElement({
    name: "Ranger",
    type: "Class",
    id: "ID_FMP_CLASS_5",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=5",
    categories: ["Ranger", "ID_FMP_CLASS_5"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_RANGER"]);
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_5");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 6);
      model.select('Build', 1, {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Fortitude Defense Class Bonus", 1);
      model.statadd("Reflex Defense Class Bonus", 1);
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_5 Choice"); }
      });
      model.select('Skill Training', 4, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_5"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Rogue"] = new RulesElement({
    name: "Rogue",
    type: "Class",
    id: "ID_FMP_CLASS_6",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=6",
    categories: ["Rogue", "ID_FMP_CLASS_6"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_ROGUE"]);
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_6");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 6);
      model.select('Build', 1, {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Reflex Defense Class Bonus", 2);
      model.select('Skill Training', 4, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_6"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Warlock"] = new RulesElement({
    name: "Warlock",
    type: "Class",
    id: "ID_FMP_CLASS_7",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=7",
    categories: ["Warlock", "ID_FMP_CLASS_7"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_WARLOCK"]);
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_7");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 6);
      model.select('Build', 1, {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Reflex Defense Class Bonus", 1);
      model.statadd("Will Defense Class Bonus", 1);
      model.select('Skill Training', 4, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_7"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Warlord"] = new RulesElement({
    name: "Warlord",
    type: "Class",
    id: "ID_FMP_CLASS_8",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=8",
    categories: ["Warlord", "ID_FMP_CLASS_8"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_WARLORD"]);
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_8");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 7);
      model.select('Build', 1, {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Fortitude Defense Class Bonus", 1);
      model.statadd("Will Defense Class Bonus", 1);
      model.select('Skill Training', 4, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_8"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Wizard"] = new RulesElement({
    name: "Wizard",
    type: "Class",
    id: "ID_FMP_CLASS_9",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=9",
    categories: ["Wizard", "ID_FMP_CLASS_9"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_WIZARD"]);
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_9");
      model.statadd("_LEVEL-ONE-HPS", 10);
      model.statadd("_PER-LEVEL-HPS", 4);
      model.statadd("Healing Surges", 6);
      model.select('Build', 1, {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Will Defense Class Bonus", 2);
      model.select('Skill Training', 3, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_9"); }
      });
    }
  });
  byID[te.id] = te;
  
  
})(this);