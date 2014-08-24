(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Acrobatic Action"] = new RulesElement({
    name: "Acrobatic Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_654",
    source: "Player's Handbook,Martial Power",
    categories: ["Acrobatic Action", "ID_FMP_CLASS_FEATURE_654", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Acrobatic Action:When you spend an action point to take an extra action, you also gain a move action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Action Shift"] = new RulesElement({
    name: "Action Shift",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_504",
    source: "Player's Handbook",
    categories: ["Action Shift", "ID_FMP_CLASS_FEATURE_504", "16"],
    rules: function(model) {
      model.statadd("Action Point", "Action Shift:After you spend an action point to take an extra action, you can shift as a minor action until the end of the encounter");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Angelic Action"] = new RulesElement({
    name: "Angelic Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_672",
    source: "Player's Handbook",
    categories: ["Angelic Action", "ID_FMP_CLASS_FEATURE_672", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Angelic Action:When you spend an action point to take an extra action, you also gain a +4 bonus to attack rolls until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Implement Mastery"] = new RulesElement({
    name: "Arcane Implement Mastery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_444",
    source: "Player's Handbook,Player's Handbook 3",
    categories: ["Arcane Implement Mastery", "ID_FMP_CLASS_FEATURE_444", "ID_FMP_HYBRID_CLASS_360", "Hybrid Wizard", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_444"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Riposte"] = new RulesElement({
    name: "Arcane Riposte",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_505",
    source: "Player's Handbook",
    categories: ["Arcane Riposte", "ID_FMP_CLASS_FEATURE_505", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Spirit"] = new RulesElement({
    name: "Arcane Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_525",
    source: "Player's Handbook",
    categories: ["Arcane Spirit", "ID_FMP_CLASS_FEATURE_525", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Archer Fighting Style"] = new RulesElement({
    name: "Archer Fighting Style",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_778",
    source: "Player's Handbook",
    categories: ["Archer Fighting Style", "ID_FMP_CLASS_FEATURE_778", "ID_FMP_CLASS_FEATURE_321", "Fighting Style", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_FEAT_127"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Archer's Action (Battlefield Archer)"] = new RulesElement({
    name: "Archer's Action (Battlefield Archer)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_664",
    source: "Player's Handbook",
    categories: ["Archer's Action (Battlefield Archer)", "ID_FMP_CLASS_FEATURE_664", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Archer's Action (Battlefield Archer):You can spend an action point to reroll one ranged attack roll or ranged damage roll, instead of taking an extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Archspell"] = new RulesElement({
    name: "Archspell",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_286",
    source: "Player's Handbook",
    categories: ["Archspell", "ID_FMP_CLASS_FEATURE_286", "30"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("Daily Usage") && element.hasCategory("Arcane")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor Optimization"] = new RulesElement({
    name: "Armor Optimization",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_650",
    source: "Player's Handbook",
    categories: ["Armor Optimization", "ID_FMP_CLASS_FEATURE_650", "11"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (model.wearing('Armor')) {
          return 1;
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Artful Dodger"] = new RulesElement({
    name: "Artful Dodger",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_780",
    source: "Player's Handbook",
    categories: ["Artful Dodger", "ID_FMP_CLASS_FEATURE_780", "ID_FMP_CLASS_FEATURE_547", "Rogue Tactics", "1"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return abilitymod(model.stat("cha")); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Astral Judgment"] = new RulesElement({
    name: "Astral Judgment",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_471",
    source: "Player's Handbook",
    categories: ["Astral Judgment", "ID_FMP_CLASS_FEATURE_471", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Astral Rejuvenation Action"] = new RulesElement({
    name: "Astral Rejuvenation Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_676",
    source: "Player's Handbook",
    categories: ["Astral Rejuvenation Action", "ID_FMP_CLASS_FEATURE_676", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Astral Rejuvenation Action:You can spend an action point to regain one paladin encounter power you have already used, instead of taking an extra action");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Astral Vibrance"] = new RulesElement({
    name: "Astral Vibrance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_441",
    source: "Player's Handbook",
    categories: ["Astral Vibrance", "ID_FMP_CLASS_FEATURE_441", "11"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Astral Vibrance"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Athletic Master"] = new RulesElement({
    name: "Athletic Master",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_485",
    source: "Player's Handbook",
    categories: ["Athletic Master", "ID_FMP_CLASS_FEATURE_485", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Battle Action"] = new RulesElement({
    name: "Battle Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_668",
    source: "Player's Handbook",
    categories: ["Battle Action", "ID_FMP_CLASS_FEATURE_668", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Battle Action:When you spend an action point to take an extra action, your allies gain a +1 bonus to attack rolls until the start of your next turn. Your allies need to be able to see and hear you to gain this bonus.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Battle Edge"] = new RulesElement({
    name: "Battle Edge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_456",
    source: "Player's Handbook",
    categories: ["Battle Edge", "ID_FMP_CLASS_FEATURE_456", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Battle Healer"] = new RulesElement({
    name: "Battle Healer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_490",
    source: "Player's Handbook",
    categories: ["Battle Healer", "ID_FMP_CLASS_FEATURE_490", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Battle Inspiration"] = new RulesElement({
    name: "Battle Inspiration",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_492",
    source: "Player's Handbook",
    categories: ["Battle Inspiration", "ID_FMP_CLASS_FEATURE_492", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Battle Mage Action"] = new RulesElement({
    name: "Battle Mage Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_684",
    source: "Player's Handbook",
    categories: ["Battle Mage Action", "ID_FMP_CLASS_FEATURE_684", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Battle Mage Action:When you spend an action point to take an extra action, you also gain a +4 bonus to attack rolls until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Battle Surge"] = new RulesElement({
    name: "Battle Surge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_502",
    source: "Player's Handbook",
    categories: ["Battle Surge", "ID_FMP_CLASS_FEATURE_502", "16"],
    rules: function(model) {
      model.statadd("Action Point", "Battle Surge:When you spend an action point to take an extra action or to gain the benefit of your Archer's Action, you also gain a +5 bonus to AC against opportunity attacks until the end of the encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Battlefield Experience"] = new RulesElement({
    name: "Battlefield Experience",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_501",
    source: "Player's Handbook",
    categories: ["Battlefield Experience", "ID_FMP_CLASS_FEATURE_501", "11"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against a quarry */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Battlehoned"] = new RulesElement({
    name: "Battlehoned",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_497",
    source: "Player's Handbook",
    categories: ["Battlehoned", "ID_FMP_CLASS_FEATURE_497", "11"],
    rules: function(model) {
      model.statadd("Healing Surges", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Beast"] = new RulesElement({
    name: "Beast",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BEAST",
    source: "Player's Handbook",
    categories: ["Beast", "ID_INTERNAL_CLASS_FEATURE_BEAST", "Chosen Prey"]
  });
  byID[te.id] = te;
  
  te = class_feature["Beast Stalker's Action"] = new RulesElement({
    name: "Beast Stalker's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_665",
    source: "Player's Handbook",
    categories: ["Beast Stalker's Action", "ID_FMP_CLASS_FEATURE_665", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Beast Stalker's Action:When you spend an action point to take an extra action, you also gain a +4 bonus to attack rolls against your quarry until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blade Storm"] = new RulesElement({
    name: "Blade Storm",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_499",
    source: "Player's Handbook",
    categories: ["Blade Storm", "ID_FMP_CLASS_FEATURE_499", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Blood Action"] = new RulesElement({
    name: "Blood Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_685",
    source: "Player's Handbook",
    categories: ["Blood Action", "ID_FMP_CLASS_FEATURE_685", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Blood Action:When you spend an action point to take an extra action, if you use your action to make an attack that hits, that attack deals ongoing 10 damage (save ends).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blood and Radiance"] = new RulesElement({
    name: "Blood and Radiance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_445",
    source: "Player's Handbook",
    categories: ["Blood and Radiance", "ID_FMP_CLASS_FEATURE_445", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bloody Evisceration"] = new RulesElement({
    name: "Bloody Evisceration",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_510",
    source: "Player's Handbook",
    categories: ["Bloody Evisceration", "ID_FMP_CLASS_FEATURE_510", "16"],
    rules: function(model) {
      model.statadd("Sneak Attack", "+1d6");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Body Control"] = new RulesElement({
    name: "Body Control",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_484",
    source: "Player's Handbook",
    categories: ["Body Control", "ID_FMP_CLASS_FEATURE_484", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bolstering Blood"] = new RulesElement({
    name: "Bolstering Blood",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_506",
    source: "Player's Handbook",
    categories: ["Bolstering Blood", "ID_FMP_CLASS_FEATURE_506", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Brutal Scoundrel"] = new RulesElement({
    name: "Brutal Scoundrel",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_781",
    source: "Player's Handbook",
    categories: ["Brutal Scoundrel", "ID_FMP_CLASS_FEATURE_781", "ID_FMP_CLASS_FEATURE_547", "Rogue Tactics", "1"],
    rules: function(model) {
      model.statadd("Sneak Attack", function() { return abilitymod(model.stat("Strength")); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Burning Blood"] = new RulesElement({
    name: "Burning Blood",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_460",
    source: "Player's Handbook",
    categories: ["Burning Blood", "ID_FMP_CLASS_FEATURE_460", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Cantrips"] = new RulesElement({
    name: "Cantrips",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_130",
    source: "Player's Handbook,Player's Handbook 3",
    categories: ["Cantrips", "ID_FMP_CLASS_FEATURE_130", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_1217"]);
      model.grant(elements.id["ID_FMP_POWER_1225"]);
      model.grant(elements.id["ID_FMP_POWER_1227"]);
      model.grant(elements.id["ID_FMP_POWER_1930"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Champion's Action"] = new RulesElement({
    name: "Champion's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_677",
    source: "Player's Handbook",
    categories: ["Champion's Action", "ID_FMP_CLASS_FEATURE_677", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Champion's Action:When you spend an action point to take an extra action, you also flash with radiant light that causes adjacent enemies to take a -1 penalty to all defenses until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Champion's Hammer"] = new RulesElement({
    name: "Champion's Hammer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_474",
    source: "Player's Handbook",
    categories: ["Champion's Hammer", "ID_FMP_CLASS_FEATURE_474", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Channel Divinity"] = new RulesElement({
    name: "Channel Divinity",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_324",
    source: "Player's Handbook",
    categories: ["Channel Divinity", "ID_FMP_CLASS_FEATURE_324", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_1589"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_POWER_146") || element.hasCategory("ID_FMP_POWER_7885")); }
      });
      model.grant(elements.id["ID_FMP_POWER_1746"]);
      model.grant(elements.id["ID_FMP_POWER_1747"]);
      model.grant(elements.id["ID_FMP_POWER_5330"]);
      model.grant(elements.id["ID_FMP_POWER_5331"]);
      model.grant(elements.id["ID_FMP_POWER_5186"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Chosen Prey"] = new RulesElement({
    name: "Chosen Prey",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_503",
    source: "Player's Handbook",
    categories: ["Chosen Prey", "ID_FMP_CLASS_FEATURE_503", "11"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Chosen Prey"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Collect Life Spark"] = new RulesElement({
    name: "Collect Life Spark",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_514",
    source: "Player's Handbook",
    categories: ["Collect Life Spark", "ID_FMP_CLASS_FEATURE_514", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Combat Challenge"] = new RulesElement({
    name: "Combat Challenge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_54",
    source: "Player's Handbook",
    categories: ["Combat Challenge", "ID_FMP_CLASS_FEATURE_54", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_7419"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Combat Leader"] = new RulesElement({
    name: "Combat Leader",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_443",
    source: "Player's Handbook",
    categories: ["Combat Leader", "ID_FMP_CLASS_FEATURE_443", "1"],
    rules: function(model) {
      model.statadd("Combat Leader", 2, "Combat Leader");
      model.statadd("Initiative Misc", function() { return model.stat("Combat Leader"); }, "Power");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Combat Superiority"] = new RulesElement({
    name: "Combat Superiority",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_401",
    source: "Player's Handbook",
    categories: ["Combat Superiority", "ID_FMP_CLASS_FEATURE_401", "1"],
    rules: function(model) {
      model.statadd("Combat Superiority", function() { return model.stat("Wisdom modifier"); }, "Ability");
      model.statadd("attack rolls", function() { /* with opportunity attacks */ return model.stat("Combat Superiority"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Combat Veteran's Action"] = new RulesElement({
    name: "Combat Veteran's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_669",
    source: "Player's Handbook",
    categories: ["Combat Veteran's Action", "ID_FMP_CLASS_FEATURE_669", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Combat Veteran's Action:When you spend an action point to take an extra action, one of your allies within 10 squares of you can take a move action as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Commanding Presence"] = new RulesElement({
    name: "Commanding Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_316",
    source: "Player's Handbook",
    categories: ["Commanding Presence", "ID_FMP_CLASS_FEATURE_316", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_316"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Corellon's Implement"] = new RulesElement({
    name: "Corellon's Implement",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_462",
    source: "Player's Handbook",
    categories: ["Corellon's Implement", "ID_FMP_CLASS_FEATURE_462", "11"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Corellon's Implement"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Courage from on High"] = new RulesElement({
    name: "Courage from on High",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_472",
    source: "Player's Handbook",
    categories: ["Courage from on High", "ID_FMP_CLASS_FEATURE_472", "16"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Cruel Recovery"] = new RulesElement({
    name: "Cruel Recovery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_498",
    source: "Player's Handbook",
    categories: ["Cruel Recovery", "ID_FMP_CLASS_FEATURE_498", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Cry Havoc"] = new RulesElement({
    name: "Cry Havoc",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_491",
    source: "Player's Handbook",
    categories: ["Cry Havoc", "ID_FMP_CLASS_FEATURE_491", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dagger Advantage"] = new RulesElement({
    name: "Dagger Advantage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_509",
    source: "Player's Handbook",
    categories: ["Dagger Advantage", "ID_FMP_CLASS_FEATURE_509", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dagger Precision"] = new RulesElement({
    name: "Dagger Precision",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_508",
    source: "Player's Handbook",
    categories: ["Dagger Precision", "ID_FMP_CLASS_FEATURE_508", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Daggermaster's Action"] = new RulesElement({
    name: "Daggermaster's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_657",
    source: "Player's Handbook",
    categories: ["Daggermaster's Action", "ID_FMP_CLASS_FEATURE_657", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Daggermaster's Action:You can spend an action point to reroll one attack roll or damage roll you made using a dagger, instead of taking an extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dirty Fighting"] = new RulesElement({
    name: "Dirty Fighting",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_652",
    source: "Player's Handbook",
    categories: ["Dirty Fighting", "ID_FMP_CLASS_FEATURE_652", "16"],
    rules: function(model) {
      model.statadd("ID_FMP_CLASS_3,weapon:damage", function() { return model.stat("Wisdom modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Disciplined Blade"] = new RulesElement({
    name: "Disciplined Blade",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_495",
    source: "Player's Handbook",
    categories: ["Disciplined Blade", "ID_FMP_CLASS_FEATURE_495", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Divine Challenge"] = new RulesElement({
    name: "Divine Challenge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_72",
    source: "Player's Handbook",
    categories: ["Divine Challenge", "ID_FMP_CLASS_FEATURE_72", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_805"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Divine Miracle"] = new RulesElement({
    name: "Divine Miracle",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_690",
    source: "Player's Handbook,Divine Power",
    categories: ["Divine Miracle", "ID_FMP_CLASS_FEATURE_690", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Divine Recovery"] = new RulesElement({
    name: "Divine Recovery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_529",
    source: "Player's Handbook,Divine Power",
    categories: ["Divine Recovery", "ID_FMP_CLASS_FEATURE_529", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Divine Spark"] = new RulesElement({
    name: "Divine Spark",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_527",
    source: "Player's Handbook,Divine Power",
    categories: ["Divine Spark", "ID_FMP_CLASS_FEATURE_527", "21"],
    rules: function(model) {
      model.select('class feature', 2, {
        filter: function(model, element) { return element.hasCategory("Divine Spark"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Divine Spark Charisma"] = new RulesElement({
    name: "Divine Spark Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DIVINE_SPARK_CHARISMA",
    source: "Player's Handbook,Divine Power",
    categories: ["Divine Spark Charisma", "ID_INTERNAL_CLASS_FEATURE_DIVINE_SPARK_CHARISMA", "Divine Spark"],
    rules: function(model) {
      model.statadd("Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Divine Spark Constitution"] = new RulesElement({
    name: "Divine Spark Constitution",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DIVINE_SPARK_CONSTITUTION",
    source: "Player's Handbook,Divine Power",
    categories: ["Divine Spark Constitution", "ID_INTERNAL_CLASS_FEATURE_DIVINE_SPARK_CONSTITUTION", "Divine Spark"],
    rules: function(model) {
      model.statadd("Constitution", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Divine Spark Dexterity"] = new RulesElement({
    name: "Divine Spark Dexterity",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DIVINE_SPARK_DEXTERITY",
    source: "Player's Handbook,Divine Power",
    categories: ["Divine Spark Dexterity", "ID_INTERNAL_CLASS_FEATURE_DIVINE_SPARK_DEXTERITY", "Divine Spark"],
    rules: function(model) {
      model.statadd("Dexterity", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Divine Spark Intelligence"] = new RulesElement({
    name: "Divine Spark Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DIVINE_SPARK_INTELLIGENCE",
    source: "Player's Handbook,Divine Power",
    categories: ["Divine Spark Intelligence", "ID_INTERNAL_CLASS_FEATURE_DIVINE_SPARK_INTELLIGENCE", "Divine Spark"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Divine Spark Strength"] = new RulesElement({
    name: "Divine Spark Strength",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DIVINE_SPARK_STRENGTH",
    source: "Player's Handbook,Divine Power",
    categories: ["Divine Spark Strength", "ID_INTERNAL_CLASS_FEATURE_DIVINE_SPARK_STRENGTH", "Divine Spark"],
    rules: function(model) {
      model.statadd("Strength", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Divine Spark Wisdom"] = new RulesElement({
    name: "Divine Spark Wisdom",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DIVINE_SPARK_WISDOM",
    source: "Player's Handbook,Divine Power",
    categories: ["Divine Spark Wisdom", "ID_INTERNAL_CLASS_FEATURE_DIVINE_SPARK_WISDOM", "Divine Spark"],
    rules: function(model) {
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Doomsayer's Action"] = new RulesElement({
    name: "Doomsayer's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_680",
    source: "Player's Handbook",
    categories: ["Doomsayer's Action", "ID_FMP_CLASS_FEATURE_680", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Doomsayer's Action:When you spend an action point to take an extra action, you also deal the extra damage of your Warlock's Curse to all of your enemies currently affected by it.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Doomsayer's Oath"] = new RulesElement({
    name: "Doomsayer's Oath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_478",
    source: "Player's Handbook",
    categories: ["Doomsayer's Oath", "ID_FMP_CLASS_FEATURE_478", "16"],
    rules: function(model) {
      model.statadd("fear:attack", function() { /* when you are bloodied */ return 2; }, "Power");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Doomsayer's Proclamation"] = new RulesElement({
    name: "Doomsayer's Proclamation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_477",
    source: "Player's Handbook",
    categories: ["Doomsayer's Proclamation", "ID_FMP_CLASS_FEATURE_477", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Eldritch Blast"] = new RulesElement({
    name: "Eldritch Blast",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_606",
    source: "Player's Handbook",
    categories: ["Eldritch Blast", "ID_FMP_CLASS_FEATURE_606", "1"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_POWER_1333") || element.hasCategory("ID_FMP_POWER_7402")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Eldritch Blast Charisma"] = new RulesElement({
    name: "Eldritch Blast Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ELDRITCH_BLAST_CHARISMA",
    source: "Player's Handbook",
    categories: ["Eldritch Blast Charisma", "ID_INTERNAL_CLASS_FEATURE_ELDRITCH_BLAST_CHARISMA", "Eldritch Blast", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Eldritch Blast Constitution"] = new RulesElement({
    name: "Eldritch Blast Constitution",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ELDRITCH_BLAST_CONSTITUTION",
    source: "Player's Handbook",
    categories: ["Eldritch Blast Constitution", "ID_INTERNAL_CLASS_FEATURE_ELDRITCH_BLAST_CONSTITUTION", "Eldritch Blast", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = class_feature["Eldritch Pact"] = new RulesElement({
    name: "Eldritch Pact",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_777",
    source: "Player's Handbook",
    categories: ["Eldritch Pact", "ID_FMP_CLASS_FEATURE_777", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_777"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Enduring Warrior"] = new RulesElement({
    name: "Enduring Warrior",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_511",
    source: "Player's Handbook",
    categories: ["Enduring Warrior", "ID_FMP_CLASS_FEATURE_511", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Eternal Action"] = new RulesElement({
    name: "Eternal Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_692",
    source: "Player's Handbook",
    categories: ["Eternal Action", "ID_FMP_CLASS_FEATURE_692", "24"],
    rules: function(model) {
      model.statadd("Action Point", "Eternal Action:When you spend an action point to take an extra action, you also gain an extra action on your next turn. The extra action you take on your next turn doesn't benefit from any abilities (such as many paragon path features) that affect what happens when you spend an action point.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Extra Damage Action"] = new RulesElement({
    name: "Extra Damage Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_651",
    source: "Player's Handbook",
    categories: ["Extra Damage Action", "ID_FMP_CLASS_FEATURE_651", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Extra Damage Action:When you spend an action point to take an extra action, you also add one-half your level to the damage dealt by any of your standard action attacks this turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ferocious Reaction"] = new RulesElement({
    name: "Ferocious Reaction",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_648",
    source: "Player's Handbook",
    categories: ["Ferocious Reaction", "ID_FMP_CLASS_FEATURE_648", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Ferocious Reaction:Whenever you spend an action point to take an extra action, you also gain a +4 bonus to all defenses until the start of your next turn");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fey Pact"] = new RulesElement({
    name: "Fey Pact",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_772",
    source: "Player's Handbook,Player's Handbook 3",
    categories: ["Fey Pact", "ID_FMP_CLASS_FEATURE_772", "ID_FMP_CLASS_FEATURE_777", "Eldritch Pact", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_1456"]);
      model.grant(elements.id["ID_FMP_POWER_2094"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Feytouched Action"] = new RulesElement({
    name: "Feytouched Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_681",
    source: "Player's Handbook",
    categories: ["Feytouched Action", "ID_FMP_CLASS_FEATURE_681", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Feytouched Action:When you spend an action point to take an extra action, you also gain a +4 bonus to attack rolls until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fighter Talents"] = new RulesElement({
    name: "Fighter Talents",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1064",
    source: "Player's Handbook",
    categories: ["Fighter Talents", "ID_FMP_CLASS_FEATURE_1064", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_1064"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fighting Style"] = new RulesElement({
    name: "Fighting Style",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_321",
    source: "Player's Handbook",
    categories: ["Fighting Style", "ID_FMP_CLASS_FEATURE_321", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_321"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["First Strike"] = new RulesElement({
    name: "First Strike",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_368",
    source: "Player's Handbook,Player's Handbook 3",
    categories: ["First Strike", "ID_FMP_CLASS_FEATURE_368", "ID_FMP_HYBRID_CLASS_356", "Hybrid Rogue", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Foresight"] = new RulesElement({
    name: "Foresight",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_438",
    source: "Player's Handbook",
    categories: ["Foresight", "ID_FMP_CLASS_FEATURE_438", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Guardian Mindfulness Charisma"] = new RulesElement({
    name: "Guardian Mindfulness Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_GUARDIAN_MINDFULNESS_CHARISMA",
    source: "Player's Handbook,Divine Power",
    categories: ["Guardian Mindfulness Charisma", "ID_INTERNAL_CLASS_FEATURE_GUARDIAN_MINDFULNESS_CHARISMA", "Guardian Mindfulness"],
    rules: function(model) {
      model.statadd("Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Guardian Mindfulness Constitution"] = new RulesElement({
    name: "Guardian Mindfulness Constitution",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_GUARDIAN_MINDFULNESS_CONSTITUTION",
    source: "Player's Handbook,Divine Power",
    categories: ["Guardian Mindfulness Constitution", "ID_INTERNAL_CLASS_FEATURE_GUARDIAN_MINDFULNESS_CONSTITUTION", "Guardian Mindfulness"],
    rules: function(model) {
      model.statadd("Constitution", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Guardian Mindfulness Dexterity"] = new RulesElement({
    name: "Guardian Mindfulness Dexterity",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_GUARDIAN_MINDFULNESS_DEXTERITY",
    source: "Player's Handbook,Divine Power",
    categories: ["Guardian Mindfulness Dexterity", "ID_INTERNAL_CLASS_FEATURE_GUARDIAN_MINDFULNESS_DEXTERITY", "Guardian Mindfulness"],
    rules: function(model) {
      model.statadd("Dexterity", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Guardian Mindfulness Intelligence"] = new RulesElement({
    name: "Guardian Mindfulness Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_GUARDIAN_MINDFULNESS_INTELLIGENCE",
    source: "Player's Handbook,Divine Power",
    categories: ["Guardian Mindfulness Intelligence", "ID_INTERNAL_CLASS_FEATURE_GUARDIAN_MINDFULNESS_INTELLIGENCE", "Guardian Mindfulness"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Guardian Mindfulness Strength"] = new RulesElement({
    name: "Guardian Mindfulness Strength",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_GUARDIAN_MINDFULNESS_STRENGTH",
    source: "Player's Handbook,Divine Power",
    categories: ["Guardian Mindfulness Strength", "ID_INTERNAL_CLASS_FEATURE_GUARDIAN_MINDFULNESS_STRENGTH", "Guardian Mindfulness"],
    rules: function(model) {
      model.statadd("Strength", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Guardian Mindfulness Wisdom"] = new RulesElement({
    name: "Guardian Mindfulness Wisdom",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_GUARDIAN_MINDFULNESS_WISDOM",
    source: "Player's Handbook,Divine Power",
    categories: ["Guardian Mindfulness Wisdom", "ID_INTERNAL_CLASS_FEATURE_GUARDIAN_MINDFULNESS_WISDOM", "Guardian Mindfulness"],
    rules: function(model) {
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Healer's Lore"] = new RulesElement({
    name: "Healer's Lore",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_395",
    source: "Player's Handbook,Player's Handbook 3",
    categories: ["Healer's Lore", "ID_FMP_CLASS_FEATURE_395", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Healing Word"] = new RulesElement({
    name: "Healing Word",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_64",
    source: "Player's Handbook",
    categories: ["Healing Word", "ID_FMP_CLASS_FEATURE_64", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_1455"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Honor and Glory"] = new RulesElement({
    name: "Honor and Glory",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_493",
    source: "Player's Handbook",
    categories: ["Honor and Glory", "ID_FMP_CLASS_FEATURE_493", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Hospitaler's Action"] = new RulesElement({
    name: "Hospitaler's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_678",
    source: "Player's Handbook",
    categories: ["Hospitaler's Action", "ID_FMP_CLASS_FEATURE_678", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Hospitaler's Action:When you spend an action point to take an extra action, each ally within 5 squares regains hit points equal to your Wisdom modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hospitaler's Blessing"] = new RulesElement({
    name: "Hospitaler's Blessing",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_467",
    source: "Player's Handbook",
    categories: ["Hospitaler's Blessing", "ID_FMP_CLASS_FEATURE_467", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Hospitalers' Care"] = new RulesElement({
    name: "Hospitalers' Care",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_468",
    source: "Player's Handbook",
    categories: ["Hospitalers' Care", "ID_FMP_CLASS_FEATURE_468", "16"],
    rules: function(model) {
      model.statadd("Lay on Hands:healing", function() { return model.stat("Charisma modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hunter's Quarry"] = new RulesElement({
    name: "Hunter's Quarry",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_602",
    source: "Player's Handbook",
    categories: ["Hunter's Quarry", "ID_FMP_CLASS_FEATURE_602", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_5598"]);
      model.statadd("Hunter's Quarry Dice", 1);
      model.statadd("Hunter's Quarry Dice", 1);
      model.statadd("Hunter's Quarry Dice", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Illuminating Attacks"] = new RulesElement({
    name: "Illuminating Attacks",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_446",
    source: "Player's Handbook",
    categories: ["Illuminating Attacks", "ID_FMP_CLASS_FEATURE_446", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["In Defense of Order"] = new RulesElement({
    name: "In Defense of Order",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_473",
    source: "Player's Handbook",
    categories: ["In Defense of Order", "ID_FMP_CLASS_FEATURE_473", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Infernal Action"] = new RulesElement({
    name: "Infernal Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_682",
    source: "Player's Handbook",
    categories: ["Infernal Action", "ID_FMP_CLASS_FEATURE_682", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Infernal Action:When you spend an action point to take an extra action, if you use your action to make an attack that hits, that hit deals ongoing 5 fire damage (save ends).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Infernal Pact"] = new RulesElement({
    name: "Infernal Pact",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_773",
    source: "Player's Handbook,Player's Handbook 3",
    categories: ["Infernal Pact", "ID_FMP_CLASS_FEATURE_773", "ID_FMP_CLASS_FEATURE_777", "Eldritch Pact", "1"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_POWER_1458") || element.hasCategory("ID_FMP_POWER_12307")); }
      });
      model.grant(elements.id["ID_FMP_POWER_2095"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Infiltrator's Action"] = new RulesElement({
    name: "Infiltrator's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_658",
    source: "Player's Handbook",
    categories: ["Infiltrator's Action", "ID_FMP_CLASS_FEATURE_658", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Infiltrator's Action:When you spend an action point to take an extra action, you also gain a move action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Inspiring Presence"] = new RulesElement({
    name: "Inspiring Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_32",
    source: "Player's Handbook",
    categories: ["Inspiring Presence", "ID_FMP_CLASS_FEATURE_32", "ID_FMP_CLASS_FEATURE_316", "Commanding Presence", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Inspiring Word"] = new RulesElement({
    name: "Inspiring Word",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_317",
    source: "Player's Handbook",
    categories: ["Inspiring Word", "ID_FMP_CLASS_FEATURE_317", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_1590"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Invisible Infiltrator"] = new RulesElement({
    name: "Invisible Infiltrator",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_660",
    source: "Player's Handbook",
    categories: ["Invisible Infiltrator", "ID_FMP_CLASS_FEATURE_660", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Just Action"] = new RulesElement({
    name: "Just Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_679",
    source: "Player's Handbook",
    categories: ["Just Action", "ID_FMP_CLASS_FEATURE_679", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Just Action:When you spend an action point to take an extra action, each enemy adjacent to you is weakened until the end of its next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Just Shelter"] = new RulesElement({
    name: "Just Shelter",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_470",
    source: "Player's Handbook",
    categories: ["Just Shelter", "ID_FMP_CLASS_FEATURE_470", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Just Spirit"] = new RulesElement({
    name: "Just Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_469",
    source: "Player's Handbook",
    categories: ["Just Spirit", "ID_FMP_CLASS_FEATURE_469", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Control Action"] = new RulesElement({
    name: "Kensei Control Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_649",
    source: "Player's Handbook",
    categories: ["Kensei Control Action", "ID_FMP_CLASS_FEATURE_649", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Kensei Control Action:You can spend an action point to reroll one attack roll, damage roll, skill check, or ability check, instead of taking an extra action");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus"] = new RulesElement({
    name: "Kensei Focus",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_452",
    source: "Player's Handbook",
    categories: ["Kensei Focus", "ID_FMP_CLASS_FEATURE_452", "11"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Kensei Focus"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Bastard sword"] = new RulesElement({
    name: "Kensei Focus Bastard sword",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_BASTARD_SWORD",
    source: "Player's Handbook",
    categories: ["Kensei Focus Bastard sword", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_BASTARD_SWORD", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Bastard sword:attack", 1);
      model.statadd("Bastard sword:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Battleaxe"] = new RulesElement({
    name: "Kensei Focus Battleaxe",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_BATTLEAXE",
    source: "Player's Handbook",
    categories: ["Kensei Focus Battleaxe", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_BATTLEAXE", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Battleaxe:attack", 1);
      model.statadd("Battleaxe:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Battlefist"] = new RulesElement({
    name: "Kensei Focus Battlefist",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_BATTLEFIST",
    source: "Player's Handbook",
    categories: ["Kensei Focus Battlefist", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_BATTLEFIST", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Battlefist:attack", 1);
      model.statadd("Battlefist:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Broadsword"] = new RulesElement({
    name: "Kensei Focus Broadsword",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_BROADSWORD",
    source: "Player's Handbook",
    categories: ["Kensei Focus Broadsword", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_BROADSWORD", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Broadsword:attack", 1);
      model.statadd("Broadsword:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Claw Fighter Claw"] = new RulesElement({
    name: "Kensei Focus Claw Fighter Claw",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_CLAW_FIGHTER_CLAW",
    source: "Player's Handbook",
    categories: ["Kensei Focus Claw Fighter Claw", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_CLAW_FIGHTER_CLAW", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Claw Fighter Claw:attack", 1);
      model.statadd("Claw Fighter Claw:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Club"] = new RulesElement({
    name: "Kensei Focus Club",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_CLUB",
    source: "Player's Handbook",
    categories: ["Kensei Focus Club", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_CLUB", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Club:attack", 1);
      model.statadd("Club:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Craghammer"] = new RulesElement({
    name: "Kensei Focus Craghammer",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_CRAGHAMMER",
    source: "Player's Handbook",
    categories: ["Kensei Focus Craghammer", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_CRAGHAMMER", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Craghammer:attack", 1);
      model.statadd("Craghammer:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Cutting Wheel"] = new RulesElement({
    name: "Kensei Focus Cutting Wheel",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_CUTTING_WHEEL",
    source: "Player's Handbook",
    categories: ["Kensei Focus Cutting Wheel", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_CUTTING_WHEEL", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Cutting Wheel:attack", 1);
      model.statadd("Cutting Wheel:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Dagger"] = new RulesElement({
    name: "Kensei Focus Dagger",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_DAGGER",
    source: "Player's Handbook",
    categories: ["Kensei Focus Dagger", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_DAGGER", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Dagger:attack", 1);
      model.statadd("Dagger:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Double axe"] = new RulesElement({
    name: "Kensei Focus Double axe",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_DOUBLE_AXE",
    source: "Player's Handbook",
    categories: ["Kensei Focus Double axe", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_DOUBLE_AXE", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Double axe:attack", 1);
      model.statadd("Double axe:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Double flail"] = new RulesElement({
    name: "Kensei Focus Double flail",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_DOUBLE_FLAIL",
    source: "Player's Handbook",
    categories: ["Kensei Focus Double flail", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_DOUBLE_FLAIL", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Double flail:attack", 1);
      model.statadd("Double flail:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Double Scimitar"] = new RulesElement({
    name: "Kensei Focus Double Scimitar",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_DOUBLE_SCIMITAR",
    source: "Player's Handbook",
    categories: ["Kensei Focus Double Scimitar", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_DOUBLE_SCIMITAR", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Double Scimitar:attack", 1);
      model.statadd("Double Scimitar:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Double sword"] = new RulesElement({
    name: "Kensei Focus Double sword",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_DOUBLE_SWORD",
    source: "Player's Handbook",
    categories: ["Kensei Focus Double sword", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_DOUBLE_SWORD", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Double sword:attack", 1);
      model.statadd("Double sword:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Drow Long Knife"] = new RulesElement({
    name: "Kensei Focus Drow Long Knife",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_DROW_LONG_KNIFE",
    source: "Player's Handbook",
    categories: ["Kensei Focus Drow Long Knife", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_DROW_LONG_KNIFE", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Drow Long Knife:attack", 1);
      model.statadd("Drow Long Knife:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Execution axe"] = new RulesElement({
    name: "Kensei Focus Execution axe",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_EXECUTION_AXE",
    source: "Player's Handbook",
    categories: ["Kensei Focus Execution axe", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_EXECUTION_AXE", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Execution axe:attack", 1);
      model.statadd("Execution axe:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Falchion"] = new RulesElement({
    name: "Kensei Focus Falchion",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_FALCHION",
    source: "Player's Handbook",
    categories: ["Kensei Focus Falchion", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_FALCHION", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Falchion:attack", 1);
      model.statadd("Falchion:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Flail"] = new RulesElement({
    name: "Kensei Focus Flail",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_FLAIL",
    source: "Player's Handbook",
    categories: ["Kensei Focus Flail", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_FLAIL", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Flail:attack", 1);
      model.statadd("Flail:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Fullblade"] = new RulesElement({
    name: "Kensei Focus Fullblade",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_FULLBLADE",
    source: "Player's Handbook",
    categories: ["Kensei Focus Fullblade", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_FULLBLADE", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Fullblade:attack", 1);
      model.statadd("Fullblade:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Garrote"] = new RulesElement({
    name: "Kensei Focus Garrote",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_GARROTE",
    source: "Player's Handbook",
    categories: ["Kensei Focus Garrote", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_GARROTE", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Garrote:attack", 1);
      model.statadd("Garrote:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Glaive"] = new RulesElement({
    name: "Kensei Focus Glaive",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_GLAIVE",
    source: "Player's Handbook",
    categories: ["Kensei Focus Glaive", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_GLAIVE", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Glaive:attack", 1);
      model.statadd("Glaive:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Greataxe"] = new RulesElement({
    name: "Kensei Focus Greataxe",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_GREATAXE",
    source: "Player's Handbook",
    categories: ["Kensei Focus Greataxe", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_GREATAXE", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Greataxe:attack", 1);
      model.statadd("Greataxe:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Greatclub"] = new RulesElement({
    name: "Kensei Focus Greatclub",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_GREATCLUB",
    source: "Player's Handbook",
    categories: ["Kensei Focus Greatclub", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_GREATCLUB", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Greatclub:attack", 1);
      model.statadd("Greatclub:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Greatspear"] = new RulesElement({
    name: "Kensei Focus Greatspear",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_GREATSPEAR",
    source: "Player's Handbook",
    categories: ["Kensei Focus Greatspear", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_GREATSPEAR", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Greatspear:attack", 1);
      model.statadd("Greatspear:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Greatsword"] = new RulesElement({
    name: "Kensei Focus Greatsword",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_GREATSWORD",
    source: "Player's Handbook",
    categories: ["Kensei Focus Greatsword", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_GREATSWORD", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Greatsword:attack", 1);
      model.statadd("Greatsword:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Halberd"] = new RulesElement({
    name: "Kensei Focus Halberd",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_HALBERD",
    source: "Player's Handbook",
    categories: ["Kensei Focus Halberd", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_HALBERD", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Halberd:attack", 1);
      model.statadd("Halberd:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Handaxe"] = new RulesElement({
    name: "Kensei Focus Handaxe",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_HANDAXE",
    source: "Player's Handbook",
    categories: ["Kensei Focus Handaxe", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_HANDAXE", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Handaxe:attack", 1);
      model.statadd("Handaxe:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Heavy flail"] = new RulesElement({
    name: "Kensei Focus Heavy flail",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_HEAVY_FLAIL",
    source: "Player's Handbook",
    categories: ["Kensei Focus Heavy flail", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_HEAVY_FLAIL", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Heavy flail:attack", 1);
      model.statadd("Heavy flail:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Heavy war pick"] = new RulesElement({
    name: "Kensei Focus Heavy war pick",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_HEAVY_WAR_PICK",
    source: "Player's Handbook",
    categories: ["Kensei Focus Heavy war pick", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_HEAVY_WAR_PICK", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Heavy war pick:attack", 1);
      model.statadd("Heavy war pick:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Javelin"] = new RulesElement({
    name: "Kensei Focus Javelin",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_JAVELIN",
    source: "Player's Handbook",
    categories: ["Kensei Focus Javelin", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_JAVELIN", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Javelin:attack", 1);
      model.statadd("Javelin:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Katar"] = new RulesElement({
    name: "Kensei Focus Katar",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_KATAR",
    source: "Player's Handbook",
    categories: ["Kensei Focus Katar", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_KATAR", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Katar:attack", 1);
      model.statadd("Katar:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Khopesh"] = new RulesElement({
    name: "Kensei Focus Khopesh",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_KHOPESH",
    source: "Player's Handbook",
    categories: ["Kensei Focus Khopesh", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_KHOPESH", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Khopesh:attack", 1);
      model.statadd("Khopesh:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Kukri"] = new RulesElement({
    name: "Kensei Focus Kukri",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_KUKRI",
    source: "Player's Handbook",
    categories: ["Kensei Focus Kukri", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_KUKRI", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Kukri:attack", 1);
      model.statadd("Kukri:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Light war pick"] = new RulesElement({
    name: "Kensei Focus Light war pick",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_LIGHT_WAR_PICK",
    source: "Player's Handbook",
    categories: ["Kensei Focus Light war pick", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_LIGHT_WAR_PICK", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Light war pick:attack", 1);
      model.statadd("Light war pick:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Longspear"] = new RulesElement({
    name: "Kensei Focus Longspear",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_LONGSPEAR",
    source: "Player's Handbook",
    categories: ["Kensei Focus Longspear", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_LONGSPEAR", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Longspear:attack", 1);
      model.statadd("Longspear:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Longsword"] = new RulesElement({
    name: "Kensei Focus Longsword",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_LONGSWORD",
    source: "Player's Handbook",
    categories: ["Kensei Focus Longsword", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_LONGSWORD", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Longsword:attack", 1);
      model.statadd("Longsword:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Mace"] = new RulesElement({
    name: "Kensei Focus Mace",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_MACE",
    source: "Player's Handbook",
    categories: ["Kensei Focus Mace", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_MACE", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Mace:attack", 1);
      model.statadd("Mace:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Maul"] = new RulesElement({
    name: "Kensei Focus Maul",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_MAUL",
    source: "Player's Handbook",
    categories: ["Kensei Focus Maul", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_MAUL", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Maul:attack", 1);
      model.statadd("Maul:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Mordenkrad"] = new RulesElement({
    name: "Kensei Focus Mordenkrad",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_MORDENKRAD",
    source: "Player's Handbook",
    categories: ["Kensei Focus Mordenkrad", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_MORDENKRAD", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Mordenkrad:attack", 1);
      model.statadd("Mordenkrad:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Morningstar"] = new RulesElement({
    name: "Kensei Focus Morningstar",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_MORNINGSTAR",
    source: "Player's Handbook",
    categories: ["Kensei Focus Morningstar", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_MORNINGSTAR", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Morningstar:attack", 1);
      model.statadd("Morningstar:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Net"] = new RulesElement({
    name: "Kensei Focus Net",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_NET",
    source: "Player's Handbook",
    categories: ["Kensei Focus Net", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_NET", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Net:attack", 1);
      model.statadd("Net:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Parrying dagger"] = new RulesElement({
    name: "Kensei Focus Parrying dagger",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_PARRYING_DAGGER",
    source: "Player's Handbook",
    categories: ["Kensei Focus Parrying dagger", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_PARRYING_DAGGER", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Parrying dagger:attack", 1);
      model.statadd("Parrying dagger:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Quarterstaff"] = new RulesElement({
    name: "Kensei Focus Quarterstaff",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_QUARTERSTAFF",
    source: "Player's Handbook",
    categories: ["Kensei Focus Quarterstaff", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_QUARTERSTAFF", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Quarterstaff:attack", 1);
      model.statadd("Quarterstaff:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Rapier"] = new RulesElement({
    name: "Kensei Focus Rapier",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_RAPIER",
    source: "Player's Handbook",
    categories: ["Kensei Focus Rapier", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_RAPIER", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Rapier:attack", 1);
      model.statadd("Rapier:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Scimitar"] = new RulesElement({
    name: "Kensei Focus Scimitar",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_SCIMITAR",
    source: "Player's Handbook",
    categories: ["Kensei Focus Scimitar", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_SCIMITAR", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Scimitar:attack", 1);
      model.statadd("Scimitar:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Scourge"] = new RulesElement({
    name: "Kensei Focus Scourge",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_SCOURGE",
    source: "Player's Handbook",
    categories: ["Kensei Focus Scourge", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_SCOURGE", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Scourge:attack", 1);
      model.statadd("Scourge:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Scythe"] = new RulesElement({
    name: "Kensei Focus Scythe",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_SCYTHE",
    source: "Player's Handbook",
    categories: ["Kensei Focus Scythe", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_SCYTHE", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Scythe:attack", 1);
      model.statadd("Scythe:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Short sword"] = new RulesElement({
    name: "Kensei Focus Short sword",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_SHORT_SWORD",
    source: "Player's Handbook",
    categories: ["Kensei Focus Short sword", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_SHORT_SWORD", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Short sword:attack", 1);
      model.statadd("Short sword:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Sickle"] = new RulesElement({
    name: "Kensei Focus Sickle",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_SICKLE",
    source: "Player's Handbook",
    categories: ["Kensei Focus Sickle", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_SICKLE", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Sickle:attack", 1);
      model.statadd("Sickle:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Spear"] = new RulesElement({
    name: "Kensei Focus Spear",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_SPEAR",
    source: "Player's Handbook",
    categories: ["Kensei Focus Spear", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_SPEAR", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Spear:attack", 1);
      model.statadd("Spear:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Spiked chain"] = new RulesElement({
    name: "Kensei Focus Spiked chain",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_SPIKED_CHAIN",
    source: "Player's Handbook",
    categories: ["Kensei Focus Spiked chain", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_SPIKED_CHAIN", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Spiked chain:attack", 1);
      model.statadd("Spiked chain:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Spiked gauntlet"] = new RulesElement({
    name: "Kensei Focus Spiked gauntlet",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_SPIKED_GAUNTLET",
    source: "Player's Handbook",
    categories: ["Kensei Focus Spiked gauntlet", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_SPIKED_GAUNTLET", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Spiked gauntlet:attack", 1);
      model.statadd("Spiked gauntlet:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Spiked shield"] = new RulesElement({
    name: "Kensei Focus Spiked shield",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_SPIKED_SHIELD",
    source: "Player's Handbook",
    categories: ["Kensei Focus Spiked shield", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_SPIKED_SHIELD", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Spiked shield:attack", 1);
      model.statadd("Spiked shield:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Talenta Sharrash"] = new RulesElement({
    name: "Kensei Focus Talenta Sharrash",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_TALENTA_SHARRASH",
    source: "Player's Handbook",
    categories: ["Kensei Focus Talenta Sharrash", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_TALENTA_SHARRASH", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Talenta Sharrash:attack", 1);
      model.statadd("Talenta Sharrash:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Talenta Tangat"] = new RulesElement({
    name: "Kensei Focus Talenta Tangat",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_TALENTA_TANGAT",
    source: "Player's Handbook",
    categories: ["Kensei Focus Talenta Tangat", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_TALENTA_TANGAT", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Talenta Tangat:attack", 1);
      model.statadd("Talenta Tangat:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Throwing hammer"] = new RulesElement({
    name: "Kensei Focus Throwing hammer",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_THROWING_HAMMER",
    source: "Player's Handbook",
    categories: ["Kensei Focus Throwing hammer", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_THROWING_HAMMER", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Throwing hammer:attack", 1);
      model.statadd("Throwing hammer:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Tratnyr"] = new RulesElement({
    name: "Kensei Focus Tratnyr",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_TRATNYR",
    source: "Player's Handbook",
    categories: ["Kensei Focus Tratnyr", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_TRATNYR", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Tratnyr:attack", 1);
      model.statadd("Tratnyr:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Trident"] = new RulesElement({
    name: "Kensei Focus Trident",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_TRIDENT",
    source: "Player's Handbook",
    categories: ["Kensei Focus Trident", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_TRIDENT", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Trident:attack", 1);
      model.statadd("Trident:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Triple-headed flail"] = new RulesElement({
    name: "Kensei Focus Triple-headed flail",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_TRIPLE-HEADED_FLAIL",
    source: "Player's Handbook",
    categories: ["Kensei Focus Triple-headed flail", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_TRIPLE-HEADED_FLAIL", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Triple-headed flail:attack", 1);
      model.statadd("Triple-headed flail:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Unarmed attack"] = new RulesElement({
    name: "Kensei Focus Unarmed attack",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_UNARMED_ATTACK",
    source: "Player's Handbook",
    categories: ["Kensei Focus Unarmed attack", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_UNARMED_ATTACK", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Unarmed attack:attack", 1);
      model.statadd("Unarmed attack:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Urgrosh"] = new RulesElement({
    name: "Kensei Focus Urgrosh",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_URGROSH",
    source: "Player's Handbook",
    categories: ["Kensei Focus Urgrosh", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_URGROSH", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Urgrosh:attack", 1);
      model.statadd("Urgrosh:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus War Pick"] = new RulesElement({
    name: "Kensei Focus War Pick",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_WAR_PICK",
    source: "Player's Handbook",
    categories: ["Kensei Focus War Pick", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_WAR_PICK", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("War Pick:attack", 1);
      model.statadd("War Pick:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Waraxe"] = new RulesElement({
    name: "Kensei Focus Waraxe",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_WARAXE",
    source: "Player's Handbook",
    categories: ["Kensei Focus Waraxe", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_WARAXE", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Waraxe:attack", 1);
      model.statadd("Waraxe:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Warhammer"] = new RulesElement({
    name: "Kensei Focus Warhammer",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_WARHAMMER",
    source: "Player's Handbook",
    categories: ["Kensei Focus Warhammer", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_WARHAMMER", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Warhammer:attack", 1);
      model.statadd("Warhammer:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Whip"] = new RulesElement({
    name: "Kensei Focus Whip",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_WHIP",
    source: "Player's Handbook",
    categories: ["Kensei Focus Whip", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_WHIP", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Whip:attack", 1);
      model.statadd("Whip:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Focus Zulaat"] = new RulesElement({
    name: "Kensei Focus Zulaat",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_ZULAAT",
    source: "Player's Handbook",
    categories: ["Kensei Focus Zulaat", "ID_INTERNAL_CLASS_FEATURE_KENSEI_FOCUS_ZULAAT", "ID_FMP_CLASS_FEATURE_452", "Kensei Focus"],
    rules: function(model) {
      model.statadd("Zulaat:attack", 1);
      model.statadd("Zulaat:damage", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Kensei Mastery"] = new RulesElement({
    name: "Kensei Mastery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_453",
    source: "Player's Handbook",
    categories: ["Kensei Mastery", "ID_FMP_CLASS_FEATURE_453", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Knight Commander's Action"] = new RulesElement({
    name: "Knight Commander's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_670",
    source: "Player's Handbook",
    categories: ["Knight Commander's Action", "ID_FMP_CLASS_FEATURE_670", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Knight Commander's Action:When you spend an action point to take an extra action, your allies gain a +1 bonus to all defenses until the start of your next turn. Your allies need to be able to see and hear you to gain this bonus.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Lasting Light"] = new RulesElement({
    name: "Lasting Light",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_447",
    source: "Player's Handbook",
    categories: ["Lasting Light", "ID_FMP_CLASS_FEATURE_447", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Lay on Hands"] = new RulesElement({
    name: "Lay on Hands",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_434",
    source: "Player's Handbook",
    categories: ["Lay on Hands", "ID_FMP_CLASS_FEATURE_434", "1"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return ((element.hasCategory("ID_FMP_POWER_1566") || element.hasCategory("ID_FMP_POWER_8097")) || element.hasCategory("ID_FMP_POWER_7240")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Lightning"] = new RulesElement({
    name: "Lightning",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_LIGHTNING",
    source: "Player's Handbook",
    categories: ["Lightning", "ID_INTERNAL_CLASS_FEATURE_LIGHTNING", "Astral Vibrance"]
  });
  byID[te.id] = te;
  
  te = class_feature["Magical Beast"] = new RulesElement({
    name: "Magical Beast",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_MAGICAL_BEAST",
    source: "Player's Handbook",
    categories: ["Magical Beast", "ID_INTERNAL_CLASS_FEATURE_MAGICAL_BEAST", "Chosen Prey"]
  });
  byID[te.id] = te;
  
  te = class_feature["One-handed Weapon Talent"] = new RulesElement({
    name: "One-handed Weapon Talent",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1062",
    source: "Player's Handbook",
    categories: ["One-handed Weapon Talent", "ID_FMP_CLASS_FEATURE_1062", "ID_FMP_CLASS_FEATURE_1064", "Fighter Talents", "1"],
    rules: function(model) {
      model.statadd("one-hand:attack", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Orb"] = new RulesElement({
    name: "Orb",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ORB",
    source: "Player's Handbook",
    categories: ["Orb", "ID_INTERNAL_CLASS_FEATURE_ORB", "Corellon's Implement"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Orb of Imposition"] = new RulesElement({
    name: "Orb of Imposition",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_769",
    source: "Player's Handbook",
    categories: ["Orb of Imposition", "ID_FMP_CLASS_FEATURE_769", "ID_FMP_CLASS_FEATURE_444", "Arcane Implement Mastery", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_5594"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Pact Initiate (dark pact)"] = new RulesElement({
    name: "Pact Initiate (dark pact)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DARK_PACT_INITIATE",
    source: "Player's Handbook",
    categories: ["Pact Initiate (dark pact)", "ID_INTERNAL_CLASS_FEATURE_DARK_PACT_INITIATE", "Pact Initiate"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3403"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_COUNTSASPACT_DARK_PACT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Pact Initiate (fey pact)"] = new RulesElement({
    name: "Pact Initiate (fey pact)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FEY_PACT_INITIATE",
    source: "Player's Handbook",
    categories: ["Pact Initiate (fey pact)", "ID_INTERNAL_CLASS_FEATURE_FEY_PACT_INITIATE", "Pact Initiate"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_1456"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_COUNTSASPACT_FEY_PACT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Pact Initiate (infernal pact)"] = new RulesElement({
    name: "Pact Initiate (infernal pact)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_INFERNAL_PACT_INITIATE",
    source: "Player's Handbook",
    categories: ["Pact Initiate (infernal pact)", "ID_INTERNAL_CLASS_FEATURE_INFERNAL_PACT_INITIATE", "Pact Initiate"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_1458"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_COUNTSASPACT_INFERNAL_PACT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Pact Initiate (star pact)"] = new RulesElement({
    name: "Pact Initiate (star pact)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_STAR_PACT_INITIATE",
    source: "Player's Handbook",
    categories: ["Pact Initiate (star pact)", "ID_INTERNAL_CLASS_FEATURE_STAR_PACT_INITIATE", "Pact Initiate"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_1457"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_COUNTSASPACT_STAR_PACT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Pact Initiate (vestige pact)"] = new RulesElement({
    name: "Pact Initiate (vestige pact)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_VESTIGE_PACT_INITIATE",
    source: "Player's Handbook",
    categories: ["Pact Initiate (vestige pact)", "ID_INTERNAL_CLASS_FEATURE_VESTIGE_PACT_INITIATE", "Pact Initiate"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_6855"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_COUNTSASPACT_VESTIGE_PACT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Pathfinder's Action"] = new RulesElement({
    name: "Pathfinder's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_666",
    source: "Player's Handbook",
    categories: ["Pathfinder's Action", "ID_FMP_CLASS_FEATURE_666", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Pathfinder's Action:When you spend an action point to take an extra action, you also gain a move action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Patron's Favor"] = new RulesElement({
    name: "Patron's Favor",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_488",
    source: "Player's Handbook",
    categories: ["Patron's Favor", "ID_FMP_CLASS_FEATURE_488", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Press of Arms"] = new RulesElement({
    name: "Press of Arms",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_494",
    source: "Player's Handbook",
    categories: ["Press of Arms", "ID_FMP_CLASS_FEATURE_494", "16"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* when making opportunity attacks */ return abilitymod(model.stat("cha")); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Prime Shot"] = new RulesElement({
    name: "Prime Shot",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_603",
    source: "Player's Handbook",
    categories: ["Prime Shot", "ID_FMP_CLASS_FEATURE_603", "ID_FMP_HYBRID_CLASS_358", "Hybrid Warlock", "1"],
    rules: function(model) {
      model.statadd("Prime Shot Bonus", 1);
      model.statadd("ranged:attack", function() { /* if none of your allies are closer to the target */ return model.stat("Prime Shot Bonus"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Prophetic Action"] = new RulesElement({
    name: "Prophetic Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_673",
    source: "Player's Handbook",
    categories: ["Prophetic Action", "ID_FMP_CLASS_FEATURE_673", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Prophetic Action:When you spend an action point to take an extra action, you also gain an extra move action that you can use during another turn later in this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Radiant"] = new RulesElement({
    name: "Radiant",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_RADIANT",
    source: "Player's Handbook",
    categories: ["Radiant", "ID_INTERNAL_CLASS_FEATURE_RADIANT", "Astral Vibrance"]
  });
  byID[te.id] = te;
  
  te = class_feature["Radiant Action"] = new RulesElement({
    name: "Radiant Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_674",
    source: "Player's Handbook",
    categories: ["Radiant Action", "ID_FMP_CLASS_FEATURE_674", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Radiant Action:When you spend an action point to take an extra action, you can also choose an enemy within 5 squares of you. That enemy takes ongoing radiant damage equal to your level (save ends).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Radiant Censure"] = new RulesElement({
    name: "Radiant Censure",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_463",
    source: "Player's Handbook",
    categories: ["Radiant Censure", "ID_FMP_CLASS_FEATURE_463", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Ritual Casting"] = new RulesElement({
    name: "Ritual Casting",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_683",
    source: "Player's Handbook,Player's Handbook 2,Player's Handbook 3",
    categories: ["Ritual Casting", "ID_FMP_CLASS_FEATURE_683", "1"],
    rules: function(model) {
      model.select('Feat', 1, {
        filter: function(model, element) { return element.hasCategory("Ritual Casting"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rogue Tactics"] = new RulesElement({
    name: "Rogue Tactics",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_547",
    source: "Player's Handbook",
    categories: ["Rogue Tactics", "ID_FMP_CLASS_FEATURE_547", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_547"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rogue Weapon Talent"] = new RulesElement({
    name: "Rogue Weapon Talent",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_391",
    source: "Player's Handbook",
    categories: ["Rogue Weapon Talent", "ID_FMP_CLASS_FEATURE_391", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Dagger:attack", 1);
      model.statadd("Kukri:attack", 1);
      model.statadd("Parrying dagger:attack", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Seeker of the Many Paths"] = new RulesElement({
    name: "Seeker of the Many Paths",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_691",
    source: "Player's Handbook",
    categories: ["Seeker of the Many Paths", "ID_FMP_CLASS_FEATURE_691", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Seeker's Lore"] = new RulesElement({
    name: "Seeker's Lore",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_693",
    source: "Player's Handbook",
    categories: ["Seeker's Lore", "ID_FMP_CLASS_FEATURE_693", "26"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("utility") && element.hasCategory("22")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Seeking Destiny"] = new RulesElement({
    name: "Seeking Destiny",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_536",
    source: "Player's Handbook",
    categories: ["Seeking Destiny", "ID_FMP_CLASS_FEATURE_536", "30"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("24"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shadow Assassin's Action"] = new RulesElement({
    name: "Shadow Assassin's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_661",
    source: "Player's Handbook",
    categories: ["Shadow Assassin's Action", "ID_FMP_CLASS_FEATURE_661", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Shadow Assassin's Action:When you spend an action point to take an extra action, you also gain a +4 bonus to attack rolls until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shadow Assassin's Riposte"] = new RulesElement({
    name: "Shadow Assassin's Riposte",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_662",
    source: "Player's Handbook",
    categories: ["Shadow Assassin's Riposte", "ID_FMP_CLASS_FEATURE_662", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Shadow Walk"] = new RulesElement({
    name: "Shadow Walk",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_604",
    source: "Player's Handbook,Player's Handbook 3",
    categories: ["Shadow Walk", "ID_FMP_CLASS_FEATURE_604", "ID_FMP_HYBRID_CLASS_358", "Hybrid Warlock", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Skewer the Weak"] = new RulesElement({
    name: "Skewer the Weak",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_496",
    source: "Player's Handbook",
    categories: ["Skewer the Weak", "ID_FMP_CLASS_FEATURE_496", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Skillful Infiltrator"] = new RulesElement({
    name: "Skillful Infiltrator",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_507",
    source: "Player's Handbook",
    categories: ["Skillful Infiltrator", "ID_FMP_CLASS_FEATURE_507", "11"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2);
      model.statadd("Athletics Misc", 2);
      model.statadd("Stealth Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Slashing Wake"] = new RulesElement({
    name: "Slashing Wake",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_435",
    source: "Player's Handbook",
    categories: ["Slashing Wake", "ID_FMP_CLASS_FEATURE_435", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sly Fortune's Favor"] = new RulesElement({
    name: "Sly Fortune's Favor",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_299",
    source: "Player's Handbook",
    categories: ["Sly Fortune's Favor", "ID_FMP_CLASS_FEATURE_299", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sneak Attack"] = new RulesElement({
    name: "Sneak Attack",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_322",
    source: "Player's Handbook",
    categories: ["Sneak Attack", "ID_FMP_CLASS_FEATURE_322", "1"],
    rules: function(model) {
      model.statadd("Sneak Attack Dice", 2);
      model.statadd("Sneak Attack Dice", 1);
      model.statadd("Sneak Attack Dice", 2);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spell Recall"] = new RulesElement({
    name: "Spell Recall",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_284",
    source: "Player's Handbook",
    categories: ["Spell Recall", "ID_FMP_CLASS_FEATURE_284", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Spellbook"] = new RulesElement({
    name: "Spellbook",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_318",
    source: "Player's Handbook",
    categories: ["Spellbook", "ID_FMP_CLASS_FEATURE_318", "1"],
    rules: function(model) {
      model.statadd("FREEBEE:ID_FMP_GEAR_33", 1);
      model.statadd("Free Rituals", "* As a wizard, you are entitled to three 1st-level rituals to begin your career. At 5th, 11th, 15th, 21st, and 25th level you gain two more free rituals of that level or lower.");
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("daily") && element.hasCategory("1")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("daily") && element.hasCategory("5")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("daily") && element.hasCategory("9")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("daily") && element.hasCategory("15")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("daily") && element.hasCategory("19")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("daily") && element.hasCategory("25")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("daily") && element.hasCategory("29")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("utility") && element.hasCategory("2")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("utility") && element.hasCategory("6")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("utility") && element.hasCategory("10")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("utility") && element.hasCategory("16")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("utility") && element.hasCategory("22")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spiral Tower Action"] = new RulesElement({
    name: "Spiral Tower Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_686",
    source: "Player's Handbook",
    categories: ["Spiral Tower Action", "ID_FMP_CLASS_FEATURE_686", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Spiral Tower Action:You can spend an action point to regain one wizard encounter power you have already used, instead of taking an extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["staff"] = new RulesElement({
    name: "staff",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_STAFF",
    source: "Player's Handbook",
    categories: ["staff", "ID_INTERNAL_CLASS_FEATURE_STAFF", "Corellon's Implement"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Staff of Defense"] = new RulesElement({
    name: "Staff of Defense",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_770",
    source: "Player's Handbook",
    categories: ["Staff of Defense", "ID_FMP_CLASS_FEATURE_770", "ID_FMP_CLASS_FEATURE_444", "Arcane Implement Mastery", "1"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (false /* TBI: implement:staff */) {
          return 1;
        } else return 0;
       });
      model.grant(elements.id["ID_FMP_POWER_5595"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Star Pact"] = new RulesElement({
    name: "Star Pact",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_774",
    source: "Player's Handbook,Player's Handbook 3",
    categories: ["Star Pact", "ID_FMP_CLASS_FEATURE_774", "ID_FMP_CLASS_FEATURE_777", "Eldritch Pact", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_1457"]);
      model.grant(elements.id["ID_FMP_POWER_2263"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Steel Blitz"] = new RulesElement({
    name: "Steel Blitz",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_451",
    source: "Player's Handbook",
    categories: ["Steel Blitz", "ID_FMP_CLASS_FEATURE_451", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Steel Defense Action"] = new RulesElement({
    name: "Steel Defense Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_653",
    source: "Player's Handbook",
    categories: ["Steel Defense Action", "ID_FMP_CLASS_FEATURE_653", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Steel Defense Action:When you spend an action point to take an extra action, you also gain a +4 bonus to AC and Reflex defense until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Steel Grace"] = new RulesElement({
    name: "Steel Grace",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_450",
    source: "Player's Handbook",
    categories: ["Steel Grace", "ID_FMP_CLASS_FEATURE_450", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Storm Fury"] = new RulesElement({
    name: "Storm Fury",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_545",
    source: "Player's Handbook",
    categories: ["Storm Fury", "ID_FMP_CLASS_FEATURE_545", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Storm Spell"] = new RulesElement({
    name: "Storm Spell",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_546",
    source: "Player's Handbook",
    categories: ["Storm Spell", "ID_FMP_CLASS_FEATURE_546", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Stormstep Action"] = new RulesElement({
    name: "Stormstep Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_667",
    source: "Player's Handbook",
    categories: ["Stormstep Action", "ID_FMP_CLASS_FEATURE_667", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Stormstep Action:When you spend an action point to take an extra action, you can teleport 3 squares either before or after you use the extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Student of One-Handed Weapons"] = new RulesElement({
    name: "Student of One-Handed Weapons",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_STUDENT_OF_ONE-HANDED_WEAPONS",
    source: "Player's Handbook",
    categories: ["Student of One-Handed Weapons", "ID_INTERNAL_CLASS_FEATURE_STUDENT_OF_ONE-HANDED_WEAPONS", "Student of the Sword"]
  });
  byID[te.id] = te;
  
  te = class_feature["Student of Two-Handed Weapons"] = new RulesElement({
    name: "Student of Two-Handed Weapons",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_STUDENT_OF_TWO-HANDED_WEAPONS",
    source: "Player's Handbook",
    categories: ["Student of Two-Handed Weapons", "ID_INTERNAL_CLASS_FEATURE_STUDENT_OF_TWO-HANDED_WEAPONS", "Student of the Sword"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sustain Life Spark"] = new RulesElement({
    name: "Sustain Life Spark",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_515",
    source: "Player's Handbook",
    categories: ["Sustain Life Spark", "ID_FMP_CLASS_FEATURE_515", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sword Marshal's Action"] = new RulesElement({
    name: "Sword Marshal's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_671",
    source: "Player's Handbook",
    categories: ["Sword Marshal's Action", "ID_FMP_CLASS_FEATURE_671", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Sword Marshal's Action:You can spend an action point to regain one warlord encounter power you have already used, instead of taking an extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Tactical Presence"] = new RulesElement({
    name: "Tactical Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_783",
    source: "Player's Handbook",
    categories: ["Tactical Presence", "ID_FMP_CLASS_FEATURE_783", "ID_FMP_CLASS_FEATURE_316", "Commanding Presence", "1"],
    rules: function(model) {
      model.statadd("ALLY.Action Point", "Tactical Presence:When an ally you can see spends an action point to make an attack, the ally gains a bonus to the attack roll equal to one-half your Intelligence modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Terrifying Insight"] = new RulesElement({
    name: "Terrifying Insight",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_512",
    source: "Player's Handbook",
    categories: ["Terrifying Insight", "ID_FMP_CLASS_FEATURE_512", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Thunder"] = new RulesElement({
    name: "Thunder",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_THUNDER",
    source: "Player's Handbook",
    categories: ["Thunder", "ID_INTERNAL_CLASS_FEATURE_THUNDER", "Astral Vibrance"]
  });
  byID[te.id] = te;
  
  te = class_feature["Tough as Nails"] = new RulesElement({
    name: "Tough as Nails",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_489",
    source: "Player's Handbook",
    categories: ["Tough as Nails", "ID_FMP_CLASS_FEATURE_489", "11"],
    rules: function(model) {
      model.statadd("Healing Surges", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Trample the Fallen"] = new RulesElement({
    name: "Trample the Fallen",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_448",
    source: "Player's Handbook",
    categories: ["Trample the Fallen", "ID_FMP_CLASS_FEATURE_448", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Trickster's Control"] = new RulesElement({
    name: "Trickster's Control",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_687",
    source: "Player's Handbook",
    categories: ["Trickster's Control", "ID_FMP_CLASS_FEATURE_687", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Trickster's Disposition"] = new RulesElement({
    name: "Trickster's Disposition",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_688",
    source: "Player's Handbook",
    categories: ["Trickster's Disposition", "ID_FMP_CLASS_FEATURE_688", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Twin-Blade Storm"] = new RulesElement({
    name: "Twin-Blade Storm",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_500",
    source: "Player's Handbook",
    categories: ["Twin-Blade Storm", "ID_FMP_CLASS_FEATURE_500", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Two-Blade Fighting Style"] = new RulesElement({
    name: "Two-Blade Fighting Style",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_779",
    source: "Player's Handbook",
    categories: ["Two-Blade Fighting Style", "ID_FMP_CLASS_FEATURE_779", "ID_FMP_CLASS_FEATURE_321", "Fighting Style", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_INTERNAL_AMBIDEXTROUS"]);
      model.grant(elements.id["ID_FMP_FEAT_171"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Two-handed Weapon Talent"] = new RulesElement({
    name: "Two-handed Weapon Talent",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1063",
    source: "Player's Handbook",
    categories: ["Two-handed Weapon Talent", "ID_FMP_CLASS_FEATURE_1063", "ID_FMP_CLASS_FEATURE_1064", "Fighter Talents", "1"],
    rules: function(model) {
      model.statadd("two-hands:attack", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wand"] = new RulesElement({
    name: "Wand",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_WAND",
    source: "Player's Handbook",
    categories: ["Wand", "ID_INTERNAL_CLASS_FEATURE_WAND", "Corellon's Implement"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wand of Accuracy"] = new RulesElement({
    name: "Wand of Accuracy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_771",
    source: "Player's Handbook",
    categories: ["Wand of Accuracy", "ID_FMP_CLASS_FEATURE_771", "ID_FMP_CLASS_FEATURE_444", "Arcane Implement Mastery", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_5596"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Warlock's Curse"] = new RulesElement({
    name: "Warlock's Curse",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_605",
    source: "Player's Handbook",
    categories: ["Warlock's Curse", "ID_FMP_CLASS_FEATURE_605", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_5597"]);
      model.statadd("Warlock's Curse Dice", 1);
      model.statadd("Warlock's Curse Dice", 1);
      model.statadd("Warlock's Curse Dice", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Warpriest's Challenge"] = new RulesElement({
    name: "Warpriest's Challenge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_437",
    source: "Player's Handbook",
    categories: ["Warpriest's Challenge", "ID_FMP_CLASS_FEATURE_437", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Warpriest's Strategy"] = new RulesElement({
    name: "Warpriest's Strategy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_436",
    source: "Player's Handbook",
    categories: ["Warpriest's Strategy", "ID_FMP_CLASS_FEATURE_436", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Warpriest's Training"] = new RulesElement({
    name: "Warpriest's Training",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_516",
    source: "Player's Handbook",
    categories: ["Warpriest's Training", "ID_FMP_CLASS_FEATURE_516", "11"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['heavy'])) {
          return 1;
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Weapon Training"] = new RulesElement({
    name: "Weapon Training",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_440",
    source: "Player's Handbook",
    categories: ["Weapon Training", "ID_FMP_CLASS_FEATURE_440", "11"],
    rules: function(model) {
      model.select('Proficiency', 1, {
        filter: function(model, element) { return element.hasCategory("Heavy Blade"); }
      });
    }
  });
  byID[te.id] = te;
  
  
})(this);
