define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Accurate Thrust"] = new engine.RulesElement({
    name: "Accurate Thrust",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_755",
    source: "Martial Power",
    categories: ["Accurate Thrust", "ID_FMP_CLASS_FEATURE_755", "11"],
    rules: function(model) {
      model.statadd("Spear group:attack", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Agile Charge"] = new engine.RulesElement({
    name: "Agile Charge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_952",
    source: "Martial Power",
    categories: ["Agile Charge", "ID_FMP_CLASS_FEATURE_952", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Archer's Action (Sylvan Archer)"] = new engine.RulesElement({
    name: "Archer's Action (Sylvan Archer)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1854",
    source: "Martial Power",
    categories: ["Archer's Action (Sylvan Archer)", "ID_FMP_CLASS_FEATURE_1854", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Archer's Action (Sylvan Archer):When you spend an action point to take an extra action, your ranged attack rolls take no penalties for cover, superior cover, concealment, or total concealment until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Archetype's Edge"] = new engine.RulesElement({
    name: "Archetype's Edge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1015",
    source: "Martial Power",
    categories: ["Archetype's Edge", "ID_FMP_CLASS_FEATURE_1015", "21"],
    rules: function(model) {
      model.select('Power', 1, "Archetype's Edge", {
        filter: function(model, element) { return (element.hasCategory("encounter") && element.hasCategory("17") && element.hasCategory("martial")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor Supremacy"] = new engine.RulesElement({
    name: "Armor Supremacy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_997",
    source: "Martial Power",
    categories: ["Armor Supremacy", "ID_FMP_CLASS_FEATURE_997", "21"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['heavy'])) {
          return 2;
        } else return 0;
       });
      model.statadd("Armor Penalty", 0, "chain");
      model.statadd("Armor Penalty", 0, "Scale");
      model.statadd("Armor Penalty", 0, "plate");
      model.statadd("Speed", function() { 
        if (model.wearing('Armor', ['heavy'])) {
          return 0;
        } else return 0;
       }, "Armor");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor-Piercing Blade"] = new engine.RulesElement({
    name: "Armor-Piercing Blade",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_961",
    source: "Martial Power",
    categories: ["Armor-Piercing Blade", "ID_FMP_CLASS_FEATURE_961", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Assassin's Advantage"] = new engine.RulesElement({
    name: "Assassin's Advantage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1020",
    source: "Martial Power",
    categories: ["Assassin's Advantage", "ID_FMP_CLASS_FEATURE_1020", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Assault Action"] = new engine.RulesElement({
    name: "Assault Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_995",
    source: "Martial Power",
    categories: ["Assault Action", "ID_FMP_CLASS_FEATURE_995", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Assault Action:When you spend an action point to take an extra action, each ally within 10 squares of you gains a +2 power bonus to attack rolls until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Astral Infusion"] = new engine.RulesElement({
    name: "Astral Infusion",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_931",
    source: "Martial Power",
    categories: ["Astral Infusion", "ID_FMP_CLASS_FEATURE_931", "16"],
    rules: function(model) {
      model.statadd("Death Saving Throws", function() { return abilitymod(model.stat("Wisdom")); });
      model.statadd("Healing Surge Value", function() { return abilitymod(model.stat("Wisdom")); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Banshee's Action"] = new engine.RulesElement({
    name: "Banshee's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_914",
    source: "Martial Power",
    categories: ["Banshee's Action", "ID_FMP_CLASS_FEATURE_914", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Banshee's Action:When you spend an action point to take an extra action while wielding two melee weapons, any enemy adjacent to you takes thunder damage equal to your Wisdom modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Battlerager Vigor"] = new engine.RulesElement({
    name: "Battlerager Vigor",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1028",
    source: "Martial Power",
    categories: ["Battlerager Vigor", "ID_FMP_CLASS_FEATURE_1028", "ID_FMP_CLASS_FEATURE_1064", "Fighter Talents", "1"],
    rules: function(model) {
      model.statadd("Battlerager Vigor", 1);
      model.statadd("melee:damage", function() { 
        if (model.wearing('Armor', ['light'])) {
          /* whenever you have temporary hit points */ return model.stat("Battlerager Vigor");
        } else return 0;
       }, "Battlerager Vigor");
      model.statadd("melee:damage", function() { 
        if (model.wearing('Armor', ['chain'])) {
          /* whenever you have temporary hit points */ return model.stat("Battlerager Vigor");
        } else return 0;
       }, "Battlerager Vigor");
      model.statadd("close:damage", function() { 
        if (model.wearing('Armor', ['light'])) {
          /* whenever you have temporary hit points */ return model.stat("Battlerager Vigor");
        } else return 0;
       }, "Battlerager Vigor");
      model.statadd("close:damage", function() { 
        if (model.wearing('Armor', ['chain'])) {
          /* whenever you have temporary hit points */ return model.stat("Battlerager Vigor");
        } else return 0;
       }, "Battlerager Vigor");
      model.statadd("Battlerager Vigor", function() { 
        if (model.wearing('Weapon', ['axe'])) {
          return 1;
        } else return 0;
       }, "BRV Weapon Bonus");
      model.statadd("Battlerager Vigor", function() { 
        if (model.wearing('Weapon', ['hammer'])) {
          return 1;
        } else return 0;
       }, "BRV Weapon Bonus");
      model.statadd("Battlerager Vigor", function() { 
        if (model.wearing('Weapon', ['pick'])) {
          return 1;
        } else return 0;
       }, "BRV Weapon Bonus");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Beast Mastery"] = new engine.RulesElement({
    name: "Beast Mastery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1030",
    source: "Martial Power",
    categories: ["Beast Mastery", "ID_FMP_CLASS_FEATURE_1030", "ID_FMP_CLASS_FEATURE_321", "Fighting Style", "1"],
    rules: function(model) {
      model.select('Companion', 1, "Beast Mastery");
      model.statadd("Companion.Strength", 1);
      model.statadd("Companion.Constitution", 1);
      model.statadd("Companion.Dexterity", 1);
      model.statadd("Companion.Intelligence", 1);
      model.statadd("Companion.Wisdom", 1);
      model.statadd("Companion.Charisma", 1);
      model.statadd("Companion.Strength", 1);
      model.statadd("Companion.Constitution", 1);
      model.statadd("Companion.Dexterity", 1);
      model.statadd("Companion.Intelligence", 1);
      model.statadd("Companion.Wisdom", 1);
      model.statadd("Companion.Charisma", 1);
      model.select('Companion Ability Increase (Level 4)', 2, "Beast Mastery");
      model.select('Companion Ability Increase (Level 8)', 2, "Beast Mastery");
      model.select('Companion Ability Increase (Level 14)', 2, "Beast Mastery");
      model.select('Companion Ability Increase (Level 18)', 2, "Beast Mastery");
      model.select('Companion Ability Increase (Level 24)', 2, "Beast Mastery");
      model.select('Companion Ability Increase (Level 28)', 2, "Beast Mastery");
      model.statadd("FREEBEE:ID_FMP_RITUAL_187", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bladed Disruption"] = new engine.RulesElement({
    name: "Bladed Disruption",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_915",
    source: "Martial Power",
    categories: ["Bladed Disruption", "ID_FMP_CLASS_FEATURE_915", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Blasphemous Recovery"] = new engine.RulesElement({
    name: "Blasphemous Recovery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1011",
    source: "Martial Power",
    categories: ["Blasphemous Recovery", "ID_FMP_CLASS_FEATURE_1011", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bloodied Edge"] = new engine.RulesElement({
    name: "Bloodied Edge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_888",
    source: "Martial Power",
    categories: ["Bloodied Edge", "ID_FMP_CLASS_FEATURE_888", "11"],
    rules: function(model) {
      model.statadd("weapon damage rolls", function() { /* When you have combat advantage against a bloodied enemy */ return model.stat("Charisma modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bravura Presence"] = new engine.RulesElement({
    name: "Bravura Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1032",
    source: "Martial Power",
    categories: ["Bravura Presence", "ID_FMP_CLASS_FEATURE_1032", "ID_FMP_CLASS_FEATURE_316", "Commanding Presence", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Breath Action"] = new engine.RulesElement({
    name: "Breath Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_899",
    source: "Martial Power",
    categories: ["Breath Action", "ID_FMP_CLASS_FEATURE_899", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Breath Action:When you spend an action point to take an extra action while you are bloodied, you can use your dragon breath racial power as a free action, even if you've already used it during this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bristling Reach"] = new engine.RulesElement({
    name: "Bristling Reach",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_757",
    source: "Martial Power",
    categories: ["Bristling Reach", "ID_FMP_CLASS_FEATURE_757", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Brutal Justice"] = new engine.RulesElement({
    name: "Brutal Justice",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_889",
    source: "Martial Power",
    categories: ["Brutal Justice", "ID_FMP_CLASS_FEATURE_889", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Burning Opportunism"] = new engine.RulesElement({
    name: "Burning Opportunism",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_750",
    source: "Martial Power",
    categories: ["Burning Opportunism", "ID_FMP_CLASS_FEATURE_750", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Camouflaging Command"] = new engine.RulesElement({
    name: "Camouflaging Command",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_972",
    source: "Martial Power",
    categories: ["Camouflaging Command", "ID_FMP_CLASS_FEATURE_972", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Canine's Cunning"] = new engine.RulesElement({
    name: "Canine's Cunning",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_934",
    source: "Martial Power",
    categories: ["Canine's Cunning", "ID_FMP_CLASS_FEATURE_934", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Cat's Quarry"] = new engine.RulesElement({
    name: "Cat's Quarry",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_946",
    source: "Martial Power",
    categories: ["Cat's Quarry", "ID_FMP_CLASS_FEATURE_946", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Chance Retaliation"] = new engine.RulesElement({
    name: "Chance Retaliation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_897",
    source: "Martial Power",
    categories: ["Chance Retaliation", "ID_FMP_CLASS_FEATURE_897", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Chancy Action"] = new engine.RulesElement({
    name: "Chancy Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_732",
    source: "Martial Power",
    categories: ["Chancy Action", "ID_FMP_CLASS_FEATURE_732", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Chancy Action:You can spend an action point to regain the use of the second chance racial power, instead of taking an extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Commando Action"] = new engine.RulesElement({
    name: "Commando Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_971",
    source: "Martial Power",
    categories: ["Commando Action", "ID_FMP_CLASS_FEATURE_971", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Commando Action:When you spend an action point to take an extra action, an enemy of your choice within 10 squares of you grants combat advantage to you until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Communal Aid"] = new engine.RulesElement({
    name: "Communal Aid",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_978",
    source: "Martial Power",
    categories: ["Communal Aid", "ID_FMP_CLASS_FEATURE_978", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Concordant Action"] = new engine.RulesElement({
    name: "Concordant Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_974",
    source: "Martial Power",
    categories: ["Concordant Action", "ID_FMP_CLASS_FEATURE_974", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Concordant Action:When you spend an action point to take an extra action, you can also change your elemental manifestation to any other you are capable of manifesting. When you do, you also regain the use of the power associated with the new manifestation if you have used it during this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Concordant Resistance"] = new engine.RulesElement({
    name: "Concordant Resistance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_976",
    source: "Martial Power",
    categories: ["Concordant Resistance", "ID_FMP_CLASS_FEATURE_976", "16"],
    rules: function(model) {
      model.statadd("resist:cold", 5, "resist");
      model.statadd("resist:fire", 5, "resist");
      model.statadd("resist:lightning", 5, "resist");
      model.statadd("ALLY.resist:cold", function() { /* when the ally is adjacent to you */ return 5; }, "resist");
      model.statadd("ALLY.resist:fire", function() { /* when the ally is adjacent to you */ return 5; }, "resist");
      model.statadd("ALLY.resist:lightning", function() { /* when the ally is adjacent to you */ return 5; }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Cover Action"] = new engine.RulesElement({
    name: "Cover Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_736",
    source: "Martial Power",
    categories: ["Cover Action", "ID_FMP_CLASS_FEATURE_736", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Cover Action:Whenever you spend an action point to take an extra action, you gain concealment at the end of that action. Until the end of your next turn, you have concealment and take no penalty to Stealth checks for moving more than 2 squares or for running.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Covering Action"] = new engine.RulesElement({
    name: "Covering Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_758",
    source: "Martial Power",
    categories: ["Covering Action", "ID_FMP_CLASS_FEATURE_758", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Covering Action:While using a shield, you can spend an action point to gain superior cover against ranged and area attacks until the end of your next turn, instead of gaining an extra action");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Critical Hardening"] = new engine.RulesElement({
    name: "Critical Hardening",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_892",
    source: "Martial Power",
    categories: ["Critical Hardening", "ID_FMP_CLASS_FEATURE_892", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Crossbow Savant"] = new engine.RulesElement({
    name: "Crossbow Savant",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_947",
    source: "Martial Power",
    categories: ["Crossbow Savant", "ID_FMP_CLASS_FEATURE_947", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Cutting Steps"] = new engine.RulesElement({
    name: "Cutting Steps",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_919",
    source: "Martial Power",
    categories: ["Cutting Steps", "ID_FMP_CLASS_FEATURE_919", "16"],
    rules: function(model) {
      model.statadd("two-melee-weapon:damage", 1);
      model.statadd("AC", function() { 
        if (model.dualWielding('', '')) {
          return 1;
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dancing Defense"] = new engine.RulesElement({
    name: "Dancing Defense",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_918",
    source: "Martial Power",
    categories: ["Dancing Defense", "ID_FMP_CLASS_FEATURE_918", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dark Road"] = new engine.RulesElement({
    name: "Dark Road",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1004",
    source: "Martial Power",
    categories: ["Dark Road", "ID_FMP_CLASS_FEATURE_1004", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dastardly Opportunist"] = new engine.RulesElement({
    name: "Dastardly Opportunist",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_964",
    source: "Martial Power",
    categories: ["Dastardly Opportunist", "ID_FMP_CLASS_FEATURE_964", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Deadeye Blade"] = new engine.RulesElement({
    name: "Deadeye Blade",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_959",
    source: "Martial Power",
    categories: ["Deadeye Blade", "ID_FMP_CLASS_FEATURE_959", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Deadly Bluff"] = new engine.RulesElement({
    name: "Deadly Bluff",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_734",
    source: "Martial Power",
    categories: ["Deadly Bluff", "ID_FMP_CLASS_FEATURE_734", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Deadly Soldier"] = new engine.RulesElement({
    name: "Deadly Soldier",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_909",
    source: "Martial Power",
    categories: ["Deadly Soldier", "ID_FMP_CLASS_FEATURE_909", "11"],
    rules: function(model) {
      model.statadd("Off-hand:die", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Death Rites"] = new engine.RulesElement({
    name: "Death Rites",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_722",
    source: "Martial Power",
    categories: ["Death Rites", "ID_FMP_CLASS_FEATURE_722", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_FEAT_159"]);
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_RELIGION"]);
      model.statadd("Death Saving Throws", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Death's Eye"] = new engine.RulesElement({
    name: "Death's Eye",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1019",
    source: "Martial Power",
    categories: ["Death's Eye", "ID_FMP_CLASS_FEATURE_1019", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Defensive Action"] = new engine.RulesElement({
    name: "Defensive Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_745",
    source: "Martial Power",
    categories: ["Defensive Action", "ID_FMP_CLASS_FEATURE_745", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Defensive Action:Whenever you spend an action point to take an extra action, you gain a +2 bonus to your AC and Fortitude until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Deific Agony"] = new engine.RulesElement({
    name: "Deific Agony",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1010",
    source: "Martial Power",
    categories: ["Deific Agony", "ID_FMP_CLASS_FEATURE_1010", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Devoted Protector"] = new engine.RulesElement({
    name: "Devoted Protector",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_902",
    source: "Martial Power",
    categories: ["Devoted Protector", "ID_FMP_CLASS_FEATURE_902", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Double Agent"] = new engine.RulesElement({
    name: "Double Agent",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_735",
    source: "Martial Power",
    categories: ["Double Agent", "ID_FMP_CLASS_FEATURE_735", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dread Sneak Action"] = new engine.RulesElement({
    name: "Dread Sneak Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_957",
    source: "Martial Power",
    categories: ["Dread Sneak Action", "ID_FMP_CLASS_FEATURE_957", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Dread Sneak Action:When you spend an action point to make an attack against a target granting combat advantage to you, you can deal Sneak Attack damage even if you have already dealt Sneak Attack damage during this round.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dreadnought Action"] = new engine.RulesElement({
    name: "Dreadnought Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_890",
    source: "Martial Power",
    categories: ["Dreadnought Action", "ID_FMP_CLASS_FEATURE_890", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Dreadnought Action:When you spend an action point to make an attack, you gain resist 10 to all damage until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dual-Blade Action"] = new engine.RulesElement({
    name: "Dual-Blade Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_917",
    source: "Martial Power",
    categories: ["Dual-Blade Action", "ID_FMP_CLASS_FEATURE_917", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Dual-Blade Action:You can spend an action point to make one melee basic attack with your primary weapon and another one with your offhand weapon, instead of taking an extra action. You gain a bonus to the damage rolls equal to your Wisdom modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dwarven Payback"] = new engine.RulesElement({
    name: "Dwarven Payback",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_982",
    source: "Martial Power",
    categories: ["Dwarven Payback", "ID_FMP_CLASS_FEATURE_982", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Earthfast Recovery"] = new engine.RulesElement({
    name: "Earthfast Recovery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_981",
    source: "Martial Power",
    categories: ["Earthfast Recovery", "ID_FMP_CLASS_FEATURE_981", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Enduring Action"] = new engine.RulesElement({
    name: "Enduring Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_980",
    source: "Martial Power",
    categories: ["Enduring Action", "ID_FMP_CLASS_FEATURE_980", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Enduring Action:When you spend an action point to take an extra action, you and each ally within 5 squares of you can make a saving throw as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Eternal Breath"] = new engine.RulesElement({
    name: "Eternal Breath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_900",
    source: "Martial Power",
    categories: ["Eternal Breath", "ID_FMP_CLASS_FEATURE_900", "16"],
    rules: function(model) {
      model.statadd("dragon breath:damage", "ongoing 5 damage");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Extra Manifestation"] = new engine.RulesElement({
    name: "Extra Manifestation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_975",
    source: "Martial Power",
    categories: ["Extra Manifestation", "ID_FMP_CLASS_FEATURE_975", "11"],
    rules: function(model) {
      model.select('Feat', 1, "Extra Manifestation");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fearsome Partnership"] = new engine.RulesElement({
    name: "Fearsome Partnership",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_920",
    source: "Martial Power",
    categories: ["Fearsome Partnership", "ID_FMP_CLASS_FEATURE_920", "11"],
    rules: function(model) {
      model.statadd("BEAST.damage rolls", function() { /* whil you are within 10 squares of your beast companion */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Felling Action"] = new engine.RulesElement({
    name: "Felling Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_986",
    source: "Martial Power",
    categories: ["Felling Action", "ID_FMP_CLASS_FEATURE_986", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Felling Action:You can spend an action point as a free action to allow an ally who can see and hear you to reroll an attack roll");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Feral Action"] = new engine.RulesElement({
    name: "Feral Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_921",
    source: "Martial Power",
    categories: ["Feral Action", "ID_FMP_CLASS_FEATURE_921", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Feral Action:When you spend an action point to take an extra action, your beast companion also gains a +4 bonus to attack rolls until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fey Tactics"] = new engine.RulesElement({
    name: "Fey Tactics",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_993",
    source: "Martial Power",
    categories: ["Fey Tactics", "ID_FMP_CLASS_FEATURE_993", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["First Cut"] = new engine.RulesElement({
    name: "First Cut",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_731",
    source: "Martial Power",
    categories: ["First Cut", "ID_FMP_CLASS_FEATURE_731", "11"],
    rules: function(model) {
      model.statadd("Sneak Attack", function() { /* When you have combat advantage due to your First Strike class feature */ return model.stat("Sneak Attack Dice"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Flamebrow Revival"] = new engine.RulesElement({
    name: "Flamebrow Revival",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_984",
    source: "Martial Power",
    categories: ["Flamebrow Revival", "ID_FMP_CLASS_FEATURE_984", "11"],
    rules: function(model) {
      model.statadd("Death Saving Throws", function() { return abilitymod(model.stat("Charisma")); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Flying-Blade Action"] = new engine.RulesElement({
    name: "Flying-Blade Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_960",
    source: "Martial Power",
    categories: ["Flying-Blade Action", "ID_FMP_CLASS_FEATURE_960", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Flying-Blade Action:When you spend an action point to take an extra action, you can also make a ranged basic attack with a light blade as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Footwork Action"] = new engine.RulesElement({
    name: "Footwork Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_908",
    source: "Martial Power",
    categories: ["Footwork Action", "ID_FMP_CLASS_FEATURE_908", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Footwork Action:When you spend an action point to take an extra action, you gain a +2 bonus to AC and Reflex until the end of your next turn. If a melee attack misses you while this bonus applies, you can shift 1 square as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Forceful Reach"] = new engine.RulesElement({
    name: "Forceful Reach",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_905",
    source: "Martial Power",
    categories: ["Forceful Reach", "ID_FMP_CLASS_FEATURE_905", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fused Fate"] = new engine.RulesElement({
    name: "Fused Fate",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1001",
    source: "Martial Power",
    categories: ["Fused Fate", "ID_FMP_CLASS_FEATURE_1001", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Giant-Slaying Action"] = new engine.RulesElement({
    name: "Giant-Slaying Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_923",
    source: "Martial Power",
    categories: ["Giant-Slaying Action", "ID_FMP_CLASS_FEATURE_923", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Giant-Slaying Action:When you spend an action point to take an extra action, you gain a +2 bonus to attack rolls and AC until the start of your next turn. Against Large or larger enemies, the bonus to AC is +4.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Gloom Wrath"] = new engine.RulesElement({
    name: "Gloom Wrath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_739",
    source: "Martial Power",
    categories: ["Gloom Wrath", "ID_FMP_CLASS_FEATURE_739", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Godlike Stature"] = new engine.RulesElement({
    name: "Godlike Stature",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1007",
    source: "Martial Power",
    categories: ["Godlike Stature", "ID_FMP_CLASS_FEATURE_1007", "24"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_ONE_SIZE_LARGER"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Great Power"] = new engine.RulesElement({
    name: "Great Power",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1008",
    source: "Martial Power",
    categories: ["Great Power", "ID_FMP_CLASS_FEATURE_1008", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Grim Satisfaction"] = new engine.RulesElement({
    name: "Grim Satisfaction",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_705",
    source: "Martial Power",
    categories: ["Grim Satisfaction", "ID_FMP_CLASS_FEATURE_705", "11"],
    rules: function(model) {
      model.statadd("ALLY.attack rolls", function() { /* against your quarry */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Guildmaster's Action"] = new engine.RulesElement({
    name: "Guildmaster's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_728",
    source: "Martial Power",
    categories: ["Guildmaster's Action", "ID_FMP_CLASS_FEATURE_728", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Guildmaster's Action:When you spend an action point to take an extra action, instead of deducting the action point from your total you can deduct it from the total of any willing ally you can see. Similarly, as long as you are willing and conscious, any ally who can see you can deduct an action point from your total instead of from his or her total when spending an action point to take an extra action. The normal limit of action points spent during an encounter still applies. Whenever you spend an ally's action point to take an extra action, you gain a +2 bonus to attack rolls until the start of your next turn.");
      model.statadd("ALLY.Action Point", "Guildmaster's Action:Whenever you spend an ally's action point to take an extra action, you gain a +2 bonus to attack rolls until the start of your next turn");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hard to Kill"] = new engine.RulesElement({
    name: "Hard to Kill",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_999",
    source: "Martial Power",
    categories: ["Hard to Kill", "ID_FMP_CLASS_FEATURE_999", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Hellfire Caress"] = new engine.RulesElement({
    name: "Hellfire Caress",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_928",
    source: "Martial Power",
    categories: ["Hellfire Caress", "ID_FMP_CLASS_FEATURE_928", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Hellfire Retribution"] = new engine.RulesElement({
    name: "Hellfire Retribution",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_749",
    source: "Martial Power",
    categories: ["Hellfire Retribution", "ID_FMP_CLASS_FEATURE_749", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Hell's Shadows"] = new engine.RulesElement({
    name: "Hell's Shadows",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_738",
    source: "Martial Power",
    categories: ["Hell's Shadows", "ID_FMP_CLASS_FEATURE_738", "11"],
    rules: function(model) {
      model.statadd("AC", function() { /* when you have concealment or total concealment */ return 1; });
      model.statadd("Will Defense", function() { /* when you have concealment or total concealment */ return 1; });
      model.statadd("Fortitude Defense", function() { /* when you have concealment or total concealment */ return 1; });
      model.statadd("Reflex Defense", function() { /* when you have concealment or total concealment */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hellstalker Action"] = new engine.RulesElement({
    name: "Hellstalker Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_737",
    source: "Martial Power",
    categories: ["Hellstalker Action", "ID_FMP_CLASS_FEATURE_737", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Hellstalker Action:You can spend an action point to gain concealment until the end of your next turn, instead of taking an extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hunter's Feast"] = new engine.RulesElement({
    name: "Hunter's Feast",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_926",
    source: "Martial Power",
    categories: ["Hunter's Feast", "ID_FMP_CLASS_FEATURE_926", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Immolation Action"] = new engine.RulesElement({
    name: "Immolation Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_927",
    source: "Martial Power",
    categories: ["Immolation Action", "ID_FMP_CLASS_FEATURE_927", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Immolation Action:You can spend an action point to deal fire damage to your quarry equal to your Hunter's Quarry damage, instead of taking an extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Impending Slaughter"] = new engine.RulesElement({
    name: "Impending Slaughter",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_894",
    source: "Martial Power",
    categories: ["Impending Slaughter", "ID_FMP_CLASS_FEATURE_894", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Improved Dragonborn Fury"] = new engine.RulesElement({
    name: "Improved Dragonborn Fury",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1500",
    source: "Martial Power",
    categories: ["Improved Dragonborn Fury", "ID_FMP_CLASS_FEATURE_1500", "11"],
    rules: function(model) {
      model.statadd("Dragonborn Fury Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Incorrigible Action"] = new engine.RulesElement({
    name: "Incorrigible Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_962",
    source: "Martial Power",
    categories: ["Incorrigible Action", "ID_FMP_CLASS_FEATURE_962", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Incorrigible Action:Whenever you spend an action point to take an extra action, enemies take a -2 penalty to attack rolls against you  until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Infernal Action (Tiefling Warfiend)"] = new engine.RulesElement({
    name: "Infernal Action (Tiefling Warfiend)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2695",
    source: "Martial Power",
    categories: ["Infernal Action (Tiefling Warfiend)", "ID_FMP_CLASS_FEATURE_2695", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Infernal Action (Tiefling Warfiend):When you spend an action point to take an extra action, you regain the use of the infernal wrath racial power if you have used it during this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Infernal Pincer"] = new engine.RulesElement({
    name: "Infernal Pincer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_987",
    source: "Martial Power",
    categories: ["Infernal Pincer", "ID_FMP_CLASS_FEATURE_987", "11"],
    rules: function(model) {
      model.statadd("Infernal Pincer", function() { return model.stat("Intelligence modifier"); }, "Infernal Pincer");
      model.statadd("Infernal Pincer", function() { return model.stat("Charisma modifier"); }, "Infernal Pincer");
      model.statadd("melee:damage", function() { /* when you and an ally are both flanking an enemy */ return model.stat("Infernal Pincer"); });
      model.statadd("ALLY.melee:damage", function() { /* when you and an ally are both flanking an enemy */ return model.stat("Infernal Pincer"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Intuitive Hunter"] = new engine.RulesElement({
    name: "Intuitive Hunter",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_943",
    source: "Martial Power",
    categories: ["Intuitive Hunter", "ID_FMP_CLASS_FEATURE_943", "16"],
    rules: function(model) {
      model.statadd("Hunter's Quarry:ranged", function() { return abilitymod(model.stat("Wisdom")); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Knight's Focus"] = new engine.RulesElement({
    name: "Knight's Focus",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_903",
    source: "Martial Power",
    categories: ["Knight's Focus", "ID_FMP_CLASS_FEATURE_903", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Kord's Focus"] = new engine.RulesElement({
    name: "Kord's Focus",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_970",
    source: "Martial Power",
    categories: ["Kord's Focus", "ID_FMP_CLASS_FEATURE_970", "16"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Legendary Tactical Action"] = new engine.RulesElement({
    name: "Legendary Tactical Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1013",
    source: "Martial Power",
    categories: ["Legendary Tactical Action", "ID_FMP_CLASS_FEATURE_1013", "24"],
    rules: function(model) {
      model.statadd("ALLY.Action Point", "Legendary Tactical Action:Any ally can spend an action point possessed by you or by any other ally whom he or she can see once per encounter. Spending this action point doesn't count against the ally's limit of spending 1 action point per encounter");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Long Walk Back"] = new engine.RulesElement({
    name: "Long Walk Back",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1005",
    source: "Martial Power",
    categories: ["Long Walk Back", "ID_FMP_CLASS_FEATURE_1005", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Longarm Action"] = new engine.RulesElement({
    name: "Longarm Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_756",
    source: "Martial Power",
    categories: ["Longarm Action", "ID_FMP_CLASS_FEATURE_756", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Longarm Action:When you spend an action point to take an extra action, you increase your melee reach by 1 square when wielding a spear until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Longarm Grasp"] = new engine.RulesElement({
    name: "Longarm Grasp",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_906",
    source: "Martial Power",
    categories: ["Longarm Grasp", "ID_FMP_CLASS_FEATURE_906", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Lunging Action"] = new engine.RulesElement({
    name: "Lunging Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_904",
    source: "Martial Power",
    categories: ["Lunging Action", "ID_FMP_CLASS_FEATURE_904", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Lunging Action:You can spend an action point to increase the reach of your reach weapons by 1 square until the start of your next turn, instead of taking an extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Marauding Fury"] = new engine.RulesElement({
    name: "Marauding Fury",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_513",
    source: "Martial Power",
    categories: ["Marauding Fury", "ID_FMP_CLASS_FEATURE_513", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Mighty Action"] = new engine.RulesElement({
    name: "Mighty Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_968",
    source: "Martial Power",
    categories: ["Mighty Action", "ID_FMP_CLASS_FEATURE_968", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Mighty Action:When you spend an action point to take an extra action, any ally who can see and hear you gains a +1 bonus to attack rolls and damage rolls until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mobility Tactics"] = new engine.RulesElement({
    name: "Mobility Tactics",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_973",
    source: "Martial Power",
    categories: ["Mobility Tactics", "ID_FMP_CLASS_FEATURE_973", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Most Dangerous Prey"] = new engine.RulesElement({
    name: "Most Dangerous Prey",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_936",
    source: "Martial Power",
    categories: ["Most Dangerous Prey", "ID_FMP_CLASS_FEATURE_936", "11"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against any humanoid target designated as your quarry */ return abilitymod(model.stat("Wisdom")); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Move the Battle"] = new engine.RulesElement({
    name: "Move the Battle",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_898",
    source: "Martial Power",
    categories: ["Move the Battle", "ID_FMP_CLASS_FEATURE_898", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Mythic Inspiration"] = new engine.RulesElement({
    name: "Mythic Inspiration",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1012",
    source: "Martial Power",
    categories: ["Mythic Inspiration", "ID_FMP_CLASS_FEATURE_1012", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Neck Seeker"] = new engine.RulesElement({
    name: "Neck Seeker",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_944",
    source: "Martial Power",
    categories: ["Neck Seeker", "ID_FMP_CLASS_FEATURE_944", "11"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against any bloodied enemy designated as your quarry */ return 1; });
      model.statadd("BEAST.attack rolls", function() { /* against any bloodied enemy designated as your quarry */ return 1; });
      model.statadd("damage rolls", function() { /* against any bloodied enemy designated as your quarry */ return 1; });
      model.statadd("BEAST.damage rolls", function() { /* against any bloodied enemy designated as your quarry */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["No Respite"] = new engine.RulesElement({
    name: "No Respite",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_953",
    source: "Martial Power",
    categories: ["No Respite", "ID_FMP_CLASS_FEATURE_953", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Not My Destiny"] = new engine.RulesElement({
    name: "Not My Destiny",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1003",
    source: "Martial Power",
    categories: ["Not My Destiny", "ID_FMP_CLASS_FEATURE_1003", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Ongoing Punishment"] = new engine.RulesElement({
    name: "Ongoing Punishment",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_937",
    source: "Martial Power",
    categories: ["Ongoing Punishment", "ID_FMP_CLASS_FEATURE_937", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Open Quarry"] = new engine.RulesElement({
    name: "Open Quarry",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_707",
    source: "Martial Power",
    categories: ["Open Quarry", "ID_FMP_CLASS_FEATURE_707", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Opportunity Fire"] = new engine.RulesElement({
    name: "Opportunity Fire",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_939",
    source: "Martial Power",
    categories: ["Opportunity Fire", "ID_FMP_CLASS_FEATURE_939", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Organizing Action"] = new engine.RulesElement({
    name: "Organizing Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_977",
    source: "Martial Power",
    categories: ["Organizing Action", "ID_FMP_CLASS_FEATURE_977", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Organizing Action:You can spend an action point to grant each ally who can see and hear you an extra move action on his or her next turn, instead of taking an extra action yourself.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Pack Chase"] = new engine.RulesElement({
    name: "Pack Chase",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_933",
    source: "Martial Power",
    categories: ["Pack Chase", "ID_FMP_CLASS_FEATURE_933", "11"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* if you and your beast companion have moved at least 2 squares during your turn */ return 1; });
      model.statadd("BEAST.attack rolls", function() { /* if you and your beast companion have moved at least 2 squares during your turn */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Peerless Predator"] = new engine.RulesElement({
    name: "Peerless Predator",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1009",
    source: "Martial Power",
    categories: ["Peerless Predator", "ID_FMP_CLASS_FEATURE_1009", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Perfect Warrior"] = new engine.RulesElement({
    name: "Perfect Warrior",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1018",
    source: "Martial Power",
    categories: ["Perfect Warrior", "ID_FMP_CLASS_FEATURE_1018", "30"],
    rules: function(model) {
      model.select('Power', 1, "Perfect Warrior", {
        filter: function(model, element) { return (element.hasCategory("martial") && (element.hasCategory("utility") || element.hasCategory("encounter"))); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Pierce the Weakness"] = new engine.RulesElement({
    name: "Pierce the Weakness",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1021",
    source: "Martial Power",
    categories: ["Pierce the Weakness", "ID_FMP_CLASS_FEATURE_1021", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Platinum Scales"] = new engine.RulesElement({
    name: "Platinum Scales",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_989",
    source: "Martial Power",
    categories: ["Platinum Scales", "ID_FMP_CLASS_FEATURE_989", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_FEAT_115"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Pliable Command"] = new engine.RulesElement({
    name: "Pliable Command",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_988",
    source: "Martial Power",
    categories: ["Pliable Command", "ID_FMP_CLASS_FEATURE_988", "16"],
    rules: function(model) {
      model.select('class feature', 1, "Pliable Command", {
        filter: function(model, element) { return element.hasCategory("Commanding Presence"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Promise of Pain"] = new engine.RulesElement({
    name: "Promise of Pain",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_965",
    source: "Martial Power",
    categories: ["Promise of Pain", "ID_FMP_CLASS_FEATURE_965", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Promise of Pain:When you spend an action point to take an extra action, attacks you make until the start of your next turn gain the rattling keyword.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Protector's Action (Knight Protector)"] = new engine.RulesElement({
    name: "Protector's Action (Knight Protector)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_901",
    source: "Martial Power",
    categories: ["Protector's Action (Knight Protector)", "ID_FMP_CLASS_FEATURE_901", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Protector's Action (Knight Protector):When you spend an action point to take an extra action, one ally within 5 squares of you gains a +4 bonus to AC until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Protector's Action (Platinum Warlord)"] = new engine.RulesElement({
    name: "Protector's Action (Platinum Warlord)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2093",
    source: "Martial Power",
    categories: ["Protector's Action (Platinum Warlord)", "ID_FMP_CLASS_FEATURE_2093", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Protector's Action (Platinum Warlord):When you spend an action point to take an extra action, each ally who can see and hear you gains a +1 bonus to all defenses until the start of your next turn.  If that ally is bloodied, the bonus is +2 instead.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Prowling Action"] = new engine.RulesElement({
    name: "Prowling Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_945",
    source: "Martial Power",
    categories: ["Prowling Action", "ID_FMP_CLASS_FEATURE_945", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Prowling Action:When you spend an action point to take an extra action, you also gain concealment until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Quicker Death"] = new engine.RulesElement({
    name: "Quicker Death",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_910",
    source: "Martial Power",
    categories: ["Quicker Death", "ID_FMP_CLASS_FEATURE_910", "16"],
    rules: function(model) {
      model.statadd("melee:damage", function() { /* once per round when you have combat advantage against the target */ return model.stat("Dexterity modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Radiant Striker"] = new engine.RulesElement({
    name: "Radiant Striker",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_723",
    source: "Martial Power",
    categories: ["Radiant Striker", "ID_FMP_CLASS_FEATURE_723", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Rapid-Fire Action"] = new engine.RulesElement({
    name: "Rapid-Fire Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_938",
    source: "Martial Power",
    categories: ["Rapid-Fire Action", "ID_FMP_CLASS_FEATURE_938", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Rapid-Fire Action:When you spend an action point to take an extra action, you can make a ranged basic attack with a bow or a crossbow as a free action before or after taking the extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ravaging Action"] = new engine.RulesElement({
    name: "Ravaging Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_454",
    source: "Martial Power",
    categories: ["Ravaging Action", "ID_FMP_CLASS_FEATURE_454", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Ravaging Action:You can spend an action point to make a melee basic attack against each adjacent enemy, instead of taking an extra action. You gain a bonus to each damage roll equal to your Constitution modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Reaper's Action"] = new engine.RulesElement({
    name: "Reaper's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_893",
    source: "Martial Power",
    categories: ["Reaper's Action", "ID_FMP_CLASS_FEATURE_893", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Reaper's Action:When you spend an action point to make an attack with a two-handed weapon, each enemy adjacent to you takes damage equal to your Strength modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Reaping Cleave"] = new engine.RulesElement({
    name: "Reaping Cleave",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_895",
    source: "Martial Power",
    categories: ["Reaping Cleave", "ID_FMP_CLASS_FEATURE_895", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Reinforcing Action"] = new engine.RulesElement({
    name: "Reinforcing Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_706",
    source: "Martial Power",
    categories: ["Reinforcing Action", "ID_FMP_CLASS_FEATURE_706", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Reinforcing Action:When you spend an action point to take an extra action, each ally who can see and hear you gains a +4 bonus to his or her lowest defense until the start of your next turn. If multiple defenses are tied for lowest, the ally chooses which one gains the bonus.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Relentless Action"] = new engine.RulesElement({
    name: "Relentless Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_983",
    source: "Martial Power",
    categories: ["Relentless Action", "ID_FMP_CLASS_FEATURE_983", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Relentless Action:When you spend an action point to take an extra action, you can use your Bravura Presence class feature as if you were your own ally.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Reliable Warrior"] = new engine.RulesElement({
    name: "Reliable Warrior",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1016",
    source: "Martial Power",
    categories: ["Reliable Warrior", "ID_FMP_CLASS_FEATURE_1016", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Resourceful Presence"] = new engine.RulesElement({
    name: "Resourceful Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1033",
    source: "Martial Power",
    categories: ["Resourceful Presence", "ID_FMP_CLASS_FEATURE_1033", "ID_FMP_CLASS_FEATURE_316", "Commanding Presence", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Righteous Inspiration"] = new engine.RulesElement({
    name: "Righteous Inspiration",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_990",
    source: "Martial Power",
    categories: ["Righteous Inspiration", "ID_FMP_CLASS_FEATURE_990", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Roaring Recovery"] = new engine.RulesElement({
    name: "Roaring Recovery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_985",
    source: "Martial Power",
    categories: ["Roaring Recovery", "ID_FMP_CLASS_FEATURE_985", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Roots of the Earth"] = new engine.RulesElement({
    name: "Roots of the Earth",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_744",
    source: "Martial Power",
    categories: ["Roots of the Earth", "ID_FMP_CLASS_FEATURE_744", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Runner's Action"] = new engine.RulesElement({
    name: "Runner's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_932",
    source: "Martial Power",
    categories: ["Runner's Action", "ID_FMP_CLASS_FEATURE_932", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Runner's Action:When you spend an action point to take an extra action, you can shift half your speed as a free action before or after taking the extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ruthless Action"] = new engine.RulesElement({
    name: "Ruthless Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_935",
    source: "Martial Power",
    categories: ["Ruthless Action", "ID_FMP_CLASS_FEATURE_935", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Ruthless Action:You can spend an action point to reroll any attack roll against a humanoid target designated as your quarry, instead of taking an extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ruthless Ruffian"] = new engine.RulesElement({
    name: "Ruthless Ruffian",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1031",
    source: "Martial Power",
    categories: ["Ruthless Ruffian", "ID_FMP_CLASS_FEATURE_1031", "ID_FMP_CLASS_FEATURE_547", "Rogue Tactics", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLUB)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MACE)"]);
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Club");
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Mace");
      model.statadd("Sneak Attack Weapons", "Club");
      model.statadd("Sneak Attack Weapons", "Mace");
      model.statadd("club,rattling:damage", function() { return model.stat("Strength modifier"); }, "Ruthless Ruffian");
      model.statadd("mace,rattling:damage", function() { return model.stat("Strength modifier"); }, "Ruthless Ruffian");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Second Step"] = new engine.RulesElement({
    name: "Second Step",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_991",
    source: "Martial Power",
    categories: ["Second Step", "ID_FMP_CLASS_FEATURE_991", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Second Step:When you spend an action point to take an extra action, you regain the use of your fey step racial power if you have used it during this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Seeking Arrow"] = new engine.RulesElement({
    name: "Seeking Arrow",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_940",
    source: "Martial Power",
    categories: ["Seeking Arrow", "ID_FMP_CLASS_FEATURE_940", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Shadowfell Sight"] = new engine.RulesElement({
    name: "Shadowfell Sight",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_930",
    source: "Martial Power",
    categories: ["Shadowfell Sight", "ID_FMP_CLASS_FEATURE_930", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_VISION_DARKVISION"]);
      model.statadd("Perception Misc", function() { /* if you are in the Shadowfell */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shared Life"] = new engine.RulesElement({
    name: "Shared Life",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1002",
    source: "Martial Power",
    categories: ["Shared Life", "ID_FMP_CLASS_FEATURE_1002", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Shield Bearer's Payback"] = new engine.RulesElement({
    name: "Shield Bearer's Payback",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_759",
    source: "Martial Power",
    categories: ["Shield Bearer's Payback", "ID_FMP_CLASS_FEATURE_759", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Shielded Stamina"] = new engine.RulesElement({
    name: "Shielded Stamina",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_760",
    source: "Martial Power",
    categories: ["Shielded Stamina", "ID_FMP_CLASS_FEATURE_760", "16"],
    rules: function(model) {
      model.statadd("Fortitude Defense", function() { return model.stat("Shield Bonus"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shifty Action"] = new engine.RulesElement({
    name: "Shifty Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_896",
    source: "Martial Power",
    categories: ["Shifty Action", "ID_FMP_CLASS_FEATURE_896", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Shifty Action:You can spend an action point to shift a number of squares equal to your Dexterity modifier, instead of taking an extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shock and Awe"] = new engine.RulesElement({
    name: "Shock and Awe",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1026",
    source: "Martial Power",
    categories: ["Shock and Awe", "ID_FMP_CLASS_FEATURE_1026", "24"],
    rules: function(model) {
      model.statadd("Action Point", "Shock and Awe:Whenever you spend an action point to take an extra action, one ally within 5 squares of you can also take an extra action on his or her next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shrieking Blades"] = new engine.RulesElement({
    name: "Shrieking Blades",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_916",
    source: "Martial Power",
    categories: ["Shrieking Blades", "ID_FMP_CLASS_FEATURE_916", "16"],
    rules: function(model) {
      model.statadd("two-melee-weapon:damage", function() { return model.stat("Wisdom modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sinister Presence"] = new engine.RulesElement({
    name: "Sinister Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_958",
    source: "Martial Power",
    categories: ["Sinister Presence", "ID_FMP_CLASS_FEATURE_958", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Slayer's Action"] = new engine.RulesElement({
    name: "Slayer's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_887",
    source: "Martial Power",
    categories: ["Slayer's Action", "ID_FMP_CLASS_FEATURE_887", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Slayer's Action:When you spend an action point to take an extra action, you gain combat advantage against an enemy marked by you until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Slaying Action - Death Dealer"] = new engine.RulesElement({
    name: "Slaying Action - Death Dealer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_954",
    source: "Martial Power",
    categories: ["Slaying Action - Death Dealer", "ID_FMP_CLASS_FEATURE_954", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Slaying Action - Death Dealer:When you spend an action point to take an extra action, you gain a +2 bonus to each damage die until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Slaying Action - Raven Herald"] = new engine.RulesElement({
    name: "Slaying Action - Raven Herald",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1880",
    source: "Martial Power",
    categories: ["Slaying Action - Raven Herald", "ID_FMP_CLASS_FEATURE_1880", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Slaying Action - Raven Herald:When you spend an action point to make a melee basic attack against an adjacent enemy that is bloodied or has the undead keyword, you gain a +2 bonus to the attack roll.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Small Targets"] = new engine.RulesElement({
    name: "Small Targets",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_925",
    source: "Martial Power",
    categories: ["Small Targets", "ID_FMP_CLASS_FEATURE_925", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sniper Action"] = new engine.RulesElement({
    name: "Sniper Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_948",
    source: "Martial Power",
    categories: ["Sniper Action", "ID_FMP_CLASS_FEATURE_948", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Sniper Action:When you spend an action point to make a ranged basic attack and you have combat advantage against the target of the attack, you can add your Sneak Attack damage even if you have already dealt Sneak Attack damage during this round. If the attack hits, you can shift 1 square.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Solidarity's Virtue"] = new engine.RulesElement({
    name: "Solidarity's Virtue",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_979",
    source: "Martial Power",
    categories: ["Solidarity's Virtue", "ID_FMP_CLASS_FEATURE_979", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Spider Assassin"] = new engine.RulesElement({
    name: "Spider Assassin",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_956",
    source: "Martial Power",
    categories: ["Spider Assassin", "ID_FMP_CLASS_FEATURE_956", "11"],
    rules: function(model) {
      model.statadd("Sneak Attack Dice", function() { /* against a target that could not see you at the start of your turn */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spiral Timing"] = new engine.RulesElement({
    name: "Spiral Timing",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_992",
    source: "Martial Power",
    categories: ["Spiral Timing", "ID_FMP_CLASS_FEATURE_992", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Spirit Link"] = new engine.RulesElement({
    name: "Spirit Link",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_922",
    source: "Martial Power",
    categories: ["Spirit Link", "ID_FMP_CLASS_FEATURE_922", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Spontaneous Resurrection"] = new engine.RulesElement({
    name: "Spontaneous Resurrection",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1024",
    source: "Martial Power",
    categories: ["Spontaneous Resurrection", "ID_FMP_CLASS_FEATURE_1024", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Stalwart Defender"] = new engine.RulesElement({
    name: "Stalwart Defender",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_743",
    source: "Martial Power",
    categories: ["Stalwart Defender", "ID_FMP_CLASS_FEATURE_743", "11"],
    rules: function(model) {
      model.statadd("AC", function() { /* Whenever you are adjacent to at least one ally */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Strive to Slay"] = new engine.RulesElement({
    name: "Strive to Slay",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_907",
    source: "Martial Power",
    categories: ["Strive to Slay", "ID_FMP_CLASS_FEATURE_907", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Strong-Arm Mark"] = new engine.RulesElement({
    name: "Strong-Arm Mark",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_967",
    source: "Martial Power",
    categories: ["Strong-Arm Mark", "ID_FMP_CLASS_FEATURE_967", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sylvan Senses"] = new engine.RulesElement({
    name: "Sylvan Senses",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_942",
    source: "Martial Power",
    categories: ["Sylvan Senses", "ID_FMP_CLASS_FEATURE_942", "11"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Tactical Awareness"] = new engine.RulesElement({
    name: "Tactical Awareness",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1025",
    source: "Martial Power",
    categories: ["Tactical Awareness", "ID_FMP_CLASS_FEATURE_1025", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Tactical Genius"] = new engine.RulesElement({
    name: "Tactical Genius",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1027",
    source: "Martial Power",
    categories: ["Tactical Genius", "ID_FMP_CLASS_FEATURE_1027", "30"],
    rules: function(model) {
      model.statadd("Action Point", "Tactical Genius:During an encounter, you can spend as many of your action points as you want");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Tempest Technique"] = new engine.RulesElement({
    name: "Tempest Technique",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1029",
    source: "Martial Power",
    categories: ["Tempest Technique", "ID_FMP_CLASS_FEATURE_1029", "ID_FMP_CLASS_FEATURE_1064", "Fighter Talents", "1"],
    rules: function(model) {
      model.statadd("two-melee-offhand:attack", 1);
      model.statadd("two-melee-offhand-close:attack", 1);
      model.grant(model.elements.id["ID_FMP_FEAT_172"]);
      model.statadd("Tempest Technique", function() { 
        if (model.wearing('Armor', ['light'])) {
          return 1;
        } else return 0;
       }, "Tempest Technique");
      model.statadd("Tempest Technique", function() { 
        if (model.wearing('Armor', ['chain'])) {
          return 1;
        } else return 0;
       }, "Tempest Technique");
      model.statadd("Tempest Technique offhand", function() { 
        if (model.wearing('Armor', ['light'])) {
          return 1;
        } else return 0;
       }, "Tempest Technique offhand");
      model.statadd("Tempest Technique offhand", function() { 
        if (model.wearing('Armor', ['chain'])) {
          return 1;
        } else return 0;
       }, "Tempest Technique offhand");
      model.statadd("two-melee-weapon:damage", function() { return model.stat("Tempest Technique"); });
      model.statadd("two-melee-weapon-close:damage", function() { return model.stat("Tempest Technique"); });
      model.statadd("two-melee-offhand:damage", function() { return model.stat("Tempest Technique Offhand"); });
      model.statadd("two-melee-offhand-close:damage", function() { return model.stat("Tempest Technique Offhand"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Tempestuous Inspiration"] = new engine.RulesElement({
    name: "Tempestuous Inspiration",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_969",
    source: "Martial Power",
    categories: ["Tempestuous Inspiration", "ID_FMP_CLASS_FEATURE_969", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Thick as Thieves"] = new engine.RulesElement({
    name: "Thick as Thieves",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_730",
    source: "Martial Power",
    categories: ["Thick as Thieves", "ID_FMP_CLASS_FEATURE_730", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Thieving Crew"] = new engine.RulesElement({
    name: "Thieving Crew",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_729",
    source: "Martial Power",
    categories: ["Thieving Crew", "ID_FMP_CLASS_FEATURE_729", "11"],
    rules: function(model) {
      model.statadd("ALLY.Stealth misc", function() { /* within 5 squares */ return 2; });
      model.statadd("ALLY.Thievery misc", function() { /* within 5 squares */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Through the Fingers"] = new engine.RulesElement({
    name: "Through the Fingers",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_924",
    source: "Martial Power",
    categories: ["Through the Fingers", "ID_FMP_CLASS_FEATURE_924", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Throwing Action"] = new engine.RulesElement({
    name: "Throwing Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_911",
    source: "Martial Power",
    categories: ["Throwing Action", "ID_FMP_CLASS_FEATURE_911", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Throwing Action:When you spend an action point to take an extra action, you can make a ranged basic attack with a light thrown weapon or a heavy thrown weapon as a free action. This ranged attack does not provoke opportunity attacks. You can then take an extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Throwing Master"] = new engine.RulesElement({
    name: "Throwing Master",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_912",
    source: "Martial Power",
    categories: ["Throwing Master", "ID_FMP_CLASS_FEATURE_912", "11"],
    rules: function(model) {
      model.statadd("thrown,ranged:die", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Tumbling Positions"] = new engine.RulesElement({
    name: "Tumbling Positions",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_951",
    source: "Martial Power",
    categories: ["Tumbling Positions", "ID_FMP_CLASS_FEATURE_951", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Twiceborn Recovery"] = new engine.RulesElement({
    name: "Twiceborn Recovery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_994",
    source: "Martial Power",
    categories: ["Twiceborn Recovery", "ID_FMP_CLASS_FEATURE_994", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Twofold Defense"] = new engine.RulesElement({
    name: "Twofold Defense",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_996",
    source: "Martial Power",
    categories: ["Twofold Defense", "ID_FMP_CLASS_FEATURE_996", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Ultimate Quickblade"] = new engine.RulesElement({
    name: "Ultimate Quickblade",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_733",
    source: "Martial Power",
    categories: ["Ultimate Quickblade", "ID_FMP_CLASS_FEATURE_733", "16"],
    rules: function(model) {
      model.statadd("Initiative Misc", function() { return abilitymod(model.stat("Charisma")); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ultimate Understanding"] = new engine.RulesElement({
    name: "Ultimate Understanding",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1000",
    source: "Martial Power",
    categories: ["Ultimate Understanding", "ID_FMP_CLASS_FEATURE_1000", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unbreakable Skin"] = new engine.RulesElement({
    name: "Unbreakable Skin",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_998",
    source: "Martial Power",
    categories: ["Unbreakable Skin", "ID_FMP_CLASS_FEATURE_998", "24"],
    rules: function(model) {
      model.statadd("resist:all", function() { 
        if (model.wearing('Armor', ['heavy'])) {
          return model.stat("Constitution modifier");
        } else return 0;
       }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Uncanny Thrower"] = new engine.RulesElement({
    name: "Uncanny Thrower",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_913",
    source: "Martial Power",
    categories: ["Uncanny Thrower", "ID_FMP_CLASS_FEATURE_913", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Undying Stamina"] = new engine.RulesElement({
    name: "Undying Stamina",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1023",
    source: "Martial Power",
    categories: ["Undying Stamina", "ID_FMP_CLASS_FEATURE_1023", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unending Strength"] = new engine.RulesElement({
    name: "Unending Strength",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1006",
    source: "Martial Power",
    categories: ["Unending Strength", "ID_FMP_CLASS_FEATURE_1006", "21"],
    rules: function(model) {
      model.statadd("Strength", 2);
      model.statadd("Carry Multiplier", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unfailing Resources"] = new engine.RulesElement({
    name: "Unfailing Resources",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_891",
    source: "Martial Power",
    categories: ["Unfailing Resources", "ID_FMP_CLASS_FEATURE_891", "11"],
    rules: function(model) {
      model.statadd("Hit Points", 10);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unfair Advantage (Death Dealer)"] = new engine.RulesElement({
    name: "Unfair Advantage (Death Dealer)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_955",
    source: "Martial Power",
    categories: ["Unfair Advantage (Death Dealer)", "ID_FMP_CLASS_FEATURE_955", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unyielding Company"] = new engine.RulesElement({
    name: "Unyielding Company",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1014",
    source: "Martial Power",
    categories: ["Unyielding Company", "ID_FMP_CLASS_FEATURE_1014", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Combatant"] = new engine.RulesElement({
    name: "Versatile Combatant",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_949",
    source: "Martial Power",
    categories: ["Versatile Combatant", "ID_FMP_CLASS_FEATURE_949", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Vexing Foe"] = new engine.RulesElement({
    name: "Vexing Foe",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_963",
    source: "Martial Power",
    categories: ["Vexing Foe", "ID_FMP_CLASS_FEATURE_963", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Vicious Courage"] = new engine.RulesElement({
    name: "Vicious Courage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_966",
    source: "Martial Power",
    categories: ["Vicious Courage", "ID_FMP_CLASS_FEATURE_966", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Wanderer's Action"] = new engine.RulesElement({
    name: "Wanderer's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_929",
    source: "Martial Power",
    categories: ["Wanderer's Action", "ID_FMP_CLASS_FEATURE_929", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Wanderer's Action:When you spend an action point to take an extra action, you can also take a move action before or after that action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Warrior's Ascent"] = new engine.RulesElement({
    name: "Warrior's Ascent",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1017",
    source: "Martial Power",
    categories: ["Warrior's Ascent", "ID_FMP_CLASS_FEATURE_1017", "26"],
    rules: function(model) {
      model.select('Power', 1, "Warrior's Ascent", {
        filter: function(model, element) { return (element.hasCategory("utility") && element.hasCategory("22") && element.hasCategory("martial")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wounded Resurgence"] = new engine.RulesElement({
    name: "Wounded Resurgence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1022",
    source: "Martial Power",
    categories: ["Wounded Resurgence", "ID_FMP_CLASS_FEATURE_1022", "21"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
