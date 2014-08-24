(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Bending Branch"] = new RulesElement({
    name: "Bending Branch",
    type: "Power",
    id: "ID_FMP_POWER_9348",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9348",
    categories: ["Bending Branch", "ID_FMP_POWER_9348", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Blood of the Fallen"] = new RulesElement({
    name: "Blood of the Fallen",
    type: "Power",
    id: "ID_FMP_POWER_9357",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9357",
    categories: ["Blood of the Fallen", "ID_FMP_POWER_9357", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Bloodbond Rebuke"] = new RulesElement({
    name: "Bloodbond Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_9291",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9291",
    categories: ["Bloodbond Rebuke", "ID_FMP_POWER_9291", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_460", "Familiar Bloodsmith", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Bloodbond Swarm"] = new RulesElement({
    name: "Bloodbond Swarm",
    type: "Power",
    id: "ID_FMP_POWER_9292",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9292",
    categories: ["Bloodbond Swarm", "ID_FMP_POWER_9292", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_460", "Familiar Bloodsmith", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Canopy of Blades"] = new RulesElement({
    name: "Canopy of Blades",
    type: "Power",
    id: "ID_FMP_POWER_9360",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9360",
    categories: ["Canopy of Blades", "ID_FMP_POWER_9360", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Clarity of Purpose"] = new RulesElement({
    name: "Clarity of Purpose",
    type: "Power",
    id: "ID_FMP_POWER_9287",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9287",
    categories: ["Clarity of Purpose", "ID_FMP_POWER_9287", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_458", "Watcher of Vengeance", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Confusion of Blades"] = new RulesElement({
    name: "Confusion of Blades",
    type: "Power",
    id: "ID_FMP_POWER_9353",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9353",
    categories: ["Confusion of Blades", "ID_FMP_POWER_9353", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Crashing Blades"] = new RulesElement({
    name: "Crashing Blades",
    type: "Power",
    id: "ID_FMP_POWER_9362",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9362",
    categories: ["Crashing Blades", "ID_FMP_POWER_9362", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Crusader's Stance"] = new RulesElement({
    name: "Crusader's Stance",
    type: "Power",
    id: "ID_FMP_POWER_9294",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9294",
    categories: ["Crusader's Stance", "ID_FMP_POWER_9294", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_459", "Vengeful Crusader", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Crusader's Vengeance"] = new RulesElement({
    name: "Crusader's Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_9290",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9290",
    categories: ["Crusader's Vengeance", "ID_FMP_POWER_9290", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_459", "Vengeful Crusader", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Death Threat"] = new RulesElement({
    name: "Death Threat",
    type: "Power",
    id: "ID_FMP_POWER_9354",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9354",
    categories: ["Death Threat", "ID_FMP_POWER_9354", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Dragonshard Shield"] = new RulesElement({
    name: "Dragonshard Shield",
    type: "Power",
    id: "ID_FMP_POWER_9286",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9286",
    categories: ["Dragonshard Shield", "ID_FMP_POWER_9286", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Driving Force"] = new RulesElement({
    name: "Driving Force",
    type: "Power",
    id: "ID_FMP_POWER_9289",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9289",
    categories: ["Driving Force", "ID_FMP_POWER_9289", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_459", "Vengeful Crusader", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Enlarge Familiar"] = new RulesElement({
    name: "Enlarge Familiar",
    type: "Power",
    id: "ID_FMP_POWER_9279",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9279",
    categories: ["Enlarge Familiar", "ID_FMP_POWER_9279", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Fanatic Charge"] = new RulesElement({
    name: "Fanatic Charge",
    type: "Power",
    id: "ID_FMP_POWER_9280",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9280",
    categories: ["Fanatic Charge", "ID_FMP_POWER_9280", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_457", "Zealous Demagogue", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Hidden Danger"] = new RulesElement({
    name: "Hidden Danger",
    type: "Power",
    id: "ID_FMP_POWER_9284",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9284",
    categories: ["Hidden Danger", "ID_FMP_POWER_9284", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_458", "Watcher of Vengeance", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Imperiled Leader"] = new RulesElement({
    name: "Imperiled Leader",
    type: "Power",
    id: "ID_FMP_POWER_9282",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9282",
    categories: ["Imperiled Leader", "ID_FMP_POWER_9282", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_457", "Zealous Demagogue", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Infused Familiar"] = new RulesElement({
    name: "Infused Familiar",
    type: "Power",
    id: "ID_FMP_POWER_9283",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9283",
    categories: ["Infused Familiar", "ID_FMP_POWER_9283", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Just Punishment"] = new RulesElement({
    name: "Just Punishment",
    type: "Power",
    id: "ID_FMP_POWER_9285",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9285",
    categories: ["Just Punishment", "ID_FMP_POWER_9285", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_458", "Watcher of Vengeance", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Lashing Leaves"] = new RulesElement({
    name: "Lashing Leaves",
    type: "Power",
    id: "ID_FMP_POWER_9355",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9355",
    categories: ["Lashing Leaves", "ID_FMP_POWER_9355", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Mirror of Steel"] = new RulesElement({
    name: "Mirror of Steel",
    type: "Power",
    id: "ID_FMP_POWER_9359",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9359",
    categories: ["Mirror of Steel", "ID_FMP_POWER_9359", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Plant to the Hilt"] = new RulesElement({
    name: "Plant to the Hilt",
    type: "Power",
    id: "ID_FMP_POWER_9350",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9350",
    categories: ["Plant to the Hilt", "ID_FMP_POWER_9350", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Rescue Familiar"] = new RulesElement({
    name: "Rescue Familiar",
    type: "Power",
    id: "ID_FMP_POWER_9293",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9293",
    categories: ["Rescue Familiar", "ID_FMP_POWER_9293", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_460", "Familiar Bloodsmith", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Seeking Roots"] = new RulesElement({
    name: "Seeking Roots",
    type: "Power",
    id: "ID_FMP_POWER_9363",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9363",
    categories: ["Seeking Roots", "ID_FMP_POWER_9363", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Siberys Unleashed"] = new RulesElement({
    name: "Siberys Unleashed",
    type: "Power",
    id: "ID_FMP_POWER_9288",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9288",
    categories: ["Siberys Unleashed", "ID_FMP_POWER_9288", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Storm in the Trees"] = new RulesElement({
    name: "Storm in the Trees",
    type: "Power",
    id: "ID_FMP_POWER_9358",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9358",
    categories: ["Storm in the Trees", "ID_FMP_POWER_9358", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Conversion"] = new RulesElement({
    name: "Sudden Conversion",
    type: "Power",
    id: "ID_FMP_POWER_9281",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9281",
    categories: ["Sudden Conversion", "ID_FMP_POWER_9281", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_457", "Zealous Demagogue", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Verdant Silence"] = new RulesElement({
    name: "Verdant Silence",
    type: "Power",
    id: "ID_FMP_POWER_9361",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9361",
    categories: ["Verdant Silence", "ID_FMP_POWER_9361", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  
})(this);
