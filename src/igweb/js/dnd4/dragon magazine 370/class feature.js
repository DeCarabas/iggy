(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Accomplished Liar"] = new RulesElement({
    name: "Accomplished Liar",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1132",
    source: "Dragon Magazine 370",
    categories: ["Accomplished Liar", "ID_FMP_CLASS_FEATURE_1132", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Blinded by the Light"] = new RulesElement({
    name: "Blinded by the Light",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1129",
    source: "Dragon Magazine 370",
    categories: ["Blinded by the Light", "ID_FMP_CLASS_FEATURE_1129", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Hellbound Fury"] = new RulesElement({
    name: "Hellbound Fury",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1133",
    source: "Dragon Magazine 370",
    categories: ["Hellbound Fury", "ID_FMP_CLASS_FEATURE_1133", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Immobilizing Action"] = new RulesElement({
    name: "Immobilizing Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1126",
    source: "Dragon Magazine 370",
    categories: ["Immobilizing Action", "ID_FMP_CLASS_FEATURE_1126", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Immobilizing Action:Whenever you spend an action point to make an extra attack against the target of your lawbreaker's doom power, on a hit with that attack the target is also immobilized until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["In the Thick of the Action"] = new RulesElement({
    name: "In the Thick of the Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1134",
    source: "Dragon Magazine 370",
    categories: ["In the Thick of the Action", "ID_FMP_CLASS_FEATURE_1134", "11"],
    rules: function(model) {
      model.statadd("Action Point", "In the Thick of the Action:When you spend an action point to take an extra action, you deal 4 extra damage against Large or larger enemies and gain +2 speed until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Lawbreaker's Doom"] = new RulesElement({
    name: "Lawbreaker's Doom",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1125",
    source: "Dragon Magazine 370",
    categories: ["Lawbreaker's Doom", "ID_FMP_CLASS_FEATURE_1125", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_6017"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Northlander Persistence"] = new RulesElement({
    name: "Northlander Persistence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1135",
    source: "Dragon Magazine 370",
    categories: ["Northlander Persistence", "ID_FMP_CLASS_FEATURE_1135", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["One More Time"] = new RulesElement({
    name: "One More Time",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1136",
    source: "Dragon Magazine 370",
    categories: ["One More Time", "ID_FMP_CLASS_FEATURE_1136", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Rise and Fire"] = new RulesElement({
    name: "Rise and Fire",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1130",
    source: "Dragon Magazine 370",
    categories: ["Rise and Fire", "ID_FMP_CLASS_FEATURE_1130", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sacred Stealth"] = new RulesElement({
    name: "Sacred Stealth",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1128",
    source: "Dragon Magazine 370",
    categories: ["Sacred Stealth", "ID_FMP_CLASS_FEATURE_1128", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Sacred Stealth:When you spend an action point to take an extra action, after that action is resolved you can move your speed and make a Stealth check to hide from your target (provided you have superior cover or total concealment from that target when you end your movement).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Strength of Conviction"] = new RulesElement({
    name: "Strength of Conviction",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1127",
    source: "Dragon Magazine 370",
    categories: ["Strength of Conviction", "ID_FMP_CLASS_FEATURE_1127", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Terrifying Wrath"] = new RulesElement({
    name: "Terrifying Wrath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1131",
    source: "Dragon Magazine 370",
    categories: ["Terrifying Wrath", "ID_FMP_CLASS_FEATURE_1131", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Terrifying Wrath:When you spend an action point to take an extra action, all enemies within 5 squares of you take a -2 penalty to saving throws until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  
})(this);
