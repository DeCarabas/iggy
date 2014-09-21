define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Archer Ranger"] = new engine.RulesElement({
    name: "Archer Ranger",
    type: "Build",
    id: "ID_FMP_BUILD_18",
    source: "Player's Handbook",
    specifics: {
        'Key Abilities': "Dex, Wis, Con"
      },
    categories: ["Archer Ranger", "ID_FMP_BUILD_18", "ID_FMP_CLASS_5", "Ranger"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_ARCHER_RANGER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Avenging Paladin"] = new engine.RulesElement({
    name: "Avenging Paladin",
    type: "Build",
    id: "ID_FMP_BUILD_11",
    source: "Player's Handbook",
    specifics: {
        'Key Abilities': "Str, Wis, Cha"
      },
    categories: ["Avenging Paladin", "ID_FMP_BUILD_11", "ID_FMP_CLASS_4", "Paladin"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_AVENGING_PALADIN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Battle Cleric"] = new engine.RulesElement({
    name: "Battle Cleric",
    type: "Build",
    id: "ID_FMP_BUILD_6",
    source: "Player's Handbook",
    specifics: {
        'Key Abilities': "Str, Wis, Cha"
      },
    categories: ["Battle Cleric", "ID_FMP_BUILD_6", "ID_FMP_CLASS_2", "Cleric"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_BATTLE_CLERIC"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Brawny Rogue"] = new engine.RulesElement({
    name: "Brawny Rogue",
    type: "Build",
    id: "ID_FMP_BUILD_17",
    source: "Player's Handbook",
    specifics: {
        'Key Abilities': "Dex, Str, Con"
      },
    categories: ["Brawny Rogue", "ID_FMP_BUILD_17", "ID_FMP_CLASS_6", "Rogue"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_BRAWNY_ROGUE"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Control Wizard"] = new engine.RulesElement({
    name: "Control Wizard",
    type: "Build",
    id: "ID_FMP_BUILD_8",
    source: "Player's Handbook",
    specifics: {
        'Key Abilities': "Int, Wis, Con"
      },
    categories: ["Control Wizard", "ID_FMP_BUILD_8", "ID_FMP_CLASS_9", "Wizard"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_CONTROL_WIZARD"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Deceptive Warlock"] = new engine.RulesElement({
    name: "Deceptive Warlock",
    type: "Build",
    id: "ID_FMP_BUILD_14",
    source: "Player's Handbook",
    specifics: {
        'Key Abilities': "Cha, Int, Con"
      },
    categories: ["Deceptive Warlock", "ID_FMP_BUILD_14", "ID_FMP_CLASS_7", "Warlock"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_DECEPTIVE_WARLOCK"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Devoted Cleric"] = new engine.RulesElement({
    name: "Devoted Cleric",
    type: "Build",
    id: "ID_FMP_BUILD_7",
    source: "Player's Handbook",
    specifics: {
        'Key Abilities': "Wis, Cha, Dex"
      },
    categories: ["Devoted Cleric", "ID_FMP_BUILD_7", "ID_FMP_CLASS_2", "Cleric"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_DEVOTED_CLERIC"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Great Weapon Fighter"] = new engine.RulesElement({
    name: "Great Weapon Fighter",
    type: "Build",
    id: "ID_FMP_BUILD_1",
    source: "Player's Handbook",
    specifics: {
        'Key Abilities': "Str, Con, Wis"
      },
    categories: ["Great Weapon Fighter", "ID_FMP_BUILD_1", "ID_FMP_CLASS_3", "Fighter"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_GREAT_WEAPON_FIGHTER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Guardian Fighter"] = new engine.RulesElement({
    name: "Guardian Fighter",
    type: "Build",
    id: "ID_FMP_BUILD_4",
    source: "Player's Handbook",
    specifics: {
        'Key Abilities': "Str, Wis, Con"
      },
    categories: ["Guardian Fighter", "ID_FMP_BUILD_4", "ID_FMP_CLASS_3", "Fighter"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_GUARDIAN_FIGHTER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Inspiring Warlord"] = new engine.RulesElement({
    name: "Inspiring Warlord",
    type: "Build",
    id: "ID_FMP_BUILD_12",
    source: "Player's Handbook",
    specifics: {
        'Key Abilities': "Str, Cha, Con"
      },
    categories: ["Inspiring Warlord", "ID_FMP_BUILD_12", "ID_FMP_CLASS_8", "Warlord"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_INSPIRING_WARLORD"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Protecting Paladin"] = new engine.RulesElement({
    name: "Protecting Paladin",
    type: "Build",
    id: "ID_FMP_BUILD_10",
    source: "Player's Handbook",
    specifics: {
        'Key Abilities': "Cha, Wis, Con"
      },
    categories: ["Protecting Paladin", "ID_FMP_BUILD_10", "ID_FMP_CLASS_4", "Paladin"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_PROTECTING_PALADIN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Scourge Warlock"] = new engine.RulesElement({
    name: "Scourge Warlock",
    type: "Build",
    id: "ID_FMP_BUILD_15",
    source: "Player's Handbook",
    specifics: {
        'Key Abilities': "Con, Int, Cha"
      },
    categories: ["Scourge Warlock", "ID_FMP_BUILD_15", "ID_FMP_CLASS_7", "Warlock"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_SCOURGE_WARLOCK"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Tactical Warlord"] = new engine.RulesElement({
    name: "Tactical Warlord",
    type: "Build",
    id: "ID_FMP_BUILD_13",
    source: "Player's Handbook",
    specifics: {
        'Key Abilities': "Str, Int, Cha"
      },
    categories: ["Tactical Warlord", "ID_FMP_BUILD_13", "ID_FMP_CLASS_8", "Warlord"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_TACTICAL_WARLORD"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Trickster Rogue"] = new engine.RulesElement({
    name: "Trickster Rogue",
    type: "Build",
    id: "ID_FMP_BUILD_16",
    source: "Player's Handbook",
    specifics: {
        'Key Abilities': "Dex, Cha, Con"
      },
    categories: ["Trickster Rogue", "ID_FMP_BUILD_16", "ID_FMP_CLASS_6", "Rogue"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_TRICKSTER_ROGUE"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Two-Blade Ranger"] = new engine.RulesElement({
    name: "Two-Blade Ranger",
    type: "Build",
    id: "ID_FMP_BUILD_19",
    source: "Player's Handbook",
    specifics: {
        'Key Abilities': "Str, Dex, Wis"
      },
    categories: ["Two-Blade Ranger", "ID_FMP_BUILD_19", "ID_FMP_CLASS_5", "Ranger"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_TWO-BLADE_RANGER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["War Wizard"] = new engine.RulesElement({
    name: "War Wizard",
    type: "Build",
    id: "ID_FMP_BUILD_9",
    source: "Player's Handbook",
    specifics: {
        'Key Abilities': "Int, Dex, Con"
      },
    categories: ["War Wizard", "ID_FMP_BUILD_9", "ID_FMP_CLASS_9", "Wizard"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_WAR_WIZARD"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
