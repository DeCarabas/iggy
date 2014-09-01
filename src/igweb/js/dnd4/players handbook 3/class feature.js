define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Accurate Arrow"] = new engine.RulesElement({
    name: "Accurate Arrow",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1947",
    source: "Player's Handbook 3",
    categories: ["Accurate Arrow", "ID_FMP_CLASS_FEATURE_1947", "11"],
    rules: function(model) {
      model.statadd("ranged basic:attack", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Adaptive Action"] = new engine.RulesElement({
    name: "Adaptive Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2331",
    source: "Player's Handbook 3",
    categories: ["Adaptive Action", "ID_FMP_CLASS_FEATURE_2331", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Adaptive Action:When you spend an action point, you can change your current aspect of nature to a different one as a free action. If you have already used the encounter power associated with your previous aspect, you can't use the power from your new aspect until you have taken a short rest.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Aggressive Resurgence"] = new engine.RulesElement({
    name: "Aggressive Resurgence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1098",
    source: "Player's Handbook 3",
    categories: ["Aggressive Resurgence", "ID_FMP_CLASS_FEATURE_1098", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["All-Seeing Eye"] = new engine.RulesElement({
    name: "All-Seeing Eye",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1819",
    source: "Player's Handbook 3",
    categories: ["All-Seeing Eye", "ID_FMP_CLASS_FEATURE_1819", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Anticipatory Action"] = new engine.RulesElement({
    name: "Anticipatory Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2143",
    source: "Player's Handbook 3",
    categories: ["Anticipatory Action", "ID_FMP_CLASS_FEATURE_2143", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Anticipatory Action:When an enemy enters a square adjacent to you, you can spend an action point to take a standard action as an immediate interrupt");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Archer Fighting Style (Hybrid)"] = new engine.RulesElement({
    name: "Archer Fighting Style (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2457",
    source: "Player's Handbook 3",
    categories: ["Archer Fighting Style (Hybrid)", "ID_FMP_CLASS_FEATURE_2457", "ID_FMP_CLASS_FEATURE_1836", "Ranger Fighting Style", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_FEAT_127"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_ARCHER_FIGHTING_STYLE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ardent Armor Proficiency"] = new engine.RulesElement({
    name: "Ardent Armor Proficiency",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2344",
    source: "Player's Handbook 3",
    categories: ["Ardent Armor Proficiency", "ID_FMP_CLASS_FEATURE_2344", "ID_FMP_HYBRID_CLASS_588", "Hybrid Ardent", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ardent Mantle"] = new engine.RulesElement({
    name: "Ardent Mantle",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2136",
    source: "Player's Handbook 3",
    categories: ["Ardent Mantle", "ID_FMP_CLASS_FEATURE_2136", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Ardent Mantle", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_2136"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ardent Mantle (Hybrid)"] = new engine.RulesElement({
    name: "Ardent Mantle (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2341",
    source: "Player's Handbook 3",
    categories: ["Ardent Mantle (Hybrid)", "ID_FMP_CLASS_FEATURE_2341", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Ardent Mantle (Hybrid)", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_2341"); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_ARDENT_MANTLE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ardent Surge"] = new engine.RulesElement({
    name: "Ardent Surge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2138",
    source: "Player's Handbook 3",
    categories: ["Ardent Surge", "ID_FMP_CLASS_FEATURE_2138", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10273"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ardent Surge (Hybrid)"] = new engine.RulesElement({
    name: "Ardent Surge (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2346",
    source: "Player's Handbook 3",
    categories: ["Ardent Surge (Hybrid)", "ID_FMP_CLASS_FEATURE_2346", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10273"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_ARDENT_SURGE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Argent Devastation"] = new engine.RulesElement({
    name: "Argent Devastation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2349",
    source: "Player's Handbook 3",
    categories: ["Argent Devastation", "ID_FMP_CLASS_FEATURE_2349", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Artful Dodger (Hybrid)"] = new engine.RulesElement({
    name: "Artful Dodger (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2472",
    source: "Player's Handbook 3",
    categories: ["Artful Dodger (Hybrid)", "ID_FMP_CLASS_FEATURE_2472", "ID_FMP_CLASS_FEATURE_2471", "Rogue Tactics (Hybrid)", "1"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return abilitymod(model.stat("cha")); });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_ARTFUL_DODGER"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Avalanche Flurry"] = new engine.RulesElement({
    name: "Avalanche Flurry",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2366",
    source: "Player's Handbook 3",
    categories: ["Avalanche Flurry", "ID_FMP_CLASS_FEATURE_2366", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Avenger's Censure (Hybrid)"] = new engine.RulesElement({
    name: "Avenger's Censure (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1821",
    source: "Player's Handbook 3",
    categories: ["Avenger's Censure (Hybrid)", "ID_FMP_CLASS_FEATURE_1821", "ID_FMP_HYBRID_CLASS_439", "Hybrid Avenger", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1192"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_AVENGER'S_CENSURE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Avenging Action"] = new engine.RulesElement({
    name: "Avenging Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2392",
    source: "Player's Handbook 3",
    categories: ["Avenging Action", "ID_FMP_CLASS_FEATURE_2392", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Avenging Action:When you spend an action point to take an extra action, enemies take radiant damage equal to your Constitution modifier when they make attacks while they're within 5 squares of you and damage your allies with those attacks. This effect lasts until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Barbarian Armored Agility"] = new engine.RulesElement({
    name: "Barbarian Armored Agility",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1823",
    source: "Player's Handbook 3",
    categories: ["Barbarian Armored Agility", "ID_FMP_CLASS_FEATURE_1823", "ID_FMP_HYBRID_CLASS_440", "Hybrid Barbarian", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1492"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bard Armor Proficiency"] = new engine.RulesElement({
    name: "Bard Armor Proficiency",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1825",
    source: "Player's Handbook 3",
    categories: ["Bard Armor Proficiency", "ID_FMP_CLASS_FEATURE_1825", "ID_FMP_HYBRID_CLASS_441", "Hybrid Bard", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Battle Instinct"] = new engine.RulesElement({
    name: "Battle Instinct",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2144",
    source: "Player's Handbook 3",
    categories: ["Battle Instinct", "ID_FMP_CLASS_FEATURE_2144", "11"],
    rules: function(model) {
      model.statadd("Initiative Misc", 2, "Power");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Battle Resilience"] = new engine.RulesElement({
    name: "Battle Resilience",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2353",
    source: "Player's Handbook 3",
    categories: ["Battle Resilience", "ID_FMP_CLASS_FEATURE_2353", "ID_FMP_CLASS_FEATURE_2175", "Psionic Study", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11155"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Battle Resilience (Hybrid)"] = new engine.RulesElement({
    name: "Battle Resilience (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2527",
    source: "Player's Handbook 3",
    categories: ["Battle Resilience (Hybrid)", "ID_FMP_CLASS_FEATURE_2527", "ID_FMP_CLASS_FEATURE_2526", "Psionic Study (Hybrid)", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11155"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_BATTLE_RESILIENCE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Battle Sovereignty"] = new engine.RulesElement({
    name: "Battle Sovereignty",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2431",
    source: "Player's Handbook 3",
    categories: ["Battle Sovereignty", "ID_FMP_CLASS_FEATURE_2431", "21"],
    rules: function(model) {
      model.statadd("Initiative Misc", 10);
      model.statadd("weapon:attack", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Battlefront Leader (Hybrid)"] = new engine.RulesElement({
    name: "Battlefront Leader (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2544",
    source: "Player's Handbook 3",
    categories: ["Battlefront Leader (Hybrid)", "ID_FMP_CLASS_FEATURE_2544", "ID_FMP_CLASS_FEATURE_2427", "Warlord Leadership", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)"]);
      model.grant(model.elements.id["ID_FMP_POWER_10887"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_BATTLEFRONT_LEADER"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Battlemind Armor Proficiency"] = new engine.RulesElement({
    name: "Battlemind Armor Proficiency",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2412",
    source: "Player's Handbook 3",
    categories: ["Battlemind Armor Proficiency", "ID_FMP_CLASS_FEATURE_2412", "ID_FMP_HYBRID_CLASS_590", "Hybrid Battlemind", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(SCALE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Battlerager Vigor (Hybrid)"] = new engine.RulesElement({
    name: "Battlerager Vigor (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2170",
    source: "Player's Handbook 3",
    categories: ["Battlerager Vigor (Hybrid)", "ID_FMP_CLASS_FEATURE_2170", "ID_FMP_CLASS_FEATURE_1830", "Fighter Combat Talent", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_BATTLERAGER_VIGOR"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Beast Mastery (Hybrid)"] = new engine.RulesElement({
    name: "Beast Mastery (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2448",
    source: "Player's Handbook 3",
    categories: ["Beast Mastery (Hybrid)", "ID_FMP_CLASS_FEATURE_2448", "ID_FMP_CLASS_FEATURE_1836", "Ranger Fighting Style", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1030"]);
      model.statadd("BEAST.attack rolls", -1);
      model.statadd("BEAST.AC", -1);
      model.statadd("BEAST.Fortitude Defense", -1);
      model.statadd("BEAST.Reflex Defense", -1);
      model.statadd("BEAST.Will Defense", -1);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_BEAST_MASTERY"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Beguiling Advantage"] = new engine.RulesElement({
    name: "Beguiling Advantage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2176",
    source: "Player's Handbook 3",
    categories: ["Beguiling Advantage", "ID_FMP_CLASS_FEATURE_2176", "11"],
    rules: function(model) {
      model.statadd("melee:damage", function() { /* against dazed, slowed, or stunned enemies */ return model.stat("Charisma modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blade Guide"] = new engine.RulesElement({
    name: "Blade Guide",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2354",
    source: "Player's Handbook 3",
    categories: ["Blade Guide", "ID_FMP_CLASS_FEATURE_2354", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11200"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bloodbond"] = new engine.RulesElement({
    name: "Bloodbond",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1954",
    source: "Player's Handbook 3",
    categories: ["Bloodbond", "ID_FMP_CLASS_FEATURE_1954", "ID_FMP_CLASS_FEATURE_1944", "Seeker's Bond", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9500"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bloodbond (Hybrid)"] = new engine.RulesElement({
    name: "Bloodbond (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2542",
    source: "Player's Handbook 3",
    categories: ["Bloodbond (Hybrid)", "ID_FMP_CLASS_FEATURE_2542", "ID_FMP_CLASS_FEATURE_2420", "Seeker's Bond (Hybrid)", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9500"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_BLOODBOND"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bloodied Aspect"] = new engine.RulesElement({
    name: "Bloodied Aspect",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2330",
    source: "Player's Handbook 3",
    categories: ["Bloodied Aspect", "ID_FMP_CLASS_FEATURE_2330", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bloodied Vigor"] = new engine.RulesElement({
    name: "Bloodied Vigor",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2332",
    source: "Player's Handbook 3",
    categories: ["Bloodied Vigor", "ID_FMP_CLASS_FEATURE_2332", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bloody Vengeance"] = new engine.RulesElement({
    name: "Bloody Vengeance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2391",
    source: "Player's Handbook 3",
    categories: ["Bloody Vengeance", "ID_FMP_CLASS_FEATURE_2391", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Borrow from the Future"] = new engine.RulesElement({
    name: "Borrow from the Future",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2383",
    source: "Player's Handbook 3",
    categories: ["Borrow from the Future", "ID_FMP_CLASS_FEATURE_2383", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Boundless Morale"] = new engine.RulesElement({
    name: "Boundless Morale",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2442",
    source: "Player's Handbook 3",
    categories: ["Boundless Morale", "ID_FMP_CLASS_FEATURE_2442", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bravura Presence (Hybrid)"] = new engine.RulesElement({
    name: "Bravura Presence (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2467",
    source: "Player's Handbook 3",
    categories: ["Bravura Presence (Hybrid)", "ID_FMP_CLASS_FEATURE_2467", "ID_FMP_CLASS_FEATURE_1846", "Commanding Presence (Hybrid)", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_BRAVURA_PRESENCE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Brawler Style (Hybrid)"] = new engine.RulesElement({
    name: "Brawler Style (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2529",
    source: "Player's Handbook 3",
    categories: ["Brawler Style (Hybrid)", "ID_FMP_CLASS_FEATURE_2529", "ID_FMP_CLASS_FEATURE_1830", "Fighter Combat Talent", "1"],
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
      model.statadd("Brawler Style (Hybrid)", 2);
      model.statadd("Brawler Style (Hybrid)", 2);
      model.statadd("Brawler Style (Hybrid)", 2);
      model.statadd("Unarmed group:attack", function() { return model.stat("Brawler Style (Hybrid)"); }, "Enhancement");
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_BRAWLER_STYLE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Brutal Arrows"] = new engine.RulesElement({
    name: "Brutal Arrows",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2406",
    source: "Player's Handbook 3",
    categories: ["Brutal Arrows", "ID_FMP_CLASS_FEATURE_2406", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Brutal Arrows:When you spend an action point to make a ranged or an area attack, you can reroll any of the attack's damage dice that come up as a 1 or a 2. You keep rerolling a die until you get a number other than 1 or 2.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Brutal Scoundrel (Hybrid)"] = new engine.RulesElement({
    name: "Brutal Scoundrel (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2473",
    source: "Player's Handbook 3",
    categories: ["Brutal Scoundrel (Hybrid)", "ID_FMP_CLASS_FEATURE_2473", "ID_FMP_CLASS_FEATURE_2471", "Rogue Tactics (Hybrid)", "1"],
    rules: function(model) {
      model.statadd("Sneak Attack", function() { return abilitymod(model.stat("Strength")); });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_BRUTAL_SCOUNDREL"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Canny Leader (Hybrid)"] = new engine.RulesElement({
    name: "Canny Leader (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2545",
    source: "Player's Handbook 3",
    categories: ["Canny Leader (Hybrid)", "ID_FMP_CLASS_FEATURE_2545", "ID_FMP_CLASS_FEATURE_2427", "Warlord Leadership", "1"],
    rules: function(model) {
      model.statadd("Insight Misc", 2);
      model.statadd("Perception Misc", 2);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_CANNY_LEADER"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Centered Breath"] = new engine.RulesElement({
    name: "Centered Breath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1544",
    source: "Player's Handbook 3",
    categories: ["Centered Breath", "ID_FMP_CLASS_FEATURE_1544", "ID_FMP_CLASS_FEATURE_1543", "Monastic Tradition", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7448"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Centered Breath", 1);
      model.statadd("Centered Breath", 1);
      model.statadd("Centered Breath", 1);
      model.statadd("Fortitude Defense", function() { return model.stat("Centered Breath"); });
      model.statadd("Centered Breath", 1);
      model.statadd("Centered Breath", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Centered Breath (Hybrid)"] = new engine.RulesElement({
    name: "Centered Breath (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2532",
    source: "Player's Handbook 3",
    categories: ["Centered Breath (Hybrid)", "ID_FMP_CLASS_FEATURE_2532", "ID_FMP_CLASS_FEATURE_2413", "Monastic Tradition (Hybrid)", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7448"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_CENTERED_BREATH"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Cerulean Action"] = new engine.RulesElement({
    name: "Cerulean Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1817",
    source: "Player's Handbook 3",
    categories: ["Cerulean Action", "ID_FMP_CLASS_FEATURE_1817", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Cerulean Action:When you spend an action point to use an at-will attack power that has a 1-point augmentation, you can use that augmentation without spending a power point.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Cerulean Sign Focus"] = new engine.RulesElement({
    name: "Cerulean Sign Focus",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1816",
    source: "Player's Handbook 3",
    categories: ["Cerulean Sign Focus", "ID_FMP_CLASS_FEATURE_1816", "11"],
    rules: function(model) {
      model.statadd("Will Defense", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Channel Divinity - Radiant Fist"] = new engine.RulesElement({
    name: "Channel Divinity - Radiant Fist",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1904",
    source: "Player's Handbook 3",
    categories: ["Channel Divinity - Radiant Fist", "ID_FMP_CLASS_FEATURE_1904", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_324"]);
      model.select('Feat', 1, "Channel Divinity - Radiant Fist", {
        filter: function(model, element) { return element.hasCategory("Divinity"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Channel Divinity (Hybrid Avenger)"] = new engine.RulesElement({
    name: "Channel Divinity (Hybrid Avenger)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1822",
    source: "Player's Handbook 3",
    categories: ["Channel Divinity (Hybrid Avenger)", "ID_FMP_CLASS_FEATURE_1822", "ID_FMP_HYBRID_CLASS_439", "Hybrid Avenger", "1"],
    rules: function(model) {
      model.select('Power', 1, "Channel Divinity (Hybrid Avenger)", {
        filter: function(model, element) { return (element.hasCategory("Abjure Undead") || element.hasCategory("Divine Guidance")); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_CHANNEL_DIVINITY"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Channel Divinity (Hybrid Cleric)"] = new engine.RulesElement({
    name: "Channel Divinity (Hybrid Cleric)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1826",
    source: "Player's Handbook 3",
    categories: ["Channel Divinity (Hybrid Cleric)", "ID_FMP_CLASS_FEATURE_1826", "ID_FMP_HYBRID_CLASS_352", "Hybrid Cleric", "1"],
    rules: function(model) {
      model.select('Power', 1, "Channel Divinity (Hybrid Cleric)", {
        filter: function(model, element) { return ((element.hasCategory("Divine Fortune") || element.hasCategory("Turn Undead")) || element.hasCategory("Healer's Mercy")); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_CHANNEL_DIVINITY"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Channel Divinity (Hybrid Invoker)"] = new engine.RulesElement({
    name: "Channel Divinity (Hybrid Invoker)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1831",
    source: "Player's Handbook 3",
    categories: ["Channel Divinity (Hybrid Invoker)", "ID_FMP_CLASS_FEATURE_1831", "ID_FMP_HYBRID_CLASS_443", "Hybrid Invoker", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5185"]);
      model.grant(model.elements.id["ID_FMP_POWER_7150"]);
      model.grant(model.elements.id["ID_FMP_POWER_5184"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_CHANNEL_DIVINITY"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Channel Divinity (Hybrid Paladin)"] = new engine.RulesElement({
    name: "Channel Divinity (Hybrid Paladin)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1833",
    source: "Player's Handbook 3",
    categories: ["Channel Divinity (Hybrid Paladin)", "ID_FMP_CLASS_FEATURE_1833", "ID_FMP_HYBRID_CLASS_354", "Hybrid Paladin", "1"],
    rules: function(model) {
      model.select('Power', 1, "Channel Divinity (Hybrid Paladin)", {
        filter: function(model, element) { return (element.hasCategory("Divine Mettle") || element.hasCategory("Divine Strength")); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_CHANNEL_DIVINITY"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Claws of the Dragon"] = new engine.RulesElement({
    name: "Claws of the Dragon",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2363",
    source: "Player's Handbook 3",
    categories: ["Claws of the Dragon", "ID_FMP_CLASS_FEATURE_2363", "16"],
    rules: function(model) {
      model.statadd("Flurry of Blows:damage", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Cleric Armor Proficiency"] = new engine.RulesElement({
    name: "Cleric Armor Proficiency",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1827",
    source: "Player's Handbook 3",
    categories: ["Cleric Armor Proficiency", "ID_FMP_CLASS_FEATURE_1827", "ID_FMP_HYBRID_CLASS_352", "Hybrid Cleric", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Combat Agility (Hybrid)"] = new engine.RulesElement({
    name: "Combat Agility (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2530",
    source: "Player's Handbook 3",
    categories: ["Combat Agility (Hybrid)", "ID_FMP_CLASS_FEATURE_2530", "ID_FMP_CLASS_FEATURE_2162", "Combat Specialty", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10469"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_COMBAT_AGILITY"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Combat Challenge (Hybrid)"] = new engine.RulesElement({
    name: "Combat Challenge (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1528",
    source: "Player's Handbook 3",
    categories: ["Combat Challenge (Hybrid)", "ID_FMP_CLASS_FEATURE_1528", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7419"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_COMBAT_CHALLENGE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Combat Leader (Hybrid)"] = new engine.RulesElement({
    name: "Combat Leader (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2464",
    source: "Player's Handbook 3",
    categories: ["Combat Leader (Hybrid)", "ID_FMP_CLASS_FEATURE_2464", "ID_FMP_CLASS_FEATURE_2427", "Warlord Leadership", "1"],
    rules: function(model) {
      model.statadd("Combat Leader", 2, "Combat Leader");
      model.statadd("Initiative Misc", function() { return model.stat("Combat Leader"); }, "Power");
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_COMBAT_LEADER"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Combat Specialty"] = new engine.RulesElement({
    name: "Combat Specialty",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2162",
    source: "Player's Handbook 3",
    categories: ["Combat Specialty", "ID_FMP_CLASS_FEATURE_2162", "ID_FMP_HYBRID_CLASS_353", "Hybrid Fighter", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Combat Specialty", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_2162"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Combat Superiority (Hybrid)"] = new engine.RulesElement({
    name: "Combat Superiority (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2463",
    source: "Player's Handbook 3",
    categories: ["Combat Superiority (Hybrid)", "ID_FMP_CLASS_FEATURE_2463", "ID_FMP_CLASS_FEATURE_2162", "Combat Specialty", "1"],
    rules: function(model) {
      model.statadd("Combat Superiority", function() { return model.stat("Wisdom modifier"); }, "Ability");
      model.statadd("attack rolls", function() { /* with opportunity attacks */ return model.stat("Combat Superiority"); });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_COMBAT_SUPERIORITY"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Commanding Presence (Hybrid)"] = new engine.RulesElement({
    name: "Commanding Presence (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1846",
    source: "Player's Handbook 3",
    categories: ["Commanding Presence (Hybrid)", "ID_FMP_CLASS_FEATURE_1846", "ID_FMP_HYBRID_CLASS_359", "Hybrid Warlord", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Commanding Presence (Hybrid)", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_1846"); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_COMMANDING_PRESENCE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Companion Spirit (Hybrid)"] = new engine.RulesElement({
    name: "Companion Spirit (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1837",
    source: "Player's Handbook 3",
    categories: ["Companion Spirit (Hybrid)", "ID_FMP_CLASS_FEATURE_1837", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6515"]);
      model.select('class feature', 1, "Companion Spirit (Hybrid)", {
        filter: function(model, element) { return (((element.hasCategory("Protector Spirit (Hybrid)") || element.hasCategory("Stalker Spirit (Hybrid)")) || element.hasCategory("Watcher Spirit (Hybrid)")) || element.hasCategory("World Speaker Spirit (Hybrid)")); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_COMPANION_SPIRIT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Constant Jailer"] = new engine.RulesElement({
    name: "Constant Jailer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2139",
    source: "Player's Handbook 3",
    categories: ["Constant Jailer", "ID_FMP_CLASS_FEATURE_2139", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Constant Swarm"] = new engine.RulesElement({
    name: "Constant Swarm",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2335",
    source: "Player's Handbook 3",
    categories: ["Constant Swarm", "ID_FMP_CLASS_FEATURE_2335", "16"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Covenant Manifestation"] = new engine.RulesElement({
    name: "Covenant Manifestation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1512",
    source: "Player's Handbook 3",
    categories: ["Covenant Manifestation", "ID_FMP_CLASS_FEATURE_1512", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Covenant Manifestation", {
        filter: function(model, element) { return element.hasCategory("Covenant Manifestation"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Crimson Hunter's Action"] = new engine.RulesElement({
    name: "Crimson Hunter's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1946",
    source: "Player's Handbook 3",
    categories: ["Crimson Hunter's Action", "ID_FMP_CLASS_FEATURE_1946", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Crimson Hunter's Action:When you spend an action point to take an extra action, you gain a +1 bonus to speed until the end of the encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Crushing Walls"] = new engine.RulesElement({
    name: "Crushing Walls",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2142",
    source: "Player's Handbook 3",
    categories: ["Crushing Walls", "ID_FMP_CLASS_FEATURE_2142", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Cunning Sneak (Hybrid)"] = new engine.RulesElement({
    name: "Cunning Sneak (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2541",
    source: "Player's Handbook 3",
    categories: ["Cunning Sneak (Hybrid)", "ID_FMP_CLASS_FEATURE_2541", "ID_FMP_CLASS_FEATURE_2471", "Rogue Tactics (Hybrid)", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_CUNNING_SNEAK"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dark Pact (Hybrid)"] = new engine.RulesElement({
    name: "Dark Pact (Hybrid)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DARK_PACT_(HYBRID)",
    source: "Player's Handbook 3",
    categories: ["Dark Pact (Hybrid)", "ID_INTERNAL_CLASS_FEATURE_DARK_PACT_(HYBRID)", "Hybrid Pact"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASPACT_DARK_PACT"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_DARK_PACT"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_MATCHED_WARLOCK_PACT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Death Arrows"] = new engine.RulesElement({
    name: "Death Arrows",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2407",
    source: "Player's Handbook 3",
    categories: ["Death Arrows", "ID_FMP_CLASS_FEATURE_2407", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Deathless Hunter"] = new engine.RulesElement({
    name: "Deathless Hunter",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2436",
    source: "Player's Handbook 3",
    categories: ["Deathless Hunter", "ID_FMP_CLASS_FEATURE_2436", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Defensive Shift"] = new engine.RulesElement({
    name: "Defensive Shift",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_52",
    source: "Player's Handbook 3",
    categories: ["Defensive Shift", "ID_FMP_CLASS_FEATURE_52", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Defiant Word"] = new engine.RulesElement({
    name: "Defiant Word",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2389",
    source: "Player's Handbook 3",
    categories: ["Defiant Word", "ID_FMP_CLASS_FEATURE_2389", "ID_FMP_CLASS_FEATURE_2388", "Runic Artistry", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Demanding Action"] = new engine.RulesElement({
    name: "Demanding Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2179",
    source: "Player's Handbook 3",
    categories: ["Demanding Action", "ID_FMP_CLASS_FEATURE_2179", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Demanding Action:When you spend an action point to take an extra action, you can use your mind spike power as a free action until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Diamond Body"] = new engine.RulesElement({
    name: "Diamond Body",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2423",
    source: "Player's Handbook 3",
    categories: ["Diamond Body", "ID_FMP_CLASS_FEATURE_2423", "21"],
    rules: function(model) {
      model.statadd("Dexterity", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Diamond Perfection"] = new engine.RulesElement({
    name: "Diamond Perfection",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2425",
    source: "Player's Handbook 3",
    categories: ["Diamond Perfection", "ID_FMP_CLASS_FEATURE_2425", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Discarnate Form"] = new engine.RulesElement({
    name: "Discarnate Form",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1852",
    source: "Player's Handbook 3",
    categories: ["Discarnate Form", "ID_FMP_CLASS_FEATURE_1852", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Discipline Focus"] = new engine.RulesElement({
    name: "Discipline Focus",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1810",
    source: "Player's Handbook 3",
    categories: ["Discipline Focus", "ID_FMP_CLASS_FEATURE_1810", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Discipline Focus", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_1810"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Discipline Focus (Hybrid)"] = new engine.RulesElement({
    name: "Discipline Focus (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2415",
    source: "Player's Handbook 3",
    categories: ["Discipline Focus (Hybrid)", "ID_FMP_CLASS_FEATURE_2415", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Discipline Focus (Hybrid)", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_2415"); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_DISCIPLINE_FOCUS"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Divine Challenge (Hybrid)"] = new engine.RulesElement({
    name: "Divine Challenge (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1529",
    source: "Player's Handbook 3",
    categories: ["Divine Challenge (Hybrid)", "ID_FMP_CLASS_FEATURE_1529", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_805"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_DIVINE_CHALLENGE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon's Action"] = new engine.RulesElement({
    name: "Dragon's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2362",
    source: "Player's Handbook 3",
    categories: ["Dragon's Action", "ID_FMP_CLASS_FEATURE_2362", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Dragon's Action:When you spend an action point to take an extra action, you can use a free action to deal fire damage to each enemy in a close blast 3. The fire damage equals 5 + your Strength modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dreaming Advantage"] = new engine.RulesElement({
    name: "Dreaming Advantage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2379",
    source: "Player's Handbook 3",
    categories: ["Dreaming Advantage", "ID_FMP_CLASS_FEATURE_2379", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Dreaming Advantage:When you spend an action point to make a psionic attack, you gain combat advantage for that attack against any enemy adjacent to your dream form.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dreaming Manifestation"] = new engine.RulesElement({
    name: "Dreaming Manifestation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2380",
    source: "Player's Handbook 3",
    categories: ["Dreaming Manifestation", "ID_FMP_CLASS_FEATURE_2380", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Druid Armor Proficiency"] = new engine.RulesElement({
    name: "Druid Armor Proficiency",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1828",
    source: "Player's Handbook 3",
    categories: ["Druid Armor Proficiency", "ID_FMP_CLASS_FEATURE_1828", "ID_FMP_HYBRID_CLASS_442", "Hybrid Druid", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Eldritch Pact (Hybrid)"] = new engine.RulesElement({
    name: "Eldritch Pact (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1844",
    source: "Player's Handbook 3",
    categories: ["Eldritch Pact (Hybrid)", "ID_FMP_CLASS_FEATURE_1844", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Eldritch Pact (Hybrid)", {
        filter: function(model, element) { return element.hasCategory("Hybrid Pact"); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_ELDRITCH_PACT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Escaping Action"] = new engine.RulesElement({
    name: "Escaping Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2409",
    source: "Player's Handbook 3",
    categories: ["Escaping Action", "ID_FMP_CLASS_FEATURE_2409", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Escaping Action:When you spend an action point to take an extra action, you can shift as a minor action until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Eternal Warrior"] = new engine.RulesElement({
    name: "Eternal Warrior",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2356",
    source: "Player's Handbook 3",
    categories: ["Eternal Warrior", "ID_FMP_CLASS_FEATURE_2356", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Expanded Discipline Focus"] = new engine.RulesElement({
    name: "Expanded Discipline Focus",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2416",
    source: "Player's Handbook 3",
    categories: ["Expanded Discipline Focus", "ID_FMP_CLASS_FEATURE_2416", "ID_FMP_HYBRID_CLASS_610", "Hybrid Psion", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11268"]);
      model.grant(model.elements.id["ID_FMP_POWER_8224"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Expanded Tradition"] = new engine.RulesElement({
    name: "Expanded Tradition",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2414",
    source: "Player's Handbook 3",
    categories: ["Expanded Tradition", "ID_FMP_CLASS_FEATURE_2414", "ID_FMP_HYBRID_CLASS_609", "Hybrid Monk", "1"],
    rules: function(model) {
      model.statadd("Expanded Tradition", 1);
      model.statadd("Expanded Tradition", 1);
      model.statadd("Expanded Tradition", 1);
      model.statadd("Fortitude Defense", function() { return model.stat("Expanded Tradition"); });
      model.statadd("Will Defense", function() { return model.stat("Expanded Tradition"); });
      model.statadd("Expanded Tradition AC", function() { 
        if (model.wearing('Weapon')) {
          return 1;
        } else return 0;
       });
      model.statadd("AC", function() { 
        if (!(model.wearing('Weapon', ['unarmed']))) {
          return model.stat("Expanded Tradition");
        } else return 0;
       }, "Shield");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Faultless Tracker"] = new engine.RulesElement({
    name: "Faultless Tracker",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2435",
    source: "Player's Handbook 3",
    categories: ["Faultless Tracker", "ID_FMP_CLASS_FEATURE_2435", "24"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_VISION_DARKVISION"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fearsome Zone"] = new engine.RulesElement({
    name: "Fearsome Zone",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2352",
    source: "Player's Handbook 3",
    categories: ["Fearsome Zone", "ID_FMP_CLASS_FEATURE_2352", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fey Pact (Hybrid)"] = new engine.RulesElement({
    name: "Fey Pact (Hybrid)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FEY_PACT_(HYBRID)",
    source: "Player's Handbook 3",
    categories: ["Fey Pact (Hybrid)", "ID_INTERNAL_CLASS_FEATURE_FEY_PACT_(HYBRID)", "Hybrid Pact"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASPACT_FEY_PACT"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_FEY_PACT"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_MATCHED_WARLOCK_PACT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fighter Armor Proficiency"] = new engine.RulesElement({
    name: "Fighter Armor Proficiency",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1829",
    source: "Player's Handbook 3",
    categories: ["Fighter Armor Proficiency", "ID_FMP_CLASS_FEATURE_1829", "ID_FMP_HYBRID_CLASS_353", "Hybrid Fighter", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(SCALE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fighter Combat Talent"] = new engine.RulesElement({
    name: "Fighter Combat Talent",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1830",
    source: "Player's Handbook 3",
    categories: ["Fighter Combat Talent", "ID_FMP_CLASS_FEATURE_1830", "ID_FMP_HYBRID_CLASS_353", "Hybrid Fighter", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Fighter Combat Talent", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_1830"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fleeing Fear"] = new engine.RulesElement({
    name: "Fleeing Fear",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2350",
    source: "Player's Handbook 3",
    categories: ["Fleeing Fear", "ID_FMP_CLASS_FEATURE_2350", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Flicker into Nothing"] = new engine.RulesElement({
    name: "Flicker into Nothing",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1849",
    source: "Player's Handbook 3",
    categories: ["Flicker into Nothing", "ID_FMP_CLASS_FEATURE_1849", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Flicker into Nothing:When you spend an action point to attack with a psionic power, you become insubstantial until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Forge Rune Action"] = new engine.RulesElement({
    name: "Forge Rune Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2399",
    source: "Player's Handbook 3",
    categories: ["Forge Rune Action", "ID_FMP_CLASS_FEATURE_2399", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Forge Rune Action:When you spend an action point to take an extra action, you and each ally within 5 squares of you gain a +4 bonus to weapon damage rolls until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ghostwalker's Action"] = new engine.RulesElement({
    name: "Ghostwalker's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1551",
    source: "Player's Handbook 3",
    categories: ["Ghostwalker's Action", "ID_FMP_CLASS_FEATURE_1551", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Ghostwalker's Action:When you spend an action point to make an attack, any enemy granting combat advantage to you that is hit by that attack is weakened until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Guardian Shield"] = new engine.RulesElement({
    name: "Guardian Shield",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2401",
    source: "Player's Handbook 3",
    categories: ["Guardian Shield", "ID_FMP_CLASS_FEATURE_2401", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Guarding Shot"] = new engine.RulesElement({
    name: "Guarding Shot",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1949",
    source: "Player's Handbook 3",
    categories: ["Guarding Shot", "ID_FMP_CLASS_FEATURE_1949", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Guided Action"] = new engine.RulesElement({
    name: "Guided Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2355",
    source: "Player's Handbook 3",
    categories: ["Guided Action", "ID_FMP_CLASS_FEATURE_2355", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Guided Action:When you spend an action point to take an extra action, you can reroll your next attack roll that misses before the end of your turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Healing Infusion (Hybrid)"] = new engine.RulesElement({
    name: "Healing Infusion (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2159",
    source: "Player's Handbook 3",
    categories: ["Healing Infusion (Hybrid)", "ID_FMP_CLASS_FEATURE_2159", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4128"]);
      model.grant(model.elements.id["ID_FMP_POWER_7635"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_HEALING_INFUSION"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Healing Spirit (Hybrid)"] = new engine.RulesElement({
    name: "Healing Spirit (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1838",
    source: "Player's Handbook 3",
    categories: ["Healing Spirit (Hybrid)", "ID_FMP_CLASS_FEATURE_1838", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_3773"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_HEALING_SPIRIT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Healing Word (Hybrid)"] = new engine.RulesElement({
    name: "Healing Word (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1527",
    source: "Player's Handbook 3",
    categories: ["Healing Word (Hybrid)", "ID_FMP_CLASS_FEATURE_1527", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1455"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_HEALING_WORD"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Holy Radiance"] = new engine.RulesElement({
    name: "Holy Radiance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2394",
    source: "Player's Handbook 3",
    categories: ["Holy Radiance", "ID_FMP_CLASS_FEATURE_2394", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Hunter Fighting Style (Hybrid)"] = new engine.RulesElement({
    name: "Hunter Fighting Style (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2538",
    source: "Player's Handbook 3",
    categories: ["Hunter Fighting Style (Hybrid)", "ID_FMP_CLASS_FEATURE_2538", "ID_FMP_CLASS_FEATURE_1836", "Ranger Fighting Style", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_FEAT_157"]);
      model.statadd("AC", function() { /* against opportunity attacks you provoke by making a ranged attack */ return 4; });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_HUNTER_FIGHTING_STYLE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hunter's Quarry (Hybrid)"] = new engine.RulesElement({
    name: "Hunter's Quarry (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1530",
    source: "Player's Handbook 3",
    categories: ["Hunter's Quarry (Hybrid)", "ID_FMP_CLASS_FEATURE_1530", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5598"]);
      model.statadd("Hunter's Quarry Dice", 1);
      model.statadd("Hunter's Quarry Dice", 1);
      model.statadd("Hunter's Quarry Dice", 1);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_HUNTER'S_QUARRY"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Encounter Power"] = new engine.RulesElement({
    name: "Hybrid Encounter Power",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_ENCOUNTER_POWER",
    source: "Player's Handbook 3",
    categories: ["Hybrid Encounter Power", "ID_INTERNAL_CLASS_FEATURE_HYBRID_ENCOUNTER_POWER", "ID_FMP_CLASS_FEATURE_2340", "Psionic Augmentation (Hybrid)"],
    rules: function(model) {
      model.select('Power', 1, "Hybrid Encounter Power", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("encounter") && element.hasCategory("1")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hybrid Power Point Option"] = new engine.RulesElement({
    name: "Hybrid Power Point Option",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HYBRID_POWER_POINT_OPTION",
    source: "Player's Handbook 3",
    categories: ["Hybrid Power Point Option", "ID_INTERNAL_CLASS_FEATURE_HYBRID_POWER_POINT_OPTION", "ID_FMP_CLASS_FEATURE_2340", "Psionic Augmentation (Hybrid)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_HYBRID_POWER_POINTS"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Impenetrable Iron"] = new engine.RulesElement({
    name: "Impenetrable Iron",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2359",
    source: "Player's Handbook 3",
    categories: ["Impenetrable Iron", "ID_FMP_CLASS_FEATURE_2359", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Imprisoning Action"] = new engine.RulesElement({
    name: "Imprisoning Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2140",
    source: "Player's Handbook 3",
    categories: ["Imprisoning Action", "ID_FMP_CLASS_FEATURE_2140", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Imprisoning Action:When you spend an action point to make an attack and the attack hits, the target is also restrained (save ends).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Indomitable Iron"] = new engine.RulesElement({
    name: "Indomitable Iron",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2357",
    source: "Player's Handbook 3",
    categories: ["Indomitable Iron", "ID_FMP_CLASS_FEATURE_2357", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Indomitable Iron:When you spend an action point to take an extra action, you gain a +4 bonus to AC and damage rolls until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Indomitable Steel"] = new engine.RulesElement({
    name: "Indomitable Steel",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2400",
    source: "Player's Handbook 3",
    categories: ["Indomitable Steel", "ID_FMP_CLASS_FEATURE_2400", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Inescapable Vengeance"] = new engine.RulesElement({
    name: "Inescapable Vengeance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2393",
    source: "Player's Handbook 3",
    categories: ["Inescapable Vengeance", "ID_FMP_CLASS_FEATURE_2393", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Inevitable Shot"] = new engine.RulesElement({
    name: "Inevitable Shot",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1943",
    source: "Player's Handbook 3",
    categories: ["Inevitable Shot", "ID_FMP_CLASS_FEATURE_1943", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9501"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Inevitable Shot (Hybrid)"] = new engine.RulesElement({
    name: "Inevitable Shot (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2419",
    source: "Player's Handbook 3",
    categories: ["Inevitable Shot (Hybrid)", "ID_FMP_CLASS_FEATURE_2419", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9501"]);
      model.grant(model.elements.id["ID_FMP_POWER_9501"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_INEVITABLE_SHOT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Inexorable Mountain's Action"] = new engine.RulesElement({
    name: "Inexorable Mountain's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2365",
    source: "Player's Handbook 3",
    categories: ["Inexorable Mountain's Action", "ID_FMP_CLASS_FEATURE_2365", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Inexorable Mountain's Action:When you spend an action point to take an extra action, your stone fist flurry of blows deals extra damage equal to your Strength modifier until the end of the turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Infernal Pact (Hybrid)"] = new engine.RulesElement({
    name: "Infernal Pact (Hybrid)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_INFERNAL_PACT_(HYBRID)",
    source: "Player's Handbook 3",
    categories: ["Infernal Pact (Hybrid)", "ID_INTERNAL_CLASS_FEATURE_INFERNAL_PACT_(HYBRID)", "Hybrid Pact"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASPACT_INFERNAL_PACT"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_INFERNAL_PACT"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_MATCHED_WARLOCK_PACT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Insightful Presence (Hybrid)"] = new engine.RulesElement({
    name: "Insightful Presence (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2546",
    source: "Player's Handbook 3",
    categories: ["Insightful Presence (Hybrid)", "ID_FMP_CLASS_FEATURE_2546", "ID_FMP_CLASS_FEATURE_1846", "Commanding Presence (Hybrid)", "1"],
    rules: function(model) {
      model.statadd("ALLY.Action Point", "Insightful Presence (Hybrid):When an ally you can see spends an action point to take an extra action, that ally gains a bonus to all defenses equal to half your Wisdom modifier or half your Charisma modifier until the end of your next turn");
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_INSIGHTFUL_PRESENCE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Inspiring Presence (Hybrid)"] = new engine.RulesElement({
    name: "Inspiring Presence (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2465",
    source: "Player's Handbook 3",
    categories: ["Inspiring Presence (Hybrid)", "ID_FMP_CLASS_FEATURE_2465", "ID_FMP_CLASS_FEATURE_1846", "Commanding Presence (Hybrid)", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_INSPIRING_PRESENCE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Inspiring Word (Hybrid)"] = new engine.RulesElement({
    name: "Inspiring Word (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1534",
    source: "Player's Handbook 3",
    categories: ["Inspiring Word (Hybrid)", "ID_FMP_CLASS_FEATURE_1534", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1590"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_INSPIRING_WORD"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Invigorating Light"] = new engine.RulesElement({
    name: "Invigorating Light",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2396",
    source: "Player's Handbook 3",
    categories: ["Invigorating Light", "ID_FMP_CLASS_FEATURE_2396", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Invigorating Light:You can spend an action point to enable one ally within 5 squares of you to take a standard action as a free action, instead of taking an extra action yourself.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Invincible"] = new engine.RulesElement({
    name: "Invincible",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2433",
    source: "Player's Handbook 3",
    categories: ["Invincible", "ID_FMP_CLASS_FEATURE_2433", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Invoker Armor proficiency"] = new engine.RulesElement({
    name: "Invoker Armor proficiency",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1832",
    source: "Player's Handbook 3",
    categories: ["Invoker Armor proficiency", "ID_FMP_CLASS_FEATURE_1832", "ID_FMP_HYBRID_CLASS_443", "Hybrid Invoker", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Iron Control"] = new engine.RulesElement({
    name: "Iron Control",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2358",
    source: "Player's Handbook 3",
    categories: ["Iron Control", "ID_FMP_CLASS_FEATURE_2358", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Keen Missile"] = new engine.RulesElement({
    name: "Keen Missile",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1948",
    source: "Player's Handbook 3",
    categories: ["Keen Missile", "ID_FMP_CLASS_FEATURE_1948", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Lay Bare the Mind"] = new engine.RulesElement({
    name: "Lay Bare the Mind",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2428",
    source: "Player's Handbook 3",
    categories: ["Lay Bare the Mind", "ID_FMP_CLASS_FEATURE_2428", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Loan from the Past"] = new engine.RulesElement({
    name: "Loan from the Past",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2382",
    source: "Player's Handbook 3",
    categories: ["Loan from the Past", "ID_FMP_CLASS_FEATURE_2382", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Lord of All Runes"] = new engine.RulesElement({
    name: "Lord of All Runes",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2438",
    source: "Player's Handbook 3",
    categories: ["Lord of All Runes", "ID_FMP_CLASS_FEATURE_2438", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Majestic Word (Hybrid)"] = new engine.RulesElement({
    name: "Majestic Word (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1824",
    source: "Player's Handbook 3",
    categories: ["Majestic Word (Hybrid)", "ID_FMP_CLASS_FEATURE_1824", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2339"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_MAJESTIC_WORD"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Manifest Dream Form"] = new engine.RulesElement({
    name: "Manifest Dream Form",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2378",
    source: "Player's Handbook 3",
    categories: ["Manifest Dream Form", "ID_FMP_CLASS_FEATURE_2378", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11346"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Manifestation of Malediction"] = new engine.RulesElement({
    name: "Manifestation of Malediction",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_MANIFESTATION_OF_MALEDICTION",
    source: "Player's Handbook 3",
    categories: ["Manifestation of Malediction", "ID_INTERNAL_CLASS_FEATURE_MANIFESTATION_OF_MALEDICTION", "Covenant Manifestation"]
  });
  byID[te.id] = te;
  
  te = class_feature["Manifestation of Preservation"] = new engine.RulesElement({
    name: "Manifestation of Preservation",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_MANIFESTATION_OF_PRESERVATION",
    source: "Player's Handbook 3",
    categories: ["Manifestation of Preservation", "ID_INTERNAL_CLASS_FEATURE_MANIFESTATION_OF_PRESERVATION", "Covenant Manifestation"]
  });
  byID[te.id] = te;
  
  te = class_feature["Manifestation of Wrath"] = new engine.RulesElement({
    name: "Manifestation of Wrath",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_MANIFESTATION_OF_WRATH",
    source: "Player's Handbook 3",
    categories: ["Manifestation of Wrath", "ID_INTERNAL_CLASS_FEATURE_MANIFESTATION_OF_WRATH", "Covenant Manifestation"]
  });
  byID[te.id] = te;
  
  te = class_feature["Mantle of Clarity"] = new engine.RulesElement({
    name: "Mantle of Clarity",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2137",
    source: "Player's Handbook 3",
    categories: ["Mantle of Clarity", "ID_FMP_CLASS_FEATURE_2137", "ID_FMP_CLASS_FEATURE_2136", "Ardent Mantle", "1"],
    rules: function(model) {
      model.statadd("Mantle of Clarity", function() { return model.stat("Wisdom modifier"); });
      model.statadd("AC", function() { /* against opportunity attacks */ return model.stat("Mantle of Clarity"); });
      model.statadd("Fortitude Defense", function() { /* against opportunity attacks */ return model.stat("Mantle of Clarity"); });
      model.statadd("Will Defense", function() { /* against opportunity attacks */ return model.stat("Mantle of Clarity"); });
      model.statadd("Reflex Defense", function() { /* against opportunity attacks */ return model.stat("Mantle of Clarity"); });
      model.grant(model.elements.id["ID_FMP_POWER_10272"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mantle of Clarity (Hybrid)"] = new engine.RulesElement({
    name: "Mantle of Clarity (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2342",
    source: "Player's Handbook 3",
    categories: ["Mantle of Clarity (Hybrid)", "ID_FMP_CLASS_FEATURE_2342", "ID_FMP_CLASS_FEATURE_2341", "Ardent Mantle (Hybrid)", "1"],
    rules: function(model) {
      model.statadd("Mantle of Clarity (Hybrid)", function() { return model.stat("Wisdom modifier"); });
      model.statadd("AC", function() { /* against opportunity attacks */ return model.stat("Mantle of Clarity (Hybrid)"); });
      model.statadd("Fortitude Defense", function() { /* against opportunity attacks */ return model.stat("Mantle of Clarity (Hybrid)"); });
      model.statadd("Will Defense", function() { /* against opportunity attacks */ return model.stat("Mantle of Clarity (Hybrid)"); });
      model.statadd("Reflex Defense", function() { /* against opportunity attacks */ return model.stat("Mantle of Clarity (Hybrid)"); });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_MANTLE_OF_CLARITY"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mantle of Elation"] = new engine.RulesElement({
    name: "Mantle of Elation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2336",
    source: "Player's Handbook 3",
    categories: ["Mantle of Elation", "ID_FMP_CLASS_FEATURE_2336", "ID_FMP_CLASS_FEATURE_2136", "Ardent Mantle", "1"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* on opportunity attacks */ return model.stat("Constitution modifier"); });
      model.grant(model.elements.id["ID_FMP_POWER_11060"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mantle of Elation (Hybrid)"] = new engine.RulesElement({
    name: "Mantle of Elation (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2343",
    source: "Player's Handbook 3",
    categories: ["Mantle of Elation (Hybrid)", "ID_FMP_CLASS_FEATURE_2343", "ID_FMP_CLASS_FEATURE_2341", "Ardent Mantle (Hybrid)", "1"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* on opportunity attacks */ return model.stat("Constitution modifier"); });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_MANTLE_OF_ELATION"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mantle Power"] = new engine.RulesElement({
    name: "Mantle Power",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2345",
    source: "Player's Handbook 3",
    categories: ["Mantle Power", "ID_FMP_CLASS_FEATURE_2345", "ID_FMP_HYBRID_CLASS_588", "Hybrid Ardent", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Marauder Fighting Style (Hybrid)"] = new engine.RulesElement({
    name: "Marauder Fighting Style (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2539",
    source: "Player's Handbook 3",
    categories: ["Marauder Fighting Style (Hybrid)", "ID_FMP_CLASS_FEATURE_2539", "ID_FMP_CLASS_FEATURE_1836", "Ranger Fighting Style", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_FEAT_172"]);
      model.statadd("Marauder Fighting Style (Hybrid)", function() { 
        if (!(model.wearing('Armor', ['Shield']))) {
          return 1;
        } else return 0;
       });
      model.statadd("Speed", function() { 
        if (!(model.wearing('Weapon', ['two-handed']))) {
          return model.stat("Marauder Fighting Style (Hybrid)");
        } else return 0;
       });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_MARAUDER_FIGHTING_STYLE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mighty Guardian"] = new engine.RulesElement({
    name: "Mighty Guardian",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2403",
    source: "Player's Handbook 3",
    categories: ["Mighty Guardian", "ID_FMP_CLASS_FEATURE_2403", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Mind Smash"] = new engine.RulesElement({
    name: "Mind Smash",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2180",
    source: "Player's Handbook 3",
    categories: ["Mind Smash", "ID_FMP_CLASS_FEATURE_2180", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Misty Step"] = new engine.RulesElement({
    name: "Misty Step",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1850",
    source: "Player's Handbook 3",
    categories: ["Misty Step", "ID_FMP_CLASS_FEATURE_1850", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Monastic Perfection"] = new engine.RulesElement({
    name: "Monastic Perfection",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2422",
    source: "Player's Handbook 3",
    categories: ["Monastic Perfection", "ID_FMP_CLASS_FEATURE_2422", "21"],
    rules: function(model) {
      model.select('Power', 2, "Monastic Perfection", {
        filter: function(model, element) { return (true /* NYI: Filter: $$LEVEL */ && element.hasCategory("ID_FMP_CLASS_362") && element.hasCategory("encounter")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Monastic Tradition"] = new engine.RulesElement({
    name: "Monastic Tradition",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1543",
    source: "Player's Handbook 3",
    categories: ["Monastic Tradition", "ID_FMP_CLASS_FEATURE_1543", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Monastic Tradition", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_1543"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Monastic Tradition (Hybrid)"] = new engine.RulesElement({
    name: "Monastic Tradition (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2413",
    source: "Player's Handbook 3",
    categories: ["Monastic Tradition (Hybrid)", "ID_FMP_CLASS_FEATURE_2413", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Monastic Tradition (Hybrid)", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_2413"); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_MONASTIC_TRADITION"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Moving Perfection"] = new engine.RulesElement({
    name: "Moving Perfection",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2424",
    source: "Player's Handbook 3",
    categories: ["Moving Perfection", "ID_FMP_CLASS_FEATURE_2424", "24"],
    rules: function(model) {
      model.statadd("Speed", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Nature's Wrath (Hybrid)"] = new engine.RulesElement({
    name: "Nature's Wrath (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1842",
    source: "Player's Handbook 3",
    categories: ["Nature's Wrath (Hybrid)", "ID_FMP_CLASS_FEATURE_1842", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5093"]);
      model.grant(model.elements.id["ID_FMP_POWER_5094"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_NATURE'S_WRATH"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Never Say Die"] = new engine.RulesElement({
    name: "Never Say Die",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_600",
    source: "Player's Handbook 3",
    categories: ["Never Say Die", "ID_FMP_CLASS_FEATURE_600", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Oath of Enmity (Hybrid)"] = new engine.RulesElement({
    name: "Oath of Enmity (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1820",
    source: "Player's Handbook 3",
    categories: ["Oath of Enmity (Hybrid)", "ID_FMP_CLASS_FEATURE_1820", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_3069"]);
      model.grant(model.elements.id["ID_FMP_POWER_3069"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_OATH_OF_ENMITY"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Of Two Worlds"] = new engine.RulesElement({
    name: "Of Two Worlds",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1552",
    source: "Player's Handbook 3",
    categories: ["Of Two Worlds", "ID_FMP_CLASS_FEATURE_1552", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["One-handed Weapon Talent (Hybrid)"] = new engine.RulesElement({
    name: "One-handed Weapon Talent (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2460",
    source: "Player's Handbook 3",
    categories: ["One-handed Weapon Talent (Hybrid)", "ID_FMP_CLASS_FEATURE_2460", "ID_FMP_CLASS_FEATURE_1830", "Fighter Combat Talent", "1"],
    rules: function(model) {
      model.statadd("one-hand:attack", 1);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_ONE-HANDED_WEAPON_TALENT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Opportunity Shot"] = new engine.RulesElement({
    name: "Opportunity Shot",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1951",
    source: "Player's Handbook 3",
    categories: ["Opportunity Shot", "ID_FMP_CLASS_FEATURE_1951", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Paladin Armor Proficiency"] = new engine.RulesElement({
    name: "Paladin Armor Proficiency",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1834",
    source: "Player's Handbook 3",
    categories: ["Paladin Armor Proficiency", "ID_FMP_CLASS_FEATURE_1834", "ID_FMP_HYBRID_CLASS_354", "Hybrid Paladin", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(SCALE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(PLATE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Paragon Power Points"] = new engine.RulesElement({
    name: "Paragon Power Points",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1818",
    source: "Player's Handbook 3,Player's Handbook Races: Tiefling,Psionic Power",
    categories: ["Paragon Power Points", "ID_FMP_CLASS_FEATURE_1818", "11"],
    rules: function(model) {
      model.statadd("Power Points", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Perfect Shard Swarm"] = new engine.RulesElement({
    name: "Perfect Shard Swarm",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2333",
    source: "Player's Handbook 3",
    categories: ["Perfect Shard Swarm", "ID_FMP_CLASS_FEATURE_2333", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Pinning Action"] = new engine.RulesElement({
    name: "Pinning Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1950",
    source: "Player's Handbook 3",
    categories: ["Pinning Action", "ID_FMP_CLASS_FEATURE_1950", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Pinning Action:When you spend an action point to make a ranged basic attack, targets hit by the attack are also immobilized and grant combat advantage until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Preternatural Instinct"] = new engine.RulesElement({
    name: "Preternatural Instinct",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1865",
    source: "Player's Handbook 3",
    categories: ["Preternatural Instinct", "ID_FMP_CLASS_FEATURE_1865", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Prime Shot (Hybrid)"] = new engine.RulesElement({
    name: "Prime Shot (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2536",
    source: "Player's Handbook 3",
    categories: ["Prime Shot (Hybrid)", "ID_FMP_CLASS_FEATURE_2536", "ID_FMP_CLASS_FEATURE_2426", "Ranger Combat Talent", "1"],
    rules: function(model) {
      model.statadd("Prime Shot Bonus", 1);
      model.statadd("ranged:attack", function() { /* if none of your allies are closer to the target */ return model.stat("Prime Shot Bonus"); });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_PRIME_SHOT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Protective Action"] = new engine.RulesElement({
    name: "Protective Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2402",
    source: "Player's Handbook 3",
    categories: ["Protective Action", "ID_FMP_CLASS_FEATURE_2402", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Protective Action:When you spend an action point to take an extra action, each ally you can see gains a +2 power bonus to all defenses until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Protector Spirit (Hybrid)"] = new engine.RulesElement({
    name: "Protector Spirit (Hybrid)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PROTECTOR_SPIRIT_(HYBRID)",
    source: "Player's Handbook 3",
    categories: ["Protector Spirit (Hybrid)", "ID_INTERNAL_CLASS_FEATURE_PROTECTOR_SPIRIT_(HYBRID)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_PROTECTOR_SPIRIT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Augmentation"] = new engine.RulesElement({
    name: "Psionic Augmentation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1812",
    source: "Player's Handbook 3",
    categories: ["Psionic Augmentation", "ID_FMP_CLASS_FEATURE_1812", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_AUGMENT_POWERS"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Augmentation (Hybrid)"] = new engine.RulesElement({
    name: "Psionic Augmentation (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2340",
    source: "Player's Handbook 3",
    categories: ["Psionic Augmentation (Hybrid)", "ID_FMP_CLASS_FEATURE_2340", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_PSIONIC_AUGMENTATION_DECIDER"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_PSIONIC_AUGMENTATION"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Cascade"] = new engine.RulesElement({
    name: "Psionic Cascade",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2181",
    source: "Player's Handbook 3",
    categories: ["Psionic Cascade", "ID_FMP_CLASS_FEATURE_2181", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Defense"] = new engine.RulesElement({
    name: "Psionic Defense",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_764",
    source: "Player's Handbook 3",
    categories: ["Psionic Defense", "ID_FMP_CLASS_FEATURE_764", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10438"]);
      model.grant(model.elements.id["ID_FMP_POWER_10439"]);
      model.grant(model.elements.id["ID_FMP_POWER_10440"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Defense (Hybrid)"] = new engine.RulesElement({
    name: "Psionic Defense (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2411",
    source: "Player's Handbook 3",
    categories: ["Psionic Defense (Hybrid)", "ID_FMP_CLASS_FEATURE_2411", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10438"]);
      model.select('Power', 1, "Psionic Defense (Hybrid)", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_POWER_10439") || element.hasCategory("ID_FMP_POWER_10440")); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_PSIONIC_DEFENSE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Study"] = new engine.RulesElement({
    name: "Psionic Study",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2175",
    source: "Player's Handbook 3",
    categories: ["Psionic Study", "ID_FMP_CLASS_FEATURE_2175", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Psionic Study", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_2175"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Study (Hybrid)"] = new engine.RulesElement({
    name: "Psionic Study (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2526",
    source: "Player's Handbook 3",
    categories: ["Psionic Study (Hybrid)", "ID_FMP_CLASS_FEATURE_2526", "ID_FMP_HYBRID_CLASS_590", "Hybrid Battlemind", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Psionic Study (Hybrid)", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_2526"); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_PSIONIC_STUDY"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psychic Resistance"] = new engine.RulesElement({
    name: "Psychic Resistance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1863",
    source: "Player's Handbook 3",
    categories: ["Psychic Resistance", "ID_FMP_CLASS_FEATURE_1863", "11"],
    rules: function(model) {
      model.statadd("resist:psychic", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Radiant Fist's Action"] = new engine.RulesElement({
    name: "Radiant Fist's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1549",
    source: "Player's Handbook 3",
    categories: ["Radiant Fist's Action", "ID_FMP_CLASS_FEATURE_1549", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Radiant Fist's Action:When you spend an action point to take an extra action, you regain 15 hit points. Until the end of your next turn, your attacks deal extra radiant damage equal to your Wisdom modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Radiant Hammer Fists"] = new engine.RulesElement({
    name: "Radiant Hammer Fists",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1550",
    source: "Player's Handbook 3",
    categories: ["Radiant Hammer Fists", "ID_FMP_CLASS_FEATURE_1550", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Ranger Armor Proficiency"] = new engine.RulesElement({
    name: "Ranger Armor Proficiency",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1835",
    source: "Player's Handbook 3",
    categories: ["Ranger Armor Proficiency", "ID_FMP_CLASS_FEATURE_1835", "ID_FMP_HYBRID_CLASS_355", "Hybrid Ranger", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ranger Combat Talent"] = new engine.RulesElement({
    name: "Ranger Combat Talent",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2426",
    source: "Player's Handbook 3",
    categories: ["Ranger Combat Talent", "ID_FMP_CLASS_FEATURE_2426", "ID_FMP_HYBRID_CLASS_355", "Hybrid Ranger", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Ranger Combat Talent", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_2426"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ranger Fighting Style"] = new engine.RulesElement({
    name: "Ranger Fighting Style",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1836",
    source: "Player's Handbook 3",
    categories: ["Ranger Fighting Style", "ID_FMP_CLASS_FEATURE_1836", "ID_FMP_HYBRID_CLASS_355", "Hybrid Ranger", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Ranger Fighting Style", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_1836"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rattling Arrows"] = new engine.RulesElement({
    name: "Rattling Arrows",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2405",
    source: "Player's Handbook 3",
    categories: ["Rattling Arrows", "ID_FMP_CLASS_FEATURE_2405", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Reinvigorating Attack"] = new engine.RulesElement({
    name: "Reinvigorating Attack",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2432",
    source: "Player's Handbook 3",
    categories: ["Reinvigorating Attack", "ID_FMP_CLASS_FEATURE_2432", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Relentless Hunter"] = new engine.RulesElement({
    name: "Relentless Hunter",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2434",
    source: "Player's Handbook 3",
    categories: ["Relentless Hunter", "ID_FMP_CLASS_FEATURE_2434", "21"],
    rules: function(model) {
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Resourceful Presence (Hybrid)"] = new engine.RulesElement({
    name: "Resourceful Presence (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2468",
    source: "Player's Handbook 3",
    categories: ["Resourceful Presence (Hybrid)", "ID_FMP_CLASS_FEATURE_2468", "ID_FMP_CLASS_FEATURE_1846", "Commanding Presence (Hybrid)", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_RESOURCEFUL_PRESENCE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Restoring Critical"] = new engine.RulesElement({
    name: "Restoring Critical",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2347",
    source: "Player's Handbook 3",
    categories: ["Restoring Critical", "ID_FMP_CLASS_FEATURE_2347", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Ride the Spirit"] = new engine.RulesElement({
    name: "Ride the Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1553",
    source: "Player's Handbook 3",
    categories: ["Ride the Spirit", "ID_FMP_CLASS_FEATURE_1553", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Rogue Combat Talent"] = new engine.RulesElement({
    name: "Rogue Combat Talent",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2469",
    source: "Player's Handbook 3",
    categories: ["Rogue Combat Talent", "ID_FMP_CLASS_FEATURE_2469", "ID_FMP_HYBRID_CLASS_356", "Hybrid Rogue", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Rogue Combat Talent", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_2469"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rogue Tactics (Hybrid)"] = new engine.RulesElement({
    name: "Rogue Tactics (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2471",
    source: "Player's Handbook 3",
    categories: ["Rogue Tactics (Hybrid)", "ID_FMP_CLASS_FEATURE_2471", "ID_FMP_HYBRID_CLASS_356", "Hybrid Rogue", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Rogue Tactics (Hybrid)", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_2471"); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_ROGUE_TACTICS"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rogue Weapon Talent (Hybrid)"] = new engine.RulesElement({
    name: "Rogue Weapon Talent (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2470",
    source: "Player's Handbook 3",
    categories: ["Rogue Weapon Talent (Hybrid)", "ID_FMP_CLASS_FEATURE_2470", "ID_FMP_CLASS_FEATURE_2469", "Rogue Combat Talent", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Dagger:attack", 1);
      model.statadd("Kukri:attack", 1);
      model.statadd("Parrying dagger:attack", 1);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_ROGUE_WEAPON_TALENT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rune Master"] = new engine.RulesElement({
    name: "Rune Master",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2384",
    source: "Player's Handbook 3",
    categories: ["Rune Master", "ID_FMP_CLASS_FEATURE_2384", "ID_FMP_HYBRID_CLASS_611", "Hybrid Runepriest", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2385"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2386"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rune of Destruction"] = new engine.RulesElement({
    name: "Rune of Destruction",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2385",
    source: "Player's Handbook 3",
    categories: ["Rune of Destruction", "ID_FMP_CLASS_FEATURE_2385", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Rune of Immortality"] = new engine.RulesElement({
    name: "Rune of Immortality",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2439",
    source: "Player's Handbook 3",
    categories: ["Rune of Immortality", "ID_FMP_CLASS_FEATURE_2439", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Rune of Mending"] = new engine.RulesElement({
    name: "Rune of Mending",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2387",
    source: "Player's Handbook 3",
    categories: ["Rune of Mending", "ID_FMP_CLASS_FEATURE_2387", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11353"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rune of Mending (Hybrid)"] = new engine.RulesElement({
    name: "Rune of Mending (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2417",
    source: "Player's Handbook 3",
    categories: ["Rune of Mending (Hybrid)", "ID_FMP_CLASS_FEATURE_2417", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11353"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_RUNE_OF_MENDING"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rune of Might"] = new engine.RulesElement({
    name: "Rune of Might",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2437",
    source: "Player's Handbook 3",
    categories: ["Rune of Might", "ID_FMP_CLASS_FEATURE_2437", "21"],
    rules: function(model) {
      model.statadd("Strength", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rune of Protection"] = new engine.RulesElement({
    name: "Rune of Protection",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2386",
    source: "Player's Handbook 3",
    categories: ["Rune of Protection", "ID_FMP_CLASS_FEATURE_2386", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Runepriest Armor Proficiency"] = new engine.RulesElement({
    name: "Runepriest Armor Proficiency",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2418",
    source: "Player's Handbook 3",
    categories: ["Runepriest Armor Proficiency", "ID_FMP_CLASS_FEATURE_2418", "ID_FMP_HYBRID_CLASS_611", "Hybrid Runepriest", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(SCALE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Runes of the Blade Smith"] = new engine.RulesElement({
    name: "Runes of the Blade Smith",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2398",
    source: "Player's Handbook 3",
    categories: ["Runes of the Blade Smith", "ID_FMP_CLASS_FEATURE_2398", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Runic Artistry"] = new engine.RulesElement({
    name: "Runic Artistry",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2388",
    source: "Player's Handbook 3",
    categories: ["Runic Artistry", "ID_FMP_CLASS_FEATURE_2388", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Runic Artistry", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_2388"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Running Attack (Hybrid)"] = new engine.RulesElement({
    name: "Running Attack (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2537",
    source: "Player's Handbook 3",
    categories: ["Running Attack (Hybrid)", "ID_FMP_CLASS_FEATURE_2537", "ID_FMP_CLASS_FEATURE_2426", "Ranger Combat Talent", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_RUNNING_ATTACK"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ruthless Ruffian (Hybrid)"] = new engine.RulesElement({
    name: "Ruthless Ruffian (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2474",
    source: "Player's Handbook 3",
    categories: ["Ruthless Ruffian (Hybrid)", "ID_FMP_CLASS_FEATURE_2474", "ID_FMP_CLASS_FEATURE_2471", "Rogue Tactics (Hybrid)", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLUB)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MACE)"]);
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Club");
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Mace");
      model.statadd("Sneak Attack Weapons", "Club");
      model.statadd("Sneak Attack Weapons", "Mace");
      model.statadd("club,rattling:damage", function() { return model.stat("Strength modifier"); }, "Ruthless Ruffian");
      model.statadd("mace,rattling:damage", function() { return model.stat("Strength modifier"); }, "Ruthless Ruffian");
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_RUTHLESS_RUFFIAN"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Seeker's Bond"] = new engine.RulesElement({
    name: "Seeker's Bond",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1944",
    source: "Player's Handbook 3",
    categories: ["Seeker's Bond", "ID_FMP_CLASS_FEATURE_1944", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Seeker's Bond", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_1944"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Seeker's Bond (Hybrid)"] = new engine.RulesElement({
    name: "Seeker's Bond (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2420",
    source: "Player's Handbook 3",
    categories: ["Seeker's Bond (Hybrid)", "ID_FMP_CLASS_FEATURE_2420", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Seeker's Bond (Hybrid)", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_2420"); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_SEEKER'S_BOND"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sharpshooter Talent (Hybrid)"] = new engine.RulesElement({
    name: "Sharpshooter Talent (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2540",
    source: "Player's Handbook 3",
    categories: ["Sharpshooter Talent (Hybrid)", "ID_FMP_CLASS_FEATURE_2540", "ID_FMP_CLASS_FEATURE_2469", "Rogue Combat Talent", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Sharpshooter Talent (Hybrid)", {
        filter: function(model, element) { return (element.hasCategory("ID_INTERNAL_CLASS_FEATURE_SHARPSHOOTER_TALENT_(CROSSBOW)") || element.hasCategory("ID_INTERNAL_CLASS_FEATURE_SHARPSHOOTER_TALENT_(SLING)")); }
      });
      model.grant(model.elements.id["ID_FMP_FEAT_139"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_SHARPSHOOTER_TALENT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shattering Fists"] = new engine.RulesElement({
    name: "Shattering Fists",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2364",
    source: "Player's Handbook 3",
    categories: ["Shattering Fists", "ID_FMP_CLASS_FEATURE_2364", "11"],
    rules: function(model) {
      model.statadd("Monk Unarmed Strike:damage", 2);
      model.statadd("ID_FMP_POWER_11207:damage", 2);
      model.statadd("Monk Unarmed Strike:damage", function() { /* against objects and creatures that have the construct keyword */ return model.stat("Strength modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Skirmishing Presence (Hybrid)"] = new engine.RulesElement({
    name: "Skirmishing Presence (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2547",
    source: "Player's Handbook 3",
    categories: ["Skirmishing Presence (Hybrid)", "ID_FMP_CLASS_FEATURE_2547", "ID_FMP_CLASS_FEATURE_1846", "Commanding Presence (Hybrid)", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_SKIRMISHING_PRESENCE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sneak Attack (Hybrid)"] = new engine.RulesElement({
    name: "Sneak Attack (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1531",
    source: "Player's Handbook 3",
    categories: ["Sneak Attack (Hybrid)", "ID_FMP_CLASS_FEATURE_1531", "1"],
    rules: function(model) {
      model.statadd("Sneak Attack Dice", 2);
      model.statadd("Sneak Attack Dice", 1);
      model.statadd("Sneak Attack Dice", 2);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_SNEAK_ATTACK"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sorcerous Power"] = new engine.RulesElement({
    name: "Sorcerous Power",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1840",
    source: "Player's Handbook 3",
    categories: ["Sorcerous Power", "ID_FMP_CLASS_FEATURE_1840", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Sorcerous Power", {
        filter: function(model, element) { return element.hasCategory("Sorcerous Power"); }
      });
      model.statadd("Sorcerous Power", 2);
      model.statadd("Sorcerous Power", 2);
      model.statadd("ID_FMP_CLASS_128:damage", function() { return model.stat("Sorcerous Power"); });
      model.statadd("ID_INTERNAL_CATEGORY_SORCERER_PARAGON_PATH:damage", function() { return model.stat("Sorcerous Power"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sorcerous Power Dexterity"] = new engine.RulesElement({
    name: "Sorcerous Power Dexterity",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_SORCEROUS_POWER_DEXTERITY",
    source: "Player's Handbook 3",
    categories: ["Sorcerous Power Dexterity", "ID_INTERNAL_CLASS_FEATURE_SORCEROUS_POWER_DEXTERITY", "Sorcerous Power"],
    rules: function(model) {
      model.statadd("Sorcerous Power", function() { return model.stat("Dexterity modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sorcerous Power Strength"] = new engine.RulesElement({
    name: "Sorcerous Power Strength",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_SORCEROUS_POWER_STRENGTH",
    source: "Player's Handbook 3",
    categories: ["Sorcerous Power Strength", "ID_INTERNAL_CLASS_FEATURE_SORCEROUS_POWER_STRENGTH", "Sorcerous Power"],
    rules: function(model) {
      model.statadd("Sorcerous Power", function() { return model.stat("Strength modifier"); });
      model.statadd("AC", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return model.stat("Strength modifier");
        } else return 0;
       }, "Ability");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Soul of the Sorcerer"] = new engine.RulesElement({
    name: "Soul of the Sorcerer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1841",
    source: "Player's Handbook 3",
    categories: ["Soul of the Sorcerer", "ID_FMP_CLASS_FEATURE_1841", "ID_FMP_HYBRID_CLASS_445", "Hybrid Sorcerer", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Soul of the Sorcerer", {
        filter: function(model, element) { return (((element.hasCategory("Dragon Soul Class Feature") || element.hasCategory("Soul of the Cosmic Cycle Class Feature")) || element.hasCategory("Storm Soul Class Feature")) || element.hasCategory("Wild Soul Class Feature")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Speed of the Wind"] = new engine.RulesElement({
    name: "Speed of the Wind",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2178",
    source: "Player's Handbook 3",
    categories: ["Speed of the Wind", "ID_FMP_CLASS_FEATURE_2178", "16"],
    rules: function(model) {
      model.statadd("Speed", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Speed of Thought"] = new engine.RulesElement({
    name: "Speed of Thought",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_765",
    source: "Player's Handbook 3",
    categories: ["Speed of Thought", "ID_FMP_CLASS_FEATURE_765", "ID_FMP_CLASS_FEATURE_2175", "Psionic Study", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10441"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Speed of Thought (Hybrid)"] = new engine.RulesElement({
    name: "Speed of Thought (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2528",
    source: "Player's Handbook 3",
    categories: ["Speed of Thought (Hybrid)", "ID_FMP_CLASS_FEATURE_2528", "ID_FMP_CLASS_FEATURE_2526", "Psionic Study (Hybrid)", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10441"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_SPEED_OF_THOUGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spirit Boon (Hybrid)"] = new engine.RulesElement({
    name: "Spirit Boon (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1957",
    source: "Player's Handbook 3",
    categories: ["Spirit Boon (Hybrid)", "ID_FMP_CLASS_FEATURE_1957", "ID_FMP_HYBRID_CLASS_444", "Hybrid Shaman", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_SPIRIT_BOON"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spiritbond"] = new engine.RulesElement({
    name: "Spiritbond",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2404",
    source: "Player's Handbook 3",
    categories: ["Spiritbond", "ID_FMP_CLASS_FEATURE_2404", "ID_FMP_CLASS_FEATURE_1944", "Seeker's Bond", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11462"]);
      model.statadd("light thrown:attack", 1);
      model.statadd("heavy thrown:attack", 1);
      model.statadd("Armor Class", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return model.stat("Strength modifier");
        } else return 0;
       }, "Ability");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spiritbond (Hybrid)"] = new engine.RulesElement({
    name: "Spiritbond (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2543",
    source: "Player's Handbook 3",
    categories: ["Spiritbond (Hybrid)", "ID_FMP_CLASS_FEATURE_2543", "ID_FMP_CLASS_FEATURE_2420", "Seeker's Bond (Hybrid)", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11462"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_SPIRITBOND"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spirit's Power"] = new engine.RulesElement({
    name: "Spirit's Power",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1839",
    source: "Player's Handbook 3",
    categories: ["Spirit's Power", "ID_FMP_CLASS_FEATURE_1839", "ID_FMP_HYBRID_CLASS_444", "Hybrid Shaman", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5389"]);
      model.grant(model.elements.id["ID_FMP_POWER_5388"]);
      model.grant(model.elements.id["ID_FMP_POWER_9732"]);
      model.grant(model.elements.id["ID_FMP_POWER_9733"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stalker Spirit (Hybrid)"] = new engine.RulesElement({
    name: "Stalker Spirit (Hybrid)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_STALKER_SPIRIT_(HYBRID)",
    source: "Player's Handbook 3",
    categories: ["Stalker Spirit (Hybrid)", "ID_INTERNAL_CLASS_FEATURE_STALKER_SPIRIT_(HYBRID)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_STALKER_SPIRIT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Star Pact (Hybrid)"] = new engine.RulesElement({
    name: "Star Pact (Hybrid)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_STAR_PACT_(HYBRID)",
    source: "Player's Handbook 3",
    categories: ["Star Pact (Hybrid)", "ID_INTERNAL_CLASS_FEATURE_STAR_PACT_(HYBRID)", "Hybrid Pact"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASPACT_STAR_PACT"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_STAR_PACT"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_MATCHED_WARLOCK_PACT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Startling Insight"] = new engine.RulesElement({
    name: "Startling Insight",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2429",
    source: "Player's Handbook 3",
    categories: ["Startling Insight", "ID_FMP_CLASS_FEATURE_2429", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Stone Fist"] = new engine.RulesElement({
    name: "Stone Fist",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2360",
    source: "Player's Handbook 3",
    categories: ["Stone Fist", "ID_FMP_CLASS_FEATURE_2360", "ID_FMP_CLASS_FEATURE_1543", "Monastic Tradition", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11207"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Stone Fist", 1);
      model.statadd("Stone Fist", 1);
      model.statadd("Stone Fist", 1);
      model.statadd("Will Defense", function() { return model.stat("Stone Fist"); });
      model.statadd("Stone Fist", 1);
      model.statadd("Stone Fist", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stone Fist (Hybrid)"] = new engine.RulesElement({
    name: "Stone Fist (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2533",
    source: "Player's Handbook 3",
    categories: ["Stone Fist (Hybrid)", "ID_FMP_CLASS_FEATURE_2533", "ID_FMP_CLASS_FEATURE_2413", "Monastic Tradition (Hybrid)", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11207"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_STONE_FIST"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Strength of the Dragon"] = new engine.RulesElement({
    name: "Strength of the Dragon",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2361",
    source: "Player's Handbook 3",
    categories: ["Strength of the Dragon", "ID_FMP_CLASS_FEATURE_2361", "11"],
    rules: function(model) {
      model.statadd("resist:fire", 5);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Swarm Action"] = new engine.RulesElement({
    name: "Swarm Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2334",
    source: "Player's Handbook 3",
    categories: ["Swarm Action", "ID_FMP_CLASS_FEATURE_2334", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Swarm Action:When you spend an action point to take an extra action, you take half damage from melee attacks and ranged attacks until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Swift Stride Assault"] = new engine.RulesElement({
    name: "Swift Stride Assault",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2410",
    source: "Player's Handbook 3",
    categories: ["Swift Stride Assault", "ID_FMP_CLASS_FEATURE_2410", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Swordmage Aegis (Hybrid)"] = new engine.RulesElement({
    name: "Swordmage Aegis (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1532",
    source: "Player's Handbook 3",
    categories: ["Swordmage Aegis (Hybrid)", "ID_FMP_CLASS_FEATURE_1532", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Swordmage Aegis (Hybrid)", {
        filter: function(model, element) { return element.hasCategory("Swordmage Aegis"); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_SWORDMAGE_AEGIS"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Tactical Presence (Hybrid)"] = new engine.RulesElement({
    name: "Tactical Presence (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2466",
    source: "Player's Handbook 3",
    categories: ["Tactical Presence (Hybrid)", "ID_FMP_CLASS_FEATURE_2466", "ID_FMP_CLASS_FEATURE_1846", "Commanding Presence (Hybrid)", "1"],
    rules: function(model) {
      model.statadd("ALLY.Action Point", "Tactical Presence (Hybrid):When an ally you can see spends an action point to make an attack, the ally gains a bonus to the attack roll equal to one-half your Intelligence modifier.");
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_TACTICAL_PRESENCE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Tactician's Surge"] = new engine.RulesElement({
    name: "Tactician's Surge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2145",
    source: "Player's Handbook 3",
    categories: ["Tactician's Surge", "ID_FMP_CLASS_FEATURE_2145", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Telekinesis Focus"] = new engine.RulesElement({
    name: "Telekinesis Focus",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2367",
    source: "Player's Handbook 3",
    categories: ["Telekinesis Focus", "ID_FMP_CLASS_FEATURE_2367", "ID_FMP_CLASS_FEATURE_1810", "Discipline Focus", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11267"]);
      model.grant(model.elements.id["ID_FMP_POWER_11268"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Telekinesis Focus (Hybrid)"] = new engine.RulesElement({
    name: "Telekinesis Focus (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2534",
    source: "Player's Handbook 3",
    categories: ["Telekinesis Focus (Hybrid)", "ID_FMP_CLASS_FEATURE_2534", "ID_FMP_CLASS_FEATURE_2415", "Discipline Focus (Hybrid)", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_11267"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_TELEKINESIS_FOCUS"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Telepathy Focus"] = new engine.RulesElement({
    name: "Telepathy Focus",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1811",
    source: "Player's Handbook 3",
    categories: ["Telepathy Focus", "ID_FMP_CLASS_FEATURE_1811", "ID_FMP_CLASS_FEATURE_1810", "Discipline Focus", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8224"]);
      model.grant(model.elements.id["ID_FMP_POWER_8225"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Telepathy Focus (Hybrid)"] = new engine.RulesElement({
    name: "Telepathy Focus (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2535",
    source: "Player's Handbook 3",
    categories: ["Telepathy Focus (Hybrid)", "ID_FMP_CLASS_FEATURE_2535", "ID_FMP_CLASS_FEATURE_2415", "Discipline Focus (Hybrid)", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8225"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_TELEPATHY_FOCUS"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Tempest Technique (Hybrid)"] = new engine.RulesElement({
    name: "Tempest Technique (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2462",
    source: "Player's Handbook 3",
    categories: ["Tempest Technique (Hybrid)", "ID_FMP_CLASS_FEATURE_2462", "ID_FMP_CLASS_FEATURE_1830", "Fighter Combat Talent", "1"],
    rules: function(model) {
      model.statadd("two-melee-offhand:attack", 1);
      model.statadd("two-melee-offhand-close:attack", 1);
      model.grant(model.elements.id["ID_FMP_FEAT_172"]);
      model.statadd("Tempest Technique (Hybrid)", function() { 
        if (model.wearing('Armor', ['light'])) {
          return 1;
        } else return 0;
       }, "Tempest Technique (Hybrid)");
      model.statadd("Tempest Technique (Hybrid)", function() { 
        if (model.wearing('Armor', ['chain'])) {
          return 1;
        } else return 0;
       }, "Tempest Technique (Hybrid)");
      model.statadd("Tempest Technique (Hybrid) offhand", function() { 
        if (model.wearing('Armor', ['light'])) {
          return 1;
        } else return 0;
       }, "Tempest Technique (Hybrid) offhand");
      model.statadd("Tempest Technique (Hybrid) offhand", function() { 
        if (model.wearing('Armor', ['chain'])) {
          return 1;
        } else return 0;
       }, "Tempest Technique (Hybrid) offhand");
      model.statadd("two-melee-weapon:damage", function() { return model.stat("Tempest Technique (Hybrid)"); });
      model.statadd("two-melee-weapon-close:damage", function() { return model.stat("Tempest Technique (Hybrid)"); });
      model.statadd("two-melee-offhand:damage", function() { return model.stat("Tempest Technique (Hybrid) Offhand"); });
      model.statadd("two-melee-offhand-close:damage", function() { return model.stat("Tempest Technique (Hybrid) Offhand"); });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_TEMPEST_TECHNIQUE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Time-Lapse"] = new engine.RulesElement({
    name: "Time-Lapse",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2381",
    source: "Player's Handbook 3",
    categories: ["Time-Lapse", "ID_FMP_CLASS_FEATURE_2381", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Time-Lapse:When you spend an action point to make an attack with a psionic power, you gain a +1 bonus to the attack roll and can teleport 6 squares as a free action after the attack.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["True Seeker's Bond"] = new engine.RulesElement({
    name: "True Seeker's Bond",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2421",
    source: "Player's Handbook 3",
    categories: ["True Seeker's Bond", "ID_FMP_CLASS_FEATURE_2421", "ID_FMP_HYBRID_CLASS_612", "Hybrid Seeker", "1"],
    rules: function(model) {
      model.statadd("Armor Class", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return model.stat("Strength modifier");
        } else return 0;
       }, "Ability");
      model.statadd("light thrown:attack", 1);
      model.statadd("heavy thrown:attack", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Twelve Runes of the Sun"] = new engine.RulesElement({
    name: "Twelve Runes of the Sun",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2395",
    source: "Player's Handbook 3",
    categories: ["Twelve Runes of the Sun", "ID_FMP_CLASS_FEATURE_2395", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Two-Blade Fighting Style (Hybrid)"] = new engine.RulesElement({
    name: "Two-Blade Fighting Style (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2458",
    source: "Player's Handbook 3",
    categories: ["Two-Blade Fighting Style (Hybrid)", "ID_FMP_CLASS_FEATURE_2458", "ID_FMP_CLASS_FEATURE_1836", "Ranger Fighting Style", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_AMBIDEXTROUS"]);
      model.grant(model.elements.id["ID_FMP_FEAT_171"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_TWO-BLADE_FIGHTING_STYLE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Two-handed Weapon Talent (Hybrid)"] = new engine.RulesElement({
    name: "Two-handed Weapon Talent (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2461",
    source: "Player's Handbook 3",
    categories: ["Two-handed Weapon Talent (Hybrid)", "ID_FMP_CLASS_FEATURE_2461", "ID_FMP_CLASS_FEATURE_1830", "Fighter Combat Talent", "1"],
    rules: function(model) {
      model.statadd("two-hands:attack", 1);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_TWO-HANDED_WEAPON_TALENT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unarmed Combatant"] = new engine.RulesElement({
    name: "Unarmed Combatant",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1547",
    source: "Player's Handbook 3",
    categories: ["Unarmed Combatant", "ID_FMP_CLASS_FEATURE_1547", "ID_FMP_HYBRID_CLASS_609", "Hybrid Monk", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MONK_UNARMED_STRIKE)"]);
      model.statadd("FREEBEE:ID_INTERNAL_WEAPON_MONK_UNARMED_STRIKE", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unarmored Defense"] = new engine.RulesElement({
    name: "Unarmored Defense",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1548",
    source: "Player's Handbook 3",
    categories: ["Unarmored Defense", "ID_FMP_CLASS_FEATURE_1548", "ID_FMP_HYBRID_CLASS_609", "Hybrid Monk", "1"],
    rules: function(model) {
      model.statadd("Unarmored Defense", function() { 
        if (!(model.inventory['off hand'])) {
          return 2;
        } else return 0;
       });
      model.statadd("AC", function() { 
        if (!(model.wearing('Armor'))) {
          return 2;
        } else return 0;
       }, "Unarmored Defense");
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['cloth'])) {
          return 2;
        } else return 0;
       }, "Unarmored Defense");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Undeniable Light"] = new engine.RulesElement({
    name: "Undeniable Light",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2397",
    source: "Player's Handbook 3",
    categories: ["Undeniable Light", "ID_FMP_CLASS_FEATURE_2397", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unfettered Action"] = new engine.RulesElement({
    name: "Unfettered Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1864",
    source: "Player's Handbook 3",
    categories: ["Unfettered Action", "ID_FMP_CLASS_FEATURE_1864", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Unfettered Action:When you spend an action point to take an extra action, any effects that daze, restrain, slow, or immobilize you end.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unmatched Tactician"] = new engine.RulesElement({
    name: "Unmatched Tactician",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2440",
    source: "Player's Handbook 3",
    categories: ["Unmatched Tactician", "ID_FMP_CLASS_FEATURE_2440", "21"],
    rules: function(model) {
      model.statadd("Initiative Misc", 5);
      model.statadd("attack rolls", function() { /* if at least one of your allies is adjacent to the target */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unraveling Action"] = new engine.RulesElement({
    name: "Unraveling Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2351",
    source: "Player's Handbook 3",
    categories: ["Unraveling Action", "ID_FMP_CLASS_FEATURE_2351", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Unraveling Action:When you spend an action point to make a fear attack, each target hit by the attack has vulnerability to all damage until the end of your next turn. The vulnerability equals your Constitution modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unyielding Inspiration"] = new engine.RulesElement({
    name: "Unyielding Inspiration",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2441",
    source: "Player's Handbook 3",
    categories: ["Unyielding Inspiration", "ID_FMP_CLASS_FEATURE_2441", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Axe)"] = new engine.RulesElement({
    name: "Versatile Expertise (Axe)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(AXE)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Axe)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(AXE)", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_WEAPON_GROUP", "Versatile Expertise Weapon Group", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_IMPLEMENT", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("Axe group:attack", 1, "Feat");
      model.statadd("Axe group:attack", 2, "Feat");
      model.statadd("Axe group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Blowgun)"] = new engine.RulesElement({
    name: "Versatile Expertise (Blowgun)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(BLOWGUN)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Blowgun)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(BLOWGUN)", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_WEAPON_GROUP", "Versatile Expertise Weapon Group", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_IMPLEMENT", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("Blowgun group:attack", 1, "Feat");
      model.statadd("Blowgun group:attack", 2, "Feat");
      model.statadd("Blowgun group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Bow)"] = new engine.RulesElement({
    name: "Versatile Expertise (Bow)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(BOW)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Bow)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(BOW)", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_WEAPON_GROUP", "Versatile Expertise Weapon Group", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_IMPLEMENT", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("Bow group:attack", 1, "Feat");
      model.statadd("Bow group:attack", 2, "Feat");
      model.statadd("Bow group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Crossbow)"] = new engine.RulesElement({
    name: "Versatile Expertise (Crossbow)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(CROSSBOW)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Crossbow)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(CROSSBOW)", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_WEAPON_GROUP", "Versatile Expertise Weapon Group", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_IMPLEMENT", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("crossbow group:attack", 1, "Feat");
      model.statadd("crossbow group:attack", 2, "Feat");
      model.statadd("crossbow group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Flail)"] = new engine.RulesElement({
    name: "Versatile Expertise (Flail)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(FLAIL)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Flail)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(FLAIL)", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_WEAPON_GROUP", "Versatile Expertise Weapon Group", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_IMPLEMENT", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("Flail group:attack", 1, "Feat");
      model.statadd("Flail group:attack", 2, "Feat");
      model.statadd("Flail group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Garrote)"] = new engine.RulesElement({
    name: "Versatile Expertise (Garrote)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(GARROTE)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Garrote)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(GARROTE)", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_WEAPON_GROUP", "Versatile Expertise Weapon Group", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_IMPLEMENT", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("Garrote group:attack", 1, "Feat");
      model.statadd("Garrote group:attack", 2, "Feat");
      model.statadd("Garrote group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Hammer)"] = new engine.RulesElement({
    name: "Versatile Expertise (Hammer)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(HAMMER)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Hammer)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(HAMMER)", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_WEAPON_GROUP", "Versatile Expertise Weapon Group", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_IMPLEMENT", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("Hammer group:attack", 1, "Feat");
      model.statadd("Hammer group:attack", 2, "Feat");
      model.statadd("Hammer group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Heavy Blade)"] = new engine.RulesElement({
    name: "Versatile Expertise (Heavy Blade)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(HEAVY_BLADE)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Heavy Blade)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(HEAVY_BLADE)", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_WEAPON_GROUP", "Versatile Expertise Weapon Group", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_IMPLEMENT", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("Heavy Blade group:attack", 1, "Feat");
      model.statadd("Heavy Blade group:attack", 2, "Feat");
      model.statadd("Heavy Blade group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Holy Symbol)"] = new engine.RulesElement({
    name: "Versatile Expertise (Holy Symbol)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(HOLY_SYMBOL)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Holy Symbol)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(HOLY_SYMBOL)", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("holy symbol implement:attack", 1, "Feat");
      model.statadd("holy symbol implement:attack", 2, "Feat");
      model.statadd("holy symbol implement:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Instrument)"] = new engine.RulesElement({
    name: "Versatile Expertise (Instrument)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(INSTRUMENT)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Instrument)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(INSTRUMENT)", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("instrument implement:attack", 1, "Feat");
      model.statadd("instrument implement:attack", 2, "Feat");
      model.statadd("instrument implement:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Ki Focuses)"] = new engine.RulesElement({
    name: "Versatile Expertise (Ki Focuses)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(KI_FOCUSES)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Ki Focuses)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(KI_FOCUSES)", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("ki focuses implement:attack", 1, "Feat");
      model.statadd("ki focuses implement:attack", 2, "Feat");
      model.statadd("ki focuses implement:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Light Blade)"] = new engine.RulesElement({
    name: "Versatile Expertise (Light Blade)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(LIGHT_BLADE)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Light Blade)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(LIGHT_BLADE)", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_WEAPON_GROUP", "Versatile Expertise Weapon Group", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_IMPLEMENT", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("Light Blade group:attack", 1, "Feat");
      model.statadd("Light Blade group:attack", 2, "Feat");
      model.statadd("Light Blade group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Mace)"] = new engine.RulesElement({
    name: "Versatile Expertise (Mace)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(MACE)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Mace)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(MACE)", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_WEAPON_GROUP", "Versatile Expertise Weapon Group", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_IMPLEMENT", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("Mace group:attack", 1, "Feat");
      model.statadd("Mace group:attack", 2, "Feat");
      model.statadd("Mace group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Orb)"] = new engine.RulesElement({
    name: "Versatile Expertise (Orb)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(ORB)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Orb)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(ORB)", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("orb implement:attack", 1, "Feat");
      model.statadd("orb implement:attack", 2, "Feat");
      model.statadd("orb implement:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Pick)"] = new engine.RulesElement({
    name: "Versatile Expertise (Pick)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(PICK)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Pick)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(PICK)", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_WEAPON_GROUP", "Versatile Expertise Weapon Group", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_IMPLEMENT", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("Pick group:attack", 1, "Feat");
      model.statadd("Pick group:attack", 2, "Feat");
      model.statadd("Pick group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Polearm)"] = new engine.RulesElement({
    name: "Versatile Expertise (Polearm)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(POLEARM)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Polearm)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(POLEARM)", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_WEAPON_GROUP", "Versatile Expertise Weapon Group", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_IMPLEMENT", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("Polearm group:attack", 1, "Feat");
      model.statadd("Polearm group:attack", 2, "Feat");
      model.statadd("Polearm group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Rod)"] = new engine.RulesElement({
    name: "Versatile Expertise (Rod)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(ROD)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Rod)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(ROD)", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("rod implement:attack", 1, "Feat");
      model.statadd("rod implement:attack", 2, "Feat");
      model.statadd("rod implement:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Sling)"] = new engine.RulesElement({
    name: "Versatile Expertise (Sling)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(SLING)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Sling)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(SLING)", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_WEAPON_GROUP", "Versatile Expertise Weapon Group", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_IMPLEMENT", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("sling group:attack", 1, "Feat");
      model.statadd("sling group:attack", 2, "Feat");
      model.statadd("sling group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Spear)"] = new engine.RulesElement({
    name: "Versatile Expertise (Spear)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(SPEAR)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Spear)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(SPEAR)", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_WEAPON_GROUP", "Versatile Expertise Weapon Group", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_IMPLEMENT", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("Spear group:attack", 1, "Feat");
      model.statadd("Spear group:attack", 2, "Feat");
      model.statadd("Spear group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Staff)"] = new engine.RulesElement({
    name: "Versatile Expertise (Staff)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(STAFF)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Staff)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(STAFF)", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_WEAPON_GROUP", "Versatile Expertise Weapon Group", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_IMPLEMENT", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("Staff group:attack", 1, "Feat");
      model.statadd("Staff group:attack", 2, "Feat");
      model.statadd("Staff group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Tome)"] = new engine.RulesElement({
    name: "Versatile Expertise (Tome)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(TOME)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Tome)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(TOME)", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("tome implement:attack", 1, "Feat");
      model.statadd("tome implement:attack", 2, "Feat");
      model.statadd("tome implement:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Totem)"] = new engine.RulesElement({
    name: "Versatile Expertise (Totem)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(TOTEM)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Totem)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(TOTEM)", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("totem implement:attack", 1, "Feat");
      model.statadd("totem implement:attack", 2, "Feat");
      model.statadd("totem implement:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Unarmed)"] = new engine.RulesElement({
    name: "Versatile Expertise (Unarmed)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(UNARMED)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Unarmed)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(UNARMED)", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_WEAPON_GROUP", "Versatile Expertise Weapon Group", "ID_INTERNAL_CATEGORY_VERSATILE_EXPERTISE_IMPLEMENT", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("Unarmed group:attack", 1, "Feat");
      model.statadd("Unarmed group:attack", 2, "Feat");
      model.statadd("Unarmed group:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Versatile Expertise (Wand)"] = new engine.RulesElement({
    name: "Versatile Expertise (Wand)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(WAND)",
    source: "Player's Handbook 3",
    categories: ["Versatile Expertise (Wand)", "ID_INTERNAL_CLASS_FEATURE_VERSATILE_EXPERTISE_(WAND)", "Versatile Expertise Implement"],
    rules: function(model) {
      model.statadd("wand implement:attack", 1, "Feat");
      model.statadd("wand implement:attack", 2, "Feat");
      model.statadd("wand implement:attack", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Vestige Pact (Hybrid)"] = new engine.RulesElement({
    name: "Vestige Pact (Hybrid)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VESTIGE_PACT_(HYBRID)",
    source: "Player's Handbook 3",
    categories: ["Vestige Pact (Hybrid)", "ID_INTERNAL_CLASS_FEATURE_VESTIGE_PACT_(HYBRID)", "Hybrid Pact"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASPACT_VESTIGE_PACT"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_VESTIGE_PACT"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_MATCHED_WARLOCK_PACT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Vigorous Action"] = new engine.RulesElement({
    name: "Vigorous Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1097",
    source: "Player's Handbook 3",
    categories: ["Vigorous Action", "ID_FMP_CLASS_FEATURE_1097", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Vigorous Action:When you spend an action point to make an attack while you're bloodied, you gain temporary hit points equal to your Constitution score.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Vitalizing Action"] = new engine.RulesElement({
    name: "Vitalizing Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2348",
    source: "Player's Handbook 3",
    categories: ["Vitalizing Action", "ID_FMP_CLASS_FEATURE_2348", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Vitalizing Action:When you spend an action point to make an attack, you and each ally within 5 squares of you gain temporary hit points equal to your Constitution modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Warden's Armored Might"] = new engine.RulesElement({
    name: "Warden's Armored Might",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1843",
    source: "Player's Handbook 3",
    categories: ["Warden's Armored Might", "ID_FMP_CLASS_FEATURE_1843", "ID_FMP_HYBRID_CLASS_446", "Hybrid Warden", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1281"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Warlock Pact Boon"] = new engine.RulesElement({
    name: "Warlock Pact Boon",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1845",
    source: "Player's Handbook 3",
    categories: ["Warlock Pact Boon", "ID_FMP_CLASS_FEATURE_1845", "ID_FMP_HYBRID_CLASS_358", "Hybrid Warlock", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2094"]);
      model.grant(model.elements.id["ID_FMP_POWER_2095"]);
      model.grant(model.elements.id["ID_FMP_POWER_2263"]);
      model.grant(model.elements.id["ID_FMP_POWER_4311"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Warlock's Curse (Hybrid)"] = new engine.RulesElement({
    name: "Warlock's Curse (Hybrid)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1533",
    source: "Player's Handbook 3",
    categories: ["Warlock's Curse (Hybrid)", "ID_FMP_CLASS_FEATURE_1533", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5597"]);
      model.statadd("Warlock's Curse Dice", 1);
      model.statadd("Warlock's Curse Dice", 1);
      model.statadd("Warlock's Curse Dice", 1);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_WARLOCK'S_CURSE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Warlord Armor Proficiency"] = new engine.RulesElement({
    name: "Warlord Armor Proficiency",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1847",
    source: "Player's Handbook 3",
    categories: ["Warlord Armor Proficiency", "ID_FMP_CLASS_FEATURE_1847", "ID_FMP_HYBRID_CLASS_359", "Hybrid Warlord", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Warlord Leadership"] = new engine.RulesElement({
    name: "Warlord Leadership",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2427",
    source: "Player's Handbook 3",
    categories: ["Warlord Leadership", "ID_FMP_CLASS_FEATURE_2427", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Warlord Leadership", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_2427"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Watcher Spirit (Hybrid)"] = new engine.RulesElement({
    name: "Watcher Spirit (Hybrid)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_WATCHER_SPIRIT_(HYBRID)",
    source: "Player's Handbook 3",
    categories: ["Watcher Spirit (Hybrid)", "ID_INTERNAL_CLASS_FEATURE_WATCHER_SPIRIT_(HYBRID)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_WATCHER_SPIRIT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wellspring of Mental Power"] = new engine.RulesElement({
    name: "Wellspring of Mental Power",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2430",
    source: "Player's Handbook 3",
    categories: ["Wellspring of Mental Power", "ID_FMP_CLASS_FEATURE_2430", "30"],
    rules: function(model) {
      model.statadd("Power Points", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["World Speaker Spirit (Hybrid)"] = new engine.RulesElement({
    name: "World Speaker Spirit (Hybrid)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_WORLD_SPEAKER_SPIRIT_(HYBRID)",
    source: "Player's Handbook 3",
    categories: ["World Speaker Spirit (Hybrid)", "ID_INTERNAL_CLASS_FEATURE_WORLD_SPEAKER_SPIRIT_(HYBRID)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_WORLD_SPEAKER_SPIRIT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wrathful Hammer"] = new engine.RulesElement({
    name: "Wrathful Hammer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2390",
    source: "Player's Handbook 3",
    categories: ["Wrathful Hammer", "ID_FMP_CLASS_FEATURE_2390", "ID_FMP_CLASS_FEATURE_2388", "Runic Artistry", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_HAMMER"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_MACE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Zephyr Action"] = new engine.RulesElement({
    name: "Zephyr Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2177",
    source: "Player's Handbook 3",
    categories: ["Zephyr Action", "ID_FMP_CLASS_FEATURE_2177", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Zephyr Action:When you spend an action point to take an extra action, you are insubstantial and phasing until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
