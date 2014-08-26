define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Acidic Poisons"] = new engine.RulesElement({
    name: "Acidic Poisons",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2276",
    source: "Martial Power 2",
    categories: ["Acidic Poisons", "ID_FMP_CLASS_FEATURE_2276", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Advanced Dabbler"] = new engine.RulesElement({
    name: "Advanced Dabbler",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2250",
    source: "Martial Power 2",
    categories: ["Advanced Dabbler", "ID_FMP_CLASS_FEATURE_2250", "16"],
    rules: function(model) {
      model.select('Skill Training', 3);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Advantageous Positioning"] = new engine.RulesElement({
    name: "Advantageous Positioning",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2282",
    source: "Martial Power 2",
    categories: ["Advantageous Positioning", "ID_FMP_CLASS_FEATURE_2282", "16"],
    rules: function(model) {
      model.statadd("AC", function() { /* against ranged attacks while you are adjacent to a Medium or larger enemy */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Burglary"] = new engine.RulesElement({
    name: "Arcane Burglary",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2239",
    source: "Martial Power 2",
    categories: ["Arcane Burglary", "ID_FMP_CLASS_FEATURE_2239", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DAGGER)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Archer Warlord"] = new engine.RulesElement({
    name: "Archer Warlord",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2286",
    source: "Martial Power 2",
    categories: ["Archer Warlord", "ID_FMP_CLASS_FEATURE_2286", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.DropRule
      // unsupported rule: cbimporter.Rules.DropRule
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_RANGED"]);
      model.statadd("ranged basic,bow group:key ability", "str");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Avernian Action"] = new engine.RulesElement({
    name: "Avernian Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2184",
    source: "Martial Power 2",
    categories: ["Avernian Action", "ID_FMP_CLASS_FEATURE_2184", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Avernian Action:When you spend an action point to take an extra action, your attack powers gain the fire keyword and deal extra fire damage equal to 5 + your Constitution modifier until the end of your turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Back Alley Bravo"] = new engine.RulesElement({
    name: "Back Alley Bravo",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2244",
    source: "Martial Power 2",
    categories: ["Back Alley Bravo", "ID_FMP_CLASS_FEATURE_2244", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Battle Agility"] = new engine.RulesElement({
    name: "Battle Agility",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2188",
    source: "Martial Power 2",
    categories: ["Battle Agility", "ID_FMP_CLASS_FEATURE_2188", "11"],
    rules: function(model) {
      model.statadd("Speed", function() { 
        if (model.wearing('Armor', ['Scale'])) {
          return 0;
        } else return 0;
       }, "Armor");
      model.statadd("Speed", function() { 
        if (model.wearing('Armor', ['chain'])) {
          return 0;
        } else return 0;
       }, "Armor");
      model.statadd("Armor Penalty", function() { 
        if (model.wearing('Armor', ['Scale'])) {
          return 0;
        } else return 0;
       });
      model.statadd("Armor Penalty", function() { 
        if (model.wearing('Armor', ['chain'])) {
          return 0;
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Battle Recovery"] = new engine.RulesElement({
    name: "Battle Recovery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2296",
    source: "Martial Power 2",
    categories: ["Battle Recovery", "ID_FMP_CLASS_FEATURE_2296", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Battlefront Leader"] = new engine.RulesElement({
    name: "Battlefront Leader",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2287",
    source: "Martial Power 2",
    categories: ["Battlefront Leader", "ID_FMP_CLASS_FEATURE_2287", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)"]);
      model.grant(model.elements.id["ID_FMP_POWER_10887"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bestial Accuracy"] = new engine.RulesElement({
    name: "Bestial Accuracy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2213",
    source: "Martial Power 2",
    categories: ["Bestial Accuracy", "ID_FMP_CLASS_FEATURE_2213", "16"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against your quarry while you're under the effect of your longtooth shifting or razorclaw shifting racial power */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Binding Action"] = new engine.RulesElement({
    name: "Binding Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2304",
    source: "Martial Power 2",
    categories: ["Binding Action", "ID_FMP_CLASS_FEATURE_2304", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Binding Action:When you spend an action point to make an attack with a flail and that attack hits, you can grab one creature hit by the attack.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blindsense"] = new engine.RulesElement({
    name: "Blindsense",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2216",
    source: "Martial Power 2",
    categories: ["Blindsense", "ID_FMP_CLASS_FEATURE_2216", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bold Company"] = new engine.RulesElement({
    name: "Bold Company",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2313",
    source: "Martial Power 2",
    categories: ["Bold Company", "ID_FMP_CLASS_FEATURE_2313", "16"],
    rules: function(model) {
      model.statadd("Damage", function() { /* for each of your allies adjacent to the enemy */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Brawler Style"] = new engine.RulesElement({
    name: "Brawler Style",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2182",
    source: "Martial Power 2",
    categories: ["Brawler Style", "ID_FMP_CLASS_FEATURE_2182", "ID_FMP_CLASS_FEATURE_1064", "Fighter Talents", "1"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (!(model.inventory['off-hand'])) {
            
            if (model.wearing('Weapon')) {
              return 1;
            } else return 0;
          
        } else return 0;
       });
      model.statadd("Fortitude Defense", function() { 
        if (!(model.inventory['off-hand'])) {
            
            if (model.wearing('Weapon')) {
              return 2;
            } else return 0;
          
        } else return 0;
       });
      model.statadd("Brawler Style", 2);
      model.statadd("Brawler Style", 2);
      model.statadd("Brawler Style", 2);
      model.statadd("Unarmed group:attack", function() { return model.stat("Brawler Style"); }, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Brute Charge"] = new engine.RulesElement({
    name: "Brute Charge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2199",
    source: "Martial Power 2",
    categories: ["Brute Charge", "ID_FMP_CLASS_FEATURE_2199", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Canny Leader"] = new engine.RulesElement({
    name: "Canny Leader",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2285",
    source: "Martial Power 2",
    categories: ["Canny Leader", "ID_FMP_CLASS_FEATURE_2285", "1"],
    rules: function(model) {
      model.statadd("Insight Misc", 2);
      model.statadd("Perception Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Claw Fighter"] = new engine.RulesElement({
    name: "Claw Fighter",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2234",
    source: "Martial Power 2",
    categories: ["Claw Fighter", "ID_FMP_CLASS_FEATURE_2234", "11"],
    rules: function(model) {
      model.statadd("dagger,weapon:damage", 2);
      model.statadd("katar,weapon:damage", 2);
      model.statadd("kukri,weapon:damage", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Cocksure Menace"] = new engine.RulesElement({
    name: "Cocksure Menace",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2242",
    source: "Martial Power 2",
    categories: ["Cocksure Menace", "ID_FMP_CLASS_FEATURE_2242", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Combat Agility"] = new engine.RulesElement({
    name: "Combat Agility",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2183",
    source: "Martial Power 2",
    categories: ["Combat Agility", "ID_FMP_CLASS_FEATURE_2183", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10469"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Conclusive Action"] = new engine.RulesElement({
    name: "Conclusive Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2295",
    source: "Martial Power 2",
    categories: ["Conclusive Action", "ID_FMP_CLASS_FEATURE_2295", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Conclusive Action:When you spend an action point to take an extra action, any ally who has line of sight to you gains a bonus to damage rolls against bloodied creatures equal to your Strength modifier until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Concussive Action"] = new engine.RulesElement({
    name: "Concussive Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2246",
    source: "Martial Power 2",
    categories: ["Concussive Action", "ID_FMP_CLASS_FEATURE_2246", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Concussive Action:When you spend an action point to attack with a sling, and the attack hits, you treat a damage roll of 1 or 2 as a roll of 3. In addition, the target of the attack is dazed until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Crimson Brutality"] = new engine.RulesElement({
    name: "Crimson Brutality",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2278",
    source: "Martial Power 2",
    categories: ["Crimson Brutality", "ID_FMP_CLASS_FEATURE_2278", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Crimson Brutality:When you spend an action point to make an attack that deals Sneak Attack damage, the Sneak Attack damage is maximized.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Cunning Sneak"] = new engine.RulesElement({
    name: "Cunning Sneak",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2237",
    source: "Martial Power 2",
    categories: ["Cunning Sneak", "ID_FMP_CLASS_FEATURE_2237", "ID_FMP_CLASS_FEATURE_547", "Rogue Tactics", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dabbler"] = new engine.RulesElement({
    name: "Dabbler",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_28",
    source: "Martial Power 2",
    categories: ["Dabbler", "ID_FMP_CLASS_FEATURE_28", "11"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2);
      model.statadd("Arcana Misc", 2);
      model.statadd("Athletics Misc", 2);
      model.statadd("Bluff Misc", 2);
      model.statadd("Diplomacy Misc", 2);
      model.statadd("Dungeoneering Misc", 2);
      model.statadd("Endurance Misc", 2);
      model.statadd("Heal Misc", 2);
      model.statadd("History Misc", 2);
      model.statadd("Insight Misc", 2);
      model.statadd("Intimidate Misc", 2);
      model.statadd("Nature Misc", 2);
      model.statadd("Perception Misc", 2);
      model.statadd("Religion Misc", 2);
      model.statadd("Stealth Misc", 2);
      model.statadd("Streetwise Misc", 2);
      model.statadd("Thievery Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dagger Spell"] = new engine.RulesElement({
    name: "Dagger Spell",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2241",
    source: "Martial Power 2",
    categories: ["Dagger Spell", "ID_FMP_CLASS_FEATURE_2241", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dagger Threat"] = new engine.RulesElement({
    name: "Dagger Threat",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2280",
    source: "Martial Power 2",
    categories: ["Dagger Threat", "ID_FMP_CLASS_FEATURE_2280", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_FEAT_157"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dark Action"] = new engine.RulesElement({
    name: "Dark Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2214",
    source: "Martial Power 2",
    categories: ["Dark Action", "ID_FMP_CLASS_FEATURE_2214", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Dark Action:When you spend an action point to take an extra action, you gain a +4 bonus to all defenses until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Darkstrider Edge"] = new engine.RulesElement({
    name: "Darkstrider Edge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2215",
    source: "Martial Power 2",
    categories: ["Darkstrider Edge", "ID_FMP_CLASS_FEATURE_2215", "11"],
    rules: function(model) {
      model.statadd("Darkstrider Edge", 3);
      model.statadd("Darkstrider Edge", function() { return model.stat("Wisdom modifier"); });
      model.statadd("weapon:damage", function() { /* against creatures from which you are hidden */ return model.stat("Darkstrider Edge"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Delicate Shot"] = new engine.RulesElement({
    name: "Delicate Shot",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2251",
    source: "Martial Power 2",
    categories: ["Delicate Shot", "ID_FMP_CLASS_FEATURE_2251", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Desert Wind"] = new engine.RulesElement({
    name: "Desert Wind",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2314",
    source: "Martial Power 2",
    categories: ["Desert Wind", "ID_FMP_CLASS_FEATURE_2314", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Determined Action"] = new engine.RulesElement({
    name: "Determined Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2205",
    source: "Martial Power 2",
    categories: ["Determined Action", "ID_FMP_CLASS_FEATURE_2205", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Determined Action:You can spend an action point during your turn as a free action to regain a number of hit points equal to one-half your level + your Wisdom modifier instead of gaining the extra action");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Distracting Action (Prince of Knaves)"] = new engine.RulesElement({
    name: "Distracting Action (Prince of Knaves)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2309",
    source: "Martial Power 2",
    categories: ["Distracting Action (Prince of Knaves)", "ID_FMP_CLASS_FEATURE_2309", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Distracting Action (Prince of Knaves):When you spend an action point to take an extra action, each ally you can see can shift his or her speed and make a Stealth check to become hidden as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon Blood"] = new engine.RulesElement({
    name: "Dragon Blood",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2318",
    source: "Martial Power 2",
    categories: ["Dragon Blood", "ID_FMP_CLASS_FEATURE_2318", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon Soul (Dragonheart)"] = new engine.RulesElement({
    name: "Dragon Soul (Dragonheart)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2320",
    source: "Martial Power 2",
    categories: ["Dragon Soul (Dragonheart)", "ID_FMP_CLASS_FEATURE_2320", "30"],
    rules: function(model) {
      model.statadd("Healing Surge Value", 10);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon Spirit"] = new engine.RulesElement({
    name: "Dragon Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2317",
    source: "Martial Power 2",
    categories: ["Dragon Spirit", "ID_FMP_CLASS_FEATURE_2317", "21"],
    rules: function(model) {
      model.statadd("Constitution", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Duelist's Guard"] = new engine.RulesElement({
    name: "Duelist's Guard",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2196",
    source: "Martial Power 2",
    categories: ["Duelist's Guard", "ID_FMP_CLASS_FEATURE_2196", "11"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['chain'])) {
          /* against enemies marked by you */ return 1;
        } else return 0;
       });
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['leather'])) {
          /* against enemies marked by you */ return 1;
        } else return 0;
       });
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['hide'])) {
          /* against enemies marked by you */ return 1;
        } else return 0;
       });
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['cloth'])) {
          /* against enemies marked by you */ return 1;
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dynamic Transformation"] = new engine.RulesElement({
    name: "Dynamic Transformation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2212",
    source: "Martial Power 2",
    categories: ["Dynamic Transformation", "ID_FMP_CLASS_FEATURE_2212", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Elemental Action"] = new engine.RulesElement({
    name: "Elemental Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2292",
    source: "Martial Power 2",
    categories: ["Elemental Action", "ID_FMP_CLASS_FEATURE_2292", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Elemental Action:When you spend an action point to make an attack that hits, choose acid, cold, fire, lightning, or thunder. The attack deals ongoing damage of the chosen type equal to your Intelligence modifier (save ends).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Energizing Inspiration"] = new engine.RulesElement({
    name: "Energizing Inspiration",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2293",
    source: "Martial Power 2",
    categories: ["Energizing Inspiration", "ID_FMP_CLASS_FEATURE_2293", "16"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Expert Assault"] = new engine.RulesElement({
    name: "Expert Assault",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2249",
    source: "Martial Power 2",
    categories: ["Expert Assault", "ID_FMP_CLASS_FEATURE_2249", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Expert Assault:When you spend an action point to take an extra action, you gain a +5 bonus to skill checks until the end of your turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fading Action"] = new engine.RulesElement({
    name: "Fading Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2240",
    source: "Martial Power 2",
    categories: ["Fading Action", "ID_FMP_CLASS_FEATURE_2240", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Fading Action:When you spend an action point to make an attack, one creature of your choice that you attack treats you as invisible (save ends).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Favored Tenacity"] = new engine.RulesElement({
    name: "Favored Tenacity",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2453",
    source: "Martial Power 2",
    categories: ["Favored Tenacity", "ID_FMP_CLASS_FEATURE_2453", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Favored Warrior"] = new engine.RulesElement({
    name: "Favored Warrior",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2452",
    source: "Martial Power 2",
    categories: ["Favored Warrior", "ID_FMP_CLASS_FEATURE_2452", "21"],
    rules: function(model) {
      model.statadd("Constitution", 2);
      model.statadd("Acrobatics Misc", 2);
      model.statadd("Athletics Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Focused Hunter"] = new engine.RulesElement({
    name: "Focused Hunter",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2224",
    source: "Martial Power 2",
    categories: ["Focused Hunter", "ID_FMP_CLASS_FEATURE_2224", "11"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against the target of your Hunter's Quarry if you are adjacent to it but no other creature */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Forever War"] = new engine.RulesElement({
    name: "Forever War",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2322",
    source: "Martial Power 2",
    categories: ["Forever War", "ID_FMP_CLASS_FEATURE_2322", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Generous Flanker"] = new engine.RulesElement({
    name: "Generous Flanker",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2307",
    source: "Martial Power 2",
    categories: ["Generous Flanker", "ID_FMP_CLASS_FEATURE_2307", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Glancing Shot"] = new engine.RulesElement({
    name: "Glancing Shot",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2219",
    source: "Martial Power 2",
    categories: ["Glancing Shot", "ID_FMP_CLASS_FEATURE_2219", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Great Captain"] = new engine.RulesElement({
    name: "Great Captain",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1041",
    source: "Martial Power 2",
    categories: ["Great Captain", "ID_FMP_CLASS_FEATURE_1041", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Great Weapon Defense"] = new engine.RulesElement({
    name: "Great Weapon Defense",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2204",
    source: "Martial Power 2",
    categories: ["Great Weapon Defense", "ID_FMP_CLASS_FEATURE_2204", "16"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (model.wearing('Weapon', ['two-handed','Heavy Blade'])) {
          return 2;
        } else return 0;
       }, "Shield");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Guardian Action (Shinaelestran Guardian)"] = new engine.RulesElement({
    name: "Guardian Action (Shinaelestran Guardian)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2231",
    source: "Martial Power 2",
    categories: ["Guardian Action (Shinaelestran Guardian)", "ID_FMP_CLASS_FEATURE_2231", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Guardian Action (Shinaelestran Guardian):When you spend an action point to take an extra action, you can shift a number of squares equal to your Wisdom modifier as a free action before or after the extra action. In addition, you gain a +2 bonus to attack rolls until the end of your turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Guardian Defense"] = new engine.RulesElement({
    name: "Guardian Defense",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2232",
    source: "Martial Power 2",
    categories: ["Guardian Defense", "ID_FMP_CLASS_FEATURE_2232", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Guardian Vigilance"] = new engine.RulesElement({
    name: "Guardian Vigilance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2233",
    source: "Martial Power 2",
    categories: ["Guardian Vigilance", "ID_FMP_CLASS_FEATURE_2233", "16"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hellish Mark"] = new engine.RulesElement({
    name: "Hellish Mark",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2186",
    source: "Martial Power 2",
    categories: ["Hellish Mark", "ID_FMP_CLASS_FEATURE_2186", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Hindering Grasp"] = new engine.RulesElement({
    name: "Hindering Grasp",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2305",
    source: "Martial Power 2",
    categories: ["Hindering Grasp", "ID_FMP_CLASS_FEATURE_2305", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Homeland"] = new engine.RulesElement({
    name: "Homeland",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1042",
    source: "Martial Power 2",
    categories: ["Homeland", "ID_FMP_CLASS_FEATURE_1042", "21"],
    rules: function(model) {
      model.statadd("Bluff Misc", function() { /* within your homeland */ return 4; });
      model.statadd("Diplomacy Misc", function() { /* within your homeland */ return 4; });
      model.statadd("Intimidate Misc", function() { /* within your homeland */ return 4; });
      model.statadd("Streetwise Misc", function() { /* within your homeland */ return 4; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hunter Fighting Style"] = new engine.RulesElement({
    name: "Hunter Fighting Style",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2208",
    source: "Martial Power 2",
    categories: ["Hunter Fighting Style", "ID_FMP_CLASS_FEATURE_2208", "ID_FMP_CLASS_FEATURE_321", "Fighting Style", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_FEAT_157"]);
      model.statadd("AC", function() { /* against opportunity attacks you provoke by making a ranged attack */ return 4; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Huntmaster's Action"] = new engine.RulesElement({
    name: "Huntmaster's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2220",
    source: "Martial Power 2",
    categories: ["Huntmaster's Action", "ID_FMP_CLASS_FEATURE_2220", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Huntmaster's Action:When you spend an action point to take an extra action, your attacks against your quarry deal extra damage equal to one-half your level until the end of your turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Insightful Presence"] = new engine.RulesElement({
    name: "Insightful Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2283",
    source: "Martial Power 2",
    categories: ["Insightful Presence", "ID_FMP_CLASS_FEATURE_2283", "ID_FMP_CLASS_FEATURE_316", "Commanding Presence", "1"],
    rules: function(model) {
      model.statadd("ALLY.Action Point", "Insightful Presence:When an ally you can see spends an action point to take an extra action, that ally gains a bonus to all defenses equal to half your Wisdom modifier or half your Charisma modifier until the start of his or her next turn");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Intrepid Hunter"] = new engine.RulesElement({
    name: "Intrepid Hunter",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2221",
    source: "Martial Power 2",
    categories: ["Intrepid Hunter", "ID_FMP_CLASS_FEATURE_2221", "11"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against a quarry marked by you, and you gain a +5 bonus to Perception checks to perceive or track it */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Invigorating Charge"] = new engine.RulesElement({
    name: "Invigorating Charge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2321",
    source: "Martial Power 2",
    categories: ["Invigorating Charge", "ID_FMP_CLASS_FEATURE_2321", "21"],
    rules: function(model) {
      model.statadd("Strength", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Iron Determination"] = new engine.RulesElement({
    name: "Iron Determination",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2207",
    source: "Martial Power 2",
    categories: ["Iron Determination", "ID_FMP_CLASS_FEATURE_2207", "16"],
    rules: function(model) {
      model.statadd("Will Defense", function() { return model.stat("Shield Bonus"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ironstar Action"] = new engine.RulesElement({
    name: "Ironstar Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2190",
    source: "Martial Power 2",
    categories: ["Ironstar Action", "ID_FMP_CLASS_FEATURE_2190", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Ironstar Action:When you spend an action point to attack with a power associated with the Ironstar Student feat or the Ironstar Crusher feat, you can score a critical hit on a roll of 18–20, and you treat the weapon you use for that attack as having the high crit property.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ironstar Expertise"] = new engine.RulesElement({
    name: "Ironstar Expertise",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2192",
    source: "Martial Power 2",
    categories: ["Ironstar Expertise", "ID_FMP_CLASS_FEATURE_2192", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Ironstar Master"] = new engine.RulesElement({
    name: "Ironstar Master",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2191",
    source: "Martial Power 2",
    categories: ["Ironstar Master", "ID_FMP_CLASS_FEATURE_2191", "11"],
    rules: function(model) {
      model.statadd("Mace group:attack", 1);
      model.statadd("Flail group:attack", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Know Your Strength"] = new engine.RulesElement({
    name: "Know Your Strength",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2300",
    source: "Martial Power 2",
    categories: ["Know Your Strength", "ID_FMP_CLASS_FEATURE_2300", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Kulkor Master"] = new engine.RulesElement({
    name: "Kulkor Master",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2193",
    source: "Martial Power 2",
    categories: ["Kulkor Master", "ID_FMP_CLASS_FEATURE_2193", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Kulkor Persistence"] = new engine.RulesElement({
    name: "Kulkor Persistence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2194",
    source: "Martial Power 2",
    categories: ["Kulkor Persistence", "ID_FMP_CLASS_FEATURE_2194", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Kulkor Persistence:When you spend an action point to attack with an axe, a hammer, or a mace that has the versatile property, and that attack misses every target, you can reroll one attack roll but must use the second result.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Legendary Presence"] = new engine.RulesElement({
    name: "Legendary Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2443",
    source: "Martial Power 2",
    categories: ["Legendary Presence", "ID_FMP_CLASS_FEATURE_2443", "21"],
    rules: function(model) {
      model.statadd("Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Light-Footed"] = new engine.RulesElement({
    name: "Light-Footed",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2253",
    source: "Martial Power 2",
    categories: ["Light-Footed", "ID_FMP_CLASS_FEATURE_2253", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Lord of Scoundrels"] = new engine.RulesElement({
    name: "Lord of Scoundrels",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2310",
    source: "Martial Power 2",
    categories: ["Lord of Scoundrels", "ID_FMP_CLASS_FEATURE_2310", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Loyal Support"] = new engine.RulesElement({
    name: "Loyal Support",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2311",
    source: "Martial Power 2",
    categories: ["Loyal Support", "ID_FMP_CLASS_FEATURE_2311", "11"],
    rules: function(model) {
      model.statadd("Healing", function() { /* for each ally within 2 squares of you */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Main Gauche Action"] = new engine.RulesElement({
    name: "Main Gauche Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2197",
    source: "Martial Power 2",
    categories: ["Main Gauche Action", "ID_FMP_CLASS_FEATURE_2197", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Main Gauche Action:When you spend an action point to take an extra action, you can make a melee basic attack with an off-hand weapon as a free action before or after the extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Marauder Fighting Style"] = new engine.RulesElement({
    name: "Marauder Fighting Style",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2210",
    source: "Martial Power 2",
    categories: ["Marauder Fighting Style", "ID_FMP_CLASS_FEATURE_2210", "ID_FMP_CLASS_FEATURE_321", "Fighting Style", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_FEAT_172"]);
      model.statadd("Marauder Fighting Style", function() { 
        if (!(model.wearing('Armor', ['Shield']))) {
          return 1;
        } else return 0;
       });
      model.statadd("Speed", function() { 
        if (!(model.wearing('Weapon', ['two-handed']))) {
          return model.stat("Marauder Fighting Style");
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Marked Opportunity"] = new engine.RulesElement({
    name: "Marked Opportunity",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2198",
    source: "Martial Power 2",
    categories: ["Marked Opportunity", "ID_FMP_CLASS_FEATURE_2198", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Melee Implement"] = new engine.RulesElement({
    name: "Melee Implement",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2185",
    source: "Martial Power 2",
    categories: ["Melee Implement", "ID_FMP_CLASS_FEATURE_2185", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_MELEE_WEAPONS_AS_WARLOCK_IMPLEMENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Myrmidon Athleticism"] = new engine.RulesElement({
    name: "Myrmidon Athleticism",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2189",
    source: "Martial Power 2",
    categories: ["Myrmidon Athleticism", "ID_FMP_CLASS_FEATURE_2189", "16"],
    rules: function(model) {
      model.statadd("Speed", 1);
      model.statadd("Acrobatics Misc", 2);
      model.statadd("Athletics Misc", 2);
      model.statadd("Endurance Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Myrmidon's Action"] = new engine.RulesElement({
    name: "Myrmidon's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2187",
    source: "Martial Power 2",
    categories: ["Myrmidon's Action", "ID_FMP_CLASS_FEATURE_2187", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Myrmidon's Action:When you spend an action point to take an extra action, you can shift 3 squares as a free action before or after the extra action, and you gain a +2 bonus to attack rolls until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Nomad's Blessing"] = new engine.RulesElement({
    name: "Nomad's Blessing",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2316",
    source: "Martial Power 2",
    categories: ["Nomad's Blessing", "ID_FMP_CLASS_FEATURE_2316", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Nowhere to Run"] = new engine.RulesElement({
    name: "Nowhere to Run",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2297",
    source: "Martial Power 2",
    categories: ["Nowhere to Run", "ID_FMP_CLASS_FEATURE_2297", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Overwhelming Action"] = new engine.RulesElement({
    name: "Overwhelming Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2223",
    source: "Martial Power 2",
    categories: ["Overwhelming Action", "ID_FMP_CLASS_FEATURE_2223", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Overwhelming Action:When you spend an action point to make an attack that hits the target of your Hunter's Quarry, the quarry is weakened until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Poison Maven"] = new engine.RulesElement({
    name: "Poison Maven",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2273",
    source: "Martial Power 2",
    categories: ["Poison Maven", "ID_FMP_CLASS_FEATURE_2273", "11"],
    rules: function(model) {
      model.statadd("poison,weapon:damage", function() { return model.stat("Intelligence modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Presence of Greatness"] = new engine.RulesElement({
    name: "Presence of Greatness",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2302",
    source: "Martial Power 2",
    categories: ["Presence of Greatness", "ID_FMP_CLASS_FEATURE_2302", "20"],
    rules: function(model) {
      model.statadd("Action Point", "Presence of Greatness:You can spend two action points during an encounter, but no more than one per round");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Raider's Action"] = new engine.RulesElement({
    name: "Raider's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2226",
    source: "Martial Power 2",
    categories: ["Raider's Action", "ID_FMP_CLASS_FEATURE_2226", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Raider's Action:When you spend an action point to take an extra action, you can make a basic attack as a free action against one creature that is prone, slowed, immobilized, or restrained before or after the extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rampager's Action"] = new engine.RulesElement({
    name: "Rampager's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2200",
    source: "Martial Power 2",
    categories: ["Rampager's Action", "ID_FMP_CLASS_FEATURE_2200", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Rampager's Action:When you spend an action point to charge an enemy, the first attack you make as part of the charge deals 2[W] extra damage on a hit or damage equal to your Strength modifier on a miss.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Razor Action"] = new engine.RulesElement({
    name: "Razor Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2281",
    source: "Martial Power 2",
    categories: ["Razor Action", "ID_FMP_CLASS_FEATURE_2281", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Razor Action:When you spend an action point to attack with a light blade, each enemy adjacent to you takes damage equal to your Dexterity modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Red Cloak Reaction"] = new engine.RulesElement({
    name: "Red Cloak Reaction",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2279",
    source: "Martial Power 2",
    categories: ["Red Cloak Reaction", "ID_FMP_CLASS_FEATURE_2279", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Resilient Blade"] = new engine.RulesElement({
    name: "Resilient Blade",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2294",
    source: "Martial Power 2",
    categories: ["Resilient Blade", "ID_FMP_CLASS_FEATURE_2294", "11"],
    rules: function(model) {
      model.statadd("Healing Surges", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Resurgent Star"] = new engine.RulesElement({
    name: "Resurgent Star",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2454",
    source: "Martial Power 2",
    categories: ["Resurgent Star", "ID_FMP_CLASS_FEATURE_2454", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Revitalized Offense"] = new engine.RulesElement({
    name: "Revitalized Offense",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2206",
    source: "Martial Power 2",
    categories: ["Revitalized Offense", "ID_FMP_CLASS_FEATURE_2206", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Riposte Action"] = new engine.RulesElement({
    name: "Riposte Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2243",
    source: "Martial Power 2",
    categories: ["Riposte Action", "ID_FMP_CLASS_FEATURE_2243", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Roof Runner"] = new engine.RulesElement({
    name: "Roof Runner",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2277",
    source: "Martial Power 2",
    categories: ["Roof Runner", "ID_FMP_CLASS_FEATURE_2277", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Running Attack"] = new engine.RulesElement({
    name: "Running Attack",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2209",
    source: "Martial Power 2",
    categories: ["Running Attack", "ID_FMP_CLASS_FEATURE_2209", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Seeking Action"] = new engine.RulesElement({
    name: "Seeking Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2298",
    source: "Martial Power 2",
    categories: ["Seeking Action", "ID_FMP_CLASS_FEATURE_2298", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Seeking Action:When you spend an action point to make an attack, any ally who can see you ignores cover and concealment until the end of your next turn when attacking the same target.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Seize the Day"] = new engine.RulesElement({
    name: "Seize the Day",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2301",
    source: "Martial Power 2",
    categories: ["Seize the Day", "ID_FMP_CLASS_FEATURE_2301", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Seize the Day:When you spend an action point to attack and you roll an odd number on the first attack roll, you gain temporary hit points equal to 5 + one-half your level. If you roll an even number on the first attack roll, each ally within 5 squares of you gains temporary hit points equal to one-half your level.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sharpshooter Talent"] = new engine.RulesElement({
    name: "Sharpshooter Talent",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2238",
    source: "Martial Power 2",
    categories: ["Sharpshooter Talent", "ID_FMP_CLASS_FEATURE_2238", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_INTERNAL_CLASS_FEATURE_SHARPSHOOTER_TALENT_(CROSSBOW)") || element.hasCategory("ID_INTERNAL_CLASS_FEATURE_SHARPSHOOTER_TALENT_(SLING)")); }
      });
      model.grant(model.elements.id["ID_FMP_FEAT_139"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sharpshooter Talent (Crossbow)"] = new engine.RulesElement({
    name: "Sharpshooter Talent (Crossbow)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_SHARPSHOOTER_TALENT_(CROSSBOW)",
    source: "Martial Power 2",
    categories: ["Sharpshooter Talent (Crossbow)", "ID_INTERNAL_CLASS_FEATURE_SHARPSHOOTER_TALENT_(CROSSBOW)"],
    rules: function(model) {
      model.statadd("crossbow group:attack", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sharpshooter Talent (Sling)"] = new engine.RulesElement({
    name: "Sharpshooter Talent (Sling)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_SHARPSHOOTER_TALENT_(SLING)",
    source: "Martial Power 2",
    categories: ["Sharpshooter Talent (Sling)", "ID_INTERNAL_CLASS_FEATURE_SHARPSHOOTER_TALENT_(SLING)"],
    rules: function(model) {
      model.statadd("sling group:attack", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shifter's Action"] = new engine.RulesElement({
    name: "Shifter's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2211",
    source: "Martial Power 2",
    categories: ["Shifter's Action", "ID_FMP_CLASS_FEATURE_2211", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Shifter's Action:When you spend an action point to take an extra action, your attacks deal extra damage equal to your Wisdom modifier until the end of your turn. If you're bloodied, you also gain temporary hit points equal to 10 + your Wisdom modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shredding Escape"] = new engine.RulesElement({
    name: "Shredding Escape",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2306",
    source: "Martial Power 2",
    categories: ["Shredding Escape", "ID_FMP_CLASS_FEATURE_2306", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sign of Challenge"] = new engine.RulesElement({
    name: "Sign of Challenge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2455",
    source: "Martial Power 2",
    categories: ["Sign of Challenge", "ID_FMP_CLASS_FEATURE_2455", "30"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11028"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Skirmishing Presence"] = new engine.RulesElement({
    name: "Skirmishing Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2284",
    source: "Martial Power 2",
    categories: ["Skirmishing Presence", "ID_FMP_CLASS_FEATURE_2284", "ID_FMP_CLASS_FEATURE_316", "Commanding Presence", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sling Mastery"] = new engine.RulesElement({
    name: "Sling Mastery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2245",
    source: "Martial Power 2",
    categories: ["Sling Mastery", "ID_FMP_CLASS_FEATURE_2245", "11"],
    rules: function(model) {
      model.statadd("Sling Mastery", 2);
      model.statadd("Sling Mastery", 2);
      model.statadd("weapon,sling group:damage", function() { return model.stat("Sling Mastery"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Smite the Fallen"] = new engine.RulesElement({
    name: "Smite the Fallen",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2195",
    source: "Martial Power 2",
    categories: ["Smite the Fallen", "ID_FMP_CLASS_FEATURE_2195", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sniper's Action"] = new engine.RulesElement({
    name: "Sniper's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2217",
    source: "Martial Power 2",
    categories: ["Sniper's Action", "ID_FMP_CLASS_FEATURE_2217", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Sniper's Action:When you spend an action point to make a ranged attack that hits your quarry, the quarry takes ongoing 5 damage (save ends). The ongoing damage increases to 10 at 21st level.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Snow Tiger Action"] = new engine.RulesElement({
    name: "Snow Tiger Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2235",
    source: "Martial Power 2",
    categories: ["Snow Tiger Action", "ID_FMP_CLASS_FEATURE_2235", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Snow Tiger Action:When you spend an action point to take an extra action, you can make a melee basic attack as a free action before or after the extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Steel Challenge"] = new engine.RulesElement({
    name: "Steel Challenge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2203",
    source: "Martial Power 2",
    categories: ["Steel Challenge", "ID_FMP_CLASS_FEATURE_2203", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sword of Kings"] = new engine.RulesElement({
    name: "Sword of Kings",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1044",
    source: "Martial Power 2",
    categories: ["Sword of Kings", "ID_FMP_CLASS_FEATURE_1044", "30"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("Encounter usage") && element.hasCategory("Weapon")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Tactical Adept"] = new engine.RulesElement({
    name: "Tactical Adept",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2299",
    source: "Martial Power 2",
    categories: ["Tactical Adept", "ID_FMP_CLASS_FEATURE_2299", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["This Is Not My Fate"] = new engine.RulesElement({
    name: "This Is Not My Fate",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1043",
    source: "Martial Power 2",
    categories: ["This Is Not My Fate", "ID_FMP_CLASS_FEATURE_1043", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Tormenting the Prey"] = new engine.RulesElement({
    name: "Tormenting the Prey",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2218",
    source: "Martial Power 2",
    categories: ["Tormenting the Prey", "ID_FMP_CLASS_FEATURE_2218", "11"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against any enemy taking ongoing damage */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Trampling Rampager"] = new engine.RulesElement({
    name: "Trampling Rampager",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2201",
    source: "Martial Power 2",
    categories: ["Trampling Rampager", "ID_FMP_CLASS_FEATURE_2201", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Transmuting Strike"] = new engine.RulesElement({
    name: "Transmuting Strike",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2291",
    source: "Martial Power 2",
    categories: ["Transmuting Strike", "ID_FMP_CLASS_FEATURE_2291", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Tundra Strider"] = new engine.RulesElement({
    name: "Tundra Strider",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2236",
    source: "Martial Power 2",
    categories: ["Tundra Strider", "ID_FMP_CLASS_FEATURE_2236", "16"],
    rules: function(model) {
      model.statadd("resist:cold", 10, "resist");
      model.statadd("Healing Surges", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Turn the Tables"] = new engine.RulesElement({
    name: "Turn the Tables",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2229",
    source: "Martial Power 2",
    categories: ["Turn the Tables", "ID_FMP_CLASS_FEATURE_2229", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Uncanny Aim"] = new engine.RulesElement({
    name: "Uncanny Aim",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2247",
    source: "Martial Power 2",
    categories: ["Uncanny Aim", "ID_FMP_CLASS_FEATURE_2247", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unfair Advantage (Reaving Axe Savant)"] = new engine.RulesElement({
    name: "Unfair Advantage (Reaving Axe Savant)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2228",
    source: "Martial Power 2",
    categories: ["Unfair Advantage (Reaving Axe Savant)", "ID_FMP_CLASS_FEATURE_2228", "11"],
    rules: function(model) {
      model.statadd("melee:attack", function() { /* against prone creatures */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unstoppable Assault"] = new engine.RulesElement({
    name: "Unstoppable Assault",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2323",
    source: "Martial Power 2",
    categories: ["Unstoppable Assault", "ID_FMP_CLASS_FEATURE_2323", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Vanguard Action"] = new engine.RulesElement({
    name: "Vanguard Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2202",
    source: "Martial Power 2",
    categories: ["Vanguard Action", "ID_FMP_CLASS_FEATURE_2202", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Vanguard Action:When you spend an action point to make an attack, you gain a +4 bonus to attack rolls for that attack against enemies marked by you.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Vanishing Action"] = new engine.RulesElement({
    name: "Vanishing Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2252",
    source: "Martial Power 2",
    categories: ["Vanishing Action", "ID_FMP_CLASS_FEATURE_2252", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Vanishing Action:When you spend an action point to take an extra action, you can make a Stealth check to become hidden after the extra action. If you used the extra action to take a move action, you gain a +5 bonus to the Stealth check.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Vanquishing Chase"] = new engine.RulesElement({
    name: "Vanquishing Chase",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2225",
    source: "Martial Power 2",
    categories: ["Vanquishing Chase", "ID_FMP_CLASS_FEATURE_2225", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Venomous Action (Master of Poisons)"] = new engine.RulesElement({
    name: "Venomous Action (Master of Poisons)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2275",
    source: "Martial Power 2",
    categories: ["Venomous Action (Master of Poisons)", "ID_FMP_CLASS_FEATURE_2275", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Venomous Action (Master of Poisons):When you spend an action point to make a weapon attack and hit, one target of the attack takes ongoing 10 poison damage (save ends).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Warchief's Favor"] = new engine.RulesElement({
    name: "Warchief's Favor",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2315",
    source: "Martial Power 2",
    categories: ["Warchief's Favor", "ID_FMP_CLASS_FEATURE_2315", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Warchief's Favor:When you spend an action point to take an extra action, one ally within 5 squares of you can shift his or her speed and make a melee basic attack as a free action before or after the extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Warlord's Chains"] = new engine.RulesElement({
    name: "Warlord's Chains",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2303",
    source: "Martial Power 2",
    categories: ["Warlord's Chains", "ID_FMP_CLASS_FEATURE_2303", "11"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return ((element.hasCategory("ID_FMP_POWER_4541") || element.hasCategory("ID_FMP_POWER_10889")) || element.hasCategory("ID_FMP_POWER_620")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wary Hunter"] = new engine.RulesElement({
    name: "Wary Hunter",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2222",
    source: "Martial Power 2",
    categories: ["Wary Hunter", "ID_FMP_CLASS_FEATURE_2222", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["White Raven Tactics"] = new engine.RulesElement({
    name: "White Raven Tactics",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2312",
    source: "Martial Power 2",
    categories: ["White Raven Tactics", "ID_FMP_CLASS_FEATURE_2312", "11"],
    rules: function(model) {
      model.statadd("Action Point", "White Raven Tactics:When you spend an action point to make an attack, you gain a bonus to attack rolls for that attack equal to 2 + the number of allies who are within 2 squares of you.");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
