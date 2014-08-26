define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Abiding Reaper Charisma"] = new engine.RulesElement({
    name: "Abiding Reaper Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ABIDING_REAPER_CHARISMA",
    source: "Dragon Magazine 372",
    categories: ["Abiding Reaper Charisma", "ID_INTERNAL_CLASS_FEATURE_ABIDING_REAPER_CHARISMA", "Abiding Reaper", "Ability Choice"],
    rules: function(model) {
      model.statadd("Chosen Ability", "Charisma");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Abiding Reaper Constitution"] = new engine.RulesElement({
    name: "Abiding Reaper Constitution",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ABIDING_REAPER_CONSTITUTION",
    source: "Dragon Magazine 372",
    categories: ["Abiding Reaper Constitution", "ID_INTERNAL_CLASS_FEATURE_ABIDING_REAPER_CONSTITUTION", "Abiding Reaper", "Ability Choice"],
    rules: function(model) {
      model.statadd("Chosen Ability", "Constitution");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Abiding Reaper Dexterity"] = new engine.RulesElement({
    name: "Abiding Reaper Dexterity",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ABIDING_REAPER_DEXTERITY",
    source: "Dragon Magazine 372",
    categories: ["Abiding Reaper Dexterity", "ID_INTERNAL_CLASS_FEATURE_ABIDING_REAPER_DEXTERITY", "Abiding Reaper", "Ability Choice"],
    rules: function(model) {
      model.statadd("Chosen Ability", "Dexterity");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Abiding Reaper Intelligence"] = new engine.RulesElement({
    name: "Abiding Reaper Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ABIDING_REAPER_INTELLIGENCE",
    source: "Dragon Magazine 372",
    categories: ["Abiding Reaper Intelligence", "ID_INTERNAL_CLASS_FEATURE_ABIDING_REAPER_INTELLIGENCE", "Abiding Reaper", "Ability Choice"],
    rules: function(model) {
      model.statadd("Chosen Ability", "Intelligence");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Abiding Reaper Strength"] = new engine.RulesElement({
    name: "Abiding Reaper Strength",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ABIDING_REAPER_STRENGTH",
    source: "Dragon Magazine 372",
    categories: ["Abiding Reaper Strength", "ID_INTERNAL_CLASS_FEATURE_ABIDING_REAPER_STRENGTH", "Abiding Reaper", "Ability Choice"],
    rules: function(model) {
      model.statadd("Chosen Ability", "Strength");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Abiding Reaper Wisdom"] = new engine.RulesElement({
    name: "Abiding Reaper Wisdom",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ABIDING_REAPER_WISDOM",
    source: "Dragon Magazine 372",
    categories: ["Abiding Reaper Wisdom", "ID_INTERNAL_CLASS_FEATURE_ABIDING_REAPER_WISDOM", "Abiding Reaper", "Ability Choice"],
    rules: function(model) {
      model.statadd("Chosen Ability", "Wisdom");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Astral Critical"] = new engine.RulesElement({
    name: "Astral Critical",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1333",
    source: "Dragon Magazine 372",
    categories: ["Astral Critical", "ID_FMP_CLASS_FEATURE_1333", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Blood Calling"] = new engine.RulesElement({
    name: "Blood Calling",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1484",
    source: "Dragon Magazine 372",
    categories: ["Blood Calling", "ID_FMP_CLASS_FEATURE_1484", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Brimstone Step"] = new engine.RulesElement({
    name: "Brimstone Step",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1337",
    source: "Dragon Magazine 372",
    categories: ["Brimstone Step", "ID_FMP_CLASS_FEATURE_1337", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Chosen Foe"] = new engine.RulesElement({
    name: "Chosen Foe",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1323",
    source: "Dragon Magazine 372",
    categories: ["Chosen Foe", "ID_FMP_CLASS_FEATURE_1323", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Cycle of Life"] = new engine.RulesElement({
    name: "Cycle of Life",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1490",
    source: "Dragon Magazine 372",
    categories: ["Cycle of Life", "ID_FMP_CLASS_FEATURE_1490", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Cyclone's Master"] = new engine.RulesElement({
    name: "Cyclone's Master",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1343",
    source: "Dragon Magazine 372",
    categories: ["Cyclone's Master", "ID_FMP_CLASS_FEATURE_1343", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Deathly Action"] = new engine.RulesElement({
    name: "Deathly Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1483",
    source: "Dragon Magazine 372",
    categories: ["Deathly Action", "ID_FMP_CLASS_FEATURE_1483", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Deathly Action:When you spend an action point to make an attack, that attack ignores all resistances and insubstantial and shuts down the target's regeneration (if any) until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Death's Companions"] = new engine.RulesElement({
    name: "Death's Companions",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1491",
    source: "Dragon Magazine 372",
    categories: ["Death's Companions", "ID_FMP_CLASS_FEATURE_1491", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fearmonger"] = new engine.RulesElement({
    name: "Fearmonger",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1487",
    source: "Dragon Magazine 372",
    categories: ["Fearmonger", "ID_FMP_CLASS_FEATURE_1487", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Frozen in Ice"] = new engine.RulesElement({
    name: "Frozen in Ice",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1346",
    source: "Dragon Magazine 372",
    categories: ["Frozen in Ice", "ID_FMP_CLASS_FEATURE_1346", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Hardened Spirit"] = new engine.RulesElement({
    name: "Hardened Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1485",
    source: "Dragon Magazine 372",
    categories: ["Hardened Spirit", "ID_FMP_CLASS_FEATURE_1485", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Hellfire Master"] = new engine.RulesElement({
    name: "Hellfire Master",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1336",
    source: "Dragon Magazine 372",
    categories: ["Hellfire Master", "ID_FMP_CLASS_FEATURE_1336", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Infernal Form"] = new engine.RulesElement({
    name: "Infernal Form",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1335",
    source: "Dragon Magazine 372",
    categories: ["Infernal Form", "ID_FMP_CLASS_FEATURE_1335", "21"],
    rules: function(model) {
      model.statadd("Charisma", 2);
      model.grant(model.elements.id["ID_INTERNAL_VISION_DARKVISION"]);
      model.statadd("Infernal Form Resist", 20);
      model.statadd("Infernal Form Resist", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("resist:fire", function() { return model.stat("Infernal Form Resist"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Lingering Cold"] = new engine.RulesElement({
    name: "Lingering Cold",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1344",
    source: "Dragon Magazine 372",
    categories: ["Lingering Cold", "ID_FMP_CLASS_FEATURE_1344", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Never Falter"] = new engine.RulesElement({
    name: "Never Falter",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1325",
    source: "Dragon Magazine 372",
    categories: ["Never Falter", "ID_FMP_CLASS_FEATURE_1325", "16"],
    rules: function(model) {
      model.statadd("Will Defense", 2);
      model.statadd("Saving Throws", function() { /* against charm and fear effects */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Portal Mastery"] = new engine.RulesElement({
    name: "Portal Mastery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1329",
    source: "Dragon Magazine 372",
    categories: ["Portal Mastery", "ID_FMP_CLASS_FEATURE_1329", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Quickened Corpus"] = new engine.RulesElement({
    name: "Quickened Corpus",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1489",
    source: "Dragon Magazine 372",
    categories: ["Quickened Corpus", "ID_FMP_CLASS_FEATURE_1489", "21"],
    rules: function(model) {
      model.statadd("Constitution", 2);
      model.statadd("Hit Points", function() { return model.stat("Constitution modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rattling Action"] = new engine.RulesElement({
    name: "Rattling Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1486",
    source: "Dragon Magazine 372",
    categories: ["Rattling Action", "ID_FMP_CLASS_FEATURE_1486", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Rattling Action:Whenever you spend an action point to make an extra attack, the attack power you use is considered to have the Rattling keyword.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Return from the Shadowfell"] = new engine.RulesElement({
    name: "Return from the Shadowfell",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1327",
    source: "Dragon Magazine 372",
    categories: ["Return from the Shadowfell", "ID_FMP_CLASS_FEATURE_1327", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Shape Reality"] = new engine.RulesElement({
    name: "Shape Reality",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1334",
    source: "Dragon Magazine 372",
    categories: ["Shape Reality", "ID_FMP_CLASS_FEATURE_1334", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Stand in Two Worlds"] = new engine.RulesElement({
    name: "Stand in Two Worlds",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1326",
    source: "Dragon Magazine 372",
    categories: ["Stand in Two Worlds", "ID_FMP_CLASS_FEATURE_1326", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Stormborn"] = new engine.RulesElement({
    name: "Stormborn",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1341",
    source: "Dragon Magazine 372",
    categories: ["Stormborn", "ID_FMP_CLASS_FEATURE_1341", "21"],
    rules: function(model) {
      model.statadd("Constitution", 2);
      model.statadd("Stormborn Resist", 15);
      model.statadd("Stormborn Resist", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("resist:lightning", function() { return model.stat("Stormborn Resist"); }, "resist");
      model.statadd("resist:thunder", function() { return model.stat("Stormborn Resist"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Strike Them Down"] = new engine.RulesElement({
    name: "Strike Them Down",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1324",
    source: "Dragon Magazine 372",
    categories: ["Strike Them Down", "ID_FMP_CLASS_FEATURE_1324", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Strike Them Down:When you spend an action point to take an extra action, each enemy adjacent to you grants combat advantage to you and all your allies until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Thrall in Death"] = new engine.RulesElement({
    name: "Thrall in Death",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1328",
    source: "Dragon Magazine 372",
    categories: ["Thrall in Death", "ID_FMP_CLASS_FEATURE_1328", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Thrive on Fear"] = new engine.RulesElement({
    name: "Thrive on Fear",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1488",
    source: "Dragon Magazine 372",
    categories: ["Thrive on Fear", "ID_FMP_CLASS_FEATURE_1488", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Thunder and Lightning"] = new engine.RulesElement({
    name: "Thunder and Lightning",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1342",
    source: "Dragon Magazine 372",
    categories: ["Thunder and Lightning", "ID_FMP_CLASS_FEATURE_1342", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Traveler's Tricks"] = new engine.RulesElement({
    name: "Traveler's Tricks",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1330",
    source: "Dragon Magazine 372",
    categories: ["Traveler's Tricks", "ID_FMP_CLASS_FEATURE_1330", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Ultimate Adaptation"] = new engine.RulesElement({
    name: "Ultimate Adaptation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1332",
    source: "Dragon Magazine 372",
    categories: ["Ultimate Adaptation", "ID_FMP_CLASS_FEATURE_1332", "21"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unfettered Passage"] = new engine.RulesElement({
    name: "Unfettered Passage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1331",
    source: "Dragon Magazine 372",
    categories: ["Unfettered Passage", "ID_FMP_CLASS_FEATURE_1331", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Winter's Bite"] = new engine.RulesElement({
    name: "Winter's Bite",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1345",
    source: "Dragon Magazine 372",
    categories: ["Winter's Bite", "ID_FMP_CLASS_FEATURE_1345", "24"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
