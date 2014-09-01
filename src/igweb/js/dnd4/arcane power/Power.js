define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Absorb Storm"] = new engine.RulesElement({
    name: "Absorb Storm",
    type: "Power",
    id: "ID_FMP_POWER_3055",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3055",
    categories: ["Absorb Storm", "ID_FMP_POWER_3055", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Acid Claw"] = new engine.RulesElement({
    name: "Acid Claw",
    type: "Power",
    id: "ID_FMP_POWER_3010",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3010",
    categories: ["Acid Claw", "ID_FMP_POWER_3010", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Acid Mire"] = new engine.RulesElement({
    name: "Acid Mire",
    type: "Power",
    id: "ID_FMP_POWER_192",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=192",
    categories: ["Acid Mire", "ID_FMP_POWER_192", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Acid Shackles"] = new engine.RulesElement({
    name: "Acid Shackles",
    type: "Power",
    id: "ID_FMP_POWER_3022",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3022",
    categories: ["Acid Shackles", "ID_FMP_POWER_3022", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Acid Typhoon"] = new engine.RulesElement({
    name: "Acid Typhoon",
    type: "Power",
    id: "ID_FMP_POWER_3049",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3049",
    categories: ["Acid Typhoon", "ID_FMP_POWER_3049", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Acrid Decay"] = new engine.RulesElement({
    name: "Acrid Decay",
    type: "Power",
    id: "ID_FMP_POWER_5919",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5919",
    categories: ["Acrid Decay", "ID_FMP_POWER_5919", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Aegis Bolt"] = new engine.RulesElement({
    name: "Aegis Bolt",
    type: "Power",
    id: "ID_FMP_POWER_3992",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3992",
    categories: ["Aegis Bolt", "ID_FMP_POWER_3992", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Aegis of Ensnarement"] = new engine.RulesElement({
    name: "Aegis of Ensnarement",
    type: "Power",
    id: "ID_FMP_POWER_5736",
    source: "Arcane Power,Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5736",
    categories: ["Aegis of Ensnarement", "ID_FMP_POWER_5736", "ID_FMP_CLASS_FEATURE_518", "Swordmage Aegis"]
  });
  byID[te.id] = te;
  
  te = Power["Aegis of Lost Souls"] = new engine.RulesElement({
    name: "Aegis of Lost Souls",
    type: "Power",
    id: "ID_FMP_POWER_3148",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3148",
    categories: ["Aegis of Lost Souls", "ID_FMP_POWER_3148", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Aegis Reserve"] = new engine.RulesElement({
    name: "Aegis Reserve",
    type: "Power",
    id: "ID_FMP_POWER_5793",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5793",
    categories: ["Aegis Reserve", "ID_FMP_POWER_5793", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_319", "Sword of Assault", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Aegis Sigil"] = new engine.RulesElement({
    name: "Aegis Sigil",
    type: "Power",
    id: "ID_FMP_POWER_5789",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5789",
    categories: ["Aegis Sigil", "ID_FMP_POWER_5789", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_318", "Sigil Carver", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Agency of Chance"] = new engine.RulesElement({
    name: "Agency of Chance",
    type: "Power",
    id: "ID_FMP_POWER_5828",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5828",
    categories: ["Agency of Chance", "ID_FMP_POWER_5828", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_334", "Weaver of Chance", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["All the Sand, All the Stars"] = new engine.RulesElement({
    name: "All the Sand, All the Stars",
    type: "Power",
    id: "ID_FMP_POWER_4093",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4093",
    categories: ["All the Sand, All the Stars", "ID_FMP_POWER_4093", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Allied Rhythm"] = new engine.RulesElement({
    name: "Allied Rhythm",
    type: "Power",
    id: "ID_FMP_POWER_3001",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3001",
    categories: ["Allied Rhythm", "ID_FMP_POWER_3001", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Amaan's Continuance"] = new engine.RulesElement({
    name: "Amaan's Continuance",
    type: "Power",
    id: "ID_FMP_POWER_4223",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4223",
    categories: ["Amaan's Continuance", "ID_FMP_POWER_4223", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Anthem of Antagonism"] = new engine.RulesElement({
    name: "Anthem of Antagonism",
    type: "Power",
    id: "ID_FMP_POWER_5722",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5722",
    categories: ["Anthem of Antagonism", "ID_FMP_POWER_5722", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_304", "Euphonic Bow", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Deflection"] = new engine.RulesElement({
    name: "Arcane Deflection",
    type: "Power",
    id: "ID_FMP_POWER_5749",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5749",
    categories: ["Arcane Deflection", "ID_FMP_POWER_5749", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7337"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Arcane Deflection Attack"] = new engine.RulesElement({
    name: "Arcane Deflection Attack",
    type: "Power",
    id: "ID_FMP_POWER_7337",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7337",
    categories: ["Arcane Deflection Attack", "ID_FMP_POWER_7337", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Transport"] = new engine.RulesElement({
    name: "Arcane Transport",
    type: "Power",
    id: "ID_FMP_POWER_5739",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5739",
    categories: ["Arcane Transport", "ID_FMP_POWER_5739", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Archlich Potency"] = new engine.RulesElement({
    name: "Archlich Potency",
    type: "Power",
    id: "ID_FMP_POWER_6925",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6925",
    categories: ["Archlich Potency", "ID_FMP_POWER_6925", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_336", "Archlich", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Arms of Hadar"] = new engine.RulesElement({
    name: "Arms of Hadar",
    type: "Power",
    id: "ID_FMP_POWER_5902",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5902",
    categories: ["Arms of Hadar", "ID_FMP_POWER_5902", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Army of the Emissary"] = new engine.RulesElement({
    name: "Army of the Emissary",
    type: "Power",
    id: "ID_FMP_POWER_5728",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5728",
    categories: ["Army of the Emissary", "ID_FMP_POWER_5728", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_306", "Half-Elf Emissary", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Arrangement of Disorder"] = new engine.RulesElement({
    name: "Arrangement of Disorder",
    type: "Power",
    id: "ID_FMP_POWER_5951",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5951",
    categories: ["Arrangement of Disorder", "ID_FMP_POWER_5951", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Arrow of Arcane Light"] = new engine.RulesElement({
    name: "Arrow of Arcane Light",
    type: "Power",
    id: "ID_FMP_POWER_5939",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5939",
    categories: ["Arrow of Arcane Light", "ID_FMP_POWER_5939", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Arrow of Cacophony"] = new engine.RulesElement({
    name: "Arrow of Cacophony",
    type: "Power",
    id: "ID_FMP_POWER_5720",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5720",
    categories: ["Arrow of Cacophony", "ID_FMP_POWER_5720", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_304", "Euphonic Bow", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Arrow of Destiny"] = new engine.RulesElement({
    name: "Arrow of Destiny",
    type: "Power",
    id: "ID_FMP_POWER_2989",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2989",
    categories: ["Arrow of Destiny", "ID_FMP_POWER_2989", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Arrow of Ill Omen"] = new engine.RulesElement({
    name: "Arrow of Ill Omen",
    type: "Power",
    id: "ID_FMP_POWER_5685",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5685",
    categories: ["Arrow of Ill Omen", "ID_FMP_POWER_5685", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Arrow of Warning"] = new engine.RulesElement({
    name: "Arrow of Warning",
    type: "Power",
    id: "ID_FMP_POWER_2970",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2970",
    categories: ["Arrow of Warning", "ID_FMP_POWER_2970", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Ascension of the Elder"] = new engine.RulesElement({
    name: "Ascension of the Elder",
    type: "Power",
    id: "ID_FMP_POWER_4250",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4250",
    categories: ["Ascension of the Elder", "ID_FMP_POWER_4250", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Aspect of the Dragon"] = new engine.RulesElement({
    name: "Aspect of the Dragon",
    type: "Power",
    id: "ID_FMP_POWER_6810",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6810",
    categories: ["Aspect of the Dragon", "ID_FMP_POWER_6810", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Assault of Fiery Cuts"] = new engine.RulesElement({
    name: "Assault of Fiery Cuts",
    type: "Power",
    id: "ID_FMP_POWER_5756",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5756",
    categories: ["Assault of Fiery Cuts", "ID_FMP_POWER_5756", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7690"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Assault of Fiery Cuts Secondary Attack"] = new engine.RulesElement({
    name: "Assault of Fiery Cuts Secondary Attack",
    type: "Power",
    id: "ID_FMP_POWER_7690",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7690",
    categories: ["Assault of Fiery Cuts Secondary Attack", "ID_FMP_POWER_7690", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action"]
  });
  byID[te.id] = te;
  
  te = Power["Assured Recovery"] = new engine.RulesElement({
    name: "Assured Recovery",
    type: "Power",
    id: "ID_FMP_POWER_5688",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5688",
    categories: ["Assured Recovery", "ID_FMP_POWER_5688", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Claw"] = new engine.RulesElement({
    name: "Astral Claw",
    type: "Power",
    id: "ID_FMP_POWER_5814",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5814",
    categories: ["Astral Claw", "ID_FMP_POWER_5814", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Wasp"] = new engine.RulesElement({
    name: "Astral Wasp",
    type: "Power",
    id: "ID_FMP_POWER_4019",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4019",
    categories: ["Astral Wasp", "ID_FMP_POWER_4019", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Avatars of Chaos"] = new engine.RulesElement({
    name: "Avatars of Chaos",
    type: "Power",
    id: "ID_FMP_POWER_3204",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3204",
    categories: ["Avatars of Chaos", "ID_FMP_POWER_3204", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Awaken the Dragon"] = new engine.RulesElement({
    name: "Awaken the Dragon",
    type: "Power",
    id: "ID_FMP_POWER_4303",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4303",
    categories: ["Awaken the Dragon", "ID_FMP_POWER_4303", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Azure Talons"] = new engine.RulesElement({
    name: "Azure Talons",
    type: "Power",
    id: "ID_FMP_POWER_3168",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3168",
    categories: ["Azure Talons", "ID_FMP_POWER_3168", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Balance of Fortune"] = new engine.RulesElement({
    name: "Balance of Fortune",
    type: "Power",
    id: "ID_FMP_POWER_2961",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2961",
    categories: ["Balance of Fortune", "ID_FMP_POWER_2961", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Ball Lightning"] = new engine.RulesElement({
    name: "Ball Lightning",
    type: "Power",
    id: "ID_FMP_POWER_2824",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2824",
    categories: ["Ball Lightning", "ID_FMP_POWER_2824", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Binding Light"] = new engine.RulesElement({
    name: "Binding Light",
    type: "Power",
    id: "ID_FMP_POWER_5754",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5754",
    categories: ["Binding Light", "ID_FMP_POWER_5754", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Binding Rhyme"] = new engine.RulesElement({
    name: "Binding Rhyme",
    type: "Power",
    id: "ID_FMP_POWER_3096",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3096",
    categories: ["Binding Rhyme", "ID_FMP_POWER_3096", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Blade Bolt"] = new engine.RulesElement({
    name: "Blade Bolt",
    type: "Power",
    id: "ID_FMP_POWER_5750",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5750",
    categories: ["Blade Bolt", "ID_FMP_POWER_5750", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Blazing Bolts"] = new engine.RulesElement({
    name: "Blazing Bolts",
    type: "Power",
    id: "ID_FMP_POWER_6807",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6807",
    categories: ["Blazing Bolts", "ID_FMP_POWER_6807", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Blazing Lunge"] = new engine.RulesElement({
    name: "Blazing Lunge",
    type: "Power",
    id: "ID_FMP_POWER_3910",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3910",
    categories: ["Blazing Lunge", "ID_FMP_POWER_3910", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Blazing Pursuit"] = new engine.RulesElement({
    name: "Blazing Pursuit",
    type: "Power",
    id: "ID_FMP_POWER_3130",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3130",
    categories: ["Blazing Pursuit", "ID_FMP_POWER_3130", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Blazing Starfall"] = new engine.RulesElement({
    name: "Blazing Starfall",
    type: "Power",
    id: "ID_FMP_POWER_5840",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5840",
    categories: ["Blazing Starfall", "ID_FMP_POWER_5840", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Blinding Bolt"] = new engine.RulesElement({
    name: "Blinding Bolt",
    type: "Power",
    id: "ID_FMP_POWER_3033",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3033",
    categories: ["Blinding Bolt", "ID_FMP_POWER_3033", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Blink Assault"] = new engine.RulesElement({
    name: "Blink Assault",
    type: "Power",
    id: "ID_FMP_POWER_3134",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3134",
    categories: ["Blink Assault", "ID_FMP_POWER_3134", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Blizzard"] = new engine.RulesElement({
    name: "Blizzard",
    type: "Power",
    id: "ID_FMP_POWER_6816",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6816",
    categories: ["Blizzard", "ID_FMP_POWER_6816", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_309", "Blizzard Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Bolt of Power"] = new engine.RulesElement({
    name: "Bolt of Power",
    type: "Power",
    id: "ID_FMP_POWER_5897",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5897",
    categories: ["Bolt of Power", "ID_FMP_POWER_5897", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_313", "Lightning Fury", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Bond of Brotherhood"] = new engine.RulesElement({
    name: "Bond of Brotherhood",
    type: "Power",
    id: "ID_FMP_POWER_4126",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4126",
    categories: ["Bond of Brotherhood", "ID_FMP_POWER_4126", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Borrowed Ascension"] = new engine.RulesElement({
    name: "Borrowed Ascension",
    type: "Power",
    id: "ID_FMP_POWER_5771",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5771",
    categories: ["Borrowed Ascension", "ID_FMP_POWER_5771", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Borrowed Confidence"] = new engine.RulesElement({
    name: "Borrowed Confidence",
    type: "Power",
    id: "ID_FMP_POWER_5759",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5759",
    categories: ["Borrowed Confidence", "ID_FMP_POWER_5759", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Bounding Bolt"] = new engine.RulesElement({
    name: "Bounding Bolt",
    type: "Power",
    id: "ID_FMP_POWER_2383",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2383",
    categories: ["Bounding Bolt", "ID_FMP_POWER_2383", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Boundless"] = new engine.RulesElement({
    name: "Boundless",
    type: "Power",
    id: "ID_FMP_POWER_3988",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3988",
    categories: ["Boundless", "ID_FMP_POWER_3988", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Bravado Strike"] = new engine.RulesElement({
    name: "Bravado Strike",
    type: "Power",
    id: "ID_FMP_POWER_4021",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4021",
    categories: ["Bravado Strike", "ID_FMP_POWER_4021", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Break Enchantment"] = new engine.RulesElement({
    name: "Break Enchantment",
    type: "Power",
    id: "ID_FMP_POWER_2828",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2828",
    categories: ["Break Enchantment", "ID_FMP_POWER_2828", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Breath of Potency"] = new engine.RulesElement({
    name: "Breath of Potency",
    type: "Power",
    id: "ID_FMP_POWER_5867",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5867",
    categories: ["Breath of Potency", "ID_FMP_POWER_5867", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Bubbling Acid"] = new engine.RulesElement({
    name: "Bubbling Acid",
    type: "Power",
    id: "ID_FMP_POWER_2817",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2817",
    categories: ["Bubbling Acid", "ID_FMP_POWER_2817", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7347"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Bubbling Acid Attack"] = new engine.RulesElement({
    name: "Bubbling Acid Attack",
    type: "Power",
    id: "ID_FMP_POWER_7347",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7347",
    categories: ["Bubbling Acid Attack", "ID_FMP_POWER_7347", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Burning Mantle"] = new engine.RulesElement({
    name: "Burning Mantle",
    type: "Power",
    id: "ID_FMP_POWER_3970",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3970",
    categories: ["Burning Mantle", "ID_FMP_POWER_3970", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Caiphon's Leap"] = new engine.RulesElement({
    name: "Caiphon's Leap",
    type: "Power",
    id: "ID_FMP_POWER_5907",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5907",
    categories: ["Caiphon's Leap", "ID_FMP_POWER_5907", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Canon of Avoidance"] = new engine.RulesElement({
    name: "Canon of Avoidance",
    type: "Power",
    id: "ID_FMP_POWER_3116",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3116",
    categories: ["Canon of Avoidance", "ID_FMP_POWER_3116", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Caution of Dispater"] = new engine.RulesElement({
    name: "Caution of Dispater",
    type: "Power",
    id: "ID_FMP_POWER_4216",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4216",
    categories: ["Caution of Dispater", "ID_FMP_POWER_4216", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Celestial Resistance"] = new engine.RulesElement({
    name: "Celestial Resistance",
    type: "Power",
    id: "ID_FMP_POWER_5887",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5887",
    categories: ["Celestial Resistance", "ID_FMP_POWER_5887", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_310", "Celestial Scholar", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Celestial Seal"] = new engine.RulesElement({
    name: "Celestial Seal",
    type: "Power",
    id: "ID_FMP_POWER_5888",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5888",
    categories: ["Celestial Seal", "ID_FMP_POWER_5888", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_310", "Celestial Scholar", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Celestial Sigil"] = new engine.RulesElement({
    name: "Celestial Sigil",
    type: "Power",
    id: "ID_FMP_POWER_5886",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5886",
    categories: ["Celestial Sigil", "ID_FMP_POWER_5886", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_310", "Celestial Scholar", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Chains of Levistus"] = new engine.RulesElement({
    name: "Chains of Levistus",
    type: "Power",
    id: "ID_FMP_POWER_4052",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4052",
    categories: ["Chains of Levistus", "ID_FMP_POWER_4052", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Channel the Signature"] = new engine.RulesElement({
    name: "Channel the Signature",
    type: "Power",
    id: "ID_FMP_POWER_6926",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6926",
    categories: ["Channel the Signature", "ID_FMP_POWER_6926", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_337", "Archspell", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Channeling Shield"] = new engine.RulesElement({
    name: "Channeling Shield",
    type: "Power",
    id: "ID_FMP_POWER_5740",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5740",
    categories: ["Channeling Shield", "ID_FMP_POWER_5740", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Chant of Accuracy"] = new engine.RulesElement({
    name: "Chant of Accuracy",
    type: "Power",
    id: "ID_FMP_POWER_5698",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5698",
    categories: ["Chant of Accuracy", "ID_FMP_POWER_5698", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Chant of Bad Fortune"] = new engine.RulesElement({
    name: "Chant of Bad Fortune",
    type: "Power",
    id: "ID_FMP_POWER_3094",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3094",
    categories: ["Chant of Bad Fortune", "ID_FMP_POWER_3094", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Chaos Infusion"] = new engine.RulesElement({
    name: "Chaos Infusion",
    type: "Power",
    id: "ID_FMP_POWER_3170",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3170",
    categories: ["Chaos Infusion", "ID_FMP_POWER_3170", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Chaos Ray"] = new engine.RulesElement({
    name: "Chaos Ray",
    type: "Power",
    id: "ID_FMP_POWER_3165",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3165",
    categories: ["Chaos Ray", "ID_FMP_POWER_3165", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Chaotic Defense"] = new engine.RulesElement({
    name: "Chaotic Defense",
    type: "Power",
    id: "ID_FMP_POWER_3202",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3202",
    categories: ["Chaotic Defense", "ID_FMP_POWER_3202", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Chill Claws"] = new engine.RulesElement({
    name: "Chill Claws",
    type: "Power",
    id: "ID_FMP_POWER_4025",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4025",
    categories: ["Chill Claws", "ID_FMP_POWER_4025", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Chillsong Stroke"] = new engine.RulesElement({
    name: "Chillsong Stroke",
    type: "Power",
    id: "ID_FMP_POWER_3083",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3083",
    categories: ["Chillsong Stroke", "ID_FMP_POWER_3083", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Chord of Resilience"] = new engine.RulesElement({
    name: "Chord of Resilience",
    type: "Power",
    id: "ID_FMP_POWER_5689",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5689",
    categories: ["Chord of Resilience", "ID_FMP_POWER_5689", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Chorus of Vitality"] = new engine.RulesElement({
    name: "Chorus of Vitality",
    type: "Power",
    id: "ID_FMP_POWER_5704",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5704",
    categories: ["Chorus of Vitality", "ID_FMP_POWER_5704", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Cinder Storm"] = new engine.RulesElement({
    name: "Cinder Storm",
    type: "Power",
    id: "ID_FMP_POWER_2823",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2823",
    categories: ["Cinder Storm", "ID_FMP_POWER_2823", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7348"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Cinder Storm Attack"] = new engine.RulesElement({
    name: "Cinder Storm Attack",
    type: "Power",
    id: "ID_FMP_POWER_7348",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7348",
    categories: ["Cinder Storm Attack", "ID_FMP_POWER_7348", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Clarion Call"] = new engine.RulesElement({
    name: "Clarion Call",
    type: "Power",
    id: "ID_FMP_POWER_4170",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4170",
    categories: ["Clarion Call", "ID_FMP_POWER_4170", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Claws of the Magpie"] = new engine.RulesElement({
    name: "Claws of the Magpie",
    type: "Power",
    id: "ID_FMP_POWER_4227",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4227",
    categories: ["Claws of the Magpie", "ID_FMP_POWER_4227", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Clever Escape"] = new engine.RulesElement({
    name: "Clever Escape",
    type: "Power",
    id: "ID_FMP_POWER_5810",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5810",
    categories: ["Clever Escape", "ID_FMP_POWER_5810", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Climactic Chord"] = new engine.RulesElement({
    name: "Climactic Chord",
    type: "Power",
    id: "ID_FMP_POWER_5710",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5710",
    categories: ["Climactic Chord", "ID_FMP_POWER_5710", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Cloak of Freezing Wind"] = new engine.RulesElement({
    name: "Cloak of Freezing Wind",
    type: "Power",
    id: "ID_FMP_POWER_5884",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5884",
    categories: ["Cloak of Freezing Wind", "ID_FMP_POWER_5884", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_309", "Blizzard Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Cloak of Sound"] = new engine.RulesElement({
    name: "Cloak of Sound",
    type: "Power",
    id: "ID_FMP_POWER_5724",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5724",
    categories: ["Cloak of Sound", "ID_FMP_POWER_5724", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_305", "Grave Caller", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Cloak of Winter Storm"] = new engine.RulesElement({
    name: "Cloak of Winter Storm",
    type: "Power",
    id: "ID_FMP_POWER_5308",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5308",
    categories: ["Cloak of Winter Storm", "ID_FMP_POWER_5308", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Clockwork Precision"] = new engine.RulesElement({
    name: "Clockwork Precision",
    type: "Power",
    id: "ID_FMP_POWER_3117",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3117",
    categories: ["Clockwork Precision", "ID_FMP_POWER_3117", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud of Flies"] = new engine.RulesElement({
    name: "Cloud of Flies",
    type: "Power",
    id: "ID_FMP_POWER_4068",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4068",
    categories: ["Cloud of Flies", "ID_FMP_POWER_4068", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Compulsion"] = new engine.RulesElement({
    name: "Compulsion",
    type: "Power",
    id: "ID_FMP_POWER_3100",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3100",
    categories: ["Compulsion", "ID_FMP_POWER_3100", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Concerted Effort"] = new engine.RulesElement({
    name: "Concerted Effort",
    type: "Power",
    id: "ID_FMP_POWER_2991",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2991",
    categories: ["Concerted Effort", "ID_FMP_POWER_2991", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Concussive Echo"] = new engine.RulesElement({
    name: "Concussive Echo",
    type: "Power",
    id: "ID_FMP_POWER_6903",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6903",
    categories: ["Concussive Echo", "ID_FMP_POWER_6903", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Constrictor's Strike"] = new engine.RulesElement({
    name: "Constrictor's Strike",
    type: "Power",
    id: "ID_FMP_POWER_4009",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4009",
    categories: ["Constrictor's Strike", "ID_FMP_POWER_4009", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Corralling Song"] = new engine.RulesElement({
    name: "Corralling Song",
    type: "Power",
    id: "ID_FMP_POWER_5706",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5706",
    categories: ["Corralling Song", "ID_FMP_POWER_5706", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Corruption Orb"] = new engine.RulesElement({
    name: "Corruption Orb",
    type: "Power",
    id: "ID_FMP_POWER_5847",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5847",
    categories: ["Corruption Orb", "ID_FMP_POWER_5847", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Cosmic Vengeance"] = new engine.RulesElement({
    name: "Cosmic Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_5879",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5879",
    categories: ["Cosmic Vengeance", "ID_FMP_POWER_5879", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Cosmos Call"] = new engine.RulesElement({
    name: "Cosmos Call",
    type: "Power",
    id: "ID_FMP_POWER_5843",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5843",
    categories: ["Cosmos Call", "ID_FMP_POWER_5843", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Counterpoint"] = new engine.RulesElement({
    name: "Counterpoint",
    type: "Power",
    id: "ID_FMP_POWER_5701",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5701",
    categories: ["Counterpoint", "ID_FMP_POWER_5701", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Couplet of Deceptive Weakness"] = new engine.RulesElement({
    name: "Couplet of Deceptive Weakness",
    type: "Power",
    id: "ID_FMP_POWER_3087",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3087",
    categories: ["Couplet of Deceptive Weakness", "ID_FMP_POWER_3087", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Crackling Burst"] = new engine.RulesElement({
    name: "Crackling Burst",
    type: "Power",
    id: "ID_FMP_POWER_3830",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3830",
    categories: ["Crackling Burst", "ID_FMP_POWER_3830", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Crackling Fire"] = new engine.RulesElement({
    name: "Crackling Fire",
    type: "Power",
    id: "ID_FMP_POWER_5913",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5913",
    categories: ["Crackling Fire", "ID_FMP_POWER_5913", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Crashing Winds"] = new engine.RulesElement({
    name: "Crashing Winds",
    type: "Power",
    id: "ID_FMP_POWER_3046",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3046",
    categories: ["Crashing Winds", "ID_FMP_POWER_3046", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Crescendo of Victory"] = new engine.RulesElement({
    name: "Crescendo of Victory",
    type: "Power",
    id: "ID_FMP_POWER_5017",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5017",
    categories: ["Crescendo of Victory", "ID_FMP_POWER_5017", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Crown of Flames"] = new engine.RulesElement({
    name: "Crown of Flames",
    type: "Power",
    id: "ID_FMP_POWER_5873",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5873",
    categories: ["Crown of Flames", "ID_FMP_POWER_5873", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Cruel Fate"] = new engine.RulesElement({
    name: "Cruel Fate",
    type: "Power",
    id: "ID_FMP_POWER_5681",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5681",
    categories: ["Cruel Fate", "ID_FMP_POWER_5681", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Curse of Nessus"] = new engine.RulesElement({
    name: "Curse of Nessus",
    type: "Power",
    id: "ID_FMP_POWER_4125",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4125",
    categories: ["Curse of Nessus", "ID_FMP_POWER_4125", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Cursing Vengeance"] = new engine.RulesElement({
    name: "Cursing Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_5958",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5958",
    categories: ["Cursing Vengeance", "ID_FMP_POWER_5958", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_321", "Dark Reckoner", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Cyclone Pull"] = new engine.RulesElement({
    name: "Cyclone Pull",
    type: "Power",
    id: "ID_FMP_POWER_5861",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5861",
    categories: ["Cyclone Pull", "ID_FMP_POWER_5861", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Dance of the Sword"] = new engine.RulesElement({
    name: "Dance of the Sword",
    type: "Power",
    id: "ID_FMP_POWER_5738",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5738",
    categories: ["Dance of the Sword", "ID_FMP_POWER_5738", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Dancing Bolts"] = new engine.RulesElement({
    name: "Dancing Bolts",
    type: "Power",
    id: "ID_FMP_POWER_5812",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5812",
    categories: ["Dancing Bolts", "ID_FMP_POWER_5812", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7353"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Dancing Bolts Secondary Attack"] = new engine.RulesElement({
    name: "Dancing Bolts Secondary Attack",
    type: "Power",
    id: "ID_FMP_POWER_7353",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7353",
    categories: ["Dancing Bolts Secondary Attack", "ID_FMP_POWER_7353", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7354"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Dancing Bolts Tertiary Attack"] = new engine.RulesElement({
    name: "Dancing Bolts Tertiary Attack",
    type: "Power",
    id: "ID_FMP_POWER_7354",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7354",
    categories: ["Dancing Bolts Tertiary Attack", "ID_FMP_POWER_7354", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Dark Rain of Mutuz-Vot"] = new engine.RulesElement({
    name: "Dark Rain of Mutuz-Vot",
    type: "Power",
    id: "ID_FMP_POWER_5926",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5926",
    categories: ["Dark Rain of Mutuz-Vot", "ID_FMP_POWER_5926", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Dark Reach of Xevut"] = new engine.RulesElement({
    name: "Dark Reach of Xevut",
    type: "Power",
    id: "ID_FMP_POWER_4189",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4189",
    categories: ["Dark Reach of Xevut", "ID_FMP_POWER_4189", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Darksword Bolt"] = new engine.RulesElement({
    name: "Darksword Bolt",
    type: "Power",
    id: "ID_FMP_POWER_5773",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5773",
    categories: ["Darksword Bolt", "ID_FMP_POWER_5773", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Darkworm Feast"] = new engine.RulesElement({
    name: "Darkworm Feast",
    type: "Power",
    id: "ID_FMP_POWER_4051",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4051",
    categories: ["Darkworm Feast", "ID_FMP_POWER_4051", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Daunting Presence"] = new engine.RulesElement({
    name: "Daunting Presence",
    type: "Power",
    id: "ID_FMP_POWER_6899",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6899",
    categories: ["Daunting Presence", "ID_FMP_POWER_6899", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Day and Night"] = new engine.RulesElement({
    name: "Day and Night",
    type: "Power",
    id: "ID_FMP_POWER_5865",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5865",
    categories: ["Day and Night", "ID_FMP_POWER_5865", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Dazing Rebuke"] = new engine.RulesElement({
    name: "Dazing Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_3945",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3945",
    categories: ["Dazing Rebuke", "ID_FMP_POWER_3945", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Dazzling Display"] = new engine.RulesElement({
    name: "Dazzling Display",
    type: "Power",
    id: "ID_FMP_POWER_5762",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5762",
    categories: ["Dazzling Display", "ID_FMP_POWER_5762", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Dazzling Starlight"] = new engine.RulesElement({
    name: "Dazzling Starlight",
    type: "Power",
    id: "ID_FMP_POWER_5862",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5862",
    categories: ["Dazzling Starlight", "ID_FMP_POWER_5862", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Deadly Ensnarement"] = new engine.RulesElement({
    name: "Deadly Ensnarement",
    type: "Power",
    id: "ID_FMP_POWER_5785",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5785",
    categories: ["Deadly Ensnarement", "ID_FMP_POWER_5785", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_317", "Sage of Fate's Bonds", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Deadly Judgment"] = new engine.RulesElement({
    name: "Deadly Judgment",
    type: "Power",
    id: "ID_FMP_POWER_5956",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5956",
    categories: ["Deadly Judgment", "ID_FMP_POWER_5956", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_321", "Dark Reckoner", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Death's Blade"] = new engine.RulesElement({
    name: "Death's Blade",
    type: "Power",
    id: "ID_FMP_POWER_5757",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5757",
    categories: ["Death's Blade", "ID_FMP_POWER_5757", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Deceptive Shadows"] = new engine.RulesElement({
    name: "Deceptive Shadows",
    type: "Power",
    id: "ID_FMP_POWER_4042",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4042",
    categories: ["Deceptive Shadows", "ID_FMP_POWER_4042", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Decree of Khirad"] = new engine.RulesElement({
    name: "Decree of Khirad",
    type: "Power",
    id: "ID_FMP_POWER_5905",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5905",
    categories: ["Decree of Khirad", "ID_FMP_POWER_5905", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Deep Shroud"] = new engine.RulesElement({
    name: "Deep Shroud",
    type: "Power",
    id: "ID_FMP_POWER_3207",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3207",
    categories: ["Deep Shroud", "ID_FMP_POWER_3207", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Deific Decay"] = new engine.RulesElement({
    name: "Deific Decay",
    type: "Power",
    id: "ID_FMP_POWER_5962",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5962",
    categories: ["Deific Decay", "ID_FMP_POWER_5962", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_323", "God Fragment", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Deific Doom"] = new engine.RulesElement({
    name: "Deific Doom",
    type: "Power",
    id: "ID_FMP_POWER_5963",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5963",
    categories: ["Deific Doom", "ID_FMP_POWER_5963", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_323", "God Fragment", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Delban's Deadly Attention"] = new engine.RulesElement({
    name: "Delban's Deadly Attention",
    type: "Power",
    id: "ID_FMP_POWER_5910",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5910",
    categories: ["Delban's Deadly Attention", "ID_FMP_POWER_5910", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Despair of Zhudun"] = new engine.RulesElement({
    name: "Despair of Zhudun",
    type: "Power",
    id: "ID_FMP_POWER_6864",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6864",
    categories: ["Despair of Zhudun", "ID_FMP_POWER_6864", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Destiny Inversion"] = new engine.RulesElement({
    name: "Destiny Inversion",
    type: "Power",
    id: "ID_FMP_POWER_4120",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4120",
    categories: ["Destiny Inversion", "ID_FMP_POWER_4120", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Devil's Trade"] = new engine.RulesElement({
    name: "Devil's Trade",
    type: "Power",
    id: "ID_FMP_POWER_4063",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4063",
    categories: ["Devil's Trade", "ID_FMP_POWER_4063", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Devouring Death"] = new engine.RulesElement({
    name: "Devouring Death",
    type: "Power",
    id: "ID_FMP_POWER_5930",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5930",
    categories: ["Devouring Death", "ID_FMP_POWER_5930", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Dimensional Bond"] = new engine.RulesElement({
    name: "Dimensional Bond",
    type: "Power",
    id: "ID_FMP_POWER_3922",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3922",
    categories: ["Dimensional Bond", "ID_FMP_POWER_3922", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Dimensional Vortex"] = new engine.RulesElement({
    name: "Dimensional Vortex",
    type: "Power",
    id: "ID_FMP_POWER_5742",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5742",
    categories: ["Dimensional Vortex", "ID_FMP_POWER_5742", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Dirge of Inescapable Doom"] = new engine.RulesElement({
    name: "Dirge of Inescapable Doom",
    type: "Power",
    id: "ID_FMP_POWER_9781",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=9781",
    categories: ["Dirge of Inescapable Doom", "ID_FMP_POWER_9781", "ID_FMP_CLASS_FEATURE_1355", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Dominant Winds"] = new engine.RulesElement({
    name: "Dominant Winds",
    type: "Power",
    id: "ID_FMP_POWER_3064",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3064",
    categories: ["Dominant Winds", "ID_FMP_POWER_3064", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Doom of Chaos"] = new engine.RulesElement({
    name: "Doom of Chaos",
    type: "Power",
    id: "ID_FMP_POWER_3199",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3199",
    categories: ["Doom of Chaos", "ID_FMP_POWER_3199", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Doomsday Portent"] = new engine.RulesElement({
    name: "Doomsday Portent",
    type: "Power",
    id: "ID_FMP_POWER_5974",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5974",
    categories: ["Doomsday Portent", "ID_FMP_POWER_5974", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_327", "Sea Tyrant Oracle", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Downbeat of Wings"] = new engine.RulesElement({
    name: "Downbeat of Wings",
    type: "Power",
    id: "ID_FMP_POWER_3177",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3177",
    categories: ["Downbeat of Wings", "ID_FMP_POWER_3177", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon's Resolve"] = new engine.RulesElement({
    name: "Dragon's Resolve",
    type: "Power",
    id: "ID_FMP_POWER_5858",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5858",
    categories: ["Dragon's Resolve", "ID_FMP_POWER_5858", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon's Teeth"] = new engine.RulesElement({
    name: "Dragon's Teeth",
    type: "Power",
    id: "ID_FMP_POWER_3137",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3137",
    categories: ["Dragon's Teeth", "ID_FMP_POWER_3137", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Dramatic Shift"] = new engine.RulesElement({
    name: "Dramatic Shift",
    type: "Power",
    id: "ID_FMP_POWER_5690",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5690",
    categories: ["Dramatic Shift", "ID_FMP_POWER_5690", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Dual Lightning Strike"] = new engine.RulesElement({
    name: "Dual Lightning Strike",
    type: "Power",
    id: "ID_FMP_POWER_5743",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5743",
    categories: ["Dual Lightning Strike", "ID_FMP_POWER_5743", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Earth Brute"] = new engine.RulesElement({
    name: "Earth Brute",
    type: "Power",
    id: "ID_FMP_POWER_4032",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4032",
    categories: ["Earth Brute", "ID_FMP_POWER_4032", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Echoing Roar"] = new engine.RulesElement({
    name: "Echoing Roar",
    type: "Power",
    id: "ID_FMP_POWER_5677",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5677",
    categories: ["Echoing Roar", "ID_FMP_POWER_5677", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Eldritch Chains"] = new engine.RulesElement({
    name: "Eldritch Chains",
    type: "Power",
    id: "ID_FMP_POWER_3141",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3141",
    categories: ["Eldritch Chains", "ID_FMP_POWER_3141", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Elemental Stance"] = new engine.RulesElement({
    name: "Elemental Stance",
    type: "Power",
    id: "ID_FMP_POWER_5781",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5781",
    categories: ["Elemental Stance", "ID_FMP_POWER_5781", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_315", "Arcane Hunter", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Emerald Eye"] = new engine.RulesElement({
    name: "Emerald Eye",
    type: "Power",
    id: "ID_FMP_POWER_4110",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4110",
    categories: ["Emerald Eye", "ID_FMP_POWER_4110", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Emissary's Gambit"] = new engine.RulesElement({
    name: "Emissary's Gambit",
    type: "Power",
    id: "ID_FMP_POWER_5727",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5727",
    categories: ["Emissary's Gambit", "ID_FMP_POWER_5727", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_306", "Half-Elf Emissary", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Emissary's Onslaught"] = new engine.RulesElement({
    name: "Emissary's Onslaught",
    type: "Power",
    id: "ID_FMP_POWER_5726",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5726",
    categories: ["Emissary's Onslaught", "ID_FMP_POWER_5726", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_306", "Half-Elf Emissary", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Empowering Lightning"] = new engine.RulesElement({
    name: "Empowering Lightning",
    type: "Power",
    id: "ID_FMP_POWER_5801",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5801",
    categories: ["Empowering Lightning", "ID_FMP_POWER_5801", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["End of Luck"] = new engine.RulesElement({
    name: "End of Luck",
    type: "Power",
    id: "ID_FMP_POWER_5731",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5731",
    categories: ["End of Luck", "ID_FMP_POWER_5731", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_307", "Karmic Shaper", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Enduring Struggle"] = new engine.RulesElement({
    name: "Enduring Struggle",
    type: "Power",
    id: "ID_FMP_POWER_2958",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2958",
    categories: ["Enduring Struggle", "ID_FMP_POWER_2958", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Enduring Summons"] = new engine.RulesElement({
    name: "Enduring Summons",
    type: "Power",
    id: "ID_FMP_POWER_5825",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5825",
    categories: ["Enduring Summons", "ID_FMP_POWER_5825", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_330", "Bonded Summoner", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Enemies Abound"] = new engine.RulesElement({
    name: "Enemies Abound",
    type: "Power",
    id: "ID_FMP_POWER_3221",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3221",
    categories: ["Enemies Abound", "ID_FMP_POWER_3221", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Energy Theft"] = new engine.RulesElement({
    name: "Energy Theft",
    type: "Power",
    id: "ID_FMP_POWER_5744",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5744",
    categories: ["Energy Theft", "ID_FMP_POWER_5744", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Enervating Slash"] = new engine.RulesElement({
    name: "Enervating Slash",
    type: "Power",
    id: "ID_FMP_POWER_5745",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5745",
    categories: ["Enervating Slash", "ID_FMP_POWER_5745", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Ensnaring Bolts"] = new engine.RulesElement({
    name: "Ensnaring Bolts",
    type: "Power",
    id: "ID_FMP_POWER_3961",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3961",
    categories: ["Ensnaring Bolts", "ID_FMP_POWER_3961", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Entangling Force"] = new engine.RulesElement({
    name: "Entangling Force",
    type: "Power",
    id: "ID_FMP_POWER_5809",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5809",
    categories: ["Entangling Force", "ID_FMP_POWER_5809", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Entangling Opening"] = new engine.RulesElement({
    name: "Entangling Opening",
    type: "Power",
    id: "ID_FMP_POWER_3080",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3080",
    categories: ["Entangling Opening", "ID_FMP_POWER_3080", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Entropic Reshuffling"] = new engine.RulesElement({
    name: "Entropic Reshuffling",
    type: "Power",
    id: "ID_FMP_POWER_5827",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5827",
    categories: ["Entropic Reshuffling", "ID_FMP_POWER_5827", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_334", "Weaver of Chance", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Essence Form"] = new engine.RulesElement({
    name: "Essence Form",
    type: "Power",
    id: "ID_FMP_POWER_5893",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5893",
    categories: ["Essence Form", "ID_FMP_POWER_5893", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_312", "Essence Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Essence of Arcane Blood"] = new engine.RulesElement({
    name: "Essence of Arcane Blood",
    type: "Power",
    id: "ID_FMP_POWER_5892",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5892",
    categories: ["Essence of Arcane Blood", "ID_FMP_POWER_5892", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_312", "Essence Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Essence Prism"] = new engine.RulesElement({
    name: "Essence Prism",
    type: "Power",
    id: "ID_FMP_POWER_3163",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3163",
    categories: ["Essence Prism", "ID_FMP_POWER_3163", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Evard's Dreadful Mist"] = new engine.RulesElement({
    name: "Evard's Dreadful Mist",
    type: "Power",
    id: "ID_FMP_POWER_182",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=182",
    categories: ["Evard's Dreadful Mist", "ID_FMP_POWER_182", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7345"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Evard's Dreadful Mist Attack"] = new engine.RulesElement({
    name: "Evard's Dreadful Mist Attack",
    type: "Power",
    id: "ID_FMP_POWER_7345",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7345",
    categories: ["Evard's Dreadful Mist Attack", "ID_FMP_POWER_7345", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Evard's Ebon Bindings"] = new engine.RulesElement({
    name: "Evard's Ebon Bindings",
    type: "Power",
    id: "ID_FMP_POWER_2825",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2825",
    categories: ["Evard's Ebon Bindings", "ID_FMP_POWER_2825", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Exploit Weakness"] = new engine.RulesElement({
    name: "Exploit Weakness",
    type: "Power",
    id: "ID_FMP_POWER_5780",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5780",
    categories: ["Exploit Weakness", "ID_FMP_POWER_5780", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_315", "Arcane Hunter", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Extinguishing Rain"] = new engine.RulesElement({
    name: "Extinguishing Rain",
    type: "Power",
    id: "ID_FMP_POWER_3056",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3056",
    categories: ["Extinguishing Rain", "ID_FMP_POWER_3056", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Eyes of the Spider Queen"] = new engine.RulesElement({
    name: "Eyes of the Spider Queen",
    type: "Power",
    id: "ID_FMP_POWER_5908",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5908",
    categories: ["Eyes of the Spider Queen", "ID_FMP_POWER_5908", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Eyes of the Vestige"] = new engine.RulesElement({
    name: "Eyes of the Vestige",
    type: "Power",
    id: "ID_FMP_POWER_6855",
    source: "Arcane Power,Adventurer's Vault 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6855",
    categories: ["Eyes of the Vestige", "ID_FMP_POWER_6855", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Eyes of the Victim"] = new engine.RulesElement({
    name: "Eyes of the Victim",
    type: "Power",
    id: "ID_FMP_POWER_5952",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5952",
    categories: ["Eyes of the Victim", "ID_FMP_POWER_5952", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Face of Death"] = new engine.RulesElement({
    name: "Face of Death",
    type: "Power",
    id: "ID_FMP_POWER_5807",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5807",
    categories: ["Face of Death", "ID_FMP_POWER_5807", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Falcon's Mark"] = new engine.RulesElement({
    name: "Falcon's Mark",
    type: "Power",
    id: "ID_FMP_POWER_3129",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3129",
    categories: ["Falcon's Mark", "ID_FMP_POWER_3129", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Fated Vulnerability"] = new engine.RulesElement({
    name: "Fated Vulnerability",
    type: "Power",
    id: "ID_FMP_POWER_5702",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5702",
    categories: ["Fated Vulnerability", "ID_FMP_POWER_5702", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Fate's Chaos"] = new engine.RulesElement({
    name: "Fate's Chaos",
    type: "Power",
    id: "ID_FMP_POWER_5852",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5852",
    categories: ["Fate's Chaos", "ID_FMP_POWER_5852", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Feast of Souls"] = new engine.RulesElement({
    name: "Feast of Souls",
    type: "Power",
    id: "ID_FMP_POWER_4098",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4098",
    categories: ["Feast of Souls", "ID_FMP_POWER_4098", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Fey Bargain"] = new engine.RulesElement({
    name: "Fey Bargain",
    type: "Power",
    id: "ID_FMP_POWER_5909",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5909",
    categories: ["Fey Bargain", "ID_FMP_POWER_5909", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Feywild Grace"] = new engine.RulesElement({
    name: "Feywild Grace",
    type: "Power",
    id: "ID_FMP_POWER_3957",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3957",
    categories: ["Feywild Grace", "ID_FMP_POWER_3957", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Figment Step"] = new engine.RulesElement({
    name: "Figment Step",
    type: "Power",
    id: "ID_FMP_POWER_6931",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6931",
    categories: ["Figment Step", "ID_FMP_POWER_6931", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_342", "Parable", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Fire and Thunder"] = new engine.RulesElement({
    name: "Fire and Thunder",
    type: "Power",
    id: "ID_FMP_POWER_5794",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5794",
    categories: ["Fire and Thunder", "ID_FMP_POWER_5794", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_319", "Sword of Assault", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Fire Shield"] = new engine.RulesElement({
    name: "Fire Shield",
    type: "Power",
    id: "ID_FMP_POWER_2835",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2835",
    categories: ["Fire Shield", "ID_FMP_POWER_2835", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Firelasher's Lunge"] = new engine.RulesElement({
    name: "Firelasher's Lunge",
    type: "Power",
    id: "ID_FMP_POWER_3979",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3979",
    categories: ["Firelasher's Lunge", "ID_FMP_POWER_3979", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Firemetal Shot"] = new engine.RulesElement({
    name: "Firemetal Shot",
    type: "Power",
    id: "ID_FMP_POWER_3075",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3075",
    categories: ["Firemetal Shot", "ID_FMP_POWER_3075", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Fist of Force"] = new engine.RulesElement({
    name: "Fist of Force",
    type: "Power",
    id: "ID_FMP_POWER_3965",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3965",
    categories: ["Fist of Force", "ID_FMP_POWER_3965", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Flaw Seeking Strike"] = new engine.RulesElement({
    name: "Flaw Seeking Strike",
    type: "Power",
    id: "ID_FMP_POWER_5782",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5782",
    categories: ["Flaw Seeking Strike", "ID_FMP_POWER_5782", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_315", "Arcane Hunter", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Flight of Dragons"] = new engine.RulesElement({
    name: "Flight of Dragons",
    type: "Power",
    id: "ID_FMP_POWER_3211",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3211",
    categories: ["Flight of Dragons", "ID_FMP_POWER_3211", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Float"] = new engine.RulesElement({
    name: "Float",
    type: "Power",
    id: "ID_FMP_POWER_4105",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4105",
    categories: ["Float", "ID_FMP_POWER_4105", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Focused Chaos"] = new engine.RulesElement({
    name: "Focused Chaos",
    type: "Power",
    id: "ID_FMP_POWER_5845",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5845",
    categories: ["Focused Chaos", "ID_FMP_POWER_5845", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Focused Sound"] = new engine.RulesElement({
    name: "Focused Sound",
    type: "Power",
    id: "ID_FMP_POWER_5676",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5676",
    categories: ["Focused Sound", "ID_FMP_POWER_5676", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Foe Binder"] = new engine.RulesElement({
    name: "Foe Binder",
    type: "Power",
    id: "ID_FMP_POWER_5783",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5783",
    categories: ["Foe Binder", "ID_FMP_POWER_5783", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_317", "Sage of Fate's Bonds", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Fog Form"] = new engine.RulesElement({
    name: "Fog Form",
    type: "Power",
    id: "ID_FMP_POWER_3059",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3059",
    categories: ["Fog Form", "ID_FMP_POWER_3059", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Forbiddance of the Ninth"] = new engine.RulesElement({
    name: "Forbiddance of the Ninth",
    type: "Power",
    id: "ID_FMP_POWER_5953",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5953",
    categories: ["Forbiddance of the Ninth", "ID_FMP_POWER_5953", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7339"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Forbiddance of the Ninth Attack"] = new engine.RulesElement({
    name: "Forbiddance of the Ninth Attack",
    type: "Power",
    id: "ID_FMP_POWER_7339",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7339",
    categories: ["Forbiddance of the Ninth Attack", "ID_FMP_POWER_7339", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Force of Nature"] = new engine.RulesElement({
    name: "Force of Nature",
    type: "Power",
    id: "ID_FMP_POWER_4248",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4248",
    categories: ["Force of Nature", "ID_FMP_POWER_4248", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Forceful Dismissal"] = new engine.RulesElement({
    name: "Forceful Dismissal",
    type: "Power",
    id: "ID_FMP_POWER_5751",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5751",
    categories: ["Forceful Dismissal", "ID_FMP_POWER_5751", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Forceful Rebuke"] = new engine.RulesElement({
    name: "Forceful Rebuke",
    type: "Power",
    id: "ID_FMP_POWER_5766",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5766",
    categories: ["Forceful Rebuke", "ID_FMP_POWER_5766", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Fortune Binding"] = new engine.RulesElement({
    name: "Fortune Binding",
    type: "Power",
    id: "ID_FMP_POWER_4069",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4069",
    categories: ["Fortune Binding", "ID_FMP_POWER_4069", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Fortune's Reversal"] = new engine.RulesElement({
    name: "Fortune's Reversal",
    type: "Power",
    id: "ID_FMP_POWER_4055",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4055",
    categories: ["Fortune's Reversal", "ID_FMP_POWER_4055", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Fox's Feint"] = new engine.RulesElement({
    name: "Fox's Feint",
    type: "Power",
    id: "ID_FMP_POWER_3892",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3892",
    categories: ["Fox's Feint", "ID_FMP_POWER_3892", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Freezing Bolts"] = new engine.RulesElement({
    name: "Freezing Bolts",
    type: "Power",
    id: "ID_FMP_POWER_5817",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5817",
    categories: ["Freezing Bolts", "ID_FMP_POWER_5817", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Freezing Swordburst"] = new engine.RulesElement({
    name: "Freezing Swordburst",
    type: "Power",
    id: "ID_FMP_POWER_4015",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4015",
    categories: ["Freezing Swordburst", "ID_FMP_POWER_4015", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Furious Bolts"] = new engine.RulesElement({
    name: "Furious Bolts",
    type: "Power",
    id: "ID_FMP_POWER_5895",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5895",
    categories: ["Furious Bolts", "ID_FMP_POWER_5895", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_313", "Lightning Fury", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Furnace of Sand"] = new engine.RulesElement({
    name: "Furnace of Sand",
    type: "Power",
    id: "ID_FMP_POWER_71",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=71",
    categories: ["Furnace of Sand", "ID_FMP_POWER_71", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Fury of Dragotha"] = new engine.RulesElement({
    name: "Fury of Dragotha",
    type: "Power",
    id: "ID_FMP_POWER_3189",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3189",
    categories: ["Fury of Dragotha", "ID_FMP_POWER_3189", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Gale Burst"] = new engine.RulesElement({
    name: "Gale Burst",
    type: "Power",
    id: "ID_FMP_POWER_5866",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5866",
    categories: ["Gale Burst", "ID_FMP_POWER_5866", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Gates of Hell"] = new engine.RulesElement({
    name: "Gates of Hell",
    type: "Power",
    id: "ID_FMP_POWER_5966",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5966",
    categories: ["Gates of Hell", "ID_FMP_POWER_5966", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_324", "Hellbringer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Ghost Step"] = new engine.RulesElement({
    name: "Ghost Step",
    type: "Power",
    id: "ID_FMP_POWER_3900",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3900",
    categories: ["Ghost Step", "ID_FMP_POWER_3900", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Ghost Sword"] = new engine.RulesElement({
    name: "Ghost Sword",
    type: "Power",
    id: "ID_FMP_POWER_5786",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5786",
    categories: ["Ghost Sword", "ID_FMP_POWER_5786", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_316", "Ghost Blade", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Ghost Walk"] = new engine.RulesElement({
    name: "Ghost Walk",
    type: "Power",
    id: "ID_FMP_POWER_4013",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4013",
    categories: ["Ghost Walk", "ID_FMP_POWER_4013", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Glacial Armor"] = new engine.RulesElement({
    name: "Glacial Armor",
    type: "Power",
    id: "ID_FMP_POWER_3185",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3185",
    categories: ["Glacial Armor", "ID_FMP_POWER_3185", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Glimpse the Future"] = new engine.RulesElement({
    name: "Glimpse the Future",
    type: "Power",
    id: "ID_FMP_POWER_2993",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2993",
    categories: ["Glimpse the Future", "ID_FMP_POWER_2993", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Glitterdust"] = new engine.RulesElement({
    name: "Glitterdust",
    type: "Power",
    id: "ID_FMP_POWER_2375",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2375",
    categories: ["Glitterdust", "ID_FMP_POWER_2375", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Globe of Invulnerability"] = new engine.RulesElement({
    name: "Globe of Invulnerability",
    type: "Power",
    id: "ID_FMP_POWER_2839",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2839",
    categories: ["Globe of Invulnerability", "ID_FMP_POWER_2839", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_8", "force", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Golden Mean"] = new engine.RulesElement({
    name: "Golden Mean",
    type: "Power",
    id: "ID_FMP_POWER_6929",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6929",
    categories: ["Golden Mean", "ID_FMP_POWER_6929", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_340", "Lord of Fate", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Grasping Shadows"] = new engine.RulesElement({
    name: "Grasping Shadows",
    type: "Power",
    id: "ID_FMP_POWER_3215",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3215",
    categories: ["Grasping Shadows", "ID_FMP_POWER_3215", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Grease"] = new engine.RulesElement({
    name: "Grease",
    type: "Power",
    id: "ID_FMP_POWER_2351",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2351",
    categories: ["Grease", "ID_FMP_POWER_2351", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7340"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Grease Attack"] = new engine.RulesElement({
    name: "Grease Attack",
    type: "Power",
    id: "ID_FMP_POWER_7340",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7340",
    categories: ["Grease Attack", "ID_FMP_POWER_7340", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Gripping Chains"] = new engine.RulesElement({
    name: "Gripping Chains",
    type: "Power",
    id: "ID_FMP_POWER_65",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=65",
    categories: ["Gripping Chains", "ID_FMP_POWER_65", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian Blades"] = new engine.RulesElement({
    name: "Guardian Blades",
    type: "Power",
    id: "ID_FMP_POWER_6900",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6900",
    categories: ["Guardian Blades", "ID_FMP_POWER_6900", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Guardian's Breath"] = new engine.RulesElement({
    name: "Guardian's Breath",
    type: "Power",
    id: "ID_FMP_POWER_5889",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5889",
    categories: ["Guardian's Breath", "ID_FMP_POWER_5889", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_311", "Dragon Guardian", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Guillaume's Veil"] = new engine.RulesElement({
    name: "Guillaume's Veil",
    type: "Power",
    id: "ID_FMP_POWER_5837",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5837",
    categories: ["Guillaume's Veil", "ID_FMP_POWER_5837", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_333", "Unseen Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Hammerfall Step"] = new engine.RulesElement({
    name: "Hammerfall Step",
    type: "Power",
    id: "ID_FMP_POWER_5821",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5821",
    categories: ["Hammerfall Step", "ID_FMP_POWER_5821", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_329", "Arcane Wayfarer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Haste"] = new engine.RulesElement({
    name: "Haste",
    type: "Power",
    id: "ID_FMP_POWER_4123",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4123",
    categories: ["Haste", "ID_FMP_POWER_4123", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Hekiah's Trance"] = new engine.RulesElement({
    name: "Hekiah's Trance",
    type: "Power",
    id: "ID_FMP_POWER_5959",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5959",
    categories: ["Hekiah's Trance", "ID_FMP_POWER_5959", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_322", "Entrancing Mystic", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Hellish Firestorm"] = new engine.RulesElement({
    name: "Hellish Firestorm",
    type: "Power",
    id: "ID_FMP_POWER_5880",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5880",
    categories: ["Hellish Firestorm", "ID_FMP_POWER_5880", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Hellspike Assault"] = new engine.RulesElement({
    name: "Hellspike Assault",
    type: "Power",
    id: "ID_FMP_POWER_5752",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5752",
    categories: ["Hellspike Assault", "ID_FMP_POWER_5752", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Heroic Interjection"] = new engine.RulesElement({
    name: "Heroic Interjection",
    type: "Power",
    id: "ID_FMP_POWER_3125",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3125",
    categories: ["Heroic Interjection", "ID_FMP_POWER_3125", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Hero's Arrow"] = new engine.RulesElement({
    name: "Hero's Arrow",
    type: "Power",
    id: "ID_FMP_POWER_4177",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4177",
    categories: ["Hero's Arrow", "ID_FMP_POWER_4177", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Hero's Defense"] = new engine.RulesElement({
    name: "Hero's Defense",
    type: "Power",
    id: "ID_FMP_POWER_4226",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4226",
    categories: ["Hero's Defense", "ID_FMP_POWER_4226", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Hex of Abandonment"] = new engine.RulesElement({
    name: "Hex of Abandonment",
    type: "Power",
    id: "ID_FMP_POWER_5970",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5970",
    categories: ["Hex of Abandonment", "ID_FMP_POWER_5970", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_325", "Hexer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Hexblast"] = new engine.RulesElement({
    name: "Hexblast",
    type: "Power",
    id: "ID_FMP_POWER_5968",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5968",
    categories: ["Hexblast", "ID_FMP_POWER_5968", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_325", "Hexer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Hole in the Mind"] = new engine.RulesElement({
    name: "Hole in the Mind",
    type: "Power",
    id: "ID_FMP_POWER_5694",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5694",
    categories: ["Hole in the Mind", "ID_FMP_POWER_5694", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Horrid Whispers"] = new engine.RulesElement({
    name: "Horrid Whispers",
    type: "Power",
    id: "ID_FMP_POWER_5802",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5802",
    categories: ["Horrid Whispers", "ID_FMP_POWER_5802", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Horrifying Hatching"] = new engine.RulesElement({
    name: "Horrifying Hatching",
    type: "Power",
    id: "ID_FMP_POWER_4115",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4115",
    categories: ["Horrifying Hatching", "ID_FMP_POWER_4115", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Horrifying Truth"] = new engine.RulesElement({
    name: "Horrifying Truth",
    type: "Power",
    id: "ID_FMP_POWER_3114",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3114",
    categories: ["Horrifying Truth", "ID_FMP_POWER_3114", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Host of Shields"] = new engine.RulesElement({
    name: "Host of Shields",
    type: "Power",
    id: "ID_FMP_POWER_3903",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3903",
    categories: ["Host of Shields", "ID_FMP_POWER_3903", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Howling Hurricane"] = new engine.RulesElement({
    name: "Howling Hurricane",
    type: "Power",
    id: "ID_FMP_POWER_5856",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5856",
    categories: ["Howling Hurricane", "ID_FMP_POWER_5856", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Howling Tempest"] = new engine.RulesElement({
    name: "Howling Tempest",
    type: "Power",
    id: "ID_FMP_POWER_3034",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3034",
    categories: ["Howling Tempest", "ID_FMP_POWER_3034", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Hunter's Pursuit"] = new engine.RulesElement({
    name: "Hunter's Pursuit",
    type: "Power",
    id: "ID_FMP_POWER_5758",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5758",
    categories: ["Hunter's Pursuit", "ID_FMP_POWER_5758", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Hypnotic Pattern"] = new engine.RulesElement({
    name: "Hypnotic Pattern",
    type: "Power",
    id: "ID_FMP_POWER_4020",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4020",
    categories: ["Hypnotic Pattern", "ID_FMP_POWER_4020", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7343"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Hypnotic Pattern Attack"] = new engine.RulesElement({
    name: "Hypnotic Pattern Attack",
    type: "Power",
    id: "ID_FMP_POWER_7343",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7343",
    categories: ["Hypnotic Pattern Attack", "ID_FMP_POWER_7343", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Hypnotic Swordplay"] = new engine.RulesElement({
    name: "Hypnotic Swordplay",
    type: "Power",
    id: "ID_FMP_POWER_3959",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3959",
    categories: ["Hypnotic Swordplay", "ID_FMP_POWER_3959", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Ice Javelins"] = new engine.RulesElement({
    name: "Ice Javelins",
    type: "Power",
    id: "ID_FMP_POWER_3035",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3035",
    categories: ["Ice Javelins", "ID_FMP_POWER_3035", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Ice Stalagmites"] = new engine.RulesElement({
    name: "Ice Stalagmites",
    type: "Power",
    id: "ID_FMP_POWER_3041",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3041",
    categories: ["Ice Stalagmites", "ID_FMP_POWER_3041", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Iceshard Shot"] = new engine.RulesElement({
    name: "Iceshard Shot",
    type: "Power",
    id: "ID_FMP_POWER_3108",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3108",
    categories: ["Iceshard Shot", "ID_FMP_POWER_3108", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Icy Calling"] = new engine.RulesElement({
    name: "Icy Calling",
    type: "Power",
    id: "ID_FMP_POWER_5834",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5834",
    categories: ["Icy Calling", "ID_FMP_POWER_5834", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_332", "Rimetongue Caller", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Idyll of Calm"] = new engine.RulesElement({
    name: "Idyll of Calm",
    type: "Power",
    id: "ID_FMP_POWER_2384",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2384",
    categories: ["Idyll of Calm", "ID_FMP_POWER_2384", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Illuminating Stars"] = new engine.RulesElement({
    name: "Illuminating Stars",
    type: "Power",
    id: "ID_FMP_POWER_2829",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2829",
    categories: ["Illuminating Stars", "ID_FMP_POWER_2829", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Illusory Ambush"] = new engine.RulesElement({
    name: "Illusory Ambush",
    type: "Power",
    id: "ID_FMP_POWER_3214",
    source: "Arcane Power,Adventurer's Vault 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3214",
    categories: ["Illusory Ambush", "ID_FMP_POWER_3214", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Illusory Assailant"] = new engine.RulesElement({
    name: "Illusory Assailant",
    type: "Power",
    id: "ID_FMP_POWER_6904",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6904",
    categories: ["Illusory Assailant", "ID_FMP_POWER_6904", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Illusory Wall"] = new engine.RulesElement({
    name: "Illusory Wall",
    type: "Power",
    id: "ID_FMP_POWER_3222",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3222",
    categories: ["Illusory Wall", "ID_FMP_POWER_3222", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Inescapable Fate"] = new engine.RulesElement({
    name: "Inescapable Fate",
    type: "Power",
    id: "ID_FMP_POWER_6611",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6611",
    categories: ["Inescapable Fate", "ID_FMP_POWER_6611", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Inevitability of the Grave"] = new engine.RulesElement({
    name: "Inevitability of the Grave",
    type: "Power",
    id: "ID_FMP_POWER_5725",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5725",
    categories: ["Inevitability of the Grave", "ID_FMP_POWER_5725", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_305", "Grave Caller", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Infernal Chains"] = new engine.RulesElement({
    name: "Infernal Chains",
    type: "Power",
    id: "ID_FMP_POWER_5940",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5940",
    categories: ["Infernal Chains", "ID_FMP_POWER_5940", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Insightful Shot"] = new engine.RulesElement({
    name: "Insightful Shot",
    type: "Power",
    id: "ID_FMP_POWER_2955",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2955",
    categories: ["Insightful Shot", "ID_FMP_POWER_2955", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Inspired Solutions"] = new engine.RulesElement({
    name: "Inspired Solutions",
    type: "Power",
    id: "ID_FMP_POWER_5733",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5733",
    categories: ["Inspired Solutions", "ID_FMP_POWER_5733", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_308", "Life Singer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Instruction in Darkness"] = new engine.RulesElement({
    name: "Instruction in Darkness",
    type: "Power",
    id: "ID_FMP_POWER_5941",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5941",
    categories: ["Instruction in Darkness", "ID_FMP_POWER_5941", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7338"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Instruction in Darkness Attack"] = new engine.RulesElement({
    name: "Instruction in Darkness Attack",
    type: "Power",
    id: "ID_FMP_POWER_7338",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7338",
    categories: ["Instruction in Darkness Attack", "ID_FMP_POWER_7338", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action"]
  });
  byID[te.id] = te;
  
  te = Power["Insult of Passivity"] = new engine.RulesElement({
    name: "Insult of Passivity",
    type: "Power",
    id: "ID_FMP_POWER_3088",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3088",
    categories: ["Insult of Passivity", "ID_FMP_POWER_3088", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Intimidating Visage"] = new engine.RulesElement({
    name: "Intimidating Visage",
    type: "Power",
    id: "ID_FMP_POWER_3104",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3104",
    categories: ["Intimidating Visage", "ID_FMP_POWER_3104", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Invincible Rampage"] = new engine.RulesElement({
    name: "Invincible Rampage",
    type: "Power",
    id: "ID_FMP_POWER_3996",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3996",
    categories: ["Invincible Rampage", "ID_FMP_POWER_3996", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Jinx Shot"] = new engine.RulesElement({
    name: "Jinx Shot",
    type: "Power",
    id: "ID_FMP_POWER_2846",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2846",
    categories: ["Jinx Shot", "ID_FMP_POWER_2846", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Judgment of the Storm"] = new engine.RulesElement({
    name: "Judgment of the Storm",
    type: "Power",
    id: "ID_FMP_POWER_5977",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5977",
    categories: ["Judgment of the Storm", "ID_FMP_POWER_5977", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_328", "Storm Scourge", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Karmic Wound"] = new engine.RulesElement({
    name: "Karmic Wound",
    type: "Power",
    id: "ID_FMP_POWER_5729",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5729",
    categories: ["Karmic Wound", "ID_FMP_POWER_5729", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_307", "Karmic Shaper", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Killing Flames"] = new engine.RulesElement({
    name: "Killing Flames",
    type: "Power",
    id: "ID_FMP_POWER_5923",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5923",
    categories: ["Killing Flames", "ID_FMP_POWER_5923", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Korred's Tune"] = new engine.RulesElement({
    name: "Korred's Tune",
    type: "Power",
    id: "ID_FMP_POWER_4193",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4193",
    categories: ["Korred's Tune", "ID_FMP_POWER_4193", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Lashing Asp"] = new engine.RulesElement({
    name: "Lashing Asp",
    type: "Power",
    id: "ID_FMP_POWER_3138",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3138",
    categories: ["Lashing Asp", "ID_FMP_POWER_3138", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Lasting Breath"] = new engine.RulesElement({
    name: "Lasting Breath",
    type: "Power",
    id: "ID_FMP_POWER_6823",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6823",
    categories: ["Lasting Breath", "ID_FMP_POWER_6823", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_311", "Dragon Guardian", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Leaping Lightning"] = new engine.RulesElement({
    name: "Leaping Lightning",
    type: "Power",
    id: "ID_FMP_POWER_3048",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3048",
    categories: ["Leaping Lightning", "ID_FMP_POWER_3048", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Leave It Dead"] = new engine.RulesElement({
    name: "Leave It Dead",
    type: "Power",
    id: "ID_FMP_POWER_2987",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2987",
    categories: ["Leave It Dead", "ID_FMP_POWER_2987", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Life Bind"] = new engine.RulesElement({
    name: "Life Bind",
    type: "Power",
    id: "ID_FMP_POWER_5903",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5903",
    categories: ["Life Bind", "ID_FMP_POWER_5903", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Life Force Reclaimed"] = new engine.RulesElement({
    name: "Life Force Reclaimed",
    type: "Power",
    id: "ID_FMP_POWER_5933",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5933",
    categories: ["Life Force Reclaimed", "ID_FMP_POWER_5933", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Life Siphon"] = new engine.RulesElement({
    name: "Life Siphon",
    type: "Power",
    id: "ID_FMP_POWER_4087",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4087",
    categories: ["Life Siphon", "ID_FMP_POWER_4087", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Bolt Charge"] = new engine.RulesElement({
    name: "Lightning Bolt Charge",
    type: "Power",
    id: "ID_FMP_POWER_5772",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5772",
    categories: ["Lightning Bolt Charge", "ID_FMP_POWER_5772", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Daggers"] = new engine.RulesElement({
    name: "Lightning Daggers",
    type: "Power",
    id: "ID_FMP_POWER_3043",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3043",
    categories: ["Lightning Daggers", "ID_FMP_POWER_3043", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Dance"] = new engine.RulesElement({
    name: "Lightning Dance",
    type: "Power",
    id: "ID_FMP_POWER_5978",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5978",
    categories: ["Lightning Dance", "ID_FMP_POWER_5978", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_328", "Storm Scourge", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning in the Blood"] = new engine.RulesElement({
    name: "Lightning in the Blood",
    type: "Power",
    id: "ID_FMP_POWER_5896",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5896",
    categories: ["Lightning in the Blood", "ID_FMP_POWER_5896", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_313", "Lightning Fury", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Shift"] = new engine.RulesElement({
    name: "Lightning Shift",
    type: "Power",
    id: "ID_FMP_POWER_5853",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5853",
    categories: ["Lightning Shift", "ID_FMP_POWER_5853", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Strike"] = new engine.RulesElement({
    name: "Lightning Strike",
    type: "Power",
    id: "ID_FMP_POWER_3005",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3005",
    categories: ["Lightning Strike", "ID_FMP_POWER_3005", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Like a Feather"] = new engine.RulesElement({
    name: "Like a Feather",
    type: "Power",
    id: "ID_FMP_POWER_5753",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5753",
    categories: ["Like a Feather", "ID_FMP_POWER_5753", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Linked Fortunes"] = new engine.RulesElement({
    name: "Linked Fortunes",
    type: "Power",
    id: "ID_FMP_POWER_2984",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2984",
    categories: ["Linked Fortunes", "ID_FMP_POWER_2984", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Lost in the Mists"] = new engine.RulesElement({
    name: "Lost in the Mists",
    type: "Power",
    id: "ID_FMP_POWER_4044",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4044",
    categories: ["Lost in the Mists", "ID_FMP_POWER_4044", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Lure of Gibbeth"] = new engine.RulesElement({
    name: "Lure of Gibbeth",
    type: "Power",
    id: "ID_FMP_POWER_5914",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5914",
    categories: ["Lure of Gibbeth", "ID_FMP_POWER_5914", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Luring Strike"] = new engine.RulesElement({
    name: "Luring Strike",
    type: "Power",
    id: "ID_FMP_POWER_6834",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6834",
    categories: ["Luring Strike", "ID_FMP_POWER_6834", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Lying Lights"] = new engine.RulesElement({
    name: "Lying Lights",
    type: "Power",
    id: "ID_FMP_POWER_5716",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5716",
    categories: ["Lying Lights", "ID_FMP_POWER_5716", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_303", "Cunning Prevaricator", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Maddening Whispers"] = new engine.RulesElement({
    name: "Maddening Whispers",
    type: "Power",
    id: "ID_FMP_POWER_6868",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6868",
    categories: ["Maddening Whispers", "ID_FMP_POWER_6868", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Maelstrom of Despair"] = new engine.RulesElement({
    name: "Maelstrom of Despair",
    type: "Power",
    id: "ID_FMP_POWER_4246",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4246",
    categories: ["Maelstrom of Despair", "ID_FMP_POWER_4246", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Magister's Key"] = new engine.RulesElement({
    name: "Magister's Key",
    type: "Power",
    id: "ID_FMP_POWER_6930",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6930",
    categories: ["Magister's Key", "ID_FMP_POWER_6930", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_341", "Magister", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Malevolent Mischief"] = new engine.RulesElement({
    name: "Malevolent Mischief",
    type: "Power",
    id: "ID_FMP_POWER_3099",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3099",
    categories: ["Malevolent Mischief", "ID_FMP_POWER_3099", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Manipulating Thunderbolt"] = new engine.RulesElement({
    name: "Manipulating Thunderbolt",
    type: "Power",
    id: "ID_FMP_POWER_5946",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5946",
    categories: ["Manipulating Thunderbolt", "ID_FMP_POWER_5946", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Mantle of Unity"] = new engine.RulesElement({
    name: "Mantle of Unity",
    type: "Power",
    id: "ID_FMP_POWER_5699",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5699",
    categories: ["Mantle of Unity", "ID_FMP_POWER_5699", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Mark of the Hound"] = new engine.RulesElement({
    name: "Mark of the Hound",
    type: "Power",
    id: "ID_FMP_POWER_5746",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5746",
    categories: ["Mark of the Hound", "ID_FMP_POWER_5746", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Marksman's Vision"] = new engine.RulesElement({
    name: "Marksman's Vision",
    type: "Power",
    id: "ID_FMP_POWER_5767",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5767",
    categories: ["Marksman's Vision", "ID_FMP_POWER_5767", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Mass Aegis"] = new engine.RulesElement({
    name: "Mass Aegis",
    type: "Power",
    id: "ID_FMP_POWER_6924",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6924",
    categories: ["Mass Aegis", "ID_FMP_POWER_6924", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_335", "Arcane Sword", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Mass Resistance"] = new engine.RulesElement({
    name: "Mass Resistance",
    type: "Power",
    id: "ID_FMP_POWER_2838",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2838",
    categories: ["Mass Resistance", "ID_FMP_POWER_2838", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Maze of Mirrors"] = new engine.RulesElement({
    name: "Maze of Mirrors",
    type: "Power",
    id: "ID_FMP_POWER_3218",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3218",
    categories: ["Maze of Mirrors", "ID_FMP_POWER_3218", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Mercurial Form"] = new engine.RulesElement({
    name: "Mercurial Form",
    type: "Power",
    id: "ID_FMP_POWER_4085",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4085",
    categories: ["Mercurial Form", "ID_FMP_POWER_4085", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Miasma of Enfeeblement"] = new engine.RulesElement({
    name: "Miasma of Enfeeblement",
    type: "Power",
    id: "ID_FMP_POWER_2820",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2820",
    categories: ["Miasma of Enfeeblement", "ID_FMP_POWER_2820", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Game"] = new engine.RulesElement({
    name: "Mind Game",
    type: "Power",
    id: "ID_FMP_POWER_2950",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2950",
    categories: ["Mind Game", "ID_FMP_POWER_2950", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Mind Tide"] = new engine.RulesElement({
    name: "Mind Tide",
    type: "Power",
    id: "ID_FMP_POWER_5881",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5881",
    categories: ["Mind Tide", "ID_FMP_POWER_5881", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Mindsap Maneuver"] = new engine.RulesElement({
    name: "Mindsap Maneuver",
    type: "Power",
    id: "ID_FMP_POWER_3994",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3994",
    categories: ["Mindsap Maneuver", "ID_FMP_POWER_3994", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Minor Gift of Foresight"] = new engine.RulesElement({
    name: "Minor Gift of Foresight",
    type: "Power",
    id: "ID_FMP_POWER_5972",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5972",
    categories: ["Minor Gift of Foresight", "ID_FMP_POWER_5972", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_326", "Master of the Starry Night", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Mirror Sphere"] = new engine.RulesElement({
    name: "Mirror Sphere",
    type: "Power",
    id: "ID_FMP_POWER_2655",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2655",
    categories: ["Mirror Sphere", "ID_FMP_POWER_2655", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Mirrorblade Army"] = new engine.RulesElement({
    name: "Mirrorblade Army",
    type: "Power",
    id: "ID_FMP_POWER_4004",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4004",
    categories: ["Mirrorblade Army", "ID_FMP_POWER_4004", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Mists of Disarray"] = new engine.RulesElement({
    name: "Mists of Disarray",
    type: "Power",
    id: "ID_FMP_POWER_3162",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3162",
    categories: ["Mists of Disarray", "ID_FMP_POWER_3162", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Mocking Epigram"] = new engine.RulesElement({
    name: "Mocking Epigram",
    type: "Power",
    id: "ID_FMP_POWER_5707",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5707",
    categories: ["Mocking Epigram", "ID_FMP_POWER_5707", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Moment of Escape"] = new engine.RulesElement({
    name: "Moment of Escape",
    type: "Power",
    id: "ID_FMP_POWER_6610",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6610",
    categories: ["Moment of Escape", "ID_FMP_POWER_6610", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Moon and the Stars"] = new engine.RulesElement({
    name: "Moon and the Stars",
    type: "Power",
    id: "ID_FMP_POWER_5848",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5848",
    categories: ["Moon and the Stars", "ID_FMP_POWER_5848", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Moon Cage"] = new engine.RulesElement({
    name: "Moon Cage",
    type: "Power",
    id: "ID_FMP_POWER_5863",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5863",
    categories: ["Moon Cage", "ID_FMP_POWER_5863", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Moonstruck"] = new engine.RulesElement({
    name: "Moonstruck",
    type: "Power",
    id: "ID_FMP_POWER_5877",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5877",
    categories: ["Moonstruck", "ID_FMP_POWER_5877", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Mordant Rains of Dis"] = new engine.RulesElement({
    name: "Mordant Rains of Dis",
    type: "Power",
    id: "ID_FMP_POWER_4094",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4094",
    categories: ["Mordant Rains of Dis", "ID_FMP_POWER_4094", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Mordenkainen's Guardian Hound"] = new engine.RulesElement({
    name: "Mordenkainen's Guardian Hound",
    type: "Power",
    id: "ID_FMP_POWER_4084",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4084",
    categories: ["Mordenkainen's Guardian Hound", "ID_FMP_POWER_4084", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Mordenkainen's Lucubration"] = new engine.RulesElement({
    name: "Mordenkainen's Lucubration",
    type: "Power",
    id: "ID_FMP_POWER_6905",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6905",
    categories: ["Mordenkainen's Lucubration", "ID_FMP_POWER_6905", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Mother Claw"] = new engine.RulesElement({
    name: "Mother Claw",
    type: "Power",
    id: "ID_FMP_POWER_5878",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5878",
    categories: ["Mother Claw", "ID_FMP_POWER_5878", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Nimbus of Falsehood"] = new engine.RulesElement({
    name: "Nimbus of Falsehood",
    type: "Power",
    id: "ID_FMP_POWER_5718",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5718",
    categories: ["Nimbus of Falsehood", "ID_FMP_POWER_5718", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_303", "Cunning Prevaricator", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Note of Aggression"] = new engine.RulesElement({
    name: "Note of Aggression",
    type: "Power",
    id: "ID_FMP_POWER_5709",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5709",
    categories: ["Note of Aggression", "ID_FMP_POWER_5709", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Nypacian Serpents"] = new engine.RulesElement({
    name: "Nypacian Serpents",
    type: "Power",
    id: "ID_FMP_POWER_4095",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4095",
    categories: ["Nypacian Serpents", "ID_FMP_POWER_4095", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Ode to the Daring"] = new engine.RulesElement({
    name: "Ode to the Daring",
    type: "Power",
    id: "ID_FMP_POWER_3127",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3127",
    categories: ["Ode to the Daring", "ID_FMP_POWER_3127", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Omnipresent Assault"] = new engine.RulesElement({
    name: "Omnipresent Assault",
    type: "Power",
    id: "ID_FMP_POWER_5788",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5788",
    categories: ["Omnipresent Assault", "ID_FMP_POWER_5788", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_316", "Ghost Blade", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Oni's Gift"] = new engine.RulesElement({
    name: "Oni's Gift",
    type: "Power",
    id: "ID_FMP_POWER_3990",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3990",
    categories: ["Oni's Gift", "ID_FMP_POWER_3990", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Oppressive Force"] = new engine.RulesElement({
    name: "Oppressive Force",
    type: "Power",
    id: "ID_FMP_POWER_5813",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5813",
    categories: ["Oppressive Force", "ID_FMP_POWER_5813", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Orb of Deception"] = new engine.RulesElement({
    name: "Orb of Deception",
    type: "Power",
    id: "ID_FMP_POWER_7544",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7544",
    categories: ["Orb of Deception", "ID_FMP_POWER_7544", "ID_FMP_CLASS_FEATURE_1509", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Orbmaster's Incendiary Detonation"] = new engine.RulesElement({
    name: "Orbmaster's Incendiary Detonation",
    type: "Power",
    id: "ID_FMP_POWER_5799",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5799",
    categories: ["Orbmaster's Incendiary Detonation", "ID_FMP_POWER_5799", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Orbmaster's Insuperable Lethargy"] = new engine.RulesElement({
    name: "Orbmaster's Insuperable Lethargy",
    type: "Power",
    id: "ID_FMP_POWER_5815",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5815",
    categories: ["Orbmaster's Insuperable Lethargy", "ID_FMP_POWER_5815", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Orbmaster's Prismatic Sphere"] = new engine.RulesElement({
    name: "Orbmaster's Prismatic Sphere",
    type: "Power",
    id: "ID_FMP_POWER_5818",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5818",
    categories: ["Orbmaster's Prismatic Sphere", "ID_FMP_POWER_5818", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Orbmaster's Umbral Assault"] = new engine.RulesElement({
    name: "Orbmaster's Umbral Assault",
    type: "Power",
    id: "ID_FMP_POWER_5808",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5808",
    categories: ["Orbmaster's Umbral Assault", "ID_FMP_POWER_5808", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Overpowering Lightning"] = new engine.RulesElement({
    name: "Overpowering Lightning",
    type: "Power",
    id: "ID_FMP_POWER_3028",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3028",
    categories: ["Overpowering Lightning", "ID_FMP_POWER_3028", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Pacifying Voice"] = new engine.RulesElement({
    name: "Pacifying Voice",
    type: "Power",
    id: "ID_FMP_POWER_5732",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5732",
    categories: ["Pacifying Voice", "ID_FMP_POWER_5732", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_308", "Life Singer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Painful Transference"] = new engine.RulesElement({
    name: "Painful Transference",
    type: "Power",
    id: "ID_FMP_POWER_4224",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4224",
    categories: ["Painful Transference", "ID_FMP_POWER_4224", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Phantasmal Assailant"] = new engine.RulesElement({
    name: "Phantasmal Assailant",
    type: "Power",
    id: "ID_FMP_POWER_3219",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3219",
    categories: ["Phantasmal Assailant", "ID_FMP_POWER_3219", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Phantasmal Horror"] = new engine.RulesElement({
    name: "Phantasmal Horror",
    type: "Power",
    id: "ID_FMP_POWER_4030",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4030",
    categories: ["Phantasmal Horror", "ID_FMP_POWER_4030", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Phantasmal Terrain"] = new engine.RulesElement({
    name: "Phantasmal Terrain",
    type: "Power",
    id: "ID_FMP_POWER_3217",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3217",
    categories: ["Phantasmal Terrain", "ID_FMP_POWER_3217", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Phantom Bolt"] = new engine.RulesElement({
    name: "Phantom Bolt",
    type: "Power",
    id: "ID_FMP_POWER_4305",
    source: "Arcane Power,Adventurer's Vault 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4305",
    categories: ["Phantom Bolt", "ID_FMP_POWER_4305", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Phantom Chasm"] = new engine.RulesElement({
    name: "Phantom Chasm",
    type: "Power",
    id: "ID_FMP_POWER_3216",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3216",
    categories: ["Phantom Chasm", "ID_FMP_POWER_3216", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Phantom Legion"] = new engine.RulesElement({
    name: "Phantom Legion",
    type: "Power",
    id: "ID_FMP_POWER_4118",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4118",
    categories: ["Phantom Legion", "ID_FMP_POWER_4118", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Phantom Mask"] = new engine.RulesElement({
    name: "Phantom Mask",
    type: "Power",
    id: "ID_FMP_POWER_5805",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5805",
    categories: ["Phantom Mask", "ID_FMP_POWER_5805", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Phantom Reality"] = new engine.RulesElement({
    name: "Phantom Reality",
    type: "Power",
    id: "ID_FMP_POWER_4102",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4102",
    categories: ["Phantom Reality", "ID_FMP_POWER_4102", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Phase Evasion"] = new engine.RulesElement({
    name: "Phase Evasion",
    type: "Power",
    id: "ID_FMP_POWER_5787",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5787",
    categories: ["Phase Evasion", "ID_FMP_POWER_5787", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_316", "Ghost Blade", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Phase Shift"] = new engine.RulesElement({
    name: "Phase Shift",
    type: "Power",
    id: "ID_FMP_POWER_2836",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2836",
    categories: ["Phase Shift", "ID_FMP_POWER_2836", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Pillar of Power"] = new engine.RulesElement({
    name: "Pillar of Power",
    type: "Power",
    id: "ID_FMP_POWER_5965",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5965",
    categories: ["Pillar of Power", "ID_FMP_POWER_5965", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_324", "Hellbringer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Pinioning Vortex"] = new engine.RulesElement({
    name: "Pinioning Vortex",
    type: "Power",
    id: "ID_FMP_POWER_5804",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5804",
    categories: ["Pinioning Vortex", "ID_FMP_POWER_5804", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Pinning Bolt"] = new engine.RulesElement({
    name: "Pinning Bolt",
    type: "Power",
    id: "ID_FMP_POWER_5841",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5841",
    categories: ["Pinning Bolt", "ID_FMP_POWER_5841", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Pipes of Winter"] = new engine.RulesElement({
    name: "Pipes of Winter",
    type: "Power",
    id: "ID_FMP_POWER_5911",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5911",
    categories: ["Pipes of Winter", "ID_FMP_POWER_5911", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Plague of Frogs"] = new engine.RulesElement({
    name: "Plague of Frogs",
    type: "Power",
    id: "ID_FMP_POWER_4219",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4219",
    categories: ["Plague of Frogs", "ID_FMP_POWER_4219", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Plague of Illusions"] = new engine.RulesElement({
    name: "Plague of Illusions",
    type: "Power",
    id: "ID_FMP_POWER_4099",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4099",
    categories: ["Plague of Illusions", "ID_FMP_POWER_4099", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Planar Gateway"] = new engine.RulesElement({
    name: "Planar Gateway",
    type: "Power",
    id: "ID_FMP_POWER_5824",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5824",
    categories: ["Planar Gateway", "ID_FMP_POWER_5824", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_330", "Bonded Summoner", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7352"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Planar Gateway Attack"] = new engine.RulesElement({
    name: "Planar Gateway Attack",
    type: "Power",
    id: "ID_FMP_POWER_7352",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7352",
    categories: ["Planar Gateway Attack", "ID_FMP_POWER_7352", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_330", "Bonded Summoner", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Planar Shock"] = new engine.RulesElement({
    name: "Planar Shock",
    type: "Power",
    id: "ID_FMP_POWER_5768",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5768",
    categories: ["Planar Shock", "ID_FMP_POWER_5768", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Pounding Rhythm"] = new engine.RulesElement({
    name: "Pounding Rhythm",
    type: "Power",
    id: "ID_FMP_POWER_5713",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5713",
    categories: ["Pounding Rhythm", "ID_FMP_POWER_5713", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Prepared by Fate"] = new engine.RulesElement({
    name: "Prepared by Fate",
    type: "Power",
    id: "ID_FMP_POWER_5975",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5975",
    categories: ["Prepared by Fate", "ID_FMP_POWER_5975", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_327", "Sea Tyrant Oracle", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Primordial Boon"] = new engine.RulesElement({
    name: "Primordial Boon",
    type: "Power",
    id: "ID_FMP_POWER_5899",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5899",
    categories: ["Primordial Boon", "ID_FMP_POWER_5899", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_314", "Primordial Channeler", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Primordial Rage"] = new engine.RulesElement({
    name: "Primordial Rage",
    type: "Power",
    id: "ID_FMP_POWER_5898",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5898",
    categories: ["Primordial Rage", "ID_FMP_POWER_5898", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_314", "Primordial Channeler", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Primordial Rift"] = new engine.RulesElement({
    name: "Primordial Rift",
    type: "Power",
    id: "ID_FMP_POWER_5900",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5900",
    categories: ["Primordial Rift", "ID_FMP_POWER_5900", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_314", "Primordial Channeler", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Primordial Slime"] = new engine.RulesElement({
    name: "Primordial Slime",
    type: "Power",
    id: "ID_FMP_POWER_5871",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5871",
    categories: ["Primordial Slime", "ID_FMP_POWER_5871", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Primordial Storm"] = new engine.RulesElement({
    name: "Primordial Storm",
    type: "Power",
    id: "ID_FMP_POWER_5864",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5864",
    categories: ["Primordial Storm", "ID_FMP_POWER_5864", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Prismatic Lightning"] = new engine.RulesElement({
    name: "Prismatic Lightning",
    type: "Power",
    id: "ID_FMP_POWER_3044",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3044",
    categories: ["Prismatic Lightning", "ID_FMP_POWER_3044", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Prismatic Wall"] = new engine.RulesElement({
    name: "Prismatic Wall",
    type: "Power",
    id: "ID_FMP_POWER_2827",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2827",
    categories: ["Prismatic Wall", "ID_FMP_POWER_2827", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7349"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Prismatic Wall Attack"] = new engine.RulesElement({
    name: "Prismatic Wall Attack",
    type: "Power",
    id: "ID_FMP_POWER_7349",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7349",
    categories: ["Prismatic Wall Attack", "ID_FMP_POWER_7349", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Prophesied Strike"] = new engine.RulesElement({
    name: "Prophesied Strike",
    type: "Power",
    id: "ID_FMP_POWER_2946",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2946",
    categories: ["Prophesied Strike", "ID_FMP_POWER_2946", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Prophetic Action"] = new engine.RulesElement({
    name: "Prophetic Action",
    type: "Power",
    id: "ID_FMP_POWER_2947",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2947",
    categories: ["Prophetic Action", "ID_FMP_POWER_2947", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Protective Bond"] = new engine.RulesElement({
    name: "Protective Bond",
    type: "Power",
    id: "ID_FMP_POWER_5784",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5784",
    categories: ["Protective Bond", "ID_FMP_POWER_5784", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_317", "Sage of Fate's Bonds", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Protective Essence"] = new engine.RulesElement({
    name: "Protective Essence",
    type: "Power",
    id: "ID_FMP_POWER_5894",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5894",
    categories: ["Protective Essence", "ID_FMP_POWER_5894", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_312", "Essence Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Psychic Detonations"] = new engine.RulesElement({
    name: "Psychic Detonations",
    type: "Power",
    id: "ID_FMP_POWER_5830",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5830",
    categories: ["Psychic Detonations", "ID_FMP_POWER_5830", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_331", "Hermetic Saboteur", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7350"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Psychic Detonations Attack"] = new engine.RulesElement({
    name: "Psychic Detonations Attack",
    type: "Power",
    id: "ID_FMP_POWER_7350",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7350",
    categories: ["Psychic Detonations Attack", "ID_FMP_POWER_7350", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_331", "Hermetic Saboteur", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Purifying Wound"] = new engine.RulesElement({
    name: "Purifying Wound",
    type: "Power",
    id: "ID_FMP_POWER_5747",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5747",
    categories: ["Purifying Wound", "ID_FMP_POWER_5747", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Quickling Stride"] = new engine.RulesElement({
    name: "Quickling Stride",
    type: "Power",
    id: "ID_FMP_POWER_3938",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3938",
    categories: ["Quickling Stride", "ID_FMP_POWER_3938", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Racing Fire of Ulban"] = new engine.RulesElement({
    name: "Racing Fire of Ulban",
    type: "Power",
    id: "ID_FMP_POWER_5918",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5918",
    categories: ["Racing Fire of Ulban", "ID_FMP_POWER_5918", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Shield"] = new engine.RulesElement({
    name: "Radiant Shield",
    type: "Power",
    id: "ID_FMP_POWER_6835",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6835",
    categories: ["Radiant Shield", "ID_FMP_POWER_6835", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Radiant Wings"] = new engine.RulesElement({
    name: "Radiant Wings",
    type: "Power",
    id: "ID_FMP_POWER_6811",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6811",
    categories: ["Radiant Wings", "ID_FMP_POWER_6811", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Rain of Starlight"] = new engine.RulesElement({
    name: "Rain of Starlight",
    type: "Power",
    id: "ID_FMP_POWER_5695",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5695",
    categories: ["Rain of Starlight", "ID_FMP_POWER_5695", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Random Spell"] = new engine.RulesElement({
    name: "Random Spell",
    type: "Power",
    id: "ID_FMP_POWER_5829",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5829",
    categories: ["Random Spell", "ID_FMP_POWER_5829", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_334", "Weaver of Chance", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Ray of the Moon"] = new engine.RulesElement({
    name: "Ray of the Moon",
    type: "Power",
    id: "ID_FMP_POWER_5842",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5842",
    categories: ["Ray of the Moon", "ID_FMP_POWER_5842", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Recitation of Foreknowledge"] = new engine.RulesElement({
    name: "Recitation of Foreknowledge",
    type: "Power",
    id: "ID_FMP_POWER_5682",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5682",
    categories: ["Recitation of Foreknowledge", "ID_FMP_POWER_5682", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Rejuvenating Strike"] = new engine.RulesElement({
    name: "Rejuvenating Strike",
    type: "Power",
    id: "ID_FMP_POWER_3947",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3947",
    categories: ["Rejuvenating Strike", "ID_FMP_POWER_3947", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Resounding War Cry"] = new engine.RulesElement({
    name: "Resounding War Cry",
    type: "Power",
    id: "ID_FMP_POWER_5705",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5705",
    categories: ["Resounding War Cry", "ID_FMP_POWER_5705", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Reverberating Shot"] = new engine.RulesElement({
    name: "Reverberating Shot",
    type: "Power",
    id: "ID_FMP_POWER_5711",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5711",
    categories: ["Reverberating Shot", "ID_FMP_POWER_5711", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Rewrite the Future"] = new engine.RulesElement({
    name: "Rewrite the Future",
    type: "Power",
    id: "ID_FMP_POWER_2956",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2956",
    categories: ["Rewrite the Future", "ID_FMP_POWER_2956", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Rhyme of Fire"] = new engine.RulesElement({
    name: "Rhyme of Fire",
    type: "Power",
    id: "ID_FMP_POWER_5686",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5686",
    categories: ["Rhyme of Fire", "ID_FMP_POWER_5686", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Rhyme of the Blood-Seeking Blade"] = new engine.RulesElement({
    name: "Rhyme of the Blood-Seeking Blade",
    type: "Power",
    id: "ID_FMP_POWER_5683",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5683",
    categories: ["Rhyme of the Blood-Seeking Blade", "ID_FMP_POWER_5683", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Rolling Thunder"] = new engine.RulesElement({
    name: "Rolling Thunder",
    type: "Power",
    id: "ID_FMP_POWER_5803",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5803",
    categories: ["Rolling Thunder", "ID_FMP_POWER_5803", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Rumbling Storm Bolt"] = new engine.RulesElement({
    name: "Rumbling Storm Bolt",
    type: "Power",
    id: "ID_FMP_POWER_5874",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5874",
    categories: ["Rumbling Storm Bolt", "ID_FMP_POWER_5874", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Sabotage Trap"] = new engine.RulesElement({
    name: "Sabotage Trap",
    type: "Power",
    id: "ID_FMP_POWER_5831",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5831",
    categories: ["Sabotage Trap", "ID_FMP_POWER_5831", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_331", "Hermetic Saboteur", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Saboteur's Ward"] = new engine.RulesElement({
    name: "Saboteur's Ward",
    type: "Power",
    id: "ID_FMP_POWER_5832",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5832",
    categories: ["Saboteur's Ward", "ID_FMP_POWER_5832", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_331", "Hermetic Saboteur", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7351"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Saboteur's Ward Attack"] = new engine.RulesElement({
    name: "Saboteur's Ward Attack",
    type: "Power",
    id: "ID_FMP_POWER_7351",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7351",
    categories: ["Saboteur's Ward Attack", "ID_FMP_POWER_7351", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_331", "Hermetic Saboteur", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Saga of Foretold Doom"] = new engine.RulesElement({
    name: "Saga of Foretold Doom",
    type: "Power",
    id: "ID_FMP_POWER_5715",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5715",
    categories: ["Saga of Foretold Doom", "ID_FMP_POWER_5715", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Saga of Rivalry"] = new engine.RulesElement({
    name: "Saga of Rivalry",
    type: "Power",
    id: "ID_FMP_POWER_5679",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5679",
    categories: ["Saga of Rivalry", "ID_FMP_POWER_5679", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Saga of the Harrying Foe"] = new engine.RulesElement({
    name: "Saga of the Harrying Foe",
    type: "Power",
    id: "ID_FMP_POWER_5708",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5708",
    categories: ["Saga of the Harrying Foe", "ID_FMP_POWER_5708", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Saga of Vengeance"] = new engine.RulesElement({
    name: "Saga of Vengeance",
    type: "Power",
    id: "ID_FMP_POWER_5696",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5696",
    categories: ["Saga of Vengeance", "ID_FMP_POWER_5696", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Satire of Evasion"] = new engine.RulesElement({
    name: "Satire of Evasion",
    type: "Power",
    id: "ID_FMP_POWER_5703",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5703",
    categories: ["Satire of Evasion", "ID_FMP_POWER_5703", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Satire of Fortune"] = new engine.RulesElement({
    name: "Satire of Fortune",
    type: "Power",
    id: "ID_FMP_POWER_2971",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2971",
    categories: ["Satire of Fortune", "ID_FMP_POWER_2971", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Savior's Song"] = new engine.RulesElement({
    name: "Savior's Song",
    type: "Power",
    id: "ID_FMP_POWER_2996",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2996",
    categories: ["Savior's Song", "ID_FMP_POWER_2996", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Sculpt Fate"] = new engine.RulesElement({
    name: "Sculpt Fate",
    type: "Power",
    id: "ID_FMP_POWER_2986",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2986",
    categories: ["Sculpt Fate", "ID_FMP_POWER_2986", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Sea Tyrant's Fury"] = new engine.RulesElement({
    name: "Sea Tyrant's Fury",
    type: "Power",
    id: "ID_FMP_POWER_6865",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6865",
    categories: ["Sea Tyrant's Fury", "ID_FMP_POWER_6865", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Searing Radiance"] = new engine.RulesElement({
    name: "Searing Radiance",
    type: "Power",
    id: "ID_FMP_POWER_5869",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5869",
    categories: ["Searing Radiance", "ID_FMP_POWER_5869", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Searing Sands"] = new engine.RulesElement({
    name: "Searing Sands",
    type: "Power",
    id: "ID_FMP_POWER_3174",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3174",
    categories: ["Searing Sands", "ID_FMP_POWER_3174", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Season's Malaise"] = new engine.RulesElement({
    name: "Season's Malaise",
    type: "Power",
    id: "ID_FMP_POWER_5857",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5857",
    categories: ["Season's Malaise", "ID_FMP_POWER_5857", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Second Chances"] = new engine.RulesElement({
    name: "Second Chances",
    type: "Power",
    id: "ID_FMP_POWER_6612",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6612",
    categories: ["Second Chances", "ID_FMP_POWER_6612", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Sequestering Force"] = new engine.RulesElement({
    name: "Sequestering Force",
    type: "Power",
    id: "ID_FMP_POWER_4041",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4041",
    categories: ["Sequestering Force", "ID_FMP_POWER_4041", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_69", "Evocation", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Slip"] = new engine.RulesElement({
    name: "Shadow Slip",
    type: "Power",
    id: "ID_FMP_POWER_5957",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5957",
    categories: ["Shadow Slip", "ID_FMP_POWER_5957", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_321", "Dark Reckoner", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Snake Lunge"] = new engine.RulesElement({
    name: "Shadow Snake Lunge",
    type: "Power",
    id: "ID_FMP_POWER_3915",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3915",
    categories: ["Shadow Snake Lunge", "ID_FMP_POWER_3915", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Strangler"] = new engine.RulesElement({
    name: "Shadow Strangler",
    type: "Power",
    id: "ID_FMP_POWER_4097",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4097",
    categories: ["Shadow Strangler", "ID_FMP_POWER_4097", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Shard of the Endless Avalanche"] = new engine.RulesElement({
    name: "Shard of the Endless Avalanche",
    type: "Power",
    id: "ID_FMP_POWER_4037",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4037",
    categories: ["Shard of the Endless Avalanche", "ID_FMP_POWER_4037", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7346"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Shard of the Endless Avalanche Attack"] = new engine.RulesElement({
    name: "Shard of the Endless Avalanche Attack",
    type: "Power",
    id: "ID_FMP_POWER_7346",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7346",
    categories: ["Shard of the Endless Avalanche Attack", "ID_FMP_POWER_7346", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Shared Agony"] = new engine.RulesElement({
    name: "Shared Agony",
    type: "Power",
    id: "ID_FMP_POWER_4070",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4070",
    categories: ["Shared Agony", "ID_FMP_POWER_4070", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Shared Fortune"] = new engine.RulesElement({
    name: "Shared Fortune",
    type: "Power",
    id: "ID_FMP_POWER_5760",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5760",
    categories: ["Shared Fortune", "ID_FMP_POWER_5760", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Sharp Retort"] = new engine.RulesElement({
    name: "Sharp Retort",
    type: "Power",
    id: "ID_FMP_POWER_5700",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5700",
    categories: ["Sharp Retort", "ID_FMP_POWER_5700", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Shatterblade"] = new engine.RulesElement({
    name: "Shatterblade",
    type: "Power",
    id: "ID_FMP_POWER_3948",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3948",
    categories: ["Shatterblade", "ID_FMP_POWER_3948", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Shattering of the Sword"] = new engine.RulesElement({
    name: "Shattering of the Sword",
    type: "Power",
    id: "ID_FMP_POWER_5947",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5947",
    categories: ["Shattering of the Sword", "ID_FMP_POWER_5947", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Sheltering Ward"] = new engine.RulesElement({
    name: "Sheltering Ward",
    type: "Power",
    id: "ID_FMP_POWER_5796",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5796",
    categories: ["Sheltering Ward", "ID_FMP_POWER_5796", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_320", "Ward Guardian", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Shield of Besieged Tower"] = new engine.RulesElement({
    name: "Shield of Besieged Tower",
    type: "Power",
    id: "ID_FMP_POWER_5761",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5761",
    categories: ["Shield of Besieged Tower", "ID_FMP_POWER_5761", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Shield of Dragon Might"] = new engine.RulesElement({
    name: "Shield of Dragon Might",
    type: "Power",
    id: "ID_FMP_POWER_5890",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5890",
    categories: ["Shield of Dragon Might", "ID_FMP_POWER_5890", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_311", "Dragon Guardian", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Shielding Familiar"] = new engine.RulesElement({
    name: "Shielding Familiar",
    type: "Power",
    id: "ID_FMP_POWER_4214",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4214",
    categories: ["Shielding Familiar", "ID_FMP_POWER_4214", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Shields of the Eladrin Host"] = new engine.RulesElement({
    name: "Shields of the Eladrin Host",
    type: "Power",
    id: "ID_FMP_POWER_6927",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6927",
    categories: ["Shields of the Eladrin Host", "ID_FMP_POWER_6927", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_338", "Feyliege", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Shock Beetle Swarm"] = new engine.RulesElement({
    name: "Shock Beetle Swarm",
    type: "Power",
    id: "ID_FMP_POWER_4022",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4022",
    categories: ["Shock Beetle Swarm", "ID_FMP_POWER_4022", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Shocking Magnetism"] = new engine.RulesElement({
    name: "Shocking Magnetism",
    type: "Power",
    id: "ID_FMP_POWER_5844",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5844",
    categories: ["Shocking Magnetism", "ID_FMP_POWER_5844", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Shockwave Strike"] = new engine.RulesElement({
    name: "Shockwave Strike",
    type: "Power",
    id: "ID_FMP_POWER_3115",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3115",
    categories: ["Shockwave Strike", "ID_FMP_POWER_3115", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Shooting Star"] = new engine.RulesElement({
    name: "Shooting Star",
    type: "Power",
    id: "ID_FMP_POWER_5973",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5973",
    categories: ["Shooting Star", "ID_FMP_POWER_5973", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_326", "Master of the Starry Night", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Shroud of Adeptus"] = new engine.RulesElement({
    name: "Shroud of Adeptus",
    type: "Power",
    id: "ID_FMP_POWER_5960",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5960",
    categories: ["Shroud of Adeptus", "ID_FMP_POWER_5960", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_322", "Entrancing Mystic", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Sigil of Enmity"] = new engine.RulesElement({
    name: "Sigil of Enmity",
    type: "Power",
    id: "ID_FMP_POWER_5791",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5791",
    categories: ["Sigil of Enmity", "ID_FMP_POWER_5791", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_318", "Sigil Carver", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Sigil of Safety"] = new engine.RulesElement({
    name: "Sigil of Safety",
    type: "Power",
    id: "ID_FMP_POWER_5790",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5790",
    categories: ["Sigil of Safety", "ID_FMP_POWER_5790", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_318", "Sigil Carver", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Silver Lightning Assault"] = new engine.RulesElement({
    name: "Silver Lightning Assault",
    type: "Power",
    id: "ID_FMP_POWER_5778",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5778",
    categories: ["Silver Lightning Assault", "ID_FMP_POWER_5778", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Silverlight Strike"] = new engine.RulesElement({
    name: "Silverlight Strike",
    type: "Power",
    id: "ID_FMP_POWER_5755",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5755",
    categories: ["Silverlight Strike", "ID_FMP_POWER_5755", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Skirmisher's Volley"] = new engine.RulesElement({
    name: "Skirmisher's Volley",
    type: "Power",
    id: "ID_FMP_POWER_5924",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5924",
    categories: ["Skirmisher's Volley", "ID_FMP_POWER_5924", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Slaad's Gambit"] = new engine.RulesElement({
    name: "Slaad's Gambit",
    type: "Power",
    id: "ID_FMP_POWER_5849",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5849",
    categories: ["Slaad's Gambit", "ID_FMP_POWER_5849", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Slash and Burn"] = new engine.RulesElement({
    name: "Slash and Burn",
    type: "Power",
    id: "ID_FMP_POWER_3998",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3998",
    categories: ["Slash and Burn", "ID_FMP_POWER_3998", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Slippery Feet"] = new engine.RulesElement({
    name: "Slippery Feet",
    type: "Power",
    id: "ID_FMP_POWER_3089",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3089",
    categories: ["Slippery Feet", "ID_FMP_POWER_3089", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Snake Strike"] = new engine.RulesElement({
    name: "Snake Strike",
    type: "Power",
    id: "ID_FMP_POWER_5763",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5763",
    categories: ["Snake Strike", "ID_FMP_POWER_5763", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Song of Duplicitous Allure"] = new engine.RulesElement({
    name: "Song of Duplicitous Allure",
    type: "Power",
    id: "ID_FMP_POWER_3082",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3082",
    categories: ["Song of Duplicitous Allure", "ID_FMP_POWER_3082", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Song of Sonic Striking"] = new engine.RulesElement({
    name: "Song of Sonic Striking",
    type: "Power",
    id: "ID_FMP_POWER_5721",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5721",
    categories: ["Song of Sonic Striking", "ID_FMP_POWER_5721", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_304", "Euphonic Bow", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Song of Speed"] = new engine.RulesElement({
    name: "Song of Speed",
    type: "Power",
    id: "ID_FMP_POWER_5692",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5692",
    categories: ["Song of Speed", "ID_FMP_POWER_5692", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Song of the New Dawn"] = new engine.RulesElement({
    name: "Song of the New Dawn",
    type: "Power",
    id: "ID_FMP_POWER_5684",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5684",
    categories: ["Song of the New Dawn", "ID_FMP_POWER_5684", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Soothing Song"] = new engine.RulesElement({
    name: "Soothing Song",
    type: "Power",
    id: "ID_FMP_POWER_5734",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5734",
    categories: ["Soothing Song", "ID_FMP_POWER_5734", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_308", "Life Singer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Sorcerous Pulse"] = new engine.RulesElement({
    name: "Sorcerous Pulse",
    type: "Power",
    id: "ID_FMP_POWER_3203",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3203",
    categories: ["Sorcerous Pulse", "ID_FMP_POWER_3203", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Sorcerous Sirocco"] = new engine.RulesElement({
    name: "Sorcerous Sirocco",
    type: "Power",
    id: "ID_FMP_POWER_3053",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3053",
    categories: ["Sorcerous Sirocco", "ID_FMP_POWER_3053", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Soul Fire"] = new engine.RulesElement({
    name: "Soul Fire",
    type: "Power",
    id: "ID_FMP_POWER_4039",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4039",
    categories: ["Soul Fire", "ID_FMP_POWER_4039", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Soul of the Treant"] = new engine.RulesElement({
    name: "Soul of the Treant",
    type: "Power",
    id: "ID_FMP_POWER_5948",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5948",
    categories: ["Soul of the Treant", "ID_FMP_POWER_5948", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Sound Strike"] = new engine.RulesElement({
    name: "Sound Strike",
    type: "Power",
    id: "ID_FMP_POWER_2962",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2962",
    categories: ["Sound Strike", "ID_FMP_POWER_2962", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Spark Form"] = new engine.RulesElement({
    name: "Spark Form",
    type: "Power",
    id: "ID_FMP_POWER_3016",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3016",
    categories: ["Spark Form", "ID_FMP_POWER_3016", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Spatial Trip"] = new engine.RulesElement({
    name: "Spatial Trip",
    type: "Power",
    id: "ID_FMP_POWER_3201",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3201",
    categories: ["Spatial Trip", "ID_FMP_POWER_3201", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Spectral Hound"] = new engine.RulesElement({
    name: "Spectral Hound",
    type: "Power",
    id: "ID_FMP_POWER_3220",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3220",
    categories: ["Spectral Hound", "ID_FMP_POWER_3220", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Spectral Vision"] = new engine.RulesElement({
    name: "Spectral Vision",
    type: "Power",
    id: "ID_FMP_POWER_4111",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4111",
    categories: ["Spectral Vision", "ID_FMP_POWER_4111", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Spell Strike"] = new engine.RulesElement({
    name: "Spell Strike",
    type: "Power",
    id: "ID_FMP_POWER_5792",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5792",
    categories: ["Spell Strike", "ID_FMP_POWER_5792", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_319", "Sword of Assault", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_56", "Varies", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Spellseer Familiar"] = new engine.RulesElement({
    name: "Spellseer Familiar",
    type: "Power",
    id: "ID_FMP_POWER_4215",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4215",
    categories: ["Spellseer Familiar", "ID_FMP_POWER_4215", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Spider Queen's Caress"] = new engine.RulesElement({
    name: "Spider Queen's Caress",
    type: "Power",
    id: "ID_FMP_POWER_4083",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4083",
    categories: ["Spider Queen's Caress", "ID_FMP_POWER_4083", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Spider's Leap"] = new engine.RulesElement({
    name: "Spider's Leap",
    type: "Power",
    id: "ID_FMP_POWER_3958",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3958",
    categories: ["Spider's Leap", "ID_FMP_POWER_3958", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Spirit's Eclipse"] = new engine.RulesElement({
    name: "Spirit's Eclipse",
    type: "Power",
    id: "ID_FMP_POWER_5859",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5859",
    categories: ["Spirit's Eclipse", "ID_FMP_POWER_5859", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Spring to Action"] = new engine.RulesElement({
    name: "Spring to Action",
    type: "Power",
    id: "ID_FMP_POWER_2985",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2985",
    categories: ["Spring to Action", "ID_FMP_POWER_2985", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Sprite War Call"] = new engine.RulesElement({
    name: "Sprite War Call",
    type: "Power",
    id: "ID_FMP_POWER_5904",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5904",
    categories: ["Sprite War Call", "ID_FMP_POWER_5904", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Staffstrike Corrosion"] = new engine.RulesElement({
    name: "Staffstrike Corrosion",
    type: "Power",
    id: "ID_FMP_POWER_5800",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5800",
    categories: ["Staffstrike Corrosion", "ID_FMP_POWER_5800", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Staffstrike Shock"] = new engine.RulesElement({
    name: "Staffstrike Shock",
    type: "Power",
    id: "ID_FMP_POWER_5816",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5816",
    categories: ["Staffstrike Shock", "ID_FMP_POWER_5816", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Stalking Frost"] = new engine.RulesElement({
    name: "Stalking Frost",
    type: "Power",
    id: "ID_FMP_POWER_6808",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6808",
    categories: ["Stalking Frost", "ID_FMP_POWER_6808", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Steal Time"] = new engine.RulesElement({
    name: "Steal Time",
    type: "Power",
    id: "ID_FMP_POWER_4046",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4046",
    categories: ["Steal Time", "ID_FMP_POWER_4046", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Steel Tempest"] = new engine.RulesElement({
    name: "Steel Tempest",
    type: "Power",
    id: "ID_FMP_POWER_6836",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6836",
    categories: ["Steel Tempest", "ID_FMP_POWER_6836", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Stellar Debris"] = new engine.RulesElement({
    name: "Stellar Debris",
    type: "Power",
    id: "ID_FMP_POWER_5971",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5971",
    categories: ["Stellar Debris", "ID_FMP_POWER_5971", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_326", "Master of the Starry Night", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Stonewrack"] = new engine.RulesElement({
    name: "Stonewrack",
    type: "Power",
    id: "ID_FMP_POWER_2821",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2821",
    categories: ["Stonewrack", "ID_FMP_POWER_2821", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Arc"] = new engine.RulesElement({
    name: "Storm Arc",
    type: "Power",
    id: "ID_FMP_POWER_3026",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3026",
    categories: ["Storm Arc", "ID_FMP_POWER_3026", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Body"] = new engine.RulesElement({
    name: "Storm Body",
    type: "Power",
    id: "ID_FMP_POWER_3065",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3065",
    categories: ["Storm Body", "ID_FMP_POWER_3065", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Countess's Kiss"] = new engine.RulesElement({
    name: "Storm Countess's Kiss",
    type: "Power",
    id: "ID_FMP_POWER_4109",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4109",
    categories: ["Storm Countess's Kiss", "ID_FMP_POWER_4109", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Storm of Energy"] = new engine.RulesElement({
    name: "Storm of Energy",
    type: "Power",
    id: "ID_FMP_POWER_5860",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5860",
    categories: ["Storm of Energy", "ID_FMP_POWER_5860", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Storm Pillar"] = new engine.RulesElement({
    name: "Storm Pillar",
    type: "Power",
    id: "ID_FMP_POWER_4309",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4309",
    categories: ["Storm Pillar", "ID_FMP_POWER_4309", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Strictures of Fortune"] = new engine.RulesElement({
    name: "Strictures of Fortune",
    type: "Power",
    id: "ID_FMP_POWER_2975",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2975",
    categories: ["Strictures of Fortune", "ID_FMP_POWER_2975", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Strike from Legend"] = new engine.RulesElement({
    name: "Strike from Legend",
    type: "Power",
    id: "ID_FMP_POWER_5714",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5714",
    categories: ["Strike from Legend", "ID_FMP_POWER_5714", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Strings of Fate"] = new engine.RulesElement({
    name: "Strings of Fate",
    type: "Power",
    id: "ID_FMP_POWER_2960",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2960",
    categories: ["Strings of Fate", "ID_FMP_POWER_2960", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Subtlety of the Green Wyrm"] = new engine.RulesElement({
    name: "Subtlety of the Green Wyrm",
    type: "Power",
    id: "ID_FMP_POWER_5854",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5854",
    categories: ["Subtlety of the Green Wyrm", "ID_FMP_POWER_5854", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Abyssal Horde"] = new engine.RulesElement({
    name: "Summon Abyssal Horde",
    type: "Power",
    id: "ID_FMP_POWER_4104",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4104",
    categories: ["Summon Abyssal Horde", "ID_FMP_POWER_4104", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Abyssal Maw"] = new engine.RulesElement({
    name: "Summon Abyssal Maw",
    type: "Power",
    id: "ID_FMP_POWER_4078",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4078",
    categories: ["Summon Abyssal Maw", "ID_FMP_POWER_4078", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Arrowhawk"] = new engine.RulesElement({
    name: "Summon Arrowhawk",
    type: "Power",
    id: "ID_FMP_POWER_4082",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4082",
    categories: ["Summon Arrowhawk", "ID_FMP_POWER_4082", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Black Devourer"] = new engine.RulesElement({
    name: "Summon Black Devourer",
    type: "Power",
    id: "ID_FMP_POWER_4089",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4089",
    categories: ["Summon Black Devourer", "ID_FMP_POWER_4089", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Bonded Protector"] = new engine.RulesElement({
    name: "Summon Bonded Protector",
    type: "Power",
    id: "ID_FMP_POWER_5826",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5826",
    categories: ["Summon Bonded Protector", "ID_FMP_POWER_5826", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_330", "Bonded Summoner", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Chainbearer"] = new engine.RulesElement({
    name: "Summon Chainbearer",
    type: "Power",
    id: "ID_FMP_POWER_4086",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4086",
    categories: ["Summon Chainbearer", "ID_FMP_POWER_4086", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Diamond Falcon"] = new engine.RulesElement({
    name: "Summon Diamond Falcon",
    type: "Power",
    id: "ID_FMP_POWER_4113",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4113",
    categories: ["Summon Diamond Falcon", "ID_FMP_POWER_4113", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Fire Warrior"] = new engine.RulesElement({
    name: "Summon Fire Warrior",
    type: "Power",
    id: "ID_FMP_POWER_4016",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4016",
    categories: ["Summon Fire Warrior", "ID_FMP_POWER_4016", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Hammerfist Crusher"] = new engine.RulesElement({
    name: "Summon Hammerfist Crusher",
    type: "Power",
    id: "ID_FMP_POWER_4117",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4117",
    categories: ["Summon Hammerfist Crusher", "ID_FMP_POWER_4117", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Iron Cohort"] = new engine.RulesElement({
    name: "Summon Iron Cohort",
    type: "Power",
    id: "ID_FMP_POWER_4112",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4112",
    categories: ["Summon Iron Cohort", "ID_FMP_POWER_4112", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Living Mountain"] = new engine.RulesElement({
    name: "Summon Living Mountain",
    type: "Power",
    id: "ID_FMP_POWER_4100",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4100",
    categories: ["Summon Living Mountain", "ID_FMP_POWER_4100", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Rimefire Brute"] = new engine.RulesElement({
    name: "Summon Rimefire Brute",
    type: "Power",
    id: "ID_FMP_POWER_5835",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5835",
    categories: ["Summon Rimefire Brute", "ID_FMP_POWER_5835", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_332", "Rimetongue Caller", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Summon Shadow Serpent"] = new engine.RulesElement({
    name: "Summon Shadow Serpent",
    type: "Power",
    id: "ID_FMP_POWER_4106",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4106",
    categories: ["Summon Shadow Serpent", "ID_FMP_POWER_4106", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_51", "summoning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Sun and Stars"] = new engine.RulesElement({
    name: "Sun and Stars",
    type: "Power",
    id: "ID_FMP_POWER_5875",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5875",
    categories: ["Sun and Stars", "ID_FMP_POWER_5875", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Sun's Illumination"] = new engine.RulesElement({
    name: "Sun's Illumination",
    type: "Power",
    id: "ID_FMP_POWER_5850",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5850",
    categories: ["Sun's Illumination", "ID_FMP_POWER_5850", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Surprising Transposition"] = new engine.RulesElement({
    name: "Surprising Transposition",
    type: "Power",
    id: "ID_FMP_POWER_5764",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5764",
    categories: ["Surprising Transposition", "ID_FMP_POWER_5764", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Swarm of Fangs"] = new engine.RulesElement({
    name: "Swarm of Fangs",
    type: "Power",
    id: "ID_FMP_POWER_6869",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6869",
    categories: ["Swarm of Fangs", "ID_FMP_POWER_6869", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Sweeping Frostblade"] = new engine.RulesElement({
    name: "Sweeping Frostblade",
    type: "Power",
    id: "ID_FMP_POWER_3895",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3895",
    categories: ["Sweeping Frostblade", "ID_FMP_POWER_3895", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Swirling Stars"] = new engine.RulesElement({
    name: "Swirling Stars",
    type: "Power",
    id: "ID_FMP_POWER_3013",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3013",
    categories: ["Swirling Stars", "ID_FMP_POWER_3013", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Sword Chaser Assault"] = new engine.RulesElement({
    name: "Sword Chaser Assault",
    type: "Power",
    id: "ID_FMP_POWER_5775",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5775",
    categories: ["Sword Chaser Assault", "ID_FMP_POWER_5775", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Sword Duel"] = new engine.RulesElement({
    name: "Sword Duel",
    type: "Power",
    id: "ID_FMP_POWER_5774",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5774",
    categories: ["Sword Duel", "ID_FMP_POWER_5774", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Sword of Sigils"] = new engine.RulesElement({
    name: "Sword of Sigils",
    type: "Power",
    id: "ID_FMP_POWER_5737",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5737",
    categories: ["Sword of Sigils", "ID_FMP_POWER_5737", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Sword of Soul Rot"] = new engine.RulesElement({
    name: "Sword of Soul Rot",
    type: "Power",
    id: "ID_FMP_POWER_5779",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5779",
    categories: ["Sword of Soul Rot", "ID_FMP_POWER_5779", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Swordmage's Decree"] = new engine.RulesElement({
    name: "Swordmage's Decree",
    type: "Power",
    id: "ID_FMP_POWER_3145",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3145",
    categories: ["Swordmage's Decree", "ID_FMP_POWER_3145", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Symphony of Misfortune"] = new engine.RulesElement({
    name: "Symphony of Misfortune",
    type: "Power",
    id: "ID_FMP_POWER_2979",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2979",
    categories: ["Symphony of Misfortune", "ID_FMP_POWER_2979", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Synchronicity"] = new engine.RulesElement({
    name: "Synchronicity",
    type: "Power",
    id: "ID_FMP_POWER_3121",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3121",
    categories: ["Synchronicity", "ID_FMP_POWER_3121", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Taunting Phantoms"] = new engine.RulesElement({
    name: "Taunting Phantoms",
    type: "Power",
    id: "ID_FMP_POWER_4036",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4036",
    categories: ["Taunting Phantoms", "ID_FMP_POWER_4036", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Tearing Claws"] = new engine.RulesElement({
    name: "Tearing Claws",
    type: "Power",
    id: "ID_FMP_POWER_3171",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3171",
    categories: ["Tearing Claws", "ID_FMP_POWER_3171", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Terrifying Journey"] = new engine.RulesElement({
    name: "Terrifying Journey",
    type: "Power",
    id: "ID_FMP_POWER_5823",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5823",
    categories: ["Terrifying Journey", "ID_FMP_POWER_5823", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_329", "Arcane Wayfarer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["The Prince's Horde"] = new engine.RulesElement({
    name: "The Prince's Horde",
    type: "Power",
    id: "ID_FMP_POWER_5945",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5945",
    categories: ["The Prince's Horde", "ID_FMP_POWER_5945", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Theft of Life"] = new engine.RulesElement({
    name: "Theft of Life",
    type: "Power",
    id: "ID_FMP_POWER_2954",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2954",
    categories: ["Theft of Life", "ID_FMP_POWER_2954", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Bomb"] = new engine.RulesElement({
    name: "Thunder Bomb",
    type: "Power",
    id: "ID_FMP_POWER_5855",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5855",
    categories: ["Thunder Bomb", "ID_FMP_POWER_5855", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Buffer"] = new engine.RulesElement({
    name: "Thunder Buffer",
    type: "Power",
    id: "ID_FMP_POWER_5868",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5868",
    categories: ["Thunder Buffer", "ID_FMP_POWER_5868", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Wyrm's Jaws"] = new engine.RulesElement({
    name: "Thunder Wyrm's Jaws",
    type: "Power",
    id: "ID_FMP_POWER_3176",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3176",
    categories: ["Thunder Wyrm's Jaws", "ID_FMP_POWER_3176", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderclap Strike"] = new engine.RulesElement({
    name: "Thunderclap Strike",
    type: "Power",
    id: "ID_FMP_POWER_3956",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3956",
    categories: ["Thunderclap Strike", "ID_FMP_POWER_3956", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Thundering Burst"] = new engine.RulesElement({
    name: "Thundering Burst",
    type: "Power",
    id: "ID_FMP_POWER_3999",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3999",
    categories: ["Thundering Burst", "ID_FMP_POWER_3999", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Thundering Gust"] = new engine.RulesElement({
    name: "Thundering Gust",
    type: "Power",
    id: "ID_FMP_POWER_3012",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3012",
    categories: ["Thundering Gust", "ID_FMP_POWER_3012", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Thundering Roar"] = new engine.RulesElement({
    name: "Thundering Roar",
    type: "Power",
    id: "ID_FMP_POWER_3172",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3172",
    categories: ["Thundering Roar", "ID_FMP_POWER_3172", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Thundering Vortex"] = new engine.RulesElement({
    name: "Thundering Vortex",
    type: "Power",
    id: "ID_FMP_POWER_5765",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5765",
    categories: ["Thundering Vortex", "ID_FMP_POWER_5765", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderous Might"] = new engine.RulesElement({
    name: "Thunderous Might",
    type: "Power",
    id: "ID_FMP_POWER_3030",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3030",
    categories: ["Thunderous Might", "ID_FMP_POWER_3030", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder's Calling"] = new engine.RulesElement({
    name: "Thunder's Calling",
    type: "Power",
    id: "ID_FMP_POWER_6608",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6608",
    categories: ["Thunder's Calling", "ID_FMP_POWER_6608", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Thunderstroke"] = new engine.RulesElement({
    name: "Thunderstroke",
    type: "Power",
    id: "ID_FMP_POWER_2818",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2818",
    categories: ["Thunderstroke", "ID_FMP_POWER_2818", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Timely Distraction"] = new engine.RulesElement({
    name: "Timely Distraction",
    type: "Power",
    id: "ID_FMP_POWER_3084",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3084",
    categories: ["Timely Distraction", "ID_FMP_POWER_3084", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Tomebound Bloodbeast"] = new engine.RulesElement({
    name: "Tomebound Bloodbeast",
    type: "Power",
    id: "ID_FMP_POWER_5819",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5819",
    categories: ["Tomebound Bloodbeast", "ID_FMP_POWER_5819", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Tomebound Ooze"] = new engine.RulesElement({
    name: "Tomebound Ooze",
    type: "Power",
    id: "ID_FMP_POWER_5806",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5806",
    categories: ["Tomebound Ooze", "ID_FMP_POWER_5806", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Transcendent Dance"] = new engine.RulesElement({
    name: "Transcendent Dance",
    type: "Power",
    id: "ID_FMP_POWER_5922",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5922",
    categories: ["Transcendent Dance", "ID_FMP_POWER_5922", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Trick of Knowledge"] = new engine.RulesElement({
    name: "Trick of Knowledge",
    type: "Power",
    id: "ID_FMP_POWER_6932",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6932",
    categories: ["Trick of Knowledge", "ID_FMP_POWER_6932", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_343", "Sage of Ages", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Trickery's Reward"] = new engine.RulesElement({
    name: "Trickery's Reward",
    type: "Power",
    id: "ID_FMP_POWER_5717",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5717",
    categories: ["Trickery's Reward", "ID_FMP_POWER_5717", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_303", "Cunning Prevaricator", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Troll Rampage"] = new engine.RulesElement({
    name: "Troll Rampage",
    type: "Power",
    id: "ID_FMP_POWER_3952",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3952",
    categories: ["Troll Rampage", "ID_FMP_POWER_3952", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["True Seeing"] = new engine.RulesElement({
    name: "True Seeing",
    type: "Power",
    id: "ID_FMP_POWER_2840",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2840",
    categories: ["True Seeing", "ID_FMP_POWER_2840", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Turning the Tide"] = new engine.RulesElement({
    name: "Turning the Tide",
    type: "Power",
    id: "ID_FMP_POWER_3102",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3102",
    categories: ["Turning the Tide", "ID_FMP_POWER_3102", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Twist of Space"] = new engine.RulesElement({
    name: "Twist of Space",
    type: "Power",
    id: "ID_FMP_POWER_2816",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2816",
    categories: ["Twist of Space", "ID_FMP_POWER_2816", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Tyrannical Threat"] = new engine.RulesElement({
    name: "Tyrannical Threat",
    type: "Power",
    id: "ID_FMP_POWER_4076",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4076",
    categories: ["Tyrannical Threat", "ID_FMP_POWER_4076", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Tyranny of Flame"] = new engine.RulesElement({
    name: "Tyranny of Flame",
    type: "Power",
    id: "ID_FMP_POWER_4062",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4062",
    categories: ["Tyranny of Flame", "ID_FMP_POWER_4062", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Ultimate Resistance"] = new engine.RulesElement({
    name: "Ultimate Resistance",
    type: "Power",
    id: "ID_FMP_POWER_3066",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3066",
    categories: ["Ultimate Resistance", "ID_FMP_POWER_3066", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Ultimatum of the Third Order"] = new engine.RulesElement({
    name: "Ultimatum of the Third Order",
    type: "Power",
    id: "ID_FMP_POWER_5961",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5961",
    categories: ["Ultimatum of the Third Order", "ID_FMP_POWER_5961", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_322", "Entrancing Mystic", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Unerring Parry"] = new engine.RulesElement({
    name: "Unerring Parry",
    type: "Power",
    id: "ID_FMP_POWER_3976",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3976",
    categories: ["Unerring Parry", "ID_FMP_POWER_3976", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Unerring Vision"] = new engine.RulesElement({
    name: "Unerring Vision",
    type: "Power",
    id: "ID_FMP_POWER_3147",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3147",
    categories: ["Unerring Vision", "ID_FMP_POWER_3147", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Unicorn's Touch"] = new engine.RulesElement({
    name: "Unicorn's Touch",
    type: "Power",
    id: "ID_FMP_POWER_5748",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5748",
    categories: ["Unicorn's Touch", "ID_FMP_POWER_5748", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Unleash the Inferno"] = new engine.RulesElement({
    name: "Unleash the Inferno",
    type: "Power",
    id: "ID_FMP_POWER_5967",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5967",
    categories: ["Unleash the Inferno", "ID_FMP_POWER_5967", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_324", "Hellbringer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Unseen Entanglement"] = new engine.RulesElement({
    name: "Unseen Entanglement",
    type: "Power",
    id: "ID_FMP_POWER_5797",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5797",
    categories: ["Unseen Entanglement", "ID_FMP_POWER_5797", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_320", "Ward Guardian", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Unseen Gauntlet"] = new engine.RulesElement({
    name: "Unseen Gauntlet",
    type: "Power",
    id: "ID_FMP_POWER_3921",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3921",
    categories: ["Unseen Gauntlet", "ID_FMP_POWER_3921", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Vanishing Act"] = new engine.RulesElement({
    name: "Vanishing Act",
    type: "Power",
    id: "ID_FMP_POWER_5836",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5836",
    categories: ["Vanishing Act", "ID_FMP_POWER_5836", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_333", "Unseen Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Vanishing Legion"] = new engine.RulesElement({
    name: "Vanishing Legion",
    type: "Power",
    id: "ID_FMP_POWER_5838",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5838",
    categories: ["Vanishing Legion", "ID_FMP_POWER_5838", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_333", "Unseen Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Vary Resistance"] = new engine.RulesElement({
    name: "Vary Resistance",
    type: "Power",
    id: "ID_FMP_POWER_6928",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6928",
    categories: ["Vary Resistance", "ID_FMP_POWER_6928", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_EPIC_DESTINY_339", "Immanence", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Vengeful Hex"] = new engine.RulesElement({
    name: "Vengeful Hex",
    type: "Power",
    id: "ID_FMP_POWER_5969",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5969",
    categories: ["Vengeful Hex", "ID_FMP_POWER_5969", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_325", "Hexer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Venomous Webs"] = new engine.RulesElement({
    name: "Venomous Webs",
    type: "Power",
    id: "ID_FMP_POWER_5915",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5915",
    categories: ["Venomous Webs", "ID_FMP_POWER_5915", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Vertigo"] = new engine.RulesElement({
    name: "Vertigo",
    type: "Power",
    id: "ID_FMP_POWER_4088",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4088",
    categories: ["Vertigo", "ID_FMP_POWER_4088", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of Amaan"] = new engine.RulesElement({
    name: "Vestige of Amaan",
    type: "Power",
    id: "ID_FMP_POWER_6866",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6866",
    categories: ["Vestige of Amaan", "ID_FMP_POWER_6866", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of Ilmeth"] = new engine.RulesElement({
    name: "Vestige of Ilmeth",
    type: "Power",
    id: "ID_FMP_POWER_6860",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6860",
    categories: ["Vestige of Ilmeth", "ID_FMP_POWER_6860", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of Karmath"] = new engine.RulesElement({
    name: "Vestige of Karmath",
    type: "Power",
    id: "ID_FMP_POWER_6883",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6883",
    categories: ["Vestige of Karmath", "ID_FMP_POWER_6883", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_323", "God Fragment", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of Khaeleth"] = new engine.RulesElement({
    name: "Vestige of Khaeleth",
    type: "Power",
    id: "ID_FMP_POWER_6856",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6856",
    categories: ["Vestige of Khaeleth", "ID_FMP_POWER_6856", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of Land's Soul"] = new engine.RulesElement({
    name: "Vestige of Land's Soul",
    type: "Power",
    id: "ID_FMP_POWER_6870",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6870",
    categories: ["Vestige of Land's Soul", "ID_FMP_POWER_6870", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of Leraje"] = new engine.RulesElement({
    name: "Vestige of Leraje",
    type: "Power",
    id: "ID_FMP_POWER_6862",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6862",
    categories: ["Vestige of Leraje", "ID_FMP_POWER_6862", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of Mount Vaelis"] = new engine.RulesElement({
    name: "Vestige of Mount Vaelis",
    type: "Power",
    id: "ID_FMP_POWER_6857",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6857",
    categories: ["Vestige of Mount Vaelis", "ID_FMP_POWER_6857", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of Shax"] = new engine.RulesElement({
    name: "Vestige of Shax",
    type: "Power",
    id: "ID_FMP_POWER_6861",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6861",
    categories: ["Vestige of Shax", "ID_FMP_POWER_6861", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of Solis"] = new engine.RulesElement({
    name: "Vestige of Solis",
    type: "Power",
    id: "ID_FMP_POWER_6863",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6863",
    categories: ["Vestige of Solis", "ID_FMP_POWER_6863", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7543"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Vestige of Solis Secondary Attack"] = new engine.RulesElement({
    name: "Vestige of Solis Secondary Attack",
    type: "Power",
    id: "ID_FMP_POWER_7543",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7543",
    categories: ["Vestige of Solis Secondary Attack", "ID_FMP_POWER_7543", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of the Burned Emperors"] = new engine.RulesElement({
    name: "Vestige of the Burned Emperors",
    type: "Power",
    id: "ID_FMP_POWER_6867",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6867",
    categories: ["Vestige of the Burned Emperors", "ID_FMP_POWER_6867", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of the Master of the Hidden Flame"] = new engine.RulesElement({
    name: "Vestige of the Master of the Hidden Flame",
    type: "Power",
    id: "ID_FMP_POWER_6872",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6872",
    categories: ["Vestige of the Master of the Hidden Flame", "ID_FMP_POWER_6872", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of the Queen of Namhar"] = new engine.RulesElement({
    name: "Vestige of the Queen of Namhar",
    type: "Power",
    id: "ID_FMP_POWER_6871",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6871",
    categories: ["Vestige of the Queen of Namhar", "ID_FMP_POWER_6871", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of the Sea Tyrant"] = new engine.RulesElement({
    name: "Vestige of the Sea Tyrant",
    type: "Power",
    id: "ID_FMP_POWER_6895",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6895",
    categories: ["Vestige of the Sea Tyrant", "ID_FMP_POWER_6895", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_327", "Sea Tyrant Oracle", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of Ugar"] = new engine.RulesElement({
    name: "Vestige of Ugar",
    type: "Power",
    id: "ID_FMP_POWER_6858",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6858",
    categories: ["Vestige of Ugar", "ID_FMP_POWER_6858", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of Xandor"] = new engine.RulesElement({
    name: "Vestige of Xandor",
    type: "Power",
    id: "ID_FMP_POWER_6859",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6859",
    categories: ["Vestige of Xandor", "ID_FMP_POWER_6859", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige of Zuriel"] = new engine.RulesElement({
    name: "Vestige of Zuriel",
    type: "Power",
    id: "ID_FMP_POWER_6873",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6873",
    categories: ["Vestige of Zuriel", "ID_FMP_POWER_6873", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige Pact Boons"] = new engine.RulesElement({
    name: "Vestige Pact Boons",
    type: "Power",
    id: "ID_FMP_POWER_7545",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7545",
    categories: ["Vestige Pact Boons", "ID_FMP_POWER_7545", "ID_FMP_CLASS_FEATURE_1406", "Vestige Pact", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Vestige's Calamity"] = new engine.RulesElement({
    name: "Vestige's Calamity",
    type: "Power",
    id: "ID_FMP_POWER_5912",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5912",
    categories: ["Vestige's Calamity", "ID_FMP_POWER_5912", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Vigorous Cadence"] = new engine.RulesElement({
    name: "Vigorous Cadence",
    type: "Power",
    id: "ID_FMP_POWER_5687",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5687",
    categories: ["Vigorous Cadence", "ID_FMP_POWER_5687", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Virtuoso of Misfortune"] = new engine.RulesElement({
    name: "Virtuoso of Misfortune",
    type: "Power",
    id: "ID_FMP_POWER_4061",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4061",
    categories: ["Virtuoso of Misfortune", "ID_FMP_POWER_4061", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Visions of Avarice"] = new engine.RulesElement({
    name: "Visions of Avarice",
    type: "Power",
    id: "ID_FMP_POWER_4074",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4074",
    categories: ["Visions of Avarice", "ID_FMP_POWER_4074", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7344"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Visions of Avarice Attack"] = new engine.RulesElement({
    name: "Visions of Avarice Attack",
    type: "Power",
    id: "ID_FMP_POWER_7344",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7344",
    categories: ["Visions of Avarice Attack", "ID_FMP_POWER_7344", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Visions of Doom"] = new engine.RulesElement({
    name: "Visions of Doom",
    type: "Power",
    id: "ID_FMP_POWER_5723",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5723",
    categories: ["Visions of Doom", "ID_FMP_POWER_5723", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_305", "Grave Caller", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Visions of Ruin"] = new engine.RulesElement({
    name: "Visions of Ruin",
    type: "Power",
    id: "ID_FMP_POWER_4071",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4071",
    categories: ["Visions of Ruin", "ID_FMP_POWER_4071", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Visions of Wrath"] = new engine.RulesElement({
    name: "Visions of Wrath",
    type: "Power",
    id: "ID_FMP_POWER_5820",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5820",
    categories: ["Visions of Wrath", "ID_FMP_POWER_5820", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Void Star"] = new engine.RulesElement({
    name: "Void Star",
    type: "Power",
    id: "ID_FMP_POWER_5935",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5935",
    categories: ["Void Star", "ID_FMP_POWER_5935", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Wail of Anguish"] = new engine.RulesElement({
    name: "Wail of Anguish",
    type: "Power",
    id: "ID_FMP_POWER_2977",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2977",
    categories: ["Wail of Anguish", "ID_FMP_POWER_2977", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "9"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7336"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Wail of Anguish Attack"] = new engine.RulesElement({
    name: "Wail of Anguish Attack",
    type: "Power",
    id: "ID_FMP_POWER_7336",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7336",
    categories: ["Wail of Anguish Attack", "ID_FMP_POWER_7336", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_OPPORTUNITY_ACTION", "Opportunity Action"]
  });
  byID[te.id] = te;
  
  te = Power["Wakeman's Invocation"] = new engine.RulesElement({
    name: "Wakeman's Invocation",
    type: "Power",
    id: "ID_FMP_POWER_5937",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5937",
    categories: ["Wakeman's Invocation", "ID_FMP_POWER_5937", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Walk of the Kantakaran"] = new engine.RulesElement({
    name: "Walk of the Kantakaran",
    type: "Power",
    id: "ID_FMP_POWER_4251",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4251",
    categories: ["Walk of the Kantakaran", "ID_FMP_POWER_4251", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Wall of Force"] = new engine.RulesElement({
    name: "Wall of Force",
    type: "Power",
    id: "ID_FMP_POWER_2837",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2837",
    categories: ["Wall of Force", "ID_FMP_POWER_2837", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_8", "force", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Wall of Inky Night"] = new engine.RulesElement({
    name: "Wall of Inky Night",
    type: "Power",
    id: "ID_FMP_POWER_5938",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5938",
    categories: ["Wall of Inky Night", "ID_FMP_POWER_5938", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Wall of Sound"] = new engine.RulesElement({
    name: "Wall of Sound",
    type: "Power",
    id: "ID_FMP_POWER_3107",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3107",
    categories: ["Wall of Sound", "ID_FMP_POWER_3107", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Wall of Winter"] = new engine.RulesElement({
    name: "Wall of Winter",
    type: "Power",
    id: "ID_FMP_POWER_5833",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5833",
    categories: ["Wall of Winter", "ID_FMP_POWER_5833", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_332", "Rimetongue Caller", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Ward Force Assault"] = new engine.RulesElement({
    name: "Ward Force Assault",
    type: "Power",
    id: "ID_FMP_POWER_5795",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5795",
    categories: ["Ward Force Assault", "ID_FMP_POWER_5795", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_320", "Ward Guardian", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Ward of Brilliance"] = new engine.RulesElement({
    name: "Ward of Brilliance",
    type: "Power",
    id: "ID_FMP_POWER_5741",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5741",
    categories: ["Ward of Brilliance", "ID_FMP_POWER_5741", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Ward of Scales"] = new engine.RulesElement({
    name: "Ward of Scales",
    type: "Power",
    id: "ID_FMP_POWER_5769",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5769",
    categories: ["Ward of Scales", "ID_FMP_POWER_5769", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Warp Karma"] = new engine.RulesElement({
    name: "Warp Karma",
    type: "Power",
    id: "ID_FMP_POWER_5730",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5730",
    categories: ["Warp Karma", "ID_FMP_POWER_5730", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_307", "Karmic Shaper", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Warp Space"] = new engine.RulesElement({
    name: "Warp Space",
    type: "Power",
    id: "ID_FMP_POWER_4225",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4225",
    categories: ["Warp Space", "ID_FMP_POWER_4225", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Watchful Strike"] = new engine.RulesElement({
    name: "Watchful Strike",
    type: "Power",
    id: "ID_FMP_POWER_583",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=583",
    categories: ["Watchful Strike", "ID_FMP_POWER_583", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Waves of Languor"] = new engine.RulesElement({
    name: "Waves of Languor",
    type: "Power",
    id: "ID_FMP_POWER_3993",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3993",
    categories: ["Waves of Languor", "ID_FMP_POWER_3993", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_17", "Sleep", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Wayfarer's Evasion"] = new engine.RulesElement({
    name: "Wayfarer's Evasion",
    type: "Power",
    id: "ID_FMP_POWER_5822",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5822",
    categories: ["Wayfarer's Evasion", "ID_FMP_POWER_5822", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_329", "Arcane Wayfarer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Whirling Threat"] = new engine.RulesElement({
    name: "Whirling Threat",
    type: "Power",
    id: "ID_FMP_POWER_5770",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5770",
    categories: ["Whirling Threat", "ID_FMP_POWER_5770", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Whirlwind"] = new engine.RulesElement({
    name: "Whirlwind",
    type: "Power",
    id: "ID_FMP_POWER_3009",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3009",
    categories: ["Whirlwind", "ID_FMP_POWER_3009", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Wildrift Burst"] = new engine.RulesElement({
    name: "Wildrift Burst",
    type: "Power",
    id: "ID_FMP_POWER_5876",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5876",
    categories: ["Wildrift Burst", "ID_FMP_POWER_5876", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Winds of Change"] = new engine.RulesElement({
    name: "Winds of Change",
    type: "Power",
    id: "ID_FMP_POWER_3039",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3039",
    categories: ["Winds of Change", "ID_FMP_POWER_3039", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Winter's Clutch"] = new engine.RulesElement({
    name: "Winter's Clutch",
    type: "Power",
    id: "ID_FMP_POWER_5883",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5883",
    categories: ["Winter's Clutch", "ID_FMP_POWER_5883", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_309", "Blizzard Mage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Wizard's Escape"] = new engine.RulesElement({
    name: "Wizard's Escape",
    type: "Power",
    id: "ID_FMP_POWER_6902",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6902",
    categories: ["Wizard's Escape", "ID_FMP_POWER_6902", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Words of Protective Fate"] = new engine.RulesElement({
    name: "Words of Protective Fate",
    type: "Power",
    id: "ID_FMP_POWER_2990",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2990",
    categories: ["Words of Protective Fate", "ID_FMP_POWER_2990", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Worms of Minauros"] = new engine.RulesElement({
    name: "Worms of Minauros",
    type: "Power",
    id: "ID_FMP_POWER_4028",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4028",
    categories: ["Worms of Minauros", "ID_FMP_POWER_4028", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_FEATURE_845", "Arcane Fundamentals", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Wracking Radiance"] = new engine.RulesElement({
    name: "Wracking Radiance",
    type: "Power",
    id: "ID_FMP_POWER_2981",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=2981",
    categories: ["Wracking Radiance", "ID_FMP_POWER_2981", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Wraith's Shadow"] = new engine.RulesElement({
    name: "Wraith's Shadow",
    type: "Power",
    id: "ID_FMP_POWER_5925",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5925",
    categories: ["Wraith's Shadow", "ID_FMP_POWER_5925", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Wrath of the Arctic Wind"] = new engine.RulesElement({
    name: "Wrath of the Arctic Wind",
    type: "Power",
    id: "ID_FMP_POWER_5776",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5776",
    categories: ["Wrath of the Arctic Wind", "ID_FMP_POWER_5776", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Wrath of the Clouds"] = new engine.RulesElement({
    name: "Wrath of the Clouds",
    type: "Power",
    id: "ID_FMP_POWER_5979",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5979",
    categories: ["Wrath of the Clouds", "ID_FMP_POWER_5979", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_328", "Storm Scourge", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Wrathful Vapors"] = new engine.RulesElement({
    name: "Wrathful Vapors",
    type: "Power",
    id: "ID_FMP_POWER_6812",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=6812",
    categories: ["Wrathful Vapors", "ID_FMP_POWER_6812", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Wyrm Form"] = new engine.RulesElement({
    name: "Wyrm Form",
    type: "Power",
    id: "ID_FMP_POWER_5882",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5882",
    categories: ["Wyrm Form", "ID_FMP_POWER_5882", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7540"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Wyrm Form Basic Bite Attack"] = new engine.RulesElement({
    name: "Wyrm Form Basic Bite Attack",
    type: "Power",
    id: "ID_FMP_POWER_7540",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7540",
    categories: ["Wyrm Form Basic Bite Attack", "ID_FMP_POWER_7540", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7541"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Wyrm Form Breath Attack"] = new engine.RulesElement({
    name: "Wyrm Form Breath Attack",
    type: "Power",
    id: "ID_FMP_POWER_7541",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7541",
    categories: ["Wyrm Form Breath Attack", "ID_FMP_POWER_7541", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7542"]);
    }
  });
  byID[te.id] = te;
  
  te = Power["Wyrm Form Reactive Attack"] = new engine.RulesElement({
    name: "Wyrm Form Reactive Attack",
    type: "Power",
    id: "ID_FMP_POWER_7542",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=7542",
    categories: ["Wyrm Form Reactive Attack", "ID_FMP_POWER_7542", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Wyrmblight"] = new engine.RulesElement({
    name: "Wyrmblight",
    type: "Power",
    id: "ID_FMP_POWER_3180",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3180",
    categories: ["Wyrmblight", "ID_FMP_POWER_3180", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Zephyr of the Barren Sands"] = new engine.RulesElement({
    name: "Zephyr of the Barren Sands",
    type: "Power",
    id: "ID_FMP_POWER_3160",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=3160",
    categories: ["Zephyr of the Barren Sands", "ID_FMP_POWER_3160", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Zutwa's Incandescence"] = new engine.RulesElement({
    name: "Zutwa's Incandescence",
    type: "Power",
    id: "ID_FMP_POWER_5949",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5949",
    categories: ["Zutwa's Incandescence", "ID_FMP_POWER_5949", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
