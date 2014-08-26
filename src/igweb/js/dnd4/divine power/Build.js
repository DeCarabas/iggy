define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Ardent Paladin"] = new engine.RulesElement({
    name: "Ardent Paladin",
    type: "Build",
    id: "ID_FMP_BUILD_78",
    source: "Divine Power",
    categories: ["Ardent Paladin", "ID_FMP_BUILD_78", "ID_FMP_CLASS_4", "Paladin"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_ARDENT_PALADIN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Commanding Avenger"] = new engine.RulesElement({
    name: "Commanding Avenger",
    type: "Build",
    id: "ID_FMP_BUILD_75",
    source: "Divine Power",
    categories: ["Commanding Avenger", "ID_FMP_BUILD_75", "ID_FMP_CLASS_129", "Avenger"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_COMMANDING_AVENGER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Malediction Invoker"] = new engine.RulesElement({
    name: "Malediction Invoker",
    type: "Build",
    id: "ID_FMP_BUILD_77",
    source: "Divine Power",
    categories: ["Malediction Invoker", "ID_FMP_BUILD_77", "ID_FMP_CLASS_127", "Invoker"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_MALEDICTION_INVOKER"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Shielding Cleric"] = new engine.RulesElement({
    name: "Shielding Cleric",
    type: "Build",
    id: "ID_FMP_BUILD_82",
    source: "Divine Power",
    categories: ["Shielding Cleric", "ID_FMP_BUILD_82", "ID_FMP_CLASS_2", "Cleric"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_SHIELDING_CLERIC"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Virtuous Paladin"] = new engine.RulesElement({
    name: "Virtuous Paladin",
    type: "Build",
    id: "ID_FMP_BUILD_79",
    source: "Divine Power",
    categories: ["Virtuous Paladin", "ID_FMP_BUILD_79", "ID_FMP_CLASS_4", "Paladin"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_VIRTUOUS_PALADIN"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
