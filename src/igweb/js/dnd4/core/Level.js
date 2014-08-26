define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Level = types['Level'] || (types['Level'] = {});
  te = Level["1"] = new engine.RulesElement({
    name: "1",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_1",
    source: "Core",
    categories: ["1", "ID_INTERNAL_LEVEL_1"],
    rules: function(model) {
      model.alias('Strength', 'str');
      model.alias('Constitution', 'con');
      model.alias('Dexterity', 'dex');
      model.alias('Intelligence', 'int');
      model.alias('Wisdom', 'wis');
      model.alias('Charisma', 'cha');
      model.statadd("Strength modifier", function() { return abilitymod(model.stat("str")); });
      model.statadd("Dexterity modifier", function() { return abilitymod(model.stat("dex")); });
      model.statadd("Constitution modifier", function() { return abilitymod(model.stat("con")); });
      model.statadd("Intelligence modifier", function() { return abilitymod(model.stat("int")); });
      model.statadd("Wisdom modifier", function() { return abilitymod(model.stat("wis")); });
      model.statadd("Charisma modifier", function() { return abilitymod(model.stat("cha")); });
      model.alias('AC', 'Armor Class');
      model.alias('Fortitude Defense', 'Fortitude');
      model.alias('Reflex Defense', 'Reflex');
      model.alias('Will Defense', 'Will');
      model.statadd("Death Saves Count", 3);
      model.statadd("Level", 1);
      model.statadd("Hit Points", function() { return model.stat("Constitution"); }, "Level 1");
      model.statadd("Hit Points", function() { return model.stat("_LEVEL-ONE-HPS"); });
      model.statadd("Healing Surges", function() { return abilitymod(model.stat("Constitution")); }, "Level 1");
      model.statadd("Fortitude Defense", 10);
      model.statadd("Fortitude Defense", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Fortitude Defense", function() { return abilitymod(model.stat("str")); }, "Ability");
      model.statadd("Fortitude Defense", function() { return abilitymod(model.stat("con")); }, "Ability");
      model.statadd("Fortitude Defense", function() { return model.stat("Fortitude Defense Class Bonus"); }, "Class");
      model.statadd("Reflex Defense", 10);
      model.statadd("Reflex Defense", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Reflex Defense", function() { return abilitymod(model.stat("dex")); }, "Ability");
      model.statadd("Reflex Defense", function() { return abilitymod(model.stat("int")); }, "Ability");
      model.statadd("Reflex Defense", function() { return model.stat("Reflex Defense Class Bonus"); }, "Class");
      model.statadd("Will Defense", 10);
      model.statadd("Will Defense", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Will Defense", function() { return abilitymod(model.stat("wis")); }, "Ability");
      model.statadd("Will Defense", function() { return abilitymod(model.stat("cha")); }, "Ability");
      model.statadd("Will Defense", function() { return model.stat("Will Defense Class Bonus"); }, "Class");
      model.statadd("AC", 10);
      model.statadd("AC", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("AC", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return abilitymod(model.stat("dex"));
        } else return 0;
       }, "Ability");
      model.statadd("AC", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return abilitymod(model.stat("int"));
        } else return 0;
       }, "Ability");
      model.statadd("AC", function() { 
        if (model.wearing('Defensive')) {
          return 1;
        } else return 0;
       }, "Defensive");
      model.statadd("Initiative", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Initiative", function() { return abilitymod(model.stat("dex")); }, "Ability");
      model.statadd("Initiative", function() { return model.stat("Initiative Misc"); });
      model.statadd("Ring Slots", 2);
      model.statadd("_BaseActionPoints", 1);
      model.grant(model.elements.id["ID_INTERNAL_LEVEL1RULES_LEVEL1RULES"]);
      model.grant(model.elements.id["ID_INTERNAL_LEVEL1RULES_DETAILSRULES"]);
      model.grant(model.elements.id["ID_INTERNAL_LEVEL1RULES_EXPANSION1"]);
      model.grant(model.elements.id["ID_INTERNAL_LEVEL1RULES_EXPANSION2"]);
      model.grant(model.elements.id["ID_INTERNAL_LEVEL1RULES_EXPANSION3"]);
      model.grant(model.elements.id["ID_INTERNAL_LEVEL1RULES_EXPANSION4"]);
      model.grant(model.elements.id["ID_INTERNAL_LEVEL1RULES_EXPANSION5"]);
      model.select('Race', 1);
      model.select('Class', 1);
      model.select('Feat', 1);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("encounter") && element.hasCategory("1")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("daily") && element.hasCategory("1")); }
      });
      model.select('Deity', 1, {
        optional: true
      });
      model.statadd("XP Needed", 1000);
    }
  });
  byID[te.id] = te;
  
  te = Level["10"] = new engine.RulesElement({
    name: "10",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_10",
    source: "Core",
    categories: ["10", "ID_INTERNAL_LEVEL_10"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.statadd("HALF-LEVEL", 1);
      model.select('Feat', 1);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("utility") && element.hasCategory("10")); }
      });
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 5500);
    }
  });
  byID[te.id] = te;
  
  te = Level["11"] = new engine.RulesElement({
    name: "11",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_11",
    source: "Core",
    categories: ["11", "ID_INTERNAL_LEVEL_11"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.statadd("Strength", 1);
      model.statadd("Constitution", 1);
      model.statadd("Dexterity", 1);
      model.statadd("Intelligence", 1);
      model.statadd("Wisdom", 1);
      model.statadd("Charisma", 1);
      model.grant(model.elements.id["ID_INTERNAL_TIER_PARAGON"]);
      model.select('Feat', 1);
      model.select('Paragon Path', 1, {
        optional: true
      });
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 6000);
    }
  });
  byID[te.id] = te;
  
  te = Level["12"] = new engine.RulesElement({
    name: "12",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_12",
    source: "Core",
    categories: ["12", "ID_INTERNAL_LEVEL_12"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.statadd("HALF-LEVEL", 1);
      model.select('Feat', 1);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 7000);
    }
  });
  byID[te.id] = te;
  
  te = Level["13"] = new engine.RulesElement({
    name: "13",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_13",
    source: "Core",
    categories: ["13", "ID_INTERNAL_LEVEL_13"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 8000);
    }
  });
  byID[te.id] = te;
  
  te = Level["14"] = new engine.RulesElement({
    name: "14",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_14",
    source: "Core",
    categories: ["14", "ID_INTERNAL_LEVEL_14"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.statadd("HALF-LEVEL", 1);
      model.select('Feat', 1);
      model.select('Ability Increase (Level 14)', 2);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 10000);
    }
  });
  byID[te.id] = te;
  
  te = Level["15"] = new engine.RulesElement({
    name: "15",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_15",
    source: "Core",
    categories: ["15", "ID_INTERNAL_LEVEL_15"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 12000);
    }
  });
  byID[te.id] = te;
  
  te = Level["16"] = new engine.RulesElement({
    name: "16",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_16",
    source: "Core",
    categories: ["16", "ID_INTERNAL_LEVEL_16"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.statadd("HALF-LEVEL", 1);
      model.select('Feat', 1);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("utility") && element.hasCategory("16")); }
      });
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 14000);
    }
  });
  byID[te.id] = te;
  
  te = Level["17"] = new engine.RulesElement({
    name: "17",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_17",
    source: "Core",
    categories: ["17", "ID_INTERNAL_LEVEL_17"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 16000);
    }
  });
  byID[te.id] = te;
  
  te = Level["18"] = new engine.RulesElement({
    name: "18",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_18",
    source: "Core",
    categories: ["18", "ID_INTERNAL_LEVEL_18"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.statadd("HALF-LEVEL", 1);
      model.select('Feat', 1);
      model.select('Ability Increase (Level 18)', 2);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 20000);
    }
  });
  byID[te.id] = te;
  
  te = Level["19"] = new engine.RulesElement({
    name: "19",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_19",
    source: "Core",
    categories: ["19", "ID_INTERNAL_LEVEL_19"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 24000);
    }
  });
  byID[te.id] = te;
  
  te = Level["2"] = new engine.RulesElement({
    name: "2",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_2",
    source: "Core",
    categories: ["2", "ID_INTERNAL_LEVEL_2"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.statadd("HALF-LEVEL", 1);
      model.select('Feat', 1);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("utility") && element.hasCategory("2")); }
      });
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 1250);
    }
  });
  byID[te.id] = te;
  
  te = Level["20"] = new engine.RulesElement({
    name: "20",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_20",
    source: "Core",
    categories: ["20", "ID_INTERNAL_LEVEL_20"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.statadd("HALF-LEVEL", 1);
      model.select('Feat', 1);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 32000);
    }
  });
  byID[te.id] = te;
  
  te = Level["21"] = new engine.RulesElement({
    name: "21",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_21",
    source: "Core",
    categories: ["21", "ID_INTERNAL_LEVEL_21"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.statadd("Strength", 1);
      model.statadd("Constitution", 1);
      model.statadd("Dexterity", 1);
      model.statadd("Intelligence", 1);
      model.statadd("Wisdom", 1);
      model.statadd("Charisma", 1);
      model.grant(model.elements.id["ID_INTERNAL_TIER_EPIC"]);
      model.select('Feat', 1);
      model.select('Epic Destiny', 1, {
        optional: true
      });
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 35000);
    }
  });
  byID[te.id] = te;
  
  te = Level["22"] = new engine.RulesElement({
    name: "22",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_22",
    source: "Core",
    categories: ["22", "ID_INTERNAL_LEVEL_22"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.statadd("HALF-LEVEL", 1);
      model.select('Feat', 1);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("utility") && element.hasCategory("22")); }
      });
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 45000);
    }
  });
  byID[te.id] = te;
  
  te = Level["23"] = new engine.RulesElement({
    name: "23",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_23",
    source: "Core",
    categories: ["23", "ID_INTERNAL_LEVEL_23"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 55000);
    }
  });
  byID[te.id] = te;
  
  te = Level["24"] = new engine.RulesElement({
    name: "24",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_24",
    source: "Core",
    categories: ["24", "ID_INTERNAL_LEVEL_24"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.statadd("HALF-LEVEL", 1);
      model.select('Feat', 1);
      model.select('Ability Increase (Level 24)', 2);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 65000);
    }
  });
  byID[te.id] = te;
  
  te = Level["25"] = new engine.RulesElement({
    name: "25",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_25",
    source: "Core",
    categories: ["25", "ID_INTERNAL_LEVEL_25"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 75000);
    }
  });
  byID[te.id] = te;
  
  te = Level["26"] = new engine.RulesElement({
    name: "26",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_26",
    source: "Core",
    categories: ["26", "ID_INTERNAL_LEVEL_26"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.statadd("HALF-LEVEL", 1);
      model.select('Feat', 1);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 100000);
    }
  });
  byID[te.id] = te;
  
  te = Level["27"] = new engine.RulesElement({
    name: "27",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_27",
    source: "Core",
    categories: ["27", "ID_INTERNAL_LEVEL_27"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 125000);
    }
  });
  byID[te.id] = te;
  
  te = Level["28"] = new engine.RulesElement({
    name: "28",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_28",
    source: "Core",
    categories: ["28", "ID_INTERNAL_LEVEL_28"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.statadd("HALF-LEVEL", 1);
      model.select('Feat', 1);
      model.select('Ability Increase (Level 28)', 2);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 150000);
    }
  });
  byID[te.id] = te;
  
  te = Level["29"] = new engine.RulesElement({
    name: "29",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_29",
    source: "Core",
    categories: ["29", "ID_INTERNAL_LEVEL_29"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 175000);
    }
  });
  byID[te.id] = te;
  
  te = Level["3"] = new engine.RulesElement({
    name: "3",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_3",
    source: "Core",
    categories: ["3", "ID_INTERNAL_LEVEL_3"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("encounter") && element.hasCategory("3")); }
      });
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 1500);
    }
  });
  byID[te.id] = te;
  
  te = Level["30"] = new engine.RulesElement({
    name: "30",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_30",
    source: "Core",
    categories: ["30", "ID_INTERNAL_LEVEL_30"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.statadd("HALF-LEVEL", 1);
      model.select('Feat', 1);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 0);
    }
  });
  byID[te.id] = te;
  
  te = Level["4"] = new engine.RulesElement({
    name: "4",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_4",
    source: "Core",
    categories: ["4", "ID_INTERNAL_LEVEL_4"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.statadd("HALF-LEVEL", 1);
      model.select('Feat', 1);
      model.select('Ability Increase (Level 4)', 2);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 1750);
    }
  });
  byID[te.id] = te;
  
  te = Level["5"] = new engine.RulesElement({
    name: "5",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_5",
    source: "Core",
    categories: ["5", "ID_INTERNAL_LEVEL_5"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("daily") && element.hasCategory("5")); }
      });
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 2000);
    }
  });
  byID[te.id] = te;
  
  te = Level["6"] = new engine.RulesElement({
    name: "6",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_6",
    source: "Core",
    categories: ["6", "ID_INTERNAL_LEVEL_6"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.statadd("HALF-LEVEL", 1);
      model.select('Feat', 1);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("utility") && element.hasCategory("6")); }
      });
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 2500);
    }
  });
  byID[te.id] = te;
  
  te = Level["7"] = new engine.RulesElement({
    name: "7",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_7",
    source: "Core",
    categories: ["7", "ID_INTERNAL_LEVEL_7"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("encounter") && element.hasCategory("7")); }
      });
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 3000);
    }
  });
  byID[te.id] = te;
  
  te = Level["8"] = new engine.RulesElement({
    name: "8",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_8",
    source: "Core",
    categories: ["8", "ID_INTERNAL_LEVEL_8"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.statadd("HALF-LEVEL", 1);
      model.select('Feat', 1);
      model.select('Ability Increase (Level 8)', 2);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 3500);
    }
  });
  byID[te.id] = te;
  
  te = Level["9"] = new engine.RulesElement({
    name: "9",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_9",
    source: "Core",
    categories: ["9", "ID_INTERNAL_LEVEL_9"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("_PER-LEVEL-HPS"); });
      model.statadd("Level", 1);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("daily") && element.hasCategory("9")); }
      });
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.statadd("XP Needed", 4000);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
