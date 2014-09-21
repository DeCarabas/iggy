define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Class = types['Class'] || (types['Class'] = {});
  te = Class["Avenger"] = new engine.RulesElement({
    name: "Avenger",
    type: "Class",
    id: "ID_FMP_CLASS_129",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=129",
    specifics: {
        'Key Abilities': "Wisdom, Dexterity, Intelligence"
      },
    categories: ["Avenger", "ID_FMP_CLASS_129"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_AVENGER"]);
      model.select('Power', 2, "Avenger", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_129");
      model.statadd("_LEVEL-ONE-HPS", 14);
      model.statadd("_PER-LEVEL-HPS", 6);
      model.statadd("Healing Surges", 7);
      model.select('Build', 1, "Avenger", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Fortitude Defense Class Bonus", 1);
      model.statadd("Reflex Defense Class Bonus", 1);
      model.statadd("Will Defense Class Bonus", 1);
      model.select('Skill Training', 3, "Avenger", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_129"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Barbarian"] = new engine.RulesElement({
    name: "Barbarian",
    type: "Class",
    id: "ID_FMP_CLASS_148",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=148",
    specifics: {
        'Key Abilities': "Strength, Constitution, Charisma"
      },
    categories: ["Barbarian", "ID_FMP_CLASS_148"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_BARBARIAN"]);
      model.select('Power', 2, "Barbarian", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_148");
      model.statadd("_LEVEL-ONE-HPS", 15);
      model.statadd("_PER-LEVEL-HPS", 6);
      model.statadd("Healing Surges", 8);
      model.select('Build', 1, "Barbarian", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Fortitude Defense Class Bonus", 2);
      model.select('Skill Training', 3, "Barbarian", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_148"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Bard"] = new engine.RulesElement({
    name: "Bard",
    type: "Class",
    id: "ID_FMP_CLASS_104",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=104",
    specifics: {
        'Key Abilities': "Charisma, Intelligence, Constitution"
      },
    categories: ["Bard", "ID_FMP_CLASS_104"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_BARD"]);
      model.select('Power', 2, "Bard", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_104");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 7);
      model.select('Build', 1, "Bard", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Reflex Defense Class Bonus", 1);
      model.statadd("Will Defense Class Bonus", 1);
      model.select('Skill Training', 4, "Bard", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_104"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Druid"] = new engine.RulesElement({
    name: "Druid",
    type: "Class",
    id: "ID_FMP_CLASS_126",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=126",
    specifics: {
        'Key Abilities': "Wisdom, Dexterity, Constitution"
      },
    categories: ["Druid", "ID_FMP_CLASS_126"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_DRUID"]);
      model.select('Power', 1, "Druid", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("beast form") && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.select('Power', 1, "Druid", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && !element.hasCategory("beast form") && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.select('Power', 1, "Druid", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_126");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 7);
      model.select('Build', 1, "Druid", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Reflex Defense Class Bonus", 1);
      model.statadd("Will Defense Class Bonus", 1);
      model.select('Skill Training', 3, "Druid", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_126"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Invoker"] = new engine.RulesElement({
    name: "Invoker",
    type: "Class",
    id: "ID_FMP_CLASS_127",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=127",
    specifics: {
        'Key Abilities': "Wisdom, Constitution, Intelligence"
      },
    categories: ["Invoker", "ID_FMP_CLASS_127"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_INVOKER"]);
      model.select('Power', 2, "Invoker", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_127");
      model.statadd("_LEVEL-ONE-HPS", 10);
      model.statadd("_PER-LEVEL-HPS", 4);
      model.statadd("Healing Surges", 6);
      model.select('Build', 1, "Invoker", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Fortitude Defense Class Bonus", 1);
      model.statadd("Reflex Defense Class Bonus", 1);
      model.statadd("Will Defense Class Bonus", 1);
      model.select('Skill Training', 3, "Invoker", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_127"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Shaman"] = new engine.RulesElement({
    name: "Shaman",
    type: "Class",
    id: "ID_FMP_CLASS_147",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=147",
    specifics: {
        'Key Abilities': "Wisdom, Constitution, Intelligence"
      },
    categories: ["Shaman", "ID_FMP_CLASS_147"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_SHAMAN"]);
      model.select('Power', 1, "Shaman", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_147");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 7);
      model.select('Build', 1, "Shaman", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Fortitude Defense Class Bonus", 1);
      model.statadd("Will Defense Class Bonus", 1);
      model.select('Skill Training', 3, "Shaman", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_147"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Sorcerer"] = new engine.RulesElement({
    name: "Sorcerer",
    type: "Class",
    id: "ID_FMP_CLASS_128",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=128",
    specifics: {
        'Key Abilities': "Charisma, Dexterity, Strength"
      },
    categories: ["Sorcerer", "ID_FMP_CLASS_128"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_SORCERER"]);
      model.select('Power', 2, "Sorcerer", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_128");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 6);
      model.select('Build', 1, "Sorcerer", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Will Defense Class Bonus", 2);
      model.select('Skill Training', 3, "Sorcerer", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_128"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Class["Warden"] = new engine.RulesElement({
    name: "Warden",
    type: "Class",
    id: "ID_FMP_CLASS_134",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=134",
    specifics: {
        'Key Abilities': "Strength, Constitution, Wisdom"
      },
    categories: ["Warden", "ID_FMP_CLASS_134"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_WARDEN"]);
      model.select('Power', 2, "Warden", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_134");
      model.statadd("_LEVEL-ONE-HPS", 17);
      model.statadd("_PER-LEVEL-HPS", 7);
      model.statadd("Healing Surges", 9);
      model.select('Build', 1, "Warden", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Fortitude Defense Class Bonus", 1);
      model.statadd("Will Defense Class Bonus", 1);
      model.select('Skill Training', 3, "Warden", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_134"); }
      });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
