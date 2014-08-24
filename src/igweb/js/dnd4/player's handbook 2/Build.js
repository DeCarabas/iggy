(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Bear Shaman"] = new RulesElement({
    name: "Bear Shaman",
    type: "Build",
    id: "ID_FMP_BUILD_51",
    source: "Player's Handbook 2",
    categories: ["Bear Shaman", "ID_FMP_BUILD_51", "ID_FMP_CLASS_147", "Shaman"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_BEAR_SHAMAN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Chaos Sorcerer"] = new RulesElement({
    name: "Chaos Sorcerer",
    type: "Build",
    id: "ID_FMP_BUILD_46",
    source: "Player's Handbook 2",
    categories: ["Chaos Sorcerer", "ID_FMP_BUILD_46", "ID_FMP_CLASS_128", "Sorcerer"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_CHAOS_SORCERER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Cunning Bard"] = new RulesElement({
    name: "Cunning Bard",
    type: "Build",
    id: "ID_FMP_BUILD_28",
    source: "Player's Handbook 2",
    categories: ["Cunning Bard", "ID_FMP_BUILD_28", "ID_FMP_CLASS_104", "Bard"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_CUNNING_BARD"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Dragon Sorcerer"] = new RulesElement({
    name: "Dragon Sorcerer",
    type: "Build",
    id: "ID_FMP_BUILD_47",
    source: "Player's Handbook 2",
    categories: ["Dragon Sorcerer", "ID_FMP_BUILD_47", "ID_FMP_CLASS_128", "Sorcerer"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_DRAGON_SORCERER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Earth Warden"] = new RulesElement({
    name: "Earth Warden",
    type: "Build",
    id: "ID_FMP_BUILD_62",
    source: "Player's Handbook 2",
    categories: ["Earth Warden", "ID_FMP_BUILD_62", "ID_FMP_CLASS_134", "Warden"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_EARTH_WARDEN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Guardian Druid"] = new RulesElement({
    name: "Guardian Druid",
    type: "Build",
    id: "ID_FMP_BUILD_39",
    source: "Player's Handbook 2",
    categories: ["Guardian Druid", "ID_FMP_BUILD_39", "ID_FMP_CLASS_126", "Druid"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_GUARDIAN_DRUID"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Isolating Avenger"] = new RulesElement({
    name: "Isolating Avenger",
    type: "Build",
    id: "ID_FMP_BUILD_44",
    source: "Player's Handbook 2",
    categories: ["Isolating Avenger", "ID_FMP_BUILD_44", "ID_FMP_CLASS_129", "Avenger"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_ISOLATING_AVENGER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Panther Shaman"] = new RulesElement({
    name: "Panther Shaman",
    type: "Build",
    id: "ID_FMP_BUILD_52",
    source: "Player's Handbook 2",
    categories: ["Panther Shaman", "ID_FMP_BUILD_52", "ID_FMP_CLASS_147", "Shaman"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_PANTHER_SHAMAN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Predator Druid"] = new RulesElement({
    name: "Predator Druid",
    type: "Build",
    id: "ID_FMP_BUILD_38",
    source: "Player's Handbook 2",
    categories: ["Predator Druid", "ID_FMP_BUILD_38", "ID_FMP_CLASS_126", "Druid"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_PREDATOR_DRUID"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Preserving Invoker"] = new RulesElement({
    name: "Preserving Invoker",
    type: "Build",
    id: "ID_FMP_BUILD_41",
    source: "Player's Handbook 2",
    categories: ["Preserving Invoker", "ID_FMP_BUILD_41", "ID_FMP_CLASS_127", "Invoker"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_PRESERVING_INVOKER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Pursuing Avenger"] = new RulesElement({
    name: "Pursuing Avenger",
    type: "Build",
    id: "ID_FMP_BUILD_45",
    source: "Player's Handbook 2",
    categories: ["Pursuing Avenger", "ID_FMP_BUILD_45", "ID_FMP_CLASS_129", "Avenger"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_PURSUING_AVENGER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Rageblood Barbarian"] = new RulesElement({
    name: "Rageblood Barbarian",
    type: "Build",
    id: "ID_FMP_BUILD_61",
    source: "Player's Handbook 2",
    categories: ["Rageblood Barbarian", "ID_FMP_BUILD_61", "ID_FMP_CLASS_148", "Barbarian"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_RAGEBLOOD_BARBARIAN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Thaneborn Barbarian"] = new RulesElement({
    name: "Thaneborn Barbarian",
    type: "Build",
    id: "ID_FMP_BUILD_65",
    source: "Player's Handbook 2",
    categories: ["Thaneborn Barbarian", "ID_FMP_BUILD_65", "ID_FMP_CLASS_148", "Barbarian"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_THANEBORN_BARBARIAN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Valorous Bard"] = new RulesElement({
    name: "Valorous Bard",
    type: "Build",
    id: "ID_FMP_BUILD_27",
    source: "Player's Handbook 2",
    categories: ["Valorous Bard", "ID_FMP_BUILD_27", "ID_FMP_CLASS_104", "Bard"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_VALOROUS_BARD"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Wild Warden"] = new RulesElement({
    name: "Wild Warden",
    type: "Build",
    id: "ID_FMP_BUILD_63",
    source: "Player's Handbook 2",
    categories: ["Wild Warden", "ID_FMP_BUILD_63", "ID_FMP_CLASS_134", "Warden"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_WILD_WARDEN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Wrathful Invoker"] = new RulesElement({
    name: "Wrathful Invoker",
    type: "Build",
    id: "ID_FMP_BUILD_42",
    source: "Player's Handbook 2",
    categories: ["Wrathful Invoker", "ID_FMP_BUILD_42", "ID_FMP_CLASS_127", "Invoker"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_WRATHFUL_INVOKER"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);