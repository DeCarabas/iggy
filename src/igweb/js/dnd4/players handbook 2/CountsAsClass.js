define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var CountsAsClass = types['CountsAsClass'] || (types['CountsAsClass'] = {});
  te = CountsAsClass["Avenger"] = new engine.RulesElement({
    name: "Avenger",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_AVENGER",
    source: "Player's Handbook 2",
    categories: ["Avenger", "ID_INTERNAL_COUNTSASCLASS_AVENGER"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Barbarian"] = new engine.RulesElement({
    name: "Barbarian",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_BARBARIAN",
    source: "Player's Handbook 2",
    categories: ["Barbarian", "ID_INTERNAL_COUNTSASCLASS_BARBARIAN"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Bard"] = new engine.RulesElement({
    name: "Bard",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_BARD",
    source: "Player's Handbook 2",
    categories: ["Bard", "ID_INTERNAL_COUNTSASCLASS_BARD"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Druid"] = new engine.RulesElement({
    name: "Druid",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_DRUID",
    source: "Player's Handbook 2",
    categories: ["Druid", "ID_INTERNAL_COUNTSASCLASS_DRUID"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Invoker"] = new engine.RulesElement({
    name: "Invoker",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_INVOKER",
    source: "Player's Handbook 2",
    categories: ["Invoker", "ID_INTERNAL_COUNTSASCLASS_INVOKER"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Shaman"] = new engine.RulesElement({
    name: "Shaman",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_SHAMAN",
    source: "Player's Handbook 2",
    categories: ["Shaman", "ID_INTERNAL_COUNTSASCLASS_SHAMAN"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Sorcerer"] = new engine.RulesElement({
    name: "Sorcerer",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_SORCERER",
    source: "Player's Handbook 2",
    categories: ["Sorcerer", "ID_INTERNAL_COUNTSASCLASS_SORCERER"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Warden"] = new engine.RulesElement({
    name: "Warden",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_WARDEN",
    source: "Player's Handbook 2",
    categories: ["Warden", "ID_INTERNAL_COUNTSASCLASS_WARDEN"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
