(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Aerialist Rogue"] = new RulesElement({
    name: "Aerialist Rogue",
    type: "Build",
    id: "ID_FMP_BUILD_57",
    source: "Martial Power",
    categories: ["Aerialist Rogue", "ID_FMP_BUILD_57", "ID_FMP_CLASS_6", "Rogue"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_AERIALIST_ROGUE"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Battlerager Fighter"] = new RulesElement({
    name: "Battlerager Fighter",
    type: "Build",
    id: "ID_FMP_BUILD_54",
    source: "Martial Power",
    categories: ["Battlerager Fighter", "ID_FMP_BUILD_54", "ID_FMP_CLASS_3", "Fighter"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_BATTLERAGER_FIGHTER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Beastmaster Ranger"] = new RulesElement({
    name: "Beastmaster Ranger",
    type: "Build",
    id: "ID_FMP_BUILD_56",
    source: "Martial Power",
    categories: ["Beastmaster Ranger", "ID_FMP_BUILD_56", "ID_FMP_CLASS_5", "Ranger"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_BEASTMASTER_RANGER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Bravura Warlord"] = new RulesElement({
    name: "Bravura Warlord",
    type: "Build",
    id: "ID_FMP_BUILD_32",
    source: "Martial Power",
    categories: ["Bravura Warlord", "ID_FMP_BUILD_32", "ID_FMP_CLASS_8", "Warlord"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_BRAVURA_WARLORD"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Cutthroat Rogue"] = new RulesElement({
    name: "Cutthroat Rogue",
    type: "Build",
    id: "ID_FMP_BUILD_58",
    source: "Martial Power",
    categories: ["Cutthroat Rogue", "ID_FMP_BUILD_58", "ID_FMP_CLASS_6", "Rogue"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_CUTTHROAT_ROGUE"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Resourceful Warlord"] = new RulesElement({
    name: "Resourceful Warlord",
    type: "Build",
    id: "ID_FMP_BUILD_30",
    source: "Martial Power",
    categories: ["Resourceful Warlord", "ID_FMP_BUILD_30", "ID_FMP_CLASS_8", "Warlord"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_RESOURCEFUL_WARLORD"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Tempest Fighter"] = new RulesElement({
    name: "Tempest Fighter",
    type: "Build",
    id: "ID_FMP_BUILD_55",
    source: "Martial Power",
    categories: ["Tempest Fighter", "ID_FMP_BUILD_55", "ID_FMP_CLASS_3", "Fighter"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_TEMPEST_FIGHTER"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);