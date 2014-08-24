(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Bladestorm Technique"] = new RulesElement({
    name: "Bladestorm Technique",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1907",
    source: "Dragon Magazine 378",
    categories: ["Bladestorm Technique", "ID_FMP_CLASS_FEATURE_1907", "16"],
    rules: function(model) {
      model.statadd("Rapier:attack", function() { 
        if (model.dualWielding('rapier', 'blade')) {
          return 1;
        } else return 0;
       });
      model.statadd("Rapier:damage", function() { 
        if (model.dualWielding('rapier', 'blade')) {
          return 1;
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blessed Awakening"] = new RulesElement({
    name: "Blessed Awakening",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1914",
    source: "Dragon Magazine 378",
    categories: ["Blessed Awakening", "ID_FMP_CLASS_FEATURE_1914", "21"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Blessed Awakening"); }
      });
      model.statadd("Action Point", "Blessed Awakening:Increase any one of Strength, Wisdom, or Charisma by 2 points. Whenever you spend an action point, you regain hit points as if you spent a healing surge and gain a +2 bonus to all defenses until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blessed Awakening Charisma"] = new RulesElement({
    name: "Blessed Awakening Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BLESSED_AWAKENING_CHARISMA",
    source: "Dragon Magazine 378",
    categories: ["Blessed Awakening Charisma", "ID_INTERNAL_CLASS_FEATURE_BLESSED_AWAKENING_CHARISMA", "Blessed Awakening"],
    rules: function(model) {
      model.statadd("Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blessed Awakening Strength"] = new RulesElement({
    name: "Blessed Awakening Strength",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BLESSED_AWAKENING_STRENGTH",
    source: "Dragon Magazine 378",
    categories: ["Blessed Awakening Strength", "ID_INTERNAL_CLASS_FEATURE_BLESSED_AWAKENING_STRENGTH", "Blessed Awakening"],
    rules: function(model) {
      model.statadd("Strength", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blessed Awakening Wisdom"] = new RulesElement({
    name: "Blessed Awakening Wisdom",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BLESSED_AWAKENING_WISDOM",
    source: "Dragon Magazine 378",
    categories: ["Blessed Awakening Wisdom", "ID_INTERNAL_CLASS_FEATURE_BLESSED_AWAKENING_WISDOM", "Blessed Awakening"],
    rules: function(model) {
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Canny Defense"] = new RulesElement({
    name: "Canny Defense",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1905",
    source: "Dragon Magazine 378",
    categories: ["Canny Defense", "ID_FMP_CLASS_FEATURE_1905", "11"],
    rules: function(model) {
      model.statadd("Canny Defense", function() { 
        if (!(model.wearing('Armor', ['Shield']))) {
          return 2;
        } else return 0;
       });
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['light'])) {
          return model.stat("Canny Defense");
        } else return 0;
       });
      model.statadd("Reflex Defense", function() { 
        if (model.wearing('Armor', ['light'])) {
          return model.stat("Canny Defense");
        } else return 0;
       });
      model.statadd("Initiative Misc", function() { return model.stat("Wisdom modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Courageous Presence"] = new RulesElement({
    name: "Courageous Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1915",
    source: "Dragon Magazine 378",
    categories: ["Courageous Presence", "ID_FMP_CLASS_FEATURE_1915", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Endless Endurance"] = new RulesElement({
    name: "Endless Endurance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1910",
    source: "Dragon Magazine 378",
    categories: ["Endless Endurance", "ID_FMP_CLASS_FEATURE_1910", "16"],
    rules: function(model) {
      model.statadd("Endless Endurance", function() { return model.stat("Constitution modifier"); });
      model.statadd("Endless Endurance", function() { return model.stat("Constitution modifier"); });
      model.statadd("Hit Points", function() { return model.stat("Endless Endurance"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Inspired Bravery"] = new RulesElement({
    name: "Inspired Bravery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1912",
    source: "Dragon Magazine 378",
    categories: ["Inspired Bravery", "ID_FMP_CLASS_FEATURE_1912", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Mind Bar"] = new RulesElement({
    name: "Mind Bar",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1919",
    source: "Dragon Magazine 378",
    categories: ["Mind Bar", "ID_FMP_CLASS_FEATURE_1919", "16"],
    rules: function(model) {
      model.statadd("AC", function() { /* against charm, fear, and psychic attacks */ return 2; });
      model.statadd("Fortitude Defense", function() { /* against charm, fear, and psychic attacks */ return 2; });
      model.statadd("Reflex Defense", function() { /* against charm, fear, and psychic attacks */ return 2; });
      model.statadd("Will Defense", function() { /* against charm, fear, and psychic attacks */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mounting Rage"] = new RulesElement({
    name: "Mounting Rage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1908",
    source: "Dragon Magazine 378",
    categories: ["Mounting Rage", "ID_FMP_CLASS_FEATURE_1908", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Platinum Mantle"] = new RulesElement({
    name: "Platinum Mantle",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1913",
    source: "Dragon Magazine 378",
    categories: ["Platinum Mantle", "ID_FMP_CLASS_FEATURE_1913", "16"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_9929"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Platinum Rebirth"] = new RulesElement({
    name: "Platinum Rebirth",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1916",
    source: "Dragon Magazine 378",
    categories: ["Platinum Rebirth", "ID_FMP_CLASS_FEATURE_1916", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Precise Action"] = new RulesElement({
    name: "Precise Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1906",
    source: "Dragon Magazine 378",
    categories: ["Precise Action", "ID_FMP_CLASS_FEATURE_1906", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Precise Action:When you spend an action point to make an attack, you can reroll one or two attack rolls (but must use the new result).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rebalanced Mind"] = new RulesElement({
    name: "Rebalanced Mind",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1918",
    source: "Dragon Magazine 378",
    categories: ["Rebalanced Mind", "ID_FMP_CLASS_FEATURE_1918", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Resilient Action"] = new RulesElement({
    name: "Resilient Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1911",
    source: "Dragon Magazine 378",
    categories: ["Resilient Action", "ID_FMP_CLASS_FEATURE_1911", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Resilient Action:When you spend an action point to make an extra attack, you also gain resist 10 to one of the following damage types until the end of the encounter: acid, cold, fire, lightning, or poison. At 21st level, the resistance increases to 15.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Restoring Action"] = new RulesElement({
    name: "Restoring Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1917",
    source: "Dragon Magazine 378",
    categories: ["Restoring Action", "ID_FMP_CLASS_FEATURE_1917", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Restoring Action:When you spend an action point to take an extra action, you can roll a saving throw against each effect on you that a save can end.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Savage Action"] = new RulesElement({
    name: "Savage Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1909",
    source: "Dragon Magazine 378",
    categories: ["Savage Action", "ID_FMP_CLASS_FEATURE_1909", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Savage Action:When you spend an action point to take an extra action, you gain a +1 bonus to attack rolls and add 1[W] extra damage to damage rolls with weapon attacks until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  
})(this);
