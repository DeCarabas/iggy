(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Goblin Tactics"] = new RulesElement({
    name: "Goblin Tactics",
    type: "Power",
    id: "ID_FMP_POWER_1489",
    source: "Monster Manual",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1489",
    categories: ["Goblin Tactics", "ID_FMP_POWER_1489", "ID_FMP_RACIAL_TRAIT_394", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Hobgoblin Resilience"] = new RulesElement({
    name: "Hobgoblin Resilience",
    type: "Power",
    id: "ID_FMP_POWER_2478",
    source: "Monster Manual",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2478",
    categories: ["Hobgoblin Resilience", "ID_FMP_POWER_2478", "ID_FMP_RACIAL_TRAIT_716", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Predatory Eye"] = new RulesElement({
    name: "Predatory Eye",
    type: "Power",
    id: "ID_FMP_POWER_2324",
    source: "Monster Manual",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2324",
    categories: ["Predatory Eye", "ID_FMP_POWER_2324", "ID_FMP_RACIAL_TRAIT_694", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Shifty"] = new RulesElement({
    name: "Shifty",
    type: "Power",
    id: "ID_FMP_POWER_2479",
    source: "Monster Manual",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2479",
    categories: ["Shifty", "ID_FMP_POWER_2479", "ID_FMP_RACIAL_TRAIT_416", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Telekinetic Leap"] = new RulesElement({
    name: "Telekinetic Leap",
    type: "Power",
    id: "ID_FMP_POWER_2474",
    source: "Monster Manual",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2474",
    categories: ["Telekinetic Leap", "ID_FMP_POWER_2474", "ID_FMP_RACIAL_TRAIT_711", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Warrior's Surge"] = new RulesElement({
    name: "Warrior's Surge",
    type: "Power",
    id: "ID_FMP_POWER_2481",
    source: "Monster Manual",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2481",
    categories: ["Warrior's Surge", "ID_FMP_POWER_2481", "ID_FMP_RACIAL_TRAIT_718", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  
})(this);
