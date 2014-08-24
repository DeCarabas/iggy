(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Eagle Shaman"] = new RulesElement({
    name: "Eagle Shaman",
    type: "Build",
    id: "ID_FMP_BUILD_92",
    source: "Primal Power",
    categories: ["Eagle Shaman", "ID_FMP_BUILD_92", "ID_FMP_CLASS_147", "Shaman"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_EAGLE_SHAMAN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Life Warden"] = new RulesElement({
    name: "Life Warden",
    type: "Build",
    id: "ID_FMP_BUILD_94",
    source: "Primal Power",
    categories: ["Life Warden", "ID_FMP_BUILD_94", "ID_FMP_CLASS_134", "Warden"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_LIFE_WARDEN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Storm Warden"] = new RulesElement({
    name: "Storm Warden",
    type: "Build",
    id: "ID_FMP_BUILD_95",
    source: "Primal Power",
    categories: ["Storm Warden", "ID_FMP_BUILD_95", "ID_FMP_CLASS_134", "Warden"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_STORM_WARDEN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Swarm Druid"] = new RulesElement({
    name: "Swarm Druid",
    type: "Build",
    id: "ID_FMP_BUILD_90",
    source: "Primal Power",
    categories: ["Swarm Druid", "ID_FMP_BUILD_90", "ID_FMP_CLASS_126", "Druid"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_SWARM_DRUID"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Thunderborn Barbarian"] = new RulesElement({
    name: "Thunderborn Barbarian",
    type: "Build",
    id: "ID_FMP_BUILD_87",
    source: "Primal Power",
    categories: ["Thunderborn Barbarian", "ID_FMP_BUILD_87", "ID_FMP_CLASS_148", "Barbarian"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_THUNDERBORN_BARBARIAN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Whirling Barbarian"] = new RulesElement({
    name: "Whirling Barbarian",
    type: "Build",
    id: "ID_FMP_BUILD_89",
    source: "Primal Power",
    categories: ["Whirling Barbarian", "ID_FMP_BUILD_89", "ID_FMP_CLASS_148", "Barbarian"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_WHIRLING_BARBARIAN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["World Speaker Shaman"] = new RulesElement({
    name: "World Speaker Shaman",
    type: "Build",
    id: "ID_FMP_BUILD_93",
    source: "Primal Power",
    categories: ["World Speaker Shaman", "ID_FMP_BUILD_93", "ID_FMP_CLASS_147", "Shaman"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_WORLD_SPEAKER_SHAMAN"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
