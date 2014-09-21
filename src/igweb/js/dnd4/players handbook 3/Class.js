define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Class = types['Class'] || (types['Class'] = {});
  te = Class["Ardent"] = new engine.RulesElement({
    name: "Ardent",
    type: "Class",
    id: "ID_FMP_CLASS_529",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=529",
    specifics: {
        'Key Abilities': "Charisma, Constitution, Wisdom"
      },
    categories: ["Ardent", "ID_FMP_CLASS_529"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_ARDENT"]);
      model.select('Power', 1, "First Augmented At-Will", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.select('Power', 1, "Second Augmented At-Will", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_529");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 7);
      model.select('Build', 1, "Ardent", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Fortitude Defense Class Bonus", 1);
      model.statadd("Will Defense Class Bonus", 1);
      model.select('Skill Training', 4, "Ardent", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_529"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Battlemind"] = new engine.RulesElement({
    name: "Battlemind",
    type: "Class",
    id: "ID_FMP_CLASS_124",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=124",
    specifics: {
        'Key Abilities': "Constitution, Wisdom, Charisma"
      },
    categories: ["Battlemind", "ID_FMP_CLASS_124"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_BATTLEMIND"]);
      model.select('Power', 1, "First Augmented At-Will", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.select('Power', 1, "Second Augmented At-Will", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_124");
      model.statadd("_LEVEL-ONE-HPS", 15);
      model.statadd("_PER-LEVEL-HPS", 6);
      model.statadd("Healing Surges", 9);
      model.select('Build', 1, "Battlemind", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Will Defense Class Bonus", 2);
      model.select('Skill Training', 3, "Battlemind", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_124"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Monk"] = new engine.RulesElement({
    name: "Monk",
    type: "Class",
    id: "ID_FMP_CLASS_362",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=362",
    specifics: {
        'Key Abilities': "Dexterity, Strength, Wisdom"
      },
    categories: ["Monk", "ID_FMP_CLASS_362"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_MONK"]);
      model.select('Power', 2, "Monk", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_362");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 7);
      model.select('Build', 1, "Monk", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Fortitude Defense Class Bonus", 1);
      model.statadd("Reflex Defense Class Bonus", 1);
      model.statadd("Will Defense Class Bonus", 1);
      model.select('Skill Training', 4, "Monk", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_362"); }
      });
      model.statadd("_WeaponsAsImplements", 1);
    }
  });
  byID[te.id] = te;
  
  te = Class["Psion"] = new engine.RulesElement({
    name: "Psion",
    type: "Class",
    id: "ID_FMP_CLASS_437",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=437",
    specifics: {
        'Key Abilities': "Intelligence, Charisma, Wisdom"
      },
    categories: ["Psion", "ID_FMP_CLASS_437"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_PSION"]);
      model.select('Power', 1, "First Augmented At-Will", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.select('Power', 1, "Second Augmented At-Will", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_437");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 4);
      model.statadd("Healing Surges", 6);
      model.select('Build', 1, "Psion", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Will Defense Class Bonus", 2);
      model.select('Skill Training', 4, "Psion", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_437"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Runepriest"] = new engine.RulesElement({
    name: "Runepriest",
    type: "Class",
    id: "ID_FMP_CLASS_602",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=602",
    specifics: {
        'Key Abilities': "Strength, Constitution, Wisdom"
      },
    categories: ["Runepriest", "ID_FMP_CLASS_602"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_RUNEPRIEST"]);
      model.select('Power', 2, "Runepriest", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_602");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 7);
      model.select('Build', 1, "Runepriest", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Will Defense Class Bonus", 2);
      model.select('Skill Training', 3, "Runepriest", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_602"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Seeker"] = new engine.RulesElement({
    name: "Seeker",
    type: "Class",
    id: "ID_FMP_CLASS_472",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=472",
    specifics: {
        'Key Abilities': "Wisdom, Strength, Dexterity"
      },
    categories: ["Seeker", "ID_FMP_CLASS_472"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_SEEKER"]);
      model.select('Power', 2, "Seeker", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_472");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 7);
      model.select('Build', 1, "Seeker", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Reflex Defense Class Bonus", 1);
      model.statadd("Will Defense Class Bonus", 1);
      model.select('Skill Training', 3, "Seeker", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_472"); }
      });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
