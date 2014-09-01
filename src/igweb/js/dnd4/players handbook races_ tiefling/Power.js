define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Firesoul Salvation"] = new engine.RulesElement({
    name: "Firesoul Salvation",
    type: "Power",
    id: "ID_FMP_POWER_10873",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10873",
    categories: ["Firesoul Salvation", "ID_FMP_POWER_10873", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_570", "Redeemer of the Damned", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Flame Blade"] = new engine.RulesElement({
    name: "Flame Blade",
    type: "Power",
    id: "ID_FMP_POWER_10870",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10870",
    categories: ["Flame Blade", "ID_FMP_POWER_10870", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_569", "Turathi Hell-Kite", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Hellfire Gaze"] = new engine.RulesElement({
    name: "Hellfire Gaze",
    type: "Power",
    id: "ID_FMP_POWER_10879",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10879",
    categories: ["Hellfire Gaze", "ID_FMP_POWER_10879", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_571", "Infernal Eye", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Hellish Escape"] = new engine.RulesElement({
    name: "Hellish Escape",
    type: "Power",
    id: "ID_FMP_POWER_10862",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10862",
    categories: ["Hellish Escape", "ID_FMP_POWER_10862", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_564", "Lost Soul", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Hell's Ram"] = new engine.RulesElement({
    name: "Hell's Ram",
    type: "Power",
    id: "ID_FMP_POWER_10868",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10868",
    categories: ["Hell's Ram", "ID_FMP_POWER_10868", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_569", "Turathi Hell-Kite", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Hell's Shackles"] = new engine.RulesElement({
    name: "Hell's Shackles",
    type: "Power",
    id: "ID_FMP_POWER_10866",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10866",
    categories: ["Hell's Shackles", "ID_FMP_POWER_10866", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_568", "Hell's Keeper", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Infernal Respite"] = new engine.RulesElement({
    name: "Infernal Respite",
    type: "Power",
    id: "ID_FMP_POWER_10863",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10863",
    categories: ["Infernal Respite", "ID_FMP_POWER_10863", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_564", "Lost Soul", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Wall of Dis"] = new engine.RulesElement({
    name: "Iron Wall of Dis",
    type: "Power",
    id: "ID_FMP_POWER_10864",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10864",
    categories: ["Iron Wall of Dis", "ID_FMP_POWER_10864", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_564", "Lost Soul", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_3", "fire", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Prescient Thought"] = new engine.RulesElement({
    name: "Prescient Thought",
    type: "Power",
    id: "ID_FMP_POWER_10878",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10878",
    categories: ["Prescient Thought", "ID_FMP_POWER_10878", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_571", "Infernal Eye", "ID_FMP_CATEGORY_35", "Psionic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Ride the Devil's Tail"] = new engine.RulesElement({
    name: "Ride the Devil's Tail",
    type: "Power",
    id: "ID_FMP_POWER_10869",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10869",
    categories: ["Ride the Devil's Tail", "ID_FMP_POWER_10869", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_569", "Turathi Hell-Kite", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Ruler of Life and Death"] = new engine.RulesElement({
    name: "Ruler of Life and Death",
    type: "Power",
    id: "ID_FMP_POWER_10880",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10880",
    categories: ["Ruler of Life and Death", "ID_FMP_POWER_10880", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_572", "Heir to the Empire", "ID_FMP_CATEGORY_6", "Charm", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Sacrifice"] = new engine.RulesElement({
    name: "Spirit of Sacrifice",
    type: "Power",
    id: "ID_FMP_POWER_10872",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10872",
    categories: ["Spirit of Sacrifice", "ID_FMP_POWER_10872", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_570", "Redeemer of the Damned", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["To Hell with You"] = new engine.RulesElement({
    name: "To Hell with You",
    type: "Power",
    id: "ID_FMP_POWER_10867",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10867",
    categories: ["To Hell with You", "ID_FMP_POWER_10867", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_568", "Hell's Keeper", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Vision of Death"] = new engine.RulesElement({
    name: "Vision of Death",
    type: "Power",
    id: "ID_FMP_POWER_10874",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10874",
    categories: ["Vision of Death", "ID_FMP_POWER_10874", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_571", "Infernal Eye", "ID_FMP_CATEGORY_61", "Augmentable", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_35", "Psionic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Vision of Death (Augment 0)"] = new engine.RulesElement({
    name: "Vision of Death (Augment 0)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VISION_OF_DEATH_(AUGMENT_0)",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_VISION_OF_DEATH_(AUGMENT_0)",
    categories: ["Vision of Death (Augment 0)", "ID_INTERNAL_POWER_VISION_OF_DEATH_(AUGMENT_0)"]
  });
  byID[te.id] = te;
  
  te = Power["Vision of Death (Augment 2)"] = new engine.RulesElement({
    name: "Vision of Death (Augment 2)",
    type: "Power",
    id: "ID_INTERNAL_POWER_VISION_OF_DEATH_(AUGMENT_2)",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=OWER_VISION_OF_DEATH_(AUGMENT_2)",
    categories: ["Vision of Death (Augment 2)", "ID_INTERNAL_POWER_VISION_OF_DEATH_(AUGMENT_2)"]
  });
  byID[te.id] = te;
  
  te = Power["Yoke of Heaven"] = new engine.RulesElement({
    name: "Yoke of Heaven",
    type: "Power",
    id: "ID_FMP_POWER_10865",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10865",
    categories: ["Yoke of Heaven", "ID_FMP_POWER_10865", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_568", "Hell's Keeper", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Your Doom Awaits"] = new engine.RulesElement({
    name: "Your Doom Awaits",
    type: "Power",
    id: "ID_FMP_POWER_10871",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=10871",
    categories: ["Your Doom Awaits", "ID_FMP_POWER_10871", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_570", "Redeemer of the Damned", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
