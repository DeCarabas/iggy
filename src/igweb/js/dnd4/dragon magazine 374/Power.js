define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Aggressive Familiar"] = new engine.RulesElement({
    name: "Aggressive Familiar",
    type: "Power",
    id: "ID_FMP_POWER_7423",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7423",
    categories: ["Aggressive Familiar", "ID_FMP_POWER_7423", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Splendor"] = new engine.RulesElement({
    name: "Astral Splendor",
    type: "Power",
    id: "ID_FMP_POWER_7433",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7433",
    categories: ["Astral Splendor", "ID_FMP_POWER_7433", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Burdening Dirge"] = new engine.RulesElement({
    name: "Burdening Dirge",
    type: "Power",
    id: "ID_FMP_POWER_7425",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7425",
    categories: ["Burdening Dirge", "ID_FMP_POWER_7425", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Familiar Surge"] = new engine.RulesElement({
    name: "Familiar Surge",
    type: "Power",
    id: "ID_FMP_POWER_7420",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7420",
    categories: ["Familiar Surge", "ID_FMP_POWER_7420", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_350", "Familiar Keeper", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("Familiar Surge") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Familiar's Command"] = new engine.RulesElement({
    name: "Familiar's Command",
    type: "Power",
    id: "ID_FMP_POWER_7422",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7422",
    categories: ["Familiar's Command", "ID_FMP_POWER_7422", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_350", "Familiar Keeper", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("Familiar's Command") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Frozen Heart"] = new engine.RulesElement({
    name: "Frozen Heart",
    type: "Power",
    id: "ID_FMP_POWER_7440",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7440",
    categories: ["Frozen Heart", "ID_FMP_POWER_7440", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_361", "Long Night Scion", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Grounding Rebuke"] = new engine.RulesElement({
    name: "Grounding Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_7426",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7426",
    categories: ["Grounding Rebuke", "ID_FMP_POWER_7426", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Lash of the Long Night"] = new engine.RulesElement({
    name: "Lash of the Long Night",
    type: "Power",
    id: "ID_FMP_POWER_7437",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7437",
    categories: ["Lash of the Long Night", "ID_FMP_POWER_7437", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Learned Boost"] = new engine.RulesElement({
    name: "Learned Boost",
    type: "Power",
    id: "ID_FMP_POWER_7430",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7430",
    categories: ["Learned Boost", "ID_FMP_POWER_7430", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_351", "Academy Master", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Master's Surge"] = new engine.RulesElement({
    name: "Master's Surge",
    type: "Power",
    id: "ID_FMP_POWER_7432",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7432",
    categories: ["Master's Surge", "ID_FMP_POWER_7432", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_351", "Academy Master", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Punishing Eye"] = new engine.RulesElement({
    name: "Punishing Eye",
    type: "Power",
    id: "ID_FMP_POWER_7424",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7424",
    categories: ["Punishing Eye", "ID_FMP_POWER_7424", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Refined Recall"] = new engine.RulesElement({
    name: "Refined Recall",
    type: "Power",
    id: "ID_FMP_POWER_7431",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7431",
    categories: ["Refined Recall", "ID_FMP_POWER_7431", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_351", "Academy Master", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Star Shackles"] = new engine.RulesElement({
    name: "Star Shackles",
    type: "Power",
    id: "ID_FMP_POWER_7428",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7428",
    categories: ["Star Shackles", "ID_FMP_POWER_7428", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Transpose Familiar"] = new engine.RulesElement({
    name: "Transpose Familiar",
    type: "Power",
    id: "ID_FMP_POWER_7421",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7421",
    categories: ["Transpose Familiar", "ID_FMP_POWER_7421", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_350", "Familiar Keeper", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Warding Flourish"] = new engine.RulesElement({
    name: "Warding Flourish",
    type: "Power",
    id: "ID_FMP_POWER_7427",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7427",
    categories: ["Warding Flourish", "ID_FMP_POWER_7427", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Winter's Blood"] = new engine.RulesElement({
    name: "Winter's Blood",
    type: "Power",
    id: "ID_FMP_POWER_7439",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7439",
    categories: ["Winter's Blood", "ID_FMP_POWER_7439", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_361", "Long Night Scion", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Wizard's Fury"] = new engine.RulesElement({
    name: "Wizard's Fury",
    type: "Power",
    id: "ID_FMP_POWER_7429",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7429",
    categories: ["Wizard's Fury", "ID_FMP_POWER_7429", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Wrath of the Pale Prince"] = new engine.RulesElement({
    name: "Wrath of the Pale Prince",
    type: "Power",
    id: "ID_FMP_POWER_7438",
    source: "Dragon Magazine 374",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7438",
    categories: ["Wrath of the Pale Prince", "ID_FMP_POWER_7438", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_361", "Long Night Scion", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
