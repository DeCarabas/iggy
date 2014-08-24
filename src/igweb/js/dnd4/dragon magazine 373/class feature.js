(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Blight Action"] = new RulesElement({
    name: "Blight Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1502",
    source: "Dragon Magazine 373",
    categories: ["Blight Action", "ID_FMP_CLASS_FEATURE_1502", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Blight Action:Whenever you spend an action point to make an attack, all enemies adjacent to you must move 1 square away from you or take ongoing necrotic damage equal to your Constitution modifier (save ends).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blightborn"] = new RulesElement({
    name: "Blightborn",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1504",
    source: "Dragon Magazine 373",
    categories: ["Blightborn", "ID_FMP_CLASS_FEATURE_1504", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Blighted Wild Shape"] = new RulesElement({
    name: "Blighted Wild Shape",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1503",
    source: "Dragon Magazine 373",
    categories: ["Blighted Wild Shape", "ID_FMP_CLASS_FEATURE_1503", "11"],
    rules: function(model) {
      model.statadd("Blighted Wild Shape", 5);
      model.statadd("Blighted Wild Shape", 5);
      model.statadd("resist:necrotic", function() { /* while in beast form */ return model.stat("Blighted Wild Shape"); }, "resist");
      model.statadd("beast form:damage", function() { /* while in beast form */ return model.stat("Constitution modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Choking Grab Dexterity"] = new RulesElement({
    name: "Choking Grab Dexterity",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_CHOKING_GRAB_DEXTERITY",
    source: "Dragon Magazine 373",
    categories: ["Choking Grab Dexterity", "ID_INTERNAL_CLASS_FEATURE_CHOKING_GRAB_DEXTERITY", "Choking Grab", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Choking Grab Strength"] = new RulesElement({
    name: "Choking Grab Strength",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_CHOKING_GRAB_STRENGTH",
    source: "Dragon Magazine 373",
    categories: ["Choking Grab Strength", "ID_INTERNAL_CLASS_FEATURE_CHOKING_GRAB_STRENGTH", "Choking Grab", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Insidious Curse"] = new RulesElement({
    name: "Insidious Curse",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1506",
    source: "Dragon Magazine 373",
    categories: ["Insidious Curse", "ID_FMP_CLASS_FEATURE_1506", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Nightmarish Action"] = new RulesElement({
    name: "Nightmarish Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1505",
    source: "Dragon Magazine 373",
    categories: ["Nightmarish Action", "ID_FMP_CLASS_FEATURE_1505", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Nightmarish Action:Whenever you spend an action point to make an attack, you can slide creatures affected by your Warlock's Curse 1 square. Those you slide take a -2 penalty to attack rolls until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shaking Displays"] = new RulesElement({
    name: "Shaking Displays",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1507",
    source: "Dragon Magazine 373",
    categories: ["Shaking Displays", "ID_FMP_CLASS_FEATURE_1507", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Strangler's Hold Dexterity"] = new RulesElement({
    name: "Strangler's Hold Dexterity",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_STRANGLER'S_HOLD_DEXTERITY",
    source: "Dragon Magazine 373",
    categories: ["Strangler's Hold Dexterity", "ID_INTERNAL_CLASS_FEATURE_STRANGLER'S_HOLD_DEXTERITY", "Strangler's Hold", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Strangler's Hold Strength"] = new RulesElement({
    name: "Strangler's Hold Strength",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_STRANGLER'S_HOLD_STRENGTH",
    source: "Dragon Magazine 373",
    categories: ["Strangler's Hold Strength", "ID_INTERNAL_CLASS_FEATURE_STRANGLER'S_HOLD_STRENGTH", "Strangler's Hold", "Ability Choice"]
  });
  byID[te.id] = te;
  
  
})(this);
