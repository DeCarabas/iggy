(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Bahamut's Voice"] = new RulesElement({
    name: "Bahamut's Voice",
    type: "Power",
    id: "ID_FMP_POWER_10363",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10363",
    categories: ["Bahamut's Voice", "ID_FMP_POWER_10363", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_533", "Platinum Templar", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Countering Breath"] = new RulesElement({
    name: "Countering Breath",
    type: "Power",
    id: "ID_FMP_POWER_10117",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10117",
    categories: ["Countering Breath", "ID_FMP_POWER_10117", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_525", "Ninefold Master", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Resistance"] = new RulesElement({
    name: "Divine Resistance",
    type: "Power",
    id: "ID_FMP_POWER_10390",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10390",
    categories: ["Divine Resistance", "ID_FMP_POWER_10390", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_538", "Avatar of Io", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Draconic Leap"] = new RulesElement({
    name: "Draconic Leap",
    type: "Power",
    id: "ID_FMP_POWER_10366",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10366",
    categories: ["Draconic Leap", "ID_FMP_POWER_10366", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_534", "Honorable Blade", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Draconic Sidestep"] = new RulesElement({
    name: "Draconic Sidestep",
    type: "Power",
    id: "ID_FMP_POWER_10364",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10364",
    categories: ["Draconic Sidestep", "ID_FMP_POWER_10364", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_534", "Honorable Blade", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon Aura"] = new RulesElement({
    name: "Dragon Aura",
    type: "Power",
    id: "ID_FMP_POWER_10115",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10115",
    categories: ["Dragon Aura", "ID_FMP_POWER_10115", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_525", "Ninefold Master", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon Storm"] = new RulesElement({
    name: "Dragon Storm",
    type: "Power",
    id: "ID_FMP_POWER_10368",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10368",
    categories: ["Dragon Storm", "ID_FMP_POWER_10368", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_535", "Storm Dragon", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon Tempest"] = new RulesElement({
    name: "Dragon Tempest",
    type: "Power",
    id: "ID_FMP_POWER_10116",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10116",
    categories: ["Dragon Tempest", "ID_FMP_POWER_10116", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_525", "Ninefold Master", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Dragonborn Zeal"] = new RulesElement({
    name: "Dragonborn Zeal",
    type: "Power",
    id: "ID_FMP_POWER_4186",
    source: "Player's Handbook Races: Dragonborn,Dragon Magazine 365",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4186",
    categories: ["Dragonborn Zeal", "ID_FMP_POWER_4186", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Misty Breath"] = new RulesElement({
    name: "Misty Breath",
    type: "Power",
    id: "ID_FMP_POWER_10361",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10361",
    categories: ["Misty Breath", "ID_FMP_POWER_10361", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_533", "Platinum Templar", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Platinum Wing Buffet Attack"] = new RulesElement({
    name: "Platinum Wing Buffet Attack",
    type: "Power",
    id: "ID_FMP_POWER_10362",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10362",
    categories: ["Platinum Wing Buffet Attack", "ID_FMP_POWER_10362", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_533", "Platinum Templar", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Platinum Wings"] = new RulesElement({
    name: "Platinum Wings",
    type: "Power",
    id: "ID_FMP_POWER_10360",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10360",
    categories: ["Platinum Wings", "ID_FMP_POWER_10360", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_533", "Platinum Templar", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_10362"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Spirit Wings"] = new RulesElement({
    name: "Spirit Wings",
    type: "Power",
    id: "ID_FMP_POWER_10369",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10369",
    categories: ["Spirit Wings", "ID_FMP_POWER_10369", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_535", "Storm Dragon", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Storm's Rebuke"] = new RulesElement({
    name: "Storm's Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_10367",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10367",
    categories: ["Storm's Rebuke", "ID_FMP_POWER_10367", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_535", "Storm Dragon", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Whirling Dragon"] = new RulesElement({
    name: "Whirling Dragon",
    type: "Power",
    id: "ID_FMP_POWER_10365",
    source: "Player's Handbook Races: Dragonborn",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10365",
    categories: ["Whirling Dragon", "ID_FMP_POWER_10365", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_534", "Honorable Blade", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_56", "Varies", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  
})(this);
