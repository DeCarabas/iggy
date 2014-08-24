(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Accurate Action"] = new RulesElement({
    name: "Accurate Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1189",
    source: "Player's Handbook 2",
    categories: ["Accurate Action", "ID_FMP_CLASS_FEATURE_1189", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Accurate Action:When you spend an action point to make an attack, you can roll twice for one of that attack's attack rolls and use either result.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ambitious Effort"] = new RulesElement({
    name: "Ambitious Effort",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1149",
    source: "Player's Handbook 2",
    categories: ["Ambitious Effort", "ID_FMP_CLASS_FEATURE_1149", "11"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Ambitious Effort"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ambitious Effort Existing Power"] = new RulesElement({
    name: "Ambitious Effort Existing Power",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_AMBITIOUS_EFFORT_EXISTING_POWER",
    source: "Player's Handbook 2",
    categories: ["Ambitious Effort Existing Power", "ID_INTERNAL_CLASS_FEATURE_AMBITIOUS_EFFORT_EXISTING_POWER", "Ambitious Effort"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("encounter") && element.hasCategory("7")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("encounter") && element.hasCategory("13")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ambitious Effort New Power"] = new RulesElement({
    name: "Ambitious Effort New Power",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_AMBITIOUS_EFFORT_NEW_POWER",
    source: "Player's Handbook 2",
    categories: ["Ambitious Effort New Power", "ID_INTERNAL_CLASS_FEATURE_AMBITIOUS_EFFORT_NEW_POWER", "Ambitious Effort"],
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
  
  te = class_feature["Angelic Emanation"] = new RulesElement({
    name: "Angelic Emanation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1241",
    source: "Player's Handbook 2",
    categories: ["Angelic Emanation", "ID_FMP_CLASS_FEATURE_1241", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Angelic Resistance"] = new RulesElement({
    name: "Angelic Resistance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1240",
    source: "Player's Handbook 2",
    categories: ["Angelic Resistance", "ID_FMP_CLASS_FEATURE_1240", "11"],
    rules: function(model) {
      model.statadd("resist:necrotic", 10, "resist");
      model.statadd("resist:radiant", 10, "resist");
      model.statadd("resist:necrotic", 5);
      model.statadd("resist:radiant", 5);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Antagonistic Transposition"] = new RulesElement({
    name: "Antagonistic Transposition",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1269",
    source: "Player's Handbook 2",
    categories: ["Antagonistic Transposition", "ID_FMP_CLASS_FEATURE_1269", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Faith"] = new RulesElement({
    name: "Armor of Faith",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1191",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Armor of Faith", "ID_FMP_CLASS_FEATURE_1191", "ID_FMP_HYBRID_CLASS_439", "Hybrid Avenger", "1"],
    rules: function(model) {
      model.statadd("Armor of Faith Bonus", function() { 
        if (!(model.wearing('Armor', ['Shield']))) {
          return 3;
        } else return 0;
       });
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['cloth'])) {
          return model.stat("Armor of Faith Bonus");
        } else return 0;
       });
      model.statadd("AC", function() { 
        if (!(model.wearing('Armor'))) {
          return model.stat("Armor of Faith Bonus");
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Avalanche Action"] = new RulesElement({
    name: "Avalanche Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1194",
    source: "Player's Handbook 2",
    categories: ["Avalanche Action", "ID_FMP_CLASS_FEATURE_1194", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Avalanche Action:When you spend an action point to make an attack and that attack hits, you push each target you hit with that attack a number of squares equal to your Intelligence modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Avenger's Censure"] = new RulesElement({
    name: "Avenger's Censure",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1192",
    source: "Player's Handbook 2",
    categories: ["Avenger's Censure", "ID_FMP_CLASS_FEATURE_1192", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_1192"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Balance of Nature"] = new RulesElement({
    name: "Balance of Nature",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1493",
    source: "Player's Handbook 2",
    categories: ["Balance of Nature", "ID_FMP_CLASS_FEATURE_1493", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Barbarian Agility"] = new RulesElement({
    name: "Barbarian Agility",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1492",
    source: "Player's Handbook 2",
    categories: ["Barbarian Agility", "ID_FMP_CLASS_FEATURE_1492", "1"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return 1;
        } else return 0;
       });
      model.statadd("Reflex Defense", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return 1;
        } else return 0;
       });
      model.statadd("AC", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return 1;
        } else return 0;
       });
      model.statadd("Reflex Defense", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return 1;
        } else return 0;
       });
      model.statadd("AC", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return 1;
        } else return 0;
       });
      model.statadd("Reflex Defense", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return 1;
        } else return 0;
       });
      model.statadd("Barbarian Agility", 1);
      model.statadd("Barbarian Agility", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bardic Training"] = new RulesElement({
    name: "Bardic Training",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_847",
    source: "Player's Handbook 2",
    categories: ["Bardic Training", "ID_FMP_CLASS_FEATURE_847", "1"],
    rules: function(model) {
      model.select('Feat', 1, {
        filter: function(model, element) { return element.hasCategory("Ritual Casting"); }
      });
      model.statadd("FREEBEE:ID_FMP_GEAR_31", 1);
      model.statadd("Free Rituals", "* As a bard, you are entitled to two 1st-level rituals to begin your career, one of which must have bard as a prerequisite.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bardic Virtue"] = new RulesElement({
    name: "Bardic Virtue",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_700",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Bardic Virtue", "ID_FMP_CLASS_FEATURE_700", "ID_FMP_HYBRID_CLASS_441", "Hybrid Bard", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_700"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bear Form"] = new RulesElement({
    name: "Bear Form",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1207",
    source: "Player's Handbook 2",
    categories: ["Bear Form", "ID_FMP_CLASS_FEATURE_1207", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bearer of Doom"] = new RulesElement({
    name: "Bearer of Doom",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1297",
    source: "Player's Handbook 2",
    categories: ["Bearer of Doom", "ID_FMP_CLASS_FEATURE_1297", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bear's Toughness"] = new RulesElement({
    name: "Bear's Toughness",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1206",
    source: "Player's Handbook 2",
    categories: ["Bear's Toughness", "ID_FMP_CLASS_FEATURE_1206", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Bear's Toughness:When you spend an action point to take an extra action, you can also spend a healing surge.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Beast Senses"] = new RulesElement({
    name: "Beast Senses",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1238",
    source: "Player's Handbook 2",
    categories: ["Beast Senses", "ID_FMP_CLASS_FEATURE_1238", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bedazzling Orb Charisma"] = new RulesElement({
    name: "Bedazzling Orb Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BEDAZZLING_ORB_CHARISMA",
    source: "Player's Handbook 2",
    categories: ["Bedazzling Orb Charisma", "ID_INTERNAL_CLASS_FEATURE_BEDAZZLING_ORB_CHARISMA", "Bedazzling Orb", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bedazzling Orb Intelligence"] = new RulesElement({
    name: "Bedazzling Orb Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BEDAZZLING_ORB_INTELLIGENCE",
    source: "Player's Handbook 2",
    categories: ["Bedazzling Orb Intelligence", "ID_INTERNAL_CLASS_FEATURE_BEDAZZLING_ORB_INTELLIGENCE", "Bedazzling Orb", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Beguiling Bolt Charisma"] = new RulesElement({
    name: "Beguiling Bolt Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BEGUILING_BOLT_CHARISMA",
    source: "Player's Handbook 2",
    categories: ["Beguiling Bolt Charisma", "ID_INTERNAL_CLASS_FEATURE_BEGUILING_BOLT_CHARISMA", "Beguiling Bolt", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Beguiling Bolt Intelligence"] = new RulesElement({
    name: "Beguiling Bolt Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BEGUILING_BOLT_INTELLIGENCE",
    source: "Player's Handbook 2",
    categories: ["Beguiling Bolt Intelligence", "ID_INTERNAL_CLASS_FEATURE_BEGUILING_BOLT_INTELLIGENCE", "Beguiling Bolt", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bestow Grace"] = new RulesElement({
    name: "Bestow Grace",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1306",
    source: "Player's Handbook 2",
    categories: ["Bestow Grace", "ID_FMP_CLASS_FEATURE_1306", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Blessed of the Fey"] = new RulesElement({
    name: "Blessed of the Fey",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1179",
    source: "Player's Handbook 2",
    categories: ["Blessed of the Fey", "ID_FMP_CLASS_FEATURE_1179", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Blessing of Spring"] = new RulesElement({
    name: "Blessing of Spring",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1495",
    source: "Player's Handbook 2",
    categories: ["Blessing of Spring", "ID_FMP_CLASS_FEATURE_1495", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Blighting Action"] = new RulesElement({
    name: "Blighting Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1242",
    source: "Player's Handbook 2",
    categories: ["Blighting Action", "ID_FMP_CLASS_FEATURE_1242", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Blighting Action:When you spend an action point to take an extra action, each enemy within 5 squares of you gains vulnerable 5 necrotic until the end of your next turn. In addition, all damage you deal during this turn is necrotic in addition to its other damage types.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blood Moon Action"] = new RulesElement({
    name: "Blood Moon Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1227",
    source: "Player's Handbook 2",
    categories: ["Blood Moon Action", "ID_FMP_CLASS_FEATURE_1227", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Blood Moon Action:When you spend an action point to take an extra action while you are in beast form, you can also make a melee basic attack as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blood Moon Hunger"] = new RulesElement({
    name: "Blood Moon Hunger",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1228",
    source: "Player's Handbook 2",
    categories: ["Blood Moon Hunger", "ID_FMP_CLASS_FEATURE_1228", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Blood Oath"] = new RulesElement({
    name: "Blood Oath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1197",
    source: "Player's Handbook 2",
    categories: ["Blood Oath", "ID_FMP_CLASS_FEATURE_1197", "11"],
    rules: function(model) {
      model.statadd("AC", function() { /* against attacks made by your oath of enmity target */ return 1; });
      model.statadd("Fortitude Defense", function() { /* against attacks made by your oath of enmity target */ return 1; });
      model.statadd("Reflex Defense", function() { /* against attacks made by your oath of enmity target */ return 1; });
      model.statadd("Will Defense", function() { /* against attacks made by your oath of enmity target */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blood of Io"] = new RulesElement({
    name: "Blood of Io",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1178",
    source: "Player's Handbook 2",
    categories: ["Blood of Io", "ID_FMP_CLASS_FEATURE_1178", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bloodied Might"] = new RulesElement({
    name: "Bloodied Might",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1202",
    source: "Player's Handbook 2",
    categories: ["Bloodied Might", "ID_FMP_CLASS_FEATURE_1202", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bloodthirsty Hammer"] = new RulesElement({
    name: "Bloodthirsty Hammer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1196",
    source: "Player's Handbook 2",
    categories: ["Bloodthirsty Hammer", "ID_FMP_CLASS_FEATURE_1196", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bloodwrath Fury"] = new RulesElement({
    name: "Bloodwrath Fury",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1285",
    source: "Player's Handbook 2",
    categories: ["Bloodwrath Fury", "ID_FMP_CLASS_FEATURE_1285", "16"],
    rules: function(model) {
      model.statadd("melee:damage", function() { /* against an enemy marked by you */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bloodwrath Stride"] = new RulesElement({
    name: "Bloodwrath Stride",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1284",
    source: "Player's Handbook 2",
    categories: ["Bloodwrath Stride", "ID_FMP_CLASS_FEATURE_1284", "11"],
    rules: function(model) {
      model.statadd("Speed", function() { /* while you are in a guardian form */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bloody Determination"] = new RulesElement({
    name: "Bloody Determination",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1150",
    source: "Player's Handbook 2",
    categories: ["Bloody Determination", "ID_FMP_CLASS_FEATURE_1150", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bolts of Bedevilment Charisma"] = new RulesElement({
    name: "Bolts of Bedevilment Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BOLTS_OF_BEDEVILMENT_CHARISMA",
    source: "Player's Handbook 2",
    categories: ["Bolts of Bedevilment Charisma", "ID_INTERNAL_CLASS_FEATURE_BOLTS_OF_BEDEVILMENT_CHARISMA", "Bolts of Bedevilment", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bolts of Bedevilment Constitution"] = new RulesElement({
    name: "Bolts of Bedevilment Constitution",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BOLTS_OF_BEDEVILMENT_CONSTITUTION",
    source: "Player's Handbook 2",
    categories: ["Bolts of Bedevilment Constitution", "ID_INTERNAL_CLASS_FEATURE_BOLTS_OF_BEDEVILMENT_CONSTITUTION", "Bolts of Bedevilment", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bolts of Bedevilment Intelligence"] = new RulesElement({
    name: "Bolts of Bedevilment Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BOLTS_OF_BEDEVILMENT_INTELLIGENCE",
    source: "Player's Handbook 2",
    categories: ["Bolts of Bedevilment Intelligence", "ID_INTERNAL_CLASS_FEATURE_BOLTS_OF_BEDEVILMENT_INTELLIGENCE", "Bolts of Bedevilment", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bonds of Life Charisma"] = new RulesElement({
    name: "Bonds of Life Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BONDS_OF_LIFE_CHARISMA",
    source: "Player's Handbook 2",
    categories: ["Bonds of Life Charisma", "ID_INTERNAL_CLASS_FEATURE_BONDS_OF_LIFE_CHARISMA", "Bonds of Life", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bonds of Life Intelligence"] = new RulesElement({
    name: "Bonds of Life Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BONDS_OF_LIFE_INTELLIGENCE",
    source: "Player's Handbook 2",
    categories: ["Bonds of Life Intelligence", "ID_INTERNAL_CLASS_FEATURE_BONDS_OF_LIFE_INTELLIGENCE", "Bonds of Life", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bonds of Life Wisdom"] = new RulesElement({
    name: "Bonds of Life Wisdom",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BONDS_OF_LIFE_WISDOM",
    source: "Player's Handbook 2",
    categories: ["Bonds of Life Wisdom", "ID_INTERNAL_CLASS_FEATURE_BONDS_OF_LIFE_WISDOM", "Bonds of Life", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bone Crusher"] = new RulesElement({
    name: "Bone Crusher",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1195",
    source: "Player's Handbook 2",
    categories: ["Bone Crusher", "ID_FMP_CLASS_FEATURE_1195", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Booming Words"] = new RulesElement({
    name: "Booming Words",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1223",
    source: "Player's Handbook 2",
    categories: ["Booming Words", "ID_FMP_CLASS_FEATURE_1223", "16"],
    rules: function(model) {
      model.statadd("thunder:damage", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Censure of Pursuit"] = new RulesElement({
    name: "Censure of Pursuit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1497",
    source: "Player's Handbook 2",
    categories: ["Censure of Pursuit", "ID_FMP_CLASS_FEATURE_1497", "ID_FMP_CLASS_FEATURE_1192", "Avenger's Censure", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Censure of Retribution"] = new RulesElement({
    name: "Censure of Retribution",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1498",
    source: "Player's Handbook 2",
    categories: ["Censure of Retribution", "ID_FMP_CLASS_FEATURE_1498", "ID_FMP_CLASS_FEATURE_1192", "Avenger's Censure", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Champion of Humanity"] = new RulesElement({
    name: "Champion of Humanity",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1152",
    source: "Player's Handbook 2",
    categories: ["Champion of Humanity", "ID_FMP_CLASS_FEATURE_1152", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Chaos Action"] = new RulesElement({
    name: "Chaos Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1277",
    source: "Player's Handbook 2",
    categories: ["Chaos Action", "ID_FMP_CLASS_FEATURE_1277", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Chaos Action:When you spend an action point to take an extra action, you can roll a d6 to also gain one of the benefits below. <table>d6 Chaos Action Effect 1 You become invisible until the start of your next turn. 2 You teleport a number of squares equal to 5 + your Dexterity modifier. 3 You gain temporary hit points equal to one-half your level. 4 Until the end of the encounter, each ally within 5 squares of you gains resist 10 to the damage type you resist with your Wild Soul. 5 You teleport an ally and an enemy within 10 squares of you, swapping their positions. 6 You and each ally within 5 squares of you each make a saving throw.</table>");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Chaos Burst"] = new RulesElement({
    name: "Chaos Burst",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1564",
    source: "Player's Handbook 2",
    categories: ["Chaos Burst", "ID_FMP_CLASS_FEATURE_1564", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Chaos Power"] = new RulesElement({
    name: "Chaos Power",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1565",
    source: "Player's Handbook 2",
    categories: ["Chaos Power", "ID_FMP_CLASS_FEATURE_1565", "1"],
    rules: function(model) {
      model.statadd("Chaos Power", function() { return model.stat("Dexterity modifier"); });
      model.statadd("Chaos Power", 2);
      model.statadd("Chaos Power", 2);
      model.statadd("arcane:damage", function() { return model.stat("Chaos Power"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Circle the Prey Dexterity"] = new RulesElement({
    name: "Circle the Prey Dexterity",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_CIRCLE_THE_PREY_DEXTERITY",
    source: "Player's Handbook 2",
    categories: ["Circle the Prey Dexterity", "ID_INTERNAL_CLASS_FEATURE_CIRCLE_THE_PREY_DEXTERITY", "Circle the Prey", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Circle the Prey Strength"] = new RulesElement({
    name: "Circle the Prey Strength",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_CIRCLE_THE_PREY_STRENGTH",
    source: "Player's Handbook 2",
    categories: ["Circle the Prey Strength", "ID_INTERNAL_CLASS_FEATURE_CIRCLE_THE_PREY_STRENGTH", "Circle the Prey", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Clever Versatililty"] = new RulesElement({
    name: "Clever Versatililty",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1165",
    source: "Player's Handbook 2",
    categories: ["Clever Versatililty", "ID_FMP_CLASS_FEATURE_1165", "12"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("utility") && element.hasCategory("10") && (element.hasCategory("ID_FMP_CLASS_6") || element.hasCategory("ID_FMP_CLASS_9"))); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Cloaked in Magic"] = new RulesElement({
    name: "Cloaked in Magic",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1181",
    source: "Player's Handbook 2",
    categories: ["Cloaked in Magic", "ID_FMP_CLASS_FEATURE_1181", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Companion Spirit"] = new RulesElement({
    name: "Companion Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_855",
    source: "Player's Handbook 2",
    categories: ["Companion Spirit", "ID_FMP_CLASS_FEATURE_855", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_855"); }
      });
      model.grant(elements.id["ID_FMP_POWER_6515"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Compensatory Insight"] = new RulesElement({
    name: "Compensatory Insight",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1217",
    source: "Player's Handbook 2",
    categories: ["Compensatory Insight", "ID_FMP_CLASS_FEATURE_1217", "16"],
    rules: function(model) {
      model.statadd("multiclass feat:damage", function() { return model.stat("Intelligence modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Covenant of Preservation"] = new RulesElement({
    name: "Covenant of Preservation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1265",
    source: "Player's Handbook 2",
    categories: ["Covenant of Preservation", "ID_FMP_CLASS_FEATURE_1265", "ID_FMP_CLASS_FEATURE_1156", "Divine Covenant", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_5185"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Covenant of Wrath"] = new RulesElement({
    name: "Covenant of Wrath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1266",
    source: "Player's Handbook 2",
    categories: ["Covenant of Wrath", "ID_FMP_CLASS_FEATURE_1266", "ID_FMP_CLASS_FEATURE_1156", "Divine Covenant", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_5184"]);
      model.statadd("divine,encounter:damage", function() { /* for each enemy you attack */ return 1; });
      model.statadd("divine,daily:damage", function() { /* for each enemy you attack */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Crafty Combatant"] = new RulesElement({
    name: "Crafty Combatant",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1172",
    source: "Player's Handbook 2",
    categories: ["Crafty Combatant", "ID_FMP_CLASS_FEATURE_1172", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Critical Jolt"] = new RulesElement({
    name: "Critical Jolt",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1287",
    source: "Player's Handbook 2",
    categories: ["Critical Jolt", "ID_FMP_CLASS_FEATURE_1287", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Critical Surge"] = new RulesElement({
    name: "Critical Surge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1279",
    source: "Player's Handbook 2",
    categories: ["Critical Surge", "ID_FMP_CLASS_FEATURE_1279", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Daily Mastery"] = new RulesElement({
    name: "Daily Mastery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1215",
    source: "Player's Handbook 2",
    categories: ["Daily Mastery", "ID_FMP_CLASS_FEATURE_1215", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Demon Fury"] = new RulesElement({
    name: "Demon Fury",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1270",
    source: "Player's Handbook 2",
    categories: ["Demon Fury", "ID_FMP_CLASS_FEATURE_1270", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Demon Fury:When you spend an action point to take an extra action, you and your allies gain a +3 bonus to attack rolls until the start of your next turn, and your enemies gain a +3 bonus to their attack rolls against you until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Destiny Fulfilled"] = new RulesElement({
    name: "Destiny Fulfilled",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1292",
    source: "Player's Handbook 2",
    categories: ["Destiny Fulfilled", "ID_FMP_CLASS_FEATURE_1292", "21"],
    rules: function(model) {
      model.statadd("Action Point", "Destiny Fulfilled:You can spend an action point to allow an ally within 20 squares of you to make an attack as a free action, instead of taking an extra action yourself. If the ally's attack hits, you regain the action point.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Disappearing Trick"] = new RulesElement({
    name: "Disappearing Trick",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1164",
    source: "Player's Handbook 2",
    categories: ["Disappearing Trick", "ID_FMP_CLASS_FEATURE_1164", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Disappearing Trick:You can spend an action point to become invisible until the end of your next turn or until you attack, instead of taking an extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dissolution's Call"] = new RulesElement({
    name: "Dissolution's Call",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1243",
    source: "Player's Handbook 2",
    categories: ["Dissolution's Call", "ID_FMP_CLASS_FEATURE_1243", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Divine Covenant"] = new RulesElement({
    name: "Divine Covenant",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1156",
    source: "Player's Handbook 2",
    categories: ["Divine Covenant", "ID_FMP_CLASS_FEATURE_1156", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_1156"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Divine Shroud Action"] = new RulesElement({
    name: "Divine Shroud Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1203",
    source: "Player's Handbook 2",
    categories: ["Divine Shroud Action", "ID_FMP_CLASS_FEATURE_1203", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Divine Shroud Action:When you spend an action point to take an extra action, you also gain concealment until the end of your next turn, and you can teleport 3 squares as a free action before or after the extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dominating Presence"] = new RulesElement({
    name: "Dominating Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1211",
    source: "Player's Handbook 2",
    categories: ["Dominating Presence", "ID_FMP_CLASS_FEATURE_1211", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Doom's Reward"] = new RulesElement({
    name: "Doom's Reward",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1300",
    source: "Player's Handbook 2",
    categories: ["Doom's Reward", "ID_FMP_CLASS_FEATURE_1300", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Double Resistance"] = new RulesElement({
    name: "Double Resistance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1267",
    source: "Player's Handbook 2",
    categories: ["Double Resistance", "ID_FMP_CLASS_FEATURE_1267", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_CLASS_FEATURE_SECOND_DRAGON_MAGIC"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Draconic Durability"] = new RulesElement({
    name: "Draconic Durability",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1273",
    source: "Player's Handbook 2",
    categories: ["Draconic Durability", "ID_FMP_CLASS_FEATURE_1273", "11"],
    rules: function(model) {
      model.statadd("Healing Surges", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Draconic Outburst"] = new RulesElement({
    name: "Draconic Outburst",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1177",
    source: "Player's Handbook 2",
    categories: ["Draconic Outburst", "ID_FMP_CLASS_FEATURE_1177", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Draconic Outburst:When you spend an action point to make an attack, each enemy adjacent to you takes damage equal to 5 + your Constitution modifier when you resolve the attack. This damage is the same type you initially chose for your dragon breath racial power.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Draconic Power"] = new RulesElement({
    name: "Draconic Power",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1557",
    source: "Player's Handbook 2",
    categories: ["Draconic Power", "ID_FMP_CLASS_FEATURE_1557", "1"],
    rules: function(model) {
      model.statadd("arcane:damage", function() { return model.stat("Strength modifier"); });
      model.statadd("arcane:damage", 2);
      model.statadd("arcane:damage", 2);
      model.statadd("Draconic Power", 2);
      model.statadd("Draconic Power", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Draconic Resilience"] = new RulesElement({
    name: "Draconic Resilience",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1558",
    source: "Player's Handbook 2",
    categories: ["Draconic Resilience", "ID_FMP_CLASS_FEATURE_1558", "1"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return model.stat("Strength modifier");
        } else return 0;
       }, "Ability");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Draconic Resilience Action"] = new RulesElement({
    name: "Draconic Resilience Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1274",
    source: "Player's Handbook 2",
    categories: ["Draconic Resilience Action", "ID_FMP_CLASS_FEATURE_1274", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Draconic Resilience Action:When you spend an action point to take an extra action, you also gain a number of temporary hit points equal to one-half your level.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon Magic"] = new RulesElement({
    name: "Dragon Magic",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_851",
    source: "Player's Handbook 2",
    categories: ["Dragon Magic", "ID_FMP_CLASS_FEATURE_851", "ID_FMP_CLASS_FEATURE_850", "Spell Source", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1557"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1558"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1559"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1560"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon Soul"] = new RulesElement({
    name: "Dragon Soul",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1559",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Dragon Soul", "ID_FMP_CLASS_FEATURE_1559", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Dragon Soul Resist Choice"); }
      });
      model.grant(elements.id["ID_INTERNAL_COUNTSASFEATURE_DRAGON_MAGIC"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon Soul Acid"] = new RulesElement({
    name: "Dragon Soul Acid",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DRAGON_SOUL_ACID",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Dragon Soul Acid", "ID_INTERNAL_CLASS_FEATURE_DRAGON_SOUL_ACID", "Dragon Soul Resist Choice"],
    rules: function(model) {
      model.statadd("Dragon Soul Acid Resist", function() { return model.stat("Spell Source Resist"); });
      model.statadd("Dragon Soul Acid Resist", 5);
      model.statadd("resist:acid", function() { return model.stat("Dragon Soul Acid Resist"); }, "resist");
      model.statadd("Dragon Soul Acid Resist", 5);
      model.statadd("Dragon Soul Acid Resist", 5);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon Soul Cold"] = new RulesElement({
    name: "Dragon Soul Cold",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DRAGON_SOUL_COLD",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Dragon Soul Cold", "ID_INTERNAL_CLASS_FEATURE_DRAGON_SOUL_COLD", "Dragon Soul Resist Choice"],
    rules: function(model) {
      model.statadd("Dragon Soul Cold Resist", function() { return model.stat("Spell Source Resist"); });
      model.statadd("Dragon Soul Cold Resist", 5);
      model.statadd("resist:cold", function() { return model.stat("Dragon Soul Cold Resist"); }, "resist");
      model.statadd("Dragon Soul Cold Resist", 5);
      model.statadd("Dragon Soul Cold Resist", 5);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon Soul Fire"] = new RulesElement({
    name: "Dragon Soul Fire",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DRAGON_SOUL_FIRE",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Dragon Soul Fire", "ID_INTERNAL_CLASS_FEATURE_DRAGON_SOUL_FIRE", "Dragon Soul Resist Choice"],
    rules: function(model) {
      model.statadd("Dragon Soul Fire Resist", function() { return model.stat("Spell Source Resist"); });
      model.statadd("Dragon Soul Fire Resist", 5);
      model.statadd("resist:fire", function() { return model.stat("Dragon Soul Fire Resist"); }, "resist");
      model.statadd("Dragon Soul Fire Resist", 5);
      model.statadd("Dragon Soul Fire Resist", 5);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon Soul Lightning"] = new RulesElement({
    name: "Dragon Soul Lightning",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DRAGON_SOUL_LIGHTNING",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Dragon Soul Lightning", "ID_INTERNAL_CLASS_FEATURE_DRAGON_SOUL_LIGHTNING", "Dragon Soul Resist Choice"],
    rules: function(model) {
      model.statadd("Dragon Soul Lightning Resist", function() { return model.stat("Spell Source Resist"); });
      model.statadd("Dragon Soul Lightning Resist", 5);
      model.statadd("resist:lightning", function() { return model.stat("Dragon Soul Lightning Resist"); }, "resist");
      model.statadd("Dragon Soul Lightning Resist", 5);
      model.statadd("Dragon Soul Lightning Resist", 5);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon Soul Poison"] = new RulesElement({
    name: "Dragon Soul Poison",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DRAGON_SOUL_POISON",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Dragon Soul Poison", "ID_INTERNAL_CLASS_FEATURE_DRAGON_SOUL_POISON", "Dragon Soul Resist Choice"],
    rules: function(model) {
      model.statadd("Dragon Soul Poison Resist", function() { return model.stat("Spell Source Resist"); });
      model.statadd("Dragon Soul Poison Resist", 5);
      model.statadd("resist:poison", function() { return model.stat("Dragon Soul Poison Resist"); }, "resist");
      model.statadd("Dragon Soul Poison Resist", 5);
      model.statadd("Dragon Soul Poison Resist", 5);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon Soul Resistance"] = new RulesElement({
    name: "Dragon Soul Resistance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1275",
    source: "Player's Handbook 2",
    categories: ["Dragon Soul Resistance", "ID_FMP_CLASS_FEATURE_1275", "16"],
    rules: function(model) {
      model.statadd("Dragon Soul Acid Resist", 10, "Dragon Soul Resistance");
      model.statadd("Dragon Soul Cold Resist", 10, "Dragon Soul Resistance");
      model.statadd("Dragon Soul Fire Resist", 10, "Dragon Soul Resistance");
      model.statadd("Dragon Soul Lightning Resist", 10, "Dragon Soul Resistance");
      model.statadd("Dragon Soul Poison Resist", 10, "Dragon Soul Resistance");
      model.statadd("Dragon Soul Thunder Resist", 10, "Dragon Soul Resistance");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon Soul Thunder"] = new RulesElement({
    name: "Dragon Soul Thunder",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DRAGON_SOUL_THUNDER",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Dragon Soul Thunder", "ID_INTERNAL_CLASS_FEATURE_DRAGON_SOUL_THUNDER", "Dragon Soul Resist Choice"],
    rules: function(model) {
      model.statadd("Dragon Soul Thunder Resist", function() { return model.stat("Spell Source Resist"); });
      model.statadd("Dragon Soul Thunder Resist", 5);
      model.statadd("resist:thunder", function() { return model.stat("Dragon Soul Thunder Resist"); }, "resist");
      model.statadd("Dragon Soul Thunder Resist", 5);
      model.statadd("Dragon Soul Thunder Resist", 5);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dwarven Resurgence"] = new RulesElement({
    name: "Dwarven Resurgence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1169",
    source: "Player's Handbook 2",
    categories: ["Dwarven Resurgence", "ID_FMP_CLASS_FEATURE_1169", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Eager Action"] = new RulesElement({
    name: "Eager Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1160",
    source: "Player's Handbook 2",
    categories: ["Eager Action", "ID_FMP_CLASS_FEATURE_1160", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Eager Action:When you spend an action point to take an extra action, you also gain a bonus to speed equal to your Dexterity modifier until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Earthstrength"] = new RulesElement({
    name: "Earthstrength",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1317",
    source: "Player's Handbook 2",
    categories: ["Earthstrength", "ID_FMP_CLASS_FEATURE_1317", "ID_FMP_CLASS_FEATURE_1281", "Guardian Might", "1"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return model.stat("Constitution modifier");
        } else return 0;
       }, "Ability");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Echoed Malediction"] = new RulesElement({
    name: "Echoed Malediction",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1244",
    source: "Player's Handbook 2",
    categories: ["Echoed Malediction", "ID_FMP_CLASS_FEATURE_1244", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Elfsight"] = new RulesElement({
    name: "Elfsight",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1188",
    source: "Player's Handbook 2",
    categories: ["Elfsight", "ID_FMP_CLASS_FEATURE_1188", "11"],
    rules: function(model) {
      model.statadd("Perception Misc", 4, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Enduring Castigation"] = new RulesElement({
    name: "Enduring Castigation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1249",
    source: "Player's Handbook 2",
    categories: ["Enduring Castigation", "ID_FMP_CLASS_FEATURE_1249", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Enduring Hope"] = new RulesElement({
    name: "Enduring Hope",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1246",
    source: "Player's Handbook 2",
    categories: ["Enduring Hope", "ID_FMP_CLASS_FEATURE_1246", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Enduring Oath"] = new RulesElement({
    name: "Enduring Oath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1199",
    source: "Player's Handbook 2",
    categories: ["Enduring Oath", "ID_FMP_CLASS_FEATURE_1199", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Enduring Spirit"] = new RulesElement({
    name: "Enduring Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1232",
    source: "Player's Handbook 2",
    categories: ["Enduring Spirit", "ID_FMP_CLASS_FEATURE_1232", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Ensorcelled Mind Charisma"] = new RulesElement({
    name: "Ensorcelled Mind Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ENSORCELLED_MIND_CHARISMA",
    source: "Player's Handbook 2",
    categories: ["Ensorcelled Mind Charisma", "ID_INTERNAL_CLASS_FEATURE_ENSORCELLED_MIND_CHARISMA", "Ensorcelled Mind", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Ensorcelled Mind Intelligence"] = new RulesElement({
    name: "Ensorcelled Mind Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ENSORCELLED_MIND_INTELLIGENCE",
    source: "Player's Handbook 2",
    categories: ["Ensorcelled Mind Intelligence", "ID_INTERNAL_CLASS_FEATURE_ENSORCELLED_MIND_INTELLIGENCE", "Ensorcelled Mind", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Ensorcelled Mind Wisdom"] = new RulesElement({
    name: "Ensorcelled Mind Wisdom",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ENSORCELLED_MIND_WISDOM",
    source: "Player's Handbook 2",
    categories: ["Ensorcelled Mind Wisdom", "ID_INTERNAL_CLASS_FEATURE_ENSORCELLED_MIND_WISDOM", "Ensorcelled Mind", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Entwining Evocation"] = new RulesElement({
    name: "Entwining Evocation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1231",
    source: "Player's Handbook 2",
    categories: ["Entwining Evocation", "ID_FMP_CLASS_FEATURE_1231", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Eternal Return"] = new RulesElement({
    name: "Eternal Return",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1159",
    source: "Player's Handbook 2",
    categories: ["Eternal Return", "ID_FMP_CLASS_FEATURE_1159", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fate's Clarity"] = new RulesElement({
    name: "Fate's Clarity",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1293",
    source: "Player's Handbook 2",
    categories: ["Fate's Clarity", "ID_FMP_CLASS_FEATURE_1293", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fearless Scoundrel"] = new RulesElement({
    name: "Fearless Scoundrel",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1170",
    source: "Player's Handbook 2",
    categories: ["Fearless Scoundrel", "ID_FMP_CLASS_FEATURE_1170", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fearsome Disposition"] = new RulesElement({
    name: "Fearsome Disposition",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1161",
    source: "Player's Handbook 2",
    categories: ["Fearsome Disposition", "ID_FMP_CLASS_FEATURE_1161", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Feral Might"] = new RulesElement({
    name: "Feral Might",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1051",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Feral Might", "ID_FMP_CLASS_FEATURE_1051", "ID_FMP_HYBRID_CLASS_440", "Hybrid Barbarian", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_1051"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fervent Pursuit"] = new RulesElement({
    name: "Fervent Pursuit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1494",
    source: "Player's Handbook 2",
    categories: ["Fervent Pursuit", "ID_FMP_CLASS_FEATURE_1494", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fey Leap Action"] = new RulesElement({
    name: "Fey Leap Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1180",
    source: "Player's Handbook 2",
    categories: ["Fey Leap Action", "ID_FMP_CLASS_FEATURE_1180", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Fey Leap Action:You can spend an action point to teleport 10 squares, instead of taking an extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Feypath"] = new RulesElement({
    name: "Feypath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1218",
    source: "Player's Handbook 2",
    categories: ["Feypath", "ID_FMP_CLASS_FEATURE_1218", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Feypath:When you spend an action point to take an extra action, you teleport yourself or an ally adjacent to you 5 squares as a free action before or after the extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Finishing Technique"] = new RulesElement({
    name: "Finishing Technique",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1204",
    source: "Player's Handbook 2",
    categories: ["Finishing Technique", "ID_FMP_CLASS_FEATURE_1204", "11"],
    rules: function(model) {
      model.statadd("Damage", "+1d6");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Font of Life"] = new RulesElement({
    name: "Font of Life",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1280",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Font of Life", "ID_FMP_CLASS_FEATURE_1280", "ID_FMP_HYBRID_CLASS_446", "Hybrid Warden", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Frenzied Blood"] = new RulesElement({
    name: "Frenzied Blood",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1054",
    source: "Player's Handbook 2",
    categories: ["Frenzied Blood", "ID_FMP_CLASS_FEATURE_1054", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Frenzied Blood:If you spend an action point to make a melee attack and that attack misses, you deal half of that attack's damage on the miss");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Frenzied Claws"] = new RulesElement({
    name: "Frenzied Claws",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1229",
    source: "Player's Handbook 2",
    categories: ["Frenzied Claws", "ID_FMP_CLASS_FEATURE_1229", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Furious Action"] = new RulesElement({
    name: "Furious Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1283",
    source: "Player's Handbook 2",
    categories: ["Furious Action", "ID_FMP_CLASS_FEATURE_1283", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Furious Action:You can spend an action point to gain a bonus to attack rolls equal to your Wisdom modifier until the end of your turn, instead of taking an extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fury of the Hidden Flame"] = new RulesElement({
    name: "Fury of the Hidden Flame",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1234",
    source: "Player's Handbook 2",
    categories: ["Fury of the Hidden Flame", "ID_FMP_CLASS_FEATURE_1234", "11"],
    rules: function(model) {
      model.statadd("ranged, area, and close attack rolls", function() { /* against the enemy nearest to you */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ghost Panther Action"] = new RulesElement({
    name: "Ghost Panther Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1257",
    source: "Player's Handbook 2",
    categories: ["Ghost Panther Action", "ID_FMP_CLASS_FEATURE_1257", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Ghost Panther Action:When you spend an action point to take an extra action, each enemy adjacent to your spirit companion grants combat advantage to you and your allies until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ghost Panther's Wisdom"] = new RulesElement({
    name: "Ghost Panther's Wisdom",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1256",
    source: "Player's Handbook 2",
    categories: ["Ghost Panther's Wisdom", "ID_FMP_CLASS_FEATURE_1256", "11"],
    rules: function(model) {
      model.statadd("Stealth Misc", function() { /* while adjacent to your spirit companion */ return 5; }, "Power");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Glimpse of the Abyss"] = new RulesElement({
    name: "Glimpse of the Abyss",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1272",
    source: "Player's Handbook 2",
    categories: ["Glimpse of the Abyss", "ID_FMP_CLASS_FEATURE_1272", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Go for the Throat"] = new RulesElement({
    name: "Go for the Throat",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1174",
    source: "Player's Handbook 2",
    categories: ["Go for the Throat", "ID_FMP_CLASS_FEATURE_1174", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Grasping Spirit"] = new RulesElement({
    name: "Grasping Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1253",
    source: "Player's Handbook 2",
    categories: ["Grasping Spirit", "ID_FMP_CLASS_FEATURE_1253", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Great Bear's Action"] = new RulesElement({
    name: "Great Bear's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1260",
    source: "Player's Handbook 2",
    categories: ["Great Bear's Action", "ID_FMP_CLASS_FEATURE_1260", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Great Bear's Action:When you spend an action point to take an extra action, one ally of your choice within 10 squares of you can make a melee basic attack as a free action, before or after the extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Great Protector's Prowess"] = new RulesElement({
    name: "Great Protector's Prowess",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1259",
    source: "Player's Handbook 2",
    categories: ["Great Protector's Prowess", "ID_FMP_CLASS_FEATURE_1259", "11"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against marked enemies adjacent to your spirit companion */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Guardian Action (Guardian of the Living Gate)"] = new RulesElement({
    name: "Guardian Action (Guardian of the Living Gate)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1230",
    source: "Player's Handbook 2",
    categories: ["Guardian Action (Guardian of the Living Gate)", "ID_FMP_CLASS_FEATURE_1230", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Guardian Action (Guardian of the Living Gate):When you spend an action point to take an extra action, you or an ally within 5 squares of you can make a saving throw with a +5 bonus.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Guardian Might"] = new RulesElement({
    name: "Guardian Might",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1281",
    source: "Player's Handbook 2",
    categories: ["Guardian Might", "ID_FMP_CLASS_FEATURE_1281", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_1281"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Halfling's Taunt Charisma"] = new RulesElement({
    name: "Halfling's Taunt Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HALFLING'S_TAUNT_CHARISMA",
    source: "Player's Handbook 2",
    categories: ["Halfling's Taunt Charisma", "ID_INTERNAL_CLASS_FEATURE_HALFLING'S_TAUNT_CHARISMA", "Halfling's Taunt", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Halfling's Taunt Dexterity"] = new RulesElement({
    name: "Halfling's Taunt Dexterity",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HALFLING'S_TAUNT_DEXTERITY",
    source: "Player's Handbook 2",
    categories: ["Halfling's Taunt Dexterity", "ID_INTERNAL_CLASS_FEATURE_HALFLING'S_TAUNT_DEXTERITY", "Halfling's Taunt", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Healing Guides"] = new RulesElement({
    name: "Healing Guides",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1263",
    source: "Player's Handbook 2",
    categories: ["Healing Guides", "ID_FMP_CLASS_FEATURE_1263", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Healing Spirit"] = new RulesElement({
    name: "Healing Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_854",
    source: "Player's Handbook 2",
    categories: ["Healing Spirit", "ID_FMP_CLASS_FEATURE_854", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3773"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hellfire Action"] = new RulesElement({
    name: "Hellfire Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1186",
    source: "Player's Handbook 2",
    categories: ["Hellfire Action", "ID_FMP_CLASS_FEATURE_1186", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Hellfire Action:When you spend an action point to make an attack, that attack deals 2d6 extra fire damage on a hit.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Heroic Action"] = new RulesElement({
    name: "Heroic Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1151",
    source: "Player's Handbook 2",
    categories: ["Heroic Action", "ID_FMP_CLASS_FEATURE_1151", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Heroic Action:When you spend an action point to take an extra action, you also gain resist 10 to all damage until the end of your next turn. The resistance increases to 20 at 21st level.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Heroic Inspiration"] = new RulesElement({
    name: "Heroic Inspiration",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1294",
    source: "Player's Handbook 2",
    categories: ["Heroic Inspiration", "ID_FMP_CLASS_FEATURE_1294", "30"],
    rules: function(model) {
      model.statadd("ALLY.Action Point", "Heroic Inspiration:Whenever an ally within 5 squares of you spends an action point to make an attack, you and all allies can spend a healing surge as a free action");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hunter Action"] = new RulesElement({
    name: "Hunter Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1173",
    source: "Player's Handbook 2",
    categories: ["Hunter Action", "ID_FMP_CLASS_FEATURE_1173", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Hunter Action:When you spend an action point to make an attack, you can shift a number of squares equal to your Wisdom modifier as a free action before or after the attack.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hunter's Fury"] = new RulesElement({
    name: "Hunter's Fury",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1212",
    source: "Player's Handbook 2",
    categories: ["Hunter's Fury", "ID_FMP_CLASS_FEATURE_1212", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Hunter's Fury:When you spend an action point to make a melee attack, you can shift a number of squares equal to your Strength modifier after the attack.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Immortal Foe"] = new RulesElement({
    name: "Immortal Foe",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1304",
    source: "Player's Handbook 2",
    categories: ["Immortal Foe", "ID_FMP_CLASS_FEATURE_1304", "21"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against immortal creatures */ return model.stat("Wisdom modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Imperious Presence Charisma"] = new RulesElement({
    name: "Imperious Presence Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_IMPERIOUS_PRESENCE_CHARISMA",
    source: "Player's Handbook 2",
    categories: ["Imperious Presence Charisma", "ID_INTERNAL_CLASS_FEATURE_IMPERIOUS_PRESENCE_CHARISMA", "Imperious Presence", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Imperious Presence Intelligence"] = new RulesElement({
    name: "Imperious Presence Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_IMPERIOUS_PRESENCE_INTELLIGENCE",
    source: "Player's Handbook 2",
    categories: ["Imperious Presence Intelligence", "ID_INTERNAL_CLASS_FEATURE_IMPERIOUS_PRESENCE_INTELLIGENCE", "Imperious Presence", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Imperious Presence Wisdom"] = new RulesElement({
    name: "Imperious Presence Wisdom",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_IMPERIOUS_PRESENCE_WISDOM",
    source: "Player's Handbook 2",
    categories: ["Imperious Presence Wisdom", "ID_INTERNAL_CLASS_FEATURE_IMPERIOUS_PRESENCE_WISDOM", "Imperious Presence", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Inspire by Deed"] = new RulesElement({
    name: "Inspire by Deed",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1226",
    source: "Player's Handbook 2",
    categories: ["Inspire by Deed", "ID_FMP_CLASS_FEATURE_1226", "16"],
    rules: function(model) {
      model.statadd("Action Point", "Inspire by Deed:You can spend 2 action points during an encounter, instead of only 1");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Inspire by Example"] = new RulesElement({
    name: "Inspire by Example",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1224",
    source: "Player's Handbook 2",
    categories: ["Inspire by Example", "ID_FMP_CLASS_FEATURE_1224", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Inspire by Example:When you spend an action point to take an extra action, each ally within 5 squares of you gains a bonus to attack rolls and damage rolls equal to your Constitution modifier until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Inspire by Word"] = new RulesElement({
    name: "Inspire by Word",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1225",
    source: "Player's Handbook 2",
    categories: ["Inspire by Word", "ID_FMP_CLASS_FEATURE_1225", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Inspire Ferocity"] = new RulesElement({
    name: "Inspire Ferocity",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1210",
    source: "Player's Handbook 2",
    categories: ["Inspire Ferocity", "ID_FMP_CLASS_FEATURE_1210", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Inspiring Attack Action"] = new RulesElement({
    name: "Inspiring Attack Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1245",
    source: "Player's Handbook 2",
    categories: ["Inspiring Attack Action", "ID_FMP_CLASS_FEATURE_1245", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Inspiring Attack Action:When you spend an action point to make an attack, you and each ally within 5 squares of you gain a bonus to attack rolls against each target of that attack until the start of your next turn. The bonus equals your Intelligence modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Invigorating Action"] = new RulesElement({
    name: "Invigorating Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1286",
    source: "Player's Handbook 2",
    categories: ["Invigorating Action", "ID_FMP_CLASS_FEATURE_1286", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Invigorating Action:When you spend an action point to make an attack, you can spend a healing surge as a free action after the attack.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Iron Boughs"] = new RulesElement({
    name: "Iron Boughs",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1291",
    source: "Player's Handbook 2",
    categories: ["Iron Boughs", "ID_FMP_CLASS_FEATURE_1291", "16"],
    rules: function(model) {
      model.statadd("melee:damage", function() { /* against an enemy marked by you */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Judgment of the Summer Court"] = new RulesElement({
    name: "Judgment of the Summer Court",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1220",
    source: "Player's Handbook 2",
    categories: ["Judgment of the Summer Court", "ID_FMP_CLASS_FEATURE_1220", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Keeper's Action"] = new RulesElement({
    name: "Keeper's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1233",
    source: "Player's Handbook 2",
    categories: ["Keeper's Action", "ID_FMP_CLASS_FEATURE_1233", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Keeper's Action:When you spend an action point to take an extra action, you can also reroll the next attack you make that misses before the end of your turn, and you must use the second roll.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kneel Before the Turathi"] = new RulesElement({
    name: "Kneel Before the Turathi",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1187",
    source: "Player's Handbook 2",
    categories: ["Kneel Before the Turathi", "ID_FMP_CLASS_FEATURE_1187", "16"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Leap to the Fray"] = new RulesElement({
    name: "Leap to the Fray",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1235",
    source: "Player's Handbook 2",
    categories: ["Leap to the Fray", "ID_FMP_CLASS_FEATURE_1235", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Lingering Rebuke"] = new RulesElement({
    name: "Lingering Rebuke",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1248",
    source: "Player's Handbook 2",
    categories: ["Lingering Rebuke", "ID_FMP_CLASS_FEATURE_1248", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Lingering Rebuke:When you spend an action point to take an extra action, each enemy that hits or misses you or an ally within 5 squares of you before the end of your next turn takes 1d6 + your Constitution modifier thunder damage.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Looming Presence"] = new RulesElement({
    name: "Looming Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1261",
    source: "Player's Handbook 2",
    categories: ["Looming Presence", "ID_FMP_CLASS_FEATURE_1261", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Lorekeeper's Cunning"] = new RulesElement({
    name: "Lorekeeper's Cunning",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1302",
    source: "Player's Handbook 2",
    categories: ["Lorekeeper's Cunning", "ID_FMP_CLASS_FEATURE_1302", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Lorekeeper's Revelation"] = new RulesElement({
    name: "Lorekeeper's Revelation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1303",
    source: "Player's Handbook 2",
    categories: ["Lorekeeper's Revelation", "ID_FMP_CLASS_FEATURE_1303", "30"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("utility") && element.hasCategory("Daily Usage")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("utility") && element.hasCategory("Daily Usage")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Lorekeeper's Wisdom"] = new RulesElement({
    name: "Lorekeeper's Wisdom",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1301",
    source: "Player's Handbook 2",
    categories: ["Lorekeeper's Wisdom", "ID_FMP_CLASS_FEATURE_1301", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Majestic Word"] = new RulesElement({
    name: "Majestic Word",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_696",
    source: "Player's Handbook 2",
    categories: ["Majestic Word", "ID_FMP_CLASS_FEATURE_696", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_2339"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Manifest the Divine"] = new RulesElement({
    name: "Manifest the Divine",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1305",
    source: "Player's Handbook 2",
    categories: ["Manifest the Divine", "ID_FMP_CLASS_FEATURE_1305", "24"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_INTERNAL_POLYTHEIST"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Master of Ill Fortune"] = new RulesElement({
    name: "Master of Ill Fortune",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1299",
    source: "Player's Handbook 2",
    categories: ["Master of Ill Fortune", "ID_FMP_CLASS_FEATURE_1299", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Master of Wings"] = new RulesElement({
    name: "Master of Wings",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1237",
    source: "Player's Handbook 2",
    categories: ["Master of Wings", "ID_FMP_CLASS_FEATURE_1237", "11"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against flying creatures */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mountain Crush"] = new RulesElement({
    name: "Mountain Crush",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1184",
    source: "Player's Handbook 2",
    categories: ["Mountain Crush", "ID_FMP_CLASS_FEATURE_1184", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Multiclass Versatility"] = new RulesElement({
    name: "Multiclass Versatility",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_697",
    source: "Player's Handbook 2",
    categories: ["Multiclass Versatility", "ID_FMP_CLASS_FEATURE_697", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_INTERNAL_UNLIMITED_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Murderous Rage Dexterity"] = new RulesElement({
    name: "Murderous Rage Dexterity",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_MURDEROUS_RAGE_DEXTERITY",
    source: "Player's Handbook 2",
    categories: ["Murderous Rage Dexterity", "ID_INTERNAL_CLASS_FEATURE_MURDEROUS_RAGE_DEXTERITY", "Murderous Rage", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Murderous Rage Strength"] = new RulesElement({
    name: "Murderous Rage Strength",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_MURDEROUS_RAGE_STRENGTH",
    source: "Player's Handbook 2",
    categories: ["Murderous Rage Strength", "ID_INTERNAL_CLASS_FEATURE_MURDEROUS_RAGE_STRENGTH", "Murderous Rage", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Nature's Rage Charisma"] = new RulesElement({
    name: "Nature's Rage Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_NATURE'S_RAGE_CHARISMA",
    source: "Player's Handbook 2",
    categories: ["Nature's Rage Charisma", "ID_INTERNAL_CLASS_FEATURE_NATURE'S_RAGE_CHARISMA", "Nature's Rage", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Nature's Rage Intelligence"] = new RulesElement({
    name: "Nature's Rage Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_NATURE'S_RAGE_INTELLIGENCE",
    source: "Player's Handbook 2",
    categories: ["Nature's Rage Intelligence", "ID_INTERNAL_CLASS_FEATURE_NATURE'S_RAGE_INTELLIGENCE", "Nature's Rage", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Nature's Rage Wisdom"] = new RulesElement({
    name: "Nature's Rage Wisdom",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_NATURE'S_RAGE_WISDOM",
    source: "Player's Handbook 2",
    categories: ["Nature's Rage Wisdom", "ID_INTERNAL_CLASS_FEATURE_NATURE'S_RAGE_WISDOM", "Nature's Rage", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Nature's Wrath"] = new RulesElement({
    name: "Nature's Wrath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1282",
    source: "Player's Handbook 2",
    categories: ["Nature's Wrath", "ID_FMP_CLASS_FEATURE_1282", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_5093"]);
      model.grant(elements.id["ID_FMP_POWER_5094"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Oath of Enmity"] = new RulesElement({
    name: "Oath of Enmity",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_787",
    source: "Player's Handbook 2",
    categories: ["Oath of Enmity", "ID_FMP_CLASS_FEATURE_787", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3069"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Pack Tactics"] = new RulesElement({
    name: "Pack Tactics",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1175",
    source: "Player's Handbook 2",
    categories: ["Pack Tactics", "ID_FMP_CLASS_FEATURE_1175", "16"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against an adjacent prone enemy */ return model.stat("Wisdom modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Panther Ancestors"] = new RulesElement({
    name: "Panther Ancestors",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1258",
    source: "Player's Handbook 2",
    categories: ["Panther Ancestors", "ID_FMP_CLASS_FEATURE_1258", "16"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", function() { return model.stat("Wisdom modifier"); });
      model.statadd("Athletics Misc", function() { return model.stat("Wisdom modifier"); });
      model.statadd("Stealth Misc", function() { return model.stat("Wisdom modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Past-Life Acolytes"] = new RulesElement({
    name: "Past-Life Acolytes",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1155",
    source: "Player's Handbook 2",
    categories: ["Past-Life Acolytes", "ID_FMP_CLASS_FEATURE_1155", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Penance"] = new RulesElement({
    name: "Penance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1250",
    source: "Player's Handbook 2",
    categories: ["Penance", "ID_FMP_CLASS_FEATURE_1250", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Primal Aspect"] = new RulesElement({
    name: "Primal Aspect",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_784",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Primal Aspect", "ID_FMP_CLASS_FEATURE_784", "ID_FMP_HYBRID_CLASS_442", "Hybrid Druid", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_784"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Primal Guardian"] = new RulesElement({
    name: "Primal Guardian",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1121",
    source: "Player's Handbook 2",
    categories: ["Primal Guardian", "ID_FMP_CLASS_FEATURE_1121", "ID_FMP_CLASS_FEATURE_784", "Primal Aspect", "1"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return model.stat("Constitution modifier");
        } else return 0;
       }, "Ability");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Primal Predator"] = new RulesElement({
    name: "Primal Predator",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1122",
    source: "Player's Handbook 2",
    categories: ["Primal Predator", "ID_FMP_CLASS_FEATURE_1122", "ID_FMP_CLASS_FEATURE_784", "Primal Aspect", "1"],
    rules: function(model) {
      model.statadd("Speed", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return 1;
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Primal Travel"] = new RulesElement({
    name: "Primal Travel",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1157",
    source: "Player's Handbook 2",
    categories: ["Primal Travel", "ID_FMP_CLASS_FEATURE_1157", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Protector Spirit"] = new RulesElement({
    name: "Protector Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1251",
    source: "Player's Handbook 2",
    categories: ["Protector Spirit", "ID_FMP_CLASS_FEATURE_1251", "ID_FMP_CLASS_FEATURE_855", "Companion Spirit", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_5389"]);
      model.grant(elements.id["ID_FMP_POWER_6521"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rage Strike"] = new RulesElement({
    name: "Rage Strike",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1052",
    source: "Player's Handbook 2",
    categories: ["Rage Strike", "ID_FMP_CLASS_FEATURE_1052", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_4807"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rageblood Vigor"] = new RulesElement({
    name: "Rageblood Vigor",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1061",
    source: "Player's Handbook 2",
    categories: ["Rageblood Vigor", "ID_FMP_CLASS_FEATURE_1061", "ID_FMP_CLASS_FEATURE_1051", "Feral Might", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_4809"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rampage"] = new RulesElement({
    name: "Rampage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1053",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Rampage", "ID_FMP_CLASS_FEATURE_1053", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Reaching Action"] = new RulesElement({
    name: "Reaching Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1289",
    source: "Player's Handbook 2",
    categories: ["Reaching Action", "ID_FMP_CLASS_FEATURE_1289", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Reaching Action:When you spend an action point to take an extra action while you are in a guardian form, your melee reach increases by 1 until the end of your turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Resourceful Action"] = new RulesElement({
    name: "Resourceful Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1171",
    source: "Player's Handbook 2",
    categories: ["Resourceful Action", "ID_FMP_CLASS_FEATURE_1171", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Resourceful Action:You can spend an action point to gain a +5 bonus to an attack roll, a saving throw, or a skill check you have just rolled, instead of taking an extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Resurgent Action"] = new RulesElement({
    name: "Resurgent Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1153",
    source: "Player's Handbook 2",
    categories: ["Resurgent Action", "ID_FMP_CLASS_FEATURE_1153", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Resurgent Action:When you spend an action point to take an extra action, you can regain the use of an encounter attack power that you have already used during this encounter. The power's level must be no higher than your level -4, and you must use the power when taking the extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Righteous Resurgence"] = new RulesElement({
    name: "Righteous Resurgence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1247",
    source: "Player's Handbook 2",
    categories: ["Righteous Resurgence", "ID_FMP_CLASS_FEATURE_1247", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Savage Resilience"] = new RulesElement({
    name: "Savage Resilience",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1162",
    source: "Player's Handbook 2",
    categories: ["Savage Resilience", "ID_FMP_CLASS_FEATURE_1162", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Scales of the Dragon"] = new RulesElement({
    name: "Scales of the Dragon",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1560",
    source: "Player's Handbook 2",
    categories: ["Scales of the Dragon", "ID_FMP_CLASS_FEATURE_1560", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Second Dragon Magic"] = new RulesElement({
    name: "Second Dragon Magic",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_SECOND_DRAGON_MAGIC",
    source: "Player's Handbook 2",
    categories: ["Second Dragon Magic", "ID_INTERNAL_CLASS_FEATURE_SECOND_DRAGON_MAGIC"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Dragon Soul Resist Choice"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Seeker of Foes"] = new RulesElement({
    name: "Seeker of Foes",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1296",
    source: "Player's Handbook 2",
    categories: ["Seeker of Foes", "ID_FMP_CLASS_FEATURE_1296", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Serene Countenance"] = new RulesElement({
    name: "Serene Countenance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1154",
    source: "Player's Handbook 2",
    categories: ["Serene Countenance", "ID_FMP_CLASS_FEATURE_1154", "11"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* to end effects that make you dazed or stunned */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shield of Ill Fortune"] = new RulesElement({
    name: "Shield of Ill Fortune",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1298",
    source: "Player's Handbook 2",
    categories: ["Shield of Ill Fortune", "ID_FMP_CLASS_FEATURE_1298", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Skill Learning"] = new RulesElement({
    name: "Skill Learning",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1163",
    source: "Player's Handbook 2",
    categories: ["Skill Learning", "ID_FMP_CLASS_FEATURE_1163", "11"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_6") || element.hasCategory("ID_FMP_CLASS_9")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Skill Versatility"] = new RulesElement({
    name: "Skill Versatility",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_698",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Skill Versatility", "ID_FMP_CLASS_FEATURE_698", "1"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 1);
      model.statadd("Arcana Misc", 1);
      model.statadd("Athletics Misc", 1);
      model.statadd("Bluff Misc", 1);
      model.statadd("Diplomacy Misc", 1);
      model.statadd("Dungeoneering Misc", 1);
      model.statadd("Endurance Misc", 1);
      model.statadd("Heal Misc", 1);
      model.statadd("History Misc", 1);
      model.statadd("Insight Misc", 1);
      model.statadd("Intimidate Misc", 1);
      model.statadd("Nature Misc", 1);
      model.statadd("Perception Misc", 1);
      model.statadd("Religion Misc", 1);
      model.statadd("Stealth Misc", 1);
      model.statadd("Streetwise Misc", 1);
      model.statadd("Thievery Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sky Hunter's Action"] = new RulesElement({
    name: "Sky Hunter's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1236",
    source: "Player's Handbook 2",
    categories: ["Sky Hunter's Action", "ID_FMP_CLASS_FEATURE_1236", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Sky Hunter's Action:When you spend an action point to take an extra action, you can fly your speed before taking that action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sly Offensive Charisma"] = new RulesElement({
    name: "Sly Offensive Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_SLY_OFFENSIVE_CHARISMA",
    source: "Player's Handbook 2",
    categories: ["Sly Offensive Charisma", "ID_INTERNAL_CLASS_FEATURE_SLY_OFFENSIVE_CHARISMA", "Sly Offensive", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sly Offensive Dexterity"] = new RulesElement({
    name: "Sly Offensive Dexterity",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_SLY_OFFENSIVE_DEXTERITY",
    source: "Player's Handbook 2",
    categories: ["Sly Offensive Dexterity", "ID_INTERNAL_CLASS_FEATURE_SLY_OFFENSIVE_DEXTERITY", "Sly Offensive", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sneaky Gnome"] = new RulesElement({
    name: "Sneaky Gnome",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1166",
    source: "Player's Handbook 2",
    categories: ["Sneaky Gnome", "ID_FMP_CLASS_FEATURE_1166", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Soaring Charge"] = new RulesElement({
    name: "Soaring Charge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1201",
    source: "Player's Handbook 2",
    categories: ["Soaring Charge", "ID_FMP_CLASS_FEATURE_1201", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Song of Rest"] = new RulesElement({
    name: "Song of Rest",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_699",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Song of Rest", "ID_FMP_CLASS_FEATURE_699", "ID_FMP_HYBRID_CLASS_441", "Hybrid Bard", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Speak with Spirits"] = new RulesElement({
    name: "Speak with Spirits",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_857",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Speak with Spirits", "ID_FMP_CLASS_FEATURE_857", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3775"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spell Source"] = new RulesElement({
    name: "Spell Source",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_850",
    source: "Player's Handbook 2",
    categories: ["Spell Source", "ID_FMP_CLASS_FEATURE_850", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_850"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spirit Boon"] = new RulesElement({
    name: "Spirit Boon",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1158",
    source: "Player's Handbook 2",
    categories: ["Spirit Boon", "ID_FMP_CLASS_FEATURE_1158", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Spirit Combatant"] = new RulesElement({
    name: "Spirit Combatant",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1264",
    source: "Player's Handbook 2",
    categories: ["Spirit Combatant", "ID_FMP_CLASS_FEATURE_1264", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Spirit Shaman's Bounty"] = new RulesElement({
    name: "Spirit Shaman's Bounty",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1254",
    source: "Player's Handbook 2",
    categories: ["Spirit Shaman's Bounty", "ID_FMP_CLASS_FEATURE_1254", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Spirit Shaman's Bounty:When you spend an action point to take an extra action, one ally adjacent to your spirit companion can spend a healing surge.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spirit Venom"] = new RulesElement({
    name: "Spirit Venom",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1255",
    source: "Player's Handbook 2",
    categories: ["Spirit Venom", "ID_FMP_CLASS_FEATURE_1255", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Spirit Wind Action"] = new RulesElement({
    name: "Spirit Wind Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1262",
    source: "Player's Handbook 2",
    categories: ["Spirit Wind Action", "ID_FMP_CLASS_FEATURE_1262", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Spirit Wind Action:When you spend an action point to take an extra action, each ally adjacent to your spirit companion can teleport 2 squares as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Split Spell Action"] = new RulesElement({
    name: "Split Spell Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1268",
    source: "Player's Handbook 2",
    categories: ["Split Spell Action", "ID_FMP_CLASS_FEATURE_1268", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Split Spell Action:You can spend an action point to target an additional creature when you use an arcane power that normally targets only one, instead of taking an extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Staggering Fury"] = new RulesElement({
    name: "Staggering Fury",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1209",
    source: "Player's Handbook 2",
    categories: ["Staggering Fury", "ID_FMP_CLASS_FEATURE_1209", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Staggering Fury:When you spend an action point to make a melee attack while you are raging, each enemy that can see you takes a -2 penalty to attack rolls until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stalker Spirit"] = new RulesElement({
    name: "Stalker Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1252",
    source: "Player's Handbook 2",
    categories: ["Stalker Spirit", "ID_FMP_CLASS_FEATURE_1252", "ID_FMP_CLASS_FEATURE_855", "Companion Spirit", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_5388"]);
      model.grant(elements.id["ID_FMP_POWER_5510"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stonebones"] = new RulesElement({
    name: "Stonebones",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1167",
    source: "Player's Handbook 2",
    categories: ["Stonebones", "ID_FMP_CLASS_FEATURE_1167", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Stonehide Action"] = new RulesElement({
    name: "Stonehide Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1182",
    source: "Player's Handbook 2",
    categories: ["Stonehide Action", "ID_FMP_CLASS_FEATURE_1182", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Stonehide Action:When you spend an action point to take an extra action, you also gain a +2 bonus to AC until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Strength of the Earth"] = new RulesElement({
    name: "Strength of the Earth",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1168",
    source: "Player's Handbook 2",
    categories: ["Strength of the Earth", "ID_FMP_CLASS_FEATURE_1168", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Strength of the Earth:When you spend an action point to take an extra action, you can also spend a healing surge.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sworn Action"] = new RulesElement({
    name: "Sworn Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1198",
    source: "Player's Handbook 2",
    categories: ["Sworn Action", "ID_FMP_CLASS_FEATURE_1198", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Sworn Action:When you spend an action point to make an attack, you make two attack rolls against each target of that attack and use either result.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Thaneborn Triumph"] = new RulesElement({
    name: "Thaneborn Triumph",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1499",
    source: "Player's Handbook 2",
    categories: ["Thaneborn Triumph", "ID_FMP_CLASS_FEATURE_1499", "ID_FMP_CLASS_FEATURE_1051", "Feral Might", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_4932"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["The Queen's Grace"] = new RulesElement({
    name: "The Queen's Grace",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1219",
    source: "Player's Handbook 2",
    categories: ["The Queen's Grace", "ID_FMP_CLASS_FEATURE_1219", "11"],
    rules: function(model) {
      model.statadd("ID_FMP_CLASS_104:healing", function() { return model.stat("Charisma modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Thrall of Turath Charisma"] = new RulesElement({
    name: "Thrall of Turath Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_THRALL_OF_TURATH_CHARISMA",
    source: "Player's Handbook 2",
    categories: ["Thrall of Turath Charisma", "ID_INTERNAL_CLASS_FEATURE_THRALL_OF_TURATH_CHARISMA", "Thrall of Turath", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Thrall of Turath Constitution"] = new RulesElement({
    name: "Thrall of Turath Constitution",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_THRALL_OF_TURATH_CONSTITUTION",
    source: "Player's Handbook 2",
    categories: ["Thrall of Turath Constitution", "ID_INTERNAL_CLASS_FEATURE_THRALL_OF_TURATH_CONSTITUTION", "Thrall of Turath", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Thrall of Turath Intelligence"] = new RulesElement({
    name: "Thrall of Turath Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_THRALL_OF_TURATH_INTELLIGENCE",
    source: "Player's Handbook 2",
    categories: ["Thrall of Turath Intelligence", "ID_INTERNAL_CLASS_FEATURE_THRALL_OF_TURATH_INTELLIGENCE", "Thrall of Turath", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Turathi Frenzy"] = new RulesElement({
    name: "Turathi Frenzy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1185",
    source: "Player's Handbook 2",
    categories: ["Turathi Frenzy", "ID_FMP_CLASS_FEATURE_1185", "11"],
    rules: function(model) {
      model.statadd("Turathi Frenzy Bonus", 1);
      model.statadd("Turathi Frenzy Bonus", function() { return model.stat("Charisma modifier"); });
      model.statadd("damage rolls", function() { /* against bloodied enemies */ return model.stat("Turathi Frenzy Bonus"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Twilight Walk"] = new RulesElement({
    name: "Twilight Walk",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1190",
    source: "Player's Handbook 2",
    categories: ["Twilight Walk", "ID_FMP_CLASS_FEATURE_1190", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unbound Assault Dexterity"] = new RulesElement({
    name: "Unbound Assault Dexterity",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_UNBOUND_ASSAULT_DEXTERITY",
    source: "Player's Handbook 2",
    categories: ["Unbound Assault Dexterity", "ID_INTERNAL_CLASS_FEATURE_UNBOUND_ASSAULT_DEXTERITY", "Unbound Assault", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unbound Assault Strength"] = new RulesElement({
    name: "Unbound Assault Strength",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_UNBOUND_ASSAULT_STRENGTH",
    source: "Player's Handbook 2",
    categories: ["Unbound Assault Strength", "ID_INTERNAL_CLASS_FEATURE_UNBOUND_ASSAULT_STRENGTH", "Unbound Assault", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Undying Wind"] = new RulesElement({
    name: "Undying Wind",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1288",
    source: "Player's Handbook 2",
    categories: ["Undying Wind", "ID_FMP_CLASS_FEATURE_1288", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unfeeling Rage"] = new RulesElement({
    name: "Unfeeling Rage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1056",
    source: "Player's Handbook 2",
    categories: ["Unfeeling Rage", "ID_FMP_CLASS_FEATURE_1056", "16"],
    rules: function(model) {
      model.statadd("resist:all", function() { /* while bloodied and raging */ return 5; }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unfettered Power"] = new RulesElement({
    name: "Unfettered Power",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1566",
    source: "Player's Handbook 2",
    categories: ["Unfettered Power", "ID_FMP_CLASS_FEATURE_1566", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unusual Reach"] = new RulesElement({
    name: "Unusual Reach",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1183",
    source: "Player's Handbook 2",
    categories: ["Unusual Reach", "ID_FMP_CLASS_FEATURE_1183", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unveiled Action"] = new RulesElement({
    name: "Unveiled Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1200",
    source: "Player's Handbook 2",
    categories: ["Unveiled Action", "ID_FMP_CLASS_FEATURE_1200", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Unveiled Action:When you spend an action point to take an extra action, you also gain an extra use of one of your Channel Divinity powers during this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Variable Resistance"] = new RulesElement({
    name: "Variable Resistance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1271",
    source: "Player's Handbook 2",
    categories: ["Variable Resistance", "ID_FMP_CLASS_FEATURE_1271", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Acton"] = new RulesElement({
    name: "Versatile Acton",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1216",
    source: "Player's Handbook 2",
    categories: ["Versatile Acton", "ID_FMP_CLASS_FEATURE_1216", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Versatile Acton:When you spend an action point to take an extra action, you regain the use of an encounter utility power or an encounter attack power that you gained through a multiclass feat and that you have used during this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Breath"] = new RulesElement({
    name: "Versatile Breath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1176",
    source: "Player's Handbook 2",
    categories: ["Versatile Breath", "ID_FMP_CLASS_FEATURE_1176", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Vicious Action"] = new RulesElement({
    name: "Vicious Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1501",
    source: "Player's Handbook 2",
    categories: ["Vicious Action", "ID_FMP_CLASS_FEATURE_1501", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Vicious Action:When you spend an action point to make an attack and that attack misses, you can reroll that attack roll but must use the second result.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Virtue of Cunning"] = new RulesElement({
    name: "Virtue of Cunning",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1123",
    source: "Player's Handbook 2",
    categories: ["Virtue of Cunning", "ID_FMP_CLASS_FEATURE_1123", "ID_FMP_CLASS_FEATURE_700", "Bardic Virtue", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Virtue of Valor"] = new RulesElement({
    name: "Virtue of Valor",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1124",
    source: "Player's Handbook 2",
    categories: ["Virtue of Valor", "ID_FMP_CLASS_FEATURE_1124", "ID_FMP_CLASS_FEATURE_700", "Bardic Virtue", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Voice of Thunder"] = new RulesElement({
    name: "Voice of Thunder",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1221",
    source: "Player's Handbook 2",
    categories: ["Voice of Thunder", "ID_FMP_CLASS_FEATURE_1221", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Voice of Thunder:When you spend an action point to take an extra action, the size of any close burst attack you make during that action increases by 1, and the size of any close blast attack you make during that action increases by 2.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Voice to Wake the Dead"] = new RulesElement({
    name: "Voice to Wake the Dead",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1222",
    source: "Player's Handbook 2",
    categories: ["Voice to Wake the Dead", "ID_FMP_CLASS_FEATURE_1222", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Warpath"] = new RulesElement({
    name: "Warpath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1055",
    source: "Player's Handbook 2",
    categories: ["Warpath", "ID_FMP_CLASS_FEATURE_1055", "11"],
    rules: function(model) {
      model.statadd("melee:damage", function() { /* while raging */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wild Magic"] = new RulesElement({
    name: "Wild Magic",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_852",
    source: "Player's Handbook 2",
    categories: ["Wild Magic", "ID_FMP_CLASS_FEATURE_852", "ID_FMP_CLASS_FEATURE_850", "Spell Source", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1564"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1565"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1566"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1567"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wild Push"] = new RulesElement({
    name: "Wild Push",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1208",
    source: "Player's Handbook 2",
    categories: ["Wild Push", "ID_FMP_CLASS_FEATURE_1208", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Wild Resilience"] = new RulesElement({
    name: "Wild Resilience",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1214",
    source: "Player's Handbook 2",
    categories: ["Wild Resilience", "ID_FMP_CLASS_FEATURE_1214", "16"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* while you are raging */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wild Shape"] = new RulesElement({
    name: "Wild Shape",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_766",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Wild Shape", "ID_FMP_CLASS_FEATURE_766", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_5032"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wild Soul"] = new RulesElement({
    name: "Wild Soul",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1567",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Wild Soul", "ID_FMP_CLASS_FEATURE_1567", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_COUNTSASFEATURE_WILD_MAGIC"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wild Surge"] = new RulesElement({
    name: "Wild Surge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1278",
    source: "Player's Handbook 2",
    categories: ["Wild Surge", "ID_FMP_CLASS_FEATURE_1278", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Wildblood"] = new RulesElement({
    name: "Wildblood",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1318",
    source: "Player's Handbook 2",
    categories: ["Wildblood", "ID_FMP_CLASS_FEATURE_1318", "ID_FMP_CLASS_FEATURE_1281", "Guardian Might", "1"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return model.stat("Wisdom modifier");
        } else return 0;
       }, "Ability");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wildrunner's Swiftness"] = new RulesElement({
    name: "Wildrunner's Swiftness",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1213",
    source: "Player's Handbook 2",
    categories: ["Wildrunner's Swiftness", "ID_FMP_CLASS_FEATURE_1213", "11"],
    rules: function(model) {
      model.statadd("Speed", 1);
      model.statadd("Speed", function() { /* while you are raging */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wings of Action"] = new RulesElement({
    name: "Wings of Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1239",
    source: "Player's Handbook 2",
    categories: ["Wings of Action", "ID_FMP_CLASS_FEATURE_1239", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Wings of Action:When you spend an action point to take an extra action, you can fly 8 squares as a free action, and you gain a +2 bonus to AC until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Words of Friendship"] = new RulesElement({
    name: "Words of Friendship",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1120",
    source: "Player's Handbook 2,Player's Handbook 3",
    categories: ["Words of Friendship", "ID_FMP_CLASS_FEATURE_1120", "ID_FMP_HYBRID_CLASS_441", "Hybrid Bard", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_2887"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Worthy Foe"] = new RulesElement({
    name: "Worthy Foe",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1295",
    source: "Player's Handbook 2",
    categories: ["Worthy Foe", "ID_FMP_CLASS_FEATURE_1295", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Writhing Roots"] = new RulesElement({
    name: "Writhing Roots",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1290",
    source: "Player's Handbook 2",
    categories: ["Writhing Roots", "ID_FMP_CLASS_FEATURE_1290", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Zealot's Veil"] = new RulesElement({
    name: "Zealot's Veil",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1205",
    source: "Player's Handbook 2",
    categories: ["Zealot's Veil", "ID_FMP_CLASS_FEATURE_1205", "16"]
  });
  byID[te.id] = te;
  
  
})(this);
