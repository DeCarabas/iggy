define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Absorb Elements"] = new engine.RulesElement({
    name: "Absorb Elements",
    type: "Power",
    id: "ID_FMP_POWER_1906",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1906",
    categories: ["Absorb Elements", "ID_FMP_POWER_1906", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_84", "Elemental Tempest", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Acid Burst Blade"] = new engine.RulesElement({
    name: "Acid Burst Blade",
    type: "Power",
    id: "ID_FMP_POWER_1777",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1777",
    categories: ["Acid Burst Blade", "ID_FMP_POWER_1777", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Acid for Blood"] = new engine.RulesElement({
    name: "Acid for Blood",
    type: "Power",
    id: "ID_FMP_POWER_3373",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3373",
    categories: ["Acid for Blood", "ID_FMP_POWER_3373", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Acid Fountain"] = new engine.RulesElement({
    name: "Acid Fountain",
    type: "Power",
    id: "ID_FMP_POWER_4788",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4788",
    categories: ["Acid Fountain", "ID_FMP_POWER_4788", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Aegis of Assault"] = new engine.RulesElement({
    name: "Aegis of Assault",
    type: "Power",
    id: "ID_FMP_POWER_3322",
    source: "Forgotten Realms Player's Guide,Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3322",
    categories: ["Aegis of Assault", "ID_FMP_POWER_3322", "ID_FMP_CLASS_FEATURE_518", "Swordmage Aegis"]
  });
  byID[te.id] = te;
  
  te = Power["Aegis of Shielding"] = new engine.RulesElement({
    name: "Aegis of Shielding",
    type: "Power",
    id: "ID_FMP_POWER_3323",
    source: "Forgotten Realms Player's Guide,Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3323",
    categories: ["Aegis of Shielding", "ID_FMP_POWER_3323", "ID_FMP_CLASS_FEATURE_518", "Swordmage Aegis"]
  });
  byID[te.id] = te;
  
  te = Power["All Must Sacrifice"] = new engine.RulesElement({
    name: "All Must Sacrifice",
    type: "Power",
    id: "ID_FMP_POWER_1888",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1888",
    categories: ["All Must Sacrifice", "ID_FMP_POWER_1888", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Angharradh's Favor"] = new engine.RulesElement({
    name: "Angharradh's Favor",
    type: "Power",
    id: "ID_FMP_POWER_3583",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3583",
    categories: ["Angharradh's Favor", "ID_FMP_POWER_3583", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Awareness"] = new engine.RulesElement({
    name: "Arcane Awareness",
    type: "Power",
    id: "ID_FMP_POWER_3367",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3367",
    categories: ["Arcane Awareness", "ID_FMP_POWER_3367", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Arcane Tanglestep"] = new engine.RulesElement({
    name: "Arcane Tanglestep",
    type: "Power",
    id: "ID_FMP_POWER_1857",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1857",
    categories: ["Arcane Tanglestep", "ID_FMP_POWER_1857", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_76", "Wandering Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Argent Arrow"] = new engine.RulesElement({
    name: "Argent Arrow",
    type: "Power",
    id: "ID_FMP_POWER_1822",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1822",
    categories: ["Argent Arrow", "ID_FMP_POWER_1822", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_63", "High Forest Scout", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Armathor's Step"] = new engine.RulesElement({
    name: "Armathor's Step",
    type: "Power",
    id: "ID_FMP_POWER_3357",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3357",
    categories: ["Armathor's Step", "ID_FMP_POWER_3357", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Assassin Shadow"] = new engine.RulesElement({
    name: "Assassin Shadow",
    type: "Power",
    id: "ID_FMP_POWER_1847",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1847",
    categories: ["Assassin Shadow", "ID_FMP_POWER_1847", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_71", "Umbriri", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Astral Thunder Blade"] = new engine.RulesElement({
    name: "Astral Thunder Blade",
    type: "Power",
    id: "ID_FMP_POWER_3394",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3394",
    categories: ["Astral Thunder Blade", "ID_FMP_POWER_3394", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Avaunt Foe"] = new engine.RulesElement({
    name: "Avaunt Foe",
    type: "Power",
    id: "ID_FMP_POWER_1855",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1855",
    categories: ["Avaunt Foe", "ID_FMP_POWER_1855", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_73", "Coronal Guard", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Bane Blade"] = new engine.RulesElement({
    name: "Bane Blade",
    type: "Power",
    id: "ID_FMP_POWER_3380",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3380",
    categories: ["Bane Blade", "ID_FMP_POWER_3380", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Battle Judgement"] = new engine.RulesElement({
    name: "Battle Judgement",
    type: "Power",
    id: "ID_FMP_POWER_3579",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3579",
    categories: ["Battle Judgement", "ID_FMP_POWER_3579", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Be Gone"] = new engine.RulesElement({
    name: "Be Gone",
    type: "Power",
    id: "ID_FMP_POWER_3365",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3365",
    categories: ["Be Gone", "ID_FMP_POWER_3365", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Beacon Blade"] = new engine.RulesElement({
    name: "Beacon Blade",
    type: "Power",
    id: "ID_FMP_POWER_3364",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3364",
    categories: ["Beacon Blade", "ID_FMP_POWER_3364", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Berronar's Salve"] = new engine.RulesElement({
    name: "Berronar's Salve",
    type: "Power",
    id: "ID_FMP_POWER_3584",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3584",
    categories: ["Berronar's Salve", "ID_FMP_POWER_3584", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Binding Arrows"] = new engine.RulesElement({
    name: "Binding Arrows",
    type: "Power",
    id: "ID_FMP_POWER_1824",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1824",
    categories: ["Binding Arrows", "ID_FMP_POWER_1824", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_63", "High Forest Scout", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Blades of Vanquished Armies"] = new engine.RulesElement({
    name: "Blades of Vanquished Armies",
    type: "Power",
    id: "ID_FMP_POWER_3412",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3412",
    categories: ["Blades of Vanquished Armies", "ID_FMP_POWER_3412", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Blastback Swipe"] = new engine.RulesElement({
    name: "Blastback Swipe",
    type: "Power",
    id: "ID_FMP_POWER_1729",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1729",
    categories: ["Blastback Swipe", "ID_FMP_POWER_1729", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Blessing of Silvanus"] = new engine.RulesElement({
    name: "Blessing of Silvanus",
    type: "Power",
    id: "ID_FMP_POWER_3586",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3586",
    categories: ["Blessing of Silvanus", "ID_FMP_POWER_3586", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Blinding Beacon"] = new engine.RulesElement({
    name: "Blinding Beacon",
    type: "Power",
    id: "ID_FMP_POWER_3543",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3543",
    categories: ["Blinding Beacon", "ID_FMP_POWER_3543", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_88", "Evermeet Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Blurring Blade"] = new engine.RulesElement({
    name: "Blurring Blade",
    type: "Power",
    id: "ID_FMP_POWER_3485",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3485",
    categories: ["Blurring Blade", "ID_FMP_POWER_3485", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Body, No Body"] = new engine.RulesElement({
    name: "Body, No Body",
    type: "Power",
    id: "ID_FMP_POWER_3500",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3500",
    categories: ["Body, No Body", "ID_FMP_POWER_3500", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Bolstering Warding"] = new engine.RulesElement({
    name: "Bolstering Warding",
    type: "Power",
    id: "ID_FMP_POWER_3376",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3376",
    categories: ["Bolstering Warding", "ID_FMP_POWER_3376", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Booming Blade"] = new engine.RulesElement({
    name: "Booming Blade",
    type: "Power",
    id: "ID_FMP_POWER_1725",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1725",
    categories: ["Booming Blade", "ID_FMP_POWER_1725", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Bounding Lightning"] = new engine.RulesElement({
    name: "Bounding Lightning",
    type: "Power",
    id: "ID_FMP_POWER_3387",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3387",
    categories: ["Bounding Lightning", "ID_FMP_POWER_3387", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Break the Chains"] = new engine.RulesElement({
    name: "Break the Chains",
    type: "Power",
    id: "ID_FMP_POWER_3564",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3564",
    categories: ["Break the Chains", "ID_FMP_POWER_3564", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_145", "Steelsky Liberator", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Burning Blade"] = new engine.RulesElement({
    name: "Burning Blade",
    type: "Power",
    id: "ID_FMP_POWER_3327",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3327",
    categories: ["Burning Blade", "ID_FMP_POWER_3327", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Burning Focus"] = new engine.RulesElement({
    name: "Burning Focus",
    type: "Power",
    id: "ID_FMP_POWER_3479",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3479",
    categories: ["Burning Focus", "ID_FMP_POWER_3479", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Burning the Plagued Bellows"] = new engine.RulesElement({
    name: "Burning the Plagued Bellows",
    type: "Power",
    id: "ID_FMP_POWER_3492",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3492",
    categories: ["Burning the Plagued Bellows", "ID_FMP_POWER_3492", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Call of the Plague"] = new engine.RulesElement({
    name: "Call of the Plague",
    type: "Power",
    id: "ID_FMP_POWER_3484",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3484",
    categories: ["Call of the Plague", "ID_FMP_POWER_3484", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Chauntea's Blessing"] = new engine.RulesElement({
    name: "Chauntea's Blessing",
    type: "Power",
    id: "ID_FMP_POWER_3587",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3587",
    categories: ["Chauntea's Blessing", "ID_FMP_POWER_3587", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action"]
  });
  byID[te.id] = te;
  
  te = Power["Chilling Blow"] = new engine.RulesElement({
    name: "Chilling Blow",
    type: "Power",
    id: "ID_FMP_POWER_1773",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1773",
    categories: ["Chilling Blow", "ID_FMP_POWER_1773", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Circle of Devastation"] = new engine.RulesElement({
    name: "Circle of Devastation",
    type: "Power",
    id: "ID_FMP_POWER_3392",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3392",
    categories: ["Circle of Devastation", "ID_FMP_POWER_3392", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Cloud of Darkness"] = new engine.RulesElement({
    name: "Cloud of Darkness",
    type: "Power",
    id: "ID_FMP_POWER_2473",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2473",
    categories: ["Cloud of Darkness", "ID_FMP_POWER_2473", "ID_FMP_RACIAL_TRAIT_565", "Lolthtouched", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Concealing Umbra"] = new engine.RulesElement({
    name: "Concealing Umbra",
    type: "Power",
    id: "ID_FMP_POWER_1848",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1848",
    categories: ["Concealing Umbra", "ID_FMP_POWER_1848", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_71", "Umbriri", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_10", "illusion", "ID_FMP_CATEGORY_38", "Shadow", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Contagion"] = new engine.RulesElement({
    name: "Contagion",
    type: "Power",
    id: "ID_FMP_POWER_1918",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1918",
    categories: ["Contagion", "ID_FMP_POWER_1918", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Contagion Flame"] = new engine.RulesElement({
    name: "Contagion Flame",
    type: "Power",
    id: "ID_FMP_POWER_3511",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3511",
    categories: ["Contagion Flame", "ID_FMP_POWER_3511", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Corrosive Ruin"] = new engine.RulesElement({
    name: "Corrosive Ruin",
    type: "Power",
    id: "ID_FMP_POWER_3336",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3336",
    categories: ["Corrosive Ruin", "ID_FMP_POWER_3336", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Countering Thunderclap"] = new engine.RulesElement({
    name: "Countering Thunderclap",
    type: "Power",
    id: "ID_FMP_POWER_3569",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3569",
    categories: ["Countering Thunderclap", "ID_FMP_POWER_3569", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_73", "Coronal Guard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Cursebite"] = new engine.RulesElement({
    name: "Cursebite",
    type: "Power",
    id: "ID_FMP_POWER_1868",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1868",
    categories: ["Cursebite", "ID_FMP_POWER_1868", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Cursed Grasping Air"] = new engine.RulesElement({
    name: "Cursed Grasping Air",
    type: "Power",
    id: "ID_FMP_POWER_3490",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3490",
    categories: ["Cursed Grasping Air", "ID_FMP_POWER_3490", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Cursegrind"] = new engine.RulesElement({
    name: "Cursegrind",
    type: "Power",
    id: "ID_FMP_POWER_1875",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1875",
    categories: ["Cursegrind", "ID_FMP_POWER_1875", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Dark Lady's Gift"] = new engine.RulesElement({
    name: "Dark Lady's Gift",
    type: "Power",
    id: "ID_FMP_POWER_1885",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1885",
    categories: ["Dark Lady's Gift", "ID_FMP_POWER_1885", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Darkblade"] = new engine.RulesElement({
    name: "Darkblade",
    type: "Power",
    id: "ID_FMP_POWER_1901",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1901",
    categories: ["Darkblade", "ID_FMP_POWER_1901", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_82", "Drow Wanderer", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Darkest Mirror"] = new engine.RulesElement({
    name: "Darkest Mirror",
    type: "Power",
    id: "ID_FMP_POWER_1926",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1926",
    categories: ["Darkest Mirror", "ID_FMP_POWER_1926", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Darkfire"] = new engine.RulesElement({
    name: "Darkfire",
    type: "Power",
    id: "ID_FMP_POWER_1831",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1831",
    categories: ["Darkfire", "ID_FMP_POWER_1831", "ID_FMP_RACIAL_TRAIT_565", "Lolthtouched", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return (element.hasCategory("Darkfire") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Darkspiral Aura"] = new engine.RulesElement({
    name: "Darkspiral Aura",
    type: "Power",
    id: "ID_FMP_POWER_4311",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4311",
    categories: ["Darkspiral Aura", "ID_FMP_POWER_4311", "ID_FMP_CLASS_FEATURE_804", "Dark Pact", "ID_INTERNAL_CATEGORY_PACT_BOON", "Pact Boon", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Deathboon"] = new engine.RulesElement({
    name: "Deathboon",
    type: "Power",
    id: "ID_FMP_POWER_1871",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1871",
    categories: ["Deathboon", "ID_FMP_POWER_1871", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Death's Commands"] = new engine.RulesElement({
    name: "Death's Commands",
    type: "Power",
    id: "ID_FMP_POWER_1872",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1872",
    categories: ["Death's Commands", "ID_FMP_POWER_1872", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Death's Fond Caress"] = new engine.RulesElement({
    name: "Death's Fond Caress",
    type: "Power",
    id: "ID_FMP_POWER_1873",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1873",
    categories: ["Death's Fond Caress", "ID_FMP_POWER_1873", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_22", "Reliable", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Deep Freeze"] = new engine.RulesElement({
    name: "Deep Freeze",
    type: "Power",
    id: "ID_FMP_POWER_3340",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3340",
    categories: ["Deep Freeze", "ID_FMP_POWER_3340", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Demonbane Flurry"] = new engine.RulesElement({
    name: "Demonbane Flurry",
    type: "Power",
    id: "ID_FMP_POWER_1861",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1861",
    categories: ["Demonbane Flurry", "ID_FMP_POWER_1861", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_77", "Impilturan Demonslayer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Demonslayer's Hindrance"] = new engine.RulesElement({
    name: "Demonslayer's Hindrance",
    type: "Power",
    id: "ID_FMP_POWER_1859",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1859",
    categories: ["Demonslayer's Hindrance", "ID_FMP_POWER_1859", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_77", "Impilturan Demonslayer", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Demonward"] = new engine.RulesElement({
    name: "Demonward",
    type: "Power",
    id: "ID_FMP_POWER_1860",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1860",
    categories: ["Demonward", "ID_FMP_POWER_1860", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_77", "Impilturan Demonslayer", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Dimensional Charge"] = new engine.RulesElement({
    name: "Dimensional Charge",
    type: "Power",
    id: "ID_FMP_POWER_3393",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3393",
    categories: ["Dimensional Charge", "ID_FMP_POWER_3393", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Dimensional Dodge"] = new engine.RulesElement({
    name: "Dimensional Dodge",
    type: "Power",
    id: "ID_FMP_POWER_3368",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3368",
    categories: ["Dimensional Dodge", "ID_FMP_POWER_3368", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Dimensional Slash"] = new engine.RulesElement({
    name: "Dimensional Slash",
    type: "Power",
    id: "ID_FMP_POWER_3371",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3371",
    categories: ["Dimensional Slash", "ID_FMP_POWER_3371", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Dimensional Warding"] = new engine.RulesElement({
    name: "Dimensional Warding",
    type: "Power",
    id: "ID_FMP_POWER_3358",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3358",
    categories: ["Dimensional Warding", "ID_FMP_POWER_3358", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Dimensional Warp"] = new engine.RulesElement({
    name: "Dimensional Warp",
    type: "Power",
    id: "ID_FMP_POWER_4276",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4276",
    categories: ["Dimensional Warp", "ID_FMP_POWER_4276", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Regeneration - Chosen"] = new engine.RulesElement({
    name: "Divine Regeneration - Chosen",
    type: "Power",
    id: "ID_FMP_POWER_9316",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9316",
    categories: ["Divine Regeneration - Chosen", "ID_FMP_POWER_9316", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Donning the Mudflesh"] = new engine.RulesElement({
    name: "Donning the Mudflesh",
    type: "Power",
    id: "ID_FMP_POWER_3506",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3506",
    categories: ["Donning the Mudflesh", "ID_FMP_POWER_3506", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_15", "Polymorph", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Dragon Scales"] = new engine.RulesElement({
    name: "Dragon Scales",
    type: "Power",
    id: "ID_FMP_POWER_1854",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1854",
    categories: ["Dragon Scales", "ID_FMP_POWER_1854", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_73", "Coronal Guard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Dreadtheft"] = new engine.RulesElement({
    name: "Dreadtheft",
    type: "Power",
    id: "ID_FMP_POWER_1877",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1877",
    categories: ["Dreadtheft", "ID_FMP_POWER_1877", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Earthshock"] = new engine.RulesElement({
    name: "Earthshock",
    type: "Power",
    id: "ID_FMP_POWER_1767",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1767",
    categories: ["Earthshock", "ID_FMP_POWER_1767", "ID_FMP_RACIAL_TRAIT_521", "earthsoul", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return (element.hasCategory("Earthshock") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Earthsight"] = new engine.RulesElement({
    name: "Earthsight",
    type: "Power",
    id: "ID_FMP_POWER_1903",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1903",
    categories: ["Earthsight", "ID_FMP_POWER_1903", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_83", "Earthheart Defender", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Earthsurge"] = new engine.RulesElement({
    name: "Earthsurge",
    type: "Power",
    id: "ID_FMP_POWER_1904",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1904",
    categories: ["Earthsurge", "ID_FMP_POWER_1904", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_83", "Earthheart Defender", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Echoes of Valor"] = new engine.RulesElement({
    name: "Echoes of Valor",
    type: "Power",
    id: "ID_FMP_POWER_3515",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3515",
    categories: ["Echoes of Valor", "ID_FMP_POWER_3515", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Eldritch Speed"] = new engine.RulesElement({
    name: "Eldritch Speed",
    type: "Power",
    id: "ID_FMP_POWER_3331",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3331",
    categories: ["Eldritch Speed", "ID_FMP_POWER_3331", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Electrified Lash"] = new engine.RulesElement({
    name: "Electrified Lash",
    type: "Power",
    id: "ID_FMP_POWER_3362",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3362",
    categories: ["Electrified Lash", "ID_FMP_POWER_3362", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Elemental Foible"] = new engine.RulesElement({
    name: "Elemental Foible",
    type: "Power",
    id: "ID_FMP_POWER_3342",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3342",
    categories: ["Elemental Foible", "ID_FMP_POWER_3342", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Elemental Fury"] = new engine.RulesElement({
    name: "Elemental Fury",
    type: "Power",
    id: "ID_FMP_POWER_1907",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1907",
    categories: ["Elemental Fury", "ID_FMP_POWER_1907", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_84", "Elemental Tempest", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Elemental Protection"] = new engine.RulesElement({
    name: "Elemental Protection",
    type: "Power",
    id: "ID_FMP_POWER_3377",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3377",
    categories: ["Elemental Protection", "ID_FMP_POWER_3377", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Embers of Life"] = new engine.RulesElement({
    name: "Embers of Life",
    type: "Power",
    id: "ID_FMP_POWER_1842",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1842",
    categories: ["Embers of Life", "ID_FMP_POWER_1842", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_68", "Wildfire Genasi", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Expedient Sacrifice"] = new engine.RulesElement({
    name: "Expedient Sacrifice",
    type: "Power",
    id: "ID_FMP_POWER_1928",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1928",
    categories: ["Expedient Sacrifice", "ID_FMP_POWER_1928", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Explosive Contagion"] = new engine.RulesElement({
    name: "Explosive Contagion",
    type: "Power",
    id: "ID_FMP_POWER_3411",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3411",
    categories: ["Explosive Contagion", "ID_FMP_POWER_3411", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Eyes of Selûne"] = new engine.RulesElement({
    name: "Eyes of Selûne",
    type: "Power",
    id: "ID_FMP_POWER_3589",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3589",
    categories: ["Eyes of Selûne", "ID_FMP_POWER_3589", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action"]
  });
  byID[te.id] = te;
  
  te = Power["Eyes of the Mage"] = new engine.RulesElement({
    name: "Eyes of the Mage",
    type: "Power",
    id: "ID_FMP_POWER_3383",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3383",
    categories: ["Eyes of the Mage", "ID_FMP_POWER_3383", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Fading Spiral"] = new engine.RulesElement({
    name: "Fading Spiral",
    type: "Power",
    id: "ID_FMP_POWER_1962",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1962",
    categories: ["Fading Spiral", "ID_FMP_POWER_1962", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_138", "Darkwalker", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Fate-Spurned Foe"] = new engine.RulesElement({
    name: "Fate-Spurned Foe",
    type: "Power",
    id: "ID_FMP_POWER_3359",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3359",
    categories: ["Fate-Spurned Foe", "ID_FMP_POWER_3359", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Fear No Elements"] = new engine.RulesElement({
    name: "Fear No Elements",
    type: "Power",
    id: "ID_FMP_POWER_3332",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3332",
    categories: ["Fear No Elements", "ID_FMP_POWER_3332", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Feylights"] = new engine.RulesElement({
    name: "Feylights",
    type: "Power",
    id: "ID_FMP_POWER_3544",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3544",
    categories: ["Feylights", "ID_FMP_POWER_3544", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_88", "Evermeet Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Firepulse"] = new engine.RulesElement({
    name: "Firepulse",
    type: "Power",
    id: "ID_FMP_POWER_1766",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1766",
    categories: ["Firepulse", "ID_FMP_POWER_1766", "ID_FMP_RACIAL_TRAIT_520", "firesoul", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_3", "fire", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return (element.hasCategory("Firepulse") && element.hasCategory("Ability Choice")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Power["Firesoul Combustion"] = new engine.RulesElement({
    name: "Firesoul Combustion",
    type: "Power",
    id: "ID_FMP_POWER_1841",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1841",
    categories: ["Firesoul Combustion", "ID_FMP_POWER_1841", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_68", "Wildfire Genasi", "ID_FMP_CATEGORY_3", "fire", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Firesoul Conflagration"] = new engine.RulesElement({
    name: "Firesoul Conflagration",
    type: "Power",
    id: "ID_FMP_POWER_1843",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1843",
    categories: ["Firesoul Conflagration", "ID_FMP_POWER_1843", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_68", "Wildfire Genasi", "ID_FMP_CATEGORY_3", "fire", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Flame Cyclone"] = new engine.RulesElement({
    name: "Flame Cyclone",
    type: "Power",
    id: "ID_FMP_POWER_3326",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3326",
    categories: ["Flame Cyclone", "ID_FMP_POWER_3326", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Flamewall Strike"] = new engine.RulesElement({
    name: "Flamewall Strike",
    type: "Power",
    id: "ID_FMP_POWER_1787",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1787",
    categories: ["Flamewall Strike", "ID_FMP_POWER_1787", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Fleetness of Mielikki"] = new engine.RulesElement({
    name: "Fleetness of Mielikki",
    type: "Power",
    id: "ID_FMP_POWER_3591",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3591",
    categories: ["Fleetness of Mielikki", "ID_FMP_POWER_3591", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Flickering Venom"] = new engine.RulesElement({
    name: "Flickering Venom",
    type: "Power",
    id: "ID_FMP_POWER_3404",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3404",
    categories: ["Flickering Venom", "ID_FMP_POWER_3404", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Foesnare"] = new engine.RulesElement({
    name: "Foesnare",
    type: "Power",
    id: "ID_FMP_POWER_1721",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1721",
    categories: ["Foesnare", "ID_FMP_POWER_1721", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["For Cormyr!"] = new engine.RulesElement({
    name: "For Cormyr!",
    type: "Power",
    id: "ID_FMP_POWER_1910",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1910",
    categories: ["For Cormyr!", "ID_FMP_POWER_1910", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_85", "Purple Dragon Knight", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Forceful Assault"] = new engine.RulesElement({
    name: "Forceful Assault",
    type: "Power",
    id: "ID_FMP_POWER_3406",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3406",
    categories: ["Forceful Assault", "ID_FMP_POWER_3406", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Forge of Creation"] = new engine.RulesElement({
    name: "Forge of Creation",
    type: "Power",
    id: "ID_FMP_POWER_3574",
    source: "Forgotten Realms Player's Guide,Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3574",
    categories: ["Forge of Creation", "ID_FMP_POWER_3574", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Four Corners Attack"] = new engine.RulesElement({
    name: "Four Corners Attack",
    type: "Power",
    id: "ID_FMP_POWER_1858",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1858",
    categories: ["Four Corners Attack", "ID_FMP_POWER_1858", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_76", "Wandering Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Free the Storm Within"] = new engine.RulesElement({
    name: "Free the Storm Within",
    type: "Power",
    id: "ID_FMP_POWER_3375",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3375",
    categories: ["Free the Storm Within", "ID_FMP_POWER_3375", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "15"]
  });
  byID[te.id] = te;
  
  te = Power["From Out of Nowhere"] = new engine.RulesElement({
    name: "From Out of Nowhere",
    type: "Power",
    id: "ID_FMP_POWER_1899",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1899",
    categories: ["From Out of Nowhere", "ID_FMP_POWER_1899", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_82", "Drow Wanderer", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Frost Backlash"] = new engine.RulesElement({
    name: "Frost Backlash",
    type: "Power",
    id: "ID_FMP_POWER_3328",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3328",
    categories: ["Frost Backlash", "ID_FMP_POWER_3328", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Gain Heart"] = new engine.RulesElement({
    name: "Gain Heart",
    type: "Power",
    id: "ID_FMP_POWER_1902",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1902",
    categories: ["Gain Heart", "ID_FMP_POWER_1902", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_83", "Earthheart Defender", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Ghostly Bane"] = new engine.RulesElement({
    name: "Ghostly Bane",
    type: "Power",
    id: "ID_FMP_POWER_3531",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3531",
    categories: ["Ghostly Bane", "ID_FMP_POWER_3531", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_138", "Darkwalker", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Giant's Might"] = new engine.RulesElement({
    name: "Giant's Might",
    type: "Power",
    id: "ID_FMP_POWER_3384",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3384",
    categories: ["Giant's Might", "ID_FMP_POWER_3384", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Glamor Blade"] = new engine.RulesElement({
    name: "Glamor Blade",
    type: "Power",
    id: "ID_FMP_POWER_3366",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3366",
    categories: ["Glamor Blade", "ID_FMP_POWER_3366", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Glittergold's Gambit"] = new engine.RulesElement({
    name: "Glittergold's Gambit",
    type: "Power",
    id: "ID_FMP_POWER_3593",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3593",
    categories: ["Glittergold's Gambit", "ID_FMP_POWER_3593", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Gond's Craft"] = new engine.RulesElement({
    name: "Gond's Craft",
    type: "Power",
    id: "ID_FMP_POWER_3594",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3594",
    categories: ["Gond's Craft", "ID_FMP_POWER_3594", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Gravity of Moment"] = new engine.RulesElement({
    name: "Gravity of Moment",
    type: "Power",
    id: "ID_FMP_POWER_3505",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3505",
    categories: ["Gravity of Moment", "ID_FMP_POWER_3505", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Greenflame Blade"] = new engine.RulesElement({
    name: "Greenflame Blade",
    type: "Power",
    id: "ID_FMP_POWER_1724",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1724",
    categories: ["Greenflame Blade", "ID_FMP_POWER_1724", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Haunting Reception"] = new engine.RulesElement({
    name: "Haunting Reception",
    type: "Power",
    id: "ID_FMP_POWER_3487",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3487",
    categories: ["Haunting Reception", "ID_FMP_POWER_3487", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Healing Flesh of the Infected"] = new engine.RulesElement({
    name: "Healing Flesh of the Infected",
    type: "Power",
    id: "ID_FMP_POWER_3501",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3501",
    categories: ["Healing Flesh of the Infected", "ID_FMP_POWER_3501", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Hell's Own Blade"] = new engine.RulesElement({
    name: "Hell's Own Blade",
    type: "Power",
    id: "ID_FMP_POWER_3381",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3381",
    categories: ["Hell's Own Blade", "ID_FMP_POWER_3381", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Heritage of Blades"] = new engine.RulesElement({
    name: "Heritage of Blades",
    type: "Power",
    id: "ID_FMP_POWER_1856",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1856",
    categories: ["Heritage of Blades", "ID_FMP_POWER_1856", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_76", "Wandering Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Hideous Tether"] = new engine.RulesElement({
    name: "Hideous Tether",
    type: "Power",
    id: "ID_FMP_POWER_3508",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3508",
    categories: ["Hideous Tether", "ID_FMP_POWER_3508", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Horn of Life"] = new engine.RulesElement({
    name: "Horn of Life",
    type: "Power",
    id: "ID_FMP_POWER_3571",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3571",
    categories: ["Horn of Life", "ID_FMP_POWER_3571", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Horrific Maw Bite"] = new engine.RulesElement({
    name: "Horrific Maw Bite",
    type: "Power",
    id: "ID_FMP_POWER_3477",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3477",
    categories: ["Horrific Maw Bite", "ID_FMP_POWER_3477", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Ice Cage"] = new engine.RulesElement({
    name: "Ice Cage",
    type: "Power",
    id: "ID_FMP_POWER_1778",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1778",
    categories: ["Ice Cage", "ID_FMP_POWER_1778", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Icy Shackles"] = new engine.RulesElement({
    name: "Icy Shackles",
    type: "Power",
    id: "ID_FMP_POWER_3388",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3388",
    categories: ["Icy Shackles", "ID_FMP_POWER_3388", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Ilmater's Martyrdom"] = new engine.RulesElement({
    name: "Ilmater's Martyrdom",
    type: "Power",
    id: "ID_FMP_POWER_3596",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3596",
    categories: ["Ilmater's Martyrdom", "ID_FMP_POWER_3596", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction"]
  });
  byID[te.id] = te;
  
  te = Power["Impenetrable Warding"] = new engine.RulesElement({
    name: "Impenetrable Warding",
    type: "Power",
    id: "ID_FMP_POWER_3369",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3369",
    categories: ["Impenetrable Warding", "ID_FMP_POWER_3369", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Impossible Flurry"] = new engine.RulesElement({
    name: "Impossible Flurry",
    type: "Power",
    id: "ID_FMP_POWER_3514",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3514",
    categories: ["Impossible Flurry", "ID_FMP_POWER_3514", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Inevitable Undercut"] = new engine.RulesElement({
    name: "Inevitable Undercut",
    type: "Power",
    id: "ID_FMP_POWER_1879",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1879",
    categories: ["Inevitable Undercut", "ID_FMP_POWER_1879", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Inferno's Sword"] = new engine.RulesElement({
    name: "Inferno's Sword",
    type: "Power",
    id: "ID_FMP_POWER_3374",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3374",
    categories: ["Inferno's Sword", "ID_FMP_POWER_3374", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Infliction of the Flamemist"] = new engine.RulesElement({
    name: "Infliction of the Flamemist",
    type: "Power",
    id: "ID_FMP_POWER_3498",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3498",
    categories: ["Infliction of the Flamemist", "ID_FMP_POWER_3498", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Invisible Death"] = new engine.RulesElement({
    name: "Invisible Death",
    type: "Power",
    id: "ID_FMP_POWER_3413",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3413",
    categories: ["Invisible Death", "ID_FMP_POWER_3413", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Iron Tooth of Bloodlust"] = new engine.RulesElement({
    name: "Iron Tooth of Bloodlust",
    type: "Power",
    id: "ID_FMP_POWER_3502",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3502",
    categories: ["Iron Tooth of Bloodlust", "ID_FMP_POWER_3502", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Ironskin"] = new engine.RulesElement({
    name: "Ironskin",
    type: "Power",
    id: "ID_FMP_POWER_3378",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3378",
    categories: ["Ironskin", "ID_FMP_POWER_3378", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Isolating Slam"] = new engine.RulesElement({
    name: "Isolating Slam",
    type: "Power",
    id: "ID_FMP_POWER_1728",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1728",
    categories: ["Isolating Slam", "ID_FMP_POWER_1728", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Keelhaul"] = new engine.RulesElement({
    name: "Keelhaul",
    type: "Power",
    id: "ID_FMP_POWER_1827",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1827",
    categories: ["Keelhaul", "ID_FMP_POWER_1827", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_61", "Sword Coast Corsair", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Kelemvor's Circle"] = new engine.RulesElement({
    name: "Kelemvor's Circle",
    type: "Power",
    id: "ID_FMP_POWER_3535",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3535",
    categories: ["Kelemvor's Circle", "ID_FMP_POWER_3535", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_81", "Doomguide", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Kelemvor's Judgment"] = new engine.RulesElement({
    name: "Kelemvor's Judgment",
    type: "Power",
    id: "ID_FMP_POWER_3598",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3598",
    categories: ["Kelemvor's Judgment", "ID_FMP_POWER_3598", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Kelemvor's Sword"] = new engine.RulesElement({
    name: "Kelemvor's Sword",
    type: "Power",
    id: "ID_FMP_POWER_1898",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1898",
    categories: ["Kelemvor's Sword", "ID_FMP_POWER_1898", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_81", "Doomguide", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_2", "Radiant", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Kimmeriel's Smile"] = new engine.RulesElement({
    name: "Kimmeriel's Smile",
    type: "Power",
    id: "ID_FMP_POWER_3409",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3409",
    categories: ["Kimmeriel's Smile", "ID_FMP_POWER_3409", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Lance of Dawn"] = new engine.RulesElement({
    name: "Lance of Dawn",
    type: "Power",
    id: "ID_FMP_POWER_3551",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3551",
    categories: ["Lance of Dawn", "ID_FMP_POWER_3551", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_89", "Morninglord", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Liberator's Blow"] = new engine.RulesElement({
    name: "Liberator's Blow",
    type: "Power",
    id: "ID_FMP_POWER_3562",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3562",
    categories: ["Liberator's Blow", "ID_FMP_POWER_3562", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_145", "Steelsky Liberator", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Clash"] = new engine.RulesElement({
    name: "Lightning Clash",
    type: "Power",
    id: "ID_FMP_POWER_1711",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1711",
    categories: ["Lightning Clash", "ID_FMP_POWER_1711", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Clutch"] = new engine.RulesElement({
    name: "Lightning Clutch",
    type: "Power",
    id: "ID_FMP_POWER_3566",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3566",
    categories: ["Lightning Clutch", "ID_FMP_POWER_3566", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_74", "Anarch of Shyr", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Lure"] = new engine.RulesElement({
    name: "Lightning Lure",
    type: "Power",
    id: "ID_FMP_POWER_2078",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2078",
    categories: ["Lightning Lure", "ID_FMP_POWER_2078", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Ripple"] = new engine.RulesElement({
    name: "Lightning Ripple",
    type: "Power",
    id: "ID_FMP_POWER_1838",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1838",
    categories: ["Lightning Ripple", "ID_FMP_POWER_1838", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_66", "War Wizard of Cormyr", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Lightning Rod"] = new engine.RulesElement({
    name: "Lightning Rod",
    type: "Power",
    id: "ID_FMP_POWER_3382",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3382",
    categories: ["Lightning Rod", "ID_FMP_POWER_3382", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Lines in Burning Sand"] = new engine.RulesElement({
    name: "Lines in Burning Sand",
    type: "Power",
    id: "ID_FMP_POWER_3496",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3496",
    categories: ["Lines in Burning Sand", "ID_FMP_POWER_3496", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Lingering Lightning"] = new engine.RulesElement({
    name: "Lingering Lightning",
    type: "Power",
    id: "ID_FMP_POWER_3343",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3343",
    categories: ["Lingering Lightning", "ID_FMP_POWER_3343", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Maelstrom Blade"] = new engine.RulesElement({
    name: "Maelstrom Blade",
    type: "Power",
    id: "ID_FMP_POWER_3391",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3391",
    categories: ["Maelstrom Blade", "ID_FMP_POWER_3391", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Malignant Growth"] = new engine.RulesElement({
    name: "Malignant Growth",
    type: "Power",
    id: "ID_FMP_POWER_3510",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3510",
    categories: ["Malignant Growth", "ID_FMP_POWER_3510", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Mask of Midnight"] = new engine.RulesElement({
    name: "Mask of Midnight",
    type: "Power",
    id: "ID_FMP_POWER_3503",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3503",
    categories: ["Mask of Midnight", "ID_FMP_POWER_3503", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Metamorphosis of Spellflame"] = new engine.RulesElement({
    name: "Metamorphosis of Spellflame",
    type: "Power",
    id: "ID_FMP_POWER_3516",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3516",
    categories: ["Metamorphosis of Spellflame", "ID_FMP_POWER_3516", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Meteor Strike"] = new engine.RulesElement({
    name: "Meteor Strike",
    type: "Power",
    id: "ID_FMP_POWER_1780",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1780",
    categories: ["Meteor Strike", "ID_FMP_POWER_1780", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Moonfire"] = new engine.RulesElement({
    name: "Moonfire",
    type: "Power",
    id: "ID_FMP_POWER_3554",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3554",
    categories: ["Moonfire", "ID_FMP_POWER_3554", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_143", "Silverstar", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Moonflower Inspiration"] = new engine.RulesElement({
    name: "Moonflower Inspiration",
    type: "Power",
    id: "ID_FMP_POWER_1964",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1964",
    categories: ["Moonflower Inspiration", "ID_FMP_POWER_1964", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_88", "Evermeet Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Moonglow"] = new engine.RulesElement({
    name: "Moonglow",
    type: "Power",
    id: "ID_FMP_POWER_3553",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3553",
    categories: ["Moonglow", "ID_FMP_POWER_3553", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_143", "Silverstar", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Mythal Recovery"] = new engine.RulesElement({
    name: "Mythal Recovery",
    type: "Power",
    id: "ID_FMP_POWER_3333",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3333",
    categories: ["Mythal Recovery", "ID_FMP_POWER_3333", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Mythal Spark"] = new engine.RulesElement({
    name: "Mythal Spark",
    type: "Power",
    id: "ID_FMP_POWER_1913",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1913",
    categories: ["Mythal Spark", "ID_FMP_POWER_1913", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_86", "Spellguard Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Mythal Splinter"] = new engine.RulesElement({
    name: "Mythal Splinter",
    type: "Power",
    id: "ID_FMP_POWER_1912",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1912",
    categories: ["Mythal Splinter", "ID_FMP_POWER_1912", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_86", "Spellguard Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Nerves of Steel"] = new engine.RulesElement({
    name: "Nerves of Steel",
    type: "Power",
    id: "ID_FMP_POWER_1826",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1826",
    categories: ["Nerves of Steel", "ID_FMP_POWER_1826", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_61", "Sword Coast Corsair", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Obliterating Blaze"] = new engine.RulesElement({
    name: "Obliterating Blaze",
    type: "Power",
    id: "ID_FMP_POWER_3395",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3395",
    categories: ["Obliterating Blaze", "ID_FMP_POWER_3395", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Oghma's Recall"] = new engine.RulesElement({
    name: "Oghma's Recall",
    type: "Power",
    id: "ID_FMP_POWER_3603",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3603",
    categories: ["Oghma's Recall", "ID_FMP_POWER_3603", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["One Final Sacrifice"] = new engine.RulesElement({
    name: "One Final Sacrifice",
    type: "Power",
    id: "ID_FMP_POWER_1882",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1882",
    categories: ["One Final Sacrifice", "ID_FMP_POWER_1882", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "29"]
  });
  byID[te.id] = te;
  
  te = Power["One-Way Barrier"] = new engine.RulesElement({
    name: "One-Way Barrier",
    type: "Power",
    id: "ID_FMP_POWER_1839",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1839",
    categories: ["One-Way Barrier", "ID_FMP_POWER_1839", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_66", "War Wizard of Cormyr", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_8", "force", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Passionate Betrayal"] = new engine.RulesElement({
    name: "Passionate Betrayal",
    type: "Power",
    id: "ID_FMP_POWER_1890",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1890",
    categories: ["Passionate Betrayal", "ID_FMP_POWER_1890", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Plague Lash"] = new engine.RulesElement({
    name: "Plague Lash",
    type: "Power",
    id: "ID_FMP_POWER_3478",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3478",
    categories: ["Plague Lash", "ID_FMP_POWER_3478", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Plague of Rooted Majesty"] = new engine.RulesElement({
    name: "Plague of Rooted Majesty",
    type: "Power",
    id: "ID_FMP_POWER_3482",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3482",
    categories: ["Plague of Rooted Majesty", "ID_FMP_POWER_3482", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Plaguefire Body"] = new engine.RulesElement({
    name: "Plaguefire Body",
    type: "Power",
    id: "ID_FMP_POWER_3488",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3488",
    categories: ["Plaguefire Body", "ID_FMP_POWER_3488", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Power of Amaunator"] = new engine.RulesElement({
    name: "Power of Amaunator",
    type: "Power",
    id: "ID_FMP_POWER_3608",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3608",
    categories: ["Power of Amaunator", "ID_FMP_POWER_3608", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Promise of Storm"] = new engine.RulesElement({
    name: "Promise of Storm",
    type: "Power",
    id: "ID_FMP_POWER_1769",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1769",
    categories: ["Promise of Storm", "ID_FMP_POWER_1769", "ID_FMP_RACIAL_TRAIT_552", "stormsoul", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Pure Glow"] = new engine.RulesElement({
    name: "Pure Glow",
    type: "Power",
    id: "ID_FMP_POWER_3549",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3549",
    categories: ["Pure Glow", "ID_FMP_POWER_3549", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_89", "Morninglord", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Quicksilver Blade"] = new engine.RulesElement({
    name: "Quicksilver Blade",
    type: "Power",
    id: "ID_FMP_POWER_4789",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4789",
    categories: ["Quicksilver Blade", "ID_FMP_POWER_4789", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Rabid Chain of Steel"] = new engine.RulesElement({
    name: "Rabid Chain of Steel",
    type: "Power",
    id: "ID_FMP_POWER_3499",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3499",
    categories: ["Rabid Chain of Steel", "ID_FMP_POWER_3499", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "15"]
  });
  byID[te.id] = te;
  
  te = Power["Rallying Attack"] = new engine.RulesElement({
    name: "Rallying Attack",
    type: "Power",
    id: "ID_FMP_POWER_1968",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1968",
    categories: ["Rallying Attack", "ID_FMP_POWER_1968", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_85", "Purple Dragon Knight", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Rallying Cry"] = new engine.RulesElement({
    name: "Rallying Cry",
    type: "Power",
    id: "ID_FMP_POWER_1909",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1909",
    categories: ["Rallying Cry", "ID_FMP_POWER_1909", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_85", "Purple Dragon Knight", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Reach of the Doomed"] = new engine.RulesElement({
    name: "Reach of the Doomed",
    type: "Power",
    id: "ID_FMP_POWER_3489",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3489",
    categories: ["Reach of the Doomed", "ID_FMP_POWER_3489", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_14", "Poison", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Renewing Dawn"] = new engine.RulesElement({
    name: "Renewing Dawn",
    type: "Power",
    id: "ID_FMP_POWER_3570",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3570",
    categories: ["Renewing Dawn", "ID_FMP_POWER_3570", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_FMP_CATEGORY_9", "Healing", "ID_FMP_CATEGORY_2", "Radiant", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Righteous Rage of Tempus"] = new engine.RulesElement({
    name: "Righteous Rage of Tempus",
    type: "Power",
    id: "ID_FMP_POWER_3609",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3609",
    categories: ["Righteous Rage of Tempus", "ID_FMP_POWER_3609", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Ring of Pain"] = new engine.RulesElement({
    name: "Ring of Pain",
    type: "Power",
    id: "ID_FMP_POWER_1921",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1921",
    categories: ["Ring of Pain", "ID_FMP_POWER_1921", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Ring of Torment"] = new engine.RulesElement({
    name: "Ring of Torment",
    type: "Power",
    id: "ID_FMP_POWER_3414",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3414",
    categories: ["Ring of Torment", "ID_FMP_POWER_3414", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Rising Sun"] = new engine.RulesElement({
    name: "Rising Sun",
    type: "Power",
    id: "ID_FMP_POWER_3550",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3550",
    categories: ["Rising Sun", "ID_FMP_POWER_3550", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_89", "Morninglord", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Robed in Shadow"] = new engine.RulesElement({
    name: "Robed in Shadow",
    type: "Power",
    id: "ID_FMP_POWER_1837",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1837",
    categories: ["Robed in Shadow", "ID_FMP_POWER_1837", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_67", "Ghost of Eventide", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Ruinous Resistance"] = new engine.RulesElement({
    name: "Ruinous Resistance",
    type: "Power",
    id: "ID_FMP_POWER_3410",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3410",
    categories: ["Ruinous Resistance", "ID_FMP_POWER_3410", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Scar of Blue Wings"] = new engine.RulesElement({
    name: "Scar of Blue Wings",
    type: "Power",
    id: "ID_FMP_POWER_3494",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3494",
    categories: ["Scar of Blue Wings", "ID_FMP_POWER_3494", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Scar-Carving Blade"] = new engine.RulesElement({
    name: "Scar-Carving Blade",
    type: "Power",
    id: "ID_FMP_POWER_3483",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3483",
    categories: ["Scar-Carving Blade", "ID_FMP_POWER_3483", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Seed of Fire"] = new engine.RulesElement({
    name: "Seed of Fire",
    type: "Power",
    id: "ID_FMP_POWER_3372",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3372",
    categories: ["Seed of Fire", "ID_FMP_POWER_3372", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Shackled Warding"] = new engine.RulesElement({
    name: "Shackled Warding",
    type: "Power",
    id: "ID_FMP_POWER_3385",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3385",
    categories: ["Shackled Warding", "ID_FMP_POWER_3385", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Shadow Hand Attack"] = new engine.RulesElement({
    name: "Shadow Hand Attack",
    type: "Power",
    id: "ID_FMP_POWER_1835",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1835",
    categories: ["Shadow Hand Attack", "ID_FMP_POWER_1835", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_67", "Ghost of Eventide", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Shadowed Psyche"] = new engine.RulesElement({
    name: "Shadowed Psyche",
    type: "Power",
    id: "ID_FMP_POWER_1849",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1849",
    categories: ["Shadowed Psyche", "ID_FMP_POWER_1849", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_71", "Umbriri", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_6", "Charm", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_38", "Shadow", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Shadowslip"] = new engine.RulesElement({
    name: "Shadowslip",
    type: "Power",
    id: "ID_FMP_POWER_1924",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1924",
    categories: ["Shadowslip", "ID_FMP_POWER_1924", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Sheela Peryroyl's Gift"] = new engine.RulesElement({
    name: "Sheela Peryroyl's Gift",
    type: "Power",
    id: "ID_FMP_POWER_3610",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3610",
    categories: ["Sheela Peryroyl's Gift", "ID_FMP_POWER_3610", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Shifting Wave"] = new engine.RulesElement({
    name: "Shifting Wave",
    type: "Power",
    id: "ID_FMP_POWER_3513",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3513",
    categories: ["Shifting Wave", "ID_FMP_POWER_3513", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "27"]
  });
  byID[te.id] = te;
  
  te = Power["Shyran Cataclysm"] = new engine.RulesElement({
    name: "Shyran Cataclysm",
    type: "Power",
    id: "ID_FMP_POWER_3568",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3568",
    categories: ["Shyran Cataclysm", "ID_FMP_POWER_3568", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_74", "Anarch of Shyr", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Silver Fire"] = new engine.RulesElement({
    name: "Silver Fire",
    type: "Power",
    id: "ID_FMP_POWER_1914",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1914",
    categories: ["Silver Fire", "ID_FMP_POWER_1914", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_87", "Simbarch of Aglarond", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Silversteel Veil"] = new engine.RulesElement({
    name: "Silversteel Veil",
    type: "Power",
    id: "ID_FMP_POWER_1703",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1703",
    categories: ["Silversteel Veil", "ID_FMP_POWER_1703", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Simbul's Tempest"] = new engine.RulesElement({
    name: "Simbul's Tempest",
    type: "Power",
    id: "ID_FMP_POWER_3558",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3558",
    categories: ["Simbul's Tempest", "ID_FMP_POWER_3558", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_87", "Simbarch of Aglarond", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Siren Voice"] = new engine.RulesElement({
    name: "Siren Voice",
    type: "Power",
    id: "ID_FMP_POWER_3546",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3546",
    categories: ["Siren Voice", "ID_FMP_POWER_3546", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_141", "Heartwarder", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Sloth Strike"] = new engine.RulesElement({
    name: "Sloth Strike",
    type: "Power",
    id: "ID_FMP_POWER_1737",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1737",
    categories: ["Sloth Strike", "ID_FMP_POWER_1737", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Spellcurse"] = new engine.RulesElement({
    name: "Spellcurse",
    type: "Power",
    id: "ID_FMP_POWER_3504",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3504",
    categories: ["Spellcurse", "ID_FMP_POWER_3504", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "19"]
  });
  byID[te.id] = te;
  
  te = Power["Spelleater"] = new engine.RulesElement({
    name: "Spelleater",
    type: "Power",
    id: "ID_FMP_POWER_3481",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3481",
    categories: ["Spelleater", "ID_FMP_POWER_3481", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Spellfire Healing"] = new engine.RulesElement({
    name: "Spellfire Healing",
    type: "Power",
    id: "ID_FMP_POWER_3559",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3559",
    categories: ["Spellfire Healing", "ID_FMP_POWER_3559", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_62", "Spellscarred Savant", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Spellguard Force Lash"] = new engine.RulesElement({
    name: "Spellguard Force Lash",
    type: "Power",
    id: "ID_FMP_POWER_1911",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1911",
    categories: ["Spellguard Force Lash", "ID_FMP_POWER_1911", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_86", "Spellguard Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Spellmirror"] = new engine.RulesElement({
    name: "Spellmirror",
    type: "Power",
    id: "ID_FMP_POWER_3480",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3480",
    categories: ["Spellmirror", "ID_FMP_POWER_3480", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spellmother's Embrace"] = new engine.RulesElement({
    name: "Spellmother's Embrace",
    type: "Power",
    id: "ID_FMP_POWER_3497",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3497",
    categories: ["Spellmother's Embrace", "ID_FMP_POWER_3497", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_15", "Polymorph", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "13"]
  });
  byID[te.id] = te;
  
  te = Power["Spellplague Guardians"] = new engine.RulesElement({
    name: "Spellplague Guardians",
    type: "Power",
    id: "ID_FMP_POWER_3507",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3507",
    categories: ["Spellplague Guardians", "ID_FMP_POWER_3507", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_26", "Conjuration", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "22"]
  });
  byID[te.id] = te;
  
  te = Power["Spider Scuttle"] = new engine.RulesElement({
    name: "Spider Scuttle",
    type: "Power",
    id: "ID_FMP_POWER_1923",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1923",
    categories: ["Spider Scuttle", "ID_FMP_POWER_1923", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "2"]
  });
  byID[te.id] = te;
  
  te = Power["Spidersilk Slash"] = new engine.RulesElement({
    name: "Spidersilk Slash",
    type: "Power",
    id: "ID_FMP_POWER_1740",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1740",
    categories: ["Spidersilk Slash", "ID_FMP_POWER_1740", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Spikes of Agony"] = new engine.RulesElement({
    name: "Spikes of Agony",
    type: "Power",
    id: "ID_FMP_POWER_3363",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3363",
    categories: ["Spikes of Agony", "ID_FMP_POWER_3363", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Spiteful Glamor"] = new engine.RulesElement({
    name: "Spiteful Glamor",
    type: "Power",
    id: "ID_FMP_POWER_3403",
    source: "Forgotten Realms Player's Guide,Adventurer's Vault 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3403",
    categories: ["Spiteful Glamor", "ID_FMP_POWER_3403", "ID_FMP_CLASS_FEATURE_804", "Dark Pact", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Spread the Corrosion"] = new engine.RulesElement({
    name: "Spread the Corrosion",
    type: "Power",
    id: "ID_FMP_POWER_3415",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3415",
    categories: ["Spread the Corrosion", "ID_FMP_POWER_3415", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Stance of Chaos"] = new engine.RulesElement({
    name: "Stance of Chaos",
    type: "Power",
    id: "ID_FMP_POWER_3567",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3567",
    categories: ["Stance of Chaos", "ID_FMP_POWER_3567", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_74", "Anarch of Shyr", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_28", "Stance", "ID_FMP_CATEGORY_24", "Weapon", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Steelsky Stance"] = new engine.RulesElement({
    name: "Steelsky Stance",
    type: "Power",
    id: "ID_FMP_POWER_3563",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3563",
    categories: ["Steelsky Stance", "ID_FMP_POWER_3563", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_145", "Steelsky Liberator", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_28", "Stance", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Storm of Victory"] = new engine.RulesElement({
    name: "Storm of Victory",
    type: "Power",
    id: "ID_FMP_POWER_1840",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1840",
    categories: ["Storm of Victory", "ID_FMP_POWER_1840", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_66", "War Wizard of Cormyr", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_20", "Thunder", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Strength in Darkness"] = new engine.RulesElement({
    name: "Strength in Darkness",
    type: "Power",
    id: "ID_FMP_POWER_1900",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1900",
    categories: ["Strength in Darkness", "ID_FMP_POWER_1900", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_82", "Drow Wanderer", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Strike Terror"] = new engine.RulesElement({
    name: "Strike Terror",
    type: "Power",
    id: "ID_FMP_POWER_1825",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1825",
    categories: ["Strike Terror", "ID_FMP_POWER_1825", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_61", "Sword Coast Corsair", "ID_FMP_CATEGORY_7", "Fear", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Submission of the Earth"] = new engine.RulesElement({
    name: "Submission of the Earth",
    type: "Power",
    id: "ID_FMP_POWER_3493",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3493",
    categories: ["Submission of the Earth", "ID_FMP_POWER_3493", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "9"]
  });
  byID[te.id] = te;
  
  te = Power["Sudden Escape"] = new engine.RulesElement({
    name: "Sudden Escape",
    type: "Power",
    id: "ID_FMP_POWER_3379",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3379",
    categories: ["Sudden Escape", "ID_FMP_POWER_3379", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "16"]
  });
  byID[te.id] = te;
  
  te = Power["Sune's Censure"] = new engine.RulesElement({
    name: "Sune's Censure",
    type: "Power",
    id: "ID_FMP_POWER_3577",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3577",
    categories: ["Sune's Censure", "ID_FMP_POWER_3577", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Sune's Kiss"] = new engine.RulesElement({
    name: "Sune's Kiss",
    type: "Power",
    id: "ID_FMP_POWER_3548",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3548",
    categories: ["Sune's Kiss", "ID_FMP_POWER_3548", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_141", "Heartwarder", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Sune's Shield"] = new engine.RulesElement({
    name: "Sune's Shield",
    type: "Power",
    id: "ID_FMP_POWER_3547",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3547",
    categories: ["Sune's Shield", "ID_FMP_POWER_3547", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_141", "Heartwarder", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Sune's Touch"] = new engine.RulesElement({
    name: "Sune's Touch",
    type: "Power",
    id: "ID_FMP_POWER_3611",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3611",
    categories: ["Sune's Touch", "ID_FMP_POWER_3611", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Supreme Knowledge"] = new engine.RulesElement({
    name: "Supreme Knowledge",
    type: "Power",
    id: "ID_FMP_POWER_3575",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3575",
    categories: ["Supreme Knowledge", "ID_FMP_POWER_3575", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Swiftcurrent"] = new engine.RulesElement({
    name: "Swiftcurrent",
    type: "Power",
    id: "ID_FMP_POWER_1770",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1770",
    categories: ["Swiftcurrent", "ID_FMP_POWER_1770", "ID_FMP_RACIAL_TRAIT_553", "watersoul", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Sword Burst"] = new engine.RulesElement({
    name: "Sword Burst",
    type: "Power",
    id: "ID_FMP_POWER_1710",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1710",
    categories: ["Sword Burst", "ID_FMP_POWER_1710", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Swordmage Warding"] = new engine.RulesElement({
    name: "Swordmage Warding",
    type: "Power",
    id: "ID_FMP_POWER_7691",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7691",
    categories: ["Swordmage Warding", "ID_FMP_POWER_7691", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Swordshock"] = new engine.RulesElement({
    name: "Swordshock",
    type: "Power",
    id: "ID_FMP_POWER_1736",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1736",
    categories: ["Swordshock", "ID_FMP_POWER_1736", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_11", "Lightning", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Synostodweomer"] = new engine.RulesElement({
    name: "Synostodweomer",
    type: "Power",
    id: "ID_FMP_POWER_3556",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3556",
    categories: ["Synostodweomer", "ID_FMP_POWER_3556", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_87", "Simbarch of Aglarond", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Tears of Fire and Blood"] = new engine.RulesElement({
    name: "Tears of Fire and Blood",
    type: "Power",
    id: "ID_FMP_POWER_3495",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3495",
    categories: ["Tears of Fire and Blood", "ID_FMP_POWER_3495", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Tears of Selûne"] = new engine.RulesElement({
    name: "Tears of Selûne",
    type: "Power",
    id: "ID_FMP_POWER_3552",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3552",
    categories: ["Tears of Selûne", "ID_FMP_POWER_3552", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_143", "Silverstar", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Tempest Burst"] = new engine.RulesElement({
    name: "Tempest Burst",
    type: "Power",
    id: "ID_FMP_POWER_1905",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1905",
    categories: ["Tempest Burst", "ID_FMP_POWER_1905", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_84", "Elemental Tempest", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_8", "force", "ID_FMP_CATEGORY_11", "Lightning", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Tempus's Glare"] = new engine.RulesElement({
    name: "Tempus's Glare",
    type: "Power",
    id: "ID_FMP_POWER_3578",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3578",
    categories: ["Tempus's Glare", "ID_FMP_POWER_3578", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Terrible Imposition"] = new engine.RulesElement({
    name: "Terrible Imposition",
    type: "Power",
    id: "ID_FMP_POWER_3486",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3486",
    categories: ["Terrible Imposition", "ID_FMP_POWER_3486", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Thunder Riposte"] = new engine.RulesElement({
    name: "Thunder Riposte",
    type: "Power",
    id: "ID_FMP_POWER_3386",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3386",
    categories: ["Thunder Riposte", "ID_FMP_POWER_3386", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Thundering Heart"] = new engine.RulesElement({
    name: "Thundering Heart",
    type: "Power",
    id: "ID_FMP_POWER_3390",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3390",
    categories: ["Thundering Heart", "ID_FMP_POWER_3390", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_20", "Thunder", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "25"]
  });
  byID[te.id] = te;
  
  te = Power["Tongues of the Earth"] = new engine.RulesElement({
    name: "Tongues of the Earth",
    type: "Power",
    id: "ID_FMP_POWER_3509",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3509",
    categories: ["Tongues of the Earth", "ID_FMP_POWER_3509", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_5", "Acid", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "23"]
  });
  byID[te.id] = te;
  
  te = Power["Torm's Justice"] = new engine.RulesElement({
    name: "Torm's Justice",
    type: "Power",
    id: "ID_FMP_POWER_3612",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3612",
    categories: ["Torm's Justice", "ID_FMP_POWER_3612", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Transposing Lunge"] = new engine.RulesElement({
    name: "Transposing Lunge",
    type: "Power",
    id: "ID_FMP_POWER_1779",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1779",
    categories: ["Transposing Lunge", "ID_FMP_POWER_1779", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["True Death"] = new engine.RulesElement({
    name: "True Death",
    type: "Power",
    id: "ID_FMP_POWER_3573",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3573",
    categories: ["True Death", "ID_FMP_POWER_3573", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Tumbling Gale"] = new engine.RulesElement({
    name: "Tumbling Gale",
    type: "Power",
    id: "ID_FMP_POWER_1844",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1844",
    categories: ["Tumbling Gale", "ID_FMP_POWER_1844", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_69", "Whirlwind Genasi", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "11"]
  });
  byID[te.id] = te;
  
  te = Power["Twilight Escape"] = new engine.RulesElement({
    name: "Twilight Escape",
    type: "Power",
    id: "ID_FMP_POWER_1836",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1836",
    categories: ["Twilight Escape", "ID_FMP_POWER_1836", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_67", "Ghost of Eventide", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_IMMEDIATE_REACTION", "Immediate Reaction", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Twilight of the Soul"] = new engine.RulesElement({
    name: "Twilight of the Soul",
    type: "Power",
    id: "ID_FMP_POWER_1883",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1883",
    categories: ["Twilight of the Soul", "ID_FMP_POWER_1883", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_22", "Reliable", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "5"]
  });
  byID[te.id] = te;
  
  te = Power["Tymora's Coin"] = new engine.RulesElement({
    name: "Tymora's Coin",
    type: "Power",
    id: "ID_FMP_POWER_3613",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3613",
    categories: ["Tymora's Coin", "ID_FMP_POWER_3613", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action"]
  });
  byID[te.id] = te;
  
  te = Power["Unholy Glee"] = new engine.RulesElement({
    name: "Unholy Glee",
    type: "Power",
    id: "ID_FMP_POWER_1876",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1876",
    categories: ["Unholy Glee", "ID_FMP_POWER_1876", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Unrestricted Movement"] = new engine.RulesElement({
    name: "Unrestricted Movement",
    type: "Power",
    id: "ID_FMP_POWER_1823",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1823",
    categories: ["Unrestricted Movement", "ID_FMP_POWER_1823", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_63", "High Forest Scout", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Unsullied Heart"] = new engine.RulesElement({
    name: "Unsullied Heart",
    type: "Power",
    id: "ID_FMP_POWER_3536",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3536",
    categories: ["Unsullied Heart", "ID_FMP_POWER_3536", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_81", "Doomguide", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Upsetting Onslaught"] = new engine.RulesElement({
    name: "Upsetting Onslaught",
    type: "Power",
    id: "ID_FMP_POWER_3405",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3405",
    categories: ["Upsetting Onslaught", "ID_FMP_POWER_3405", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Venomous Bloodfang"] = new engine.RulesElement({
    name: "Venomous Bloodfang",
    type: "Power",
    id: "ID_FMP_POWER_3491",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3491",
    categories: ["Venomous Bloodfang", "ID_FMP_POWER_3491", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PSEUDO_CLASS_216", "Spellscarred", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "7"]
  });
  byID[te.id] = te;
  
  te = Power["Vorpal Doom"] = new engine.RulesElement({
    name: "Vorpal Doom",
    type: "Power",
    id: "ID_FMP_POWER_3396",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3396",
    categories: ["Vorpal Doom", "ID_FMP_POWER_3396", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_22", "Reliable", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "29"]
  });
  byID[te.id] = te;
  
  te = Power["Waukeen's Silver Tongue"] = new engine.RulesElement({
    name: "Waukeen's Silver Tongue",
    type: "Power",
    id: "ID_FMP_POWER_3614",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3614",
    categories: ["Waukeen's Silver Tongue", "ID_FMP_POWER_3614", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt"]
  });
  byID[te.id] = te;
  
  te = Power["Waxing Fortune"] = new engine.RulesElement({
    name: "Waxing Fortune",
    type: "Power",
    id: "ID_FMP_POWER_3576",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3576",
    categories: ["Waxing Fortune", "ID_FMP_POWER_3576", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_EPIC_DESTINY_146", "Chosen", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "26"]
  });
  byID[te.id] = te;
  
  te = Power["Whirling Blade"] = new engine.RulesElement({
    name: "Whirling Blade",
    type: "Power",
    id: "ID_FMP_POWER_3329",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3329",
    categories: ["Whirling Blade", "ID_FMP_POWER_3329", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Windsoul Whirlwind"] = new engine.RulesElement({
    name: "Windsoul Whirlwind",
    type: "Power",
    id: "ID_FMP_POWER_1846",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1846",
    categories: ["Windsoul Whirlwind", "ID_FMP_POWER_1846", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_69", "Whirlwind Genasi", "ID_FMP_CATEGORY_26", "Conjuration", "ID_FMP_CATEGORY_39", "Zone", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Windsoul Zephyr"] = new engine.RulesElement({
    name: "Windsoul Zephyr",
    type: "Power",
    id: "ID_FMP_POWER_1845",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1845",
    categories: ["Windsoul Zephyr", "ID_FMP_POWER_1845", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_PARAGON_PATH_69", "Whirlwind Genasi", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "12"]
  });
  byID[te.id] = te;
  
  te = Power["Windwalker"] = new engine.RulesElement({
    name: "Windwalker",
    type: "Power",
    id: "ID_FMP_POWER_1828",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1828",
    categories: ["Windwalker", "ID_FMP_POWER_1828", "ID_FMP_RACIAL_TRAIT_554", "windsoul", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action"]
  });
  byID[te.id] = te;
  
  te = Power["Wraithform Blast"] = new engine.RulesElement({
    name: "Wraithform Blast",
    type: "Power",
    id: "ID_FMP_POWER_1967",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1967",
    categories: ["Wraithform Blast", "ID_FMP_POWER_1967", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_PARAGON_PATH_138", "Darkwalker", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "20"]
  });
  byID[te.id] = te;
  
  te = Power["Your Delectable Pain"] = new engine.RulesElement({
    name: "Your Delectable Pain",
    type: "Power",
    id: "ID_FMP_POWER_1892",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1892",
    categories: ["Your Delectable Pain", "ID_FMP_POWER_1892", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "17"]
  });
  byID[te.id] = te;
  
  te = Power["Your Delicious Weakness"] = new engine.RulesElement({
    name: "Your Delicious Weakness",
    type: "Power",
    id: "ID_FMP_POWER_1886",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1886",
    categories: ["Your Delicious Weakness", "ID_FMP_POWER_1886", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_ENCOUNTER", "encounter", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "3"]
  });
  byID[te.id] = te;
  
  te = Power["Your Glorious Sacrifice"] = new engine.RulesElement({
    name: "Your Glorious Sacrifice",
    type: "Power",
    id: "ID_FMP_POWER_1881",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1881",
    categories: ["Your Glorious Sacrifice", "ID_FMP_POWER_1881", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_DAILY", "daily", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_12", "Necrotic", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss", "1"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
