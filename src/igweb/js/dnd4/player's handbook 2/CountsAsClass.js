(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var CountsAsClass = types['CountsAsClass'] || (types['CountsAsClass'] = {});
  te = CountsAsClass["Avenger"] = new RulesElement({
    name: "Avenger",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_AVENGER",
    source: "Player's Handbook 2",
    categories: ["Avenger", "ID_INTERNAL_COUNTSASCLASS_AVENGER"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Barbarian"] = new RulesElement({
    name: "Barbarian",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_BARBARIAN",
    source: "Player's Handbook 2",
    categories: ["Barbarian", "ID_INTERNAL_COUNTSASCLASS_BARBARIAN"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Bard"] = new RulesElement({
    name: "Bard",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_BARD",
    source: "Player's Handbook 2",
    categories: ["Bard", "ID_INTERNAL_COUNTSASCLASS_BARD"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Druid"] = new RulesElement({
    name: "Druid",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_DRUID",
    source: "Player's Handbook 2",
    categories: ["Druid", "ID_INTERNAL_COUNTSASCLASS_DRUID"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Invoker"] = new RulesElement({
    name: "Invoker",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_INVOKER",
    source: "Player's Handbook 2",
    categories: ["Invoker", "ID_INTERNAL_COUNTSASCLASS_INVOKER"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Shaman"] = new RulesElement({
    name: "Shaman",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_SHAMAN",
    source: "Player's Handbook 2",
    categories: ["Shaman", "ID_INTERNAL_COUNTSASCLASS_SHAMAN"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Sorcerer"] = new RulesElement({
    name: "Sorcerer",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_SORCERER",
    source: "Player's Handbook 2",
    categories: ["Sorcerer", "ID_INTERNAL_COUNTSASCLASS_SORCERER"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Warden"] = new RulesElement({
    name: "Warden",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_WARDEN",
    source: "Player's Handbook 2",
    categories: ["Warden", "ID_INTERNAL_COUNTSASCLASS_WARDEN"]
  });
  byID[te.id] = te;
  
  
})(this);
