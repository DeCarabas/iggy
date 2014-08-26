define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Casting Ripples"] = new engine.RulesElement({
    name: "Casting Ripples",
    type: "Power",
    id: "ID_FMP_POWER_3227",
    source: "Dragon Magazine 364",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3227",
    categories: ["Casting Ripples", "ID_FMP_POWER_3227", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_133", "Pack Master", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Empathic Resonance"] = new engine.RulesElement({
    name: "Empathic Resonance",
    type: "Power",
    id: "ID_FMP_POWER_3155",
    source: "Dragon Magazine 364",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3155",
    categories: ["Empathic Resonance", "ID_FMP_POWER_3155", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_132", "Warforged Lifeseeker", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Manticore-and-Wyvern"] = new engine.RulesElement({
    name: "Manticore-and-Wyvern",
    type: "Power",
    id: "ID_FMP_POWER_3226",
    source: "Dragon Magazine 364",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3226",
    categories: ["Manticore-and-Wyvern", "ID_FMP_POWER_3226", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_133", "Pack Master", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Straw Soldiers"] = new engine.RulesElement({
    name: "Straw Soldiers",
    type: "Power",
    id: "ID_FMP_POWER_3228",
    source: "Dragon Magazine 364",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3228",
    categories: ["Straw Soldiers", "ID_FMP_POWER_3228", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_133", "Pack Master", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Unleashed Vigor"] = new engine.RulesElement({
    name: "Unleashed Vigor",
    type: "Power",
    id: "ID_FMP_POWER_3156",
    source: "Dragon Magazine 364",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3156",
    categories: ["Unleashed Vigor", "ID_FMP_POWER_3156", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_132", "Warforged Lifeseeker", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Verve Strike"] = new engine.RulesElement({
    name: "Verve Strike",
    type: "Power",
    id: "ID_FMP_POWER_3154",
    source: "Dragon Magazine 364",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3154",
    categories: ["Verve Strike", "ID_FMP_POWER_3154", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_132", "Warforged Lifeseeker", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
