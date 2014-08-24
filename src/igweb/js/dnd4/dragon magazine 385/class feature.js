(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Alchemical Blood (Acid)"] = new RulesElement({
    name: "Alchemical Blood (Acid)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ALCHEMICAL_BLOOD_(ACID)",
    source: "Dragon Magazine 385",
    categories: ["Alchemical Blood (Acid)", "ID_INTERNAL_CLASS_FEATURE_ALCHEMICAL_BLOOD_(ACID)", "Alchemical Blood"],
    rules: function(model) {
      model.statadd("Alchemical Blood (Acid)", 1);
      model.statadd("Alchemical Blood (Acid)", 1);
      model.statadd("Alchemical Blood (Acid)", 1);
      model.statadd("acid:damage", function() { return model.stat("Alchemical Blood (Acid)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Alchemical Blood (Cold)"] = new RulesElement({
    name: "Alchemical Blood (Cold)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ALCHEMICAL_BLOOD_(COLD)",
    source: "Dragon Magazine 385",
    categories: ["Alchemical Blood (Cold)", "ID_INTERNAL_CLASS_FEATURE_ALCHEMICAL_BLOOD_(COLD)", "Alchemical Blood"],
    rules: function(model) {
      model.statadd("Alchemical Blood (Cold)", 1);
      model.statadd("Alchemical Blood (Cold)", 1);
      model.statadd("Alchemical Blood (Cold)", 1);
      model.statadd("cold:damage", function() { return model.stat("Alchemical Blood (Cold)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Alchemical Blood (Fire)"] = new RulesElement({
    name: "Alchemical Blood (Fire)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ALCHEMICAL_BLOOD_(FIRE)",
    source: "Dragon Magazine 385",
    categories: ["Alchemical Blood (Fire)", "ID_INTERNAL_CLASS_FEATURE_ALCHEMICAL_BLOOD_(FIRE)", "Alchemical Blood"],
    rules: function(model) {
      model.statadd("Alchemical Blood (Fire)", 1);
      model.statadd("Alchemical Blood (Fire)", 1);
      model.statadd("Alchemical Blood (Fire)", 1);
      model.statadd("fire:damage", function() { return model.stat("Alchemical Blood (Fire)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Alchemical Blood (Lightning)"] = new RulesElement({
    name: "Alchemical Blood (Lightning)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ALCHEMICAL_BLOOD_(LIGHTNING)",
    source: "Dragon Magazine 385",
    categories: ["Alchemical Blood (Lightning)", "ID_INTERNAL_CLASS_FEATURE_ALCHEMICAL_BLOOD_(LIGHTNING)", "Alchemical Blood"],
    rules: function(model) {
      model.statadd("Alchemical Blood (Lightning)", 1);
      model.statadd("Alchemical Blood (Lightning)", 1);
      model.statadd("Alchemical Blood (Lightning)", 1);
      model.statadd("lightning:damage", function() { return model.stat("Alchemical Blood (Lightning)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Alchemical Blood (Necrotic)"] = new RulesElement({
    name: "Alchemical Blood (Necrotic)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ALCHEMICAL_BLOOD_(NECROTIC)",
    source: "Dragon Magazine 385",
    categories: ["Alchemical Blood (Necrotic)", "ID_INTERNAL_CLASS_FEATURE_ALCHEMICAL_BLOOD_(NECROTIC)", "Alchemical Blood"],
    rules: function(model) {
      model.statadd("Alchemical Blood (Necrotic)", 1);
      model.statadd("Alchemical Blood (Necrotic)", 1);
      model.statadd("Alchemical Blood (Necrotic)", 1);
      model.statadd("necrotic:damage", function() { return model.stat("Alchemical Blood (Necrotic)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Alchemical Blood (Poison)"] = new RulesElement({
    name: "Alchemical Blood (Poison)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ALCHEMICAL_BLOOD_(POISON)",
    source: "Dragon Magazine 385",
    categories: ["Alchemical Blood (Poison)", "ID_INTERNAL_CLASS_FEATURE_ALCHEMICAL_BLOOD_(POISON)", "Alchemical Blood"],
    rules: function(model) {
      model.statadd("Alchemical Blood (Poison)", 1);
      model.statadd("Alchemical Blood (Poison)", 1);
      model.statadd("Alchemical Blood (Poison)", 1);
      model.statadd("poison:damage", function() { return model.stat("Alchemical Blood (Poison)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Alchemical Blood (Thunder)"] = new RulesElement({
    name: "Alchemical Blood (Thunder)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ALCHEMICAL_BLOOD_(THUNDER)",
    source: "Dragon Magazine 385",
    categories: ["Alchemical Blood (Thunder)", "ID_INTERNAL_CLASS_FEATURE_ALCHEMICAL_BLOOD_(THUNDER)", "Alchemical Blood"],
    rules: function(model) {
      model.statadd("Alchemical Blood (Thunder)", 1);
      model.statadd("Alchemical Blood (Thunder)", 1);
      model.statadd("Alchemical Blood (Thunder)", 1);
      model.statadd("thunder:damage", function() { return model.stat("Alchemical Blood (Thunder)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ancestral Retribution"] = new RulesElement({
    name: "Ancestral Retribution",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2551",
    source: "Dragon Magazine 385",
    categories: ["Ancestral Retribution", "ID_FMP_CLASS_FEATURE_2551", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Ancient Enemies"] = new RulesElement({
    name: "Ancient Enemies",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2548",
    source: "Dragon Magazine 385",
    categories: ["Ancient Enemies", "ID_FMP_CLASS_FEATURE_2548", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_19"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_20"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Argent Action"] = new RulesElement({
    name: "Argent Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2555",
    source: "Dragon Magazine 385",
    categories: ["Argent Action", "ID_FMP_CLASS_FEATURE_2555", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Argent Action:When you spend an action point to make an attack, you mark each enemy within 5 squares of you until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Argent Breath"] = new RulesElement({
    name: "Argent Breath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2556",
    source: "Dragon Magazine 385",
    categories: ["Argent Breath", "ID_FMP_CLASS_FEATURE_2556", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_POWER_1448:damage", "+1d6");
      model.statadd("ID_FMP_POWER_1448:damage", "+2d6");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Argent Protection"] = new RulesElement({
    name: "Argent Protection",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2557",
    source: "Dragon Magazine 385",
    categories: ["Argent Protection", "ID_FMP_CLASS_FEATURE_2557", "16"],
    rules: function(model) {
      model.statadd("Argent Protection", 10);
      model.statadd("Argent Protection", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("resist:cold", function() { return model.stat("Argent Protection"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Assassin's Shroud (Hybrid)"] = new RulesElement({
    name: "Assassin's Shroud (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2572",
    source: "Dragon Magazine 385",
    categories: ["Assassin's Shroud (Hybrid)", "ID_FMP_CLASS_FEATURE_2572", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_9400"]);
      model.grant(elements.id["ID_INTERNAL_COUNTSASFEATURE_ASSASSIN'S_SHROUD"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Astral Knowledge"] = new RulesElement({
    name: "Astral Knowledge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2567",
    source: "Dragon Magazine 385",
    categories: ["Astral Knowledge", "ID_FMP_CLASS_FEATURE_2567", "11"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("encounter") && element.hasCategory("7")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("encounter") && element.hasCategory("13")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Astral Luck"] = new RulesElement({
    name: "Astral Luck",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2568",
    source: "Dragon Magazine 385",
    categories: ["Astral Luck", "ID_FMP_CLASS_FEATURE_2568", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Astral Step"] = new RulesElement({
    name: "Astral Step",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2570",
    source: "Dragon Magazine 385",
    categories: ["Astral Step", "ID_FMP_CLASS_FEATURE_2570", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Behind the Shell"] = new RulesElement({
    name: "Behind the Shell",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2600",
    source: "Dragon Magazine 385",
    categories: ["Behind the Shell", "ID_FMP_CLASS_FEATURE_2600", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bleak Disciple (Hybrid)"] = new RulesElement({
    name: "Bleak Disciple (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2575",
    source: "Dragon Magazine 385",
    categories: ["Bleak Disciple (Hybrid)", "ID_FMP_CLASS_FEATURE_2575", "ID_FMP_CLASS_FEATURE_2573", "Guild Training (Hybrid)", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_COUNTSASFEATURE_BLEAK_DISCIPLE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bodiless Dreaming"] = new RulesElement({
    name: "Bodiless Dreaming",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2580",
    source: "Dragon Magazine 385",
    categories: ["Bodiless Dreaming", "ID_FMP_CLASS_FEATURE_2580", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Breaching Spirit"] = new RulesElement({
    name: "Breaching Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2592",
    source: "Dragon Magazine 385",
    categories: ["Breaching Spirit", "ID_FMP_CLASS_FEATURE_2592", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Broad Dilettante"] = new RulesElement({
    name: "Broad Dilettante",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2606",
    source: "Dragon Magazine 385",
    categories: ["Broad Dilettante", "ID_FMP_CLASS_FEATURE_2606", "16"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (true /* NYI: Filter: $$NOT_CLASS */ && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Captive Audience"] = new RulesElement({
    name: "Captive Audience",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2566",
    source: "Dragon Magazine 385",
    categories: ["Captive Audience", "ID_FMP_CLASS_FEATURE_2566", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Certain Destiny"] = new RulesElement({
    name: "Certain Destiny",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2577",
    source: "Dragon Magazine 385",
    categories: ["Certain Destiny", "ID_FMP_CLASS_FEATURE_2577", "21"],
    rules: function(model) {
      model.statadd("Wisdom", 2);
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Certain Destiny"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Certain Destiny Charisma"] = new RulesElement({
    name: "Certain Destiny Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_CERTAIN_DESTINY_CHARISMA",
    source: "Dragon Magazine 385",
    categories: ["Certain Destiny Charisma", "ID_INTERNAL_CLASS_FEATURE_CERTAIN_DESTINY_CHARISMA", "ID_FMP_CLASS_FEATURE_2577", "Certain Destiny"],
    rules: function(model) {
      model.statadd("Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Certain Destiny Constitution"] = new RulesElement({
    name: "Certain Destiny Constitution",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_CERTAIN_DESTINY_CONSTITUTION",
    source: "Dragon Magazine 385",
    categories: ["Certain Destiny Constitution", "ID_INTERNAL_CLASS_FEATURE_CERTAIN_DESTINY_CONSTITUTION", "ID_FMP_CLASS_FEATURE_2577", "Certain Destiny"],
    rules: function(model) {
      model.statadd("Constitution", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Certain Destiny Dexterity"] = new RulesElement({
    name: "Certain Destiny Dexterity",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_CERTAIN_DESTINY_DEXTERITY",
    source: "Dragon Magazine 385",
    categories: ["Certain Destiny Dexterity", "ID_INTERNAL_CLASS_FEATURE_CERTAIN_DESTINY_DEXTERITY", "ID_FMP_CLASS_FEATURE_2577", "Certain Destiny"],
    rules: function(model) {
      model.statadd("Dexterity", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Certain Destiny Intelligence"] = new RulesElement({
    name: "Certain Destiny Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_CERTAIN_DESTINY_INTELLIGENCE",
    source: "Dragon Magazine 385",
    categories: ["Certain Destiny Intelligence", "ID_INTERNAL_CLASS_FEATURE_CERTAIN_DESTINY_INTELLIGENCE", "ID_FMP_CLASS_FEATURE_2577", "Certain Destiny"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Certain Destiny Strength"] = new RulesElement({
    name: "Certain Destiny Strength",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_CERTAIN_DESTINY_STRENGTH",
    source: "Dragon Magazine 385",
    categories: ["Certain Destiny Strength", "ID_INTERNAL_CLASS_FEATURE_CERTAIN_DESTINY_STRENGTH", "ID_FMP_CLASS_FEATURE_2577", "Certain Destiny"],
    rules: function(model) {
      model.statadd("Strength", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Chaos Soul"] = new RulesElement({
    name: "Chaos Soul",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2552",
    source: "Dragon Magazine 385",
    categories: ["Chaos Soul", "ID_FMP_CLASS_FEATURE_2552", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Charged Companion"] = new RulesElement({
    name: "Charged Companion",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2589",
    source: "Dragon Magazine 385",
    categories: ["Charged Companion", "ID_FMP_CLASS_FEATURE_2589", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Clear the Path"] = new RulesElement({
    name: "Clear the Path",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2506",
    source: "Dragon Magazine 385",
    categories: ["Clear the Path", "ID_FMP_CLASS_FEATURE_2506", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Commune with the Pentad"] = new RulesElement({
    name: "Commune with the Pentad",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2571",
    source: "Dragon Magazine 385",
    categories: ["Commune with the Pentad", "ID_FMP_CLASS_FEATURE_2571", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dabbler Action"] = new RulesElement({
    name: "Dabbler Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2604",
    source: "Dragon Magazine 385",
    categories: ["Dabbler Action", "ID_FMP_CLASS_FEATURE_2604", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Dabbler Action:When you spend an action point and use the extra action to use the power you gained from your Dilettante racial trait, you can move your speed or shift 1 square before or after you resolve the extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Deceptive Veil"] = new RulesElement({
    name: "Deceptive Veil",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2578",
    source: "Dragon Magazine 385",
    categories: ["Deceptive Veil", "ID_FMP_CLASS_FEATURE_2578", "21"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_12172"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Driving Action"] = new RulesElement({
    name: "Driving Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2590",
    source: "Dragon Magazine 385",
    categories: ["Driving Action", "ID_FMP_CLASS_FEATURE_2590", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Driving Action:When you spend an action point, you can shift a number of squares equal to your Wisdom modifier, and each ally within 5 squares of you can shift 1 square.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fate Manipulation"] = new RulesElement({
    name: "Fate Manipulation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2579",
    source: "Dragon Magazine 385",
    categories: ["Fate Manipulation", "ID_FMP_CLASS_FEATURE_2579", "21"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fate of the Fallen Star"] = new RulesElement({
    name: "Fate of the Fallen Star",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2581",
    source: "Dragon Magazine 385",
    categories: ["Fate of the Fallen Star", "ID_FMP_CLASS_FEATURE_2581", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fiery Spirit"] = new RulesElement({
    name: "Fiery Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2588",
    source: "Dragon Magazine 385",
    categories: ["Fiery Spirit", "ID_FMP_CLASS_FEATURE_2588", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fluid Shape"] = new RulesElement({
    name: "Fluid Shape",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2560",
    source: "Dragon Magazine 385",
    categories: ["Fluid Shape", "ID_FMP_CLASS_FEATURE_2560", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Foe Hammer"] = new RulesElement({
    name: "Foe Hammer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2603",
    source: "Dragon Magazine 385",
    categories: ["Foe Hammer", "ID_FMP_CLASS_FEATURE_2603", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fountain of Life"] = new RulesElement({
    name: "Fountain of Life",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2595",
    source: "Dragon Magazine 385",
    categories: ["Fountain of Life", "ID_FMP_CLASS_FEATURE_2595", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Glib Tongue"] = new RulesElement({
    name: "Glib Tongue",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2565",
    source: "Dragon Magazine 385",
    categories: ["Glib Tongue", "ID_FMP_CLASS_FEATURE_2565", "11"],
    rules: function(model) {
      model.statadd("Bluff Misc", 3);
      model.statadd("Diplomacy Misc", 3);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Guild Training (Hybrid)"] = new RulesElement({
    name: "Guild Training (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2573",
    source: "Dragon Magazine 385",
    categories: ["Guild Training (Hybrid)", "ID_FMP_CLASS_FEATURE_2573", "ID_FMP_HYBRID_CLASS_641", "Hybrid Assassin", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_2573"); }
      });
      model.grant(elements.id["ID_INTERNAL_COUNTSASFEATURE_GUILD_TRAINING"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Insightful Negotiator"] = new RulesElement({
    name: "Insightful Negotiator",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2563",
    source: "Dragon Magazine 385",
    categories: ["Insightful Negotiator", "ID_FMP_CLASS_FEATURE_2563", "16"],
    rules: function(model) {
      model.statadd("Insight Misc", 3);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Inspirational Action"] = new RulesElement({
    name: "Inspirational Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2549",
    source: "Dragon Magazine 385",
    categories: ["Inspirational Action", "ID_FMP_CLASS_FEATURE_2549", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Inspirational Action:When you spend an action point to take an extra action, each ally who can see and hear you gains a +4 power bonus to speed until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Inspirational Practice"] = new RulesElement({
    name: "Inspirational Practice",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2550",
    source: "Dragon Magazine 385",
    categories: ["Inspirational Practice", "ID_FMP_CLASS_FEATURE_2550", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Instructed Action"] = new RulesElement({
    name: "Instructed Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2561",
    source: "Dragon Magazine 385",
    categories: ["Instructed Action", "ID_FMP_CLASS_FEATURE_2561", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Instructed Action:When you spend an action point to take an extra action, you and each ally within 5 squares of you gain a +2 power bonus to the next attack roll made before the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Insulting Action"] = new RulesElement({
    name: "Insulting Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2564",
    source: "Dragon Magazine 385",
    categories: ["Insulting Action", "ID_FMP_CLASS_FEATURE_2564", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Insulting Action:When you miss a target that grants combat advantage to you, you can spend an action point to reroll that attack roll with a +2 bonus. You must use the result of the second roll.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives"] = new RulesElement({
    name: "Knowledge of Ancient Lives",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2584",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives", "ID_FMP_CLASS_FEATURE_2584", "24"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Knowledge of Ancient Lives"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Ardent)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Ardent)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(ARDENT)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Ardent)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(ARDENT)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_529");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Artificer)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Artificer)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(ARTIFICER)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Artificer)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(ARTIFICER)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_125");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Assassin)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Assassin)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(ASSASSIN)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Assassin)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(ASSASSIN)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_466");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Avenger)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Avenger)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(AVENGER)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Avenger)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(AVENGER)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_129");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Barbarian)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Barbarian)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(BARBARIAN)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Barbarian)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(BARBARIAN)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_148");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Bard)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Bard)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(BARD)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Bard)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(BARD)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_104");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Battlemind)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Battlemind)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(BATTLEMIND)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Battlemind)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(BATTLEMIND)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_124");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Cleric)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Cleric)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(CLERIC)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Cleric)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(CLERIC)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_2");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Druid)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Druid)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(DRUID)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Druid)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(DRUID)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_126");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Fighter)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Fighter)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(FIGHTER)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Fighter)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(FIGHTER)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_3");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Hybrid)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Hybrid)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(HYBRID)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Hybrid)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(HYBRID)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_INTERNAL_CLASS_HYBRID");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Invoker)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Invoker)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(INVOKER)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Invoker)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(INVOKER)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_127");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Monk)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Monk)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(MONK)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Monk)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(MONK)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_362");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Paladin)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Paladin)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(PALADIN)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Paladin)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(PALADIN)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_4");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Psion)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Psion)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(PSION)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Psion)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(PSION)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_437");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Ranger)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Ranger)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(RANGER)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Ranger)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(RANGER)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_5");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Rogue)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Rogue)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(ROGUE)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Rogue)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(ROGUE)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_6");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Runepriest)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Runepriest)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(RUNEPRIEST)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Runepriest)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(RUNEPRIEST)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_602");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Seeker)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Seeker)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(SEEKER)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Seeker)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(SEEKER)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_472");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Shaman)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Shaman)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(SHAMAN)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Shaman)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(SHAMAN)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_147");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Sorcerer)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Sorcerer)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(SORCERER)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Sorcerer)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(SORCERER)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_128");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Swordmage)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Swordmage)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(SWORDMAGE)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Swordmage)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(SWORDMAGE)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_53");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Warden)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Warden)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(WARDEN)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Warden)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(WARDEN)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_134");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Warlock)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Warlock)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(WARLOCK)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Warlock)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(WARLOCK)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_7");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Warlord)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Warlord)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(WARLORD)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Warlord)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(WARLORD)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_8");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge of Ancient Lives (Wizard)"] = new RulesElement({
    name: "Knowledge of Ancient Lives (Wizard)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(WIZARD)",
    source: "Dragon Magazine 385",
    categories: ["Knowledge of Ancient Lives (Wizard)", "ID_INTERNAL_CLASS_FEATURE_KNOWLEDGE_OF_ANCIENT_LIVES_(WIZARD)", "ID_FMP_CLASS_FEATURE_2584", "Knowledge of Ancient Lives"],
    rules: function(model) {
      model.statadd("PowersAsClass", "ID_FMP_CLASS_9");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Luckbender's Action"] = new RulesElement({
    name: "Luckbender's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2553",
    source: "Dragon Magazine 385",
    categories: ["Luckbender's Action", "ID_FMP_CLASS_FEATURE_2553", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Luckbender's Action:When you spend an action point to make a sorcerer attack, choose 1–10 or 11–20. If the result on the die for the first attack roll you make as a part of that attack is within the range selected, you regain the use of your lowest-level sorcerer encounter attack power.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Lucky Number"] = new RulesElement({
    name: "Lucky Number",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2554",
    source: "Dragon Magazine 385",
    categories: ["Lucky Number", "ID_FMP_CLASS_FEATURE_2554", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Maze Adept Action"] = new RulesElement({
    name: "Maze Adept Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2504",
    source: "Dragon Magazine 385",
    categories: ["Maze Adept Action", "ID_FMP_CLASS_FEATURE_2504", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Maze Adept Action:When you spend an action point to take an extra action, you gain a +2 bonus to AC and speed and a +5 bonus to Athletics checks until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mending Action"] = new RulesElement({
    name: "Mending Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2596",
    source: "Dragon Magazine 385",
    categories: ["Mending Action", "ID_FMP_CLASS_FEATURE_2596", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Mending Action:When you spend an action point, each ally adjacent to your spirit companion can regain hit points equal to your Wisdom modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mercurial Agility"] = new RulesElement({
    name: "Mercurial Agility",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2558",
    source: "Dragon Magazine 385",
    categories: ["Mercurial Agility", "ID_FMP_CLASS_FEATURE_2558", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Mercurial Agility:When you spend an action point to take an extra action, you can also take a move action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Night Stalker (Hybrid)"] = new RulesElement({
    name: "Night Stalker (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2576",
    source: "Dragon Magazine 385",
    categories: ["Night Stalker (Hybrid)", "ID_FMP_CLASS_FEATURE_2576", "ID_FMP_CLASS_FEATURE_2573", "Guild Training (Hybrid)", "1"],
    rules: function(model) {
      model.statadd("ID_FMP_CLASS_466:damage", function() { /* against any target that is adjacent to none of your enemies */ return model.stat("Charisma modifier"); });
      model.grant(elements.id["ID_INTERNAL_COUNTSASFEATURE_NIGHT_STALKER"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["One with All Past Lives"] = new RulesElement({
    name: "One with All Past Lives",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2585",
    source: "Dragon Magazine 385",
    categories: ["One with All Past Lives", "ID_FMP_CLASS_FEATURE_2585", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Predator Action"] = new RulesElement({
    name: "Predator Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2593",
    source: "Dragon Magazine 385",
    categories: ["Predator Action", "ID_FMP_CLASS_FEATURE_2593", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Predator Action:When you spend an action point to take an extra action, one enemy adjacent to your spirit companion gains vulnerable 5 damage until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Prophetic Foresight"] = new RulesElement({
    name: "Prophetic Foresight",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2569",
    source: "Dragon Magazine 385",
    categories: ["Prophetic Foresight", "ID_FMP_CLASS_FEATURE_2569", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Prophetic Foresight:When you spend an action point to take an extra action, you gain a +2 bonus to attack rolls until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Quicksilver Movement"] = new RulesElement({
    name: "Quicksilver Movement",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2559",
    source: "Dragon Magazine 385",
    categories: ["Quicksilver Movement", "ID_FMP_CLASS_FEATURE_2559", "11"],
    rules: function(model) {
      model.statadd("Speed", 1);
      model.statadd("Stealth Misc", 3);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Reforged Action"] = new RulesElement({
    name: "Reforged Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2601",
    source: "Dragon Magazine 385",
    categories: ["Reforged Action", "ID_FMP_CLASS_FEATURE_2601", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Reforged Action:When you spend an action point, you regain use of Channel Divinity or one divine encounter attack power of 11th level or lower.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Soulfire"] = new RulesElement({
    name: "Soulfire",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2586",
    source: "Dragon Magazine 385",
    categories: ["Soulfire", "ID_FMP_CLASS_FEATURE_2586", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_12176"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Soulfire Action"] = new RulesElement({
    name: "Soulfire Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2587",
    source: "Dragon Magazine 385",
    categories: ["Soulfire Action", "ID_FMP_CLASS_FEATURE_2587", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Soulfire Action:When you spend an action point, you can use your soulfire power as a free action, targeting yourself and two allies in range.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spiritual Piercing"] = new RulesElement({
    name: "Spiritual Piercing",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2594",
    source: "Dragon Magazine 385",
    categories: ["Spiritual Piercing", "ID_FMP_CLASS_FEATURE_2594", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Stormcaller Resistance"] = new RulesElement({
    name: "Stormcaller Resistance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2591",
    source: "Dragon Magazine 385",
    categories: ["Stormcaller Resistance", "ID_FMP_CLASS_FEATURE_2591", "16"],
    rules: function(model) {
      model.statadd("resist:thunder", 10, "resist");
      model.statadd("resist:lightning", 10, "resist");
      model.statadd("SPIRIT.resist:thunder", 10, "resist");
      model.statadd("SPIRIT.resist:lightning", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Strengthened by the Past"] = new RulesElement({
    name: "Strengthened by the Past",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2583",
    source: "Dragon Magazine 385",
    categories: ["Strengthened by the Past", "ID_FMP_CLASS_FEATURE_2583", "21"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Striking Surge"] = new RulesElement({
    name: "Striking Surge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2597",
    source: "Dragon Magazine 385",
    categories: ["Striking Surge", "ID_FMP_CLASS_FEATURE_2597", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Thunderous Teachings"] = new RulesElement({
    name: "Thunderous Teachings",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2562",
    source: "Dragon Magazine 385",
    categories: ["Thunderous Teachings", "ID_FMP_CLASS_FEATURE_2562", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_POWER_1448:damage", "+1d6");
      model.statadd("ID_FMP_POWER_1448:damage", "+2d6");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Two Shield Action"] = new RulesElement({
    name: "Two Shield Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2598",
    source: "Dragon Magazine 385",
    categories: ["Two Shield Action", "ID_FMP_CLASS_FEATURE_2598", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Two Shield Action:When you spend an action point to take an extra action while using two shields, you gain a +4 bonus to all defenses until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Two-Fold Defense"] = new RulesElement({
    name: "Two-Fold Defense",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2599",
    source: "Dragon Magazine 385",
    categories: ["Two-Fold Defense", "ID_FMP_CLASS_FEATURE_2599", "11"],
    rules: function(model) {
      model.statadd("Shield Bonus", function() { 
        if (false /* TBI: DUAL-SHIELD: */) {
          return 1;
        } else return 0;
       });
      model.statadd("Light Shield Defense Bonus", function() { 
        if (false /* TBI: DUAL-SHIELD: */) {
          return 1;
        } else return 0;
       });
      model.statadd("Heavy Shield Defense Bonus", function() { 
        if (false /* TBI: DUAL-SHIELD: */) {
          return 1;
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Uncanny Mobility"] = new RulesElement({
    name: "Uncanny Mobility",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2505",
    source: "Dragon Magazine 385",
    categories: ["Uncanny Mobility", "ID_FMP_CLASS_FEATURE_2505", "11"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that immobilize or slow */ return 4; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Weapon of the Dwarf-Father"] = new RulesElement({
    name: "Weapon of the Dwarf-Father",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2602",
    source: "Dragon Magazine 385",
    categories: ["Weapon of the Dwarf-Father", "ID_FMP_CLASS_FEATURE_2602", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_12209"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Well-Rounded"] = new RulesElement({
    name: "Well-Rounded",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2605",
    source: "Dragon Magazine 385",
    categories: ["Well-Rounded", "ID_FMP_CLASS_FEATURE_2605", "11"],
    rules: function(model) {
      model.select('Skill Training', 2);
    }
  });
  byID[te.id] = te;
  
  
})(this);
