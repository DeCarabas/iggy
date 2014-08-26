define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Accept No Defeat"] = new engine.RulesElement({
    name: "Accept No Defeat",
    type: "Power",
    id: "ID_FMP_POWER_7040",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7040",
    categories: ["Accept No Defeat", "ID_FMP_POWER_7040", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Adjure the Chosen"] = new engine.RulesElement({
    name: "Adjure the Chosen",
    type: "Power",
    id: "ID_FMP_POWER_7894",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7894",
    categories: ["Adjure the Chosen", "ID_FMP_POWER_7894", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Admonishing Whisper"] = new engine.RulesElement({
    name: "Admonishing Whisper",
    type: "Power",
    id: "ID_FMP_POWER_8000",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8000",
    categories: ["Admonishing Whisper", "ID_FMP_POWER_8000", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_409", "Adept of Whispers", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Air Walk"] = new engine.RulesElement({
    name: "Air Walk",
    type: "Power",
    id: "ID_FMP_POWER_3685",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3685",
    categories: ["Air Walk", "ID_FMP_POWER_3685", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Amber Prisons"] = new engine.RulesElement({
    name: "Amber Prisons",
    type: "Power",
    id: "ID_FMP_POWER_7058",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7058",
    categories: ["Amber Prisons", "ID_FMP_POWER_7058", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Angelic Hosts"] = new engine.RulesElement({
    name: "Angelic Hosts",
    type: "Power",
    id: "ID_FMP_POWER_8271",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8271",
    categories: ["Angelic Hosts", "ID_FMP_POWER_8271", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_448", "Exalted Angel", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Angel's Rescue"] = new engine.RulesElement({
    name: "Angel's Rescue",
    type: "Power",
    id: "ID_FMP_POWER_7102",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7102",
    categories: ["Angel's Rescue", "ID_FMP_POWER_7102", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Anointed Army"] = new engine.RulesElement({
    name: "Anointed Army",
    type: "Power",
    id: "ID_FMP_POWER_7898",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7898",
    categories: ["Anointed Army", "ID_FMP_POWER_7898", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_399", "Anointed Champion", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Anthem of Civilization"] = new engine.RulesElement({
    name: "Anthem of Civilization",
    type: "Power",
    id: "ID_FMP_POWER_7444",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7444",
    categories: ["Anthem of Civilization", "ID_FMP_POWER_7444", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Anthem of Progress"] = new engine.RulesElement({
    name: "Anthem of Progress",
    type: "Power",
    id: "ID_FMP_POWER_8215",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8215",
    categories: ["Anthem of Progress", "ID_FMP_POWER_8215", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Anvil of Faith"] = new engine.RulesElement({
    name: "Anvil of Faith",
    type: "Power",
    id: "ID_FMP_POWER_7062",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7062",
    categories: ["Anvil of Faith", "ID_FMP_POWER_7062", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Apocalypse from the Sky"] = new engine.RulesElement({
    name: "Apocalypse from the Sky",
    type: "Power",
    id: "ID_FMP_POWER_7235",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7235",
    categories: ["Apocalypse from the Sky", "ID_FMP_POWER_7235", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Arc of Vengeance"] = new engine.RulesElement({
    name: "Arc of Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_7254",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7254",
    categories: ["Arc of Vengeance", "ID_FMP_POWER_7254", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Arcana Ward"] = new engine.RulesElement({
    name: "Arcana Ward",
    type: "Power",
    id: "ID_FMP_POWER_8173",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8173",
    categories: ["Arcana Ward", "ID_FMP_POWER_8173", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Ardent Judgment"] = new engine.RulesElement({
    name: "Ardent Judgment",
    type: "Power",
    id: "ID_FMP_POWER_7293",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7293",
    categories: ["Ardent Judgment", "ID_FMP_POWER_7293", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Ardent Strike"] = new engine.RulesElement({
    name: "Ardent Strike",
    type: "Power",
    id: "ID_FMP_POWER_7241",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7241",
    categories: ["Ardent Strike", "ID_FMP_POWER_7241", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Ardent Vow"] = new engine.RulesElement({
    name: "Ardent Vow",
    type: "Power",
    id: "ID_FMP_POWER_8097",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8097",
    categories: ["Ardent Vow", "ID_FMP_POWER_8097"]
  });
  byID[te.id] = te;
  
  te = Power["Argent Mantle"] = new engine.RulesElement({
    name: "Argent Mantle",
    type: "Power",
    id: "ID_FMP_POWER_6985",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6985",
    categories: ["Argent Mantle", "ID_FMP_POWER_6985", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Armor of Faith"] = new engine.RulesElement({
    name: "Armor of Faith",
    type: "Power",
    id: "ID_FMP_POWER_3467",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3467",
    categories: ["Armor of Faith", "ID_FMP_POWER_3467", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of Majesty"] = new engine.RulesElement({
    name: "Aspect of Majesty",
    type: "Power",
    id: "ID_FMP_POWER_7006",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7006",
    categories: ["Aspect of Majesty", "ID_FMP_POWER_7006", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Condemnation"] = new engine.RulesElement({
    name: "Astral Condemnation",
    type: "Power",
    id: "ID_FMP_POWER_7076",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7076",
    categories: ["Astral Condemnation", "ID_FMP_POWER_7076", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Dust"] = new engine.RulesElement({
    name: "Astral Dust",
    type: "Power",
    id: "ID_FMP_POWER_7209",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7209",
    categories: ["Astral Dust", "ID_FMP_POWER_7209", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Exile"] = new engine.RulesElement({
    name: "Astral Exile",
    type: "Power",
    id: "ID_FMP_POWER_7132",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7132",
    categories: ["Astral Exile", "ID_FMP_POWER_7132", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Flare"] = new engine.RulesElement({
    name: "Astral Flare",
    type: "Power",
    id: "ID_FMP_POWER_7084",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7084",
    categories: ["Astral Flare", "ID_FMP_POWER_7084", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Flood"] = new engine.RulesElement({
    name: "Astral Flood",
    type: "Power",
    id: "ID_FMP_POWER_7900",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7900",
    categories: ["Astral Flood", "ID_FMP_POWER_7900", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_400", "Astral Savant", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Seal"] = new engine.RulesElement({
    name: "Astral Seal",
    type: "Power",
    id: "ID_FMP_POWER_8286",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8286",
    categories: ["Astral Seal", "ID_FMP_POWER_8286", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Terrain"] = new engine.RulesElement({
    name: "Astral Terrain",
    type: "Power",
    id: "ID_FMP_POWER_7902",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7902",
    categories: ["Astral Terrain", "ID_FMP_POWER_7902", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_400", "Astral Savant", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Thunder"] = new engine.RulesElement({
    name: "Astral Thunder",
    type: "Power",
    id: "ID_FMP_POWER_7257",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7257",
    categories: ["Astral Thunder", "ID_FMP_POWER_7257", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Thunderbolt"] = new engine.RulesElement({
    name: "Astral Thunderbolt",
    type: "Power",
    id: "ID_FMP_POWER_7294",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7294",
    categories: ["Astral Thunderbolt", "ID_FMP_POWER_7294", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Avenger's Demand"] = new engine.RulesElement({
    name: "Avenger's Demand",
    type: "Power",
    id: "ID_FMP_POWER_7023",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7023",
    categories: ["Avenger's Demand", "ID_FMP_POWER_7023", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Avenger's Resolve"] = new engine.RulesElement({
    name: "Avenger's Resolve",
    type: "Power",
    id: "ID_FMP_POWER_6991",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6991",
    categories: ["Avenger's Resolve", "ID_FMP_POWER_6991", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Avenging Smite"] = new engine.RulesElement({
    name: "Avenging Smite",
    type: "Power",
    id: "ID_FMP_POWER_7250",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7250",
    categories: ["Avenging Smite", "ID_FMP_POWER_7250", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Baleful Admonishment"] = new engine.RulesElement({
    name: "Baleful Admonishment",
    type: "Power",
    id: "ID_FMP_POWER_7186",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7186",
    categories: ["Baleful Admonishment", "ID_FMP_POWER_7186", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Bane"] = new engine.RulesElement({
    name: "Bane",
    type: "Power",
    id: "ID_FMP_POWER_3585",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3585",
    categories: ["Bane", "ID_FMP_POWER_3585", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Blessing"] = new engine.RulesElement({
    name: "Battle Blessing",
    type: "Power",
    id: "ID_FMP_POWER_7035",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7035",
    categories: ["Battle Blessing", "ID_FMP_POWER_7035", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Hymn"] = new engine.RulesElement({
    name: "Battle Hymn",
    type: "Power",
    id: "ID_FMP_POWER_7904",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7904",
    categories: ["Battle Hymn", "ID_FMP_POWER_7904", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_401", "Battle Chaplain", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Rapture"] = new engine.RulesElement({
    name: "Battle Rapture",
    type: "Power",
    id: "ID_FMP_POWER_7704",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7704",
    categories: ["Battle Rapture", "ID_FMP_POWER_7704", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_391", "Ardent Champion", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Beacon of Doom"] = new engine.RulesElement({
    name: "Beacon of Doom",
    type: "Power",
    id: "ID_FMP_POWER_7113",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7113",
    categories: ["Beacon of Doom", "ID_FMP_POWER_7113", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Bear the Wounds"] = new engine.RulesElement({
    name: "Bear the Wounds",
    type: "Power",
    id: "ID_FMP_POWER_7974",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7974",
    categories: ["Bear the Wounds", "ID_FMP_POWER_7974", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_402", "Compassionate Healer", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Benediction"] = new engine.RulesElement({
    name: "Benediction",
    type: "Power",
    id: "ID_FMP_POWER_7264",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7264",
    categories: ["Benediction", "ID_FMP_POWER_7264", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Black Obelisk of Doom"] = new engine.RulesElement({
    name: "Black Obelisk of Doom",
    type: "Power",
    id: "ID_FMP_POWER_8087",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8087",
    categories: ["Black Obelisk of Doom", "ID_FMP_POWER_8087", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_416", "Stonecaller", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Blade of Astral Hosts"] = new engine.RulesElement({
    name: "Blade of Astral Hosts",
    type: "Power",
    id: "ID_FMP_POWER_7045",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7045",
    categories: ["Blade of Astral Hosts", "ID_FMP_POWER_7045", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Blade of Guilt"] = new engine.RulesElement({
    name: "Blade of Guilt",
    type: "Power",
    id: "ID_FMP_POWER_7014",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7014",
    categories: ["Blade of Guilt", "ID_FMP_POWER_7014", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Blade of Light"] = new engine.RulesElement({
    name: "Blade of Light",
    type: "Power",
    id: "ID_FMP_POWER_3699",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3699",
    categories: ["Blade of Light", "ID_FMP_POWER_3699", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Blades of Holy Fire"] = new engine.RulesElement({
    name: "Blades of Holy Fire",
    type: "Power",
    id: "ID_FMP_POWER_2834",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2834",
    categories: ["Blades of Holy Fire", "ID_FMP_POWER_2834", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Blazing Brand"] = new engine.RulesElement({
    name: "Blazing Brand",
    type: "Power",
    id: "ID_FMP_POWER_7247",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7247",
    categories: ["Blazing Brand", "ID_FMP_POWER_7247", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Bless Weapon"] = new engine.RulesElement({
    name: "Bless Weapon",
    type: "Power",
    id: "ID_FMP_POWER_3727",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3727",
    categories: ["Bless Weapon", "ID_FMP_POWER_3727", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Blessed Blade"] = new engine.RulesElement({
    name: "Blessed Blade",
    type: "Power",
    id: "ID_FMP_POWER_7897",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7897",
    categories: ["Blessed Blade", "ID_FMP_POWER_7897", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_399", "Anointed Champion", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Blessing of the Chalice"] = new engine.RulesElement({
    name: "Blessing of the Chalice",
    type: "Power",
    id: "ID_FMP_POWER_8163",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8163",
    categories: ["Blessing of the Chalice", "ID_FMP_POWER_8163", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_426", "Knight of the Chalice", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Blood of the Mighty"] = new engine.RulesElement({
    name: "Blood of the Mighty",
    type: "Power",
    id: "ID_FMP_POWER_3272",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3272",
    categories: ["Blood of the Mighty", "ID_FMP_POWER_3272", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Bolts of Warding"] = new engine.RulesElement({
    name: "Bolts of Warding",
    type: "Power",
    id: "ID_FMP_POWER_7093",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7093",
    categories: ["Bolts of Warding", "ID_FMP_POWER_7093", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Bond of Censure"] = new engine.RulesElement({
    name: "Bond of Censure",
    type: "Power",
    id: "ID_FMP_POWER_6980",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6980",
    categories: ["Bond of Censure", "ID_FMP_POWER_6980", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Bonded by Blood"] = new engine.RulesElement({
    name: "Bonded by Blood",
    type: "Power",
    id: "ID_FMP_POWER_7046",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7046",
    categories: ["Bonded by Blood", "ID_FMP_POWER_7046", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Bound by Fate"] = new engine.RulesElement({
    name: "Bound by Fate",
    type: "Power",
    id: "ID_FMP_POWER_7697",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7697",
    categories: ["Bound by Fate", "ID_FMP_POWER_7697", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Brand of Fire"] = new engine.RulesElement({
    name: "Brand of Fire",
    type: "Power",
    id: "ID_FMP_POWER_7231",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7231",
    categories: ["Brand of Fire", "ID_FMP_POWER_7231", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Breath of the Stars"] = new engine.RulesElement({
    name: "Breath of the Stars",
    type: "Power",
    id: "ID_FMP_POWER_7133",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7133",
    categories: ["Breath of the Stars", "ID_FMP_POWER_7133", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Brilliant Censure"] = new engine.RulesElement({
    name: "Brilliant Censure",
    type: "Power",
    id: "ID_FMP_POWER_7106",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7106",
    categories: ["Brilliant Censure", "ID_FMP_POWER_7106", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Brilliant Cloak"] = new engine.RulesElement({
    name: "Brilliant Cloak",
    type: "Power",
    id: "ID_FMP_POWER_7177",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7177",
    categories: ["Brilliant Cloak", "ID_FMP_POWER_7177", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Brilliant Halo"] = new engine.RulesElement({
    name: "Brilliant Halo",
    type: "Power",
    id: "ID_FMP_POWER_7063",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7063",
    categories: ["Brilliant Halo", "ID_FMP_POWER_7063", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Brilliant Revelation"] = new engine.RulesElement({
    name: "Brilliant Revelation",
    type: "Power",
    id: "ID_FMP_POWER_7195",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7195",
    categories: ["Brilliant Revelation", "ID_FMP_POWER_7195", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Broken Chains"] = new engine.RulesElement({
    name: "Broken Chains",
    type: "Power",
    id: "ID_FMP_POWER_8206",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8206",
    categories: ["Broken Chains", "ID_FMP_POWER_8206", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_431", "Avatar of Freedom", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Bury the Dead"] = new engine.RulesElement({
    name: "Bury the Dead",
    type: "Power",
    id: "ID_FMP_POWER_8172",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8172",
    categories: ["Bury the Dead", "ID_FMP_POWER_8172", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_429", "Slayer of the Dead", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Call Angelic Shield"] = new engine.RulesElement({
    name: "Call Angelic Shield",
    type: "Power",
    id: "ID_FMP_POWER_7218",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7218",
    categories: ["Call Angelic Shield", "ID_FMP_POWER_7218", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Call Home the Weary"] = new engine.RulesElement({
    name: "Call Home the Weary",
    type: "Power",
    id: "ID_FMP_POWER_7978",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7978",
    categories: ["Call Home the Weary", "ID_FMP_POWER_7978", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_403", "Holy Emissary", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Call of Challenge"] = new engine.RulesElement({
    name: "Call of Challenge",
    type: "Power",
    id: "ID_FMP_POWER_7248",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7248",
    categories: ["Call of Challenge", "ID_FMP_POWER_7248", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Call of the Vanguard"] = new engine.RulesElement({
    name: "Call of the Vanguard",
    type: "Power",
    id: "ID_FMP_POWER_7191",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7191",
    categories: ["Call of the Vanguard", "ID_FMP_POWER_7191", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Call to Arms"] = new engine.RulesElement({
    name: "Call to Arms",
    type: "Power",
    id: "ID_FMP_POWER_7251",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7251",
    categories: ["Call to Arms", "ID_FMP_POWER_7251", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Cascade of Fear"] = new engine.RulesElement({
    name: "Cascade of Fear",
    type: "Power",
    id: "ID_FMP_POWER_8012",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8012",
    categories: ["Cascade of Fear", "ID_FMP_POWER_8012", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_412", "Divine Hand", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Castigating Strike"] = new engine.RulesElement({
    name: "Castigating Strike",
    type: "Power",
    id: "ID_FMP_POWER_3258",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3258",
    categories: ["Castigating Strike", "ID_FMP_POWER_3258", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Cataclysmic Duel"] = new engine.RulesElement({
    name: "Cataclysmic Duel",
    type: "Power",
    id: "ID_FMP_POWER_7066",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7066",
    categories: ["Cataclysmic Duel", "ID_FMP_POWER_7066", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Celestia Endures"] = new engine.RulesElement({
    name: "Celestia Endures",
    type: "Power",
    id: "ID_FMP_POWER_7009",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7009",
    categories: ["Celestia Endures", "ID_FMP_POWER_7009", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Celestial Balance"] = new engine.RulesElement({
    name: "Celestial Balance",
    type: "Power",
    id: "ID_FMP_POWER_8220",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8220",
    categories: ["Celestial Balance", "ID_FMP_POWER_8220", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Celestial Fist"] = new engine.RulesElement({
    name: "Celestial Fist",
    type: "Power",
    id: "ID_FMP_POWER_6986",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6986",
    categories: ["Celestial Fist", "ID_FMP_POWER_6986", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Celestial Skirmish"] = new engine.RulesElement({
    name: "Celestial Skirmish",
    type: "Power",
    id: "ID_FMP_POWER_7715",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7715",
    categories: ["Celestial Skirmish", "ID_FMP_POWER_7715", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_394", "Favored Soul", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Censure Devils"] = new engine.RulesElement({
    name: "Censure Devils",
    type: "Power",
    id: "ID_FMP_POWER_8160",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8160",
    categories: ["Censure Devils", "ID_FMP_POWER_8160", "ID_FMP_CLASS_FEATURE_324", "Channel Divinity", "ID_FMP_PARAGON_PATH_426", "Knight of the Chalice"]
  });
  byID[te.id] = te;
  
  te = Power["Censuring Radiance"] = new engine.RulesElement({
    name: "Censuring Radiance",
    type: "Power",
    id: "ID_FMP_POWER_7285",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7285",
    categories: ["Censuring Radiance", "ID_FMP_POWER_7285", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Chainfire"] = new engine.RulesElement({
    name: "Chainfire",
    type: "Power",
    id: "ID_FMP_POWER_7210",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7210",
    categories: ["Chainfire", "ID_FMP_POWER_7210", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Chains of Censure"] = new engine.RulesElement({
    name: "Chains of Censure",
    type: "Power",
    id: "ID_FMP_POWER_7699",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7699",
    categories: ["Chains of Censure", "ID_FMP_POWER_7699", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Chains of Fate"] = new engine.RulesElement({
    name: "Chains of Fate",
    type: "Power",
    id: "ID_FMP_POWER_7052",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7052",
    categories: ["Chains of Fate", "ID_FMP_POWER_7052", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Chains of the Peacemaker"] = new engine.RulesElement({
    name: "Chains of the Peacemaker",
    type: "Power",
    id: "ID_FMP_POWER_7134",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7134",
    categories: ["Chains of the Peacemaker", "ID_FMP_POWER_7134", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Challenging Smite"] = new engine.RulesElement({
    name: "Challenging Smite",
    type: "Power",
    id: "ID_FMP_POWER_8110",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8110",
    categories: ["Challenging Smite", "ID_FMP_POWER_8110", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_421", "Dragonslayer", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Champion's Call"] = new engine.RulesElement({
    name: "Champion's Call",
    type: "Power",
    id: "ID_FMP_POWER_7286",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7286",
    categories: ["Champion's Call", "ID_FMP_POWER_7286", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Charge of the Conqueror"] = new engine.RulesElement({
    name: "Charge of the Conqueror",
    type: "Power",
    id: "ID_FMP_POWER_8157",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8157",
    categories: ["Charge of the Conqueror", "ID_FMP_POWER_8157", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_425", "Holy Conqueror", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Chastisement"] = new engine.RulesElement({
    name: "Chastisement",
    type: "Power",
    id: "ID_FMP_POWER_8008",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8008",
    categories: ["Chastisement", "ID_FMP_POWER_8008", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_411", "Devoted Orator", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Cloak of Courage"] = new engine.RulesElement({
    name: "Cloak of Courage",
    type: "Power",
    id: "ID_FMP_POWER_7109",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7109",
    categories: ["Cloak of Courage", "ID_FMP_POWER_7109", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Comeback Smite"] = new engine.RulesElement({
    name: "Comeback Smite",
    type: "Power",
    id: "ID_FMP_POWER_3256",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3256",
    categories: ["Comeback Smite", "ID_FMP_POWER_3256", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Compel Action"] = new engine.RulesElement({
    name: "Compel Action",
    type: "Power",
    id: "ID_FMP_POWER_7232",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7232",
    categories: ["Compel Action", "ID_FMP_POWER_7232", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Compel Obedience"] = new engine.RulesElement({
    name: "Compel Obedience",
    type: "Power",
    id: "ID_FMP_POWER_7266",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7266",
    categories: ["Compel Obedience", "ID_FMP_POWER_7266", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Compelling Blade"] = new engine.RulesElement({
    name: "Compelling Blade",
    type: "Power",
    id: "ID_FMP_POWER_7694",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7694",
    categories: ["Compelling Blade", "ID_FMP_POWER_7694", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Confounding Utterance"] = new engine.RulesElement({
    name: "Confounding Utterance",
    type: "Power",
    id: "ID_FMP_POWER_7204",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7204",
    categories: ["Confounding Utterance", "ID_FMP_POWER_7204", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Constant Shield"] = new engine.RulesElement({
    name: "Constant Shield",
    type: "Power",
    id: "ID_FMP_POWER_8150",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8150",
    categories: ["Constant Shield", "ID_FMP_POWER_8150", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_422", "Faithful Shield", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Corellon's Wrath"] = new engine.RulesElement({
    name: "Corellon's Wrath",
    type: "Power",
    id: "ID_FMP_POWER_8103",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8103",
    categories: ["Corellon's Wrath", "ID_FMP_POWER_8103", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_419", "Champion of Corellon", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Corruption Unveiled"] = new engine.RulesElement({
    name: "Corruption Unveiled",
    type: "Power",
    id: "ID_FMP_POWER_7992",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7992",
    categories: ["Corruption Unveiled", "ID_FMP_POWER_7992", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_408", "Truthseeker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Creation Secret"] = new engine.RulesElement({
    name: "Creation Secret",
    type: "Power",
    id: "ID_FMP_POWER_7445",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7445",
    categories: ["Creation Secret", "ID_FMP_POWER_7445", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Crimson Stride"] = new engine.RulesElement({
    name: "Crimson Stride",
    type: "Power",
    id: "ID_FMP_POWER_7025",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7025",
    categories: ["Crimson Stride", "ID_FMP_POWER_7025", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Crown of Light"] = new engine.RulesElement({
    name: "Crown of Light",
    type: "Power",
    id: "ID_FMP_POWER_3439",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3439",
    categories: ["Crown of Light", "ID_FMP_POWER_3439", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Crown of Retaliation"] = new engine.RulesElement({
    name: "Crown of Retaliation",
    type: "Power",
    id: "ID_FMP_POWER_7158",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7158",
    categories: ["Crown of Retaliation", "ID_FMP_POWER_7158", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Crown of Souls"] = new engine.RulesElement({
    name: "Crown of Souls",
    type: "Power",
    id: "ID_FMP_POWER_7711",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7711",
    categories: ["Crown of Souls", "ID_FMP_POWER_7711", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_393", "Dread Imperator", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Crucial Resurgence"] = new engine.RulesElement({
    name: "Crucial Resurgence",
    type: "Power",
    id: "ID_FMP_POWER_7097",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7097",
    categories: ["Crucial Resurgence", "ID_FMP_POWER_7097", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Cure Critical Wounds"] = new engine.RulesElement({
    name: "Cure Critical Wounds",
    type: "Power",
    id: "ID_FMP_POWER_666",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=666",
    categories: ["Cure Critical Wounds", "ID_FMP_POWER_666", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Cycle of Change"] = new engine.RulesElement({
    name: "Cycle of Change",
    type: "Power",
    id: "ID_FMP_POWER_8174",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8174",
    categories: ["Cycle of Change", "ID_FMP_POWER_8174", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Dance of Flame"] = new engine.RulesElement({
    name: "Dance of Flame",
    type: "Power",
    id: "ID_FMP_POWER_7001",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7001",
    categories: ["Dance of Flame", "ID_FMP_POWER_7001", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Dance of Sunrise"] = new engine.RulesElement({
    name: "Dance of Sunrise",
    type: "Power",
    id: "ID_FMP_POWER_7709",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7709",
    categories: ["Dance of Sunrise", "ID_FMP_POWER_7709", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_392", "Dervish of Dawn", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Darkness Consumes"] = new engine.RulesElement({
    name: "Darkness Consumes",
    type: "Power",
    id: "ID_FMP_POWER_8175",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8175",
    categories: ["Darkness Consumes", "ID_FMP_POWER_8175", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Daunting Blasphemy"] = new engine.RulesElement({
    name: "Daunting Blasphemy",
    type: "Power",
    id: "ID_FMP_POWER_7211",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7211",
    categories: ["Daunting Blasphemy", "ID_FMP_POWER_7211", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Day of Reckoning"] = new engine.RulesElement({
    name: "Day of Reckoning",
    type: "Power",
    id: "ID_FMP_POWER_7297",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7297",
    categories: ["Day of Reckoning", "ID_FMP_POWER_7297", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Day's First Light"] = new engine.RulesElement({
    name: "Day's First Light",
    type: "Power",
    id: "ID_FMP_POWER_6981",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6981",
    categories: ["Day's First Light", "ID_FMP_POWER_6981", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Dazzling Flare"] = new engine.RulesElement({
    name: "Dazzling Flare",
    type: "Power",
    id: "ID_FMP_POWER_7243",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7243",
    categories: ["Dazzling Flare", "ID_FMP_POWER_7243", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Deadly Calm"] = new engine.RulesElement({
    name: "Deadly Calm",
    type: "Power",
    id: "ID_FMP_POWER_7721",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7721",
    categories: ["Deadly Calm", "ID_FMP_POWER_7721", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_396", "Serene Initiate", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Deadly Doubt"] = new engine.RulesElement({
    name: "Deadly Doubt",
    type: "Power",
    id: "ID_FMP_POWER_7196",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7196",
    categories: ["Deadly Doubt", "ID_FMP_POWER_7196", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Deadly Lure"] = new engine.RulesElement({
    name: "Deadly Lure",
    type: "Power",
    id: "ID_FMP_POWER_7103",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7103",
    categories: ["Deadly Lure", "ID_FMP_POWER_7103", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Deadly Stride"] = new engine.RulesElement({
    name: "Deadly Stride",
    type: "Power",
    id: "ID_FMP_POWER_6996",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6996",
    categories: ["Deadly Stride", "ID_FMP_POWER_6996", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Death Is Nigh"] = new engine.RulesElement({
    name: "Death Is Nigh",
    type: "Power",
    id: "ID_FMP_POWER_8221",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8221",
    categories: ["Death Is Nigh", "ID_FMP_POWER_8221", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Death Knell"] = new engine.RulesElement({
    name: "Death Knell",
    type: "Power",
    id: "ID_FMP_POWER_8176",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8176",
    categories: ["Death Knell", "ID_FMP_POWER_8176", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Debilitating Smite"] = new engine.RulesElement({
    name: "Debilitating Smite",
    type: "Power",
    id: "ID_FMP_POWER_8151",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8151",
    categories: ["Debilitating Smite", "ID_FMP_POWER_8151", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_423", "Gray Guard", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Defining Cut"] = new engine.RulesElement({
    name: "Defining Cut",
    type: "Power",
    id: "ID_FMP_POWER_7720",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7720",
    categories: ["Defining Cut", "ID_FMP_POWER_7720", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_396", "Serene Initiate", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Deflect the Blast"] = new engine.RulesElement({
    name: "Deflect the Blast",
    type: "Power",
    id: "ID_FMP_POWER_8108",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8108",
    categories: ["Deflect the Blast", "ID_FMP_POWER_8108", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_421", "Dragonslayer", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Deific Imprecation"] = new engine.RulesElement({
    name: "Deific Imprecation",
    type: "Power",
    id: "ID_FMP_POWER_7200",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7200",
    categories: ["Deific Imprecation", "ID_FMP_POWER_7200", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Deluge of Blood"] = new engine.RulesElement({
    name: "Deluge of Blood",
    type: "Power",
    id: "ID_FMP_POWER_7172",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7172",
    categories: ["Deluge of Blood", "ID_FMP_POWER_7172", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Demand Respect"] = new engine.RulesElement({
    name: "Demand Respect",
    type: "Power",
    id: "ID_FMP_POWER_7287",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7287",
    categories: ["Demand Respect", "ID_FMP_POWER_7287", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Demonslayer's Resistance"] = new engine.RulesElement({
    name: "Demonslayer's Resistance",
    type: "Power",
    id: "ID_FMP_POWER_8105",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8105",
    categories: ["Demonslayer's Resistance", "ID_FMP_POWER_8105", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_420", "Demonslayer", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Demonslayer's Smite"] = new engine.RulesElement({
    name: "Demonslayer's Smite",
    type: "Power",
    id: "ID_FMP_POWER_8104",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8104",
    categories: ["Demonslayer's Smite", "ID_FMP_POWER_8104", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_420", "Demonslayer", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Denunciation"] = new engine.RulesElement({
    name: "Denunciation",
    type: "Power",
    id: "ID_FMP_POWER_7094",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7094",
    categories: ["Denunciation", "ID_FMP_POWER_7094", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Deny Defeat"] = new engine.RulesElement({
    name: "Deny Defeat",
    type: "Power",
    id: "ID_FMP_POWER_7972",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7972",
    categories: ["Deny Defeat", "ID_FMP_POWER_7972", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_401", "Battle Chaplain", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Dervish Strike"] = new engine.RulesElement({
    name: "Dervish Strike",
    type: "Power",
    id: "ID_FMP_POWER_7026",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7026",
    categories: ["Dervish Strike", "ID_FMP_POWER_7026", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Despised of the Gods"] = new engine.RulesElement({
    name: "Despised of the Gods",
    type: "Power",
    id: "ID_FMP_POWER_7226",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7226",
    categories: ["Despised of the Gods", "ID_FMP_POWER_7226", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Devastating Smite"] = new engine.RulesElement({
    name: "Devastating Smite",
    type: "Power",
    id: "ID_FMP_POWER_8153",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8153",
    categories: ["Devastating Smite", "ID_FMP_POWER_8153", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_423", "Gray Guard", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Devastating Surge"] = new engine.RulesElement({
    name: "Devastating Surge",
    type: "Power",
    id: "ID_FMP_POWER_7298",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7298",
    categories: ["Devastating Surge", "ID_FMP_POWER_7298", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Devotion"] = new engine.RulesElement({
    name: "Devotion",
    type: "Power",
    id: "ID_FMP_POWER_7272",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7272",
    categories: ["Devotion", "ID_FMP_POWER_7272", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Dire Banishment"] = new engine.RulesElement({
    name: "Dire Banishment",
    type: "Power",
    id: "ID_FMP_POWER_7201",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7201",
    categories: ["Dire Banishment", "ID_FMP_POWER_7201", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Discipline the Unruly"] = new engine.RulesElement({
    name: "Discipline the Unruly",
    type: "Power",
    id: "ID_FMP_POWER_7290",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7290",
    categories: ["Discipline the Unruly", "ID_FMP_POWER_7290", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Dismiss the Unworthy"] = new engine.RulesElement({
    name: "Dismiss the Unworthy",
    type: "Power",
    id: "ID_FMP_POWER_7010",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7010",
    categories: ["Dismiss the Unworthy", "ID_FMP_POWER_7010", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Dismissal"] = new engine.RulesElement({
    name: "Dismissal",
    type: "Power",
    id: "ID_FMP_POWER_3667",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3667",
    categories: ["Dismissal", "ID_FMP_POWER_3667", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Divide and Condemn"] = new engine.RulesElement({
    name: "Divide and Condemn",
    type: "Power",
    id: "ID_FMP_POWER_7067",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7067",
    categories: ["Divide and Condemn", "ID_FMP_POWER_7067", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Aegis"] = new engine.RulesElement({
    name: "Divine Aegis",
    type: "Power",
    id: "ID_FMP_POWER_3290",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3290",
    categories: ["Divine Aegis", "ID_FMP_POWER_3290", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Contempt"] = new engine.RulesElement({
    name: "Divine Contempt",
    type: "Power",
    id: "ID_FMP_POWER_7129",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7129",
    categories: ["Divine Contempt", "ID_FMP_POWER_7129", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Counter"] = new engine.RulesElement({
    name: "Divine Counter",
    type: "Power",
    id: "ID_FMP_POWER_3286",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3286",
    categories: ["Divine Counter", "ID_FMP_POWER_3286", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Excellence"] = new engine.RulesElement({
    name: "Divine Excellence",
    type: "Power",
    id: "ID_FMP_POWER_8192",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8192",
    categories: ["Divine Excellence", "ID_FMP_POWER_8192", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Favor"] = new engine.RulesElement({
    name: "Divine Favor",
    type: "Power",
    id: "ID_FMP_POWER_488",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=488",
    categories: ["Divine Favor", "ID_FMP_POWER_488", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Fervor"] = new engine.RulesElement({
    name: "Divine Fervor",
    type: "Power",
    id: "ID_FMP_POWER_7119",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7119",
    categories: ["Divine Fervor", "ID_FMP_POWER_7119", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Fury"] = new engine.RulesElement({
    name: "Divine Fury",
    type: "Power",
    id: "ID_FMP_POWER_7098",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7098",
    categories: ["Divine Fury", "ID_FMP_POWER_7098", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Intervention"] = new engine.RulesElement({
    name: "Divine Intervention",
    type: "Power",
    id: "ID_FMP_POWER_7124",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7124",
    categories: ["Divine Intervention", "ID_FMP_POWER_7124", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Phalanx"] = new engine.RulesElement({
    name: "Divine Phalanx",
    type: "Power",
    id: "ID_FMP_POWER_7891",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7891",
    categories: ["Divine Phalanx", "ID_FMP_POWER_7891", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Protection"] = new engine.RulesElement({
    name: "Divine Protection",
    type: "Power",
    id: "ID_FMP_POWER_7163",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7163",
    categories: ["Divine Protection", "ID_FMP_POWER_7163", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Pursuit"] = new engine.RulesElement({
    name: "Divine Pursuit",
    type: "Power",
    id: "ID_FMP_POWER_7244",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7244",
    categories: ["Divine Pursuit", "ID_FMP_POWER_7244", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Reprisal"] = new engine.RulesElement({
    name: "Divine Reprisal",
    type: "Power",
    id: "ID_FMP_POWER_3671",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3671",
    categories: ["Divine Reprisal", "ID_FMP_POWER_3671", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Skill"] = new engine.RulesElement({
    name: "Divine Skill",
    type: "Power",
    id: "ID_FMP_POWER_3466",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3466",
    categories: ["Divine Skill", "ID_FMP_POWER_3466", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Vengeance"] = new engine.RulesElement({
    name: "Divine Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_7270",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7270",
    categories: ["Divine Vengeance", "ID_FMP_POWER_7270", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Drawn by Fate"] = new engine.RulesElement({
    name: "Drawn by Fate",
    type: "Power",
    id: "ID_FMP_POWER_7059",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7059",
    categories: ["Drawn by Fate", "ID_FMP_POWER_7059", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Earth Hold"] = new engine.RulesElement({
    name: "Earth Hold",
    type: "Power",
    id: "ID_FMP_POWER_8179",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8179",
    categories: ["Earth Hold", "ID_FMP_POWER_8179", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Earthbolt"] = new engine.RulesElement({
    name: "Earthbolt",
    type: "Power",
    id: "ID_FMP_POWER_8085",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8085",
    categories: ["Earthbolt", "ID_FMP_POWER_8085", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_416", "Stonecaller", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Earthen Reversal"] = new engine.RulesElement({
    name: "Earthen Reversal",
    type: "Power",
    id: "ID_FMP_POWER_7197",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7197",
    categories: ["Earthen Reversal", "ID_FMP_POWER_7197", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Edict of Destruction"] = new engine.RulesElement({
    name: "Edict of Destruction",
    type: "Power",
    id: "ID_FMP_POWER_8106",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8106",
    categories: ["Edict of Destruction", "ID_FMP_POWER_8106", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_420", "Demonslayer", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Elegant Strike"] = new engine.RulesElement({
    name: "Elegant Strike",
    type: "Power",
    id: "ID_FMP_POWER_8101",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8101",
    categories: ["Elegant Strike", "ID_FMP_POWER_8101", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_419", "Champion of Corellon", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Elevate the Spirit"] = new engine.RulesElement({
    name: "Elevate the Spirit",
    type: "Power",
    id: "ID_FMP_POWER_8207",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8207",
    categories: ["Elevate the Spirit", "ID_FMP_POWER_8207", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_432", "Avatar of Hope", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Encouraging Chant"] = new engine.RulesElement({
    name: "Encouraging Chant",
    type: "Power",
    id: "ID_FMP_POWER_7164",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7164",
    categories: ["Encouraging Chant", "ID_FMP_POWER_7164", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["End to Strife"] = new engine.RulesElement({
    name: "End to Strife",
    type: "Power",
    id: "ID_FMP_POWER_7982",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7982",
    categories: ["End to Strife", "ID_FMP_POWER_7982", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_404", "Messenger of Peace", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Enduring Spirit"] = new engine.RulesElement({
    name: "Enduring Spirit",
    type: "Power",
    id: "ID_FMP_POWER_6992",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6992",
    categories: ["Enduring Spirit", "ID_FMP_POWER_6992", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Enforced Surrender"] = new engine.RulesElement({
    name: "Enforced Surrender",
    type: "Power",
    id: "ID_FMP_POWER_7135",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7135",
    categories: ["Enforced Surrender", "ID_FMP_POWER_7135", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Ensnaring Smite"] = new engine.RulesElement({
    name: "Ensnaring Smite",
    type: "Power",
    id: "ID_FMP_POWER_8161",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8161",
    categories: ["Ensnaring Smite", "ID_FMP_POWER_8161", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_426", "Knight of the Chalice", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Enunciation"] = new engine.RulesElement({
    name: "Enunciation",
    type: "Power",
    id: "ID_FMP_POWER_7192",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7192",
    categories: ["Enunciation", "ID_FMP_POWER_7192", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Ever Onward"] = new engine.RulesElement({
    name: "Ever Onward",
    type: "Power",
    id: "ID_FMP_POWER_7019",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7019",
    categories: ["Ever Onward", "ID_FMP_POWER_7019", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Every Wrong Righted"] = new engine.RulesElement({
    name: "Every Wrong Righted",
    type: "Power",
    id: "ID_FMP_POWER_7991",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7991",
    categories: ["Every Wrong Righted", "ID_FMP_POWER_7991", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_407", "Stone Keeper", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Exacting Utterance"] = new engine.RulesElement({
    name: "Exacting Utterance",
    type: "Power",
    id: "ID_FMP_POWER_7073",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7073",
    categories: ["Exacting Utterance", "ID_FMP_POWER_7073", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Exaltation"] = new engine.RulesElement({
    name: "Exaltation",
    type: "Power",
    id: "ID_FMP_POWER_7899",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7899",
    categories: ["Exaltation", "ID_FMP_POWER_7899", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_399", "Anointed Champion", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Excoriating Call"] = new engine.RulesElement({
    name: "Excoriating Call",
    type: "Power",
    id: "ID_FMP_POWER_7011",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7011",
    categories: ["Excoriating Call", "ID_FMP_POWER_7011", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Excoriating Challenge"] = new engine.RulesElement({
    name: "Excoriating Challenge",
    type: "Power",
    id: "ID_FMP_POWER_7053",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7053",
    categories: ["Excoriating Challenge", "ID_FMP_POWER_7053", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Execration"] = new engine.RulesElement({
    name: "Execration",
    type: "Power",
    id: "ID_FMP_POWER_7159",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7159",
    categories: ["Execration", "ID_FMP_POWER_7159", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Eye for an Eye"] = new engine.RulesElement({
    name: "Eye for an Eye",
    type: "Power",
    id: "ID_FMP_POWER_7267",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7267",
    categories: ["Eye for an Eye", "ID_FMP_POWER_7267", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Eye of the Hurricane"] = new engine.RulesElement({
    name: "Eye of the Hurricane",
    type: "Power",
    id: "ID_FMP_POWER_7068",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7068",
    categories: ["Eye of the Hurricane", "ID_FMP_POWER_7068", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Eye of the Sun"] = new engine.RulesElement({
    name: "Eye of the Sun",
    type: "Power",
    id: "ID_FMP_POWER_7227",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7227",
    categories: ["Eye of the Sun", "ID_FMP_POWER_7227", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Failure is No Option"] = new engine.RulesElement({
    name: "Failure is No Option",
    type: "Power",
    id: "ID_FMP_POWER_7283",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7283",
    categories: ["Failure is No Option", "ID_FMP_POWER_7283", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Fanatical Flurry"] = new engine.RulesElement({
    name: "Fanatical Flurry",
    type: "Power",
    id: "ID_FMP_POWER_7703",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7703",
    categories: ["Fanatical Flurry", "ID_FMP_POWER_7703", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_391", "Ardent Champion", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Fate Rolls On"] = new engine.RulesElement({
    name: "Fate Rolls On",
    type: "Power",
    id: "ID_FMP_POWER_8180",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8180",
    categories: ["Fate Rolls On", "ID_FMP_POWER_8180", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Fateful Foresight"] = new engine.RulesElement({
    name: "Fateful Foresight",
    type: "Power",
    id: "ID_FMP_POWER_7221",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7221",
    categories: ["Fateful Foresight", "ID_FMP_POWER_7221", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Fear Not"] = new engine.RulesElement({
    name: "Fear Not",
    type: "Power",
    id: "ID_FMP_POWER_3285",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3285",
    categories: ["Fear Not", "ID_FMP_POWER_3285", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Fearsome Fury"] = new engine.RulesElement({
    name: "Fearsome Fury",
    type: "Power",
    id: "ID_FMP_POWER_7054",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7054",
    categories: ["Fearsome Fury", "ID_FMP_POWER_7054", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Fervent Strike"] = new engine.RulesElement({
    name: "Fervent Strike",
    type: "Power",
    id: "ID_FMP_POWER_7268",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7268",
    categories: ["Fervent Strike", "ID_FMP_POWER_7268", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Fetters of Darkness"] = new engine.RulesElement({
    name: "Fetters of Darkness",
    type: "Power",
    id: "ID_FMP_POWER_7222",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7222",
    categories: ["Fetters of Darkness", "ID_FMP_POWER_7222", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Fiery Companions"] = new engine.RulesElement({
    name: "Fiery Companions",
    type: "Power",
    id: "ID_FMP_POWER_8090",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8090",
    categories: ["Fiery Companions", "ID_FMP_POWER_8090", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_417", "Theurge of the Compact", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Fiery Glance"] = new engine.RulesElement({
    name: "Fiery Glance",
    type: "Power",
    id: "ID_FMP_POWER_8091",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8091",
    categories: ["Fiery Glance", "ID_FMP_POWER_8091", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_418", "Vessel of Ichor", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Final Rebuke"] = new engine.RulesElement({
    name: "Final Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_7260",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7260",
    categories: ["Final Rebuke", "ID_FMP_POWER_7260", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Final Reproach"] = new engine.RulesElement({
    name: "Final Reproach",
    type: "Power",
    id: "ID_FMP_POWER_7223",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7223",
    categories: ["Final Reproach", "ID_FMP_POWER_7223", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Flame Unquenchable"] = new engine.RulesElement({
    name: "Flame Unquenchable",
    type: "Power",
    id: "ID_FMP_POWER_7047",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7047",
    categories: ["Flame Unquenchable", "ID_FMP_POWER_7047", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Flames of Devotion"] = new engine.RulesElement({
    name: "Flames of Devotion",
    type: "Power",
    id: "ID_FMP_POWER_3278",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3278",
    categories: ["Flames of Devotion", "ID_FMP_POWER_3278", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Flames of Torment"] = new engine.RulesElement({
    name: "Flames of Torment",
    type: "Power",
    id: "ID_FMP_POWER_7125",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7125",
    categories: ["Flames of Torment", "ID_FMP_POWER_7125", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Font of Healing"] = new engine.RulesElement({
    name: "Font of Healing",
    type: "Power",
    id: "ID_FMP_POWER_3291",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3291",
    categories: ["Font of Healing", "ID_FMP_POWER_3291", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Font of Life"] = new engine.RulesElement({
    name: "Font of Life",
    type: "Power",
    id: "ID_FMP_POWER_8209",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8209",
    categories: ["Font of Life", "ID_FMP_POWER_8209", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_434", "Avatar of Life", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Font of Tears"] = new engine.RulesElement({
    name: "Font of Tears",
    type: "Power",
    id: "ID_FMP_POWER_7077",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7077",
    categories: ["Font of Tears", "ID_FMP_POWER_7077", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Force of Arms"] = new engine.RulesElement({
    name: "Force of Arms",
    type: "Power",
    id: "ID_FMP_POWER_3254",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3254",
    categories: ["Force of Arms", "ID_FMP_POWER_3254", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Forced Submission"] = new engine.RulesElement({
    name: "Forced Submission",
    type: "Power",
    id: "ID_FMP_POWER_7214",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7214",
    categories: ["Forced Submission", "ID_FMP_POWER_7214", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_22", "Reliable", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Forceful Call"] = new engine.RulesElement({
    name: "Forceful Call",
    type: "Power",
    id: "ID_FMP_POWER_7028",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7028",
    categories: ["Forceful Call", "ID_FMP_POWER_7028", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Forceful Denunciation"] = new engine.RulesElement({
    name: "Forceful Denunciation",
    type: "Power",
    id: "ID_FMP_POWER_7154",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7154",
    categories: ["Forceful Denunciation", "ID_FMP_POWER_7154", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Fortifying Chant"] = new engine.RulesElement({
    name: "Fortifying Chant",
    type: "Power",
    id: "ID_FMP_POWER_7698",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7698",
    categories: ["Fortifying Chant", "ID_FMP_POWER_7698", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Freedom Is Life"] = new engine.RulesElement({
    name: "Freedom Is Life",
    type: "Power",
    id: "ID_FMP_POWER_8212",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8212",
    categories: ["Freedom Is Life", "ID_FMP_POWER_8212", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Fury's Advance"] = new engine.RulesElement({
    name: "Fury's Advance",
    type: "Power",
    id: "ID_FMP_POWER_6997",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6997",
    categories: ["Fury's Advance", "ID_FMP_POWER_6997", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Gambler's Flourish"] = new engine.RulesElement({
    name: "Gambler's Flourish",
    type: "Power",
    id: "ID_FMP_POWER_7728",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7728",
    categories: ["Gambler's Flourish", "ID_FMP_POWER_7728", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_398", "Weapon of Fortune", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Gather the Storm"] = new engine.RulesElement({
    name: "Gather the Storm",
    type: "Power",
    id: "ID_FMP_POWER_8210",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8210",
    categories: ["Gather the Storm", "ID_FMP_POWER_8210", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_435", "Avatar of Storm", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Ghostly Chains"] = new engine.RulesElement({
    name: "Ghostly Chains",
    type: "Power",
    id: "ID_FMP_POWER_7029",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7029",
    categories: ["Ghostly Chains", "ID_FMP_POWER_7029", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Glorious Charge"] = new engine.RulesElement({
    name: "Glorious Charge",
    type: "Power",
    id: "ID_FMP_POWER_3261",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3261",
    categories: ["Glorious Charge", "ID_FMP_POWER_3261", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Glyph of Agony"] = new engine.RulesElement({
    name: "Glyph of Agony",
    type: "Power",
    id: "ID_FMP_POWER_7015",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7015",
    categories: ["Glyph of Agony", "ID_FMP_POWER_7015", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Glyph of Warning"] = new engine.RulesElement({
    name: "Glyph of Warning",
    type: "Power",
    id: "ID_FMP_POWER_8016",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8016",
    categories: ["Glyph of Warning", "ID_FMP_POWER_8016", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_414", "Keeper of the Nine", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Godsight"] = new engine.RulesElement({
    name: "Godsight",
    type: "Power",
    id: "ID_FMP_POWER_7100",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7100",
    categories: ["Godsight", "ID_FMP_POWER_7100", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Graceful Step"] = new engine.RulesElement({
    name: "Graceful Step",
    type: "Power",
    id: "ID_FMP_POWER_8102",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8102",
    categories: ["Graceful Step", "ID_FMP_POWER_8102", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_419", "Champion of Corellon", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Grasp of the Wild"] = new engine.RulesElement({
    name: "Grasp of the Wild",
    type: "Power",
    id: "ID_FMP_POWER_8203",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8203",
    categories: ["Grasp of the Wild", "ID_FMP_POWER_8203", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Ground the Foe"] = new engine.RulesElement({
    name: "Ground the Foe",
    type: "Power",
    id: "ID_FMP_POWER_8109",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8109",
    categories: ["Ground the Foe", "ID_FMP_POWER_8109", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_421", "Dragonslayer", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian Angel"] = new engine.RulesElement({
    name: "Guardian Angel",
    type: "Power",
    id: "ID_FMP_POWER_7178",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7178",
    categories: ["Guardian Angel", "ID_FMP_POWER_7178", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian Light"] = new engine.RulesElement({
    name: "Guardian Light",
    type: "Power",
    id: "ID_FMP_POWER_3247",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3247",
    categories: ["Guardian Light", "ID_FMP_POWER_3247", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Guiding Syllable"] = new engine.RulesElement({
    name: "Guiding Syllable",
    type: "Power",
    id: "ID_FMP_POWER_8083",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8083",
    categories: ["Guiding Syllable", "ID_FMP_POWER_8083", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_415", "Speaker of the Word", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Guiding Verse"] = new engine.RulesElement({
    name: "Guiding Verse",
    type: "Power",
    id: "ID_FMP_POWER_3752",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3752",
    categories: ["Guiding Verse", "ID_FMP_POWER_3752", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Hall of Thunderous Battle"] = new engine.RulesElement({
    name: "Hall of Thunderous Battle",
    type: "Power",
    id: "ID_FMP_POWER_7187",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7187",
    categories: ["Hall of Thunderous Battle", "ID_FMP_POWER_7187", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Hallowed Advance"] = new engine.RulesElement({
    name: "Hallowed Advance",
    type: "Power",
    id: "ID_FMP_POWER_7089",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7089",
    categories: ["Hallowed Advance", "ID_FMP_POWER_7089", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Halo of Consequence"] = new engine.RulesElement({
    name: "Halo of Consequence",
    type: "Power",
    id: "ID_FMP_POWER_7090",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7090",
    categories: ["Halo of Consequence", "ID_FMP_POWER_7090", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_22", "Reliable", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Halo of Peace"] = new engine.RulesElement({
    name: "Halo of Peace",
    type: "Power",
    id: "ID_FMP_POWER_7892",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7892",
    categories: ["Halo of Peace", "ID_FMP_POWER_7892", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Hammer of the Gods"] = new engine.RulesElement({
    name: "Hammer of the Gods",
    type: "Power",
    id: "ID_FMP_POWER_7085",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7085",
    categories: ["Hammer of the Gods", "ID_FMP_POWER_7085", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Hammer Throw"] = new engine.RulesElement({
    name: "Hammer Throw",
    type: "Power",
    id: "ID_FMP_POWER_8154",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8154",
    categories: ["Hammer Throw", "ID_FMP_POWER_8154", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_424", "Hammer of Moradin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Hand of Radiance"] = new engine.RulesElement({
    name: "Hand of Radiance",
    type: "Power",
    id: "ID_FMP_POWER_7151",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7151",
    categories: ["Hand of Radiance", "ID_FMP_POWER_7151", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Hand of Silver"] = new engine.RulesElement({
    name: "Hand of Silver",
    type: "Power",
    id: "ID_FMP_POWER_7064",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7064",
    categories: ["Hand of Silver", "ID_FMP_POWER_7064", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Harsh Lesson"] = new engine.RulesElement({
    name: "Harsh Lesson",
    type: "Power",
    id: "ID_FMP_POWER_7007",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7007",
    categories: ["Harsh Lesson", "ID_FMP_POWER_7007", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Harsh Verdict"] = new engine.RulesElement({
    name: "Harsh Verdict",
    type: "Power",
    id: "ID_FMP_POWER_7291",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7291",
    categories: ["Harsh Verdict", "ID_FMP_POWER_7291", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Harvest the Craven"] = new engine.RulesElement({
    name: "Harvest the Craven",
    type: "Power",
    id: "ID_FMP_POWER_8010",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8010",
    categories: ["Harvest the Craven", "ID_FMP_POWER_8010", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_412", "Divine Hand", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Heal"] = new engine.RulesElement({
    name: "Heal",
    type: "Power",
    id: "ID_FMP_POWER_7117",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7117",
    categories: ["Heal", "ID_FMP_POWER_7117", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Healer's Balm"] = new engine.RulesElement({
    name: "Healer's Balm",
    type: "Power",
    id: "ID_FMP_POWER_7101",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7101",
    categories: ["Healer's Balm", "ID_FMP_POWER_7101", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Healer's Mercy"] = new engine.RulesElement({
    name: "Healer's Mercy",
    type: "Power",
    id: "ID_FMP_POWER_7885",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7885",
    categories: ["Healer's Mercy", "ID_FMP_POWER_7885", "ID_FMP_CLASS_FEATURE_324", "Channel Divinity", "ID_FMP_CLASS_2", "Cleric"]
  });
  byID[te.id] = te;
  
  te = Power["Healer's Reproof"] = new engine.RulesElement({
    name: "Healer's Reproof",
    type: "Power",
    id: "ID_FMP_POWER_7130",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7130",
    categories: ["Healer's Reproof", "ID_FMP_POWER_7130", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Heavenly Courage"] = new engine.RulesElement({
    name: "Heavenly Courage",
    type: "Power",
    id: "ID_FMP_POWER_8162",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8162",
    categories: ["Heavenly Courage", "ID_FMP_POWER_8162", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_426", "Knight of the Chalice", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Heaven's Edge"] = new engine.RulesElement({
    name: "Heaven's Edge",
    type: "Power",
    id: "ID_FMP_POWER_7722",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7722",
    categories: ["Heaven's Edge", "ID_FMP_POWER_7722", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_396", "Serene Initiate", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Heedless Fury"] = new engine.RulesElement({
    name: "Heedless Fury",
    type: "Power",
    id: "ID_FMP_POWER_8099",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8099",
    categories: ["Heedless Fury", "ID_FMP_POWER_8099", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Hellfire Unleashed"] = new engine.RulesElement({
    name: "Hellfire Unleashed",
    type: "Power",
    id: "ID_FMP_POWER_8088",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8088",
    categories: ["Hellfire Unleashed", "ID_FMP_POWER_8088", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_417", "Theurge of the Compact", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Herald of God"] = new engine.RulesElement({
    name: "Herald of God",
    type: "Power",
    id: "ID_FMP_POWER_7219",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7219",
    categories: ["Herald of God", "ID_FMP_POWER_7219", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Herald the Storm Unleashed"] = new engine.RulesElement({
    name: "Herald the Storm Unleashed",
    type: "Power",
    id: "ID_FMP_POWER_7188",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7188",
    categories: ["Herald the Storm Unleashed", "ID_FMP_POWER_7188", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Hidden Strength"] = new engine.RulesElement({
    name: "Hidden Strength",
    type: "Power",
    id: "ID_FMP_POWER_7724",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7724",
    categories: ["Hidden Strength", "ID_FMP_POWER_7724", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_397", "Watchful Shepherd", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["High Arcana"] = new engine.RulesElement({
    name: "High Arcana",
    type: "Power",
    id: "ID_FMP_POWER_3572",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3572",
    categories: ["High Arcana", "ID_FMP_POWER_3572", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Higher Cause"] = new engine.RulesElement({
    name: "Higher Cause",
    type: "Power",
    id: "ID_FMP_POWER_7273",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7273",
    categories: ["Higher Cause", "ID_FMP_POWER_7273", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Hit the Weak Spot"] = new engine.RulesElement({
    name: "Hit the Weak Spot",
    type: "Power",
    id: "ID_FMP_POWER_8013",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8013",
    categories: ["Hit the Weak Spot", "ID_FMP_POWER_8013", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_413", "Divine Philosopher", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Hold Fast"] = new engine.RulesElement({
    name: "Hold Fast",
    type: "Power",
    id: "ID_FMP_POWER_7252",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7252",
    categories: ["Hold Fast", "ID_FMP_POWER_7252", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Hold Foe"] = new engine.RulesElement({
    name: "Hold Foe",
    type: "Power",
    id: "ID_FMP_POWER_3634",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3634",
    categories: ["Hold Foe", "ID_FMP_POWER_3634", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Holy Ardor"] = new engine.RulesElement({
    name: "Holy Ardor",
    type: "Power",
    id: "ID_FMP_POWER_7016",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7016",
    categories: ["Holy Ardor", "ID_FMP_POWER_7016", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Holy Celerity"] = new engine.RulesElement({
    name: "Holy Celerity",
    type: "Power",
    id: "ID_FMP_POWER_3681",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3681",
    categories: ["Holy Celerity", "ID_FMP_POWER_3681", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Holy Vestments"] = new engine.RulesElement({
    name: "Holy Vestments",
    type: "Power",
    id: "ID_FMP_POWER_7081",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7081",
    categories: ["Holy Vestments", "ID_FMP_POWER_7081", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Holy Vigor"] = new engine.RulesElement({
    name: "Holy Vigor",
    type: "Power",
    id: "ID_FMP_POWER_8092",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8092",
    categories: ["Holy Vigor", "ID_FMP_POWER_8092", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_418", "Vessel of Ichor", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Holy Wings"] = new engine.RulesElement({
    name: "Holy Wings",
    type: "Power",
    id: "ID_FMP_POWER_3292",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3292",
    categories: ["Holy Wings", "ID_FMP_POWER_3292", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Hope Remains"] = new engine.RulesElement({
    name: "Hope Remains",
    type: "Power",
    id: "ID_FMP_POWER_8182",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8182",
    categories: ["Hope Remains", "ID_FMP_POWER_8182", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Horns of the Moon"] = new engine.RulesElement({
    name: "Horns of the Moon",
    type: "Power",
    id: "ID_FMP_POWER_8222",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8222",
    categories: ["Horns of the Moon", "ID_FMP_POWER_8222", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Hymn of Resurgence"] = new engine.RulesElement({
    name: "Hymn of Resurgence",
    type: "Power",
    id: "ID_FMP_POWER_7086",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7086",
    categories: ["Hymn of Resurgence", "ID_FMP_POWER_7086", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Immediate Justice"] = new engine.RulesElement({
    name: "Immediate Justice",
    type: "Power",
    id: "ID_FMP_POWER_7446",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7446",
    categories: ["Immediate Justice", "ID_FMP_POWER_7446", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Imminent Luck"] = new engine.RulesElement({
    name: "Imminent Luck",
    type: "Power",
    id: "ID_FMP_POWER_8186",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8186",
    categories: ["Imminent Luck", "ID_FMP_POWER_8186", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Impaling Summons"] = new engine.RulesElement({
    name: "Impaling Summons",
    type: "Power",
    id: "ID_FMP_POWER_7069",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7069",
    categories: ["Impaling Summons", "ID_FMP_POWER_7069", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Imperator's Judgment"] = new engine.RulesElement({
    name: "Imperator's Judgment",
    type: "Power",
    id: "ID_FMP_POWER_7712",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7712",
    categories: ["Imperator's Judgment", "ID_FMP_POWER_7712", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_393", "Dread Imperator", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Inescapable Justice"] = new engine.RulesElement({
    name: "Inescapable Justice",
    type: "Power",
    id: "ID_FMP_POWER_7030",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7030",
    categories: ["Inescapable Justice", "ID_FMP_POWER_7030", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Inevitable Death"] = new engine.RulesElement({
    name: "Inevitable Death",
    type: "Power",
    id: "ID_FMP_POWER_8205",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8205",
    categories: ["Inevitable Death", "ID_FMP_POWER_8205", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_430", "Avatar of Death", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Inexorable Summons"] = new engine.RulesElement({
    name: "Inexorable Summons",
    type: "Power",
    id: "ID_FMP_POWER_7012",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7012",
    categories: ["Inexorable Summons", "ID_FMP_POWER_7012", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Infernal Guardian"] = new engine.RulesElement({
    name: "Infernal Guardian",
    type: "Power",
    id: "ID_FMP_POWER_8089",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8089",
    categories: ["Infernal Guardian", "ID_FMP_POWER_8089", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_417", "Theurge of the Compact", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Inspiring Hymn"] = new engine.RulesElement({
    name: "Inspiring Hymn",
    type: "Power",
    id: "ID_FMP_POWER_7284",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7284",
    categories: ["Inspiring Hymn", "ID_FMP_POWER_7284", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Intervening Blades"] = new engine.RulesElement({
    name: "Intervening Blades",
    type: "Power",
    id: "ID_FMP_POWER_6998",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6998",
    categories: ["Intervening Blades", "ID_FMP_POWER_6998", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Invocation of Ice and Fire"] = new engine.RulesElement({
    name: "Invocation of Ice and Fire",
    type: "Power",
    id: "ID_FMP_POWER_7160",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7160",
    categories: ["Invocation of Ice and Fire", "ID_FMP_POWER_7160", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Invoke Sight"] = new engine.RulesElement({
    name: "Invoke Sight",
    type: "Power",
    id: "ID_FMP_POWER_7220",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7220",
    categories: ["Invoke Sight", "ID_FMP_POWER_7220", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Invoked Devastation"] = new engine.RulesElement({
    name: "Invoked Devastation",
    type: "Power",
    id: "ID_FMP_POWER_7236",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7236",
    categories: ["Invoked Devastation", "ID_FMP_POWER_7236", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Iron to Glass"] = new engine.RulesElement({
    name: "Iron to Glass",
    type: "Power",
    id: "ID_FMP_POWER_7091",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7091",
    categories: ["Iron to Glass", "ID_FMP_POWER_7091", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Irresistible Ardor"] = new engine.RulesElement({
    name: "Irresistible Ardor",
    type: "Power",
    id: "ID_FMP_POWER_7706",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7706",
    categories: ["Irresistible Ardor", "ID_FMP_POWER_7706", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_391", "Ardent Champion", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Ivory Rampart"] = new engine.RulesElement({
    name: "Ivory Rampart",
    type: "Power",
    id: "ID_FMP_POWER_7107",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7107",
    categories: ["Ivory Rampart", "ID_FMP_POWER_7107", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Keeper's Mantle"] = new engine.RulesElement({
    name: "Keeper's Mantle",
    type: "Power",
    id: "ID_FMP_POWER_8081",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8081",
    categories: ["Keeper's Mantle", "ID_FMP_POWER_8081", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_414", "Keeper of the Nine", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Knightly Intercession"] = new engine.RulesElement({
    name: "Knightly Intercession",
    type: "Power",
    id: "ID_FMP_POWER_7261",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7261",
    categories: ["Knightly Intercession", "ID_FMP_POWER_7261", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Knight's Defiance"] = new engine.RulesElement({
    name: "Knight's Defiance",
    type: "Power",
    id: "ID_FMP_POWER_3729",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3729",
    categories: ["Knight's Defiance", "ID_FMP_POWER_3729", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Knives of the Soul"] = new engine.RulesElement({
    name: "Knives of the Soul",
    type: "Power",
    id: "ID_FMP_POWER_7168",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7168",
    categories: ["Knives of the Soul", "ID_FMP_POWER_7168", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Know Weakness"] = new engine.RulesElement({
    name: "Know Weakness",
    type: "Power",
    id: "ID_FMP_POWER_7165",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7165",
    categories: ["Know Weakness", "ID_FMP_POWER_7165", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Lamentation of the Wicked"] = new engine.RulesElement({
    name: "Lamentation of the Wicked",
    type: "Power",
    id: "ID_FMP_POWER_7173",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7173",
    categories: ["Lamentation of the Wicked", "ID_FMP_POWER_7173", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Leading Step"] = new engine.RulesElement({
    name: "Leading Step",
    type: "Power",
    id: "ID_FMP_POWER_7020",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7020",
    categories: ["Leading Step", "ID_FMP_POWER_7020", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Leading Strike"] = new engine.RulesElement({
    name: "Leading Strike",
    type: "Power",
    id: "ID_FMP_POWER_569",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=569",
    categories: ["Leading Strike", "ID_FMP_POWER_569", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Legion Rebuke"] = new engine.RulesElement({
    name: "Legion Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_8007",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8007",
    categories: ["Legion Rebuke", "ID_FMP_POWER_8007", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_411", "Devoted Orator", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Lethal Intercession"] = new engine.RulesElement({
    name: "Lethal Intercession",
    type: "Power",
    id: "ID_FMP_POWER_7041",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7041",
    categories: ["Lethal Intercession", "ID_FMP_POWER_7041", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Liberation"] = new engine.RulesElement({
    name: "Liberation",
    type: "Power",
    id: "ID_FMP_POWER_7274",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7274",
    categories: ["Liberation", "ID_FMP_POWER_7274", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Life and Death Entwined"] = new engine.RulesElement({
    name: "Life and Death Entwined",
    type: "Power",
    id: "ID_FMP_POWER_8171",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8171",
    categories: ["Life and Death Entwined", "ID_FMP_POWER_8171", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_429", "Slayer of the Dead", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Life Lanterns"] = new engine.RulesElement({
    name: "Life Lanterns",
    type: "Power",
    id: "ID_FMP_POWER_7126",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7126",
    categories: ["Life Lanterns", "ID_FMP_POWER_7126", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Life Transference"] = new engine.RulesElement({
    name: "Life Transference",
    type: "Power",
    id: "ID_FMP_POWER_7082",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7082",
    categories: ["Life Transference", "ID_FMP_POWER_7082", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Light of Arvandor"] = new engine.RulesElement({
    name: "Light of Arvandor",
    type: "Power",
    id: "ID_FMP_POWER_7087",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7087",
    categories: ["Light of Arvandor", "ID_FMP_POWER_7087", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Light of the Living"] = new engine.RulesElement({
    name: "Light of the Living",
    type: "Power",
    id: "ID_FMP_POWER_8170",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8170",
    categories: ["Light of the Living", "ID_FMP_POWER_8170", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_429", "Slayer of the Dead", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Light of Truth"] = new engine.RulesElement({
    name: "Light of Truth",
    type: "Power",
    id: "ID_FMP_POWER_3629",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3629",
    categories: ["Light of Truth", "ID_FMP_POWER_3629", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning's Revelation"] = new engine.RulesElement({
    name: "Lightning's Revelation",
    type: "Power",
    id: "ID_FMP_POWER_7155",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7155",
    categories: ["Lightning's Revelation", "ID_FMP_POWER_7155", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Lore of Shom"] = new engine.RulesElement({
    name: "Lore of Shom",
    type: "Power",
    id: "ID_FMP_POWER_7166",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7166",
    categories: ["Lore of Shom", "ID_FMP_POWER_7166", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Loving Sacrifice"] = new engine.RulesElement({
    name: "Loving Sacrifice",
    type: "Power",
    id: "ID_FMP_POWER_8185",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8185",
    categories: ["Loving Sacrifice", "ID_FMP_POWER_8185", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Loyal Sanction"] = new engine.RulesElement({
    name: "Loyal Sanction",
    type: "Power",
    id: "ID_FMP_POWER_6993",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6993",
    categories: ["Loyal Sanction", "ID_FMP_POWER_6993", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Luck, Not Skill"] = new engine.RulesElement({
    name: "Luck, Not Skill",
    type: "Power",
    id: "ID_FMP_POWER_7726",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7726",
    categories: ["Luck, Not Skill", "ID_FMP_POWER_7726", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_398", "Weapon of Fortune", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Majestic Halo"] = new engine.RulesElement({
    name: "Majestic Halo",
    type: "Power",
    id: "ID_FMP_POWER_3271",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3271",
    categories: ["Majestic Halo", "ID_FMP_POWER_3271", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Malediction"] = new engine.RulesElement({
    name: "Malediction",
    type: "Power",
    id: "ID_FMP_POWER_3624",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3624",
    categories: ["Malediction", "ID_FMP_POWER_3624", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Malediction of Blindness"] = new engine.RulesElement({
    name: "Malediction of Blindness",
    type: "Power",
    id: "ID_FMP_POWER_7174",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7174",
    categories: ["Malediction of Blindness", "ID_FMP_POWER_7174", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Malediction of Rigidity"] = new engine.RulesElement({
    name: "Malediction of Rigidity",
    type: "Power",
    id: "ID_FMP_POWER_7189",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7189",
    categories: ["Malediction of Rigidity", "ID_FMP_POWER_7189", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Malediction of the Eternal Pyre"] = new engine.RulesElement({
    name: "Malediction of the Eternal Pyre",
    type: "Power",
    id: "ID_FMP_POWER_7237",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7237",
    categories: ["Malediction of the Eternal Pyre", "ID_FMP_POWER_7237", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Maledictor's Doom"] = new engine.RulesElement({
    name: "Maledictor's Doom",
    type: "Power",
    id: "ID_FMP_POWER_7150",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7150",
    categories: ["Maledictor's Doom", "ID_FMP_POWER_7150", "ID_FMP_CLASS_FEATURE_324", "Channel Divinity", "ID_FMP_CLASS_127", "Invoker"]
  });
  byID[te.id] = te;
  
  te = Power["Mantle of the Astral Champion"] = new engine.RulesElement({
    name: "Mantle of the Astral Champion",
    type: "Power",
    id: "ID_FMP_POWER_7060",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7060",
    categories: ["Mantle of the Astral Champion", "ID_FMP_POWER_7060", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Mantle of the Infidel"] = new engine.RulesElement({
    name: "Mantle of the Infidel",
    type: "Power",
    id: "ID_FMP_POWER_7152",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7152",
    categories: ["Mantle of the Infidel", "ID_FMP_POWER_7152", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["March of Doom"] = new engine.RulesElement({
    name: "March of Doom",
    type: "Power",
    id: "ID_FMP_POWER_7070",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7070",
    categories: ["March of Doom", "ID_FMP_POWER_7070", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Mark of Forbearance"] = new engine.RulesElement({
    name: "Mark of Forbearance",
    type: "Power",
    id: "ID_FMP_POWER_7215",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7215",
    categories: ["Mark of Forbearance", "ID_FMP_POWER_7215", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Mark of Terror"] = new engine.RulesElement({
    name: "Mark of Terror",
    type: "Power",
    id: "ID_FMP_POWER_944",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=944",
    categories: ["Mark of Terror", "ID_FMP_POWER_944", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Mark of Weakness"] = new engine.RulesElement({
    name: "Mark of Weakness",
    type: "Power",
    id: "ID_FMP_POWER_3281",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3281",
    categories: ["Mark of Weakness", "ID_FMP_POWER_3281", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Martyr's Cry"] = new engine.RulesElement({
    name: "Martyr's Cry",
    type: "Power",
    id: "ID_FMP_POWER_7975",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7975",
    categories: ["Martyr's Cry", "ID_FMP_POWER_7975", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_402", "Compassionate Healer", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Mass Cure Serious Wounds"] = new engine.RulesElement({
    name: "Mass Cure Serious Wounds",
    type: "Power",
    id: "ID_FMP_POWER_153",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=153",
    categories: ["Mass Cure Serious Wounds", "ID_FMP_POWER_153", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Master of Tyranny"] = new engine.RulesElement({
    name: "Master of Tyranny",
    type: "Power",
    id: "ID_FMP_POWER_8199",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8199",
    categories: ["Master of Tyranny", "ID_FMP_POWER_8199", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Menacing Presence"] = new engine.RulesElement({
    name: "Menacing Presence",
    type: "Power",
    id: "ID_FMP_POWER_7002",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7002",
    categories: ["Menacing Presence", "ID_FMP_POWER_7002", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Merciless Nemesis"] = new engine.RulesElement({
    name: "Merciless Nemesis",
    type: "Power",
    id: "ID_FMP_POWER_7071",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7071",
    categories: ["Merciless Nemesis", "ID_FMP_POWER_7071", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Message of War"] = new engine.RulesElement({
    name: "Message of War",
    type: "Power",
    id: "ID_FMP_POWER_7979",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7979",
    categories: ["Message of War", "ID_FMP_POWER_7979", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_403", "Holy Emissary", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Miraculous Fortune"] = new engine.RulesElement({
    name: "Miraculous Fortune",
    type: "Power",
    id: "ID_FMP_POWER_7167",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7167",
    categories: ["Miraculous Fortune", "ID_FMP_POWER_7167", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Miraculous Grace"] = new engine.RulesElement({
    name: "Miraculous Grace",
    type: "Power",
    id: "ID_FMP_POWER_7984",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7984",
    categories: ["Miraculous Grace", "ID_FMP_POWER_7984", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_405", "Miracle Worker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Miraculous Intervention"] = new engine.RulesElement({
    name: "Miraculous Intervention",
    type: "Power",
    id: "ID_FMP_POWER_7893",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7893",
    categories: ["Miraculous Intervention", "ID_FMP_POWER_7893", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Moment of Glory"] = new engine.RulesElement({
    name: "Moment of Glory",
    type: "Power",
    id: "ID_FMP_POWER_7078",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7078",
    categories: ["Moment of Glory", "ID_FMP_POWER_7078", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Moment of Peace"] = new engine.RulesElement({
    name: "Moment of Peace",
    type: "Power",
    id: "ID_FMP_POWER_7114",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7114",
    categories: ["Moment of Peace", "ID_FMP_POWER_7114", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Moment of Truth"] = new engine.RulesElement({
    name: "Moment of Truth",
    type: "Power",
    id: "ID_FMP_POWER_7994",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7994",
    categories: ["Moment of Truth", "ID_FMP_POWER_7994", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_408", "Truthseeker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Moon Touched"] = new engine.RulesElement({
    name: "Moon Touched",
    type: "Power",
    id: "ID_FMP_POWER_8188",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8188",
    categories: ["Moon Touched", "ID_FMP_POWER_8188", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Moonbeam"] = new engine.RulesElement({
    name: "Moonbeam",
    type: "Power",
    id: "ID_FMP_POWER_7986",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7986",
    categories: ["Moonbeam", "ID_FMP_POWER_7986", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_406", "Seldarine Dedicate", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Mortal Terror"] = new engine.RulesElement({
    name: "Mortal Terror",
    type: "Power",
    id: "ID_FMP_POWER_7120",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7120",
    categories: ["Mortal Terror", "ID_FMP_POWER_7120", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Name of Awe"] = new engine.RulesElement({
    name: "Name of Awe",
    type: "Power",
    id: "ID_FMP_POWER_3737",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3737",
    categories: ["Name of Awe", "ID_FMP_POWER_3737", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Name of Might"] = new engine.RulesElement({
    name: "Name of Might",
    type: "Power",
    id: "ID_FMP_POWER_3730",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3730",
    categories: ["Name of Might", "ID_FMP_POWER_3730", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Name of Potency"] = new engine.RulesElement({
    name: "Name of Potency",
    type: "Power",
    id: "ID_FMP_POWER_8100",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8100",
    categories: ["Name of Potency", "ID_FMP_POWER_8100", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Nine Souls of Wrath"] = new engine.RulesElement({
    name: "Nine Souls of Wrath",
    type: "Power",
    id: "ID_FMP_POWER_7003",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7003",
    categories: ["Nine Souls of Wrath", "ID_FMP_POWER_7003", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["No Rest for the Wicked"] = new engine.RulesElement({
    name: "No Rest for the Wicked",
    type: "Power",
    id: "ID_FMP_POWER_8005",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8005",
    categories: ["No Rest for the Wicked", "ID_FMP_POWER_8005", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_410", "Crimson Arbiter", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Numinous Shield"] = new engine.RulesElement({
    name: "Numinous Shield",
    type: "Power",
    id: "ID_FMP_POWER_7887",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7887",
    categories: ["Numinous Shield", "ID_FMP_POWER_7887", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Oath of Righteous Fury"] = new engine.RulesElement({
    name: "Oath of Righteous Fury",
    type: "Power",
    id: "ID_FMP_POWER_7004",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7004",
    categories: ["Oath of Righteous Fury", "ID_FMP_POWER_7004", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Original Poison"] = new engine.RulesElement({
    name: "Original Poison",
    type: "Power",
    id: "ID_FMP_POWER_8189",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8189",
    categories: ["Original Poison", "ID_FMP_POWER_8189", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Overwhelming Fervor"] = new engine.RulesElement({
    name: "Overwhelming Fervor",
    type: "Power",
    id: "ID_FMP_POWER_7280",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7280",
    categories: ["Overwhelming Fervor", "ID_FMP_POWER_7280", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Overwhelming Smite"] = new engine.RulesElement({
    name: "Overwhelming Smite",
    type: "Power",
    id: "ID_FMP_POWER_7295",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7295",
    categories: ["Overwhelming Smite", "ID_FMP_POWER_7295", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Pacify"] = new engine.RulesElement({
    name: "Pacify",
    type: "Power",
    id: "ID_FMP_POWER_7980",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7980",
    categories: ["Pacify", "ID_FMP_POWER_7980", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_404", "Messenger of Peace", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Pall of the Shadowfell"] = new engine.RulesElement({
    name: "Pall of the Shadowfell",
    type: "Power",
    id: "ID_FMP_POWER_7233",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7233",
    categories: ["Pall of the Shadowfell", "ID_FMP_POWER_7233", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Pass at Arms"] = new engine.RulesElement({
    name: "Pass at Arms",
    type: "Power",
    id: "ID_FMP_POWER_6982",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6982",
    categories: ["Pass at Arms", "ID_FMP_POWER_6982", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Path of Destruction (Channel Divinity)"] = new engine.RulesElement({
    name: "Path of Destruction (Channel Divinity)",
    type: "Power",
    id: "ID_FMP_POWER_8178",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8178",
    categories: ["Path of Destruction (Channel Divinity)", "ID_FMP_POWER_8178", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Path of Freedom"] = new engine.RulesElement({
    name: "Path of Freedom",
    type: "Power",
    id: "ID_FMP_POWER_8181",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8181",
    categories: ["Path of Freedom", "ID_FMP_POWER_8181", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Path of War"] = new engine.RulesElement({
    name: "Path of War",
    type: "Power",
    id: "ID_FMP_POWER_8202",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8202",
    categories: ["Path of War", "ID_FMP_POWER_8202", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Path of Winter"] = new engine.RulesElement({
    name: "Path of Winter",
    type: "Power",
    id: "ID_FMP_POWER_8204",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8204",
    categories: ["Path of Winter", "ID_FMP_POWER_8204", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Peacemaker's Pronouncement"] = new engine.RulesElement({
    name: "Peacemaker's Pronouncement",
    type: "Power",
    id: "ID_FMP_POWER_7981",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7981",
    categories: ["Peacemaker's Pronouncement", "ID_FMP_POWER_7981", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_404", "Messenger of Peace", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Penance Compelled"] = new engine.RulesElement({
    name: "Penance Compelled",
    type: "Power",
    id: "ID_FMP_POWER_7169",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7169",
    categories: ["Penance Compelled", "ID_FMP_POWER_7169", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Penance of Blood"] = new engine.RulesElement({
    name: "Penance of Blood",
    type: "Power",
    id: "ID_FMP_POWER_7890",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7890",
    categories: ["Penance of Blood", "ID_FMP_POWER_7890", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Pennant of Heaven's Armies"] = new engine.RulesElement({
    name: "Pennant of Heaven's Armies",
    type: "Power",
    id: "ID_FMP_POWER_7205",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7205",
    categories: ["Pennant of Heaven's Armies", "ID_FMP_POWER_7205", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Perfect Torment"] = new engine.RulesElement({
    name: "Perfect Torment",
    type: "Power",
    id: "ID_FMP_POWER_8197",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8197",
    categories: ["Perfect Torment", "ID_FMP_POWER_8197", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Pillar of Chernoggar"] = new engine.RulesElement({
    name: "Pillar of Chernoggar",
    type: "Power",
    id: "ID_FMP_POWER_7036",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7036",
    categories: ["Pillar of Chernoggar", "ID_FMP_POWER_7036", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Plague of Poison"] = new engine.RulesElement({
    name: "Plague of Poison",
    type: "Power",
    id: "ID_FMP_POWER_7224",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7224",
    categories: ["Plague of Poison", "ID_FMP_POWER_7224", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Prayer for the Valiant"] = new engine.RulesElement({
    name: "Prayer for the Valiant",
    type: "Power",
    id: "ID_FMP_POWER_7275",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7275",
    categories: ["Prayer for the Valiant", "ID_FMP_POWER_7275", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Prayer for Victory"] = new engine.RulesElement({
    name: "Prayer for Victory",
    type: "Power",
    id: "ID_FMP_POWER_7179",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7179",
    categories: ["Prayer for Victory", "ID_FMP_POWER_7179", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Prayer of Two Paths"] = new engine.RulesElement({
    name: "Prayer of Two Paths",
    type: "Power",
    id: "ID_FMP_POWER_3275",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3275",
    categories: ["Prayer of Two Paths", "ID_FMP_POWER_3275", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Prayer of Vengeance"] = new engine.RulesElement({
    name: "Prayer of Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_7193",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7193",
    categories: ["Prayer of Vengeance", "ID_FMP_POWER_7193", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Prayer of Victory"] = new engine.RulesElement({
    name: "Prayer of Victory",
    type: "Power",
    id: "ID_FMP_POWER_7127",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7127",
    categories: ["Prayer of Victory", "ID_FMP_POWER_7127", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Price of Cowardice"] = new engine.RulesElement({
    name: "Price of Cowardice",
    type: "Power",
    id: "ID_FMP_POWER_7258",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7258",
    categories: ["Price of Cowardice", "ID_FMP_POWER_7258", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Price of Violence"] = new engine.RulesElement({
    name: "Price of Violence",
    type: "Power",
    id: "ID_FMP_POWER_7095",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7095",
    categories: ["Price of Violence", "ID_FMP_POWER_7095", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Promise of Victory"] = new engine.RulesElement({
    name: "Promise of Victory",
    type: "Power",
    id: "ID_FMP_POWER_7104",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7104",
    categories: ["Promise of Victory", "ID_FMP_POWER_7104", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Prostration"] = new engine.RulesElement({
    name: "Prostration",
    type: "Power",
    id: "ID_FMP_POWER_7299",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7299",
    categories: ["Prostration", "ID_FMP_POWER_7299", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Protecting Smite"] = new engine.RulesElement({
    name: "Protecting Smite",
    type: "Power",
    id: "ID_FMP_POWER_8111",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8111",
    categories: ["Protecting Smite", "ID_FMP_POWER_8111", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_422", "Faithful Shield", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Pulse of Life"] = new engine.RulesElement({
    name: "Pulse of Life",
    type: "Power",
    id: "ID_FMP_POWER_8184",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8184",
    categories: ["Pulse of Life", "ID_FMP_POWER_8184", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Punishing Blow"] = new engine.RulesElement({
    name: "Punishing Blow",
    type: "Power",
    id: "ID_FMP_POWER_7042",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7042",
    categories: ["Punishing Blow", "ID_FMP_POWER_7042", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Punishing Flame"] = new engine.RulesElement({
    name: "Punishing Flame",
    type: "Power",
    id: "ID_FMP_POWER_8169",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8169",
    categories: ["Punishing Flame", "ID_FMP_POWER_8169", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_428", "Scion of Sacrifice", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Pure Devotion"] = new engine.RulesElement({
    name: "Pure Devotion",
    type: "Power",
    id: "ID_FMP_POWER_3748",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3748",
    categories: ["Pure Devotion", "ID_FMP_POWER_3748", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Pyre of Judgment"] = new engine.RulesElement({
    name: "Pyre of Judgment",
    type: "Power",
    id: "ID_FMP_POWER_7271",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7271",
    categories: ["Pyre of Judgment", "ID_FMP_POWER_7271", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Quake Strike"] = new engine.RulesElement({
    name: "Quake Strike",
    type: "Power",
    id: "ID_FMP_POWER_8156",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8156",
    categories: ["Quake Strike", "ID_FMP_POWER_8156", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_424", "Hammer of Moradin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Quell the Hateful"] = new engine.RulesElement({
    name: "Quell the Hateful",
    type: "Power",
    id: "ID_FMP_POWER_7725",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7725",
    categories: ["Quell the Hateful", "ID_FMP_POWER_7725", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_397", "Watchful Shepherd", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Quester's Discipline"] = new engine.RulesElement({
    name: "Quester's Discipline",
    type: "Power",
    id: "ID_FMP_POWER_8165",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8165",
    categories: ["Quester's Discipline", "ID_FMP_POWER_8165", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_427", "Questing Knight", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Beams"] = new engine.RulesElement({
    name: "Radiant Beams",
    type: "Power",
    id: "ID_FMP_POWER_3668",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3668",
    categories: ["Radiant Beams", "ID_FMP_POWER_3668", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Rush"] = new engine.RulesElement({
    name: "Radiant Rush",
    type: "Power",
    id: "ID_FMP_POWER_7713",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7713",
    categories: ["Radiant Rush", "ID_FMP_POWER_7713", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_394", "Favored Soul", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Rain of Blood"] = new engine.RulesElement({
    name: "Rain of Blood",
    type: "Power",
    id: "ID_FMP_POWER_7181",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7181",
    categories: ["Rain of Blood", "ID_FMP_POWER_7181", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Rampart of Strength"] = new engine.RulesElement({
    name: "Rampart of Strength",
    type: "Power",
    id: "ID_FMP_POWER_8112",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8112",
    categories: ["Rampart of Strength", "ID_FMP_POWER_8112", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_422", "Faithful Shield", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Ramparts of Light"] = new engine.RulesElement({
    name: "Ramparts of Light",
    type: "Power",
    id: "ID_FMP_POWER_3475",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3475",
    categories: ["Ramparts of Light", "ID_FMP_POWER_3475", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Rancorous Smite"] = new engine.RulesElement({
    name: "Rancorous Smite",
    type: "Power",
    id: "ID_FMP_POWER_7989",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7989",
    categories: ["Rancorous Smite", "ID_FMP_POWER_7989", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_407", "Stone Keeper", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Ray of Reprisal"] = new engine.RulesElement({
    name: "Ray of Reprisal",
    type: "Power",
    id: "ID_FMP_POWER_7262",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7262",
    categories: ["Ray of Reprisal", "ID_FMP_POWER_7262", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Realm of Battle"] = new engine.RulesElement({
    name: "Realm of Battle",
    type: "Power",
    id: "ID_FMP_POWER_7115",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7115",
    categories: ["Realm of Battle", "ID_FMP_POWER_7115", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Reap What You Sow"] = new engine.RulesElement({
    name: "Reap What You Sow",
    type: "Power",
    id: "ID_FMP_POWER_7985",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7985",
    categories: ["Reap What You Sow", "ID_FMP_POWER_7985", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_405", "Miracle Worker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Reassuring Strike"] = new engine.RulesElement({
    name: "Reassuring Strike",
    type: "Power",
    id: "ID_FMP_POWER_7276",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7276",
    categories: ["Reassuring Strike", "ID_FMP_POWER_7276", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Rebuke the Wrathful"] = new engine.RulesElement({
    name: "Rebuke the Wrathful",
    type: "Power",
    id: "ID_FMP_POWER_7121",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7121",
    categories: ["Rebuke the Wrathful", "ID_FMP_POWER_7121", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Rebuke Violence"] = new engine.RulesElement({
    name: "Rebuke Violence",
    type: "Power",
    id: "ID_FMP_POWER_7099",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7099",
    categories: ["Rebuke Violence", "ID_FMP_POWER_7099", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Recall Ally"] = new engine.RulesElement({
    name: "Recall Ally",
    type: "Power",
    id: "ID_FMP_POWER_3683",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3683",
    categories: ["Recall Ally", "ID_FMP_POWER_3683", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Recovery Strike"] = new engine.RulesElement({
    name: "Recovery Strike",
    type: "Power",
    id: "ID_FMP_POWER_7072",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7072",
    categories: ["Recovery Strike", "ID_FMP_POWER_7072", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Refuge of Piety"] = new engine.RulesElement({
    name: "Refuge of Piety",
    type: "Power",
    id: "ID_FMP_POWER_7049",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7049",
    categories: ["Refuge of Piety", "ID_FMP_POWER_7049", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Relentless Attack"] = new engine.RulesElement({
    name: "Relentless Attack",
    type: "Power",
    id: "ID_FMP_POWER_7695",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7695",
    categories: ["Relentless Attack", "ID_FMP_POWER_7695", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Relentless Fervor"] = new engine.RulesElement({
    name: "Relentless Fervor",
    type: "Power",
    id: "ID_FMP_POWER_7717",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7717",
    categories: ["Relentless Fervor", "ID_FMP_POWER_7717", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_395", "Relentless Slayer", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Relentless Justice"] = new engine.RulesElement({
    name: "Relentless Justice",
    type: "Power",
    id: "ID_FMP_POWER_8152",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8152",
    categories: ["Relentless Justice", "ID_FMP_POWER_8152", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_423", "Gray Guard", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Remorse"] = new engine.RulesElement({
    name: "Remorse",
    type: "Power",
    id: "ID_FMP_POWER_7105",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7105",
    categories: ["Remorse", "ID_FMP_POWER_7105", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Restorative Word"] = new engine.RulesElement({
    name: "Restorative Word",
    type: "Power",
    id: "ID_FMP_POWER_8001",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8001",
    categories: ["Restorative Word", "ID_FMP_POWER_8001", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_409", "Adept of Whispers", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Resurgent Smite"] = new engine.RulesElement({
    name: "Resurgent Smite",
    type: "Power",
    id: "ID_FMP_POWER_7259",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7259",
    categories: ["Resurgent Smite", "ID_FMP_POWER_7259", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Resurgent Wrath"] = new engine.RulesElement({
    name: "Resurgent Wrath",
    type: "Power",
    id: "ID_FMP_POWER_7288",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7288",
    categories: ["Resurgent Wrath", "ID_FMP_POWER_7288", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Return from Death's Door"] = new engine.RulesElement({
    name: "Return from Death's Door",
    type: "Power",
    id: "ID_FMP_POWER_7083",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7083",
    categories: ["Return from Death's Door", "ID_FMP_POWER_7083", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Return to the Living"] = new engine.RulesElement({
    name: "Return to the Living",
    type: "Power",
    id: "ID_FMP_POWER_3293",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3293",
    categories: ["Return to the Living", "ID_FMP_POWER_3293", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Revealing Light"] = new engine.RulesElement({
    name: "Revealing Light",
    type: "Power",
    id: "ID_FMP_POWER_3635",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3635",
    categories: ["Revealing Light", "ID_FMP_POWER_3635", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Revelation of Battle"] = new engine.RulesElement({
    name: "Revelation of Battle",
    type: "Power",
    id: "ID_FMP_POWER_7903",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7903",
    categories: ["Revelation of Battle", "ID_FMP_POWER_7903", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_401", "Battle Chaplain", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Reversal of Fortunes"] = new engine.RulesElement({
    name: "Reversal of Fortunes",
    type: "Power",
    id: "ID_FMP_POWER_7983",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7983",
    categories: ["Reversal of Fortunes", "ID_FMP_POWER_7983", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_405", "Miracle Worker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Revive"] = new engine.RulesElement({
    name: "Revive",
    type: "Power",
    id: "ID_FMP_POWER_7118",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7118",
    categories: ["Revive", "ID_FMP_POWER_7118", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Righteous Indignation"] = new engine.RulesElement({
    name: "Righteous Indignation",
    type: "Power",
    id: "ID_FMP_POWER_7265",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7265",
    categories: ["Righteous Indignation", "ID_FMP_POWER_7265", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Righteous Might"] = new engine.RulesElement({
    name: "Righteous Might",
    type: "Power",
    id: "ID_FMP_POWER_7128",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7128",
    categories: ["Righteous Might", "ID_FMP_POWER_7128", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Righteous Pursuit"] = new engine.RulesElement({
    name: "Righteous Pursuit",
    type: "Power",
    id: "ID_FMP_POWER_6994",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6994",
    categories: ["Righteous Pursuit", "ID_FMP_POWER_6994", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Righteous Resolve"] = new engine.RulesElement({
    name: "Righteous Resolve",
    type: "Power",
    id: "ID_FMP_POWER_7281",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7281",
    categories: ["Righteous Resolve", "ID_FMP_POWER_7281", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Rooted to the Earth"] = new engine.RulesElement({
    name: "Rooted to the Earth",
    type: "Power",
    id: "ID_FMP_POWER_8086",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8086",
    categories: ["Rooted to the Earth", "ID_FMP_POWER_8086", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_416", "Stonecaller", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Rouse Conflict"] = new engine.RulesElement({
    name: "Rouse Conflict",
    type: "Power",
    id: "ID_FMP_POWER_8211",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8211",
    categories: ["Rouse Conflict", "ID_FMP_POWER_8211", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_436", "Avatar of War", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Sacred Beneficence"] = new engine.RulesElement({
    name: "Sacred Beneficence",
    type: "Power",
    id: "ID_FMP_POWER_7888",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7888",
    categories: ["Sacred Beneficence", "ID_FMP_POWER_7888", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Sacred Shielding"] = new engine.RulesElement({
    name: "Sacred Shielding",
    type: "Power",
    id: "ID_FMP_POWER_7088",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7088",
    categories: ["Sacred Shielding", "ID_FMP_POWER_7088", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Sacrificial Intervention"] = new engine.RulesElement({
    name: "Sacrificial Intervention",
    type: "Power",
    id: "ID_FMP_POWER_8158",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8158",
    categories: ["Sacrificial Intervention", "ID_FMP_POWER_8158", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_425", "Holy Conqueror", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Sanctified Light"] = new engine.RulesElement({
    name: "Sanctified Light",
    type: "Power",
    id: "ID_FMP_POWER_7277",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7277",
    categories: ["Sanctified Light", "ID_FMP_POWER_7277", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Sanctified Revival"] = new engine.RulesElement({
    name: "Sanctified Revival",
    type: "Power",
    id: "ID_FMP_POWER_8272",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8272",
    categories: ["Sanctified Revival", "ID_FMP_POWER_8272", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_449", "Saint", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Sanctioned Slaughter"] = new engine.RulesElement({
    name: "Sanctioned Slaughter",
    type: "Power",
    id: "ID_FMP_POWER_7300",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7300",
    categories: ["Sanctioned Slaughter", "ID_FMP_POWER_7300", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Scion's Healing"] = new engine.RulesElement({
    name: "Scion's Healing",
    type: "Power",
    id: "ID_FMP_POWER_8168",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8168",
    categories: ["Scion's Healing", "ID_FMP_POWER_8168", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_428", "Scion of Sacrifice", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Scion's Sanction"] = new engine.RulesElement({
    name: "Scion's Sanction",
    type: "Power",
    id: "ID_FMP_POWER_8167",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8167",
    categories: ["Scion's Sanction", "ID_FMP_POWER_8167", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_428", "Scion of Sacrifice", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Scouring Smite"] = new engine.RulesElement({
    name: "Scouring Smite",
    type: "Power",
    id: "ID_FMP_POWER_7131",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7131",
    categories: ["Scouring Smite", "ID_FMP_POWER_7131", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Scrape the Sky"] = new engine.RulesElement({
    name: "Scrape the Sky",
    type: "Power",
    id: "ID_FMP_POWER_7990",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7990",
    categories: ["Scrape the Sky", "ID_FMP_POWER_7990", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_407", "Stone Keeper", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Screaming Madness"] = new engine.RulesElement({
    name: "Screaming Madness",
    type: "Power",
    id: "ID_FMP_POWER_8187",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8187",
    categories: ["Screaming Madness", "ID_FMP_POWER_8187", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Sea Surge"] = new engine.RulesElement({
    name: "Sea Surge",
    type: "Power",
    id: "ID_FMP_POWER_8191",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8191",
    categories: ["Sea Surge", "ID_FMP_POWER_8191", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Seeker's Step"] = new engine.RulesElement({
    name: "Seeker's Step",
    type: "Power",
    id: "ID_FMP_POWER_7050",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7050",
    categories: ["Seeker's Step", "ID_FMP_POWER_7050", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Seldarine Wrath"] = new engine.RulesElement({
    name: "Seldarine Wrath",
    type: "Power",
    id: "ID_FMP_POWER_7988",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7988",
    categories: ["Seldarine Wrath", "ID_FMP_POWER_7988", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_406", "Seldarine Dedicate", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Serene Visage"] = new engine.RulesElement({
    name: "Serene Visage",
    type: "Power",
    id: "ID_FMP_POWER_7206",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7206",
    categories: ["Serene Visage", "ID_FMP_POWER_7206", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Sever the Source"] = new engine.RulesElement({
    name: "Sever the Source",
    type: "Power",
    id: "ID_FMP_POWER_7111",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7111",
    categories: ["Sever the Source", "ID_FMP_POWER_7111", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Shackles of Justice"] = new engine.RulesElement({
    name: "Shackles of Justice",
    type: "Power",
    id: "ID_FMP_POWER_7263",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7263",
    categories: ["Shackles of Justice", "ID_FMP_POWER_7263", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Shackles of the Chained God"] = new engine.RulesElement({
    name: "Shackles of the Chained God",
    type: "Power",
    id: "ID_FMP_POWER_7228",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7228",
    categories: ["Shackles of the Chained God", "ID_FMP_POWER_7228", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Shadowdark Invocation"] = new engine.RulesElement({
    name: "Shadowdark Invocation",
    type: "Power",
    id: "ID_FMP_POWER_7202",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7202",
    categories: ["Shadowdark Invocation", "ID_FMP_POWER_7202", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Shattering Smite"] = new engine.RulesElement({
    name: "Shattering Smite",
    type: "Power",
    id: "ID_FMP_POWER_7278",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7278",
    categories: ["Shattering Smite", "ID_FMP_POWER_7278", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Sheltering Wings"] = new engine.RulesElement({
    name: "Sheltering Wings",
    type: "Power",
    id: "ID_FMP_POWER_8213",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8213",
    categories: ["Sheltering Wings", "ID_FMP_POWER_8213", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Shepherd's Aegis"] = new engine.RulesElement({
    name: "Shepherd's Aegis",
    type: "Power",
    id: "ID_FMP_POWER_7723",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7723",
    categories: ["Shepherd's Aegis", "ID_FMP_POWER_7723", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_397", "Watchful Shepherd", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Shield Bearer"] = new engine.RulesElement({
    name: "Shield Bearer",
    type: "Power",
    id: "ID_FMP_POWER_3432",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3432",
    categories: ["Shield Bearer", "ID_FMP_POWER_3432", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Shield of Discipline"] = new engine.RulesElement({
    name: "Shield of Discipline",
    type: "Power",
    id: "ID_FMP_POWER_7255",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7255",
    categories: ["Shield of Discipline", "ID_FMP_POWER_7255", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Shield of Providence"] = new engine.RulesElement({
    name: "Shield of Providence",
    type: "Power",
    id: "ID_FMP_POWER_7051",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7051",
    categories: ["Shield of Providence", "ID_FMP_POWER_7051", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Shield of the Gods"] = new engine.RulesElement({
    name: "Shield of the Gods",
    type: "Power",
    id: "ID_FMP_POWER_7079",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7079",
    categories: ["Shield of the Gods", "ID_FMP_POWER_7079", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Shield the Virtuous"] = new engine.RulesElement({
    name: "Shield the Virtuous",
    type: "Power",
    id: "ID_FMP_POWER_3751",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3751",
    categories: ["Shield the Virtuous", "ID_FMP_POWER_3751", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Shielded by Faith"] = new engine.RulesElement({
    name: "Shielded by Faith",
    type: "Power",
    id: "ID_FMP_POWER_6983",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6983",
    categories: ["Shielded by Faith", "ID_FMP_POWER_6983", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Shielding Symbol"] = new engine.RulesElement({
    name: "Shielding Symbol",
    type: "Power",
    id: "ID_FMP_POWER_7021",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7021",
    categories: ["Shielding Symbol", "ID_FMP_POWER_7021", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Shout of Condemnation"] = new engine.RulesElement({
    name: "Shout of Condemnation",
    type: "Power",
    id: "ID_FMP_POWER_3274",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3274",
    categories: ["Shout of Condemnation", "ID_FMP_POWER_3274", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Shrine of Clarity"] = new engine.RulesElement({
    name: "Shrine of Clarity",
    type: "Power",
    id: "ID_FMP_POWER_7993",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7993",
    categories: ["Shrine of Clarity", "ID_FMP_POWER_7993", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_408", "Truthseeker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Shroud of Stars"] = new engine.RulesElement({
    name: "Shroud of Stars",
    type: "Power",
    id: "ID_FMP_POWER_7987",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7987",
    categories: ["Shroud of Stars", "ID_FMP_POWER_7987", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_406", "Seldarine Dedicate", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Sign of Guilt"] = new engine.RulesElement({
    name: "Sign of Guilt",
    type: "Power",
    id: "ID_FMP_POWER_8004",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8004",
    categories: ["Sign of Guilt", "ID_FMP_POWER_8004", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_410", "Crimson Arbiter", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Sign of Penance"] = new engine.RulesElement({
    name: "Sign of Penance",
    type: "Power",
    id: "ID_FMP_POWER_8006",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8006",
    categories: ["Sign of Penance", "ID_FMP_POWER_8006", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_410", "Crimson Arbiter", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Signs of Favor"] = new engine.RulesElement({
    name: "Signs of Favor",
    type: "Power",
    id: "ID_FMP_POWER_7727",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7727",
    categories: ["Signs of Favor", "ID_FMP_POWER_7727", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_398", "Weapon of Fortune", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Silent Malediction"] = new engine.RulesElement({
    name: "Silent Malediction",
    type: "Power",
    id: "ID_FMP_POWER_7161",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7161",
    categories: ["Silent Malediction", "ID_FMP_POWER_7161", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Silver Rain"] = new engine.RulesElement({
    name: "Silver Rain",
    type: "Power",
    id: "ID_FMP_POWER_8093",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8093",
    categories: ["Silver Rain", "ID_FMP_POWER_8093", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_418", "Vessel of Ichor", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Silver Shadow"] = new engine.RulesElement({
    name: "Silver Shadow",
    type: "Power",
    id: "ID_FMP_POWER_6995",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6995",
    categories: ["Silver Shadow", "ID_FMP_POWER_6995", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Slayer's Ascendancy"] = new engine.RulesElement({
    name: "Slayer's Ascendancy",
    type: "Power",
    id: "ID_FMP_POWER_7718",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7718",
    categories: ["Slayer's Ascendancy", "ID_FMP_POWER_7718", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_395", "Relentless Slayer", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Slayer's Gambit"] = new engine.RulesElement({
    name: "Slayer's Gambit",
    type: "Power",
    id: "ID_FMP_POWER_7716",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7716",
    categories: ["Slayer's Gambit", "ID_FMP_POWER_7716", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_395", "Relentless Slayer", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Small Vengeance"] = new engine.RulesElement({
    name: "Small Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_8201",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8201",
    categories: ["Small Vengeance", "ID_FMP_POWER_8201", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Smite the Soul"] = new engine.RulesElement({
    name: "Smite the Soul",
    type: "Power",
    id: "ID_FMP_POWER_3279",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3279",
    categories: ["Smite the Soul", "ID_FMP_POWER_3279", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["So Others Might Live"] = new engine.RulesElement({
    name: "So Others Might Live",
    type: "Power",
    id: "ID_FMP_POWER_7973",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7973",
    categories: ["So Others Might Live", "ID_FMP_POWER_7973", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_402", "Compassionate Healer", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Solar Enemy"] = new engine.RulesElement({
    name: "Solar Enemy",
    type: "Power",
    id: "ID_FMP_POWER_8196",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8196",
    categories: ["Solar Enemy", "ID_FMP_POWER_8196", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Solid Fog"] = new engine.RulesElement({
    name: "Solid Fog",
    type: "Power",
    id: "ID_FMP_POWER_7180",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7180",
    categories: ["Solid Fog", "ID_FMP_POWER_7180", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Soul Lightning"] = new engine.RulesElement({
    name: "Soul Lightning",
    type: "Power",
    id: "ID_FMP_POWER_7031",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7031",
    categories: ["Soul Lightning", "ID_FMP_POWER_7031", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Soul Stab"] = new engine.RulesElement({
    name: "Soul Stab",
    type: "Power",
    id: "ID_FMP_POWER_7710",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7710",
    categories: ["Soul Stab", "ID_FMP_POWER_7710", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_393", "Dread Imperator", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Sound of the Golden Clarion"] = new engine.RulesElement({
    name: "Sound of the Golden Clarion",
    type: "Power",
    id: "ID_FMP_POWER_7212",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7212",
    categories: ["Sound of the Golden Clarion", "ID_FMP_POWER_7212", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Spark of Hatred"] = new engine.RulesElement({
    name: "Spark of Hatred",
    type: "Power",
    id: "ID_FMP_POWER_7065",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7065",
    categories: ["Spark of Hatred", "ID_FMP_POWER_7065", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Sparking Wounds"] = new engine.RulesElement({
    name: "Sparking Wounds",
    type: "Power",
    id: "ID_FMP_POWER_7000",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7000",
    categories: ["Sparking Wounds", "ID_FMP_POWER_7000", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Speed and Stillness"] = new engine.RulesElement({
    name: "Speed and Stillness",
    type: "Power",
    id: "ID_FMP_POWER_6984",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6984",
    categories: ["Speed and Stillness", "ID_FMP_POWER_6984", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit Flame"] = new engine.RulesElement({
    name: "Spirit Flame",
    type: "Power",
    id: "ID_FMP_POWER_7122",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7122",
    categories: ["Spirit Flame", "ID_FMP_POWER_7122", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit of Healing"] = new engine.RulesElement({
    name: "Spirit of Healing",
    type: "Power",
    id: "ID_FMP_POWER_3468",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3468",
    categories: ["Spirit of Healing", "ID_FMP_POWER_3468", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Spurn the Unworthy"] = new engine.RulesElement({
    name: "Spurn the Unworthy",
    type: "Power",
    id: "ID_FMP_POWER_7292",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7292",
    categories: ["Spurn the Unworthy", "ID_FMP_POWER_7292", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Stalwart Defense"] = new engine.RulesElement({
    name: "Stalwart Defense",
    type: "Power",
    id: "ID_FMP_POWER_8155",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8155",
    categories: ["Stalwart Defense", "ID_FMP_POWER_8155", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_424", "Hammer of Moradin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Starry Snare"] = new engine.RulesElement({
    name: "Starry Snare",
    type: "Power",
    id: "ID_FMP_POWER_7112",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7112",
    categories: ["Starry Snare", "ID_FMP_POWER_7112", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Step of Fate"] = new engine.RulesElement({
    name: "Step of Fate",
    type: "Power",
    id: "ID_FMP_POWER_7008",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7008",
    categories: ["Step of Fate", "ID_FMP_POWER_7008", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Stern Judgment"] = new engine.RulesElement({
    name: "Stern Judgment",
    type: "Power",
    id: "ID_FMP_POWER_7136",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7136",
    categories: ["Stern Judgment", "ID_FMP_POWER_7136", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Call"] = new engine.RulesElement({
    name: "Storm Call",
    type: "Power",
    id: "ID_FMP_POWER_7162",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7162",
    categories: ["Storm Call", "ID_FMP_POWER_7162", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Storm of Creation"] = new engine.RulesElement({
    name: "Storm of Creation",
    type: "Power",
    id: "ID_FMP_POWER_7238",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7238",
    categories: ["Storm of Creation", "ID_FMP_POWER_7238", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Storm of Punishment"] = new engine.RulesElement({
    name: "Storm of Punishment",
    type: "Power",
    id: "ID_FMP_POWER_7203",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7203",
    categories: ["Storm of Punishment", "ID_FMP_POWER_7203", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Sacrifice"] = new engine.RulesElement({
    name: "Storm Sacrifice",
    type: "Power",
    id: "ID_FMP_POWER_8193",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8193",
    categories: ["Storm Sacrifice", "ID_FMP_POWER_8193", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Stream of Life"] = new engine.RulesElement({
    name: "Stream of Life",
    type: "Power",
    id: "ID_FMP_POWER_7092",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7092",
    categories: ["Stream of Life", "ID_FMP_POWER_7092", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Strength from Valor"] = new engine.RulesElement({
    name: "Strength from Valor",
    type: "Power",
    id: "ID_FMP_POWER_7253",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7253",
    categories: ["Strength from Valor", "ID_FMP_POWER_7253", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Strength in Unity"] = new engine.RulesElement({
    name: "Strength in Unity",
    type: "Power",
    id: "ID_FMP_POWER_7037",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7037",
    categories: ["Strength in Unity", "ID_FMP_POWER_7037", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Strength of Many"] = new engine.RulesElement({
    name: "Strength of Many",
    type: "Power",
    id: "ID_FMP_POWER_6988",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6988",
    categories: ["Strength of Many", "ID_FMP_POWER_6988", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Strength of Ten"] = new engine.RulesElement({
    name: "Strength of Ten",
    type: "Power",
    id: "ID_FMP_POWER_8164",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8164",
    categories: ["Strength of Ten", "ID_FMP_POWER_8164", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_427", "Questing Knight", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Strength of the Gods"] = new engine.RulesElement({
    name: "Strength of the Gods",
    type: "Power",
    id: "ID_FMP_POWER_8194",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8194",
    categories: ["Strength of the Gods", "ID_FMP_POWER_8194", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Strike of Judgment"] = new engine.RulesElement({
    name: "Strike of Judgment",
    type: "Power",
    id: "ID_FMP_POWER_7096",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7096",
    categories: ["Strike of Judgment", "ID_FMP_POWER_7096", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Stroke of Doom"] = new engine.RulesElement({
    name: "Stroke of Doom",
    type: "Power",
    id: "ID_FMP_POWER_7048",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7048",
    categories: ["Stroke of Doom", "ID_FMP_POWER_7048", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Stroke of Ruin"] = new engine.RulesElement({
    name: "Stroke of Ruin",
    type: "Power",
    id: "ID_FMP_POWER_7895",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7895",
    categories: ["Stroke of Ruin", "ID_FMP_POWER_7895", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Sublime Light"] = new engine.RulesElement({
    name: "Sublime Light",
    type: "Power",
    id: "ID_FMP_POWER_7896",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7896",
    categories: ["Sublime Light", "ID_FMP_POWER_7896", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Strife"] = new engine.RulesElement({
    name: "Sudden Strife",
    type: "Power",
    id: "ID_FMP_POWER_8195",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8195",
    categories: ["Sudden Strife", "ID_FMP_POWER_8195", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Summons of Justice"] = new engine.RulesElement({
    name: "Summons of Justice",
    type: "Power",
    id: "ID_FMP_POWER_7156",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7156",
    categories: ["Summons of Justice", "ID_FMP_POWER_7156", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Summons to Duty"] = new engine.RulesElement({
    name: "Summons to Duty",
    type: "Power",
    id: "ID_FMP_POWER_7038",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7038",
    categories: ["Summons to Duty", "ID_FMP_POWER_7038", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Sun Shard"] = new engine.RulesElement({
    name: "Sun Shard",
    type: "Power",
    id: "ID_FMP_POWER_7175",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7175",
    categories: ["Sun Shard", "ID_FMP_POWER_7175", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Supernal Radiance"] = new engine.RulesElement({
    name: "Supernal Radiance",
    type: "Power",
    id: "ID_FMP_POWER_3672",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3672",
    categories: ["Supernal Radiance", "ID_FMP_POWER_3672", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Sure Knowledge"] = new engine.RulesElement({
    name: "Sure Knowledge",
    type: "Power",
    id: "ID_FMP_POWER_8183",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8183",
    categories: ["Sure Knowledge", "ID_FMP_POWER_8183", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Sure Protection"] = new engine.RulesElement({
    name: "Sure Protection",
    type: "Power",
    id: "ID_FMP_POWER_8190",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8190",
    categories: ["Sure Protection", "ID_FMP_POWER_8190", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Swim the Astral Sea"] = new engine.RulesElement({
    name: "Swim the Astral Sea",
    type: "Power",
    id: "ID_FMP_POWER_7901",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7901",
    categories: ["Swim the Astral Sea", "ID_FMP_POWER_7901", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_400", "Astral Savant", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Syllable of Light"] = new engine.RulesElement({
    name: "Syllable of Light",
    type: "Power",
    id: "ID_FMP_POWER_8082",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8082",
    categories: ["Syllable of Light", "ID_FMP_POWER_8082", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_415", "Speaker of the Word", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Symbol of the Broken Sword"] = new engine.RulesElement({
    name: "Symbol of the Broken Sword",
    type: "Power",
    id: "ID_FMP_POWER_7170",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7170",
    categories: ["Symbol of the Broken Sword", "ID_FMP_POWER_7170", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Take the Keep"] = new engine.RulesElement({
    name: "Take the Keep",
    type: "Power",
    id: "ID_FMP_POWER_8159",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8159",
    categories: ["Take the Keep", "ID_FMP_POWER_8159", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_425", "Holy Conqueror", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Temple of Brilliance"] = new engine.RulesElement({
    name: "Temple of Brilliance",
    type: "Power",
    id: "ID_FMP_POWER_7032",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7032",
    categories: ["Temple of Brilliance", "ID_FMP_POWER_7032", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Temple of Seclusion"] = new engine.RulesElement({
    name: "Temple of Seclusion",
    type: "Power",
    id: "ID_FMP_POWER_7039",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7039",
    categories: ["Temple of Seclusion", "ID_FMP_POWER_7039", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Tenor of Wrath"] = new engine.RulesElement({
    name: "Tenor of Wrath",
    type: "Power",
    id: "ID_FMP_POWER_8011",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8011",
    categories: ["Tenor of Wrath", "ID_FMP_POWER_8011", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_412", "Divine Hand", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Terrible Charge"] = new engine.RulesElement({
    name: "Terrible Charge",
    type: "Power",
    id: "ID_FMP_POWER_7296",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7296",
    categories: ["Terrible Charge", "ID_FMP_POWER_7296", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Test of Strength"] = new engine.RulesElement({
    name: "Test of Strength",
    type: "Power",
    id: "ID_FMP_POWER_8217",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8217",
    categories: ["Test of Strength", "ID_FMP_POWER_8217", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Tether of Light"] = new engine.RulesElement({
    name: "Tether of Light",
    type: "Power",
    id: "ID_FMP_POWER_7033",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7033",
    categories: ["Tether of Light", "ID_FMP_POWER_7033", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["The Tenth Seal"] = new engine.RulesElement({
    name: "The Tenth Seal",
    type: "Power",
    id: "ID_FMP_POWER_8080",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8080",
    categories: ["The Tenth Seal", "ID_FMP_POWER_8080", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_414", "Keeper of the Nine", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["The Word Spoken"] = new engine.RulesElement({
    name: "The Word Spoken",
    type: "Power",
    id: "ID_FMP_POWER_8084",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8084",
    categories: ["The Word Spoken", "ID_FMP_POWER_8084", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_415", "Speaker of the Word", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Threatening Strike"] = new engine.RulesElement({
    name: "Threatening Strike",
    type: "Power",
    id: "ID_FMP_POWER_7056",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7056",
    categories: ["Threatening Strike", "ID_FMP_POWER_7056", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder and Echo"] = new engine.RulesElement({
    name: "Thunder and Echo",
    type: "Power",
    id: "ID_FMP_POWER_6989",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6989",
    categories: ["Thunder and Echo", "ID_FMP_POWER_6989", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderhead Smite"] = new engine.RulesElement({
    name: "Thunderhead Smite",
    type: "Power",
    id: "ID_FMP_POWER_7061",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7061",
    categories: ["Thunderhead Smite", "ID_FMP_POWER_7061", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderous Oration"] = new engine.RulesElement({
    name: "Thunderous Oration",
    type: "Power",
    id: "ID_FMP_POWER_8009",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8009",
    categories: ["Thunderous Oration", "ID_FMP_POWER_8009", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_411", "Devoted Orator", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderous Rebuke"] = new engine.RulesElement({
    name: "Thunderous Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_7198",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7198",
    categories: ["Thunderous Rebuke", "ID_FMP_POWER_7198", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderous Shout"] = new engine.RulesElement({
    name: "Thunderous Shout",
    type: "Power",
    id: "ID_FMP_POWER_7216",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7216",
    categories: ["Thunderous Shout", "ID_FMP_POWER_7216", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Tide of the First Storm"] = new engine.RulesElement({
    name: "Tide of the First Storm",
    type: "Power",
    id: "ID_FMP_POWER_7182",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7182",
    categories: ["Tide of the First Storm", "ID_FMP_POWER_7182", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Touch of Grace"] = new engine.RulesElement({
    name: "Touch of Grace",
    type: "Power",
    id: "ID_FMP_POWER_3745",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3745",
    categories: ["Touch of Grace", "ID_FMP_POWER_3745", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Tower of Faith"] = new engine.RulesElement({
    name: "Tower of Faith",
    type: "Power",
    id: "ID_FMP_POWER_3731",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3731",
    categories: ["Tower of Faith", "ID_FMP_POWER_3731", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Trial of Adversity"] = new engine.RulesElement({
    name: "Trial of Adversity",
    type: "Power",
    id: "ID_FMP_POWER_7289",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7289",
    categories: ["Trial of Adversity", "ID_FMP_POWER_7289", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Trial of Strength"] = new engine.RulesElement({
    name: "Trial of Strength",
    type: "Power",
    id: "ID_FMP_POWER_3694",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3694",
    categories: ["Trial of Strength", "ID_FMP_POWER_3694", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Trickster's Fortune"] = new engine.RulesElement({
    name: "Trickster's Fortune",
    type: "Power",
    id: "ID_FMP_POWER_8198",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8198",
    categories: ["Trickster's Fortune", "ID_FMP_POWER_8198", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Trumpet of Awe"] = new engine.RulesElement({
    name: "Trumpet of Awe",
    type: "Power",
    id: "ID_FMP_POWER_7977",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7977",
    categories: ["Trumpet of Awe", "ID_FMP_POWER_7977", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_403", "Holy Emissary", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Trumpet the Eight Dooms"] = new engine.RulesElement({
    name: "Trumpet the Eight Dooms",
    type: "Power",
    id: "ID_FMP_POWER_7999",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7999",
    categories: ["Trumpet the Eight Dooms", "ID_FMP_POWER_7999", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Trumpet the Star's Fall"] = new engine.RulesElement({
    name: "Trumpet the Star's Fall",
    type: "Power",
    id: "ID_FMP_POWER_7176",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7176",
    categories: ["Trumpet the Star's Fall", "ID_FMP_POWER_7176", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Trumpets of Celestia"] = new engine.RulesElement({
    name: "Trumpets of Celestia",
    type: "Power",
    id: "ID_FMP_POWER_7183",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7183",
    categories: ["Trumpets of Celestia", "ID_FMP_POWER_7183", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Twist of Fate"] = new engine.RulesElement({
    name: "Twist of Fate",
    type: "Power",
    id: "ID_FMP_POWER_7190",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7190",
    categories: ["Twist of Fate", "ID_FMP_POWER_7190", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Uncanny Insight"] = new engine.RulesElement({
    name: "Uncanny Insight",
    type: "Power",
    id: "ID_FMP_POWER_8014",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8014",
    categories: ["Uncanny Insight", "ID_FMP_POWER_8014", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_413", "Divine Philosopher", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Undeath's Ally"] = new engine.RulesElement({
    name: "Undeath's Ally",
    type: "Power",
    id: "ID_FMP_POWER_8200",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8200",
    categories: ["Undeath's Ally", "ID_FMP_POWER_8200", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Unerring Foreknowledge"] = new engine.RulesElement({
    name: "Unerring Foreknowledge",
    type: "Power",
    id: "ID_FMP_POWER_8216",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8216",
    categories: ["Unerring Foreknowledge", "ID_FMP_POWER_8216", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Unexpected Return"] = new engine.RulesElement({
    name: "Unexpected Return",
    type: "Power",
    id: "ID_FMP_POWER_7110",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7110",
    categories: ["Unexpected Return", "ID_FMP_POWER_7110", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Unrelenting Punishment"] = new engine.RulesElement({
    name: "Unrelenting Punishment",
    type: "Power",
    id: "ID_FMP_POWER_3273",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3273",
    categories: ["Unrelenting Punishment", "ID_FMP_POWER_3273", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Unyielding Faith"] = new engine.RulesElement({
    name: "Unyielding Faith",
    type: "Power",
    id: "ID_FMP_POWER_3726",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3726",
    categories: ["Unyielding Faith", "ID_FMP_POWER_3726", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Valiant Rush"] = new engine.RulesElement({
    name: "Valiant Rush",
    type: "Power",
    id: "ID_FMP_POWER_7256",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7256",
    categories: ["Valiant Rush", "ID_FMP_POWER_7256", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Valorous Smite"] = new engine.RulesElement({
    name: "Valorous Smite",
    type: "Power",
    id: "ID_FMP_POWER_3689",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3689",
    categories: ["Valorous Smite", "ID_FMP_POWER_3689", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Vengeful Apparition"] = new engine.RulesElement({
    name: "Vengeful Apparition",
    type: "Power",
    id: "ID_FMP_POWER_7702",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7702",
    categories: ["Vengeful Apparition", "ID_FMP_POWER_7702", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Vengeful Parry"] = new engine.RulesElement({
    name: "Vengeful Parry",
    type: "Power",
    id: "ID_FMP_POWER_7043",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7043",
    categories: ["Vengeful Parry", "ID_FMP_POWER_7043", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Victory Hymn"] = new engine.RulesElement({
    name: "Victory Hymn",
    type: "Power",
    id: "ID_FMP_POWER_7057",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7057",
    categories: ["Victory Hymn", "ID_FMP_POWER_7057", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Virtue"] = new engine.RulesElement({
    name: "Virtue",
    type: "Power",
    id: "ID_FMP_POWER_7249",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7249",
    categories: ["Virtue", "ID_FMP_POWER_7249", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Virtue's Touch"] = new engine.RulesElement({
    name: "Virtue's Touch",
    type: "Power",
    id: "ID_FMP_POWER_7240",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7240",
    categories: ["Virtue's Touch", "ID_FMP_POWER_7240"]
  });
  byID[te.id] = te;
  
  te = Power["Virtuous Strike"] = new engine.RulesElement({
    name: "Virtuous Strike",
    type: "Power",
    id: "ID_FMP_POWER_3687",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3687",
    categories: ["Virtuous Strike", "ID_FMP_POWER_3687", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Virtuous Wrath"] = new engine.RulesElement({
    name: "Virtuous Wrath",
    type: "Power",
    id: "ID_FMP_POWER_8166",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8166",
    categories: ["Virtuous Wrath", "ID_FMP_POWER_8166", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_427", "Questing Knight", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Visions of Blood"] = new engine.RulesElement({
    name: "Visions of Blood",
    type: "Power",
    id: "ID_FMP_POWER_7153",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7153",
    categories: ["Visions of Blood", "ID_FMP_POWER_7153", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Wages of Sin"] = new engine.RulesElement({
    name: "Wages of Sin",
    type: "Power",
    id: "ID_FMP_POWER_7700",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7700",
    categories: ["Wages of Sin", "ID_FMP_POWER_7700", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Walls of Hestavar"] = new engine.RulesElement({
    name: "Walls of Hestavar",
    type: "Power",
    id: "ID_FMP_POWER_7207",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7207",
    categories: ["Walls of Hestavar", "ID_FMP_POWER_7207", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["War Priest's Strike"] = new engine.RulesElement({
    name: "War Priest's Strike",
    type: "Power",
    id: "ID_FMP_POWER_7075",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7075",
    categories: ["War Priest's Strike", "ID_FMP_POWER_7075", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Weapon of Astral Flame"] = new engine.RulesElement({
    name: "Weapon of Astral Flame",
    type: "Power",
    id: "ID_FMP_POWER_7080",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7080",
    categories: ["Weapon of Astral Flame", "ID_FMP_POWER_7080", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Weaving Blades"] = new engine.RulesElement({
    name: "Weaving Blades",
    type: "Power",
    id: "ID_FMP_POWER_7027",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7027",
    categories: ["Weaving Blades", "ID_FMP_POWER_7027", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Wheel of Fate"] = new engine.RulesElement({
    name: "Wheel of Fate",
    type: "Power",
    id: "ID_FMP_POWER_7282",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7282",
    categories: ["Wheel of Fate", "ID_FMP_POWER_7282", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Whirling Assault"] = new engine.RulesElement({
    name: "Whirling Assault",
    type: "Power",
    id: "ID_FMP_POWER_7707",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7707",
    categories: ["Whirling Assault", "ID_FMP_POWER_7707", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_392", "Dervish of Dawn", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Whisper of Doom"] = new engine.RulesElement({
    name: "Whisper of Doom",
    type: "Power",
    id: "ID_FMP_POWER_8002",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8002",
    categories: ["Whisper of Doom", "ID_FMP_POWER_8002", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_409", "Adept of Whispers", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Whispers of Defeat"] = new engine.RulesElement({
    name: "Whispers of Defeat",
    type: "Power",
    id: "ID_FMP_POWER_7157",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7157",
    categories: ["Whispers of Defeat", "ID_FMP_POWER_7157", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Wild Hope"] = new engine.RulesElement({
    name: "Wild Hope",
    type: "Power",
    id: "ID_FMP_POWER_8284",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8284",
    categories: ["Wild Hope", "ID_FMP_POWER_8284", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_392", "Dervish of Dawn", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Wild Surge"] = new engine.RulesElement({
    name: "Wild Surge",
    type: "Power",
    id: "ID_FMP_POWER_8218",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8218",
    categories: ["Wild Surge", "ID_FMP_POWER_8218", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Winds of Woe"] = new engine.RulesElement({
    name: "Winds of Woe",
    type: "Power",
    id: "ID_FMP_POWER_7017",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7017",
    categories: ["Winds of Woe", "ID_FMP_POWER_7017", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Wings of Angels"] = new engine.RulesElement({
    name: "Wings of Angels",
    type: "Power",
    id: "ID_FMP_POWER_7714",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7714",
    categories: ["Wings of Angels", "ID_FMP_POWER_7714", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_394", "Favored Soul", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Wings of Light"] = new engine.RulesElement({
    name: "Wings of Light",
    type: "Power",
    id: "ID_FMP_POWER_6990",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6990",
    categories: ["Wings of Light", "ID_FMP_POWER_6990", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Wings of Vengeance"] = new engine.RulesElement({
    name: "Wings of Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_7022",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7022",
    categories: ["Wings of Vengeance", "ID_FMP_POWER_7022", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Anathema"] = new engine.RulesElement({
    name: "Word of Anathema",
    type: "Power",
    id: "ID_FMP_POWER_8015",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8015",
    categories: ["Word of Anathema", "ID_FMP_POWER_8015", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_413", "Divine Philosopher", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Bewilderment"] = new engine.RulesElement({
    name: "Word of Bewilderment",
    type: "Power",
    id: "ID_FMP_POWER_7225",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7225",
    categories: ["Word of Bewilderment", "ID_FMP_POWER_7225", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Blindness"] = new engine.RulesElement({
    name: "Word of Blindness",
    type: "Power",
    id: "ID_FMP_POWER_7199",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7199",
    categories: ["Word of Blindness", "ID_FMP_POWER_7199", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Cessation"] = new engine.RulesElement({
    name: "Word of Cessation",
    type: "Power",
    id: "ID_FMP_POWER_7230",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7230",
    categories: ["Word of Cessation", "ID_FMP_POWER_7230", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Death"] = new engine.RulesElement({
    name: "Word of Death",
    type: "Power",
    id: "ID_FMP_POWER_7234",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7234",
    categories: ["Word of Death", "ID_FMP_POWER_7234", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Deterrence"] = new engine.RulesElement({
    name: "Word of Deterrence",
    type: "Power",
    id: "ID_FMP_POWER_7123",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7123",
    categories: ["Word of Deterrence", "ID_FMP_POWER_7123", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Fiery Condemnation"] = new engine.RulesElement({
    name: "Word of Fiery Condemnation",
    type: "Power",
    id: "ID_FMP_POWER_7184",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7184",
    categories: ["Word of Fiery Condemnation", "ID_FMP_POWER_7184", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Pain"] = new engine.RulesElement({
    name: "Word of Pain",
    type: "Power",
    id: "ID_FMP_POWER_7213",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7213",
    categories: ["Word of Pain", "ID_FMP_POWER_7213", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Refuge"] = new engine.RulesElement({
    name: "Word of Refuge",
    type: "Power",
    id: "ID_FMP_POWER_7208",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7208",
    categories: ["Word of Refuge", "ID_FMP_POWER_7208", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Ruin"] = new engine.RulesElement({
    name: "Word of Ruin",
    type: "Power",
    id: "ID_FMP_POWER_7171",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7171",
    categories: ["Word of Ruin", "ID_FMP_POWER_7171", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Undoing"] = new engine.RulesElement({
    name: "Word of Undoing",
    type: "Power",
    id: "ID_FMP_POWER_8208",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8208",
    categories: ["Word of Undoing", "ID_FMP_POWER_8208", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_433", "Avatar of Justice", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Urgency"] = new engine.RulesElement({
    name: "Word of Urgency",
    type: "Power",
    id: "ID_FMP_POWER_7194",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7194",
    categories: ["Word of Urgency", "ID_FMP_POWER_7194", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Word of Vigor"] = new engine.RulesElement({
    name: "Word of Vigor",
    type: "Power",
    id: "ID_FMP_POWER_7889",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7889",
    categories: ["Word of Vigor", "ID_FMP_POWER_7889", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Wrath of the Faithful"] = new engine.RulesElement({
    name: "Wrath of the Faithful",
    type: "Power",
    id: "ID_FMP_POWER_7108",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7108",
    categories: ["Wrath of the Faithful", "ID_FMP_POWER_7108", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Wrath of the Fallen God"] = new engine.RulesElement({
    name: "Wrath of the Fallen God",
    type: "Power",
    id: "ID_FMP_POWER_7217",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7217",
    categories: ["Wrath of the Fallen God", "ID_FMP_POWER_7217", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Wrathful Charge"] = new engine.RulesElement({
    name: "Wrathful Charge",
    type: "Power",
    id: "ID_FMP_POWER_7044",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7044",
    categories: ["Wrathful Charge", "ID_FMP_POWER_7044", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Wrathful Flame"] = new engine.RulesElement({
    name: "Wrathful Flame",
    type: "Power",
    id: "ID_FMP_POWER_3723",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3723",
    categories: ["Wrathful Flame", "ID_FMP_POWER_3723", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Wrathful Smite"] = new engine.RulesElement({
    name: "Wrathful Smite",
    type: "Power",
    id: "ID_FMP_POWER_7279",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7279",
    categories: ["Wrathful Smite", "ID_FMP_POWER_7279", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Written in Fire"] = new engine.RulesElement({
    name: "Written in Fire",
    type: "Power",
    id: "ID_FMP_POWER_7185",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7185",
    categories: ["Written in Fire", "ID_FMP_POWER_7185", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Zealot's Call"] = new engine.RulesElement({
    name: "Zealot's Call",
    type: "Power",
    id: "ID_FMP_POWER_7018",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7018",
    categories: ["Zealot's Call", "ID_FMP_POWER_7018", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Zealous Onslaught"] = new engine.RulesElement({
    name: "Zealous Onslaught",
    type: "Power",
    id: "ID_FMP_POWER_7034",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7034",
    categories: ["Zealous Onslaught", "ID_FMP_POWER_7034", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Zealous Sanction"] = new engine.RulesElement({
    name: "Zealous Sanction",
    type: "Power",
    id: "ID_FMP_POWER_3616",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3616",
    categories: ["Zealous Sanction", "ID_FMP_POWER_3616", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Zealous Smite"] = new engine.RulesElement({
    name: "Zealous Smite",
    type: "Power",
    id: "ID_FMP_POWER_7269",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7269",
    categories: ["Zealous Smite", "ID_FMP_POWER_7269", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
