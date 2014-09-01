define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Flitting Shadows"] = new engine.RulesElement({
    name: "Flitting Shadows",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2148",
    source: "Dragon Magazine 382",
    categories: ["Flitting Shadows", "ID_FMP_CLASS_FEATURE_2148", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Gloaming Action"] = new engine.RulesElement({
    name: "Gloaming Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2146",
    source: "Dragon Magazine 382",
    categories: ["Gloaming Action", "ID_FMP_CLASS_FEATURE_2146", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Gloaming Action:Whenever you spend an action point to make an extra attack, you can shift your speed into a space adjacent to your target before the attack.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Lay of the Land"] = new engine.RulesElement({
    name: "Lay of the Land",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2169",
    source: "Dragon Magazine 382",
    categories: ["Lay of the Land", "ID_FMP_CLASS_FEATURE_2169", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Master of Many Paths"] = new engine.RulesElement({
    name: "Master of Many Paths",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2172",
    source: "Dragon Magazine 382",
    categories: ["Master of Many Paths", "ID_FMP_CLASS_FEATURE_2172", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_UNLIMITED_MULTICLASS"]);
      model.select('Feat', 1, "Master of Many Paths", {
        filter: function(model, element) { return element.hasCategory("Class-Specific Multiclass"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Night Eyes"] = new engine.RulesElement({
    name: "Night Eyes",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2147",
    source: "Dragon Magazine 382",
    categories: ["Night Eyes", "ID_FMP_CLASS_FEATURE_2147", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Rerouted Action"] = new engine.RulesElement({
    name: "Rerouted Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2167",
    source: "Dragon Magazine 382",
    categories: ["Rerouted Action", "ID_FMP_CLASS_FEATURE_2167", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Rerouted Action:When you spend an action point to take an extra action, you can also move your speed or shift half your speed before or after that action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Revitalizing Run"] = new engine.RulesElement({
    name: "Revitalizing Run",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2168",
    source: "Dragon Magazine 382",
    categories: ["Revitalizing Run", "ID_FMP_CLASS_FEATURE_2168", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Fickle Favor"] = new engine.RulesElement({
    name: "Traveler's Fickle Favor",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2173",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Fickle Favor", "ID_FMP_CLASS_FEATURE_2173", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Gift of Action"] = new engine.RulesElement({
    name: "Traveler's Gift of Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2171",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Gift of Action", "ID_FMP_CLASS_FEATURE_2171", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Traveler's Gift of Action:Whenever you spend an action point to take an extra action, you can roll one attack roll or skill check required by that action twice and use either result. If that attack roll or skill check misses or fails, you must roll your next attack roll or skill check twice and use the lower result.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2174",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power", "ID_FMP_CLASS_FEATURE_2174", "20"],
    rules: function(model) {
      model.select('class feature', 1, "Traveler's Unpredictable Power", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_2174"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Abyssal Command)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Abyssal Command)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ABYSSAL_COMMAND)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Abyssal Command)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ABYSSAL_COMMAND)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10048"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Alluring Lights)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Alluring Lights)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ALLURING_LIGHTS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Alluring Lights)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ALLURING_LIGHTS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4793"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (An End to Tolerance)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (An End to Tolerance)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(AN_END_TO_TOLERANCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (An End to Tolerance)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(AN_END_TO_TOLERANCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9800"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Ancestral Possession)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Ancestral Possession)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ANCESTRAL_POSSESSION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Ancestral Possession)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ANCESTRAL_POSSESSION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5675"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Ancestral Weapon's Rage)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Ancestral Weapon's Rage)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ANCESTRAL_WEAPON'S_RAGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Ancestral Weapon's Rage)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ANCESTRAL_WEAPON'S_RAGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9612"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Angel Ascendant)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Angel Ascendant)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ANGEL_ASCENDANT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Angel Ascendant)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ANGEL_ASCENDANT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1591"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Animus Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Animus Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ANIMUS_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Animus Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ANIMUS_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12184"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Annihilating Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Annihilating Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ANNIHILATING_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Annihilating Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ANNIHILATING_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12450"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Anointed Army)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Anointed Army)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ANOINTED_ARMY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Anointed Army)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ANOINTED_ARMY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7898"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Anthem of Antagonism)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Anthem of Antagonism)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ANTHEM_OF_ANTAGONISM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Anthem of Antagonism)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ANTHEM_OF_ANTAGONISM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5722"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Appalling Transformation)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Appalling Transformation)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(APPALLING_TRANSFORMATION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Appalling Transformation)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(APPALLING_TRANSFORMATION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13415"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Arcane Overload)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Arcane Overload)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ARCANE_OVERLOAD)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Arcane Overload)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ARCANE_OVERLOAD)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10025"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Argent Flood)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Argent Flood)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ARGENT_FLOOD)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Argent Flood)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ARGENT_FLOOD)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11150"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Arm of Dissolution)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Arm of Dissolution)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ARM_OF_DISSOLUTION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Arm of Dissolution)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ARM_OF_DISSOLUTION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5606"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Armor of Force)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Armor of Force)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ARMOR_OF_FORCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Armor of Force)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ARMOR_OF_FORCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10231"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Army of the Emissary)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Army of the Emissary)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ARMY_OF_THE_EMISSARY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Army of the Emissary)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ARMY_OF_THE_EMISSARY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5728"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Aspect of Quicksilver Strides (Augment 0))"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Aspect of Quicksilver Strides (Augment 0))",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_QUICKSILVER_STRIDES_(AUGMENT_0))",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Aspect of Quicksilver Strides (Augment 0))", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_QUICKSILVER_STRIDES_(AUGMENT_0))", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_POWER_ASPECT_OF_QUICKSILVER_STRIDES_(AUGMENT_0)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Aspect of Quicksilver Strides (Augment 1))"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Aspect of Quicksilver Strides (Augment 1))",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_QUICKSILVER_STRIDES_(AUGMENT_1))",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Aspect of Quicksilver Strides (Augment 1))", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_QUICKSILVER_STRIDES_(AUGMENT_1))", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_POWER_ASPECT_OF_QUICKSILVER_STRIDES_(AUGMENT_1)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Aspect of Quicksilver Strides)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Aspect of Quicksilver Strides)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_QUICKSILVER_STRIDES)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Aspect of Quicksilver Strides)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_QUICKSILVER_STRIDES)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13110"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Aspect of the Blackstone Gaoler (Augment 0))"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Aspect of the Blackstone Gaoler (Augment 0))",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_THE_BLACKSTONE_GAOLER_(AUGMENT_0))",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Aspect of the Blackstone Gaoler (Augment 0))", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_THE_BLACKSTONE_GAOLER_(AUGMENT_0))", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_POWER_ASPECT_OF_THE_BLACKSTONE_GAOLER_(AUGMENT_0)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Aspect of the Blackstone Gaoler (Augment 2))"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Aspect of the Blackstone Gaoler (Augment 2))",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_THE_BLACKSTONE_GAOLER_(AUGMENT_2))",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Aspect of the Blackstone Gaoler (Augment 2))", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_THE_BLACKSTONE_GAOLER_(AUGMENT_2))", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_POWER_ASPECT_OF_THE_BLACKSTONE_GAOLER_(AUGMENT_2)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Aspect of the Blackstone Gaoler)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Aspect of the Blackstone Gaoler)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_THE_BLACKSTONE_GAOLER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Aspect of the Blackstone Gaoler)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_THE_BLACKSTONE_GAOLER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13107"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Aspect of the Infinite Storm (Augment 0))"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Aspect of the Infinite Storm (Augment 0))",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_THE_INFINITE_STORM_(AUGMENT_0))",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Aspect of the Infinite Storm (Augment 0))", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_THE_INFINITE_STORM_(AUGMENT_0))", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_POWER_ASPECT_OF_THE_INFINITE_STORM_(AUGMENT_0)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Aspect of the Infinite Storm (Augment 2))"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Aspect of the Infinite Storm (Augment 2))",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_THE_INFINITE_STORM_(AUGMENT_2))",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Aspect of the Infinite Storm (Augment 2))", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_THE_INFINITE_STORM_(AUGMENT_2))", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_POWER_ASPECT_OF_THE_INFINITE_STORM_(AUGMENT_2)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Aspect of the Infinite Storm)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Aspect of the Infinite Storm)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_THE_INFINITE_STORM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Aspect of the Infinite Storm)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_THE_INFINITE_STORM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13114"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Aspect of the Iron Guardian (Augment 0))"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Aspect of the Iron Guardian (Augment 0))",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_THE_IRON_GUARDIAN_(AUGMENT_0))",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Aspect of the Iron Guardian (Augment 0))", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_THE_IRON_GUARDIAN_(AUGMENT_0))", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_POWER_ASPECT_OF_THE_IRON_GUARDIAN_(AUGMENT_0)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Aspect of the Iron Guardian (Augment 1))"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Aspect of the Iron Guardian (Augment 1))",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_THE_IRON_GUARDIAN_(AUGMENT_1))",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Aspect of the Iron Guardian (Augment 1))", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_THE_IRON_GUARDIAN_(AUGMENT_1))", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_POWER_ASPECT_OF_THE_IRON_GUARDIAN_(AUGMENT_1)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Aspect of the Iron Guardian)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Aspect of the Iron Guardian)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_THE_IRON_GUARDIAN)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Aspect of the Iron Guardian)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASPECT_OF_THE_IRON_GUARDIAN)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11205"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Astral Terrain)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Astral Terrain)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASTRAL_TERRAIN)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Astral Terrain)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASTRAL_TERRAIN)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7902"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Astral Whirlwind)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Astral Whirlwind)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASTRAL_WHIRLWIND)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Astral Whirlwind)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ASTRAL_WHIRLWIND)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1637"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Avalanche Assault)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Avalanche Assault)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(AVALANCHE_ASSAULT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Avalanche Assault)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(AVALANCHE_ASSAULT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5494"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Avalanche Throw)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Avalanche Throw)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(AVALANCHE_THROW)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Avalanche Throw)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(AVALANCHE_THROW)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11264"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Avandra's Curse)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Avandra's Curse)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(AVANDRA'S_CURSE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Avandra's Curse)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(AVANDRA'S_CURSE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11717"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Avaunt Foe)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Avaunt Foe)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(AVAUNT_FOE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Avaunt Foe)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(AVAUNT_FOE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1855"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Awaken the Celestial Tiger)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Awaken the Celestial Tiger)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(AWAKEN_THE_CELESTIAL_TIGER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Awaken the Celestial Tiger)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(AWAKEN_THE_CELESTIAL_TIGER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13289"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Balefire Scourge)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Balefire Scourge)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BALEFIRE_SCOURGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Balefire Scourge)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BALEFIRE_SCOURGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4696"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Battle Pyres)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Battle Pyres)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BATTLE_PYRES)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Battle Pyres)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BATTLE_PYRES)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1584"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Beast-Punishing Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Beast-Punishing Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BEAST-PUNISHING_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Beast-Punishing Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BEAST-PUNISHING_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5990"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Beguiling Bolt)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Beguiling Bolt)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BEGUILING_BOLT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Beguiling Bolt)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BEGUILING_BOLT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5477"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Binding Arrows)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Binding Arrows)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BINDING_ARROWS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Binding Arrows)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BINDING_ARROWS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1824"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Biting Repositioning)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Biting Repositioning)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BITING_REPOSITIONING)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Biting Repositioning)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BITING_REPOSITIONING)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2494"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Black Obelisk of Doom)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Black Obelisk of Doom)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLACK_OBELISK_OF_DOOM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Black Obelisk of Doom)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLACK_OBELISK_OF_DOOM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8087"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Blackfire Wind)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Blackfire Wind)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLACKFIRE_WIND)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Blackfire Wind)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLACKFIRE_WIND)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2523"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Blade Dance)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Blade Dance)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLADE_DANCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Blade Dance)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLADE_DANCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4687"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Blade of the Zealot)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Blade of the Zealot)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLADE_OF_THE_ZEALOT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Blade of the Zealot)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLADE_OF_THE_ZEALOT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5365"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Bladed Fusillade)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Bladed Fusillade)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLADED_FUSILLADE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Bladed Fusillade)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLADED_FUSILLADE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4731"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Bleed Away)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Bleed Away)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLEED_AWAY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Bleed Away)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLEED_AWAY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4705"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Blessing of the Chalice)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Blessing of the Chalice)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLESSING_OF_THE_CHALICE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Blessing of the Chalice)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLESSING_OF_THE_CHALICE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8163"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Blight Locus)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Blight Locus)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLIGHT_LOCUS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Blight Locus)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLIGHT_LOCUS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7372"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Blinding Assailant)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Blinding Assailant)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLINDING_ASSAILANT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Blinding Assailant)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLINDING_ASSAILANT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10357"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Blinding Sun Technique)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Blinding Sun Technique)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLINDING_SUN_TECHNIQUE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Blinding Sun Technique)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLINDING_SUN_TECHNIQUE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7491"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Blizzard Blast)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Blizzard Blast)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLIZZARD_BLAST)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Blizzard Blast)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLIZZARD_BLAST)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11557"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Blizzard)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Blizzard)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLIZZARD)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Blizzard)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLIZZARD)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6816"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Blood Harvest)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Blood Harvest)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLOOD_HARVEST)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Blood Harvest)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLOOD_HARVEST)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4659"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Blood Justice)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Blood Justice)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLOOD_JUSTICE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Blood Justice)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLOOD_JUSTICE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4671"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Blood Oath Fulfilled)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Blood Oath Fulfilled)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLOOD_OATH_FULFILLED)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Blood Oath Fulfilled)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLOOD_OATH_FULFILLED)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6020"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Bloodbond Swarm)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Bloodbond Swarm)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLOODBOND_SWARM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Bloodbond Swarm)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLOODBOND_SWARM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9292"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Bloodfury Rampage)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Bloodfury Rampage)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLOODFURY_RAMPAGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Bloodfury Rampage)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLOODFURY_RAMPAGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10688"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Bloodied Greatness)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Bloodied Greatness)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLOODIED_GREATNESS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Bloodied Greatness)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLOODIED_GREATNESS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5475"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Bloodletting Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Bloodletting Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLOODLETTING_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Bloodletting Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLOODLETTING_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5243"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Bloody Despair)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Bloody Despair)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLOODY_DESPAIR)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Bloody Despair)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BLOODY_DESPAIR)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9547"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Bolt from Nowhere)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Bolt from Nowhere)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BOLT_FROM_NOWHERE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Bolt from Nowhere)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BOLT_FROM_NOWHERE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4718"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Bolt of Power)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Bolt of Power)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BOLT_OF_POWER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Bolt of Power)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BOLT_OF_POWER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5897"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Boltportal Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Boltportal Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BOLTPORTAL_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Boltportal Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BOLTPORTAL_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5644"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Break the Chains)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Break the Chains)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BREAK_THE_CHAINS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Break the Chains)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BREAK_THE_CHAINS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_3564"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Breath of Sephitherax)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Breath of Sephitherax)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BREATH_OF_SEPHITHERAX)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Breath of Sephitherax)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BREATH_OF_SEPHITHERAX)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11855"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Breath-Taking Slam)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Breath-Taking Slam)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BREATH-TAKING_SLAM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Breath-Taking Slam)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BREATH-TAKING_SLAM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6002"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Brilliant Swarm)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Brilliant Swarm)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BRILLIANT_SWARM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Brilliant Swarm)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BRILLIANT_SWARM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9713"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Brilliant Symphony)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Brilliant Symphony)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BRILLIANT_SYMPHONY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Brilliant Symphony)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BRILLIANT_SYMPHONY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9262"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Brutal Fury)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Brutal Fury)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BRUTAL_FURY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Brutal Fury)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BRUTAL_FURY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10582"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Burning Wrath Smite)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Burning Wrath Smite)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BURNING_WRATH_SMITE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Burning Wrath Smite)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BURNING_WRATH_SMITE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2570"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Bury the Dead)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Bury the Dead)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BURY_THE_DEAD)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Bury the Dead)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(BURY_THE_DEAD)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8172"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Caiphon's Hungry Mercy)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Caiphon's Hungry Mercy)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CAIPHON'S_HUNGRY_MERCY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Caiphon's Hungry Mercy)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CAIPHON'S_HUNGRY_MERCY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4254"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Call of Letherna)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Call of Letherna)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CALL_OF_LETHERNA)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Call of Letherna)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CALL_OF_LETHERNA)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10106"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Call of Light)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Call of Light)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CALL_OF_LIGHT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Call of Light)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CALL_OF_LIGHT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7572"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Call of the Forest)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Call of the Forest)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CALL_OF_THE_FOREST)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Call of the Forest)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CALL_OF_THE_FOREST)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11570"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Call to the Great Bear)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Call to the Great Bear)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CALL_TO_THE_GREAT_BEAR)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Call to the Great Bear)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CALL_TO_THE_GREAT_BEAR)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5428"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Callous Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Callous Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CALLOUS_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Callous Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CALLOUS_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4738"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Cascade of Fear)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Cascade of Fear)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CASCADE_OF_FEAR)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Cascade of Fear)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CASCADE_OF_FEAR)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8012"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Catastrophic Impact)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Catastrophic Impact)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CATASTROPHIC_IMPACT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Catastrophic Impact)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CATASTROPHIC_IMPACT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12444"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Celestial Seal)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Celestial Seal)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CELESTIAL_SEAL)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Celestial Seal)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CELESTIAL_SEAL)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5888"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Celestial Skirmish)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Celestial Skirmish)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CELESTIAL_SKIRMISH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Celestial Skirmish)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CELESTIAL_SKIRMISH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7715"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Challenge the Unjust)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Challenge the Unjust)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CHALLENGE_THE_UNJUST)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Challenge the Unjust)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CHALLENGE_THE_UNJUST)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1634"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Chaos Breach)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Chaos Breach)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CHAOS_BREACH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Chaos Breach)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CHAOS_BREACH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13007"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Cheap Shot)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Cheap Shot)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CHEAP_SHOT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Cheap Shot)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CHEAP_SHOT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10723"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Circle the Prey)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Circle the Prey)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CIRCLE_THE_PREY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Circle the Prey)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CIRCLE_THE_PREY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5486"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Citizen's Arrest)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Citizen's Arrest)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CITIZEN'S_ARREST)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Citizen's Arrest)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CITIZEN'S_ARREST)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12525"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Clinging Breath)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Clinging Breath)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CLINGING_BREATH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Clinging Breath)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CLINGING_BREATH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5489"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Clockwork Companion)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Clockwork Companion)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CLOCKWORK_COMPANION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Clockwork Companion)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CLOCKWORK_COMPANION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7563"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Closing Spell)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Closing Spell)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CLOSING_SPELL)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Closing Spell)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CLOSING_SPELL)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1615"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Cloud of Doom)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Cloud of Doom)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CLOUD_OF_DOOM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Cloud of Doom)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CLOUD_OF_DOOM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11516"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Cloud of Misfortune)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Cloud of Misfortune)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CLOUD_OF_MISFORTUNE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Cloud of Misfortune)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CLOUD_OF_MISFORTUNE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11301"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Cold Steel Hurricane)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Cold Steel Hurricane)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(COLD_STEEL_HURRICANE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Cold Steel Hurricane)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(COLD_STEEL_HURRICANE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1681"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Coldfire Pillar)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Coldfire Pillar)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(COLDFIRE_PILLAR)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Coldfire Pillar)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(COLDFIRE_PILLAR)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5197"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Combined Effort)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Combined Effort)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(COMBINED_EFFORT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Combined Effort)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(COMBINED_EFFORT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10317"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Confounding Teleport)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Confounding Teleport)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CONFOUNDING_TELEPORT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Confounding Teleport)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CONFOUNDING_TELEPORT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10830"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Control the Field)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Control the Field)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CONTROL_THE_FIELD)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Control the Field)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CONTROL_THE_FIELD)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1672"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Coordinated Devastation)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Coordinated Devastation)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(COORDINATED_DEVASTATION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Coordinated Devastation)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(COORDINATED_DEVASTATION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6185"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Corellon's Blade)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Corellon's Blade)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CORELLON'S_BLADE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Corellon's Blade)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CORELLON'S_BLADE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1622"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Corellon's Wrath)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Corellon's Wrath)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CORELLON'S_WRATH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Corellon's Wrath)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CORELLON'S_WRATH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8103"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Corrosive Torrent)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Corrosive Torrent)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CORROSIVE_TORRENT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Corrosive Torrent)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CORROSIVE_TORRENT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10055"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Covenant of Assassination)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Covenant of Assassination)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(COVENANT_OF_ASSASSINATION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Covenant of Assassination)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(COVENANT_OF_ASSASSINATION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12459"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Crag of Steel)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Crag of Steel)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CRAG_OF_STEEL)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Crag of Steel)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CRAG_OF_STEEL)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_3153"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Crescendo Sword)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Crescendo Sword)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CRESCENDO_SWORD)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Crescendo Sword)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CRESCENDO_SWORD)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1602"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Crimson Rebuttal)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Crimson Rebuttal)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CRIMSON_REBUTTAL)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Crimson Rebuttal)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CRIMSON_REBUTTAL)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10882"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Cruel Flourish)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Cruel Flourish)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CRUEL_FLOURISH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Cruel Flourish)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CRUEL_FLOURISH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10586"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Crusader's Vengeance)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Crusader's Vengeance)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CRUSADER'S_VENGEANCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Crusader's Vengeance)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CRUSADER'S_VENGEANCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9290"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Crush of the Serpent)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Crush of the Serpent)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CRUSH_OF_THE_SERPENT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Crush of the Serpent)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CRUSH_OF_THE_SERPENT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5422"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Crushing Fury)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Crushing Fury)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CRUSHING_FURY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Crushing Fury)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CRUSHING_FURY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10573"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Cunning Flurry)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Cunning Flurry)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CUNNING_FLURRY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Cunning Flurry)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CUNNING_FLURRY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1669"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Cursing Vengeance)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Cursing Vengeance)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CURSING_VENGEANCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Cursing Vengeance)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CURSING_VENGEANCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5958"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Cutting Assault)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Cutting Assault)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CUTTING_ASSAULT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Cutting Assault)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(CUTTING_ASSAULT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4735"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Daily)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Daily)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DAILY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Daily)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DAILY)", "Traveler's Unpredictable Power"],
    rules: function(model) {
      model.select('Power', 1, "Traveler's Unpredictable Power (Daily)", {
        filter: function(model, element) { return ((element.hasCategory(model['class'].id) || true /* NYI: Filter: $$MULTICLASS */) && element.hasCategory("daily") && element.hasCategory("19")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Dance of Blood)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Dance of Blood)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DANCE_OF_BLOOD)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Dance of Blood)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DANCE_OF_BLOOD)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6585"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Dance of Sunrise)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Dance of Sunrise)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DANCE_OF_SUNRISE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Dance of Sunrise)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DANCE_OF_SUNRISE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7709"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Darkblade)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Darkblade)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DARKBLADE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Darkblade)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DARKBLADE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1901"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Dawn Burst)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Dawn Burst)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DAWN_BURST)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Dawn Burst)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DAWN_BURST)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7587"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Dawning Light)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Dawning Light)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DAWNING_LIGHT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Dawning Light)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DAWNING_LIGHT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11453"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Deadeye Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Deadeye Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEADEYE_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Deadeye Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEADEYE_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6588"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Deadly Aim)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Deadly Aim)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEADLY_AIM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Deadly Aim)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEADLY_AIM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5993"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Deadly Duplication)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Deadly Duplication)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEADLY_DUPLICATION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Deadly Duplication)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEADLY_DUPLICATION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7560"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Deadly Ensnarement)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Deadly Ensnarement)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEADLY_ENSNAREMENT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Deadly Ensnarement)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEADLY_ENSNAREMENT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5785"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Deadly Repercussions)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Deadly Repercussions)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEADLY_REPERCUSSIONS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Deadly Repercussions)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEADLY_REPERCUSSIONS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10113"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Deadly Swarm)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Deadly Swarm)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEADLY_SWARM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Deadly Swarm)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEADLY_SWARM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10694"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Deadly Visions)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Deadly Visions)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEADLY_VISIONS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Deadly Visions)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEADLY_VISIONS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12286"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Death Dealer Assault)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Death Dealer Assault)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEATH_DEALER_ASSAULT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Death Dealer Assault)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEATH_DEALER_ASSAULT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4724"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Death in the Dark)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Death in the Dark)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEATH_IN_THE_DARK)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Death in the Dark)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEATH_IN_THE_DARK)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10691"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Death Locus)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Death Locus)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEATH_LOCUS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Death Locus)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEATH_LOCUS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10032"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Decisive Stratagem)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Decisive Stratagem)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DECISIVE_STRATAGEM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Decisive Stratagem)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DECISIVE_STRATAGEM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13451"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Deep Dagger Wound)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Deep Dagger Wound)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEEP_DAGGER_WOUND)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Deep Dagger Wound)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEEP_DAGGER_WOUND)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1651"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Demand Fealty)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Demand Fealty)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEMAND_FEALTY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Demand Fealty)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEMAND_FEALTY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11861"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Demonbane Flurry)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Demonbane Flurry)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEMONBANE_FLURRY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Demonbane Flurry)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEMONBANE_FLURRY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1861"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Demon-Fueled Vengeance)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Demon-Fueled Vengeance)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEMON-FUELED_VENGEANCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Demon-Fueled Vengeance)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEMON-FUELED_VENGEANCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6026"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Deny Defeat)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Deny Defeat)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DENY_DEFEAT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Deny Defeat)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DENY_DEFEAT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7972"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Destructive Salutation)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Destructive Salutation)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DESTRUCTIVE_SALUTATION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Destructive Salutation)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DESTRUCTIVE_SALUTATION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1624"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Devastating Smite)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Devastating Smite)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEVASTATING_SMITE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Devastating Smite)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DEVASTATING_SMITE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8153"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Diamond Blade of Victory)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Diamond Blade of Victory)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DIAMOND_BLADE_OF_VICTORY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Diamond Blade of Victory)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DIAMOND_BLADE_OF_VICTORY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1675"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Dimension Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Dimension Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DIMENSION_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Dimension Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DIMENSION_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11867"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Dimensional Cascade)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Dimensional Cascade)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DIMENSIONAL_CASCADE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Dimensional Cascade)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DIMENSIONAL_CASCADE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5658"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Diplomacy of Steel)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Diplomacy of Steel)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DIPLOMACY_OF_STEEL)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Diplomacy of Steel)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DIPLOMACY_OF_STEEL)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4752"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Disperse the Horde)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Disperse the Horde)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DISPERSE_THE_HORDE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Disperse the Horde)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DISPERSE_THE_HORDE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10720"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Dispersing Shot)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Dispersing Shot)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DISPERSING_SHOT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Dispersing Shot)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DISPERSING_SHOT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10835"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Disruptive Premonition)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Disruptive Premonition)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DISRUPTIVE_PREMONITION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Disruptive Premonition)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DISRUPTIVE_PREMONITION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7596"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Dissolve the Flesh)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Dissolve the Flesh)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DISSOLVE_THE_FLESH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Dissolve the Flesh)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DISSOLVE_THE_FLESH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8270"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Divine Aspect)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Divine Aspect)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DIVINE_ASPECT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Divine Aspect)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DIVINE_ASPECT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5362"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Doomcaller's Promise)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Doomcaller's Promise)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DOOMCALLER'S_PROMISE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Doomcaller's Promise)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DOOMCALLER'S_PROMISE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6970"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Draconic Avatar)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Draconic Avatar)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DRACONIC_AVATAR)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Draconic Avatar)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DRACONIC_AVATAR)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11260"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Dragon Storm)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Dragon Storm)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DRAGON_STORM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Dragon Storm)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DRAGON_STORM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10368"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Dragon Tempest)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Dragon Tempest)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DRAGON_TEMPEST)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Dragon Tempest)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DRAGON_TEMPEST)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10116"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Dragonbreath Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Dragonbreath Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DRAGONBREATH_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Dragonbreath Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DRAGONBREATH_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4668"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Dragonfear Overwhelming)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Dragonfear Overwhelming)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DRAGONFEAR_OVERWHELMING)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Dragonfear Overwhelming)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DRAGONFEAR_OVERWHELMING)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12579"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Dramatic Finish)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Dramatic Finish)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DRAMATIC_FINISH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Dramatic Finish)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DRAMATIC_FINISH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4721"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Driving Gore)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Driving Gore)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DRIVING_GORE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Driving Gore)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(DRIVING_GORE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5672"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Earthsurge)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Earthsurge)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(EARTHSURGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Earthsurge)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(EARTHSURGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1904"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Edict of Destruction)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Edict of Destruction)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(EDICT_OF_DESTRUCTION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Edict of Destruction)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(EDICT_OF_DESTRUCTION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8106"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Elaborate Assault)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Elaborate Assault)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ELABORATE_ASSAULT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Elaborate Assault)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ELABORATE_ASSAULT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9373"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Elder Flame)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Elder Flame)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ELDER_FLAME)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Elder Flame)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ELDER_FLAME)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9796"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Eldritch Allies)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Eldritch Allies)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ELDRITCH_ALLIES)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Eldritch Allies)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ELDRITCH_ALLIES)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13460"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Elemental Chaos Smite)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Elemental Chaos Smite)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ELEMENTAL_CHAOS_SMITE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Elemental Chaos Smite)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ELEMENTAL_CHAOS_SMITE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4699"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Elemental Fury)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Elemental Fury)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ELEMENTAL_FURY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Elemental Fury)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ELEMENTAL_FURY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1907"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Elemental Scourge)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Elemental Scourge)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ELEMENTAL_SCOURGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Elemental Scourge)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ELEMENTAL_SCOURGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5655"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Elemental-Heart Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Elemental-Heart Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ELEMENTAL-HEART_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Elemental-Heart Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ELEMENTAL-HEART_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4749"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Emotion Leech)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Emotion Leech)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(EMOTION_LEECH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Emotion Leech)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(EMOTION_LEECH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13022"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (End of Luck)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (End of Luck)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(END_OF_LUCK)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (End of Luck)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(END_OF_LUCK)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5731"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (End to Strife)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (End to Strife)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(END_TO_STRIFE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (End to Strife)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(END_TO_STRIFE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7982"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Endbringer)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Endbringer)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ENDBRINGER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Endbringer)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ENDBRINGER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5200"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Energy Disruption)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Energy Disruption)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ENERGY_DISRUPTION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Energy Disruption)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ENERGY_DISRUPTION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6005"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Enforced Peace)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Enforced Peace)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ENFORCED_PEACE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Enforced Peace)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ENFORCED_PEACE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12447"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Eruption of Steel)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Eruption of Steel)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ERUPTION_OF_STEEL)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Eruption of Steel)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ERUPTION_OF_STEEL)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4681"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Escalating Barrage)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Escalating Barrage)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ESCALATING_BARRAGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Escalating Barrage)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ESCALATING_BARRAGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4708"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Every Trick in the Book)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Every Trick in the Book)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(EVERY_TRICK_IN_THE_BOOK)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Every Trick in the Book)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(EVERY_TRICK_IN_THE_BOOK)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10857"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Every Wrong Righted)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Every Wrong Righted)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(EVERY_WRONG_RIGHTED)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Every Wrong Righted)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(EVERY_WRONG_RIGHTED)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7991"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Excoriating Strands)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Excoriating Strands)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(EXCORIATING_STRANDS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Excoriating Strands)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(EXCORIATING_STRANDS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9398"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Exemplar's Talon)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Exemplar's Talon)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(EXEMPLAR'S_TALON)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Exemplar's Talon)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(EXEMPLAR'S_TALON)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4765"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Familiar's Command)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Familiar's Command)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FAMILIAR'S_COMMAND)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Familiar's Command)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FAMILIAR'S_COMMAND)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7422"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Fazing Fangs)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Fazing Fangs)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FAZING_FANGS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Fazing Fangs)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FAZING_FANGS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9710"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Fear and Loathing)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Fear and Loathing)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FEAR_AND_LOATHING)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Fear and Loathing)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FEAR_AND_LOATHING)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10467"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Fearsome Gaze)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Fearsome Gaze)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FEARSOME_GAZE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Fearsome Gaze)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FEARSOME_GAZE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5999"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Feywild Tempest)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Feywild Tempest)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FEYWILD_TEMPEST)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Feywild Tempest)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FEYWILD_TEMPEST)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5603"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Fiery Companions)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Fiery Companions)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FIERY_COMPANIONS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Fiery Companions)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FIERY_COMPANIONS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8090"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Final Blow)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Final Blow)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FINAL_BLOW)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Final Blow)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FINAL_BLOW)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1654"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Final Confrontation)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Final Confrontation)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FINAL_CONFRONTATION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Final Confrontation)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FINAL_CONFRONTATION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4863"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Final Ending)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Final Ending)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FINAL_ENDING)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Final Ending)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FINAL_ENDING)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9494"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Fire and Thunder)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Fire and Thunder)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FIRE_AND_THUNDER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Fire and Thunder)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FIRE_AND_THUNDER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5794"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Fire with Fire)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Fire with Fire)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FIRE_WITH_FIRE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Fire with Fire)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FIRE_WITH_FIRE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5984"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Firesoul Conflagration)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Firesoul Conflagration)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FIRESOUL_CONFLAGRATION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Firesoul Conflagration)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FIRESOUL_CONFLAGRATION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1843"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Firesoul Salvation)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Firesoul Salvation)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FIRESOUL_SALVATION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Firesoul Salvation)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FIRESOUL_SALVATION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10873"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Flailing Gauntlet)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Flailing Gauntlet)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FLAILING_GAUNTLET)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Flailing Gauntlet)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FLAILING_GAUNTLET)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7575"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Flame Blade)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Flame Blade)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FLAME_BLADE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Flame Blade)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FLAME_BLADE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10870"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Flaw Seeking Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Flaw Seeking Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FLAW_SEEKING_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Flaw Seeking Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FLAW_SEEKING_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5782"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Flickering Shadow)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Flickering Shadow)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FLICKERING_SHADOW)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Flickering Shadow)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FLICKERING_SHADOW)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12575"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Flurry of Spirit Talons)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Flurry of Spirit Talons)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FLURRY_OF_SPIRIT_TALONS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Flurry of Spirit Talons)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FLURRY_OF_SPIRIT_TALONS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9803"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Flurry of Teleportation)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Flurry of Teleportation)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FLURRY_OF_TELEPORTATION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Flurry of Teleportation)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FLURRY_OF_TELEPORTATION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7599"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Follow Through)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Follow Through)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FOLLOW_THROUGH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Follow Through)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FOLLOW_THROUGH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11006"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (For Cormyr!)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (For Cormyr!)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FOR_CORMYR!)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (For Cormyr!)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FOR_CORMYR!)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1910"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Form of Storm's Wrath)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Form of Storm's Wrath)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_STORM'S_WRATH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Form of Storm's Wrath)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_STORM'S_WRATH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5180"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Form of the All-Spirit)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Form of the All-Spirit)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_ALL-SPIRIT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Form of the All-Spirit)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_ALL-SPIRIT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12462"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Form of the First Hunter)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Form of the First Hunter)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_FIRST_HUNTER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Form of the First Hunter)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_FIRST_HUNTER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9943"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Form of the Forge Spirit)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Form of the Forge Spirit)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_FORGE_SPIRIT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Form of the Forge Spirit)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_FORGE_SPIRIT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11097"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Form of the Icewrought Sentinel)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Form of the Icewrought Sentinel)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_ICEWROUGHT_SENTINEL)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Form of the Icewrought Sentinel)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_ICEWROUGHT_SENTINEL)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9947"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Form of the Leaping Stag)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Form of the Leaping Stag)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_LEAPING_STAG)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Form of the Leaping Stag)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_LEAPING_STAG)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5177"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Form of the Life-Giver)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Form of the Life-Giver)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_LIFE-GIVER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Form of the Life-Giver)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_LIFE-GIVER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9939"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Form of the Living Breach)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Form of the Living Breach)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_LIVING_BREACH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Form of the Living Breach)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_LIVING_BREACH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11094"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Form of the Northern Whirlwind)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Form of the Northern Whirlwind)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_NORTHERN_WHIRLWIND)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Form of the Northern Whirlwind)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_NORTHERN_WHIRLWIND)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9931"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Form of the Primal Beast)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Form of the Primal Beast)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_PRIMAL_BEAST)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Form of the Primal Beast)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_PRIMAL_BEAST)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5174"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Form of the Primeval Bulette)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Form of the Primeval Bulette)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_PRIMEVAL_BULETTE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Form of the Primeval Bulette)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_PRIMEVAL_BULETTE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9935"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Form of the Radiant Couatl)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Form of the Radiant Couatl)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_RADIANT_COUATL)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Form of the Radiant Couatl)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_RADIANT_COUATL)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9950"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Form of the Stag Knight)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Form of the Stag Knight)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_STAG_KNIGHT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Form of the Stag Knight)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_STAG_KNIGHT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9978"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Form of the Tribal Champion)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Form of the Tribal Champion)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_TRIBAL_CHAMPION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Form of the Tribal Champion)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_TRIBAL_CHAMPION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9954"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Form of the Umber Hulk)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Form of the Umber Hulk)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_UMBER_HULK)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Form of the Umber Hulk)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_UMBER_HULK)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10021"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Form of the Verdant Lord)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Form of the Verdant Lord)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_VERDANT_LORD)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Form of the Verdant Lord)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FORM_OF_THE_VERDANT_LORD)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5183"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Four Winds Tempest)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Four Winds Tempest)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FOUR_WINDS_TEMPEST)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Four Winds Tempest)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FOUR_WINDS_TEMPEST)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13281"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Frozen Heart)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Frozen Heart)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FROZEN_HEART)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Frozen Heart)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FROZEN_HEART)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7440"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Furious Immolation)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Furious Immolation)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FURIOUS_IMMOLATION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Furious Immolation)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FURIOUS_IMMOLATION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12558"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Fury of the Forge)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Fury of the Forge)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FURY_OF_THE_FORGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Fury of the Forge)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(FURY_OF_THE_FORGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11456"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Gambler's Flourish)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Gambler's Flourish)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GAMBLER'S_FLOURISH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Gambler's Flourish)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GAMBLER'S_FLOURISH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7728"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Gate to Nowhere)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Gate to Nowhere)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GATE_TO_NOWHERE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Gate to Nowhere)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GATE_TO_NOWHERE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12490"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Ghost Panther Spiral)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Ghost Panther Spiral)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GHOST_PANTHER_SPIRAL)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Ghost Panther Spiral)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GHOST_PANTHER_SPIRAL)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5425"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Giant's Sweep)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Giant's Sweep)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GIANT'S_SWEEP)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Giant's Sweep)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GIANT'S_SWEEP)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5669"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Giantslayer's Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Giantslayer's Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GIANTSLAYER'S_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Giantslayer's Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GIANTSLAYER'S_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4693"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Glaring Wound)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Glaring Wound)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GLARING_WOUND)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Glaring Wound)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GLARING_WOUND)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4241"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Grab and Smash)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Grab and Smash)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GRAB_AND_SMASH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Grab and Smash)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GRAB_AND_SMASH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11012"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Grasp of the Obsidian Tomb)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Grasp of the Obsidian Tomb)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GRASP_OF_THE_OBSIDIAN_TOMB)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Grasp of the Obsidian Tomb)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GRASP_OF_THE_OBSIDIAN_TOMB)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9484"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Great Winged Samara)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Great Winged Samara)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GREAT_WINGED_SAMARA)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Great Winged Samara)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GREAT_WINGED_SAMARA)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9729"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Ground the Foe)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Ground the Foe)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GROUND_THE_FOE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Ground the Foe)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GROUND_THE_FOE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8109"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Guided Aggression)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Guided Aggression)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GUIDED_AGGRESSION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Guided Aggression)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(GUIDED_AGGRESSION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11202"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Halfling's Taunt)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Halfling's Taunt)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HALFLING'S_TAUNT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Halfling's Taunt)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HALFLING'S_TAUNT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5483"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Hammer of Fate)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Hammer of Fate)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HAMMER_OF_FATE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Hammer of Fate)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HAMMER_OF_FATE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1587"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Hammer of the Final Pronouncement)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Hammer of the Final Pronouncement)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HAMMER_OF_THE_FINAL_PRONOUNCEMENT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Hammer of the Final Pronouncement)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HAMMER_OF_THE_FINAL_PRONOUNCEMENT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5356"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Hateful Knives)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Hateful Knives)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HATEFUL_KNIVES)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Hateful Knives)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HATEFUL_KNIVES)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10885"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Heartstrike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Heartstrike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HEARTSTRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Heartstrike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HEARTSTRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9383"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Heaven's Edge)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Heaven's Edge)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HEAVEN'S_EDGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Heaven's Edge)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HEAVEN'S_EDGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7722"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Hellfire Gaze)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Hellfire Gaze)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HELLFIRE_GAZE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Hellfire Gaze)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HELLFIRE_GAZE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10879"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Hellforged Blade)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Hellforged Blade)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HELLFORGED_BLADE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Hellforged Blade)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HELLFORGED_BLADE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10567"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Herald the End)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Herald the End)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HERALD_THE_END)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Herald the End)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HERALD_THE_END)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2488"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Heritage of Blades)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Heritage of Blades)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HERITAGE_OF_BLADES)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Heritage of Blades)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HERITAGE_OF_BLADES)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1856"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Hex of Abandonment)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Hex of Abandonment)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HEX_OF_ABANDONMENT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Hex of Abandonment)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HEX_OF_ABANDONMENT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5970"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Hidden Reserves)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Hidden Reserves)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HIDDEN_RESERVES)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Hidden Reserves)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HIDDEN_RESERVES)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13412"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Holy Barrage)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Holy Barrage)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HOLY_BARRAGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Holy Barrage)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HOLY_BARRAGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6023"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Hounding Shield of Radiance)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Hounding Shield of Radiance)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HOUNDING_SHIELD_OF_RADIANCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Hounding Shield of Radiance)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HOUNDING_SHIELD_OF_RADIANCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11459"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Hurl the Spark)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Hurl the Spark)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HURL_THE_SPARK)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Hurl the Spark)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HURL_THE_SPARK)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11000"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Hurricane's Fury)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Hurricane's Fury)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HURRICANE'S_FURY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Hurricane's Fury)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(HURRICANE'S_FURY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9793"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Ideal Champion)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Ideal Champion)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(IDEAL_CHAMPION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Ideal Champion)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(IDEAL_CHAMPION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13405"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Illusory Host)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Illusory Host)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ILLUSORY_HOST)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Illusory Host)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ILLUSORY_HOST)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11632"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Imperator's Judgment)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Imperator's Judgment)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(IMPERATOR'S_JUDGMENT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Imperator's Judgment)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(IMPERATOR'S_JUDGMENT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7712"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Imperious Presence)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Imperious Presence)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(IMPERIOUS_PRESENCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Imperious Presence)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(IMPERIOUS_PRESENCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5490"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Inauspicious Vulnerability)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Inauspicious Vulnerability)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(INAUSPICIOUS_VULNERABILITY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Inauspicious Vulnerability)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(INAUSPICIOUS_VULNERABILITY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4182"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Indomitable Assault)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Indomitable Assault)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(INDOMITABLE_ASSAULT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Indomitable Assault)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(INDOMITABLE_ASSAULT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6598"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Indomitable Strength)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Indomitable Strength)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(INDOMITABLE_STRENGTH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Indomitable Strength)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(INDOMITABLE_STRENGTH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1599"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Inevitability of the Grave)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Inevitability of the Grave)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(INEVITABILITY_OF_THE_GRAVE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Inevitability of the Grave)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(INEVITABILITY_OF_THE_GRAVE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5725"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Inevitable Winter)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Inevitable Winter)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(INEVITABLE_WINTER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Inevitable Winter)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(INEVITABLE_WINTER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9809"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Infinite Reflections)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Infinite Reflections)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(INFINITE_REFLECTIONS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Infinite Reflections)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(INFINITE_REFLECTIONS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12215"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Insidious Attack)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Insidious Attack)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(INSIDIOUS_ATTACK)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Insidious Attack)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(INSIDIOUS_ATTACK)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10876"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Inspiring Blade)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Inspiring Blade)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(INSPIRING_BLADE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Inspiring Blade)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(INSPIRING_BLADE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11003"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Iron Wall of Dis)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Iron Wall of Dis)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(IRON_WALL_OF_DIS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Iron Wall of Dis)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(IRON_WALL_OF_DIS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10864"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Irresistible Ardor)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Irresistible Ardor)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(IRRESISTIBLE_ARDOR)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Irresistible Ardor)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(IRRESISTIBLE_ARDOR)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7706"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Judgment of the True King)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Judgment of the True King)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(JUDGMENT_OF_THE_TRUE_KING)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Judgment of the True King)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(JUDGMENT_OF_THE_TRUE_KING)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12486"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Just Not Their Day)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Just Not Their Day)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(JUST_NOT_THEIR_DAY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Just Not Their Day)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(JUST_NOT_THEIR_DAY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11838"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Just Punishment)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Just Punishment)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(JUST_PUNISHMENT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Just Punishment)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(JUST_PUNISHMENT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9285"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Keelhaul)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Keelhaul)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(KEELHAUL)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Keelhaul)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(KEELHAUL)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1827"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Kelemvor's Sword)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Kelemvor's Sword)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(KELEMVOR'S_SWORD)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Kelemvor's Sword)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(KELEMVOR'S_SWORD)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1898"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Keystone Collapse)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Keystone Collapse)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(KEYSTONE_COLLAPSE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Keystone Collapse)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(KEYSTONE_COLLAPSE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2548"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Killing Thrust)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Killing Thrust)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(KILLING_THRUST)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Killing Thrust)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(KILLING_THRUST)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5996"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Kneel to the Prince)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Kneel to the Prince)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(KNEEL_TO_THE_PRINCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Kneel to the Prince)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(KNEEL_TO_THE_PRINCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11016"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Labyrinth of Foes)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Labyrinth of Foes)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LABYRINTH_OF_FOES)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Labyrinth of Foes)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LABYRINTH_OF_FOES)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11756"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Lance of Dawn)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Lance of Dawn)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LANCE_OF_DAWN)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Lance of Dawn)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LANCE_OF_DAWN)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_3551"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Lasting Breath)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Lasting Breath)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LASTING_BREATH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Lasting Breath)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LASTING_BREATH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6823"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Leaves of Steel)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Leaves of Steel)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LEAVES_OF_STEEL)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Leaves of Steel)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LEAVES_OF_STEEL)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10860"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Lethal Ancestor Rage)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Lethal Ancestor Rage)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LETHAL_ANCESTOR_RAGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Lethal Ancestor Rage)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LETHAL_ANCESTOR_RAGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9619"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Librus Phantasma)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Librus Phantasma)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LIBRUS_PHANTASMA)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Librus Phantasma)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LIBRUS_PHANTASMA)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10080"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Life-Giving Smite)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Life-Giving Smite)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LIFE-GIVING_SMITE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Life-Giving Smite)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LIFE-GIVING_SMITE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1631"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Lightning Infusion)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Lightning Infusion)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LIGHTNING_INFUSION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Lightning Infusion)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LIGHTNING_INFUSION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7578"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Line-Breaker Assault)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Line-Breaker Assault)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LINE-BREAKER_ASSAULT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Line-Breaker Assault)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LINE-BREAKER_ASSAULT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4655"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Lion of Battle)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Lion of Battle)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LION_OF_BATTLE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Lion of Battle)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LION_OF_BATTLE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2198"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Living Gate)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Living Gate)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LIVING_GATE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Living Gate)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LIVING_GATE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10235"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Long Fall into Darkness)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Long Fall into Darkness)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LONG_FALL_INTO_DARKNESS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Long Fall into Darkness)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LONG_FALL_INTO_DARKNESS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1645"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Loosen the Chain)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Loosen the Chain)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LOOSEN_THE_CHAIN)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Loosen the Chain)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LOOSEN_THE_CHAIN)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13408"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Lost in the Labyrinth City)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Lost in the Labyrinth City)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LOST_IN_THE_LABYRINTH_CITY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Lost in the Labyrinth City)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LOST_IN_THE_LABYRINTH_CITY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12784"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Lost in Time)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Lost in Time)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LOST_IN_TIME)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Lost in Time)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LOST_IN_TIME)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11351"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Lugos's Hunt)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Lugos's Hunt)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LUGOS'S_HUNT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Lugos's Hunt)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(LUGOS'S_HUNT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10392"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Maelstrom of Chaos)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Maelstrom of Chaos)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MAELSTROM_OF_CHAOS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Maelstrom of Chaos)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MAELSTROM_OF_CHAOS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1755"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Manifest the Mighty Hero)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Manifest the Mighty Hero)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MANIFEST_THE_MIGHTY_HERO)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Manifest the Mighty Hero)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MANIFEST_THE_MIGHTY_HERO)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9267"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Marked Savagery)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Marked Savagery)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MARKED_SAVAGERY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Marked Savagery)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MARKED_SAVAGERY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1612"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Martyr's Cry)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Martyr's Cry)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MARTYR'S_CRY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Martyr's Cry)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MARTYR'S_CRY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7975"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Master's Surge)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Master's Surge)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MASTER'S_SURGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Master's Surge)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MASTER'S_SURGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7432"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Message of War)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Message of War)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MESSAGE_OF_WAR)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Message of War)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MESSAGE_OF_WAR)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7979"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Mind-Bending Blades)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Mind-Bending Blades)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MIND-BENDING_BLADES)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Mind-Bending Blades)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MIND-BENDING_BLADES)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4684"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Misty Breath)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Misty Breath)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MISTY_BREATH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Misty Breath)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MISTY_BREATH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10361"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Moment of Triumph)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Moment of Triumph)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MOMENT_OF_TRIUMPH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Moment of Triumph)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MOMENT_OF_TRIUMPH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10569"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Moment of Truth)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Moment of Truth)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MOMENT_OF_TRUTH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Moment of Truth)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MOMENT_OF_TRUTH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7994"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Moon Shot)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Moon Shot)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MOON_SHOT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Moon Shot)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MOON_SHOT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12293"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Moon Wrath)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Moon Wrath)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MOON_WRATH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Moon Wrath)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MOON_WRATH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10726"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Moonfire)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Moonfire)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MOONFIRE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Moonfire)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MOONFIRE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_3554"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Moonflower Inspiration)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Moonflower Inspiration)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MOONFLOWER_INSPIRATION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Moonflower Inspiration)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MOONFLOWER_INSPIRATION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1964"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Morale-Shaking Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Morale-Shaking Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MORALE-SHAKING_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Morale-Shaking Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MORALE-SHAKING_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4746"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Mountain Stance Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Mountain Stance Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MOUNTAIN_STANCE_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Mountain Stance Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MOUNTAIN_STANCE_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5480"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Murderous Rage)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Murderous Rage)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MURDEROUS_RAGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Murderous Rage)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MURDEROUS_RAGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5473"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Mythal Spark)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Mythal Spark)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MYTHAL_SPARK)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Mythal Spark)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(MYTHAL_SPARK)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1913"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Named Arrow)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Named Arrow)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(NAMED_ARROW)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Named Arrow)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(NAMED_ARROW)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4711"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Nature's Grave)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Nature's Grave)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(NATURE'S_GRAVE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Nature's Grave)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(NATURE'S_GRAVE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5083"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Nature's Purge)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Nature's Purge)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(NATURE'S_PURGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Nature's Purge)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(NATURE'S_PURGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7569"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Nature's Purging Fire)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Nature's Purging Fire)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(NATURE'S_PURGING_FIRE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Nature's Purging Fire)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(NATURE'S_PURGING_FIRE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11054"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Nature's Rage)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Nature's Rage)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(NATURE'S_RAGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Nature's Rage)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(NATURE'S_RAGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5500"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Neck-Bite Pounce)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Neck-Bite Pounce)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(NECK-BITE_POUNCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Neck-Bite Pounce)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(NECK-BITE_POUNCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4702"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (New Victim)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (New Victim)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(NEW_VICTIM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (New Victim)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(NEW_VICTIM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2460"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Nightmare Stalker)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Nightmare Stalker)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(NIGHTMARE_STALKER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Nightmare Stalker)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(NIGHTMARE_STALKER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7376"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Nimbus of Falsehood)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Nimbus of Falsehood)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(NIMBUS_OF_FALSEHOOD)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Nimbus of Falsehood)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(NIMBUS_OF_FALSEHOOD)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5718"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Oath Bond)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Oath Bond)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(OATH_BOND)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Oath Bond)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(OATH_BOND)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5359"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Oblivion Sphere)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Oblivion Sphere)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(OBLIVION_SPHERE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Oblivion Sphere)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(OBLIVION_SPHERE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13395"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Offensive Spin Slash)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Offensive Spin Slash)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(OFFENSIVE_SPIN_SLASH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Offensive Spin Slash)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(OFFENSIVE_SPIN_SLASH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9264"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Omnipresent Assault)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Omnipresent Assault)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(OMNIPRESENT_ASSAULT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Omnipresent Assault)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(OMNIPRESENT_ASSAULT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5788"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (One Thousand Cuts)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (One Thousand Cuts)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ONE_THOUSAND_CUTS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (One Thousand Cuts)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ONE_THOUSAND_CUTS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11024"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Overwhelming Force)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Overwhelming Force)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(OVERWHELMING_FORCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Overwhelming Force)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(OVERWHELMING_FORCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13117"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Paddlewheel)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Paddlewheel)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PADDLEWHEEL)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Paddlewheel)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PADDLEWHEEL)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12203"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Painful Puncture)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Painful Puncture)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PAINFUL_PUNCTURE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Painful Puncture)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PAINFUL_PUNCTURE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2205"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Panther Pounce)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Panther Pounce)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PANTHER_POUNCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Panther Pounce)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PANTHER_POUNCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4715"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Paragon Path)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Paragon Path)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Paragon Path)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power"],
    rules: function(model) {
      model.select('class feature', 1, "Traveler's Unpredictable Power (Paragon Path)", {
        filter: function(model, element) { return element.hasCategory("Traveler's Unpredictable Power (Paragon Path)"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Past-Life Vanguard)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Past-Life Vanguard)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PAST-LIFE_VANGUARD)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Past-Life Vanguard)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PAST-LIFE_VANGUARD)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5470"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Path of Destruction)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Path of Destruction)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PATH_OF_DESTRUCTION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Path of Destruction)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PATH_OF_DESTRUCTION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7609"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Path of the Storm)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Path of the Storm)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PATH_OF_THE_STORM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Path of the Storm)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PATH_OF_THE_STORM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4743"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Perfect Incandescence)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Perfect Incandescence)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PERFECT_INCANDESCENCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Perfect Incandescence)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PERFECT_INCANDESCENCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13016"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Perfect Knowledge)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Perfect Knowledge)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PERFECT_KNOWLEDGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Perfect Knowledge)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PERFECT_KNOWLEDGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12494"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Perfect Prison)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Perfect Prison)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PERFECT_PRISON)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Perfect Prison)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PERFECT_PRISON)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10314"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Persistent Spheres)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Persistent Spheres)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PERSISTENT_SPHERES)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Persistent Spheres)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PERSISTENT_SPHERES)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7556"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Phantasmist Stalker)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Phantasmist Stalker)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PHANTASMIST_STALKER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Phantasmist Stalker)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PHANTASMIST_STALKER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7602"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Polearm Sweep)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Polearm Sweep)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(POLEARM_SWEEP)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Polearm Sweep)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(POLEARM_SWEEP)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4674"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Primal Eagle)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Primal Eagle)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PRIMAL_EAGLE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Primal Eagle)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PRIMAL_EAGLE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5092"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Primordial Rift)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Primordial Rift)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PRIMORDIAL_RIFT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Primordial Rift)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PRIMORDIAL_RIFT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5900"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Prismatic Bolt)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Prismatic Bolt)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PRISMATIC_BOLT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Prismatic Bolt)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PRISMATIC_BOLT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5329"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Protective Essence)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Protective Essence)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PROTECTIVE_ESSENCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Protective Essence)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PROTECTIVE_ESSENCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5894"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Punish the Assailant)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Punish the Assailant)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PUNISH_THE_ASSAILANT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Punish the Assailant)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PUNISH_THE_ASSAILANT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7581"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Punishing Flame)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Punishing Flame)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PUNISHING_FLAME)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Punishing Flame)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PUNISHING_FLAME)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8169"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Purging Wave)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Purging Wave)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PURGING_WAVE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Purging Wave)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PURGING_WAVE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12187"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Purifying Radiance)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Purifying Radiance)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PURIFYING_RADIANCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Purifying Radiance)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PURIFYING_RADIANCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5652"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Quake Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Quake Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(QUAKE_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Quake Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(QUAKE_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8156"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Quarry's Bane)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Quarry's Bane)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(QUARRY'S_BANE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Quarry's Bane)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(QUARRY'S_BANE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1684"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Quell the Hateful)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Quell the Hateful)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(QUELL_THE_HATEFUL)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Quell the Hateful)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(QUELL_THE_HATEFUL)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7725"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Quickblade Form)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Quickblade Form)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(QUICKBLADE_FORM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Quickblade Form)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(QUICKBLADE_FORM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2502"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Quicksilver Lunge)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Quicksilver Lunge)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(QUICKSILVER_LUNGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Quicksilver Lunge)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(QUICKSILVER_LUNGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4665"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Radiant Brilliance)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Radiant Brilliance)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RADIANT_BRILLIANCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Radiant Brilliance)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RADIANT_BRILLIANCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1596"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Radiant Crusade)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Radiant Crusade)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RADIANT_CRUSADE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Radiant Crusade)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RADIANT_CRUSADE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13454"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Rampaging Bear)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Rampaging Bear)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RAMPAGING_BEAR)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Rampaging Bear)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RAMPAGING_BEAR)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4980"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Rampart of Strength)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Rampart of Strength)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RAMPART_OF_STRENGTH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Rampart of Strength)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RAMPART_OF_STRENGTH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8112"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Random Spell)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Random Spell)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RANDOM_SPELL)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Random Spell)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RANDOM_SPELL)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5829"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Reap What You Sow)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Reap What You Sow)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(REAP_WHAT_YOU_SOW)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Reap What You Sow)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(REAP_WHAT_YOU_SOW)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7985"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Reaper's Rage)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Reaper's Rage)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(REAPER'S_RAGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Reaper's Rage)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(REAPER'S_RAGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9622"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Reaper's Repast)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Reaper's Repast)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(REAPER'S_REPAST)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Reaper's Repast)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(REAPER'S_REPAST)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6967"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Redirected Death)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Redirected Death)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(REDIRECTED_DEATH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Redirected Death)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(REDIRECTED_DEATH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1657"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Remain Vigilant)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Remain Vigilant)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(REMAIN_VIGILANT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Remain Vigilant)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(REMAIN_VIGILANT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13242"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Renewal Smite)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Renewal Smite)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RENEWAL_SMITE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Renewal Smite)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RENEWAL_SMITE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4759"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Resourceful Trick)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Resourceful Trick)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RESOURCEFUL_TRICK)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Resourceful Trick)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RESOURCEFUL_TRICK)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9270"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Reverberating Shield)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Reverberating Shield)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(REVERBERATING_SHIELD)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Reverberating Shield)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(REVERBERATING_SHIELD)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2585"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Riddle of Invulnerability)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Riddle of Invulnerability)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RIDDLE_OF_INVULNERABILITY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Riddle of Invulnerability)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RIDDLE_OF_INVULNERABILITY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13293"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Robed in Shadow)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Robed in Shadow)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ROBED_IN_SHADOW)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Robed in Shadow)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ROBED_IN_SHADOW)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1837"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Rule of Order)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Rule of Order)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RULE_OF_ORDER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Rule of Order)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RULE_OF_ORDER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1640"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Ruthless Outburst)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Ruthless Outburst)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RUTHLESS_OUTBURST)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Ruthless Outburst)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(RUTHLESS_OUTBURST)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4613"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Saboteur's Ward)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Saboteur's Ward)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SABOTEUR'S_WARD)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Saboteur's Ward)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SABOTEUR'S_WARD)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5832"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Sanctuary Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Sanctuary Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SANCTUARY_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Sanctuary Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SANCTUARY_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7584"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Scale-Shattering Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Scale-Shattering Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SCALE-SHATTERING_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Scale-Shattering Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SCALE-SHATTERING_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5987"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Scattering Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Scattering Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SCATTERING_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Scattering Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SCATTERING_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10012"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Seal the Threshold)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Seal the Threshold)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SEAL_THE_THRESHOLD)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Seal the Threshold)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SEAL_THE_THRESHOLD)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8267"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Seconded Smite)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Seconded Smite)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SECONDED_SMITE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Seconded Smite)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SECONDED_SMITE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4771"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Seldarine Wrath)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Seldarine Wrath)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SELDARINE_WRATH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Seldarine Wrath)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SELDARINE_WRATH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7988"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Sentence of Banishment)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Sentence of Banishment)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SENTENCE_OF_BANISHMENT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Sentence of Banishment)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SENTENCE_OF_BANISHMENT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12441"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Set a Riddle)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Set a Riddle)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SET_A_RIDDLE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Set a Riddle)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SET_A_RIDDLE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11864"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Shadow Curse)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Shadow Curse)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SHADOW_CURSE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Shadow Curse)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SHADOW_CURSE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9491"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Shadow Turncoat)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Shadow Turncoat)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SHADOW_TURNCOAT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Shadow Turncoat)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SHADOW_TURNCOAT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5661"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Shadowed Psyche)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Shadowed Psyche)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SHADOWED_PSYCHE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Shadowed Psyche)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SHADOWED_PSYCHE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1849"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Shard Storm)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Shard Storm)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SHARD_STORM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Shard Storm)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SHARD_STORM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11058"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Shattering Blow)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Shattering Blow)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SHATTERING_BLOW)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Shattering Blow)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SHATTERING_BLOW)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10015"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Shocking Skewer)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Shocking Skewer)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SHOCKING_SKEWER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Shocking Skewer)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SHOCKING_SKEWER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4678"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Shooting Star)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Shooting Star)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SHOOTING_STAR)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Shooting Star)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SHOOTING_STAR)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5973"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Shyran Cataclysm)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Shyran Cataclysm)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SHYRAN_CATACLYSM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Shyran Cataclysm)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SHYRAN_CATACLYSM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_3568"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Sigil of Enmity)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Sigil of Enmity)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SIGIL_OF_ENMITY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Sigil of Enmity)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SIGIL_OF_ENMITY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5791"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Sign of Penance)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Sign of Penance)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SIGN_OF_PENANCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Sign of Penance)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SIGN_OF_PENANCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8006"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Silver Brand)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Silver Brand)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SILVER_BRAND)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Silver Brand)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SILVER_BRAND)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7566"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Silver Rain)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Silver Rain)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SILVER_RAIN)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Silver Rain)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SILVER_RAIN)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8093"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Silver Tongue, Silver Blade)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Silver Tongue, Silver Blade)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SILVER_TONGUE,_SILVER_BLADE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Silver Tongue, Silver Blade)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SILVER_TONGUE,_SILVER_BLADE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12288"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Simbul's Tempest)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Simbul's Tempest)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SIMBUL'S_TEMPEST)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Simbul's Tempest)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SIMBUL'S_TEMPEST)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_3558"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Slasher's Mark)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Slasher's Mark)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SLASHER'S_MARK)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Slasher's Mark)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SLASHER'S_MARK)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1678"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Slashing Frenzy)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Slashing Frenzy)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SLASHING_FRENZY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Slashing Frenzy)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SLASHING_FRENZY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10729"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Slayer's Ascendancy)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Slayer's Ascendancy)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SLAYER'S_ASCENDANCY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Slayer's Ascendancy)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SLAYER'S_ASCENDANCY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7718"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Smite of Devil's Luck)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Smite of Devil's Luck)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SMITE_OF_DEVIL'S_LUCK)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Smite of Devil's Luck)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SMITE_OF_DEVIL'S_LUCK)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4762"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Snatching Assault)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Snatching Assault)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SNATCHING_ASSAULT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Snatching Assault)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SNATCHING_ASSAULT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7616"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Song of the High Court)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Song of the High Court)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SONG_OF_THE_HIGH_COURT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Song of the High Court)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SONG_OF_THE_HIGH_COURT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5025"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Song of Thunder)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Song of Thunder)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SONG_OF_THUNDER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Song of Thunder)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SONG_OF_THUNDER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5028"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Soothing Song)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Soothing Song)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SOOTHING_SONG)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Soothing Song)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SOOTHING_SONG)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5734"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Sorcerous Metamorphosis)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Sorcerous Metamorphosis)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SORCEROUS_METAMORPHOSIS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Sorcerous Metamorphosis)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SORCEROUS_METAMORPHOSIS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5321"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Soul Brand)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Soul Brand)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SOUL_BRAND)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Soul Brand)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SOUL_BRAND)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5666"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Soul of the Dwarf-Father)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Soul of the Dwarf-Father)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SOUL_OF_THE_DWARF-FATHER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Soul of the Dwarf-Father)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SOUL_OF_THE_DWARF-FATHER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12212"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Soul Venom)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Soul Venom)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SOUL_VENOM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Soul Venom)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SOUL_VENOM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9497"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Soulfire Mantle)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Soulfire Mantle)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SOULFIRE_MANTLE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Soulfire Mantle)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SOULFIRE_MANTLE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10270"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Soultheft)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Soultheft)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SOULTHEFT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Soultheft)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SOULTHEFT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1699"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Spectral Garrote Attack)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Spectral Garrote Attack)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPECTRAL_GARROTE_ATTACK)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Spectral Garrote Attack)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPECTRAL_GARROTE_ATTACK)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7613"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Spectral Garrote)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Spectral Garrote)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPECTRAL_GARROTE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Spectral Garrote)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPECTRAL_GARROTE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7612"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Spell Magnet Attack)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Spell Magnet Attack)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPELL_MAGNET_ATTACK)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Spell Magnet Attack)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPELL_MAGNET_ATTACK)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7553"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Spell Magnet)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Spell Magnet)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPELL_MAGNET)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Spell Magnet)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPELL_MAGNET)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7552"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Spiral of Fey Death)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Spiral of Fey Death)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPIRAL_OF_FEY_DEATH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Spiral of Fey Death)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPIRAL_OF_FEY_DEATH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4768"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Spirit Cyclone)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Spirit Cyclone)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPIRIT_CYCLONE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Spirit Cyclone)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPIRIT_CYCLONE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12181"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Spirit Detonation)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Spirit Detonation)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPIRIT_DETONATION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Spirit Detonation)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPIRIT_DETONATION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12178"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Spirit of the Beast)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Spirit of the Beast)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPIRIT_OF_THE_BEAST)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Spirit of the Beast)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPIRIT_OF_THE_BEAST)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5089"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Spirit Storm)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Spirit Storm)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPIRIT_STORM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Spirit Storm)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPIRIT_STORM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5431"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Spiritspell Assault)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Spiritspell Assault)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPIRITSPELL_ASSAULT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Spiritspell Assault)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPIRITSPELL_ASSAULT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10018"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Spontaneous Combustion)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Spontaneous Combustion)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPONTANEOUS_COMBUSTION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Spontaneous Combustion)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPONTANEOUS_COMBUSTION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13398"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Spring's Resurgence)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Spring's Resurgence)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPRING'S_RESURGENCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Spring's Resurgence)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPRING'S_RESURGENCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9812"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Spymaster's Edge)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Spymaster's Edge)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPYMASTER'S_EDGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Spymaster's Edge)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SPYMASTER'S_EDGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2507"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Stay Mobile)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Stay Mobile)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STAY_MOBILE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Stay Mobile)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STAY_MOBILE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10579"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Stonechannel Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Stonechannel Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STONECHANNEL_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Stonechannel Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STONECHANNEL_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4756"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Stone-Shatter Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Stone-Shatter Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STONE-SHATTER_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Stone-Shatter Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STONE-SHATTER_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13276"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Storm Child)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Storm Child)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STORM_CHILD)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Storm Child)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STORM_CHILD)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9725"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Storm Dance Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Storm Dance Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STORM_DANCE_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Storm Dance Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STORM_DANCE_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10463"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Storm Dragon Rage)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Storm Dragon Rage)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STORM_DRAGON_RAGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Storm Dragon Rage)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STORM_DRAGON_RAGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9615"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Storm of Five Spirits)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Storm of Five Spirits)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STORM_OF_FIVE_SPIRITS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Storm of Five Spirits)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STORM_OF_FIVE_SPIRITS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9550"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Storm of Raining Blades)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Storm of Raining Blades)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STORM_OF_RAINING_BLADES)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Storm of Raining Blades)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STORM_OF_RAINING_BLADES)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13285"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Storm of the Ancestors)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Storm of the Ancestors)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STORM_OF_THE_ANCESTORS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Storm of the Ancestors)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STORM_OF_THE_ANCESTORS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11829"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Storm of Victory)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Storm of Victory)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STORM_OF_VICTORY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Storm of Victory)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STORM_OF_VICTORY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1840"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Straw Soldiers)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Straw Soldiers)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STRAW_SOLDIERS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Straw Soldiers)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STRAW_SOLDIERS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_3228"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Streaking Mercury)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Streaking Mercury)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STREAKING_MERCURY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Streaking Mercury)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STREAKING_MERCURY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11858"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Striding Barrage)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Striding Barrage)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STRIDING_BARRAGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Striding Barrage)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STRIDING_BARRAGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11519"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Strike of Foul Fate)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Strike of Foul Fate)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STRIKE_OF_FOUL_FATE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Strike of Foul Fate)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(STRIKE_OF_FOUL_FATE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11009"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Subconscious Horror)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Subconscious Horror)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUBCONSCIOUS_HORROR)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Subconscious Horror)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUBCONSCIOUS_HORROR)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11153"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Subjugation of Steel)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Subjugation of Steel)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUBJUGATION_OF_STEEL)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Subjugation of Steel)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUBJUGATION_OF_STEEL)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10576"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Sudden Conversion)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Sudden Conversion)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUDDEN_CONVERSION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Sudden Conversion)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUDDEN_CONVERSION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9281"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Summon Bonded Protector)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Summon Bonded Protector)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUMMON_BONDED_PROTECTOR)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Summon Bonded Protector)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUMMON_BONDED_PROTECTOR)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5826"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Summon Far Realm Abomination)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Summon Far Realm Abomination)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUMMON_FAR_REALM_ABOMINATION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Summon Far Realm Abomination)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUMMON_FAR_REALM_ABOMINATION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13392"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Summon Primal Slayer)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Summon Primal Slayer)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUMMON_PRIMAL_SLAYER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Summon Primal Slayer)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUMMON_PRIMAL_SLAYER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9719"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Summon Rimefire Brute)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Summon Rimefire Brute)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUMMON_RIMEFIRE_BRUTE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Summon Rimefire Brute)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUMMON_RIMEFIRE_BRUTE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5835"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Sunburst Bulwark)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Sunburst Bulwark)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUNBURST_BULWARK)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Sunburst Bulwark)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUNBURST_BULWARK)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5202"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Sune's Kiss)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Sune's Kiss)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUNE'S_KISS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Sune's Kiss)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUNE'S_KISS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_3548"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Superior Tactics)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Superior Tactics)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUPERIOR_TACTICS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Superior Tactics)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SUPERIOR_TACTICS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1666"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Swords of the Marilith)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Swords of the Marilith)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SWORDS_OF_THE_MARILITH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Swords of the Marilith)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(SWORDS_OF_THE_MARILITH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5324"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Take the Keep)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Take the Keep)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TAKE_THE_KEEP)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Take the Keep)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TAKE_THE_KEEP)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8159"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Taunting Press)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Taunting Press)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TAUNTING_PRESS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Taunting Press)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TAUNTING_PRESS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4180"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Terrifying Journey)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Terrifying Journey)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TERRIFYING_JOURNEY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Terrifying Journey)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TERRIFYING_JOURNEY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5823"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (The Burning Dance)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (The Burning Dance)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(THE_BURNING_DANCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (The Burning Dance)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(THE_BURNING_DANCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9806"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (The Tenth Seal)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (The Tenth Seal)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(THE_TENTH_SEAL)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (The Tenth Seal)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(THE_TENTH_SEAL)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8080"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (The Word Spoken)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (The Word Spoken)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(THE_WORD_SPOKEN)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (The Word Spoken)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(THE_WORD_SPOKEN)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8084"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Third Ward of the Living Gate)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Third Ward of the Living Gate)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(THIRD_WARD_OF_THE_LIVING_GATE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Third Ward of the Living Gate)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(THIRD_WARD_OF_THE_LIVING_GATE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5086"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Thought Interloper)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Thought Interloper)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(THOUGHT_INTERLOPER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Thought Interloper)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(THOUGHT_INTERLOPER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13019"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Thrall of Turath)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Thrall of Turath)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(THRALL_OF_TURATH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Thrall of Turath)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(THRALL_OF_TURATH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5497"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Threading the Eye)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Threading the Eye)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(THREADING_THE_EYE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Threading the Eye)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(THREADING_THE_EYE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13236"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Three Shifting Winds)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Three Shifting Winds)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(THREE_SHIFTING_WINDS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Three Shifting Winds)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(THREE_SHIFTING_WINDS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9722"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Thunderous Oration)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Thunderous Oration)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(THUNDEROUS_ORATION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Thunderous Oration)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(THUNDEROUS_ORATION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8009"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Tide of Battle)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Tide of Battle)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TIDE_OF_BATTLE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Tide of Battle)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TIDE_OF_BATTLE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4983"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (To Hell with You)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (To Hell with You)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TO_HELL_WITH_YOU)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (To Hell with You)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TO_HELL_WITH_YOU)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10867"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Transfixing Spear)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Transfixing Spear)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TRANSFIXING_SPEAR)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Transfixing Spear)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TRANSFIXING_SPEAR)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10716"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Triumphant Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Triumphant Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TRIUMPHANT_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Triumphant Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TRIUMPHANT_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10589"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (True Dream Form)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (True Dream Form)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TRUE_DREAM_FORM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (True Dream Form)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TRUE_DREAM_FORM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11348"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Tumultuous Shadowflow)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Tumultuous Shadowflow)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TUMULTUOUS_SHADOWFLOW)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Tumultuous Shadowflow)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TUMULTUOUS_SHADOWFLOW)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11628"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Twinclaw Berserker Rage)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Twinclaw Berserker Rage)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TWINCLAW_BERSERKER_RAGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Twinclaw Berserker Rage)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TWINCLAW_BERSERKER_RAGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9628"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Twin-Soul Strike)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Twin-Soul Strike)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TWIN-SOUL_STRIKE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Twin-Soul Strike)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(TWIN-SOUL_STRIKE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4690"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Ultimatum of the Third Order)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Ultimatum of the Third Order)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ULTIMATUM_OF_THE_THIRD_ORDER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Ultimatum of the Third Order)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(ULTIMATUM_OF_THE_THIRD_ORDER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5961"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Unequaled Might)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Unequaled Might)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(UNEQUALED_MIGHT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Unequaled Might)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(UNEQUALED_MIGHT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9379"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Unleash the Inferno)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Unleash the Inferno)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(UNLEASH_THE_INFERNO)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Unleash the Inferno)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(UNLEASH_THE_INFERNO)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5967"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Unleash the Power Within)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Unleash the Power Within)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(UNLEASH_THE_POWER_WITHIN)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Unleash the Power Within)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(UNLEASH_THE_POWER_WITHIN)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13013"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Unleashed Vigor)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Unleashed Vigor)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(UNLEASHED_VIGOR)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Unleashed Vigor)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(UNLEASHED_VIGOR)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_3156"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Unruly Cyclone)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Unruly Cyclone)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(UNRULY_CYCLONE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Unruly Cyclone)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(UNRULY_CYCLONE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7593"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Unseen Ambush)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Unseen Ambush)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(UNSEEN_AMBUSH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Unseen Ambush)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(UNSEEN_AMBUSH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13297"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Unseen Entanglement)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Unseen Entanglement)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(UNSEEN_ENTANGLEMENT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Unseen Entanglement)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(UNSEEN_ENTANGLEMENT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5797"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Unstable Nexus)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Unstable Nexus)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(UNSTABLE_NEXUS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Unstable Nexus)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(UNSTABLE_NEXUS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13121"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Utterance of Domination)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Utterance of Domination)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(UTTERANCE_OF_DOMINATION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Utterance of Domination)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(UTTERANCE_OF_DOMINATION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7605"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Vanishing Legion)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Vanishing Legion)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VANISHING_LEGION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Vanishing Legion)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VANISHING_LEGION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5838"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Veil of the Dragon)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Veil of the Dragon)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VEIL_OF_THE_DRAGON)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Veil of the Dragon)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VEIL_OF_THE_DRAGON)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5327"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Vengeance Shroud)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Vengeance Shroud)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VENGEANCE_SHROUD)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Vengeance Shroud)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VENGEANCE_SHROUD)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8275"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Vengeance's End)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Vengeance's End)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VENGEANCE'S_END)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Vengeance's End)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VENGEANCE'S_END)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11450"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Vengeful Ghost)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Vengeful Ghost)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VENGEFUL_GHOST)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Vengeful Ghost)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VENGEFUL_GHOST)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7494"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Venomous Sting)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Venomous Sting)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VENOMOUS_STING)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Venomous Sting)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VENOMOUS_STING)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4727"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Vestige of Karmath)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Vestige of Karmath)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VESTIGE_OF_KARMATH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Vestige of Karmath)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VESTIGE_OF_KARMATH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6883"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Vestige of Kulnoghrim)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Vestige of Kulnoghrim)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VESTIGE_OF_KULNOGHRIM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Vestige of Kulnoghrim)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VESTIGE_OF_KULNOGHRIM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11311"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Vestige of the Ascendant Commander)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Vestige of the Ascendant Commander)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VESTIGE_OF_THE_ASCENDANT_COMMANDER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Vestige of the Ascendant Commander)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VESTIGE_OF_THE_ASCENDANT_COMMANDER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11314"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Vestige of the Sea Tyrant)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Vestige of the Sea Tyrant)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VESTIGE_OF_THE_SEA_TYRANT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Vestige of the Sea Tyrant)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VESTIGE_OF_THE_SEA_TYRANT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6895"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Vicious Guardian)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Vicious Guardian)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VICIOUS_GUARDIAN)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Vicious Guardian)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VICIOUS_GUARDIAN)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13441"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Vicious Parry)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Vicious Parry)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VICIOUS_PARRY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Vicious Parry)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VICIOUS_PARRY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10833"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Virtuous Wrath)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Virtuous Wrath)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VIRTUOUS_WRATH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Virtuous Wrath)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VIRTUOUS_WRATH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8166"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Visions of Death)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Visions of Death)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VISIONS_OF_DEATH)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Visions of Death)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VISIONS_OF_DEATH)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12522"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Visions of Victory)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Visions of Victory)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VISIONS_OF_VICTORY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Visions of Victory)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VISIONS_OF_VICTORY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5031"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Vital Rend)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Vital Rend)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VITAL_REND)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Vital Rend)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VITAL_REND)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2580"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Voice of the Seven)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Voice of the Seven)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VOICE_OF_THE_SEVEN)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Voice of the Seven)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VOICE_OF_THE_SEVEN)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5022"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Voidsoul Infliction)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Voidsoul Infliction)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VOIDSOUL_INFLICTION)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Voidsoul Infliction)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VOIDSOUL_INFLICTION)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10052"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Volcanic Rage)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Volcanic Rage)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VOLCANIC_RAGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Volcanic Rage)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(VOLCANIC_RAGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9625"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Walking Sentinel)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Walking Sentinel)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WALKING_SENTINEL)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Walking Sentinel)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WALKING_SENTINEL)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_12561"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Ward Unleashed)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Ward Unleashed)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WARD_UNLEASHED)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Ward Unleashed)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WARD_UNLEASHED)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7590"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Warding Thunder)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Warding Thunder)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WARDING_THUNDER)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Warding Thunder)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WARDING_THUNDER)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5206"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Warpath Rage)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Warpath Rage)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WARPATH_RAGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Warpath Rage)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WARPATH_RAGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13457"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Warping Landscape)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Warping Landscape)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WARPING_LANDSCAPE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Warping Landscape)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WARPING_LANDSCAPE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13010"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Weaponsoul Dance)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Weaponsoul Dance)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WEAPONSOUL_DANCE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Weaponsoul Dance)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WEAPONSOUL_DANCE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1605"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Whirling Dragon)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Whirling Dragon)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WHIRLING_DRAGON)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Whirling Dragon)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WHIRLING_DRAGON)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10365"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Whisper of Doom)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Whisper of Doom)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WHISPER_OF_DOOM)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Whisper of Doom)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WHISPER_OF_DOOM)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8002"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Whispers of the Fey)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Whispers of the Fey)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WHISPERS_OF_THE_FEY)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Whispers of the Fey)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WHISPERS_OF_THE_FEY)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1659"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (White Raven's Gambit)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (White Raven's Gambit)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WHITE_RAVEN'S_GAMBIT)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (White Raven's Gambit)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WHITE_RAVEN'S_GAMBIT)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11020"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Wildrunner's Rage)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Wildrunner's Rage)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WILDRUNNER'S_RAGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Wildrunner's Rage)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WILDRUNNER'S_RAGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4986"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Windsoul Whirlwind)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Windsoul Whirlwind)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WINDSOUL_WHIRLWIND)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Windsoul Whirlwind)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WINDSOUL_WHIRLWIND)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1846"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Word of Anathema)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Word of Anathema)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WORD_OF_ANATHEMA)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Word of Anathema)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WORD_OF_ANATHEMA)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8015"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (World's End Rage)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (World's End Rage)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WORLD'S_END_RAGE)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (World's End Rage)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WORLD'S_END_RAGE)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9631"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Wraithform Blast)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Wraithform Blast)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WRAITHFORM_BLAST)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Wraithform Blast)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WRAITHFORM_BLAST)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1967"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Unpredictable Power (Wrath of the Clouds)"] = new engine.RulesElement({
    name: "Traveler's Unpredictable Power (Wrath of the Clouds)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WRATH_OF_THE_CLOUDS)",
    source: "Dragon Magazine 382",
    categories: ["Traveler's Unpredictable Power (Wrath of the Clouds)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(WRATH_OF_THE_CLOUDS)", "ID_INTERNAL_CLASS_FEATURE_TRAVELER'S_UNPREDICTABLE_POWER_(PARAGON_PATH)", "Traveler's Unpredictable Power (Paragon Path)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5979"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
