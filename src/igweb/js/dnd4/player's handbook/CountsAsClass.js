(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var CountsAsClass = types['CountsAsClass'] || (types['CountsAsClass'] = {});
  te = CountsAsClass["Cleric"] = new RulesElement({
    name: "Cleric",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_CLERIC",
    source: "Player's Handbook",
    categories: ["Cleric", "ID_INTERNAL_COUNTSASCLASS_CLERIC"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Fighter"] = new RulesElement({
    name: "Fighter",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_FIGHTER",
    source: "Player's Handbook",
    categories: ["Fighter", "ID_INTERNAL_COUNTSASCLASS_FIGHTER"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Paladin"] = new RulesElement({
    name: "Paladin",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_PALADIN",
    source: "Player's Handbook",
    categories: ["Paladin", "ID_INTERNAL_COUNTSASCLASS_PALADIN"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Ranger"] = new RulesElement({
    name: "Ranger",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_RANGER",
    source: "Player's Handbook",
    categories: ["Ranger", "ID_INTERNAL_COUNTSASCLASS_RANGER"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Rogue"] = new RulesElement({
    name: "Rogue",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_ROGUE",
    source: "Player's Handbook",
    categories: ["Rogue", "ID_INTERNAL_COUNTSASCLASS_ROGUE"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Warlock"] = new RulesElement({
    name: "Warlock",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_WARLOCK",
    source: "Player's Handbook",
    categories: ["Warlock", "ID_INTERNAL_COUNTSASCLASS_WARLOCK"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Warlord"] = new RulesElement({
    name: "Warlord",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_WARLORD",
    source: "Player's Handbook",
    categories: ["Warlord", "ID_INTERNAL_COUNTSASCLASS_WARLORD"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Wizard"] = new RulesElement({
    name: "Wizard",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_WIZARD",
    source: "Player's Handbook",
    categories: ["Wizard", "ID_INTERNAL_COUNTSASCLASS_WIZARD"]
  });
  byID[te.id] = te;
  
  
})(this);
