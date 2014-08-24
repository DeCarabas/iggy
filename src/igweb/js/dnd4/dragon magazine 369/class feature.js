(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Ancestral Allies"] = new RulesElement({
    name: "Ancestral Allies",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1100",
    source: "Dragon Magazine 369",
    categories: ["Ancestral Allies", "ID_FMP_CLASS_FEATURE_1100", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Beastly Action"] = new RulesElement({
    name: "Beastly Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1094",
    source: "Dragon Magazine 369",
    categories: ["Beastly Action", "ID_FMP_CLASS_FEATURE_1094", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Beastly Action:Immediately after you spend an action point to take an extra action, you can charge as a free action");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bloodied Outburst"] = new RulesElement({
    name: "Bloodied Outburst",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1095",
    source: "Dragon Magazine 369",
    categories: ["Bloodied Outburst", "ID_FMP_CLASS_FEATURE_1095", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Counseled Action"] = new RulesElement({
    name: "Counseled Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1101",
    source: "Dragon Magazine 369",
    categories: ["Counseled Action", "ID_FMP_CLASS_FEATURE_1101", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Counseled Action:When you spend an action point to take an extra action, each ally that can see and hear you can reroll all failed skill checks until the end of your next turn. The ally must keep the second result.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Countering Thesis"] = new RulesElement({
    name: "Countering Thesis",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1118",
    source: "Dragon Magazine 369",
    categories: ["Countering Thesis", "ID_FMP_CLASS_FEATURE_1118", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Draconic Anathema"] = new RulesElement({
    name: "Draconic Anathema",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1104",
    source: "Dragon Magazine 369",
    categories: ["Draconic Anathema", "ID_FMP_CLASS_FEATURE_1104", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_5981"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Draconic Resolution"] = new RulesElement({
    name: "Draconic Resolution",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1111",
    source: "Dragon Magazine 369",
    categories: ["Draconic Resolution", "ID_FMP_CLASS_FEATURE_1111", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon Hammer"] = new RulesElement({
    name: "Dragon Hammer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1107",
    source: "Dragon Magazine 369",
    categories: ["Dragon Hammer", "ID_FMP_CLASS_FEATURE_1107", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon Stalker"] = new RulesElement({
    name: "Dragon Stalker",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1110",
    source: "Dragon Magazine 369",
    categories: ["Dragon Stalker", "ID_FMP_CLASS_FEATURE_1110", "11"],
    rules: function(model) {
      model.statadd("Arcana Misc", function() { /* to monster knowledge checks regarding dragons */ return 2; });
      model.statadd("Dungeoneering Misc", function() { /* to monster knowledge checks regarding dragons */ return 2; });
      model.statadd("Nature Misc", function() { /* to monster knowledge checks regarding dragons */ return 2; });
      model.statadd("Religion Misc", function() { /* to monster knowledge checks regarding dragons */ return 2; });
      model.statadd("Perception Misc", function() { /* to track dragons */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dragonbane Boon"] = new RulesElement({
    name: "Dragonbane Boon",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1114",
    source: "Dragon Magazine 369",
    categories: ["Dragonbane Boon", "ID_FMP_CLASS_FEATURE_1114", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dragonbane Curse"] = new RulesElement({
    name: "Dragonbane Curse",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1115",
    source: "Dragon Magazine 369",
    categories: ["Dragonbane Curse", "ID_FMP_CLASS_FEATURE_1115", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon's Challenge"] = new RulesElement({
    name: "Dragon's Challenge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1108",
    source: "Dragon Magazine 369",
    categories: ["Dragon's Challenge", "ID_FMP_CLASS_FEATURE_1108", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon-Slayer's Action"] = new RulesElement({
    name: "Dragon-Slayer's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1103",
    source: "Dragon Magazine 369",
    categories: ["Dragon-Slayer's Action", "ID_FMP_CLASS_FEATURE_1103", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Dragon-Slayer's Action:You can spend an action point to reroll an attack roll against a dragon, or to end a condition currently affecting you that originated from a dragon, and that a save can end. Using this feature replaces the normal action point benefit of taking an extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Flank the Beast"] = new RulesElement({
    name: "Flank the Beast",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1113",
    source: "Dragon Magazine 369",
    categories: ["Flank the Beast", "ID_FMP_CLASS_FEATURE_1113", "16"],
    rules: function(model) {
      model.statadd("AC", function() { /* against an enemy you are flanking */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Gap in the Armor"] = new RulesElement({
    name: "Gap in the Armor",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1112",
    source: "Dragon Magazine 369",
    categories: ["Gap in the Armor", "ID_FMP_CLASS_FEATURE_1112", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Guardian Ally"] = new RulesElement({
    name: "Guardian Ally",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1106",
    source: "Dragon Magazine 369",
    categories: ["Guardian Ally", "ID_FMP_CLASS_FEATURE_1106", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Lend Spiritual Aid"] = new RulesElement({
    name: "Lend Spiritual Aid",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1102",
    source: "Dragon Magazine 369",
    categories: ["Lend Spiritual Aid", "ID_FMP_CLASS_FEATURE_1102", "16"],
    rules: function(model) {
      model.statadd("Action Point", "Lend Spiritual Aid:When an ally within 5 squares of you that can see and hear you spends an action point to make an attack, that ally gains concealment until the end of your next turn");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Partake of My Strength"] = new RulesElement({
    name: "Partake of My Strength",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1109",
    source: "Dragon Magazine 369",
    categories: ["Partake of My Strength", "ID_FMP_CLASS_FEATURE_1109", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Savage Apotheosis"] = new RulesElement({
    name: "Savage Apotheosis",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1096",
    source: "Dragon Magazine 369",
    categories: ["Savage Apotheosis", "ID_FMP_CLASS_FEATURE_1096", "16"],
    rules: function(model) {
      model.statadd("Speed", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sky-Slayer"] = new RulesElement({
    name: "Sky-Slayer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1119",
    source: "Dragon Magazine 369",
    categories: ["Sky-Slayer", "ID_FMP_CLASS_FEATURE_1119", "16"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against flying creatures */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unflagging Spirit"] = new RulesElement({
    name: "Unflagging Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1117",
    source: "Dragon Magazine 369",
    categories: ["Unflagging Spirit", "ID_FMP_CLASS_FEATURE_1117", "16"],
    rules: function(model) {
      model.statadd("ALLY.Action Point", "Unflagging Spirit:When an ally you can see spends an action point to make an attack and misses, the ally gains temporary hit points equal to your level and can make a saving throw. If the ally's attack missed a dragon, the ally regains hit points equal to your level instead of gaining temporary hit points.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Vengeance for All"] = new RulesElement({
    name: "Vengeance for All",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1116",
    source: "Dragon Magazine 369",
    categories: ["Vengeance for All", "ID_FMP_CLASS_FEATURE_1116", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Wyrm-Bane"] = new RulesElement({
    name: "Wyrm-Bane",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1105",
    source: "Dragon Magazine 369",
    categories: ["Wyrm-Bane", "ID_FMP_CLASS_FEATURE_1105", "16"]
  });
  byID[te.id] = te;
  
  
})(this);
