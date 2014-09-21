define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Bear Shaman"] = new engine.RulesElement({
    name: "Bear Shaman",
    type: "Build",
    id: "ID_FMP_BUILD_51",
    source: "Player's Handbook 2",
    specifics: {
        'Key Abilities': "Wis, Con, Int"
      },
    categories: ["Bear Shaman", "ID_FMP_BUILD_51", "ID_FMP_CLASS_147", "Shaman"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_BEAR_SHAMAN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Chaos Sorcerer"] = new engine.RulesElement({
    name: "Chaos Sorcerer",
    type: "Build",
    id: "ID_FMP_BUILD_46",
    source: "Player's Handbook 2",
    specifics: {
        'Key Abilities': "Cha, Dex, Con"
      },
    categories: ["Chaos Sorcerer", "ID_FMP_BUILD_46", "ID_FMP_CLASS_128", "Sorcerer"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_CHAOS_SORCERER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Cunning Bard"] = new engine.RulesElement({
    name: "Cunning Bard",
    type: "Build",
    id: "ID_FMP_BUILD_28",
    source: "Player's Handbook 2",
    specifics: {
        'Key Abilities': "Cha, Int, Con"
      },
    categories: ["Cunning Bard", "ID_FMP_BUILD_28", "ID_FMP_CLASS_104", "Bard"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_CUNNING_BARD"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Dragon Sorcerer"] = new engine.RulesElement({
    name: "Dragon Sorcerer",
    type: "Build",
    id: "ID_FMP_BUILD_47",
    source: "Player's Handbook 2",
    specifics: {
        'Key Abilities': "Cha, Str, Dex"
      },
    categories: ["Dragon Sorcerer", "ID_FMP_BUILD_47", "ID_FMP_CLASS_128", "Sorcerer"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_DRAGON_SORCERER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Earth Warden"] = new engine.RulesElement({
    name: "Earth Warden",
    type: "Build",
    id: "ID_FMP_BUILD_62",
    source: "Player's Handbook 2",
    specifics: {
        'Key Abilities': "Str, Con, Wis"
      },
    categories: ["Earth Warden", "ID_FMP_BUILD_62", "ID_FMP_CLASS_134", "Warden"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_EARTH_WARDEN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Guardian Druid"] = new engine.RulesElement({
    name: "Guardian Druid",
    type: "Build",
    id: "ID_FMP_BUILD_39",
    source: "Player's Handbook 2",
    specifics: {
        'Key Abilities': "Wis, Con, Dex"
      },
    categories: ["Guardian Druid", "ID_FMP_BUILD_39", "ID_FMP_CLASS_126", "Druid"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_GUARDIAN_DRUID"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Isolating Avenger"] = new engine.RulesElement({
    name: "Isolating Avenger",
    type: "Build",
    id: "ID_FMP_BUILD_44",
    source: "Player's Handbook 2",
    specifics: {
        'Key Abilities': "Wis, Int, Con"
      },
    categories: ["Isolating Avenger", "ID_FMP_BUILD_44", "ID_FMP_CLASS_129", "Avenger"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_ISOLATING_AVENGER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Panther Shaman"] = new engine.RulesElement({
    name: "Panther Shaman",
    type: "Build",
    id: "ID_FMP_BUILD_52",
    source: "Player's Handbook 2",
    specifics: {
        'Key Abilities': "Wis, Int, Con"
      },
    categories: ["Panther Shaman", "ID_FMP_BUILD_52", "ID_FMP_CLASS_147", "Shaman"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_PANTHER_SHAMAN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Predator Druid"] = new engine.RulesElement({
    name: "Predator Druid",
    type: "Build",
    id: "ID_FMP_BUILD_38",
    source: "Player's Handbook 2",
    specifics: {
        'Key Abilities': "Wis, Dex, Con"
      },
    categories: ["Predator Druid", "ID_FMP_BUILD_38", "ID_FMP_CLASS_126", "Druid"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_PREDATOR_DRUID"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Preserving Invoker"] = new engine.RulesElement({
    name: "Preserving Invoker",
    type: "Build",
    id: "ID_FMP_BUILD_41",
    source: "Player's Handbook 2",
    specifics: {
        'Key Abilities': "Wis, Int, Con"
      },
    categories: ["Preserving Invoker", "ID_FMP_BUILD_41", "ID_FMP_CLASS_127", "Invoker"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_PRESERVING_INVOKER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Pursuing Avenger"] = new engine.RulesElement({
    name: "Pursuing Avenger",
    type: "Build",
    id: "ID_FMP_BUILD_45",
    source: "Player's Handbook 2",
    specifics: {
        'Key Abilities': "Wis, Dex, Con"
      },
    categories: ["Pursuing Avenger", "ID_FMP_BUILD_45", "ID_FMP_CLASS_129", "Avenger"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_PURSUING_AVENGER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Rageblood Barbarian"] = new engine.RulesElement({
    name: "Rageblood Barbarian",
    type: "Build",
    id: "ID_FMP_BUILD_61",
    source: "Player's Handbook 2",
    specifics: {
        'Key Abilities': "Str, Con, Cha"
      },
    categories: ["Rageblood Barbarian", "ID_FMP_BUILD_61", "ID_FMP_CLASS_148", "Barbarian"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_RAGEBLOOD_BARBARIAN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Thaneborn Barbarian"] = new engine.RulesElement({
    name: "Thaneborn Barbarian",
    type: "Build",
    id: "ID_FMP_BUILD_65",
    source: "Player's Handbook 2",
    specifics: {
        'Key Abilities': "Str, Cha, Dex"
      },
    categories: ["Thaneborn Barbarian", "ID_FMP_BUILD_65", "ID_FMP_CLASS_148", "Barbarian"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_THANEBORN_BARBARIAN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Valorous Bard"] = new engine.RulesElement({
    name: "Valorous Bard",
    type: "Build",
    id: "ID_FMP_BUILD_27",
    source: "Player's Handbook 2",
    specifics: {
        'Key Abilities': "Cha, Con, Int"
      },
    categories: ["Valorous Bard", "ID_FMP_BUILD_27", "ID_FMP_CLASS_104", "Bard"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_VALOROUS_BARD"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Wild Warden"] = new engine.RulesElement({
    name: "Wild Warden",
    type: "Build",
    id: "ID_FMP_BUILD_63",
    source: "Player's Handbook 2",
    specifics: {
        'Key Abilities': "Str, Wis, Con"
      },
    categories: ["Wild Warden", "ID_FMP_BUILD_63", "ID_FMP_CLASS_134", "Warden"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_WILD_WARDEN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Wrathful Invoker"] = new engine.RulesElement({
    name: "Wrathful Invoker",
    type: "Build",
    id: "ID_FMP_BUILD_42",
    source: "Player's Handbook 2",
    specifics: {
        'Key Abilities': "Wis, Con, Int"
      },
    categories: ["Wrathful Invoker", "ID_FMP_BUILD_42", "ID_FMP_CLASS_127", "Invoker"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_WRATHFUL_INVOKER"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
