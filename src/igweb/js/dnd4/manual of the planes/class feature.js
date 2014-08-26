define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Aura of Menace"] = new engine.RulesElement({
    name: "Aura of Menace",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1076",
    source: "Manual of the Planes",
    categories: ["Aura of Menace", "ID_FMP_CLASS_FEATURE_1076", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Blademaster of Legacy"] = new engine.RulesElement({
    name: "Blademaster of Legacy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1069",
    source: "Manual of the Planes",
    categories: ["Blademaster of Legacy", "ID_FMP_CLASS_FEATURE_1069", "16"],
    rules: function(model) {
      model.statadd("melee damage rolls", function() { 
        if (model.inventory.equipped.some(function(i) {{ return i.matchesCategory('{0}'); }})) {
          return 1;
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blessing of the Gods"] = new engine.RulesElement({
    name: "Blessing of the Gods",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1077",
    source: "Manual of the Planes",
    categories: ["Blessing of the Gods", "ID_FMP_CLASS_FEATURE_1077", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Blessing of the Gods:When you spend an action point to take an extra action, you gain a +2 bonus to all defenses until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Call of Cendriane"] = new engine.RulesElement({
    name: "Call of Cendriane",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1068",
    source: "Manual of the Planes",
    categories: ["Call of Cendriane", "ID_FMP_CLASS_FEATURE_1068", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Call of Cendriane:When you spend an action point to take an extra action, you can teleport 5 squares before or after your extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Chant of War"] = new engine.RulesElement({
    name: "Chant of War",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1081",
    source: "Manual of the Planes",
    categories: ["Chant of War", "ID_FMP_CLASS_FEATURE_1081", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dedicated Foe"] = new engine.RulesElement({
    name: "Dedicated Foe",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1078",
    source: "Manual of the Planes",
    categories: ["Dedicated Foe", "ID_FMP_CLASS_FEATURE_1078", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Destructive Action"] = new engine.RulesElement({
    name: "Destructive Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1071",
    source: "Manual of the Planes",
    categories: ["Destructive Action", "ID_FMP_CLASS_FEATURE_1071", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Destructive Action:When you spend an action point to take an extra action, you deal 1d12 extra damage on attacks made before the end of your turn. The damage increases to 2d12 at 21st level.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Devshirme Training"] = new engine.RulesElement({
    name: "Devshirme Training",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1079",
    source: "Manual of the Planes",
    categories: ["Devshirme Training", "ID_FMP_CLASS_FEATURE_1079", "11"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Devshirme Training"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fey Step Assault"] = new engine.RulesElement({
    name: "Fey Step Assault",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1067",
    source: "Manual of the Planes",
    categories: ["Fey Step Assault", "ID_FMP_CLASS_FEATURE_1067", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Gain an additional two languages"] = new engine.RulesElement({
    name: "Gain an additional two languages",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_GAIN_AN_ADDITIONAL_TWO_LANGUAGES",
    source: "Manual of the Planes",
    categories: ["Gain an additional two languages", "ID_INTERNAL_CLASS_FEATURE_GAIN_AN_ADDITIONAL_TWO_LANGUAGES", "Devshirme Training"],
    rules: function(model) {
      model.select('Language', 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Gain Training in a skill"] = new engine.RulesElement({
    name: "Gain Training in a skill",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_GAIN_TRAINING_IN_A_SKILL",
    source: "Manual of the Planes",
    categories: ["Gain Training in a skill", "ID_INTERNAL_CLASS_FEATURE_GAIN_TRAINING_IN_A_SKILL", "Devshirme Training"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Gatecrasher Action"] = new engine.RulesElement({
    name: "Gatecrasher Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1074",
    source: "Manual of the Planes",
    categories: ["Gatecrasher Action", "ID_FMP_CLASS_FEATURE_1074", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Gatecrasher Action:When you spend an action point to take an extra action, you gain an additional move action that you can expend to teleport a number of squares equal to your speed. You can only use the move action on your turn, and the additional action expires at the end of the encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Gatecrasher Advantage"] = new engine.RulesElement({
    name: "Gatecrasher Advantage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1075",
    source: "Manual of the Planes",
    categories: ["Gatecrasher Advantage", "ID_FMP_CLASS_FEATURE_1075", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Inevitable Doom"] = new engine.RulesElement({
    name: "Inevitable Doom",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1072",
    source: "Manual of the Planes",
    categories: ["Inevitable Doom", "ID_FMP_CLASS_FEATURE_1072", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Inspiring the Invisible Legion"] = new engine.RulesElement({
    name: "Inspiring the Invisible Legion",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1088",
    source: "Manual of the Planes",
    categories: ["Inspiring the Invisible Legion", "ID_FMP_CLASS_FEATURE_1088", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Location Mastery"] = new engine.RulesElement({
    name: "Location Mastery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1085",
    source: "Manual of the Planes",
    categories: ["Location Mastery", "ID_FMP_CLASS_FEATURE_1085", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Malec-Keth Action"] = new engine.RulesElement({
    name: "Malec-Keth Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1080",
    source: "Manual of the Planes",
    categories: ["Malec-Keth Action", "ID_FMP_CLASS_FEATURE_1080", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Malec-Keth Action:When you spend an action point to take an extra attack, you ignore your enemies' resistances until the end of your turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Planeshifter's Action"] = new engine.RulesElement({
    name: "Planeshifter's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1084",
    source: "Manual of the Planes",
    categories: ["Planeshifter's Action", "ID_FMP_CLASS_FEATURE_1084", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Planeshifter's Action:When you spend an action point to take an extra action, you also gain an extra move action for that turn. You can use that move action to teleport 10 squares.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Portal Alteration"] = new engine.RulesElement({
    name: "Portal Alteration",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1073",
    source: "Manual of the Planes",
    categories: ["Portal Alteration", "ID_FMP_CLASS_FEATURE_1073", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Primordial Blade"] = new engine.RulesElement({
    name: "Primordial Blade",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1082",
    source: "Manual of the Planes",
    categories: ["Primordial Blade", "ID_FMP_CLASS_FEATURE_1082", "16"],
    rules: function(model) {
      model.statadd("Damage", "+1d4");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rebuke Soul"] = new engine.RulesElement({
    name: "Rebuke Soul",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1089",
    source: "Manual of the Planes",
    categories: ["Rebuke Soul", "ID_FMP_CLASS_FEATURE_1089", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5662"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ruin's Reward"] = new engine.RulesElement({
    name: "Ruin's Reward",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1070",
    source: "Manual of the Planes",
    categories: ["Ruin's Reward", "ID_FMP_CLASS_FEATURE_1070", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Shadow Captain's Action"] = new engine.RulesElement({
    name: "Shadow Captain's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1087",
    source: "Manual of the Planes",
    categories: ["Shadow Captain's Action", "ID_FMP_CLASS_FEATURE_1087", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Shadow Captain's Action:When you spend an action point to take an extra action, you and an ally within 5 squares of you deal 1d6 extra necrotic damage on melee attacks until the end of your next turn. Increase this damage to 2d6 at 21st level.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shadow's Reconnoitering"] = new engine.RulesElement({
    name: "Shadow's Reconnoitering",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1086",
    source: "Manual of the Planes",
    categories: ["Shadow's Reconnoitering", "ID_FMP_CLASS_FEATURE_1086", "11"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
      model.statadd("Insight Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spiritual Guidance"] = new engine.RulesElement({
    name: "Spiritual Guidance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1090",
    source: "Manual of the Planes",
    categories: ["Spiritual Guidance", "ID_FMP_CLASS_FEATURE_1090", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Spiritual Guidance:Instead of spending an action point to take an extra action, you can spend an action point to regain the use of an encounter power that has the radiant keyword, or you can gain an extra use of your Channel Divinity class feature");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Study of the Planes"] = new engine.RulesElement({
    name: "Study of the Planes",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1083",
    source: "Manual of the Planes",
    categories: ["Study of the Planes", "ID_FMP_CLASS_FEATURE_1083", "11"],
    rules: function(model) {
      model.statadd("FREEBEE:ID_FMP_RITUAL_14", 1);
      model.statadd("Arcana Misc", function() { /* when performing rituals that have the travel category */ return 4; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Weighty Soul"] = new engine.RulesElement({
    name: "Weighty Soul",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1091",
    source: "Manual of the Planes",
    categories: ["Weighty Soul", "ID_FMP_CLASS_FEATURE_1091", "16"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
