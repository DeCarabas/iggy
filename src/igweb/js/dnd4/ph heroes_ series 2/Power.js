(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Astral Wind"] = new RulesElement({
    name: "Astral Wind",
    type: "Power",
    id: "ID_FMP_POWER_7385",
    source: "PH Heroes: Series 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7385",
    categories: ["Astral Wind", "ID_FMP_POWER_7385", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Clawfoot Berserker Rage"] = new RulesElement({
    name: "Clawfoot Berserker Rage",
    type: "Power",
    id: "ID_FMP_POWER_7394",
    source: "PH Heroes: Series 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7394",
    categories: ["Clawfoot Berserker Rage", "ID_FMP_POWER_7394", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Clever Strike"] = new RulesElement({
    name: "Clever Strike",
    type: "Power",
    id: "ID_FMP_POWER_7388",
    source: "PH Heroes: Series 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7388",
    categories: ["Clever Strike", "ID_FMP_POWER_7388", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Close the Gap"] = new RulesElement({
    name: "Close the Gap",
    type: "Power",
    id: "ID_FMP_POWER_7387",
    source: "PH Heroes: Series 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7387",
    categories: ["Close the Gap", "ID_FMP_POWER_7387", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon's Tenacity"] = new RulesElement({
    name: "Dragon's Tenacity",
    type: "Power",
    id: "ID_FMP_POWER_7386",
    source: "PH Heroes: Series 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7386",
    categories: ["Dragon's Tenacity", "ID_FMP_POWER_7386", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Flare of Divine Vengeance"] = new RulesElement({
    name: "Flare of Divine Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_7382",
    source: "PH Heroes: Series 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7382",
    categories: ["Flare of Divine Vengeance", "ID_FMP_POWER_7382", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Focused Fury"] = new RulesElement({
    name: "Focused Fury",
    type: "Power",
    id: "ID_FMP_POWER_7380",
    source: "PH Heroes: Series 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7380",
    categories: ["Focused Fury", "ID_FMP_POWER_7380", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Forbidding Strike"] = new RulesElement({
    name: "Forbidding Strike",
    type: "Power",
    id: "ID_FMP_POWER_7384",
    source: "PH Heroes: Series 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7384",
    categories: ["Forbidding Strike", "ID_FMP_POWER_7384", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Frenzied Beast Rage"] = new RulesElement({
    name: "Frenzied Beast Rage",
    type: "Power",
    id: "ID_FMP_POWER_7392",
    source: "PH Heroes: Series 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7392",
    categories: ["Frenzied Beast Rage", "ID_FMP_POWER_7392", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_53", "Rage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Frostwind Blade"] = new RulesElement({
    name: "Frostwind Blade",
    type: "Power",
    id: "ID_FMP_POWER_7379",
    source: "PH Heroes: Series 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7379",
    categories: ["Frostwind Blade", "ID_FMP_POWER_7379", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Healing Circle"] = new RulesElement({
    name: "Healing Circle",
    type: "Power",
    id: "ID_FMP_POWER_7383",
    source: "PH Heroes: Series 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7383",
    categories: ["Healing Circle", "ID_FMP_POWER_7383", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Inevitable Wave"] = new RulesElement({
    name: "Inevitable Wave",
    type: "Power",
    id: "ID_FMP_POWER_7389",
    source: "PH Heroes: Series 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7389",
    categories: ["Inevitable Wave", "ID_FMP_POWER_7389", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Invigorating Assault"] = new RulesElement({
    name: "Invigorating Assault",
    type: "Power",
    id: "ID_FMP_POWER_7381",
    source: "PH Heroes: Series 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7381",
    categories: ["Invigorating Assault", "ID_FMP_POWER_7381", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Leaf Wall"] = new RulesElement({
    name: "Leaf Wall",
    type: "Power",
    id: "ID_FMP_POWER_7393",
    source: "PH Heroes: Series 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7393",
    categories: ["Leaf Wall", "ID_FMP_POWER_7393", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Phalanx Leader"] = new RulesElement({
    name: "Phalanx Leader",
    type: "Power",
    id: "ID_FMP_POWER_7391",
    source: "PH Heroes: Series 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7391",
    categories: ["Phalanx Leader", "ID_FMP_POWER_7391", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Refocus"] = new RulesElement({
    name: "Refocus",
    type: "Power",
    id: "ID_FMP_POWER_7377",
    source: "PH Heroes: Series 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7377",
    categories: ["Refocus", "ID_FMP_POWER_7377", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Shield of Blades"] = new RulesElement({
    name: "Shield of Blades",
    type: "Power",
    id: "ID_FMP_POWER_7390",
    source: "PH Heroes: Series 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7390",
    categories: ["Shield of Blades", "ID_FMP_POWER_7390", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Unbalancing Force"] = new RulesElement({
    name: "Unbalancing Force",
    type: "Power",
    id: "ID_FMP_POWER_7378",
    source: "PH Heroes: Series 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7378",
    categories: ["Unbalancing Force", "ID_FMP_POWER_7378", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  
})(this);
