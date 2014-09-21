define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Aerialist Rogue"] = new engine.RulesElement({
    name: "Aerialist Rogue",
    type: "Build",
    id: "ID_FMP_BUILD_57",
    source: "Martial Power",
    specifics: {
        'Key Abilities': "Dex, Cha, Str"
      },
    categories: ["Aerialist Rogue", "ID_FMP_BUILD_57", "ID_FMP_CLASS_6", "Rogue"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_AERIALIST_ROGUE"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Battlerager Fighter"] = new engine.RulesElement({
    name: "Battlerager Fighter",
    type: "Build",
    id: "ID_FMP_BUILD_54",
    source: "Martial Power",
    specifics: {
        'Key Abilities': "Str, Con, Wis"
      },
    categories: ["Battlerager Fighter", "ID_FMP_BUILD_54", "ID_FMP_CLASS_3", "Fighter"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_BATTLERAGER_FIGHTER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Beastmaster Ranger"] = new engine.RulesElement({
    name: "Beastmaster Ranger",
    type: "Build",
    id: "ID_FMP_BUILD_56",
    source: "Martial Power",
    specifics: {
        'Key Abilities': "Str, Dex, Wis"
      },
    categories: ["Beastmaster Ranger", "ID_FMP_BUILD_56", "ID_FMP_CLASS_5", "Ranger"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_BEASTMASTER_RANGER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Bravura Warlord"] = new engine.RulesElement({
    name: "Bravura Warlord",
    type: "Build",
    id: "ID_FMP_BUILD_32",
    source: "Martial Power",
    specifics: {
        'Key Abilities': "Str, Cha, Con"
      },
    categories: ["Bravura Warlord", "ID_FMP_BUILD_32", "ID_FMP_CLASS_8", "Warlord"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_BRAVURA_WARLORD"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Cutthroat Rogue"] = new engine.RulesElement({
    name: "Cutthroat Rogue",
    type: "Build",
    id: "ID_FMP_BUILD_58",
    source: "Martial Power",
    specifics: {
        'Key Abilities': "Dex, Str, Cha"
      },
    categories: ["Cutthroat Rogue", "ID_FMP_BUILD_58", "ID_FMP_CLASS_6", "Rogue"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_CUTTHROAT_ROGUE"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Resourceful Warlord"] = new engine.RulesElement({
    name: "Resourceful Warlord",
    type: "Build",
    id: "ID_FMP_BUILD_30",
    source: "Martial Power",
    specifics: {
        'Key Abilities': "Str, Int, Cha"
      },
    categories: ["Resourceful Warlord", "ID_FMP_BUILD_30", "ID_FMP_CLASS_8", "Warlord"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_RESOURCEFUL_WARLORD"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Tempest Fighter"] = new engine.RulesElement({
    name: "Tempest Fighter",
    type: "Build",
    id: "ID_FMP_BUILD_55",
    source: "Martial Power",
    specifics: {
        'Key Abilities': "Str, Dex, Wis"
      },
    categories: ["Tempest Fighter", "ID_FMP_BUILD_55", "ID_FMP_CLASS_3", "Fighter"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_TEMPEST_FIGHTER"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
