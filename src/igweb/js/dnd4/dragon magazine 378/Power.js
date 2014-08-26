define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Adaptable Maneuver"] = new engine.RulesElement({
    name: "Adaptable Maneuver",
    type: "Power",
    id: "ID_FMP_POWER_9369",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9369",
    categories: ["Adaptable Maneuver", "ID_FMP_POWER_9369", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Bahamut's Shield"] = new engine.RulesElement({
    name: "Bahamut's Shield",
    type: "Power",
    id: "ID_FMP_POWER_9389",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9389",
    categories: ["Bahamut's Shield", "ID_FMP_POWER_9389", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Blade Feint"] = new engine.RulesElement({
    name: "Blade Feint",
    type: "Power",
    id: "ID_FMP_POWER_9372",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9372",
    categories: ["Blade Feint", "ID_FMP_POWER_9372", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_461", "Bladestorm Duelist", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Breath Weapon"] = new engine.RulesElement({
    name: "Breath Weapon",
    type: "Power",
    id: "ID_FMP_POWER_9489",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9489",
    categories: ["Breath Weapon", "ID_FMP_POWER_9489"]
  });
  byID[te.id] = te;
  
  te = Power["Dancing Defense"] = new engine.RulesElement({
    name: "Dancing Defense",
    type: "Power",
    id: "ID_FMP_POWER_9365",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9365",
    categories: ["Dancing Defense", "ID_FMP_POWER_9365", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon Bite"] = new engine.RulesElement({
    name: "Dragon Bite",
    type: "Power",
    id: "ID_FMP_POWER_9488",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9488",
    categories: ["Dragon Bite", "ID_FMP_POWER_9488"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon's Rebuke"] = new engine.RulesElement({
    name: "Dragon's Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_9386",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9386",
    categories: ["Dragon's Rebuke", "ID_FMP_POWER_9386", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Elaborate Assault"] = new engine.RulesElement({
    name: "Elaborate Assault",
    type: "Power",
    id: "ID_FMP_POWER_9373",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9373",
    categories: ["Elaborate Assault", "ID_FMP_POWER_9373", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_461", "Bladestorm Duelist", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Enemy Undone"] = new engine.RulesElement({
    name: "Enemy Undone",
    type: "Power",
    id: "ID_FMP_POWER_9371",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9371",
    categories: ["Enemy Undone", "ID_FMP_POWER_9371", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Excoriating Strands"] = new engine.RulesElement({
    name: "Excoriating Strands",
    type: "Power",
    id: "ID_FMP_POWER_9398",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9398",
    categories: ["Excoriating Strands", "ID_FMP_POWER_9398", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_465", "Storvakal", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Explosive Outburst"] = new engine.RulesElement({
    name: "Explosive Outburst",
    type: "Power",
    id: "ID_FMP_POWER_9378",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9378",
    categories: ["Explosive Outburst", "ID_FMP_POWER_9378", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_462", "Wrathbearer", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Hand of Justice"] = new engine.RulesElement({
    name: "Hand of Justice",
    type: "Power",
    id: "ID_FMP_POWER_9387",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9387",
    categories: ["Hand of Justice", "ID_FMP_POWER_9387", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Heartstrike"] = new engine.RulesElement({
    name: "Heartstrike",
    type: "Power",
    id: "ID_FMP_POWER_9383",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9383",
    categories: ["Heartstrike", "ID_FMP_POWER_9383", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_463", "Chromatic Bane", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Masterful Parry"] = new engine.RulesElement({
    name: "Masterful Parry",
    type: "Power",
    id: "ID_FMP_POWER_9368",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9368",
    categories: ["Masterful Parry", "ID_FMP_POWER_9368", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Mocking Target"] = new engine.RulesElement({
    name: "Mocking Target",
    type: "Power",
    id: "ID_FMP_POWER_9380",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9380",
    categories: ["Mocking Target", "ID_FMP_POWER_9380", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_462", "Wrathbearer", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Nimble Step"] = new engine.RulesElement({
    name: "Nimble Step",
    type: "Power",
    id: "ID_FMP_POWER_9374",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9374",
    categories: ["Nimble Step", "ID_FMP_POWER_9374", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_461", "Bladestorm Duelist", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Platinum Mantle"] = new engine.RulesElement({
    name: "Platinum Mantle",
    type: "Power",
    id: "ID_FMP_POWER_9929",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9929",
    categories: ["Platinum Mantle", "ID_FMP_POWER_9929", "ID_FMP_CLASS_FEATURE_1913", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Probability Travel"] = new engine.RulesElement({
    name: "Probability Travel",
    type: "Power",
    id: "ID_FMP_POWER_9397",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9397",
    categories: ["Probability Travel", "ID_FMP_POWER_9397", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_465", "Storvakal", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Punishing Storm"] = new engine.RulesElement({
    name: "Punishing Storm",
    type: "Power",
    id: "ID_FMP_POWER_9367",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9367",
    categories: ["Punishing Storm", "ID_FMP_POWER_9367", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Righteous Intolerance"] = new engine.RulesElement({
    name: "Righteous Intolerance",
    type: "Power",
    id: "ID_FMP_POWER_9390",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9390",
    categories: ["Righteous Intolerance", "ID_FMP_POWER_9390", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Righteous Judgment"] = new engine.RulesElement({
    name: "Righteous Judgment",
    type: "Power",
    id: "ID_FMP_POWER_9388",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9388",
    categories: ["Righteous Judgment", "ID_FMP_POWER_9388", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Righteous Savior"] = new engine.RulesElement({
    name: "Righteous Savior",
    type: "Power",
    id: "ID_FMP_POWER_9391",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9391",
    categories: ["Righteous Savior", "ID_FMP_POWER_9391", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Rolling Stab"] = new engine.RulesElement({
    name: "Rolling Stab",
    type: "Power",
    id: "ID_FMP_POWER_9382",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9382",
    categories: ["Rolling Stab", "ID_FMP_POWER_9382", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_463", "Chromatic Bane", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Rousing Cry"] = new engine.RulesElement({
    name: "Rousing Cry",
    type: "Power",
    id: "ID_FMP_POWER_9384",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9384",
    categories: ["Rousing Cry", "ID_FMP_POWER_9384", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_463", "Chromatic Bane", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Ruinous Assault"] = new engine.RulesElement({
    name: "Ruinous Assault",
    type: "Power",
    id: "ID_FMP_POWER_9364",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9364",
    categories: ["Ruinous Assault", "ID_FMP_POWER_9364", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Seven Canaries"] = new engine.RulesElement({
    name: "Seven Canaries",
    type: "Power",
    id: "ID_FMP_POWER_9396",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9396",
    categories: ["Seven Canaries", "ID_FMP_POWER_9396", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_464", "Bahamut's Vessel", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Shining Purpose"] = new engine.RulesElement({
    name: "Shining Purpose",
    type: "Power",
    id: "ID_FMP_POWER_9392",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9392",
    categories: ["Shining Purpose", "ID_FMP_POWER_9392", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Spinning Razor Strike"] = new engine.RulesElement({
    name: "Spinning Razor Strike",
    type: "Power",
    id: "ID_FMP_POWER_9366",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9366",
    categories: ["Spinning Razor Strike", "ID_FMP_POWER_9366", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Storm's Fury Strike"] = new engine.RulesElement({
    name: "Storm's Fury Strike",
    type: "Power",
    id: "ID_FMP_POWER_9370",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9370",
    categories: ["Storm's Fury Strike", "ID_FMP_POWER_9370", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Unequaled Might"] = new engine.RulesElement({
    name: "Unequaled Might",
    type: "Power",
    id: "ID_FMP_POWER_9379",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9379",
    categories: ["Unequaled Might", "ID_FMP_POWER_9379", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_462", "Wrathbearer", "ID_FMP_CATEGORY_47", "Invigorating", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Wind of Reprisal"] = new engine.RulesElement({
    name: "Wind of Reprisal",
    type: "Power",
    id: "ID_FMP_POWER_9399",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9399",
    categories: ["Wind of Reprisal", "ID_FMP_POWER_9399", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_465", "Storvakal", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Zealous Fury"] = new engine.RulesElement({
    name: "Zealous Fury",
    type: "Power",
    id: "ID_FMP_POWER_9393",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9393",
    categories: ["Zealous Fury", "ID_FMP_POWER_9393", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
