(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Abyssal Blood Action"] = new RulesElement({
    name: "Abyssal Blood Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2098",
    source: "Dragon Magazine 380",
    categories: ["Abyssal Blood Action", "ID_FMP_CLASS_FEATURE_2098", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Abyssal Blood Action:When you spend an action point to take an extra action and you are bloodied, any enemy within 3 squares of you takes ongoing 5 damage (save ends), and you gain regeneration 5 until no enemy has ongoing damage from this feature.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Abyssal Presence"] = new RulesElement({
    name: "Abyssal Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2100",
    source: "Dragon Magazine 380",
    categories: ["Abyssal Presence", "ID_FMP_CLASS_FEATURE_2100", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bleak Visage"] = new RulesElement({
    name: "Bleak Visage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2116",
    source: "Dragon Magazine 380",
    categories: ["Bleak Visage", "ID_FMP_CLASS_FEATURE_2116", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Call of Letherna (Charisma)"] = new RulesElement({
    name: "Call of Letherna (Charisma)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_CALL_OF_LETHERNA_(CHARISMA)",
    source: "Dragon Magazine 380",
    categories: ["Call of Letherna (Charisma)", "ID_INTERNAL_CLASS_FEATURE_CALL_OF_LETHERNA_(CHARISMA)", "ID_FMP_POWER_10106", "Call of Letherna"],
    rules: function(model) {
      model.statadd("Call of Letherna:key ability", "Charisma");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Call of Letherna (Strength)"] = new RulesElement({
    name: "Call of Letherna (Strength)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_CALL_OF_LETHERNA_(STRENGTH)",
    source: "Dragon Magazine 380",
    categories: ["Call of Letherna (Strength)", "ID_INTERNAL_CLASS_FEATURE_CALL_OF_LETHERNA_(STRENGTH)", "ID_FMP_POWER_10106", "Call of Letherna"],
    rules: function(model) {
      model.statadd("Call of Letherna:key ability", "Strength");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Call of Letherna (Wisdom)"] = new RulesElement({
    name: "Call of Letherna (Wisdom)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_CALL_OF_LETHERNA_(WISDOM)",
    source: "Dragon Magazine 380",
    categories: ["Call of Letherna (Wisdom)", "ID_INTERNAL_CLASS_FEATURE_CALL_OF_LETHERNA_(WISDOM)", "ID_FMP_POWER_10106", "Call of Letherna"],
    rules: function(model) {
      model.statadd("Call of Letherna:key ability", "Wisdom");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Call of Letherna Charisma"] = new RulesElement({
    name: "Call of Letherna Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_CALL_OF_LETHERNA_CHARISMA",
    source: "Dragon Magazine 380",
    categories: ["Call of Letherna Charisma", "ID_INTERNAL_CLASS_FEATURE_CALL_OF_LETHERNA_CHARISMA", "Call of Letherna", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Call of Letherna Strength"] = new RulesElement({
    name: "Call of Letherna Strength",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_CALL_OF_LETHERNA_STRENGTH",
    source: "Dragon Magazine 380",
    categories: ["Call of Letherna Strength", "ID_INTERNAL_CLASS_FEATURE_CALL_OF_LETHERNA_STRENGTH", "Call of Letherna", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Call of Letherna Wisdom"] = new RulesElement({
    name: "Call of Letherna Wisdom",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_CALL_OF_LETHERNA_WISDOM",
    source: "Dragon Magazine 380",
    categories: ["Call of Letherna Wisdom", "ID_INTERNAL_CLASS_FEATURE_CALL_OF_LETHERNA_WISDOM", "Call of Letherna", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Cursed Action"] = new RulesElement({
    name: "Cursed Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2119",
    source: "Dragon Magazine 380",
    categories: ["Cursed Action", "ID_FMP_CLASS_FEATURE_2119", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Cursed Action:When you spend an action point to make an attack, you gain combat advantage against each of your targets.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Disrupting Attack"] = new RulesElement({
    name: "Disrupting Attack",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2113",
    source: "Dragon Magazine 380",
    categories: ["Disrupting Attack", "ID_FMP_CLASS_FEATURE_2113", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Drawn to Death"] = new RulesElement({
    name: "Drawn to Death",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2114",
    source: "Dragon Magazine 380",
    categories: ["Drawn to Death", "ID_FMP_CLASS_FEATURE_2114", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Erosion Action"] = new RulesElement({
    name: "Erosion Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2105",
    source: "Dragon Magazine 380",
    categories: ["Erosion Action", "ID_FMP_CLASS_FEATURE_2105", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Erosion Action:When you spend an action point to take an extra action, you can shift half your speed before or after the action. Each enemy adjacent to you at any point during that move takes 5 acid damage.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fated Outcome Charisma"] = new RulesElement({
    name: "Fated Outcome Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FATED_OUTCOME_CHARISMA",
    source: "Dragon Magazine 380",
    categories: ["Fated Outcome Charisma", "ID_INTERNAL_CLASS_FEATURE_FATED_OUTCOME_CHARISMA", "Fated Outcome", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fated Outcome Strength"] = new RulesElement({
    name: "Fated Outcome Strength",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FATED_OUTCOME_STRENGTH",
    source: "Dragon Magazine 380",
    categories: ["Fated Outcome Strength", "ID_INTERNAL_CLASS_FEATURE_FATED_OUTCOME_STRENGTH", "Fated Outcome", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fated Outcome Wisdom"] = new RulesElement({
    name: "Fated Outcome Wisdom",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FATED_OUTCOME_WISDOM",
    source: "Dragon Magazine 380",
    categories: ["Fated Outcome Wisdom", "ID_INTERNAL_CLASS_FEATURE_FATED_OUTCOME_WISDOM", "Fated Outcome", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Flowing Movement"] = new RulesElement({
    name: "Flowing Movement",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2107",
    source: "Dragon Magazine 380",
    categories: ["Flowing Movement", "ID_FMP_CLASS_FEATURE_2107", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Grave Smite Charisma"] = new RulesElement({
    name: "Grave Smite Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_GRAVE_SMITE_CHARISMA",
    source: "Dragon Magazine 380",
    categories: ["Grave Smite Charisma", "ID_INTERNAL_CLASS_FEATURE_GRAVE_SMITE_CHARISMA", "Grave Smite", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Grave Smite Strength"] = new RulesElement({
    name: "Grave Smite Strength",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_GRAVE_SMITE_STRENGTH",
    source: "Dragon Magazine 380",
    categories: ["Grave Smite Strength", "ID_INTERNAL_CLASS_FEATURE_GRAVE_SMITE_STRENGTH", "Grave Smite", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Harvesting Action"] = new RulesElement({
    name: "Harvesting Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2112",
    source: "Dragon Magazine 380",
    categories: ["Harvesting Action", "ID_FMP_CLASS_FEATURE_2112", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Harvesting Action:When you spend an action point to take an extra action on a turn in which you reduced a non-minion enemy to 0 hit points, you can also move your speed as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Master of the Vistani Curse"] = new RulesElement({
    name: "Master of the Vistani Curse",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2121",
    source: "Dragon Magazine 380",
    categories: ["Master of the Vistani Curse", "ID_FMP_CLASS_FEATURE_2121", "16"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Maze of Words"] = new RulesElement({
    name: "Maze of Words",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2111",
    source: "Dragon Magazine 380",
    categories: ["Maze of Words", "ID_FMP_CLASS_FEATURE_2111", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Nonbeing Action"] = new RulesElement({
    name: "Nonbeing Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2101",
    source: "Dragon Magazine 380",
    categories: ["Nonbeing Action", "ID_FMP_CLASS_FEATURE_2101", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Nonbeing Action:When you spend an action point to take an extra action, you can end one effect you currently have that a save can end. Also, you regain use of your void assumption power if you have expended it this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["On Sorrow's Wings"] = new RulesElement({
    name: "On Sorrow's Wings",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2118",
    source: "Dragon Magazine 380",
    categories: ["On Sorrow's Wings", "ID_FMP_CLASS_FEATURE_2118", "30"],
    rules: function(model) {
      model.statadd("Action Point", "On Sorrow's Wings:When you spend an action point to take an extra action, you can teleport 10 squares before taking the action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Paper Secrets"] = new RulesElement({
    name: "Paper Secrets",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2108",
    source: "Dragon Magazine 380",
    categories: ["Paper Secrets", "ID_FMP_CLASS_FEATURE_2108", "11"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("15")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("19")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("25")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("29")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("utility") && element.hasCategory("16")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("utility") && element.hasCategory("22")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Secret Formularies"] = new RulesElement({
    name: "Secret Formularies",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2109",
    source: "Dragon Magazine 380",
    categories: ["Secret Formularies", "ID_FMP_CLASS_FEATURE_2109", "11"],
    rules: function(model) {
      model.statadd("Ritual Cost Modifier", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shadow Rush"] = new RulesElement({
    name: "Shadow Rush",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2117",
    source: "Dragon Magazine 380",
    categories: ["Shadow Rush", "ID_FMP_CLASS_FEATURE_2117", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sight Beyond Sight"] = new RulesElement({
    name: "Sight Beyond Sight",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2120",
    source: "Dragon Magazine 380",
    categories: ["Sight Beyond Sight", "ID_FMP_CLASS_FEATURE_2120", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sorrowborn"] = new RulesElement({
    name: "Sorrowborn",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2115",
    source: "Dragon Magazine 380",
    categories: ["Sorrowborn", "ID_FMP_CLASS_FEATURE_2115", "21"],
    rules: function(model) {
      model.statadd("Constitution", 2);
      model.statadd("Dexterity", 2);
      model.statadd("Speed", 2);
      model.grant(elements.id["ID_INTERNAL_VISION_DARKVISION"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Steal from the Abyss"] = new RulesElement({
    name: "Steal from the Abyss",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2099",
    source: "Dragon Magazine 380",
    categories: ["Steal from the Abyss", "ID_FMP_CLASS_FEATURE_2099", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Tome of Confusion"] = new RulesElement({
    name: "Tome of Confusion",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2110",
    source: "Dragon Magazine 380",
    categories: ["Tome of Confusion", "ID_FMP_CLASS_FEATURE_2110", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Tome of Confusion:When you spend an action point to take an extra action, each enemy you hit with an attack before the end of your turn is dazed until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Touching the Void"] = new RulesElement({
    name: "Touching the Void",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2102",
    source: "Dragon Magazine 380",
    categories: ["Touching the Void", "ID_FMP_CLASS_FEATURE_2102", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Union of Blessed and Cursed Waters"] = new RulesElement({
    name: "Union of Blessed and Cursed Waters",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2106",
    source: "Dragon Magazine 380",
    categories: ["Union of Blessed and Cursed Waters", "ID_FMP_CLASS_FEATURE_2106", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Void Phase"] = new RulesElement({
    name: "Void Phase",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2104",
    source: "Dragon Magazine 380",
    categories: ["Void Phase", "ID_FMP_CLASS_FEATURE_2104", "16"],
    rules: function(model) {
      model.statadd("Saving Throws", 2);
    }
  });
  byID[te.id] = te;
  
  
})(this);
