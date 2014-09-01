define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Accursed Flames"] = new engine.RulesElement({
    name: "Accursed Flames",
    type: "Power",
    id: "ID_FMP_POWER_4791",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4791",
    categories: ["Accursed Flames", "ID_FMP_POWER_4791", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_212", "Curseborn", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_3", "fire", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Alluring Lights"] = new engine.RulesElement({
    name: "Alluring Lights",
    type: "Power",
    id: "ID_FMP_POWER_4793",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4793",
    categories: ["Alluring Lights", "ID_FMP_POWER_4793", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_212", "Curseborn", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_26", "Conjuration", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Dimensional Thunder"] = new engine.RulesElement({
    name: "Dimensional Thunder",
    type: "Power",
    id: "ID_FMP_POWER_4796",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4796",
    categories: ["Dimensional Thunder", "ID_FMP_POWER_4796", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Drow Shadow Stride"] = new engine.RulesElement({
    name: "Drow Shadow Stride",
    type: "Power",
    id: "ID_FMP_POWER_4792",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4792",
    categories: ["Drow Shadow Stride", "ID_FMP_POWER_4792", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_212", "Curseborn", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Elemental Aegis"] = new engine.RulesElement({
    name: "Elemental Aegis",
    type: "Power",
    id: "ID_FMP_POWER_4797",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4797",
    categories: ["Elemental Aegis", "ID_FMP_POWER_4797", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Ferocious Charge"] = new engine.RulesElement({
    name: "Ferocious Charge",
    type: "Power",
    id: "ID_FMP_POWER_2476",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2476",
    categories: ["Ferocious Charge", "ID_FMP_POWER_2476", "ID_FMP_RACIAL_TRAIT_713", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Frigid Blade"] = new engine.RulesElement({
    name: "Frigid Blade",
    type: "Power",
    id: "ID_FMP_POWER_4795",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4795",
    categories: ["Frigid Blade", "ID_FMP_POWER_4795", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Icy Sweep"] = new engine.RulesElement({
    name: "Icy Sweep",
    type: "Power",
    id: "ID_FMP_POWER_4804",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4804",
    categories: ["Icy Sweep", "ID_FMP_POWER_4804", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Incendiary Sword"] = new engine.RulesElement({
    name: "Incendiary Sword",
    type: "Power",
    id: "ID_FMP_POWER_4798",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4798",
    categories: ["Incendiary Sword", "ID_FMP_POWER_4798", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Leaping Flames"] = new engine.RulesElement({
    name: "Leaping Flames",
    type: "Power",
    id: "ID_FMP_POWER_4803",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4803",
    categories: ["Leaping Flames", "ID_FMP_POWER_4803", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Light of Heaven"] = new engine.RulesElement({
    name: "Light of Heaven",
    type: "Power",
    id: "ID_FMP_POWER_4794",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4794",
    categories: ["Light of Heaven", "ID_FMP_POWER_4794", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_213", "Redeemed Drow", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Strider"] = new engine.RulesElement({
    name: "Lightning Strider",
    type: "Power",
    id: "ID_FMP_POWER_4805",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4805",
    categories: ["Lightning Strider", "ID_FMP_POWER_4805", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Sleet Strike"] = new engine.RulesElement({
    name: "Sleet Strike",
    type: "Power",
    id: "ID_FMP_POWER_4802",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4802",
    categories: ["Sleet Strike", "ID_FMP_POWER_4802", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Starshine upon the People"] = new engine.RulesElement({
    name: "Starshine upon the People",
    type: "Power",
    id: "ID_FMP_POWER_4785",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4785",
    categories: ["Starshine upon the People", "ID_FMP_POWER_4785", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_209", "Elf High Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Swordmage Shielding Fire"] = new engine.RulesElement({
    name: "Swordmage Shielding Fire",
    type: "Power",
    id: "ID_FMP_POWER_4800",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4800",
    categories: ["Swordmage Shielding Fire", "ID_FMP_POWER_4800", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Tymora Smiles"] = new engine.RulesElement({
    name: "Tymora Smiles",
    type: "Power",
    id: "ID_FMP_POWER_4786",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4786",
    categories: ["Tymora Smiles", "ID_FMP_POWER_4786", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_210", "Harper of Legend", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Variable Defense"] = new engine.RulesElement({
    name: "Variable Defense",
    type: "Power",
    id: "ID_FMP_POWER_4801",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4801",
    categories: ["Variable Defense", "ID_FMP_POWER_4801", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Webs of Darkness"] = new engine.RulesElement({
    name: "Webs of Darkness",
    type: "Power",
    id: "ID_FMP_POWER_4790",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4790",
    categories: ["Webs of Darkness", "ID_FMP_POWER_4790", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
