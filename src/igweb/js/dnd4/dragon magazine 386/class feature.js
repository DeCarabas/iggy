define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["All-Spirit Action"] = new engine.RulesElement({
    name: "All-Spirit Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2680",
    source: "Dragon Magazine 386",
    categories: ["All-Spirit Action", "ID_FMP_CLASS_FEATURE_2680", "11"],
    rules: function(model) {
      model.statadd("Action Point", "All-Spirit Action:When you spend an action point to take an extra action, you become insubstantial and gain phasing until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["All-Spirit Strike"] = new engine.RulesElement({
    name: "All-Spirit Strike",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2681",
    source: "Dragon Magazine 386",
    categories: ["All-Spirit Strike", "ID_FMP_CLASS_FEATURE_2681", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Armored Swiftness"] = new engine.RulesElement({
    name: "Armored Swiftness",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2668",
    source: "Dragon Magazine 386",
    categories: ["Armored Swiftness", "ID_FMP_CLASS_FEATURE_2668", "11"],
    rules: function(model) {
      model.statadd("Speed", function() { 
        if (model.wearing('Armor', ['heavy'])) {
          return 0;
        } else return 0;
       }, "Armor");
      model.statadd("Reflex Defense", function() { 
        if (model.wearing('Armor', ['heavy'])) {
          return 1;
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Battlefield Warcry"] = new engine.RulesElement({
    name: "Battlefield Warcry",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2676",
    source: "Dragon Magazine 386",
    categories: ["Battlefield Warcry", "ID_FMP_CLASS_FEATURE_2676", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bleeding Defeat Action"] = new engine.RulesElement({
    name: "Bleeding Defeat Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2677",
    source: "Dragon Magazine 386",
    categories: ["Bleeding Defeat Action", "ID_FMP_CLASS_FEATURE_2677", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Bleeding Defeat Action:When you spend an action point to make an attack, if that attack hits and deals damage, the target also takes ongoing 10 radiant and necrotic damage (save ends).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blinding Action"] = new engine.RulesElement({
    name: "Blinding Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2627",
    source: "Dragon Magazine 386",
    categories: ["Blinding Action", "ID_FMP_CLASS_FEATURE_2627", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Blinding Action:When you use an encounter or daily power to hit a target that grants combat advantage to you, you can spend an action point to blind the target until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Break the Bonds"] = new engine.RulesElement({
    name: "Break the Bonds",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2637",
    source: "Dragon Magazine 386",
    categories: ["Break the Bonds", "ID_FMP_CLASS_FEATURE_2637", "16"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12291"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Combat Illusionist"] = new engine.RulesElement({
    name: "Combat Illusionist",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2628",
    source: "Dragon Magazine 386",
    categories: ["Combat Illusionist", "ID_FMP_CLASS_FEATURE_2628", "11"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("Arcane") && element.hasCategory("illusion") && element.hasCategory("encounter") && element.hasCategory("7")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("Arcane") && element.hasCategory("illusion") && element.hasCategory("encounter") && element.hasCategory("13")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Deceptive Action"] = new engine.RulesElement({
    name: "Deceptive Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2632",
    source: "Dragon Magazine 386",
    categories: ["Deceptive Action", "ID_FMP_CLASS_FEATURE_2632", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Deceptive Action:When you spend an action point to take an extra action, you also gain combat advantage against one enemy you can see until the end of your next turn. In addition, you score a critical hit against this enemy on a natural roll of 18–20 until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Deceptive Challenge"] = new engine.RulesElement({
    name: "Deceptive Challenge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2634",
    source: "Dragon Magazine 386",
    categories: ["Deceptive Challenge", "ID_FMP_CLASS_FEATURE_2634", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Expansive Aegis"] = new engine.RulesElement({
    name: "Expansive Aegis",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2673",
    source: "Dragon Magazine 386",
    categories: ["Expansive Aegis", "ID_FMP_CLASS_FEATURE_2673", "16"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Expert Phantasmagorist"] = new engine.RulesElement({
    name: "Expert Phantasmagorist",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2629",
    source: "Dragon Magazine 386",
    categories: ["Expert Phantasmagorist", "ID_FMP_CLASS_FEATURE_2629", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fast-Talker"] = new engine.RulesElement({
    name: "Fast-Talker",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2633",
    source: "Dragon Magazine 386",
    categories: ["Fast-Talker", "ID_FMP_CLASS_FEATURE_2633", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Flurry of Action"] = new engine.RulesElement({
    name: "Flurry of Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2671",
    source: "Dragon Magazine 386",
    categories: ["Flurry of Action", "ID_FMP_CLASS_FEATURE_2671", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Flurry of Action:When you spend an action point to make a swordmage attack or a Sharakim blademaster attack, if the attack hits you can use your furious assault racial power to add extra damage to that attack, even if you have already used furious assault during this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Furious Judgment"] = new engine.RulesElement({
    name: "Furious Judgment",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2664",
    source: "Dragon Magazine 386",
    categories: ["Furious Judgment", "ID_FMP_CLASS_FEATURE_2664", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Harbinger"] = new engine.RulesElement({
    name: "Harbinger",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2679",
    source: "Dragon Magazine 386",
    categories: ["Harbinger", "ID_FMP_CLASS_FEATURE_2679", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Illusory Communication"] = new engine.RulesElement({
    name: "Illusory Communication",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2630",
    source: "Dragon Magazine 386",
    categories: ["Illusory Communication", "ID_FMP_CLASS_FEATURE_2630", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Jailer of the Gods"] = new engine.RulesElement({
    name: "Jailer of the Gods",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2666",
    source: "Dragon Magazine 386",
    categories: ["Jailer of the Gods", "ID_FMP_CLASS_FEATURE_2666", "16"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Master Phantasmagorist"] = new engine.RulesElement({
    name: "Master Phantasmagorist",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2631",
    source: "Dragon Magazine 386",
    categories: ["Master Phantasmagorist", "ID_FMP_CLASS_FEATURE_2631", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Moonkissed Action"] = new engine.RulesElement({
    name: "Moonkissed Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2635",
    source: "Dragon Magazine 386",
    categories: ["Moonkissed Action", "ID_FMP_CLASS_FEATURE_2635", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Moonkissed Action:When you spend an action point to make an attack using a bow, you can roll one attack roll twice and take either result.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rampaging Action"] = new engine.RulesElement({
    name: "Rampaging Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2675",
    source: "Dragon Magazine 386",
    categories: ["Rampaging Action", "ID_FMP_CLASS_FEATURE_2675", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Rampaging Action:When you spend an action point to make an attack, if you hit with the attack you knock all enemies adjacent to one target you hit prone.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Refocusing Action"] = new engine.RulesElement({
    name: "Refocusing Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2665",
    source: "Dragon Magazine 386",
    categories: ["Refocusing Action", "ID_FMP_CLASS_FEATURE_2665", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Refocusing Action:When you spend an action point to make a weapon attack, you can change your oath of enmity target to one of the targets of your attack before making that attack.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Relentless Advance (Mighty Judge)"] = new engine.RulesElement({
    name: "Relentless Advance (Mighty Judge)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2667",
    source: "Dragon Magazine 386",
    categories: ["Relentless Advance (Mighty Judge)", "ID_FMP_CLASS_FEATURE_2667", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Repositioning Action"] = new engine.RulesElement({
    name: "Repositioning Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2669",
    source: "Dragon Magazine 386",
    categories: ["Repositioning Action", "ID_FMP_CLASS_FEATURE_2669", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Repositioning Action:When you spend an action point to make an attack, you can shift half your speed before or after the attack.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shadow of the Gods"] = new engine.RulesElement({
    name: "Shadow of the Gods",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2678",
    source: "Dragon Magazine 386",
    categories: ["Shadow of the Gods", "ID_FMP_CLASS_FEATURE_2678", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sharakim Gravitas"] = new engine.RulesElement({
    name: "Sharakim Gravitas",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2672",
    source: "Dragon Magazine 386",
    categories: ["Sharakim Gravitas", "ID_FMP_CLASS_FEATURE_2672", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Share the All-Spirit"] = new engine.RulesElement({
    name: "Share the All-Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2682",
    source: "Dragon Magazine 386",
    categories: ["Share the All-Spirit", "ID_FMP_CLASS_FEATURE_2682", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Thunder God's Blessing"] = new engine.RulesElement({
    name: "Thunder God's Blessing",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2670",
    source: "Dragon Magazine 386",
    categories: ["Thunder God's Blessing", "ID_FMP_CLASS_FEATURE_2670", "16"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Walker in Twilight"] = new engine.RulesElement({
    name: "Walker in Twilight",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2636",
    source: "Dragon Magazine 386",
    categories: ["Walker in Twilight", "ID_FMP_CLASS_FEATURE_2636", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_STEALTH"]);
      model.grant(model.elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_FEAT_SKILL_FOCUS_(STEALTH)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Warborn"] = new engine.RulesElement({
    name: "Warborn",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2674",
    source: "Dragon Magazine 386",
    categories: ["Warborn", "ID_FMP_CLASS_FEATURE_2674", "11"],
    rules: function(model) {
      model.statadd("Hit Points", 10);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
