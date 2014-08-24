(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Ancient Arcanist"] = new RulesElement({
    name: "Ancient Arcanist",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2720",
    source: "Dragon Magazine 388",
    categories: ["Ancient Arcanist", "ID_FMP_CLASS_FEATURE_2720", "30"],
    rules: function(model) {
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory("daily") && element.hasCategory("Arcane") && element.hasCategory("25")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ancient Resurgence"] = new RulesElement({
    name: "Ancient Resurgence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2716",
    source: "Dragon Magazine 388",
    categories: ["Ancient Resurgence", "ID_FMP_CLASS_FEATURE_2716", "21"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("Ancient Resurgence (Intelligence)") || element.hasCategory("Ancient Resurgence (Charisma)")); }
      });
      model.select('class feature', 1, {
        filter: function(model, element) { return (((element.hasCategory("Ancient Resurgence (Strength)") || element.hasCategory("Ancient Resurgence (Dexterity)")) || element.hasCategory("Ancient Resurgence (Constitution)")) || element.hasCategory("Ancient Resurgence (Wisdom)")); }
      });
      model.grant(elements.id["ID_FMP_LANGUAGE_2"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ancient Resurgence (Charisma)"] = new RulesElement({
    name: "Ancient Resurgence (Charisma)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ANCIENT_RESURGENCE_(CHARISMA)",
    source: "Dragon Magazine 388",
    categories: ["Ancient Resurgence (Charisma)", "ID_INTERNAL_CLASS_FEATURE_ANCIENT_RESURGENCE_(CHARISMA)", "ID_FMP_CLASS_FEATURE_2716", "Ancient Resurgence"],
    rules: function(model) {
      model.statadd("Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ancient Resurgence (Constitution)"] = new RulesElement({
    name: "Ancient Resurgence (Constitution)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ANCIENT_RESURGENCE_(CONSTITUTION)",
    source: "Dragon Magazine 388",
    categories: ["Ancient Resurgence (Constitution)", "ID_INTERNAL_CLASS_FEATURE_ANCIENT_RESURGENCE_(CONSTITUTION)", "ID_FMP_CLASS_FEATURE_2716", "Ancient Resurgence"],
    rules: function(model) {
      model.statadd("Constitution", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ancient Resurgence (Dexterity)"] = new RulesElement({
    name: "Ancient Resurgence (Dexterity)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ANCIENT_RESURGENCE_(DEXTERITY)",
    source: "Dragon Magazine 388",
    categories: ["Ancient Resurgence (Dexterity)", "ID_INTERNAL_CLASS_FEATURE_ANCIENT_RESURGENCE_(DEXTERITY)", "ID_FMP_CLASS_FEATURE_2716", "Ancient Resurgence"],
    rules: function(model) {
      model.statadd("Dexterity", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ancient Resurgence (Intelligence)"] = new RulesElement({
    name: "Ancient Resurgence (Intelligence)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ANCIENT_RESURGENCE_(INTELLIGENCE)",
    source: "Dragon Magazine 388",
    categories: ["Ancient Resurgence (Intelligence)", "ID_INTERNAL_CLASS_FEATURE_ANCIENT_RESURGENCE_(INTELLIGENCE)", "ID_FMP_CLASS_FEATURE_2716", "Ancient Resurgence"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ancient Resurgence (Strength)"] = new RulesElement({
    name: "Ancient Resurgence (Strength)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ANCIENT_RESURGENCE_(STRENGTH)",
    source: "Dragon Magazine 388",
    categories: ["Ancient Resurgence (Strength)", "ID_INTERNAL_CLASS_FEATURE_ANCIENT_RESURGENCE_(STRENGTH)", "ID_FMP_CLASS_FEATURE_2716", "Ancient Resurgence"],
    rules: function(model) {
      model.statadd("Strength", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ancient Resurgence (Wisdom)"] = new RulesElement({
    name: "Ancient Resurgence (Wisdom)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ANCIENT_RESURGENCE_(WISDOM)",
    source: "Dragon Magazine 388",
    categories: ["Ancient Resurgence (Wisdom)", "ID_INTERNAL_CLASS_FEATURE_ANCIENT_RESURGENCE_(WISDOM)", "ID_FMP_CLASS_FEATURE_2716", "Ancient Resurgence"],
    rules: function(model) {
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blessing of Siberys"] = new RulesElement({
    name: "Blessing of Siberys",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2729",
    source: "Dragon Magazine 388",
    categories: ["Blessing of Siberys", "ID_FMP_CLASS_FEATURE_2729", "21"],
    rules: function(model) {
      model.select('class feature', 2, {
        filter: function(model, element) { return element.hasCategory("Blessing of Siberys"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blessing of Siberys (Charisma)"] = new RulesElement({
    name: "Blessing of Siberys (Charisma)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BLESSING_OF_SIBERYS_(CHARISMA)",
    source: "Dragon Magazine 388",
    categories: ["Blessing of Siberys (Charisma)", "ID_INTERNAL_CLASS_FEATURE_BLESSING_OF_SIBERYS_(CHARISMA)", "ID_FMP_CLASS_FEATURE_2729", "Blessing of Siberys"],
    rules: function(model) {
      model.statadd("Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blessing of Siberys (Constitution)"] = new RulesElement({
    name: "Blessing of Siberys (Constitution)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BLESSING_OF_SIBERYS_(CONSTITUTION)",
    source: "Dragon Magazine 388",
    categories: ["Blessing of Siberys (Constitution)", "ID_INTERNAL_CLASS_FEATURE_BLESSING_OF_SIBERYS_(CONSTITUTION)", "ID_FMP_CLASS_FEATURE_2729", "Blessing of Siberys"],
    rules: function(model) {
      model.statadd("Constitution", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blessing of Siberys (Dexterity)"] = new RulesElement({
    name: "Blessing of Siberys (Dexterity)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BLESSING_OF_SIBERYS_(DEXTERITY)",
    source: "Dragon Magazine 388",
    categories: ["Blessing of Siberys (Dexterity)", "ID_INTERNAL_CLASS_FEATURE_BLESSING_OF_SIBERYS_(DEXTERITY)", "ID_FMP_CLASS_FEATURE_2729", "Blessing of Siberys"],
    rules: function(model) {
      model.statadd("Dexterity", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blessing of Siberys (Intelligence)"] = new RulesElement({
    name: "Blessing of Siberys (Intelligence)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BLESSING_OF_SIBERYS_(INTELLIGENCE)",
    source: "Dragon Magazine 388",
    categories: ["Blessing of Siberys (Intelligence)", "ID_INTERNAL_CLASS_FEATURE_BLESSING_OF_SIBERYS_(INTELLIGENCE)", "ID_FMP_CLASS_FEATURE_2729", "Blessing of Siberys"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blessing of Siberys (Strength)"] = new RulesElement({
    name: "Blessing of Siberys (Strength)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BLESSING_OF_SIBERYS_(STRENGTH)",
    source: "Dragon Magazine 388",
    categories: ["Blessing of Siberys (Strength)", "ID_INTERNAL_CLASS_FEATURE_BLESSING_OF_SIBERYS_(STRENGTH)", "ID_FMP_CLASS_FEATURE_2729", "Blessing of Siberys"],
    rules: function(model) {
      model.statadd("Strength", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blessing of Siberys (Wisdom)"] = new RulesElement({
    name: "Blessing of Siberys (Wisdom)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BLESSING_OF_SIBERYS_(WISDOM)",
    source: "Dragon Magazine 388",
    categories: ["Blessing of Siberys (Wisdom)", "ID_INTERNAL_CLASS_FEATURE_BLESSING_OF_SIBERYS_(WISDOM)", "ID_FMP_CLASS_FEATURE_2729", "Blessing of Siberys"],
    rules: function(model) {
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Combustive Action"] = new RulesElement({
    name: "Combustive Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2702",
    source: "Dragon Magazine 388",
    categories: ["Combustive Action", "ID_FMP_CLASS_FEATURE_2702", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Combustive Action:When you spend an action point to take an extra action, you deal fire damage equal to your level to each enemy adjacent to you.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Critical Conflagration"] = new RulesElement({
    name: "Critical Conflagration",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2703",
    source: "Dragon Magazine 388",
    categories: ["Critical Conflagration", "ID_FMP_CLASS_FEATURE_2703", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dancing Action"] = new RulesElement({
    name: "Dancing Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2708",
    source: "Dragon Magazine 388",
    categories: ["Dancing Action", "ID_FMP_CLASS_FEATURE_2708", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Dancing Action:When you spend an action point to take an extra action, you can also teleport 5 squares. If you do not, you can teleport 5 squares as a minor action once before the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Draconic Form"] = new RulesElement({
    name: "Draconic Form",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2719",
    source: "Dragon Magazine 388",
    categories: ["Draconic Form", "ID_FMP_CLASS_FEATURE_2719", "26"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_12581"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fear Mastery"] = new RulesElement({
    name: "Fear Mastery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2712",
    source: "Dragon Magazine 388",
    categories: ["Fear Mastery", "ID_FMP_CLASS_FEATURE_2712", "11"],
    rules: function(model) {
      model.statadd("fear:damage", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fear Walker's Action"] = new RulesElement({
    name: "Fear Walker's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2713",
    source: "Dragon Magazine 388",
    categories: ["Fear Walker's Action", "ID_FMP_CLASS_FEATURE_2713", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Fear Walker's Action:When you spend an action point, one creature you can see cannot attack you until the end of your next turn or until you attack it. Creatures immune to fear are immune to this effect.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Impossible Theft"] = new RulesElement({
    name: "Impossible Theft",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2723",
    source: "Dragon Magazine 388",
    categories: ["Impossible Theft", "ID_FMP_CLASS_FEATURE_2723", "26"]
  });
  byID[te.id] = te;
  
  te = class_feature["Lifeblood of Siberys"] = new RulesElement({
    name: "Lifeblood of Siberys",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2731",
    source: "Dragon Magazine 388",
    categories: ["Lifeblood of Siberys", "ID_FMP_CLASS_FEATURE_2731", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Reaching for the Canopy"] = new RulesElement({
    name: "Reaching for the Canopy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2705",
    source: "Dragon Magazine 388",
    categories: ["Reaching for the Canopy", "ID_FMP_CLASS_FEATURE_2705", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Reaching Limbs Action"] = new RulesElement({
    name: "Reaching Limbs Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2706",
    source: "Dragon Magazine 388",
    categories: ["Reaching Limbs Action", "ID_FMP_CLASS_FEATURE_2706", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Reaching Limbs Action:When you spend an action point to take an extra action that includes a melee attack and you hit with that attack, you can slide the target 4 squares.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shadow Blend"] = new RulesElement({
    name: "Shadow Blend",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2710",
    source: "Dragon Magazine 388",
    categories: ["Shadow Blend", "ID_FMP_CLASS_FEATURE_2710", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sinister Shadows"] = new RulesElement({
    name: "Sinister Shadows",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2709",
    source: "Dragon Magazine 388",
    categories: ["Sinister Shadows", "ID_FMP_CLASS_FEATURE_2709", "11"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Speaker of Prophecy"] = new RulesElement({
    name: "Speaker of Prophecy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2732",
    source: "Dragon Magazine 388",
    categories: ["Speaker of Prophecy", "ID_FMP_CLASS_FEATURE_2732", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Spirit of the Dragon"] = new RulesElement({
    name: "Spirit of the Dragon",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2718",
    source: "Dragon Magazine 388",
    categories: ["Spirit of the Dragon", "ID_FMP_CLASS_FEATURE_2718", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Stalwart Guardian"] = new RulesElement({
    name: "Stalwart Guardian",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2725",
    source: "Dragon Magazine 388",
    categories: ["Stalwart Guardian", "ID_FMP_CLASS_FEATURE_2725", "21"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Stalwart Guardian"); }
      });
      model.statadd("Constitution", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stalwart Guardian (Charisma)"] = new RulesElement({
    name: "Stalwart Guardian (Charisma)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_STALWART_GUARDIAN_(CHARISMA)",
    source: "Dragon Magazine 388",
    categories: ["Stalwart Guardian (Charisma)", "ID_INTERNAL_CLASS_FEATURE_STALWART_GUARDIAN_(CHARISMA)", "ID_FMP_CLASS_FEATURE_2725", "Stalwart Guardian"],
    rules: function(model) {
      model.statadd("Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stalwart Guardian (Dexterity)"] = new RulesElement({
    name: "Stalwart Guardian (Dexterity)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_STALWART_GUARDIAN_(DEXTERITY)",
    source: "Dragon Magazine 388",
    categories: ["Stalwart Guardian (Dexterity)", "ID_INTERNAL_CLASS_FEATURE_STALWART_GUARDIAN_(DEXTERITY)", "ID_FMP_CLASS_FEATURE_2725", "Stalwart Guardian"],
    rules: function(model) {
      model.statadd("Dexterity", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stalwart Guardian (Intelligence)"] = new RulesElement({
    name: "Stalwart Guardian (Intelligence)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_STALWART_GUARDIAN_(INTELLIGENCE)",
    source: "Dragon Magazine 388",
    categories: ["Stalwart Guardian (Intelligence)", "ID_INTERNAL_CLASS_FEATURE_STALWART_GUARDIAN_(INTELLIGENCE)", "ID_FMP_CLASS_FEATURE_2725", "Stalwart Guardian"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stalwart Guardian (Strength)"] = new RulesElement({
    name: "Stalwart Guardian (Strength)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_STALWART_GUARDIAN_(STRENGTH)",
    source: "Dragon Magazine 388",
    categories: ["Stalwart Guardian (Strength)", "ID_INTERNAL_CLASS_FEATURE_STALWART_GUARDIAN_(STRENGTH)", "ID_FMP_CLASS_FEATURE_2725", "Stalwart Guardian"],
    rules: function(model) {
      model.statadd("Strength", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stalwart Guardian (Wisdom)"] = new RulesElement({
    name: "Stalwart Guardian (Wisdom)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_STALWART_GUARDIAN_(WISDOM)",
    source: "Dragon Magazine 388",
    categories: ["Stalwart Guardian (Wisdom)", "ID_INTERNAL_CLASS_FEATURE_STALWART_GUARDIAN_(WISDOM)", "ID_FMP_CLASS_FEATURE_2725", "Stalwart Guardian"],
    rules: function(model) {
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Steal Back the Soul"] = new RulesElement({
    name: "Steal Back the Soul",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2722",
    source: "Dragon Magazine 388",
    categories: ["Steal Back the Soul", "ID_FMP_CLASS_FEATURE_2722", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Swath of Destruction"] = new RulesElement({
    name: "Swath of Destruction",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2704",
    source: "Dragon Magazine 388",
    categories: ["Swath of Destruction", "ID_FMP_CLASS_FEATURE_2704", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Treeborn Action"] = new RulesElement({
    name: "Treeborn Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2707",
    source: "Dragon Magazine 388",
    categories: ["Treeborn Action", "ID_FMP_CLASS_FEATURE_2707", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unbreakable"] = new RulesElement({
    name: "Unbreakable",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2726",
    source: "Dragon Magazine 388",
    categories: ["Unbreakable", "ID_FMP_CLASS_FEATURE_2726", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Uncanny Prowess"] = new RulesElement({
    name: "Uncanny Prowess",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2721",
    source: "Dragon Magazine 388",
    categories: ["Uncanny Prowess", "ID_FMP_CLASS_FEATURE_2721", "21"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Uncanny Prowess"); }
      });
      model.statadd("Dexterity", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Uncanny Prowess (Charisma)"] = new RulesElement({
    name: "Uncanny Prowess (Charisma)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_UNCANNY_PROWESS_(CHARISMA)",
    source: "Dragon Magazine 388",
    categories: ["Uncanny Prowess (Charisma)", "ID_INTERNAL_CLASS_FEATURE_UNCANNY_PROWESS_(CHARISMA)", "ID_FMP_CLASS_FEATURE_2721", "Uncanny Prowess"],
    rules: function(model) {
      model.statadd("Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Uncanny Prowess (Constitution)"] = new RulesElement({
    name: "Uncanny Prowess (Constitution)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_UNCANNY_PROWESS_(CONSTITUTION)",
    source: "Dragon Magazine 388",
    categories: ["Uncanny Prowess (Constitution)", "ID_INTERNAL_CLASS_FEATURE_UNCANNY_PROWESS_(CONSTITUTION)", "ID_FMP_CLASS_FEATURE_2721", "Uncanny Prowess"],
    rules: function(model) {
      model.statadd("Constitution", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Uncanny Prowess (Intelligence)"] = new RulesElement({
    name: "Uncanny Prowess (Intelligence)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_UNCANNY_PROWESS_(INTELLIGENCE)",
    source: "Dragon Magazine 388",
    categories: ["Uncanny Prowess (Intelligence)", "ID_INTERNAL_CLASS_FEATURE_UNCANNY_PROWESS_(INTELLIGENCE)", "ID_FMP_CLASS_FEATURE_2721", "Uncanny Prowess"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Uncanny Prowess (Strength)"] = new RulesElement({
    name: "Uncanny Prowess (Strength)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_UNCANNY_PROWESS_(STRENGTH)",
    source: "Dragon Magazine 388",
    categories: ["Uncanny Prowess (Strength)", "ID_INTERNAL_CLASS_FEATURE_UNCANNY_PROWESS_(STRENGTH)", "ID_FMP_CLASS_FEATURE_2721", "Uncanny Prowess"],
    rules: function(model) {
      model.statadd("Strength", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Uncanny Prowess (Wisdom)"] = new RulesElement({
    name: "Uncanny Prowess (Wisdom)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_UNCANNY_PROWESS_(WISDOM)",
    source: "Dragon Magazine 388",
    categories: ["Uncanny Prowess (Wisdom)", "ID_INTERNAL_CLASS_FEATURE_UNCANNY_PROWESS_(WISDOM)", "ID_FMP_CLASS_FEATURE_2721", "Uncanny Prowess"],
    rules: function(model) {
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Understanding of Fear"] = new RulesElement({
    name: "Understanding of Fear",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2714",
    source: "Dragon Magazine 388",
    categories: ["Understanding of Fear", "ID_FMP_CLASS_FEATURE_2714", "11"],
    rules: function(model) {
      model.statadd("Insight Misc", 2);
      model.statadd("Intimidate Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Undetectable Thief"] = new RulesElement({
    name: "Undetectable Thief",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2724",
    source: "Dragon Magazine 388",
    categories: ["Undetectable Thief", "ID_FMP_CLASS_FEATURE_2724", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Undying Vanguard"] = new RulesElement({
    name: "Undying Vanguard",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2728",
    source: "Dragon Magazine 388",
    categories: ["Undying Vanguard", "ID_FMP_CLASS_FEATURE_2728", "26"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_12585"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Vigor of Battle"] = new RulesElement({
    name: "Vigor of Battle",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2727",
    source: "Dragon Magazine 388",
    categories: ["Vigor of Battle", "ID_FMP_CLASS_FEATURE_2727", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Walking with Terror"] = new RulesElement({
    name: "Walking with Terror",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2715",
    source: "Dragon Magazine 388",
    categories: ["Walking with Terror", "ID_FMP_CLASS_FEATURE_2715", "16"],
    rules: function(model) {
      model.statadd("fear:attack", function() { /* against targets adjacent to you */ return 2; }, "Power");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Will of Siberys"] = new RulesElement({
    name: "Will of Siberys",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2730",
    source: "Dragon Magazine 388",
    categories: ["Will of Siberys", "ID_FMP_CLASS_FEATURE_2730", "21"]
  });
  byID[te.id] = te;
  
  
})(this);
