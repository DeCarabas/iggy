(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Arcane Underpinning"] = new RulesElement({
    name: "Arcane Underpinning",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1520",
    source: "Dragon Magazine 374",
    categories: ["Arcane Underpinning", "ID_FMP_CLASS_FEATURE_1520", "11"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Deeper Chill"] = new RulesElement({
    name: "Deeper Chill",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1535",
    source: "Dragon Magazine 374",
    categories: ["Deeper Chill", "ID_FMP_CLASS_FEATURE_1535", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Deeper Chill:When you spend an action point, make an attack that has the cold keyword. The damage of that attack ignores cold resistance. If the attack hits a creature that has no resistance to cold, it instead deals extra cold damage equal to your Intelligence modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Educated Action"] = new RulesElement({
    name: "Educated Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1519",
    source: "Dragon Magazine 374",
    categories: ["Educated Action", "ID_FMP_CLASS_FEATURE_1519", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Educated Action:When you spend an action point to take an extra action, you can also reroll the next attack roll you make that misses before the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Familiar Action"] = new RulesElement({
    name: "Familiar Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1517",
    source: "Dragon Magazine 374",
    categories: ["Familiar Action", "ID_FMP_CLASS_FEATURE_1517", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Familiar Action:When you spend an action point to take an extra action, you can return your familiar to normal if it has been destroyed. It can return either in passive mode or in active mode, and if you choose active mode, place it in any square within 20 of you.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Familiar Forms"] = new RulesElement({
    name: "Familiar Forms",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1516",
    source: "Dragon Magazine 374",
    categories: ["Familiar Forms", "ID_FMP_CLASS_FEATURE_1516", "11"],
    rules: function(model) {
      model.select('Familiar', 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Familiar Movement"] = new RulesElement({
    name: "Familiar Movement",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1518",
    source: "Dragon Magazine 374",
    categories: ["Familiar Movement", "ID_FMP_CLASS_FEATURE_1518", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Familiar Surge Charisma"] = new RulesElement({
    name: "Familiar Surge Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FAMILIAR_SURGE_CHARISMA",
    source: "Dragon Magazine 374",
    categories: ["Familiar Surge Charisma", "ID_INTERNAL_CLASS_FEATURE_FAMILIAR_SURGE_CHARISMA", "Familiar Surge", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Familiar Surge Intelligence"] = new RulesElement({
    name: "Familiar Surge Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FAMILIAR_SURGE_INTELLIGENCE",
    source: "Dragon Magazine 374",
    categories: ["Familiar Surge Intelligence", "ID_INTERNAL_CLASS_FEATURE_FAMILIAR_SURGE_INTELLIGENCE", "Familiar Surge", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Familiar Surge Wisdom"] = new RulesElement({
    name: "Familiar Surge Wisdom",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FAMILIAR_SURGE_WISDOM",
    source: "Dragon Magazine 374",
    categories: ["Familiar Surge Wisdom", "ID_INTERNAL_CLASS_FEATURE_FAMILIAR_SURGE_WISDOM", "Familiar Surge", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Familiar's Command Charisma"] = new RulesElement({
    name: "Familiar's Command Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FAMILIAR'S_COMMAND_CHARISMA",
    source: "Dragon Magazine 374",
    categories: ["Familiar's Command Charisma", "ID_INTERNAL_CLASS_FEATURE_FAMILIAR'S_COMMAND_CHARISMA", "Familiar's Command", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Familiar's Command Intelligence"] = new RulesElement({
    name: "Familiar's Command Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FAMILIAR'S_COMMAND_INTELLIGENCE",
    source: "Dragon Magazine 374",
    categories: ["Familiar's Command Intelligence", "ID_INTERNAL_CLASS_FEATURE_FAMILIAR'S_COMMAND_INTELLIGENCE", "Familiar's Command", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Familiar's Command Wisdom"] = new RulesElement({
    name: "Familiar's Command Wisdom",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FAMILIAR'S_COMMAND_WISDOM",
    source: "Dragon Magazine 374",
    categories: ["Familiar's Command Wisdom", "ID_INTERNAL_CLASS_FEATURE_FAMILIAR'S_COMMAND_WISDOM", "Familiar's Command", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Frost's Favor"] = new RulesElement({
    name: "Frost's Favor",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1536",
    source: "Dragon Magazine 374",
    categories: ["Frost's Favor", "ID_FMP_CLASS_FEATURE_1536", "11"],
    rules: function(model) {
      model.statadd("resist:cold", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fundamental Mastery"] = new RulesElement({
    name: "Fundamental Mastery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1521",
    source: "Dragon Magazine 374",
    categories: ["Fundamental Mastery", "ID_FMP_CLASS_FEATURE_1521", "16"],
    rules: function(model) {
      model.statadd("Fundamental Mastery", 3);
      model.statadd("Fundamental Mastery", 2);
      model.statadd("arcane,at-will:damage", function() { return model.stat("Fundamental Mastery"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Winter Winds"] = new RulesElement({
    name: "Winter Winds",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1537",
    source: "Dragon Magazine 374",
    categories: ["Winter Winds", "ID_FMP_CLASS_FEATURE_1537", "16"]
  });
  byID[te.id] = te;
  
  
})(this);
