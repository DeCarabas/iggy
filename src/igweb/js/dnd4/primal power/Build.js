define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Eagle Shaman"] = new engine.RulesElement({
    name: "Eagle Shaman",
    type: "Build",
    id: "ID_FMP_BUILD_92",
    source: "Primal Power",
    specifics: {
        'Key Abilities': "Wisdom, Dexterity, Constitution"
      },
    categories: ["Eagle Shaman", "ID_FMP_BUILD_92", "ID_FMP_CLASS_147", "Shaman"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_EAGLE_SHAMAN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Life Warden"] = new engine.RulesElement({
    name: "Life Warden",
    type: "Build",
    id: "ID_FMP_BUILD_94",
    source: "Primal Power",
    specifics: {
        'Key Abilities': "Wisdom"
      },
    categories: ["Life Warden", "ID_FMP_BUILD_94", "ID_FMP_CLASS_134", "Warden"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_LIFE_WARDEN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Storm Warden"] = new engine.RulesElement({
    name: "Storm Warden",
    type: "Build",
    id: "ID_FMP_BUILD_95",
    source: "Primal Power",
    specifics: {
        'Key Abilities': "Strength, Constitution"
      },
    categories: ["Storm Warden", "ID_FMP_BUILD_95", "ID_FMP_CLASS_134", "Warden"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_STORM_WARDEN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Swarm Druid"] = new engine.RulesElement({
    name: "Swarm Druid",
    type: "Build",
    id: "ID_FMP_BUILD_90",
    source: "Primal Power",
    specifics: {
        'Key Abilities': "Wisdom, Constitution"
      },
    categories: ["Swarm Druid", "ID_FMP_BUILD_90", "ID_FMP_CLASS_126", "Druid"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_SWARM_DRUID"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Thunderborn Barbarian"] = new engine.RulesElement({
    name: "Thunderborn Barbarian",
    type: "Build",
    id: "ID_FMP_BUILD_87",
    source: "Primal Power",
    specifics: {
        'Key Abilities': "Strength, Constitution"
      },
    categories: ["Thunderborn Barbarian", "ID_FMP_BUILD_87", "ID_FMP_CLASS_148", "Barbarian"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_THUNDERBORN_BARBARIAN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Whirling Barbarian"] = new engine.RulesElement({
    name: "Whirling Barbarian",
    type: "Build",
    id: "ID_FMP_BUILD_89",
    source: "Primal Power",
    specifics: {
        'Key Abilities': "Strength, Dexterity"
      },
    categories: ["Whirling Barbarian", "ID_FMP_BUILD_89", "ID_FMP_CLASS_148", "Barbarian"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_WHIRLING_BARBARIAN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["World Speaker Shaman"] = new engine.RulesElement({
    name: "World Speaker Shaman",
    type: "Build",
    id: "ID_FMP_BUILD_93",
    source: "Primal Power",
    specifics: {
        'Key Abilities': "Wisdom, Constitution, Intelligence, Dexterity"
      },
    categories: ["World Speaker Shaman", "ID_FMP_BUILD_93", "ID_FMP_CLASS_147", "Shaman"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_WORLD_SPEAKER_SHAMAN"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
