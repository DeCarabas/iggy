(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Brawling Fighter"] = new RulesElement({
    name: "Brawling Fighter",
    type: "Build",
    id: "ID_FMP_BUILD_100",
    source: "Martial Power 2",
    categories: ["Brawling Fighter", "ID_FMP_BUILD_100", "ID_FMP_CLASS_3", "Fighter"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_BRAWLING_FIGHTER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Hunter Ranger"] = new RulesElement({
    name: "Hunter Ranger",
    type: "Build",
    id: "ID_FMP_BUILD_101",
    source: "Martial Power 2",
    categories: ["Hunter Ranger", "ID_FMP_BUILD_101", "ID_FMP_CLASS_5", "Ranger"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_HUNTER_RANGER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Insightful Warlord"] = new RulesElement({
    name: "Insightful Warlord",
    type: "Build",
    id: "ID_FMP_BUILD_104",
    source: "Martial Power 2",
    categories: ["Insightful Warlord", "ID_FMP_BUILD_104", "ID_FMP_CLASS_8", "Warlord"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_INSIGHTFUL_WARLORD"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Marauder Ranger"] = new RulesElement({
    name: "Marauder Ranger",
    type: "Build",
    id: "ID_FMP_BUILD_102",
    source: "Martial Power 2",
    categories: ["Marauder Ranger", "ID_FMP_BUILD_102", "ID_FMP_CLASS_5", "Ranger"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_MARAUDER_RANGER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Shadowy Rogue"] = new RulesElement({
    name: "Shadowy Rogue",
    type: "Build",
    id: "ID_FMP_BUILD_103",
    source: "Martial Power 2",
    categories: ["Shadowy Rogue", "ID_FMP_BUILD_103", "ID_FMP_CLASS_6", "Rogue"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_SHADOWY_ROGUE"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Skirmishing Warlord"] = new RulesElement({
    name: "Skirmishing Warlord",
    type: "Build",
    id: "ID_FMP_BUILD_105",
    source: "Martial Power 2",
    categories: ["Skirmishing Warlord", "ID_FMP_BUILD_105", "ID_FMP_CLASS_8", "Warlord"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_SKIRMISHING_WARLORD"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
